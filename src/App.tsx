import { useState, useMemo } from 'react';
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
  Filter,
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
  Clock,
  ChevronUp,
  ChevronDown,
  Book,
  Leaf,
  Home,
  Menu,
} from 'lucide-react';
import { characters, relationships, identityLinksById } from './data';
import { chapters } from './chapters';
import { gardens, getGardenById, type Garden } from './gardens';
import { prefaceTranslations } from './prefaceTranslation';
import { chapter1Translations } from './chapter1Translation';
import { chapter2Translations } from './chapter2Translation';
import { chapterTranslations3to60 } from './chapterTranslations3to60';
import { chapterTranslations33to36 } from './chapterTranslations33to36';
import { chapterTranslations37to38 } from './chapterTranslations37to38';
import { chapterTranslations39to40 } from './chapterTranslations39to40';
import { chapterTranslations41to42 } from './chapterTranslations41to42';
import { chapterTranslations43to44 } from './chapterTranslations43to44';
import { chapterTranslations45 } from './chapterTranslations45';
import { chapterTranslations46 } from './chapterTranslations46';
import { chapterTranslations47 } from './chapterTranslations47';
import { chapterTranslations48 } from './chapterTranslations48';
import { chapterTranslations49 } from './chapterTranslations49';
import { chapterTranslations50 } from './chapterTranslations50';
import { chapterTranslations51 } from './chapterTranslations51';
import { chapterTranslations52 } from './chapterTranslations52';
import { chapterTranslations53 } from './chapterTranslations53';
import { chapterTranslations54 } from './chapterTranslations54';
import { chapterTranslations55 } from './chapterTranslations55';
import { chapterTranslations56 } from './chapterTranslations56';
import { chapterTranslations57 } from './chapterTranslations57';
import { chapterTranslations58 } from './chapterTranslations58';
import { chapterTranslations59 } from './chapterTranslations59';
import { chapterTranslations60 } from './chapterTranslations60';
import { chapterSummaries } from './chapterSummaries';
import { characterAppearances } from './characterAppearances';
import { chapterLacunae } from './lacunae';

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

const translationMap: Record<number, string[]> = {
  0: prefaceTranslations,
  1: chapter1Translations,
  2: chapter2Translations,
  ...chapterTranslations3to60,
  ...chapterTranslations33to36,
  ...chapterTranslations37to38,
  ...chapterTranslations39to40,
  ...chapterTranslations41to42,
  ...chapterTranslations43to44,
  ...chapterTranslations45,
  ...chapterTranslations46,
  ...chapterTranslations47,
  ...chapterTranslations48,
  ...chapterTranslations49,
  ...chapterTranslations50,
  ...chapterTranslations51,
  ...chapterTranslations52,
  ...chapterTranslations53,
  ...chapterTranslations54,
  ...chapterTranslations55,
  ...chapterTranslations56,
  ...chapterTranslations57,
  ...chapterTranslations58,
  ...chapterTranslations59,
  ...chapterTranslations60,
};
import { Character, Chapter } from './types';
import NetworkGraph from './components/NetworkGraph';

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

type Segment = string | { token: string; char: Character };
type LacunaConfidence = 'certain' | 'probable' | 'speculative';

type LacunaEntry = {
  chapterId: number;
  snippet: string;
  symbol: '□' | '▉';
  inferredCharacter: string;
  confidence: LacunaConfidence;
  note: string;
};

// Tokens that are also common Chinese nouns — require context confirmation before
// being rendered as a name chip. Add any token here that causes false positives.
const CONTEXT_SENSITIVE_TOKENS = new Set(['菊花']);

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
        segments.push({ token, char });
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

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedGarden, setSelectedGarden] = useState<Garden | null>(null);
  const [sortBy, setSortBy] = useState<'role' | 'appearance'>('appearance');
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const [activeLacunaChapter, setActiveLacunaChapter] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      title: "Pinhua baojian Database 品花宝鉴数据库",
      subtitle: `Exploring ${characters.length} characters from the classic Chinese novel`,
      hometown: "Hometown",
      ageDist: "Age Distribution",
      roleDist: "Role Distribution",
      searchPlaceholder: "Search the archives...",
      chronology: "Chronology",
      roleSort: "By Role",
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
      title: "Pinhua baojian Database 品花宝鉴数据库",
      subtitle: `探索中国古典小说中的${characters.length}位人物`,
      hometown: "籍贯",
      ageDist: "年龄分布",
      roleDist: "角色分布",
      searchPlaceholder: "搜索档案...",
      chronology: "出场顺序",
      roleSort: "按角色",
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
      readChapter: "阅读回目"
    }
  }[lang];

  const roles = useMemo(() => {
    const seen = new Map<string, string>(); // key → label
    characters.forEach(c => {
      if (!seen.has(c.role)) seen.set(c.role, lang === 'zh' ? c.roleZh : c.role);
    });
    return Array.from(seen.entries())
      .map(([key, label]) => ({ key, label }))
      .sort((a, b) => a.key.localeCompare(b.key));
  }, [lang]);

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
      return a.chapterNum - b.chapterNum;
    });
  }, [searchQuery, selectedRole, sortBy]);

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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  const openContents = () => {
    setSelectedChapter({ id: -1, title: '目录', content: chapters.filter(c => c.id > 0).map(c => c.title).join('\n') });
    setMobileMenuOpen(false);
  };

  const mobileSections = [
    { id: 'overview', label: lang === 'zh' ? '总览' : 'Overview', icon: Home },
    { id: 'characters', label: lang === 'zh' ? '人物' : 'Characters', icon: Users },
    { id: 'chapters', label: lang === 'zh' ? '章节' : 'Chapters', icon: BookOpen },
    { id: 'gardens', label: lang === 'zh' ? '园林' : 'Gardens', icon: Leaf },
  ];

  const mobileMenuSections = [
    ...mobileSections,
    { id: 'stats', label: lang === 'zh' ? '统计' : 'Statistics', icon: Activity },
    { id: 'works', label: lang === 'zh' ? '引书' : 'Works Cited', icon: Book },
    { id: 'ocr', label: lang === 'zh' ? '勘误' : 'OCR Corrections', icon: Filter },
    { id: 'lacunae', label: lang === 'zh' ? '缺文' : 'Lacunae', icon: Info },
  ];

  return (
    <div className="min-h-screen font-serif text-[#2c2420] selection:bg-amber-900/20">
      {/* Header */}
      <div id="overview" className="max-w-[1800px] mx-auto w-full px-2 sm:px-5 scroll-mt-24">
        <header className="parchment mt-2 sm:mt-5 mb-2 px-4 sm:px-10 py-4 sm:h-24 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-sm border-double border-4 border-[#d4c5a9]">
          <div className="hidden sm:block flex-1" />
          <div className="flex flex-col items-center text-center gap-1 flex-1">
            <h1 className="text-xl sm:text-3xl font-bold tracking-tight text-[#2c2420]">{t.title}</h1>
          </div>
          <div className="flex-1 flex justify-center sm:justify-end">
            <div className="flex bg-black/5 p-1 rounded-sm border border-[#d4c5a9]">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-all ${
                  lang === 'en' ? 'bg-[#8b4513] text-[#f4ecd8]' : 'text-[#5d5048] hover:bg-black/5'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('zh')}
                className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-all ${
                  lang === 'zh' ? 'bg-[#8b4513] text-[#f4ecd8]' : 'text-[#5d5048] hover:bg-black/5'
                }`}
              >
                中文
              </button>
            </div>
          </div>
        </header>
      </div>

      <div className="lg:hidden sticky top-0 z-30 px-2 pb-2 bg-[#e5dcc3]/95 backdrop-blur-sm border-b border-[#d4c5a9]/80">
        <nav className="parchment rounded-sm border border-[#d4c5a9] p-1.5 flex items-center gap-1.5 shadow-md" aria-label={lang === 'zh' ? '移动导航' : 'Mobile navigation'}>
          {mobileSections.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="flex-1 min-w-0 h-11 rounded-sm flex flex-col items-center justify-center gap-0.5 text-[#5d5048] hover:bg-[#8b4513]/8 hover:text-[#8b4513] transition-colors"
            >
              <Icon size={16} />
              <span className="text-[9px] font-bold leading-none uppercase tracking-wide truncate max-w-full">{label}</span>
            </button>
          ))}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="h-11 w-11 rounded-sm bg-[#8b4513] text-[#f4ecd8] flex items-center justify-center border border-[#8b4513] shadow-sm"
            aria-label={lang === 'zh' ? '打开全部菜单' : 'Open full menu'}
          >
            <Menu size={18} />
          </button>
        </nav>
      </div>

      <main className="max-w-[1800px] mx-auto p-2 sm:p-5 grid grid-cols-1 xl:grid-cols-[280px_1fr_300px] lg:grid-cols-[280px_1fr] gap-4 sm:gap-6">
        {/* Left Sidebar */}
        <aside className="flex flex-col gap-4 sm:gap-5 h-fit order-2 lg:order-1">
          <div id="stats" className="parchment p-4 sm:p-8 rounded-sm flex flex-col gap-6 sm:gap-10 border-double border-4 border-[#d4c5a9] scroll-mt-24">
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
                          {c.name.split(' ')[0]}
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
                          {c.name.split(' ')[0]}
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
                      <span className="text-[12px] font-hans font-bold text-[#2c2420] block leading-tight">{g.name}</span>
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
                    {g.name}
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
                    {g.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* OCR Corrections Sidebar */}
          <div id="ocr" className="parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[#d4c5a9] scroll-mt-24">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-4 font-bold border-b border-[#d4c5a9] pb-2">
              {lang === 'zh' ? 'OCR 勘误' : 'OCR Corrections'}
            </h2>
            <div className="space-y-3">
              {([
                {
                  chapter: 1,
                  wrong: '日',
                  correct: '曰',
                  context: '一日情中和',
                  corrected: '一曰情中和',
                  note: lang === 'zh'
                    ? '「日」（太阳/日期）误作「曰」（曰：说/称）——印刷体中形近易混'
                    : '"日" (sun/day) misread as "曰" (to say/called) — visually similar in block print',
                },
              ] as const).map((c, i) => (
                <div key={i} className="border border-[#d4c5a9]/60 rounded-sm p-3 bg-black/3 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-widest text-[#8b4513] font-bold">
                      {lang === 'zh' ? `第${c.chapter}回` : `Ch. ${c.chapter}`}
                    </span>
                    <span className="text-[9px] text-emerald-700 font-bold uppercase tracking-wider">
                      {lang === 'zh' ? '已更正' : 'Corrected'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-hans">
                    <span className="line-through text-rose-700/80 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded-sm">{c.context}</span>
                    <span className="text-[#5d5048]">→</span>
                    <span className="text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-sm">{c.corrected}</span>
                  </div>
                  <p className="text-[9px] text-[#5d5048] leading-snug italic">{c.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lacunae Sidebar */}
          <div id="lacunae" className="parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[#d4c5a9] scroll-mt-24">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-4 font-bold border-b border-[#d4c5a9] pb-2">
              Lacunae
            </h2>
            <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-4 xl:grid-cols-5 gap-1.5">
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
        </aside>

        {/* Content Area */}
        <section className="flex flex-col gap-4 sm:gap-5 order-1 lg:order-2">
          {/* Network Graph Section */}
          <div id="network" className="scroll-mt-24">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-6 font-bold border-b border-[#d4c5a9] pb-2">
              {lang === 'en' ? 'Character Relationship Network' : '人物关系网络图谱'}
            </h2>
            <p className="text-xs italic text-[#5d5048] mb-4">
              {t.subtitle}
            </p>
            <NetworkGraph characters={characters} relationships={relationships} lang={lang} onNodeClick={setSelectedCharacter} />
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
            <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-2 overflow-x-visible md:overflow-x-auto w-full pb-1 md:pb-2 no-scrollbar border-t border-[#d4c5a9] pt-4">
              <button
                onClick={() => setSelectedRole(null)}
                className={`px-3 sm:px-4 py-2.5 rounded-sm text-[11px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest transition-all border whitespace-nowrap min-h-10 ${
                  !selectedRole 
                    ? 'bg-[#2c2420] text-[#f4ecd8] border-[#2c2420]' 
                    : 'bg-white/10 text-[#5d5048] border-[#d4c5a9] hover:border-[#8b4513]/30'
                }`}
              >
                {t.allRecords}
              </button>
              {roles.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setSelectedRole(key)}
                  className={`px-3 sm:px-4 py-2.5 rounded-sm text-[11px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest transition-all border whitespace-nowrap font-hans min-h-10 ${
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
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredCharacters.map((char) => (
                <CharacterCard 
                  key={char.id} 
                  character={char} 
                  isActive={selectedCharacter?.id === char.id}
                  onClick={() => setSelectedCharacter(char)}
                  lang={lang}
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
        <aside className="flex flex-col gap-4 sm:gap-5 h-fit order-3 lg:col-span-2 xl:col-span-1">
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
              {allWorksCited.map(([work, count]) => (
                <span
                  key={work}
                  title={`${count} ${lang === 'zh' ? '回' : count === 1 ? 'chapter' : 'chapters'}`}
                  className="px-2 py-0.5 text-[10px] rounded-sm border border-[#d4c5a9] bg-[#f4ecd8]/80 text-[#2c2420] font-hans cursor-default"
                >
                  {work}
                  {count > 1 && (
                    <span className="ml-1 text-[9px] text-[#8b4513] font-sans">×{count}</span>
                  )}
                </span>
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
      <div className="hidden sm:flex fixed bottom-6 right-6 flex-col gap-2 z-40">
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
          <div className="lg:hidden fixed inset-0 z-50 flex items-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/45 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="relative w-full max-h-[86vh] overflow-y-auto parchment rounded-t-sm border-t-4 border-x-4 border-double border-[#d4c5a9] shadow-2xl p-4"
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
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="h-10 w-10 rounded-sm border border-[#d4c5a9] bg-white/20 text-[#2c2420] flex items-center justify-center hover:bg-black/5 transition-colors"
                  aria-label={lang === 'zh' ? '关闭菜单' : 'Close menu'}
                >
                  <X size={18} />
                </button>
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

      {/* Lacunae Modal */}
      <AnimatePresence>
        {activeLacunaChapter !== null && (
          <LacunaeModal
            chapterId={activeLacunaChapter}
            entries={lacunaeByChapter.get(activeLacunaChapter) ?? []}
            onClose={() => setActiveLacunaChapter(null)}
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
}: {
  chapterId: number;
  entries: LacunaEntry[];
  onClose: () => void;
}) {
  const confidenceTone: Record<LacunaConfidence, string> = {
    certain: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    probable: 'bg-amber-100 text-amber-800 border-amber-300',
    speculative: 'bg-violet-100 text-violet-800 border-violet-300',
  };
  const confidenceLabel: Record<LacunaConfidence, 'Certain' | 'Probable' | 'Speculative'> = {
    certain: 'Certain',
    probable: 'Probable',
    speculative: 'Speculative',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        className="relative w-full max-w-3xl max-h-[88vh] overflow-hidden parchment rounded-sm border-4 border-double border-[#d4c5a9] shadow-2xl flex flex-col"
      >
        <div className="p-4 sm:p-5 border-b border-[#d4c5a9] bg-[#f4ecd8] flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#5d5048]">Lacunae</p>
            <h3 className="text-lg font-bold text-[#2c2420]">Chapter {chapterId}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 transition-colors text-[#2c2420]"
            aria-label="Close lacunae modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          {entries.length === 0 ? (
            <div className="border border-[#d4c5a9] rounded-sm p-5 bg-black/5">
              <p className="text-[12px] text-[#5d5048] italic">
                No lacunae annotations are available for this chapter yet.
              </p>
            </div>
          ) : (
            entries.map((entry, idx) => (
              <div key={`${entry.chapterId}-${idx}`} className="border border-[#d4c5a9] rounded-sm p-4 bg-black/5 space-y-3">
                <p className="text-[14px] font-hans text-[#2c2420] leading-relaxed">
                  {renderSnippet(entry.snippet, entry.symbol)}
                </p>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#5d5048] font-bold">Inferred</span>
                    <span className="text-3xl leading-none font-serif text-[#2c2420]">{entry.inferredCharacter}</span>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest border rounded-sm px-2 py-1 ${confidenceTone[entry.confidence]}`}>
                    {confidenceLabel[entry.confidence]}
                  </span>
                </div>

                <p className="text-[11px] leading-relaxed text-[#4a3f38] font-sans">
                  {entry.note}
                </p>
              </div>
            ))
          )}
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
}: {
  chapter: Chapter;
  onClose: () => void;
  lang: 'en' | 'zh';
  onSelectCharacter: (character: Character) => void;
}) {
  const chapterSummary = useMemo(
    () => chapterSummaries[chapter.id] ?? null,
    [chapter.id]
  );

  const chapterMentionedCharacters = useMemo(
    () => (chapter.id > 0 ? getChapterMentionedCharacters(chapter.content) : []),
    [chapter.id, chapter.content]
  );

  const chapterCitedWorks = useMemo(() => {
    if (chapter.id <= 0) return [];
    const matches = chapter.content.match(/《[^》\n]{1,40}》/g) ?? [];
    return Array.from(new Set(matches.map((m) => m.trim())));
  }, [chapter.id, chapter.content]);

  const tokenMap = useMemo<[string, Character][]>(() => {
    const entries: [string, Character][] = [];
    for (const char of characters) {
      // Chinese tokens: full name + given-name shortform + aliases
      const chineseName = char.name.split(' ')[0];
      // For 3-char names (surname + 2-char given name), also register the 2-char given name
      // e.g. "梅子玉" → also register "子玉" since text routinely uses the given name alone
      const givenName = chineseName.length === 3 ? chineseName.slice(1) : null;
      const aliasTokens: string[] =
        char.alias !== '—'
          ? char.alias.split('/').flatMap((part) => extractChineseTokens(part.trim()))
          : [];
      const candidates = [chineseName, ...(givenName ? [givenName] : []), ...aliasTokens];
      const zhTokens = [...new Set(candidates)]
        .filter((t) => t.length >= 2 && !GENERIC_HONORIFICS.has(t));
      for (const t of zhTokens) entries.push([t, char]);

      // English tokens: de-accented pinyin parts (≥4 chars)
      const pinyinPart = char.name.slice(chineseName.length).trim();
      if (pinyinPart) {
        const plain = stripDiacritics(pinyinPart);
        const parts = plain.split(' ').filter((p) => p.length >= 4);
        const enTokens = new Set<string>();
        if (parts.length >= 2) enTokens.add(parts.join(' '));
        for (const p of parts) enTokens.add(p);
        for (const t of enTokens) entries.push([t, char]);
      }
    }
    entries.sort((a, b) => b[0].length - a[0].length);
    return entries;
  }, []);

  const renderAnnotated = (text: string, showBilingual = false) => {
    if (!text) return null;
    return segmentText(text, tokenMap).map((seg, i) => {
      if (typeof seg === 'string') return seg;
      const roleChipClass = ROLE_CHIP_IDLE[seg.char.role] ?? ROLE_CHIP_IDLE.Other;
      let chipLabel: string;
      if (showBilingual) {
        chipLabel = seg.char.name;
      } else {
        const chineseName = seg.char.name.split(' ')[0];
        const isChineseToken = /[一-鿿]/.test(seg.token);
        chipLabel = isChineseToken
          ? chineseName
          : seg.char.name.slice(chineseName.length).trim();
      }
      return (
        <button
          key={i}
          onClick={() => onSelectCharacter(seg.char)}
          className={`inline-flex items-center rounded-sm border px-1 py-[1px] mx-[1px] align-baseline cursor-pointer transition-all hover:brightness-95 ${roleChipClass}`}
        >
          {chipLabel}
        </button>
      );
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-5xl h-[90vh] parchment rounded-sm overflow-hidden shadow-2xl border-4 border-double border-[#d4c5a9] flex flex-col"
      >
        <div className="p-4 sm:p-6 border-b border-[#d4c5a9] flex items-center justify-between bg-[#f4ecd8]">
          <div className="flex items-center gap-3">
            <Book className="text-[#8b4513]" size={20} />
            <h2 className="text-lg sm:text-xl font-bold text-[#2c2420] font-hans line-clamp-1">
              {chapter.title}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-black/5 rounded-full transition-colors text-[#2c2420]"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 sm:p-12 font-serif text-[#2c2420] leading-loose selection:bg-[#8b4513]/20 scrollbar-thin">
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
                  <p className="text-[11px] font-bold text-[#2c2420]">English</p>
                  <p className="text-sm sm:text-base text-[#4a3f38] leading-relaxed font-sans whitespace-pre-line">
                    {renderAnnotated(chapterSummary.en, true)}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-[#2c2420]">中文</p>
                  <p className="text-[12px] text-[#2c2420] font-hans leading-relaxed whitespace-pre-line">
                    {renderAnnotated(chapterSummary.zh, true)}
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
                    <p className="text-base font-hans text-[#2c2420] leading-snug">{line}</p>
                    {chapterTitleTranslations[i + 1] != null && chapterTitleTranslations[i + 1] !== '' && (
                      <p className="text-[12px] italic text-[#5d5048] mt-1 leading-snug">{chapterTitleTranslations[i + 1]}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : translationMap[chapter.id] ? (
              <div className="space-y-8">
                {chapter.content.split('\n\n').map((para, i) => (
                  <div key={i} className="border-b border-[#d4c5a9]/40 pb-6 last:border-0">
                    <p className="text-base font-hans text-[#2c2420] leading-relaxed">{renderAnnotated(para)}</p>
                    {translationMap[chapter.id][i] && (
                      <p className="text-sm sm:text-base text-[#4a3f38] mt-3 leading-7 font-sans whitespace-pre-line">{renderAnnotated(translationMap[chapter.id][i])}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="whitespace-pre-wrap text-base sm:text-lg italic font-hans first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                {renderAnnotated(chapter.content)}
              </div>
            )}
            {chapter.id > 0 && chapterCitedWorks.length > 0 && (
              <div className="mt-10 border border-[#d4c5a9] bg-black/5 p-4 rounded-sm">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#5d5048] font-bold mb-3">
                  {lang === 'en' ? 'Cited Books / Works' : '本回引书与作品'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {chapterCitedWorks.map((work) => (
                    <span
                      key={work}
                      className="px-2 py-1 text-[11px] rounded-sm border border-[#d4c5a9] bg-[#f4ecd8]/80 text-[#2c2420] font-hans"
                    >
                      {work}
                    </span>
                  ))}
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

function CharacterCard({ character, isActive, onClick, lang }: { character: Character; isActive: boolean; onClick: () => void; lang: 'en' | 'zh'; key?: string }) {
  const tintClass = ROLE_TINTS[character.role] || ROLE_TINTS.Other;
  const textClass = ROLE_TEXT_COLORS[character.role] || ROLE_TEXT_COLORS.Other;
  const accentColor = ROLE_ACCENTS[character.role] || ROLE_ACCENTS.Other;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
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
      </div>
    </motion.div>
  );
}

const GENERIC_HONORIFICS = new Set(['夫人', '公子', '先生', '老爷', '太太', '小姐', '姑娘', '奶奶', '大人', '将军', '夫君']);

function CharacterDetail({ character, onClose, lang, onSelectChapter }: { character: Character; onClose: () => void; lang: 'en' | 'zh'; onSelectChapter: (chapter: (typeof chapters)[0]) => void }) {
  const Icon = ROLE_ICONS[character.role] || Info;
  const tintClass = ROLE_TINTS[character.role] || ROLE_TINTS.Other;
  const textClass = ROLE_TEXT_COLORS[character.role] || ROLE_TEXT_COLORS.Other;
  const accentColor = ROLE_ACCENTS[character.role] || ROLE_ACCENTS.Other;

  const t = {
    en: {
      alias: "Alias",
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
    const chineseName = character.name.split(' ')[0];
    const givenName = chineseName.length > 2 ? chineseName.slice(-2) : '';
    const aliases = character.alias !== '—'
      ? character.alias.split(/[/\s，、]+/).filter(Boolean)
      : [];
    const tokens = [...new Set([chineseName, givenName, ...aliases])].filter(t => t.length >= 2 && !GENERIC_HONORIFICS.has(t));

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
  }, [character]);

  const mentionedChapters = mentionData.filter(d => d.count > 0);
  const maxCount = Math.max(...mentionData.map(d => d.count), 1);

  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  // Pre-computed scenes for this character, or fall back to text snippets
  const precomputed = characterAppearances[character.id] ?? {};

  const activeScenes = useMemo(() => {
    if (activeChapter === null) return null;

    const scenes = precomputed[activeChapter] ?? null;

    // Always extract text snippets
    const ch = chapters.find(c => c.id === activeChapter);
    if (!ch) return scenes ? { scenes, snippets: [] } : null;
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

    return { scenes, snippets: snippets.slice(0, 8), tokens };
  }, [activeChapter, character, precomputed]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className={`relative w-[95%] sm:w-full max-w-2xl h-[90vh] sm:h-auto sm:max-h-[92vh] parchment rounded-sm overflow-hidden shadow-2xl border-4 border-double border-[#d4c5a9] my-4 sm:my-0 flex flex-col`}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 hover:bg-black/5 rounded-full transition-colors z-10 text-[#2c2420]"
        >
          <X size={20} />
        </button>

        <div className="flex-1 overflow-y-auto p-6 sm:p-10 md:p-16">
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
                <BookOpen size={14} className="sm:w-4 sm:h-4" style={{ color: accentColor }} />
                <span>{character.chapter}</span>
              </div>
            </div>
          </div>


<div className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#5d5048] font-hans">{t.historicalRecord}</p>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-black/5 p-4 sm:p-6 rounded-sm border border-[#d4c5a9]">
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#8b4513] mb-1 sm:mb-2 font-hans opacity-60">English Record</p>
                  <p className="leading-relaxed text-[#2c2420] text-sm sm:text-base italic">
                    {character.description}
                  </p>
                </div>
                <div className="bg-black/5 p-4 sm:p-6 rounded-sm border border-[#d4c5a9]">
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#8b4513] mb-1 sm:mb-2 font-hans opacity-60">中文记录</p>
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
                            <p className="font-bold mb-1">Ch.{ch} — {count} mention{count !== 1 ? 's' : ''}</p>
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
                      title={`Ch.${ch}: ${count} mention${count !== 1 ? 's' : ''}`}
                      className={`px-2 py-0.5 text-[10px] font-bold border transition-colors rounded-sm font-hans ${
                        activeChapter === ch
                          ? 'bg-[#8b4513] text-[#f4ecd8] border-[#8b4513]'
                          : 'border-[#8b4513]/40 text-[#8b4513] hover:bg-[#8b4513]/10'
                      }`}
                    >
                      Ch.{ch}
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
                            Ch.{activeChapter}
                          </span>
                          <span className="text-[10px] text-[#5d5048] ml-2 font-hans">
                            {chapters.find(c => c.id === activeChapter)?.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[9px] text-[#8b7355] font-hans">
                            {mentionData.find(d => d.ch === activeChapter)?.count ?? 0} mentions
                          </span>
                          <button
                            onClick={() => setActiveChapter(null)}
                            className="text-[#8b7355] hover:text-[#2c2420] transition-colors"
                          >
                            <X size={13} />
                          </button>
                        </div>
                      </div>

                      {/* Panel body */}
                      <div className="px-4 py-3 space-y-2.5 bg-[#faf6ee]">
                        {activeScenes.scenes && (
                          <>
                            <p className="text-[9px] uppercase tracking-[0.2em] text-[#8b4513]/70 font-bold font-hans mb-1">
                              {lang === 'zh' ? '场景摘要' : 'Scene Summary'}
                            </p>
                            {activeScenes.scenes.map((scene, i) => (
                              <div key={i} className="flex gap-2.5">
                                <span className="text-[#8b4513]/50 mt-0.5 shrink-0">◆</span>
                                <p className="text-[11px] sm:text-xs leading-relaxed text-[#2c2420]">{lang === 'zh' ? scene.zh : scene.en}</p>
                              </div>
                            ))}
                          </>
                        )}
                        {activeScenes.snippets.length > 0 && (
                          <>
                            {activeScenes.scenes && (
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

  const parent = garden.parentId ? getGardenById(garden.parentId) : null;
  const children = (garden.subLocationIds ?? [])
    .map(id => getGardenById(id))
    .filter((g): g is NonNullable<typeof g> => g !== undefined);
  const accentColor = garden.accentColor;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-[95%] sm:w-full max-w-2xl h-[90vh] sm:h-auto sm:max-h-[92vh] parchment rounded-sm overflow-hidden shadow-2xl border-4 border-double border-[#d4c5a9] my-4 sm:my-0 flex flex-col"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 hover:bg-black/5 rounded-full transition-colors z-10 text-[#2c2420]"
        >
          <X size={20} />
        </button>

        <div className="flex-1 overflow-y-auto p-6 sm:p-10 md:p-16 flex flex-col gap-8">
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
                    ↑ {parent.name}
                  </button>
                )}
              </div>
              <h2 className="text-3xl font-bold text-[#2c2420] font-hans leading-tight">{garden.name}</h2>
              <p className="text-sm text-[#5d5048] mt-0.5 italic">{garden.pinyin} · {garden.nameEn}</p>
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
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#5d5048] border-b border-[#d4c5a9] pb-2 mt-2">
              园林志 · 中文
            </p>
            <p className="text-[12px] leading-relaxed text-[#2c2420] font-hans">{garden.descriptionZh}</p>
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
                    {child.name}
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
                  title={`Ch.${d.ch}: ${d.count} mention${d.count !== 1 ? 's' : ''}`}
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
                  Ch.{d.ch}
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
                        Ch.{activeChapter}
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
                        {lang === 'zh' ? '阅读全回' : 'Read Chapter'}
                      </button>
                      <button onClick={() => setActiveChapter(null)} className="text-[#5d5048] hover:text-[#2c2420]">
                        <X size={12} />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
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
