import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 20.
 *
 * 原文：芙蓉出水露红颜，肥瘦相宜合燕环。 若使今人行往事，断无胡马入撞关。 此曲只应天上有，不知
 *   何处落凡尘。 当年我作唐天宝，愿把江山换美人。 再看第四题的是：
 *
 * Translation: A lotus rises from the water, revealing a rosy face; Both plump and slender suit him well,
 *   blending Feiyan and Yuhuan. If only the men of today had enacted the deeds of the past,
 *   Surely no barbarian steeds would have breached the mountain pass. This melody should exist
 *   only in the heavens above; I know not where it fell to grace the mortal dust. If I were the
 *   Emperor of Tang in the days of Tianbao, I would gladly trade my rivers and mountains for
 *   such a beauty. He then looked at the fourth entry, which read:
 *
 * Staged from album beats (cinema/beats/album.ts): the two quatrains for Sulan on a scroll, then the readers turn the page.
 */
export default defineStory({
  title: { en: 'A poem for Sulan', zh: '赠素兰诗' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. Nanxiang’s two quatrains for Sulan are brushed onto a scroll, then Ziyu turns the page.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。南湘赠素兰的两首绝句写上画轴，子玉随即翻页。',
  },
  shots: [
    {
      start: 0, end: 30,
      title: { en: 'A poem for Sulan', zh: '赠素兰诗' },
      quote: '芙蓉出水露红颜，……愿把江山换美人。',
      caption: { en: 'Nanxiang’s two quatrains for Sulan are brushed onto a scroll, line by line.', zh: '南湘赠素兰的两首绝句，一行行写上画轴。' },
    },
    {
      start: 30, end: 36,
      title: { en: 'The fourth entry', zh: '再看第四题' },
      quote: '再看第四题的是：',
      caption: { en: 'Ziyu turns to the fourth entry.', zh: '子玉翻到第四题。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 3.9, zh: '芙蓉出水露红颜，', en: 'A lotus rises from the water, revealing a rosy face;' },
    { start: 3.9, end: 7.4, zh: '肥瘦相宜合燕环。', en: 'Both plump and slender suit him well, blending Feiyan and Yuhuan.' },
    { start: 7.4, end: 10.9, zh: '若使今人行往事，', en: 'If only the men of today had enacted the deeds of the past,' },
    { start: 10.9, end: 14.4, zh: '断无胡马入撞关。', en: 'Surely no barbarian steeds would have breached the mountain pass.' },
    { start: 14.4, end: 17.9, zh: '此曲只应天上有，', en: 'This melody should exist only in the heavens above;' },
    { start: 17.9, end: 21.4, zh: '不知何处落凡尘。', en: 'I know not where it fell to grace the mortal dust.' },
    { start: 21.4, end: 24.9, zh: '当年我作唐天宝，', en: 'If I were the Emperor of Tang in the days of Tianbao,' },
    { start: 24.9, end: 28.4, zh: '愿把江山换美人。', en: 'I would gladly trade my rivers and mountains for such a beauty.' },
    { start: 30.4, end: 35.6, zh: '再看第四题的是：', en: 'He then looked at the fourth entry:' },
  ],
});
