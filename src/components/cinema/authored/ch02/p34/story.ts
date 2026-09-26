import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 34. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：「这个醋劲儿却也少有的。」且按下这边。
 *
 * Translation: "That jealous temperament is truly rare." But let us set that aside for now.
 *
 * Staging: Wang Xun’s answer, and the banquet hall waiting.
 */
export default defineStory({
  title: { en: 'A rare jealousy', zh: '醋劲儿少有' },
  description: {
    en: '“That jealousy is rare indeed.” The story leaves them there and turns to the banquet.',
    zh: '「这个醋劲儿却也少有的。」且按下这边。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: 'A rare jealousy', zh: '醋劲儿' },
      quote: '这个醋劲儿却也少有的。',
      caption: { en: '“That jealous temper is rare indeed.”', zh: '「这个醋劲儿却也少有的。」' },
    },
    {
      start: 18, end: 36,
      title: { en: 'Let us leave them', zh: '且按下这边' },
      quote: '且按下这边。',
      caption: { en: 'But let us leave them there.', zh: '且按下这边。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 17.6, zh: '「这个醋劲儿却也少有的。」', en: '“That jealous temperament is truly rare.”' },
    { start: 18.4, end: 35.6, zh: '且按下这边。', en: 'But let us set that aside for now.' },
  ],
});
