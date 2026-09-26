import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 12. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：一个是胖子，一个生得黑瘦，有了微须，身上也穿得华丽，都是三十来岁年纪，也有两个小旦跟着说闲话
 *   。小厮铺上坐褥，一齐挤着坐下。聘才听他们说话，又看看那两个相公，也觉得平常，不算什么上好的。
 *   忽见那个热闹官座里，有一个相公，望着这边，少顷走了过来，对胖子与那一位都请了安。这张桌子连聘
 *   才已经是五个人，况兼那人生得肥胖，又占了好多地方，那相公来时已挤不进去。因见聘才同桌，只道是
 *   一起的人，便向聘才弯了弯腰。聘才是个知趣的人，忙把身子一挪，空出个坐儿。这相公便坐下了，即问
 *   了聘才的姓，聘才连忙答应，也要问他名氏，忽见那胖子扭转手来，在那相公膀子上一把抓住。
 *
 * Translation: One was a man of considerable girth; the other, dark, lean, and sporting a sparse beard.
 *   Both were clad in sumptuous finery, appearing to be in their thirties, and were accompanied
 *   by two young dan actors engaged in idle chatter. A servant unrolled their seat cushions, and
 *   they squeezed together at the table. Pincai eavesdropped briefly, appraising the two
 *   accompanying actors—they seemed rather ordinary, possessing no transcendent beauty.
 *   Suddenly, a young dan from the raucous official's box cast a glance in their direction,
 *   gracefully excused himself, and approached to greet the stout man and his companion. With
 *   Pincai present, the table now seated five, and the stout man's sheer bulk left little room
 *   for the new arrival. Assuming Pincai was part of their company, the young actor offered him
 *   a slight, courteous bow. Pincai, ever attuned to social graces, promptly shifted his weight,
 *   creating a sliver of space. As the actor settled in and inquired after Pincai's surname,
 *   Pincai eagerly obliged and prepared to ask for his in return. Before a word could be spoken,
 *   however, the stout man reached over and firmly grasped the actor's arm.
 *
 * Staging: the fat man and the lean man seating themselves; a dan leaving the big box and crossing the pit;
 *   Pincai making room; the grab.
 */
export default defineStory({
  title: { en: 'A dan crosses over', zh: '走了过来' },
  description: {
    en: 'One is fat, one dark and lean with a thin beard, both in fine clothes with two ordinary dan in tow. Then a dan from the noisy box comes across to greet them; finding no room, he bows to Pincai, who shifts to make space. He has just asked Pincai’s name when the fat man grabs his arm.',
    zh: '一胖一瘦，衣着华丽，带着两个平常的小旦。热闹官座里一个相公走过来请安，挤不进去，向聘才弯弯腰，聘才挪出座儿。他刚问了聘才的姓，胖子一把抓住他膀子。',
  },
  shots: [
    {
      start: 0, end: 9,
      title: { en: 'Fat and lean', zh: '一个是胖子，一个生得黑瘦' },
      quote: '一个是胖子，一个生得黑瘦，有了微须',
      caption: { en: 'One fat, one dark and lean with a thin beard, both richly dressed, two ordinary dan with them.', zh: '一胖一瘦有微须，穿得华丽，带着两个平常的小旦。' },
    },
    {
      start: 9, end: 18,
      title: { en: 'From the big box', zh: '走了过来' },
      quote: '那个热闹官座里，有一个相公，望着这边，少顷走了过来',
      caption: { en: 'A dan in the noisy box looks their way, then comes across to greet them.', zh: '热闹官座里一个相公望着这边，走过来请安。' },
    },
    {
      start: 18, end: 28,
      title: { en: 'Room is made', zh: '空出个坐儿' },
      quote: '聘才是个知趣的人，忙把身子一挪，空出个坐儿。',
      caption: { en: 'There’s no room; he bows to Pincai, who quickly shifts to make space.', zh: '挤不进去，他向聘才弯了弯腰；聘才知趣，挪出个坐儿。' },
    },
    {
      start: 28, end: 36,
      title: { en: 'A grab at the arm', zh: '一把抓住' },
      quote: '忽见那胖子扭转手来，在那相公膀子上一把抓住。',
      caption: { en: 'He asks Pincai’s name—and the fat man seizes his arm.', zh: '他刚问了聘才的姓，胖子一把抓住他膀子。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4.6, zh: '一个是胖子，一个生得黑瘦，有了微须，都是三十来岁年纪，', en: 'One was fat, the other dark and lean with a thin beard, both about thirty,' },
    { start: 4.6, end: 8.6, zh: '也有两个小旦跟着说闲话。聘才看那两个相公，也觉得平常。', en: 'with two young dan chattering beside them—rather ordinary ones, Pincai thought.' },
    { start: 9.4, end: 17.6, zh: '忽见那个热闹官座里，有一个相公，望着这边，少顷走了过来，对胖子与那一位都请了安。', en: 'Then a dan in the noisy box looked their way, came across, and greeted the fat man and his friend.' },
    { start: 18.4, end: 23, zh: '那人生得肥胖，又占了好多地方，那相公来时已挤不进去。', en: 'The fat man took up so much room that the newcomer could not squeeze in.' },
    { start: 23, end: 27.6, zh: '便向聘才弯了弯腰。聘才忙把身子一挪，空出个坐儿。', en: 'He gave Pincai a little bow, and Pincai quickly shifted to make a space.' },
    { start: 28.4, end: 35.6, zh: '这相公便坐下了，即问了聘才的姓，忽见那胖子在那相公膀子上一把抓住。', en: 'He sat and asked Pincai’s name—when the fat man reached over and seized his arm.' },
  ],
});
