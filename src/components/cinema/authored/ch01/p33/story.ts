import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 33.
 *
 * 原文：隶联锦部。好花含萼，明珠出胎。十二岁入班，迄今才二年，已精于声律，兼通文墨，生旦并作。所
 *   演《寄子》、《储谏》、《回猎》、《断机》、《番儿》、《冥勘》、《女弹》等戏，长眉秀颊，如
 *   见乌衣子弟，佩紫罗香囊，真香粉孩儿，令人有宁馨之羡，其哺啜皆可观。数年后更当独出头地，价
 *   重连城也。为之诗曰：
 *
 * Translation: He belongs to the Lianjin troupe. Like a fine flower still within its calyx, or a luminous
 *   pearl just emerging from the womb. He entered the troupe at twelve; though a mere two years
 *   have passed, he is already highly accomplished in music and rhythm, while also proficient
 *   in literature, performing both sheng (male) and dan (female) roles. The plays he
 *   performs—such as "Entrusting the Son," "Stored Admonitions," "Returning from the Hunt,"
 *   "Breaking the Loom," "Barbarian Child," "Underworld Inquest," and "The Female
 *   Musician"—display his long eyebrows and elegant cheeks. He looks like a young noble of the
 *   Wuyi Lane, wearing a purple silk fragrant pouch; truly a child of powder and fragrance,
 *   inspiring intense admiration. His very eating and drinking are a sight to behold. In a few
 *   years' time, he will surely rise above all others, his worth equal to multiple cities.
 *   Thus, I composed for him this poem:
 *
 * Staged from album beats (cinema/beats/album.ts): Lin Chunxi’s portrait, his plays on stage, and a closing portrait of his promise.
 */
export default defineStory({
  title: { en: 'Lin Chunxi, a pearl just born', zh: '好花含萼，明珠出胎' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. Lin Chunxi: a prodigy of two years on the stage.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。林春喜：入班二年，已精声律。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'A flower still in its calyx', zh: '好花含萼' },
      quote: '隶联锦部。好花含萼，明珠出胎。',
      caption: { en: 'A flower still in its calyx, a pearl just born: two years in the troupe, he already plays both sheng and dan.', zh: '好花含萼，明珠出胎；入班二年，已生旦并作。' },
    },
    {
      start: 12, end: 28,
      title: { en: 'His plays', zh: '《寄子》《断机》' },
      quote: '所演《寄子》、《储谏》、《回猎》、《断机》……等戏',
      caption: { en: 'Entrusting the Son, Returning from the Hunt, Breaking the Loom, Underworld Inquest: a young noble of the Wuyi Lane.', zh: '《寄子》《储谏》《回猎》《断机》诸戏，如见乌衣子弟。' },
    },
    {
      start: 28, end: 36,
      title: { en: 'Worth many cities', zh: '价重连城' },
      quote: '数年后更当独出头地，价重连城也。',
      caption: { en: 'In a few years he will rise above all others, his worth equal to many cities.', zh: '数年后当独出头地，价重连城。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4.6, zh: '隶联锦部。好花含萼，明珠出胎。', en: 'Of the Lianjin troupe: a fine flower still in its calyx, a luminous pearl just born.' },
    { start: 4.6, end: 11.6, zh: '十二岁入班，迄今才二年，已精于声律，兼通文墨，生旦并作。', en: 'He joined at twelve; in two years he has mastered music, learned letters, and plays both sheng and dan.' },
    { start: 12.4, end: 18, zh: '所演《寄子》、《储谏》、《回猎》、《断机》、《番儿》、《冥勘》、《女弹》等戏，', en: 'In Entrusting the Son, Stored Admonitions, Returning from the Hunt, Breaking the Loom and more,' },
    { start: 18, end: 23, zh: '长眉秀颊，如见乌衣子弟，佩紫罗香囊，', en: 'his long brows and fine cheeks recall a young noble of the Wuyi Lane with a purple silk pouch,' },
    { start: 23, end: 27.6, zh: '真香粉孩儿，令人有宁馨之羡，其哺啜皆可观。', en: 'a true child of powder and fragrance; even his eating and drinking are a sight to behold.' },
    { start: 28.4, end: 33, zh: '数年后更当独出头地，价重连城也。', en: 'In a few years he will rise above all others, his worth equal to many cities.' },
    { start: 33, end: 35.6, zh: '为之诗曰：', en: 'Thus, I composed for him this poem:' },
  ],
});
