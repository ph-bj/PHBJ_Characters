import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 52. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：子玉心里自笑不已：「何以这些人为几个小旦，颠倒得神昏目暗，皂白不分。设或如今有个真正绝色
 *   来，只怕他们倒说不好了。」一路思想，忽到一处挤了车，子玉觉得鼻中一阵清香，非兰非麝，便从
 *   帘子上玻璃窗内一望，见对面一辆车，车里坐着一个老年的，外面坐了两个妙童，都不过十四五岁。
 *
 * Translation: Ziyu couldn't stop laughing to himself all the way. "Why do these people turn their minds
 *   so hazy and blind, failing to distinguish black from white, all for a few young dan? If a
 *   truly peerless beauty were to appear right now, I fear they would actually say he looked
 *   terrible." Lost in these thoughts along the way, his carriage suddenly became wedged in a
 *   crowded bottleneck. Ziyu caught a waft of a pure, fresh fragrance—neither orchid nor
 *   musk—and peeked out through the glass window on the curtain. He saw a carriage opposite
 *   them. Inside sat an elderly man, and on the outside sat two wondrous young boys, both no
 *   more than fourteen or fifteen.
 *
 * Staging: Ziyu’s cart rolling home, two carts wedged in the street, and the view through the glass window.
 */
export default defineStory({
  title: { en: 'A fragrance in the crowd', zh: '一阵清香' },
  description: {
    en: 'Ziyu laughs at the craze on his way home; wedged in traffic, he catches an unknown fragrance and looks out at the cart opposite.',
    zh: '子玉一路自笑；车子挤住，闻得一阵清香，从玻璃窗望见对面车上两个妙童。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'Laughing to himself', zh: '心里自笑' },
      quote: '何以这些人为几个小旦，颠倒得神昏目暗，皂白不分。',
      caption: { en: 'Ziyu laughs: how these people lose their wits over a few young dan!', zh: '子玉自笑：这些人为几个小旦颠倒得神昏目暗。' },
    },
    {
      start: 12, end: 24,
      title: { en: 'Neither orchid nor musk', zh: '非兰非麝' },
      quote: '忽到一处挤了车，子玉觉得鼻中一阵清香，非兰非麝',
      caption: { en: 'The carts wedge together in a bottleneck; a pure fragrance drifts in, neither orchid nor musk.', zh: '车子挤住，鼻中一阵清香，非兰非麝。' },
    },
    {
      start: 24, end: 36,
      title: { en: 'Through the glass window', zh: '从玻璃窗内一望' },
      quote: '见对面一辆车，车里坐着一个老年的，外面坐了两个妙童',
      caption: { en: 'Through the window: an old man in the cart opposite, and two wondrous boys of fourteen or fifteen outside.', zh: '对面车里一个老年的，外面坐着两个妙童，都不过十四五岁。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '子玉心里自笑不已：「何以这些人为几个小旦，颠倒得神昏目暗，皂白不分。', en: 'Ziyu laughed to himself: “Why do these people turn so blind over a few young dan?' },
    { start: 6, end: 11.6, zh: '设或如今有个真正绝色来，只怕他们倒说不好了。」', en: 'If a truly peerless beauty appeared, I fear they would say he looked terrible.”' },
    { start: 12.4, end: 18, zh: '一路思想，忽到一处挤了车，', en: 'Lost in thought, his carriage suddenly became wedged in a crowded bottleneck.' },
    { start: 18, end: 23.6, zh: '子玉觉得鼻中一阵清香，非兰非麝，', en: 'He caught a waft of pure fragrance—neither orchid nor musk—' },
    { start: 24.4, end: 30, zh: '便从帘子上玻璃窗内一望，见对面一辆车，车里坐着一个老年的，', en: 'and peeked through the glass window: in the carriage opposite sat an elderly man,' },
    { start: 30, end: 35.6, zh: '外面坐了两个妙童，都不过十四五岁。', en: 'and outside sat two wondrous boys, no more than fourteen or fifteen.' },
  ],
});
