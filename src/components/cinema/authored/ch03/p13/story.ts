import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 13. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：那相公道：「你做什么使这样劲儿？」便侧转身向胖子坐了，一只手搭在胖子肩上。那先坐的两个相公，
 *   便跳将下去，摔着袖子走了。只听得那胖子说道：「蓉官，怎么两三月不见你的影儿？你也总不进城来瞧
 *   我，好个红相公。我前日在四香堂等你半天，你竟不来。是什么缘故呢？」那蓉宫脸上一红，即一手拉着
 *   那胖子的手道：「三老爷今日有气．前日四香堂叫我，我本要来的，实在腾不出这个空儿。天也迟了，一
 *   进城就出不得城。在你书房里住，原很好，三奶奶也很疼我，就听不得青姨奶奶骂小子，打丫头，摔这样
 *   ，砸那样，再和白姨奶奶打起架来，教你两边张罗不开。明儿早上，好晒我在书房里，你躲着不出来了。
 *   」
 *
 * Translation: The actor bristled slightly. "Why must you grip so fiercely?" he murmured, turning to sit
 *   facing the stout man, delicately resting one hand on his shoulder. The two actors who had
 *   arrived earlier promptly stood, flicked their sleeves in mild disdain, and departed. The
 *   stout man's voice boomed: "Rongguan, why has neither hide nor hair been seen of you these
 *   past two or three months? You never venture into the city to visit me, you sought-after
 *   darling. I waited half the day for you at Sixiang Hall, and you never showed. What is the
 *   meaning of this?" Rongguan's cheeks flushed a delicate pink. Taking the stout man's hand, he
 *   replied, "Third Master is in a foul temper today. When you summoned me to Sixiang Hall, I
 *   fully intended to come, but I simply could not slip away. By the time I could, it was
 *   late—once inside the city walls, one cannot easily leave. Residing in your study is a joy,
 *   and the Third Mistress dotes upon me. Yet, I cannot bear the clamor of Concubine Qing
 *   scolding the boys, beating the maids, and shattering porcelain, only to brawl with Concubine
 *   Bai. You are left caught in the middle, utterly helpless. And come morning, I am left
 *   stranded in the study while you hide away, refusing to show your face!"
 *
 * Staging: the hand on the shoulder; the two others leaving in a huff; the scolding; the household quarrel
 *   Rongguan describes, staged in the fat man’s inner rooms.
 */
export default defineStory({
  title: { en: 'Rongguan', zh: '蓉官' },
  description: {
    en: 'Rongguan turns to the fat man with a hand on his shoulder; the first two dan flounce off. The fat man scolds him for staying away; Rongguan blushes and blames the uproar in the man’s own house, where Concubine Qing beats the maids, smashes things and fights Concubine Bai.',
    zh: '蓉官转身搭着胖子肩膀；先坐的两个相公摔着袖子走了。胖子怪他许久不来，蓉官脸一红，说是府上青姨奶奶打丫头摔东西，又和白姨奶奶打架，叫人不敢住。',
  },
  shots: [
    {
      start: 0, end: 8,
      title: { en: '“Why so rough?”', zh: '做什么使这样劲儿' },
      quote: '那相公道：「你做什么使这样劲儿？」',
      caption: { en: 'He turns to the fat man, one hand on his shoulder.', zh: '他侧身向胖子坐了，一手搭在胖子肩上。' },
    },
    {
      start: 8, end: 14,
      title: { en: 'A flounce of sleeves', zh: '摔着袖子走了' },
      quote: '那先坐的两个相公，便跳将下去，摔着袖子走了。',
      caption: { en: 'The two dan who came first jump down and leave, flicking their sleeves.', zh: '先坐的两个相公跳下去，摔着袖子走了。' },
    },
    {
      start: 14, end: 24,
      title: { en: '“Where have you been?”', zh: '好个红相公' },
      quote: '蓉官，怎么两三月不见你的影儿？',
      caption: { en: '“Rongguan, not a glimpse of you in three months! I waited half a day at Sixiang Hall.”', zh: '「蓉官，两三月不见你的影儿，我在四香堂等你半天。」' },
    },
    {
      start: 24, end: 36,
      title: { en: 'Concubine Qing and Concubine Bai', zh: '青姨奶奶骂小子' },
      quote: '就听不得青姨奶奶骂小子，打丫头，摔这样，砸那样',
      caption: { en: 'Rongguan blushes: he can’t bear the house—Concubine Qing beating the maids and smashing things, then fighting Concubine Bai.', zh: '蓉官脸红：受不得青姨奶奶骂小子打丫头摔东西，再和白姨奶奶打起架来。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 7.6, zh: '那相公道：「你做什么使这样劲儿？」便侧转身向胖子坐了，一只手搭在胖子肩上。', en: '“Why so rough?” He turned to face the fat man, one hand on his shoulder.' },
    { start: 8.4, end: 13.6, zh: '那先坐的两个相公，便跳将下去，摔着袖子走了。', en: 'The two dan who had come first jumped down and left, flicking their sleeves.' },
    { start: 14.4, end: 19, zh: '胖子说道：「蓉官，怎么两三月不见你的影儿？你也总不进城来瞧我。', en: 'The fat man: “Rongguan, not a sign of you in two or three months! You never come into the city to see me.' },
    { start: 19, end: 23.6, zh: '我前日在四香堂等你半天，你竟不来。」那蓉官脸上一红。', en: 'I waited half a day for you at Sixiang Hall.” Rongguan flushed.' },
    { start: 24.4, end: 30, zh: '「在你书房里住，原很好，三奶奶也很疼我，就听不得青姨奶奶骂小子，打丫头，摔这样，砸那样，', en: '“Staying in your study is lovely, and the Third Mistress dotes on me—but Concubine Qing, scolding, beating the maids, smashing this and that,' },
    { start: 30, end: 35.6, zh: '再和白姨奶奶打起架来，教你两边张罗不开。」', en: 'and then brawling with Concubine Bai, with you caught helpless between them!”' },
  ],
});
