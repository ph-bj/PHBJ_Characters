import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 46. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：然后同玉恂到了书房，问起仲清，为高品、南湘请去。子玉说起前日所见南湘的《花选》过于失实，
 *   玉恂道：「竹君的《花选》，据实而言，尚恐说不到，何以为失实？现在那些宝贝得了这番品题，又
 *   长了些声价，你也应该见过这些人。」子玉听了，知王恂也有旦癖，又是个好为附会的人，便不说
 *   了。
 *
 * Translation: Afterward, he accompanied Wang Xun to the study and asked after Zhongqing, learning that he
 *   had been invited out by Gao Pin and Nanxiang. Ziyu mentioned that the "Opera Stage Flower
 *   Manual" he had seen Nanxiang carrying the other day was excessively exaggerated. Wang Xun
 *   replied, "As for Zhujun's 'Selection of Flowers,' practically speaking, one should rather
 *   fear it falls short; how could it be considered an exaggeration? Now that those treasures
 *   have received this evaluation, their prestige has grown even further. You really ought to
 *   have seen these people." Hearing this, Ziyu realized that Wang Xun also had a fondness for
 *   young dan and was prone to following the crowd, so he dropped the subject.
 *
 * Staging: Ziyu and Wang Xun in the study, arguing over the book.
 */
export default defineStory({
  title: { en: 'Wang Xun defends the book', zh: '王恂也有旦癖' },
  description: {
    en: 'Ziyu calls the 《花选》 exaggerated; Wang Xun says it falls short of the truth, and Ziyu drops the subject.',
    zh: '子玉说《花选》失实；王恂说据实尚恐说不到，子玉便不说了。',
  },
  shots: [
    {
      start: 0, end: 14,
      title: { en: 'Excessively exaggerated', zh: '过于失实' },
      quote: '子玉说起前日所见南湘的《花选》过于失实',
      caption: { en: 'Zhongqing has been invited out; Ziyu tells Wang Xun the 《花选》 is exaggerated.', zh: '仲清被请出去了；子玉说南湘《花选》过于失实。' },
    },
    {
      start: 14, end: 36,
      title: { en: 'It falls short, if anything', zh: '尚恐说不到' },
      quote: '竹君的《花选》，据实而言，尚恐说不到，何以为失实？',
      caption: { en: 'Wang Xun: if anything it falls short. Ziyu sees his cousin shares the craze, and says no more.', zh: '王恂：据实而言，尚恐说不到。子玉知他也有旦癖，便不说了。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6.6, zh: '然后同王恂到了书房，问起仲清，为高品、南湘请去。', en: 'He went with Wang Xun to the study and learned Zhongqing had been invited out by Gao Pin and Nanxiang.' },
    { start: 6.6, end: 13.6, zh: '子玉说起前日所见南湘的《花选》过于失实。', en: 'Ziyu mentioned that Nanxiang’s “Flower Manual” was excessively exaggerated.' },
    { start: 14.4, end: 20, zh: '王恂道：「竹君的《花选》，据实而言，尚恐说不到，何以为失实？', en: 'Wang Xun: “Truly, one should fear it falls short; how is it exaggerated?' },
    { start: 20, end: 26, zh: '现在那些宝贝得了这番品题，又长了些声价，你也应该见过这些人。」', en: 'Those treasures have grown in prestige; you really ought to have seen them.”' },
    { start: 26, end: 35.6, zh: '子玉听了，知王恂也有旦癖，便不说了。', en: 'Ziyu realized Wang Xun also had a fondness for young dan, and dropped the subject.' },
  ],
});
