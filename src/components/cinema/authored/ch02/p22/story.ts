import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 22. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：「此刻家父在一个盐务里司事，比处馆略宽展些。」文辉道：
 *
 * Translation: "At present, my father serves as a clerk in a salt administration office, which offers
 *   slightly more latitude than teaching." Wenhui nodded approvingly:
 *
 * Staging: Pincai answering, Wenhui nodding.
 */
export default defineStory({
  title: { en: 'A clerk in the salt office', zh: '盐务司事' },
  description: {
    en: 'Pincai says his father now clerks in a salt administration office.',
    zh: '聘才说其父在盐务里司事。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: 'The salt administration', zh: '盐务里司事' },
      quote: '此刻家父在一个盐务里司事，比处馆略宽展些。',
      caption: { en: 'His father now clerks in a salt office—a little more room than teaching.', zh: '家父在盐务里司事，比处馆略宽展些。' },
    },
    {
      start: 18, end: 36,
      title: { en: 'Wenhui nods', zh: '文辉道' },
      quote: '文辉道：',
      caption: { en: 'Wenhui nods his approval.', zh: '文辉点头。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 17.6, zh: '「此刻家父在一个盐务里司事，比处馆略宽展些。」', en: '“My father now serves as a clerk in the salt administration, with a little more latitude than teaching.”' },
    { start: 18.4, end: 35.6, zh: '文辉道：', en: 'Wenhui nodded approvingly:' },
  ],
});
