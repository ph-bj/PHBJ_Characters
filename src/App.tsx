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
  Book
} from 'lucide-react';
import { characters, relationships } from './data';
import { chapters } from './chapters';
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
function pickDistributedIndices(total: number): number[] {
  if (total <= 0) return [];
  if (total <= 6) return Array.from({ length: total }, (_, i) => i);
  const base = new Set<number>([
    0,
    1,
    Math.floor(total * 0.2),
    Math.floor(total * 0.35),
    Math.floor(total * 0.5),
    Math.floor(total * 0.65),
    Math.floor(total * 0.8),
    total - 2,
    total - 1,
  ]);
  return Array.from(base).filter((i) => i >= 0 && i < total).sort((a, b) => a - b);
}

function trimByWords(text: string, maxWords: number): string {
  const words = text.replace(/\s+/g, ' ').trim().split(' ');
  if (words.length <= maxWords) return words.join(' ');
  return `${words.slice(0, maxWords).join(' ')}...`;
}

function trimByChars(text: string, maxChars: number): string {
  const compact = text.replace(/\s+/g, '').trim();
  if (compact.length <= maxChars) return compact;
  return `${compact.slice(0, maxChars)}……`;
}

function chapterHeadingFromTitle(chapter: Chapter): { heading: string; theme: string } {
  const titleParts = chapter.title.trim().split(/\s+/);
  const heading = titleParts[0] ?? `第${chapter.id}回`;
  const theme = titleParts.slice(1).join(' ') || chapter.title;
  return { heading, theme };
}

function buildChapterSummary(chapter: Chapter): { en: string; zh: string } {
  const paragraphsZh = chapter.content.split('\n\n').filter((p) => p.trim().length > 0);
  const paragraphsEn = translationMap[chapter.id] ?? [];
  const { heading, theme } = chapterHeadingFromTitle(chapter);
  const indices = pickDistributedIndices(paragraphsZh.length);

  if (chapter.id === 0) {
    const zhSummary = [
      '本篇序文以“绘形绘声”为纲，先论小说之所以动人，不仅在于叙事结构，更在于能否同时写出人物之形、情、声、气。',
      '作者借评诸书，特别推重《品花宝鉴》在人物神态与世情风习上的细腻刻画，强调其“另具一格”的叙事价值。',
      '文中又追述此书流传经历：抄本错杂、借阅辗转、半途停刻，后经重校删订方得成编。',
      '在“病中校刻”的叙述里，序者把个人际遇与文本命运并置，形成一种“人事飘零而文脉得续”的自我见证。',
      '末段以镜花水月、海市蜃楼作喻，点明繁华情事终归幻影，却仍主张借文字留下可供玩味的人情与世态。',
      '故此序既是版本说明，也是审美宣言：承认世事无常，同时坚持文学可存其神。'
    ].join('');
    const enSummary = [
      "The preface frames the novel through the paired ideals of depicting form and voice: compelling fiction must render not only events but the lived texture of people, speech, temperament, and mood.",
      "By comparing major narrative works, the writer singles out Pinhua Baojian as distinctive for its unusually vivid social portraiture and character presence, arguing that it occupies a unique place in the tradition.",
      "The text then recounts a difficult transmission history: scattered manuscripts, inconsistent copies, interrupted printing, and eventual rescue through painstaking collation and revision.",
      "The editor's account of correcting the work while ill fuses personal hardship with textual preservation, turning publication into both literary labor and moral commitment.",
      "In its closing movement, the preface invokes mirror-flowers and mirage imagery to acknowledge that worldly splendor is transient, yet still insists that writing can preserve the emotional truth of a historical milieu.",
      "As a result, this opening operates at once as publication note, aesthetic statement, and defense of fiction's lasting value despite the impermanence of life."
    ].join(' ');
    return { en: enSummary, zh: zhSummary };
  }

  const zhCore = indices
    .map((i) => trimByChars(paragraphsZh[i], 110))
    .filter((p) => p.length > 0);

  const enCore = indices
    .map((i) => paragraphsEn[i] ?? '')
    .filter((p) => p.trim().length > 0)
    .map((p) => trimByWords(p, 60));

  const zhIntro = `${heading}围绕“${theme}”展开，情节由开端铺陈、中段冲突到结尾收束层层推进。`;
  const zhBody = zhCore.map((p, idx) => `其${idx + 1}，${p}`).join('');
  const zhClose = '综观全回，人物关系、情绪走向与事件后果彼此牵引，既回应前文伏线，也为后续情节递进奠定关键转折。';

  const enIntro = `Chapter ${chapter.id} develops through setup, escalation, turning points, and resolution in a tightly connected narrative arc.`;
  const enBody = enCore.map((p, idx) => `Point ${idx + 1}: ${p}`).join(' ');
  const enClose = 'Taken as a whole, the chapter interlocks character motivation, emotional reversal, and consequential action, while paying off earlier threads and preparing the next stage of the novel.';

  return {
    en: `${enIntro} ${enBody} ${enClose}`,
    zh: `${zhIntro}${zhBody}${zhClose}`,
  };
}

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
  scholar: 'bg-blue-900/5 border-blue-900/20',
  performer: 'bg-red-900/5 border-red-900/20',
  official: 'bg-yellow-900/5 border-yellow-900/20',
  villain: 'bg-gray-900/5 border-gray-900/20',
  minor: 'bg-stone-900/5 border-stone-900/20',
  female: 'bg-purple-900/5 border-purple-900/20',
  servant: 'bg-green-900/5 border-green-900/20',
  deceased: 'bg-zinc-900/5 border-zinc-900/20',
  Other: 'bg-stone-900/5 border-stone-900/20'
};

const ROLE_TEXT_COLORS: Record<string, string> = {
  scholar: 'text-blue-800',
  performer: 'text-red-800',
  official: 'text-yellow-800',
  villain: 'text-gray-800',
  minor: 'text-stone-800',
  female: 'text-purple-800',
  servant: 'text-green-800',
  deceased: 'text-zinc-800',
  Other: 'text-stone-800'
};

const ROLE_ACCENTS: Record<string, string> = {
  scholar: '#1e3a8a',
  performer: '#991b1b',
  official: '#854d0e',
  villain: '#1f2937',
  minor: '#44403c',
  female: '#6b21a8',
  servant: '#065f46',
  deceased: '#3f3f46',
  Other: '#44403c'
};

function extractChineseTokens(text: string): string[] {
  const matches = text.match(/[\u4e00-\u9fff]+/g);
  return matches ? matches.filter(Boolean) : [];
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
  const [sortBy, setSortBy] = useState<'role' | 'appearance'>('appearance');
  const [lang, setLang] = useState<'en' | 'zh'>('en');

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
    const uniqueRoles = Array.from(new Set(characters.map(c => lang === 'zh' ? c.roleZh : c.role)));
    return uniqueRoles.sort();
  }, [lang]);

  const filteredCharacters = useMemo(() => {
    const filtered = characters.filter(char => {
      const matchesSearch = 
        char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.alias.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRole = !selectedRole || (lang === 'zh' ? char.roleZh === selectedRole : char.role === selectedRole);
      
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
    const origins: Record<string, number> = {};
    const rolesCount: Record<string, number> = {};
    const ageGroups: Record<string, number> = {
      '<15': 0,
      '15-19': 0,
      '20-24': 0,
      '25-29': 0,
      '30+': 0
    };
    
    characters.forEach(c => {
      if (c.origin !== '—') origins[c.origin] = (origins[c.origin] || 0) + 1;
      rolesCount[c.role] = (rolesCount[c.role] || 0) + 1;

      // Parse Age
      const ageStr = c.age.replace('~', '').trim();
      const age = parseInt(ageStr);
      if (!isNaN(age)) {
        if (age < 15) ageGroups['<15']++;
        else if (age <= 19) ageGroups['15-19']++;
        else if (age <= 24) ageGroups['20-24']++;
        else if (age <= 29) ageGroups['25-29']++;
        else ageGroups['30+']++;
      }
    });

    const topOrigins = Object.entries(origins)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ name, count, percentage: Math.round((count / characters.length) * 100) }));

    const topRoles = Object.entries(rolesCount)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ name, count, percentage: Math.round((count / characters.length) * 100) }));

    const ageData = Object.entries(ageGroups).map(([group, count]) => ({ group, count }));

    return { topOrigins, topRoles, ageData };
  }, []);

  return (
    <div className="min-h-screen font-serif text-[#2c2420] selection:bg-amber-900/20">
      {/* Header */}
      <div className="max-w-[1800px] mx-auto w-full px-2 sm:px-5">
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

      <main className="max-w-[1800px] mx-auto p-2 sm:p-5 grid grid-cols-1 xl:grid-cols-[280px_1fr_300px] lg:grid-cols-[280px_1fr] gap-4 sm:gap-6">
        {/* Left Sidebar */}
        <aside className="flex flex-col gap-4 sm:gap-5 h-fit order-2 lg:order-1">
          <div className="parchment p-4 sm:p-8 rounded-sm flex flex-col gap-6 sm:gap-10 border-double border-4 border-[#d4c5a9]">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-6 font-bold border-b border-[#d4c5a9] pb-2">{t.hometown}</h2>
              <div className="space-y-4">
                {stats.topOrigins.map((stat, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-[12px]">
                      <span className="truncate pr-2 font-hans">
                        {lang === 'zh' ? (characters.find(c => c.origin === stat.name)?.originZh || stat.name) : stat.name}
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
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-6 font-bold border-b border-[#d4c5a9] pb-2">{t.ageDist}</h2>
              <div className="h-[160px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stats.ageData}>
                    <XAxis 
                      dataKey="group" 
                      axisLine={{ stroke: '#d4c5a9' }} 
                      tickLine={false} 
                      tick={{ fill: '#5d5048', fontSize: 10 }}
                    />
                    <Tooltip 
                      cursor={{ fill: 'rgba(0,0,0,0.03)' }}
                      contentStyle={{ 
                        backgroundColor: '#f4ecd8', 
                        border: '1px solid #d4c5a9',
                        borderRadius: '0px',
                        fontSize: '10px',
                        color: '#2c2420'
                      }}
                    />
                    <Bar dataKey="count" radius={[0, 0, 0, 0]}>
                      {stats.ageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="#8b4513" opacity={0.6 + (index * 0.05)} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
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
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex flex-col gap-4 sm:gap-5 order-1 lg:order-2">
          {/* Network Graph Section */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-6 font-bold border-b border-[#d4c5a9] pb-2">
              {lang === 'en' ? 'Character Relationship Network' : '人物关系网络图谱'}
            </h2>
            <p className="text-xs italic text-[#5d5048] mb-4">
              Exploring 134 characters from the classic Chinese novel
            </p>
            <NetworkGraph characters={characters} relationships={relationships} lang={lang} onNodeClick={setSelectedCharacter} />
          </div>

          {/* Search & Filters */}
          <div className="parchment p-4 sm:p-6 rounded-sm flex flex-col gap-4 sm:gap-6 border-double border-4 border-[#d4c5a9]">
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
            <div className="flex gap-2 overflow-x-auto w-full pb-2 no-scrollbar border-t border-[#d4c5a9] pt-4">
              <button
                onClick={() => setSelectedRole(null)}
                className={`px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all border whitespace-nowrap ${
                  !selectedRole 
                    ? 'bg-[#2c2420] text-[#f4ecd8] border-[#2c2420]' 
                    : 'bg-white/10 text-[#5d5048] border-[#d4c5a9] hover:border-[#8b4513]/30'
                }`}
              >
                {t.allRecords}
              </button>
              {roles.map(role => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all border whitespace-nowrap font-hans ${
                    selectedRole === role 
                      ? 'bg-[#2c2420] text-[#f4ecd8] border-[#2c2420]' 
                      : 'bg-white/10 text-[#5d5048] border-[#d4c5a9] hover:border-[#8b4513]/30'
                  }`}
                >
                  {role}
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
          <div className="parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[#d4c5a9]">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-6 font-bold border-b border-[#d4c5a9] pb-2">{t.chapters}</h2>
            <div className="mb-6 space-y-2 pb-4 border-b border-[#d4c5a9]">
              <p className="text-base font-bold font-hans text-[#2c2420]">品花宝鉴</p>
              <p className="text-[11px] font-hans text-[#5d5048]">作者：陈森</p>
              <p className="text-[11px] font-hans text-[#2c2420] leading-relaxed">《品花宝鉴》，亦作《怡情佚史》、《群花宝鉴》，清代陈森所著的一部描写狎优风气的长篇小说，共60回。陈森是常州人，科举常年不得意，40岁后放弃科举。他寓居北京时常与优伶交往，为日后的创作积累了素材。</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <button
                onClick={() => setSelectedChapter({ id: -1, title: '目录', content: chapters.filter(c => c.id > 0).map(c => c.title).join('\n') })}
                className="text-left p-2 rounded-sm border border-[#8b4513]/40 hover:bg-[#8b4513]/10 hover:border-[#8b4513]/60 transition-all group flex items-center gap-2 mb-1"
              >
                <Book size={12} className="text-[#8b4513]/60 group-hover:text-[#8b4513] shrink-0" />
                <span className="text-[11px] font-hans font-bold text-[#8b4513] leading-tight">目录</span>
              </button>
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => setSelectedChapter(chapter)}
                  className="text-left p-2 rounded-sm border border-[#d4c5a9]/30 hover:bg-[#8b4513]/5 hover:border-[#8b4513]/30 transition-all group flex items-center gap-2"
                >
                  <Book size={12} className="text-[#8b4513]/40 group-hover:text-[#8b4513] shrink-0" />
                  <span className="text-[11px] font-hans text-[#2c2420] leading-tight">{chapter.title}</span>
                </button>
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
      <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-40">
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
          />
        )}
      </AnimatePresence>
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
    () => (chapter.id >= 0 ? buildChapterSummary(chapter) : null),
    [chapter]
  );

  const chapterMentionedCharacters = useMemo(
    () => (chapter.id > 0 ? getChapterMentionedCharacters(chapter.content) : []),
    [chapter.id, chapter.content]
  );

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
                <p className="text-[12px] italic text-[#5d5048] max-w-2xl mx-auto leading-relaxed">
                  {chapterTitleTranslations[chapter.id]}
                </p>
              )}
              <div className="text-[10px] uppercase tracking-[0.5em] text-[#5d5048] opacity-60">
                Pinhua Baojian Archive
              </div>
            </div>
            {chapterSummary && (
              <div className="mb-8 border border-[#d4c5a9] bg-black/5 p-4 rounded-sm space-y-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#5d5048] font-bold">
                  {lang === 'en' ? 'Chapter Summary' : '章节提要'}
                </p>
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-[#2c2420]">English</p>
                  <p className="text-[12px] italic text-[#5d5048] leading-relaxed">
                    {chapterSummary.en}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-[#2c2420]">中文</p>
                  <p className="text-[12px] text-[#2c2420] font-hans leading-relaxed">
                    {chapterSummary.zh}
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
                      className="px-2 py-1 text-[11px] rounded-sm border border-[#d4c5a9] bg-white/30 hover:bg-[#8b4513]/10 hover:border-[#8b4513]/40 transition-colors font-hans"
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
                    <p className="text-base font-hans text-[#2c2420] leading-relaxed">{para}</p>
                    {translationMap[chapter.id][i] && (
                      <p className="text-[12px] italic text-[#5d5048] mt-3 leading-relaxed">{translationMap[chapter.id][i]}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="whitespace-pre-wrap text-base sm:text-lg italic font-hans first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                {chapter.content}
              </div>
            )}
            <div className="pt-12 text-center text-[#5d5048] italic text-sm opacity-60">
              {lang === 'en' ? '--- End of Chapter ---' : '--- 本回完 ---'}
            </div>
          </div>
        </div>

        <div className="bg-[#d4c5a9]/20 p-4 text-[#5d5048] text-[10px] font-bold uppercase tracking-[0.5em] text-center border-t border-[#d4c5a9] font-hans shrink-0">
          Imperial Archives &bull; Reading Mode
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

function CharacterDetail({ character, onClose, lang }: { character: Character; onClose: () => void; lang: 'en' | 'zh' }) {
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
      archives: "Imperial Archives"
    },
    zh: {
      alias: "别名",
      origin: "籍贯",
      firstEntry: "首次登场",
      historicalRecord: "历史记录",
      dossier: "档案",
      archives: "皇家档案馆"
    }
  }[lang];

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
        className={`relative w-[95%] sm:w-full max-w-2xl parchment rounded-sm overflow-hidden shadow-2xl border-4 border-double border-[#d4c5a9] my-4 sm:my-0`}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 hover:bg-black/5 rounded-full transition-colors z-10 text-[#2c2420]"
        >
          <X size={20} />
        </button>

        <div className="p-6 sm:p-10 md:p-16">
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
                <div className="text-base sm:text-lg italic text-[#5d5048] mt-1 font-hans">
                  {character.alias}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
            <div className="space-y-1">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#5d5048] font-hans">{t.alias}</p>
              <p className="text-sm sm:text-base italic text-[#2c2420] font-hans">{character.alias}</p>
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
          </div>
        </div>

        <div className="bg-[#d4c5a9]/20 p-4 text-[#5d5048] text-[10px] font-bold uppercase tracking-[0.5em] text-center border-t border-[#d4c5a9] font-hans">
          {t.archives} &bull; Pinhua Baojian
        </div>
      </motion.div>
    </div>
  );
}
