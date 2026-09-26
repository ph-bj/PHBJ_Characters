import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 27. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：是日来到王宅，适文辉请客，客将到了。王恂即同他到书房内来。仲清躲避不及，只得见了，同王恂
 *   陪着坐下。嗣徽先对仲清说道；今日天朗气清，所以愚兄弟正其衣冠，翩然而来奉看的。」王恂、仲
 *   清忍不住要笑。嗣徽又对王恂说道：「适值尊驾出门，不知去向，若不是「鸟倦飞而知还」，则虽引
 *   弓而射之，亦徒兴弋人之慕矣。」仲清正要回言，那嗣元道：
 *
 * Translation: On this particular day, they arrived at the Wang residence precisely as Wenhui was hosting
 *   a banquet, the guests on the verge of assembling. Wang Xun promptly ushered them into the
 *   study. Unable to avoid them, Zhongqing politely exchanged greetings and sat down beside
 *   Wang Xun to keep them company. Sihui initiated the conversation, addressing Zhongqing
 *   pompously, "Today the heavens are clear and the air is crisp, thus my brother and I have
 *   straightened our garments and drifted hither to pay our respects." Wang Xun and Zhongqing
 *   struggled to suppress their amusement. Sihui then turned to Wang Xun, "Just as your
 *   esteemed self had ventured out to parts unknown, had it not been that 'the weary bird knows
 *   to return,' then even if one drew a bow and shot an arrow at it, it would merely arouse the
 *   envy of the fowler." Zhongqing was on the verge of formulating a reply when Siyuan
 *   interjected:
 *
 * Staging: the four in the study, Sihui’s phrases stamped out, and the listeners holding back laughter.
 */
export default defineStory({
  title: { en: '“The weary bird knows to return”', zh: '鸟倦飞而知还' },
  description: {
    en: 'In the study Sihui greets them in stilted classical phrases, comparing Wang Xun’s return to a weary bird; Wang Xun and Zhongqing can barely keep straight faces.',
    zh: '书房里嗣徽满口文言：天朗气清、鸟倦飞而知还；王恂、仲清忍不住要笑。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'Cornered in the study', zh: '躲避不及' },
      quote: '仲清躲避不及，只得见了，同王恂陪着坐下。',
      caption: { en: 'Wenhui’s guests are due; Zhongqing cannot escape and sits down with them.', zh: '文辉请客，客将到了；仲清躲避不及，只得陪坐。' },
    },
    {
      start: 12, end: 26,
      title: { en: '“The heavens are clear”', zh: '天朗气清' },
      quote: '今日天朗气清，所以愚兄弟正其衣冠，翩然而来奉看的。',
      caption: { en: '“Today the heavens are clear and the air is crisp; thus we have straightened our garments and drifted hither.”', zh: '「今日天朗气清，所以愚兄弟正其衣冠，翩然而来。」' },
    },
    {
      start: 26, end: 36,
      title: { en: 'A weary bird', zh: '鸟倦飞而知还' },
      quote: '若不是「鸟倦飞而知还」，则虽引弓而射之，亦徒兴弋人之慕矣。',
      caption: { en: 'To Wang Xun: had the weary bird not known to return, even a bow and arrow would have been in vain.', zh: '对王恂说：若不是「鸟倦飞而知还」，虽引弓而射之，亦徒兴弋人之慕。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '是日来到王宅，适文辉请客，客将到了。王恂即同他到书房内来。', en: 'They arrived as Wenhui was hosting a banquet; Wang Xun ushered them into the study.' },
    { start: 6, end: 11.6, zh: '仲清躲避不及，只得见了，同王恂陪着坐下。', en: 'Unable to escape, Zhongqing greeted them and sat down with Wang Xun.' },
    { start: 12.4, end: 19, zh: '嗣徽先对仲清说道：「今日天朗气清，', en: 'Sihui addressed Zhongqing: “Today the heavens are clear and the air is crisp,' },
    { start: 19, end: 25.6, zh: '所以愚兄弟正其衣冠，翩然而来奉看的。」王恂、仲清忍不住要笑。', en: 'thus my brother and I straightened our garments and drifted hither.” The two struggled not to laugh.' },
    { start: 26.4, end: 31, zh: '「适值尊驾出门，若不是「鸟倦飞而知还」，', en: '“As your esteemed self was out, had not ‘the weary bird known to return,’' },
    { start: 31, end: 35.6, zh: '则虽引弓而射之，亦徒兴弋人之慕矣。」', en: 'then even drawing a bow to shoot it would only have aroused the fowler’s envy.”' },
  ],
});
