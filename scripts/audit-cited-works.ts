/**
 * Audit script: verifies that every work cited as 《…》 in a Chinese paragraph
 * is present AND highlightable in the aligned English paragraph, and that the
 * English wording matches the canonical title in WORK_ENGLISH_BY_CHINESE.
 *
 * Run with:  npx tsx scripts/audit-cited-works.ts [--chapter N] [--unmapped]
 */
import { WORK_ENGLISH_BY_CHINESE } from "../src/englishWorkTitles";
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



function zhWorkKeys(text: string): string[] {
  return [...text.matchAll(/《([^》\n]+)》/g)].map((m) => m[1]);
}

/** Count literal, boundary-delimited English title occurrences in a paragraph. */
function countEnglishTitle(text: string, title: string): number {
  const matches = text.match(
    new RegExp(`(?<!\\w)${escapeRegExp(title)}(?!\\w)`, "gi"),
  );
  return matches?.length ?? 0;
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
    zhTotal += zhKeys.length;

    // Compare by canonical English title, rather than reverse-mapping each EN
    // match to one Chinese key. Multiple Chinese spellings can legitimately map
    // to one title (for example, alternate or abbreviated source spellings).
    const expected = new Map<string, { keys: string[]; count: number }>();
    for (const key of zhKeys) {
      const title = WORK_ENGLISH_BY_CHINESE[key];
      if (!title) {
        unmapped.set(key, (unmapped.get(key) ?? 0) + 1);
        continue;
      }
      const item = expected.get(title) ?? { keys: [], count: 0 };
      item.keys.push(key);
      // Repeated mentions still require only one corresponding title in the
      // aligned English paragraph; the audit verifies title preservation, not
      // a one-to-one count of prose repetitions.
      item.count = 1;
      expected.set(title, item);
    }

    const diffs: string[] = [];
    for (const [title, { keys, count }] of expected) {
      const found = countEnglishTitle(en[i], title);
      enTotal += found;
      if (found < count) {
        diffs.push(`${keys.join(" / ")} [${title}] zh:${count} en:${found}`);
      }
    }
    if (diffs.length > 0) {
      paraMismatches++;
      console.log(`ch.${id} para ${i + 1}:`);
      for (const d of diffs) console.log(`  ${d}`);
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
