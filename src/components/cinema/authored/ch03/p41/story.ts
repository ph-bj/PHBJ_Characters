import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 41. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：「了不得了。」不知后事如何，且听下回分解。
 *
 * Translation: "Disaster has struck!" To discover the nature of this calamity, one must listen to the
 *   following chapter.
 *
 * Staging: Yuanmao in the doorway, the three turning; beyond him in the dark courtyard the first flakes
 *   beginning to fall.
 */
export default defineStory({
  title: { en: '“Disaster!”', zh: '了不得了' },
  description: {
    en: '“Disaster!” cries Yuanmao at the open door. What it is, the next chapter will tell.',
    zh: '「了不得了。」不知后事如何，且听下回分解。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: '“Disaster!”', zh: '了不得了' },
      quote: '「了不得了。」',
      caption: { en: 'Yuanmao cries out from the open door.', zh: '元茂在门口叫道：了不得了。' },
    },
    {
      start: 18, end: 36,
      title: { en: 'The next chapter', zh: '且听下回分解' },
      quote: '不知后事如何，且听下回分解。',
      caption: { en: 'What has happened? Listen to the next chapter.', zh: '不知后事如何，且听下回分解。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 17.6, zh: '「了不得了。」', en: '“Disaster!”' },
    { start: 18.4, end: 35.6, zh: '不知后事如何，且听下回分解。', en: 'To learn what happened, listen to the next chapter.' },
  ],
});
