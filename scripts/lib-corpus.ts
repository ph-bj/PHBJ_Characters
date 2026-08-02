import { readFileSync, existsSync } from "node:fs";
import { paragraphsFromModule } from "../src/chapterTranslations/loadChapterModules";

export type Corpus = Record<number, { zh: string[]; en: string[] }>;

/** Loads all 60 chapters, using a JSON cache at $PHBJ_CORPUS when present. */
export async function loadCorpus(): Promise<Corpus> {
  const cache = process.env.PHBJ_CORPUS;
  if (cache && existsSync(cache)) return JSON.parse(readFileSync(cache, "utf8"));
  const out: Corpus = {};
  for (let id = 1; id <= 60; id++) {
    const zhMod = await import(`../src/chapterTranslations/chinese/chapterChinese${id}.ts`);
    const enMod = await import(`../src/chapterTranslations/chapterTranslations${id}.ts`);
    out[id] = {
      zh: paragraphsFromModule(zhMod, id, "chapterChinese"),
      en: paragraphsFromModule(enMod, id, "chapterTranslations"),
    };
  }
  return out;
}
