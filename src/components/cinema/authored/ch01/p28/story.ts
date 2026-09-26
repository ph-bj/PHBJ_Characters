import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 28.
 *
 * 原文：其演《双红记》、《盗令》、《青门》诸出，梳乌蛮髻，贯金雀钗，衣销金紫衣，系红绣襦，着小蛮
 *   锦靴。背负双龙纹剑，如荼如火，如锦如云，真红线后身也。其《刺虎》、《盗令》、《杀舟》诸
 *   戏，侠情一往，如见巾帼身肩天下事。觉熏香傅粉，私语喁喁，真痴儿女矣。温柔旖旎之中，绮丽风
 *   光之际，得此君一往，如听李三郎击羯鼓，作《渔阳三挝》，渊渊乎顷刻间见万花齐放也。为之诗
 *   曰：
 *
 * Translation: When he performs plays like "Double Red Record," "Stealing the Token," and "The Green
 *   Gate," he combs his hair into a dark tribal topknot pierced with a golden sparrow hairpin.
 *   He wears a purple robe trimmed with melted gold, cinched by a red embroidered sash, and
 *   small brocade boots. Bearing a twin-dragon-patterned sword on his back, he blazes like fire
 *   and blooming reeds, dazzling like brocade and clouds—truly the reincarnation of Hongxian.
 *   In plays such as "Slaying the Tiger," "Stealing the Token," and "Killing in the Boat," his
 *   chivalrous spirit surges forth, as if one is witnessing a heroine taking the fate of the
 *   world upon her own shoulders. Beside it, the incense and powder and the soft whispering of
 *   the love-scenes seem the mere prattle of infatuated boys and girls. Amidst his gentle
 *   enchantment and radiant splendor, to encounter this gentleman's sudden intensity is like
 *   listening to Emperor Minghuang striking the Jie drum, playing the "Three Beats of Yuyang"—a
 *   profound resonance that instantly causes ten thousand flowers to burst into bloom. Thus, I
 *   composed for him this poem:
 *
 * Staged from album beats (cinema/beats/album.ts): Wang Lanbao on stage in his martial roles, sword on his back, then sword in hand.
 */
export default defineStory({
  title: { en: 'Wang Lanbao, Hongxian reborn', zh: '真红线后身' },
  description: {
    en: 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital. Wang Lanbao in his martial roles.',
    zh: '以水墨绘作史南湘《花选》册页，品评京师名旦。王兰保所演武戏。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: 'The reincarnation of Hongxian', zh: '真红线后身' },
      quote: '其演《双红记》、《盗令》、《青门》诸出……背负双龙纹剑',
      caption: { en: 'In Double Red Record, Stealing the Token and The Green Gate: golden hairpin, purple robe, and a twin-dragon sword on his back.', zh: '《双红记》《盗令》《青门》：金雀钗，紫衣红襦，背负双龙纹剑，真红线后身。' },
    },
    {
      start: 18, end: 36,
      title: { en: 'Slaying the Tiger', zh: '《刺虎》《杀舟》' },
      quote: '其《刺虎》、《盗令》、《杀舟》诸戏，侠情一往',
      caption: { en: 'In Slaying the Tiger and Killing in the Boat, his chivalry surges like drums that make ten thousand flowers bloom.', zh: '《刺虎》《盗令》《杀舟》，侠情一往，如闻羯鼓，万花齐放。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 5, zh: '其演《双红记》、《盗令》、《青门》诸出，', en: 'When he performs Double Red Record, Stealing the Token and The Green Gate,' },
    { start: 5, end: 10, zh: '梳乌蛮髻，贯金雀钗，衣销金紫衣，系红绣襦，着小蛮锦靴。', en: 'he wears a dark topknot and golden hairpin, a gold-trimmed purple robe, a red sash and brocade boots.' },
    { start: 10, end: 17.6, zh: '背负双龙纹剑，如荼如火，如锦如云，真红线后身也。', en: 'With a twin-dragon sword on his back, he blazes like fire and brocade—truly Hongxian reborn.' },
    { start: 18.4, end: 23.4, zh: '其《刺虎》、《盗令》、《杀舟》诸戏，侠情一往，', en: 'In Slaying the Tiger, Stealing the Token and Killing in the Boat, his chivalry surges forth,' },
    { start: 23.4, end: 28.4, zh: '如见巾帼身肩天下事。', en: 'like a heroine shouldering the fate of the world.' },
    { start: 28.4, end: 35.6, zh: '如听李三郎击羯鼓，作《渔阳三挝》，渊渊乎顷刻间见万花齐放也。为之诗曰：', en: 'Like Minghuang beating the Jie drum—in an instant ten thousand flowers burst into bloom. Thus, this poem:' },
  ],
});
