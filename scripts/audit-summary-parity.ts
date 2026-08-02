/**
 * Audit: ZH/EN parity of the chapter summaries in src/summaries_*.ts.
 *
 * Run:  npx tsx scripts/audit-summary-parity.ts [--verbose]
 *
 * Reports, per summary:
 *  - characters chipped on one side only (the two languages must name the same
 *    people, and the English name must be in the token map so a chip renders)
 *  - cited works (《…》) present on one side only
 *  - a length ratio far from the corpus norm, which flags one language
 *    carrying more plot than the other
 *
 * The healthy ratio is derived from the summaries themselves, so it tracks
 * whatever length convention the file currently uses.
 */
import { chapterSummaries } from "../src/chapterSummaries";
import { characters } from "../src/data";
import { buildCharacterTokenMap, segmentText } from "../src/nameChips";
import { WORK_ENGLISH_BY_CHINESE } from "../src/englishWorkTitles";

const verbose = process.argv.includes("--verbose");
const tokenMap = buildCharacterTokenMap(characters);
const nameById = new Map(characters.map((c) => [c.id, c.name]));

function chippedIds(text: string): Set<string> {
  const out = new Set<string>();
  for (const seg of segmentText(text, tokenMap)) {
    if (typeof seg !== "string") out.add(seg.char.id);
  }
  return out;
}

function zhWorks(text: string): string[] {
  return [...new Set((text.match(/《[^》\n]{1,40}》/g) ?? []).map((m) => m.slice(1, -1)))];
}

const ids = Object.keys(chapterSummaries)
  .map(Number)
  .sort((a, b) => a - b);

// Corpus-derived length norm: median english-words per chinese-character.
const ratios = ids
  .map((i) => {
    const s = chapterSummaries[i];
    return s.en.trim().split(/\s+/).length / s.zh.length;
  })
  .sort((a, b) => a - b);
const medianRatio = ratios[Math.floor(ratios.length / 2)];

let chipProblems = 0;
let workProblems = 0;
let ratioProblems = 0;

for (const i of ids) {
  const s = chapterSummaries[i];
  const z = chippedIds(s.zh);
  const e = chippedIds(s.en);
  const onlyZh = [...z].filter((x) => !e.has(x));
  const onlyEn = [...e].filter((x) => !z.has(x));

  const zw = zhWorks(s.zh);
  const missingWorks = zw.filter((w) => {
    const en = WORK_ENGLISH_BY_CHINESE[w];
    return en ? !s.en.toLowerCase().includes(en.toLowerCase()) : false;
  });
  const untranslatedWorks = zw.filter((w) => !WORK_ENGLISH_BY_CHINESE[w]);

  const words = s.en.trim().split(/\s+/).length;
  const ratio = words / s.zh.length;
  const skewed = ratio < medianRatio * 0.72 || ratio > medianRatio * 1.38;

  const lines: string[] = [];
  if (onlyZh.length)
    lines.push(`  chip only in ZH: ${onlyZh.map((x) => nameById.get(x)).join(", ")}`);
  if (onlyEn.length)
    lines.push(`  chip only in EN: ${onlyEn.map((x) => nameById.get(x)).join(", ")}`);
  if (missingWorks.length)
    lines.push(`  work cited in ZH but not EN: ${missingWorks.join(", ")}`);
  if (untranslatedWorks.length)
    lines.push(`  work with no English title mapping: ${untranslatedWorks.join(", ")}`);
  if (skewed)
    lines.push(
      `  length skew: ${s.zh.length} zh chars vs ${words} en words (ratio ${ratio.toFixed(2)}, norm ${medianRatio.toFixed(2)})`,
    );

  if (onlyZh.length || onlyEn.length) chipProblems++;
  if (missingWorks.length || untranslatedWorks.length) workProblems++;
  if (skewed) ratioProblems++;

  if (lines.length || verbose) {
    console.log(
      `ch.${i}  zh=${s.zh.length}ch en=${words}w  chips zh=${z.size} en=${e.size}`,
    );
    console.log(lines.join("\n"));
  }
}

console.log(
  `\n${ids.length} summaries — ${chipProblems} with chip mismatches, ${workProblems} with cited-work mismatches, ${ratioProblems} with length skew`,
);
