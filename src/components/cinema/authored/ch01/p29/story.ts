import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 29. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：侠骨柔情世所难，肯随红袖倚阑干。 平生知己无须嘱，请把龙纹仔细看。 纷披五色起朝霞，鼙鼓
 *   声声气倍加。 戏罢卸妆垂手立，亭亭一树碧桃花。 再看第七题的是：
 *
 * Translation: Chivalrous bones and a tender heart are rare in this world, Yet he is willing to lean
 *   against the balustrade with red sleeves. A lifelong confidant requires no explicit
 *   instructions; Just carefully examine the dragon patterns on his blade. A riot of five
 *   colors rises like the morning clouds; The incessant beating of the war drums redoubles his
 *   spirit. When the play is done and his makeup removed, he stands with hands at his sides,
 *   Standing tall and graceful—a single tree of verdant peach blossoms. He then looked at the
 *   seventh entry, which read:
 *
 * Staging: the two quatrains for Lanbao on a scroll, then the readers turn the page.
 */
export default defineStory({
  title: { en: 'A poem for Lanbao', zh: '赠兰保诗' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. Nanxiang’s two quatrains for Lanbao are brushed onto a scroll, then Ziyu turns the page.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。南湘赠兰保的两首绝句写上画轴，子玉随即翻页。',
  },
  shots: [
    {
      start: 0, end: 30,
      title: { en: 'A poem for Lanbao', zh: '赠兰保诗' },
      quote: '侠骨柔情世所难，……亭亭一树碧桃花。',
      caption: { en: 'Nanxiang’s two quatrains for Lanbao are brushed onto a scroll, line by line.', zh: '南湘赠兰保的两首绝句，一行行写上画轴。' },
    },
    {
      start: 30, end: 36,
      title: { en: 'The seventh entry', zh: '再看第七题' },
      quote: '再看第七题的是：',
      caption: { en: 'Ziyu turns to the seventh entry.', zh: '子玉翻到第七题。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 3.9, zh: '侠骨柔情世所难，', en: 'Chivalrous bones and a tender heart are rare in this world,' },
    { start: 3.9, end: 7.4, zh: '肯随红袖倚阑干。', en: 'Yet he is willing to lean against the balustrade with red sleeves.' },
    { start: 7.4, end: 10.9, zh: '平生知己无须嘱，', en: 'A lifelong confidant requires no explicit instructions;' },
    { start: 10.9, end: 14.4, zh: '请把龙纹仔细看。', en: 'Just examine the dragon patterns on his blade.' },
    { start: 14.4, end: 17.9, zh: '纷披五色起朝霞，', en: 'A riot of five colors rises like the morning clouds;' },
    { start: 17.9, end: 21.4, zh: '鼙鼓声声气倍加。', en: 'The beating of the war drums redoubles his spirit.' },
    { start: 21.4, end: 24.9, zh: '戏罢卸妆垂手立，', en: 'The play done, his makeup removed, he stands with hands at his sides,' },
    { start: 24.9, end: 28.4, zh: '亭亭一树碧桃花。', en: 'Tall and graceful—a single tree of verdant peach blossoms.' },
    { start: 30.4, end: 35.6, zh: '再看第七题的是：', en: 'He then looked at the seventh entry:' },
  ],
});
