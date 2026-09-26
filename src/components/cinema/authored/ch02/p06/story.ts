import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 6. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：「士燮问了他父母好。子玉出来，见过了礼，士燮即叫子玉引元茂去见他父亲，子玉即同了元茂、聘
 *   才到书房去了。士燮吩咐家人许顺，收拾书房后身另院的两间屋子，给他们暂且住下。
 *
 * Translation: Shixie courteously inquired after his parents' health. When Ziyu emerged and exchanged
 *   formal greetings, Shixie promptly instructed him to escort Yuanmao to meet his father. Ziyu
 *   then led both Yuanmao and Pincai toward the study. Meanwhile, Shixie ordered the servant Xu
 *   Shun to prepare two rooms in the secluded courtyard behind the study for their temporary
 *   lodging.
 *
 * Staging: Ziyu greeting the guests, and Ziyu leading them off while Xu Shun takes his orders.
 */
export default defineStory({
  title: { en: 'Rooms behind the study', zh: '书房后身两间屋子' },
  description: {
    en: 'Ziyu greets the guests and leads them to his tutor; the servant Xu Shun is told to ready two rooms behind the study.',
    zh: '子玉见礼，引二人去书房；许顺收拾书房后身两间屋子。',
  },
  shots: [
    {
      start: 0, end: 14,
      title: { en: 'Ziyu comes out', zh: '子玉出来' },
      quote: '子玉出来，见过了礼，士燮即叫子玉引元茂去见他父亲',
      caption: { en: 'Ziyu comes out and exchanges greetings; his father tells him to take Yuanmao to his father, the tutor.', zh: '子玉出来见礼；士燮叫他引元茂去见父亲。' },
    },
    {
      start: 14, end: 36,
      title: { en: 'Two rooms prepared', zh: '收拾两间屋子' },
      quote: '士燮吩咐家人许顺，收拾书房后身另院的两间屋子',
      caption: { en: 'Ziyu leads the two off; the servant Xu Shun is told to prepare two rooms in the courtyard behind the study.', zh: '子玉引二人去书房；许顺收拾书房后身另院两间屋子。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 7, zh: '士燮问了他父母好。子玉出来，见过了礼，', en: 'Shixie inquired after his parents. Ziyu came out and exchanged greetings,' },
    { start: 7, end: 13.6, zh: '士燮即叫子玉引元茂去见他父亲。', en: 'and Shixie told him to take Yuanmao to see his father.' },
    { start: 14.4, end: 22, zh: '子玉即同了元茂、聘才到书房去了。', en: 'Ziyu led Yuanmao and Pincai to the study.' },
    { start: 22, end: 35.6, zh: '士燮吩咐家人许顺，收拾书房后身另院的两间屋子，给他们暂且住下。', en: 'Shixie ordered the servant Xu Shun to prepare two rooms behind the study for them.' },
  ],
});
