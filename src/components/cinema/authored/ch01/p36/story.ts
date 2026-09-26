import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 36.
 *
 * 原文：岂有出污泥而不滓，随狂流而不下者。且即有一容可取，一技所长，是犹拆锦袜之线，无补于缝
 *   裳。 炼铅水之刀，不良于伐木。其脏腑秽浊，出言无章。
 *
 * Translation: How could there be one who emerges from the mud without being stained, or drifts along the
 *   wild current without being pulled under? Moreover, even if they possess a tolerable
 *   appearance or a single specialized skill, it is like unraveling the threads of a brocade
 *   sock—useless for sewing a garment. It is like forging a knife from leaden water—unfit for
 *   chopping wood. Their internal organs are foul and turbid; their speech lacks order and
 *   refinement.
 *
 * Staged from tableau beats (cinema/beats/tableau.ts): lotus in a muddy pond, Ziyu’s comparisons in the study, and the actor once more.
 */
export default defineStory({
  title: { en: 'Stained by the mud', zh: '出污泥而不滓' },
  description: {
    en: 'Ziyu doubts any can rise from the mud unstained; a single charm in them is a thread from a sock, a knife of lead.',
    zh: '子玉以为无人能出污泥而不滓；即有一技之长，亦如锦袜之线、铅水之刀。',
  },
  shots: [
    {
      start: 0, end: 14,
      title: { en: 'Out of the mud', zh: '出污泥' },
      quote: '岂有出污泥而不滓，随狂流而不下者。',
      caption: { en: 'Who could rise from the mud without a stain, or drift on the flood without going under?', zh: '岂有出污泥而不滓、随狂流而不下者。' },
    },
    {
      start: 14, end: 26,
      title: { en: 'A thread from a brocade sock', zh: '锦袜之线' },
      quote: '是犹拆锦袜之线，无补于缝裳。炼铅水之刀，不良于伐木。',
      caption: { en: 'A single charm is like thread pulled from a brocade sock, useless for sewing; a knife of lead, unfit for wood.', zh: '一容一技，犹拆锦袜之线、炼铅水之刀。' },
    },
    {
      start: 26, end: 36,
      title: { en: 'Foul within', zh: '脏腑秽浊' },
      quote: '其脏腑秽浊，出言无章。',
      caption: { en: 'Their insides are foul and turbid, their speech without order.', zh: '其脏腑秽浊，出言无章。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 7, zh: '岂有出污泥而不滓，', en: 'How could there be one who emerges from the mud without being stained,' },
    { start: 7, end: 13.6, zh: '随狂流而不下者。', en: 'or drifts along the wild current without being pulled under?' },
    { start: 14.4, end: 20, zh: '且即有一容可取，一技所长，是犹拆锦袜之线，无补于缝裳。', en: 'Even a tolerable face or a single skill is like thread from a brocade sock—useless for sewing a garment.' },
    { start: 20, end: 25.6, zh: '炼铅水之刀，不良于伐木。', en: 'It is a knife forged from leaden water—unfit for chopping wood.' },
    { start: 26.4, end: 35.6, zh: '其脏腑秽浊，出言无章。', en: 'Their internal organs are foul and turbid; their speech lacks order and refinement.' },
  ],
});
