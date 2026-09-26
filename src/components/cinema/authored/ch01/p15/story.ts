import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 15. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：本官家子，因飘泊入梨园，隶联锦部。 秋水为神，琼花作骨。工吟咏，尚气节，善权变。慧心独
 *   造，巧夺天工，色艺冠一时。
 *
 * Translation: Originally the son of an official family, he drifted into the pear orchard through the
 *   misfortunes of wandering, and now belongs to the Lianjin troupe. Autumn waters form his
 *   spirit; jade blossoms form his bones. He is accomplished in poetry, reveres moral
 *   integrity, and excels in tactful adaptability. Possessing a uniquely inventive intellect,
 *   his art rivals the work of heaven, and his beauty and skill reign supreme in his generation.
 *
 * Staging: two portrait pages of Su Huifang, with phrases from his entry.
 */
export default defineStory({
  title: { en: 'Su Huifang, spirit and bones', zh: '秋水为神，琼花作骨' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. Su Huifang: an official’s son who fell into the theatre and kept his integrity.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。苏蕙芳：官家子弟，飘泊入梨园而尚气节。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: 'An official’s son', zh: '本官家子' },
      quote: '本官家子，因飘泊入梨园，隶联锦部。秋水为神，琼花作骨。',
      caption: { en: 'Born to an official family, he drifted into the theatre. Autumn waters form his spirit, jade blossoms his bones.', zh: '本是官家之子，飘泊而入梨园；秋水为神，琼花作骨。' },
    },
    {
      start: 18, end: 36,
      title: { en: 'Integrity and art', zh: '尚气节，善权变' },
      quote: '工吟咏，尚气节，善权变……色艺冠一时。',
      caption: { en: 'A poet who reveres integrity and adapts with tact; his beauty and art are the first of his day.', zh: '工诗而重气节，善于权变，色艺冠绝一时。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6.4, zh: '本官家子，因飘泊入梨园，隶联锦部。', en: 'Originally the son of an official family, he drifted into the pear orchard, and belongs to the Lianjin troupe.' },
    { start: 6.4, end: 12, zh: '秋水为神，琼花作骨。', en: 'Autumn waters form his spirit; jade blossoms form his bones.' },
    { start: 18.4, end: 24.4, zh: '工吟咏，尚气节，善权变。', en: 'He is accomplished in poetry, reveres moral integrity, and excels in tactful adaptability.' },
    { start: 24.4, end: 32, zh: '慧心独造，巧夺天工，色艺冠一时。', en: 'With a uniquely inventive mind, his art rivals heaven’s work; his beauty and skill reign supreme in his generation.' },
  ],
});
