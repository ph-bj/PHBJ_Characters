import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 16. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：又听了一回戏，只见一个老头子弯着腰，颈脖上长着灰包似的一个大气瘤，手内托着一个小黄漆木盘，盘
 *   内盛着那许多玉器，还有些各样颜色的东西，口里轻轻的道：「买点玉器儿，瞧瞧玉器儿。」从人丛里走
 *   近聘才身边，一手捏着一个黄色鼻烟壶，对着聘才道：「买鼻烟壶儿。」聘才见这壶额色甚好，接过来看
 *   了一看，问要多少钱。那卖玉器的道：「这琥珀壶儿是旧的，老爷要使，拿去就结了。人家要，是十二两
 *   银，一厘不能少的。你能算十两银就是了。」聘才只道这壶儿不过数百文，今听他讨价，连忙送还。那卖
 *   玉器的便不肯接，道：「老爷既问价，必得还个价儿，你能瞧这壶儿又旧，膛儿又大，拿在手里又暖又不
 *   沉，很配你能使。你能总得还个价儿。」聘才没法，只得随口说道：「给你二两银子。」卖玉器的便把壶
 *   接了过去，说太少，买假的还不能。停一会又说：「罢了，今日第一回开张，老爷成心买，算六两银。」
 *   聘才摇着头说：「不要。」那卖玉器的叹口气道：「如今买卖也难做，南边老爷们也精明，你瞧这个琥珀
 *   壶儿卖二两银。算了，底下你能常照顾我就有了。」说着又把壶儿送过来。聘才身边没有带银子，因他讨
 *   价是十两，故意只还二两，是打算他必不肯卖的，谁知还价便卖，一时又缩不转来，只得呆呆的看戏，不
 *   理他，然脸已红了。
 *
 * Translation: As the opera continued, an elderly, stooped man approached. A grotesque, sack-like tumor
 *   hung heavily from his neck. In his hands, he carried a small, yellow-lacquered wooden tray
 *   brimming with jade trinkets and vividly colored curios. "Buy a piece of jade," he murmured
 *   softly. "Have a look at the jade." Threading through the dense crowd, he stopped beside
 *   Pincai, pinching a yellow snuff bottle between his fingers. "Care for a snuff bottle, sir?"
 *   Finding the color exceptionally rich, Pincai accepted the piece, turning it over in his
 *   hands before inquiring the price. The jade peddler replied, "This amber bottle is a genuine
 *   antique, sir. If it pleases you, take it. To anyone else, the price is twelve taels of
 *   silver—not a copper less. For you, I will part with it for ten." Pincai had assumed the
 *   trinket was worth no more than a few hundred cash; stunned by the exorbitant demand, he
 *   hastily offered it back. The peddler refused to take it, insisting, "Sir, having asked the
 *   price, you are bound by custom to make an offer. Look at this piece—it is aged, possesses a
 *   wide chamber, rests warmly in the palm, and has a pleasing heft. It suits a gentleman
 *   perfectly. You must, at the very least, offer a price." Cornered, Pincai threw out a
 *   careless sum: "Two taels of silver." The peddler snatched the bottle back, lamenting the
 *   offer was impossibly low—insufficient to buy even a crude imitation. After a calculated
 *   pause, he sighed, "Very well. You are my first customer of the day. If your intent is true,
 *   call it six taels." Pincai shook his head firmly, "No, thank you." The old man let out a
 *   mournful sigh, "Business is a bitter struggle these days, and the southern gentlemen are far
 *   too shrewd. Six taels for an antique amber bottle... fine, take it for two. I shall rely
 *   entirely upon your future patronage." He thrust the bottle back into Pincai's hands. Pincai,
 *   having brought no silver, had intentionally lowballed the exorbitant ten-tael asking price,
 *   certain the man would refuse. Caught entirely off guard by the acceptance, he found himself
 *   paralyzed, staring blankly at the stage, his face flushing crimson.
 *
 * Staging: the peddler working through the crowd; the bottle turned over in Pincai’s hand; the haggling;
 *   Pincai frozen as the bottle is pushed back at him.
 */
export default defineStory({
  title: { en: 'An amber snuff bottle', zh: '琥珀壶儿' },
  description: {
    en: 'A bent old man with a goitre hawks jade from a yellow lacquer tray and presses a snuff bottle on Pincai: twelve taels, ten for him. Pincai, meaning to put him off, offers two. After some grumbling the old man agrees—and Pincai, with no silver on him, sits staring at the stage, red in the face.',
    zh: '一个长着气瘤的老头托着玉器盘子，把鼻烟壶递给聘才，讨价十两。聘才只当他不卖，还了二两；他讨价还价一番，竟卖了。聘才没带银子，呆看戏，脸都红了。',
  },
  shots: [
    {
      start: 0, end: 9,
      title: { en: 'Jade for sale', zh: '买点玉器儿' },
      quote: '手内托着一个小黄漆木盘……口里轻轻的道：「买点玉器儿」',
      caption: { en: 'A bent old man with a goitre threads through the crowd, murmuring “jade, a look at the jade.”', zh: '一个弯腰长气瘤的老头托着黄漆盘，轻轻叫卖玉器。' },
    },
    {
      start: 9, end: 18,
      title: { en: '“Ten taels”', zh: '你能算十两银' },
      quote: '人家要，是十二两银……你能算十两银就是了。',
      caption: { en: 'An amber snuff bottle: twelve taels to anyone else, ten to him.', zh: '琥珀烟壶：别人十二两，给他算十两。' },
    },
    {
      start: 18, end: 27,
      title: { en: '“Two taels”', zh: '给你二两银子' },
      quote: '聘才没法，只得随口说道：「给你二两银子。」',
      caption: { en: 'Obliged to bid, Pincai says two, sure he’ll refuse.', zh: '聘才只得随口还二两，打算他必不肯卖。' },
    },
    {
      start: 27, end: 36,
      title: { en: 'Caught', zh: '脸已红了' },
      quote: '聘才身边没有带银子……然脸已红了。',
      caption: { en: '“Take it for two.” Pincai has no silver on him; he stares at the stage, red in the face.', zh: '「算了，卖给你。」聘才没带银子，只得呆看戏，脸已红了。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4.6, zh: '只见一个老头子弯着腰，颈脖上长着灰包似的一个大气瘤，手内托着一个小黄漆木盘，', en: 'A bent old man with a goitre like a grey sack at his neck, carrying a little yellow lacquer tray,' },
    { start: 4.6, end: 8.6, zh: '口里轻轻的道：「买点玉器儿，瞧瞧玉器儿。」', en: 'murmured, “Buy some jade, have a look at the jade.”' },
    { start: 9.4, end: 13.6, zh: '一手捏着一个黄色鼻烟壶，对着聘才道：「买鼻烟壶儿。」', en: 'He held out a yellow snuff bottle to Pincai: “A snuff bottle, sir?”' },
    { start: 13.6, end: 17.6, zh: '「这琥珀壶儿是旧的，人家要，是十二两银，你能算十两银就是了。」', en: '“Old amber. Twelve taels to anyone else—ten to you.”' },
    { start: 18.4, end: 22.6, zh: '「老爷既问价，必得还个价儿。」聘才没法，只得随口说道：「给你二两银子。」', en: '“Having asked, sir, you must make an offer.” Pincai, cornered, said, “Two taels.”' },
    { start: 22.6, end: 26.6, zh: '停一会又说：「罢了，今日第一回开张，老爷成心买，算六两银。」聘才摇头。', en: '“Well—first sale of the day—six taels.” Pincai shook his head.' },
    { start: 27.4, end: 31.6, zh: '「如今买卖也难做……算了，底下你能常照顾我就有了。」又把壶儿送过来。', en: '“Business is hard these days… fine, have it for two.” He pushed the bottle back.' },
    { start: 31.6, end: 35.6, zh: '聘才身边没有带银子，只得呆呆的看戏，不理他，然脸已红了。', en: 'Pincai had no silver on him; he stared at the stage and ignored him, his face already red.' },
  ],
});
