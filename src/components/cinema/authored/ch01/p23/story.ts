import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 23. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：纤纤一片彩云飞，流雪回风何处依。 金缕香多舞衣重，只应常着六铢衣。 芙蓉输面柳输腰，恰称
 *   花梁金步摇。 就使无情更无语，当场窄步已魂消。 再看第五题的是：
 *
 * Translation: A slender, fragile slip of iridescent cloud takes flight; Flowing snow and swirling
 *   wind—where will they find their rest? With abundant fragrant golden threads, your dancing
 *   robes are heavy; You ought always to wear the weightless garments of the gods. The lotus
 *   yields to your face, the willow to your waist; You perfectly suit the golden step-sway
 *   hairpin on your floral crown. Even if you were entirely devoid of feeling and offered not a
 *   word, Merely pacing your narrow steps upon the stage is enough to melt the soul. He then
 *   looked at the fifth entry, which read:
 *
 * Staging: the two quatrains for Shufang on a scroll, then the readers turn the page.
 */
export default defineStory({
  title: { en: 'A poem for Shufang', zh: '赠漱芳诗' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. Nanxiang’s two quatrains for Shufang are brushed onto a scroll, then Ziyu turns the page.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。南湘赠漱芳的两首绝句写上画轴，子玉随即翻页。',
  },
  shots: [
    {
      start: 0, end: 30,
      title: { en: 'A poem for Shufang', zh: '赠漱芳诗' },
      quote: '纤纤一片彩云飞，……当场窄步已魂消。',
      caption: { en: 'Nanxiang’s two quatrains for Shufang are brushed onto a scroll, line by line.', zh: '南湘赠漱芳的两首绝句，一行行写上画轴。' },
    },
    {
      start: 30, end: 36,
      title: { en: 'The fifth entry', zh: '再看第五题' },
      quote: '再看第五题的是：',
      caption: { en: 'Ziyu turns to the fifth entry.', zh: '子玉翻到第五题。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 3.9, zh: '纤纤一片彩云飞，', en: 'A slender, fragile slip of iridescent cloud takes flight;' },
    { start: 3.9, end: 7.4, zh: '流雪回风何处依。', en: 'Flowing snow and swirling wind—where will they find their rest?' },
    { start: 7.4, end: 10.9, zh: '金缕香多舞衣重，', en: 'With fragrant golden threads, your dancing robes are heavy;' },
    { start: 10.9, end: 14.4, zh: '只应常着六铢衣。', en: 'You ought always to wear the weightless garments of the gods.' },
    { start: 14.4, end: 17.9, zh: '芙蓉输面柳输腰，', en: 'The lotus yields to your face, the willow to your waist;' },
    { start: 17.9, end: 21.4, zh: '恰称花梁金步摇。', en: 'You perfectly suit the golden hairpin on your floral crown.' },
    { start: 21.4, end: 24.9, zh: '就使无情更无语，', en: 'Even if you had no feeling and offered not a word,' },
    { start: 24.9, end: 28.4, zh: '当场窄步已魂消。', en: 'Your narrow steps upon the stage would melt the soul.' },
    { start: 30.4, end: 35.6, zh: '再看第五题的是：', en: 'He then looked at the fifth entry:' },
  ],
});
