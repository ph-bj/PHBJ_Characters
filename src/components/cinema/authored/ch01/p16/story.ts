import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 16.
 *
 * 原文：其演《瑶台》、《盘秋》、《亭会》诸戏，真见香心如诉，娇韵欲流。吴绛仙秀色可餐，赵合德寒泉
 *   浸玉，苏郎兼而有之。尝语人曰：「余不幸坠落梨园，但既为此业，则当安之。谁谓此中不可守贞抱
 *   洁，而必随波逐流以自苦者。」其志如此。而遥情胜概，罕见其匹焉。为之诗曰：
 *
 * Translation: In his performances of plays like "The Jade Terrace," "Autumn at the Tray," and "The
 *   Pavilion Meeting," one truly witnesses a fragrant heart seeming to pour out its grievances,
 *   a delicate grace on the verge of flowing over. The feast-worthy loveliness of Wu Jiangxian
 *   and the jade-immersing cold springs of Zhao Hede—young Su possesses both simultaneously. He
 *   once remarked to someone: "It was my misfortune to fall into the pear orchard, but since I
 *   have taken up this profession, I must find peace within it. Who decrees that in this realm
 *   one cannot guard his purity and uphold his chastity, but must instead drift with the
 *   current and torment himself?" Such is his resolve. And his sweeping sentiments and
 *   transcendent bearing find scarcely an equal anywhere. Thus, I composed for him this poem:
 *
 * Staged from album beats (cinema/beats/album.ts): Su Huifang on stage under placards of his plays, then a portrait with his words.
 */
export default defineStory({
  title: { en: 'Keeping pure in the pear orchard', zh: '守贞抱洁' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. Su Huifang’s plays, and his own words on keeping his purity.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。苏蕙芳所演诸戏，及其守贞抱洁之言。',
  },
  shots: [
    {
      start: 0, end: 16,
      title: { en: 'His plays', zh: '《瑶台》《盘秋》《亭会》' },
      quote: '其演《瑶台》、《盘秋》、《亭会》诸戏，真见香心如诉，娇韵欲流。',
      caption: { en: 'On stage in The Jade Terrace, Autumn at the Tray and The Pavilion Meeting, a fragrant heart seems to pour out its grief.', zh: '《瑶台》《盘秋》《亭会》诸戏，香心如诉，娇韵欲流。' },
    },
    {
      start: 16, end: 36,
      title: { en: 'In his own words', zh: '守贞抱洁' },
      quote: '余不幸坠落梨园……谁谓此中不可守贞抱洁',
      caption: { en: 'His own words: fallen into the theatre by misfortune, he will find peace in it, and keep his purity.', zh: '其自言：不幸坠落梨园，既为此业，当安之；此中亦可守贞抱洁。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '其演《瑶台》、《盘秋》、《亭会》诸戏，', en: 'In his performances of The Jade Terrace, Autumn at the Tray and The Pavilion Meeting,' },
    { start: 6, end: 11, zh: '真见香心如诉，娇韵欲流。', en: 'one truly sees a fragrant heart pouring out its grievances, a delicate grace about to overflow.' },
    { start: 11, end: 15.6, zh: '吴绛仙秀色可餐，赵合德寒泉浸玉，苏郎兼而有之。', en: 'The loveliness of Wu Jiangxian and the cool grace of Zhao Hede—young Su possesses both.' },
    { start: 16.4, end: 21, zh: '尝语人曰：「余不幸坠落梨园，但既为此业，则当安之。', en: 'He once said: “It was my misfortune to fall into the pear orchard, but since this is my profession, I must find peace in it.' },
    { start: 21, end: 27, zh: '谁谓此中不可守贞抱洁，而必随波逐流以自苦者。」', en: 'Who says one cannot guard one’s purity here, but must drift with the current and torment oneself?”' },
    { start: 27, end: 31.4, zh: '其志如此。而遥情胜概，罕见其匹焉。', en: 'Such is his resolve; his sweeping spirit finds scarcely an equal.' },
    { start: 31.4, end: 35.6, zh: '为之诗曰：', en: 'Thus, I composed for him this poem:' },
  ],
});
