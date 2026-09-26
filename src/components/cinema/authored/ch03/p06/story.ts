import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 6. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：到了账房，见叶茂林同着个白胖面生的人在那里坐着，见聘才进来，都站起了，上前拉手问好。聘才道：
 *   「叶先生到此有何贵干？」时茂林笑嘻嘻的道：「晓得尊驾在此，特来请安的。」聘才知道他是顺口的话
 *   ，便道：「我还没有来奉拜，倒先劳你的驾过来。」又问：「那位贵姓？」叶茂林道：「这是我们大掌班
 *   金二爷，来请梅大人定戏的。」聘才待再问时，只见许顺从上头下来说道：「大人吩咐，既是正月初五以
 *   前都有人定下，初六七也使得，就是不许分包。」那金二道：「不分包这句话，却不敢答应。正月里的戏
 *   ，不要说我们联锦班，就是差不多的班子，那一天不分三包两包。许二爷劳你驾，再回一声罢。」许顺道
 *   ：「已经回过了，是这么吩咐下来，再去回时，也是白碰钉子。要不然，到王大人那里去商量罢。」金二
 *   道：「这日子呢？」许顺道：「一发和王大人商量，不拘初六初七，定一天就是了。」叶茂林道：「到王
 *   大人宅子去回来，还要在此地经过。不如我在此等一等，你同许二爷去说结了，回来同走罢。」金二道：
 *   「也好。」便同许顺去了。叶茂林即问聘才：「可曾看过京里的戏？」聘才回说：「没有。」茂林就说行
 *   头怎样新鲜，脚色怎样齐全，小旦怎样装束好看，园子里怎样热闹，堂会戏怎样排场，说得聘才十分高兴
 *   。问起同船的人来，知琴官在曹长庆处，现今患了几天病，也渐渐好了。
 *
 * Translation: Upon entering the accounts room, he found Ye Maolin seated beside an unfamiliar, pale, and
 *   stout gentleman. At Pincai's entrance, both men rose to greet him warmly. Pincai asked,
 *   "Master Ye, what brings you to our humble residence?" Maolin beamed, "Knowing Your
 *   Excellency was here, I came especially to pay my respects." Sensing the polite fiction,
 *   Pincai replied, "I have yet to call upon you, and here you have troubled yourself to visit
 *   me first." He then gestured to the stranger, "And your honorable companion?" Ye Maolin
 *   introduced him: "This is Master Jin the Second, the head manager of our troupe. He has come
 *   to invite Lord Mei to arrange a performance." Before Pincai could inquire further, Xu Shun
 *   descended the stairs, announcing: "The Master has decreed that since the first five days of
 *   the New Year are already booked, the sixth or seventh will suffice—provided there is no
 *   splitting of contracts." Master Jin sighed, "'No splitting' is a promise I dare not make.
 *   During the first month of the year, let alone our Lianjin Troupe, any decent company must
 *   split its performances two or three ways a day. Master Xu, I must trouble you to relay this
 *   once more." Xu Shun shook his head: "The word has been given; returning to press the matter
 *   would only invite a rebuff. Better to negotiate directly with Lord Wang." Jin asked, "And
 *   the date?" Xu Shun replied, "Settle all matters with Lord Wang. The sixth or the
 *   seventh—simply fix a day and be done with it." Ye Maolin added, "On your way back from Lord
 *   Wang's residence, you must pass by here. I shall wait; you and Master Xu can finalize the
 *   terms, and we can depart together." Master Jin agreed, departing with Xu Shun. Turning to
 *   Pincai, Ye Maolin asked, "Have you yet attended the theater in the capital?" Pincai
 *   confessed he had not. Maolin launched into an effusive description—of the dazzling costumes,
 *   the masterful casts, the exquisite attire of the dan actors, the vibrant atmosphere of the
 *   playhouses, and the opulent grandeur of private banquets. Pincai listened, thoroughly
 *   enchanted. Inquiring after their fellow passengers from the boat, he learned that Qinguan
 *   was residing with Cao Changqing; having suffered a brief illness, he was now on the mend.
 *
 * Staging: the visitors rising in the accounts room; Xu Shun coming down with the master’s terms and Jin’s
 *   protest; Ye’s talk as a vision of a playhouse in full cry; Qinguan in a sickroom, sitting up.
 */
export default defineStory({
  title: { en: 'Booking the troupe', zh: '定戏' },
  description: {
    en: 'Ye Maolin has come with the troupe’s pale, stout manager Jin the Second to book a performance for Lord Mei; the steward relays “no splitting the bill,” Jin balks, and is sent on to Lord Wang. Ye paints the capital’s theatres for Pincai, and tells him Qinguan, lodged with Cao Changqing, is getting over an illness.',
    zh: '叶茂林同联锦班大掌班金二来请梅大人定戏；许顺传话不许分包，金二不敢答应，被打发到王大人处商量。茂林把京里的戏说得天花乱坠，又说琴官在曹长庆处病了几天，渐渐好了。',
  },
  shots: [
    {
      start: 0, end: 8,
      title: { en: 'Master Ye and Master Jin', zh: '叶茂林同着个白胖面生的人' },
      quote: '见叶茂林同着个白胖面生的人在那里坐着',
      caption: { en: 'In the accounts room Ye Maolin and a pale, stout stranger rise to greet Pincai.', zh: '账房里，叶茂林同一个白胖面生的人站起来拉手问好。' },
    },
    {
      start: 8, end: 18,
      title: { en: '“No splitting the bill”', zh: '就是不许分包' },
      quote: '大人吩咐……就是不许分包。',
      caption: { en: 'Xu Shun brings the master’s terms; Jin the Second cannot promise that, and is sent on to Lord Wang.', zh: '许顺传话不许分包；金二不敢答应，许顺叫他去王大人那里商量。' },
    },
    {
      start: 18, end: 28,
      title: { en: 'The capital’s theatres', zh: '京里的戏' },
      quote: '行头怎样新鲜，脚色怎样齐全，小旦怎样装束好看',
      caption: { en: 'Ye describes the new costumes, full casts, lovely dan and noisy playhouses, and Pincai is enchanted.', zh: '茂林说行头新鲜、脚色齐全、小旦好看、园子热闹，聘才十分高兴。' },
    },
    {
      start: 28, end: 36,
      title: { en: 'Qinguan has been ill', zh: '琴官在曹长庆处' },
      quote: '知琴官在曹长庆处，现今患了几天病，也渐渐好了。',
      caption: { en: 'Qinguan is lodged with Cao Changqing; he has been ill a few days and is mending.', zh: '琴官在曹长庆处，病了几天，渐渐好了。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4.6, zh: '到了账房，见叶茂林同着个白胖面生的人在那里坐着，都站起了，上前拉手问好。', en: 'In the accounts room sat Ye Maolin and a pale, stout stranger; both rose to greet him.' },
    { start: 4.6, end: 7.6, zh: '叶茂林道：「这是我们大掌班金二爷，来请梅大人定戏的。」', en: '“This is Master Jin, our troupe’s manager, come to book a play for Lord Mei.”' },
    { start: 8.4, end: 12.6, zh: '许顺下来说道：「大人吩咐，初六七也使得，就是不许分包。」', en: 'Xu Shun came down: “The master says the sixth or seventh will do—but no splitting the bill.”' },
    { start: 12.6, end: 17.6, zh: '金二道：「不分包这句话，却不敢答应。」许顺道：「到王大人那里去商量罢。」', en: 'Jin: “No splitting—that I dare not promise.” Xu Shun: “Then take it up with Lord Wang.”' },
    { start: 18.4, end: 23, zh: '叶茂林问聘才：「可曾看过京里的戏？」聘才回说：「没有。」', en: '“Have you seen the capital’s theatre yet?” asked Ye. Pincai had not.' },
    { start: 23, end: 27.6, zh: '茂林就说行头怎样新鲜，脚色怎样齐全，小旦怎样装束好看，园子里怎样热闹。', en: 'Maolin told of the fresh costumes, the full casts, the lovely dan, the bustling playhouses.' },
    { start: 28.4, end: 35.6, zh: '问起同船的人来，知琴官在曹长庆处，现今患了几天病，也渐渐好了。', en: 'Asking after their fellow passengers, Pincai learned Qinguan was with Cao Changqing, and recovering from an illness.' },
  ],
});
