import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 5. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：若论相貌，我看世界上未必赛得过琴官。」重新又将这八个人的光景逐一摹拟一番，又牢牢的记了一记。
 *   只见四儿跑进来说道：「同路来的叶先生找少爷说话，现在账房里。」聘才说：「这也奇了，他怎的到这
 *   里来。」就将《花谱》在梳头底下，带上房门出来。
 *
 * Translation: "As for sheer physical grace, I doubt anyone in this world could eclipse Qinguan." He closed
 *   his eyes, vividly summoning the images of the eight performers described, etching them into
 *   his mind. Just then, Si'er came running in, breathless: "Master Ye, who traveled with you on
 *   the boat, is looking for the young master—he is waiting in the accounts room." Pincai
 *   remarked, "How curious—why would he come here?" He slid the Opera Stage Flower Manual
 *   beneath his dressing box, latched the door behind him, and made his way out.
 *
 * Staging: the eight circling Pincai as he pictures them; Si’er bursting in; the book hidden, the door
 *   latched, Pincai crossing the courtyard.
 */
export default defineStory({
  title: { en: 'A visitor from the boat', zh: '同路来的叶先生' },
  description: {
    en: 'For looks, Pincai decides, no one beats Qinguan. He is picturing the eight again when Si’er runs in: Ye Maolin from the boat is waiting in the accounts room. Pincai hides the Manual under his dressing box, latches the door and goes.',
    zh: '聘才认定论相貌无人赛得过琴官，正摹拟八人光景，四儿跑来说叶先生在账房等候；他把《花谱》塞在梳头匣下，带上门出去。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'None to match Qinguan', zh: '未必赛得过琴官' },
      quote: '若论相貌，我看世界上未必赛得过琴官。',
      caption: { en: 'For looks, none in the world can match Qinguan; he pictures the eight once more.', zh: '论相貌，世上未必赛得过琴官；又将八人光景摹拟一番。' },
    },
    {
      start: 12, end: 24,
      title: { en: 'Si’er runs in', zh: '四儿跑进来' },
      quote: '只见四儿跑进来说道：「同路来的叶先生找少爷说话」',
      caption: { en: 'Si’er runs in: Master Ye from the boat is asking for him in the accounts room.', zh: '四儿跑来说：同路来的叶先生在账房找少爷。' },
    },
    {
      start: 24, end: 36,
      title: { en: 'Under the dressing box', zh: '放在梳头匣底下' },
      quote: '就将《花谱》在梳头底下，带上房门出来。',
      caption: { en: 'He slides the Manual under his dressing box, latches the door and goes out.', zh: '把《花谱》塞在梳头匣下，带上房门出去。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 5, zh: '「若论相貌，我看世界上未必赛得过琴官。」', en: '“As for looks, I doubt anyone in the world can match Qinguan.”' },
    { start: 5, end: 11.6, zh: '重新又将这八个人的光景逐一摹拟一番，又牢牢的记了一记。', en: 'He pictured the eight once more, one by one, and fixed them firmly in his mind.' },
    { start: 12.4, end: 18, zh: '只见四儿跑进来说道：「同路来的叶先生找少爷说话，现在账房里。」', en: 'Si’er ran in: “Master Ye, who came with you on the boat, is asking for you in the accounts room.”' },
    { start: 18, end: 23.6, zh: '聘才说：「这也奇了，他怎的到这里来。」', en: '“How odd,” said Pincai. “What brings him here?”' },
    { start: 24.4, end: 35.6, zh: '就将《花谱》在梳头底下，带上房门出来。', en: 'He slid the Manual under his dressing box, latched the door, and went out.' },
  ],
});
