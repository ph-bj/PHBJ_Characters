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
    caption: { en: 'Water sleeves turn in the light; over wine, the audience appraises the performance.', zh: '水袖随身而转，满座举杯观戏，灯月相映。' },
  },
  {
    start: 20, end: 29,
    title: { en: 'Feeling with dignity', zh: '用情守礼' },
    quote: '用情守礼之君子……洁身自好的优伶',
    caption: { en: 'A gentleman and a performer exchange a bow, leaving a respectful distance between them.', zh: '君子与优伶隔阶相揖，以彼此的敬重寄托情意。' },
  },
  {
    start: 29, end: 36,
    title: { en: 'One word: feeling', zh: '皆是一个情字' },
    quote: '遂以游戏之笔，摹写游戏之人。',
    caption: { en: 'The spectacle becomes a page: ten columns await the portraits, gathered under 情—feeling.', zh: '繁华收入笔底，十行留白待写众生，终归于一个“情”字。' },
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
