import { ChapterAppreciationData } from "../appreciationTypes";
import { chapter1Appreciation, chapter2Appreciation, chapter3Appreciation } from "./chapter1to10";
import { chapter4Appreciation } from "./chapter4to10";

// A registry mapping chapter ID to its appreciation data.
// In the future, we can implement dynamic imports or lazy loading here if this file grows too large.
export const appreciationDataRegistry: Record<number, ChapterAppreciationData> = {
  1: chapter1Appreciation,
  2: chapter2Appreciation,
  3: chapter3Appreciation,
  4: chapter4Appreciation,
};

/**
 * Helper function to retrieve appreciation data for a given chapter.
 * Returns null if data for that chapter hasn't been written yet.
 */
export function getChapterAppreciation(chapterId: number): ChapterAppreciationData | null {
  return appreciationDataRegistry[chapterId] || null;
}
