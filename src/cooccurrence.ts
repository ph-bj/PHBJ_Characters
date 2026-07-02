import { characterAppearances } from './characterAppearances';

export interface CoOccurrenceEdge {
  source: string;   // Character ID
  target: string;   // Character ID
  weight: number;   // number of chapters in which both characters appear
  chapters: number[];
}

let cache: CoOccurrenceEdge[] | null = null;

/**
 * Chapter-level co-occurrence network computed from the curated appearance
 * records: two characters are linked once per chapter they share, so edge
 * weight = number of shared chapters. Contrast with the hand-annotated
 * `relationships` in data.ts — discrepancies between the two views are
 * themselves of scholarly interest.
 */
export function getCoOccurrenceEdges(): CoOccurrenceEdge[] {
  if (cache) return cache;

  const byChapter = new Map<number, string[]>();
  for (const [characterId, appearances] of Object.entries(characterAppearances)) {
    for (const key of Object.keys(appearances)) {
      const chapter = Number(key);
      if (!Number.isFinite(chapter)) continue;
      const ids = byChapter.get(chapter);
      if (ids) ids.push(characterId);
      else byChapter.set(chapter, [characterId]);
    }
  }

  const byPair = new Map<string, CoOccurrenceEdge>();
  for (const [chapter, ids] of byChapter) {
    ids.sort();
    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        const key = `${ids[i]}|${ids[j]}`;
        let edge = byPair.get(key);
        if (!edge) {
          edge = { source: ids[i], target: ids[j], weight: 0, chapters: [] };
          byPair.set(key, edge);
        }
        edge.weight += 1;
        edge.chapters.push(chapter);
      }
    }
  }

  const edges = [...byPair.values()];
  for (const edge of edges) edge.chapters.sort((a, b) => a - b);
  cache = edges;
  return edges;
}
