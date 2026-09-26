import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 55. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：心里想道：「这些孩子是什么人？也像戏班子一样，但服饰又不华美。那一个直可称古今少有，天下
 *   无双。他既具此美貌，何以倒又服御不鲜，这般光景呢，真委屈了此人。当以广寒宫贮之，岂特郁金
 *   堂、翡翠楼，即称其美。
 *
 * Translation: He thought to himself, "Who are these children? They look like they belong to a theater
 *   troupe, yet their clothes are not extravagant. That one could truly be called a rarity
 *   across all ages, unmatched under heaven. Since he possesses such beautiful features, why is
 *   his attire so unexceptional? Such circumstances truly wrong him. He ought to be housed in
 *   the Guanghan Palace of the moon; merely placing him in a hall of curcuma or a jadeite tower
 *   would hardly do him justice.
 *
 * Staging: Ziyu’s cart going on through the street, and the boy imagined in the Guanghan palace.
 */
export default defineStory({
  title: { en: 'He belongs in the moon palace', zh: '当以广寒宫贮之' },
  description: {
    en: 'Ziyu wonders who the boys are, so plainly dressed; such beauty deserves the palace of the moon.',
    zh: '子玉猜这些孩子是何人，服饰不华；如此美貌，当以广寒宫贮之。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: 'Plainly dressed', zh: '服饰又不华美' },
      quote: '这些孩子是什么人？也像戏班子一样，但服饰又不华美。',
      caption: { en: 'Who are they? Like a troupe, yet plainly dressed—and that one unmatched under heaven.', zh: '这些孩子像戏班子，服饰却不华美；那一个天下无双。' },
    },
    {
      start: 18, end: 36,
      title: { en: 'The Guanghan palace', zh: '广寒宫' },
      quote: '当以广寒宫贮之，岂特郁金堂、翡翠楼，即称其美。',
      caption: { en: 'Such beauty ought to be housed in the moon’s Guanghan palace; no jadeite tower would do him justice.', zh: '当以广寒宫贮之，郁金堂、翡翠楼亦不足称其美。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '心里想道：「这些孩子是什么人？也像戏班子一样，但服饰又不华美。', en: 'He thought: “Who are these children? Like a troupe, yet their clothes are not extravagant.' },
    { start: 6, end: 11.6, zh: '那一个直可称古今少有，天下无双。', en: 'That one is a rarity across all ages, unmatched under heaven.' },
    { start: 11.6, end: 17.6, zh: '他既具此美貌，何以倒又服御不鲜，真委屈了此人。', en: 'With such beauty, why is his attire so plain? It truly wrongs him.' },
    { start: 18.4, end: 27, zh: '当以广寒宫贮之，', en: 'He ought to be housed in the Guanghan Palace of the moon;' },
    { start: 27, end: 35.6, zh: '岂特郁金堂、翡翠楼，即称其美。」', en: 'a hall of curcuma or a jadeite tower would hardly do him justice.”' },
  ],
});
