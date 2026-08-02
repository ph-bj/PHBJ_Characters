/** Print a chapter's Chinese (default) or English paragraphs. Run: npx tsx scripts/show-chapter.ts 7 [--en] */
import { loadCorpus } from "./lib-corpus";
const id = Number(process.argv[2]);
const lang = process.argv.includes("--en") ? "en" : "zh";
const corpus = await loadCorpus();
corpus[id][lang].forEach((p, i) => console.log(`[${i + 1}] ${p}`));
