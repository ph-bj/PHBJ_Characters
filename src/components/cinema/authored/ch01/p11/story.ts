import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 11. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：见俗优滥妓，油头粉面，无耻之极，则可恨。你想，凡目中所见的，去了这些，还有那一种人？」子
 *   玉正猜不着他所说什么，只得说道：「既然娱悦不在声色，其唯二三知己朝夕素心乎？」仲清大笑。
 *   南湘道：「岂有此理！朋友岂可云娱耳悦目的？庾香设心不良。」说罢哈哈大笑。子玉被他们这一
 *   笑，笑得不好意思起来，脸已微红，便说道：「你们休要取笑。我是这个意思：挥麈清淡，乌衣美
 *   秀，难道不可娱耳，不可悦目？
 *
 * Translation: Suppose you encounter vulgar actors and indiscriminate prostitutes, with greased hair and
 *   powdered faces, utterly devoid of shame—such people are thoroughly hateful. Think about it:
 *   of all the figures that cross your vision, once you strip away these types, what kind of
 *   person remains?" Unable to guess his friend's true intent, Ziyu could only offer: "Since
 *   true pleasure is not to be found in superficial sounds and sights, does it not reside
 *   solely in the day-and-night companionship of two or three kindred spirits with pure
 *   hearts?" Zhongqing burst into loud laughter. Nanxiang retorted: "Absurd! How can one
 *   describe a friend as something that merely pleases the ear and delights the eye? Yuxiang,
 *   your heart harbors ill intentions." With that, he laughed uproariously. Disconcerted by
 *   their laughter, Ziyu felt a faint blush touch his cheeks and protested: "Cease your
 *   mockery. My meaning was this: engaged in pure conversation while waving a deer-tail whisk,
 *   admiring the graceful bearing of those in dark robes—does this not please the ear and
 *   delight the eye?
 *
 * Staging: the vulgar actor, Ziyu’s guess and the laughter, and Ziyu blushing as he explains.
 */
export default defineStory({
  title: { en: 'Friends as a pleasure?', zh: '二三知己' },
  description: {
    en: 'Last on Nanxiang’s list, vulgar actors; Ziyu guesses the pleasure must be friends, and his friends laugh until he blushes.',
    zh: '南湘末数俗优滥妓；子玉答以二三知己，二友大笑，子玉脸红。',
  },
  shots: [
    {
      start: 0, end: 10,
      title: { en: 'Vulgar actors: hateful', zh: '可恨' },
      quote: '见俗优滥妓，油头粉面，无耻之极，则可恨。',
      caption: { en: 'Vulgar actors with greased hair and powdered faces: hateful.', zh: '俗优滥妓，油头粉面：可恨。' },
    },
    {
      start: 10, end: 22,
      title: { en: 'Two or three kindred spirits', zh: '二三知己' },
      quote: '既然娱悦不在声色，其唯二三知己朝夕素心乎？',
      caption: { en: 'Ziyu guesses: the true pleasure must be two or three kindred friends. Zhongqing and Nanxiang burst out laughing.', zh: '子玉答以二三知己；仲清、南湘大笑。' },
    },
    {
      start: 22, end: 36,
      title: { en: 'A faint blush', zh: '脸已微红' },
      quote: '子玉被他们这一笑，笑得不好意思起来，脸已微红',
      caption: { en: 'Ziyu blushes and explains: pure talk with a whisk, graceful friends in dark robes—do these not please the eye?', zh: '子玉脸红，辩说挥麈清谈、乌衣美秀，岂不娱耳悦目。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 5, zh: '见俗优滥妓，油头粉面，无耻之极，则可恨。', en: 'Vulgar actors and prostitutes, greased hair and powdered faces, shameless—thoroughly hateful.' },
    { start: 5, end: 9.6, zh: '你想，凡目中所见的，去了这些，还有那一种人？', en: 'Strip away all these types: what kind of person remains?' },
    { start: 10.4, end: 15.6, zh: '子玉只得说道：「既然娱悦不在声色，其唯二三知己朝夕素心乎？」', en: 'Ziyu offered: “Since pleasure is not in sounds and sights, does it lie in two or three kindred spirits?”' },
    { start: 15.6, end: 21.6, zh: '仲清大笑。南湘道：「岂有此理！庾香设心不良。」说罢哈哈大笑。', en: 'Zhongqing burst out laughing. Nanxiang: “Absurd! Yuxiang, your heart harbors ill intentions!” He laughed uproariously.' },
    { start: 22.4, end: 28, zh: '子玉被他们这一笑，脸已微红，便说道：「你们休要取笑。', en: 'Ziyu felt a faint blush touch his cheeks. “Cease your mockery.' },
    { start: 28, end: 35.6, zh: '挥麈清淡，乌衣美秀，难道不可娱耳，不可悦目？」', en: 'Pure talk with a deer-tail whisk, the grace of those in dark robes—do these not please the ear and eye?”' },
  ],
});
