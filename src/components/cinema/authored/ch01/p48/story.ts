import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 48. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：子玉看了一会闷戏，只见那边桌子上来了一人，招呼王恂，王恂便旋转身子与那人讲话。又见一个人
 *   走将过来，穿一件灰色老狐裘，一双泥帮宽皂靴。，看他的身材阔而且扁，有三十几岁，歪着膀子，
 *   神气昏迷，在他身边挤了过去。停一会又挤了过来，一刻之间就走了三四回。每近身时，必看他一
 *   眼，又看看王恂，复停一停脚步，似有照应王恂之意。王恂与那人正讲的热闹，就没有留心这人，这
 *   人只得走过，又挤到别处去了。
 *
 * Translation: Ziyu watched the tedious play for a while, only to see a man at a table over there calling
 *   out to Wang Xun. Wang Xun turned his body to converse with the man. Then, Ziyu saw another
 *   man walking over. He wore a gray old fox-fur coat and a pair of loose black boots with
 *   mud-caked edges. Looking at his build, he was broad and flat, around thirty years old, with
 *   drooping shoulders and a dazed, sluggish expression. He squeezed past right beside Ziyu. A
 *   moment later, he squeezed back in the other direction. In a short span, he passed back and
 *   forth three or four times. Every time he drew near, he would inevitably shoot a glance at
 *   Ziyu, then look at Wang Xun, pausing his steps slightly, as if intending to greet Wang Xun.
 *   Wang Xun, deep in lively conversation with the other man, paid this fellow no mind, so the
 *   man had no choice but to walk on and squeeze his way elsewhere.
 *
 * Staging: Wang Xun turning to an acquaintance, and the man in grey fur passing to and fro.
 */
export default defineStory({
  title: { en: 'The man in the grey fox fur', zh: '灰色老狐裘' },
  description: {
    en: 'Wang Xun chats with an acquaintance while a dazed man in a grey fox fur squeezes past Ziyu again and again.',
    zh: '王恂与人说话；一个穿灰色老狐裘的人在子玉身边挤来挤去。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'An acquaintance calls', zh: '招呼王恂' },
      quote: '只见那边桌子上来了一人，招呼王恂',
      caption: { en: 'A man at another table calls to Wang Xun, who turns to chat.', zh: '那边桌子上一人招呼王恂，王恂转身与他讲话。' },
    },
    {
      start: 12, end: 36,
      title: { en: 'Back and forth', zh: '挤了过去，又挤了过来' },
      quote: '一刻之间就走了三四回。每近身时，必看他一眼',
      caption: { en: 'A broad, dazed man in an old grey fox fur squeezes past three or four times, glancing at Ziyu and Wang Xun.', zh: '穿灰色老狐裘的人，一刻之间挤过三四回，每次必看子玉一眼。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '子玉看了一会闷戏，只见那边桌子上来了一人，招呼王恂，', en: 'Ziyu watched the tedious play, then a man at a table over there called out to Wang Xun,' },
    { start: 6, end: 11.6, zh: '王恂便旋转身子与那人讲话。', en: 'and Wang Xun turned to converse with him.' },
    { start: 12.4, end: 17.6, zh: '又见一个人走将过来，穿一件灰色老狐裘，一双泥帮宽皂靴，', en: 'Another man came over, in an old grey fox fur and loose black boots caked with mud,' },
    { start: 17.6, end: 22.6, zh: '身材阔而且扁，歪着膀子，神气昏迷，在他身边挤了过去。', en: 'broad and flat, shoulders drooping, dazed, squeezing past right beside Ziyu.' },
    { start: 22.6, end: 28, zh: '停一会又挤了过来，一刻之间就走了三四回。', en: 'A moment later he squeezed back; in a short span he passed three or four times.' },
    { start: 28, end: 35.6, zh: '每近身时，必看他一眼，又看看王恂，似有照应王恂之意。', en: 'Each time he glanced at Ziyu, then at Wang Xun, as if meaning to greet him.' },
  ],
});
