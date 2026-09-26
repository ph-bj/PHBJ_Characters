import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 30.
 *
 * 原文：秋水芙蓉王桂保 桂保即兰保之弟，字蕊香，年十五岁，与兄同部。似兰馨，如花解语。明眸善睐，
 *   皓齿流芳。嬉戏自出天真，娇憨皆生风趣。能翰墨，工牙拍，喜行令诸局戏。善解人意，虽寂寥寡欢
 *   者，见之亦为畅满。意态姿媚，而自为范围。其演《乔醋》一出，香亸红酣，真令潘骑省心醉欲死
 *   矣。又演《相约》、《讨钗》、《拷艳》诸小出，如娇鸟弄晴，横波修熏，观者堵立数重，使层楼无
 *   坐地。时人评论袁、苏如霓裳羽衣，此则紫云回雪，其趣不同，其妙一也。为之诗曰。
 *
 * Translation: Wang Guibao: Lotus in the Autumn Waters. Guibao is the younger brother of Lanbao; his
 *   courtesy name is Ruixiang, and he is fifteen years of age, belonging to the same troupe as
 *   his brother. He exudes the fragrance of an orchid and is like a flower that understands
 *   human speech. His bright eyes are adept at casting enchanting glances; his gleaming teeth
 *   breathe out fragrance. His playfulness springs from natural innocence, and his coy naivety
 *   generates endless charm. He is skilled with brush and ink, proficient with the ivory
 *   clappers, and delights in playing drinking games and various board games. He is deeply
 *   empathetic to the feelings of others; even the lonely and melancholic find their hearts
 *   fully opened upon seeing him. His demeanor and posture are alluring, yet he sets his own
 *   boundaries. When he performs the scene "Feigning Jealousy," his fragrant sweat and flushed
 *   cheeks are truly enough to make Pan An die of infatuation. When he performs small scenes
 *   like "The Rendezvous," "Demanding the Hairpin," and "Interrogating the Beauty," he is like
 *   a delicate bird teasing the clear sky, his sidelong glances deeply captivating. Spectators
 *   stand packed several layers deep, leaving no room even to sit in the towering galleries.
 *   Contemporaries comment that while Yuan and Su are like the "Nishang" dance, he is Ziyun the
 *   singer and the whirling snow—their charm is different, but their wonder is one and the
 *   same. Thus, I composed for him this poem:
 *
 * Staged from album beats (cinema/beats/album.ts): Wang Guibao’s emblem page, his portrait with ivory clappers, and his plays on stage.
 */
export default defineStory({
  title: { en: 'Wang Guibao, lotus in autumn waters', zh: '秋水芙蓉王桂保' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. The seventh entry: Wang Guibao, Lanbao’s playful younger brother.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。第七题：王桂保，兰保之弟，娇憨可喜。',
  },
  shots: [
    {
      start: 0, end: 10,
      title: { en: 'Lotus in the autumn waters', zh: '秋水芙蓉' },
      quote: '秋水芙蓉王桂保……与兄同部。',
      caption: { en: 'The seventh entry: Wang Guibao, “Lotus in the Autumn Waters,” Lanbao’s younger brother, fifteen.', zh: '第七题：秋水芙蓉王桂保，兰保之弟，年十五。' },
    },
    {
      start: 10, end: 22,
      title: { en: 'A flower that understands speech', zh: '如花解语' },
      quote: '似兰馨，如花解语……能翰墨，工牙拍',
      caption: { en: 'Fragrant as an orchid, a flower that understands speech; playful, innocent, deft with brush and ivory clappers.', zh: '似兰馨，如花解语；嬉戏天真，能翰墨，工牙拍。' },
    },
    {
      start: 22, end: 36,
      title: { en: '“Feigning Jealousy”', zh: '《乔醋》' },
      quote: '其演《乔醋》一出……观者堵立数重',
      caption: { en: 'In Feigning Jealousy and The Rendezvous he is a bird teasing the clear sky; crowds stand several deep to watch.', zh: '《乔醋》《相约》《讨钗》《拷艳》，如娇鸟弄晴，观者堵立数重。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4.8, zh: '秋水芙蓉王桂保', en: 'Wang Guibao: Lotus in the Autumn Waters.' },
    { start: 4.8, end: 9.6, zh: '桂保即兰保之弟，字蕊香，年十五岁，与兄同部。', en: 'Lanbao’s younger brother, courtesy name Ruixiang, fifteen, in the same troupe.' },
    { start: 10.4, end: 14, zh: '似兰馨，如花解语。明眸善睐，皓齿流芳。', en: 'Fragrant as an orchid, like a flower that understands speech; bright eyes and gleaming teeth.' },
    { start: 14, end: 18, zh: '嬉戏自出天真，娇憨皆生风趣。能翰墨，工牙拍，', en: 'Playful and innocent, full of coy charm; skilled with brush and ink and the ivory clappers,' },
    { start: 18, end: 21.6, zh: '善解人意，虽寂寥寡欢者，见之亦为畅满。', en: 'so understanding that even the lonely are cheered at the sight of him.' },
    { start: 22.4, end: 27, zh: '其演《乔醋》一出，香亸红酣，真令潘骑省心醉欲死矣。', en: 'In “Feigning Jealousy,” his flushed charm would make Pan An die of infatuation.' },
    { start: 27, end: 31.6, zh: '又演《相约》、《讨钗》、《拷艳》诸小出，如娇鸟弄晴，', en: 'In The Rendezvous, Demanding the Hairpin and Interrogating the Beauty, he is a bird teasing the clear sky;' },
    { start: 31.6, end: 35.6, zh: '观者堵立数重，使层楼无坐地。', en: 'spectators stand several deep, leaving no seat in the galleries.' },
  ],
});
