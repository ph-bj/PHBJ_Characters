/**
 * For every ZH-cited work missing from the aligned EN paragraph, dump the EN
 * paragraph's candidate title phrases (star-annotations, quoted phrases,
 * Title-Case runs) to identify how the translation actually rendered it.
 *
 * Run: npx tsx scripts/audit-work-variants.ts
 */
import { WORK_ENGLISH_BY_CHINESE } from "../src/englishWorkTitles";
import { paragraphsFromModule } from "../src/chapterTranslations/loadChapterModules";

const chapterIds = Array.from({ length: 60 }, (_, i) => i + 1);

function zhWorkKeys(text: string): string[] {
  return [...text.matchAll(/《([^》\n]+)》/g)].map((m) => m[1]);
}

const byWork = new Map<string, string[]>();

for (const id of chapterIds) {
  const zhMod = await import(
    `../src/chapterTranslations/chinese/chapterChinese${id}.ts`
  );
  const enMod = await import(
    `../src/chapterTranslations/chapterTranslations${id}.ts`
  );
  const zh = paragraphsFromModule(zhMod, id, "chapterChinese");
  const en = paragraphsFromModule(enMod, id, "chapterTranslations");
  const n = Math.min(zh.length, en.length);
  for (let i = 0; i < n; i++) {
    const keys = zhWorkKeys(zh[i]);
    if (keys.length === 0) continue;
    const enText = en[i];
    for (const k of new Set(keys)) {
      const canonical = WORK_ENGLISH_BY_CHINESE[k];
      if (!canonical) continue;
      // Does canonical (case-sensitive, isolated) appear as often as cited?
      const zhN = keys.filter((x) => x === k).length;
      const esc = canonical.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const enN = (enText.match(new RegExp(`(?<!\\w)${esc}(?!\\w)`, "g")) ?? [])
        .length;
      if (enN >= zhN) continue;
      // Candidate phrases: *starred*, 'quoted', "quoted", Title Case runs
      const cands = new Set<string>();
      for (const m of enText.matchAll(/\*([^*]{2,60})\*/g)) cands.add(`*${m[1]}*`);
      for (const m of enText.matchAll(/'([A-Z][^']{2,60})'/g)) cands.add(`'${m[1]}'`);
      for (const m of enText.matchAll(
        /(?<![A-Za-z])((?:The |A |An )?[A-Z][a-z']+(?:[- ](?:[a-z']+ )?(?:of |the |and |to |in |at |on |from |for |with |a |an )*[A-Z][a-z']+)+)/g,
      ))
        cands.add(m[1]);
      const entry = `ch.${id}p${i + 1} zh:${zhN} en:${enN} | cands: ${[...cands].slice(0, 12).join(" ; ")}`;
      if (!byWork.has(k)) byWork.set(k, []);
      byWork.get(k)!.push(entry);
    }
  }
}

for (const [k, entries] of [...byWork.entries()].sort(
  (a, b) => b[1].length - a[1].length,
)) {
  console.log(`\n### ${k} => "${WORK_ENGLISH_BY_CHINESE[k]}" (${entries.length} paras)`);
  for (const e of entries.slice(0, 6)) console.log("  " + e);
}
