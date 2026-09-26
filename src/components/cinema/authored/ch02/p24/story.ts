import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 24. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：且说仲清到自己房中吃了饭，与其妻室蓉华讲了些话，来到王恂书斋，恰值王恂才回。刚说得一两句
 *   话，有王恂两个内舅前来看望：一个叫孙嗣徽，一个叫孙嗣元，本是王文辉同乡同年孙亮功部郎之
 *   子。这嗣徽、嗣元两个，真所谓难兄难弟。
 *
 * Translation: Meanwhile, Zhongqing had returned to his own quarters for a meal and conversed briefly with
 *   his wife, Ronghua, before heading to Wang Xun's study, arriving just as Wang Xun returned.
 *   They had barely exchanged a few words when two of Wang Xun's brothers-in-law arrived to pay
 *   a visit. One was named Sun Sihui, the other Sun Siyuan, both sons of Ministry Director Sun
 *   Lianggong, a fellow provincial and examination graduate of Wang Wenhui. These two brothers
 *   were truly a matched pair of ineptitude.
 *
 * Staging: Zhongqing with Ronghua, Zhongqing and Wang Xun, and the Sun brothers arriving.
 */
export default defineStory({
  title: { en: 'A matched pair', zh: '难兄难弟' },
  description: {
    en: 'Zhongqing talks with his wife Ronghua, then joins Wang Xun, just as Wang Xun’s two brothers-in-law, the Sun brothers, arrive.',
    zh: '仲清与蓉华说话，到王恂书斋；王恂两个内舅孙嗣徽、孙嗣元来了。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'Zhongqing and Ronghua', zh: '与蓉华讲话' },
      quote: '仲清到自己房中吃了饭，与其妻室蓉华讲了些话',
      caption: { en: 'Zhongqing eats in his own rooms and talks a while with his wife, Ronghua.', zh: '仲清回房吃饭，与妻子蓉华说话。' },
    },
    {
      start: 12, end: 24,
      title: { en: 'Wang Xun’s study', zh: '王恂书斋' },
      quote: '来到王恂书斋，恰值王恂才回。',
      caption: { en: 'He goes to Wang Xun’s study just as Wang Xun returns.', zh: '仲清来到王恂书斋，王恂才回。' },
    },
    {
      start: 24, end: 36,
      title: { en: 'The Sun brothers', zh: '孙嗣徽、孙嗣元' },
      quote: '有王恂两个内舅前来看望……真所谓难兄难弟。',
      caption: { en: 'Wang Xun’s brothers-in-law, Sun Sihui and Sun Siyuan, arrive—a truly matched pair.', zh: '王恂两个内舅孙嗣徽、孙嗣元来看望，真是难兄难弟。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 11.6, zh: '且说仲清到自己房中吃了饭，与其妻室蓉华讲了些话，', en: 'Zhongqing ate in his own quarters and talked a while with his wife, Ronghua,' },
    { start: 12.4, end: 23.6, zh: '来到王恂书斋，恰值王恂才回。', en: 'then went to Wang Xun’s study, arriving just as Wang Xun returned.' },
    { start: 24.4, end: 29, zh: '有王恂两个内舅前来看望：一个叫孙嗣徽，一个叫孙嗣元，', en: 'Two of Wang Xun’s brothers-in-law came to visit: Sun Sihui and Sun Siyuan,' },
    { start: 29, end: 33, zh: '本是王文辉同乡同年孙亮功部郎之子。', en: 'sons of Ministry Director Sun Lianggong, Wenhui’s fellow provincial and classmate.' },
    { start: 33, end: 35.6, zh: '这嗣徽、嗣元两个，真所谓难兄难弟。', en: 'These two were truly a matched pair of ineptitude.' },
  ],
});
