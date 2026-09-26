import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 24. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：富三见聘才人品活动，又系梅氏世谊，便道：「魏大哥，今日这戏没有听头，咱们找个地方喝一钟去罢？
 *   」聘才见富三是个慷慨爽快的人，便有心要拉拢他，说道：「今日幸会，但先要说明赏兄弟的脸作个东。
 *   」富三笑道：「使得。」就在靴革幼里拿出个靴页子来，取一张钱票，交与他跟班给看座儿的，连这位老
 *   爷的戏钱也在里头。聘才又再三谢了。于是带了蓉官，一同出来。
 *
 * Translation: Observing Pincai's elegant bearing and mindful of his connection to the Mei family, Fu the
 *   Third suggested, "Brother Wei, the opera has lost its flavor today. Shall we find a quiet
 *   place for a few cups of wine?" Recognizing Fu's generous, open-hearted nature, Pincai sought
 *   to deepen their acquaintance. "It would be a great pleasure, provided you grant me the honor
 *   of playing host." Fu laughed heartily, "As you wish." He drew a small leather folio from his
 *   boot, extracted a banknote, and handed it to his servant to settle the bill—graciously
 *   covering Pincai's ticket as well. Pincai offered profound thanks. Together, with Rongguan in
 *   tow, they exited the theater.
 *
 * Staging: the invitation at the table; the boot folio and banknote, paid to the usher; the party leaving
 *   through the crowded pit and out of the gate.
 */
export default defineStory({
  title: { en: 'Let’s find a drink', zh: '喝一钟去' },
  description: {
    en: 'Fu proposes they leave the dull play for a drink. Pincai agrees—on condition he may host. Fu laughs, draws a leather folio from his boot and has his man pay for all their seats, Pincai’s included, and they go out with Rongguan.',
    zh: '富三说今日戏没听头，约聘才去喝一钟。聘才要作东，富三笑说使得，从靴掖里拿出钱票，叫跟班连聘才的戏钱一并给了，带了蓉官一同出来。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: '“Let’s go drink”', zh: '找个地方喝一钟去' },
      quote: '魏大哥，今日这戏没有听头，咱们找个地方喝一钟去罢？',
      caption: { en: 'Fu: the play’s dull today—let’s find somewhere to drink. Pincai asks to be host.', zh: '富三：今日戏没听头，找个地方喝一钟。聘才要作东。' },
    },
    {
      start: 12, end: 24,
      title: { en: 'The boot folio', zh: '靴页子' },
      quote: '就在靴革幼里拿出个靴页子来，取一张钱票',
      caption: { en: 'Fu pulls a folio from his boot and has his man pay everyone’s seats, Pincai’s too.', zh: '富三从靴掖里取出钱票，叫跟班连聘才的戏钱一并给了。' },
    },
    {
      start: 24, end: 36,
      title: { en: 'Out together', zh: '一同出来' },
      quote: '于是带了蓉官，一同出来。',
      caption: { en: 'Pincai thanks him again, and they go out together, Rongguan with them.', zh: '聘才再三谢了，带了蓉官一同出来。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 5.6, zh: '富三见聘才人品活动，又系梅氏世谊，便道：「魏大哥，今日这戏没有听头，咱们找个地方喝一钟去罢？」', en: 'Liking Pincai, and he a friend of the Meis, Fu said, “Brother Wei, the play’s no good today—let’s go somewhere for a drink.”' },
    { start: 5.6, end: 11.6, zh: '聘才道：「今日幸会，但先要说明赏兄弟的脸作个东。」富三笑道：「使得。」', en: 'Pincai: “Gladly—so long as you’ll let me be host.” Fu laughed: “Done.”' },
    { start: 12.4, end: 18, zh: '就在靴革幼里拿出个靴页子来，取一张钱票，', en: 'He drew a leather folio from his boot and took out a banknote,' },
    { start: 18, end: 23.6, zh: '交与他跟班给看座儿的，连这位老爷的戏钱也在里头。', en: 'which his man gave to the usher—Pincai’s seat included.' },
    { start: 24.4, end: 35.6, zh: '聘才又再三谢了。于是带了蓉官，一同出来。', en: 'Pincai thanked him again and again, and they went out together with Rongguan.' },
  ],
});
