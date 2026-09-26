import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 26. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：舞袖长拖艳若霞，妆成𩭏鬌髻云斜。 侍儿扶上临春阁，要斗南朝张丽华。 慧绝香心酒半酣，妙
 *   疑才过月初三。 动人最是《阳关》曲，听得征夫恨不堪。 再看第六题的是：
 *
 * Translation: Your long, trailing dancing sleeves are as breathtaking as the dawn clouds; Your makeup
 *   complete, your clouded hair coiled in sweeping curves. Attendants assist you up into the
 *   Pavilion of Approaching Spring; You mean to rival Zhang Lihua of the Southern Dynasties.
 *   With absolute brilliance and a fragrant heart, when the wine is half-drunk, Your subtle
 *   charm mirrors the slender moon just past its third night. Most moving of all is the melody
 *   of "Yang Pass"; It leaves the departing traveler utterly unable to bear his grief. He then
 *   looked at the sixth entry, which read:
 *
 * Staging: the two quatrains for Yulin on a scroll, then the readers turn the page.
 */
export default defineStory({
  title: { en: 'A poem for Yulin', zh: '赠玉林诗' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. Nanxiang’s two quatrains for Yulin are brushed onto a scroll, then Ziyu turns the page.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。南湘赠玉林的两首绝句写上画轴，子玉随即翻页。',
  },
  shots: [
    {
      start: 0, end: 30,
      title: { en: 'A poem for Yulin', zh: '赠玉林诗' },
      quote: '舞袖长拖艳若霞，……听得征夫恨不堪。',
      caption: { en: 'Nanxiang’s two quatrains for Yulin are brushed onto a scroll, line by line.', zh: '南湘赠玉林的两首绝句，一行行写上画轴。' },
    },
    {
      start: 30, end: 36,
      title: { en: 'The sixth entry', zh: '再看第六题' },
      quote: '再看第六题的是：',
      caption: { en: 'Ziyu turns to the sixth entry.', zh: '子玉翻到第六题。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 3.9, zh: '舞袖长拖艳若霞，', en: 'Your long, trailing dancing sleeves are as breathtaking as the dawn clouds;' },
    { start: 3.9, end: 7.4, zh: '妆成𩭏鬌髻云斜。', en: 'Your makeup complete, your clouded hair coiled in sweeping curves.' },
    { start: 7.4, end: 10.9, zh: '侍儿扶上临春阁，', en: 'Attendants help you up into the Pavilion of Approaching Spring;' },
    { start: 10.9, end: 14.4, zh: '要斗南朝张丽华。', en: 'You mean to rival Zhang Lihua of the Southern Dynasties.' },
    { start: 14.4, end: 17.9, zh: '慧绝香心酒半酣，', en: 'Brilliant and fragrant-hearted, when the wine is half drunk,' },
    { start: 17.9, end: 21.4, zh: '妙疑才过月初三。', en: 'Your charm is the slender moon just past its third night.' },
    { start: 21.4, end: 24.9, zh: '动人最是《阳关》曲，', en: 'Most moving of all is the melody of “Yang Pass”;' },
    { start: 24.9, end: 28.4, zh: '听得征夫恨不堪。', en: 'It leaves the departing traveler unable to bear his grief.' },
    { start: 30.4, end: 35.6, zh: '再看第六题的是：', en: 'He then looked at the sixth entry:' },
  ],
});
