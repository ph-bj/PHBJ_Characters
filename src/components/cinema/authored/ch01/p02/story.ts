import { defineStory } from '../../define';

/** Chapter 1, paragraph 2 (一曰情中正…). The figures are the types the passage names, not characters. */
export default defineStory({
  title: { en: 'Ten kinds, one word', zh: '十种人物，一个情字' },
  description: {
    en: 'Painted in ink: ten lanterns along a gallery reveal the ten kinds of gentlemen; ten leading dan performers take the stage in the Pear Garden; thick ink and pale wash become one word: feeling. The figures are the types this passage names, not particular characters.',
    zh: '以水墨写之：长廊十灯，缙绅子弟十种情态；梨园水榭，十位名旦次第登场；浓淡两墨，终归一个“情”字。画中人物均为本段所写的类型，并非具体角色。',
  },
  shots: [
    {
      start: 0, end: 9.5,
      title: { en: 'Upright, aspiring, lofty, free, splendid', zh: '情中正·上·高·逸·华' },
      quote: '一曰情中正，一曰情中上，一曰情中高，一曰情中逸，一曰情中华',
      caption: { en: 'Along a gallery unrolled like a handscroll, each lantern is touched with vermilion and a gentleman is brushed in beside it: the upright, the aspiring, the lofty, the unfettered and the splendid.', zh: '长廊如卷徐徐展开，一灯一点朱砂，一人一笔水墨：正者端立，上者仰望，高者临石，逸者闲卧，华者拈花。' },
    },
    {
      start: 9.5, end: 19, cut: false,
      title: { en: 'Bold, wild, witty, gentle, joyful', zh: '情中豪·狂·趣·和·乐' },
      quote: '一曰情中豪，一曰情中狂，一曰情中趣，一曰情中和，一曰情中乐',
      caption: { en: 'The scroll unrolls further: the bold raise a wine bowl, the wild dance, the witty tease a caged bird, the gentle offer a cup, the joyful play the flute.', zh: '长卷续展：豪者举觥，狂者起舞，趣者逗鸟，和者奉杯，乐者吹笛。' },
    },
    {
      start: 19, end: 29,
      title: { en: 'Stars of the Pear Garden', zh: '梨园名旦' },
      quote: '再将梨园中名旦分作十种',
      caption: { en: 'On a water pavilion under pear blossom, ten leading dan performers take the stage one by one, each with a different flourish of the water sleeves.', zh: '梨花满树，水榭临波，十位名旦依次登场，水袖各呈一态。' },
    },
    {
      start: 29, end: 36,
      title: { en: 'Also one word: feeling', zh: '也是一个情字' },
      quote: '也是一个情字。',
      caption: { en: 'Thick ink for the gentlemen and a pale wash for the performers each settle into 情, then become one.', zh: '浓墨写缙绅，淡墨写名旦，各成一个“情”字，终又合而为一。' },
    },
  ],
});
