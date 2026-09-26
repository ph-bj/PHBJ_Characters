import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 5. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：只见上首站的一个少年，身材瘦小，面目伶俐；下首一个身材笨浊，面色微黄，浓眉近视，惧约有二
 *   十几岁光景。那上首的跄步上前，满面笑容，口称老伯，就跪下叩头。士燮还礼不迭，起来看道：「
 *   老世台的尊范，与令尊竟是一模一样。」聘才正要答应，李元茂已高高的作了一个揖，然后徐徐跪
 *   下，如拜神的拜了四拜。士燮两手扶起，说道：「你令尊正盼望你来，一路辛苦了。」那李元茂掀唇
 *   动齿的咕噜了一句，也听不明白。士燮让他们坐了，聘才道：「家父深感老伯厚恩，铭刻五内，特叫
 *   小侄进京来，给老伯与老伯母请安，还要恳求栽培。
 *
 * Translation: There he beheld a young man standing at the place of honor, slight of build with bright,
 *   alert features. At the lower end stood another, heavily built and somewhat sallow, with
 *   thick brows and nearsighted eyes, appearing to be in his twenties. The young man at the
 *   upper end stepped forward, his face all smiles, addressed him as "Uncle," and dropped to
 *   his knees in a deep kowtow. Shixie hastily returned the courtesy, studied him for a moment,
 *   and remarked, "You carry the distinguished bearing of your family, you are the very image
 *   of your father." Pincai was about to reply when Li Yuanmao raised his clasped hands high in
 *   a sweeping bow, then slowly knelt to prostrate himself four times as though worshipping at
 *   a temple altar. Shixie helped him up with both hands, saying, "Your esteemed father has
 *   been eagerly awaiting your arrival. You must be exhausted from your journey." Li Yuanmao
 *   moved his lips in a mumble that proved entirely unintelligible. Shixie invited them to sit,
 *   and Pincai offered, "My father remains profoundly grateful for your immense kindness, which
 *   is forever etched in his heart. He specifically dispatched me to the capital to offer my
 *   respects to you and your lady, and to earnestly seek your guidance and patronage."
 *
 * Staging: the two visitors side by side, Pincai’s kowtow, and Yuanmao’s four temple bows.
 */
export default defineStory({
  title: { en: 'Two ways to kowtow', zh: '两样叩头' },
  description: {
    en: 'Nimble Pincai kowtows with a smile; heavy, short-sighted Yuanmao bows four times as if before a temple altar.',
    zh: '伶俐的聘才满面笑容叩头；笨浊近视的元茂如拜神般拜了四拜。',
  },
  shots: [
    {
      start: 0, end: 10,
      title: { en: 'Slight and bright, heavy and sallow', zh: '瘦小伶俐，笨浊微黄' },
      quote: '只见上首站的一个少年，身材瘦小，面目伶俐；下首一个身材笨浊',
      caption: { en: 'One is slight with bright, alert features; the other heavy, sallow, thick-browed and short-sighted.', zh: '上首的瘦小伶俐；下首的笨浊微黄，浓眉近视。' },
    },
    {
      start: 10, end: 22,
      title: { en: 'Pincai kowtows', zh: '跪下叩头' },
      quote: '那上首的跄步上前，满面笑容，口称老伯，就跪下叩头。',
      caption: { en: 'Pincai steps forward all smiles, calls him Uncle and kowtows: the very image of his father.', zh: '聘才满面笑容，口称老伯，跪下叩头。' },
    },
    {
      start: 22, end: 36,
      title: { en: 'As if worshipping the gods', zh: '如拜神的拜了四拜' },
      quote: '李元茂已高高的作了一个揖，然后徐徐跪下，如拜神的拜了四拜。',
      caption: { en: 'Yuanmao raises his hands high, kneels slowly and bows four times as at a temple, then mumbles something no one understands.', zh: '元茂高高作揖，徐徐跪下，如拜神的拜了四拜，咕噜一句听不明白。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 5, zh: '只见上首站的一个少年，身材瘦小，面目伶俐；', en: 'At the upper end stood a young man, slight of build with bright, alert features;' },
    { start: 5, end: 9.6, zh: '下首一个身材笨浊，面色微黄，浓眉近视，二十几岁光景。', en: 'at the lower end another, heavy and sallow, thick-browed and short-sighted, in his twenties.' },
    { start: 10.4, end: 15.6, zh: '那上首的跄步上前，满面笑容，口称老伯，就跪下叩头。', en: 'The first stepped forward all smiles, called him “Uncle,” and kowtowed deeply.' },
    { start: 15.6, end: 21.6, zh: '士燮还礼不迭：「老世台的尊范，与令尊竟是一模一样。」', en: 'Shixie hastily returned the courtesy: “You are the very image of your father.”' },
    { start: 22.4, end: 28, zh: '李元茂已高高的作了一个揖，然后徐徐跪下，如拜神的拜了四拜。', en: 'Li Yuanmao raised his hands high, slowly knelt, and bowed four times as though at a temple altar.' },
    { start: 28, end: 31.6, zh: '士燮两手扶起：「你令尊正盼望你来，一路辛苦了。」', en: 'Shixie helped him up: “Your father has been eagerly awaiting you. You must be tired.”' },
    { start: 31.6, end: 35.6, zh: '那李元茂掀唇动齿的咕噜了一句，也听不明白。', en: 'Li Yuanmao moved his lips in a mumble that was entirely unintelligible.' },
  ],
});
