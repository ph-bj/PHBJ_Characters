import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 39. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：少停，子玉、元茂出来，同到聘才房里。
 *
 * Translation: Shortly thereafter, Ziyu and Yuanmao emerged from their studies, making their way to
 *   Pincai's room.
 *
 * Staging: the study door opening on lamplight, the two young men crossing the dark courtyard to Pincai’s
 *   lit window.
 */
export default defineStory({
  title: { en: 'Visitors', zh: '同到聘才房里' },
  description: {
    en: 'Soon Ziyu and Yuanmao finish their lessons and come together to Pincai’s room.',
    zh: '少停，子玉、元茂出来，同到聘才房里。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: 'Lessons over', zh: '子玉、元茂出来' },
      quote: '少停，子玉、元茂出来',
      caption: { en: 'Their lessons done, Ziyu and Yuanmao come out of the study.', zh: '少停，子玉、元茂从书房出来。' },
    },
    {
      start: 18, end: 36,
      title: { en: 'To Pincai’s room', zh: '同到聘才房里' },
      quote: '同到聘才房里。',
      caption: { en: 'They cross the courtyard together to Pincai’s room.', zh: '同到聘才房里。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 17.6, zh: '少停，子玉、元茂出来，', en: 'Before long Ziyu and Yuanmao came out,' },
    { start: 18.4, end: 35.6, zh: '同到聘才房里。', en: 'and went together to Pincai’s room.' },
  ],
});
