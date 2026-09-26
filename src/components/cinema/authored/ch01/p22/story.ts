import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 22.
 *
 * 原文：真檀口生香，素腰如柳。比之海棠初开，素馨将放，其色香一界，几欲使神仙堕刼矣。其余《琴
 *   挑》、《秋江》诸戏，情韵如生，亦非他人所能。而香心婉婉，秀外慧中。是真嫏嬛掌书仙，岂菊部
 *   中所能觏耶？为之诗曰：
 *
 * Translation: Truly, his sandalwood lips exude fragrance, and his unadorned waist sways like a willow.
 *   Compared to a newly opened crabapple or a jasmine just beginning to bloom, his realm of
 *   color and fragrance is so profound it could almost force an immortal to fall into worldly
 *   tribulation. His performances in other plays, such as "Flirting with a Zither" and "The
 *   Autumn River," bring emotional resonance vividly to life, an achievement beyond the reach
 *   of others. His fragrant heart is profoundly gentle; he is beautiful without and wise
 *   within. He is truly an immortal in charge of the books in the heavenly Langhuan library;
 *   how could one expect to encounter him within the chrysanthemum ranks of the pear orchard?
 *   Thus, I composed for him this poem:
 *
 * Staged from album beats (cinema/beats/album.ts): a portrait of Jin Shufang like a crabapple newly opened, his plays on stage, and a closing portrait.
 */
export default defineStory({
  title: { en: 'Jin Shufang, keeper of the heavenly library', zh: '嫏嬛掌书仙' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. Jin Shufang’s beauty, his plays, and his learning.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。金漱芳之色艺、所演诸戏及其学养。',
  },
  shots: [
    {
      start: 0, end: 16,
      title: { en: 'Like a crabapple newly opened', zh: '海棠初开' },
      quote: '真檀口生香，素腰如柳。比之海棠初开，素馨将放',
      caption: { en: 'Sandalwood lips and a willow waist, like a crabapple newly opened or jasmine about to bloom.', zh: '檀口生香，素腰如柳，如海棠初开，素馨将放。' },
    },
    {
      start: 16, end: 28,
      title: { en: 'Flirting with a Zither', zh: '《琴挑》《秋江》' },
      quote: '其余《琴挑》、《秋江》诸戏，情韵如生',
      caption: { en: 'In Flirting with a Zither and The Autumn River, feeling comes vividly to life.', zh: '《琴挑》《秋江》诸戏，情韵如生。' },
    },
    {
      start: 28, end: 36,
      title: { en: 'An immortal of the heavenly library', zh: '嫏嬛掌书仙' },
      quote: '是真嫏嬛掌书仙，岂菊部中所能觏耶？',
      caption: { en: 'Beautiful without and wise within: an immortal keeper of the heavenly library.', zh: '秀外慧中，真嫏嬛掌书仙。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4.4, zh: '真檀口生香，素腰如柳。', en: 'Truly, his sandalwood lips exude fragrance, and his waist sways like a willow.' },
    { start: 4.4, end: 9.4, zh: '比之海棠初开，素馨将放，', en: 'Like a newly opened crabapple, or jasmine just about to bloom,' },
    { start: 9.4, end: 15.6, zh: '其色香一界，几欲使神仙堕刼矣。', en: 'his color and fragrance could almost make an immortal fall into worldly tribulation.' },
    { start: 16.4, end: 22, zh: '其余《琴挑》、《秋江》诸戏，情韵如生，', en: 'In other plays, such as Flirting with a Zither and The Autumn River, feeling comes vividly to life,' },
    { start: 22, end: 27.6, zh: '亦非他人所能。而香心婉婉，秀外慧中。', en: 'beyond the reach of others. His fragrant heart is gentle; he is beautiful without and wise within.' },
    { start: 28.4, end: 33, zh: '是真嫏嬛掌书仙，岂菊部中所能觏耶？', en: 'Truly an immortal keeper of books in the heavenly library—how could one meet him in the theatre?' },
    { start: 33, end: 35.6, zh: '为之诗曰：', en: 'Thus, I composed for him this poem:' },
  ],
});
