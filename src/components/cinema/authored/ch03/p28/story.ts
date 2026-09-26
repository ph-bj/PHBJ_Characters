import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 28. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：贵大爷道：「这个话倒也可信。大叔在江南年数本久，自知府升到藩司，也有十几年，自然恋着那地方上
 *   了。」富三道：「我们老爷在江宁十六年，自知府到藩司，没有出过省，真与南京人有缘。我是生在江宁
 *   府衙门里的，所以我会说几句南京话。」聘才又将贵大爷恭惟一番。贵大爷道：「我这个功名是看得见的
 *   ，要升官也难得个拣选，不是同知，就是通判，并无他途。」聘才道：「将来总不止于同、通的。」蓉官
 *   笑道：「你瞧我将来怎样？」聘才笑道：「你将来是要到月宫里去，会成仙呢。」富三、贵大皆笑，蓉官
 *   罚了聘才一杯酒道：「你此时倒会说话，为什么见了那个卖主器的，就说不出来？」聘才笑道：「今日幸
 *   遇见了三爷、大爷，不然我真被他缠不清了。」富三道：「这种人是怕硬欺软，你越与他说好话，他越不
 *   依的。你不见楼上那个人将他轰出来，砸掉了许多东西，他何曾敢说一声。不过，咱们不肯做这样霸道事
 *   ，叫苦人吃亏。其实，四百钱还是多给的。他那个料壶儿，准不值一百钱。」聘才又赞了几声仁厚待人，
 *   必有厚福。
 *
 * Translation: Master Gui nodded thoughtfully. "The sentiment is entirely credible. His Excellency served
 *   in Jiangnan for many years, rising steadily from Prefect to Provincial Treasurer over more
 *   than a decade. It is only natural he forged a deep bond with the land and its people." Fu
 *   the Third recovered his voice, adding, "My father spent sixteen years in Jiangning, never
 *   once leaving the province as he climbed the ranks. He truly shared a destiny with the people
 *   of Nanjing. I was born within the walls of the Jiangning Prefectural compound, which is why
 *   I still carry a trace of the local dialect." Pincai then paid Master Gui a round of
 *   compliments as well. Gui sighed modestly, "My path is already written in stone. Promotion
 *   relies entirely on selection—I shall end my days a Subprefect, or failing that a Assistant
 *   Prefect. There is no other road for me." Pincai countered smoothly, "Surely a man of your
 *   caliber will not be halted at such ranks." Rongguan, eyes sparkling with amusement, leaned
 *   forward. "And what grand destiny do you foresee for me?" Pincai laughed warmly, "For you?
 *   You shall ascend to the Moon Palace and take your place among the immortals." Fu the Third
 *   and Master Gui erupted into laughter. Rongguan playfully poured Pincai a penalty cup of
 *   wine, teasing, "You have the tongue of a poet now! Where was this silver speech when that
 *   wretched jade peddler had you cornered?" Pincai chuckled, raising his cup. "Today, the
 *   heavens blessed me with the company of Third Master and Master Gui. Without you, I fear I
 *   would still be hopelessly entangled in his snare." Fu the Third shook his head, "Men of his
 *   ilk revere cruelty and prey on kindness. The softer your words, the harder they bite. Did
 *   you not see the brute upstairs cast him out, shattering half his livelihood? Yet the old
 *   swindler dared not utter a single breath of protest. Still, we are not tyrants; we do not
 *   revel in watching a poor man suffer. In truth, four hundred cash was far more than he
 *   deserved. That glass bauble was not worth a fraction of the price." Pincai praised his
 *   profound generosity, assuring him that such benevolence would surely summon immense cosmic
 *   blessings.
 *
 * Staging: the talk round the table; Gui’s fixed path as a short road ending at a door; Rongguan imagined
 *   in the Moon Palace among clouds; the penalty cup and Fu’s moral.
 */
export default defineStory({
  title: { en: 'To the Moon Palace', zh: '到月宫里去' },
  description: {
    en: 'Gui finds it credible; Fu, born in the Jiangning yamen, still speaks a little Nanjing dialect. Gui sighs that his own career is fixed. “And me?” asks Rongguan. “You’ll go to the Moon Palace and become an immortal.” Rongguan makes Pincai drink a penalty cup—where was that tongue with the peddler?—and Fu explains that such men bully the soft.',
    zh: '贵大爷说可信；富三说自己生在江宁府衙门里，会说几句南京话。贵大爷说自己的功名看得见。蓉官问：「你瞧我将来怎样？」聘才笑说：「你要到月宫里去成仙。」蓉官罚他一杯：见了卖玉器的怎么说不出来？富三说那种人怕硬欺软。',
  },
  shots: [
    {
      start: 0, end: 9,
      title: { en: 'Born in the yamen', zh: '生在江宁府衙门里' },
      quote: '我是生在江宁府衙门里的，所以我会说几句南京话。',
      caption: { en: 'Fu’s father spent sixteen years in Jiangning; Fu was born in the yamen and still speaks some Nanjing.', zh: '富三的父亲在江宁十六年；富三生在府衙里，会说几句南京话。' },
    },
    {
      start: 9, end: 18,
      title: { en: 'A career in plain sight', zh: '功名是看得见的' },
      quote: '我这个功名是看得见的……不是同知，就是通判',
      caption: { en: 'Gui: his own prospects are plain to see—subprefect or assistant prefect, no more.', zh: '贵大爷：我的功名看得见，不是同知就是通判。' },
    },
    {
      start: 18, end: 27,
      title: { en: 'The Moon Palace', zh: '月宫' },
      quote: '你将来是要到月宫里去，会成仙呢。',
      caption: { en: '“And me?” “You’ll go up to the Moon Palace and become an immortal.”', zh: '「你瞧我将来怎样？」「你是要到月宫里去成仙的。」' },
    },
    {
      start: 27, end: 36,
      title: { en: 'A penalty cup', zh: '罚了聘才一杯酒' },
      quote: '蓉官罚了聘才一杯酒道：「……为什么见了那个卖玉器的，就说不出来？」',
      caption: { en: 'Rongguan makes him drink: where was that tongue with the peddler? Fu: such men bully the soft.', zh: '蓉官罚他一杯：见了卖玉器的怎么说不出来？富三：那种人怕硬欺软。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4.6, zh: '富三道：「我们老爷在江宁十六年，自知府到藩司，没有出过省。', en: 'Fu: “My father spent sixteen years in Jiangning, from prefect to treasurer, never leaving the province.' },
    { start: 4.6, end: 8.6, zh: '我是生在江宁府衙门里的，所以我会说几句南京话。」', en: 'I was born in the Jiangning yamen—that’s why I can speak a bit of Nanjing.”' },
    { start: 9.4, end: 17.6, zh: '贵大爷道：「我这个功名是看得见的，要升官也难得个拣选，不是同知，就是通判。」', en: 'Gui: “My career is plain to see: subprefect, or assistant prefect—nothing else.”' },
    { start: 18.4, end: 22.6, zh: '蓉官笑道：「你瞧我将来怎样？」', en: 'Rongguan laughed: “And what will become of me?”' },
    { start: 22.6, end: 26.6, zh: '聘才笑道：「你将来是要到月宫里去，会成仙呢。」富三、贵大皆笑。', en: '“You’ll go up to the Moon Palace and become an immortal.” Fu and Gui laughed.' },
    { start: 27.4, end: 31.6, zh: '蓉官罚了聘才一杯酒道：「你此时倒会说话，为什么见了那个卖玉器的，就说不出来？」', en: 'Rongguan made him drink a penalty: “So now you can talk! Why couldn’t you with the peddler?”' },
    { start: 31.6, end: 35.6, zh: '富三道：「这种人是怕硬欺软，你越与他说好话，他越不依的。」', en: 'Fu: “That sort fears the hard and bullies the soft—the nicer you are, the worse they get.”' },
  ],
});
