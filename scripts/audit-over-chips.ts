/**
 * Inverse of audit-missing-en-chips: reports characters (and the exact tokens)
 * chipped in an English paragraph whose Chinese counterpart has no chip for
 * them at all — i.e. likely false-positive English tokens.
 *
 * Run:  npx tsx scripts/audit-over-chips.ts [--token Pan]
 */
import { buildCharacterTokenMap, segmentText } from "../src/nameChips";
import { characters } from "../src/data";
import type { Character } from "../src/types";
import { loadCorpus } from "./lib-corpus";

const args = process.argv.slice(2);
const tokenArg = args.includes("--token") ? args[args.indexOf("--token") + 1] : null;

const corpus = await loadCorpus();
const tokenMap = buildCharacterTokenMap(characters);

function chips(text: string) {
  const out: { token: string; id: string; at: number }[] = [];
  let at = 0;
  for (const seg of segmentText(text, tokenMap)) {
    if (typeof seg === "string") at += seg.length;
    else {
      out.push({ token: seg.token, id: seg.char.id, at });
      at += seg.token.length;
    }
  }
  return out;
}

const byToken = new Map<string, { ch: number; i: number; ctx: string }[]>();
for (let id = 1; id <= 60; id++) {
  const { zh, en } = corpus[id];
  const n = Math.min(zh.length, en.length);
  for (let i = 0; i < n; i++) {
    const zhIds = new Set(chips(zh[i]).map((h) => h.id));
    for (const h of chips(en[i])) {
      if (zhIds.has(h.id)) continue;
      if (tokenArg && h.token !== tokenArg) continue;
      const key = `${h.token} → ${h.id}`;
      if (!byToken.has(key)) byToken.set(key, []);
      byToken.get(key)!.push({
        ch: id,
        i: i + 1,
        ctx: en[i].slice(Math.max(0, h.at - 45), h.at + h.token.length + 45),
      });
    }
  }
}

for (const [key, rows] of [...byToken.entries()].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`\n=== ${key}  (${rows.length} paragraphs) ===`);
  for (const r of rows.slice(0, tokenArg ? 40 : 2)) {
    console.log(`  ch.${r.ch} p${r.i}  …${r.ctx.replace(/\s+/g, " ")}…`);
  }
}
