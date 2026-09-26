import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 31. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：掌柜的又将那三个相公也找了进来，吩咐伙计们照样办菜，拿上好的碗盏，与大老爷消气和事。掌柜的又
 *   说那走堂的道：「老三，你不会伺候。这砸碗的声音，是最好听的。你应该拿顶细料的磁碗出来，那就砸
 *   得又清又脆，也叫大老爷乐一乐。这半粗半细的磁器，砸起来声音也带些笨浊。你瞧大老爷当赏你五十吊
 *   ，也只赏你四十吊了。」说得众伙计哈哈大笑，一面去扫地抹桌子。这一地的莱，已经有四条大狗进去吃
 *   得差不多了。
 *
 * Translation: The proprietor corralled the remaining three actors into the new room, dispatching his staff
 *   to recreate the feast exactly as before, demanding the finest porcelain to pacify the Great
 *   Lord's residual ire. The proprietor then said to the head waiter, "Old Three, you are an
 *   absolute fool! The shattering of fine porcelain is the sweetest music there is. You should
 *   have served him on our thinnest, most exquisite bowls—they shatter with a crisp, crystalline
 *   ring that would have delighted the Great Lord immensely. This half-coarse rubbish merely
 *   clunks dullly against the floor. He intended to tip you fifty strings of cash, and now you
 *   shall receive only forty!" The junior staff erupted into muffled laughter as they scrambled
 *   to sweep the debris. The opulent feast scattered across the floor had already been rapidly
 *   devoured by four massive stray dogs that had slipped inside.
 *
 * Staging: the new table laid with fine porcelain; the proprietor holding a bowl up to his ear, lecturing
 *   the waiter; the old room with the dogs gorging on the floor.
 */
export default defineStory({
  title: { en: 'The sweetest sound', zh: '砸碗的声音最好听' },
  description: {
    en: 'The proprietor brings the three dan back, orders the feast made again on the best china, and scolds the waiter: smashing fine porcelain is the sweetest sound—he should have served the thinnest bowls to ring crisp and clear; now his tip is forty strings instead of fifty. The waiters laugh and sweep up, but four big dogs have already eaten most of the spilled feast.',
    zh: '掌柜的把三个相公找回，吩咐照样办菜，拿上好碗盏。又说走堂的：砸碗的声音最好听，该拿顶细料的磁碗，砸起来又清又脆；五十吊的赏只赏四十吊了。伙计们大笑，去扫地；一地的菜，已被四条大狗吃得差不多了。',
  },
  shots: [
    {
      start: 0, end: 10,
      title: { en: 'The feast again', zh: '照样办菜' },
      quote: '吩咐伙计们照样办菜，拿上好的碗盏',
      caption: { en: 'The three dan are fetched back; the feast is ordered again on the finest china.', zh: '三个相公找了回来，照样办菜，拿上好的碗盏。' },
    },
    {
      start: 10, end: 24,
      title: { en: 'Crisp and clear', zh: '又清又脆' },
      quote: '你应该拿顶细料的磁碗出来，那就砸得又清又脆',
      caption: { en: 'The proprietor to the waiter: fine porcelain smashes crisp and clear—you’ve cost yourself ten strings.', zh: '掌柜的说走堂的：顶细料的磁碗砸得又清又脆；你这赏钱少了十吊。' },
    },
    {
      start: 24, end: 36,
      title: { en: 'Four dogs', zh: '四条大狗' },
      quote: '这一地的莱，已经有四条大狗进去吃得差不多了。',
      caption: { en: 'In the wrecked room, four big dogs have eaten most of the feast off the floor.', zh: '那一地的菜，已被四条大狗吃得差不多了。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 9.6, zh: '掌柜的又将那三个相公也找了进来，吩咐伙计们照样办菜，拿上好的碗盏，与大老爷消气和事。', en: 'The proprietor fetched the three dan back and had the feast made again on the best bowls, to soothe the Great Lord.' },
    { start: 10.4, end: 15, zh: '掌柜的又说那走堂的道：「老三，你不会伺候。这砸碗的声音，是最好听的。', en: 'Then to the waiter: “Old Three, you don’t know how to serve. The sound of smashing bowls is the sweetest there is.' },
    { start: 15, end: 19.6, zh: '你应该拿顶细料的磁碗出来，那就砸得又清又脆，也叫大老爷乐一乐。', en: 'You should have brought the finest porcelain—it smashes crisp and clear, and the Great Lord would enjoy it.' },
    { start: 19.6, end: 23.6, zh: '你瞧大老爷当赏你五十吊，也只赏你四十吊了。」', en: 'He’d have tipped you fifty strings; now it’ll be forty.”' },
    { start: 24.4, end: 35.6, zh: '说得众伙计哈哈大笑，一面去扫地抹桌子。这一地的莱，已经有四条大狗进去吃得差不多了。', en: 'The waiters roared with laughter and went to sweep up—but four big dogs had already eaten most of the food off the floor.' },
  ],
});
