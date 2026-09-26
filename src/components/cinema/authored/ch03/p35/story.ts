import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 35. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：那位姓奚的最喜喝这杯快乐酒，你再开多些，他也照数全给，断不肯短少。这是海南大纨袴，到京里来想
 *   闹点声名，做个冤桶的。此时只晓得他排行是十一，就称呼他为奚十一。那个砸碗的相公，就是蓉官说的
 *   春兰了。
 *
 * Translation: Lord Xi reveled in this extravagant cup of pleasure; inflate the bill as one might, he paid
 *   without a whisper of complaint, utterly refusing to appear stingy. He was a quintessential
 *   southern profligate, come to the capital to make a name for himself and to play the willing
 *   dupe. Thus far, society knew only that he was the eleventh son of his clan, dubbing him 'Xi
 *   the Eleventh.' The defiant actor who had shattered the bowls alongside him was none other
 *   than Chunlan, the youth Rongguan had spoken of earlier.
 *
 * Staging: Xi paying out silver with a laugh; his name gathering in ink over him; Chunlan in the fox coat,
 *   dry-eyed now.
 */
export default defineStory({
  title: { en: 'Xi the Eleventh', zh: '奚十一' },
  description: {
    en: 'Xi loves to pay for his pleasures and pays whatever is asked. A southern dandy come to the capital to make a name and play the dupe, he is known only as the eleventh of his family: Xi the Eleventh. The boy who smashed the bowls is Chunlan.',
    zh: '姓奚的最喜喝这杯快乐酒，开多少给多少。这是海南大纨袴，到京里来想闹点声名，做个冤桶。只晓得他排行十一，称他奚十一。那个砸碗的相公就是春兰。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'Paid in full', zh: '照数全给' },
      quote: '你再开多些，他也照数全给，断不肯短少。',
      caption: { en: 'However the bill is padded, Xi pays in full and never haggles.', zh: '再开多些，他也照数全给。' },
    },
    {
      start: 12, end: 24,
      title: { en: 'Xi the Eleventh', zh: '奚十一' },
      quote: '此时只晓得他排行是十一，就称呼他为奚十一。',
      caption: { en: 'A southern dandy here to make a name and play the dupe—known as Xi the Eleventh.', zh: '海南大纨袴，来京想闹点声名，排行十一，称奚十一。' },
    },
    {
      start: 24, end: 36,
      title: { en: 'Chunlan', zh: '春兰' },
      quote: '那个砸碗的相公，就是蓉官说的春兰了。',
      caption: { en: 'And the boy who smashed the bowls was Chunlan.', zh: '那砸碗的相公，就是春兰。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 11.6, zh: '那位姓奚的最喜喝这杯快乐酒，你再开多些，他也照数全给，断不肯短少。', en: 'Xi loved this cup of pleasure; pad the bill as you liked, he paid it all and never short.' },
    { start: 12.4, end: 17.6, zh: '这是海南大纨袴，到京里来想闹点声名，做个冤桶的。', en: 'He was a great southern dandy come to the capital to make a name—and to be the dupe.' },
    { start: 17.6, end: 23.6, zh: '此时只晓得他排行是十一，就称呼他为奚十一。', en: 'All anyone knew was that he was eleventh in his family, so he was called Xi the Eleventh.' },
    { start: 24.4, end: 35.6, zh: '那个砸碗的相公，就是蓉官说的春兰了。', en: 'The dan who smashed the bowls was Chunlan, of whom Rongguan had spoken.' },
  ],
});
