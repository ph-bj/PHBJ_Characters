import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 21. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：后来到底转荐没有呢？」聘才茫然，并不曾见有此事，只得恭身道谢。又说：「也没有转荐。」文辉
 *   道：「想必他又听了什么闲话了。但此时令尊还是处馆，还仍旧做那勾当？」聘才道：
 *
 * Translation: "Tell me, did that alternative recommendation ever materialize?" Pincai, utterly bewildered
 *   and entirely unaware of the matter, could only bow deeply in feigned gratitude and reply,
 *   "No such recommendation came to pass." Wenhui mused, "He must have caught wind of some
 *   unsavory gossip. Is your father still teaching, or is he still dabbling in those shady
 *   affairs?" Pincai answered:
 *
 * Staging: Pincai bewildered and bowing, and Wenhui’s pointed question.
 */
export default defineStory({
  title: { en: 'Those shady affairs', zh: '还做那勾当' },
  description: {
    en: 'Pincai knows nothing of any such recommendation; Wenhui asks whether his father still dabbles in shady business.',
    zh: '聘才茫然，只得道谢；文辉问其父还做那勾当否。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: 'Bewildered', zh: '聘才茫然' },
      quote: '聘才茫然，并不曾见有此事，只得恭身道谢。',
      caption: { en: 'Pincai has never heard of it, and can only bow his thanks.', zh: '聘才茫然，只得恭身道谢。' },
    },
    {
      start: 18, end: 36,
      title: { en: 'Still teaching?', zh: '还仍旧做那勾当' },
      quote: '但此时令尊还是处馆，还仍旧做那勾当？',
      caption: { en: '“Is your father still teaching—or still up to those old tricks?”', zh: '文辉问：令尊还是处馆，还仍旧做那勾当？' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '「后来到底转荐没有呢？」', en: '“Did that recommendation ever come through?”' },
    { start: 6, end: 17.6, zh: '聘才茫然，并不曾见有此事，只得恭身道谢，又说：「也没有转荐。」', en: 'Pincai, bewildered, had never heard of it; he bowed his thanks: “No such recommendation came.”' },
    { start: 18.4, end: 26, zh: '文辉道：「想必他又听了什么闲话了。', en: 'Wenhui: “He must have heard some gossip.' },
    { start: 26, end: 35.6, zh: '但此时令尊还是处馆，还仍旧做那勾当？」聘才道：', en: 'Is your father still teaching, or still dabbling in those shady affairs?” Pincai answered:' },
  ],
});
