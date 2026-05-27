import type { SceneBullet } from './characterAppearances/types';
import { char_0Appearances } from './characterAppearances/char-0';
import { char_1Appearances } from './characterAppearances/char-1';
import { char_2Appearances } from './characterAppearances/char-2';
import { char_3Appearances } from './characterAppearances/char-3';
import { char_4Appearances } from './characterAppearances/char-4';
import { char_5Appearances } from './characterAppearances/char-5';
import { char_9Appearances } from './characterAppearances/char-9';

export type { SceneBullet };

export const characterAppearances: Record<string, Record<number, SceneBullet[]>> = {
  'char-0': char_0Appearances,
  'char-1': char_1Appearances,
  'char-2': char_2Appearances,
  'char-3': char_3Appearances,
  'char-4': char_4Appearances,
  'char-5': char_5Appearances,
  'char-9': char_9Appearances,
};

/** Curated scene bullets from characterAppearances; empty when none exist for this chapter. */
export function getCharacterSceneBullets(
  characterId: string,
  chapterId: number,
): SceneBullet[] {
  return characterAppearances[characterId]?.[chapterId] ?? [];
}
