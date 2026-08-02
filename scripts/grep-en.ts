/**
 * Search the paired ZH/EN chapter paragraphs for a literal English phrase.
 *
 * Run:  npx tsx scripts/grep-en.ts "Master Hua" [--zh 华公子] [--limit 20] [--full]
 *
 * Prints chapter/paragraph coordinates plus a snippet around each hit, so a
 * proposed alias token can be checked for collisions before it is added.
 */
import { loadCorpus } from "./lib-corpus";

const args = process.argv.slice(2);
const phrase = args[0];
const zhFilter = args.includes("--zh") ? args[args.indexOf("--zh") + 1] : null;
const limit = args.includes("--limit") ? Number(args[args.indexOf("--limit") + 1]) : 25;
const full = args.includes("--full");

const chapterIds = Array.from({ length: 60 }, (_, i) => i + 1);
let hits = 0;
let total = 0;

const corpus = await loadCorpus();

for (const id of chapterIds) {
  const { zh, en } = corpus[id];
  const n = Math.min(zh.length, en.length);
  for (let i = 0; i < n; i++) {
    const re = new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g");
    const ms = [...en[i].matchAll(re)];
    if (!ms.length) continue;
    total += ms.length;
    if (zhFilter && !zh[i].includes(zhFilter)) {
      // still counted, but flag as a possible collision
      if (hits++ < limit) {
        console.log(`ch.${id} p${i + 1}  [ZH LACKS ${zhFilter}]  x${ms.length}`);
        for (const m of ms.slice(0, 3)) {
          console.log(`   …${en[i].slice(Math.max(0, m.index! - 70), m.index! + phrase.length + 70)}…`);
        }
      }
      continue;
    }
    if (zhFilter) continue;
    if (hits++ >= limit) continue;
    console.log(`ch.${id} p${i + 1}  x${ms.length}`);
    if (full) {
      console.log(`   ZH: ${zh[i].slice(0, 400)}`);
      console.log(`   EN: ${en[i].slice(0, 600)}`);
    } else {
      for (const m of ms.slice(0, 3)) {
        console.log(`   …${en[i].slice(Math.max(0, m.index! - 70), m.index! + phrase.length + 70)}…`);
      }
    }
  }
}
console.log(`\n"${phrase}": ${total} occurrences total`);
