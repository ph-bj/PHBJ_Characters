import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 11. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：正在看他们时，觉得自己身旁，又来了两个人。回头一看：
 *
 * Translation: While lost in observation, Pincai realized two gentlemen had arrived at his own table.
 *   Turning to look, he took their measure.
 *
 * Staging: Pincai gazing up at the galleries; the two newcomers squeezing in beside him; his turn to look.
 */
export default defineStory({
  title: { en: 'Two gentlemen sit down', zh: '又来了两个人' },
  description: {
    en: 'While Pincai watches the galleries, two gentlemen arrive and settle at his own table, and he turns to take their measure.',
    zh: '聘才正看得出神，身旁又来了两个人，他回头一看。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: 'Newcomers', zh: '身旁又来了两个人' },
      quote: '正在看他们时，觉得自己身旁，又来了两个人。',
      caption: { en: 'Still gazing at the galleries, Pincai feels two men settle in at his table.', zh: '聘才正看楼上，身旁又来了两个人。' },
    },
    {
      start: 18, end: 36,
      title: { en: 'He turns to look', zh: '回头一看' },
      quote: '回头一看',
      caption: { en: 'He turns to take them in.', zh: '他回头一看。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 17.6, zh: '正在看他们时，觉得自己身旁，又来了两个人。', en: 'While he was watching them, he became aware that two men had arrived beside him.' },
    { start: 18.4, end: 35.6, zh: '回头一看：', en: 'He turned to look.' },
  ],
});
