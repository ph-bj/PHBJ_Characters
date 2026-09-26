import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 36. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：上了几样菜，文辉道：「这样清饮无趣，蕊香你出个令罢。」桂保道：「打擂最好，什么都放得进
 *   去。」孙亮功道：「完了！把个令祖宗请了来了。」文辉命人取了六个钱来。周锡爵道：「这杯分个
 *   大小才好。」杨方猷道：「我们两个一杯三开罢。「陆宗沅道：「未免太少些，你们一杯两开，我们
 *   都是一杯一开何如？」俱各依允。桂保伸出一个拳来，问文辉吃多少杯？
 *
 * Translation: After several dishes were served, Wenhui proposed, "Drinking plainly like this lacks
 *   flavor. Ruixiang, why don't you initiate a drinking game?" Guibao suggested, "The '擂'
 *   (lei/challenge) game is best, it accommodates any rule." Sun Lianggong groaned, "We are
 *   doomed! We have invited the very patriarch of drinking games." Wenhui instructed the
 *   servants to fetch six coins. Zhou Xijue advised, "This cup should be divided into larger
 *   and smaller portions." Yang Fangyou proposed, "Let the two of us split a cup three ways."
 *   Lu Zongyuan countered, "That seems too meager. Why don't you two divide a cup in half,
 *   while the rest of us take one full cup each? How does that sound?" Everyone nodded in
 *   agreement. Guibao extended a fist and asked Wenhui how many cups he wagered.
 *
 * Staging: the game proposed and the coins brought, then Guibao’s fist.
 */
export default defineStory({
  title: { en: 'A drinking game', zh: '出个令' },
  description: {
    en: 'Wenhui asks Guibao to lead a drinking game; Guibao chooses the challenge game, six coins are brought, the guests haggle over portions, and Guibao holds out his fist.',
    zh: '文辉请桂保出令；桂保说打擂，取了六个钱；众人议定杯数，桂保伸出拳来。',
  },
  shots: [
    {
      start: 0, end: 14,
      title: { en: 'The patriarch of games', zh: '令祖宗' },
      quote: '文辉道：「这样清饮无趣，蕊香你出个令罢。」……「完了！把个令祖宗请了来了。」',
      caption: { en: 'Plain drinking is dull; Guibao proposes the challenge game. “We’re doomed,” groans Lianggong, “we’ve invited the patriarch of games.”', zh: '文辉请桂保出令；桂保说打擂最好；亮功道：「完了！把个令祖宗请了来了。」' },
    },
    {
      start: 14, end: 36,
      title: { en: 'Six coins', zh: '六个钱' },
      quote: '文辉命人取了六个钱来……桂保伸出一个拳来',
      caption: { en: 'Six coins are fetched, the guests agree how to split their cups, and Guibao holds out a fist to Wenhui.', zh: '取了六个钱，议定大小杯；桂保伸出一个拳来问文辉。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4.6, zh: '上了几样菜，文辉道：「这样清饮无趣，蕊香你出个令罢。」', en: 'After several dishes, Wenhui said, “Plain drinking is dull. Ruixiang, start a drinking game.”' },
    { start: 4.6, end: 8.6, zh: '桂保道：「打擂最好，什么都放得进去。」', en: 'Guibao: “The challenge game is best—it takes any rule.”' },
    { start: 8.6, end: 13.6, zh: '孙亮功道：「完了！把个令祖宗请了来了。」', en: 'Sun Lianggong: “We’re doomed! We’ve invited the patriarch of drinking games.”' },
    { start: 14.4, end: 20, zh: '文辉命人取了六个钱来。周锡爵道：「这杯分个大小才好。」', en: 'Wenhui had six coins fetched. Zhou Xijue: “The cups should come in larger and smaller portions.”' },
    { start: 20, end: 27, zh: '陆宗沅道：「你们一杯两开，我们都是一杯一开何如？」俱各依允。', en: 'Lu Zongyuan: “You two split a cup in half; the rest of us take one each?” All agreed.' },
    { start: 27, end: 35.6, zh: '桂保伸出一个拳来，问文辉吃多少杯？', en: 'Guibao held out a fist and asked Wenhui how many cups he wagered.' },
  ],
});
