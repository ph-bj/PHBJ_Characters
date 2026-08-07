import React from "react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  Search,
  X,
  User,
  MapPin,
  BookOpen,
  Calendar,
  Info,
  ChevronRight,
  Users,
  Award,
  Shield,
  Skull,
  Heart,
  Briefcase,
  Activity,
  SortAsc,
  BarChart2,
  Clock,
  ChevronUp,
  ChevronDown,
  Book,
  Leaf,
  Home,
  Menu,
  Network,
} from "lucide-react";
import { characters, relationships, identityLinksById } from "./data";
import { chapters } from "./chapters";
import { gardens, getGardenById, type Garden } from "./gardens";
import {
  locationTypeLabels,
  locationTypeOrder,
  novelLocations,
  type NovelLocation,
} from "./locations";
import { chapterTranslationsById } from "./chapterTranslations";

import { chapterSummaries } from "./chapterSummaries";
import {
  getCharacterSceneBullets,
  type SceneBullet,
} from "./characterAppearances";
import { chapterLacunae } from "./lacunae";
import { questions } from "./questions";
import { QuestionAnswer } from "./QuestionAnswer";
import worksDataJson from "./worksData.json";
import {
  CASE_STRICT_WORK_TITLES_LOWER,
  ENGLISH_WORK_TITLES,
  ENGLISH_WORK_TITLE_SET,
  WORK_ENGLISH_BY_CHINESE,
} from "./englishWorkTitles";
export const worksData: Record<
  string,
  {
    descZh: string;
    descEn: string;
    contextZh: string;
    contextEn: string;
    chapters?: number[];
  }
> = worksDataJson;

export function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Isolated ASCII match so short titles (e.g. "Odes") do not match inside English words ("modesty"). */
export function englishWorkTitleRegexFragment(title: string): string {
  return `(?<!\\w)${escapeRegExp(title)}(?!\\w)`;
}

export const ENGLISH_WORK_SPLIT_PATTERN = [...ENGLISH_WORK_TITLES]
  .sort((a, b) => b.length - a.length)
  .map(englishWorkTitleRegexFragment)
  .join("|");

export const CHAPTER_ANNOTATION_TOKEN_SPLIT_REGEX = new RegExp(
  ENGLISH_WORK_SPLIT_PATTERN.length > 0
    ? `(▉|□|《[^》\\n]+》|\\*(?!\\s)[^*]+(?<!\\s)\\*|${ENGLISH_WORK_SPLIT_PATTERN})`
    : `(▉|□|《[^》\\n]+》|\\*(?!\\s)[^*]+(?<!\\s)\\*)`,
  "gi",
);

export const ENGLISH_WORK_TITLE_LOWERCASE = new Set(
  ENGLISH_WORK_TITLES.map((title) => title.toLowerCase()),
);

/** English line under each title in the 目录 view; keyed by chapter id (optional). */
export const chapterTitleTranslations: Partial<Record<number, string>> = {
  1: "Shi Nanxiang compiles a floral register of celebrated beauties; Mei Ziyu, catching their fragrance, is stunned by peerless allure.",
  2: "Wei Pincai boasts of encounters with beauties along the road; Wang Guibao sends flowers flying in riot at the feast.",
  3: "Old Wang the snuff-bottle seller attempts extortion; a young dan shatters dishes in coquettish protest.",
  4: "Three scholars compose by a snowy window; a young man inscribes a lyric on a powder-white wall.",
  5: "Yuan Baozhu introduces Du Qinyan; Third Master Fu gives a detailed account of Lord Hua.",
  6: "Madam Yan swiftly settles an excellent marriage match; Young Master Mei first surveys the realm of beauty.",
  7: "Yan Zhongqing excels at one-character antitheses; Shi Nanxiang uniquely produces five-character verse.",
  8: "Theater thieves steal silver yet again; amid merriment at the wine shop, disorder erupts.",
  9: "At moonlit Lantern Night, flowers blaze in full bloom; amid pearl-like passion and qin-like yearning, one meeting is missed.",
  10: "Spring dreams swirl between long and short affections; floral figures appear half-true, half-doubtful.",
  11: "Three beauties turn language into fresh brilliance; maidservants are rebuked over playful talk.",
  12: "Yan Zhongqing's chivalrous heart reveals elder compassion; Tian Chunhang's proud bones expose obsessive devotion.",
  13: "Two hearts secretly imprint deep feeling; lustful demons and lecherous ghosts continue crooked entanglements.",
  14: "Ancient heptasyllabics are recited as qin melodies return; a drinking game is innovated from four selected characters.",
  15: "The old scholar is appointed to official duty away from home; the noble young master idly seeks his beloved.",
  16: "Wei Pincai first enters Lord Hua's mansion; Mei Ziyu again visits Du Qinyan.",
  17: "A jade banquet fetes a birthday and gathers the poets; in the floral register, supreme beauty crowns all fragrance.",
  18: "In a pleasure house, tricks are taught for exploiting performers; at a courtesan's door, willow songs are sung.",
  19: "Lewd plots and treachery hide within the wooden barrel; clever speech and quick wit deceive for gain.",
  20: "Dragon boats race for the championship; paired lovers pass cups through a playful wine game.",
  21: "Rumor-making wins only cold contempt; true feelings are confessed in hidden tears.",
  22: "Under an unlucky star, plain hearts weep in double grief; touring the canal, Mei and Du renew their bond.",
  23: "A-Dai is attacked by poisoners under a grass mat; riding a night-soil cart, a vile secretary reveals depraved intent.",
  24: "News of a new opera spreads; in fixing terms of affection, one leaps free from emotional bondage.",
  25: "At waterside pavilions and wind galleries, flowers seem to speak; clear songs and subtle dances let jade-like grace arise.",
  26: "Slander is advanced to satisfy old grudges; valuing beauty above all, Lord Hua purchases celebrated performers.",
  27: "Xi Zhengshen makes a violent disturbance at Qiushui Hall; Du Qinyan seeks refuge in Lord Hua's mansion.",
  28: "At parting, hidden words are sent through the Morning Glory; blinded by greed, one learns petty and crooked tricks.",
  29: "A broken moon rounds again and true feeling smiles alone; in strict seclusion among pearls, who can pity divided longing?",
  30: "Under moonlit lanterns, a banquet appraises the flowers; in trial costume and makeup, a brilliant stage piece is presented.",
  31: "After drink, the flowers keep the night moon in lingering company; old sorrow returns as scholars sing of autumn graves.",
  32: "In Xiao's studio, celebrated men await examination news; in a cold yamen office, a minor official adjudicates petitions.",
  33: "Inspector Mei sends a family letter instructing his son; Young Master Hua bids farewell and dismisses his guests.",
  34: "To repay debts, Li Yuanmao borrows money; during Lantern festivities, Wei Pincai is robbed.",
  35: "In collecting floral classics, twin blossoms arise from one stem; in crafting lyric airs, red beans cast lovesick longing.",
  36: "In intimate talk, all mouths curse Shanzhi; amid treacherous scheming, a jade bracelet is smashed in anger.",
  37: "In a minor game, one character transforms into three; in theater-title antiphony, two words expand into four.",
  38: "On authenticity and forgery, annotations debate the Divine Yu stele; on omen counting, Taiyi numerology is refuted.",
  39: "In wedding-chamber revelry, quick wit yields elegant jokes; with false hair arranged, white locks become youthful color.",
  40: "Xi the rustic libertine is poisoned by lust and rendered a eunuch; Pan Qiguan receives retribution through a degrading affliction.",
  41: "Cherishing spring, all butterflies turn to dreams; beating erotic rhythms, paired mandarin ducks envy no immortals.",
  42: "A guardian extorts support fees at inflated rates; in tea-house rounds, a parasite loses his money.",
  43: "Su Huifang uses keen wit to outmaneuver the widow; Xu Ziyun redeems Qinyan at great expense.",
  44: "Listening to rumors, three households erupt in conflict; seeing vicious letters, two young masters sever ties.",
  45: "A noble youth visits his beloved by moonlight; the jade-like gentleman receives spirit-writing and recognizes an adoptive father.",
  46: "Talented men divide topics and compose linked brilliance; an elder master writes a preface and lets his brush bloom with flowers.",
  47: "Xi Eleven seeks a bizarre remedy to strengthen his kidneys; Pan Qiguan endures humiliation while treating his injured backside.",
  48: "On a magnolia boat, a heartbroken lyric is sung; at Huanghua Pavilion, tears are shed in painful farewell.",
  49: "Moved by love, Scholar Tian seeks marriage as top laureate; by chance affection, Third Sister Xu recognizes her lost brother.",
  50: "Lin Chunxi revises opera texts into proper form; Wei Pincai's story closes with his marriage to a courtesan.",
  51: "In poverty and frustration, people eavesdrop on opera through walls; pent-up resentment breaks into open conflict indoors.",
  52: "Young masters celebrate in the garden; beautiful ladies accompany the newlyweds in embroidered chambers.",
  53: "By inscribing songs on a peach-blossom fan, fragrant affection is sealed; at Swallow Bluff, an infatuated soul is shocked by a phantom dream.",
  54: "A talented scholar enters the Hanlin through lyric examination; in the ladies' chamber, beauties discuss Tang poetry.",
  55: "At Phoenix Mountain they pay respects to a literary altar; beside Emerald Nest they seek an old tomb.",
  56: "Qu Fangzheng appears in a dream after becoming a god; Historian Hou feigns righteousness in aiding an orphan.",
  57: "Yuan Qixiang leads drinking-game banter among beauties; Wang Qionghua becomes alliance leader through poetry cards.",
  58: "Xi Eleven and his servant suffer karmic retribution; Pan Qiguan and his wife descend into obscene turmoil.",
  59: "Vice-Minister Mei independently builds the Qu shrine; Young Master Qu returns to the capital.",
  60: "Jin Jifu brings Pinhua Baojian to its conclusion; Yuan Baozhu leads the invocation honoring the literary stars.",
};

export const translationMap = chapterTranslationsById;
import { Character, Chapter } from "./types";

export interface ChapterTitleParts {
  chapterNum: string;
  part1: string;
  part2: string;
}

export function getChapterTitleParts(
  chapter: Chapter,
  lang: "en" | "zh",
): ChapterTitleParts {
  if (chapter.id === -1) {
    return {
      chapterNum: lang === "zh" ? "目录" : "Contents",
      part1: "",
      part2: "",
    };
  }

  if (chapter.id === 0) {
    return {
      chapterNum: lang === "zh" ? "序" : "Preface",
      part1: "",
      part2: "",
    };
  }

  if (lang === "zh") {
    const parts = chapter.title.trim().split(/\s+/);
    if (parts.length >= 3) {
      return {
        chapterNum: parts[0],
        part1: parts[1],
        part2: parts.slice(2).join(" "),
      };
    } else if (parts.length === 2) {
      return {
        chapterNum: parts[0],
        part1: parts[1],
        part2: "",
      };
    }
    return {
      chapterNum: chapter.title,
      part1: "",
      part2: "",
    };
  } else {
    const enText = chapterTitleTranslations[chapter.id];
    const chapterNum = `Chapter ${chapter.id}`;
    if (!enText) {
      return {
        chapterNum,
        part1: chapter.title,
        part2: "",
      };
    }
    const semicolonIndex = enText.indexOf(";");
    if (semicolonIndex !== -1) {
      return {
        chapterNum,
        part1: enText.slice(0, semicolonIndex + 1).trim(),
        part2: enText.slice(semicolonIndex + 1).trim(),
      };
    }
    return {
      chapterNum,
      part1: enText,
      part2: "",
    };
  }
}

export function getChapterReaderTitle(chapter: Chapter, lang: "en" | "zh"): string {
  if (lang === "zh") return chapter.title;
  if (chapter.id === -1) return "Contents";
  if (chapter.id === 0) return "Preface";
  const en = chapterTitleTranslations[chapter.id];
  return en
    ? `Ch. ${chapter.id} — ${en}`
    : `Ch. ${chapter.id} — ${chapter.title}`;
}

export function getChapterReaderSubtitle(
  chapter: Chapter,
  lang: "en" | "zh",
): string | null {
  if (chapter.id < 0) return null;
  if (chapter.id === 0) return lang === "en" ? chapter.title : null;
  if (lang === "en") return chapter.title;
  return chapterTitleTranslations[chapter.id] ?? null;
}
import NetworkGraph from "./components/NetworkGraph";

export const ROLE_ORDER = [
  "performer",
  "scholar",
  "villain",
  "female",
  "official",
  "servant",
  "deceased",
  "minor",
  "Other",
];

export const ROLE_ICONS: Record<string, any> = {
  scholar: Award,
  performer: Heart,
  official: Shield,
  villain: Skull,
  minor: Info,
  female: User,
  servant: Briefcase,
  deceased: Skull,
  Other: Info,
};

export const ROLE_TINTS: Record<string, string> = {
  scholar: "bg-[var(--role-scholar-bg)] border-[var(--role-scholar)]/30",
  performer: "bg-[var(--role-performer-bg)] border-[var(--role-performer)]/30",
  official: "bg-[var(--role-official-bg)] border-[var(--role-official)]/30",
  villain: "bg-[var(--role-villain-bg)] border-[var(--role-villain)]/30",
  minor: "bg-[var(--role-minor-bg)] border-[var(--role-minor)]/30",
  female: "bg-[var(--role-female-bg)] border-[var(--role-female)]/30",
  servant: "bg-[var(--role-servant-bg)] border-[var(--role-servant)]/30",
  deceased: "bg-[var(--role-deceased-bg)] border-[var(--role-deceased)]/30",
  Other: "bg-[var(--role-Other-bg)] border-[var(--role-Other)]/30",
};

export const ROLE_TEXT_COLORS: Record<string, string> = {
  scholar: "text-[var(--role-scholar)]",
  performer: "text-[var(--role-performer)]",
  official: "text-[var(--role-official)]",
  villain: "text-[var(--role-villain)]",
  minor: "text-[var(--role-minor)]",
  female: "text-[var(--role-female)]",
  servant: "text-[var(--role-servant)]",
  deceased: "text-[var(--role-deceased)]",
  Other: "text-[var(--role-Other)]",
};

export const ROLE_ACCENTS: Record<string, string> = {
  scholar: "var(--role-scholar)",
  performer: "var(--role-performer)",
  official: "var(--role-official)",
  villain: "var(--role-villain)",
  minor: "var(--role-minor)",
  female: "var(--role-female)",
  servant: "var(--role-servant)",
  deceased: "var(--role-deceased)",
  Other: "var(--role-Other)",
};

// Name chips in running prose. Role is carried by hue alone — no fill, no border —
// so a sentence with several named characters reads as prose rather than as a
// row of form controls. Colours come from the theme so both palettes work.
export const ROLE_CHIP_IDLE: Record<string, string> = {
  scholar: "text-[var(--role-scholar)] decoration-[var(--role-scholar)]/45",
  performer: "text-[var(--role-performer)] decoration-[var(--role-performer)]/45",
  official: "text-[var(--role-official)] decoration-[var(--role-official)]/45",
  villain: "text-[var(--role-villain)] decoration-[var(--role-villain)]/45",
  minor: "text-[var(--role-minor)] decoration-[var(--role-minor)]/45",
  female: "text-[var(--role-female)] decoration-[var(--role-female)]/45",
  servant: "text-[var(--role-servant)] decoration-[var(--role-servant)]/45",
  deceased: "text-[var(--role-deceased)] decoration-[var(--role-deceased)]/45",
  Other: "text-[var(--role-Other)] decoration-[var(--role-Other)]/45",
};

// Selected/standalone contexts (filter pills, character lists) keep a solid fill.
export const ROLE_CHIP_ACTIVE: Record<string, string> = {
  scholar: "bg-[var(--role-scholar)] border-[var(--role-scholar)] text-[var(--paper-bg)]",
  performer: "bg-[var(--role-performer)] border-[var(--role-performer)] text-[var(--paper-bg)]",
  official: "bg-[var(--role-official)] border-[var(--role-official)] text-[var(--paper-bg)]",
  villain: "bg-[var(--role-villain)] border-[var(--role-villain)] text-[var(--paper-bg)]",
  minor: "bg-[var(--role-minor)] border-[var(--role-minor)] text-[var(--paper-bg)]",
  female: "bg-[var(--role-female)] border-[var(--role-female)] text-[var(--paper-bg)]",
  servant: "bg-[var(--role-servant)] border-[var(--role-servant)] text-[var(--paper-bg)]",
  deceased: "bg-[var(--role-deceased)] border-[var(--role-deceased)] text-[var(--paper-bg)]",
  Other: "bg-[var(--role-Other)] border-[var(--role-Other)] text-[var(--paper-bg)]",
};

// Bordered tint for standalone chips outside prose (character lists, legends),
// where a boxed affordance is appropriate and there is no running text to disrupt.
export const ROLE_CHIP_BOXED: Record<string, string> = {
  scholar: "bg-[var(--role-scholar-bg)] border-[var(--role-scholar)]/45 text-[var(--role-scholar)]",
  performer: "bg-[var(--role-performer-bg)] border-[var(--role-performer)]/45 text-[var(--role-performer)]",
  official: "bg-[var(--role-official-bg)] border-[var(--role-official)]/45 text-[var(--role-official)]",
  villain: "bg-[var(--role-villain-bg)] border-[var(--role-villain)]/45 text-[var(--role-villain)]",
  minor: "bg-[var(--role-minor-bg)] border-[var(--role-minor)]/45 text-[var(--role-minor)]",
  female: "bg-[var(--role-female-bg)] border-[var(--role-female)]/45 text-[var(--role-female)]",
  servant: "bg-[var(--role-servant-bg)] border-[var(--role-servant)]/45 text-[var(--role-servant)]",
  deceased: "bg-[var(--role-deceased-bg)] border-[var(--role-deceased)]/45 text-[var(--role-deceased)]",
  Other: "bg-[var(--role-Other-bg)] border-[var(--role-Other)]/45 text-[var(--role-Other)]",
};

export * from "./nameChips";
import {
  segmentText,
  buildCharacterTokenMap,
  getSegmentChipLabel,
  getCharacterMentionTokens,
  countMentionsInText,
  extractChineseTokens,
  getCharacterNameForLanguage,
  stripDiacritics,
} from "./nameChips";
import type { Segment } from "./nameChips";

export type LacunaConfidence = "certain" | "probable" | "speculative";

export type LacunaEntry = {
  chapterId: number;
  snippet: string;
  symbol: "□" | "▉";
  inferredCharacter: string;
  confidence: LacunaConfidence;
  note: string;
};
export type NovelLocationWithChapters = NovelLocation & { chapterIds: number[] };

const locationChapterIdsCache = new Map<string, number[]>();
const locationFirstSnippetCache = new Map<string, string | null>();

export function getLocationChapterIds(location: NovelLocation): number[] {
  const cached = locationChapterIdsCache.get(location.id);
  if (cached) return cached;

  const sortedTokens = [...location.searchTokens].sort((a, b) => b.length - a.length);
  const ids = chapters
    .filter((ch) => ch.id >= 1)
    .filter((chapter) =>
      sortedTokens.some((token) => chapter.content.includes(token)),
    )
    .map((chapter) => chapter.id);

  locationChapterIdsCache.set(location.id, ids);
  return ids;
}

export function getLocationFirstSnippet(location: NovelLocation): string | null {
  if (locationFirstSnippetCache.has(location.id)) {
    return locationFirstSnippetCache.get(location.id)!;
  }

  const chapterIds = getLocationChapterIds(location);
  if (chapterIds.length === 0) {
    locationFirstSnippetCache.set(location.id, null);
    return null;
  }

  const chapter = chapters.find((ch) => ch.id === chapterIds[0]);
  if (!chapter) {
    locationFirstSnippetCache.set(location.id, null);
    return null;
  }

  const sortedTokens = [...location.searchTokens].sort((a, b) => b.length - a.length);
  const matchedRanges: Array<{ start: number; end: number }> = [];

  for (const token of sortedTokens) {
    let pos = 0;
    while ((pos = chapter.content.indexOf(token, pos)) !== -1) {
      const end = pos + token.length;
      const overlaps = matchedRanges.some(
        (r) => Math.max(r.start, pos) < Math.min(r.end, end)
      );
      if (!overlaps) {
        matchedRanges.push({ start: pos, end });
      }
      pos += token.length;
    }
  }

  if (matchedRanges.length === 0) {
    locationFirstSnippetCache.set(location.id, null);
    return null;
  }
  matchedRanges.sort((a, b) => a.start - b.start);

  const earliest = matchedRanges[0];
  const snippet = chapter.content.slice(
    Math.max(0, earliest.start - 60),
    Math.min(chapter.content.length, earliest.end + 60),
  );
  locationFirstSnippetCache.set(location.id, snippet);
  return snippet;
}

export function getLocationFirstChapterId(location: NovelLocation): number | null {
  const chapterIds = getLocationChapterIds(location);
  return chapterIds[0] ?? null;
}

let characterMentionCountsCache: Map<string, number> | null = null;

export function getCharacterMentionCountsAll(): Map<string, number> {
  if (characterMentionCountsCache) return characterMentionCountsCache;

  const tokenMap = buildCharacterTokenMap(characters);
  const map = new Map<string, number>();
  for (const char of characters) {
    map.set(char.id, 0);
  }

  for (const ch of chapters) {
    if (ch.id < 1) continue;
    const segs = segmentText(ch.content, tokenMap);
    for (const seg of segs) {
      if (typeof seg !== "string") {
        map.set(seg.char.id, (map.get(seg.char.id) || 0) + 1);
      }
    }
  }

  characterMentionCountsCache = map;
  return map;
}

export function getCharacterTotalMentions(character: Character): number {
  const map = getCharacterMentionCountsAll();
  return map.get(character.id) ?? 0;
}

const charSortKeyZhCache = new Map<string, string>();
const charSortKeyEnCache = new Map<string, string>();

export function getCharacterSortKeyZh(character: Character): string {
  let key = charSortKeyZhCache.get(character.id);
  if (!key) {
    key = getCharacterNameForLanguage(character, "zh");
    charSortKeyZhCache.set(character.id, key);
  }
  return key;
}

export function getCharacterSortKeyEn(character: Character): string {
  let key = charSortKeyEnCache.get(character.id);
  if (!key) {
    const nameEn = getCharacterNameForLanguage(character, "en");
    key = stripDiacritics(nameEn).replace(/^[^a-zA-Z0-9]+/, "").toLowerCase();
    charSortKeyEnCache.set(character.id, key);
  }
  return key;
}

export function countTextSearchMatches(text: string, query: string): number {
  const trimmed = query.trim();
  if (!trimmed || !text) return 0;
  const qLower = trimmed.toLowerCase();
  const textLower = text.toLowerCase();
  let count = 0;
  let pos = 0;
  while ((pos = textLower.indexOf(qLower, pos)) !== -1) {
    count++;
    pos += trimmed.length;
  }
  return count;
}

export function renderTextWithSearchHighlight(
  text: string,
  query: string,
  activeIndex: number,
  matchCounter: { current: number },
): React.ReactNode {
  const trimmed = query.trim();
  if (!trimmed) return text;

  const qLower = trimmed.toLowerCase();
  const textLower = text.toLowerCase();
  const nodes: React.ReactNode[] = [];
  let pos = 0;

  while (pos < text.length) {
    const found = textLower.indexOf(qLower, pos);
    if (found === -1) {
      nodes.push(text.slice(pos));
      break;
    }
    if (found > pos) nodes.push(text.slice(pos, found));
    const matchText = text.slice(found, found + trimmed.length);
    const idx = matchCounter.current++;
    const isActive = idx === activeIndex;
    nodes.push(
      <mark
        key={`chapter-search-${idx}`}
        id={`chapter-search-${idx}`}
        className={`px-0.5 rounded-sm ${
          isActive
            ? "bg-[var(--accent)]/35 ring-2 ring-[var(--accent)]/50 text-[var(--ink-title)]"
            : "bg-[var(--highlight)] text-[var(--ink-title)]"
        }`}
      >
        {matchText}
      </mark>,
    );
    pos = found + trimmed.length;
  }

  if (nodes.length === 0) return text;
  if (nodes.length === 1) return nodes[0];
  return nodes;
}

export function isWorkTitle(title: string): boolean {
  const cleanTitle = title.replace(/《|》/g, "");
  if (/[一-鿿]/.test(cleanTitle)) {
    return cleanTitle in WORK_ENGLISH_BY_CHINESE;
  }
  if (ENGLISH_WORK_TITLE_SET.has(title)) return true;
  const lower = title.toLowerCase();
  if (CASE_STRICT_WORK_TITLES_LOWER.has(lower)) {
    return ENGLISH_WORK_TITLE_SET.has(title);
  }
  return ENGLISH_WORK_TITLE_LOWERCASE.has(lower);
}

export function isWorkAnnotationToken(part: string): boolean {
  if (part === "▉" || part === "□") return false;
  if (/^《[^》\n]+》$/.test(part)) return true;
  const starMatch = part.match(/^\*(?!\s)([^*]+)(?<!\s)\*$/);
  if (starMatch) {
    return isWorkTitle(starMatch[1]);
  }
  if (ENGLISH_WORK_TITLE_SET.has(part)) return true;
  const lower = part.toLowerCase();
  // Generic-word titles ("poetry", "midnight", "crabapple") only count with
  // exact capitalization; other titles keep case-insensitive matching so
  // mid-sentence "the Western Chamber" still highlights.
  if (CASE_STRICT_WORK_TITLES_LOWER.has(lower)) return false;
  return ENGLISH_WORK_TITLE_LOWERCASE.has(lower);
}

export function isChineseWorkAnnotationToken(part: string): boolean {
  return /^《[^》\n]+》$/.test(part);
}

export const CHINESE_WORK_BY_ENGLISH_LOWER: Record<string, string> =
  Object.fromEntries(
    Object.entries(WORK_ENGLISH_BY_CHINESE).map(([zh, en]) => [
      en.toLowerCase(),
      zh,
    ]),
  );

export function workKeyFromAnnotationToken(part: string): string | null {
  const bookMatch = part.match(/^《([^》\n]+)》$/);
  if (bookMatch) return bookMatch[1];

  const starMatch = part.match(/^\*(?!\s)([^*]+)(?<!\s)\*$/);
  if (starMatch) {
    const inner = starMatch[1];
    if (!isWorkTitle(inner)) return null;
    if (/[一-鿿]/.test(inner)) {
      return inner.replace(/《|》/g, "");
    }
    return CHINESE_WORK_BY_ENGLISH_LOWER[inner.toLowerCase()] ?? inner;
  }

  if (
    ENGLISH_WORK_TITLE_SET.has(part) ||
    ENGLISH_WORK_TITLE_LOWERCASE.has(part.toLowerCase())
  ) {
    return CHINESE_WORK_BY_ENGLISH_LOWER[part.toLowerCase()] ?? null;
  }

  return null;
}

export function chapterWorkAnchorId(chapterId: number, workKey: string): string {
  return `chapter-work-${chapterId}-${encodeURIComponent(workKey)}`;
}

export function countSearchMatchesInRenderedText(
  text: string,
  query: string,
  tokenMap: [string, Character][],
  showBilingual = false,
): number {
  const trimmed = query.trim();
  if (!trimmed || !text) return 0;

  let total = 0;
  const add = (segment: string) => {
    total += countTextSearchMatches(segment, trimmed);
  };

  for (const seg of segmentText(text, tokenMap)) {
    if (typeof seg === "string") {
      for (const part of seg.split(CHAPTER_ANNOTATION_TOKEN_SPLIT_REGEX)) {
        if (!part || isWorkAnnotationToken(part)) {
          continue;
        }
        add(part);
      }
    } else {
      add(getSegmentChipLabel(seg, showBilingual));
    }
  }

  return total;
}

export function getChapterMentionedCharacters(content: string): Character[] {
  const hitIds = new Set<string>();
  const hits: Character[] = [];
  const tokenMap = buildCharacterTokenMap(characters);

  for (const seg of segmentText(content, tokenMap)) {
    if (typeof seg !== "string") {
      if (!hitIds.has(seg.char.id)) {
        hitIds.add(seg.char.id);
        hits.push(seg.char);
      }
    }
  }

  return hits.sort(
    (a, b) => a.chapterNum - b.chapterNum || a.name.localeCompare(b.name),
  );
}

export function LanguageSwitch({
  lang,
  setLang,
  className = "",
  compact = false,
}: {
  lang: "en" | "zh";
  setLang: (lang: "en" | "zh") => void;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex items-center h-[32px] bg-black/5 p-1 rounded-sm border border-[var(--paper-border)] box-border ${className}`}
      role="group"
      aria-label={lang === "zh" ? "语言" : "Language"}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`h-full ${compact ? "px-1.5 text-xs" : "px-3 text-xs"} flex items-center justify-center font-bold uppercase tracking-widest transition-all rounded-sm ${
          lang === "en"
            ? "bg-[var(--accent)] text-[var(--paper-bg)]"
            : "text-[var(--ink-dim-text)] hover:bg-black/5"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("zh")}
        className={`h-full ${compact ? "px-1.5 text-xs" : "px-3 text-xs"} flex items-center justify-center font-bold uppercase tracking-widest transition-all rounded-sm font-hans ${
          lang === "zh"
            ? "bg-[var(--accent)] text-[var(--paper-bg)]"
            : "text-[var(--ink-dim-text)] hover:bg-black/5"
        }`}
      >
        {compact ? "中" : "中文"}
      </button>
    </div>
  );
}

export type NavSection = {
  id: string;
  label: string;
  icon: typeof Home;
};

export function NavMenuDropdown({
  lang,
  sections,
  onScrollToSection,
  onOpenContents,
  onOpenChapter,
}: {
  lang: "en" | "zh";
  sections: NavSection[];
  onScrollToSection: (id: string) => void;
  onOpenContents: () => void;
  onOpenChapter: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const updateMenuPosition = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    const width = window.matchMedia("(min-width: 768px)").matches ? 480 : 288;
    const left = Math.min(
      Math.max(8, rect.right - width),
      window.innerWidth - width - 8,
    );

    setMenuPosition({
      top: rect.bottom + 6,
      left,
      width,
    });
  }, []);

  useLayoutEffect(() => {
    if (!open) {
      setMenuPosition(null);
      return;
    }

    updateMenuPosition();
    window.addEventListener("resize", updateMenuPosition);
    window.addEventListener("scroll", updateMenuPosition, true);
    return () => {
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition, true);
    };
  }, [open, updateMenuPosition]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        triggerRef.current?.contains(target) ||
        panelRef.current?.contains(target)
      )
        return;
      setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const navigate = (action: () => void) => {
    setOpen(false);
    action();
  };

  const menuPanel =
    open &&
    menuPosition &&
    createPortal(
      <AnimatePresence>
        <motion.div
          ref={panelRef}
          key="nav-menu-panel"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          role="menu"
          style={{
            position: "fixed",
            top: menuPosition.top,
            left: menuPosition.left,
            width: menuPosition.width,
            zIndex: 60,
          }}
          className="max-h-[min(70vh,28rem)] overflow-y-auto parchment rounded-sm border-double border-4 border-[var(--paper-border)] shadow-xl p-3"
        >
          <p className="text-xs uppercase tracking-widest text-[var(--ink-dim-text)] font-bold mb-2 px-1">
            {lang === "zh" ? "快速前往" : "Go To"}
          </p>
          <div className="grid grid-cols-3 gap-1.5 mb-3">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                role="menuitem"
                onClick={() => navigate(() => onScrollToSection(id))}
                className="w-full rounded-sm border border-[var(--paper-border)]/70 bg-white/15 hover:bg-[var(--accent)]/8 hover:border-[var(--accent)]/40 transition-all px-2 py-2 flex flex-col items-center justify-center gap-1 min-w-0 text-center"
              >
                <Icon size={15} className="text-[var(--accent)] shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wide text-[var(--ink-title)] leading-tight line-clamp-2">
                  {label}
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-[var(--paper-border)]">
            <button
              type="button"
              role="menuitem"
              onClick={() => navigate(onOpenContents)}
              className="col-span-2 min-h-10 rounded-sm bg-[var(--accent)] text-[var(--paper-bg)] px-2 py-1.5 flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider"
            >
              <Book size={13} />
              {lang === "zh" ? "目录" : "Contents"}
            </button>
            <button
              type="button"
              role="menuitem"
              onClick={() => navigate(onOpenChapter)}
              className="min-h-10 rounded-sm border border-[var(--accent)]/50 text-[var(--accent)] bg-[var(--accent)]/5 px-2 py-1.5 flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider"
            >
              <BookOpen size={13} />
              {lang === "zh" ? "第一回" : "Ch. 1"}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          if (open) {
            setOpen(false);
            return;
          }
          updateMenuPosition();
          setOpen(true);
        }}
        className="flex items-center gap-1.5 px-3 py-[7px] bg-black/5 rounded-sm border border-[var(--paper-border)] text-[var(--ink-dim-text)] hover:bg-black/5 transition-all"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={lang === "zh" ? "打开菜单" : "Open menu"}
      >
        <Menu size={14} />
        <span className="text-xs font-bold uppercase tracking-widest">
          {lang === "zh" ? "菜单" : "Menu"}
        </span>
        <ChevronDown
          size={12}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {menuPanel}
    </>
  );
}

export const READER_LAST_POSITION_KEY = "phbj-reader-last-position";

export function readLastReadingPosition(): { id: number; top: number } | null {
  try {
    const raw = localStorage.getItem(READER_LAST_POSITION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { id?: unknown; top?: unknown };
    if (typeof parsed?.id === "number" && typeof parsed?.top === "number") {
      return { id: parsed.id, top: parsed.top };
    }
  } catch {
    // Ignore unreadable storage; treated as "no saved position".
  }
  return null;
}

export function parseCharacterAge(ageStr: string | undefined): number {
  if (!ageStr) return 999;
  const match = ageStr.match(/\d+/);
  if (!match) return 999;
  return parseInt(match[0], 10);
}
