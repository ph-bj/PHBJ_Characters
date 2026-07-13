/**
 * Audit script: verifies character roster coverage and ZH/EN name-chip parity.
 *
 * Run with:  npx tsx scripts/audit-name-chips.ts [--mismatches] [--zero] [--speakers] [--chapter N]
 *
 * Uses the exact production chip logic from src/nameChips.ts, and loads
 * chapter paragraph modules directly (bypassing Vite's import.meta.glob).
 */
import {
  buildCharacterTokenMap,
  segmentText,
} from "../src/nameChips";
import { characters } from "../src/data";
import type { Character } from "../src/types";
import { paragraphsFromModule } from "../src/chapterTranslations/loadChapterModules";

const args = process.argv.slice(2);
const has = (f: string) => args.includes(f);
const chapterArg = args.includes("--chapter")
  ? Number(args[args.indexOf("--chapter") + 1])
  : null;

const chapterIds = chapterArg
  ? [chapterArg]
  : Array.from({ length: 60 }, (_, i) => i + 1);

async function loadChapters() {
  const zhById: Record<number, string[]> = {};
  const enById: Record<number, string[]> = {};
  for (const id of chapterIds) {
    const zhMod = await import(
      `../src/chapterTranslations/chinese/chapterChinese${id}.ts`
    );
    zhById[id] = paragraphsFromModule(zhMod, id, "chapterChinese");
    const enMod = await import(
      `../src/chapterTranslations/chapterTranslations${id}.ts`
    );
    enById[id] = paragraphsFromModule(enMod, id, "chapterTranslations");
  }
  return { zhById, enById };
}

type ChipHit = { token: string; id: string; name: string };

function chipsOf(text: string, tokenMap: [string, Character][]): ChipHit[] {
  const hits: ChipHit[] = [];
  for (const seg of segmentText(text, tokenMap)) {
    if (typeof seg !== "string") {
      hits.push({ token: seg.token, id: seg.char.id, name: seg.char.name });
    }
  }
  return hits;
}

function summarize(hits: ChipHit[]): string {
  const counts = new Map<string, number>();
  for (const h of hits) {
    const key = `${h.token}(${h.id.replace("char-", "#")})`;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([k, n]) => (n > 1 ? `${k}x${n}` : k))
    .join(", ");
}

const { zhById, enById } = await loadChapters();
const tokenMap = buildCharacterTokenMap(characters);

// ---------- 1. Zero-mention characters (fake / misnamed candidates) ----------
if (has("--zero") || args.length === 0) {
  const zhChipCount = new Map<string, number>();
  const enChipCount = new Map<string, number>();
  for (const id of chapterIds) {
    for (const p of zhById[id]) {
      for (const h of chipsOf(p, tokenMap)) {
        zhChipCount.set(h.id, (zhChipCount.get(h.id) ?? 0) + 1);
      }
    }
    for (const p of enById[id]) {
      for (const h of chipsOf(p, tokenMap)) {
        enChipCount.set(h.id, (enChipCount.get(h.id) ?? 0) + 1);
      }
    }
  }
  console.log("=== Character chip totals (ZH / EN) ===");
  for (const c of characters) {
    const zh = zhChipCount.get(c.id) ?? 0;
    const en = enChipCount.get(c.id) ?? 0;
    const flag = zh === 0 ? "  <-- ZERO ZH" : en === 0 ? "  <-- zero EN" : "";
    console.log(
      `${c.id}\t${c.name}\t${c.alias}\tzh:${zh}\ten:${en}${flag}`,
    );
  }
}

// ---------- 2. Per-paragraph ZH vs EN chip parity ----------
if (has("--mismatches") || args.length === 0) {
  console.log("\n=== Paragraph chip-count mismatches (ZH vs EN) ===");
  let mismatchCount = 0;
  let paraCount = 0;
  for (const id of chapterIds) {
    const zh = zhById[id];
    const en = enById[id];
    if (zh.length !== en.length) {
      console.log(
        `ch.${id}: PARAGRAPH COUNT MISMATCH zh=${zh.length} en=${en.length}`,
      );
    }
    const n = Math.min(zh.length, en.length);
    for (let i = 0; i < n; i++) {
      paraCount++;
      const zhHits = chipsOf(zh[i], tokenMap);
      const enHits = chipsOf(en[i], tokenMap);
      if (zhHits.length !== enHits.length) {
        mismatchCount++;
        console.log(
          `ch.${id} para ${i + 1}: zh=${zhHits.length} en=${enHits.length}`,
        );
        console.log(`  ZH: ${summarize(zhHits)}`);
        console.log(`  EN: ${summarize(enHits)}`);
      }
    }
  }
  console.log(
    `\n${mismatchCount} mismatched paragraphs out of ${paraCount}`,
  );
}

// ---------- 2b. Aggregate delta metric ----------
if (has("--delta") || has("--mismatches") || args.length === 0) {
  let totalZh = 0;
  let totalEn = 0;
  let totalAbsDelta = 0;
  let big = 0;
  for (const id of chapterIds) {
    const zh = zhById[id];
    const en = enById[id];
    const n = Math.min(zh.length, en.length);
    for (let i = 0; i < n; i++) {
      const z = chipsOf(zh[i], tokenMap).length;
      const e = chipsOf(en[i], tokenMap).length;
      totalZh += z;
      totalEn += e;
      totalAbsDelta += Math.abs(z - e);
      if (Math.abs(z - e) >= 4) big++;
    }
  }
  console.log(
    `total chips zh=${totalZh} en=${totalEn} sum|delta|=${totalAbsDelta} paragraphs with |delta|>=4: ${big}`,
  );
}

// ---------- 3. Speaker mining: find name-like tokens before 道 not covered ----------
if (has("--speakers")) {
  const knownTokens = new Set(tokenMap.map(([t]) => t));
  const counts = new Map<string, number>();
  const speakerRe =
    /([一-鿿]{2,3})(?:又|便|忙|才|方|正|就|再|复|即|先|随|接|大|冷|陪|齐|皆|都|亦|也|均|遂|乃)?(?:笑|哭|叹|怒|急|连声|接着)?(?:道|说道|答道|问道|骂道|喊道|叫道)[:：“"]/g;
  for (const id of chapterIds) {
    for (const p of zhById[id]) {
      for (const m of p.matchAll(speakerRe)) {
        const name = m[1];
        // Skip if the whole candidate or its tail is already a known token
        if (knownTokens.has(name) || knownTokens.has(name.slice(1))) continue;
        counts.set(name, (counts.get(name) ?? 0) + 1);
      }
    }
  }
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  console.log("\n=== Unrecognized speaker candidates (count >= 3) ===");
  for (const [name, n] of sorted) {
    if (n >= 3) console.log(`${name}\t${n}`);
  }
}
