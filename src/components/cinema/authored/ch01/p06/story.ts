import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 6. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：这颜庄在日，与士燮既系郎舅至亲，又有雷陈至契。不料于三十岁即赴召玉楼，他夫人郑氏绝食殉
 *   节。那时仲清年甫三龄，士燮抚养在家，又与郑氏夫人请旌表烈。仲清在士燮处，到十九岁上中了个
 *   副车。是年士燮与其作伐，赘于同乡同年现任通政司王文辉家为婿。这王文辉是颜夫人的表兄，与仲
 *   清亲上加亲，翁婿甚为相得。那一位姓史名南湘，号竹君，是湖广汉阳人，现年二十四岁，已中了本
 *   省解元。父亲史曾望现为吏科给事中。这两人同是才高八斗，学富五车，但两人的情性却又各不相
 *   同。仲清是孤高自洁，坦白为怀。将他的学问与子玉比较起来，子玉是纯粹一路，仲清是旷达一路。
 *   一切人情物理，仲清不过略观大概，不求甚解。子玉则钩探索隐，精益求精。
 *
 * Translation: When Yan Zhuang was alive, he shared not only the intimate bond of a brother-in-law with
 *   Shixie but also a profound friendship akin to that of Lei and Chen. Tragically, he was
 *   summoned to the Jade Pavilion at the mere age of thirty, and his wife, Lady Zheng, starved
 *   herself to death to preserve her chastity and follow him. At that time, Zhongqing was
 *   barely three years old; Shixie brought him into his home to raise him and petitioned the
 *   court to erect a memorial arch honoring Lady Zheng's fierce devotion. Zhongqing lived under
 *   Shixie's roof until the age of nineteen, when he passed the examinations as a supplementary
 *   candidate. That same year, Shixie acted as matchmaker, arranging for him to marry into the
 *   family of Wang Wenhui, the current Commissioner of the Transmission Office, who shared both
 *   a hometown and examination cohort with Shixie. As Wang Wenhui was Lady Yan's cousin, this
 *   union layered family ties upon family ties, and father-in-law and son-in-law found great
 *   harmony together. The other visitor was surnamed Shi, named Nanxiang, and styled Zhujun.
 *   Hailing from Hanyang in Huguang, he was twenty-four years old and had already claimed the
 *   title of Jieyuan—the top scholar in his provincial examination. His father, Shi Zengwang,
 *   currently served as a Supervising Secretary in the Ministry of Personnel. Both young men
 *   possessed towering intellects and learning profound enough to fill five carts, yet their
 *   temperaments could not have been more distinct. Zhongqing was solitary, lofty, and
 *   self-purifying, bearing a heart of open candor. If one compared his scholarship with
 *   Ziyu's, Ziyu followed the path of absolute purity, whereas Zhongqing pursued the path of
 *   expansive unorthodoxy. In matters of human sentiment and physical principles, Zhongqing
 *   grasped the broad outlines without seeking exhausting detail, while Ziyu probed the hidden
 *   depths, constantly refining his understanding to greater perfection.
 *
 * Staging: a memorial arch to Zhongqing’s mother, his upbringing, Nanxiang’s portrait, and the two cousins compared.
 */
export default defineStory({
  title: { en: 'Zhongqing and Nanxiang', zh: '仲清与南湘' },
  description: {
    en: 'Zhongqing’s orphaned childhood and marriage; Shi Nanxiang, top provincial scholar; and how Zhongqing’s learning differs from Ziyu’s.',
    zh: '仲清幼孤、成婚；史南湘为解元；仲清与子玉学问之别。',
  },
  shots: [
    {
      start: 0, end: 10,
      title: { en: 'A mother’s devotion', zh: '郑氏殉节' },
      quote: '他夫人郑氏绝食殉节。',
      caption: { en: 'Yan Zhuang died at thirty; his wife starved herself to follow him, and an arch was raised to her.', zh: '颜庄三十而卒，夫人郑氏绝食殉节，请旌表烈。' },
    },
    {
      start: 10, end: 18,
      title: { en: 'Raised by Shixie', zh: '士燮抚养在家' },
      quote: '那时仲清年甫三龄，士燮抚养在家',
      caption: { en: 'Shixie raised the three-year-old Zhongqing, who passed the examinations at nineteen and married into the Wang family.', zh: '士燮抚养三岁的仲清；十九岁中副车，赘于王文辉家。' },
    },
    {
      start: 18, end: 27,
      title: { en: 'Shi Nanxiang', zh: '史南湘' },
      quote: '那一位姓史名南湘，号竹君……已中了本省解元。',
      caption: { en: 'The other visitor: Shi Nanxiang, styled Zhujun, of Hanyang, twenty-four, top scholar of his province.', zh: '史南湘，号竹君，汉阳人，年二十四，已中解元。' },
    },
    {
      start: 27, end: 36,
      title: { en: 'Purity and breadth', zh: '纯粹与旷达' },
      quote: '子玉是纯粹一路，仲清是旷达一路。',
      caption: { en: 'Ziyu follows the path of purity, probing every depth; Zhongqing the path of breadth, grasping the outline.', zh: '子玉纯粹，钩探索隐；仲清旷达，略观大概。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4.6, zh: '这颜庄在日，与士燮既系郎舅至亲，又有雷陈至契。', en: 'Yan Zhuang had been Shixie’s brother-in-law and dearest friend.' },
    { start: 4.6, end: 9.6, zh: '不料于三十岁即赴召玉楼，他夫人郑氏绝食殉节。', en: 'He died at thirty, and his wife, Lady Zheng, starved herself to follow him.' },
    { start: 10.4, end: 14, zh: '那时仲清年甫三龄，士燮抚养在家，又与郑氏夫人请旌表烈。', en: 'Shixie raised three-year-old Zhongqing and petitioned for an arch to honor Lady Zheng.' },
    { start: 14, end: 17.6, zh: '到十九岁上中了个副车，赘于王文辉家为婿。', en: 'At nineteen Zhongqing passed as a supplementary candidate and married into Wang Wenhui’s family.' },
    { start: 18.4, end: 22.6, zh: '那一位姓史名南湘，号竹君，是湖广汉阳人，', en: 'The other was Shi Nanxiang, styled Zhujun, of Hanyang in Huguang,' },
    { start: 22.6, end: 26.6, zh: '现年二十四岁，已中了本省解元。', en: 'twenty-four, already the top scholar of his provincial examination.' },
    { start: 27.4, end: 31.6, zh: '子玉是纯粹一路，仲清是旷达一路。', en: 'Ziyu followed the path of purity; Zhongqing the path of expansive breadth.' },
    { start: 31.6, end: 35.6, zh: '仲清略观大概，不求甚解；子玉则钩探索隐，精益求精。', en: 'Zhongqing grasped the broad outlines; Ziyu probed the hidden depths.' },
  ],
});
