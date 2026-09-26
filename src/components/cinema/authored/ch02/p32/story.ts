import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 32. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：亮功正要与他儿子说话，适值王桂保进来，见了亮功并王恂、仲清，也站在一边。亮功看看桂保，对
 *   他儿子说道：「你们回去，不要说什么。」嗣徽兄弟会意答应，于是亮功即拉了桂保进去。
 *
 * Translation: Lianggong was on the verge of addressing his sons when Wang Guibao entered the courtyard.
 *   Spotting Lianggong, along with Wang Xun and Zhongqing, he also stepped respectfully aside.
 *   Lianggong glanced at Guibao before instructing his sons, "Return home immediately, and
 *   utter not a single word." Sihui and his brother, understanding the implication, voiced
 *   their assent. Lianggong then took Guibao by the arm and led him inside.
 *
 * Staging: Guibao arriving, and Lianggong leading him in while the sons go home.
 */
export default defineStory({
  title: { en: '“Go home, and say nothing”', zh: '你们回去，不要说什么' },
  description: {
    en: 'Wang Guibao arrives; Lianggong sends his sons home with a warning to say nothing, and leads Guibao in by the arm.',
    zh: '王桂保进来；亮功叫儿子们回去不要说什么，拉了桂保进去。',
  },
  shots: [
    {
      start: 0, end: 14,
      title: { en: 'Guibao arrives', zh: '王桂保进来' },
      quote: '适值王桂保进来，见了亮功并王恂、仲清，也站在一边。',
      caption: { en: 'The actor Wang Guibao comes in and stands aside too.', zh: '王桂保进来，也站在一边。' },
    },
    {
      start: 14, end: 36,
      title: { en: 'Say nothing', zh: '不要说什么' },
      quote: '「你们回去，不要说什么。」……于是亮功即拉了桂保进去。',
      caption: { en: '“Go home, and say nothing,” Lianggong tells his sons, and leads Guibao in by the arm.', zh: '亮功对儿子说「你们回去，不要说什么」，便拉了桂保进去。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '亮功正要与他儿子说话，适值王桂保进来，', en: 'Lianggong was about to speak to his sons when Wang Guibao came in;' },
    { start: 6, end: 13.6, zh: '见了亮功并王恂、仲清，也站在一边。', en: 'seeing Lianggong, Wang Xun and Zhongqing, he too stood aside.' },
    { start: 14.4, end: 22, zh: '亮功看看桂保，对他儿子说道：「你们回去，不要说什么。」', en: 'Lianggong glanced at Guibao and told his sons: “Go home, and say nothing.”' },
    { start: 22, end: 35.6, zh: '嗣徽兄弟会意答应，于是亮功即拉了桂保进去。', en: 'The brothers understood and agreed, and Lianggong took Guibao by the arm and led him in.' },
  ],
});
