import React from 'react';
import { useCallback, useEffect, useLayoutEffect, useRef, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
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
} from 'lucide-react';
import { characters, relationships, identityLinksById } from './data';
import { chapters } from './chapters';
import { gardens, getGardenById, type Garden } from './gardens';
import { locationTypeLabels, locationTypeOrder, novelLocations, type NovelLocation } from './locations';
import { chapterTranslationsById } from './chapterTranslations';

import { chapterSummaries } from './chapterSummaries';
import { getCharacterSceneBullets, type SceneBullet } from './characterAppearances';
import { chapterLacunae } from './lacunae';
import { questions } from './questions';
import { QuestionAnswer } from './QuestionAnswer';
import worksDataJson from './worksData.json';
import {
  ENGLISH_WORK_TITLES,
  ENGLISH_WORK_TITLE_SET,
  WORK_ENGLISH_BY_CHINESE,
} from './englishWorkTitles';
const worksData: Record<string, { descZh: string, descEn: string, contextZh: string, contextEn: string, chapters?: number[] }> = worksDataJson;

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const ENGLISH_WORK_SPLIT_PATTERN = ENGLISH_WORK_TITLES.map(escapeRegExp).join('|');

const CHAPTER_ANNOTATION_TOKEN_SPLIT_REGEX = new RegExp(
  ENGLISH_WORK_SPLIT_PATTERN.length > 0
    ? `(▉|□|《[^》\\n]+》|\\*(?!\\s)[^*]+(?<!\\s)\\*|${ENGLISH_WORK_SPLIT_PATTERN})`
    : `(▉|□|《[^》\\n]+》|\\*(?!\\s)[^*]+(?<!\\s)\\*)`,
  'gi',
);

const ENGLISH_WORK_TITLE_LOWERCASE = new Set(
  ENGLISH_WORK_TITLES.map((title) => title.toLowerCase()),
);

/** English line under each title in the 目录 view; keyed by chapter id (optional). */
const chapterTitleTranslations: Partial<Record<number, string>> = {
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
  17: "At Zhu Fangnian's banquet, poets gather in splendor; in the floral register, supreme beauty crowns all fragrance.",
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

const translationMap = chapterTranslationsById;
import { Character, Chapter } from './types';
import NetworkGraph from './components/NetworkGraph';

const ROLE_ORDER = ['performer', 'scholar', 'villain', 'female', 'official', 'servant', 'deceased', 'minor', 'Other'];

const ROLE_ICONS: Record<string, any> = {
  scholar: Award,
  performer: Heart,
  official: Shield,
  villain: Skull,
  minor: Info,
  female: User,
  servant: Briefcase,
  deceased: Skull,
  Other: Info
};

const ROLE_TINTS: Record<string, string> = {
  scholar: 'bg-[#355070]/10 border-[#355070]/30',
  performer: 'bg-[#8c3b3b]/10 border-[#8c3b3b]/30',
  official: 'bg-[#8a6a2f]/10 border-[#8a6a2f]/30',
  villain: 'bg-[#3f2f2f]/10 border-[#3f2f2f]/30',
  minor: 'bg-[#3f6b63]/10 border-[#3f6b63]/30',
  female: 'bg-[#6b4a7d]/10 border-[#6b4a7d]/30',
  servant: 'bg-[#4d6a3a]/10 border-[#4d6a3a]/30',
  deceased: 'bg-[#5b5f67]/10 border-[#5b5f67]/30',
  Other: 'bg-[#7a5c43]/10 border-[#7a5c43]/30'
};

const ROLE_TEXT_COLORS: Record<string, string> = {
  scholar: 'text-[#355070]',
  performer: 'text-[#8c3b3b]',
  official: 'text-[#8a6a2f]',
  villain: 'text-[#3f2f2f]',
  minor: 'text-[#3f6b63]',
  female: 'text-[#6b4a7d]',
  servant: 'text-[#4d6a3a]',
  deceased: 'text-[#5b5f67]',
  Other: 'text-[#7a5c43]'
};

const ROLE_ACCENTS: Record<string, string> = {
  scholar: '#355070',
  performer: '#8c3b3b',
  official: '#8a6a2f',
  villain: '#3f2f2f',
  minor: '#3f6b63',
  female: '#6b4a7d',
  servant: '#4d6a3a',
  deceased: '#5b5f67',
  Other: '#7a5c43'
};

// Chip colours — unselected (light tint) and selected (solid)
const ROLE_CHIP_IDLE: Record<string, string> = {
  scholar:  'bg-[#e7edf2] border-[#8ea1b5] text-[#355070]',
  performer:'bg-[#f3e4e4] border-[#b68888] text-[#8c3b3b]',
  official: 'bg-[#f2ead8] border-[#b79f73] text-[#8a6a2f]',
  villain:  'bg-[#ece7e3] border-[#8f7f73] text-[#3f2f2f]',
  minor:    'bg-[#e3efec] border-[#8ea89f] text-[#3f6b63]',
  female:   'bg-[#ece5f2] border-[#9f88b0] text-[#6b4a7d]',
  servant:  'bg-[#e8efe3] border-[#94a686] text-[#4d6a3a]',
  deceased: 'bg-[#e8e9ec] border-[#9da1ab] text-[#5b5f67]',
  Other:    'bg-[#efe8df] border-[#a88f79] text-[#7a5c43]',
};

const ROLE_CHIP_ACTIVE: Record<string, string> = {
  scholar:  'bg-[#355070] border-[#355070] text-[#f4ecd8]',
  performer:'bg-[#8c3b3b] border-[#8c3b3b] text-[#f4ecd8]',
  official: 'bg-[#8a6a2f] border-[#8a6a2f] text-[#f4ecd8]',
  villain:  'bg-[#3f2f2f] border-[#3f2f2f] text-[#f4ecd8]',
  minor:    'bg-[#3f6b63] border-[#3f6b63] text-[#f4ecd8]',
  female:   'bg-[#6b4a7d] border-[#6b4a7d] text-[#f4ecd8]',
  servant:  'bg-[#4d6a3a] border-[#4d6a3a] text-[#f4ecd8]',
  deceased: 'bg-[#5b5f67] border-[#5b5f67] text-[#f4ecd8]',
  Other:    'bg-[#7a5c43] border-[#7a5c43] text-[#f4ecd8]',
};

function extractChineseTokens(text: string): string[] {
  const matches = text.match(/[\u4e00-\u9fff]+/g);
  return matches ? matches.filter(Boolean) : [];
}

function stripDiacritics(s: string): string {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

type Segment = string | { token: string; char: Character; chipLabel: string };
type LacunaConfidence = 'certain' | 'probable' | 'speculative';

type LacunaEntry = {
  chapterId: number;
  snippet: string;
  symbol: '□' | '▉';
  inferredCharacter: string;
  confidence: LacunaConfidence;
  note: string;
};
type NovelLocationWithChapters = NovelLocation & { chapterIds: number[] };

// Tokens that are also common Chinese nouns — require context confirmation before
// being rendered as a name chip. Add any token here that causes false positives.
const CONTEXT_SENSITIVE_TOKENS = new Set(['菊花']);

const ENGLISH_ALIAS_TOKENS: Record<string, string[]> = {
  '庾香': ['Yuxiang', 'Yu Xiang'],
  '琴官': ['Qinguan', 'Qin Guan', 'Master Du Qin'],
  '玉侬': ['Yunong', 'Yu Nong'],
  '琴仙': ['Qinxian', 'Qin Xian', 'Qin Immortal'],
  '剑潭': ['Jiantan', 'Jian Tan'],
  '竹君': ['Zhujun', 'Zhu Jun'],
  '庸庵': ['Yongan', 'Yong An'],
  '度香': ['Duxiang', 'Du Xiang'],
  '静宜': ['Jingyi', 'Jing Yi'],
  '前舟': ['Qianzhou', 'Qian Zhou'],
  '卓然': ['Zhuoran', 'Zhuo Ran'],
  '湘帆': ['Xiangfan', 'Xiang Fan'],
  '金栗': ['Jinli', 'Jin Li', 'Jin Su'],
  '虫蛀千字文': ['Worm-eaten Primer'],
  '迭韵双声谱': ['Iterated Rhymes and Double Sounds'],
  '瑶卿': ['Yaoqing', 'Yao Qing'],
  '媚香': ['Meixiang', 'Mei Xiang'],
  '香畹': ['Xiangwan', 'Xiang Wan'],
  '瘦香': ['Shouxiang', 'Shou Xiang', 'Shoufang', 'Shou Fang'],
  '佩仙': ['Peixian', 'Pei Xian'],
  '静芳': ['Jingfang', 'Jing Fang'],
  '蕊香': ['Ruixiang', 'Rui Xiang'],
  '小梅': ['Xiaomei', 'Xiao Mei', 'Little Mei'],
  '琪官': ['Qiguan', 'Qi Guan'],
  '铁庵': ['Tiean', "Tie'an", 'Tie An'],
  '富三爷': ['Fu Third', 'Third Master Fu'],
  '贵大爷': ['Gui First', 'Eldest Master Gui'],
  '华公子': ['Young Master Hua', 'Lord Hua'],
  '星北': ['Xingbei', 'Xing Bei'],
  '奚正绅': ['Xi Zhengshen', 'Xi Zheng Shen'],
  '道生': ['Daosheng', 'Dao Sheng'],
  '石翁': ['Shiweng', 'Shi Weng'],
  '英官': ['Yingguan', 'Ying Guan'],
  '道翁': ['Daoweng', 'Dao Weng'],
};

function getEnglishAliasTokens(character: Character): string[] {
  if (character.alias === '—') return [];
  const chineseAliases = character.alias
    .split('/')
    .flatMap((part) => extractChineseTokens(part.trim()));
  return [...new Set(chineseAliases.flatMap((alias) => ENGLISH_ALIAS_TOKENS[alias] ?? []))];
}

/**
 * Returns true if the token at [start, end) in `text` looks like a person name
 * rather than a common noun, based on surrounding characters.
 */
function isPersonNameContext(text: string, start: number, end: number): boolean {
  const before = text.slice(Math.max(0, start - 6), start);
  const after  = text.slice(end, end + 8);

  // Strong person indicators: followed by a dialogue/action verb
  if (/^[道说答问笑叹嗔骂哭喊叫]/.test(after)) return true;
  if (/^[便也都只就却]?[道说]/.test(after)) return true; // 便道/也说/就说

  // Strong noun indicators: preceded by a Chinese numeral or classifier
  if (/[一二三四五六七八九十百千万两\d][层盆朵束枝株棵个只瓶碗堆]?$/.test(before)) return false;
  // Noun verb: insert/arrange/pile/plant immediately before
  if (/[插摆堆种赏采送买折剪].$/.test(before)) return false;
  if (/[插摆堆种赏采送买折剪]$/.test(before)) return false;

  // Default: not confident it's a person name — skip the chip
  return false;
}

function getChineseShortFormTokens(char: Character): string[] {
  const chineseName = char.name.split(' ')[0];
  const givenName = chineseName.length === 3 ? chineseName.slice(1) : null;
  const aliasTokens =
    char.alias !== '—'
      ? char.alias.split('/').flatMap((part) => extractChineseTokens(part.trim()))
      : [];
  return [...new Set([...(givenName ? [givenName] : []), ...aliasTokens])].filter(
    (t) => t.length >= 2 && t !== chineseName && !GENERIC_HONORIFICS.has(t),
  );
}

function removeTrailingSurname(
  text: string,
  char: Character,
  token: string,
): { text: string; chipLabel?: string } {
  const chineseName = char.name.split(' ')[0];
  const surname = chineseName[0];

  if (/[\u4e00-\u9fff]/.test(token)) {
    const shortForms = getChineseShortFormTokens(char);
    if (shortForms.includes(token) && text.endsWith(surname)) {
      return { text: text.slice(0, -surname.length), chipLabel: surname + token };
    }
    return { text };
  }

  const pinyinPart = char.name.slice(chineseName.length).trim();
  if (!pinyinPart) return { text };

  const plainParts = stripDiacritics(pinyinPart).split(/\s+/).filter(Boolean);
  const pinyinSurname = plainParts[0];
  const remainingNameParts = plainParts.slice(1);
  const englishAliases = getEnglishAliasTokens(char);
  if (!pinyinSurname || (!remainingNameParts.includes(token) && !englishAliases.includes(token))) {
    return { text };
  }

  return { text: text.replace(new RegExp(`\\b${pinyinSurname}\\s+$`, 'i'), '') };
}

function segmentText(text: string, tokenMap: [string, Character][]): Segment[] {
  const segments: Segment[] = [];
  let cursor = 0;
  while (cursor < text.length) {
    let matched = false;
    for (const [token, char] of tokenMap) {
      if (text.startsWith(token, cursor)) {
        const afterPos = cursor + token.length;
        // ASCII tokens require a word-boundary after the match
        const isAscii = /[a-zA-Z]/.test(token);
        if (isAscii && afterPos < text.length && /[a-zA-Z]/.test(text[afterPos])) continue;
        // Context-sensitive tokens: only chip if context confirms a person name
        if (CONTEXT_SENSITIVE_TOKENS.has(token) && !isPersonNameContext(text, cursor, afterPos)) continue;
        const previous = segments[segments.length - 1];
        let chipLabel = token;
        if (typeof previous === 'string') {
          const trimmed = removeTrailingSurname(previous, char, token);
          segments[segments.length - 1] = trimmed.text;
          if (trimmed.chipLabel) chipLabel = trimmed.chipLabel;
        }
        segments.push({ token, char, chipLabel });
        cursor += token.length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      const last = segments[segments.length - 1];
      if (typeof last === 'string') {
        segments[segments.length - 1] = last + text[cursor];
      } else {
        segments.push(text[cursor]);
      }
      cursor++;
    }
  }
  return segments;
}

function countTextSearchMatches(text: string, query: string): number {
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

function renderTextWithSearchHighlight(
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
            ? 'bg-[#8b4513]/35 ring-2 ring-[#8b4513]/50 text-[#2c2420]'
            : 'bg-amber-300/70 text-[#2c2420]'
        }`}
      >
        {matchText}
      </mark>
    );
    pos = found + trimmed.length;
  }

  if (nodes.length === 0) return text;
  if (nodes.length === 1) return nodes[0];
  return nodes;
}

function isWorkAnnotationToken(part: string): boolean {
  if (part === '▉' || part === '□') return false;
  if (/^《[^》\n]+》$/.test(part)) return true;
  if (/^\*(?!\s)[^*]+(?<!\s)\*$/.test(part)) return true;
  return (
    ENGLISH_WORK_TITLE_SET.has(part) ||
    ENGLISH_WORK_TITLE_LOWERCASE.has(part.toLowerCase())
  );
}

function isChineseWorkAnnotationToken(part: string): boolean {
  return /^《[^》\n]+》$/.test(part);
}

const CHINESE_WORK_BY_ENGLISH_LOWER: Record<string, string> = Object.fromEntries(
  Object.entries(WORK_ENGLISH_BY_CHINESE).map(([zh, en]) => [en.toLowerCase(), zh]),
);

function workKeyFromAnnotationToken(part: string): string | null {
  const bookMatch = part.match(/^《([^》\n]+)》$/);
  if (bookMatch) return bookMatch[1];

  const starMatch = part.match(/^\*(?!\s)([^*]+)(?<!\s)\*$/);
  if (starMatch) {
    const inner = starMatch[1];
    if (/[一-鿿]/.test(inner)) {
      return inner.replace(/《|》/g, '');
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

function chapterWorkAnchorId(chapterId: number, workKey: string): string {
  return `chapter-work-${chapterId}-${encodeURIComponent(workKey)}`;
}

function getSegmentChipLabel(
  seg: { token: string; char: Character; chipLabel: string },
  showBilingual: boolean,
): string {
  if (showBilingual) return seg.char.name;
  const chineseName = seg.char.name.split(' ')[0];
  const isChineseToken = /[一-鿿]/.test(seg.token);
  return isChineseToken
    ? seg.chipLabel
    : seg.char.name.slice(chineseName.length).trim();
}

const ENGLISH_CHARACTER_NAME_FALLBACKS: Record<string, string> = {
  'char-87': 'Madam Lu (Wang household)',
  'char-96': 'Madam Lu (Sun household)',
  'char-99': 'Miss Wang',
  'char-108': 'Page Boy',
  'char-109': 'Maidservant (Gatekeeper)',
  'char-110': 'Household Maid (Clothing)',
  'char-111': 'Young Maid (Ziyu Study)',
  'char-116': 'Escort Matron (Ba household)',
  'char-117': 'Nursemaid (Ba Laifeng)',
  'char-118': 'Attendant (Fu household)',
  'char-120': 'Retinue (Hua household, ~20-30 people)',
};

function getCharacterNameForLanguage(character: Character, lang: 'en' | 'zh'): string {
  const chineseName = character.name.split(' ')[0];
  if (lang === 'zh') return chineseName;

  const pinyinOrEnglishName = character.name.slice(chineseName.length).trim();
  if (pinyinOrEnglishName) return pinyinOrEnglishName;

  return ENGLISH_CHARACTER_NAME_FALLBACKS[character.id] || character.name;
}

function countSearchMatchesInRenderedText(
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
    if (typeof seg === 'string') {
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

function getChapterMentionedCharacters(content: string): Character[] {
  const hitIds = new Set<string>();
  const hits: Character[] = [];

  for (const character of characters) {
    const nameTokens = extractChineseTokens(character.name);
    const aliasTokens = character.alias
      .split('/')
      .flatMap((part) => extractChineseTokens(part))
      .filter((token) => token !== '—');
    const tokens = Array.from(new Set([...nameTokens, ...aliasTokens])).filter((token) => token.length >= 2);

    if (tokens.some((token) => content.includes(token))) {
      if (!hitIds.has(character.id)) {
        hitIds.add(character.id);
        hits.push(character);
      }
    }
  }

  return hits.sort((a, b) => a.chapterNum - b.chapterNum || a.name.localeCompare(b.name));
}

function LanguageSwitch({
  lang,
  setLang,
  className = '',
  compact = false,
}: {
  lang: 'en' | 'zh';
  setLang: (lang: 'en' | 'zh') => void;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex bg-black/5 p-1 rounded-sm border border-[#d4c5a9] ${className}`}
      role="group"
      aria-label={lang === 'zh' ? '语言' : 'Language'}
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`${compact ? 'px-1.5 py-1 text-[8px]' : 'px-3 py-1 text-[10px]'} font-bold uppercase tracking-widest transition-all rounded-sm ${
          lang === 'en' ? 'bg-[#8b4513] text-[#f4ecd8]' : 'text-[#5d5048] hover:bg-black/5'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('zh')}
        className={`${compact ? 'px-1.5 py-1 text-[8px]' : 'px-3 py-1 text-[10px]'} font-bold uppercase tracking-widest transition-all rounded-sm font-hans ${
          lang === 'zh' ? 'bg-[#8b4513] text-[#f4ecd8]' : 'text-[#5d5048] hover:bg-black/5'
        }`}
      >
        {compact ? '中' : '中文'}
      </button>
    </div>
  );
}

type NavSection = {
  id: string;
  label: string;
  icon: typeof Home;
};

function NavMenuDropdown({
  lang,
  sections,
  onScrollToSection,
  onOpenContents,
  onOpenChapter,
}: {
  lang: 'en' | 'zh';
  sections: NavSection[];
  onScrollToSection: (id: string) => void;
  onOpenContents: () => void;
  onOpenChapter: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number; width: number } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const updateMenuPosition = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    const width = window.matchMedia('(min-width: 768px)').matches ? 480 : 288;
    const left = Math.min(Math.max(8, rect.right - width), window.innerWidth - width - 8);

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
    window.addEventListener('resize', updateMenuPosition);
    window.addEventListener('scroll', updateMenuPosition, true);
    return () => {
      window.removeEventListener('resize', updateMenuPosition);
      window.removeEventListener('scroll', updateMenuPosition, true);
    };
  }, [open, updateMenuPosition]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (triggerRef.current?.contains(target) || panelRef.current?.contains(target)) return;
      setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
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
            position: 'fixed',
            top: menuPosition.top,
            left: menuPosition.left,
            width: menuPosition.width,
            zIndex: 60,
          }}
          className="max-h-[min(70vh,28rem)] overflow-y-auto parchment rounded-sm border-double border-4 border-[#d4c5a9] shadow-xl p-3"
        >
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#5d5048] font-bold mb-2 px-1">
            {lang === 'zh' ? '快速前往' : 'Go To'}
          </p>
          <div className="grid grid-cols-3 gap-1.5 mb-3">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                role="menuitem"
                onClick={() => navigate(() => onScrollToSection(id))}
                className="w-full rounded-sm border border-[#d4c5a9]/70 bg-white/15 hover:bg-[#8b4513]/8 hover:border-[#8b4513]/40 transition-all px-2 py-2 flex flex-col items-center justify-center gap-1 min-w-0 text-center"
              >
                <Icon size={15} className="text-[#8b4513] shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#2c2420] leading-tight line-clamp-2">{label}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-[#d4c5a9]">
            <button
              type="button"
              role="menuitem"
              onClick={() => navigate(onOpenContents)}
              className="col-span-2 min-h-10 rounded-sm bg-[#8b4513] text-[#f4ecd8] px-2 py-1.5 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider"
            >
              <Book size={13} />
              {lang === 'zh' ? '目录' : 'Contents'}
            </button>
            <button
              type="button"
              role="menuitem"
              onClick={() => navigate(onOpenChapter)}
              className="min-h-10 rounded-sm border border-[#8b4513]/50 text-[#8b4513] bg-[#8b4513]/5 px-2 py-1.5 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider"
            >
              <BookOpen size={13} />
              {lang === 'zh' ? '第一回' : 'Ch. 1'}
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
        className="flex items-center gap-1.5 px-3 py-[7px] bg-black/5 rounded-sm border border-[#d4c5a9] text-[#5d5048] hover:bg-black/5 transition-all"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={lang === 'zh' ? '打开菜单' : 'Open menu'}
      >
        <Menu size={14} />
        <span className="text-[10px] font-bold uppercase tracking-widest">{lang === 'zh' ? '菜单' : 'Menu'}</span>
        <ChevronDown size={12} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {menuPanel}
    </>
  );
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedGarden, setSelectedGarden] = useState<Garden | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<NovelLocationWithChapters | null>(null);
  const [selectedWork, setSelectedWork] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'role' | 'appearance' | 'mentions'>('mentions');
  const [lang, setLang] = useState<'en' | 'zh'>('zh');
  const [activeLacunaChapter, setActiveLacunaChapter] = useState<number | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [networkGraphFullscreen, setNetworkGraphFullscreen] = useState(false);

  const lacunaChapterNumbers = useMemo(
    () => chapters.filter((chapter) => Number(chapter.id) > 0).map((chapter) => Number(chapter.id)),
    []
  );

  const lacunaeByChapter = useMemo(() => {
    const grouped = new Map<number, LacunaEntry[]>();
    for (const chapter of chapterLacunae) {
      grouped.set(
        chapter.chapterId,
        chapter.lacunae.map((lacuna) => ({
          chapterId: chapter.chapterId,
          snippet: lacuna.context,
          symbol: lacuna.context.includes('▉') ? '▉' : '□',
          inferredCharacter: lacuna.inference,
          confidence: lacuna.confidence,
          note: lacuna.note,
        }))
      );
    }
    return grouped;
  }, []);

  const lacunaCountByChapter = useMemo(() => {
    const counts: Record<number, number> = {};
    for (const chapterNumber of lacunaChapterNumbers) counts[chapterNumber] = 0;
    for (const chapterNumber of lacunaChapterNumbers) {
      counts[chapterNumber] = lacunaeByChapter.get(chapterNumber)?.length ?? 0;
    }
    return counts;
  }, [lacunaeByChapter, lacunaChapterNumbers]);

  const t = {
    en: {
      titleEn: "Pinhua baojian Database",
      titleZh: "品花宝鉴数据库",
      chapterAbbr: "Ch.",
      mentions: (count: number) => `mention${count !== 1 ? 's' : ''}`,
      noTextExcerpts: "No text excerpts found.",
      subtitle: `Exploring ${characters.length} characters from the classic Chinese novel`,
      hometown: "Hometown",
      ageDist: "Age Distribution",
      roleDist: "Role Distribution",
      searchPlaceholder: "Search the archives...",
      chronology: "Chronology",
      roleSort: "By Role",
      mentionSort: "By Mentions",
      allRecords: "All Records",
      noRecords: "No records found in the archive.",
      alias: "Alias",
      origin: "Origin",
      firstEntry: "First Entry",
      historicalRecord: "Historical Record",
      dossier: "Dossier",
      archives: "Character Database",
      age: "Age",
      chapters: "Chapters",
      readChapter: "Read Chapter"
    },
    zh: {
      titleEn: "Pinhua baojian Database",
      titleZh: "品花宝鉴数据库",
      chapterAbbr: "第",
      mentions: (count: number) => `次提及`,
      noTextExcerpts: "无文本摘录。",
      subtitle: `探索中国古典小说中的${characters.length}位人物`,
      hometown: "籍贯",
      ageDist: "年龄分布",
      roleDist: "角色分布",
      searchPlaceholder: "搜索档案...",
      chronology: "出场顺序",
      roleSort: "按角色",
      mentionSort: "按提及",
      allRecords: "全部记录",
      noRecords: "档案中未找到记录。",
      alias: "别名",
      origin: "籍贯",
      firstEntry: "首次登场",
      historicalRecord: "历史记录",
      dossier: "档案",
      archives: "人物数据库",
      age: "年龄",
      chapters: "章节目录",
      readChapter: "阅读全回"
    }
  }[lang];

  const roles = useMemo(() => {
    const seen = new Map<string, string>(); // key → label
    characters.forEach(c => {
      if (!seen.has(c.role)) seen.set(c.role, lang === 'zh' ? c.roleZh : c.role);
    });
    return Array.from(seen.entries())
      .map(([key, label]) => ({ key, label }))
      .sort((a, b) => {
        const ia = ROLE_ORDER.indexOf(a.key);
        const ib = ROLE_ORDER.indexOf(b.key);
        return (ia === -1 ? ROLE_ORDER.length : ia) - (ib === -1 ? ROLE_ORDER.length : ib);
      });
  }, [lang]);

  const mentionCountByCharacterId = useMemo(() => {
    const map = new Map<string, number>();
    for (const char of characters) {
      map.set(char.id, getCharacterTotalMentions(char));
    }
    return map;
  }, []);

  const filteredCharacters = useMemo(() => {
    const filtered = characters.filter(char => {
      const matchesSearch = 
        char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.alias.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (identityLinksById[char.id] || []).some((name) =>
          name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      
      const matchesRole = !selectedRole || char.role === selectedRole;
      
      return matchesSearch && matchesRole;
    });

    return filtered.sort((a, b) => {
      if (sortBy === 'role') {
        const roleA = lang === 'zh' ? a.roleZh : a.role;
        const roleB = lang === 'zh' ? b.roleZh : b.role;
        return roleA.localeCompare(roleB);
      }
      if (sortBy === 'mentions') {
        return (mentionCountByCharacterId.get(b.id) ?? 0) - (mentionCountByCharacterId.get(a.id) ?? 0);
      }
      return a.chapterNum - b.chapterNum;
    });
  }, [searchQuery, selectedRole, sortBy, lang, mentionCountByCharacterId]);

  // Calculate Stats
  const stats = useMemo(() => {
    type CharList = { count: number; chars: typeof characters };
    const originMap: Record<string, CharList> = {};
    const unknownOriginChars: typeof characters = [];
    const rolesCount: Record<string, number> = {};
    const ageGroupOrder = ['<15', '15-19', '20-24', '25-29', '30+'];
    const ageGroupMap: Record<string, CharList> = Object.fromEntries(
      ageGroupOrder.map(g => [g, { count: 0, chars: [] }])
    );
    const unknownAgeChars: typeof characters = [];

    characters.forEach(c => {
      if (c.origin === '—') {
        unknownOriginChars.push(c);
      } else {
        if (!originMap[c.origin]) originMap[c.origin] = { count: 0, chars: [] };
        originMap[c.origin].count++;
        originMap[c.origin].chars.push(c);
      }
      rolesCount[c.role] = (rolesCount[c.role] || 0) + 1;

      // Parse Age
      const ageStr = c.age.replace('~', '').replace('+', '').trim();
      const age = parseInt(ageStr);
      if (!isNaN(age)) {
        let bucket: string;
        if (age < 15) bucket = '<15';
        else if (age <= 19) bucket = '15-19';
        else if (age <= 24) bucket = '20-24';
        else if (age <= 29) bucket = '25-29';
        else bucket = '30+';
        ageGroupMap[bucket].count++;
        ageGroupMap[bucket].chars.push(c);
      } else {
        unknownAgeChars.push(c);
      }
    });

    const maxOriginCount = Math.max(...Object.values(originMap).map(v => v.count), unknownOriginChars.length, 1);
    const topOrigins = [
      ...Object.entries(originMap)
        .sort((a, b) => b[1].count - a[1].count)
        .map(([name, { count, chars }]) => ({
          name, count, chars,
          percentage: Math.round((count / maxOriginCount) * 100)
        })),
      ...(unknownOriginChars.length > 0 ? [{
        name: 'Unknown', count: unknownOriginChars.length,
        chars: unknownOriginChars,
        percentage: Math.round((unknownOriginChars.length / maxOriginCount) * 100)
      }] : [])
    ];

    const maxRoleCount = Math.max(...Object.values(rolesCount), 1);
    const topRoles = Object.entries(rolesCount)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ name, count, percentage: Math.round((count / maxRoleCount) * 100) }));

    const maxAgeCount = Math.max(...Object.values(ageGroupMap).map(v => v.count), unknownAgeChars.length, 1);
    const ageData = [
      ...ageGroupOrder.map(group => ({
        group, ...ageGroupMap[group],
        percentage: Math.round((ageGroupMap[group].count / maxAgeCount) * 100)
      })),
      ...(unknownAgeChars.length > 0 ? [{
        group: '?', count: unknownAgeChars.length, chars: unknownAgeChars,
        percentage: Math.round((unknownAgeChars.length / maxAgeCount) * 100)
      }] : [])
    ];

    return { topOrigins, topRoles, ageData };
  }, []);

  const DRINKING_KEYWORDS = ['酒令','行令','罚酒','猜拳','猜枚','飞花令','酒筹'];
  const WORDGAME_KEYWORDS = ['灯谜','联句','分韵','赋诗','拆字','射覆','诗谜','猜谜'];
  const MATURE_KEYWORDS   = ['奸','嫖','云雨','行房','幸了','土窑子','春宫','淫欲'];

  const chapterStats = useMemo(() => {
    return chapters
      .filter(ch => ch.id >= 1)
      .map(ch => {
        const chineseChars = (ch.content.match(/[\u4e00-\u9fff]/g) ?? []).length;
        const englishText = (translationMap[ch.id] ?? []).join(' ');
        const englishWords = (englishText.match(/\b[A-Za-z]+(?:'[A-Za-z]+)?\b/g) ?? []).length;
        const paragraphs = ch.content.split(/\n\n+/).filter(p => p.trim().length > 0).length;
        const conversations = (ch.content.match(/[「『]/g) ?? []).length;
        const works = new Set((ch.content.match(/《[^》\n]{1,40}》/g) ?? []).map((w) => w.trim()));
        const hasDrinking = DRINKING_KEYWORDS.some(k => ch.content.includes(k));
        const hasWordGame = WORDGAME_KEYWORDS.some(k => ch.content.includes(k));
        const hasMature   = MATURE_KEYWORDS.some(k => ch.content.includes(k));
        return { id: ch.id, title: ch.title, chineseChars, englishWords, paragraphs, conversations, worksMentioned: works.size, hasDrinking, hasWordGame, hasMature };
      });
  }, []);

  const allWorksCited = useMemo(() => {
    const workMap = new Map<string, number>();
    chapters.filter(ch => ch.id >= 1).forEach(ch => {
      const works = new Set((ch.content.match(/《[^》\n]{1,40}》/g) ?? []).map(w => w.trim()));
      works.forEach(w => workMap.set(w, (workMap.get(w) ?? 0) + 1));
    });
    return Array.from(workMap.entries()).sort((a, b) => b[1] - a[1]);
  }, []);

  const locationsByType = useMemo(() => {
    const chapterList = chapters.filter(ch => ch.id >= 1);
    const entries = novelLocations
      .map(location => {
        const chapterIds = chapterList
          .filter(chapter => location.searchTokens.some(token => chapter.content.includes(token)))
          .map(chapter => chapter.id);
        return { ...location, chapterIds };
      })
      .filter(location => location.chapterIds.length > 0)
      .sort((a, b) => b.chapterIds.length - a.chapterIds.length || a.name.localeCompare(b.name));

    return locationTypeOrder
      .map(type => ({
        type,
        label: locationTypeLabels[type],
        locations: entries.filter(location => location.type === type),
      }))
      .filter(group => group.locations.length > 0);
  }, []);

  const [chapterSortMode, setChapterSortMode] = useState<'longest' | 'shortest' | 'chapter' | 'talkative' | 'works'>('longest');

  const downloadTxt = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadChinese = () => {
    const text = chapters.map(ch => `${ch.title}\n\n${ch.content}`).join('\n\n\n');
    downloadTxt('pinhua-baojian-chinese.txt', text);
  };

  const downloadEnglish = () => {
    const text = chapters.map(ch => {
      const title = ch.id === 0 ? 'Preface' : `Chapter ${ch.id} — ${chapterTitleTranslations[ch.id] || ch.title}`;
      const paras = (translationMap[ch.id] ?? []).join('\n\n');
      return `${title}\n\n${paras}`;
    }).join('\n\n\n');
    downloadTxt('pinhua-baojian-english.txt', text);
  };

  const downloadInterleaved = () => {
    const text = chapters.map(ch => {
      const zhTitle = ch.title;
      const enTitle = ch.id === 0 ? 'Preface' : `Chapter ${ch.id} — ${chapterTitleTranslations[ch.id] || ch.title}`;
      const zhParas = ch.content.split(/\n\n+/).filter(p => p.trim());
      const enParas = translationMap[ch.id] ?? [];
      const pairs = zhParas.map((zhP, i) => `${zhP}${enParas[i] ? `\n\n${enParas[i]}` : ''}`).join('\n\n');
      return `${zhTitle} / ${enTitle}\n\n${pairs}`;
    }).join('\n\n\n');
    downloadTxt('pinhua-baojian-bilingual.txt', text);
  };

  const downloadJSON = () => {
    const data = chapters.map(ch => {
      const chapterId = ch.id;
      const isPreface = chapterId === 0;

      const titleZh = ch.title;
      const titleEn = isPreface ? 'Preface' : `Chapter ${chapterId} — ${chapterTitleTranslations[chapterId] || titleZh}`;

      const summaryZh = chapterSummaries[chapterId]?.zh || '';
      const summaryEn = chapterSummaries[chapterId]?.en || '';

      const zhParas = ch.content.split(/\n\n+/).filter(p => p.trim());
      const enParas = translationMap[chapterId] || [];

      const chapterObj: any = {
        "Chapter number": isPreface ? 0 : chapterId,
        "chapter title Chinese": titleZh,
        "chapter title English": titleEn,
        "summary Chinese": summaryZh,
        "summary English": summaryEn,
      };

      for (let i = 0; i < Math.max(zhParas.length, enParas.length); i++) {
        if (zhParas[i]) chapterObj[`paragraph ${i+1} Chinese`] = zhParas[i];
        if (enParas[i]) chapterObj[`paragraph ${i+1} English`] = enParas[i];
      }

      return chapterObj;
    });

    const text = JSON.stringify(data, null, 2);
    const blob = new Blob([text], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const view = window.open(url, '_blank', 'noopener,noreferrer');
    if (view) {
      window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
    } else {
      URL.revokeObjectURL(url);
      downloadTxt('pinhua-baojian-full.json', text);
    }
  };

  const scrollToSection = (id: string) => {
    if (!mobileMenuOpen) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    setMobileMenuOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  const openContents = () => {
    setSelectedChapter({ id: -1, title: '目录', content: chapters.filter(c => c.id > 0).map(c => c.title).join('\n') });
    setMobileMenuOpen(false);
  };

  const mobileSections = [
    { id: 'overview', label: lang === 'zh' ? '总览' : 'Overview', icon: Home },
    {
      id: 'network',
      label: lang === 'zh' ? '关系网络' : 'Network',
      icon: Network,
    },
    { id: 'characters', label: lang === 'zh' ? '人物' : 'Characters', icon: Users },
    { id: 'chapters', label: lang === 'zh' ? '章节' : 'Chapters', icon: BookOpen },
    { id: 'gardens', label: lang === 'zh' ? '园林' : 'Gardens', icon: Leaf },
  ];

  const mobileMenuSections = [
    ...mobileSections,
    { id: 'stats', label: lang === 'zh' ? '统计' : 'Statistics', icon: Activity },
    { id: 'works', label: lang === 'zh' ? '引书' : 'Works Cited', icon: Book },
    { id: 'locations', label: lang === 'zh' ? '地点' : 'Locations', icon: MapPin },
    { id: 'lacunae', label: lang === 'zh' ? '缺文' : 'Lacunae', icon: Info },
    { id: 'questions', label: lang === 'zh' ? '问题' : 'Questions', icon: BookOpen },
  ];

  const hasOpenModal = Boolean(
    selectedChapter ||
    selectedCharacter ||
    selectedGarden ||
    selectedLocation ||
    selectedWork ||
    activeLacunaChapter !== null ||
    selectedQuestion !== null
  );
  const hasOpenOverlay = hasOpenModal || mobileMenuOpen;

  useLayoutEffect(() => {
    if (!hasOpenOverlay) return;

    const scrollY = window.scrollY;
    const bodyStyle = document.body.style;
    const htmlStyle = document.documentElement.style;
    const previousBody = {
      position: bodyStyle.position,
      top: bodyStyle.top,
      left: bodyStyle.left,
      right: bodyStyle.right,
      width: bodyStyle.width,
      overflow: bodyStyle.overflow,
      touchAction: bodyStyle.touchAction,
      overscrollBehavior: bodyStyle.overscrollBehavior,
      paddingRight: bodyStyle.paddingRight,
    };
    const previousHtml = {
      overflow: htmlStyle.overflow,
      position: htmlStyle.position,
      width: htmlStyle.width,
      overscrollBehavior: htmlStyle.overscrollBehavior,
    };

    const allowScrollTarget = (target: EventTarget | null) =>
      target instanceof Element && target.closest('[data-overlay-scroll="true"]');

    const preventScrollOutsideOverlay = (event: WheelEvent | TouchEvent) => {
      if (!allowScrollTarget(event.target)) {
        event.preventDefault();
      }
    };
    const preventKeyboardScrollOutsideOverlay = (event: KeyboardEvent) => {
      const scrollKeys = new Set([
        'ArrowUp',
        'ArrowDown',
        'PageUp',
        'PageDown',
        'Home',
        'End',
        ' ',
      ]);
      if (!scrollKeys.has(event.key)) return;
      if (!allowScrollTarget(event.target)) {
        event.preventDefault();
      }
    };

    bodyStyle.position = 'fixed';
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.left = '0';
    bodyStyle.right = '0';
    bodyStyle.width = '100%';
    // Keep layout stable when scrollbar disappears during modal lock.
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      bodyStyle.paddingRight = `${scrollbarWidth}px`;
    }
    bodyStyle.overflow = 'hidden';
    bodyStyle.overscrollBehavior = 'none';
    htmlStyle.overflow = 'hidden';
    htmlStyle.position = 'fixed';
    htmlStyle.width = '100%';
    htmlStyle.overscrollBehavior = 'none';

    window.addEventListener('wheel', preventScrollOutsideOverlay, { passive: false });
    window.addEventListener('touchmove', preventScrollOutsideOverlay, { passive: false });
    window.addEventListener('keydown', preventKeyboardScrollOutsideOverlay, { passive: false });

    return () => {
      window.removeEventListener('wheel', preventScrollOutsideOverlay);
      window.removeEventListener('touchmove', preventScrollOutsideOverlay);
      window.removeEventListener('keydown', preventKeyboardScrollOutsideOverlay);
      bodyStyle.position = previousBody.position;
      bodyStyle.top = previousBody.top;
      bodyStyle.left = previousBody.left;
      bodyStyle.right = previousBody.right;
      bodyStyle.width = previousBody.width;
      bodyStyle.overflow = previousBody.overflow;
      bodyStyle.touchAction = previousBody.touchAction;
      bodyStyle.overscrollBehavior = previousBody.overscrollBehavior;
      bodyStyle.paddingRight = previousBody.paddingRight;
      htmlStyle.overflow = previousHtml.overflow;
      htmlStyle.position = previousHtml.position;
      htmlStyle.width = previousHtml.width;
      htmlStyle.overscrollBehavior = previousHtml.overscrollBehavior;
      window.scrollTo(0, scrollY);
    };
  }, [hasOpenOverlay]);

  return (
    <div className="min-h-screen font-serif text-[#2c2420] selection:bg-amber-900/20">
      {/* Header */}
      <div id="overview" className="max-w-[1800px] mx-auto w-full px-2 sm:px-5 md:px-4 lg:px-5 scroll-mt-24 md:sticky md:top-0 md:z-30 md:bg-[#e5dcc3]/95 md:backdrop-blur-sm overflow-visible">
        <header className="parchment mt-2 sm:mt-5 mb-2 px-4 sm:px-8 md:px-6 lg:px-10 py-4 md:py-3 lg:py-4 md:min-h-[4.5rem] lg:min-h-[6rem] flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4 rounded-sm border-double border-4 border-[#d4c5a9] overflow-visible">
          <div className="hidden sm:block flex-1" />
          <div className="flex flex-col items-center text-center gap-0.5 sm:gap-1 flex-1">
            <h1 className="flex flex-col items-center gap-0.5 sm:gap-1 leading-tight">
              <span className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold tracking-tight text-[#2c2420]">
                {t.titleEn}
              </span>
              <span className="text-base sm:text-lg md:text-lg lg:text-xl font-bold font-hans tracking-wide text-[#5d5048]">
                {t.titleZh}
              </span>
            </h1>
          </div>
          <div className="hidden md:flex flex-1 justify-end items-center gap-2">
            <NavMenuDropdown
              lang={lang}
              sections={mobileMenuSections}
              onScrollToSection={scrollToSection}
              onOpenContents={openContents}
              onOpenChapter={() => {
                const firstChapter = chapters.find((chapter) => chapter.id === 1);
                if (firstChapter) setSelectedChapter(firstChapter);
              }}
            />
            <LanguageSwitch lang={lang} setLang={setLang} />
          </div>
        </header>
      </div>

      <div className="md:hidden sticky top-0 z-30 px-2 pb-2 bg-[#e5dcc3]/95 backdrop-blur-sm border-b border-[#d4c5a9]/80">
        <nav className="parchment rounded-sm border border-[#d4c5a9] p-1.5 sm:p-2 flex items-center gap-1.5 sm:gap-2 shadow-md" aria-label={lang === 'zh' ? '移动导航' : 'Mobile navigation'}>
          {mobileSections.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="flex-1 min-w-0 h-11 sm:h-12 rounded-sm flex flex-col items-center justify-center gap-0.5 text-[#5d5048] hover:bg-[#8b4513]/8 hover:text-[#8b4513] transition-colors"
            >
              <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="text-[9px] sm:text-[10px] font-bold leading-none uppercase tracking-wide truncate max-w-full">{label}</span>
            </button>
          ))}
          <LanguageSwitch lang={lang} setLang={setLang} compact className="shrink-0 p-0.5" />
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="h-11 w-11 sm:h-12 sm:w-12 rounded-sm bg-[#8b4513] text-[#f4ecd8] flex items-center justify-center border border-[#8b4513] shadow-sm"
            aria-label={lang === 'zh' ? '打开全部菜单' : 'Open full menu'}
          >
            <Menu size={18} />
          </button>
        </nav>
      </div>

      <main className="max-w-[1800px] mx-auto p-2 sm:p-4 md:p-4 lg:p-5 grid grid-cols-1 md:grid-cols-[minmax(200px,240px)_1fr] lg:grid-cols-[240px_1fr_260px] xl:grid-cols-[280px_1fr_300px] gap-4 md:gap-5 lg:gap-6">
        {/* Left Sidebar */}
        <aside className="flex flex-col gap-4 md:gap-5 h-fit order-2 md:order-1 md:self-start">
          <div id="stats" className="parchment p-4 sm:p-6 md:p-5 lg:p-8 rounded-sm flex flex-col gap-6 md:gap-8 lg:gap-10 border-double border-4 border-[#d4c5a9] scroll-mt-24">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-6 font-bold border-b border-[#d4c5a9] pb-2">{t.hometown}</h2>
              <div className="space-y-4">
                {stats.topOrigins.map((stat, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-[12px]">
                      <span className="truncate pr-2 font-hans">
                        {lang === 'zh'
                          ? (stat.name === 'Unknown' ? '未知' : (stat.chars[0]?.originZh || stat.name))
                          : stat.name}
                      </span>
                      <span className="text-[#5d5048] flex-shrink-0">{stat.count}</span>
                    </div>
                    <div className="h-1 bg-black/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.percentage}%` }}
                        className="h-full bg-[#8b4513] opacity-60"
                      />
                    </div>
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {stat.chars.map(c => (
                        <button
                          key={c.id}
                          onClick={() => setSelectedCharacter(c)}
                          className="text-[9px] px-1.5 py-0.5 bg-black/5 hover:bg-[#8b4513]/15 text-[#5d5048] hover:text-[#8b4513] rounded-sm transition-colors font-sans leading-tight"
                        >
                          {getCharacterNameForLanguage(c, lang)}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-6 font-bold border-b border-[#d4c5a9] pb-2">{t.ageDist}</h2>
              <div className="space-y-4">
                {stats.ageData.map((stat, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-[12px]">
                      <span className="font-sans">{stat.group === '?' ? (lang === 'zh' ? '未知' : 'Unknown') : stat.group}</span>
                      <span className="text-[#5d5048] flex-shrink-0">{stat.count}</span>
                    </div>
                    <div className="h-1 bg-black/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.percentage}%` }}
                        className={`h-full opacity-60 ${stat.group === '?' ? 'bg-[#5d5048]' : 'bg-[#8b4513]'}`}
                      />
                    </div>
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {stat.chars.map(c => (
                        <button
                          key={c.id}
                          onClick={() => setSelectedCharacter(c)}
                          className="text-[9px] px-1.5 py-0.5 bg-black/5 hover:bg-[#8b4513]/15 text-[#5d5048] hover:text-[#8b4513] rounded-sm transition-colors font-sans leading-tight"
                        >
                          {getCharacterNameForLanguage(c, lang)}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-6 font-bold border-b border-[#d4c5a9] pb-2">{t.roleDist}</h2>
              <div className="space-y-4">
                {stats.topRoles.map((stat, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-[12px]">
                      <span className="capitalize truncate pr-2 font-hans">
                        {lang === 'zh' ? (characters.find(c => c.role === stat.name)?.roleZh || stat.name) : stat.name}
                      </span>
                      <span className="text-[#5d5048] flex-shrink-0">{stat.count}</span>
                    </div>
                    <div className="h-1 bg-black/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.percentage}%` }}
                        className="h-full bg-[#2c2420] opacity-40"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chapter Statistics */}
            {(() => {
              const totalChineseChars = chapterStats.reduce((s, c) => s + c.chineseChars, 0);
              const totalEnglishWords = chapterStats.reduce((s, c) => s + c.englishWords, 0);
              const totalParagraphs = chapterStats.reduce((s, c) => s + c.paragraphs, 0);
              const totalConversations = chapterStats.reduce((s, c) => s + c.conversations, 0);
              const totalWorks = chapterStats.reduce((s, c) => s + c.worksMentioned, 0);
              const avgChineseChars = Math.round(totalChineseChars / chapterStats.length);
              const avgEnglishWords = Math.round(totalEnglishWords / chapterStats.length);
              const avgParagraphs = Math.round(totalParagraphs / chapterStats.length);
              const avgConversations = Math.round(totalConversations / chapterStats.length);
              const avgWorks = Math.round((totalWorks / chapterStats.length) * 10) / 10;
              const maxChineseChars = Math.max(...chapterStats.map(c => c.chineseChars));
              const maxConversations = Math.max(...chapterStats.map(c => c.conversations));
              const maxWorks = Math.max(...chapterStats.map(c => c.worksMentioned), 1);
              const sorted = [...chapterStats].sort((a, b) =>
                chapterSortMode === 'longest'   ? b.chineseChars - a.chineseChars
                : chapterSortMode === 'shortest'  ? a.chineseChars - b.chineseChars
                : chapterSortMode === 'talkative' ? b.conversations - a.conversations
                : chapterSortMode === 'works' ? b.worksMentioned - a.worksMentioned
                : a.id - b.id
              );
              const zhCountLabel = lang === 'zh' ? '中文字' : 'CN chars';
              const enCountLabel = lang === 'zh' ? '英文词' : 'EN words';
              const paraLabel = lang === 'zh' ? '段' : 'para';
              return (
                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mt-6 mb-6 font-bold border-b border-[#d4c5a9] pb-2">
                    {lang === 'zh' ? '章回统计' : 'Chapter Statistics'}
                  </h2>

                  {/* Summary row */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {[
                      { label: lang === 'zh' ? '中文总字数' : 'Total CN chars', value: totalChineseChars.toLocaleString() },
                      { label: lang === 'zh' ? '英文总词数' : 'Total EN words', value: totalEnglishWords.toLocaleString() },
                      { label: lang === 'zh' ? '总段落' : 'Total para',     value: totalParagraphs.toLocaleString() },
                      { label: lang === 'zh' ? '总对话' : 'Total dialogue', value: totalConversations.toLocaleString() },
                      { label: lang === 'zh' ? '总书目提及' : 'Total works', value: totalWorks.toLocaleString() },
                      { label: lang === 'zh' ? '每回均值' : 'Avg / chapter', value: `${avgChineseChars.toLocaleString()} ${zhCountLabel} · ${avgEnglishWords.toLocaleString()} ${enCountLabel} · ${avgParagraphs} ${paraLabel} · ${avgConversations} ${lang === 'zh' ? '对话' : 'dlg'} · ${avgWorks} ${lang === 'zh' ? '书' : 'works'}` },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-black/3 rounded-sm p-2 border border-[#d4c5a9]/50">
                        <p className="text-[8px] uppercase tracking-widest text-[#5d5048] mb-0.5 leading-tight">{label}</p>
                        <p className="text-[10px] font-bold text-[#2c2420] font-sans leading-tight">{value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Sparkline */}
                  <p className="text-[8px] uppercase tracking-widest text-[#5d5048] mb-1.5">
                    {lang === 'zh' ? '各回中文字数' : 'Chinese chars per chapter'}
                  </p>
                  <div className="flex items-end gap-[1.5px] h-12 mb-5">
                    {chapterStats.map(c => {
                      const ch = chapters.find(ch => ch.id === c.id)!;
                      return (
                        <div
                          key={c.id}
                          className="flex-1 rounded-t-[1px] cursor-pointer transition-opacity hover:opacity-60"
                          style={{
                            height: `${Math.max(8, Math.round((c.chineseChars / maxChineseChars) * 100))}%`,
                            backgroundColor: '#8b4513',
                            opacity: 0.55,
                          }}
                          title={`Ch.${c.id} · ${c.chineseChars.toLocaleString()} ${zhCountLabel} · ${c.englishWords.toLocaleString()} ${enCountLabel} · ${c.paragraphs} ${paraLabel}`}
                          onClick={() => setSelectedChapter(ch)}
                        />
                      );
                    })}
                  </div>

                  {/* Sort controls */}
                  <div className="grid grid-cols-2 gap-1 mb-3">
                    {([
                      { key: 'chapter',   labelEn: 'Ch #',      labelZh: '回序' },
                      { key: 'longest',   labelEn: 'Longest',   labelZh: '最长' },
                      { key: 'shortest',  labelEn: 'Shortest',  labelZh: '最短' },
                      { key: 'talkative', labelEn: 'Chattiest', labelZh: '最多对话' },
                      { key: 'works', labelEn: 'Most works cited', labelZh: '最多书目' },
                    ] as const).map(({ key, labelEn, labelZh }) => (
                      <button
                        key={key}
                        onClick={() => setChapterSortMode(key)}
                        className={`text-[8px] px-1.5 py-1 rounded-sm border uppercase tracking-widest font-bold transition-all ${
                          chapterSortMode === key
                            ? 'bg-[#8b4513] text-[#f4ecd8] border-[#8b4513]'
                            : 'border-[#d4c5a9] text-[#5d5048] hover:border-[#8b4513]/40 hover:text-[#8b4513]'
                        }`}
                      >
                        {lang === 'zh' ? labelZh : labelEn}
                      </button>
                    ))}
                  </div>
                  {/* Badge legend */}
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <span className="text-[8px] text-[#5d5048] italic">{lang === 'zh' ? '标记：' : 'Tags:'}</span>
                    <span className="inline-flex items-center gap-1 text-[8px] text-amber-700">
                      <span className="px-1 rounded-sm bg-amber-100 border border-amber-300 font-bold font-sans leading-tight">令</span>
                      {lang === 'zh' ? '酒令' : 'Drinking game'}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[8px] text-sky-700">
                      <span className="px-1 rounded-sm bg-sky-100 border border-sky-300 font-bold font-sans leading-tight">诗</span>
                      {lang === 'zh' ? '文字游戏' : 'Word game'}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[8px] text-rose-700">
                      <span className="px-1 rounded-sm bg-rose-100 border border-rose-300 font-bold font-sans leading-tight">艳</span>
                      {lang === 'zh' ? '成人内容' : 'Mature'}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {sorted.map(c => {
                      const ch = chapters.find(ch => ch.id === c.id)!;
                      return (
                        <button
                          key={c.id}
                          onClick={() => setSelectedChapter(ch)}
                          className="w-full text-left group px-2 py-2 rounded-sm border border-[#d4c5a9]/40 hover:border-[#8b4513]/30 hover:bg-[#8b4513]/3 transition-colors"
                        >
                          <div className="flex justify-between items-center text-[10px] mb-1">
                            <span className="text-[#5d5048] group-hover:text-[#8b4513] transition-colors font-bold">
                              Ch.{c.id}
                            </span>
                            <span className="text-[#5d5048] font-sans text-right leading-tight">
                              <span className="block">
                                {c.chineseChars.toLocaleString()} {zhCountLabel} · {c.englishWords.toLocaleString()} {enCountLabel}
                              </span>
                              <span className="block">
                                {c.conversations} {lang === 'zh' ? '对话' : 'dlg'} · {c.worksMentioned} {lang === 'zh' ? '书目' : 'works'}
                              </span>
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            {c.hasDrinking && (
                              <span title={lang === 'zh' ? '酒令' : 'Drinking game'} className="inline-block text-[8px] px-1.5 py-0.5 rounded-sm bg-amber-100 text-amber-700 border border-amber-300 leading-tight font-bold font-sans">令</span>
                            )}
                            {c.hasWordGame && (
                              <span title={lang === 'zh' ? '文字游戏' : 'Word game'} className="inline-block text-[8px] px-1.5 py-0.5 rounded-sm bg-sky-100 text-sky-700 border border-sky-300 leading-tight font-bold font-sans">诗</span>
                            )}
                            {c.hasMature && (
                              <span title={lang === 'zh' ? '成人内容' : 'Mature content'} className="inline-block text-[8px] px-1.5 py-0.5 rounded-sm bg-rose-100 text-rose-700 border border-rose-300 leading-tight font-bold font-sans">艳</span>
                            )}
                          </div>
                          <div className="h-1 bg-black/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.round((c.chineseChars / maxChineseChars) * 100)}%` }}
                              className="h-full bg-[#8b4513] opacity-50 group-hover:opacity-70 transition-opacity"
                              title={lang === 'zh'
                                ? `第${c.id}回：${c.chineseChars.toLocaleString()} 中文字`
                                : `Chapter ${c.id}: ${c.chineseChars.toLocaleString()} Chinese characters`}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Gardens Section */}
          <div id="gardens" className="parchment p-4 sm:p-8 rounded-sm flex flex-col gap-5 border-double border-4 border-[#d4c5a9] scroll-mt-24">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-1 font-bold border-b border-[#d4c5a9] pb-2 flex items-center gap-2">
                <Leaf size={11} className="text-[#4d6a3a]" />
                {lang === 'zh' ? '园林与场所' : 'Gardens & Spaces'}
              </h2>
              <p className="text-[10px] text-[#5d5048] italic mt-2 mb-4 font-hans leading-relaxed">
                {lang === 'zh'
                  ? '小说中出现的13处命名园林与建筑空间'
                  : '13 named locations across the 60 chapters'}
              </p>

              {/* Major gardens */}
              <p className="text-[9px] uppercase tracking-widest text-[#5d5048] mb-2 font-bold">
                {lang === 'zh' ? '主要园林' : 'Major Gardens'}
              </p>
              <div className="flex flex-col gap-1.5 mb-4">
                {gardens.filter(g => g.type === 'major').map(g => (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGarden(g)}
                    className="text-left px-2.5 py-2 rounded-sm border border-[#d4c5a9]/60 hover:border-[#4d6a3a]/50 hover:bg-[#4d6a3a]/5 transition-all group flex items-center gap-2"
                  >
                    <Leaf size={10} className="text-[#4d6a3a]/50 group-hover:text-[#4d6a3a] shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[12px] font-hans font-bold text-[#2c2420] block leading-tight">
                        {lang === 'zh' ? g.name : g.nameEn}
                      </span>
                      <span className="text-[9px] text-[#5d5048] leading-tight">{lang === 'zh' ? g.location : g.locationEn}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Sub-locations */}
              <p className="text-[9px] uppercase tracking-widest text-[#5d5048] mb-2 font-bold">
                {lang === 'zh' ? '园中胜景' : 'Sub-Locations'}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {gardens.filter(g => g.type === 'sublocation').map(g => (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGarden(g)}
                    className="text-[10px] px-2 py-1 rounded-sm border border-[#d4c5a9]/60 hover:border-[#8b4513]/40 bg-white/20 hover:bg-[#8b4513]/5 text-[#5d5048] hover:text-[#8b4513] transition-all font-hans leading-tight"
                  >
                    {lang === 'zh' ? g.name : g.nameEn}
                  </button>
                ))}
              </div>

              {/* Other */}
              <p className="text-[9px] uppercase tracking-widest text-[#5d5048] mb-2 font-bold">
                {lang === 'zh' ? '其他场所' : 'Other Spaces'}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {gardens.filter(g => g.type === 'other').map(g => (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGarden(g)}
                    className="text-[10px] px-2 py-1 rounded-sm border border-[#d4c5a9]/60 hover:border-[#8b4513]/40 bg-white/20 hover:bg-[#8b4513]/5 text-[#5d5048] hover:text-[#8b4513] transition-all font-hans leading-tight"
                  >
                    {lang === 'zh' ? g.name : g.nameEn}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Lacunae Sidebar */}
          <div id="lacunae" className="parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[#d4c5a9] scroll-mt-24">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-4 font-bold border-b border-[#d4c5a9] pb-2">
              {lang === 'zh' ? '缺文' : 'Lacunae'}
            </h2>
            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-4 xl:grid-cols-5 gap-1.5">
              {lacunaChapterNumbers.map((chapterNumber) => (
                (() => {
                  const lacunaCount = lacunaCountByChapter[chapterNumber] ?? 0;
                  const isDisabled = lacunaCount === 0;
                  return (
                    <button
                      key={chapterNumber}
                      onClick={isDisabled ? undefined : () => setActiveLacunaChapter(chapterNumber)}
                      aria-disabled={isDisabled}
                      className={`text-center text-[10px] font-bold px-1.5 py-1.5 rounded-sm border transition-colors ${
                        isDisabled
                          ? 'border-[#d4c5a9]/25 bg-black/5 text-[#5d5048]/45 cursor-default'
                          : 'border-[#d4c5a9]/40 text-[#2c2420] hover:bg-amber-700/10 hover:border-amber-700/40 cursor-pointer'
                      }`}
                      title={isDisabled ? `Chapter ${chapterNumber} (no lacunae)` : `Chapter ${chapterNumber} (${lacunaCount} lacunae)`}
                    >
                      <span className="block leading-tight">{chapterNumber}</span>
                      <span className={`block text-[9px] font-sans leading-tight ${isDisabled ? 'text-[#5d5048]/40' : 'text-[#8b4513]'}`}>
                        {lacunaCount}
                      </span>
                    </button>
                  );
                })()
              ))}
            </div>
          </div>

          {/* Questions Sidebar */}
          <div id="questions" className="parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[#d4c5a9] scroll-mt-24">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-4 font-bold border-b border-[#d4c5a9] pb-2">
              {lang === 'zh' ? '问题' : 'Questions'}
            </h2>
            <div className="space-y-2">
              {questions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => setSelectedQuestion(q.id)}
                  className="w-full text-left p-3 rounded-sm border border-[#d4c5a9]/40 bg-black/5 hover:bg-amber-700/10 hover:border-amber-700/40 transition-colors cursor-pointer"
                >
                  <p className="text-[11px] font-bold text-[#2c2420] leading-relaxed">{lang === 'zh' ? q.questionZh : q.questionEn}</p>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex flex-col gap-4 md:gap-5 order-1 md:order-2 min-w-0">
          {/* Network Graph Section */}
          <div id="network" className="scroll-mt-24">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-6 font-bold border-b border-[#d4c5a9] pb-2">
              {lang === 'en' ? 'Character Relationship Network' : '人物关系网络图谱'}
            </h2>
            <p className="text-xs italic text-[#5d5048] mb-4">
              {t.subtitle}
            </p>
            <NetworkGraph
              characters={characters}
              relationships={relationships}
              lang={lang}
              onNodeClick={setSelectedCharacter}
              onFullscreenChange={setNetworkGraphFullscreen}
            />
          </div>

          {/* Search & Filters */}
          <div id="characters" className="parchment p-4 sm:p-6 rounded-sm flex flex-col gap-4 sm:gap-6 border-double border-4 border-[#d4c5a9] scroll-mt-24">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5d5048]" size={16} />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  className="w-full pl-10 pr-4 py-2 bg-white/30 border border-[#d4c5a9] rounded-sm focus:outline-none focus:border-[#8b4513]/50 transition-all text-sm italic font-hans"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2 items-center bg-white/20 p-1 rounded-sm border border-[#d4c5a9]">
                <button
                  onClick={() => setSortBy('mentions')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all ${
                    sortBy === 'mentions' ? 'bg-[#8b4513] text-[#f4ecd8]' : 'text-[#5d5048] hover:bg-black/5'
                  }`}
                >
                  <BarChart2 size={12} />
                  {t.mentionSort}
                </button>
                <button
                  onClick={() => setSortBy('appearance')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all ${
                    sortBy === 'appearance' ? 'bg-[#8b4513] text-[#f4ecd8]' : 'text-[#5d5048] hover:bg-black/5'
                  }`}
                >
                  <Clock size={12} />
                  {t.chronology}
                </button>
                <button
                  onClick={() => setSortBy('role')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all ${
                    sortBy === 'role' ? 'bg-[#8b4513] text-[#f4ecd8]' : 'text-[#5d5048] hover:bg-black/5'
                  }`}
                >
                  <SortAsc size={12} />
                  {t.roleSort}
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-2.5 w-full pb-1 border-t border-[#d4c5a9] pt-4">
              <button
                onClick={() => setSelectedRole(null)}
                className={`px-3.5 sm:px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all border whitespace-nowrap min-h-11 touch-manipulation ${
                  !selectedRole 
                    ? 'bg-[#2c2420] text-[#f4ecd8] border-[#2c2420]' 
                    : 'bg-white/10 text-[#5d5048] border-[#d4c5a9] hover:border-[#8b4513]/30 active:opacity-80'
                }`}
              >
                {t.allRecords}
              </button>
              {roles.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setSelectedRole(key)}
                  className={`px-3.5 sm:px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all border whitespace-nowrap font-hans min-h-11 touch-manipulation active:opacity-80 ${
                    selectedRole === key
                      ? (ROLE_CHIP_ACTIVE[key] ?? ROLE_CHIP_ACTIVE.Other)
                      : (ROLE_CHIP_IDLE[key] ?? ROLE_CHIP_IDLE.Other) + ' hover:opacity-75'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div 
            layout={!hasOpenOverlay}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredCharacters.map((char) => (
                <CharacterCard 
                  key={char.id} 
                  character={char} 
                  isActive={selectedCharacter?.id === char.id}
                  onClick={() => setSelectedCharacter(char)}
                  lang={lang}
                  lockMotion={hasOpenOverlay}
                  mentionCount={sortBy === 'mentions' ? mentionCountByCharacterId.get(char.id) : undefined}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCharacters.length === 0 && (
            <div className="parchment p-20 text-center rounded-sm border-double border-4 border-[#d4c5a9]">
              <Search size={40} className="mx-auto mb-4 text-[#5d5048]" />
              <p className="text-[#5d5048] italic font-hans">{t.noRecords}</p>
            </div>
          )}

        </section>

        {/* Right Sidebar - Chapters */}
        <aside className="order-3 md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5 h-fit lg:col-span-1 lg:self-start">
          <div id="chapters" className="parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[#d4c5a9] scroll-mt-24">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-6 font-bold border-b border-[#d4c5a9] pb-2">{t.chapters}</h2>
            <div className="mb-6 space-y-2 pb-4 border-b border-[#d4c5a9]">
              <p className="text-base font-bold font-hans text-[#2c2420]">品花宝鉴</p>
              <p className="text-[11px] font-hans text-[#5d5048]">作者：陈森</p>
              <p className="text-[11px] font-hans text-[#2c2420] leading-relaxed">
                {lang === 'en'
                  ? 'Pinhua Baojian (also known as Yiqing Yishi and Qunhua Baojian) is a 60-chapter novel by Chen Sen of the Qing dynasty, depicting the culture of male entertainers. A native of Changzhou, Chen Sen repeatedly failed the imperial examinations and gave up around age 40. While living in Beijing he frequently associated with performers, gathering material for the novel.'
                  : '《品花宝鉴》，亦作《怡情佚史》、《群花宝鉴》，清代陈森所著的一部描写狎优风气的长篇小说，共60回。陈森是常州人，科举常年不得意，40岁后放弃科举。他寓居北京时常与优伶交往，为日后的创作积累了素材。'}
              </p>
            </div>
            <div className="flex flex-col gap-1.5 mb-4 pb-4 border-b border-[#d4c5a9]">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#5d5048] font-bold mb-1">{lang === 'en' ? 'Download' : '下载'}</p>
              <button onClick={downloadChinese} className="text-left px-2 py-1.5 rounded-sm border border-[#d4c5a9] hover:bg-[#8b4513]/8 hover:border-[#8b4513]/40 transition-all text-[10px] text-[#5d5048] hover:text-[#8b4513]">
                {lang === 'en' ? '↓ Chinese text (.txt)' : '↓ 中文全文 (.txt)'}
              </button>
              <button onClick={downloadEnglish} className="text-left px-2 py-1.5 rounded-sm border border-[#d4c5a9] hover:bg-[#8b4513]/8 hover:border-[#8b4513]/40 transition-all text-[10px] text-[#5d5048] hover:text-[#8b4513]">
                {lang === 'en' ? '↓ English translation (.txt)' : '↓ 英文译文 (.txt)'}
              </button>
              <button onClick={downloadInterleaved} className="text-left px-2 py-1.5 rounded-sm border border-[#d4c5a9] hover:bg-[#8b4513]/8 hover:border-[#8b4513]/40 transition-all text-[10px] text-[#5d5048] hover:text-[#8b4513]">
                {lang === 'en' ? '↓ Bilingual interleaved (.txt)' : '↓ 中英对照 (.txt)'}
              </button>
              <button onClick={downloadJSON} className="text-left px-2 py-1.5 rounded-sm border border-[#d4c5a9] hover:bg-[#8b4513]/8 hover:border-[#8b4513]/40 transition-all text-[10px] text-[#5d5048] hover:text-[#8b4513]">
                {lang === 'en' ? '↓ Bilingual interleaved (.json)' : '↓ 中英对照 (.json)'}
              </button>
            </div>
            <div className="flex flex-col gap-1.5">
              <button
                onClick={() => setSelectedChapter({ id: -1, title: '目录', content: chapters.filter(c => c.id > 0).map(c => c.title).join('\n') })}
                className="text-left p-2 rounded-sm border border-[#8b4513]/40 hover:bg-[#8b4513]/10 hover:border-[#8b4513]/60 transition-all group flex items-center gap-2 mb-1"
              >
                <Book size={12} className="text-[#8b4513]/60 group-hover:text-[#8b4513] shrink-0" />
                <span className="text-[11px] font-hans font-bold text-[#8b4513] leading-tight">
                  {lang === 'en' ? 'Contents' : '目录'}
                </span>
              </button>
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => setSelectedChapter(chapter)}
                  className="text-left p-2 rounded-sm border border-[#d4c5a9]/30 hover:bg-[#8b4513]/5 hover:border-[#8b4513]/30 transition-all group flex items-center gap-2"
                >
                  <Book size={12} className="text-[#8b4513]/40 group-hover:text-[#8b4513] shrink-0" />
                  <span className="text-[11px] font-hans text-[#2c2420] leading-tight">
                    {lang === 'en'
                      ? chapter.id === 0
                        ? 'Preface'
                        : `Ch. ${chapter.id} — ${chapterTitleTranslations[chapter.id] || chapter.title}`
                      : chapter.title}
                  </span>
                </button>
              ))}
            </div>
            <a
              href="https://zh.wikisource.org/zh-hans/%E5%93%81%E8%8A%B1%E5%AF%B6%E9%91%92"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-[10px] text-[#8b4513]/70 hover:text-[#8b4513] transition-colors underline underline-offset-2"
            >
              {lang === 'en' ? 'Source: Wikisource' : '文本来源：维基文库'}
            </a>
          </div>

          {/* Works Cited */}
          <div id="works" className="parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[#d4c5a9] scroll-mt-24">
            <div className="flex items-baseline justify-between border-b border-[#d4c5a9] pb-2 mb-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] font-bold">
                {lang === 'zh' ? '引书与作品' : 'Works Cited'}
              </h2>
              <span className="text-[10px] text-[#8b4513] font-sans font-bold">{allWorksCited.length} {lang === 'zh' ? '部' : 'unique'}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {allWorksCited.map(([work, count]) => {
                const workKey = work.replace(/《|》/g, '');
                const hasDetailedDescription = worksData[workKey]?.descEn !== "A literary work, opera scene, or book cited in Pinhua Baojian.";
                return (
                  <button
                    key={work}
                    onClick={() => setSelectedWork(workKey)}
                    title={`${count} ${lang === 'zh' ? '回' : count === 1 ? 'chapter' : 'chapters'}`}
                    className={`px-2 py-0.5 text-[10px] rounded-sm font-hans cursor-pointer transition-colors ${
                      hasDetailedDescription
                        ? 'border-2 border-[#8b4513] bg-[#e8dcc4] text-[#8b4513] font-bold shadow-sm hover:bg-[#d4c5a9]'
                        : 'border border-[#d4c5a9] bg-[#f4ecd8]/80 text-[#2c2420] hover:bg-[#d4c5a9]/40'
                    }`}
                  >
                    {lang === 'en' && WORK_ENGLISH_BY_CHINESE[workKey] ? WORK_ENGLISH_BY_CHINESE[workKey] : work}
                    {count > 1 && (
                      <span className={`ml-1 text-[9px] font-sans ${hasDetailedDescription ? 'text-[#5d5048]' : 'text-[#8b4513]'}`}>×{count}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Locations */}
          <div id="locations" className="parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[#d4c5a9] scroll-mt-24">
            <div className="flex items-baseline justify-between border-b border-[#d4c5a9] pb-2 mb-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] font-bold flex items-center gap-2">
                <MapPin size={12} className="text-[#8b4513]" />
                {lang === 'zh' ? '地点索引' : 'Locations'}
              </h2>
              <span className="text-[10px] text-[#8b4513] font-sans font-bold">
                {locationsByType.reduce((sum, group) => sum + group.locations.length, 0)} {lang === 'zh' ? '处' : 'places'}
              </span>
            </div>
            <div className="space-y-5">
              {locationsByType.map((group) => (
                <div key={group.type}>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#5d5048] font-bold">
                      {lang === 'zh' ? group.label.zh : group.label.en}
                    </p>
                    <span className="text-[9px] text-[#8b4513] font-sans font-bold">{group.locations.length}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.locations.map((location) => (
                      <button
                        key={location.id}
                        onClick={() => setSelectedLocation(location)}
                        className="px-2.5 py-1.5 rounded-sm border border-[#d4c5a9]/50 bg-white/10 hover:bg-[#8b4513]/5 hover:border-[#8b4513]/30 transition-all group"
                        title={lang === 'zh' ? `${location.name}` : location.nameEn}
                      >
                        <p className="text-[11px] font-bold text-[#2c2420] font-hans leading-tight group-hover:text-[#8b4513] transition-colors whitespace-nowrap">
                          {lang === 'zh' ? location.name : location.nameEn}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>

      <footer className="max-w-[1800px] mx-auto px-2 sm:px-5 pb-8 text-center">
        <p className="text-xs text-[#5d5048]">
          Pinhua baojian Database 品花宝鉴数据库 is authored by TengChao Zhou in 2026 with the help of AI technologies.
        </p>
      </footer>

      {/* Floating Scroll Buttons */}
      <div className="hidden md:flex fixed bottom-6 right-6 flex-col gap-2 z-40">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 bg-[#8b4513] text-[#f4ecd8] rounded-full shadow-lg border-2 border-[#d4c5a9] hover:bg-[#2c2420] transition-colors"
          title="Scroll to Top"
        >
          <ChevronUp size={20} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
          className="p-3 bg-[#8b4513] text-[#f4ecd8] rounded-full shadow-lg border-2 border-[#d4c5a9] hover:bg-[#2c2420] transition-colors"
          title="Scroll to Bottom"
        >
          <ChevronDown size={20} />
        </motion.button>
      </div>

      {/* Mobile Navigation Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 z-50 flex items-end sm:items-center sm:justify-center sm:p-6"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-hidden
              className="absolute inset-0 z-0 bg-black/45 backdrop-blur-sm pointer-events-none"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              data-overlay-scroll="true"
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full sm:max-w-lg sm:max-h-[85vh] sm:rounded-sm max-h-[86vh] overflow-y-auto parchment rounded-t-sm sm:rounded-sm border-t-4 sm:border-4 border-x-4 border-double border-[#d4c5a9] shadow-2xl p-4 sm:p-5"
            >
              <div className="flex items-center justify-between gap-3 border-b border-[#d4c5a9] pb-3 mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#5d5048] font-bold">
                    {lang === 'zh' ? '快速前往' : 'Go To'}
                  </p>
                  <h2 className="text-lg font-bold text-[#2c2420]">
                    {lang === 'zh' ? '品花宝鉴数据库' : 'Pinhua Baojian'}
                  </h2>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="h-10 w-10 rounded-sm border border-[#d4c5a9] bg-white/20 text-[#2c2420] flex items-center justify-center hover:bg-black/5 transition-colors"
                    aria-label={lang === 'zh' ? '关闭菜单' : 'Close menu'}
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {mobileMenuSections.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="min-h-14 text-left rounded-sm border border-[#d4c5a9]/70 bg-white/15 hover:bg-[#8b4513]/8 hover:border-[#8b4513]/40 transition-all px-3 py-2 flex items-center gap-3"
                  >
                    <Icon size={17} className="text-[#8b4513] shrink-0" />
                    <span className="text-[12px] font-bold uppercase tracking-wide text-[#2c2420] leading-tight">{label}</span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <button
                  onClick={openContents}
                  className="min-h-12 rounded-sm bg-[#8b4513] text-[#f4ecd8] px-3 py-2 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider"
                >
                  <Book size={15} />
                  {lang === 'zh' ? '打开目录' : 'Open Contents'}
                </button>
                <button
                  onClick={() => {
                    const firstChapter = chapters.find((chapter) => chapter.id === 1);
                    if (firstChapter) setSelectedChapter(firstChapter);
                    setMobileMenuOpen(false);
                  }}
                  className="min-h-12 rounded-sm border border-[#8b4513]/50 text-[#8b4513] bg-[#8b4513]/5 px-3 py-2 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider"
                >
                  <BookOpen size={15} />
                  {lang === 'zh' ? '读第一回' : 'Read Ch. 1'}
                </button>
              </div>

              <div className="border-t border-[#d4c5a9] pt-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#5d5048] font-bold mb-2">
                  {lang === 'zh' ? '常用章节' : 'Common Chapters'}
                </p>
                <div className="grid grid-cols-6 gap-1.5">
                  {[0, 1, 10, 20, 30, 40, 50, 60].map((chapterId) => {
                    const chapter = chapters.find((item) => item.id === chapterId);
                    if (!chapter) return null;
                    return (
                      <button
                        key={chapter.id}
                        onClick={() => {
                          setSelectedChapter(chapter);
                          setMobileMenuOpen(false);
                        }}
                        className="h-10 rounded-sm border border-[#d4c5a9] bg-white/15 text-[10px] font-bold text-[#2c2420] hover:bg-[#8b4513]/8 hover:border-[#8b4513]/40 transition-colors"
                      >
                        {chapter.id === 0 ? (lang === 'zh' ? '序' : 'Pre') : chapter.id}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Chapter Reader Modal */}
      <AnimatePresence>
        {selectedChapter && (
          <ChapterReader 
            chapter={selectedChapter} 
            onClose={() => setSelectedChapter(null)} 
            lang={lang}
            onSelectCharacter={(character) => setSelectedCharacter(character)}
            onSelectLacuna={() => setActiveLacunaChapter(selectedChapter.id)}
          />
        )}
      </AnimatePresence>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCharacter && (
          <CharacterDetail
            character={selectedCharacter}
            onClose={() => setSelectedCharacter(null)}
            lang={lang}
            onSelectChapter={setSelectedChapter}
            elevated={networkGraphFullscreen}
          />
        )}
      </AnimatePresence>

      {/* Garden Detail Modal */}
      <AnimatePresence>
        {selectedGarden && (
          <GardenDetail
            garden={selectedGarden}
            onClose={() => setSelectedGarden(null)}
            lang={lang}
            onSelectChapter={setSelectedChapter}
            onSelectGarden={setSelectedGarden}
          />
        )}
      </AnimatePresence>

      {/* Work Modal */}
      <AnimatePresence>
        {selectedWork && (
          <WorkModal
            work={selectedWork}
            lang={lang}
            onClose={() => setSelectedWork(null)}
          />
        )}
      </AnimatePresence>

      {/* Location Detail Modal */}
      <AnimatePresence>
        {selectedLocation && (
          <LocationDetail
            location={selectedLocation}
            lang={lang}
            onClose={() => setSelectedLocation(null)}
          />
        )}
      </AnimatePresence>

      {/* Lacunae Modal */}
      <AnimatePresence>
        {activeLacunaChapter !== null && (
          <LacunaeModal
            chapterId={activeLacunaChapter}
            entries={lacunaeByChapter.get(activeLacunaChapter) ?? []}
            onClose={() => setActiveLacunaChapter(null)}
            lang={lang}
          />
        )}
      </AnimatePresence>

      {/* Questions Modal */}
      <AnimatePresence>
        {selectedQuestion !== null && (
          <QuestionsModal
            questionId={selectedQuestion}
            onClose={() => setSelectedQuestion(null)}
            lang={lang}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function LacunaeModal({
  chapterId,
  entries,
  onClose,
  lang,
}: {
  chapterId: number;
  entries: LacunaEntry[];
  onClose: () => void;
  lang: 'en' | 'zh';
}) {
  const t = {
    en: {
      lacunae: "Lacunae",
      noLacunae: "No lacunae annotations are available for this chapter yet.",
      inferred: "Inferred",
      certain: "Certain",
      probable: "Probable",
      speculative: "Speculative",
      chapter: "Chapter",
    },
    zh: {
      lacunae: "缺文档案",
      noLacunae: "此回暂无缺文勘误记录。",
      inferred: "推断字",
      certain: "确凿",
      probable: "合理",
      speculative: "存疑",
      chapter: "第",
    }
  }[lang];

  const confidenceTone: Record<LacunaConfidence, string> = {
    certain: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    probable: 'bg-amber-100 text-amber-800 border-amber-300',
    speculative: 'bg-violet-100 text-violet-800 border-violet-300',
  };
  const confidenceLabel: Record<LacunaConfidence, { en: string; zh: string }> = {
    certain: { en: 'Certain', zh: '确证' },
    probable: { en: 'Probable', zh: '可能' },
    speculative: { en: 'Speculative', zh: '推测' },
  };

  const renderSnippet = (snippet: string, symbol: LacunaEntry['symbol']) => {
    const idx = snippet.indexOf(symbol);
    if (idx === -1) return snippet;
    return (
      <>
        {snippet.slice(0, idx)}
        <mark className="bg-amber-300/70 text-[#2c2420] px-1 rounded-sm">{symbol}</mark>
        {snippet.slice(idx + symbol.length)}
      </>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-hidden
        className="absolute inset-0 z-0 bg-black/55 backdrop-blur-sm pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-hidden parchment rounded-sm border-4 border-double border-[#d4c5a9] shadow-2xl flex flex-col"
      >
        <div className="p-4 sm:p-5 border-b border-[#d4c5a9] bg-[#f4ecd8] flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#5d5048]">{lang === 'zh' ? '缺文' : 'Lacunae'}</p>
            <h3 className="text-lg font-bold text-[#2c2420]">{lang === 'zh' ? `第 ${chapterId} 回` : `Chapter ${chapterId}`}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 transition-colors text-[#2c2420]"
            aria-label="Close lacunae modal"
          >
            <X size={20} />
          </button>
        </div>

        <div data-overlay-scroll="true" className="p-5 sm:p-6 overflow-y-auto space-y-4">
          {entries.length === 0 ? (
            <div className="border border-[#d4c5a9] rounded-sm p-5 bg-black/5">
              <p className="text-[12px] text-[#5d5048] italic">
                {lang === 'zh' ? '此回暂无缺文勘误记录。' : 'No lacunae annotations are available for this chapter yet.'}
              </p>
            </div>
          ) : (
            entries.map((entry, idx) => (
              <div key={`${entry.chapterId}-${idx}`} className="border border-[#d4c5a9] rounded-sm p-4 bg-black/5 space-y-3">
                <p className="text-[14px] font-hans text-[#2c2420] leading-relaxed">
                  {renderSnippet(entry.snippet, entry.symbol)}
                </p>

                {entry.confidence === 'certain' && (
                  <>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-widest text-[#5d5048] font-bold">{lang === 'zh' ? '推断字' : 'Inferred'}</span>
                        <span className="text-3xl leading-none font-serif text-[#2c2420]">{entry.inferredCharacter}</span>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest border rounded-sm px-2 py-1 ${confidenceTone[entry.confidence]}`}>
                        {lang === 'zh' ? confidenceLabel[entry.confidence].zh : confidenceLabel[entry.confidence].en}
                      </span>
                    </div>

                    <p className="text-[11px] leading-relaxed text-[#4a3f38] font-sans">
                      {entry.note}
                    </p>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
}

function QuestionsModal({
  questionId,
  onClose,
  lang,
}: {
  questionId: number;
  onClose: () => void;
  lang: 'en' | 'zh';
}) {
  const question = questions.find((q) => q.id === questionId);
  if (!question) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-hidden
        className="absolute inset-0 z-0 bg-black/55 backdrop-blur-sm pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-hidden parchment rounded-sm border-4 border-double border-[#d4c5a9] shadow-2xl flex flex-col"
      >
        <div className="p-4 sm:p-5 border-b border-[#d4c5a9] bg-[#f4ecd8] flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#5d5048]">
              {lang === 'zh' ? '问题' : 'Question'}
            </p>
            <h3 className="text-lg font-bold text-[#2c2420]">{lang === 'zh' ? question.questionZh : question.questionEn}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 transition-colors text-[#2c2420]"
            aria-label="Close questions modal"
          >
            <X size={20} />
          </button>
        </div>

        <div data-overlay-scroll="true" className="p-5 sm:p-6 overflow-y-auto space-y-4">
          <div className="border border-[#d4c5a9] rounded-sm p-5 sm:p-6 bg-black/5">
            <QuestionAnswer content={lang === 'zh' ? question.answerZh : question.answerEn} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function WorkModal({
  work,
  lang,
  onClose,
}: {
  work: string;
  lang: 'en' | 'zh';
  onClose: () => void;
}) {
  const data = worksData[work];

  const workTokenRegex = useMemo(() => {
    // We can just construct a RegExp from a literal instead of string concatenation inside the app
    // Actually, simple RegExp constructor works better
    return new RegExp(`(${work})`, 'g');
  }, [work]);

  const workMentions = useMemo(() => {
    if (!data?.chapters) return [];
    return data.chapters.map((chapterId) => {
      const chapter = chapters.find((item) => item.id === chapterId);
      if (!chapter) return { chapterId, snippets: [] as string[] };

      const positions: Array<{ start: number; end: number }> = [];
      let pos = 0;
      while ((pos = chapter.content.indexOf(work, pos)) !== -1) {
        positions.push({ start: pos, end: pos + work.length });
        pos += work.length;
      }

      if (positions.length === 0) return { chapterId, snippets: [] as string[] };

      const snippets: string[] = [];
      let clusterStart = positions[0].start;
      let clusterEnd = positions[0].end;
      for (let i = 1; i < positions.length; i++) {
        const current = positions[i];
        if (current.start - clusterEnd <= 120) {
          clusterEnd = Math.max(clusterEnd, current.end);
        } else {
          snippets.push(
            chapter.content.slice(Math.max(0, clusterStart - 60), Math.min(chapter.content.length, clusterEnd + 60))
          );
          clusterStart = current.start;
          clusterEnd = current.end;
        }
      }
      snippets.push(
        chapter.content.slice(Math.max(0, clusterStart - 60), Math.min(chapter.content.length, clusterEnd + 60))
      );

      return { chapterId, snippets };
    });
  }, [data?.chapters, work]);

  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-hidden
        className="absolute inset-0 z-0 bg-[#2c2420]/80 backdrop-blur-sm pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-2xl max-h-[85vh] bg-[#f4ecd8] rounded-sm shadow-2xl border-4 border-double border-[#8b4513] flex flex-col overflow-hidden parchment"
      >
        <div className="flex-none p-4 sm:p-6 border-b border-[#d4c5a9]">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#2c2420] font-hans">
                {lang === 'zh' ? `《${work}》` : (WORK_ENGLISH_BY_CHINESE[work] || work)}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-[#8b4513]/60 hover:text-[#8b4513] hover:bg-[#d4c5a9]/20 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div data-overlay-scroll="true" className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar" id="workmodal-scroll-area">
          <div className="space-y-6">
            <section>
              <h3 className="text-sm font-bold text-[#8b4513] uppercase tracking-wider mb-2 font-sans flex items-center gap-2">
                <Book className="w-4 h-4" />
                {lang === 'zh' ? '简介' : 'Description'}
              </h3>
              <p className="text-sm sm:text-base text-[#2c2420]/90 leading-relaxed font-hans whitespace-pre-wrap">
                {lang === 'zh' ? data.descZh : data.descEn}
              </p>
            </section>

            {data.chapters && data.chapters.length > 0 && (
              <section>
                <h3 className="text-sm font-bold text-[#8b4513] uppercase tracking-wider mb-2 font-sans flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  {lang === 'zh' ? '出现章节' : 'Appears in Chapters'}
                </h3>
                <div>
                  <div className="flex flex-wrap gap-1.5">
                    {data.chapters.map(ch => (
                      <span key={ch} className="px-2 py-0.5 text-[10px] rounded-sm border border-[#d4c5a9] bg-[#f4ecd8]/50 text-[#5d5048] font-sans">
                        {lang === 'zh' ? `第${ch}回` : `Chapter ${ch}`}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {workMentions.length > 0 && (
              <section>
                <div className="border border-[#d4c5a9] rounded-sm p-3 bg-black/5 space-y-3">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#5d5048]">
                    {lang === 'zh' ? '章节提及与上下文' : 'Mentions with Context'}
                  </p>
                  <div className="space-y-3">
                    {workMentions.map(({ chapterId, snippets }) => (
                      <div key={chapterId} className="border border-[#d4c5a9]/70 rounded-sm p-2 bg-[#f4ecd8]/60">
                        <p className="text-[10px] font-bold text-[#8b4513] mb-1">
                          {lang === 'zh' ? `第 ${chapterId} 回` : `Chapter ${chapterId}`} ({snippets.length})
                        </p>
                        {snippets.length === 0 ? (
                          <p className="text-[11px] text-[#5d5048] italic">
                            {lang === 'zh' ? '无上下文摘录。' : 'No surrounding snippet found.'}
                          </p>
                        ) : (
                          <div className="space-y-1.5">
                            {snippets.map((snippet, idx) => (
                              <p key={`${chapterId}-${idx}`} className="text-[11px] leading-relaxed font-hans text-[#2c2420]">
                                …{(workTokenRegex ? snippet.split(workTokenRegex) : [snippet]).map((part, partIdx) => {
                                  const isMatch = part === work;
                                  return isMatch ? (
                                    <mark
                                      key={`${chapterId}-${idx}-${partIdx}`}
                                      className="bg-amber-300/70 text-[#2c2420] px-0.5 rounded-sm"
                                    >
                                      {part}
                                    </mark>
                                  ) : (
                                    <span key={`${chapterId}-${idx}-${partIdx}`}>{part}</span>
                                  );
                                })}…
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function LocationDetail({
  location,
  lang,
  onClose,
}: {
  location: NovelLocationWithChapters;
  lang: 'en' | 'zh';
  onClose: () => void;
}) {
  const typeLabel = locationTypeLabels[location.type];
  const chapterList = location.chapterIds.join(', ');
  const tokenList = location.searchTokens.join(' / ');
  const locationTokenRegex = useMemo(() => {
    const escaped = [...location.searchTokens]
      .sort((a, b) => b.length - a.length)
      .map((token) => token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    return escaped.length > 0 ? new RegExp(`(${escaped.join('|')})`, 'g') : null;
  }, [location.searchTokens]);
  const locationMentions = useMemo(() => {
    return location.chapterIds.map((chapterId) => {
      const chapter = chapters.find((item) => item.id === chapterId);
      if (!chapter) return { chapterId, snippets: [] as string[] };

      const positions: Array<{ start: number; end: number }> = [];
      for (const token of location.searchTokens) {
        let pos = 0;
        while ((pos = chapter.content.indexOf(token, pos)) !== -1) {
          positions.push({ start: pos, end: pos + token.length });
          pos += token.length;
        }
      }
      positions.sort((a, b) => a.start - b.start);
      if (positions.length === 0) return { chapterId, snippets: [] as string[] };

      const snippets: string[] = [];
      let clusterStart = positions[0].start;
      let clusterEnd = positions[0].end;
      for (let i = 1; i < positions.length; i++) {
        const current = positions[i];
        if (current.start - clusterEnd <= 120) {
          clusterEnd = Math.max(clusterEnd, current.end);
        } else {
          snippets.push(
            chapter.content.slice(Math.max(0, clusterStart - 60), Math.min(chapter.content.length, clusterEnd + 60))
          );
          clusterStart = current.start;
          clusterEnd = current.end;
        }
      }
      snippets.push(
        chapter.content.slice(Math.max(0, clusterStart - 60), Math.min(chapter.content.length, clusterEnd + 60))
      );

      return { chapterId, snippets };
    });
  }, [location.chapterIds, location.searchTokens]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-hidden
        className="absolute inset-0 z-0 bg-black/55 backdrop-blur-sm pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-xl max-h-[88vh] overflow-hidden parchment rounded-sm border-4 border-double border-[#d4c5a9] shadow-2xl flex flex-col"
      >
        <div className="p-4 sm:p-5 border-b border-[#d4c5a9] bg-[#f4ecd8] flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#5d5048]">
              {lang === 'zh' ? '地点档案' : 'Location Profile'}
            </p>
            <h3 className="text-lg font-bold text-[#2c2420] font-hans">{location.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 transition-colors text-[#2c2420]"
            aria-label="Close location modal"
          >
            <X size={20} />
          </button>
        </div>

        <div data-overlay-scroll="true" className="p-5 sm:p-6 overflow-y-auto space-y-4 text-[#2c2420]">
          <div className="border border-[#d4c5a9] rounded-sm p-3 bg-black/5">
            <p className="text-[10px] uppercase tracking-widest font-bold text-[#5d5048] mb-1">
              {lang === 'zh' ? '英文名' : 'English Name'}
            </p>
            <p className="text-sm font-sans">{location.nameEn}</p>
          </div>

          <div className="border border-[#d4c5a9] rounded-sm p-3 bg-black/5">
            <p className="text-[10px] uppercase tracking-widest font-bold text-[#5d5048] mb-1">
              {lang === 'zh' ? '类型' : 'Type'}
            </p>
            <p className="text-sm font-hans">
              {lang === 'zh' ? typeLabel.zh : typeLabel.en}
            </p>
          </div>

          <div className="border border-[#d4c5a9] rounded-sm p-3 bg-black/5">
            <p className="text-[10px] uppercase tracking-widest font-bold text-[#5d5048] mb-1">
              {lang === 'zh' ? '检索词' : 'Search Tokens'}
            </p>
            <p className="text-sm font-hans break-words">{tokenList}</p>
          </div>

          <div className="border border-[#d4c5a9] rounded-sm p-3 bg-black/5">
            <div className="flex items-center justify-between gap-2 mb-1">
              <p className="text-[10px] uppercase tracking-widest font-bold text-[#5d5048]">
                {lang === 'zh' ? '出现回目' : 'Chapter Appearances'}
              </p>
              <span className="text-[10px] font-bold text-[#8b4513]">{location.chapterIds.length}</span>
            </div>
            <p className="text-sm font-sans">{chapterList}</p>
          </div>

          <div className="border border-[#d4c5a9] rounded-sm p-3 bg-black/5 space-y-3">
            <p className="text-[10px] uppercase tracking-widest font-bold text-[#5d5048]">
              {lang === 'zh' ? '章节提及与上下文' : 'Mentions with Context'}
            </p>
            <div className="space-y-3">
              {locationMentions.map(({ chapterId, snippets }) => (
                <div key={chapterId} className="border border-[#d4c5a9]/70 rounded-sm p-2 bg-[#f4ecd8]/60">
                  <p className="text-[10px] font-bold text-[#8b4513] mb-1">
                    {lang === 'zh' ? `第 ${chapterId} 回` : `Chapter ${chapterId}`} ({snippets.length})
                  </p>
                  {snippets.length === 0 ? (
                    <p className="text-[11px] text-[#5d5048] italic">
                      {lang === 'zh' ? '无上下文摘录。' : 'No surrounding snippet found.'}
                    </p>
                  ) : (
                    <div className="space-y-1.5">
                      {snippets.map((snippet, idx) => (
                        <p key={`${chapterId}-${idx}`} className="text-[11px] leading-relaxed font-hans text-[#2c2420]">
                          …{(locationTokenRegex ? snippet.split(locationTokenRegex) : [snippet]).map((part, partIdx) => {
                            const isMatch = location.searchTokens.includes(part);
                            return isMatch ? (
                              <mark
                                key={`${chapterId}-${idx}-${partIdx}`}
                                className="bg-amber-300/70 text-[#2c2420] px-0.5 rounded-sm"
                              >
                                {part}
                              </mark>
                            ) : (
                              <span key={`${chapterId}-${idx}-${partIdx}`}>{part}</span>
                            );
                          })}…
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ChapterReader({
  chapter,
  onClose,
  lang,
  onSelectCharacter,
  onSelectLacuna,
}: {
  chapter: Chapter;
  onClose: () => void;
  lang: 'en' | 'zh';
  onSelectCharacter: (character: Character) => void;
  onSelectLacuna: () => void;
}) {
  const [chapterSearchInput, setChapterSearchInput] = useState('');
  const [chapterSearchQuery, setChapterSearchQuery] = useState('');
  const [chapterSearchMatchIndex, setChapterSearchMatchIndex] = useState(0);
  const chapterSearchMatchCounter = useRef(0);
  const chapterWorkAnchorIdsRef = useRef<Map<string, string>>(new Map());

  const runChapterSearch = () => {
    setChapterSearchQuery(chapterSearchInput.trim());
    setChapterSearchMatchIndex(0);
  };

  const clearChapterSearch = () => {
    setChapterSearchInput('');
    setChapterSearchQuery('');
    setChapterSearchMatchIndex(0);
  };

  const chapterSummary = useMemo(
    () => chapterSummaries[chapter.id] ?? null,
    [chapter.id]
  );

  const chapterMentionedCharacters = useMemo(
    () => (chapter.id > 0 ? getChapterMentionedCharacters(chapter.content) : []),
    [chapter.id, chapter.content]
  );

  const chapterCitedWorks = useMemo(() => {
    if (chapter.id < 0) return [];
    const matches = chapter.content.match(/《[^》\n]{1,40}》/g) ?? [];
    const unique = Array.from(new Set(matches.map((m) => m.trim())));
    return unique.map((zhTagged) => {
      const key = zhTagged.replace(/《|》/g, '');
      return {
        key,
        zh: zhTagged,
        en: WORK_ENGLISH_BY_CHINESE[key] ?? zhTagged,
      };
    });
  }, [chapter.id, chapter.content]);

  const scrollToChapterWork = (workKey: string) => {
    const id = chapterWorkAnchorIdsRef.current.get(workKey);
    document.getElementById(id ?? '')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const tokenMap = useMemo<[string, Character][]>(() => {
    const entries: [string, Character][] = [];
    for (const char of characters) {
      // Chinese tokens: full name + given-name shortform + aliases
      const chineseName = char.name.split(' ')[0];
      const shortForms = getChineseShortFormTokens(char);
      const surname = chineseName[0];
      const compositeTokens = shortForms
        .filter((sf) => !sf.startsWith(surname))
        .map((sf) => surname + sf);
      const candidates = [chineseName, ...shortForms, ...compositeTokens];
      const zhTokens = [...new Set(candidates)]
        .filter((t) => t.length >= 2 && !GENERIC_HONORIFICS.has(t));
      for (const t of zhTokens) entries.push([t, char]);

      // English tokens: full de-accented pinyin plus longer individual name parts.
      const pinyinPart = char.name.slice(chineseName.length).trim();
      if (pinyinPart) {
        const plain = stripDiacritics(pinyinPart);
        const allParts = plain.split(/\s+/).filter(Boolean);
        const parts = allParts.filter((p) => p.length >= 4);
        const enTokens = new Set<string>();
        if (allParts.length >= 2) enTokens.add(allParts.join(' '));
        for (const p of parts) enTokens.add(p);
        for (const alias of getEnglishAliasTokens(char)) enTokens.add(alias);
        for (const t of enTokens) entries.push([t, char]);
      }
    }
    entries.sort((a, b) => b[0].length - a[0].length);
    return entries;
  }, []);

  const chapterSearchMatchCount = useMemo(() => {
    const query = chapterSearchQuery.trim();
    if (!query) return 0;

    let total = 0;
    const addRendered = (text: string, showBilingual = false) => {
      total += countSearchMatchesInRenderedText(text, query, tokenMap, showBilingual);
    };
    const addPlain = (text: string) => {
      total += countTextSearchMatches(text, query);
    };

    if (chapterSummary) {
      addRendered(chapterSummary.en);
      addRendered(chapterSummary.zh);
    }

    if (chapter.id === -1) {
      for (const line of chapter.content.split('\n')) addPlain(line);
      return total;
    }

    if (translationMap[chapter.id]) {
      const paragraphs = chapter.content.split('\n\n');
      const translations = translationMap[chapter.id];
      for (let i = 0; i < paragraphs.length; i++) {
        addRendered(paragraphs[i]);
        if (translations[i]) addRendered(translations[i]);
      }
      return total;
    }

    addRendered(chapter.content);
    return total;
  }, [chapter.id, chapter.content, chapterSummary, chapterSearchQuery, tokenMap]);

  useEffect(() => {
    clearChapterSearch();
  }, [chapter.id]);

  useEffect(() => {
    if (chapterSearchMatchCount === 0) return;
    if (chapterSearchMatchIndex >= chapterSearchMatchCount) {
      setChapterSearchMatchIndex(Math.max(0, chapterSearchMatchCount - 1));
    }
  }, [chapterSearchMatchCount, chapterSearchMatchIndex]);

  useEffect(() => {
    if (!chapterSearchQuery.trim() || chapterSearchMatchCount === 0) return;
    const el = document.getElementById(`chapter-search-${chapterSearchMatchIndex}`);
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [chapterSearchMatchIndex, chapterSearchMatchCount, chapterSearchQuery, chapter.id]);

  const goToAdjacentSearchMatch = (direction: 1 | -1) => {
    if (chapterSearchMatchCount === 0) return;
    setChapterSearchMatchIndex(
      (prev) => (prev + direction + chapterSearchMatchCount) % chapterSearchMatchCount
    );
  };

  const renderAnnotated = (text: string, showBilingual = false) => {
    if (!text) return null;

    const highlightPlain = (plain: string) =>
      renderTextWithSearchHighlight(
        plain,
        chapterSearchQuery,
        chapterSearchMatchIndex,
        chapterSearchMatchCounter
      );

    return segmentText(text, tokenMap).map((seg, i) => {
      if (typeof seg === 'string') {
        const parts = seg.split(CHAPTER_ANNOTATION_TOKEN_SPLIT_REGEX);
        if (parts.length === 1) return highlightPlain(seg);

        return parts.map((part, j) => {
          if (!part) return null;

          if (part === '▉' || part === '□') {
            return (
              <button
                key={`${i}-${j}`}
                onClick={onSelectLacuna}
                className="inline-flex items-center rounded-sm border px-1 py-[1px] mx-[1px] align-baseline cursor-pointer transition-all hover:brightness-95 bg-amber-200/70 text-[#2c2420] border-amber-400/50"
                title={lang === 'zh' ? '查看缺文档案' : 'View Lacunae'}
              >
                {part}
              </button>
            );
          }

          if (isWorkAnnotationToken(part)) {
            const displayText = /^\*(?!\s)[^*]+(?<!\s)\*$/.test(part)
              ? part.slice(1, -1)
              : part;
            const workKey = workKeyFromAnnotationToken(part);
            let anchorId: string | undefined;
            if (workKey && !chapterWorkAnchorIdsRef.current.has(workKey)) {
              anchorId = chapterWorkAnchorId(chapter.id, workKey);
              chapterWorkAnchorIdsRef.current.set(workKey, anchorId);
            }
            return (
              <span
                key={`${i}-${j}`}
                id={anchorId}
                className={`glowing-work${isChineseWorkAnnotationToken(part) ? '' : ' italic'}`}
              >
                {highlightPlain(displayText)}
              </span>
            );
          }

          return (
            <span key={`${i}-${j}`}>
              {highlightPlain(part)}
            </span>
          );
        });
      }

      const roleChipClass = ROLE_CHIP_IDLE[seg.char.role] ?? ROLE_CHIP_IDLE.Other;
      const chipLabel = getSegmentChipLabel(seg, showBilingual);
      return (
        <button
          key={i}
          onClick={() => onSelectCharacter(seg.char)}
          className={`inline-flex items-center rounded-sm border px-1 py-[1px] mx-[1px] align-baseline cursor-pointer transition-all hover:brightness-95 ${roleChipClass}`}
        >
          {highlightPlain(chipLabel)}
        </button>
      );
    });
  };

  chapterSearchMatchCounter.current = 0;
  chapterWorkAnchorIdsRef.current = new Map();

  return (
    <div
      className="fixed inset-0 z-50 flex items-stretch justify-stretch p-0 sm:items-center sm:justify-center sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-hidden
        className="absolute inset-0 z-0 bg-black/60 backdrop-blur-sm pointer-events-none"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-none h-[100dvh] max-h-[100dvh] sm:max-w-5xl md:max-w-6xl sm:h-[90dvh] sm:max-h-[90dvh] parchment rounded-none sm:rounded-sm overflow-hidden shadow-2xl border-0 sm:border-4 border-double border-[#d4c5a9] flex flex-col"
      >
        <div className="p-4 sm:p-6 border-b border-[#d4c5a9] bg-[#f4ecd8] space-y-3 shrink-0">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <Book className="text-[#8b4513] shrink-0" size={20} />
              <h2 className="text-lg sm:text-xl font-bold text-[#2c2420] font-hans line-clamp-1">
                {chapter.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-black/5 rounded-full transition-colors text-[#2c2420] shrink-0"
              aria-label={lang === 'zh' ? '关闭' : 'Close'}
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={chapterSearchInput}
              onChange={(e) => setChapterSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  runChapterSearch();
                }
                if (e.key === 'Escape') {
                  clearChapterSearch();
                }
              }}
              placeholder={lang === 'zh' ? '搜索本章…' : 'Search in chapter…'}
              className="flex-1 min-w-0 px-3 py-1.5 text-sm bg-[#faf6ee] border border-[#d4c5a9] rounded-sm text-[#2c2420] placeholder:text-[#5d5048]/70 focus:outline-none focus:ring-1 focus:ring-[#8b4513]/40 font-hans"
              aria-label={lang === 'zh' ? '搜索本章' : 'Search in chapter'}
            />
            <button
              type="button"
              onClick={runChapterSearch}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-sm border border-[#8b4513]/40 bg-[#8b4513]/10 text-[#8b4513] hover:bg-[#8b4513]/20 transition-colors shrink-0 text-[11px] font-bold uppercase tracking-wider"
              aria-label={lang === 'zh' ? '搜索' : 'Search'}
            >
              <Search size={14} />
              <span className="hidden sm:inline font-sans">{lang === 'zh' ? '搜索' : 'Search'}</span>
            </button>
            {chapterSearchQuery.trim() && (
              <div className="flex items-center gap-1 shrink-0">
                <span className="text-[10px] tabular-nums text-[#5d5048] font-sans min-w-[2.5rem] text-center">
                  {chapterSearchMatchCount > 0
                    ? `${chapterSearchMatchIndex + 1}/${chapterSearchMatchCount}`
                    : lang === 'zh'
                      ? '无'
                      : '0'}
                </span>
                <button
                  type="button"
                  onClick={() => goToAdjacentSearchMatch(-1)}
                  disabled={chapterSearchMatchCount === 0}
                  className="p-1.5 rounded-sm border border-[#d4c5a9] text-[#5d5048] hover:bg-black/5 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  aria-label={lang === 'zh' ? '上一处' : 'Previous match'}
                >
                  <ChevronUp size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => goToAdjacentSearchMatch(1)}
                  disabled={chapterSearchMatchCount === 0}
                  className="p-1.5 rounded-sm border border-[#d4c5a9] text-[#5d5048] hover:bg-black/5 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  aria-label={lang === 'zh' ? '下一处' : 'Next match'}
                >
                  <ChevronDown size={14} />
                </button>
              </div>
            )}
          </div>
        </div>

        <div data-overlay-scroll="true" className="flex-1 min-h-0 overflow-y-auto px-5 py-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] sm:p-12 font-serif text-[#2c2420] leading-loose selection:bg-[#8b4513]/20 scrollbar-thin">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center mb-12">
              <div className="w-16 h-1 bg-[#8b4513]/20 mx-auto mb-6" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-hans">{chapter.title}</h3>
              {chapter.id > 0 && chapterTitleTranslations[chapter.id] && (
                <p className="text-sm sm:text-base text-[#4a3f38] max-w-3xl mx-auto leading-relaxed font-sans">
                  {chapterTitleTranslations[chapter.id]}
                </p>
              )}
              <div className="text-[10px] uppercase tracking-[0.5em] text-[#5d5048] opacity-60">
                Pinhua baojian Database 品花宝鉴数据库
              </div>
            </div>
            {chapterSummary && (
              <div className="mb-8 border border-[#d4c5a9] bg-black/5 p-4 rounded-sm space-y-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#5d5048] font-bold">
                  {lang === 'en' ? 'Chapter Summary' : '章节提要'}
                </p>
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-[#2c2420]">{lang === 'zh' ? '英文' : 'English'}</p>
                  <p className="text-sm sm:text-base text-[#4a3f38] leading-relaxed font-sans whitespace-pre-line">
                    {renderAnnotated(chapterSummary.en)}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-[#2c2420]">{lang === 'zh' ? '中文' : 'Chinese'}</p>
                  <p className="text-[12px] text-[#2c2420] font-hans leading-relaxed whitespace-pre-line">
                    {renderAnnotated(chapterSummary.zh)}
                  </p>
                </div>
              </div>
            )}
            {chapter.id > 0 && chapterMentionedCharacters.length > 0 && (
              <div className="mb-8 border border-[#d4c5a9] bg-black/5 p-4 rounded-sm">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#5d5048] font-bold mb-3">
                  {lang === 'en' ? 'Characters Mentioned In This Chapter' : '本回出现人物'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {chapterMentionedCharacters.map((character) => (
                    <button
                      key={character.id}
                      onClick={() => onSelectCharacter(character)}
                      className={`px-2 py-1 text-[11px] rounded-sm border transition-colors font-hans hover:brightness-95 ${
                        ROLE_CHIP_IDLE[character.role] ?? ROLE_CHIP_IDLE.Other
                      }`}
                    >
                      {character.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {chapter.id === -1 ? (
              <div className="space-y-5">
                {chapter.content.split('\n').map((line, i) => (
                  <div key={i} className="border-b border-[#d4c5a9]/50 pb-4">
                    <p className="text-base font-hans text-[#2c2420] leading-snug">
                      {renderTextWithSearchHighlight(
                        line,
                        chapterSearchQuery,
                        chapterSearchMatchIndex,
                        chapterSearchMatchCounter
                      )}
                    </p>
                    {chapterTitleTranslations[i + 1] != null && chapterTitleTranslations[i + 1] !== '' && (
                      <p className="text-[12px] italic text-[#5d5048] mt-1 leading-snug">{chapterTitleTranslations[i + 1]}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : translationMap[chapter.id] ? (
              <div className="space-y-8 pl-7 sm:pl-0">
                {chapter.content.split('\n\n').map((para, i) => (
                  <div
                    key={i}
                    className="relative border-b border-[#d4c5a9]/40 pb-6 last:border-0 sm:pl-0"
                  >
                    <span
                      className="absolute left-0 sm:-left-10 md:-left-12 top-0 w-6 sm:w-8 text-[10px] tabular-nums text-[#5d5048]/55 text-right leading-relaxed select-none font-sans"
                      aria-hidden
                      title={lang === 'zh' ? `第 ${i + 1} 段` : `Paragraph ${i + 1}`}
                    >
                      {i + 1}
                    </span>
                    <p className="text-base font-hans text-[#2c2420] leading-relaxed">{renderAnnotated(para)}</p>
                    {translationMap[chapter.id][i] && (
                      <p className="text-sm sm:text-base text-[#4a3f38] mt-3 leading-7 font-sans whitespace-pre-line">
                        {renderAnnotated(translationMap[chapter.id][i])}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="whitespace-pre-wrap text-base sm:text-lg italic font-hans first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                {renderAnnotated(chapter.content)}
              </div>
            )}
            {chapter.id >= 0 && chapterCitedWorks.length > 0 && (
              <div className="mt-10 border border-[#d4c5a9] bg-black/5 p-4 rounded-sm">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#5d5048] font-bold mb-3">
                  {lang === 'en' ? 'Cited Books / Works' : '本回引书与作品'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {chapterCitedWorks.map((work) => {
                    const englishTitle = WORK_ENGLISH_BY_CHINESE[work.key];
                    return (
                      <button
                        key={work.zh}
                        type="button"
                        onClick={() => scrollToChapterWork(work.key)}
                        title={lang === 'zh' ? '跳至文中引用处' : 'Jump to mention in chapter'}
                        className="flex flex-col items-start gap-0.5 px-2.5 py-1.5 text-left rounded-sm border border-[#d4c5a9] bg-[#f4ecd8]/80 text-[#2c2420] cursor-pointer transition-colors hover:bg-[#d4c5a9]/50 hover:border-[#8b4513]/40"
                      >
                        <span className="text-[11px] font-hans leading-tight">{work.zh}</span>
                        {englishTitle && (
                          <span className="text-[10px] font-sans italic leading-tight text-[#5d5048]">
                            {englishTitle}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="pt-12 text-center text-[#5d5048] italic text-sm opacity-60">
              {lang === 'en' ? '--- End of Chapter ---' : '--- 本回完 ---'}
            </div>
          </div>
        </div>

        <div className="bg-[#d4c5a9]/20 p-4 text-[#5d5048] text-[10px] font-bold uppercase tracking-[0.5em] text-center border-t border-[#d4c5a9] font-hans shrink-0">
          Pinhua baojian Database 品花宝鉴数据库
        </div>
      </motion.div>
    </div>
  );
}

function CharacterCard({ character, isActive, onClick, lang, lockMotion = false, mentionCount }: { character: Character; isActive: boolean; onClick: () => void; lang: 'en' | 'zh'; lockMotion?: boolean; mentionCount?: number; key?: string }) {
  const tintClass = ROLE_TINTS[character.role] || ROLE_TINTS.Other;
  const textClass = ROLE_TEXT_COLORS[character.role] || ROLE_TEXT_COLORS.Other;
  const accentColor = ROLE_ACCENTS[character.role] || ROLE_ACCENTS.Other;

  return (
    <motion.div
      layout={!lockMotion}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={lockMotion ? undefined : { y: -4 }}
      onClick={onClick}
      className={`parchment p-5 sm:p-8 rounded-sm cursor-pointer transition-all relative flex flex-col justify-between h-full group border-l-4 ${tintClass} ${
        isActive ? `ring-2 ring-[#8b4513]/40` : 'hover:border-[#8b4513]/30'
      }`}
      style={{ borderLeftColor: accentColor }}
    >
      <span className="absolute top-4 right-4 text-[9px] sm:text-[10px] font-serif italic opacity-40">
        {character.chapter}
      </span>
      
      <div className="mb-4">
        <div className="text-xl sm:text-2xl font-bold text-[#2c2420] group-hover:text-[#8b4513] transition-colors leading-tight">
          {character.name}
        </div>
        {character.alias !== '—' && (
          <div className="text-[11px] sm:text-[12px] italic text-[#5d5048] mt-1 font-hans">
            {character.alias}
          </div>
        )}
      </div>

      <div>
        <div className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] mb-4 font-hans ${textClass}`}>
          {lang === 'zh' ? character.roleZh : character.role}
        </div>
        <p className={`leading-relaxed text-[#2c2420] line-clamp-3 mb-2 ${lang === 'zh' ? 'text-[12px] sm:text-[13px] font-hans' : 'text-xs sm:text-sm italic'}`}>
          {lang === 'en' ? character.description : character.descriptionZh}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3 border-t border-[#d4c5a9] pt-4">
        <span className="text-[9px] sm:text-[10px] text-[#5d5048] uppercase tracking-widest font-bold font-hans">
          {lang === 'zh' ? character.originZh : character.origin}
        </span>
        <span className="text-[9px] sm:text-[10px] text-[#5d5048] uppercase tracking-widest font-hans">
          {lang === 'en' ? 'Age' : '年龄'}: {character.age}
        </span>
        {mentionCount !== undefined && (
          <span className="text-[9px] sm:text-[10px] text-[#8b4513] uppercase tracking-widest font-bold font-hans">
            {lang === 'en' ? `${mentionCount} mentions` : `${mentionCount} 次提及`}
          </span>
        )}
      </div>
    </motion.div>
  );
}

const GENERIC_HONORIFICS = new Set(['夫人', '公子', '先生', '老爷', '太太', '小姐', '姑娘', '奶奶', '大人', '将军', '夫君']);

function getCharacterMentionTokens(character: Character): string[] {
  const chineseName = character.name.split(' ')[0];
  const givenName = chineseName.length > 2 ? chineseName.slice(-2) : '';
  const aliases = character.alias !== '—'
    ? character.alias.split(/[/\s，、]+/).filter(Boolean)
    : [];
  return [...new Set([chineseName, givenName, ...aliases])].filter(t => t.length >= 2 && !GENERIC_HONORIFICS.has(t));
}

function countMentionsInText(text: string, tokens: string[]): number {
  return tokens.reduce((sum, token) => {
    let n = 0, pos = 0;
    while ((pos = text.indexOf(token, pos)) !== -1) { n++; pos++; }
    return sum + n;
  }, 0);
}

function getCharacterTotalMentions(character: Character): number {
  const tokens = getCharacterMentionTokens(character);
  return chapters
    .filter(ch => ch.id >= 1)
    .reduce((total, ch) => total + countMentionsInText(ch.content, tokens), 0);
}

function CharacterDetail({ character, onClose, lang, onSelectChapter, elevated = false }: { character: Character; onClose: () => void; lang: 'en' | 'zh'; onSelectChapter: (chapter: (typeof chapters)[0]) => void; elevated?: boolean }) {
  const Icon = ROLE_ICONS[character.role] || Info;
  const tintClass = ROLE_TINTS[character.role] || ROLE_TINTS.Other;
  const textClass = ROLE_TEXT_COLORS[character.role] || ROLE_TEXT_COLORS.Other;
  const accentColor = ROLE_ACCENTS[character.role] || ROLE_ACCENTS.Other;

  const t = {
    en: {
      alias: "Alias",
      chapterAbbr: "Ch.",
      mentions: (count: number) => `mention${count !== 1 ? 's' : ''}`,
      readChapter: "Read Chapter",
      origin: "Origin",
      firstEntry: "First Entry",
      historicalRecord: "Historical Record",
      dossier: "Dossier",
      archives: "Imperial Archives",
      appearances: "Chapter Appearances",
      mentionedIn: (n: number) => `Mentioned in ${n} of 60 chapters`,
    },
    zh: {
      alias: "别名",
      chapterAbbr: "第",
      mentions: (count: number) => `次提及`,
      readChapter: "阅读全回",
      origin: "籍贯",
      firstEntry: "首次登场",
      historicalRecord: "历史记录",
      dossier: "档案",
      archives: "皇家档案馆",
      appearances: "章回出现",
      mentionedIn: (n: number) => `出现于60回中的${n}回`,
    }
  }[lang];

  const mentionData = useMemo(() => {
    const tokens = getCharacterMentionTokens(character);
    return chapters
      .filter(ch => ch.id >= 1)
      .map(ch => ({ ch: ch.id, count: countMentionsInText(ch.content, tokens) }));
  }, [character]);

  const mentionedChapters = mentionData.filter(d => d.count > 0);
  const maxCount = Math.max(...mentionData.map(d => d.count), 1);

  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  const activeScenes = useMemo(() => {
    if (activeChapter === null) return null;

    const ch = chapters.find(c => c.id === activeChapter);
    if (!ch) return null;

    const chineseName = character.name.split(' ')[0];
    const givenName = chineseName.length > 2 ? chineseName.slice(-2) : '';
    const aliases = character.alias !== '—' ? character.alias.split(/[/\s，、]+/).filter(Boolean) : [];
    const tokens = [...new Set([chineseName, givenName, ...aliases])].filter(t => t.length >= 2 && !GENERIC_HONORIFICS.has(t));

    const positions: number[] = [];
    for (const token of tokens) {
      let pos = 0;
      while ((pos = ch.content.indexOf(token, pos)) !== -1) { positions.push(pos); pos++; }
    }
    positions.sort((a, b) => a - b);

    const snippets: string[] = [];
    let clusterStart = -1, clusterEnd = -1;
    for (const pos of positions) {
      if (clusterStart === -1) { clusterStart = pos; clusterEnd = pos; }
      else if (pos - clusterEnd < 200) { clusterEnd = pos; }
      else {
        snippets.push(ch.content.slice(Math.max(0, clusterStart - 80), Math.min(ch.content.length, clusterEnd + 80)));
        clusterStart = pos; clusterEnd = pos;
      }
    }
    if (clusterStart !== -1) {
      snippets.push(ch.content.slice(Math.max(0, clusterStart - 80), Math.min(ch.content.length, clusterEnd + 80)));
    }

    const trimmedSnippets = snippets.slice(0, 8);
    const sceneBullets = getCharacterSceneBullets(character.id, activeChapter);

    return { sceneBullets, snippets: trimmedSnippets, tokens };
  }, [activeChapter, character]);

  const displaySceneBullets = useMemo(() => {
    if (!activeScenes) return [];
    const seen = new Set<string>();
    const line = lang === 'zh' ? (b: SceneBullet) => b.zh : (b: SceneBullet) => b.en;
    return activeScenes.sceneBullets.filter((b) => {
      const k = line(b);
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }, [activeScenes, lang]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center p-4 ${elevated ? 'z-[110]' : 'z-50'}`}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-hidden
        className="absolute inset-0 z-0 bg-black/40 backdrop-blur-sm pointer-events-none"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className={`relative z-10 w-[95%] sm:w-full max-w-2xl md:max-w-3xl h-[90vh] sm:h-auto sm:max-h-[92vh] parchment rounded-sm overflow-hidden shadow-2xl border-4 border-double border-[#d4c5a9] my-4 sm:my-0 flex flex-col`}
      >
        <div className="relative shrink-0 px-4 sm:px-6 pt-4 sm:pt-5 pb-3 border-b border-[#d4c5a9]/50 bg-[#f4ecd8]">
          <code
            className="text-[9px] font-mono text-[#5d5048]/35 select-all"
            title={lang === 'zh' ? '内部人物键' : 'Internal character key'}
          >
            {character.id}
          </code>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 hover:bg-black/5 rounded-full transition-colors text-[#2c2420]"
          >
            <X size={20} />
          </button>
        </div>

        <div data-overlay-scroll="true" className="flex-1 overflow-y-auto p-6 sm:p-10 md:p-16">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-8 sm:mb-10 border-b-2 border-[#d4c5a9] pb-6 sm:pb-8">
            <div className={`p-3 sm:p-4 rounded-sm border-2 border-double ${tintClass} ${textClass}`}>
              <Icon size={24} className="sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className={`text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.3em] ${textClass} mb-1 sm:mb-2 font-hans`}>
                {lang === 'zh' ? character.roleZh : character.role} {t.dossier}
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#2c2420] leading-tight">{character.name}</h2>
              {character.alias !== '—' && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {character.alias.split(/\s*\/\s*/).map((a, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 bg-black/5 text-[#5d5048] italic font-hans rounded-sm border border-[#d4c5a9]">{a.trim()}</span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
            <div className="space-y-1.5">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#5d5048] font-hans">{t.alias}</p>
              {character.alias === '—' ? (
                <p className="text-sm sm:text-base italic text-[#2c2420] font-hans">—</p>
              ) : (
                <div className="flex flex-wrap gap-1">
                  {character.alias.split(/\s*\/\s*/).map((a, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 bg-black/5 text-[#5d5048] italic font-hans rounded-sm border border-[#d4c5a9]">{a.trim()}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="space-y-1">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#5d5048] font-hans">{t.origin}</p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-[#2c2420] font-hans">
                <MapPin size={14} className="sm:w-4 sm:h-4" style={{ color: accentColor }} />
                <span>{lang === 'zh' ? character.originZh : character.origin}</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#5d5048] font-hans">{t.firstEntry}</p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-[#2c2420] font-hans">
                <BookOpen size={14} className="sm:w-4 sm:h-4 shrink-0" style={{ color: accentColor }} />
                <span>{character.chapter}</span>
              </div>
            </div>
          </div>


<div className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#5d5048] font-hans">{t.historicalRecord}</p>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-black/5 p-4 sm:p-6 rounded-sm border border-[#d4c5a9]">
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#8b4513] mb-1 sm:mb-2 font-hans opacity-60">{lang === 'zh' ? '英文记录' : 'English Record'}</p>
                  <p className="leading-relaxed text-[#2c2420] text-sm sm:text-base italic">
                    {character.description}
                  </p>
                </div>
                <div className="bg-black/5 p-4 sm:p-6 rounded-sm border border-[#d4c5a9]">
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#8b4513] mb-1 sm:mb-2 font-hans opacity-60">{lang === 'zh' ? '中文记录' : 'Chinese Record'}</p>
                  <p className="leading-relaxed text-[#2c2420] text-base sm:text-lg font-hans">
                    {character.descriptionZh}
                  </p>
                </div>
              </div>
            </div>

            {/* Chapter Appearances Timeline */}
            <div className="space-y-2 sm:space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#5d5048] font-hans">{t.appearances}</p>
                <p className="text-[9px] sm:text-[10px] text-[#8b7355] font-hans">{t.mentionedIn(mentionedChapters.length)}</p>
              </div>
              <div className="bg-black/5 p-4 rounded-sm border border-[#d4c5a9]">
                <ResponsiveContainer width="100%" height={90}>
                  <BarChart data={mentionData} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
                    <XAxis
                      dataKey="ch"
                      tick={{ fill: '#8b7355', fontSize: 9 }}
                      tickLine={false}
                      axisLine={{ stroke: '#d4c5a9' }}
                      interval={9}
                    />
                    <YAxis hide domain={[0, maxCount]} />
                    <Tooltip
                      cursor={{ fill: 'rgba(0,0,0,0.04)' }}
                      content={({ active, payload }) => {
                        if (!active || !payload?.length) return null;
                        const { ch, count } = payload[0].payload as { ch: number; count: number };
                        if (count === 0) return null;
                        const summary = chapterSummaries[ch];
                        return (
                          <div className="bg-[#f4ecd8] border border-[#d4c5a9] p-2 text-[#2c2420] text-[10px] max-w-[220px] shadow-md">
                            <p className="font-bold mb-1">{t.chapterAbbr}{lang === 'zh' ? ` ${ch} 回` : ch} — {count} {t.mentions(count)}</p>
                            {summary && <p className="text-[#5d5048] leading-snug italic">{(lang === 'zh' ? summary.zh : summary.en).slice(0, 120)}…</p>}
                          </div>
                        );
                      }}
                    />
                    <Bar dataKey="count" maxBarSize={12}>
                      {mentionData.map(({ ch, count }) => (
                        <Cell
                          key={`cell-${ch}`}
                          fill={count > 0 ? '#8b4513' : '#e8dcc8'}
                          opacity={count > 0 ? 0.4 + 0.6 * (count / maxCount) : 1}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>

                {/* Chapter pills */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#d4c5a9]">
                  {mentionedChapters.map(({ ch, count }) => (
                    <button
                      key={ch}
                      onClick={() => setActiveChapter(activeChapter === ch ? null : ch)}
                      title={`${t.chapterAbbr}${lang === 'zh' ? ` ${ch} 回` : ch}: ${count} ${t.mentions(count)}`}
                      className={`px-2 py-0.5 text-[10px] font-bold border transition-colors rounded-sm font-hans ${
                        activeChapter === ch
                          ? 'bg-[#8b4513] text-[#f4ecd8] border-[#8b4513]'
                          : 'border-[#8b4513]/40 text-[#8b4513] hover:bg-[#8b4513]/10'
                      }`}
                    >
                      {t.chapterAbbr}{lang === 'zh' ? ` ${ch} 回` : ch}
                    </button>
                  ))}
                </div>

                {/* Inline chapter analysis panel */}
                <AnimatePresence>
                  {activeChapter !== null && activeScenes && (
                    <motion.div
                      key={activeChapter}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="mt-3 border border-[#8b4513]/30 rounded-sm overflow-hidden"
                    >
                      {/* Panel header */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[#8b4513]/8 border-b border-[#8b4513]/20">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#8b4513] font-hans">
                            {t.chapterAbbr}{lang === 'zh' ? ` ${activeChapter} 回` : activeChapter}
                          </span>
                          <span className="text-[10px] text-[#5d5048] ml-2 font-hans">
                            {chapters.find(c => c.id === activeChapter)?.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[9px] text-[#8b7355] font-hans">
                            {mentionData.find(d => d.ch === activeChapter)?.count ?? 0} {t.mentions(mentionData.find(d => d.ch === activeChapter)?.count ?? 0)}
                          </span>
                          <button
                            onClick={() => setActiveChapter(null)}
                            className="text-[#8b7355] hover:text-[#2c2420] transition-colors"
                          >
                            <X size={13} />
                          </button>
                        </div>
                      </div>

                      {/* Panel body: Scene Summary always before Text Excerpts */}
                      <div className="px-4 py-3 space-y-2.5 bg-[#faf6ee]">
                        {displaySceneBullets.length > 0 && (
                          <>
                            <p className="text-[9px] uppercase tracking-[0.2em] text-[#8b4513]/70 font-bold font-hans mb-1">
                              {lang === 'zh' ? '场景摘要' : 'Scene Summary'}
                            </p>
                            {displaySceneBullets.map((scene, i) => (
                              <div key={i} className="flex gap-2.5">
                                <span className="text-[#8b4513]/50 mt-0.5 shrink-0">◆</span>
                                <p className="text-[11px] sm:text-xs leading-relaxed text-[#2c2420]">{lang === 'zh' ? scene.zh : scene.en}</p>
                              </div>
                            ))}
                          </>
                        )}
                        {activeScenes.snippets.length > 0 && (
                          <>
                            {displaySceneBullets.length > 0 && (
                              <div className="border-t border-[#d4c5a9] my-2 pt-2">
                                <p className="text-[9px] uppercase tracking-[0.2em] text-[#8b4513]/70 font-bold font-hans mb-1">
                                  {lang === 'zh' ? '原文节选' : 'Text Excerpts'}
                                </p>
                              </div>
                            )}
                            {activeScenes.snippets.map((snippet, i) => {
                              const regex = new RegExp(`(${activeScenes.tokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
                              const parts = snippet.split(regex);
                              return (
                                <div key={i} className="bg-black/5 rounded-sm px-3 py-2 border-l-2 border-[#8b4513]/30">
                                  <p className="text-[11px] leading-relaxed text-[#2c2420] font-hans">
                                    …{parts.map((part, j) =>
                                      activeScenes.tokens.includes(part)
                                        ? <mark key={j} style={{ backgroundColor: accentColor + '33', color: accentColor }} className="rounded-sm px-0.5 not-italic font-bold">{part}</mark>
                                        : part
                                    )}…
                                  </p>
                                </div>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#d4c5a9]/20 p-4 text-[#5d5048] text-[10px] font-bold uppercase tracking-[0.5em] text-center border-t border-[#d4c5a9] font-hans shrink-0">
          Pinhua baojian Database 品花宝鉴数据库
        </div>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// GardenDetail — full-screen profile modal for a named garden / space
// ─────────────────────────────────────────────────────────────────────────────
function GardenDetail({
  garden,
  onClose,
  lang,
  onSelectChapter,
  onSelectGarden,
}: {
  garden: Garden;
  onClose: () => void;
  lang: 'en' | 'zh';
  onSelectChapter: (ch: Chapter) => void;
  onSelectGarden: (g: Garden) => void;
}) {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  const mentionData = useMemo(() => {
    const tokens = garden.searchTokens;
    return chapters
      .filter(ch => ch.id >= 1)
      .map(ch => {
        const count = tokens.reduce((sum, token) => {
          let n = 0, pos = 0;
          while ((pos = ch.content.indexOf(token, pos)) !== -1) { n++; pos++; }
          return sum + n;
        }, 0);
        return { ch: ch.id, count };
      });
  }, [garden]);

  const mentionedChapters = mentionData.filter(d => d.count > 0);
  const maxCount = Math.max(...mentionData.map(d => d.count), 1);

  const activeSnippets = useMemo(() => {
    if (activeChapter === null) return null;
    const ch = chapters.find(c => c.id === activeChapter);
    if (!ch) return null;
    const tokens = garden.searchTokens;
    const positions: number[] = [];
    for (const token of tokens) {
      let pos = 0;
      while ((pos = ch.content.indexOf(token, pos)) !== -1) { positions.push(pos); pos++; }
    }
    positions.sort((a, b) => a - b);
    const snippets: string[] = [];
    let clusterStart = -1, clusterEnd = -1;
    for (const pos of positions) {
      if (clusterStart === -1) { clusterStart = pos; clusterEnd = pos; }
      else if (pos - clusterEnd < 200) { clusterEnd = pos; }
      else {
        snippets.push(ch.content.slice(Math.max(0, clusterStart - 80), Math.min(ch.content.length, clusterEnd + 80)));
        clusterStart = pos; clusterEnd = pos;
      }
    }
    if (clusterStart !== -1) {
      snippets.push(ch.content.slice(Math.max(0, clusterStart - 80), Math.min(ch.content.length, clusterEnd + 80)));
    }
    return { snippets: snippets.slice(0, 8), tokens };
  }, [garden, activeChapter]);

  const typeBadge = {
    major:       lang === 'zh' ? '主要园林' : 'Major Garden',
    sublocation: lang === 'zh' ? '园中胜景' : 'Sub-Location',
    other:       lang === 'zh' ? '其他场所' : 'Other Space',
  }[garden.type];

  const t = {
    en: {
      chapterAbbr: "Ch.",
      mentions: (count: number) => `mention${count !== 1 ? 's' : ''}`,
      readChapter: "Read Chapter",
    },
    zh: {
      chapterAbbr: "第",
      mentions: (count: number) => `次提及`,
      readChapter: "阅读全回",
    }
  }[lang];

  const parent = garden.parentId ? getGardenById(garden.parentId) : null;
  const children = (garden.subLocationIds ?? [])
    .map(id => getGardenById(id))
    .filter((g): g is NonNullable<typeof g> => g !== undefined);
  const accentColor = garden.accentColor;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-hidden
        className="absolute inset-0 z-0 bg-black/40 backdrop-blur-sm pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-[95%] sm:w-full max-w-2xl h-[90vh] sm:h-auto sm:max-h-[92vh] parchment rounded-sm overflow-hidden shadow-2xl border-4 border-double border-[#d4c5a9] my-4 sm:my-0 flex flex-col"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 hover:bg-black/5 rounded-full transition-colors z-10 text-[#2c2420]"
        >
          <X size={20} />
        </button>

        <div data-overlay-scroll="true" className="flex-1 overflow-y-auto p-6 sm:p-10 md:p-16 flex flex-col gap-8">
          {/* Header */}
          <div className="flex items-start gap-4 pr-10">
            <div
              className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0 border"
              style={{ backgroundColor: accentColor + '18', borderColor: accentColor + '40' }}
            >
              <Leaf size={22} style={{ color: accentColor }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span
                  className="text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm border"
                  style={{ color: accentColor, borderColor: accentColor + '40', backgroundColor: accentColor + '12' }}
                >
                  {typeBadge}
                </span>
                {parent && (
                  <button
                    onClick={() => onSelectGarden(parent)}
                    className="text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm border border-[#d4c5a9] text-[#5d5048] hover:text-[#8b4513] hover:border-[#8b4513]/40 transition-colors"
                  >
                    ↑ {lang === 'zh' ? parent.name : parent.nameEn}
                  </button>
                )}
              </div>
              <h2 className="text-3xl font-bold text-[#2c2420] font-hans leading-tight">
                {lang === 'zh' ? garden.name : garden.nameEn}
              </h2>
              <p className="text-sm text-[#5d5048] mt-0.5 italic">
                {lang === 'zh' ? `${garden.pinyin} · ${garden.nameEn}` : garden.pinyin}
              </p>
            </div>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-3 text-[11px]">
            <div className="bg-black/3 border border-[#d4c5a9]/60 rounded-sm p-3">
              <p className="text-[9px] uppercase tracking-widest text-[#5d5048] mb-1 font-bold">
                {lang === 'zh' ? '园主 / 相关人物' : 'Owner / Associated'}
              </p>
              <p className="font-hans text-[#2c2420] font-semibold">
                {lang === 'zh' ? garden.owner : garden.ownerEn}
              </p>
            </div>
            <div className="bg-black/3 border border-[#d4c5a9]/60 rounded-sm p-3">
              <p className="text-[9px] uppercase tracking-widest text-[#5d5048] mb-1 font-bold">
                {lang === 'zh' ? '位置' : 'Location'}
              </p>
              <p className="font-hans text-[#2c2420] font-semibold">
                {lang === 'zh' ? garden.location : garden.locationEn}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-3">
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#5d5048] border-b border-[#d4c5a9] pb-2">
              {lang === 'zh' ? '园林志 · 英文' : 'Garden Record · English'}
            </p>
            <p className="text-[12px] leading-relaxed text-[#2c2420]">{garden.description}</p>
            {lang === 'zh' && (
              <>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#5d5048] border-b border-[#d4c5a9] pb-2 mt-2">
                  园林志 · 中文
                </p>
                <p className="text-[12px] leading-relaxed text-[#2c2420] font-hans">{garden.descriptionZh}</p>
              </>
            )}
          </div>

          {/* Sub-locations */}
          {children.length > 0 && (
            <div>
              <p className="text-[9px] font-bold uppercase tracking-widest text-[#5d5048] border-b border-[#d4c5a9] pb-2 mb-3">
                {lang === 'zh' ? '园中胜景' : 'Notable Sub-Locations'}
              </p>
              <div className="flex flex-wrap gap-2">
                {children.map(child => (
                  <button
                    key={child.id}
                    onClick={() => onSelectGarden(child)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-[#d4c5a9]/60 hover:border-[#8b4513]/40 hover:bg-[#8b4513]/5 text-[#2c2420] hover:text-[#8b4513] transition-all text-[11px] font-hans"
                  >
                    <Home size={10} className="shrink-0" />
                    {lang === 'zh' ? child.name : child.nameEn}
                    <span className="text-[9px] text-[#5d5048]">· {child.pinyin}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chapter Appearances */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#5d5048] border-b border-[#d4c5a9] pb-2 mb-3 flex items-center gap-2">
              <BookOpen size={10} />
              {lang === 'zh'
                ? `章回出现 · 共${mentionedChapters.length}回`
                : `Chapter Appearances · ${mentionedChapters.length} of 60 chapters`}
            </p>

            <div className="flex items-end gap-[2px] h-10 mb-4">
              {mentionData.map(d => (
                <div
                  key={d.ch}
                  className="flex-1 rounded-t-sm transition-all cursor-pointer hover:opacity-80"
                  style={{
                    height: d.count > 0 ? `${Math.max(15, (d.count / maxCount) * 100)}%` : '2px',
                    backgroundColor: d.count > 0
                      ? (activeChapter === d.ch ? accentColor : accentColor + '70')
                      : '#d4c5a960',
                  }}
                  title={`${t.chapterAbbr}${lang === 'zh' ? ` ${d.ch} 回` : d.ch}: ${d.count} ${t.mentions(d.count)}`}
                  onClick={() => {
                    if (d.count > 0) setActiveChapter(prev => prev === d.ch ? null : d.ch);
                  }}
                />
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {mentionedChapters.map(d => (
                <button
                  key={d.ch}
                  onClick={() => setActiveChapter(prev => prev === d.ch ? null : d.ch)}
                  className={`text-[10px] px-2.5 py-1 rounded-sm border font-bold transition-all ${
                    activeChapter === d.ch
                      ? 'text-[#f4ecd8] border-transparent'
                      : 'border-[#d4c5a9] text-[#5d5048] hover:border-[#8b4513]/40 hover:text-[#8b4513]'
                  }`}
                  style={activeChapter === d.ch ? { backgroundColor: accentColor, borderColor: accentColor } : {}}
                >
                  {t.chapterAbbr}{lang === 'zh' ? ` ${d.ch} 回` : d.ch}
                </button>
              ))}
            </div>

            <AnimatePresence>
              {activeChapter !== null && activeSnippets && (
                <motion.div
                  key={activeChapter}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="mt-4 border border-[#d4c5a9] rounded-sm overflow-hidden"
                >
                  <div className="flex items-center justify-between px-4 py-2.5 bg-black/3 border-b border-[#d4c5a9]">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest font-hans" style={{ color: accentColor }}>
                        {t.chapterAbbr}{lang === 'zh' ? ` ${activeChapter} 回` : activeChapter}
                      </span>
                      <span className="text-[10px] text-[#5d5048] ml-2 font-hans">
                        {chapters.find(c => c.id === activeChapter)?.title}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          const ch = chapters.find(c => c.id === activeChapter);
                          if (ch) onSelectChapter(ch);
                        }}
                        className="text-[9px] px-2 py-1 rounded-sm border text-[#5d5048] border-[#d4c5a9] hover:bg-[#8b4513]/10 hover:text-[#8b4513] transition-colors uppercase tracking-widest font-bold"
                      >
                        {t.readChapter}
                      </button>
                      <button onClick={() => setActiveChapter(null)} className="text-[#5d5048] hover:text-[#2c2420]">
                        <X size={12} />
                      </button>
                    </div>
                  </div>
                  <div data-overlay-scroll="true" className="p-4 space-y-3 max-h-80 overflow-y-auto">
                    {activeSnippets.snippets.length === 0 ? (
                      <p className="text-[11px] italic text-[#5d5048] font-hans">
                        {lang === 'zh' ? '无文本摘录。' : 'No text excerpts found.'}
                      </p>
                    ) : (
                      activeSnippets.snippets.map((snippet, i) => {
                        const parts = snippet.split(
                          new RegExp(`(${activeSnippets.tokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')
                        );
                        return (
                          <div key={i} className="bg-black/5 rounded-sm px-3 py-2 border-l-2" style={{ borderColor: accentColor + '50' }}>
                            <p className="text-[11px] leading-relaxed text-[#2c2420] font-hans">
                              …{parts.map((part, j) =>
                                activeSnippets.tokens.includes(part)
                                  ? <mark key={j} style={{ backgroundColor: accentColor + '33', color: accentColor }} className="rounded-sm px-0.5 not-italic font-bold">{part}</mark>
                                  : part
                              )}…
                            </p>
                          </div>
                        );
                      })
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-[#d4c5a9]/20 p-4 text-[#5d5048] text-[10px] font-bold uppercase tracking-[0.5em] text-center border-t border-[#d4c5a9] font-hans shrink-0">
          Pinhua baojian Database 品花宝鉴数据库
        </div>
      </motion.div>
    </div>
  );
}
