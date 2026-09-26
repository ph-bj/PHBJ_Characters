import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 45.
 *
 * 原文：接进了子玉。先同到内里去见了表舅母陆氏夫人。这夫人已是文辉续娶的了，今年才四十岁。又见了
 *   王恂的妻室孙氏，那是表嫂。仲清的妻室蓉华，那是表姊。还有个琼华小姐没有出来，因听得他父亲
 *   前日说那子玉的好处，其口风似要与他联姻的话，所以不肯出来见这表兄了。陆夫人见子玉，真是见
 *   一回爱一回，留他坐了，问了一会家常话，子玉告退。
 *
 * Translation: He welcomed Ziyu inside. First, they went to the inner quarters to pay respects to his
 *   maternal aunt, Lady Lu. This lady was Wenhui's second wife and was only forty years old
 *   this year. He also greeted Wang Xun's wife, Lady Sun, his cousin-in-law. Zhongqing's wife,
 *   Ronghua, was his older female cousin. There was also a Miss Qionghua who did not come out
 *   to meet him; having heard her father praise Ziyu's qualities a few days prior, and sensing
 *   his tone suggested arranging a marriage between them, she felt shy and refused to come out
 *   to meet this cousin. Lady Lu felt her affection grow every time she saw Ziyu; she kept him
 *   seated, asked a few everyday questions, and then Ziyu took his leave.
 *
 * Staged from tableau beats (cinema/beats/tableau.ts): the ladies of the Wang house, Qionghua hiding, and Lady Lu chatting with Ziyu.
 */
export default defineStory({
  title: { en: 'The inner quarters', zh: '进内见舅母' },
  description: {
    en: 'Ziyu pays his respects to Lady Lu and his cousins; Miss Qionghua, hearing talk of a match, is too shy to come out.',
    zh: '子玉入内拜见陆夫人及表嫂表姊；琼华小姐因闻联姻之语，不肯出来。',
  },
  shots: [
    {
      start: 0, end: 14,
      title: { en: 'The ladies of the house', zh: '表舅母陆氏夫人' },
      quote: '先同到内里去见了表舅母陆氏夫人……表姊。',
      caption: { en: 'Ziyu greets Lady Lu, Wang Xun’s wife Lady Sun, and his cousin Ronghua, Zhongqing’s wife.', zh: '子玉拜见陆夫人、表嫂孙氏、表姊蓉华。' },
    },
    {
      start: 14, end: 26,
      title: { en: 'Miss Qionghua stays away', zh: '琼华小姐没有出来' },
      quote: '还有个琼华小姐没有出来……所以不肯出来见这表兄了。',
      caption: { en: 'Qionghua, having heard her father hint at a match with Ziyu, is too shy to come out.', zh: '琼华小姐闻父亲有联姻之意，不肯出来见表兄。' },
    },
    {
      start: 26, end: 36,
      title: { en: 'Fonder each time', zh: '见一回爱一回' },
      quote: '陆夫人见子玉，真是见一回爱一回',
      caption: { en: 'Lady Lu grows fonder of Ziyu each time; she keeps him to chat, then he takes his leave.', zh: '陆夫人见子玉，见一回爱一回，留坐问家常，子玉告退。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 5, zh: '接进了子玉。先同到内里去见了表舅母陆氏夫人。', en: 'He welcomed Ziyu inside; first they paid respects to his aunt, Lady Lu.' },
    { start: 5, end: 9.4, zh: '这夫人已是文辉续娶的了，今年才四十岁。', en: 'She was Wenhui’s second wife, only forty years old.' },
    { start: 9.4, end: 13.6, zh: '又见了王恂的妻室孙氏，仲清的妻室蓉华。', en: 'He also greeted Wang Xun’s wife, Lady Sun, and Zhongqing’s wife, Ronghua.' },
    { start: 14.4, end: 20, zh: '还有个琼华小姐没有出来，因听得他父亲前日说那子玉的好处，', en: 'Miss Qionghua did not come out: she had heard her father praise Ziyu,' },
    { start: 20, end: 25.6, zh: '其口风似要与他联姻，所以不肯出来见这表兄了。', en: 'hinting at a marriage between them, and was too shy to meet this cousin.' },
    { start: 26.4, end: 31, zh: '陆夫人见子玉，真是见一回爱一回，', en: 'Lady Lu’s affection grew every time she saw Ziyu;' },
    { start: 31, end: 35.6, zh: '留他坐了，问了一会家常话，子玉告退。', en: 'she kept him seated for a chat, and then Ziyu took his leave.' },
  ],
});
