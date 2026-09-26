import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 17.
 *
 * 原文：风流林下久传扬，苏小生来独擅长。 一曲清歌绕梁韵，天花乱落舞衣香。 箫管当场犹自羞，暂将
 *   仙骨换娇柔。 一团绛雪随风散，散作千秋儿女愁。 再看第三题的是：
 *
 * Translation: His unstudied grace, the elegance of the groves, has long been sung abroad, Young Su, by
 *   nature, monopolizes this singular art. A single melody of pure song leaves its resonance
 *   winding round the rafters; Heavenly blossoms tumble wildly, scenting your dancing robes.
 *   The flutes and pipes upon the stage seem almost to blush with shame, As you temporarily
 *   exchange your immortal bones for tender grace. A swirling mass of crimson snow scatters
 *   upon the wind, Scattering to become the sorrow of lovers for a thousand autumns. He then
 *   looked at the third entry, which read:
 *
 * Staged from album beats (cinema/beats/album.ts): the two quatrains for Huifang on a scroll, then the readers turn the page.
 */
export default defineStory({
  title: { en: 'A poem for Huifang', zh: '赠蕙芳诗' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. Nanxiang’s two quatrains for Huifang are brushed onto a scroll, then Ziyu turns the page.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。南湘赠蕙芳的两首绝句写上画轴，子玉随即翻页。',
  },
  shots: [
    {
      start: 0, end: 30,
      title: { en: 'A poem for Huifang', zh: '赠蕙芳诗' },
      quote: '风流林下久传扬，……散作千秋儿女愁。',
      caption: { en: 'Nanxiang’s two quatrains for Huifang are brushed onto a scroll, line by line.', zh: '南湘赠蕙芳的两首绝句，一行行写上画轴。' },
    },
    {
      start: 30, end: 36,
      title: { en: 'The third entry', zh: '再看第三题' },
      quote: '再看第三题的是：',
      caption: { en: 'Ziyu turns to the third entry.', zh: '子玉翻到第三题。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 3.9, zh: '风流林下久传扬，', en: 'His unstudied grace, the elegance of the groves, has long been sung abroad;' },
    { start: 3.9, end: 7.4, zh: '苏小生来独擅长。', en: 'Young Su, by nature, monopolizes this singular art.' },
    { start: 7.4, end: 10.9, zh: '一曲清歌绕梁韵，', en: 'A single melody of pure song leaves its resonance winding round the rafters;' },
    { start: 10.9, end: 14.4, zh: '天花乱落舞衣香。', en: 'Heavenly blossoms tumble wildly, scenting your dancing robes.' },
    { start: 14.4, end: 17.9, zh: '箫管当场犹自羞，', en: 'The flutes and pipes upon the stage seem almost to blush with shame,' },
    { start: 17.9, end: 21.4, zh: '暂将仙骨换娇柔。', en: 'As you exchange your immortal bones for tender grace.' },
    { start: 21.4, end: 24.9, zh: '一团绛雪随风散，', en: 'A swirling mass of crimson snow scatters upon the wind,' },
    { start: 24.9, end: 28.4, zh: '散作千秋儿女愁。', en: 'Scattering to become the sorrow of lovers for a thousand autumns.' },
    { start: 30.4, end: 35.6, zh: '再看第三题的是：', en: 'He then looked at the third entry:' },
  ],
});
