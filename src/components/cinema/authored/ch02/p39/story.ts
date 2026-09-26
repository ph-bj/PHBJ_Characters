import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 39. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：周锡爵道：「两杯化作六杯，花字飞觞。」桂保先问文辉道：「几个？」文辉道：「一个。」顺手便
 *   问亮功道：「几个？」亮功伸着两指道：「就是两个。」桂保笑道：「好猜手，一猜就着。」放开手
 *   看时，正是两个。遂取了三个杯子，斟满了酒，放在亮功面前。亮功道：「这是杨四兄的令，就和你
 *   豁。」杨方猷道：「我是半杯说过的。」亮功道「豁起来再讲。」可可响了三响，亮功输了三拳，便
 *   道：「今日拳运不佳，让了你罢。」
 *
 * Translation: Zhou Xijue proposed, "Two cups become six, utilizing a 'flying toast' featuring the
 *   character for 'flower' (hua)." Guibao first addressed Wang Wenhui, "How many?" Wenhui
 *   answered, "One." Without pausing, he asked Lianggong, "How many?" Lianggong raised two
 *   fingers, "Exactly two." Guibao laughed, "An excellent guesser, correct on the very first
 *   try." Opening his hand, he revealed precisely two coins. He then arranged three cups,
 *   filled them brimming with wine, and placed them before Lianggong. Lianggong declared, "This
 *   follows Brother Yang's rule, I challenge you to finger-guessing." Yang Fangyou reminded
 *   him, "I specifically wagered half a cup." Lianggong dismissed it, "We will settle the
 *   portions after the match." They played three rapid rounds, and Lianggong lost all three.
 *   Resigned, he said, "My luck at finger-guessing is dismal today, I concede to you."
 *
 * Staging: the guess, three cups set before Lianggong, and the finger-guessing.
 */
export default defineStory({
  title: { en: 'Two coins', zh: '就是两个' },
  description: {
    en: 'Zhou names the flying-flower verse; Guibao’s fist goes round, Lianggong guesses two coins exactly, wins three cups, and loses all three rounds of finger-guessing to Yang.',
    zh: '周锡爵出花字飞觞；桂保猜枚，亮功猜着两个，得三杯，与杨方猷豁拳连输三拳。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: '“Exactly two”', zh: '就是两个' },
      quote: '亮功伸着两指道：「就是两个。」',
      caption: { en: 'Guibao’s fist goes round; Lianggong holds up two fingers—and two coins it is.', zh: '亮功伸两指：「就是两个。」放开手看时，正是两个。' },
    },
    {
      start: 12, end: 24,
      title: { en: 'Three full cups', zh: '三个杯子' },
      quote: '遂取了三个杯子，斟满了酒，放在亮功面前。',
      caption: { en: 'Three cups are filled and set before Lianggong.', zh: '三个杯子斟满，放在亮功面前。' },
    },
    {
      start: 24, end: 36,
      title: { en: 'Three lost rounds', zh: '输了三拳' },
      quote: '可可响了三响，亮功输了三拳',
      caption: { en: 'Lianggong challenges Yang to finger-guessing and loses three rounds straight.', zh: '亮功与杨方猷豁拳，输了三拳。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4.6, zh: '周锡爵道：「两杯化作六杯，花字飞觞。」', en: 'Zhou Xijue: “Two cups become six—a flying toast on the word ‘flower.’”' },
    { start: 4.6, end: 8, zh: '桂保先问文辉道：「几个？」文辉道：「一个。」', en: 'Guibao asked Wenhui, “How many?” “One.”' },
    { start: 8, end: 11.6, zh: '又问亮功，亮功伸着两指道：「就是两个。」放开手看时，正是两个。', en: 'Then Lianggong, holding up two fingers: “Exactly two.” He opened his hand—two it was.' },
    { start: 12.4, end: 18, zh: '遂取了三个杯子，斟满了酒，放在亮功面前。', en: 'Three cups were filled to the brim and set before Lianggong.' },
    { start: 18, end: 23.6, zh: '亮功道：「这是杨四兄的令，就和你豁。」', en: 'Lianggong: “This is Brother Yang’s rule—I’ll play you.”' },
    { start: 24.4, end: 30, zh: '可可响了三响，亮功输了三拳，', en: 'Three quick rounds—and Lianggong lost all three.' },
    { start: 30, end: 35.6, zh: '便道：「今日拳运不佳，让了你罢。」', en: '“My luck is dismal today,” he said. “I concede.”' },
  ],
});
