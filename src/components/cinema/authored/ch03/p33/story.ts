import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 33. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：你道这掌柜的，为什么巴结这个姓奚的。他知道这个姓奚的，是广东大富翁，又是阔少爷，现带了十几万
 *   银子进京，要捐个大官。已到了一月有余。
 *
 * Translation: Why, one might ask, did the proprietor debase himself so utterly for this Lord Xi? He knew
 *   the man was a colossal Cantonese plutocrat—a young heir of unimaginable wealth who had
 *   descended upon the capital bearing over a hundred thousand taels of silver, fully intending
 *   to purchase a prestigious official post. He had been in the city for merely a month.
 *
 * Staging: Xi’s silver arriving at the capital’s gate, chest after chest; the chests set before a
 *   ministry’s door where an official hat waits on a cushion.
 */
export default defineStory({
  title: { en: 'A hundred thousand taels', zh: '十几万银子' },
  description: {
    en: 'Why does the proprietor fawn so? He knows Xi is a Cantonese plutocrat, a rich young heir who has brought over a hundred thousand taels to the capital to buy himself a high office, and has been here only a month.',
    zh: '掌柜的为什么巴结姓奚的？他知道此人是广东大富翁、阔少爷，带了十几万银子进京，要捐个大官，到京才一月有余。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: 'A Cantonese plutocrat', zh: '广东大富翁' },
      quote: '是广东大富翁，又是阔少爷，现带了十几万银子进京',
      caption: { en: 'Xi is a Cantonese plutocrat’s heir, come to the capital with over a hundred thousand taels.', zh: '广东大富翁、阔少爷，带了十几万银子进京。' },
    },
    {
      start: 18, end: 36,
      title: { en: 'To buy an office', zh: '要捐个大官' },
      quote: '要捐个大官。已到了一月有余。',
      caption: { en: 'He means to buy a great post, and has been in the capital a month.', zh: '要捐个大官，到京已一月有余。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '你道这掌柜的，为什么巴结这个姓奚的。', en: 'Why, you may ask, did the proprietor fawn so on this man Xi?' },
    { start: 6, end: 17.6, zh: '他知道这个姓奚的，是广东大富翁，又是阔少爷，现带了十几万银子进京，', en: 'He knew Xi was a great Cantonese plutocrat and a rich young heir, come to the capital with over a hundred thousand taels,' },
    { start: 18.4, end: 35.6, zh: '要捐个大官。已到了一月有余。', en: 'to buy himself a high office. He had been there a little over a month.' },
  ],
});
