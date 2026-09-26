import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 31. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：盈盈十五已风流，巧笑横波未解羞。 最爱娇憨太无赖，到无人处学春愁。 我欲当筵乞紫云，一时
 *   声价遍传闻。 红牙拍到消魂处，檀口清歌白练裙。 再看第八题的是：
 *
 * Translation: At a graceful fifteen, he is already a master of romance; With a clever smile and sidelong
 *   glances, he knows not how to be shy. I love most his coy naivety, utterly without pretense;
 *   Retreating to an empty place, he mimics the melancholy of spring. I wish to stand before
 *   the feast and beg for the Purple Cloud; For a time, his price and fame are broadcast far
 *   and wide. When the red ivory clappers strike the soul-melting note, Sandalwood lips sing a
 *   clear song above a white silk skirt. He then looked at the eighth entry, which read:
 *
 * Staging: the two quatrains for Guibao on a scroll, then the readers turn the page.
 */
export default defineStory({
  title: { en: 'A poem for Guibao', zh: '赠桂保诗' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. Nanxiang’s two quatrains for Guibao are brushed onto a scroll, then Ziyu turns the page.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。南湘赠桂保的两首绝句写上画轴，子玉随即翻页。',
  },
  shots: [
    {
      start: 0, end: 30,
      title: { en: 'A poem for Guibao', zh: '赠桂保诗' },
      quote: '盈盈十五已风流，……檀口清歌白练裙。',
      caption: { en: 'Nanxiang’s two quatrains for Guibao are brushed onto a scroll, line by line.', zh: '南湘赠桂保的两首绝句，一行行写上画轴。' },
    },
    {
      start: 30, end: 36,
      title: { en: 'The eighth entry', zh: '再看第八题' },
      quote: '再看第八题的是：',
      caption: { en: 'Ziyu turns to the eighth entry.', zh: '子玉翻到第八题。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 3.9, zh: '盈盈十五已风流，', en: 'At a graceful fifteen, he is already a master of romance;' },
    { start: 3.9, end: 7.4, zh: '巧笑横波未解羞。', en: 'With a clever smile and sidelong glances, he knows not how to be shy.' },
    { start: 7.4, end: 10.9, zh: '最爱娇憨太无赖，', en: 'I love most his coy naivety, utterly without pretense;' },
    { start: 10.9, end: 14.4, zh: '到无人处学春愁。', en: 'Alone, he mimics the melancholy of spring.' },
    { start: 14.4, end: 17.9, zh: '我欲当筵乞紫云，', en: 'I wish to stand before the feast and beg for the Purple Cloud;' },
    { start: 17.9, end: 21.4, zh: '一时声价遍传闻。', en: 'For a time, his price and fame are broadcast far and wide.' },
    { start: 21.4, end: 24.9, zh: '红牙拍到消魂处，', en: 'When the red ivory clappers strike the soul-melting note,' },
    { start: 24.9, end: 28.4, zh: '檀口清歌白练裙。', en: 'Sandalwood lips sing a clear song above a white silk skirt.' },
    { start: 30.4, end: 35.6, zh: '再看第八题的是：', en: 'He then looked at the eighth entry:' },
  ],
});
