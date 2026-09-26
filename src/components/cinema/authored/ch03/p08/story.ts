import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 8. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：次日，聘才记着叶茂林的话，吃了早饭想去听戏，叫四儿带了钱，换了衣裳。因元茂在书房读书，不好约
 *   他，独自步行出门，不多路就到了戏园地方。这条街共有五个园子，一路车马挤满，甚是难走。遍看联锦
 *   班的报子，今日没有戏，遇着传差，聘才心上不乐，只得再找别的班子。耳边听得一阵锣鼓响，走过了几
 *   家铺面，见一个戏园写着三乐园，是联珠班。进去看时，见两旁楼上楼下及中间池子里，人都坐满了，台
 *   上也将近开戏；就有看座儿的上来招呼，引聘才到了上场门，靠墙一张桌子边。聘才却没有带着垫子，看
 *   座儿的拿了个垫子与他铺了，送上茶壶、香火。不多一会开了戏。冲场戏是没有什么好看的。
 *
 * Translation: The following morning, with Ye Maolin's vivid descriptions lingering in his mind, Pincai
 *   finished his breakfast, resolved to attend a play. He instructed Si'er to carry some coin
 *   and changed into fresh garments. Knowing Yuanmao was immersed in his studies, Pincai
 *   departed alone on foot. The theater district was a short distance away, a bustling
 *   thoroughfare lined with five distinct playhouses, choked with carriages and horses, making
 *   passage arduous. Scanning the playbills for the Lianjin Troupe, he found they had no public
 *   performance that day, having been summoned for a private engagement. Mildly disappointed, he
 *   sought out another company. The resonant clash of gongs and drums soon drew him past several
 *   storefronts to a theater named the Sanle Garden, home to the Lianzhu Troupe. Stepping
 *   inside, he beheld a sea of patrons—the upper galleries, the lower boxes, and the central pit
 *   were filled to bursting. The performance was on the verge of commencing. An usher swiftly
 *   approached, guiding Pincai to a table near the stage entrance, set against the wall. Seeing
 *   Pincai had brought no cushion, the usher provided one, arranged his seat, and served a pot
 *   of tea alongside a glowing incense coil. Before long, the curtains rose. The opening acts,
 *   however, were entirely unremarkable.
 *
 * Staging: Pincai dressing and setting out; the jammed street of playhouses; the playbills and the drums;
 *   inside the packed Sanle Garden, seated by the stage door as the curtain rises.
 */
export default defineStory({
  title: { en: 'To the playhouse street', zh: '戏园' },
  description: {
    en: 'Next morning Pincai goes alone, Si’er carrying the cash, to the street of five playhouses, jammed with carts. The Lianjin troupe is away on a private engagement, so the drums draw him to the Sanle Garden, where an usher finds him a seat by the stage door with a cushion and tea.',
    zh: '次日聘才带四儿独自去听戏。戏园一条街五个园子，车马挤满。联锦班今日传差，他循着锣鼓进了联珠班的三乐园，看座儿的引他在上场门边坐下，铺垫送茶。',
  },
  shots: [
    {
      start: 0, end: 8,
      title: { en: 'Setting out alone', zh: '独自步行出门' },
      quote: '叫四儿带了钱，换了衣裳……独自步行出门',
      caption: { en: 'Pincai dresses, has Si’er bring cash, and sets off on foot without Yuanmao.', zh: '聘才换了衣裳，叫四儿带钱，独自步行出门。' },
    },
    {
      start: 8, end: 17,
      title: { en: 'Five playhouses', zh: '共有五个园子' },
      quote: '这条街共有五个园子，一路车马挤满',
      caption: { en: 'The playhouse street: five theatres, carts and horses jammed end to end.', zh: '一条街五个园子，车马挤满，甚是难走。' },
    },
    {
      start: 17, end: 26,
      title: { en: 'Drums at the Sanle Garden', zh: '三乐园' },
      quote: '耳边听得一阵锣鼓响……见一个戏园写着三乐园',
      caption: { en: 'The Lianjin troupe is away; drums draw him to the Sanle Garden, the Lianzhu troupe’s house.', zh: '联锦班今日传差；一阵锣鼓把他引到联珠班的三乐园。' },
    },
    {
      start: 26, end: 36,
      title: { en: 'A seat by the stage door', zh: '上场门' },
      quote: '引聘才到了上场门，靠墙一张桌子边',
      caption: { en: 'Galleries and pit packed; an usher seats him by the stage door with a cushion, tea and incense.', zh: '楼上楼下坐满；看座儿的引他到上场门边，铺垫送茶。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4, zh: '次日，聘才记着叶茂林的话，吃了早饭想去听戏，叫四儿带了钱，换了衣裳。', en: 'Next morning, remembering Ye’s talk, Pincai had Si’er bring cash and changed his clothes.' },
    { start: 4, end: 7.6, zh: '因元茂在书房读书，不好约他，独自步行出门。', en: 'Yuanmao was at his books, so he went alone on foot.' },
    { start: 8.4, end: 12.6, zh: '不多路就到了戏园地方。这条街共有五个园子，', en: 'The playhouse district was close by: one street, five theatres,' },
    { start: 12.6, end: 16.6, zh: '一路车马挤满，甚是难走。', en: 'so jammed with carts and horses one could hardly pass.' },
    { start: 17.4, end: 21.6, zh: '遍看联锦班的报子，今日没有戏，遇着传差。', en: 'The Lianjin troupe’s bills said no show today—they were called to a private engagement.' },
    { start: 21.6, end: 25.6, zh: '耳边听得一阵锣鼓响，见一个戏园写着三乐园，是联珠班。', en: 'A burst of gongs and drums led him to the Sanle Garden, home of the Lianzhu troupe.' },
    { start: 26.4, end: 31, zh: '楼上楼下及中间池子里，人都坐满了，看座儿的引聘才到了上场门。', en: 'Galleries and pit were full; an usher led him to a table by the stage door.' },
    { start: 31, end: 35.6, zh: '拿了个垫子与他铺了，送上茶壶、香火。不多一会开了戏。', en: 'He laid a cushion for him and brought tea and incense. Soon the play began.' },
  ],
});
