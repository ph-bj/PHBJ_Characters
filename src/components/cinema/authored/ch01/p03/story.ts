import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 3.
 *
 * 原文：一曰情中至，一曰情中慧，一曰情中韵，一曰情中醇，一曰情中淑，一曰情中烈，一曰情中直，一曰
 *   情中酣，一曰情中艳，一曰情中媚。这都是上等人物。还有那些下等人物，这个情字便加不上，也指
 *   出几种来。一曰淫，一曰邪，一曰黠，一曰荡，一曰贪，一曰魔，一曰祟，一曰蠹。大概自古及今，
 *   用情于欢乐场中的人，均不外乎邪正两途，耳目所及，笔之于书，共成六十卷，名曰《品花宝鉴》，
 *   又曰《怡情佚史》。书中有宾有主，不即不离，藕断丝连，花浓云聚。陈言务去，不知费作者几许苦
 *   心；生面别开，遂能令读者一时快意。正是：鸳鸯绣了从教看，莫把金针暗度人。
 *
 * Translation: The first is feeling at its most profound; the second, feeling touched by wisdom; the
 *   third, feeling woven with grace; the fourth, feeling distilled in purity; the fifth,
 *   feeling adorned in virtue; the sixth, feeling burning with ardor; the seventh, feeling
 *   tempered by integrity; the eighth, feeling flowing in abandon; the ninth, feeling glowing
 *   in radiance; and the tenth, feeling softening into charm. These are all figures of the
 *   highest caliber. There are, however, those of lower character to whom the word "feeling"
 *   cannot be applied; they too may be classified into several types. The first is lewdness;
 *   the second, depravity; the third, cunning; the fourth, licentiousness; the fifth, greed;
 *   the sixth, the demonic; the seventh, the malevolent; and the eighth, the parasitic. Broadly
 *   speaking, from ancient times to the present, those who have invested their feelings in the
 *   quarters of pleasure have invariably tread one of two paths: the crooked or the straight.
 *   What my eyes have seen and my ears have heard, I have committed to writing, comprising
 *   sixty volumes in total. I title it "Pinhua Baojian," or alternatively, "Yiqing Yishi."
 *   Within this book, there are hosts and guests, neither clinging too closely nor drifting too
 *   far apart—like lotus roots severed yet joined by unseen threads, or like rich blossoms
 *   gathering beneath rolling clouds. Trite expressions have been rigorously expunged,
 *   betraying the author's untold labor; while fresh vistas are unfurled at every turn,
 *   offering the reader moments of spontaneous delight. As the proverb says: "I embroider the
 *   mandarin ducks for you to admire, but I will not silently pass you the golden needle."
 *
 * Staged as five beats: a handscroll of ten flowers for the ten kinds of leading performers; eight
 * lower kinds as ink blots on which 情 will not settle; the fork between the crooked and straight
 * paths; sixty volumes and the title slip; and the embroidered mandarin ducks with the needle
 * withheld. The flowers and figures stand for types, not particular characters.
 */
export default defineStory({
  title: { en: 'Ranks of feeling, and a book of flowers', zh: '情有品第，书成宝鉴' },
  description: {
    en: 'Painted in ink: ten flowers for the ten kinds of leading performers; eight blotted words on which 情 will not settle; the two paths of the pleasure quarters; sixty volumes named Precious Mirror for Ranking Flowers; and a pair of mandarin ducks embroidered for all to see, the golden needle kept back. The flowers and figures stand for types, not particular characters.',
    zh: '以水墨写之：十种名旦化作十花；八种下品墨污成团，“情”字加之不上；欢场之人，不外邪正两途；六十卷书，名曰《品花宝鉴》；终以绣成鸳鸯作结，金针不度。花与人物皆为类型，并非具体角色。',
  },
  shots: [
    {
      start: 0, end: 10,
      title: { en: 'Ten flowers of the Pear Garden', zh: '名旦十品' },
      quote: '一曰情中至，一曰情中慧……一曰情中艳，一曰情中媚。这都是上等人物。',
      caption: { en: 'A handscroll of flowers unrolls, one for each kind of leading performer: the utmost, the wise, the graceful, the mellow, the virtuous, the ardent, the upright, the abandoned, the radiant and the charming.', zh: '花谱长卷徐徐展开，一花一品：至、慧、韵、醇、淑、烈、直、酣、艳、媚。' },
    },
    {
      start: 10, end: 17,
      title: { en: 'Where feeling will not settle', zh: '情字加不上' },
      quote: '这个情字便加不上……一曰淫，一曰邪，一曰黠，一曰荡，一曰贪，一曰魔，一曰祟，一曰蠹。',
      caption: { en: 'Eight lower kinds bleed onto the paper as blotted words. The character 情 gathers above them, but cannot settle, and scatters.', zh: '八种下品化作墨污，情字聚于其上，却终究落不下去，四散而去。' },
    },
    {
      start: 17, end: 24,
      title: { en: 'Two paths', zh: '邪正两途' },
      quote: '用情于欢乐场中的人，均不外乎邪正两途',
      caption: { en: 'In a misty landscape the road forks: a straight path climbs to a pavilion with a vermilion lantern, a crooked one winds into a dark wood.', zh: '烟岚之中，路分两岔：正途直上灯火楼台，邪途蜿蜒没入幽林。' },
    },
    {
      start: 24, end: 30,
      title: { en: 'Sixty volumes', zh: '共成六十卷' },
      quote: '笔之于书，共成六十卷，名曰《品花宝鉴》，又曰《怡情佚史》。',
      caption: { en: 'On the author’s desk, sixty thread-bound volumes pile up, and the brush writes the title slip: Precious Mirror for Ranking Flowers.', zh: '案头线装书一卷卷叠成六十，笔落题签：《品花宝鉴》。' },
    },
    {
      start: 30, end: 36,
      title: { en: 'The golden needle', zh: '莫把金针暗度人' },
      quote: '鸳鸯绣了从教看，莫把金针暗度人。',
      caption: { en: 'A pair of mandarin ducks is stitched onto silk for everyone to admire; then the needle is drawn away, its secret kept.', zh: '一对鸳鸯绣成，任人观看；金针却悄然收起，不肯暗度与人。' },
    },
  ],
});
