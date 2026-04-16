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
  Clock
} from 'lucide-react';
import { characters, relationships } from './data';
import { Character } from './types';
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

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [sortBy, setSortBy] = useState<'role' | 'appearance'>('appearance');
  const [lang, setLang] = useState<'en' | 'zh'>('en');

  const t = {
    en: {
      title: "品花宝鉴 Character Database",
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
      age: "Age"
    },
    zh: {
      title: "品花宝鉴 人物数据库",
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
      age: "年龄"
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
      <header className="parchment mx-5 mt-5 mb-2 px-10 h-24 flex items-center justify-between rounded-sm border-double border-4 border-[#d4c5a9]">
        <div className="flex-1" />
        <div className="flex flex-col items-center gap-1 flex-1">
          <h1 className="text-3xl font-bold tracking-tight text-[#2c2420] whitespace-nowrap">{t.title}</h1>
          <p className="text-sm italic text-[#5d5048] whitespace-nowrap">{t.subtitle}</p>
        </div>
        <div className="flex-1 flex justify-end">
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

      <main className="max-w-[1400px] mx-auto p-5 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
        {/* Sidebar */}
        <aside className="flex flex-col gap-5 h-fit lg:sticky lg:top-5">
          <div className="parchment p-8 rounded-sm flex flex-col gap-10 border-double border-4 border-[#d4c5a9]">
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
        <section className="flex flex-col gap-5">
          {/* Search & Filters */}
          <div className="parchment p-6 rounded-sm flex flex-col gap-6 border-double border-4 border-[#d4c5a9]">
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
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
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

          {/* Network Graph Section */}
          <div className="mt-12">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-6 font-bold border-b border-[#d4c5a9] pb-2">
              {lang === 'en' ? 'Character Relationship Network' : '人物关系网络图谱'}
            </h2>
            <NetworkGraph characters={characters} relationships={relationships} lang={lang} onNodeClick={setSelectedCharacter} />
          </div>
        </section>
      </main>

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
      className={`parchment p-8 rounded-sm cursor-pointer transition-all relative flex flex-col justify-between h-full group border-l-4 ${tintClass} ${
        isActive ? `ring-2 ring-[#8b4513]/40` : 'hover:border-[#8b4513]/30'
      }`}
      style={{ borderLeftColor: accentColor }}
    >
      <span className="absolute top-4 right-4 text-[10px] font-serif italic opacity-40">
        {character.chapter}
      </span>
      
      <div className="mb-4">
        <div className="text-2xl font-bold text-[#2c2420] group-hover:text-[#8b4513] transition-colors leading-tight">
          {character.name}
        </div>
        {character.alias !== '—' && (
          <div className="text-[12px] italic text-[#5d5048] mt-1 font-hans">
            {character.alias}
          </div>
        )}
      </div>

      <div>
        <div className={`text-[11px] font-bold uppercase tracking-[0.2em] mb-4 font-hans ${textClass}`}>
          {lang === 'zh' ? character.roleZh : character.role}
        </div>
        <p className={`leading-relaxed text-[#2c2420] line-clamp-3 mb-2 ${lang === 'zh' ? 'text-[13px] font-hans' : 'text-sm italic'}`}>
          {lang === 'en' ? character.description : character.descriptionZh}
        </p>
      </div>

      <div className="flex gap-3 border-t border-[#d4c5a9] pt-4">
        <span className="text-[10px] text-[#5d5048] uppercase tracking-widest font-bold font-hans">
          {lang === 'zh' ? character.originZh : character.origin}
        </span>
        <span className="text-[10px] text-[#5d5048] uppercase tracking-widest font-hans">
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
        className={`relative w-full max-w-2xl parchment rounded-sm overflow-hidden shadow-2xl border-4 border-double border-[#d4c5a9]`}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors z-10 text-[#2c2420]"
        >
          <X size={20} />
        </button>

        <div className="p-10 md:p-16">
          <div className="flex items-center gap-6 mb-10 border-b-2 border-[#d4c5a9] pb-8">
            <div className={`p-4 rounded-sm border-2 border-double ${tintClass} ${textClass}`}>
              <Icon size={28} />
            </div>
            <div className="flex-1">
              <div className={`text-[11px] font-bold uppercase tracking-[0.3em] ${textClass} mb-2 font-hans`}>
                {lang === 'zh' ? character.roleZh : character.role} {t.dossier}
              </div>
              <h2 className="text-5xl font-bold text-[#2c2420] leading-tight">{character.name}</h2>
              {character.alias !== '—' && (
                <div className="text-lg italic text-[#5d5048] mt-1 font-hans">
                  {character.alias}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#5d5048] font-hans">{t.alias}</p>
              <p className="text-base italic text-[#2c2420] font-hans">{character.alias}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#5d5048] font-hans">{t.origin}</p>
              <div className="flex items-center gap-2 text-base text-[#2c2420] font-hans">
                <MapPin size={16} style={{ color: accentColor }} />
                <span>{lang === 'zh' ? character.originZh : character.origin}</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#5d5048] font-hans">{t.firstEntry}</p>
              <div className="flex items-center gap-2 text-base text-[#2c2420] font-hans">
                <BookOpen size={16} style={{ color: accentColor }} />
                <span>{character.chapter}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#5d5048] font-hans">{t.historicalRecord}</p>
              <div className="space-y-4">
                <div className="bg-black/5 p-6 rounded-sm border border-[#d4c5a9]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#8b4513] mb-2 font-hans opacity-60">English Record</p>
                  <p className="leading-relaxed text-[#2c2420] text-base italic">
                    {character.description}
                  </p>
                </div>
                <div className="bg-black/5 p-6 rounded-sm border border-[#d4c5a9]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#8b4513] mb-2 font-hans opacity-60">中文记录</p>
                  <p className="leading-relaxed text-[#2c2420] text-lg font-hans">
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
