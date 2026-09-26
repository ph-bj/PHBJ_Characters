import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 15. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：第三出是《南浦》，很熟的曲文，用脚在板凳上踏了两板，就倒了一杯茶，一手擎着慢慢的喝。可巧那胖
 *   子要下来走动，把手向蓉官肩上一扶，蓉官身子一幌，碰着了聘才的膀子，茶碗一侧，淋淋漓漓把聘才的
 *   袍子泼湿了一大块。那胖子同蓉官，着实过意不去，陪了不是，聘才倒不好意思，笑道：「这有什么要紧
 *   ，干一干就好了。」说着自己将手巾拭了。
 *
 * Translation: The third act was The Southern Shore, a universally beloved scene. Pincai tapped his foot
 *   gently against the bench in time with the rhythm, poured himself a fresh cup of tea, and
 *   sipped it slowly. Just then, the stout man moved to stand. Seeking balance, he pressed his
 *   hand heavily upon Rongguan's shoulder. Rongguan swayed, inadvertently colliding with
 *   Pincai's arm. The teacup tipped, spilling its contents and leaving a large, dark stain
 *   across Pincai's robe. The stout man and Rongguan were instantly mortified, offering profuse
 *   apologies. Pincai, feeling a touch of embarrassment himself, smiled warmly, "It is of no
 *   consequence at all. It will dry in a moment." With that, he drew his handkerchief and calmly
 *   dabbed at the silk.
 *
 * Staging: the parting scene of The Southern Shore on stage; the chain of jostles and the spill, slowed
 *   down; the apologies and the handkerchief.
 */
export default defineStory({
  title: { en: 'Tea on the robe', zh: '泼湿了一大块' },
  description: {
    en: 'The third act is The Southern Shore. Pincai beats time with his foot and sips his tea; the fat man, getting up, leans on Rongguan, Rongguan sways into Pincai, and the tea goes all over Pincai’s robe. Apologies; Pincai laughs it off and dabs it dry.',
    zh: '第三出《南浦》，聘才踏着板喝茶。胖子起身扶了蓉官一把，蓉官一幌碰着聘才，茶泼湿了袍子。二人陪不是，聘才笑说不要紧，自己拭了。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'The Southern Shore', zh: '《南浦》' },
      quote: '第三出是《南浦》，很熟的曲文',
      caption: { en: 'On stage, the parting at the Southern Shore; Pincai beats time with his foot and sips his tea.', zh: '台上演《南浦》，聘才用脚踏板，擎着茶慢慢喝。' },
    },
    {
      start: 12, end: 24,
      title: { en: 'The spill', zh: '茶碗一侧' },
      quote: '蓉官身子一幌，碰着了聘才的膀子，茶碗一侧',
      caption: { en: 'The fat man leans on Rongguan to rise; Rongguan sways into Pincai; the cup tips over his robe.', zh: '胖子扶着蓉官起身，蓉官一幌碰了聘才，茶泼了一袍子。' },
    },
    {
      start: 24, end: 36,
      title: { en: '“No matter”', zh: '这有什么要紧' },
      quote: '这有什么要紧，干一干就好了。',
      caption: { en: 'Profuse apologies; Pincai laughs it off and dabs the robe with his handkerchief.', zh: '二人陪不是；聘才笑道不要紧，用手巾拭了。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '第三出是《南浦》，很熟的曲文，用脚在板凳上踏了两板，', en: 'The third act was The Southern Shore, a familiar piece; he beat time with his foot on the bench,' },
    { start: 6, end: 11.6, zh: '就倒了一杯茶，一手擎着慢慢的喝。', en: 'poured himself tea, and sipped it slowly.' },
    { start: 12.4, end: 18, zh: '可巧那胖子要下来走动，把手向蓉官肩上一扶，蓉官身子一幌，', en: 'Just then the fat man got up, leaning on Rongguan’s shoulder; Rongguan swayed,' },
    { start: 18, end: 23.6, zh: '碰着了聘才的膀子，茶碗一侧，淋淋漓漓把聘才的袍子泼湿了一大块。', en: 'bumped Pincai’s arm, and the cup tipped, soaking a great patch of his robe.' },
    { start: 24.4, end: 30, zh: '那胖子同蓉官，着实过意不去，陪了不是，', en: 'The fat man and Rongguan were mortified and apologised,' },
    { start: 30, end: 35.6, zh: '聘才笑道：「这有什么要紧，干一干就好了。」说着自己将手巾拭了。', en: 'but Pincai laughed, “It’s nothing, it will dry,” and dabbed it with his handkerchief.' },
  ],
});
