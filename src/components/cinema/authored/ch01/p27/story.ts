import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 27. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：火树银花王兰保 兰保姓王氏，字静芳，年十七岁。扬州人。隶联锦部。翩若惊鸿，婉若游龙。通词
 *   翰，善武技，性尤烈，不屈豪贵，真玉中之有声者。
 *
 * Translation: Wang Lanbao: Silver Flowers on a Fiery Tree. Lanbao's surname is Wang, his courtesy name
 *   Jingfang, and he is seventeen years of age. A native of Yangzhou. He belongs to the Lianjin
 *   troupe. He glides like a startled swan and curves like a swimming dragon. Well-versed in
 *   literature and highly skilled in martial arts, his temperament is exceptionally fierce; he
 *   refuses to bow to the wealthy and powerful. He is truly a resonant voice among jade.
 *
 * Staging: Wang Lanbao’s emblem page of fireworks, then his portrait with sword.
 */
export default defineStory({
  title: { en: 'Wang Lanbao, silver flowers on a fiery tree', zh: '火树银花王兰保' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. The sixth entry: Wang Lanbao, the martial one.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。第六题：王兰保，善武技。',
  },
  shots: [
    {
      start: 0, end: 16,
      title: { en: 'Silver flowers on a fiery tree', zh: '火树银花' },
      quote: '火树银花王兰保……隶联锦部。',
      caption: { en: 'The sixth entry: Wang Lanbao, “Silver Flowers on a Fiery Tree,” seventeen, of Yangzhou, in the Lianjin troupe.', zh: '第六题：火树银花王兰保，年十七，扬州人，隶联锦部。' },
    },
    {
      start: 16, end: 36,
      title: { en: 'A startled swan, a swimming dragon', zh: '翩若惊鸿，婉若游龙' },
      quote: '翩若惊鸿，婉若游龙。通词翰，善武技，性尤烈，不屈豪贵',
      caption: { en: 'Lithe as a startled swan, skilled in letters and martial arts, fierce by nature: he bows to no one rich or powerful.', zh: '翩若惊鸿，婉若游龙；通词翰，善武技，性烈，不屈豪贵。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '火树银花王兰保', en: 'Wang Lanbao: Silver Flowers on a Fiery Tree.' },
    { start: 6, end: 15.6, zh: '兰保姓王氏，字静芳，年十七岁。扬州人。隶联锦部。', en: 'Courtesy name Jingfang, seventeen, a native of Yangzhou, of the Lianjin troupe.' },
    { start: 16.4, end: 21.4, zh: '翩若惊鸿，婉若游龙。', en: 'He glides like a startled swan and curves like a swimming dragon.' },
    { start: 21.4, end: 27.4, zh: '通词翰，善武技，性尤烈，不屈豪贵，', en: 'Well-versed in letters and skilled in martial arts, fierce by nature, he refuses to bow to the powerful—' },
    { start: 27.4, end: 35.6, zh: '真玉中之有声者。', en: 'truly a resonant voice among jade.' },
  ],
});
