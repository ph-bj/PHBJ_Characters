import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 31. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：王恂、仲清上前见了礼，亮功问道：「客到齐了么？」王恫道：「没有。」仲清看亮功虽是个紫糖色
 *   扁脸，蹋鼻子，但五官端正，又有了几根胡须，比两位贤郎好看多了。
 *
 * Translation: Wang Xun and Zhongqing stepped forward to exchange greetings. Lianggong inquired, "Have all
 *   the guests assembled?" Wang Xun replied, "Not yet." Zhongqing observed Lianggong closely,
 *   noting his purplish-brown complexion and flat nose. Yet, his features were properly
 *   aligned, and accompanied by a modest beard, he presented a significantly more dignified
 *   appearance than his two illustrious sons.
 *
 * Staging: greetings at the gate, and Lianggong’s portrait.
 */
export default defineStory({
  title: { en: 'A flat, purplish face', zh: '紫糖色扁脸' },
  description: {
    en: 'Lianggong asks whether the guests have arrived; Zhongqing notes that for all his flat face, he is far better-looking than his sons.',
    zh: '亮功问客到齐否；仲清看他虽紫糖色扁脸，却比两位贤郎好看多了。',
  },
  shots: [
    {
      start: 0, end: 16,
      title: { en: '“Are the guests all here?”', zh: '客到齐了么' },
      quote: '亮功问道：「客到齐了么？」王恂道：「没有。」',
      caption: { en: 'Greetings; Lianggong asks if the guests have all arrived. “Not yet.”', zh: '亮功问：客到齐了么？王恂道：没有。' },
    },
    {
      start: 16, end: 36,
      title: { en: 'Better than his sons', zh: '比两位贤郎好看多了' },
      quote: '虽是个紫糖色扁脸，蹋鼻子，但五官端正，又有了几根胡须',
      caption: { en: 'A purplish flat face and a snub nose, but regular features and a few whiskers: far better than his sons.', zh: '紫糖色扁脸、蹋鼻子，但五官端正，几根胡须，比两位贤郎好看多了。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 8, zh: '王恂、仲清上前见了礼，亮功问道：「客到齐了么？」', en: 'Wang Xun and Zhongqing greeted him. “Have the guests all arrived?” asked Lianggong.' },
    { start: 8, end: 15.6, zh: '王恂道：「没有。」', en: '“Not yet,” said Wang Xun.' },
    { start: 16.4, end: 26, zh: '仲清看亮功虽是个紫糖色扁脸，蹋鼻子，但五官端正，', en: 'Zhongqing noted his purplish flat face and snub nose, yet his features were regular,' },
    { start: 26, end: 35.6, zh: '又有了几根胡须，比两位贤郎好看多了。', en: 'and with a few whiskers, he looked far better than his two sons.' },
  ],
});
