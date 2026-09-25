import { CAPITAL_PROLOGUE_SHOTS } from './capitalPrologueStory';
import { TEN_KINDS_SHOTS } from './tenKindsStory';

/** One beat of an authored paragraph cinema. `cut: false` continues the previous shot without a fade. */
export type StoryShot = {
  readonly start: number;
  readonly end: number;
  readonly title: { readonly en: string; readonly zh: string };
  readonly quote: string;
  readonly caption: { readonly en: string; readonly zh: string };
  readonly cut?: boolean;
};

export type Sequence = 'capital-prologue' | 'ten-kinds';

export const STORIES: Record<Sequence, { shots: readonly StoryShot[]; description: { en: string; zh: string } }> = {
  'capital-prologue': {
    shots: CAPITAL_PROLOGUE_SHOTS,
    description: {
      zh: '自天边云端降入京城，经杯中月、灯下影、月洞门，终归一个“情”字。画中人物为本段所写的无名君子与优伶。',
      en: 'From the clouds above the capital, through a moon in a wine cup, a shadow-play screen and a moon gate, to a single word: feeling. The figures represent the unnamed gentlemen and performers in this passage.',
    },
  },
  'ten-kinds': {
    shots: TEN_KINDS_SHOTS,
    description: {
      zh: '以水墨写之：长廊十灯，缙绅子弟十种情态；梨园水榭，十位名旦次第登场；浓淡两墨，终归一个“情”字。画中人物均为本段所写的类型，并非具体角色。',
      en: 'Painted in ink: ten lanterns along a gallery reveal the ten kinds of gentlemen; ten leading dan performers take the stage in the Pear Garden; thick ink and pale wash become one word: feeling. The figures are the types this passage names, not particular characters.',
    },
  },
};

export function shotAt(shots: readonly StoryShot[], seconds: number) {
  const index = shots.findIndex(shot => seconds < shot.end);
  return index === -1 ? shots.length - 1 : index;
}

/** Opacity of the dip to black around each cut. */
export function fadeAt(shots: readonly StoryShot[], seconds: number) {
  const cuts = shots.slice(1).filter(shot => shot.cut !== false);
  if (!cuts.length) return 0;
  const distance = Math.min(...cuts.map(shot => Math.abs(seconds - shot.start)));
  return Math.max(0, 1 - distance / 0.5);
}
