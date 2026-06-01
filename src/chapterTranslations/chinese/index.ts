import { prefaceChinese } from './prefaceChinese';
import { buildChapterMap } from '../loadChapterModules';

const chineseModules = import.meta.glob<Record<string, string[]>>('./chapterChinese*.ts', {
  eager: true,
});

const chapterIds = Array.from({ length: 60 }, (_, i) => i + 1);

/** Chinese paragraphs by chapter id (1–60). */
export const chapterChineseById = buildChapterMap(
  chineseModules,
  'chapterChinese',
  chapterIds,
);

export { prefaceChinese };
