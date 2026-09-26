import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 13. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：这已经算个绝色了。更有一个唱闰门旦的叫琴官，十五岁了。他的好处，真教我说不出来。要将世间
 *   的颜色比他，也没有这个颜色。要将古时候的美人比他，我又没有见过古时候的美人。世间的活美
 *   人，是再没有这样好的。就是画师画的美人，也画不到这样的神情眉目。他姓杜，或者就是杜丽娘还
 *   魂？不然，就是杜兰香下嫁。除了这两个姓杜的，也就没有第三个了。」
 *
 * Translation: "That alone would suffice to declare him a peerless beauty. Yet there was another,
 *   portraying the sequestered maiden, a youth named Qinguan, merely fifteen years of age. His
 *   beauty transcends the boundaries of earthly language. To compare him to the beauties of
 *   this world is futile, for no such exquisite coloring exists in reality. Though one might
 *   liken him to the celebrated beauties of antiquity, I myself have never laid eyes upon a
 *   beauty of ancient times. Among all living beauties, nothing approaches his refinement. Not
 *   even the most accomplished painters of ethereal women could capture the spirit that resides
 *   within his eyes. His surname is Du, perhaps he is the very reincarnation of Du Liniang,
 *   returned from the grave. If not, he must surely be the fairy maiden Du Lanxiang descending
 *   to grace a mortal lover. Beyond these two illustrious ladies of the Du lineage, there could
 *   be no third equivalent."
 *
 * Staging: Pincai’s praise by lamplight, Qinguan in moonlight, and the two ladies of the Du name.
 */
export default defineStory({
  title: { en: 'Qinguan', zh: '琴官' },
  description: {
    en: 'But Qinguan, fifteen, is beyond words: no painter could catch his eyes; perhaps Du Liniang returned from the grave, or the fairy Du Lanxiang come down to earth.',
    zh: '琴官十五岁，好处说不出来，画师也画不到；或是杜丽娘还魂，杜兰香下嫁。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'Beyond words', zh: '说不出来' },
      quote: '更有一个唱闺门旦的叫琴官，十五岁了。他的好处，真教我说不出来。',
      caption: { en: 'There is another, Qinguan, fifteen, who plays the sheltered maiden—Pincai cannot put his beauty into words.', zh: '琴官十五岁，唱闺门旦，好处真说不出来。' },
    },
    {
      start: 12, end: 26,
      title: { en: 'No painter could catch him', zh: '画不到这样的神情' },
      quote: '就是画师画的美人，也画不到这样的神情眉目。',
      caption: { en: 'No living beauty equals him, and no painter could catch the spirit in his eyes.', zh: '世间活美人没有这样好的，画师也画不到他的神情眉目。' },
    },
    {
      start: 26, end: 36,
      title: { en: 'Du Liniang returned', zh: '杜丽娘还魂' },
      quote: '他姓杜，或者就是杜丽娘还魂？不然，就是杜兰香下嫁。',
      caption: { en: 'His surname is Du: perhaps Du Liniang back from the grave, or the fairy Du Lanxiang come down to earth.', zh: '他姓杜，或是杜丽娘还魂，或是杜兰香下嫁。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 5, zh: '「这已经算个绝色了。更有一个唱闺门旦的叫琴官，十五岁了。', en: '“That alone is a peerless beauty. But there is another, Qinguan, fifteen, who plays the sheltered maiden.' },
    { start: 5, end: 11.6, zh: '他的好处，真教我说不出来。', en: 'His beauty I truly cannot put into words.' },
    { start: 12.4, end: 16, zh: '要将世间的颜色比他，也没有这个颜色。', en: 'No coloring in this world compares with his.' },
    { start: 16, end: 20.6, zh: '世间的活美人，是再没有这样好的。', en: 'No living beauty comes near him.' },
    { start: 20.6, end: 25.6, zh: '就是画师画的美人，也画不到这样的神情眉目。', en: 'Not even a painter of beauties could capture such spirit in his eyes.' },
    { start: 26.4, end: 31, zh: '他姓杜，或者就是杜丽娘还魂？不然，就是杜兰香下嫁。', en: 'His surname is Du—perhaps Du Liniang returned from the grave, or the fairy Du Lanxiang come down to earth.' },
    { start: 31, end: 35.6, zh: '除了这两个姓杜的，也就没有第三个了。」', en: 'Besides those two of the Du name, there could be no third.”' },
  ],
});
