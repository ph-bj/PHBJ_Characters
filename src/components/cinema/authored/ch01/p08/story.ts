import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 8. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：这两个相聚十余年，其结契之厚，比同胞手足更加亲密。那南湘是啸傲忘形，清狂绝俗，目空一世，
 *   倚马万言，就只赏识子玉、仲清二人。
 *
 * Translation: These two had spent over ten years in each other's company; the profound depth of their
 *   connection surpassed even the intimacy of blood brothers. As for Nanxiang, he was given to
 *   roaring with laughter and transcending mere form—a man of pure madness who stood utterly
 *   apart from the vulgar world. He looked down upon his entire generation, capable of writing
 *   ten thousand words while leaning against a horse, and deigned to appreciate only Ziyu and
 *   Zhongqing.
 *
 * Staging: the cousins walking together in the hills, then Nanxiang beside his horse.
 */
export default defineStory({
  title: { en: 'Closer than brothers', zh: '比同胞手足更加亲密' },
  description: {
    en: 'Ten years of friendship between Ziyu and Zhongqing; and Nanxiang, wild and proud, who can write ten thousand words leaning on a horse.',
    zh: '子玉仲清十余年之交；南湘清狂绝俗，倚马万言。',
  },
  shots: [
    {
      start: 0, end: 14,
      title: { en: 'Ten years together', zh: '相聚十余年' },
      quote: '这两个相聚十余年，其结契之厚，比同胞手足更加亲密。',
      caption: { en: 'Ten years together have made the two closer than blood brothers.', zh: '二人相聚十余年，亲逾手足。' },
    },
    {
      start: 14, end: 36,
      title: { en: 'Ten thousand words on horseback', zh: '倚马万言' },
      quote: '那南湘是啸傲忘形，清狂绝俗……就只赏识子玉、仲清二人。',
      caption: { en: 'Nanxiang roars with laughter, looks down on his age, writes ten thousand words leaning on a horse, and admires only Ziyu and Zhongqing.', zh: '南湘啸傲忘形，目空一世，倚马万言，只赏识子玉、仲清二人。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 7, zh: '这两个相聚十余年，', en: 'These two had spent over ten years in each other’s company;' },
    { start: 7, end: 13.6, zh: '其结契之厚，比同胞手足更加亲密。', en: 'the depth of their bond surpassed even that of blood brothers.' },
    { start: 14.4, end: 20, zh: '那南湘是啸傲忘形，清狂绝俗，', en: 'As for Nanxiang, he roared with laughter and transcended mere form, apart from the vulgar world.' },
    { start: 20, end: 27, zh: '目空一世，倚马万言，', en: 'He looked down on his whole generation, and could write ten thousand words leaning on a horse,' },
    { start: 27, end: 35.6, zh: '就只赏识子玉、仲清二人。', en: 'yet deigned to appreciate only Ziyu and Zhongqing.' },
  ],
});
