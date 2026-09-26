import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 9. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：望着那边楼上，有一班像些京官模样，背后站着许多跟班。又见戏房门口帘子里，有几个小旦，露着雪白
 *   的半个脸儿，望着那一起人笑，不一会，就攒三聚五的上去请安。远远看那些小旦时，也有斯文的，也有
 *   伶俐的，也有淘气的。身上的衣裳却极华美。有海龙、有狐腿，有水獭，有染貂，都是玉琢粉妆的脑袋，
 *   花嫣柳媚的神情。一会儿靠在人身边，一会儿坐在人身旁，一会儿扶在人肩上，这些人说说笑笑，像是应
 *   接不暇光景，聘才已经看出了神。
 *
 * Translation: Casting his gaze to the upper gallery, Pincai noticed a party of men bearing the
 *   distinguished air of capital officials, flanked by a retinue of attendants. By the curtained
 *   entrance to the dressing rooms, several young dan actors lingered, their snow-white profiles
 *   partially visible as they smiled toward the officials. Soon, they gathered in small clusters
 *   of three and five, ascending the stairs to offer their greetings. Observing them from afar,
 *   Pincai noted their varied charms—some possessed a tranquil elegance, others a spirited
 *   vivacity, and some a playful mischief. Their garments were breathtakingly opulent:
 *   sea-dragon fur, fox-leg trim, otter, and dyed sable. Each face was carved of jade and dusted
 *   with snow, radiating a floral grace and willowy allure. They leaned intimately against
 *   patrons, sat closely by their sides, or rested gentle hands upon their shoulders, laughing
 *   and chatting in a delightful flurry of attention. Pincai was utterly spellbound.
 *
 * Staging: the officials in the gallery; half-faces at the dressing-room curtain; the dan climbing the
 *   stair and settling among the patrons, while Pincai watches from below.
 */
export default defineStory({
  title: { en: 'In the galleries', zh: '楼上' },
  description: {
    en: 'Up in the gallery sit capital officials with attendants behind them. Young dan peep from the curtain, half their snow-white faces showing, then go up by threes and fives to pay their respects, in sable and fox, leaning on the patrons and laughing. Pincai watches spellbound.',
    zh: '楼上一班京官，背后站着跟班。戏房帘子里几个小旦露着半个雪白的脸儿，不一会攒三聚五上去请安，身穿海龙狐腿，靠在人身边说笑，聘才看出了神。',
  },
  shots: [
    {
      start: 0, end: 10,
      title: { en: 'Officials above', zh: '京官模样' },
      quote: '望着那边楼上，有一班像些京官模样，背后站着许多跟班',
      caption: { en: 'In the gallery a party of capital officials, attendants standing behind them.', zh: '楼上一班京官模样，背后站着许多跟班。' },
    },
    {
      start: 10, end: 20,
      title: { en: 'Half a face', zh: '露着雪白的半个脸儿' },
      quote: '戏房门口帘子里，有几个小旦，露着雪白的半个脸儿',
      caption: { en: 'At the dressing-room curtain young dan peep out, smiling up at the officials.', zh: '戏房帘子里几个小旦露着半个雪白的脸儿，望着那起人笑。' },
    },
    {
      start: 20, end: 36,
      title: { en: 'Among the patrons', zh: '应接不暇' },
      quote: '一会儿靠在人身边，一会儿坐在人身旁，一会儿扶在人肩上',
      caption: { en: 'Up they go in furs, leaning on the patrons, sitting by them, hands on their shoulders; Pincai is spellbound.', zh: '上楼请安，一身海龙狐腿，靠在人身边，扶在人肩上；聘才看出了神。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 9.6, zh: '望着那边楼上，有一班像些京官模样，背后站着许多跟班。', en: 'In the gallery opposite sat a party who looked like capital officials, with attendants behind them.' },
    { start: 10.4, end: 15, zh: '又见戏房门口帘子里，有几个小旦，露着雪白的半个脸儿，望着那一起人笑，', en: 'At the dressing-room curtain a few young dan showed half their snow-white faces, smiling up at them;' },
    { start: 15, end: 19.6, zh: '不一会，就攒三聚五的上去请安。', en: 'soon they went up by threes and fives to pay their respects.' },
    { start: 20.4, end: 25, zh: '身上的衣裳却极华美。有海龙、有狐腿，有水獭，有染貂，', en: 'Their clothes were splendid: sea-otter, fox-leg, river-otter, dyed sable,' },
    { start: 25, end: 30, zh: '一会儿靠在人身边，一会儿坐在人身旁，一会儿扶在人肩上，', en: 'now leaning on a patron, now sitting at his side, now a hand on his shoulder,' },
    { start: 30, end: 35.6, zh: '这些人说说笑笑，像是应接不暇光景，聘才已经看出了神。', en: 'all talk and laughter, hardly able to keep up—and Pincai watched, spellbound.' },
  ],
});
