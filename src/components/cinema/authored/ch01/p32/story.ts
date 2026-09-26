import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 32.
 *
 * 原文：天上玉麟林春喜 春喜姓林氏，字小梅，年十四岁。姑苏人。
 *
 * Translation: Lin Chunxi: A Jade Qilin from the Heavens. Chunxi's surname is Lin, his courtesy name
 *   Xiaomei, and he is fourteen years of age. A native of Suzhou.
 *
 * Staged from album beats (cinema/beats/album.ts): Lin Chunxi’s emblem page of a qilin among clouds, then a portrait with his particulars.
 */
export default defineStory({
  title: { en: 'Lin Chunxi, a jade qilin', zh: '天上玉麟林春喜' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. The eighth entry: Lin Chunxi, the youngest.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。第八题：林春喜，年最幼。',
  },
  shots: [
    {
      start: 0, end: 20,
      title: { en: 'A jade qilin from the heavens', zh: '天上玉麟' },
      quote: '天上玉麟林春喜',
      caption: { en: 'The eighth entry: Lin Chunxi, “A Jade Qilin from the Heavens.”', zh: '第八题：天上玉麟林春喜。' },
    },
    {
      start: 20, end: 36,
      title: { en: 'Fourteen, of Suzhou', zh: '年十四岁，姑苏人' },
      quote: '春喜姓林氏，字小梅，年十四岁。姑苏人。',
      caption: { en: 'Courtesy name Xiaomei, fourteen years old, a native of Suzhou.', zh: '字小梅，年十四岁，姑苏人。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 10, zh: '天上玉麟林春喜', en: 'Lin Chunxi: A Jade Qilin from the Heavens.' },
    { start: 20.4, end: 30, zh: '春喜姓林氏，字小梅，年十四岁。姑苏人。', en: 'Chunxi’s surname is Lin, his courtesy name Xiaomei; he is fourteen, a native of Suzhou.' },
  ],
});
