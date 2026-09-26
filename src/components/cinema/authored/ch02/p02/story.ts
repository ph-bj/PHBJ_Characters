import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 2. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：士燮道：「这称呼是小门生，不知那里来的？这魏聘才又是谁呢？」王文辉道：「世愚侄，不要是魏
 *   老仁的儿子么？」士燮道：「只怕是的，今年夏间接着老仁的信，说要打发他儿子进京弄一小功名，
 *   托我收留照应的话。若论老魏人品，实在下作，惟在你我面上，还算有点真情。」文辉道：「若论老
 *   魏，原是个上等聪明人，要发科甲也很可发的，就是阴骘损多了，成了个泼皮秀才。
 *
 * Translation: Shixie pondered, "'Your devoted later student', what a peculiar title. I wonder where he
 *   hails from? And who might this Wei Pincai be?" Wang Wenhui suggested, "'Your humble nephew
 *   of the next generation', could it be the son of Wei Laoren?" Shixie nodded, "I suspect you
 *   are right. This past summer, I received a letter from Laoren mentioning his intent to send
 *   his son to the capital to secure a modest degree, entrusting him to my care. In truth, old
 *   Wei's character is utterly despicable, it is solely out of regard for our shared past that
 *   any shred of goodwill remains." Wenhui replied, "Old Wei possessed a first-rate intellect
 *   and could well have triumphed in the imperial examinations. Regrettably, he compromised his
 *   hidden virtues to such an extent that he devolved into a scoundrel of a scholar."
 *
 * Staging: the two officials over the cards, and old Wei remembered.
 */
export default defineStory({
  title: { en: 'Old Wei’s son', zh: '魏老仁的儿子' },
  description: {
    en: 'Shixie puzzles over the cards; Wenhui guesses the nephew is the son of Wei Laoren, a clever man turned scoundrel scholar.',
    zh: '士燮不解名帖；文辉猜是魏老仁之子，其父聪明而成了泼皮秀才。',
  },
  shots: [
    {
      start: 0, end: 16,
      title: { en: 'A peculiar title', zh: '这称呼是小门生' },
      quote: '这称呼是小门生，不知那里来的？这魏聘才又是谁呢？',
      caption: { en: 'Shixie puzzles over the titles; Wenhui guesses: the son of Wei Laoren?', zh: '士燮不解称呼；文辉道：不要是魏老仁的儿子么？' },
    },
    {
      start: 16, end: 36,
      title: { en: 'A scoundrel of a scholar', zh: '泼皮秀才' },
      quote: '就是阴骘损多了，成了个泼皮秀才。',
      caption: { en: 'Old Wei was sharp enough to pass any examination, but spent his virtue and became a scoundrel scholar.', zh: '老魏原是上等聪明人，只是阴骘损多了，成了泼皮秀才。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 5, zh: '士燮道：「这称呼是小门生，不知那里来的？这魏聘才又是谁呢？」', en: 'Shixie: “‘Your devoted later student’—where is he from? And who is this Wei Pincai?”' },
    { start: 5, end: 10, zh: '王文辉道：「世愚侄，不要是魏老仁的儿子么？」', en: 'Wang Wenhui: “‘Humble nephew’—could it be the son of Wei Laoren?”' },
    { start: 10, end: 15.6, zh: '士燮道：「只怕是的，今年夏间接着老仁的信，托我收留照应。」', en: 'Shixie: “I suspect so. This summer Laoren wrote, entrusting his son to my care.”' },
    { start: 16.4, end: 22, zh: '「若论老魏人品，实在下作，惟在你我面上，还算有点真情。」', en: '“Old Wei’s character is despicable; only for our old ties does any goodwill remain.”' },
    { start: 22, end: 28.6, zh: '文辉道：「若论老魏，原是个上等聪明人，要发科甲也很可发的，', en: 'Wenhui: “Old Wei had a first-rate mind and could well have passed the examinations,' },
    { start: 28.6, end: 35.6, zh: '就是阴骘损多了，成了个泼皮秀才。」', en: 'but he spent his hidden virtue and became a scoundrel of a scholar.”' },
  ],
});
