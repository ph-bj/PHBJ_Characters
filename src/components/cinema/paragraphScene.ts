export const CINEMA_DURATION = 36;

export type Setting = 'river' | 'garden' | 'stage' | 'study' | 'street' | 'courtyard';
export type ScenePlan = {
  seed: number;
  setting: Setting;
  night: boolean;
  weather: 'snow' | 'rain' | 'petals' | 'dust';
  mood: 'tender' | 'tense' | 'reflective' | 'festive';
  title: { en: string; zh: string };
};

const settings: { setting: Setting; words: RegExp; en: string; zh: string }[] = [
  { setting: 'river', words: /船|舟|河|江|湖|渡|岸|码头/g, en: 'Along the water', zh: '水岸行舟' },
  { setting: 'stage', words: /戏台|台上|唱戏|演戏|登台|戏园|戏班|唱曲|笙|箫|舞|锣|鼓/g, en: 'Behind the silk curtain', zh: '戏台绮梦' },
  { setting: 'garden', words: /花园|园中|园内|庭园|亭|池|荷|柳|梅花|桃花|竹|山石/g, en: 'A garden reverie', zh: '园林幽思' },
  { setting: 'study', words: /书房|书案|书桌|读书|写字|笔|砚|墨|诗|文章|书信|信札/g, en: 'Words by lamplight', zh: '灯下书心' },
  { setting: 'street', words: /街|巷|市|铺|店|轿|车|城门|行人/g, en: 'Through the old city', zh: '街巷浮生' },
];

/** A deterministic, symbolic staging of the source text, shared by both languages. */
export function planParagraphScene(source: string): ScenePlan {
  let seed = 2166136261;
  for (const char of source) seed = Math.imul(seed ^ char.charCodeAt(0), 16777619) >>> 0;
  const ranked = settings.map(item => ({ ...item, score: [...source.matchAll(item.words)].length }))
    .sort((a, b) => b.score - a.score);
  const best = ranked[0].score > 0 ? ranked[0] : { setting: 'courtyard' as const, en: 'An intimate courtyard', zh: '庭院人间' };
  return {
    seed,
    setting: best.setting,
    title: { en: best.en, zh: best.zh },
    night: /夜|月光|月色|灯|烛|黄昏|暮|更天/.test(source),
    weather: /下雪|大雪|飞雪|风雪|雪花|积雪|白雪/.test(source) ? 'snow'
      : /下雨|大雨|细雨|风雨|雨声|雨点/.test(source) ? 'rain'
      : /花|春|桃|梅/.test(source) ? 'petals' : 'dust',
    mood: /怒|恨|骂|打死|杀|惊|惧/.test(source) ? 'tense'
      : /泪|愁|病|悲|叹|伤心/.test(source) ? 'reflective'
      : /宴|酒|笑|喜|热闹/.test(source) ? 'festive'
      : /情|爱|心|相思/.test(source) ? 'tender' : 'reflective',
  };
}

export const sceneLabels = {
  mood: {
    tender: { en: 'Tenderness', zh: '柔情' }, tense: { en: 'Tension', zh: '波澜' },
    reflective: { en: 'Reflection', zh: '沉思' }, festive: { en: 'Celebration', zh: '欢聚' },
  },
  weather: {
    snow: { en: 'Falling snow', zh: '飞雪' }, rain: { en: 'Rain', zh: '落雨' },
    petals: { en: 'Drifting petals', zh: '落花' }, dust: { en: 'Drifting light', zh: '浮光' },
  },
};
