import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 34. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：差不多天天上他的馆子，已赚了他正千吊钱了。这一桌莱连碗开起帐来，总要虚开五六倍。应五十吊，大
 *   约总开三百吊。
 *
 * Translation: Yet, he visited this restaurant almost daily, pouring over a thousand strings of cash into
 *   the proprietor's coffers. A banquet such as this, factoring in the shattered porcelain,
 *   would be billed at five or six times its actual cost; a fifty-string feast would
 *   effortlessly transform into a three-hundred-string invoice.
 *
 * Staging: the restaurant day after day, Xi’s cart at the door; the counter, the abacus and the bill
 *   written out as 五十 swells to 三百.
 */
export default defineStory({
  title: { en: 'Fifty becomes three hundred', zh: '虚开五六倍' },
  description: {
    en: 'Xi eats there almost every day, and the restaurant has made a thousand strings off him already. A meal like tonight’s, bowls and all, will be billed at five or six times its cost: fifty strings become three hundred.',
    zh: '奚十一差不多天天上他的馆子，已赚了正千吊钱。这一桌菜连碗开起帐来，总要虚开五六倍：应五十吊，总开三百吊。',
  },
  shots: [
    {
      start: 0, end: 18,
      title: { en: 'Every day', zh: '天天上他的馆子' },
      quote: '差不多天天上他的馆子，已赚了他正千吊钱了。',
      caption: { en: 'Xi eats here nearly every day; the house has made a thousand strings from him.', zh: '差不多天天来，已赚了他正千吊钱。' },
    },
    {
      start: 18, end: 36,
      title: { en: 'The bill', zh: '开起帐来' },
      quote: '应五十吊，大约总开三百吊。',
      caption: { en: 'Tonight’s table, bowls and all, will be billed five or six times over: fifty strings become three hundred.', zh: '这一桌连碗开帐，虚开五六倍：应五十吊，开三百吊。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 17.6, zh: '差不多天天上他的馆子，已赚了他正千吊钱了。', en: 'He ate at the place almost every day, and they had made a good thousand strings off him already.' },
    { start: 18.4, end: 26, zh: '这一桌莱连碗开起帐来，总要虚开五六倍。', en: 'This table, broken bowls included, would be billed at five or six times its cost:' },
    { start: 26, end: 35.6, zh: '应五十吊，大约总开三百吊。', en: 'fifty strings’ worth would come to some three hundred.' },
  ],
});
