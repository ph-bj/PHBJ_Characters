import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 39. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：而必欲使人实信其有，又谁肯轻信？是非亲见其人不可。我们明日同他出去，亲指一二人与他看了，
 *   他才信你这个《花选》方选的不错。
 *
 * Translation: if one insists on making people truly believe they exist, who would readily accept it? It
 *   is impossible unless one sees them in person. Tomorrow, we will take him out and point out
 *   one or two of them for him to see; only then will he believe that your 'Selection of
 *   Flowers' has made no mistake.
 *
 * Staging: Zhongqing speaking in the study, then the three setting out along the street.
 */
export default defineStory({
  title: { en: 'Seeing is believing', zh: '非亲见其人不可' },
  description: {
    en: 'Zhongqing proposes to take Ziyu out tomorrow and show him the actors in person.',
    zh: '仲清提议明日同子玉出去，亲指一二人与他看。',
  },
  shots: [
    {
      start: 0, end: 16,
      title: { en: 'Who would believe it?', zh: '又谁肯轻信' },
      quote: '而必欲使人实信其有，又谁肯轻信？是非亲见其人不可。',
      caption: { en: 'Who would believe such tales unless they saw these people in person?', zh: '欲使人实信其有，非亲见其人不可。' },
    },
    {
      start: 16, end: 36,
      title: { en: 'Tomorrow we take him out', zh: '明日同他出去' },
      quote: '我们明日同他出去，亲指一二人与他看了',
      caption: { en: 'Tomorrow they will take him out and point out one or two; then he will believe the 《花选》.', zh: '明日同他出去，亲指一二人与他看，他才信《花选》选的不错。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 8, zh: '而必欲使人实信其有，又谁肯轻信？', en: 'If one insists on making people believe they exist, who would readily accept it?' },
    { start: 8, end: 15.6, zh: '是非亲见其人不可。', en: 'It is impossible unless one sees them in person.' },
    { start: 16.4, end: 26, zh: '我们明日同他出去，亲指一二人与他看了，', en: 'Tomorrow, we will take him out and point out one or two of them for him to see;' },
    { start: 26, end: 35.6, zh: '他才信你这个《花选》方选的不错。', en: 'only then will he believe your “Selection of Flowers” has made no mistake.' },
  ],
});
