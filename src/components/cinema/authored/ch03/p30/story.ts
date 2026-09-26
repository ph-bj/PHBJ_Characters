import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 30. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：那掌柜的又去安慰那相公，嘻嘻的笑说道：「春兰做什么与大老爷这么呕气，你瞧崭新的玄狐腿于溅了油
 *   了，快拿烧酒来擦。」就有伙计们拿了烧酒，掌柜的替他抹干净了。一面把那位奚老爷请了出来，另到一
 *   间屋子坐了，拉了那相公上前，劝他陪个不是。那相公只管哭，不肯陪礼，那姓奚的，见掌柜的如此张罗
 *   ，也有些过意不去，说道：「倒吵闹了你们。这孩子一天强似一天，令人生气。」那掌柜的倒代这相公请
 *   安作揖的在那里做花脸，那性奚的气也平了，那相公也住了哭。
 *
 * Translation: The proprietor went to console the actor and said with a giggling laugh, "Chunlan, why must
 *   you war with the Great Lord? Look at this magnificent new black fox-leg coat—it is
 *   splattered with grease! Quickly, fetch some spirits to clean it." Servants rushed forward
 *   with alcohol, and the proprietor meticulously scrubbed the fur clean. He then guided the
 *   seething Lord Xi into a fresh, private chamber, dragging the reluctant actor forward to
 *   offer an apology. Chunlan merely wept, stubbornly refusing to bow. Seeing the proprietor's
 *   frantic, groveling efforts, Lord Xi felt a flicker of embarrassment. "I have brought chaos
 *   to your establishment," he muttered. "This boy grows more insufferable by the day." The
 *   proprietor, acting as proxy, bowed deeply and repeatedly on the actor's behalf, successfully
 *   soothing the wealthy patron's wounded pride. Slowly, the actor's tears subsided.
 *
 * Staging: the fur cleaned with spirits in the courtyard; Xi led to a fresh room; the proprietor bowing and
 *   scraping between the weeping boy and the sulking patron.
 */
export default defineStory({
  title: { en: 'Spirits on the fox fur', zh: '快拿烧酒来擦' },
  description: {
    en: 'The proprietor, all smiles, fusses over Chunlan’s grease-spattered fox coat, rubbing it clean with spirits, and leads Xi into another room. Chunlan weeps and will not apologise; Xi, a little embarrassed, grumbles about the boy; the proprietor bows and scrapes on Chunlan’s behalf until the storm passes.',
    zh: '掌柜的笑劝春兰，拿烧酒替他擦玄狐腿子上的油；又请奚老爷另到一间屋子。春兰只管哭，不肯陪礼；姓奚的也有些过意不去；掌柜的代他请安作揖，气也平了，哭也住了。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'Grease on the fox fur', zh: '溅了油了' },
      quote: '你瞧崭新的玄狐腿于溅了油了，快拿烧酒来擦。',
      caption: { en: 'The proprietor coos over Chunlan’s new fox-leg coat, spattered with grease, and rubs it with spirits.', zh: '掌柜的说崭新的玄狐腿子溅了油，快拿烧酒来擦。' },
    },
    {
      start: 12, end: 24,
      title: { en: 'Another room', zh: '另到一间屋子' },
      quote: '把那位奚老爷请了出来，另到一间屋子坐了',
      caption: { en: 'Xi is ushered into another room; Chunlan, pulled in to apologise, only cries.', zh: '奚老爷被请到另一间屋子；春兰只管哭，不肯陪礼。' },
    },
    {
      start: 24, end: 36,
      title: { en: 'Bowing on his behalf', zh: '代这相公请安作揖' },
      quote: '那掌柜的倒代这相公请安作揖的在那里做花脸',
      caption: { en: 'The proprietor bows and scrapes for the boy until Xi calms down and Chunlan stops crying.', zh: '掌柜的代他请安作揖，奚十一气平了，春兰也住了哭。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '那掌柜的又去安慰那相公，嘻嘻的笑说道：「春兰做什么与大老爷这么呕气，', en: 'The proprietor went to soothe the boy, giggling: “Chunlan, why quarrel so with the Great Lord?' },
    { start: 6, end: 11.6, zh: '你瞧崭新的玄狐腿于溅了油了，快拿烧酒来擦。」掌柜的替他抹干净了。', en: 'Look, your brand-new fox-leg coat’s spattered with grease—quick, bring spirits!” and he wiped it clean.' },
    { start: 12.4, end: 18, zh: '一面把那位奚老爷请了出来，另到一间屋子坐了，拉了那相公上前，劝他陪个不是。', en: 'He ushered Lord Xi into another room and pulled the boy forward to apologise.' },
    { start: 18, end: 23.6, zh: '那相公只管哭，不肯陪礼。那姓奚的说道：「这孩子一天强似一天，令人生气。」', en: 'The boy only wept and would not. Xi said, “The boy gets more stubborn by the day—infuriating.”' },
    { start: 24.4, end: 35.6, zh: '那掌柜的倒代这相公请安作揖的在那里做花脸，那姓奚的气也平了，那相公也住了哭。', en: 'The proprietor bowed and scraped on the boy’s behalf, until Xi’s temper cooled and the boy stopped crying.' },
  ],
});
