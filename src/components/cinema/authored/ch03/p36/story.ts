import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 36. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：富三与聘才、贵大都在门口看了一会进来。蓉官吐了吐舌，说道：「好不怕人！这才算个标子。」富三笑
 *   道：「这种标也标得无趣，但不知为什么事闹起来？」蓉官道：「这位奚大老爷的下作脾气，是讲不出来
 *   的。」于是富三与聘才、贵大豁了一会拳，此时天气尚短，他们也要进城。贵大爷先抢会帐，聘才又要作
 *   东，富三爷道：「都不要抢，这一点小东，让我富老三做了罢。明日就吃你，后日再吃他。」大家只得让
 *   富三爷会了帐。富三、贵大得了。聘才一番恭惟，心里着实喜欢。聘才又问了两人的住处，说明日要来请
 *   安。富三道：「我住在东城金牌楼路西，茶叶铺对门。」指着贵大爷道：「他就在茶叶铺间壁，门上都是
 *   户部封条。明日如果来，我们就在家里等侯。」
 *
 * Translation: Fu the Third, Pincai, and Master Gui watched the spectacle from the doorway for a long while
 *   before returning to their seats. Rongguan stuck out his tongue playfully. "Terrifying! Now
 *   that is what I call a proper spectacle." Fu the Third laughed, "Such crude spectacles hold
 *   no true interest. But what exactly ignited the quarrel, I wonder?" Rongguan sighed, "Lord
 *   Xi's vulgar, venomous temper defies description." The men dismissed the drama, indulging in
 *   a few rounds of finger-guessing games. The days were still short at that season, and they
 *   had to get back inside the walls. Master Gui moved to settle the bill, but Pincai insisted
 *   on hosting. Fu the Third waved them both down. "Let there be no competition. Let old Fu the
 *   Third handle this trivial sum. Tomorrow, you shall host; the day after, he shall. No
 *   arguments." Deferring to his generosity, Fu paid the tab. Fu the Third and Master Gui,
 *   having received this round of flattery from Pincai, were thoroughly pleased. Asking for
 *   their addresses, he promised to call upon them the following day. Fu the Third instructed,
 *   "I reside in the East City, on the west side of the Golden Archway, directly across from the
 *   tea shop." He pointed a thumb at Master Gui, "He lives next door to the tea shop, his gates
 *   sealed with the official edicts of the Ministry of Revenue. Should you visit tomorrow, we
 *   will be waiting."
 *
 * Staging: the three coming back from the door; finger-guessing; Fu paying; the lane by the Golden Archway
 *   with the tea shop and two gates, as Fu describes it.
 */
export default defineStory({
  title: { en: 'East City, the Golden Archway', zh: '金牌楼' },
  description: {
    en: 'Back from the doorway, Rongguan sticks out his tongue: now that was a scene. They play finger-guessing a while; the days are short and the others must be inside the walls. Fu insists on paying and gives his address: East City, west side of the Golden Archway, opposite the tea shop, with Gui next door behind the Ministry’s seals.',
    zh: '三人在门口看了一会进来。蓉官吐舌：好不怕人。豁了一会拳，天气尚短，他们要进城。富三抢着会了帐，说住在东城金牌楼路西，茶叶铺对门；贵大爷就在茶叶铺间壁，门上都是户部封条。',
  },
  shots: [
    {
      start: 0, end: 9,
      title: { en: 'Quite a scene', zh: '好不怕人' },
      quote: '蓉官吐了吐舌，说道：「好不怕人！这才算个标子。」',
      caption: { en: 'Back from the doorway, Rongguan sticks out his tongue: frightening!', zh: '蓉官吐了吐舌：好不怕人！' },
    },
    {
      start: 9, end: 18,
      title: { en: 'Finger-guessing', zh: '豁了一会拳' },
      quote: '于是富三与聘才、贵大豁了一会拳',
      caption: { en: 'They play finger-guessing for a while; the days are short, and they must be back inside the walls.', zh: '豁了一会拳；天气尚短，他们要进城。' },
    },
    {
      start: 18, end: 27,
      title: { en: 'Fu pays', zh: '让我富老三做了罢' },
      quote: '这一点小东，让我富老三做了罢。明日就吃你，后日再吃他。',
      caption: { en: 'Gui and Pincai reach for the bill; Fu waves them off: today he pays—tomorrow Pincai, then Gui.', zh: '富三：这点小东让我做了罢，明日吃你，后日吃他。' },
    },
    {
      start: 27, end: 36,
      title: { en: 'The Golden Archway', zh: '金牌楼路西' },
      quote: '我住在东城金牌楼路西，茶叶铺对门。',
      caption: { en: 'Fu lives by the Golden Archway, opposite the tea shop; Gui next door, his gate pasted with Ministry seals.', zh: '富三住东城金牌楼路西，茶叶铺对门；贵大爷在隔壁，门上都是户部封条。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4.6, zh: '富三与聘才、贵大都在门口看了一会进来。蓉官吐了吐舌，说道：「好不怕人！」', en: 'Fu, Pincai and Gui watched from the doorway, then came back. Rongguan stuck out his tongue: “Terrifying!”' },
    { start: 4.6, end: 8.6, zh: '富三笑道：「这种标也标得无趣，但不知为什么事闹起来？」', en: 'Fu laughed: “A dull sort of show. What was it all about?”' },
    { start: 9.4, end: 17.6, zh: '于是富三与聘才、贵大豁了一会拳，此时天气尚短，他们也要进城。', en: 'They played finger-guessing for a while; the days were short, and the others had to get back inside the city.' },
    { start: 18.4, end: 22.6, zh: '贵大爷先抢会帐，聘才又要作东，', en: 'Gui reached for the bill first, and Pincai wanted to host,' },
    { start: 22.6, end: 26.6, zh: '富三爷道：「都不要抢，这一点小东，让我富老三做了罢。明日就吃你，后日再吃他。」', en: 'but Fu said, “Don’t fight over it—let old Fu pay this little bill. Tomorrow you, the day after him.”' },
    { start: 27.4, end: 31.6, zh: '富三道：「我住在东城金牌楼路西，茶叶铺对门。」', en: 'Fu said, “I live in the East City, on the west side of the Golden Archway, opposite the tea shop.”' },
    { start: 31.6, end: 35.6, zh: '指着贵大爷道：「他就在茶叶铺间壁，门上都是户部封条。」', en: 'Pointing to Gui: “He’s next to the tea shop—his gate is covered in Ministry of Revenue seals.”' },
  ],
});
