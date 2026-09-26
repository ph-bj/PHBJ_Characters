import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 43.
 *
 * 原文：禀过萱堂，颜夫人见今日天气寒冷，起了朔风，且是冬月中旬，便叫家人媳妇取出副葡萄的猞猁裘与
 *   他穿了，吩咐车里也换了白狐暖围。两个小使：一个云儿，一个俊儿，骑了马，先到他表母舅王通政
 *   宅内，适值通政出门去了，通政的少君出来接进。这王通政的少君，名字单叫个恂字，号庸庵，年方
 *   二十二岁。
 *
 * Translation: Having informed his mother, Lady Yan noticed that the weather was freezing that day, with a
 *   sharp north wind blowing, and it being mid-winter, she had a servant woman bring out a
 *   grape-patterned lynx fur coat for him to wear. She also ordered the carriage interior
 *   changed to a warm white fox-fur lining. Two young pages, one named Yun'er and the other
 *   Jun'er, rode ahead on horseback. First, they went to the residence of his maternal uncle,
 *   the Commissioner Wang. As it happened, the Commissioner had gone out, but his eldest son
 *   came out to welcome him in. This young master of the Wang family had the single name Xun,
 *   was styled Yong'an, and was precisely twenty-two years old.
 *
 * Staged from tableau beats (cinema/beats/tableau.ts): Lady Yan and the fur coat, the cart and riders in the wind, and Wang Xun at his gate.
 */
export default defineStory({
  title: { en: 'A lynx fur against the north wind', zh: '葡萄猞猁裘' },
  description: {
    en: 'Lady Yan wraps Ziyu in lynx fur against the north wind; two pages ride ahead of his fox-lined cart to his uncle Wang’s house, where young Wang Xun welcomes him.',
    zh: '颜夫人为子玉披上猞猁裘；两个小使骑马先行，车到王通政宅，王恂出接。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'A grape-patterned lynx fur', zh: '葡萄猞猁裘' },
      quote: '便叫家人媳妇取出副葡萄的猞猁裘与他穿了',
      caption: { en: 'The weather is freezing; Lady Yan has a lynx fur coat brought for him and his cart lined with white fox.', zh: '天气寒冷，颜夫人取出葡萄猞猁裘与他穿，车里换了白狐暖围。' },
    },
    {
      start: 12, end: 26,
      title: { en: 'Riding into the north wind', zh: '起了朔风' },
      quote: '两个小使：一个云儿，一个俊儿，骑了马',
      caption: { en: 'Two pages, Yun’er and Jun’er, ride ahead; the cart follows through the north wind.', zh: '云儿、俊儿骑马先行，车随其后，朔风正紧。' },
    },
    {
      start: 26, end: 36,
      title: { en: 'Wang Xun comes out', zh: '少君出来接进' },
      quote: '适值通政出门去了，通政的少君出来接进。',
      caption: { en: 'The Commissioner is out; his son Wang Xun, styled Yong’an, twenty-two, welcomes Ziyu in.', zh: '通政出门，少君王恂，号庸庵，年二十二，出来接进。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '颜夫人见今日天气寒冷，起了朔风，且是冬月中旬，', en: 'Lady Yan saw the weather was freezing, a sharp north wind blowing in mid-winter,' },
    { start: 6, end: 11.6, zh: '便叫取出副葡萄的猞猁裘与他穿了，车里也换了白狐暖围。', en: 'and had a grape-patterned lynx fur brought for him, the carriage lined with white fox fur.' },
    { start: 12.4, end: 19, zh: '两个小使：一个云儿，一个俊儿，骑了马，', en: 'Two young pages, Yun’er and Jun’er, rode ahead on horseback.' },
    { start: 19, end: 25.6, zh: '先到他表母舅王通政宅内，', en: 'First they went to the residence of his uncle, Commissioner Wang.' },
    { start: 26.4, end: 31, zh: '适值通政出门去了，通政的少君出来接进。', en: 'The Commissioner had gone out, but his son came out to welcome him in.' },
    { start: 31, end: 35.6, zh: '这王通政的少君，名字单叫个恂字，号庸庵，年方二十二岁。', en: 'The young master was named Xun, styled Yong’an, twenty-two years old.' },
  ],
});
