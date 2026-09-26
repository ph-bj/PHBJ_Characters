import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 19. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：富、贵二人也问了聘才的姓，又问了他是那一处人，现在当什么差？聘才道：「小弟是江宁府人，才到京
 *   ，尚未谋干什么。此时寓在鸣坷坊梅世伯梅大人处。」富三道：「江宁是个好地方，我小时候跟着我们老
 *   爷子到过江宁。那时我们老爷子做江宁藩司，我才十二岁，后来升了广东巡抚。你方才说鸣坷坊的梅大人
 *   ，他也在广东做过学差，与我们老爷子很相好。以后大家都回了京，我们老爷子做了侍郎，不上一年，就
 *   不在了。
 *
 * Translation: Fu and Gui returned the inquiry, asking Pincai's origins and current posting. Pincai
 *   replied, "I hail from Jiangning Prefecture. Having only recently arrived in the capital, I
 *   have not yet secured a position. I currently reside as a guest in the Mingke Lane estate of
 *   my family's old friend, Lord Mei." Fu the Third's eyes lit up. "Jiangning is a magnificent
 *   place. In my youth, I accompanied my late father there when he served as Provincial
 *   Treasurer. I was but twelve years old. He was later promoted to Governor of Guangdong. The
 *   Lord Mei you speak of—he served as Education Commissioner in Guangdong and shared a deep
 *   bond with my father. Later, they both returned to the capital, where my father was appointed
 *   Vice Minister. Alas, within the year, he passed away."
 *
 * Staging: Pincai answering at the table; Fu’s memories as three scenes: a boy in the Jiangning treasury
 *   yamen, the governor and Lord Mei in Guangdong, and a mourning hall in the capital.
 */
export default defineStory({
  title: { en: 'Old family friends', zh: '世谊' },
  description: {
    en: 'Pincai says he is from Jiangning, lodging with Lord Mei. Fu the Third lights up: as a boy of twelve he lived there while his father was Provincial Treasurer; later his father governed Guangdong, where Lord Mei was Education Commissioner and a close friend; back in the capital his father became Vice Minister, and died within the year.',
    zh: '聘才说是江宁人，寓在梅大人处。富三说他十二岁随父在江宁，父亲做江宁藩司，后升广东巡抚，梅大人在广东做学差，与父亲相好；回京做了侍郎，不上一年就不在了。',
  },
  shots: [
    {
      start: 0, end: 9,
      title: { en: 'From Jiangning', zh: '江宁府人' },
      quote: '小弟是江宁府人，才到京……寓在鸣珂坊梅世伯梅大人处。',
      caption: { en: 'Pincai: from Jiangning, just come to the capital, lodging with Lord Mei.', zh: '聘才：江宁人，才到京，寓在梅大人处。' },
    },
    {
      start: 9, end: 20,
      title: { en: 'The Treasurer’s son', zh: '江宁藩司' },
      quote: '那时我们老爷子做江宁藩司，我才十二岁',
      caption: { en: 'Fu lights up: at twelve he lived in Jiangning, where his father was Provincial Treasurer.', zh: '富三：十二岁时，父亲做江宁藩司。' },
    },
    {
      start: 20, end: 29,
      title: { en: 'Governor and Commissioner', zh: '广东巡抚' },
      quote: '后来升了广东巡抚……他也在广东做过学差，与我们老爷子很相好。',
      caption: { en: 'His father became Governor of Guangdong, where Lord Mei was Education Commissioner and his friend.', zh: '父亲升了广东巡抚，梅大人在广东做学差，两人很相好。' },
    },
    {
      start: 29, end: 36,
      title: { en: 'Within the year', zh: '不上一年' },
      quote: '我们老爷子做了侍郎，不上一年，就不在了。',
      caption: { en: 'Back in the capital his father became Vice Minister—and within a year was gone.', zh: '回京做了侍郎，不上一年就不在了。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4.6, zh: '富、贵二人也问了聘才的姓，又问了他是那一处人，现在当什么差？', en: 'Fu and Gui asked Pincai’s name, his home, and his post.' },
    { start: 4.6, end: 8.6, zh: '聘才道：「小弟是江宁府人，才到京，寓在鸣珂坊梅大人处。」', en: '“I’m from Jiangning, just arrived; I lodge with Lord Mei in Mingke Lane.”' },
    { start: 9.4, end: 14.6, zh: '富三道：「江宁是个好地方，我小时候跟着我们老爷子到过江宁。', en: 'Fu: “Jiangning’s a fine place—I was there as a boy with my father.' },
    { start: 14.6, end: 19.6, zh: '那时我们老爷子做江宁藩司，我才十二岁，后来升了广东巡抚。', en: 'He was Treasurer of Jiangning; I was twelve. Later he became Governor of Guangdong.' },
    { start: 20.4, end: 28.6, zh: '你方才说鸣珂坊的梅大人，他也在广东做过学差，与我们老爷子很相好。', en: 'Your Lord Mei served as Education Commissioner in Guangdong, and was a good friend of my father’s.' },
    { start: 29.4, end: 35.6, zh: '以后大家都回了京，我们老爷子做了侍郎，不上一年，就不在了。', en: 'Later they both came back to the capital; my father became Vice Minister, and within a year he was gone.”' },
  ],
});
