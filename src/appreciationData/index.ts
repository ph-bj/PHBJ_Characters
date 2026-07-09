import { ChapterAppreciationData } from "../appreciationTypes";
import { chapter1Appreciation, chapter2Appreciation, chapter3Appreciation } from "./chapter1to10";
import { chapter4Appreciation, chapter5Appreciation, chapter6Appreciation, chapter7Appreciation, chapter8Appreciation, chapter9Appreciation, chapter10Appreciation } from "./chapter4to10";

// A registry mapping chapter ID to its appreciation data.
// In the future, we can implement dynamic imports or lazy loading here if this file grows too large.
export const appreciationDataRegistry: Record<number, ChapterAppreciationData> = {
  1: chapter1Appreciation,
  2: chapter2Appreciation,
  3: chapter3Appreciation,
  4: chapter4Appreciation,
  5: chapter5Appreciation,
  6: chapter6Appreciation,
  7: chapter7Appreciation,
  8: chapter8Appreciation,
  9: chapter9Appreciation,
  10: chapter10Appreciation,
};

/**
 * Helper function to retrieve appreciation data for a given chapter.
 * Returns null if data for that chapter hasn't been written yet.
 */
export function getChapterAppreciation(chapterId: number): ChapterAppreciationData | null {
  return appreciationDataRegistry[chapterId] || null;
}
