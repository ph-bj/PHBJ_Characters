import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 27. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：富三不解所问，倒是贵太爷明白，即对富三说道：「他问大叔官名是叫什么？」富三道：「你问我们老爷
 *   的名字么，我们老爷叫富安世。」聘才即站起身来道：「怪不得了，三爷是个大贤人之后。你们老大人，
 *   在我们南京地方已成了神。三年前，地方上百姓，共捐了几千银子，造了一个名宦祠，供了老大人的牌位
 *   。还有一位是江宁府某大老爷。这老大人生前爱民是不用说了，到归天之后，还恋着南京百姓，遇着瘟疫
 *   、蝗虫、水、旱等灾，常常的显圣，有求必应，灵验得很，只怕督抚就要奏请加封的。那些百姓感戴到一
 *   万分，愿老大人的世世子孙，位极人臣，封侯拜相，这也是一定的理。今看三爷这般心地，那样品貌，将
 *   来也必要做到一品的。」几句话把富三恭惟得十分快乐，倒回答不上来。
 *
 * Translation: Fu the Third looked mildly confused, but Master Gui understood perfectly. "He is asking for
 *   your father's official name," Gui clarified. Fu smiled, "You ask after my father? He was
 *   known as Fu Anshi." Pincai immediately rose from his seat, his expression filled with awe.
 *   "No wonder! Third Master is the descendant of a true sage. Your venerable father is revered
 *   as a living god in our Nanjing. Three years ago, the local populace gathered thousands of
 *   taels of silver to erect a shrine for distinguished officials, placing your father's tablet
 *   there — the only other so honored being a certain prefect of Jiangning. His devotion to the
 *   people in life was legendary; after his passing, his spirit lingered to protect Nanjing.
 *   During times of plague, locusts, flood, or drought, he has manifested time and
 *   again—answering every prayer with miraculous efficacy. It is said the Governor-General
 *   intends to petition the throne to grant him posthumous titles. The people's gratitude is
 *   boundless, and it is a universal belief that his descendants are destined for the highest
 *   echelons of power—to be named marquises and ministers. Seeing Third Master's noble heart and
 *   distinguished bearing today, I have no doubt you will ascend to the very first rank." This
 *   eloquent homage left Fu the Third so profoundly moved and flattered that he found himself
 *   momentarily speechless.
 *
 * Staging: the name given at the table; the shrine in Nanjing with the people bowing; the spirit appearing
 *   over flooded and locust-swarmed fields; Fu speechless and beaming.
 */
export default defineStory({
  title: { en: 'A god in Nanjing', zh: '南京地方已成了神' },
  description: {
    en: 'Fu’s father was Fu Anshi. Pincai springs up: in Nanjing the old lord is worshipped. The people built him a shrine of eminent officials; in plague, locusts, flood and drought his spirit appears and answers every prayer, and his descendants are sure to rise to the highest rank. Fu is too flattered to speak.',
    zh: '富三说老太爷叫富安世。聘才站起来说：老大人在南京已成了神，百姓捐银造名宦祠供他牌位；遇着瘟疫蝗虫水旱，常常显圣，有求必应；子孙必定位极人臣。把富三恭维得答不上来。',
  },
  shots: [
    {
      start: 0, end: 8,
      title: { en: 'Fu Anshi', zh: '富安世' },
      quote: '我们老爷叫富安世。',
      caption: { en: 'Gui explains the question; Fu: his father was Fu Anshi.', zh: '贵大爷替他解释；富三道：我们老爷叫富安世。' },
    },
    {
      start: 8, end: 18,
      title: { en: 'The shrine', zh: '名宦祠' },
      quote: '共捐了几千银子，造了一个名宦祠，供了老大人的牌位',
      caption: { en: 'Pincai rises: in Nanjing the people raised thousands of taels for a shrine with his tablet in it.', zh: '聘才站起来：南京百姓捐了几千银子，造名宦祠供了老大人的牌位。' },
    },
    {
      start: 18, end: 28,
      title: { en: 'Answering every prayer', zh: '有求必应' },
      quote: '遇着瘟疫、蝗虫、水、旱等灾，常常的显圣，有求必应',
      caption: { en: 'In plague, locusts, flood and drought, his spirit appears and answers every prayer.', zh: '遇着瘟疫、蝗虫、水旱，常常显圣，有求必应。' },
    },
    {
      start: 28, end: 36,
      title: { en: 'Speechless', zh: '回答不上来' },
      quote: '几句话把富三恭惟得十分快乐，倒回答不上来。',
      caption: { en: 'His descendants will surely rise to the first rank. Fu, delighted, can find nothing to say.', zh: '子孙必定位极人臣。富三被恭维得十分快乐，倒答不上来。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 7.6, zh: '贵大爷道：「他问大叔官名是叫什么？」富三道：「我们老爷叫富安世。」', en: 'Gui: “He’s asking your father’s official name.” Fu: “My father was Fu Anshi.”' },
    { start: 8.4, end: 12.6, zh: '聘才即站起身来道：「怪不得了，三爷是个大贤人之后。你们老大人，在我们南京地方已成了神。', en: 'Pincai stood up: “No wonder! You’re the son of a great sage. In Nanjing your father has become a god.' },
    { start: 12.6, end: 17.6, zh: '三年前，地方上百姓，共捐了几千银子，造了一个名宦祠，供了老大人的牌位。', en: 'Three years ago the people raised thousands of taels and built a shrine of eminent officials for his tablet.' },
    { start: 18.4, end: 22.6, zh: '到归天之后，还恋着南京百姓，遇着瘟疫、蝗虫、水、旱等灾，', en: 'Even after he passed, he still watches over Nanjing: in plague, locusts, flood or drought,' },
    { start: 22.6, end: 27.6, zh: '常常的显圣，有求必应，灵验得很。', en: 'he often appears, and answers every prayer—most efficacious.' },
    { start: 28.4, end: 32, zh: '「那些百姓愿老大人的世世子孙，位极人臣，封侯拜相。」', en: '“The people pray his descendants will rise to the highest ranks, marquises and ministers.”' },
    { start: 32, end: 35.6, zh: '几句话把富三恭惟得十分快乐，倒回答不上来。', en: 'Fu was so pleased by this that he could find no answer.' },
  ],
});
