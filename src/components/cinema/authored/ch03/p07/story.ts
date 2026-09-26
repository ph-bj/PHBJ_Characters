import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 7. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：琪官定于腊月初十日上台，其余各自跟他师傅，也有在联锦班的，也有过别班里去的。聘才又问他的寓处
 *   ，说在杨柳巷联锦班总寓内。聘才道：「改日过来奉看。」茂林道：「这如何敢当，只好顺便去逛逛。」
 *   说着许顾已同了金二回来，已经说妥，定于正月初六日在姑苏会馆，不论分包不分包，只要点谁的戏，不
 *   短脚色就是了。许顺上去回明，付了定银各散。是晚子玉课期，未得与聘才闲谈。
 *
 * Translation: Qiguan was slated to make his stage debut on the tenth day of the twelfth month. The others
 *   had followed their respective masters—some joining the Lianjin Troupe, others scattering to
 *   different companies. Pincai asked for Ye's residence and was told he resided at the Lianjin
 *   Troupe's main quarters in Yangliu Lane. "I shall come to pay my respects soon," Pincai
 *   promised. "I would not dare presume," Maolin replied, "only drop by if you are passing
 *   through." Presently, Xu Shun and Master Jin returned, having struck an agreement: the
 *   performance was set for the sixth day of the first month at the Suzhou Guild Hall. Whether
 *   the contract was split mattered little, so long as the requested actors performed without
 *   omission. Xu Shun ascended to report the finalized terms, the deposit was paid, and the
 *   party dispersed. That evening was reserved for Ziyu's studies, leaving no time for idle
 *   chatter with Pincai.
 *
 * Staging: Qiguan’s debut as a vision on a stage; the troupe’s gate in Willow Lane; the silver counted out
 *   for the deposit; Ziyu at his evening lesson under the lamp.
 */
export default defineStory({
  title: { en: 'The sixth of the first month', zh: '正月初六' },
  description: {
    en: 'Qiguan will debut on the tenth of the twelfth month; the troupe lodges in Willow Lane. Xu Shun and Jin return with the booking settled—the sixth of the first month at the Suzhou Guild Hall—and the deposit is paid. That evening Ziyu has his lessons.',
    zh: '琪官定于腊月初十上台；联锦班总寓在杨柳巷。许顺同金二回来说妥，正月初六在姑苏会馆，付了定银。是晚子玉课期。',
  },
  shots: [
    {
      start: 0, end: 9,
      title: { en: 'Qiguan’s debut', zh: '琪官上台' },
      quote: '琪官定于腊月初十日上台',
      caption: { en: 'Qiguan is to take the stage on the tenth of the twelfth month; the other boys follow their masters.', zh: '琪官腊月初十上台，其余各跟师傅。' },
    },
    {
      start: 9, end: 18,
      title: { en: 'Willow Lane', zh: '杨柳巷' },
      quote: '说在杨柳巷联锦班总寓内。',
      caption: { en: 'Ye lodges at the Lianjin troupe’s quarters in Willow Lane; Pincai promises a call.', zh: '叶茂林住杨柳巷联锦班总寓；聘才说改日奉看。' },
    },
    {
      start: 18, end: 28,
      title: { en: 'The deposit', zh: '付了定银' },
      quote: '定于正月初六日在姑苏会馆……付了定银各散。',
      caption: { en: 'Booked for the sixth of the first month at the Suzhou Guild Hall; the deposit is paid.', zh: '定了正月初六在姑苏会馆，付了定银。' },
    },
    {
      start: 28, end: 36,
      title: { en: 'Ziyu’s lesson night', zh: '子玉课期' },
      quote: '是晚子玉课期，未得与聘才闲谈。',
      caption: { en: 'That evening Ziyu has his lessons, and no time to chat with Pincai.', zh: '是晚子玉课期，未得与聘才闲谈。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4.6, zh: '琪官定于腊月初十日上台，', en: 'Qiguan was to make his debut on the tenth of the twelfth month;' },
    { start: 4.6, end: 8.6, zh: '其余各自跟他师傅，也有在联锦班的，也有过别班里去的。', en: 'the others had followed their masters, some to the Lianjin troupe, some elsewhere.' },
    { start: 9.4, end: 13.6, zh: '聘才又问他的寓处，说在杨柳巷联锦班总寓内。', en: 'Ye lodged, he said, at the Lianjin troupe’s quarters in Willow Lane.' },
    { start: 13.6, end: 17.6, zh: '聘才道：「改日过来奉看。」茂林道：「这如何敢当。」', en: '“I shall call on you.” “I would not presume,” said Maolin.' },
    { start: 18.4, end: 23, zh: '许顺已同了金二回来，定于正月初六日在姑苏会馆，', en: 'Xu Shun and Jin came back: the sixth of the first month, at the Suzhou Guild Hall,' },
    { start: 23, end: 27.6, zh: '只要点谁的戏，不短脚色就是了。许顺上去回明，付了定银各散。', en: 'whoever was asked for would appear. The deposit was paid, and they parted.' },
    { start: 28.4, end: 35.6, zh: '是晚子玉课期，未得与聘才闲谈。', en: 'That evening was Ziyu’s lesson night; there was no chatting with Pincai.' },
  ],
});
