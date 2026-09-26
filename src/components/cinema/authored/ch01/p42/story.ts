import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 42.
 *
 * 原文：过了两日，子玉于早饭后告了半天假，回去看南湘、仲清。
 *
 * Translation: Two days later, Ziyu requested a half-day's leave after breakfast and went back to visit
 *   Nanxiang and Zhongqing.
 *
 * Staged from tableau beats (cinema/beats/tableau.ts): Ziyu bowing to his teacher, then setting out through the winter gate.
 */
export default defineStory({
  title: { en: 'A half-day’s leave', zh: '告了半天假' },
  description: {
    en: 'Two days later Ziyu asks for a half-day’s leave to visit Nanxiang and Zhongqing.',
    zh: '过了两日，子玉告半天假，去看南湘、仲清。',
  },
  shots: [
    {
      start: 0, end: 16,
      title: { en: 'Asking for leave', zh: '告了半天假' },
      quote: '过了两日，子玉于早饭后告了半天假',
      caption: { en: 'Two days later, after breakfast, Ziyu asks his teacher for half a day’s leave.', zh: '过了两日，子玉早饭后向先生告了半天假。' },
    },
    {
      start: 16, end: 36,
      title: { en: 'To visit his friends', zh: '去看南湘、仲清' },
      quote: '回去看南湘、仲清。',
      caption: { en: 'He sets out to visit Nanxiang and Zhongqing.', zh: '子玉出门去看南湘、仲清。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 15.6, zh: '过了两日，子玉于早饭后告了半天假，', en: 'Two days later, Ziyu requested a half-day’s leave after breakfast' },
    { start: 16.4, end: 35.6, zh: '回去看南湘、仲清。', en: 'and went back to visit Nanxiang and Zhongqing.' },
  ],
});
