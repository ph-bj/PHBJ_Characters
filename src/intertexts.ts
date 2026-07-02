import { chapters } from './chapters';
import { characters } from './data';
import type { Character } from './types';
import {
  findMentionPositionsInText,
  getChapterMentionedCharacters,
  getCharacterMentionTokens,
} from './utils';

// Computed intertextuality layer. In Pinhua Baojian, cited repertoire is
// rarely decorative — what a performer stages comments on his situation — so
// we link each 《work》 citation in the chapter text to the characters
// mentioned within PROXIMITY characters of it: roughly, who is "on stage"
// when the work is invoked. This is a computed heuristic, not a curated
// annotation, and is labeled as such in the UI.
const PROXIMITY = 150;

const WORK_TITLE_REGEX = /《([^》\n]{1,40})》/g;

export interface WorkCharacterLink {
  character: Character;
  chapters: number[];
  hits: number; // work citations with this character mentioned nearby
}

export interface CharacterWorkLink {
  work: string; // work key (Chinese title without 《》)
  chapters: number[];
  hits: number;
}

/** Characters mentioned near citations of `work`, strongest link first. */
export function getCharactersNearWork(
  work: string,
  chapterIds: number[],
): WorkCharacterLink[] {
  const token = `《${work}》`;
  const byCharacter = new Map<string, { chapters: Set<number>; hits: number }>();

  for (const chapterId of chapterIds) {
    const chapter = chapters.find((c) => c.id === chapterId);
    if (!chapter) continue;
    const content = chapter.content;

    const workPositions: number[] = [];
    let pos = 0;
    while ((pos = content.indexOf(token, pos)) !== -1) {
      workPositions.push(pos);
      pos += token.length;
    }
    if (workPositions.length === 0) continue;

    for (const character of getChapterMentionedCharacters(content)) {
      const tokens = getCharacterMentionTokens(character);
      if (tokens.length === 0) continue;
      const mentionPositions = findMentionPositionsInText(content, tokens);
      if (mentionPositions.length === 0) continue;

      let chapterHits = 0;
      for (const workPos of workPositions) {
        if (mentionPositions.some((p) => Math.abs(p - workPos) <= PROXIMITY)) {
          chapterHits += 1;
        }
      }
      if (chapterHits === 0) continue;

      let entry = byCharacter.get(character.id);
      if (!entry) {
        entry = { chapters: new Set(), hits: 0 };
        byCharacter.set(character.id, entry);
      }
      entry.chapters.add(chapterId);
      entry.hits += chapterHits;
    }
  }

  return [...byCharacter.entries()]
    .map(([id, entry]) => ({
      character: characters.find((c) => c.id === id)!,
      chapters: [...entry.chapters].sort((a, b) => a - b),
      hits: entry.hits,
    }))
    .filter((link) => link.character)
    .sort((a, b) => b.hits - a.hits || a.character.name.localeCompare(b.character.name));
}

/** Works cited near mentions of `character` across the whole text, strongest link first. */
export function getWorksNearCharacter(character: Character): CharacterWorkLink[] {
  const tokens = getCharacterMentionTokens(character);
  if (tokens.length === 0) return [];
  const byWork = new Map<string, { chapters: Set<number>; hits: number }>();

  for (const chapter of chapters) {
    const content = chapter.content;
    const workMatches = [...content.matchAll(WORK_TITLE_REGEX)];
    if (workMatches.length === 0) continue;

    const mentionPositions = findMentionPositionsInText(content, tokens);
    if (mentionPositions.length === 0) continue;

    for (const match of workMatches) {
      const workPos = match.index ?? 0;
      if (!mentionPositions.some((p) => Math.abs(p - workPos) <= PROXIMITY)) continue;
      const work = match[1].trim();
      if (!work) continue;
      let entry = byWork.get(work);
      if (!entry) {
        entry = { chapters: new Set(), hits: 0 };
        byWork.set(work, entry);
      }
      entry.chapters.add(chapter.id);
      entry.hits += 1;
    }
  }

  return [...byWork.entries()]
    .map(([work, entry]) => ({
      work,
      chapters: [...entry.chapters].sort((a, b) => a - b),
      hits: entry.hits,
    }))
    .sort((a, b) => b.hits - a.hits || a.work.localeCompare(b.work));
}
