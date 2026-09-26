import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 4. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：这样看起来，那琴官虽然生得天仙似的，只怕未必比得上这一班」。忽又转念道：「这书上说的，也怕有
 *   些言过其实。
 *
 * Translation: "By this measure," he mused further, "though Qinguan possesses an otherworldly beauty, even
 *   he might not surpass this echelon of performers." Then another thought struck him: "And yet
 *   what this book says may well be somewhat overstated."
 *
 * Staging: a great steelyard in the mist, Qinguan alone against the eight; back on the kang, the book
 *   tapped in doubt as the eight fade.
 */
export default defineStory({
  title: { en: 'Weighed against the eight', zh: '未必比得上' },
  description: {
    en: 'Pincai weighs Qinguan, heavenly as he is, against the eight of the Manual, and then wonders whether the book overstates them.',
    zh: '聘才把琴官与花选八人相比，又疑书上言过其实。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: 'Qinguan and the eight', zh: '琴官比这一班' },
      quote: '那琴官虽然生得天仙似的，只怕未必比得上这一班',
      caption: { en: 'In his mind a great balance: Qinguan alone on one pan, the eight on the other.', zh: '心中一杆大秤：一头是琴官，一头是八个名旦。' },
    },
    {
      start: 18, end: 36,
      title: { en: 'Overstated?', zh: '言过其实' },
      quote: '这书上说的，也怕有些言过其实。',
      caption: { en: 'Then he doubts the book: perhaps it flatters them.', zh: '又转念：书上说的，怕有些言过其实。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 17.6, zh: '这样看起来，那琴官虽然生得天仙似的，只怕未必比得上这一班。', en: '“By this measure, though Qinguan is as lovely as an immortal, he may not surpass this company.”' },
    { start: 18.4, end: 35.6, zh: '忽又转念道：「这书上说的，也怕有些言过其实。」', en: 'Then another thought: “What the book says may well be overstated.”' },
  ],
});
