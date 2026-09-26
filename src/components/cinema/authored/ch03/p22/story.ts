import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 22. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：不一刻，蓉官又过来坐下，富三笑道：「空巴结他，也不带你去，磨了半天，一顿饭都磨不出来。」蓉官
 *   点着头道：「不错，我磨他。他叫我，我也不去。这位老爷子不是好相交的。」
 *
 * Translation: Moments later, Rongguan glided back to their table. Fu the Third teased him, "A waste of
 *   flattery, it seems. He didn't even take you with him. You hovered around him for half the
 *   day and couldn't even secure a dinner invitation." Rongguan nodded coolly. "Indeed, I
 *   hovered. But had he called for me, I would not have gone. That old patriarch is not a man
 *   one wishes to befriend."
 *
 * Staging: Rongguan sliding back onto the bench; Fu’s teasing; Rongguan’s cool answer as the big box stands
 *   empty behind him.
 */
export default defineStory({
  title: { en: 'Not a man to befriend', zh: '不是好相交的' },
  description: {
    en: 'Rongguan comes back; Fu teases him for fawning all afternoon without even winning a dinner. Rongguan says he wouldn’t have gone if asked: that is not a man to befriend.',
    zh: '蓉官回来，富三笑他白巴结了半天，一顿饭都磨不出来。蓉官说他叫也不去，那位不是好相交的。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: 'All that for nothing', zh: '空巴结他' },
      quote: '空巴结他，也不带你去，磨了半天，一顿饭都磨不出来。',
      caption: { en: 'Fu teases: all that flattery and not even a dinner out of it.', zh: '富三笑：空巴结他半天，一顿饭都磨不出来。' },
    },
    {
      start: 18, end: 36,
      title: { en: '“I wouldn’t go”', zh: '他叫我，我也不去' },
      quote: '他叫我，我也不去。这位老爷子不是好相交的。',
      caption: { en: 'Rongguan: if he’d asked, he wouldn’t have gone—not a man to befriend.', zh: '蓉官：他叫我我也不去，这位不是好相交的。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 8.6, zh: '不一刻，蓉官又过来坐下，', en: 'Soon Rongguan came back and sat down.' },
    { start: 8.6, end: 17.6, zh: '富三笑道：「空巴结他，也不带你去，磨了半天，一顿饭都磨不出来。」', en: 'Fu laughed: “All that fawning, and he didn’t take you—half a day’s wheedling without even a dinner.”' },
    { start: 18.4, end: 35.6, zh: '蓉官点着头道：「不错，我磨他。他叫我，我也不去。这位老爷子不是好相交的。」', en: 'Rongguan nodded: “Quite right, I wheedled. But if he’d called me I wouldn’t have gone. That one’s no man to befriend.”' },
  ],
});
