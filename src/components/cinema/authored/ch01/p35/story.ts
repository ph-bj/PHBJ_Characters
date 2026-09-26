import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 35. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：我想此辈中人，断无全壁，以色事人，不求其媚，必求其馅。况朝秦暮楚，酒食自娱，强笑假欢，缠
 *   头是爱。此身既难自洁，而此志亦为太卑。再兼之生于贫贱，长在卑污，耳目既狭，胸次日小，所学
 *   者婶膝奴颜，所工者谑浪笑傲。就使涂泽为工，描摹得态，也不过上台时效个麒麟楦，充个没字碑。
 *
 * Translation: I believe that among such people, there absolutely cannot be a flawless piece of jade.
 *   Since they serve others with their looks, if they do not seek to charm, they must seek to
 *   flatter. Furthermore, shifting their allegiances from morning to night, amusing themselves
 *   with wine and food, forcing smiles and feigning joy, their only true love is the money
 *   thrown at them. Since their bodies can hardly remain pure, their aspirations are
 *   correspondingly far too base. Add to this that they are born in poverty and raised in
 *   filth; their exposure is narrow, and their minds grow smaller by the day. What they study
 *   is how to bend the knee and wear a slavish face; what they excel at is frivolous banter and
 *   arrogant jesting. Even if their makeup is expertly applied and their mimicry captures the
 *   correct posture, they are merely donning the hide of a Qilin or standing on stage as blank
 *   as an uninscribed monument — all surface and nothing written.
 *
 * Staging: Ziyu arguing in the study, an actor fawning over a patron, and a blank stele.
 */
export default defineStory({
  title: { en: 'No flawless jade', zh: '断无全璧' },
  description: {
    en: 'Ziyu’s case against the actors: they serve with their looks, feign joy for money, and on stage are blank monuments.',
    zh: '子玉论小旦：以色事人，强笑假欢，缠头是爱，上台不过麒麟楦、没字碑。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'Serving with their looks', zh: '以色事人' },
      quote: '我想此辈中人，断无全壁，以色事人，不求其媚，必求其馅。',
      caption: { en: 'Ziyu: among such people there is no flawless jade; serving with their looks, they charm or they flatter.', zh: '子玉：此辈断无全璧，以色事人，不媚必谄。' },
    },
    {
      start: 12, end: 24,
      title: { en: 'Their only love is money', zh: '缠头是爱' },
      quote: '强笑假欢，缠头是爱。',
      caption: { en: 'Forcing smiles, feigning joy, their only love the money thrown at them.', zh: '强笑假欢，缠头是爱。' },
    },
    {
      start: 24, end: 36,
      title: { en: 'A monument with no inscription', zh: '没字碑' },
      quote: '也不过上台时效个麒麟楦，充个没字碑。',
      caption: { en: 'However well made up, on stage they are a qilin’s hide over a donkey, a stele with nothing written.', zh: '纵使涂泽为工，上台不过麒麟楦、没字碑。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '我想此辈中人，断无全璧。以色事人，不求其媚，必求其谄。', en: 'Among such people there cannot be a flawless jade. Serving with their looks, they charm or they flatter.' },
    { start: 6, end: 11.6, zh: '况朝秦暮楚，酒食自娱，', en: 'Shifting allegiances morning and night, amusing themselves with wine and food,' },
    { start: 12.4, end: 18, zh: '强笑假欢，缠头是爱。此身既难自洁，而此志亦为太卑。', en: 'forcing smiles and feigning joy, loving only the money thrown to them; their aspirations far too base.' },
    { start: 18, end: 23.6, zh: '所学者婢膝奴颜，所工者谑浪笑傲。', en: 'They study how to bend the knee; they excel at frivolous banter.' },
    { start: 24.4, end: 29.4, zh: '就使涂泽为工，描摹得态，', en: 'Even if their makeup is expert and their mimicry apt,' },
    { start: 29.4, end: 35.6, zh: '也不过上台时效个麒麟楦，充个没字碑。', en: 'on stage they merely don a qilin’s hide, or stand as blank as an uninscribed monument.' },
  ],
});
