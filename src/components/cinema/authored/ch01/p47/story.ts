import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 47.
 *
 * 原文：王恂道：「你见竹君的《花选》怎样，还是选得不公呢，还是太少，有遗珠之撼么？好的呢也还有
 *   些。但总不及这八个，这是万选青钱。若要说尽他们的好处，除非与他们一人序一本年谱才能清楚，
 *   这几句话还不过略述大概而已。」子玉心里甚异：「难道现在真有这些人？」又想：「这三人也不是
 *   容易说人好的，何以说到这几个小旦，都是心口如一。总要眼见了才信不然总是他们的偏见。」便说
 *   道：「我恰不常听戏，是以疏于物色。你何不同我去听两出戏，使我广广眼界？」王恂道：「很
 *   好。」即吩咐套了车，备了马，就随身便服。子玉也叫云儿拿便帽来换了。王恂道：「那《花选》联
 *   锦有六个，联珠只有两个，自然听联锦了。」即同子玉到了戏园。子玉一进门，见人山人海坐满了一
 *   园，便有些懊悔，不愿进去。王恂引他从人缝里侧着身子挤到了台口，子玉见满池子坐的，没有一个
 *   好人，楼上楼下，略还有些象样的。看座儿的，见两位阔少爷来，后头跟班夹着狼皮褥子，便腾出了
 *   一张桌子，铺上褥子，与他们坐了，送上茶、香火。此刻是唱的《三国演义》，锣鼓盈天，好不热
 *   闹。王恂留心非但那六旦之中不见一个，就有些中等的也不丸，身边走来走去的，都是些黑相公，川
 *   流不息四处去找吃饭的老斗。
 *
 * Translation: Wang Xun continued, "What do you think of Zhujun's 'Selection of Flowers'? Was the
 *   selection unfair, or too narrow, leaving behind uncollected pearls? There are certainly
 *   other good ones out there. But they simply cannot compare to these eight; these are coin
 *   that would pass any assay, ten thousand times chosen. If one were to fully articulate their
 *   virtues, it would require writing a separate biographical chronology for each to make it
 *   clear. These few words barely outline the broad strokes." Ziyu felt highly intrigued in his
 *   heart. "Could such people truly exist now?" He thought again, "These three men do not
 *   easily praise others. How is it that when speaking of these few young dan, their hearts and
 *   mouths are so aligned? I must see them with my own eyes to believe it; otherwise, it is
 *   merely their shared prejudice." He then said, "I happen not to listen to plays often, and
 *   so I am poor at seeking out such figures. Why don't you take me to hear a couple of plays
 *   and broaden my horizons?" Wang Xun agreed, "Very well." He ordered a carriage prepared and
 *   horses saddled, and they changed into casual attire. Ziyu also had Yun'er fetch a casual
 *   hat to change into. Wang Xun noted, "The 'Selection of Flowers' lists six from Lianjin and
 *   only two from Lianzhu, so naturally we shall go hear Lianjin." They then headed to the
 *   theater together. Upon entering, Ziyu saw a sea of humanity, the theater packed to the
 *   brim, and felt a surge of regret, not wishing to go further. Wang Xun guided him, squeezing
 *   sideways through the gaps in the crowd to the edge of the stage. Looking around, Ziyu saw
 *   not a single decent-looking person sitting in the pit; only upstairs and downstairs were
 *   there a few who looked somewhat presentable. The usher, seeing two wealthy young masters
 *   arrive with servants carrying wolf-skin cushions behind them, quickly cleared a table, laid
 *   out the cushions, seated them, and served tea and a glowing incense coil. At that moment,
 *   they were performing "The Romance of the Three Kingdoms." The gongs and drums deafened the
 *   heavens, creating a tremendous racket. Wang Xun looked carefully but could not spot a
 *   single one of those six young dan, nor even any of the middle-tier ones. The people milling
 *   about them were all dark-faced young male escorts, flowing endlessly in all directions
 *   looking for wealthy patrons to buy them meals.
 *
 * Staged from tableau beats (cinema/beats/tableau.ts): the cousins deciding, the cart setting out, the packed theatre, and hustlers milling around their table.
 */
export default defineStory({
  title: { en: 'To the theatre', zh: '同到戏园' },
  description: {
    en: 'Wang Xun takes Ziyu to hear the Lianjin troupe: a packed pit, Three Kingdoms drums, and none of the eight actors in sight.',
    zh: '王恂带子玉去听联锦班：满园人山人海，锣鼓喧天，八旦一个不见。',
  },
  shots: [
    {
      start: 0, end: 8,
      title: { en: 'Broaden my horizons', zh: '广广眼界' },
      quote: '你何不同我去听两出戏，使我广广眼界？',
      caption: { en: 'Wang Xun praises the eight; Ziyu, intrigued, asks to be taken to a play.', zh: '王恂盛赞八人；子玉心异，请他同去听戏。' },
    },
    {
      start: 8, end: 15,
      title: { en: 'Off to the Lianjin', zh: '自然听联锦了' },
      quote: '即吩咐套了车，备了马，就随身便服。',
      caption: { en: 'Carriage harnessed, horses saddled, in casual dress: six of the eight are in the Lianjin troupe.', zh: '套车备马，换了便服；八人中联锦有六个，自然听联锦。' },
    },
    {
      start: 15, end: 26,
      title: { en: 'A sea of people', zh: '人山人海' },
      quote: '子玉一进门，见人山人海坐满了一园……锣鼓盈天，好不热闹。',
      caption: { en: 'The theatre is packed; they squeeze to the stage’s edge. The Three Kingdoms is on, gongs and drums deafening.', zh: '人山人海，挤到台口；正唱《三国演义》，锣鼓盈天。' },
    },
    {
      start: 26, end: 36,
      title: { en: 'Dark-faced escorts', zh: '黑相公' },
      quote: '身边走来走去的，都是些黑相公',
      caption: { en: 'No sign of the six actors—only dark-faced escorts flowing past, hunting for patrons.', zh: '六旦不见一个，身边川流不息的都是黑相公。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4, zh: '王恂道：「好的呢也还有些，但总不及这八个，这是万选青钱。」', en: 'Wang Xun: “There are other good ones, but none compare to these eight—ten thousand times chosen.”' },
    { start: 4, end: 7.6, zh: '子玉便说道：「你何不同我去听两出戏，使我广广眼界？」', en: 'Ziyu said, “Why not take me to hear a couple of plays and broaden my horizons?”' },
    { start: 8.4, end: 14.6, zh: '即吩咐套了车，备了马。王恂道：「联锦有六个，联珠只有两个，自然听联锦了。」', en: 'Carriage and horses were readied. “Six are from Lianjin and only two from Lianzhu—naturally we hear Lianjin.”' },
    { start: 15.4, end: 20.4, zh: '子玉一进门，见人山人海坐满了一园，便有些懊悔。', en: 'Entering, Ziyu saw a sea of humanity packing the theatre, and felt a surge of regret.' },
    { start: 20.4, end: 25.6, zh: '此刻是唱的《三国演义》，锣鼓盈天，好不热闹。', en: 'They were performing “The Romance of the Three Kingdoms”; gongs and drums deafened the heavens.' },
    { start: 26.4, end: 31, zh: '王恂留心非但那六旦之中不见一个，', en: 'Wang Xun looked carefully, but could not spot a single one of the six,' },
    { start: 31, end: 35.6, zh: '身边走来走去的，都是些黑相公，四处去找吃饭的老斗。', en: 'only dark-faced escorts flowing endlessly past, looking for wealthy patrons.' },
  ],
});
