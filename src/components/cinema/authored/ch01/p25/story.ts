import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 25.
 *
 * 原文：隶联珠部。初日芙蕖，晓风杨柳。娴吟咏，工丝竹，围碁、马吊，皆精绝一时。东坡《海棠》诗
 *   云：「嫣然一笑竹篱间，桃李漫山总粗俗。」温柔旖旎中，自具不可夺之志，真殊艳也。其演《折柳
 *   阳关》一出，名噪京师。见其婉转娇柔，哀情艳思，如睹霍小玉生平，不必再谈《卖钗》、《分鞋》
 *   诸曲，已恨黄衫剑容，不能杀却此负情郎也。再演《藏舟》、《草地》、《寄扇》等戏，情思皆足动
 *   人。真琼树朝朝，金莲步步，有临春、结绮之遗韵矣。为之诗曰：
 *
 * Translation: He belongs to the Lianzhu troupe. He is like a lotus greeting the morning sun, or a willow
 *   swaying in the dawn breeze. Fluent in poetry, skilled in strings and woodwinds, his mastery
 *   of Go and the card game Madiao are both absolutely unparalleled in his time. Su Dongpo's
 *   poem "Crabapple" reads: "With a captivating smile amidst the bamboo fence, the peaches and
 *   plums covering the mountains are entirely vulgar." Within his gentle and enchanting
 *   demeanor, he naturally possesses an unyielding resolve; he is truly an exceptional beauty.
 *   His performance of the scene "Willow at Yang Pass" brought him immense fame throughout the
 *   capital. Seeing his graceful tenderness and his sorrowful, beautiful yearning is like
 *   witnessing the very life of Huo Xiaoyu; there is no need to even mention plays like
 *   "Selling the Hairpin" or "Dividing the Shoes"—one already hates the swordsman in the yellow
 *   shirt for failing to slay that heartless lover. When he performs "Hiding the Boat," "Grass
 *   Ground," and "Sending the Fan," his deep emotions are utterly moving. Truly, he is like a
 *   jade tree morning after morning, with golden lotus steps at every turn, possessing the
 *   lingering charm of the pavilions of Linchun and Jieqi. Thus, I composed for him this poem:
 *
 * Staged from album beats (cinema/beats/album.ts): a portrait of Li Yulin, then his willow-farewell scene and his other plays on stage.
 */
export default defineStory({
  title: { en: 'Li Yulin, willow at Yang Pass', zh: '折柳阳关' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. Li Yulin: his accomplishments and his celebrated scenes.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。李玉林：才艺及其名剧。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'A lotus at sunrise', zh: '初日芙蕖，晓风杨柳' },
      quote: '隶联珠部。初日芙蕖，晓风杨柳。娴吟咏，工丝竹',
      caption: { en: 'Of the Lianzhu troupe: a lotus greeting the sun, a willow in the dawn breeze; poet, musician, master of Go.', zh: '隶联珠部；初日芙蕖，晓风杨柳；娴吟咏，工丝竹，精于围棋马吊。' },
    },
    {
      start: 12, end: 24,
      title: { en: '“Willow at Yang Pass”', zh: '《折柳阳关》' },
      quote: '其演《折柳阳关》一出，名噪京师。',
      caption: { en: 'His “Willow at Yang Pass,” a willow branch in hand, made him famous throughout the capital.', zh: '《折柳阳关》一出，名噪京师。' },
    },
    {
      start: 24, end: 36,
      title: { en: 'Hiding the Boat, Sending the Fan', zh: '《藏舟》《寄扇》' },
      quote: '再演《藏舟》、《草地》、《寄扇》等戏，情思皆足动人。',
      caption: { en: 'In Hiding the Boat, Grass Ground and Sending the Fan, his feeling moves everyone who watches.', zh: '《藏舟》《草地》《寄扇》诸戏，情思皆足动人。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4.2, zh: '隶联珠部。初日芙蕖，晓风杨柳。', en: 'Of the Lianzhu troupe: like a lotus greeting the sun, or a willow in the dawn breeze.' },
    { start: 4.2, end: 8, zh: '娴吟咏，工丝竹，围碁、马吊，皆精绝一时。', en: 'Fluent in poetry, skilled in strings and woodwinds, unrivalled at Go and at cards.' },
    { start: 8, end: 11.6, zh: '温柔旖旎中，自具不可夺之志，真殊艳也。', en: 'Within his gentle charm lies an unyielding resolve: truly an exceptional beauty.' },
    { start: 12.4, end: 16.6, zh: '其演《折柳阳关》一出，名噪京师。', en: 'His “Willow at Yang Pass” brought him fame throughout the capital.' },
    { start: 16.6, end: 23.6, zh: '见其婉转娇柔，哀情艳思，如睹霍小玉生平，', en: 'His grace and sorrowful yearning are like witnessing the very life of Huo Xiaoyu.' },
    { start: 24.4, end: 29.4, zh: '再演《藏舟》、《草地》、《寄扇》等戏，情思皆足动人。', en: 'In Hiding the Boat, Grass Ground and Sending the Fan, his deep emotions are utterly moving.' },
    { start: 29.4, end: 35.6, zh: '真琼树朝朝，金莲步步，有临春、结绮之遗韵矣。为之诗曰：', en: 'A jade tree every morning, golden lotus steps at every turn. Thus, I composed for him this poem:' },
  ],
});
