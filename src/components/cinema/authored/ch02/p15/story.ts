import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 15. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：那一个更古怪，他索性不理人，若多问了他几句话，他就气得要哭出来。只怕这种性情到京里来，也
 *   没人喜欢。若论相貌，就算京城里有好相公，也总压不下他，恐还要比不上他呢。」
 *
 * Translation: "The other is even more peculiar, simply choosing to ignore people entirely. If pressed
 *   with a few extra questions, he grows so incensed he appears on the verge of tears. I fear
 *   such a disposition will win him few admirers in the capital. But in matters of appearance,
 *   even if the capital boasts fine young actors, none could ever outshine him, they would
 *   likely pale entirely by comparison."
 *
 * Staging: the proud boy turning away, and Pincai’s verdict by lamplight.
 */
export default defineStory({
  title: { en: 'Close to tears', zh: '气得要哭出来' },
  description: {
    en: 'The other one ignores people altogether, and near weeps if pressed; yet no actor in the capital could outshine him.',
    zh: '那一个更古怪，不理人，多问几句就气得要哭；论相貌京城里无人压得下他。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: 'He ignores everyone', zh: '索性不理人' },
      quote: '那一个更古怪，他索性不理人，若多问了他几句话，他就气得要哭出来。',
      caption: { en: 'The other is stranger still: he ignores people, and if pressed, grows so vexed he nearly cries.', zh: '那一个索性不理人，多问几句就气得要哭。' },
    },
    {
      start: 18, end: 36,
      title: { en: 'None could outshine him', zh: '总压不下他' },
      quote: '若论相貌，就算京城里有好相公，也总压不下他',
      caption: { en: 'But for looks, no fine actor in the capital could outshine him.', zh: '论相貌，京城里的好相公也压不下他。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 8.6, zh: '「那一个更古怪，他索性不理人，', en: '“The other is even stranger—he simply ignores people.' },
    { start: 8.6, end: 17.6, zh: '若多问了他几句话，他就气得要哭出来。只怕这种性情到京里来，也没人喜欢。', en: 'Press him with a few questions and he’s near tears. I fear no one in the capital will like such a temper.' },
    { start: 18.4, end: 35.6, zh: '若论相貌，就算京城里有好相公，也总压不下他，恐还要比不上他呢。」', en: 'But in looks, even the capital’s finest could never outshine him—they would pale beside him.”' },
  ],
});
