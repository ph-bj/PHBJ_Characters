import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 20. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：我是没有念过书，不配同这些老先生们往来，所以这好几年不走动了。闻得他家玉哥儿很聪明，人也生得
 *   好，年纪也有十六七岁了，不知娶过媳妇儿没有？」聘才一一回答了，又与贵大爷寒喧一番。聘才已知富
 *   三是个热心肠，多情多义的人；那个贵大爷却是个谨慎小心，安分守己的一路。当下三人，倒闲谈了好一
 *   会。蓉官又到对面楼上去了，聘才望着他，又去与那黑脸大汉讲话。
 *
 * Translation: "Lacking a scholar's discipline, I am unfit to mingle with such venerable elders, so I have
 *   let those ties fade over the years. I hear the Mei family's young Master Yu is exceedingly
 *   bright and strikingly handsome, perhaps sixteen or seventeen now. Has he taken a bride?"
 *   Pincai answered the inquiries gracefully, engaging Master Gui in polite conversation. He
 *   quickly discerned the nature of his companions: Fu the Third was a man of fiery generosity
 *   and deep sentiment, while Master Gui was cautious, proper, and anchored in convention. The
 *   three men conversed effortlessly. Meanwhile, Rongguan had drifted back to the opposite
 *   gallery to converse with the dark-faced behemoth.
 *
 * Staging: Fu at the table waving off his lack of learning; a glimpse of Ziyu at his desk; the two men side
 *   by side as Pincai sees them; Rongguan crossing back to the big box.
 */
export default defineStory({
  title: { en: 'Warm heart, careful heart', zh: '热心肠' },
  description: {
    en: 'Fu, who never studied, has let the old ties lapse; he asks after Lord Mei’s son, handsome and clever, sixteen or seventeen—is he married yet? Pincai reads the two men: Fu warm and generous, Gui cautious and proper. Rongguan drifts back up to the dark-faced man in the gallery.',
    zh: '富三说自己没念过书，不配同老先生往来，几年不走动了；问起梅家玉哥儿聪明俊秀，可曾娶亲。聘才看出富三热心肠，贵大爷谨慎小心。蓉官又到对面楼上找那黑脸大汉去了。',
  },
  shots: [
    {
      start: 0, end: 10,
      title: { en: 'Unfit for old scholars', zh: '没有念过书' },
      quote: '我是没有念过书，不配同这些老先生们往来',
      caption: { en: 'Fu never studied, he says, and isn’t fit company for learned old gentlemen.', zh: '富三说自己没念过书，不配同老先生往来。' },
    },
    {
      start: 10, end: 20,
      title: { en: 'Young Master Yu', zh: '玉哥儿' },
      quote: '闻得他家玉哥儿很聪明，人也生得好',
      caption: { en: 'He has heard Lord Mei’s son is clever and handsome, sixteen or seventeen—married yet?', zh: '听说梅家玉哥儿聪明俊秀，十六七岁，不知娶过媳妇没有。' },
    },
    {
      start: 20, end: 28,
      title: { en: 'Two natures', zh: '热心肠 · 谨慎小心' },
      quote: '富三是个热心肠……贵大爷却是个谨慎小心',
      caption: { en: 'Pincai reads them: Fu warm-hearted and generous; Gui careful and proper.', zh: '聘才看出：富三热心肠多情义；贵大爷谨慎小心、安分守己。' },
    },
    {
      start: 28, end: 36,
      title: { en: 'Back to the big box', zh: '又到对面楼上' },
      quote: '蓉官又到对面楼上去了',
      caption: { en: 'Rongguan drifts back to the gallery to talk with the dark-faced man.', zh: '蓉官又到对面楼上，与那黑脸大汉讲话。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 9.6, zh: '「我是没有念过书，不配同这些老先生们往来，所以这好几年不走动了。」', en: '“I never studied—not fit company for those learned old gentlemen—so I haven’t called in years.”' },
    { start: 10.4, end: 19.6, zh: '「闻得他家玉哥儿很聪明，人也生得好，年纪也有十六七岁了，不知娶过媳妇儿没有？」', en: '“I hear his son, young Master Yu, is clever and handsome, sixteen or seventeen—has he married?”' },
    { start: 20.4, end: 27.6, zh: '聘才已知富三是个热心肠，多情多义的人；那个贵大爷却是个谨慎小心，安分守己的一路。', en: 'Pincai saw that Fu was warm-hearted and generous, while Master Gui was careful and proper.' },
    { start: 28.4, end: 35.6, zh: '蓉官又到对面楼上去了，聘才望着他，又去与那黑脸大汉讲话。', en: 'Rongguan went back up to the opposite gallery; Pincai watched him talk with the dark-faced man.' },
  ],
});
