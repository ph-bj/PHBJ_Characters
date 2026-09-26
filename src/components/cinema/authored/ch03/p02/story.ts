import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 2. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：吃过了饭，许顺泡了一碗酽茶递给聘才，说了一会闲话。
 *
 * Translation: When the meal concluded, Xu Shun brewed a bowl of deep, fragrant tea, offering it to Pincai
 *   as they fell into idle conversation.
 *
 * Staging: the tea brewed close up in steam; the two men talking under the swinging pendulum as the
 *   afternoon passes.
 */
export default defineStory({
  title: { en: 'A bowl of strong tea', zh: '一碗酽茶' },
  description: {
    en: 'After the meal Xu Shun brews a bowl of strong tea for Pincai, and the two sit talking idly while the clock ticks on.',
    zh: '饭后许顺泡了一碗酽茶，二人闲话，钟摆悠悠。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: 'Strong tea', zh: '泡了一碗酽茶' },
      quote: '吃过了饭，许顺泡了一碗酽茶递给聘才',
      caption: { en: 'The dishes cleared, Xu Shun brews a bowl of strong tea and hands it to Pincai.', zh: '饭罢，许顺泡了一碗酽茶递给聘才。' },
    },
    {
      start: 18, end: 36,
      title: { en: 'Idle talk', zh: '说了一会闲话' },
      quote: '说了一会闲话。',
      caption: { en: 'They sit talking of nothing much, while the pendulum swings and the afternoon slips by.', zh: '二人闲话半晌，钟摆来回，午后悄悄过去。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 17.6, zh: '吃过了饭，许顺泡了一碗酽茶递给聘才，', en: 'When the meal was over, Xu Shun brewed a bowl of strong tea and handed it to Pincai,' },
    { start: 18.4, end: 35.6, zh: '说了一会闲话。', en: 'and they chatted idly for a while.' },
  ],
});
