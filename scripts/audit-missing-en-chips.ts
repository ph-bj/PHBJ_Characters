/**
 * Audit: per-character ZH-vs-EN chip deficit, aggregated across all chapters.
 *
 * Run:  npx tsx scripts/audit-missing-en-chips.ts [--char char-61] [--samples N]
 *
 * For every character, counts chips produced in the Chinese paragraphs vs the
 * paired English paragraphs. Characters with many ZH chips and few/no EN chips
 * are candidates for missing ENGLISH_ALIAS_TOKENS entries. With --char, dumps
 * the English text of paragraphs where the character is chipped in ZH but not
 * in EN, so the actual English rendering of the name can be identified.
 */
import { buildCharacterTokenMap, segmentText } from "../src/nameChips";
import { characters } from "../src/data";
import type { Character } from "../src/types";
import { loadCorpus } from "./lib-corpus";

const args = process.argv.slice(2);
const charArg = args.includes("--char") ? args[args.indexOf("--char") + 1] : null;
const sampleCount = args.includes("--samples")
  ? Number(args[args.indexOf("--samples") + 1])
  : 6;

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

function chipCounts(text: string, tokenMap: [string, Character][]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const seg of segmentText(text, tokenMap)) {
    if (typeof seg !== "string") {
      counts.set(seg.char.id, (counts.get(seg.char.id) ?? 0) + 1);
    }
  }
  return counts;
}

const { zhById, enById } = await loadChapters();
const tokenMap = buildCharacterTokenMap(characters);
const byId = new Map(characters.map((c) => [c.id, c]));

const zhTotal = new Map<string, number>();
const enTotal = new Map<string, number>();
// paragraphs where char has >=1 zh chip and 0 en chips
const gapParas = new Map<string, { ch: number; i: number; zh: number }[]>();

for (const id of chapterIds) {
  const zh = zhById[id];
  const en = enById[id];
  const n = Math.min(zh.length, en.length);
  for (let i = 0; i < n; i++) {
    const z = chipCounts(zh[i], tokenMap);
    const e = chipCounts(en[i], tokenMap);
    for (const [cid, c] of z) {
      zhTotal.set(cid, (zhTotal.get(cid) ?? 0) + c);
      if (!e.has(cid)) {
        if (!gapParas.has(cid)) gapParas.set(cid, []);
        gapParas.get(cid)!.push({ ch: id, i, zh: c });
      }
    }
    for (const [cid, c] of e) enTotal.set(cid, (enTotal.get(cid) ?? 0) + c);
  }
}

if (!charArg) {
  const rows = characters
    .map((c) => {
      const zh = zhTotal.get(c.id) ?? 0;
      const en = enTotal.get(c.id) ?? 0;
      const gaps = gapParas.get(c.id)?.length ?? 0;
      return { c, zh, en, gaps, deficit: zh - en };
    })
    .filter((r) => r.zh > 0)
    .sort((a, b) => b.deficit - a.deficit);
  console.log("id\tname\talias\tzh\ten\tgapParas\tdeficit");
  for (const r of rows) {
    if (r.deficit <= 0 && r.gaps === 0) continue;
    console.log(
      `${r.c.id}\t${r.c.name}\t${r.c.alias}\t${r.zh}\t${r.en}\t${r.gaps}\t${r.deficit}`,
    );
  }
} else {
  const c = byId.get(charArg)!;
  console.log(`### ${c.id}  ${c.name}  |  alias: ${c.alias}`);
  console.log(`zh=${zhTotal.get(c.id) ?? 0} en=${enTotal.get(c.id) ?? 0}`);
  const gaps = gapParas.get(c.id) ?? [];
  console.log(`gap paragraphs: ${gaps.length}\n`);
  for (const g of gaps.slice(0, sampleCount)) {
    console.log(`--- ch.${g.ch} para ${g.i + 1} (zh chips: ${g.zh}) ---`);
    console.log(`ZH: ${zhById[g.ch][g.i]}`);
    console.log(`EN: ${enById[g.ch][g.i]}`);
    console.log();
  }
}
