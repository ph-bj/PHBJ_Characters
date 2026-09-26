import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 49. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：子玉好不心烦，如坐涂炭。王恂说完了话坐正了，子玉想要回去。尚未说出，只见一人领着一个相
 *   公，笑嘻嘻的走近来，请了两个安，便挤在桌子中间坐了。王恂也不认的。子玉见那相公，约有十五
 *   六岁，生得蠢头笨脑，脸上露着两块大孤骨，脸面虽白，手却是黑的。他倒摸着子玉的手问起贵姓
 *   来，子玉颇不愿答他。
 *
 * Translation: Ziyu felt incredibly annoyed, as if sitting on burning coals. Wang Xun finished his
 *   conversation and sat back properly. Ziyu wanted to suggest they return. Before he could
 *   speak, he saw a man leading an escort boy, approaching with a beaming smile. He offered two
 *   greetings, then squeezed into the middle of the table and sat down. Wang Xun didn't
 *   recognize him either. Ziyu looked at the boy, who seemed about fifteen or sixteen, with a
 *   dull, heavy head and two large, prominent cheekbones on his face. Though his face was
 *   white, his hands were dark. He actually reached out to touch Ziyu's hand and asked for his
 *   esteemed surname. Ziyu was highly reluctant to answer him.
 *
 * Staging: Ziyu fidgeting at the table, then the man and the escort boy squeezing in.
 */
export default defineStory({
  title: { en: 'As if on burning coals', zh: '如坐涂炭' },
  description: {
    en: 'Just as Ziyu means to leave, a man brings over a dull-faced escort boy, who takes Ziyu’s hand.',
    zh: '子玉正想回去，一人领来一个相公，挤坐桌中，摸着子玉的手问贵姓。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'On burning coals', zh: '如坐涂炭' },
      quote: '子玉好不心烦，如坐涂炭。',
      caption: { en: 'Ziyu feels as if he were sitting on burning coals, and wants to go home.', zh: '子玉心烦，如坐涂炭，想要回去。' },
    },
    {
      start: 12, end: 36,
      title: { en: 'An escort boy', zh: '领着一个相公' },
      quote: '只见一人领着一个相公……子玉颇不愿答他。',
      caption: { en: 'A beaming man brings over a heavy-headed boy with dark hands, who squeezes in and takes Ziyu’s hand.', zh: '一人领着相公挤坐桌中；那相公蠢头笨脑，手是黑的，摸着子玉的手问贵姓。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '子玉好不心烦，如坐涂炭。', en: 'Ziyu felt incredibly annoyed, as if sitting on burning coals.' },
    { start: 6, end: 11.6, zh: '王恂说完了话坐正了，子玉想要回去。', en: 'Wang Xun finished his conversation; Ziyu wanted to suggest they return.' },
    { start: 12.4, end: 18, zh: '只见一人领着一个相公，笑嘻嘻的走近来，请了两个安，便挤在桌子中间坐了。', en: 'A man leading an escort boy approached, beaming, offered two greetings, and squeezed in at the table.' },
    { start: 18, end: 24, zh: '那相公约有十五六岁，生得蠢头笨脑，脸上露着两块大孤骨，', en: 'The boy, about fifteen, had a dull, heavy head and two large, prominent cheekbones.' },
    { start: 24, end: 29.4, zh: '脸面虽白，手却是黑的。', en: 'Though his face was white, his hands were dark.' },
    { start: 29.4, end: 35.6, zh: '他倒摸着子玉的手问起贵姓来，子玉颇不愿答他。', en: 'He reached out to touch Ziyu’s hand and asked his surname; Ziyu was highly reluctant to answer.' },
  ],
});
