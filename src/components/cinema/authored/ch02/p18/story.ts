import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 18. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：次早聘才带了他的小子四儿，将王文辉的信送去。适文辉一早出门未回，王恂也不在家，只得请颜仲
 *   清会了。聘才见仲清一表非凡，叙了一番寒温，知是文辉之婿，又是士燮的内侄，免不得恭惟一番。
 *   正要告辞，只见一个跟班捧着一包衣服进来说：「老爷回来了。」聘才只得坐下。停了一会，听得外
 *   面有说话的声音，像是定班子唱戏的话。然后靴声秃秃，见一个大方脸，花白长须，三品服饰，仪容
 *   甚伟，犹裘耀目，粉底皂靴，走将进来。聘才知是主人，连忙上前作揖拜见，文辉双手拉住道：「岂
 *   敢，岂敢！作什么行这样大礼。那一天你们到京，我就知道了，可是在舍亲梅铁庵处住的？」聘才答
 *   应了「是」。
 *
 * Translation: The following morning, Pincai took his young servant, Si'er, to deliver Wang Wenhui's
 *   letter. As it happened, Wenhui had departed early and had not yet returned, and Wang Xun
 *   was likewise away from home, leaving Pincai no option but to request an audience with Yan
 *   Zhongqing. Upon meeting Zhongqing and observing his striking demeanor, Pincai engaged him
 *   in polite pleasantries. Learning that Zhongqing was Wenhui's son-in-law as well as Shixie's
 *   nephew by marriage, Pincai was generous with his flattery. He was just preparing to take
 *   his leave when a servant entered, bearing a bundle of clothes, and announced, "The master
 *   has returned." Pincai felt obliged to remain seated. After a brief pause, the sound of
 *   voices drifted from the courtyard, seemingly discussing arrangements for a theatrical
 *   troupe. This was followed by the heavy, rhythmic thud of boots, and a figure strode into
 *   the room. It was a man with a broad, square face and a long, pepper-and-salt beard, clad in
 *   the resplendent attire of a third-rank official. His imposing stature, brilliant furs, and
 *   white-soled black boots cut an awe-inspiring figure. Recognizing him as the master of the
 *   house, Pincai hastily stepped forward to bow deeply in greeting. Wenhui caught him by both
 *   hands, insisting, "Please, please! There is no need for such excessive formality. I was
 *   informed the very day you arrived in the capital. You are staying with my relative, Mei
 *   Tie'an, are you not?" Pincai respectfully assented.
 *
 * Staging: Pincai at the Wang gate, talking with Zhongqing, a servant with the master’s clothes, and Wenhui striding in.
 */
export default defineStory({
  title: { en: 'The master returns', zh: '老爷回来了' },
  description: {
    en: 'Pincai brings his letter to Wang Wenhui’s house, flatters Zhongqing while he waits, and bows low when the imposing Commissioner strides in.',
    zh: '聘才送信到王宅，先会仲清，恭惟一番；文辉大步进来，聘才连忙拜见。',
  },
  shots: [
    {
      start: 0, end: 10,
      title: { en: 'At the Wang gate', zh: '送信到王宅' },
      quote: '次早聘才带了他的小子四儿，将王文辉的信送去。',
      caption: { en: 'Next morning Pincai and his boy Si’er bring the letter to Wang Wenhui’s house.', zh: '次早聘才带小子四儿，送信到王宅。' },
    },
    {
      start: 10, end: 20,
      title: { en: 'Flattering Zhongqing', zh: '恭惟一番' },
      quote: '聘才见仲清一表非凡……免不得恭惟一番。',
      caption: { en: 'Wenhui and Wang Xun are out; Pincai meets Zhongqing and flatters him freely.', zh: '文辉、王恂不在；聘才会了仲清，恭惟一番。' },
    },
    {
      start: 20, end: 28,
      title: { en: '“The master is back”', zh: '老爷回来了' },
      quote: '只见一个跟班捧着一包衣服进来说：「老爷回来了。」',
      caption: { en: 'A servant enters with a bundle of clothes: the master has returned.', zh: '跟班捧着衣服进来：「老爷回来了。」' },
    },
    {
      start: 28, end: 36,
      title: { en: 'A third-rank official', zh: '三品服饰' },
      quote: '见一个大方脸，花白长须，三品服饰，仪容甚伟',
      caption: { en: 'Boots thud; in strides a square-faced man with a grizzled beard in third-rank robes. Pincai bows deeply.', zh: '靴声秃秃，大方脸、花白长须、三品服饰的文辉走进来；聘才连忙作揖拜见。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 9.6, zh: '次早聘才带了他的小子四儿，将王文辉的信送去。', en: 'The next morning, Pincai took his young servant Si’er to deliver Wang Wenhui’s letter.' },
    { start: 10.4, end: 15, zh: '适文辉一早出门未回，王恂也不在家，只得请颜仲清会了。', en: 'Wenhui had gone out and Wang Xun was away, so Pincai met Yan Zhongqing.' },
    { start: 15, end: 19.6, zh: '聘才见仲清一表非凡，知是文辉之婿，免不得恭惟一番。', en: 'Seeing his fine bearing and learning he was Wenhui’s son-in-law, Pincai flattered him generously.' },
    { start: 20.4, end: 27.6, zh: '正要告辞，只见一个跟班捧着一包衣服进来说：「老爷回来了。」', en: 'As he rose to leave, a servant entered with a bundle of clothes: “The master has returned.”' },
    { start: 28.4, end: 32, zh: '靴声秃秃，见一个大方脸，花白长须，三品服饰，仪容甚伟，走将进来。', en: 'Boots thudded; in strode a square-faced man, grizzled beard, in the robes of the third rank.' },
    { start: 32, end: 35.6, zh: '聘才连忙上前作揖拜见，文辉双手拉住道：「岂敢，岂敢！」', en: 'Pincai hurried forward to bow; Wenhui caught his hands: “Please, please!”' },
  ],
});
