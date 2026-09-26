import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 10. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：次日聘才、元茂到上屋去拜见了颜夫人，又将南边带来的土仪与他父亲的书信一并呈上，书中无非恳
 *   切求照应的话。另有致王文辉一信，士燮叫他迟日亲自送去。这聘才本是个聪明人，又经乃父陶镕，
 *   这一张嘴，真个千伶百俐，善于哄骗，所以在梅宅不到十天，满宅的人都说他好。子玉虽与其两道，
 *   然觉此人也无可厌处，尚可藉以盘桓，遣此岑寂。
 *
 * Translation: The following day, Pincai and Yuanmao visited the main residence to pay their respects to
 *   Lady Yan. They presented regional gifts brought from the south, alongside letters from
 *   their fathers, each brimming with earnest pleas for continued patronage and care. Among the
 *   missives was a letter addressed to Wang Wenhui, Shixie instructed Pincai to deliver it
 *   personally at a later date. Pincai was inherently clever and had been thoroughly molded by
 *   his father's worldly tutelage. His tongue possessed a thousand nimble tricks, endlessly
 *   adept at charming and cajoling. Consequently, within less than ten days, every member of
 *   the Mei household was singing his praises. Although Ziyu was of an altogether different
 *   bent, he found Pincai far from disagreeable, serving as a pleasant enough companion to wile
 *   away the quiet hours.
 *
 * Staging: gifts for Lady Yan, a letter for Wenhui, and the household charmed.
 */
export default defineStory({
  title: { en: 'Everyone speaks well of him', zh: '满宅的人都说他好' },
  description: {
    en: 'The visitors present gifts and letters to Lady Yan; Pincai is given a letter for Wang Wenhui; within ten days his clever tongue has charmed the household.',
    zh: '二人拜见颜夫人，呈上土仪书信；聘才另有致王文辉一信；不到十天满宅都说他好。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'Gifts from the south', zh: '南边带来的土仪' },
      quote: '次日聘才、元茂到上屋去拜见了颜夫人，又将南边带来的土仪……呈上',
      caption: { en: 'Next day they pay respects to Lady Yan and present gifts from the south and their fathers’ letters.', zh: '次日二人拜见颜夫人，呈上土仪与书信。' },
    },
    {
      start: 12, end: 24,
      title: { en: 'A letter for Wenhui', zh: '致王文辉一信' },
      quote: '另有致王文辉一信，士燮叫他迟日亲自送去。',
      caption: { en: 'One letter is for Wang Wenhui; Shixie tells Pincai to deliver it himself.', zh: '另有致王文辉一信，士燮叫他亲自送去。' },
    },
    {
      start: 24, end: 36,
      title: { en: 'A thousand nimble tricks', zh: '千伶百俐' },
      quote: '这一张嘴，真个千伶百俐，善于哄骗……满宅的人都说他好。',
      caption: { en: 'Pincai’s tongue has a thousand tricks; within ten days everyone in the house sings his praises.', zh: '聘才一张嘴千伶百俐，不到十天满宅的人都说他好。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '次日聘才、元茂到上屋去拜见了颜夫人，', en: 'The next day Pincai and Yuanmao paid their respects to Lady Yan,' },
    { start: 6, end: 11.6, zh: '又将南边带来的土仪与他父亲的书信一并呈上。', en: 'presenting gifts from the south along with their fathers’ letters.' },
    { start: 12.4, end: 23.6, zh: '另有致王文辉一信，士燮叫他迟日亲自送去。', en: 'One letter was addressed to Wang Wenhui; Shixie told Pincai to deliver it himself.' },
    { start: 24.4, end: 29, zh: '这聘才本是个聪明人，这一张嘴，真个千伶百俐，善于哄骗，', en: 'Pincai was clever, and his tongue had a thousand nimble tricks for charming and cajoling;' },
    { start: 29, end: 32.6, zh: '所以在梅宅不到十天，满宅的人都说他好。', en: 'within ten days, the whole Mei household sang his praises.' },
    { start: 32.6, end: 35.6, zh: '子玉虽与其两道，然觉此人也无可厌处。', en: 'Though of a different bent, Ziyu found him far from disagreeable.' },
  ],
});
