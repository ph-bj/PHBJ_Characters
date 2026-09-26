import { defineStory } from '../../define';

/**
 * Chapter 2, paragraph 26. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：年纪倒有二十六岁，《五经》还不曾念完，文理实在欠通，却又酷好掉文，满口之乎者也，腐气可
 *   掏。有个苏州拔贡生高品，与他相熟，送他两个诨名：一个是「虫蛀千字文」。又因他那个红鼻子，
 *   有时擦得放光透亮，又叫做「起阳狗肾」。乃弟嗣元，生得枭唇露齿，又是个吊眼皮，右边一只眼睛
 *   高高吊起，像是朱笔圈了半圈。文理与乃兄不相上下，却喜批评乃兄的不通。又犯了口吃的毛病，有
 *   时议论起来，期期艾艾，愈着急愈说不清楚。高品也送他一个混号，叫做「迭韵双声谱」，这两个废
 *   物真是一对。
 *
 * Translation: Though twenty-six years of age, he had yet to complete his study of The Five Classics. His
 *   grasp of literature was woefully deficient, yet he possessed an insufferable penchant for
 *   flaunting obscure terminology, peppering his speech with archaic particles in a manner that
 *   reeked of pedantry. A certain Gao Pin, a senior licentiate from Suzhou well-acquainted with
 *   him, had bestowed upon him two derogatory monikers: one was "Worm-Eaten Thousand Character
 *   Classic." Because of his inflamed nose, which sometimes shone with a greasy luster, he was
 *   also dubbed "The Aroused Dog Penis." His younger brother, Siyuan, was afflicted with an
 *   owl-like beak and protruding teeth, coupled with drooping eyelids, his right eye
 *   permanently slanted upwards as if half-circled by a vermilion brush. His intellectual
 *   prowess mirrored his brother's, yet he delighted in critiquing Sihui's grammatical
 *   blunders. Further compounding his flaws, Siyuan suffered from a severe stutter, when
 *   embroiled in debate, he would stammer incessantly, his speech devolving into
 *   incomprehensibility the more agitated he became. Gao Pin had likewise graced him with a
 *   nickname, "The Stuttering Dictionary." Truly, these two useless individuals were a perfect
 *   pair.
 *
 * Staging: Sihui mouthing the classics, his nickname, and Siyuan’s portrait.
 */
export default defineStory({
  title: { en: 'Worm-eaten and stuttering', zh: '虫蛀千字文，迭韵双声谱' },
  description: {
    en: 'Sihui, twenty-six, spouts classical tags without understanding them; Siyuan has buck teeth, a hitched-up eyelid and a stammer. Gao Pin has nicknamed them both.',
    zh: '嗣徽二十六岁，满口之乎者也；嗣元枭唇露齿、吊眼皮、口吃。高品给二人都起了诨名。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'A mouthful of classical tags', zh: '满口之乎者也' },
      quote: '却又酷好掉文，满口之乎者也，腐气可掏。',
      caption: { en: 'Twenty-six and still short of the Five Classics, Sihui loves to show off in archaic particles.', zh: '嗣徽二十六岁《五经》未念完，却酷好掉文，满口之乎者也。' },
    },
    {
      start: 12, end: 22,
      title: { en: '“The Worm-Eaten Thousand Characters”', zh: '虫蛀千字文' },
      quote: '有个苏州拔贡生高品，与他相熟，送他两个诨名：一个是「虫蛀千字文」。',
      caption: { en: 'Gao Pin of Suzhou has christened him “The Worm-Eaten Thousand Character Classic.”', zh: '苏州拔贡生高品送他诨名「虫蛀千字文」。' },
    },
    {
      start: 22, end: 36,
      title: { en: 'Sun Siyuan', zh: '孙嗣元' },
      quote: '乃弟嗣元，生得枭唇露齿，又是个吊眼皮……又犯了口吃的毛病',
      caption: { en: 'His brother Siyuan: buck teeth, an eyelid hitched up as if circled in vermilion, and a stammer—“The Stuttering Dictionary.”', zh: '嗣元枭唇露齿、吊眼皮，又口吃；高品叫他「迭韵双声谱」。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '年纪倒有二十六岁，《五经》还不曾念完，文理实在欠通，', en: 'Though twenty-six, he had not finished the Five Classics, and his writing was woeful,' },
    { start: 6, end: 11.6, zh: '却又酷好掉文，满口之乎者也，腐气可掏。', en: 'yet he loved to show off, his speech stuffed with archaic particles, reeking of pedantry.' },
    { start: 12.4, end: 21.6, zh: '有个苏州拔贡生高品，与他相熟，送他一个诨名：「虫蛀千字文」。', en: 'Gao Pin, a senior licentiate from Suzhou, dubbed him “The Worm-Eaten Thousand Character Classic.”' },
    { start: 22.4, end: 27, zh: '乃弟嗣元，生得枭唇露齿，又是个吊眼皮，右边一只眼睛高高吊起，像是朱笔圈了半圈。', en: 'His brother Siyuan had buck teeth and a right eyelid hitched high, as if half-circled in vermilion.' },
    { start: 27, end: 31.6, zh: '又犯了口吃的毛病，愈着急愈说不清楚。', en: 'He also stammered, and the more agitated he became, the less he could get out.' },
    { start: 31.6, end: 35.6, zh: '高品也送他一个混号，叫做「迭韵双声谱」，这两个废物真是一对。', en: 'Gao Pin called him “The Stuttering Dictionary.” Truly a perfect pair.' },
  ],
});
