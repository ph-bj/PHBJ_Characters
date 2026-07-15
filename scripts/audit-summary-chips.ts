/**
 * Audit script: compare highlighted cited works and character name chips
 * between Chinese and English chapter summaries.
 *
 * For each chapter, this script:
 * 1. Extracts 《...》 cited works from Chinese, and English work titles from English
 * 2. Segments both texts using the character token map to find name chips
 * 3. Reports mismatches where the counts or specific items differ
 */
import { characters } from "../src/data";
import { chapterSummaries } from "../src/chapterSummaries";
import { buildCharacterTokenMap, segmentText, Segment, getCharacterNameForLanguage } from "../src/nameChips";
import {
  ENGLISH_WORK_TITLES,
  ENGLISH_WORK_TITLE_SET,
  WORK_ENGLISH_BY_CHINESE,
  CASE_STRICT_WORK_TITLES_LOWER,
} from "../src/englishWorkTitles";

// Build the token map from all characters
const allChars = characters;
const tokenMap = buildCharacterTokenMap(allChars);

// Build reverse map: English title → Chinese title
const chineseByEnglish: Record<string, string> = {};
for (const [zh, en] of Object.entries(WORK_ENGLISH_BY_CHINESE)) {
  chineseByEnglish[en.toLowerCase()] = zh;
}

// Extract Chinese cited works: 《...》
function extractChineseWorks(text: string): string[] {
  const matches = text.match(/《[^》\n]+》/g) || [];
  return matches.map((m) => m.slice(1, -1)); // strip 《》
}

// Extract English cited works from text
function extractEnglishWorks(text: string): string[] {
  const found: string[] = [];
  // Sort by length (longest first) to match greedily
  const sorted = [...ENGLISH_WORK_TITLES].sort((a, b) => b.length - a.length);
  const lowerText = text.toLowerCase();
  
  // Track positions already matched to avoid overlap
  const matched = new Set<number>();
  
  for (const title of sorted) {
    const lowerTitle = title.toLowerCase();
    // Check if case-strict
    const isCaseStrict = CASE_STRICT_WORK_TITLES_LOWER.has(lowerTitle);
    
    const searchText = isCaseStrict ? text : lowerText;
    const searchTitle = isCaseStrict ? title : lowerTitle;
    
    let pos = 0;
    while (pos < searchText.length) {
      const idx = searchText.indexOf(searchTitle, pos);
      if (idx === -1) break;
      
      // Check word boundary
      const before = idx > 0 ? searchText[idx - 1] : " ";
      const after = idx + searchTitle.length < searchText.length ? searchText[idx + searchTitle.length] : " ";
      const isWordBoundary = !/[a-zA-Z]/.test(before) && !/[a-zA-Z]/.test(after);
      
      if (isWordBoundary && !matched.has(idx)) {
        found.push(text.slice(idx, idx + title.length));
        for (let i = idx; i < idx + title.length; i++) matched.add(i);
      }
      pos = idx + 1;
    }
  }
  
  // Also check for *...*  italic work annotations
  const starMatches = text.match(/\*(?!\s)[^*]+(?<!\s)\*/g) || [];
  for (const sm of starMatches) {
    const inner = sm.slice(1, -1);
    if (ENGLISH_WORK_TITLE_SET.has(inner) || 
        new Set([...ENGLISH_WORK_TITLES].map(t => t.toLowerCase())).has(inner.toLowerCase())) {
      found.push(inner);
    }
  }
  
  return found;
}

// Extract character name chips from text
function extractNameChips(text: string): { name: string; charId: string }[] {
  const segments = segmentText(text, tokenMap);
  const chips: { name: string; charId: string }[] = [];
  for (const seg of segments) {
    if (typeof seg !== "string") {
      chips.push({ name: seg.chipLabel, charId: seg.char.id });
    }
  }
  return chips;
}

// Get unique character IDs
function uniqueCharIds(chips: { name: string; charId: string }[]): Set<string> {
  return new Set(chips.map((c) => c.charId));
}

// Get unique works (normalized)
function uniqueWorks(works: string[]): Set<string> {
  return new Set(works.map((w) => w.toLowerCase()));
}

interface Mismatch {
  chapter: number;
  type: "works" | "names";
  zhItems: string[];
  enItems: string[];
  zhCount: number;
  enCount: number;
  missingInEn: string[];
  missingInZh: string[];
}

const mismatches: Mismatch[] = [];

for (const [chapterIdStr, summary] of Object.entries(chapterSummaries)) {
  const chapterId = Number(chapterIdStr);
  const { zh, en } = summary;

  // --- Cited Works ---
  const zhWorks = extractChineseWorks(zh);
  const enWorks = extractEnglishWorks(en);

  // Map Chinese works to their English equivalents for comparison
  const zhWorksEnglish = zhWorks.map((w) => {
    const englishTitle = WORK_ENGLISH_BY_CHINESE[w];
    return englishTitle ? englishTitle.toLowerCase() : w.toLowerCase();
  });
  const enWorksLower = enWorks.map((w) => w.toLowerCase());

  const zhWorksSet = new Set(zhWorksEnglish);
  const enWorksSet = new Set(enWorksLower);

  const missingWorksInEn = zhWorks.filter((w) => {
    const eng = WORK_ENGLISH_BY_CHINESE[w];
    return eng ? !enWorksSet.has(eng.toLowerCase()) : true;
  });
  const missingWorksInZh = enWorks.filter((w) => {
    const zhTitle = chineseByEnglish[w.toLowerCase()];
    return zhTitle ? !zhWorks.includes(zhTitle) : true;
  });

  if (missingWorksInEn.length > 0 || missingWorksInZh.length > 0) {
    mismatches.push({
      chapter: chapterId,
      type: "works",
      zhItems: zhWorks,
      enItems: enWorks,
      zhCount: zhWorks.length,
      enCount: enWorks.length,
      missingInEn: missingWorksInEn,
      missingInZh: missingWorksInZh,
    });
  }

  // --- Character Name Chips ---
  const zhChips = extractNameChips(zh);
  const enChips = extractNameChips(en);
  const zhCharIds = uniqueCharIds(zhChips);
  const enCharIds = uniqueCharIds(enChips);

  const missingNamesInEn: string[] = [];
  const missingNamesInZh: string[] = [];

  for (const id of zhCharIds) {
    if (!enCharIds.has(id)) {
      const char = allChars.find((c) => c.id === id);
      if (char) {
        missingNamesInEn.push(`${char.name.split(" ")[0]} (${getCharacterNameForLanguage(char, "en")})`);
      }
    }
  }
  for (const id of enCharIds) {
    if (!zhCharIds.has(id)) {
      const char = allChars.find((c) => c.id === id);
      if (char) {
        missingNamesInZh.push(`${char.name.split(" ")[0]} (${getCharacterNameForLanguage(char, "en")})`);
      }
    }
  }

  if (missingNamesInEn.length > 0 || missingNamesInZh.length > 0) {
    mismatches.push({
      chapter: chapterId,
      type: "names",
      zhItems: [...zhCharIds].map((id) => {
        const char = allChars.find((c) => c.id === id);
        return char ? char.name.split(" ")[0] : id;
      }),
      enItems: [...enCharIds].map((id) => {
        const char = allChars.find((c) => c.id === id);
        return char ? getCharacterNameForLanguage(char, "en") : id;
      }),
      zhCount: zhCharIds.size,
      enCount: enCharIds.size,
      missingInEn: missingNamesInEn,
      missingInZh: missingNamesInZh,
    });
  }
}

// Sort by chapter
mismatches.sort((a, b) => a.chapter - b.chapter || a.type.localeCompare(b.type));

// Print report
console.log("=== Chapter Summary Chip/Work Mismatch Report ===\n");

if (mismatches.length === 0) {
  console.log("✅ No mismatches found between Chinese and English summaries.");
} else {
  let currentChapter = -1;
  for (const m of mismatches) {
    if (m.chapter !== currentChapter) {
      currentChapter = m.chapter;
      console.log(`\n--- Chapter ${m.chapter} ---`);
    }

    if (m.type === "names") {
      console.log(`  [NAME CHIPS] ZH: ${m.zhCount} unique characters, EN: ${m.enCount} unique characters`);
      if (m.missingInEn.length > 0) {
        console.log(`    ⚠ In Chinese but NOT in English:`);
        for (const name of m.missingInEn) console.log(`      - ${name}`);
      }
      if (m.missingInZh.length > 0) {
        console.log(`    ⚠ In English but NOT in Chinese:`);
        for (const name of m.missingInZh) console.log(`      - ${name}`);
      }
    } else {
      console.log(`  [CITED WORKS] ZH: ${m.zhCount} works, EN: ${m.enCount} works`);
      if (m.missingInEn.length > 0) {
        console.log(`    ⚠ In Chinese but NOT in English:`);
        for (const w of m.missingInEn) console.log(`      - 《${w}》 → ${WORK_ENGLISH_BY_CHINESE[w] || "NO ENGLISH MAPPING"}`);
      }
      if (m.missingInZh.length > 0) {
        console.log(`    ⚠ In English but NOT in Chinese:`);
        for (const w of m.missingInZh) console.log(`      - ${w} → 《${chineseByEnglish[w.toLowerCase()] || "NO CHINESE MAPPING"}》`);
      }
    }
  }
  console.log(`\n=== Total: ${mismatches.length} mismatches across ${new Set(mismatches.map(m => m.chapter)).size} chapters ===`);
}
