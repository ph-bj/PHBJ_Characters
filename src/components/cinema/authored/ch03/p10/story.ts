import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 10. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：又见一个闲空雅座内，来了一个人。这个人好个高大身材，一个青黑的脸，穿着银针海龙裘，气概轩昂，
 *   威风凛烈，年纪也不过三十来岁。跟着三四个家人，都也穿得体面。自备了大锡茶壶、盖碗、水烟袋等物
 *   ，摆了一桌子，那人方才坐下。只见一群小旦蜂拥而至，把这一个大官座也挤得满满的了。见那人的神气
 *   好不飞扬跋扈，顾盼自豪，叫家人买这样，买那样，茶果点心摆了无数，不好的摔得一地，还把那家人大
 *   骂。聘才听得怪声怪气的，也不晓得他是那一处人。
 *
 * Translation: His attention then drifted to a previously empty private box, now occupied by a newly
 *   arrived patron. The man was powerfully built, with a swarthy, darkened complexion. Draped in
 *   a silver-needle sea-dragon fur cloak, he exuded an arrogant, overwhelming presence. Though
 *   barely thirty, he was trailed by three or four impeccably dressed servants. He had brought
 *   his own heavy pewter teapot, covered teacups, and a water-pipe, covering the table in an
 *   extravagant display before taking his seat. Almost instantly, a flock of young dan actors
 *   swarmed the box, packing the grand official's seating to the brim. The man's demeanor was
 *   insufferably haughty; he cast his gaze about with self-satisfied pride, barking orders at
 *   his servants to purchase an endless stream of delicacies. When a dish displeased him, he
 *   hurled it to the floor, cursing his attendants ruthlessly. Pincai, listening to his strange,
 *   grating accent, could not decipher which province the man hailed from.
 *
 * Staging: the man’s entrance, servants setting out his things; the box packed with dan; a dish flung to
 *   the floor and a servant cursed.
 */
export default defineStory({
  title: { en: 'The man in the sea-otter cloak', zh: '青黑的脸' },
  description: {
    en: 'A tall, swarthy man in a silver-needle sea-otter cloak takes an empty box, his servants laying out his own pewter teapot and water pipe. A swarm of dan crowds in; he orders food by the tray, hurls down what displeases him and curses his men, in an accent Pincai cannot place.',
    zh: '一个高大青黑脸的人，穿银针海龙裘，来到雅座，家人摆出自备的锡茶壶、水烟袋。一群小旦蜂拥而至；他叫买这买那，不好的摔了一地，还把家人大骂，口音怪声怪气。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'A big man arrives', zh: '好个高大身材' },
      quote: '这个人好个高大身材，一个青黑的脸，穿着银针海龙裘',
      caption: { en: 'Into an empty box comes a tall man with a dark face, in a silver-needle sea-otter cloak; his servants set out his own teapot and water pipe.', zh: '雅座来了个高大青黑脸的人，穿银针海龙裘；家人摆出自备的茶壶、烟袋。' },
    },
    {
      start: 12, end: 22,
      title: { en: 'A swarm of dan', zh: '蜂拥而至' },
      quote: '只见一群小旦蜂拥而至，把这一个大官座也挤得满满的了。',
      caption: { en: 'A swarm of young dan packs the box to the brim.', zh: '一群小旦蜂拥而至，把官座挤得满满的。' },
    },
    {
      start: 22, end: 36,
      title: { en: 'Dishes on the floor', zh: '摔得一地' },
      quote: '不好的摔得一地，还把那家人大骂',
      caption: { en: 'He orders this and that; what displeases him he flings down, cursing his servants.', zh: '叫家人买这买那，不好的摔了一地，还把家人大骂。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '又见一个闲空雅座内，来了一个人。好个高大身材，一个青黑的脸，', en: 'Into an empty box came a man—tall and powerfully built, with a dark, swarthy face,' },
    { start: 6, end: 11.6, zh: '穿着银针海龙裘，气概轩昂，年纪也不过三十来岁。自备了大锡茶壶、盖碗、水烟袋等物。', en: 'in a silver-needle sea-otter cloak, barely thirty; he had brought his own pewter teapot, cups and water pipe.' },
    { start: 12.4, end: 21.6, zh: '只见一群小旦蜂拥而至，把这一个大官座也挤得满满的了。', en: 'A swarm of young dan came crowding in, packing the grand box to the brim.' },
    { start: 22.4, end: 28, zh: '见那人的神气好不飞扬跋扈，叫家人买这样，买那样，茶果点心摆了无数，', en: 'He lorded it over them, sending his men out for this and that until the table overflowed;' },
    { start: 28, end: 32, zh: '不好的摔得一地，还把那家人大骂。', en: 'what displeased him he flung to the floor, and cursed his servants roundly.' },
    { start: 32, end: 35.6, zh: '聘才听得怪声怪气的，也不晓得他是那一处人。', en: 'Pincai could not tell, from his strange accent, where he came from.' },
  ],
});
