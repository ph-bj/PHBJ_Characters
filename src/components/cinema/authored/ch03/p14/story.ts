import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 14. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：蓉官没有说完，把那胖子笑得眼皮裹着眼睛，没了缝，把蓉官嘴上一拧，骂道：「好个贫嘴的小么儿。这
 *   是偶然的事情，那里是常打架吗。」聘才听得这话，说得尖酸有趣。一面细看他的相貌，也十分可爱，年
 *   纪不过十五六岁，一个瓜子脸儿，秀眉横黛，美目流波，两腮露着酒凹，耳上穿着一只小金环，衣裳华美
 *   ，香气袭人。这蓉官瞅着那胖子说道：「三老爷你好冤，人说你常在全福班听戏，花了三千吊钱，替小福
 *   出师。你瞧瞧小福在对面楼上，他竟不过来呢。」那胖子道：「那里来这些话，小福我才见过一两面，谁
 *   说替他出师。你尽造谣言。」蓉官道：「倒不是我造谣言，有人说的。」蓉官又对那人道：「大老爷是不
 *   爱听昆腔的，爱听高腔杂耍儿。」那人道：「不是我不爱听，我实在不懂，不晓得唱些什么。高腔倒有滋
 *   味儿，不然倒是梆子腔，还听得清楚。」聘才一面听着，一面看戏。
 *
 * Translation: Before Rongguan could finish, the stout man erupted into laughter, his eyes crinkling until
 *   they vanished into mere slits. He affectionately pinched Rongguan's lips, scolding gently,
 *   "You sharp-tongued little imp. That was but a rare occurrence—it is not as if they brawl
 *   every day." Pincai, listening intently, found the banter delightfully sharp. He took the
 *   opportunity to study Rongguan's features more closely: the youth was exquisitely
 *   captivating, no more than fifteen or sixteen, possessing a flawless melon-seed face. His
 *   elegantly swept brows were dark as painted ink, his luminous eyes rippled like autumn
 *   waters, and deep dimples graced his cheeks. A tiny gold ring glinted in one ear. Clad in
 *   resplendent silks, he emanated a heady, intoxicating fragrance. Rongguan cast a knowing
 *   sidelong glance at the stout man, teasing, "Third Master, you play the victim too well. Word
 *   has it you frequent the Quanfu Troupe, squandering three thousand strings of cash to buy out
 *   Xiaofu's indenture. Look there—Xiaofu sits in the opposite gallery, yet he does not even
 *   deign to cross the room to greet you." The stout man protested, "What absolute drivel! I
 *   have seen Xiaofu barely twice. Who claims I bought his contract? You are nothing but a
 *   peddler of rumors." Rongguan smiled slyly, "I merely repeat the whispers of others." Turning
 *   his attention to the lean man, Rongguan noted, "The Great Lord has no ear for Kunqu, I see.
 *   He prefers the high-pitched arias and variety acts." The lean man nodded, "It is not a lack
 *   of fondness, but a lack of comprehension. I simply cannot grasp the lyrics. The high-pitched
 *   operas possess a certain raw flavor, and the clapper-operas, at the very least, sing a tale
 *   one can follow clearly." Pincai absorbed their exchange while keeping one eye on the stage.
 *
 * Staging: the pinch; a slow close study of Rongguan’s face; Xiaofu seen across in the far gallery; the
 *   lean man and the high tunes, with a clapper-opera act on stage.
 */
export default defineStory({
  title: { en: 'A melon-seed face', zh: '瓜子脸儿' },
  description: {
    en: 'The fat man laughs till his eyes vanish and pinches Rongguan’s lips. Pincai studies the boy: fifteen or sixteen, a melon-seed face, dimples, a little gold ring in one ear. Rongguan teases the fat man about Xiaofu across the hall, and the lean man confesses he prefers the high tunes to Kunqu.',
    zh: '胖子笑得眼没了缝，把蓉官嘴上一拧。聘才细看蓉官：十五六岁，瓜子脸，两腮酒凹，耳上一只小金环。蓉官拿对面楼上的小福取笑胖子；瘦的说他不懂昆腔，爱听高腔。',
  },
  shots: [
    {
      start: 0, end: 8,
      title: { en: 'A pinch on the lips', zh: '把蓉官嘴上一拧' },
      quote: '把那胖子笑得眼皮裹着眼睛，没了缝，把蓉官嘴上一拧',
      caption: { en: 'The fat man laughs till his eyes vanish and pinches Rongguan’s lips: “sharp-tongued imp!”', zh: '胖子笑得眼没了缝，拧蓉官的嘴：「贫嘴的小么儿。」' },
    },
    {
      start: 8, end: 18,
      title: { en: 'Rongguan', zh: '十五六岁' },
      quote: '年纪不过十五六岁，一个瓜子脸儿，秀眉横黛，美目流波',
      caption: { en: 'Fifteen or sixteen, a melon-seed face, dimpled cheeks, a little gold ring in one ear.', zh: '十五六岁，瓜子脸儿，两腮酒凹，耳上穿着小金环。' },
    },
    {
      start: 18, end: 28,
      title: { en: 'Xiaofu across the hall', zh: '小福在对面楼上' },
      quote: '你瞧瞧小福在对面楼上，他竟不过来呢。',
      caption: { en: 'Rongguan teases: three thousand strings to buy out Xiaofu—and there he sits across the hall, not coming over.', zh: '蓉官取笑：花三千吊替小福出师，小福在对面楼上却不过来。' },
    },
    {
      start: 28, end: 36,
      title: { en: 'High tunes', zh: '高腔' },
      quote: '高腔倒有滋味儿，不然倒是梆子腔，还听得清楚。',
      caption: { en: 'The lean man can’t follow Kunqu; the high tunes and clapper opera he understands.', zh: '瘦的听不懂昆腔，倒爱高腔、梆子腔。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 7.6, zh: '把那胖子笑得眼皮裹着眼睛，没了缝，把蓉官嘴上一拧，骂道：「好个贫嘴的小么儿。」', en: 'The fat man laughed till his eyes vanished, pinched Rongguan’s lips and said, “You sharp-tongued little imp.”' },
    { start: 8.4, end: 13, zh: '聘才细看他的相貌，年纪不过十五六岁，一个瓜子脸儿，秀眉横黛，美目流波，', en: 'Pincai studied him: fifteen or sixteen, a melon-seed face, dark brows, eyes like rippling water,' },
    { start: 13, end: 17.6, zh: '两腮露着酒凹，耳上穿着一只小金环，衣裳华美，香气袭人。', en: 'dimpled cheeks, a little gold ring in one ear, fine clothes and a heady fragrance.' },
    { start: 18.4, end: 23, zh: '蓉官道：「人说你常在全福班听戏，花了三千吊钱，替小福出师。', en: 'Rongguan: “They say you spent three thousand strings buying out Xiaofu’s indenture.' },
    { start: 23, end: 27.6, zh: '你瞧瞧小福在对面楼上，他竟不过来呢。」胖子道：「你尽造谣言。」', en: 'Look, there’s Xiaofu across the hall, and he won’t even come over.” “Pure rumour!”' },
    { start: 28.4, end: 35.6, zh: '那人道：「我实在不懂昆腔，高腔倒有滋味儿，梆子腔还听得清楚。」', en: 'The lean man: “Kunqu I just can’t follow. The high tunes have flavour, and clapper opera I can understand.”' },
  ],
});
