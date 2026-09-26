import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 23. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：富三道：「这人是那里人，姓什么？」蓉官道：「是广东人，我只听得人都称他奚大老爷，我也是才认识
 *   他。且他也到京未久，他就待春兰待得好。今日春兰身上穿那件玄狐腿子的，是奚大老爷身上脱下来，现
 *   叫毛毛匠改小的。」说罢即凑着富三耳边问了一句，富三道：「怎么你今日又有空儿？」蓉官笑嘻嘻的两
 *   手搭着富三的肩，把他揉了几揉。
 *
 * Translation: Fu asked, "Where is he from, and what is his name?" Rongguan replied softly, "He hails from
 *   Guangdong. I only hear him called Great Lord Xi, and I have only just made his acquaintance.
 *   He is new to the capital, yet he treats Chunlan with obsessive favor. That black fox-leg
 *   coat Chunlan wore today? Slipped right off Lord Xi's own back and sent straight to the
 *   furrier to be tailored down." Rongguan leaned in close, whispering something into Fu the
 *   Third's ear. Fu laughed, "How is it you find yourself with free time today?" Rongguan
 *   offered a radiant smile, resting both hands on Fu's shoulders and giving them a gentle,
 *   affectionate knead.
 *
 * Staging: Rongguan’s gossip at the table; the coat’s story in a furrier’s shop, cut down and tried on; the
 *   whisper; the shoulder rub.
 */
export default defineStory({
  title: { en: 'The black fox-leg coat', zh: '玄狐腿子' },
  description: {
    en: 'Who is he? A Cantonese, Rongguan says, called Great Lord Xi, new to the capital and besotted with Chunlan: the black fox-leg coat Chunlan wore today came off Xi’s own back and went straight to the furrier to be cut down. Then Rongguan whispers in Fu’s ear, and kneads his shoulders.',
    zh: '那人是谁？蓉官说是广东人，都称奚大老爷，到京未久，待春兰好：春兰今日穿的玄狐腿子，就是奚大老爷身上脱下来叫毛毛匠改小的。说罢凑着富三耳边问了一句，又揉他肩膀。',
  },
  shots: [
    {
      start: 0, end: 9,
      title: { en: 'Great Lord Xi', zh: '奚大老爷' },
      quote: '是广东人，我只听得人都称他奚大老爷',
      caption: { en: 'A Cantonese, Rongguan says, called Great Lord Xi, new in the capital.', zh: '蓉官：广东人，都称他奚大老爷，到京未久。' },
    },
    {
      start: 9, end: 20,
      title: { en: 'Cut down to size', zh: '毛毛匠改小' },
      quote: '是奚大老爷身上脱下来，现叫毛毛匠改小的',
      caption: { en: 'He dotes on Chunlan: the black fox-leg coat came off Xi’s own back and went to the furrier to be cut down.', zh: '他待春兰好：玄狐腿子是从奚大老爷身上脱下来，叫毛毛匠改小的。' },
    },
    {
      start: 20, end: 28,
      title: { en: 'A whisper', zh: '凑着富三耳边' },
      quote: '说罢即凑着富三耳边问了一句',
      caption: { en: 'Rongguan leans to Fu’s ear; “Free today, are you?” Fu laughs.', zh: '蓉官凑着富三耳边问了一句；富三笑：「今日又有空儿？」' },
    },
    {
      start: 28, end: 36,
      title: { en: 'A shoulder rub', zh: '揉了几揉' },
      quote: '蓉官笑嘻嘻的两手搭着富三的肩，把他揉了几揉。',
      caption: { en: 'Smiling, Rongguan rests both hands on Fu’s shoulders and kneads them.', zh: '蓉官两手搭着富三的肩，揉了几揉。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4.6, zh: '富三道：「这人是那里人，姓什么？」', en: 'Fu asked, “Where’s he from, and what’s his name?”' },
    { start: 4.6, end: 8.6, zh: '蓉官道：「是广东人，我只听得人都称他奚大老爷，且他也到京未久。」', en: '“Canton. I only hear him called Great Lord Xi—he’s new to the capital.”' },
    { start: 9.4, end: 14, zh: '「他就待春兰待得好。今日春兰身上穿那件玄狐腿子的，', en: '“He treats Chunlan very well. That black fox-leg coat Chunlan had on today—' },
    { start: 14, end: 19.6, zh: '是奚大老爷身上脱下来，现叫毛毛匠改小的。」', en: 'it came off Lord Xi’s own back, and went to the furrier to be cut down.”' },
    { start: 20.4, end: 27.6, zh: '说罢即凑着富三耳边问了一句，富三道：「怎么你今日又有空儿？」', en: 'He leaned to Fu’s ear and whispered something. Fu: “So you’re free today, are you?”' },
    { start: 28.4, end: 35.6, zh: '蓉官笑嘻嘻的两手搭着富三的肩，把他揉了几揉。', en: 'Rongguan, smiling, put both hands on Fu’s shoulders and kneaded them.' },
  ],
});
