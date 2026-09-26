import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 56.
 *
 * 原文：这么看来，「有目共赏」的一句，竟是妄言了。把方才这个保珠比他，做他的舆儓，也还不配。」子
 *   玉一路想到了家；不知后事如何。且听下回分解。
 *
 * Translation: Looking at it this way, the phrase 'universally appreciated' has indeed proven to be an
 *   empty boast. To compare that Baozhu from earlier to this one—he would not even be fit to
 *   serve as his lowliest menial." Ziyu pondered this all the way home. To know what happens
 *   next, please listen to the explanation in the following chapter.
 *
 * Staged from tableau beats (cinema/beats/tableau.ts): the vulgar Baozhu beside the peerless boy, Ziyu’s cart arriving home, and the chapter’s closing words.
 */
export default defineStory({
  title: { en: 'Not fit to be his servant', zh: '做他的舆儓也还不配' },
  description: {
    en: 'Ziyu decides “universally admired” was an empty boast: that Baozhu is not fit to be this boy’s lowliest servant. He rides home, and the chapter ends.',
    zh: '子玉想“有目共赏”竟是妄言，那保珠做他的舆儓也还不配。一路想到家，且听下回分解。',
  },
  shots: [
    {
      start: 0, end: 14,
      title: { en: 'Not even his servant', zh: '舆儓也还不配' },
      quote: '把方才这个保珠比他，做他的舆儓，也还不配。',
      caption: { en: '“Universally admired” was an empty boast: that Baozhu is not fit to be this boy’s lowliest menial.', zh: '“有目共赏”竟是妄言；那保珠做他的舆儓也还不配。' },
    },
    {
      start: 14, end: 28,
      title: { en: 'Home again', zh: '一路想到了家' },
      quote: '子玉一路想到了家',
      caption: { en: 'Ziyu ponders all the way home.', zh: '子玉一路想到了家。' },
    },
    {
      start: 28, end: 36,
      title: { en: 'To be continued', zh: '且听下回分解' },
      quote: '不知后事如何。且听下回分解。',
      caption: { en: 'To know what happens next, listen to the next chapter.', zh: '不知后事如何，且听下回分解。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6.6, zh: '这么看来，「有目共赏」的一句，竟是妄言了。', en: 'Looking at it this way, the phrase “universally appreciated” has proven an empty boast.' },
    { start: 6.6, end: 13.6, zh: '把方才这个保珠比他，做他的舆儓，也还不配。', en: 'That Baozhu from earlier would not even be fit to serve as his lowliest menial.' },
    { start: 14.4, end: 27.6, zh: '子玉一路想到了家；', en: 'Ziyu pondered this all the way home.' },
    { start: 28.4, end: 35.6, zh: '不知后事如何。且听下回分解。', en: 'To know what happens next, please listen to the explanation in the following chapter.' },
  ],
});
