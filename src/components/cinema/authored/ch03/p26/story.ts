import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 26. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：说说笑笑己到了一个馆子，一同进去，拣了雅座坐了。走堂的上来，张罗点了菜，蓉官斟了酒。只听得隔
 *   壁燕语莺声，甚为热闹。蓉官从板缝里望时，就是那个奚大老爷带了春兰，还有三个相公在那里。聘才问
 *   富三道：「老太爷的讳，上下是那两个字？」
 *
 * Translation: Still immersed in lively conversation, they arrived at a refined restaurant, securing a
 *   secluded, elegant private room. A waiter appeared promptly to take their order, and Rongguan
 *   gracefully poured the wine. From the adjacent room drifted a chorus of voices, bright and
 *   musical as swallows and orioles. Peering through a slender crack in the wooden partition,
 *   Rongguan whispered, "It is that Great Lord Xi. He has Chunlan and three other actors with
 *   him." Turning back, Pincai respectfully addressed Fu the Third: "May I ask the honorable
 *   name of your late father?"
 *
 * Staging: the party climbing to the upstairs rooms; wine poured; the chatter through the wall; Rongguan’s
 *   eye at the crack and what he sees; Pincai’s question.
 */
export default defineStory({
  title: { en: 'Through the crack', zh: '板缝里望' },
  description: {
    en: 'At the restaurant they take a private room; Rongguan pours. From next door come voices like swallows and orioles, and through a crack in the partition Rongguan sees Lord Xi with Chunlan and three other dan. Pincai asks Fu the name of his late father.',
    zh: '到了馆子，拣了雅座，蓉官斟酒。隔壁燕语莺声，蓉官从板缝里望，就是奚大老爷带了春兰和三个相公。聘才问富三老太爷的讳。',
  },
  shots: [
    {
      start: 0, end: 10,
      title: { en: 'A private room', zh: '拣了雅座' },
      quote: '已到了一个馆子，一同进去，拣了雅座坐了。',
      caption: { en: 'They reach a restaurant, take a private room and order; Rongguan pours the wine.', zh: '到了馆子，拣了雅座，点了菜，蓉官斟了酒。' },
    },
    {
      start: 10, end: 20,
      title: { en: 'Voices next door', zh: '燕语莺声' },
      quote: '只听得隔壁燕语莺声，甚为热闹。',
      caption: { en: 'From the next room comes a bright chatter of voices.', zh: '隔壁燕语莺声，甚为热闹。' },
    },
    {
      start: 20, end: 28,
      title: { en: 'Lord Xi again', zh: '奚大老爷' },
      quote: '就是那个奚大老爷带了春兰，还有三个相公在那里。',
      caption: { en: 'Through a crack in the boards: Lord Xi, with Chunlan and three other dan.', zh: '板缝里一望：奚大老爷带了春兰，还有三个相公。' },
    },
    {
      start: 28, end: 36,
      title: { en: 'Your late father’s name?', zh: '老太爷的讳' },
      quote: '聘才问富三道：「老太爷的讳，上下是那两个字？」',
      caption: { en: 'Pincai turns to Fu: may he ask his late father’s name?', zh: '聘才问富三：老太爷的讳是那两个字？' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 9.6, zh: '说说笑笑己到了一个馆子，一同进去，拣了雅座坐了。走堂的上来，点了菜，蓉官斟了酒。', en: 'Talking and laughing they reached a restaurant, took a private room and ordered; Rongguan poured the wine.' },
    { start: 10.4, end: 19.6, zh: '只听得隔壁燕语莺声，甚为热闹。', en: 'From next door came voices like swallows and orioles—a lively party.' },
    { start: 20.4, end: 27.6, zh: '蓉官从板缝里望时，就是那个奚大老爷带了春兰，还有三个相公在那里。', en: 'Rongguan peered through a crack in the boards: it was Lord Xi, with Chunlan and three other dan.' },
    { start: 28.4, end: 35.6, zh: '聘才问富三道：「老太爷的讳，上下是那两个字？」', en: 'Pincai asked Fu, “May I ask your late father’s name?”' },
  ],
});
