import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 1. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：话说魏聘才回来，书房中已吃过饭了，正在踌躇，想到外面馆子上去吃点心。走到账房门口，忽见一个小
 *   厮，托着一个大方盘，内放一只火锅，两盘菜，热气腾腾的送进去了。随后见有管事的许顺跟着进去，见
 *   了聘才，便问：「大爷用过饭没有？」聘才道：「才从外头送信回来的。」许顺道，「既没用饭，何不就
 *   请在账房吃罢。」这许顺夫妇是颜夫人赔房过来的，一切银钱账目皆其经手。聘才进了账房，许顺要让聘
 *   才先吃，聘才不肯，拉他同坐了。
 *
 * Translation: Wei Pincai returned to find that dinner had already been served in the study. Finding
 *   himself at a loss, he considered venturing out to a restaurant for a light repast. As he
 *   approached the accounts room, he caught sight of a young page bearing a large square
 *   tray—upon it rested a steaming hotpot and two freshly prepared dishes, all carried briskly
 *   inside. The head steward, Xu Shun, trailed closely behind. Catching sight of Pincai, Xu Shun
 *   paused to ask, "Has the young master dined?" Pincai replied, "I have only just returned from
 *   an errand." Xu Shun offered, "If you have yet to eat, why not join us here in the accounts
 *   room?" This Xu Shun and his wife were part of Lady Yan's dowry household, entrusted with
 *   managing all the family's financial affairs. Pincai stepped inside, where Xu Shun graciously
 *   urged him to eat first. Pincai politely declined, drawing Xu Shun to sit and share the meal
 *   together.
 *
 * Staging: the courtyard at dusk and the hotpot carried past; Xu Shun’s invitation; the accounts room and
 *   the two men sitting down together.
 */
export default defineStory({
  title: { en: 'Supper in the accounts room', zh: '账房便饭' },
  description: {
    en: 'Pincai comes home too late for supper; a steaming hotpot goes past him into the accounts room, and the steward Xu Shun, keeper of the household’s money, invites him in to share it.',
    zh: '聘才回来误了饭，见火锅热腾腾送进账房；管账的许顺请他进去同吃。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'Too late for supper', zh: '书房已吃过饭' },
      quote: '话说魏聘才回来，书房中已吃过饭了',
      caption: { en: 'Back too late for supper, Pincai is thinking of going out when a steaming hotpot is carried past him.', zh: '聘才回来误了饭，正想出去吃点心，一只火锅热气腾腾的送过去。' },
    },
    {
      start: 12, end: 24,
      title: { en: '“Eat here with us”', zh: '就请在账房吃罢' },
      quote: '既没用饭，何不就请在账房吃罢。',
      caption: { en: 'Xu Shun the steward asks whether he has eaten, and invites him into the accounts room.', zh: '许顺问他用过饭没有，请他在账房吃。' },
    },
    {
      start: 24, end: 36,
      title: { en: 'The steward’s table', zh: '拉他同坐' },
      quote: '许顺要让聘才先吃，聘才不肯，拉他同坐了。',
      caption: { en: 'Xu Shun, who keeps the household’s money, would have him eat first; Pincai pulls him down to sit together.', zh: '许顺掌管银钱账目，要让聘才先吃；聘才拉他同坐。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 6, zh: '话说魏聘才回来，书房中已吃过饭了，正想到外面馆子上去吃点心。', en: 'Pincai came back to find supper over in the study, and thought of going out for a snack.' },
    { start: 6, end: 11.6, zh: '忽见一个小厮，托着一个大方盘，内放一只火锅，两盘菜，热气腾腾的送进去了。', en: 'A page went past with a big tray: a steaming hotpot and two dishes.' },
    { start: 12.4, end: 18, zh: '随后许顺跟着进去，见了聘才，便问：「大爷用过饭没有？」', en: 'Behind him came Xu Shun the steward: “Has the young master eaten?”' },
    { start: 18, end: 23.6, zh: '许顺道：「既没用饭，何不就请在账房吃罢。」', en: '“If not, why not eat here with us in the accounts room?”' },
    { start: 24.4, end: 30, zh: '这许顺夫妇是颜夫人赔房过来的，一切银钱账目皆其经手。', en: 'Xu Shun and his wife had come with Lady Yan’s dowry and kept all the household’s accounts.' },
    { start: 30, end: 35.6, zh: '许顺要让聘才先吃，聘才不肯，拉他同坐了。', en: 'Xu Shun urged Pincai to eat first; Pincai refused and pulled him down beside him.' },
  ],
});
