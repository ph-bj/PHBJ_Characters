import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 38. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：此时日已西沉，富、贵两人急急的赶城，聘才送了他们上车，同着四儿慢慢步行而归。到家时点了灯了，
 *   子玉、元茂都在书房夜课。聘才换了衣裳，趿着鞋，喝了几杯茶，坐了一回。
 *
 * Translation: The sun had sunk low into the west; Fu and Gui hurried back toward the city gates. Pincai
 *   escorted them to their carriage, watching them depart before slowly walking the darkening
 *   streets home with Si'er. By the time they arrived, the estate was bathed in lamplight. Ziyu
 *   and Yuanmao were sequestered in the study, immersed in their evening lessons. Pincai changed
 *   out of his street clothes, slipped into comfortable shoes, drank several cups of hot tea,
 *   and sat in quiet contemplation.
 *
 * Staging: carts hurrying toward the city gate against the sunset; Pincai and Si’er walking home as the
 *   light goes; the lit study windows; Pincai in his room with tea.
 */
export default defineStory({
  title: { en: 'Home by lamplight', zh: '点了灯了' },
  description: {
    en: 'The sun sinks; Fu and Gui hurry for the city gate, and Pincai sees them into their cart and walks slowly home with Si’er. The lamps are lit; Ziyu and Yuanmao are at their evening lessons. Pincai changes, slips on his shoes, drinks a few cups of tea and sits.',
    zh: '日已西沉，富、贵二人急急赶城；聘才送他们上车，同四儿慢慢步行而归。到家点了灯，子玉、元茂在书房夜课。聘才换了衣裳，趿着鞋，喝了几杯茶，坐了一回。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'Racing the gate', zh: '急急的赶城' },
      quote: '此时日已西沉，富、贵两人急急的赶城',
      caption: { en: 'The sun going down, Fu and Gui hurry for the city gate; Pincai sees them into their cart.', zh: '日已西沉，富、贵急急赶城，聘才送他们上车。' },
    },
    {
      start: 12, end: 24,
      title: { en: 'Walking home', zh: '慢慢步行而归' },
      quote: '同着四儿慢慢步行而归',
      caption: { en: 'Pincai walks slowly home with Si’er through the dusk.', zh: '聘才同四儿慢慢步行回家。' },
    },
    {
      start: 24, end: 36,
      title: { en: 'Lamps lit', zh: '点了灯了' },
      quote: '到家时点了灯了，子玉、元茂都在书房夜课。',
      caption: { en: 'At home the lamps are lit and Ziyu and Yuanmao are at their lessons; Pincai changes and drinks tea.', zh: '到家点了灯，子玉、元茂在书房夜课；聘才换了衣裳，喝了几杯茶。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 11.6, zh: '此时日已西沉，富、贵两人急急的赶城，聘才送了他们上车，', en: 'The sun had sunk in the west; Fu and Gui hurried to reach the city gate, and Pincai saw them into their cart,' },
    { start: 12.4, end: 23.6, zh: '同着四儿慢慢步行而归。', en: 'then walked slowly home with Si’er.' },
    { start: 24.4, end: 29.6, zh: '到家时点了灯了，子玉、元茂都在书房夜课。', en: 'By the time he got home the lamps were lit; Ziyu and Yuanmao were at their evening lessons in the study.' },
    { start: 29.6, end: 35.6, zh: '聘才换了衣裳，趿着鞋，喝了几杯茶，坐了一回。', en: 'Pincai changed, slipped on his shoes, drank a few cups of tea and sat a while.' },
  ],
});
