/**
 * Audit script: verifies that every work cited as 《…》 in a Chinese paragraph
 * is present AND highlightable in the aligned English paragraph, and that the
 * English wording matches the canonical title in WORK_ENGLISH_BY_CHINESE.
 *
 * Run with:  npx tsx scripts/audit-cited-works.ts [--chapter N] [--unmapped]
 */
import {
  CASE_STRICT_WORK_TITLES_LOWER,
  ENGLISH_WORK_TITLES,
  ENGLISH_WORK_TITLE_SET,
  WORK_ENGLISH_BY_CHINESE,
} from "../src/englishWorkTitles";
import { paragraphsFromModule } from "../src/chapterTranslations/loadChapterModules";

const args = process.argv.slice(2);
const chapterArg = args.includes("--chapter")
  ? Number(args[args.indexOf("--chapter") + 1])
  : null;
const chapterIds = chapterArg
  ? [chapterArg]
  : Array.from({ length: 60 }, (_, i) => i + 1);

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Same shape as CHAPTER_ANNOTATION_TOKEN_SPLIT_REGEX in utils.tsx.
const ENGLISH_WORK_SPLIT_PATTERN = [...ENGLISH_WORK_TITLES]
  .sort((a, b) => b.length - a.length)
  .map((t) => `(?<!\\w)${escapeRegExp(t)}(?!\\w)`)
  .join("|");
const TOKEN_REGEX = new RegExp(
  `(《[^》\\n]+》|\\*(?!\\s)[^*]+(?<!\\s)\\*|${ENGLISH_WORK_SPLIT_PATTERN})`,
  "gi",
);
const ENGLISH_WORK_TITLE_LOWER = new Map(
  ENGLISH_WORK_TITLES.map((t) => [t.toLowerCase(), t]),
);
const CHINESE_BY_ENGLISH_LOWER: Record<string, string> = {};
for (const [zh, en] of Object.entries(WORK_ENGLISH_BY_CHINESE)) {
  CHINESE_BY_ENGLISH_LOWER[en.toLowerCase()] = zh;
}

function zhWorkKeys(text: string): string[] {
  return [...text.matchAll(/《([^》\n]+)》/g)].map((m) => m[1]);
}

/** Work keys highlightable in an English paragraph (star tokens + known titles). */
function enWorkKeys(text: string): { key: string; raw: string }[] {
  const out: { key: string; raw: string }[] = [];
  for (const m of text.matchAll(TOKEN_REGEX)) {
    const part = m[1];
    if (part.startsWith("《")) {
      out.push({ key: part.slice(1, -1), raw: part });
    } else if (part.startsWith("*")) {
      const inner = part.slice(1, -1);
      if (/[一-鿿]/.test(inner)) {
        out.push({ key: inner.replace(/《|》/g, ""), raw: part });
        continue;
      }
      const resolved = CHINESE_BY_ENGLISH_LOWER[inner.toLowerCase()];
      if (resolved) {
        out.push({ key: resolved, raw: part });
      } else if (ENGLISH_WORK_TITLE_SET.has(inner)) {
        out.push({ key: inner, raw: part });
      }
      // otherwise: emphasis italics (*dan*, *kang*), not a work citation
    } else {
      const lower = part.toLowerCase();
      const isTitle =
        ENGLISH_WORK_TITLE_SET.has(part) ||
        (!CASE_STRICT_WORK_TITLES_LOWER.has(lower) &&
          ENGLISH_WORK_TITLE_LOWER.has(lower));
      if (isTitle) {
        out.push({
          key: CHINESE_BY_ENGLISH_LOWER[lower] ?? part,
          raw: part,
        });
      }
    }
  }
  return out;
}

async function loadChapter(id: number) {
  const zhMod = await import(
    `../src/chapterTranslations/chinese/chapterChinese${id}.ts`
  );
  const enMod = await import(
    `../src/chapterTranslations/chapterTranslations${id}.ts`
  );
  return {
    zh: paragraphsFromModule(zhMod, id, "chapterChinese"),
    en: paragraphsFromModule(enMod, id, "chapterTranslations"),
  };
}

const unmapped = new Map<string, number>();
let paraMismatches = 0;
let zhTotal = 0;
let enTotal = 0;

for (const id of chapterIds) {
  const { zh, en } = await loadChapter(id);
  const n = Math.min(zh.length, en.length);
  for (let i = 0; i < n; i++) {
    const zhKeys = zhWorkKeys(zh[i]);
    const enKeys = enWorkKeys(en[i]);
    zhTotal += zhKeys.length;
    enTotal += enKeys.length;

    for (const k of zhKeys) {
      if (!WORK_ENGLISH_BY_CHINESE[k]) {
        unmapped.set(k, (unmapped.get(k) ?? 0) + 1);
      }
    }

    // Compare multisets by key
    const count = (arr: string[]) => {
      const m = new Map<string, number>();
      for (const k of arr) m.set(k, (m.get(k) ?? 0) + 1);
      return m;
    };
    const zhC = count(zhKeys);
    const enC = count(enKeys.map((e) => e.key));
    const allKeys = new Set([...zhC.keys(), ...enC.keys()]);
    const diffs: string[] = [];
    for (const k of allKeys) {
      const dz = zhC.get(k) ?? 0;
      const de = enC.get(k) ?? 0;
      if (dz !== de) {
        const enName = WORK_ENGLISH_BY_CHINESE[k] ?? "(no canonical EN)";
        diffs.push(`${k} [${enName}] zh:${dz} en:${de}`);
      }
    }
    if (diffs.length > 0) {
      paraMismatches++;
      console.log(`ch.${id} para ${i + 1}:`);
      for (const d of diffs) console.log(`  ${d}`);
      // Show EN snippet hints for missing works
      for (const k of allKeys) {
        const dz = zhC.get(k) ?? 0;
        const de = enC.get(k) ?? 0;
        if (dz > de) {
          const canonical = WORK_ENGLISH_BY_CHINESE[k];
          if (canonical) {
            const idx = en[i].toLowerCase().indexOf(canonical.toLowerCase());
            if (idx >= 0) {
              console.log(
                `    (canonical "${canonical}" DOES appear: ...${en[i].slice(Math.max(0, idx - 40), idx + canonical.length + 20)}...)`,
              );
            }
          }
        }
      }
    }
  }
}

console.log(
  `\nTotals: zh citations=${zhTotal} en highlights=${enTotal}; mismatched paragraphs=${paraMismatches}`,
);
if (unmapped.size > 0) {
  console.log("\nZH 《…》 keys with no WORK_ENGLISH_BY_CHINESE mapping:");
  for (const [k, n] of [...unmapped.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${k}\tx${n}`);
  }
}
