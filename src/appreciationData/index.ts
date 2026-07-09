import { ChapterAppreciationData } from "../appreciationTypes";
import { chapter1Appreciation } from "./chapter1";
import { chapter2Appreciation } from "./chapter2";
import { chapter3Appreciation } from "./chapter3";
import { chapter4Appreciation } from "./chapter4";
import { chapter5Appreciation } from "./chapter5";
import { chapter6Appreciation } from "./chapter6";
import { chapter7Appreciation } from "./chapter7";
import { chapter8Appreciation } from "./chapter8";
import { chapter9Appreciation } from "./chapter9";
import { chapter10Appreciation } from "./chapter10";
import { chapter11Appreciation } from "./chapter11";
import { chapter12Appreciation } from "./chapter12";
import { chapter13Appreciation } from "./chapter13";
import { chapter14Appreciation } from "./chapter14";
import { chapter15Appreciation } from "./chapter15";
import { chapter16Appreciation } from "./chapter16";
import { chapter17Appreciation } from "./chapter17";
import { chapter18Appreciation } from "./chapter18";
import { chapter19Appreciation } from "./chapter19";
import { chapter20Appreciation } from "./chapter20";
import { chapter21Appreciation } from "./chapter21";
import { chapter22Appreciation } from "./chapter22";
import { chapter23Appreciation } from "./chapter23";
import { chapter24Appreciation } from "./chapter24";
import { chapter25Appreciation } from "./chapter25";
import { chapter26Appreciation } from "./chapter26";
import { chapter27Appreciation } from "./chapter27";
import { chapter28Appreciation } from "./chapter28";
import { chapter29Appreciation } from "./chapter29";
import { chapter30Appreciation } from "./chapter30";
import { chapter31Appreciation } from "./chapter31";
import { chapter32Appreciation } from "./chapter32";
import { chapter33Appreciation } from "./chapter33";
import { chapter34Appreciation } from "./chapter34";
import { chapter35Appreciation } from "./chapter35";
import { chapter36Appreciation } from "./chapter36";
import { chapter37Appreciation } from "./chapter37";
import { chapter38Appreciation } from "./chapter38";
import { chapter39Appreciation } from "./chapter39";
import { chapter40Appreciation } from "./chapter40";
import { chapter41Appreciation } from "./chapter41";
import { chapter42Appreciation } from "./chapter42";
import { chapter43Appreciation } from "./chapter43";
import { chapter44Appreciation } from "./chapter44";
import { chapter45Appreciation } from "./chapter45";
import { chapter46Appreciation } from "./chapter46";
import { chapter47Appreciation } from "./chapter47";
import { chapter48Appreciation } from "./chapter48";
import { chapter49Appreciation } from "./chapter49";
import { chapter50Appreciation } from "./chapter50";
import { chapter51Appreciation } from "./chapter51";
import { chapter52Appreciation } from "./chapter52";
import { chapter53Appreciation } from "./chapter53";
import { chapter54Appreciation } from "./chapter54";
import { chapter55Appreciation } from "./chapter55";
import { chapter56Appreciation } from "./chapter56";
import { chapter57Appreciation } from "./chapter57";
import { chapter58Appreciation } from "./chapter58";
import { chapter59Appreciation } from "./chapter59";
import { chapter60Appreciation } from "./chapter60";

// A registry mapping chapter ID to its appreciation data.
export const appreciationDataRegistry: Record<number, ChapterAppreciationData | null> = {
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
  11: chapter11Appreciation,
  12: chapter12Appreciation,
  13: chapter13Appreciation,
  14: chapter14Appreciation,
  15: chapter15Appreciation,
  16: chapter16Appreciation,
  17: chapter17Appreciation,
  18: chapter18Appreciation,
  19: chapter19Appreciation,
  20: chapter20Appreciation,
  21: chapter21Appreciation,
  22: chapter22Appreciation,
  23: chapter23Appreciation,
  24: chapter24Appreciation,
  25: chapter25Appreciation,
  26: chapter26Appreciation,
  27: chapter27Appreciation,
  28: chapter28Appreciation,
  29: chapter29Appreciation,
  30: chapter30Appreciation,
  31: chapter31Appreciation,
  32: chapter32Appreciation,
  33: chapter33Appreciation,
  34: chapter34Appreciation,
  35: chapter35Appreciation,
  36: chapter36Appreciation,
  37: chapter37Appreciation,
  38: chapter38Appreciation,
  39: chapter39Appreciation,
  40: chapter40Appreciation,
  41: chapter41Appreciation,
  42: chapter42Appreciation,
  43: chapter43Appreciation,
  44: chapter44Appreciation,
  45: chapter45Appreciation,
  46: chapter46Appreciation,
  47: chapter47Appreciation,
  48: chapter48Appreciation,
  49: chapter49Appreciation,
  50: chapter50Appreciation,
  51: chapter51Appreciation,
  52: chapter52Appreciation,
  53: chapter53Appreciation,
  54: chapter54Appreciation,
  55: chapter55Appreciation,
  56: chapter56Appreciation,
  57: chapter57Appreciation,
  58: chapter58Appreciation,
  59: chapter59Appreciation,
  60: chapter60Appreciation,
};

/**
 * Helper function to retrieve appreciation data for a given chapter.
 * Returns null if data for that chapter hasn't been written yet.
 */
export function getChapterAppreciation(chapterId: number): ChapterAppreciationData | null {
  return appreciationDataRegistry[chapterId] || null;
}
