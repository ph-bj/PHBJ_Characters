import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 37. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：其骨节少文，举动皆俗。故色虽美而不华，肌虽白而不洁，神虽妍而不清，气虽柔而不秀。有此数
 *   病，焉得为佳？若夫红闺弱质，金屋丽姝。质秉纯阴，体含至静，故骨柔肌腻，肤洁血荣，神气静
 *   息，仪态婉娴。眉目自见其清扬，声音自成其娇细。姿致动作，妙出自然。鬓影衣香，无须造作，方
 *   可称为美人，为佳人。今以红氍毹上演古之绝代倾城，真所谓刻画无盐，唐突西子。
 *
 * Translation: Their bones lack culture; their every movement is vulgar. Thus, though their coloring may
 *   be beautiful, it is not radiant; though their skin may be white, it is not pure; though
 *   their spirit may be pretty, it is not clear; though their aura may be soft, it is not
 *   elegant. Afflicted by these several flaws, how can they be considered excellent? As for the
 *   delicate maidens of the red boudoirs and the beautiful women hidden in golden houses, their
 *   nature is rooted in pure yin, and their bodies contain ultimate stillness. Therefore, their
 *   bones are soft, their skin smooth, their flesh pure, and their blood vibrant. Their spirits
 *   are tranquil; their demeanor graceful and refined. Their eyebrows and eyes naturally reveal
 *   a clear brightness, and their voices naturally form a delicate sweetness. Their posture and
 *   movements are wondrously natural. The shadow of their hair and the fragrance of their
 *   garments require no artificial fabrication—only then can they be called beauties, called
 *   exquisite women. Now, to place them on the red carpet to enact the peerless beauties of
 *   antiquity is truly, as the saying goes, trying to paint Wuyan to look like Xishi, deeply
 *   insulting the true beauty of the past.
 *
 * Staging: four flaws written beside a faint actor, a lady in her boudoir, and Ziyu’s verdict on a scroll.
 */
export default defineStory({
  title: { en: 'True beauties of the boudoir', zh: '红闺弱质' },
  description: {
    en: 'Ziyu lists the actors’ flaws, praises the natural grace of real women, and calls their stage heroines an insult to Xishi.',
    zh: '子玉数小旦之病，赞红闺佳人天然之美，谓以小旦演古之绝色，唐突西子。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'Beautiful but not radiant', zh: '色美不华' },
      quote: '故色虽美而不华，肌虽白而不洁，神虽妍而不清，气虽柔而不秀。',
      caption: { en: 'Their coloring is beautiful but not radiant, their skin white but not pure, their spirit pretty but not clear.', zh: '色美而不华，肌白而不洁，神妍而不清，气柔而不秀。' },
    },
    {
      start: 12, end: 26,
      title: { en: 'Maidens of the red boudoir', zh: '红闺弱质' },
      quote: '若夫红闺弱质，金屋丽姝……方可称为美人，为佳人。',
      caption: { en: 'The maidens of the boudoir: tranquil spirits, natural grace, no artifice—only they are true beauties.', zh: '红闺弱质，金屋丽姝，神气静息，妙出自然，方可称为佳人。' },
    },
    {
      start: 26, end: 36,
      title: { en: 'An insult to Xishi', zh: '唐突西子' },
      quote: '今以红氍毹上演古之绝代倾城，真所谓刻画无盐，唐突西子。',
      caption: { en: 'To have actors play the great beauties of old is to paint Wuyan as Xishi—an insult to true beauty.', zh: '以小旦演古之绝代倾城，真是刻画无盐，唐突西子。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 5, zh: '其骨节少文，举动皆俗。', en: 'Their bones lack culture; their every movement is vulgar.' },
    { start: 5, end: 11.6, zh: '故色虽美而不华，肌虽白而不洁，神虽妍而不清，气虽柔而不秀。', en: 'Their coloring is not radiant, their skin not pure, their spirit not clear, their aura not elegant.' },
    { start: 12.4, end: 17, zh: '若夫红闺弱质，金屋丽姝，质秉纯阴，体含至静，', en: 'The delicate maidens of the red boudoirs, the beauties of golden houses, rooted in pure stillness—' },
    { start: 17, end: 21.6, zh: '眉目自见其清扬，声音自成其娇细。姿致动作，妙出自然。', en: 'their eyes are naturally bright, their voices naturally sweet, their movements wondrously natural.' },
    { start: 21.6, end: 25.6, zh: '鬓影衣香，无须造作，方可称为美人，为佳人。', en: 'Needing no artifice—only they can be called true beauties.' },
    { start: 26.4, end: 31, zh: '今以红氍毹上演古之绝代倾城，', en: 'To enact the peerless beauties of antiquity on the red carpet' },
    { start: 31, end: 35.6, zh: '真所谓刻画无盐，唐突西子。', en: 'is truly to paint Wuyan as Xishi, deeply insulting true beauty.' },
  ],
});
