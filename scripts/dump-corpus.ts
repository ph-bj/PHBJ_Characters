/**
 * Writes every chapter's paired ZH/EN paragraphs to a JSON cache.
 *
 * Run:  npx tsx scripts/dump-corpus.ts /tmp/corpus.json
 *
 * The audit scripts import 120 chapter modules per run, which takes minutes.
 * Point PHBJ_CORPUS at the file this produces and they load it instead.
 */
import { writeFileSync } from "node:fs";
import { paragraphsFromModule } from "../src/chapterTranslations/loadChapterModules";
const out: Record<number, { zh: string[]; en: string[] }> = {};
for (let id = 1; id <= 60; id++) {
  const zhMod = await import(`../src/chapterTranslations/chinese/chapterChinese${id}.ts`);
  const enMod = await import(`../src/chapterTranslations/chapterTranslations${id}.ts`);
  out[id] = {
    zh: paragraphsFromModule(zhMod, id, "chapterChinese"),
    en: paragraphsFromModule(enMod, id, "chapterTranslations"),
  };
}
writeFileSync(process.argv[2], JSON.stringify(out));
console.log("ok");
