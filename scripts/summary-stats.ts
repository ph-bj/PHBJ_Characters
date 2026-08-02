/** Length + chip-parity snapshot for every chapter summary. */
import { chapterSummaries } from "../src/chapterSummaries";
import { characters } from "../src/data";
import { buildCharacterTokenMap, segmentText } from "../src/nameChips";
import { loadCorpus } from "./lib-corpus";

const corpus = await loadCorpus();
const tokenMap = buildCharacterTokenMap(characters);
const ids = (t: string) =>
  new Set(segmentText(t, tokenMap).flatMap((s) => (typeof s === "string" ? [] : [s.char.id])));

console.log("ch\tzhChars\tenWords\tchapterZhChars\tzhChips\tenChips\tonlyZh\tonlyEn");
for (let i = 0; i <= 60; i++) {
  const s = chapterSummaries[i];
  if (!s) continue;
  const z = ids(s.zh), e = ids(s.en);
  const onlyZh = [...z].filter((x) => !e.has(x));
  const onlyEn = [...e].filter((x) => !z.has(x));
  console.log(
    [
      i,
      s.zh.length,
      s.en.trim().split(/\s+/).length,
      i >= 1 ? corpus[i].zh.join("").length : "-",
      z.size,
      e.size,
      onlyZh.length,
      onlyEn.length,
    ].join("\t"),
  );
}
