import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 51. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：「今日来迟了，歇一天早些来。」也就同了出来。王恂的家人付了戏钱，那相公还拉着王恂走了几
 *   步，看不像带他吃饭的光景，便自去了。子玉、王徇上了车，各自分路而回。
 *
 * Translation: "We arrived too late today; let's rest a day and come earlier next time." They then left
 *   together. Wang Xun's servant paid the theater fee. That escort boy still tugged at Wang
 *   Xun, walking a few steps with him, but seeing no prospect of being taken out to eat,
 *   eventually left on his own. Ziyu and Wang Xun boarded their carriages and went their
 *   separate ways home.
 *
 * Staging: leaving the theatre with the boy trailing, and the two carts parting ways.
 */
export default defineStory({
  title: { en: 'Separate ways home', zh: '各自分路而回' },
  description: {
    en: 'They leave; the boy trails Wang Xun a few steps, then gives up; the cousins’ carts part in the street.',
    zh: '二人出园，相公拉着王恂走了几步便自去了；子玉、王恂各自分路而回。',
  },
  shots: [
    {
      start: 0, end: 14,
      title: { en: 'The boy gives up', zh: '便自去了' },
      quote: '那相公还拉着王恂走了几步，看不像带他吃饭的光景，便自去了。',
      caption: { en: '“Let’s come earlier next time.” The boy tugs at Wang Xun for a few steps, then leaves on his own.', zh: '王恂道改日早些来；相公拉着王恂走了几步，便自去了。' },
    },
    {
      start: 14, end: 36,
      title: { en: 'Separate ways', zh: '各自分路而回' },
      quote: '子玉、王徇上了车，各自分路而回。',
      caption: { en: 'Ziyu and Wang Xun board their carriages and go their separate ways home.', zh: '子玉、王恂上了车，各自分路而回。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 5, zh: '「今日来迟了，歇一天早些来。」也就同了出来。', en: '“We arrived too late today; let’s come earlier next time.” They left together.' },
    { start: 5, end: 9.4, zh: '王恂的家人付了戏钱，那相公还拉着王恂走了几步，', en: 'Wang Xun’s servant paid; the escort boy still tugged at Wang Xun for a few steps,' },
    { start: 9.4, end: 13.6, zh: '看不像带他吃饭的光景，便自去了。', en: 'but seeing no prospect of a meal, left on his own.' },
    { start: 14.4, end: 35.6, zh: '子玉、王恂上了车，各自分路而回。', en: 'Ziyu and Wang Xun boarded their carriages and went their separate ways home.' },
  ],
});
