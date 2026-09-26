import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 21. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：又见那个卖玉器的挤上楼去，捏着些零碎玉件，到那些相公身边，混了一阵，只管兜搭，总要卖成一样才
 *   去的光景。那个黑大汉好不厌他，便吆喝了一声。那卖玉器的尚不肯走，嘴里倒还讲了一句什么。那个黑
 *   大汉听了大怒，便命家人他出去。众家人听不得一声，将他乱推乱撵，那个老头子见势头不好，便也不敢
 *   撒赖，腰驼背曲的，一步步走出来。又要照应了盘内东西，当当啷啷的把些料壶儿、料嘴子砸了好些，弯
 *   了腰捡了一样，盘里倒又落下两样，心里想拚着这条老命讹他一讹，看看那位老爷的相貌，先就害怕，更
 *   非富三爷可比，只得含着眼泪一步步的走下楼来。下了楼，才一路骂出戏园，看得那些相公个个大笑，都
 *   探出身子看他出了戏园，才住了笑。这边富三看了，也拍手称快，聘才更乐得了不得。但不知这个人，是
 *   个什么阔人，少顷等蓉官来问他。只见那黑大汉已起身，带了四个相公，昂昂然大踏步的出去了。那些没
 *   有带去的相公，又分头各去找人。
 *
 * Translation: From his seat, Pincai watched the jade peddler squeeze his way up to the upper gallery,
 *   clutching his remaining trinkets, attempting to hawk his wares among the actors and patrons.
 *   His persistence drew the ire of the dark-faced man, who barked a sharp reprimand. When the
 *   peddler lingered, muttering a faint retort, the towering man exploded in rage, ordering his
 *   servants to [throw] the old man out. The attendants fell upon the peddler without
 *   hesitation, shoving and kicking him violently. Realizing the peril of his situation, the old
 *   man abandoned his usual theatrics. Hunching his back, he scrambled toward the exit. In his
 *   haste to protect his tray, a cascade of glass snuff bottles and nozzles clattered to the
 *   floor, shattering instantly. As he bent to retrieve a piece, two more tumbled from the tray.
 *   For a fleeting second, he considered risking his life to extort this new assailant, but one
 *   glance at the man's terrifying visage convinced him otherwise—this was no reasonable soul
 *   like Fu the Third. Eyes brimming with humiliated tears, the old man stumbled down the stairs
 *   and fled the theater, cursing into the wind. The actors in the gallery erupted into peals of
 *   laughter, leaning over the railings to watch his undignified retreat before settling back
 *   into their seats. Down below, Fu the Third clapped his hands in grim satisfaction, while
 *   Pincai felt a profound sense of vindication. Yet, Pincai could not help but wonder about the
 *   identity of the fearsome, wealthy patron upstairs, resolving to ask Rongguan upon his
 *   return. Shortly after, the dark-faced man rose, gathered four young actors, and strode out
 *   with imperious arrogance. The remaining actors swiftly dispersed, seeking out other patrons.
 *
 * Staging: the peddler up the stair and into the box; the shove and the falling trinkets; his tearful
 *   descent past the laughing rail; the big man’s exit with four dan.
 */
export default defineStory({
  title: { en: 'Thrown out', zh: '轰出去' },
  description: {
    en: 'The peddler climbs to the gallery to pester the dark-faced man’s party; the man bellows, his servants shove the old man out, trinkets smashing as he goes. In tears he stumbles downstairs cursing, while the dan hang over the rail laughing and Fu claps. Then the dark-faced man sweeps out with four dan.',
    zh: '卖玉器的挤上楼去兜搭，那黑大汉大怒，命家人把他乱推乱撵，料壶料嘴砸了好些。老头含泪下楼，一路骂出去；相公们探身大笑，富三拍手称快。那黑大汉带了四个相公大踏步出去了。',
  },
  shots: [
    {
      start: 0, end: 8,
      title: { en: 'Up the stair', zh: '挤上楼去' },
      quote: '又见那个卖玉器的挤上楼去，捏着些零碎玉件',
      caption: { en: 'The peddler squeezes up to the gallery with his trinkets and pesters the dan.', zh: '卖玉器的挤上楼去，到相公身边兜搭。' },
    },
    {
      start: 8, end: 18,
      title: { en: 'Shoved out', zh: '乱推乱撵' },
      quote: '众家人听不得一声，将他乱推乱撵',
      caption: { en: 'The dark-faced man roars; his servants shove the old man along, trinkets smashing.', zh: '黑大汉大怒，家人乱推乱撵，料壶料嘴砸了好些。' },
    },
    {
      start: 18, end: 27,
      title: { en: 'Down in tears', zh: '含着眼泪' },
      quote: '只得含着眼泪一步步的走下楼来',
      caption: { en: 'Weeping, he stumbles down and out, cursing; the dan hang over the rail laughing, and Fu claps.', zh: '老头含泪下楼，一路骂出去；相公们探身大笑，富三拍手。' },
    },
    {
      start: 27, end: 36,
      title: { en: 'Four dan in his train', zh: '带了四个相公' },
      quote: '那黑大汉已起身，带了四个相公，昂昂然大踏步的出去了。',
      caption: { en: 'The dark-faced man rises and strides out with four dan.', zh: '黑大汉起身，带了四个相公，大踏步出去了。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 7.6, zh: '又见那个卖玉器的挤上楼去，捏着些零碎玉件，到那些相公身边，混了一阵。', en: 'Then the peddler squeezed up to the gallery with his trinkets and hung about the dan.' },
    { start: 8.4, end: 12.6, zh: '那个黑大汉听了大怒，便命家人他出去。众家人将他乱推乱撵，', en: 'The dark-faced man flew into a rage and had his servants throw him out; they shoved and hustled him,' },
    { start: 12.6, end: 17.6, zh: '当当啷啷的把些料壶儿、料嘴子砸了好些，弯了腰捡了一样，盘里倒又落下两样。', en: 'and glass bottles and mouthpieces clattered and smashed; he stooped for one and two more fell.' },
    { start: 18.4, end: 22.6, zh: '只得含着眼泪一步步的走下楼来。下了楼，才一路骂出戏园，', en: 'In tears, he made his way down step by step, and only below did he curse his way out,' },
    { start: 22.6, end: 26.6, zh: '看得那些相公个个大笑。这边富三看了，也拍手称快。', en: 'while the dan all laughed. Down here, Fu clapped his hands with delight.' },
    { start: 27.4, end: 35.6, zh: '只见那黑大汉已起身，带了四个相公，昂昂然大踏步的出去了。', en: 'Then the dark-faced man rose and strode out, taking four dan with him.' },
  ],
});
