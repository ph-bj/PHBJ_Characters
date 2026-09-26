import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 29. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：蓉官道：「那奚老爷的爷们，好不利害，将这老王推推搡搡的，我怕跌了他，把他那浪盘子的臭杂碎全砸
 *   了，不绝了他的命？倒幸亏没有砸掉多少，只砸了两个料嘴子，一个料烟壶。有一个爷们更恶，在他脖子
 *   那个灰包上一扌叉，那老王噎了一口气，两个白眼珠一翻，好不怕人。这个奚大老爷的性子也太暴，适或
 *   扌叉死了他，也要偿命的。」蓉官说到此，只听得隔壁雅座里闹起来，听得一人骂道：「鸡巴攘的，又装
 *   腔做作了。」蓉官低低的说道：「不好了，那位奚大老爷又翻了，不知骂谁？」便到板壁缝里去望他们。
 *   这边聘才与富三、贵大都静悄悄的听，听得一个相公说道：「你倒开口就骂人。好便宜的鸡巴，做起菜来
 *   ，你口里还吃不尽呢。」听得那人又骂道：「我最恨那装腔做作的，一天一个样子。」又听得那相公说道
 *   ：「就算我装腔做作了，你也不能打死了我。」又听得那人骂道：「我倒不打死你，我想攘死你。」听得
 *   当啷一声，砸了一个酒杯。那人又说道：「这声音响得小，要砸砸大的。」听得那相公说道：「你爱听响
 *   的。」便又一声响，砸破了一个大碗。那人道：「你会砸，我不会砸？」也砸了一个。那相公道：「你爱
 *   砸，谁又拦你不砸。」便接连叮叮当当砸了好几个。那人怒极了，说道：「你真砸得好。」便索性把桌子
 *   一撅，这一响更响得有趣。那三个相公一个已唬跑了，两个死命的解劝，口中不住的大老爷、干爹、干爸
 *   爸的求他不要生气。那个砸碗的相公也跑到院子里，鸣呜咽咽的哭起来了。掌柜的、走堂的一齐进来劝解
 *   ，都不敢说一句话。尽陪着笑脸，大老爷长，大老爷短。
 *
 * Translation: Rongguan shuddered delicately. "Lord Xi's men are utterly ruthless. The way they shoved and
 *   battered Old Wang—I feared he would fall and shatter that miserable tray of his entirely. It
 *   could have killed the old wretch! Luckily, only two glass nozzles and a snuff bottle were
 *   lost. One of the servants was particularly vicious; he struck Old Wang directly on that
 *   hideous tumor. The old man choked, his eyes rolling back until only the whites showed—it was
 *   truly horrifying. Lord Xi's temper burns far too hot. Had his man struck a fatal blow, he
 *   would have had to pay with a life." As Rongguan spoke, a sudden, violent uproar erupted in
 *   the adjacent room. A harsh voice bellowed, "Cock-fucking hell — putting on airs again!"
 *   Rongguan lowered his voice to a terrified whisper. "Disaster. The Great Lord Xi has exploded
 *   again. Who is he cursing this time?" He pressed his eye to the crack in the partition. At
 *   their table, Pincai, Fu the Third, and Master Gui fell utterly silent, straining to listen.
 *   Through the thin wood, a young actor shot back, "You cannot open your mouth without cursing.
 *   Cock is cheap enough with you — cook it up as a dish and your own mouth could never finish
 *   it." The deep voice roared back, "I despise nothing more than those who put on airs—wearing
 *   a new face for every day of the week!" The actor retorted, a hint of defiance in his tone,
 *   "Even if I do put on airs, you have no right to beat me to death for it!" The man snarled,
 *   "I won't beat you to death — I'll fuck you to death." A sharp crack echoed as a wine cup
 *   shattered against the wall. The man sneered, "That sound is too fragile. Let us smash
 *   something grander." The actor snapped back, "If you seek loud noises—" Another deafening
 *   crash followed as a heavy porcelain bowl was destroyed. The man raged, "You think only you
 *   can smash things?" He hurled another dish to the floor. The actor cried, "If you wish to
 *   destroy, who is stopping you?" A chaotic symphony of destruction ensued—ding, ding, dang,
 *   dang—as several more pieces met their end. Pushed beyond the brink of sanity, the man
 *   roared, "You smash things beautifully!" With a terrifying crash that dwarfed all the rest,
 *   he heaved the entire banquet table over. One of the three accompanying actors fled the room
 *   in sheer terror. The remaining two scrambled frantically to mediate, their voices a
 *   desperate chorus of "Great Lord!" "Godfather!" "Dear Father!" begging him to calm his wrath.
 *   The actor who had dared smash the bowls dashed into the courtyard, collapsing into violent,
 *   racking sobs. The restaurant proprietor and a fleet of waiters rushed in, paralyzed by fear,
 *   offering terrified, obsequious smiles and murmuring a litany of "Great Lord" over and over.
 *
 * Staging: Rongguan’s story at the table; the party listening at the partition; the next room seen through
 *   the crack as cups and bowls fly; the table overturned, Chunlan weeping in the yard, the staff
 *   rushing up.
 */
export default defineStory({
  title: { en: 'Smash for smash', zh: '砸了一个大碗' },
  description: {
    en: 'Rongguan tells how Xi’s men manhandled Old Wang, one striking the goitre so the old man choked. Then next door erupts: Xi curses Chunlan for putting on airs, Chunlan answers back, a cup is smashed, then a bowl, then more, each outdoing the other, until Xi heaves over the whole table. One dan flees, two plead with him, Chunlan runs weeping into the courtyard, and the staff rush in.',
    zh: '蓉官说奚家的爷们把老王推搡，还在他气瘤上一叉。隔壁忽然闹起来：奚十一骂春兰装腔作势，春兰回嘴，一个砸杯，一个砸碗，接连叮当砸了好几个，那人索性把桌子一撅。一个相公唬跑了，两个苦劝，春兰跑到院子里哭，掌柜的、走堂的一齐进来。',
  },
  shots: [
    {
      start: 0, end: 7,
      title: { en: 'Old Wang’s goitre', zh: '气瘤上一叉' },
      quote: '有一个爷们更恶，在他脖子那个灰包上一叉',
      caption: { en: 'Rongguan: one of Xi’s men struck Old Wang on his goitre till his eyes rolled.', zh: '蓉官：奚家一个爷们在老王的气瘤上一叉，翻了白眼。' },
    },
    {
      start: 7, end: 16,
      title: { en: 'Uproar next door', zh: '隔壁雅座里闹起来' },
      quote: '只听得隔壁雅座里闹起来',
      caption: { en: 'The next room erupts; Xi is cursing someone, and the party freezes to listen.', zh: '隔壁闹起来，奚大老爷又翻了；这边静悄悄的听。' },
    },
    {
      start: 16, end: 26,
      title: { en: 'Smash for smash', zh: '你爱砸，谁又拦你' },
      quote: '听得当啷一声，砸了一个酒杯……砸破了一个大碗',
      caption: { en: 'A cup, then a bowl, then another: Xi and Chunlan smash crockery at each other.', zh: '一个砸酒杯，一个砸大碗，你砸我也砸。' },
    },
    {
      start: 26, end: 36,
      title: { en: 'The table goes over', zh: '把桌子一撅' },
      quote: '那人怒极了……便索性把桌子一撅',
      caption: { en: 'Xi heaves the table over; one dan flees, two plead, Chunlan weeps in the courtyard; the staff rush in.', zh: '奚十一把桌子一撅；一个相公跑了，两个苦劝，春兰到院里哭，掌柜的走堂的都来了。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6.6, zh: '蓉官道：「有一个爷们更恶，在他脖子那个灰包上一叉，那老王两个白眼珠一翻，好不怕人。」', en: 'Rongguan: “One of them struck Old Wang right on that goitre—his eyes rolled up white. Frightful!”' },
    { start: 7.4, end: 11.6, zh: '只听得隔壁雅座里闹起来，听得一人骂道：「又装腔做作了。」', en: 'Just then the next room erupted; a voice swore: “Putting on airs again!”' },
    { start: 11.6, end: 15.6, zh: '这边聘才与富三、贵大都静悄悄的听。', en: 'Pincai, Fu and Gui fell silent and listened.' },
    { start: 16.4, end: 21, zh: '那人又骂道：「我最恨那装腔做作的，一天一个样子。」那相公说道：「你也不能打死了我。」', en: '“I hate airs and graces—a new face every day!” “Even so, you can’t beat me to death.”' },
    { start: 21, end: 25.6, zh: '当啷一声，砸了一个酒杯……又一声响，砸破了一个大碗。', en: 'Crash—a wine cup smashed… then another crash, a big bowl.' },
    { start: 26.4, end: 31, zh: '「你爱砸，谁又拦你不砸。」便接连叮叮当当砸了好几个。那人怒极了，把桌子一撅。', en: '“Smash away, who’s stopping you?”—several more went; and in a fury the man heaved over the table.' },
    { start: 31, end: 35.6, zh: '一个已唬跑了，两个死命的解劝。那砸碗的相公跑到院子里，呜呜咽咽的哭起来了。', en: 'One dan fled, two begged him to calm down; the one who smashed the bowls ran into the courtyard sobbing.' },
  ],
});
