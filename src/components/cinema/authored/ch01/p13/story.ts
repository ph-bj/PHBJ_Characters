import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 13. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：琼楼珠树袁宝珠 宝珠姓袁氏，宇瑶卿，年十六岁。姑苏人。隶联锦部。善丹青，娴吟咏。其演《鹊
 *   桥》、《密誓》、《惊梦》、《寻梦》等出，艳夺明霞，朗涵仙露。正使玉环失宠，杜女无华。 纤
 *   音遏云，柔情如水。《霓裳》一曲，描来天宝风流。春梦重寻，谱出香闺思怨。平时则清光奕奕，软
 *   语喁喁，励志冰清，守身玉洁。此当于郁金堂后筑翡翠楼居之。因赠以诗：
 *
 * Translation: Yuan Baozhu: A Pearl Tree of the Jade Pavilion. Baozhu's surname is Yuan, his style name
 *   Yaoqing, and he is sixteen years of age. A native of Suzhou, he belongs to the Lianjin
 *   troupe. He is highly skilled in painting and fluent in poetry. When he performs pieces such
 *   as "The Magpie Bridge," "The Secret Vow," "The Interrupted Dream," and "Pursuing the
 *   Dream," his radiant beauty eclipses the bright dawn clouds, shining with the clarity of
 *   immortal dew. Truly, he would make Yang Yuhuan lose her favor and render Du Liniang pale by
 *   comparison. His slender voice holds back the clouds; his tender feeling flows like water. A
 *   single melody of "Nishang" resurrects the romantic splendor of the Tianbao era; a return to
 *   his spring dream composes the melancholy yearning of a fragrant boudoir. In daily life, he
 *   exudes a pure, shimmering aura, speaking in soft, gentle whispers; he cultivates a spirit
 *   as clear as ice and guards his body as pure as jade. Such a one deserves to dwell in a
 *   jadeite tower built behind a hall of curcuma flowers. Thus, I present him with this poem:
 *
 * Staging: Yuan Baozhu’s emblem page, portrait, famous scenes, and a closing portrait of his purity.
 */
export default defineStory({
  title: { en: 'Yuan Baozhu, a pearl tree', zh: '琼楼珠树袁宝珠' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. The first entry: Yuan Baozhu.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。第一题：袁宝珠。',
  },
  shots: [
    {
      start: 0, end: 10,
      title: { en: 'A pearl tree in the jade tower', zh: '琼楼珠树' },
      quote: '琼楼珠树袁宝珠……姑苏人。隶联锦部。',
      caption: { en: 'The first entry: Yuan Baozhu, “A Pearl Tree of the Jade Pavilion,” sixteen, of Suzhou, in the Lianjin troupe.', zh: '第一题：琼楼珠树袁宝珠，年十六，姑苏人，隶联锦部。' },
    },
    {
      start: 10, end: 19,
      title: { en: 'Painter and poet', zh: '善丹青，娴吟咏' },
      quote: '善丹青，娴吟咏……纤音遏云，柔情如水。',
      caption: { en: 'Skilled in painting and fluent in poetry, he poses in the robes of the 《霓裳》 dance beside a peony.', zh: '善画能诗，着霓裳舞衣，立于牡丹之侧。' },
    },
    {
      start: 19, end: 29,
      title: { en: 'His famous scenes', zh: '《鹊桥》《密誓》' },
      quote: '其演《鹊桥》、《密誓》、《惊梦》、《寻梦》等出，艳夺明霞',
      caption: { en: 'Placards name his famous scenes as he dances: The Magpie Bridge, The Secret Vow, The Interrupted Dream, Pursuing the Dream.', zh: '水牌一一垂下：《鹊桥》《密誓》《惊梦》《寻梦》，宝珠当场起舞。' },
    },
    {
      start: 29, end: 36,
      title: { en: 'Pure as ice and jade', zh: '励志冰清，守身玉洁' },
      quote: '励志冰清，守身玉洁。',
      caption: { en: 'In daily life he keeps a spirit clear as ice and guards himself pure as jade.', zh: '平时励志冰清，守身玉洁。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 5, zh: '琼楼珠树袁宝珠', en: 'Yuan Baozhu: A Pearl Tree of the Jade Pavilion.' },
    { start: 5, end: 9.6, zh: '宝珠姓袁氏，宇瑶卿，年十六岁。姑苏人。隶联锦部。', en: 'Style name Yaoqing, sixteen years old, a native of Suzhou, of the Lianjin troupe.' },
    { start: 10.4, end: 14.4, zh: '善丹青，娴吟咏。', en: 'He is highly skilled in painting and fluent in poetry.' },
    { start: 14.4, end: 18.6, zh: '纤音遏云，柔情如水。', en: 'His slender voice holds back the clouds; his tender feeling flows like water.' },
    { start: 19.4, end: 24.2, zh: '其演《鹊桥》、《密誓》、《惊梦》、《寻梦》等出，', en: 'When he performs The Magpie Bridge, The Secret Vow, The Interrupted Dream and Pursuing the Dream,' },
    { start: 24.2, end: 28.6, zh: '艳夺明霞，朗涵仙露。正使玉环失宠，杜女无华。', en: 'his beauty eclipses the dawn clouds; Yang Yuhuan would lose her favor, and Du Liniang pale beside him.' },
    { start: 29.4, end: 33, zh: '平时则清光奕奕，软语喁喁，励志冰清，守身玉洁。', en: 'In daily life he shines with a pure light, speaks softly, and keeps himself clear as ice, pure as jade.' },
    { start: 33, end: 35.6, zh: '因赠以诗：', en: 'Thus, I present him with this poem:' },
  ],
});
