/** Authored against Chapter 1, paragraph 1. The people here are unnamed archetypes. */
export const CAPITAL_PROLOGUE_SHOTS = [
  {
    start: 0, end: 9,
    title: { en: 'The capital after dark', zh: '京华入夜' },
    quote: '京师演戏之盛，甲于天下。',
    caption: { en: 'Lanterns lead through the crowded capital toward its theatres.', zh: '华灯连巷，人影交织，京城的繁华汇向歌台舞榭。' },
  },
  {
    start: 9, end: 20,
    title: { en: 'A city watching the stage', zh: '歌台舞榭' },
    quote: '处处歌台舞榭；……时时醉月评花。',
    caption: { en: 'Over wine, patrons turn between their companions and the stage; water sleeves follow the performers’ measured turns.', zh: '看客举杯评艺，时而顾盼同席，时而凝神台上；优伶回身，水袖随转。' },
  },
  {
    start: 20, end: 29,
    title: { en: 'Feeling with dignity', zh: '用情守礼' },
    quote: '用情守礼之君子……洁身自好的优伶',
    caption: { en: 'A gentleman bows; the performer returns the greeting. Their distance remains: affection expressed through mutual respect.', zh: '君子先揖，优伶还礼；相对而不逾距，以彼此的敬重寄托情意。' },
  },
  {
    start: 29, end: 36,
    title: { en: 'One word: feeling', zh: '皆是一个情字' },
    quote: '先将缙绅中子弟分作十种，皆是一个情字。',
    caption: { en: 'Ten columns anticipate the portraits to come. Stroke by stroke, the brush gathers them under 情—feeling.', zh: '十列预示将写的十种人物，笔随墨行，一笔一画汇成一个“情”字。' },
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
