import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 54. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：正在好看，车已过去。后头又有三四辆，也坐些小孩子，恰不甚佳。子玉心里有些模模糊糊起来，似
 *   像见过这人的相貌，好像一个人，再想不起了。
 *
 * Translation: Just as he was absorbed in this beautiful sight, the carriage passed by. Behind it followed
 *   three or four more carriages, also carrying young children, though they were quite
 *   ordinary. Ziyu felt a sense of hazy confusion rising in his mind; it was as if he had seen
 *   this person's face before, as if he resembled someone, but he couldn't quite remember who.
 *
 * Staging: the carts passing, and Ziyu lost in a half-remembered face.
 */
export default defineStory({
  title: { en: 'Where have I seen him?', zh: '似像见过' },
  description: {
    en: 'The cart moves on, followed by ordinary carts of children; Ziyu is left hazy, sure he has seen that face before.',
    zh: '车已过去，后头几辆坐些小孩子；子玉心里模糊，似曾见过此人。',
  },
  shots: [
    {
      start: 0, end: 14,
      title: { en: 'The cart passes', zh: '车已过去' },
      quote: '正在好看，车已过去。后头又有三四辆，也坐些小孩子，恰不甚佳。',
      caption: { en: 'Just as he gazes, the cart moves on; three or four more follow, carrying ordinary children.', zh: '车已过去，后头三四辆，也坐些小孩子，恰不甚佳。' },
    },
    {
      start: 14, end: 36,
      title: { en: 'A half-remembered face', zh: '似像见过' },
      quote: '似像见过这人的相貌，好像一个人，再想不起了。',
      caption: { en: 'Ziyu feels he has seen that face before—it resembles someone—but he cannot remember whom.', zh: '子玉似曾见过这人相貌，好像一个人，再想不起。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 5, zh: '正在好看，车已过去。', en: 'Just as he was absorbed in the sight, the carriage passed by.' },
    { start: 5, end: 13.6, zh: '后头又有三四辆，也坐些小孩子，恰不甚佳。', en: 'Three or four more followed, also carrying children, though quite ordinary.' },
    { start: 14.4, end: 22, zh: '子玉心里有些模模糊糊起来，', en: 'A hazy confusion rose in Ziyu’s mind;' },
    { start: 22, end: 35.6, zh: '似像见过这人的相貌，好像一个人，再想不起了。', en: 'it was as if he had seen that face before, as if he resembled someone—but he couldn’t remember who.' },
  ],
});
