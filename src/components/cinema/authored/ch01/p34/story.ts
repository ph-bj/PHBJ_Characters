import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 34.
 *
 * 原文：别有人间傅粉郎，销金为饰玉为妆。 石麟天上原无价，应捧炉香待玉皇。 才啭歌喉赞不休，黄金
 *   争掷作缠头。 王郎偶驾羊车出，十里珠帘尽上钩。 子玉看了只是笑，不置一词。南湘问道：「你
 *   何以不加可否？」子玉道：「大凡论人，虽难免粉饰，也不可过于失实。若论此辈，真可惜了这副笔
 *   墨。
 *
 * Translation: There exists a different kind of powdered youth in the mortal realm; Melted gold forms his
 *   ornaments, and jade forms his adornment. The stone Qilin from the heavens is intrinsically
 *   priceless; He should be holding the incense burner, waiting upon the Jade Emperor. He has
 *   barely trilled his singing throat, yet praise flows without end; Gold is flung in showers
 *   for his singer's fee. When young lord Wang occasionally rides out in his goat-drawn cart,
 *   Ten miles of pearl curtains are rolled up all at once. Ziyu read it and merely smiled,
 *   offering not a single word. Nanxiang asked, "Why do you withhold your judgment?" Ziyu
 *   replied, "Generally speaking, when evaluating people, though some embellishment is
 *   unavoidable, one should not stray too far from the truth. As for evaluating this lot, it is
 *   truly a waste of your brush and ink.
 *
 * Staged from album beats (cinema/beats/album.ts): Chunxi’s poem on a scroll, then Ziyu smiling and dismissing the album in the study.
 */
export default defineStory({
  title: { en: 'A poem for Chunxi, and Ziyu’s verdict', zh: '赠春喜诗，子玉之评' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. The last poem, for Chunxi, and Ziyu’s verdict on the whole album.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。末首赠春喜之诗，及子玉对《花选》的评语。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: 'A poem for Chunxi', zh: '赠春喜诗' },
      quote: '别有人间傅粉郎……十里珠帘尽上钩。',
      caption: { en: 'The last two quatrains, for Chunxi, are brushed onto a scroll.', zh: '赠春喜的两首绝句，写上画轴。' },
    },
    {
      start: 18, end: 36,
      title: { en: '“A waste of brush and ink”', zh: '可惜了这副笔墨' },
      quote: '子玉看了只是笑，不置一词……真可惜了这副笔墨。',
      caption: { en: 'Ziyu only smiles. When Nanxiang presses him, he says such praise strays from the truth: a waste of brush and ink.', zh: '子玉只是笑而不语；南湘追问，子玉说此等品评过于失实，可惜了这副笔墨。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 2.4, zh: '别有人间傅粉郎，', en: 'There exists a different kind of powdered youth in the mortal realm;' },
    { start: 2.4, end: 4.4, zh: '销金为饰玉为妆。', en: 'Melted gold forms his ornaments, and jade his adornment.' },
    { start: 4.4, end: 6.4, zh: '石麟天上原无价，', en: 'The stone qilin from the heavens is intrinsically priceless;' },
    { start: 6.4, end: 8.4, zh: '应捧炉香待玉皇。', en: 'He should be holding the incense burner, waiting upon the Jade Emperor.' },
    { start: 8.4, end: 10.4, zh: '才啭歌喉赞不休，', en: 'He has barely trilled a note, yet praise flows without end;' },
    { start: 10.4, end: 12.4, zh: '黄金争掷作缠头。', en: 'Gold is flung in showers for his singer’s fee.' },
    { start: 12.4, end: 14.4, zh: '王郎偶驾羊车出，', en: 'When young lord Wang rides out in his goat-drawn cart,' },
    { start: 14.4, end: 16.4, zh: '十里珠帘尽上钩。', en: 'Ten miles of pearl curtains are rolled up all at once.' },
    { start: 18.4, end: 22.4, zh: '子玉看了只是笑，不置一词。', en: 'Ziyu read it and merely smiled, offering not a single word.' },
    { start: 22.4, end: 26, zh: '南湘问道：「你何以不加可否？」', en: 'Nanxiang asked, “Why do you withhold your judgment?”' },
    { start: 26, end: 31, zh: '子玉道：「大凡论人，虽难免粉饰，也不可过于失实。', en: 'Ziyu replied, “When judging people, some embellishment is unavoidable, but one should not stray too far from the truth.' },
    { start: 31, end: 35.6, zh: '若论此辈，真可惜了这副笔墨。', en: 'As for this lot, it is truly a waste of your brush and ink.”' },
  ],
});
