import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 3. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：既是他儿子远来投奔，老弟也是义无所辞的。」士燮叫梅进进来问了，果然是他。一个是西席李先生
 *   之子。吩咐梅进：
 *
 * Translation: "Since his son has traveled this great distance to seek refuge, you are bound by duty and
 *   cannot well turn him away." Shixie summoned Mei Jin to verify their identities, and indeed,
 *   one was the son of Mr. Li, the resident tutor. He then instructed Mei Jin:
 *
 * Staging: Wenhui’s advice, and the servant Mei Jin receiving orders.
 */
export default defineStory({
  title: { en: 'Bound by duty', zh: '义无所辞' },
  description: {
    en: 'Wenhui says Shixie cannot turn the boy away; the servant Mei Jin confirms who the visitors are.',
    zh: '文辉说老弟义无所辞；梅进问明来人。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: 'Duty-bound', zh: '义无所辞' },
      quote: '既是他儿子远来投奔，老弟也是义无所辞的。',
      caption: { en: 'Since the son has come so far, Shixie cannot well refuse him.', zh: '既是远来投奔，老弟义无所辞。' },
    },
    {
      start: 18, end: 36,
      title: { en: 'Mei Jin', zh: '梅进' },
      quote: '士燮叫梅进进来问了，果然是他。一个是西席李先生之子。',
      caption: { en: 'The servant Mei Jin confirms it: Wei Laoren’s son, and the son of Ziyu’s tutor, Mr. Li.', zh: '梅进问明：果然是魏家之子；另一个是西席李先生之子。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 17.6, zh: '既是他儿子远来投奔，老弟也是义无所辞的。', en: '“Since his son has come so far to seek refuge, you are bound by duty and cannot turn him away.”' },
    { start: 18.4, end: 27, zh: '士燮叫梅进进来问了，果然是他。', en: 'Shixie summoned Mei Jin to verify, and indeed it was he.' },
    { start: 27, end: 35.6, zh: '一个是西席李先生之子。吩咐梅进：', en: 'The other was the son of Mr. Li, the resident tutor. He instructed Mei Jin:' },
  ],
});
