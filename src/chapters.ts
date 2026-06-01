import { Chapter } from './types';
import chapterMeta from './chapterMeta.json';
import { chapterChineseById, prefaceChinese } from './chapterTranslations/chinese';

const { chapters: metaChapters } = chapterMeta as {
  chapters: { id: number; title: string }[];
};

function joinParagraphs(paras: string[]): string {
  return paras.join('\n\n');
}

export const chapters: Chapter[] = [
  { id: 0, title: '序', content: joinParagraphs(prefaceChinese) },
  ...metaChapters.map((ch) => ({
    id: ch.id,
    title: ch.title,
    content: joinParagraphs(chapterChineseById[ch.id]),
  })),
];
