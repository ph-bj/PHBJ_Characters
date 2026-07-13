import { paragraphsFromModule } from "../src/chapterTranslations/loadChapterModules";

const ch = Number(process.argv[2] ?? 1);
const paraNums = process.argv.slice(3).map(Number);
const zhMod = await import(
  `../src/chapterTranslations/chinese/chapterChinese${ch}.ts`
);
const zh = paragraphsFromModule(zhMod, ch, "chapterChinese");
const enMod = await import(
  `../src/chapterTranslations/chapterTranslations${ch}.ts`
);
const en = paragraphsFromModule(enMod, ch, "chapterTranslations");
for (const n of paraNums) {
  console.log(`--- ch.${ch} para ${n} ZH:`);
  console.log(zh[n - 1]?.slice(0, 300));
  console.log(`--- ch.${ch} para ${n} EN:`);
  console.log(en[n - 1]?.slice(0, 400));
}
