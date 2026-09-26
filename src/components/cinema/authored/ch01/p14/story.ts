import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 14.
 *
 * 原文：舞袖轻盈弱不胜，难将水月比清澄。 自从珠字名卿后，能使珠光百倍增。 瘦沈腰肢绝可怜，一生
 *   爱好自天然。 风流别有消魂处，始信人间有谪仙。 子玉笑道：「这不是说戏班里的小旦么？这是
 *   那里的小旦，你赞得这样好？」仲清道：「现在这里的，你不见说在联锦班么？」于玉道：「我不
 *   信，这是竹君撒谎。我今年也看过一天的戏，几曾见小旦中有这样好人？」南湘道：「你那天看的不
 *   知是什么班子，自然没有好的了。」子玉再看第二题的是：瑶台璧月苏惠芳 惠芳姓苏氏，字媚香，
 *   年十七岁。姑苏人。
 *
 * Translation: Your dancing sleeves drift light and frail, too delicate to bear; It is hard to liken such
 *   clarity even to the moon upon the water. Since the character for "Pearl" became the name
 *   that graces you, It has multiplied the luster of pearls a hundredfold. Your waist, slender
 *   as Shen Yue's, is utterly lovely; Your lifelong love of elegance springs from nature alone.
 *   Your romantic grace holds a separate, soul-melting charm; Only now do I believe an exiled
 *   immortal walks the mortal realm. Ziyu smiled and said, "Are these not descriptions of young
 *   dan actors in the theatrical troupes? Which troupe boasts such an actor, that you praise
 *   him so highly?" Zhongqing replied, "He is right here in the capital; did you not read that
 *   he belongs to the Lianjin troupe?" Ziyu countered, "I don't believe it; Zhujun is making
 *   this up. I spent a day watching plays this year, and when did I ever see someone so
 *   extraordinary among the young dan?" Nanxiang retorted, "Who knows what miserable troupe you
 *   watched that day; naturally, you saw no one worthwhile." Ziyu then looked at the second
 *   entry, which read: Su Huifang: A Jade Moon over the Jasper Terrace. Huifang's surname is
 *   Su, his courtesy name Meixiang, and he is seventeen years of age. A native of Suzhou.
 *
 * Staged from album beats (cinema/beats/album.ts): Baozhu’s poem on a scroll, the three friends arguing over the album, then Su Huifang’s emblem.
 */
export default defineStory({
  title: { en: 'A poem for Baozhu, and a doubter', zh: '赠宝珠诗，子玉不信' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. Baozhu’s poem, Ziyu’s disbelief in the study, and the second entry: Su Huifang.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。宝珠之诗，子玉书房中不信，继而第二题苏蕙芳。',
  },
  shots: [
    {
      start: 0, end: 13,
      title: { en: 'A poem for Baozhu', zh: '赠宝珠诗' },
      quote: '舞袖轻盈弱不胜……始信人间有谪仙。',
      caption: { en: 'Nanxiang’s two quatrains for Baozhu are brushed onto a scroll, line by line.', zh: '南湘赠宝珠的两首绝句，一行行写上画轴。' },
    },
    {
      start: 13, end: 27,
      title: { en: '“I don’t believe it”', zh: '子玉不信' },
      quote: '子玉笑道：「这不是说戏班里的小旦么？……」',
      caption: { en: 'In the study, Ziyu laughs at the praise: he has watched the actors and never seen such a one. Zhongqing and Nanxiang insist.', zh: '书房中子玉笑说不信，仲清、南湘各执一词。' },
    },
    {
      start: 27, end: 36,
      title: { en: 'A jade moon over the jasper terrace', zh: '瑶台璧月' },
      quote: '子玉再看第二题的是：瑶台璧月苏惠芳',
      caption: { en: 'The second entry: Su Huifang, “A Jade Moon over the Jasper Terrace,” seventeen, of Suzhou.', zh: '第二题：瑶台璧月苏惠芳，年十七，姑苏人。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 1.8, zh: '舞袖轻盈弱不胜，', en: 'Your dancing sleeves drift light and frail, too delicate to bear;' },
    { start: 1.8, end: 3.1, zh: '难将水月比清澄。', en: 'It is hard to liken such clarity even to the moon upon the water.' },
    { start: 3.1, end: 4.5, zh: '自从珠字名卿后，', en: 'Since the character for “Pearl” became the name that graces you,' },
    { start: 4.5, end: 5.9, zh: '能使珠光百倍增。', en: 'It has multiplied the luster of pearls a hundredfold.' },
    { start: 5.9, end: 7.3, zh: '瘦沈腰肢绝可怜，', en: 'Your waist, slender as Shen Yue’s, is utterly lovely;' },
    { start: 7.3, end: 8.7, zh: '一生爱好自天然。', en: 'Your lifelong love of elegance springs from nature alone.' },
    { start: 8.7, end: 10, zh: '风流别有消魂处，', en: 'Your romantic grace holds a separate, soul-melting charm;' },
    { start: 10, end: 11.4, zh: '始信人间有谪仙。', en: 'Only now do I believe an exiled immortal walks the mortal realm.' },
    { start: 13.4, end: 16.8, zh: '子玉笑道：「这不是说戏班里的小旦么？这是那里的小旦，你赞得这样好？」', en: 'Ziyu smiled: “Aren’t these young dan actors of the troupes? Which one could you praise so highly?”' },
    { start: 16.8, end: 19.4, zh: '仲清道：「现在这里的，你不见说在联锦班么？」', en: 'Zhongqing: “He is right here in the capital—didn’t you read he is in the Lianjin troupe?”' },
    { start: 19.4, end: 23.2, zh: '子玉道：「我不信，这是竹君撒谎。我今年也看过一天的戏，几曾见小旦中有这样好人？」', en: 'Ziyu: “I don’t believe it; Zhujun is making it up. I watched plays this year and never saw such a one.”' },
    { start: 23.2, end: 26.6, zh: '南湘道：「你那天看的不知是什么班子，自然没有好的了。」', en: 'Nanxiang: “Who knows what miserable troupe you saw that day; naturally there was no one worthwhile.”' },
    { start: 27.4, end: 31, zh: '子玉再看第二题的是：', en: 'Ziyu then looked at the second entry:' },
    { start: 31, end: 35.6, zh: '瑶台璧月苏惠芳。惠芳姓苏氏，字媚香，年十七岁。姑苏人。', en: 'Su Huifang: A Jade Moon over the Jasper Terrace. Courtesy name Meixiang, seventeen, of Suzhou.' },
  ],
});
