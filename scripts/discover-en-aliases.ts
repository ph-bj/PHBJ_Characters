/**
 * Discovery: for each character with an EN chip deficit, propose the English
 * name forms actually used in the paired translation.
 *
 * Run:  npx tsx scripts/discover-en-aliases.ts [--char char-55] [--min 3]
 *
 * Method: collect the English paragraphs where the character is chipped in ZH
 * but NOT in EN ("gap paragraphs"). Extract capitalized word n-grams (1..3) and
 * score them by enrichment: how often they occur in this character's gap
 * paragraphs vs. their frequency across the whole English corpus. Candidates
 * already present in the token map are excluded.
 */
import { buildCharacterTokenMap, segmentText } from "../src/nameChips";
import { characters } from "../src/data";
import type { Character } from "../src/types";
import { loadCorpus } from "./lib-corpus";

const args = process.argv.slice(2);
const charArg = args.includes("--char") ? args[args.indexOf("--char") + 1] : null;
const minCount = args.includes("--min") ? Number(args[args.indexOf("--min") + 1]) : 2;

const chapterIds = Array.from({ length: 60 }, (_, i) => i + 1);

async function loadChapters() {
  const corpus = await loadCorpus();
  const zhById: Record<number, string[]> = {};
  const enById: Record<number, string[]> = {};
  for (const id of chapterIds) {
    zhById[id] = corpus[id].zh;
    enById[id] = corpus[id].en;
  }
  return { zhById, enById };
}

function chipIds(text: string, tokenMap: [string, Character][]): Set<string> {
  const s = new Set<string>();
  for (const seg of segmentText(text, tokenMap)) {
    if (typeof seg !== "string") s.add(seg.char.id);
  }
  return s;
}

const STOP = new Set([
  "The","A","An","And","But","He","She","They","It","I","You","We","His","Her",
  "Their","Its","My","Your","Our","This","That","These","Those","There","Then",
  "When","Where","What","Who","Why","How","If","As","At","In","On","Of","To",
  "For","From","With","By","So","Now","Yet","Or","Nor","Not","No","Yes","Well",
  "Even","Just","Only","Still","After","Before","Since","Though","Although",
  "While","Upon","Having","Seeing","Hearing","Knowing","One","Two","Three",
  "Chapter","Word","Let","Do","Did","Does","Is","Was","Were","Be","Been","Am",
  "Are","Have","Has","Had","Will","Would","Shall","Should","Can","Could","May",
  "Might","Must","Come","Came","Go","Went","Said","Say","Says","Look","Looking",
  "Both","Each","Every","All","Some","Any","Such","Here","Once","Because",
  "Indeed","Perhaps","Truly","Thus","Hence","Meanwhile","However","Suddenly",
  "Finally","Later","Soon","Today","Tomorrow","Yesterday","Next","Last",
]);

function ngrams(text: string): string[] {
  const out: string[] = [];
  // Capitalized runs, e.g. "Third Master Pan", "Master Hua", "Wu Dashan"
  const re = /\b[A-Z][A-Za-z'’-]*(?:\s+(?:the|of|de)?\s*[A-Z][A-Za-z'’-]*){0,2}/g;
  for (const m of text.matchAll(re)) {
    const phrase = m[0].trim();
    const words = phrase.split(/\s+/);
    for (let n = 1; n <= Math.min(4, words.length); n++) {
      for (let i = 0; i + n <= words.length; i++) {
        const g = words.slice(i, i + n).join(" ");
        if (n === 1 && (STOP.has(g) || g.length < 3)) continue;
        out.push(g);
      }
    }
  }
  return out;
}

const { zhById, enById } = await loadChapters();
const tokenMap = buildCharacterTokenMap(characters);
const knownTokens = new Set(tokenMap.map(([t]) => t));

// global n-gram frequency over the whole English corpus
const globalFreq = new Map<string, number>();
for (const id of chapterIds) {
  for (const p of enById[id]) {
    for (const g of ngrams(p)) globalFreq.set(g, (globalFreq.get(g) ?? 0) + 1);
  }
}

const gapEn = new Map<string, string[]>();
for (const id of chapterIds) {
  const zh = zhById[id];
  const en = enById[id];
  const n = Math.min(zh.length, en.length);
  for (let i = 0; i < n; i++) {
    const z = chipIds(zh[i], tokenMap);
    const e = chipIds(en[i], tokenMap);
    for (const cid of z) {
      if (!e.has(cid)) {
        if (!gapEn.has(cid)) gapEn.set(cid, []);
        gapEn.get(cid)!.push(en[i]);
      }
    }
  }
}

const targets = charArg ? [charArg] : [...gapEn.keys()];
const byId = new Map(characters.map((c) => [c.id, c]));

for (const cid of targets) {
  const paras = gapEn.get(cid) ?? [];
  if (paras.length < 2 && !charArg) continue;
  const local = new Map<string, number>();
  const docs = new Map<string, number>();
  for (const p of paras) {
    const seen = new Set<string>();
    for (const g of ngrams(p)) {
      local.set(g, (local.get(g) ?? 0) + 1);
      seen.add(g);
    }
    for (const g of seen) docs.set(g, (docs.get(g) ?? 0) + 1);
  }
  const ranked = [...local.entries()]
    .filter(([g, n]) => n >= minCount && !knownTokens.has(g))
    .map(([g, n]) => {
      const gf = globalFreq.get(g) ?? n;
      const d = docs.get(g) ?? 0;
      // enrichment: share of this n-gram's corpus occurrences that fall in gaps
      return { g, n, gf, d, score: (n / gf) * d };
    })
    .filter((r) => r.d >= 2 && r.score >= 0.6)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);
  if (!ranked.length) continue;
  const c = byId.get(cid)!;
  console.log(`\n### ${cid}  ${c.name}  |  ${c.alias}   (gap paras: ${paras.length})`);
  for (const r of ranked) {
    console.log(
      `   "${r.g}"  gapHits=${r.n} gapDocs=${r.d} corpusHits=${r.gf} score=${r.score.toFixed(1)}`,
    );
  }
}
