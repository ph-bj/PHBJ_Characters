import { prefaceTranslations } from '../prefaceTranslation';
import { buildChapterMap } from './loadChapterModules';

const translationModules = import.meta.glob<Record<string, string[] | Record<number, string[]>>>(
  './chapterTranslations*.ts',
  { eager: true },
);

const chapterIds = Array.from({ length: 60 }, (_, i) => i + 1);

const chaptersEn = buildChapterMap(translationModules, 'chapterTranslations', chapterIds);

/** English paragraph translations by chapter id (0 = 序 preface). */
export const chapterTranslationsById: Record<number, string[]> = {
  0: prefaceTranslations,
  ...chaptersEn,
};
