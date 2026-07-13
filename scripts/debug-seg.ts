import { buildCharacterTokenMap, segmentText } from "../src/nameChips";
import { characters } from "../src/data";
import { paragraphsFromModule } from "../src/chapterTranslations/loadChapterModules";

const tm = buildCharacterTokenMap(characters);
const enMod = await import("../src/chapterTranslations/chapterTranslations33.ts");
const paras = paragraphsFromModule(enMod, 33, "chapterTranslations");
for (const p of paras) {
  if (!p.includes("Tianxian")) continue;
  const chips = segmentText(p, tm)
    .filter((s) => typeof s !== "string")
    .map((s: any) => `${s.token}->${s.char.id}`);
  console.log(p.slice(0, 120));
  console.log("  chips:", chips.join(", "));
  break;
}
// Direct probe
console.log(
  "probe:",
  segmentText("Then Tianxian laughed at Rongguan.", tm)
    .filter((s) => typeof s !== "string")
    .map((s: any) => `${s.token}->${s.char.id}`),
);
console.log("has bare token:", tm.some(([t]) => t === "Tianxian"));
