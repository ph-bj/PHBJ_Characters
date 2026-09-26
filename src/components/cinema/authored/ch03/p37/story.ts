import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 37. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：聘才说：「一定来的，咱们从此订交。只是我是个白身人。仰扳不上。」富三、贵大同说：「罚你！咱们
 *   哥儿们论什么，你不嫌我们粗卤就是了。」富三赏了蓉官八吊钱，跟兔两吊钱。蓉官谢了赏，辞了贵大爷
 *   与聘才先去了。
 *
 * Translation: Pincai bowed deeply. "I shall certainly come. Let us count ourselves friends from this day
 *   forth. Yet I am but a commoner, without rank or title. I hardly dare aspire to your exalted
 *   company." Fu the Third and Master Gui objected in unison: "You must drink a penalty cup for
 *   such words! What do empty titles matter among brothers? So long as you do not find our
 *   company too crude, that is all that matters." Before departing, Fu the Third pressed eight
 *   strings of cash into Rongguan's hands, and two strings upon his young attendant. Rongguan
 *   offered profound thanks, bidding farewell to Master Gui and Pincai before taking his leave.
 *
 * Staging: the three clasping hands across the table; the penalty cup pressed on Pincai; the cash strings
 *   given, Rongguan bowing and going down the stairs.
 */
export default defineStory({
  title: { en: 'Sworn friends', zh: '从此订交' },
  description: {
    en: 'Pincai promises to call: they are friends from today, though he is only a commoner. “A penalty for that!” cry Fu and Gui—what do ranks matter among brothers? Fu tips Rongguan eight strings and his boy two, and Rongguan takes his leave.',
    zh: '聘才说一定来，从此订交，只是自己是个白身人。富三、贵大同说：「罚你！咱们哥儿们论什么。」富三赏了蓉官八吊钱，跟班两吊。蓉官谢了先去了。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'From this day', zh: '从此订交' },
      quote: '一定来的，咱们从此订交。只是我是个白身人。',
      caption: { en: 'Pincai clasps their hands: friends from today—though he is only a commoner.', zh: '聘才：一定来，从此订交；只是我是个白身人。' },
    },
    {
      start: 12, end: 24,
      title: { en: '“A penalty!”', zh: '罚你' },
      quote: '罚你！咱们哥儿们论什么，你不嫌我们粗卤就是了。',
      caption: { en: 'Fu and Gui together: drink a penalty for that! What do ranks matter among brothers?', zh: '富三、贵大同说：「罚你！咱们哥儿们论什么。」' },
    },
    {
      start: 24, end: 36,
      title: { en: 'Eight strings', zh: '八吊钱' },
      quote: '富三赏了蓉官八吊钱，跟兔两吊钱。',
      caption: { en: 'Fu tips Rongguan eight strings and his boy two; Rongguan thanks them and goes.', zh: '富三赏蓉官八吊，跟班两吊；蓉官谢了先去。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 11.6, zh: '聘才说：「一定来的，咱们从此订交。只是我是个白身人，仰扳不上。」', en: 'Pincai said, “I’ll certainly come. We are friends from today—though I’m a mere commoner, hardly your equal.”' },
    { start: 12.4, end: 23.6, zh: '富三、贵大同说：「罚你！咱们哥儿们论什么，你不嫌我们粗卤就是了。」', en: 'Fu and Gui cried together: “A penalty for that! What does rank matter among brothers? So long as you don’t mind our rough ways.”' },
    { start: 24.4, end: 35.6, zh: '富三赏了蓉官八吊钱，跟兔两吊钱。蓉官谢了赏，辞了贵大爷与聘才先去了。', en: 'Fu gave Rongguan eight strings and his boy two; Rongguan thanked him, took leave of Gui and Pincai, and went.' },
  ],
});
