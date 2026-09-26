import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 18. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：聘才待要发作，只见那个胖子伸过手来，将那卖玉器的一扯，就指着他说道：「老王，你别要这么着。」
 *   聘才连忙招呼，那胖子倒真动了气，又道：「老王，你别要混懵。怎么拿个松香壶儿不值一百钱，赚人二
 *   两银。砸碎了就要六两。你瞧他南边人老实，不懂你那懵劲儿，你就懵开了。我姓富的在这里，你不能。
 *   」那卖玉器的见了他，就不敢强，道：「三爷，你能怎么说，怎么好。」那胖子就叫跟班的给他四百钱，
 *   卖玉器的尚要争论，那一位也说道：「富三爷那里不照应你，这点事你就这么着。况且富三爷是为朋友的
 *   ，下次瞧瞧有好玉器，他们多照顾你一点就够了。」蓉官接口道：「这老头子好讨人嫌：弯着腰，托着那
 *   浪盘子，天天在人空里挤来挤去，一点好东西都没有。谁要买，德古斋还少吗？」卖玉器的只得忍气吞声
 *   ，拿了碎烟壶走了出去，嘴里咕噜道：「闹扬气，充朋友，照顾我也配？有钱尽闹相公。」又挤到别处去
 *   了。聘才心里甚是感激，连忙拉着富三的手道：「小弟粗卤，倒累三爷生气。」又向那人也拉了拉手，就
 *   叫四儿拿出二百大钱来，双手送上。富三笑道：「这算什么。」接过来，递与聘才的四儿道：「算我收了
 *   ，给你罢。」四儿不敢接，聘才又笑道：「断不敢要三爷破钞，还请收了。」又将钱交与富三的家人，富
 *   三接过来，望桌上一扔道：「你太酸了！几个钱什么要紧，推来推去的推不了。」聘才只得叫四儿收了，
 *   叫他请了安，谢了赏。聘才已听得人叫他富三爷，自然姓富了，便问那一位的姓，是姓贵、名字叫芬，现
 *   在部里做个七品小京官。这富三爷叫富伦，是二品荫生，现做户部主事。一一领教过了。
 *
 * Translation: Just as Pincai was about to lose his temper, the stout man reached across the table, seizing
 *   the peddler by the arm. Pointing a thick finger, he warned, "Old Wang, enough of your
 *   tricks." Pincai offered a grateful nod, but the stout man's anger was genuine. "Old Wang, do
 *   not try your swindles here. A lump of pine-resin is barely worth a hundred cash, yet you
 *   tried to fleece him for two taels. Now that it is broken, you demand six? You mark a
 *   southerner unfamiliar with your cons and move in for the kill. Not while I, Fu, sit at this
 *   table." The peddler's bravado vanished instantly. "Third Master, whatever you decree, so it
 *   shall be." The stout man motioned to his servant to hand the peddler four hundred cash. The
 *   old man opened his mouth to protest, but the lean man cut him off. "Third Master Fu
 *   patronizes you constantly. Why squabble over such a trifle? He acts on behalf of a friend.
 *   Next time you procure decent jade, they will offer you their custom. Leave it at that."
 *   Rongguan chimed in with a delicate sneer, "This old relic is an absolute plague. He hobbles
 *   through the aisles, thrusting that wretched tray at everyone, without a single piece of
 *   merit to his name. If one truly desires jade, does the Degu Zhai shop not exist?" Swallowing
 *   his bile, the peddler scooped up the broken shards and shuffled away, muttering venomously
 *   under his breath, "Striking poses, playing the noble friend—'I will offer you my custom,' he
 *   says! If he has coin, he wastes it all on pretty boys." He melted back into the throng.
 *   Overwhelmed with gratitude, Pincai clasped Fu the Third's hand warmly. "My clumsiness has
 *   caused Third Master undue aggravation." He offered a respectful bow to the lean man as well,
 *   then instructed Si'er to present two hundred large cash to the stout man with both hands. Fu
 *   the Third laughed heartily, "What nonsense is this?" Taking the coins, he tossed them
 *   directly back to Si'er. "Consider it accepted. Now take it back." Si'er hesitated, terrified
 *   to comply. Pincai smiled, "I cannot possibly allow Third Master to suffer a loss on my
 *   account. Please, accept it." He tried handing the money to Fu's servant, but Fu snatched it
 *   and tossed it onto the table with a sigh. "You are far too pedantic! What is a handful of
 *   copper? Stop this endless pushing back and forth." Relenting, Pincai ordered Si'er to pocket
 *   the money and offer a deep bow of thanks. Having heard the crowd refer to his savior as 'Fu
 *   the Third,' Pincai asked the lean man's name. The man introduced himself as Gui Fen, a
 *   seventh-rank minor official serving in one of the Ministries. Fu the Third's full name was
 *   Fu Lun, a second-rank hereditary degree holder, currently serving as a secretary in the
 *   Ministry of Revenue. The men exchanged formal courtesies.
 *
 * Staging: Fu’s hand on the peddler; the cash counted out; Old Wang shuffling off muttering; the two
 *   hundred cash tossed back; name slips for Gui Fen and Fu Lun.
 */
export default defineStory({
  title: { en: 'Fu the Third', zh: '富三爷' },
  description: {
    en: 'The fat man takes Old Wang by the arm: a lump of resin worth a hundred cash—not while Fu is here. Four hundred cash settle it; the lean man and Rongguan see the peddler off, muttering. Pincai thanks Fu and offers two hundred cash, which Fu tosses back. Introductions: Gui Fen, a seventh-rank clerk; Fu Lun, a secretary in the Ministry of Revenue.',
    zh: '胖子一把扯住老王：一个不值一百钱的松香壶，讹人六两，有我姓富的在这里不能。给了四百钱了事；老王咕噜着走了。聘才谢他，送上二百钱，富三扔回来。互通姓名：贵芬，七品小京官；富伦，户部主事。',
  },
  shots: [
    {
      start: 0, end: 9,
      title: { en: '“Old Wang, enough”', zh: '老王，你别要这么着' },
      quote: '那胖子伸过手来，将那卖玉器的一扯',
      caption: { en: 'The fat man grabs the peddler: a resin bottle worth a hundred cash—not while Fu sits here.', zh: '胖子一把扯住老王：一个松香壶不值一百钱，我姓富的在这里，你不能。' },
    },
    {
      start: 9, end: 18,
      title: { en: 'Four hundred cash', zh: '给他四百钱' },
      quote: '那胖子就叫跟班的给他四百钱',
      caption: { en: 'Fu has his man pay four hundred cash; the lean man tells Old Wang to let it be.', zh: '富三叫跟班的给他四百钱，瘦的也劝他罢了。' },
    },
    {
      start: 18, end: 27,
      title: { en: 'Off he goes, muttering', zh: '嘴里咕噜' },
      quote: '拿了碎烟壶走了出去，嘴里咕噜',
      caption: { en: 'Rongguan sneers; the old man gathers his shards and shuffles off, grumbling.', zh: '蓉官挖苦几句；老王拿了碎壶，嘴里咕噜着走了。' },
    },
    {
      start: 27, end: 36,
      title: { en: 'Fu Lun and Gui Fen', zh: '富伦 贵芬' },
      quote: '这富三爷叫富伦，是二品荫生，现做户部主事。',
      caption: { en: 'Pincai’s two hundred cash are tossed back; names are exchanged: Gui Fen, seventh rank; Fu Lun of the Ministry of Revenue.', zh: '聘才送二百钱，富三扔回；互通姓名：贵芬七品京官，富伦户部主事。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4.6, zh: '只见那个胖子伸过手来，将那卖玉器的一扯，道：「老王，你别要这么着。」', en: 'The fat man reached over and pulled at the peddler: “Old Wang, enough of that.”' },
    { start: 4.6, end: 8.6, zh: '「一个松香壶儿不值一百钱，赚人二两银。我姓富的在这里，你不能。」', en: '“A resin bottle not worth a hundred cash, and you want two taels? Not while I, Fu, am here.”' },
    { start: 9.4, end: 13.6, zh: '卖玉器的道：「三爷，你能怎么说，怎么好。」那胖子就叫跟班的给他四百钱，', en: '“Third Master, whatever you say.” The fat man had his man give him four hundred cash,' },
    { start: 13.6, end: 17.6, zh: '那一位也说道：「富三爷那里不照应你，这点事你就这么着。」', en: 'and the lean one added, “Master Fu always looks after you—why make a fuss over this?”' },
    { start: 18.4, end: 22.6, zh: '蓉官道：「这老头子好讨人嫌，一点好东西都没有。」', en: 'Rongguan: “What a pest that old man is—never a decent thing on his tray.”' },
    { start: 22.6, end: 26.6, zh: '卖玉器的只得拿了碎烟壶走了出去，嘴里咕噜着，又挤到别处去了。', en: 'The peddler took his shards and went off grumbling into the crowd.' },
    { start: 27.4, end: 31.6, zh: '聘才叫四儿拿出二百大钱来，双手送上。富三接过来，望桌上一扔道：「你太酸了！」', en: 'Pincai had Si’er offer two hundred cash; Fu tossed it on the table: “You’re too fussy!”' },
    { start: 31.6, end: 35.6, zh: '那一位姓贵、名字叫芬，是个七品小京官。富三爷叫富伦，现做户部主事。', en: 'The lean one was Gui Fen, a seventh-rank clerk; Fu the Third was Fu Lun, a secretary in the Ministry of Revenue.' },
  ],
});
