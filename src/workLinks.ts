import { characterAppearances, type SceneBullet } from './characterAppearances';

export interface WorkSceneLink {
  characterId: string;
  chapter: number;
  bullet: SceneBullet;
}

export interface CharacterWorkLink {
  work: string; // work key (Chinese title without 《》)
  chapters: number[];
  sceneCount: number;
}

// Computed intertextuality layer: every curated scene bullet is scanned once
// for 《…》 title tokens, linking works ↔ characters ↔ scenes. In Pinhua
// Baojian repertoire is rarely decorative — what a performer stages comments
// on his situation — so these links surface where a work is *performed or
// invoked in a character's own scenes*, not merely cited in the chapter.
const WORK_TITLE_REGEX = /《([^》\n]{1,40})》/g;

let linksByWork: Map<string, WorkSceneLink[]> | null = null;
let linksByCharacter: Map<string, Map<string, WorkSceneLink[]>> | null = null;

function buildIndex(): void {
  if (linksByWork && linksByCharacter) return;
  linksByWork = new Map();
  linksByCharacter = new Map();

  for (const [characterId, appearances] of Object.entries(characterAppearances)) {
    for (const [chapterKey, bullets] of Object.entries(appearances)) {
      const chapter = Number(chapterKey);
      if (!Number.isFinite(chapter)) continue;
      for (const bullet of bullets) {
        const seenInBullet = new Set<string>();
        for (const match of bullet.zh.matchAll(WORK_TITLE_REGEX)) {
          const work = match[1].trim();
          if (!work || seenInBullet.has(work)) continue;
          seenInBullet.add(work);

          const link: WorkSceneLink = { characterId, chapter, bullet };

          const workLinks = linksByWork.get(work);
          if (workLinks) workLinks.push(link);
          else linksByWork.set(work, [link]);

          let charWorks = linksByCharacter.get(characterId);
          if (!charWorks) {
            charWorks = new Map();
            linksByCharacter.set(characterId, charWorks);
          }
          const charWorkLinks = charWorks.get(work);
          if (charWorkLinks) charWorkLinks.push(link);
          else charWorks.set(work, [link]);
        }
      }
    }
  }
}

/** Scene-level links for one work, ordered by chapter. */
export function getWorkSceneLinks(work: string): WorkSceneLink[] {
  buildIndex();
  const links = linksByWork!.get(work) ?? [];
  return [...links].sort((a, b) => a.chapter - b.chapter);
}

/** Works invoked in a character's own scenes, most-linked first. */
export function getCharacterWorkLinks(characterId: string): CharacterWorkLink[] {
  buildIndex();
  const charWorks = linksByCharacter!.get(characterId);
  if (!charWorks) return [];
  return [...charWorks.entries()]
    .map(([work, links]) => ({
      work,
      chapters: [...new Set(links.map((l) => l.chapter))].sort((a, b) => a - b),
      sceneCount: links.length,
    }))
    .sort((a, b) => b.sceneCount - a.sceneCount || a.work.localeCompare(b.work));
}
