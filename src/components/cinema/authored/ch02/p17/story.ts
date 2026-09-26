import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 17. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：「比京里那些红相公怎样？」子玉笑道：「前日车里那两个，我皆目所未见，那个琴官更为难得，但
 *   不知此时在什么班里？」聘才道：「明日我出去打听，打听着了，我们去听他的戏。」子玉点头，再
 *   要问时，忽见灯光一亮，一个小丫头在门外说道：「太太叫请少爷早些睡罢。」子玉只得起身进去。
 *   这一宿就把聘才的话想了又想，又将车中所见模样神情，细细追摹一回，然后睡着。自此子玉待聘才
 *   更加亲厚。
 *
 * Translation: "How do they compare to the famed actors of the capital?" Ziyu smiled, "The two I saw in
 *   the carriage the other day surpass anything my eyes have ever beheld, with Qinguan being a
 *   rarity beyond measure. Yet, I wonder which troupe they have joined?" Pincai proposed, "I
 *   shall make inquiries tomorrow. Once I have word, we shall go and hear them perform." Ziyu
 *   nodded in agreement, but just as he was about to speak again, the light flared, and a young
 *   maidservant called from outside the door, "The mistress requests the young master to retire
 *   early." Ziyu had no choice but to rise and retreat to his chambers. Throughout the night,
 *   he pondered Pincai's words over and over, meticulously recalling every detail and
 *   expression he had witnessed in the carriage, before finally drifting off to sleep. From
 *   that day forth, Ziyu treated Pincai with ever greater warmth and familiarity.
 *
 * Staging: the promise, the maid at the door, and Ziyu awake with a remembered face.
 */
export default defineStory({
  title: { en: 'Recalling every detail', zh: '细细追摹' },
  description: {
    en: 'Pincai promises to find out which troupe the boys joined; a maid calls Ziyu to bed, where he recalls the boy’s face all night.',
    zh: '聘才答应打听戏班；小丫头请少爷早睡；子玉一夜细细追摹车中模样。',
  },
  shots: [
    {
      start: 0, end: 10,
      title: { en: 'I’ll find out tomorrow', zh: '明日我出去打听' },
      quote: '明日我出去打听，打听着了，我们去听他的戏。',
      caption: { en: 'Pincai will ask around tomorrow; once they know the troupe, they’ll go hear him.', zh: '聘才：明日出去打听，打听着了就去听他的戏。' },
    },
    {
      start: 10, end: 20,
      title: { en: '“Retire early”', zh: '请少爷早些睡罢' },
      quote: '忽见灯光一亮，一个小丫头在门外说道：「太太叫请少爷早些睡罢。」',
      caption: { en: 'The lamp flares; a little maid at the door: the mistress asks the young master to retire early.', zh: '灯光一亮，小丫头说：太太叫请少爷早些睡罢。' },
    },
    {
      start: 20, end: 36,
      title: { en: 'Over and over', zh: '想了又想' },
      quote: '这一宿就把聘才的话想了又想，又将车中所见模样神情，细细追摹一回',
      caption: { en: 'All night Ziyu turns Pincai’s words over and recalls every detail of the face in the cart.', zh: '子玉一宿把聘才的话想了又想，细细追摹车中所见模样。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 5, zh: '「比京里那些红相公怎样？」子玉笑道：「那个琴官更为难得。」', en: '“How do they compare to the capital’s famous actors?” Ziyu smiled: “Qinguan is a rarity beyond measure.”' },
    { start: 5, end: 9.6, zh: '聘才道：「明日我出去打听，打听着了，我们去听他的戏。」', en: 'Pincai: “I’ll inquire tomorrow, and once I know, we’ll go hear him.”' },
    { start: 10.4, end: 15, zh: '忽见灯光一亮，一个小丫头在门外说道：', en: 'Just then the lamp flared, and a little maid called from outside the door:' },
    { start: 15, end: 19.6, zh: '「太太叫请少爷早些睡罢。」子玉只得起身进去。', en: '“The mistress asks the young master to retire early.” Ziyu had to go in.' },
    { start: 20.4, end: 26, zh: '这一宿就把聘才的话想了又想，', en: 'All night he turned Pincai’s words over and over,' },
    { start: 26, end: 31, zh: '又将车中所见模样神情，细细追摹一回，然后睡着。', en: 'recalling every detail of the face in the carriage, before he fell asleep.' },
    { start: 31, end: 35.6, zh: '自此子玉待聘才更加亲厚。', en: 'From then on, Ziyu treated Pincai with ever greater warmth.' },
  ],
});
