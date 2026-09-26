import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 21. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：嵰山艳雪金漱芳 漱芳姓金氏，字瘦香，年十五岁。姑苏人。隶联珠部。秀骨珊珊，柔情脉脉。工吟
 *   咏吹箫，善弈棋，楚楚有林下风致。其演戏最多，而尤擅名者，为《题曲》一出。
 *
 * Translation: Jin Shufang: Luminous Snow on Mount Qian. Shufang's surname is Jin, his courtesy name
 *   Shouxiang, and he is fifteen years of age. A native of Suzhou, he belongs to the Lianzhu
 *   troupe. His elegant bones are delicate and translucent; his tender feelings flow in
 *   continuous pulses. He is accomplished in poetry and playing the flute, skilled at chess,
 *   and possesses the distinct, refined air of a scholar in seclusion. He performs the greatest
 *   number of plays, but the one for which he is most celebrated is "Inscribing the Song."
 *
 * Staging: Jin Shufang’s emblem page, his portrait with the flute, and his most famous scene.
 */
export default defineStory({
  title: { en: 'Jin Shufang, snow on Mount Qian', zh: '嵰山艳雪金漱芳' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. The fourth entry: Jin Shufang.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。第四题：金漱芳。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'Luminous snow on Mount Qian', zh: '嵰山艳雪' },
      quote: '嵰山艳雪金漱芳……隶联珠部。',
      caption: { en: 'The fourth entry: Jin Shufang, “Luminous Snow on Mount Qian,” fifteen, of the Lianzhu troupe.', zh: '第四题：嵰山艳雪金漱芳，年十五，隶联珠部。' },
    },
    {
      start: 12, end: 26,
      title: { en: 'Flute and chess', zh: '工吟咏吹箫，善弈棋' },
      quote: '秀骨珊珊，柔情脉脉。工吟咏吹箫，善弈棋',
      caption: { en: 'Delicate bones and tender feelings; a poet, a flute player, a chess player with a recluse’s air.', zh: '秀骨珊珊，柔情脉脉；工诗吹箫，善弈棋，有林下风致。' },
    },
    {
      start: 26, end: 36,
      title: { en: '“Inscribing the Song”', zh: '《题曲》' },
      quote: '而尤擅名者，为《题曲》一出。',
      caption: { en: 'His most celebrated scene is “Inscribing the Song.”', zh: '尤以《题曲》一出擅名。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 5, zh: '嵰山艳雪金漱芳', en: 'Jin Shufang: Luminous Snow on Mount Qian.' },
    { start: 5, end: 11.6, zh: '漱芳姓金氏，字瘦香，年十五岁。姑苏人。隶联珠部。', en: 'Courtesy name Shouxiang, fifteen, a native of Suzhou, of the Lianzhu troupe.' },
    { start: 12.4, end: 16.6, zh: '秀骨珊珊，柔情脉脉。', en: 'His elegant bones are delicate and translucent; his tender feelings flow in continuous pulses.' },
    { start: 16.6, end: 21, zh: '工吟咏吹箫，善弈棋，', en: 'He is accomplished in poetry and the flute, and skilled at chess,' },
    { start: 21, end: 25.6, zh: '楚楚有林下风致。', en: 'with the refined air of a scholar in seclusion.' },
    { start: 26.4, end: 31, zh: '其演戏最多，而尤擅名者，', en: 'He performs the most plays, but the one for which he is most celebrated' },
    { start: 31, end: 35.6, zh: '为《题曲》一出。', en: 'is “Inscribing the Song.”' },
  ],
});
