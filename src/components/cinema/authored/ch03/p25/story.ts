import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 25. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：他们是有车来的，聘才搭了蓉官的车，四儿也跨了车沿，跟兔坐了车尾。聘才在车里随口的说笑，哄得蓉
 *   官十分欢喜，又赞他的相貌，要算京城第一。
 *
 * Translation: They had arrived by carriage. Pincai shared a carriage with Rongguan, while Si'er rode the
 *   shaft, and Rongguan's boy clung to the back. Within the carriage, Pincai conversed with
 *   effortless charm, drawing delighted laughter from Rongguan. He praised the youth's beauty,
 *   declaring him without equal in all the capital.
 *
 * Staging: the carts drawn up outside the playhouse; the procession through the streets; inside the cab,
 *   Pincai talking and Rongguan laughing.
 */
export default defineStory({
  title: { en: 'In Rongguan’s cart', zh: '搭了蓉官的车' },
  description: {
    en: 'They have come by cart. Pincai rides with Rongguan, Si’er on the shaft and Rongguan’s boy on the tail; inside, Pincai keeps up a stream of jokes and praises the boy as the loveliest in the capital.',
    zh: '他们是有车来的，聘才搭了蓉官的车，四儿跨车沿，跟班坐车尾。车里聘才说说笑笑，赞他相貌京城第一。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'Into the carts', zh: '搭了蓉官的车' },
      quote: '聘才搭了蓉官的车，四儿也跨了车沿，跟兔坐了车尾。',
      caption: { en: 'Pincai climbs into Rongguan’s cart, Si’er on the shaft, Rongguan’s boy on the back.', zh: '聘才搭了蓉官的车，四儿跨车沿，跟班坐车尾。' },
    },
    {
      start: 12, end: 24,
      title: { en: 'Through the streets', zh: '车马' },
      quote: '他们是有车来的',
      caption: { en: 'The carts roll off through the crowded street.', zh: '几辆车一路行去。' },
    },
    {
      start: 24, end: 36,
      title: { en: 'First in the capital', zh: '京城第一' },
      quote: '又赞他的相貌，要算京城第一。',
      caption: { en: 'Inside, Pincai keeps Rongguan laughing, and praises his looks as the finest in the capital.', zh: '车里聘才哄得蓉官欢喜，赞他相貌京城第一。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 11.6, zh: '他们是有车来的，聘才搭了蓉官的车，四儿也跨了车沿，跟兔坐了车尾。', en: 'They had come by cart. Pincai rode in Rongguan’s, Si’er on the shaft and Rongguan’s boy on the back.' },
    { start: 12.4, end: 23.6, zh: '聘才在车里随口的说笑，哄得蓉官十分欢喜，', en: 'In the cart Pincai chatted and joked, delighting Rongguan,' },
    { start: 24.4, end: 35.6, zh: '又赞他的相貌，要算京城第一。', en: 'and praised his looks as the finest in all the capital.' },
  ],
});
