import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 24. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：玉树临风李玉林 玉林姓李氏，字佩仙，年十五岁。扬州人。
 *
 * Translation: Li Yulin: A Jade Tree Facing the Wind. Yulin's surname is Li, his courtesy name Peixian,
 *   and he is fifteen years of age. A native of Yangzhou.
 *
 * Staging: Li Yulin’s emblem page, then a portrait with his particulars.
 */
export default defineStory({
  title: { en: 'Li Yulin, a jade tree in the wind', zh: '玉树临风李玉林' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. The fifth entry: Li Yulin.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。第五题：李玉林。',
  },
  shots: [
    {
      start: 0, end: 20,
      title: { en: 'A jade tree facing the wind', zh: '玉树临风' },
      quote: '玉树临风李玉林',
      caption: { en: 'The fifth entry: Li Yulin, “A Jade Tree Facing the Wind.”', zh: '第五题：玉树临风李玉林。' },
    },
    {
      start: 20, end: 36,
      title: { en: 'Fifteen, of Yangzhou', zh: '年十五岁，扬州人' },
      quote: '玉林姓李氏，字佩仙，年十五岁。扬州人。',
      caption: { en: 'Courtesy name Peixian, fifteen years old, a native of Yangzhou.', zh: '字佩仙，年十五岁，扬州人。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 10, zh: '玉树临风李玉林', en: 'Li Yulin: A Jade Tree Facing the Wind.' },
    { start: 20.4, end: 30, zh: '玉林姓李氏，字佩仙，年十五岁。扬州人。', en: 'Yulin’s surname is Li, his courtesy name Peixian; he is fifteen, a native of Yangzhou.' },
  ],
});
