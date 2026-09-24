/** Authored against Chapter 1, paragraph 1. The people here are unnamed archetypes. */
export const CAPITAL_PROLOGUE_SHOTS = [
  {
    start: 0, end: 7,
    title: { en: 'A foot and five from heaven', zh: '尺五天边' },
    quote: '京师演戏之盛，甲于天下。地当尺五天边，处处歌台舞榭',
    caption: { en: 'Descending through the clouds to a capital that stands almost at heaven’s edge, stage after stage lights up across the city.', zh: '自云端徐徐而下，京城近在天边，歌台舞榭次第亮起。' },
  },
  {
    start: 7, end: 15,
    title: { en: 'Drunk on the moon, judging flowers', zh: '醉月评花' },
    quote: '人在大千队里，时时醉月评花。',
    caption: { en: 'Lanterns stream through the streets below. On a tavern terrace the moon floats in a wine cup as a peony opens, and a petal falls in.', zh: '楼下灯火如流，人海熙攘；楼头杯中浮月，牡丹初绽，一瓣落入酒中。' },
  },
  {
    start: 15, end: 22,
    title: { en: 'A playful brush', zh: '游戏之笔' },
    quote: '遂以游戏之笔，摹写游戏之人。',
    caption: { en: 'On a lamp-lit shadow-play screen, a brush sketches the city’s players, strange and wonderful, and they begin to move.', zh: '灯影纸幕之上，一支游戏之笔勾出怪怪奇奇的众生，影随笔动。' },
  },
  {
    start: 22, end: 29,
    title: { en: 'Fond, never wanton', zh: '好色不淫' },
    quote: '几个用情守礼之君子，与几个洁身自好的优伶',
    caption: { en: 'At a moon gate, a gentleman bows and the performer returns the bow. Blossoms fall between them, and neither crosses the threshold.', zh: '月洞门前，君子长揖，优伶还礼；落花在二人之间飘过，谁也不越那道门槛。' },
  },
  {
    start: 29, end: 36,
    title: { en: 'One word: feeling', zh: '皆是一个情字' },
    quote: '先将缙绅中子弟分作十种，皆是一个情字。',
    caption: { en: 'The city’s lights gather into ten kinds of people, and all ten are written with the same character: 情, feeling.', zh: '满城灯火聚成十种人物，十种终归一字——情。' },
  },
] as const;

export function capitalPrologueShotAt(seconds: number) {
  const index = CAPITAL_PROLOGUE_SHOTS.findIndex(shot => seconds < shot.end);
  return index === -1 ? CAPITAL_PROLOGUE_SHOTS.length - 1 : index;
}

export function capitalPrologueFadeAt(seconds: number) {
  const distance = Math.min(...CAPITAL_PROLOGUE_SHOTS.slice(1).map(shot => Math.abs(seconds - shot.start)));
  return Math.max(0, 1 - distance / 0.5);
}
