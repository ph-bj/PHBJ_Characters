import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 32. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：大家抢吃，便在屋里乱咬起来，四条大狗打在一处。众伙计七手八脚，拿了棍子、扫笆赶开了狗，然后收
 *   拾。
 *
 * Translation: The dogs, having gorged themselves, fell into a vicious, snarling brawl amidst the wreckage.
 *   The waiters descended upon them with sticks and brooms, violently driving the hounds into
 *   the street before finishing their frantic cleanup.
 *
 * Staging: the dogs snarling and tumbling among broken china; waiters with sticks and brooms chasing them
 *   out through the courtyard.
 */
export default defineStory({
  title: { en: 'Dogfight', zh: '四条大狗打在一处' },
  description: {
    en: 'Fighting over the scraps, the four dogs fall on each other in the wreckage; the waiters pile in with sticks and brooms, drive them out, and clear up.',
    zh: '四条大狗抢吃，在屋里乱咬起来；伙计们拿了棍子、扫笆赶开了狗，然后收拾。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: 'A snarling heap', zh: '乱咬起来' },
      quote: '大家抢吃，便在屋里乱咬起来，四条大狗打在一处。',
      caption: { en: 'Squabbling over the food, the four dogs fall to fighting in the wrecked room.', zh: '四条大狗抢吃，在屋里打成一团。' },
    },
    {
      start: 18, end: 36,
      title: { en: 'Sticks and brooms', zh: '棍子、扫笆' },
      quote: '众伙计七手八脚，拿了棍子、扫笆赶开了狗，然后收拾。',
      caption: { en: 'The waiters pile in with sticks and brooms, chase the dogs out, and clear up.', zh: '伙计们七手八脚拿棍子扫笆赶开了狗，然后收拾。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 17.6, zh: '大家抢吃，便在屋里乱咬起来，四条大狗打在一处。', en: 'Snatching at the food, they began biting each other—four big dogs locked in a fight.' },
    { start: 18.4, end: 35.6, zh: '众伙计七手八脚，拿了棍子、扫笆赶开了狗，然后收拾。', en: 'The waiters piled in with sticks and brooms, drove the dogs off, and then cleared up.' },
  ],
});
