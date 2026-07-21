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
  Download,
  Map as MapIcon,
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

import {
  ENGLISH_WORK_TITLES,
  ENGLISH_WORK_TITLE_SET,
  WORK_ENGLISH_BY_CHINESE,
} from "./englishWorkTitles";
import type { Character, Chapter } from "./types";
const NetworkGraph = React.lazy(() => import("./components/NetworkGraph"));
import { parseHash, formatHash, type DeepLink } from "./permalink";
import {
  categorizeWork,
  WORK_CATEGORY_LABELS,
  WORK_CATEGORY_ORDER,
} from "./workCategories";
import { CiteButton } from "./components/CiteButton";

import { worksData, escapeRegExp, englishWorkTitleRegexFragment, ENGLISH_WORK_SPLIT_PATTERN, CHAPTER_ANNOTATION_TOKEN_SPLIT_REGEX, ENGLISH_WORK_TITLE_LOWERCASE, chapterTitleTranslations, translationMap, getChapterReaderTitle, getChapterReaderSubtitle, ROLE_ORDER, ROLE_ICONS, ROLE_TINTS, ROLE_TEXT_COLORS, ROLE_ACCENTS, ROLE_CHIP_IDLE, ROLE_CHIP_ACTIVE, extractChineseTokens, stripDiacritics, Segment, LacunaConfidence, LacunaEntry, NovelLocationWithChapters, CONTEXT_SENSITIVE_TOKENS, ENGLISH_ALIAS_TOKENS, getEnglishAliasTokens, isPersonNameContext, getChineseShortFormTokens, removeTrailingSurname, segmentText, countTextSearchMatches, renderTextWithSearchHighlight, isWorkAnnotationToken, isChineseWorkAnnotationToken, CHINESE_WORK_BY_ENGLISH_LOWER, workKeyFromAnnotationToken, chapterWorkAnchorId, getSegmentChipLabel, ENGLISH_CHARACTER_NAME_FALLBACKS, getCharacterNameForLanguage, countSearchMatchesInRenderedText, getChapterMentionedCharacters, getCharacterTotalMentions, NavSection, readLastReadingPosition } from "./utils";

import { LanguageSwitch } from "./components/LanguageSwitch";
import { ThemeToggle } from "./components/ThemeToggle";
import { NavMenuDropdown } from "./components/NavMenuDropdown";
const LacunaeModal = React.lazy(() => import("./components/LacunaeModal").then(m => ({ default: m.LacunaeModal })));
const QuestionsModal = React.lazy(() => import("./components/QuestionsModal").then(m => ({ default: m.QuestionsModal })));
const WorkModal = React.lazy(() => import("./components/WorkModal").then(m => ({ default: m.WorkModal })));
const LocationDetail = React.lazy(() => import("./components/LocationDetail").then(m => ({ default: m.LocationDetail })));
const ChapterReader = React.lazy(() => import("./components/ChapterReader").then(m => ({ default: m.ChapterReader })));
const HometownMap = React.lazy(() => import("./components/HometownMap").then(m => ({ default: m.HometownMap })));
import { CharacterCard } from "./components/CharacterCard";
const CharacterDetail = React.lazy(() => import("./components/CharacterDetail").then(m => ({ default: m.CharacterDetail })));
const GardenDetail = React.lazy(() => import("./components/GardenDetail").then(m => ({ default: m.GardenDetail })));
const GardenStroll = React.lazy(() => import("./components/illustrations/GardenStroll").then(m => ({ default: m.GardenStroll })));
const OperaNight = React.lazy(() => import("./components/illustrations/OperaNight").then(m => ({ default: m.OperaNight })));
const PlumBlossomBanquet = React.lazy(() => import("./components/illustrations/PlumBlossomBanquet").then(m => ({ default: m.PlumBlossomBanquet })));
const ScholarStudy = React.lazy(() => import("./components/illustrations/ScholarStudy").then(m => ({ default: m.ScholarStudy })));
const MainInkLandscape = React.lazy(() => import("./components/illustrations/MainInkLandscape").then(m => ({ default: m.MainInkLandscape })));
export default function App() {
  const tcZPHBJGitHubIoVersion = __BUILD_VERSION__; // handle github.io failures
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log(`tcZPHBJGitHubIoVersion: ${tcZPHBJGitHubIoVersion}`);
  }, [tcZPHBJGitHubIoVersion]);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  );
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedGarden, setSelectedGarden] = useState<Garden | null>(null);
  const [selectedLocation, setSelectedLocation] =
    useState<NovelLocationWithChapters | null>(null);
  const [selectedWork, setSelectedWork] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"role" | "appearance" | "mentions">(
    "mentions",
  );
  const [lang, setLang] = useState<"en" | "zh">(() => {
    const parsed = parseHash(window.location.hash);
    if (parsed && parsed.lang) {
      return parsed.lang;
    }
    try {
      const saved = localStorage.getItem("phbj-language-choice");
      if (saved === "en" || saved === "zh") {
        return saved;
      }
    } catch {
      // Ignore
    }
    return "en";
  });

  useEffect(() => {
    try {
      localStorage.setItem("phbj-language-choice", lang);
    } catch {
      // Ignore
    }
  }, [lang]);
  const [activeLacunaChapter, setActiveLacunaChapter] = useState<number | null>(
    null,
  );
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [networkGraphFullscreen, setNetworkGraphFullscreen] = useState(false);

  const lacunaChapterNumbers = useMemo(
    () =>
      chapters
        .filter((chapter) => Number(chapter.id) > 0)
        .map((chapter) => Number(chapter.id)),
    [],
  );

  const lacunaeByChapter = useMemo(() => {
    const grouped = new Map<number, LacunaEntry[]>();
    for (const chapter of chapterLacunae) {
      grouped.set(
        chapter.chapterId,
        chapter.lacunae.map((lacuna) => ({
          chapterId: chapter.chapterId,
          snippet: lacuna.context,
          symbol: lacuna.context.includes("▉") ? "▉" : "□",
          inferredCharacter: lacuna.inference,
          confidence: lacuna.confidence,
          note: lacuna.note,
        })),
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
      titleEn: "Precious Vibe",
      titleZh: "品花宝境",
      siteSubtitle: "Pinhua baojian's Vibe Literature",
      chapterAbbr: "Ch.",
      mentions: (count: number) => `mention${count !== 1 ? "s" : ""}`,
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
      readChapter: "Read Chapter",
    },
    zh: {
      titleEn: "Precious Vibe",
      titleZh: "品花宝境",
      siteSubtitle: "《品花宝鉴》之意境文学",
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
      readChapter: "阅读全回",
    },
  }[lang];

  const roles = useMemo(() => {
    const seen = new Map<string, string>(); // key → label
    characters.forEach((c) => {
      if (!seen.has(c.role))
        seen.set(c.role, lang === "zh" ? c.roleZh : c.role);
    });
    return Array.from(seen.entries())
      .map(([key, label]) => ({ key, label }))
      .sort((a, b) => {
        const ia = ROLE_ORDER.indexOf(a.key);
        const ib = ROLE_ORDER.indexOf(b.key);
        return (
          (ia === -1 ? ROLE_ORDER.length : ia) -
          (ib === -1 ? ROLE_ORDER.length : ib)
        );
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
    const filtered = characters.filter((char) => {
      const matchesSearch =
        char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.alias.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (identityLinksById[char.id] || []).some((name) =>
          name.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchesRole = !selectedRole || char.role === selectedRole;

      return matchesSearch && matchesRole;
    });

    return filtered.sort((a, b) => {
      if (sortBy === "role") {
        const roleA = lang === "zh" ? a.roleZh : a.role;
        const roleB = lang === "zh" ? b.roleZh : b.role;
        return roleA.localeCompare(roleB);
      }
      if (sortBy === "mentions") {
        return (
          (mentionCountByCharacterId.get(b.id) ?? 0) -
          (mentionCountByCharacterId.get(a.id) ?? 0)
        );
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
    const ageGroupOrder = ["<15", "15-19", "20-24", "25-29", "30+"];
    const ageGroupMap: Record<string, CharList> = Object.fromEntries(
      ageGroupOrder.map((g) => [g, { count: 0, chars: [] }]),
    );
    const unknownAgeChars: typeof characters = [];

    characters.forEach((c) => {
      if (c.origin === "—") {
        unknownOriginChars.push(c);
      } else {
        if (!originMap[c.origin]) originMap[c.origin] = { count: 0, chars: [] };
        originMap[c.origin].count++;
        originMap[c.origin].chars.push(c);
      }
      rolesCount[c.role] = (rolesCount[c.role] || 0) + 1;

      // Parse Age
      const ageStr = c.age.replace("~", "").replace("+", "").trim();
      const age = parseInt(ageStr);
      if (!isNaN(age)) {
        let bucket: string;
        if (age < 15) bucket = "<15";
        else if (age <= 19) bucket = "15-19";
        else if (age <= 24) bucket = "20-24";
        else if (age <= 29) bucket = "25-29";
        else bucket = "30+";
        ageGroupMap[bucket].count++;
        ageGroupMap[bucket].chars.push(c);
      } else {
        unknownAgeChars.push(c);
      }
    });

    const maxOriginCount = Math.max(
      ...Object.values(originMap).map((v) => v.count),
      unknownOriginChars.length,
      1,
    );
    const topOrigins = [
      ...Object.entries(originMap)
        .sort((a, b) => b[1].count - a[1].count)
        .map(([name, { count, chars }]) => ({
          name,
          count,
          chars,
          percentage: Math.round((count / maxOriginCount) * 100),
        })),
      ...(unknownOriginChars.length > 0
        ? [
          {
            name: "Unknown",
            count: unknownOriginChars.length,
            chars: unknownOriginChars,
            percentage: Math.round(
              (unknownOriginChars.length / maxOriginCount) * 100,
            ),
          },
        ]
        : []),
    ];

    const maxRoleCount = Math.max(...Object.values(rolesCount), 1);
    const topRoles = Object.entries(rolesCount)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({
        name,
        count,
        percentage: Math.round((count / maxRoleCount) * 100),
      }));

    const maxAgeCount = Math.max(
      ...Object.values(ageGroupMap).map((v) => v.count),
      unknownAgeChars.length,
      1,
    );
    const ageData = [
      ...ageGroupOrder.map((group) => ({
        group,
        ...ageGroupMap[group],
        percentage: Math.round((ageGroupMap[group].count / maxAgeCount) * 100),
      })),
      ...(unknownAgeChars.length > 0
        ? [
          {
            group: "?",
            count: unknownAgeChars.length,
            chars: unknownAgeChars,
            percentage: Math.round(
              (unknownAgeChars.length / maxAgeCount) * 100,
            ),
          },
        ]
        : []),
    ];

    return { topOrigins, topRoles, ageData };
  }, []);

  const DRINKING_KEYWORDS = [
    "酒令",
    "行令",
    "罚酒",
    "猜拳",
    "猜枚",
    "飞花令",
    "酒筹",
  ];
  const WORDGAME_KEYWORDS = [
    "灯谜",
    "联句",
    "分韵",
    "赋诗",
    "拆字",
    "射覆",
    "诗谜",
    "猜谜",
  ];
  const MATURE_KEYWORDS = [
    "奸",
    "嫖",
    "云雨",
    "行房",
    "幸了",
    "土窑子",
    "春宫",
    "淫欲",
  ];

  const chapterStats = useMemo(() => {
    return chapters
      .filter((ch) => ch.id >= 1)
      .map((ch) => {
        const chineseChars = (ch.content.match(/[\u4e00-\u9fff]/g) ?? [])
          .length;
        const englishText = (translationMap[ch.id] ?? []).join(" ");
        const englishWords = (
          englishText.match(/\b[A-Za-z]+(?:'[A-Za-z]+)?\b/g) ?? []
        ).length;
        const paragraphs = ch.content
          .split(/\n\n+/)
          .filter((p) => p.trim().length > 0).length;
        const conversations = (ch.content.match(/[「]/g) ?? []).length;
        const works = new Set(
          (ch.content.match(/《[^》\n]{1,40}》/g) ?? []).map((w) => w.trim()),
        );
        const hasDrinking = DRINKING_KEYWORDS.some((k) =>
          ch.content.includes(k),
        );
        const hasWordGame = WORDGAME_KEYWORDS.some((k) =>
          ch.content.includes(k),
        );
        const hasMature = MATURE_KEYWORDS.some((k) => ch.content.includes(k));
        return {
          id: ch.id,
          title: ch.title,
          chineseChars,
          englishWords,
          paragraphs,
          conversations,
          worksMentioned: works.size,
          hasDrinking,
          hasWordGame,
          hasMature,
        };
      });
  }, []);

  const allWorksCited = useMemo(() => {
    const workMap = new Map<string, number>();
    chapters
      .filter((ch) => ch.id >= 1)
      .forEach((ch) => {
        const works = new Set(
          (ch.content.match(/《[^》\n]{1,40}》/g) ?? []).map((w) => w.trim()),
        );
        works.forEach((w) => workMap.set(w, (workMap.get(w) ?? 0) + 1));
      });
    return Array.from(workMap.entries()).sort((a, b) => b[1] - a[1]);
  }, []);

  const worksCitedByCategory = useMemo(() => {
    const groups = new Map<string, Array<[string, number]>>();
    for (const entry of allWorksCited) {
      const category = categorizeWork(entry[0].replace(/《|》/g, ""));
      const list = groups.get(category);
      if (list) list.push(entry);
      else groups.set(category, [entry]);
    }
    return WORK_CATEGORY_ORDER.filter((category) => groups.has(category)).map(
      (category) => ({
        category,
        label: WORK_CATEGORY_LABELS[category],
        works: groups.get(category)!,
      }),
    );
  }, [allWorksCited]);

  const locationsByType = useMemo(() => {
    const chapterList = chapters.filter((ch) => ch.id >= 1);
    const entries = novelLocations
      .map((location) => {
        const chapterIds = chapterList
          .filter((chapter) =>
            location.searchTokens.some((token) =>
              chapter.content.includes(token),
            ),
          )
          .map((chapter) => chapter.id);
        return { ...location, chapterIds };
      })
      .filter((location) => location.chapterIds.length > 0)
      .sort(
        (a, b) =>
          b.chapterIds.length - a.chapterIds.length ||
          a.name.localeCompare(b.name),
      );

    return locationTypeOrder
      .map((type) => ({
        type,
        label: locationTypeLabels[type],
        locations: entries.filter((location) => location.type === type),
      }))
      .filter((group) => group.locations.length > 0);
  }, []);

  // --- Permalinks: keep the URL hash in sync with the open panel, and open
  // --- the right panel when a deep link is pasted or navigated to.
  const applyDeepLink = useCallback(
    (link: DeepLink) => {
      if (link.lang) {
        setLang(link.lang);
      }
      switch (link.kind) {
        case "character": {
          const character = characters.find((c) => c.id === link.id);
          if (character) setSelectedCharacter(character);
          break;
        }
        case "chapter": {
          const chapter = chapters.find((c) => c.id === link.id);
          if (chapter) setSelectedChapter(chapter);
          break;
        }
        case "garden": {
          const garden = getGardenById(link.id);
          if (garden) setSelectedGarden(garden);
          break;
        }
        case "location": {
          for (const group of locationsByType) {
            const location = group.locations.find((l) => l.id === link.id);
            if (location) {
              setSelectedLocation(location);
              break;
            }
          }
          break;
        }
        case "work": {
          if (worksData[link.key]) setSelectedWork(link.key);
          break;
        }
        case "question": {
          if (questions.some((q) => q.slug === link.slug)) {
            setSelectedQuestion(link.slug);
          }
          break;
        }
        case "lacunae": {
          setActiveLacunaChapter(link.chapter);
          break;
        }
      }
    },
    [locationsByType],
  );

  useEffect(() => {
    const onHashChange = () => {
      const link = parseHash(window.location.hash);
      if (link) applyDeepLink(link);
    };
    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [applyDeepLink]);

  // Panels can stack (e.g. a character opened from within a chapter); the
  // hash reflects the most specific one so "Cite this page" stays accurate.
  const currentDeepLink: DeepLink | null = useMemo(() => {
    // Order mirrors modal stacking (later-rendered modals sit on top).
    if (selectedQuestion) return { kind: "question", slug: selectedQuestion, lang };
    if (activeLacunaChapter !== null)
      return { kind: "lacunae", chapter: activeLacunaChapter, lang };
    if (selectedLocation) return { kind: "location", id: selectedLocation.id, lang };
    if (selectedWork) return { kind: "work", key: selectedWork, lang };
    if (selectedGarden) return { kind: "garden", id: selectedGarden.id, lang };
    if (selectedCharacter) return { kind: "character", id: selectedCharacter.id, lang };
    if (selectedChapter) return { kind: "chapter", id: selectedChapter.id, lang };
    return null;
  }, [
    selectedCharacter,
    selectedWork,
    selectedGarden,
    selectedLocation,
    selectedQuestion,
    activeLacunaChapter,
    selectedChapter,
    lang,
  ]);

  useEffect(() => {
    const target = formatHash(currentDeepLink);
    if (window.location.hash === target) return;
    // replaceState avoids polluting history and does not refire hashchange.
    history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search + target,
    );
  }, [currentDeepLink]);

  const [chapterSortMode, setChapterSortMode] = useState<
    "longest" | "shortest" | "chapter" | "talkative" | "works"
  >("longest");

  const downloadTxt = (filename: string, content: string) => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const chapterTxtFilename = (id: number) =>
    id === 0 ? "00-preface.txt" : `${String(id).padStart(2, "0")}.txt`;

  const downloadChinese = () => {
    const text = chapters
      .map((ch) => `${ch.title}\n\n${ch.content}`)
      .join("\n\n\n");
    downloadTxt("pinhua-baojian-chinese.txt", text);
  };

  const downloadEnglish = () => {
    const text = chapters
      .map((ch) => {
        const title =
          ch.id === 0
            ? "Preface"
            : `Chapter ${ch.id} — ${chapterTitleTranslations[ch.id] || ch.title}`;
        const paras = (translationMap[ch.id] ?? []).join("\n\n");
        return `${title}\n\n${paras}`;
      })
      .join("\n\n\n");
    downloadTxt("pinhua-baojian-english.txt", text);
  };

  const downloadInterleaved = () => {
    const text = chapters
      .map((ch) => {
        const zhTitle = ch.title;
        const enTitle =
          ch.id === 0
            ? "Preface"
            : `Chapter ${ch.id} — ${chapterTitleTranslations[ch.id] || ch.title}`;
        const zhParas = ch.content.split(/\n\n+/).filter((p) => p.trim());
        const enParas = translationMap[ch.id] ?? [];
        const pairs = zhParas
          .map((zhP, i) => `${zhP}${enParas[i] ? `\n\n${enParas[i]}` : ""}`)
          .join("\n\n");
        return `${zhTitle} / ${enTitle}\n\n${pairs}`;
      })
      .join("\n\n\n");
    downloadTxt("pinhua-baojian-bilingual.txt", text);
  };

  const downloadJSON = () => {
    const data = chapters.map((ch) => {
      const chapterId = ch.id;
      const isPreface = chapterId === 0;

      const titleZh = ch.title;
      const titleEn = isPreface
        ? "Preface"
        : `Chapter ${chapterId} — ${chapterTitleTranslations[chapterId] || titleZh}`;

      const summaryZh = chapterSummaries[chapterId]?.zh || "";
      const summaryEn = chapterSummaries[chapterId]?.en || "";

      const zhParas = ch.content.split(/\n\n+/).filter((p) => p.trim());
      const enParas = translationMap[chapterId] || [];

      const chapterObj: any = {
        "Chapter number": isPreface ? 0 : chapterId,
        "chapter title Chinese": titleZh,
        "chapter title English": titleEn,
        "summary Chinese": summaryZh,
        "summary English": summaryEn,
      };

      for (let i = 0; i < Math.max(zhParas.length, enParas.length); i++) {
        if (zhParas[i]) chapterObj[`paragraph ${i + 1} Chinese`] = zhParas[i];
        if (enParas[i]) chapterObj[`paragraph ${i + 1} English`] = enParas[i];
      }

      return chapterObj;
    });

    const text = JSON.stringify(data, null, 2);
    const blob = new Blob([text], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const view = window.open(url, "_blank", "noopener,noreferrer");
    if (view) {
      window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
    } else {
      URL.revokeObjectURL(url);
      downloadTxt("pinhua-baojian-full.json", text);
    }
  };

  const scrollToSection = (id: string) => {
    if (!mobileMenuOpen) {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    setMobileMenuOpen(false);
    window.setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const openContents = () => {
    setSelectedChapter({
      id: -1,
      title: "目录",
      content: chapters
        .filter((c) => c.id > 0)
        .map((c) => c.title)
        .join("\n"),
    });
    setMobileMenuOpen(false);
  };

  const mobileSections = [
    { id: "overview", label: lang === "zh" ? "总览" : "Overview", icon: Home },
    {
      id: "network",
      label: lang === "zh" ? "关系网络" : "Network",
      icon: Network,
    },
    {
      id: "characters",
      label: lang === "zh" ? "人物" : "Characters",
      icon: Users,
    },
    {
      id: "chapters",
      label: lang === "zh" ? "章节" : "Chapters",
      icon: BookOpen,
    },
    { id: "hometown-map", label: lang === "zh" ? "地图" : "Map", icon: MapIcon },
  ];

  const mobileMenuSections = [
    ...mobileSections,
    {
      id: "stats",
      label: lang === "zh" ? "统计" : "Statistics",
      icon: Activity,
    },
    { id: "works", label: lang === "zh" ? "引书" : "Works Cited", icon: Book },
    {
      id: "hometown-map",
      label: lang === "zh" ? "分布地图" : "Distribution Map",
      icon: MapIcon,
    },
    {
      id: "downloads",
      label: lang === "zh" ? "下载" : "Download",
      icon: Download,
    },
    {
      id: "questions",
      label: lang === "zh" ? "问题" : "Questions",
      icon: BookOpen,
    },
  ];

  const hasOpenModal = Boolean(
    selectedChapter ||
    selectedCharacter ||
    selectedGarden ||
    selectedLocation ||
    selectedWork ||
    activeLacunaChapter !== null ||
    selectedQuestion !== null,
  );
  const hasOpenOverlay = hasOpenModal || mobileMenuOpen;

  // True while a modal is stacked above the chapter reader, so the reader's
  // own keyboard shortcuts stay quiet.
  const readerObscured = Boolean(
    selectedCharacter ||
    selectedGarden ||
    selectedLocation ||
    selectedWork ||
    activeLacunaChapter !== null ||
    selectedQuestion !== null,
  );

  const [lastReadPosition, setLastReadPosition] = useState(() =>
    readLastReadingPosition(),
  );
  useEffect(() => {
    if (selectedChapter === null) setLastReadPosition(readLastReadingPosition());
  }, [selectedChapter]);
  const continueReadingChapter = lastReadPosition
    ? chapters.find((c) => c.id === lastReadPosition.id) ?? null
    : null;

  // Escape closes the topmost open overlay (popovers handle Escape themselves
  // and call preventDefault, so they win over this handler).
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      const closeTopmost = (): boolean => {
        if (selectedWork) {
          setSelectedWork(null);
        } else if (activeLacunaChapter !== null) {
          setActiveLacunaChapter(null);
        } else if (selectedQuestion !== null) {
          setSelectedQuestion(null);
        } else if (selectedCharacter) {
          setSelectedCharacter(null);
        } else if (selectedGarden) {
          setSelectedGarden(null);
        } else if (selectedLocation) {
          setSelectedLocation(null);
        } else if (selectedChapter) {
          setSelectedChapter(null);
        } else if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        } else {
          return false;
        }
        return true;
      };
      if (closeTopmost()) event.preventDefault();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [
    selectedWork,
    activeLacunaChapter,
    selectedQuestion,
    selectedCharacter,
    selectedGarden,
    selectedLocation,
    selectedChapter,
    mobileMenuOpen,
  ]);

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
      target instanceof Element &&
      target.closest('[data-overlay-scroll="true"]');

    const preventScrollOutsideOverlay = (event: WheelEvent | TouchEvent) => {
      if (!allowScrollTarget(event.target)) {
        event.preventDefault();
      }
    };
    const preventKeyboardScrollOutsideOverlay = (event: KeyboardEvent) => {
      const scrollKeys = new Set([
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ]);
      if (!scrollKeys.has(event.key)) return;
      if (!allowScrollTarget(event.target)) {
        event.preventDefault();
      }
    };

    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.left = "0";
    bodyStyle.right = "0";
    bodyStyle.width = "100%";
    // Keep layout stable when scrollbar disappears during modal lock.
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      bodyStyle.paddingRight = `${scrollbarWidth}px`;
    }
    bodyStyle.overflow = "hidden";
    bodyStyle.overscrollBehavior = "none";
    htmlStyle.overflow = "hidden";
    htmlStyle.position = "fixed";
    htmlStyle.width = "100%";
    htmlStyle.overscrollBehavior = "none";

    window.addEventListener("wheel", preventScrollOutsideOverlay, {
      passive: false,
    });
    window.addEventListener("touchmove", preventScrollOutsideOverlay, {
      passive: false,
    });
    window.addEventListener("keydown", preventKeyboardScrollOutsideOverlay, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", preventScrollOutsideOverlay);
      window.removeEventListener("touchmove", preventScrollOutsideOverlay);
      window.removeEventListener(
        "keydown",
        preventKeyboardScrollOutsideOverlay,
      );
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
    <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center text-[var(--ink-dim-text)] text-sm font-sans tracking-wide">Loading...</div>}>
      <div className="min-h-screen font-sans text-[var(--ink-main)] selection:bg-amber-900/20">
        {/* Header */}
        <div
          id="overview"
          className="max-w-[1800px] mx-auto w-full px-2 sm:px-5 md:px-4 lg:px-5 scroll-mt-24 md:sticky md:top-0 md:z-30 md:bg-[var(--body-bg)]/95 md:backdrop-blur-sm overflow-visible"
        >
          <header className="parchment mt-2 sm:mt-5 mb-2 px-4 sm:px-8 md:px-6 lg:px-10 py-4 md:py-3 lg:py-4 md:min-h-[4.5rem] lg:min-h-[6rem] flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4 rounded-sm border-double border-4 border-[var(--paper-border)] overflow-visible">
            <div className="hidden md:block flex-1" />
            <div className="flex flex-col items-center text-center gap-0.5 sm:gap-1 flex-1">
              <h1 className="flex flex-col items-center gap-0.5 sm:gap-1 leading-tight">
                <span className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold tracking-tight text-[var(--ink-title)]">
                  {t.titleEn}
                </span>
                <span className="text-base sm:text-lg md:text-lg lg:text-xl font-bold font-hans tracking-wide text-[var(--ink-dim-text)]">
                  {t.titleZh}
                </span>
              </h1>
              <p
                className={`text-[10px] sm:text-[11px] italic text-[var(--accent)] tracking-wide ${lang === "zh" ? "font-hans" : ""}`}
              >
                {t.siteSubtitle}
              </p>
            </div>
            <div className="hidden md:flex flex-1 justify-end items-center gap-2">
              <NavMenuDropdown
                lang={lang}
                sections={mobileMenuSections}
                onScrollToSection={scrollToSection}
                onOpenContents={openContents}
                onOpenChapter={() => {
                  const firstChapter = chapters.find(
                    (chapter) => chapter.id === 1,
                  );
                  if (firstChapter) setSelectedChapter(firstChapter);
                }}
              />
              <ThemeToggle lang={lang} />
              <LanguageSwitch lang={lang} setLang={setLang} />
            </div>
          </header>
        </div>

        <div className="md:hidden sticky top-0 z-30 px-2 py-1 bg-[var(--body-bg)]/95 backdrop-blur-sm border-b border-[var(--paper-border)]/80">
          <nav
            className="parchment rounded-sm border border-[var(--paper-border)] p-0.5 sm:p-1 flex items-center gap-1 sm:gap-2 shadow-md"
            aria-label={lang === "zh" ? "移动导航" : "Mobile navigation"}
          >
            {mobileSections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="flex-1 min-w-0 h-8 sm:h-10 rounded-sm flex flex-col items-center justify-center gap-0.5 text-[var(--ink-dim-text)] hover:bg-[var(--accent)]/8 hover:text-[var(--accent)] transition-colors"
              >
                <Icon size={14} className="sm:w-[16px] sm:h-[16px]" />
                <span className="text-[7px] sm:text-[9px] font-bold leading-none uppercase tracking-tighter truncate max-w-full">
                  {label}
                </span>
              </button>
            ))}
            <LanguageSwitch
              lang={lang}
              setLang={setLang}
              className="shrink-0 mx-0.5 sm:mx-1 scale-90 sm:scale-100"
            />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-sm bg-[var(--accent)] text-[var(--paper-bg)] flex items-center justify-center border border-[var(--accent)] shadow-sm shrink-0 cursor-pointer"
              aria-label={lang === "zh" ? "打开全部菜单" : "Open full menu"}
            >
              <Menu size={16} />
            </button>
          </nav>
        </div>

        <main className="max-w-[1800px] mx-auto p-2 sm:p-4 md:p-4 lg:p-5 grid grid-cols-1 md:grid-cols-[minmax(200px,240px)_1fr] lg:grid-cols-[240px_1fr_260px] xl:grid-cols-[280px_1fr_300px] gap-4 md:gap-5 lg:gap-6">
          {/* Mobile Landscape Illustration */}
          <div className="block md:hidden">
            <MainInkLandscape />
          </div>
          {/* Left Sidebar */}
          <aside className="flex flex-col gap-4 md:gap-5 h-fit order-2 md:order-1 md:self-start">
            <div className="hidden md:block">
              <MainInkLandscape />
            </div>
            <div
              id="stats"
              className="relative parchment p-4 sm:p-6 md:p-5 lg:p-8 rounded-sm flex flex-col gap-6 md:gap-8 lg:gap-10 border-double border-4 border-[var(--paper-border)] scroll-mt-24"
            >
              {/* Chapter Statistics */}
              {(() => {
                const totalChineseChars = chapterStats.reduce(
                  (s, c) => s + c.chineseChars,
                  0,
                );
                const totalEnglishWords = chapterStats.reduce(
                  (s, c) => s + c.englishWords,
                  0,
                );
                const totalParagraphs = chapterStats.reduce(
                  (s, c) => s + c.paragraphs,
                  0,
                );
                const totalConversations = chapterStats.reduce(
                  (s, c) => s + c.conversations,
                  0,
                );
                const totalWorks = chapterStats.reduce(
                  (s, c) => s + c.worksMentioned,
                  0,
                );
                const avgChineseChars = Math.round(
                  totalChineseChars / chapterStats.length,
                );
                const avgEnglishWords = Math.round(
                  totalEnglishWords / chapterStats.length,
                );
                const avgParagraphs = Math.round(
                  totalParagraphs / chapterStats.length,
                );
                const avgConversations = Math.round(
                  totalConversations / chapterStats.length,
                );
                const avgWorks =
                  Math.round((totalWorks / chapterStats.length) * 10) / 10;
                const maxChineseChars = Math.max(
                  ...chapterStats.map((c) => c.chineseChars),
                );
                const maxConversations = Math.max(
                  ...chapterStats.map((c) => c.conversations),
                );
                const maxWorks = Math.max(
                  ...chapterStats.map((c) => c.worksMentioned),
                  1,
                );
                const sorted = [...chapterStats].sort((a, b) =>
                  chapterSortMode === "longest"
                    ? b.chineseChars - a.chineseChars
                    : chapterSortMode === "shortest"
                      ? a.chineseChars - b.chineseChars
                      : chapterSortMode === "talkative"
                        ? b.conversations - a.conversations
                        : chapterSortMode === "works"
                          ? b.worksMentioned - a.worksMentioned
                          : a.id - b.id,
                );
                const zhCountLabel = lang === "zh" ? "中文字" : "CN chars";
                const enCountLabel = lang === "zh" ? "英文词" : "EN words";
                const paraLabel = lang === "zh" ? "段" : "para";
                return (
                  <div>
                    <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--ink-dim-text)] mb-6 font-bold border-b border-[var(--paper-border)] pb-2">
                      {lang === "zh" ? "章回统计" : "Chapter Statistics"}
                    </h2>

                    {/* Summary row */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {[
                        {
                          label: lang === "zh" ? "中文总字数" : "Total CN chars",
                          value: totalChineseChars.toLocaleString(),
                        },
                        {
                          label: lang === "zh" ? "英文总词数" : "Total EN words",
                          value: totalEnglishWords.toLocaleString(),
                        },
                        {
                          label: lang === "zh" ? "总段落" : "Total para",
                          value: totalParagraphs.toLocaleString(),
                        },
                        {
                          label: lang === "zh" ? "总对话" : "Total dialogue",
                          value: totalConversations.toLocaleString(),
                        },
                        {
                          label: lang === "zh" ? "总书目提及" : "Total works",
                          value: totalWorks.toLocaleString(),
                        },
                        {
                          label: lang === "zh" ? "每回均值" : "Avg / chapter",
                          value: `${avgChineseChars.toLocaleString()} ${zhCountLabel} · ${avgEnglishWords.toLocaleString()} ${enCountLabel} · ${avgParagraphs} ${paraLabel} · ${avgConversations} ${lang === "zh" ? "对话" : "dlg"} · ${avgWorks} ${lang === "zh" ? "书" : "works"}`,
                        },
                      ].map(({ label, value }) => (
                        <div
                          key={label}
                          className="bg-black/3 rounded-sm p-2 border border-[var(--paper-border)]/50"
                        >
                          <p className="text-[8px] uppercase tracking-widest text-[var(--ink-dim-text)] mb-0.5 leading-tight">
                            {label}
                          </p>
                          <p className="text-[10px] font-bold text-[var(--ink-title)] font-sans leading-tight">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Sparkline */}
                    <p className="text-[8px] uppercase tracking-widest text-[var(--ink-dim-text)] mb-1.5">
                      {lang === "zh"
                        ? "各回中文字数"
                        : "Chinese chars per chapter"}
                    </p>
                    <div className="flex items-end gap-[1.5px] h-12 mb-5">
                      {chapterStats.map((c) => {
                        const ch = chapters.find((ch) => ch.id === c.id)!;
                        return (
                          <div
                            key={c.id}
                            className="flex-1 rounded-t-[1px] cursor-pointer transition-opacity hover:opacity-60"
                            style={{
                              height: `${Math.max(8, Math.round((c.chineseChars / maxChineseChars) * 100))}%`,
                              backgroundColor: "var(--accent)",
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
                      {(
                        [
                          { key: "chapter", labelEn: "Ch #", labelZh: "回序" },
                          { key: "longest", labelEn: "Longest", labelZh: "最长" },
                          {
                            key: "shortest",
                            labelEn: "Shortest",
                            labelZh: "最短",
                          },
                          {
                            key: "talkative",
                            labelEn: "Chattiest",
                            labelZh: "最多对话",
                          },
                          {
                            key: "works",
                            labelEn: "Most works cited",
                            labelZh: "最多书目",
                          },
                        ] as const
                      ).map(({ key, labelEn, labelZh }) => (
                        <button
                          key={key}
                          onClick={() => setChapterSortMode(key)}
                          className={`text-[8px] px-1.5 py-1 rounded-sm border uppercase tracking-widest font-bold transition-all ${chapterSortMode === key
                            ? "bg-[var(--accent)] text-[var(--paper-bg)] border-[var(--accent)]"
                            : "border-[var(--paper-border)] text-[var(--ink-dim-text)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                            }`}
                        >
                          {lang === "zh" ? labelZh : labelEn}
                        </button>
                      ))}
                    </div>
                    {/* Badge legend */}
                    <div className="flex gap-2 mb-3 flex-wrap">
                      <span className="text-[8px] text-[var(--ink-dim-text)] italic">
                        {lang === "zh" ? "标记：" : "Tags:"}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[8px] text-amber-700">
                        <span className="px-1 rounded-sm bg-amber-100 border border-amber-300 font-bold font-sans leading-tight">
                          {lang === "zh" ? "令" : "G"}
                        </span>
                        {lang === "zh" ? "酒令" : "Drinking game"}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[8px] text-sky-700">
                        <span className="px-1 rounded-sm bg-sky-100 border border-sky-300 font-bold font-sans leading-tight">
                          {lang === "zh" ? "诗" : "P"}
                        </span>
                        {lang === "zh" ? "文字游戏" : "Word game"}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[8px] text-rose-700">
                        <span className="px-1 rounded-sm bg-rose-100 border border-rose-300 font-bold font-sans leading-tight">
                          {lang === "zh" ? "艳" : "M"}
                        </span>
                        {lang === "zh" ? "成人内容" : "Mature"}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {sorted.map((c) => {
                        const ch = chapters.find((ch) => ch.id === c.id)!;
                        return (
                          <button
                            key={c.id}
                            onClick={() => setSelectedChapter(ch)}
                            className="w-full text-left group px-2 py-2 rounded-sm border border-[var(--paper-border)]/40 hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/3 transition-colors"
                          >
                            <div className="flex justify-between items-center text-[10px] mb-1">
                              <span className="text-[var(--ink-dim-text)] group-hover:text-[var(--accent)] transition-colors font-bold">
                                Ch.{c.id}
                              </span>
                              <span className="text-[var(--ink-dim-text)] font-sans text-right leading-tight">
                                <span className="block">
                                  {c.chineseChars.toLocaleString()} {zhCountLabel}{" "}
                                  · {c.englishWords.toLocaleString()}{" "}
                                  {enCountLabel}
                                </span>
                                <span className="block">
                                  {c.conversations}{" "}
                                  {lang === "zh" ? "对话" : "dlg"} ·{" "}
                                  {c.worksMentioned}{" "}
                                  {lang === "zh" ? "书目" : "works"}
                                </span>
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 mb-1.5">
                              {c.hasDrinking && (
                                <span
                                  title={lang === "zh" ? "酒令" : "Drinking game"}
                                  className="inline-block text-[8px] px-1.5 py-0.5 rounded-sm bg-amber-100 text-amber-700 border border-amber-300 leading-tight font-bold font-sans"
                                >
                                  {lang === "zh" ? "令" : "G"}
                                </span>
                              )}
                              {c.hasWordGame && (
                                <span
                                  title={lang === "zh" ? "文字游戏" : "Word game"}
                                  className="inline-block text-[8px] px-1.5 py-0.5 rounded-sm bg-sky-100 text-sky-700 border border-sky-300 leading-tight font-bold font-sans"
                                >
                                  {lang === "zh" ? "诗" : "P"}
                                </span>
                              )}
                              {c.hasMature && (
                                <span
                                  title={
                                    lang === "zh" ? "成人内容" : "Mature content"
                                  }
                                  className="inline-block text-[8px] px-1.5 py-0.5 rounded-sm bg-rose-100 text-rose-700 border border-rose-300 leading-tight font-bold font-sans"
                                >
                                  {lang === "zh" ? "艳" : "M"}
                                </span>
                              )}
                            </div>
                            <div className="h-1 bg-black/5 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{
                                  width: `${Math.round((c.chineseChars / maxChineseChars) * 100)}%`,
                                }}
                                className="h-full bg-[var(--accent)] opacity-50 group-hover:opacity-70 transition-opacity"
                                title={
                                  lang === "zh"
                                    ? `第${c.id}回：${c.chineseChars.toLocaleString()} 中文字`
                                    : `Chapter ${c.id}: ${c.chineseChars.toLocaleString()} Chinese characters`
                                }
                              />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}

              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--ink-dim-text)] mb-6 font-bold border-b border-[var(--paper-border)] pb-2">
                  {t.ageDist}
                </h2>
                <div className="space-y-4">
                  {stats.ageData.map((stat, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between text-[12px]">
                        <span className="font-sans">
                          {stat.group === "?"
                            ? lang === "zh"
                              ? "未知"
                              : "Unknown"
                            : stat.group}
                        </span>
                        <span className="text-[var(--ink-dim-text)] flex-shrink-0">
                          {stat.count}
                        </span>
                      </div>
                      <div className="h-1 bg-black/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.percentage}%` }}
                          className={`h-full opacity-60 ${stat.group === "?" ? "bg-[var(--ink-dim-text)]" : "bg-[var(--accent)]"}`}
                        />
                      </div>
                      <div className="flex flex-wrap gap-1 pt-0.5">
                        {stat.chars.map((c) => (
                          <button
                            key={c.id}
                            onClick={() => setSelectedCharacter(c)}
                            className="text-[9px] px-1.5 py-0.5 bg-black/5 hover:bg-[var(--accent)]/15 text-[var(--ink-dim-text)] hover:text-[var(--accent)] rounded-sm transition-colors font-sans leading-tight"
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
                <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--ink-dim-text)] mb-6 font-bold border-b border-[var(--paper-border)] pb-2">
                  {t.roleDist}
                </h2>
                <div className="space-y-4">
                  {stats.topRoles.map((stat, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between text-[12px]">
                        <span className="capitalize truncate pr-2 font-hans">
                          {lang === "zh"
                            ? characters.find((c) => c.role === stat.name)
                              ?.roleZh || stat.name
                            : stat.name}
                        </span>
                        <span className="text-[var(--ink-dim-text)] flex-shrink-0">
                          {stat.count}
                        </span>
                      </div>
                      <div className="h-1 bg-black/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.percentage}%` }}
                          className="h-full bg-[var(--ink-title)] opacity-40"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <GardenStroll />

            {/* Questions Sidebar */}
            <div
              id="questions"
              className="relative parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[var(--paper-border)] scroll-mt-24"
            >
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--ink-dim-text)] mb-4 font-bold border-b border-[var(--paper-border)] pb-2">
                {lang === "zh" ? "问题" : "Questions"}
              </h2>
              <div className="space-y-2">
                {questions.map((q) => (
                  <button
                    key={q.slug}
                    onClick={() => setSelectedQuestion(q.slug)}
                    className="w-full text-left p-3 rounded-sm border border-[var(--paper-border)]/40 bg-black/5 hover:bg-amber-700/10 hover:border-amber-700/40 transition-colors cursor-pointer"
                  >
                    <p className="text-[11px] font-bold text-[var(--ink-title)] leading-relaxed">
                      {lang === "zh" ? q.questionZh : q.questionEn}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <section className="flex flex-col gap-4 md:gap-5 order-1 md:order-2 min-w-0">

            {/* About Section */}
            <div id="about" className="relative parchment p-5 sm:p-8 rounded-sm border-double border-4 border-[var(--paper-border)] scroll-mt-24">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--ink-dim-text)] mb-4 font-bold border-b border-[var(--paper-border)] pb-2">
                {lang === "en" ? "About Precious Vibe" : "关于品花宝境"}
              </h2>
              <p className="text-sm text-[var(--ink-dim)] leading-relaxed mb-6 font-hans">
                {lang === "en"
                  ? "Precious Vibe (品花宝境) is an interactive scholarly database for Pinhua Baojian (品花宝鉴), a classic Qing-dynasty Chinese novel. It brings together annotated chapter reading, character profiles, relationship mapping, place data, and literary citations into a single integrated research tool."
                  : "品花宝境是针对清代经典小说《品花宝鉴》打造的交互式学术数据库，将注释章节阅读、人物档案、人物关系图谱、地点数据及文学引用整合为一体，服务于研究与阅读。"}
              </p>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {/* Chapter Reader */}
                <div className="flex gap-3 items-baseline py-2.5 border-t border-[var(--paper-border)]/60 first:border-t-0">
                  <BookOpen size={12} className="text-[var(--accent)] shrink-0 translate-y-[1px]" />
                  <div>
                    <dt className="inline text-[11px] font-bold text-[var(--ink-dim-text)] uppercase tracking-wider mr-1">
                      {lang === "en" ? "Chapter Reader" : "章节阅读"}
                    </dt>
                    <dd className="inline text-[11px] text-[var(--ink-dim)]/75 leading-snug">
                      — {lang === "en"
                        ? "Read all 60 chapters in Chinese with aligned English translations and scene-level annotations."
                        : "阅读全部六十回原文，并附英文对照翻译与场景注释。"}
                    </dd>
                  </div>
                </div>
                {/* Character Database */}
                <div className="flex gap-3 items-baseline py-2.5 border-t border-[var(--paper-border)]/60 sm:first:border-t-0">
                  <Users size={12} className="text-[var(--accent)] shrink-0 translate-y-[1px]" />
                  <div>
                    <dt className="inline text-[11px] font-bold text-[var(--ink-dim-text)] uppercase tracking-wider mr-1">
                      {lang === "en" ? "Character Database" : "人物数据库"}
                    </dt>
                    <dd className="inline text-[11px] text-[var(--ink-dim)]/75 leading-snug">
                      — {lang === "en"
                        ? `Profiles for all ${characters.length} characters, with roles, aliases, chapter appearances, and mention counts.`
                        : `收录全部 ${characters.length} 位人物的角色、别名、登场章回及提及次数。`}
                    </dd>
                  </div>
                </div>
                {/* Relationship Network */}
                <div className="flex gap-3 items-baseline py-2.5 border-t border-[var(--paper-border)]/60">
                  <Network size={12} className="text-[var(--accent)] shrink-0 translate-y-[1px]" />
                  <div>
                    <dt className="inline text-[11px] font-bold text-[var(--ink-dim-text)] uppercase tracking-wider mr-1">
                      {lang === "en" ? "Relationship Network" : "人物关系网络"}
                    </dt>
                    <dd className="inline text-[11px] text-[var(--ink-dim)]/75 leading-snug">
                      — {lang === "en"
                        ? "Interactive force graph visualising social bonds, rivalries, and family ties across the cast."
                        : "互动力导向图，可视化展示全书人物的社交、对立与家族关系。"}
                    </dd>
                  </div>
                </div>
                {/* Gardens & Locations */}
                <div className="flex gap-3 items-baseline py-2.5 border-t border-[var(--paper-border)]/60">
                  <Leaf size={12} className="text-[var(--accent)] shrink-0 translate-y-[1px]" />
                  <div>
                    <dt className="inline text-[11px] font-bold text-[var(--ink-dim-text)] uppercase tracking-wider mr-1">
                      {lang === "en" ? "Integrated Map Feature" : "综合地图功能"}
                    </dt>
                    <dd className="inline text-[11px] text-[var(--ink-dim)]/75 leading-snug">
                      — {lang === "en"
                        ? "Character hometowns, named gardens, locations, and chapter-linked geography presented in one map feature."
                        : "人物籍贯、名园、地点与章回地理整合为一个地图功能。"}
                    </dd>
                  </div>
                </div>
                {/* Literary Citations */}
                <div className="flex gap-3 items-baseline py-2.5 border-t border-[var(--paper-border)]/60">
                  <Book size={12} className="text-[var(--accent)] shrink-0 translate-y-[1px]" />
                  <div>
                    <dt className="inline text-[11px] font-bold text-[var(--ink-dim-text)] uppercase tracking-wider mr-1">
                      {lang === "en" ? "Literary Citations" : "文学引用"}
                    </dt>
                    <dd className="inline text-[11px] text-[var(--ink-dim)]/75 leading-snug">
                      — {lang === "en"
                        ? "Every allusion to classical poetry and drama linked to its source work, with context snippets."
                        : "书中每处诗词典故均附来源及上下文片段，便于溯源考证。"}
                    </dd>
                  </div>
                </div>
                {/* Hometown Map */}
                <div className="flex gap-3 items-baseline py-2.5 border-t border-[var(--paper-border)]/60">
                  <MapIcon size={12} className="text-[var(--accent)] shrink-0 translate-y-[1px]" />
                  <div>
                    <dt className="inline text-[11px] font-bold text-[var(--ink-dim-text)] uppercase tracking-wider mr-1">
                      {lang === "en" ? "Hometowns, Gardens & Locations" : "籍贯、园林与地点"}
                    </dt>
                    <dd className="inline text-[11px] text-[var(--ink-dim)]/75 leading-snug">
                      — {lang === "en"
                        ? "An integrated map and index for character hometowns, gardens, and named locations."
                        : "整合人物籍贯、园林与命名地点的交互式地图与索引。"}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>



            {/* Network Graph Section */}
            <div id="network" className="scroll-mt-24">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--ink-dim-text)] mb-6 font-bold border-b border-[var(--paper-border)] pb-2">
                {lang === "en"
                  ? "Character Relationship Network"
                  : "人物关系网络图谱"}
              </h2>
              <p className="text-xs italic text-[var(--ink-dim-text)] mb-4">{t.subtitle}</p>
              <NetworkGraph
                characters={characters}
                relationships={relationships}
                lang={lang}
                onNodeClick={setSelectedCharacter}
                onFullscreenChange={setNetworkGraphFullscreen}
              />
            </div>

            {/* Search & Filters */}
            <div
              id="characters"
              className="relative parchment p-4 sm:p-6 rounded-sm flex flex-col gap-4 sm:gap-6 border-double border-4 border-[var(--paper-border)] scroll-mt-24"
            >
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--ink-dim-text)]"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    className="w-full pl-10 pr-4 py-2 bg-white/30 border border-[var(--paper-border)] rounded-sm focus:outline-none focus:border-[var(--accent)]/50 transition-all text-sm italic font-hans"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 items-center bg-white/20 p-1 rounded-sm border border-[var(--paper-border)]">
                  <button
                    onClick={() => setSortBy("mentions")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all ${sortBy === "mentions"
                      ? "bg-[var(--accent)] text-[var(--paper-bg)]"
                      : "text-[var(--ink-dim-text)] hover:bg-black/5"
                      }`}
                  >
                    <BarChart2 size={12} />
                    {t.mentionSort}
                  </button>
                  <button
                    onClick={() => setSortBy("appearance")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all ${sortBy === "appearance"
                      ? "bg-[var(--accent)] text-[var(--paper-bg)]"
                      : "text-[var(--ink-dim-text)] hover:bg-black/5"
                      }`}
                  >
                    <Clock size={12} />
                    {t.chronology}
                  </button>
                  <button
                    onClick={() => setSortBy("role")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all ${sortBy === "role"
                      ? "bg-[var(--accent)] text-[var(--paper-bg)]"
                      : "text-[var(--ink-dim-text)] hover:bg-black/5"
                      }`}
                  >
                    <SortAsc size={12} />
                    {t.roleSort}
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-2.5 w-full pb-1 border-t border-[var(--paper-border)] pt-4">
                <button
                  onClick={() => setSelectedRole(null)}
                  className={`px-3.5 sm:px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all border whitespace-nowrap min-h-11 touch-manipulation ${!selectedRole
                    ? "bg-[var(--ink-title)] text-[var(--paper-bg)] border-[var(--ink-title)]"
                    : "bg-white/10 text-[var(--ink-dim-text)] border-[var(--paper-border)] hover:border-[var(--accent)]/30 active:opacity-80"
                    }`}
                >
                  {t.allRecords}
                </button>
                {roles.map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setSelectedRole(key)}
                    className={`px-3.5 sm:px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all border whitespace-nowrap font-hans min-h-11 touch-manipulation active:opacity-80 ${selectedRole === key
                      ? (ROLE_CHIP_ACTIVE[key] ?? ROLE_CHIP_ACTIVE.Other)
                      : (ROLE_CHIP_IDLE[key] ?? ROLE_CHIP_IDLE.Other) +
                      " hover:opacity-75"
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
                    mentionCount={
                      sortBy === "mentions"
                        ? mentionCountByCharacterId.get(char.id)
                        : undefined
                    }
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredCharacters.length === 0 && (
              <div className="parchment p-20 text-center rounded-sm border-double border-4 border-[var(--paper-border)]">
                <Search size={40} className="mx-auto mb-4 text-[var(--ink-dim-text)]" />
                <p className="text-[var(--ink-dim-text)] italic font-hans">{t.noRecords}</p>
              </div>
            )}
            <HometownMap
              characters={filteredCharacters}
              originStats={stats.topOrigins}
              gardens={gardens}
              locationsByType={locationsByType}
              lang={lang}
              onSelectGarden={setSelectedGarden}
              onSelectLocation={setSelectedLocation}
            />
          </section>

          {/* Right Sidebar - Chapters */}
          <aside className="order-3 md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5 h-fit lg:col-span-1 lg:self-start">
            <PlumBlossomBanquet />
            <div
              id="chapters"
              className="relative parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[var(--paper-border)] scroll-mt-24"
            >
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--ink-dim-text)] mb-6 font-bold border-b border-[var(--paper-border)] pb-2">
                {t.chapters}
              </h2>
              <div className="mb-6 space-y-2 pb-4 border-b border-[var(--paper-border)]">
                <p className="text-base font-bold font-hans text-[var(--ink-title)]">
                  {lang === "zh" ? "品花宝鉴" : "Pinhua Baojian"}
                </p>
                <p className="text-[11px] font-hans text-[var(--ink-dim-text)]">
                  {lang === "zh" ? "作者：陈森" : "Author: Chen Sen"}
                </p>
                <p className="text-[11px] font-hans text-[var(--ink-title)] leading-relaxed">
                  {lang === "en"
                    ? "Pinhua Baojian (also known as Yiqing Yishi and Qunhua Baojian) is a 60-chapter novel by Chen Sen of the Qing dynasty, depicting the culture of male entertainers. A native of Changzhou, Chen Sen repeatedly failed the imperial examinations and gave up around age 40. While living in Beijing he frequently associated with performers, gathering material for the novel."
                    : "《品花宝鉴》，亦作《怡情佚史》、《群花宝鉴》，清代陈森所著的一部描写狎优风气的长篇小说，共60回。陈森是常州人，科举常年不得意，40岁后放弃科举。他寓居北京时常与优伶交往，为日后的创作积累了素材。"}
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                {continueReadingChapter && (
                  <>
                    <button
                      type="button"
                      onClick={() => setSelectedChapter(continueReadingChapter)}
                      className="w-full flex items-center gap-2 px-2.5 py-2 rounded-sm border border-[var(--accent)]/40 bg-[var(--accent)]/8 hover:bg-[var(--accent)]/15 transition-colors text-left"
                    >
                      <BookOpen size={14} className="text-[var(--accent)] shrink-0" />
                      <span className="min-w-0">
                        <span className="block text-[8px] uppercase tracking-widest text-[var(--accent)] font-bold">
                          {lang === "zh" ? "继续阅读" : "Continue reading"}
                        </span>
                        <span className="block text-[11px] font-hans text-[var(--ink-title)] truncate">
                          {continueReadingChapter.id === 0
                            ? lang === "zh"
                              ? "序"
                              : "Preface"
                            : (lang === "zh" ? continueReadingChapter.title : (chapterTitleTranslations[continueReadingChapter.id] || continueReadingChapter.title))}
                        </span>
                      </span>
                    </button>
                    <div className="border-t border-[var(--paper-border)]/60 my-1" />
                  </>
                )}
                <button
                  onClick={() =>
                    setSelectedChapter({
                      id: -1,
                      title: "目录",
                      content: chapters
                        .filter((c) => c.id > 0)
                        .map((c) => c.title)
                        .join("\n"),
                    })
                  }
                  className="text-left p-2 rounded-sm border border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/60 transition-all group flex items-center gap-2 mb-1"
                >
                  <Book
                    size={12}
                    className="text-[var(--accent)]/60 group-hover:text-[var(--accent)] shrink-0"
                  />
                  <span className="text-[11px] font-hans font-bold text-[var(--accent)] leading-tight">
                    {lang === "en" ? "Contents" : "目录"}
                  </span>
                </button>
                {chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => setSelectedChapter(chapter)}
                    className="text-left p-2 rounded-sm border border-[var(--paper-border)]/30 hover:bg-[var(--accent)]/5 hover:border-[var(--accent)]/30 transition-all group flex items-center gap-2"
                  >
                    <Book
                      size={12}
                      className="text-[var(--accent)]/40 group-hover:text-[var(--accent)] shrink-0"
                    />
                    <span className="text-[11px] font-hans text-[var(--ink-title)] leading-tight">
                      {lang === "en"
                        ? chapter.id === 0
                          ? "Preface"
                          : `Ch. ${chapter.id} — ${chapterTitleTranslations[chapter.id] || chapter.title}`
                        : chapter.title}
                    </span>
                  </button>
                ))}
              </div>

            </div>

            <OperaNight />

            {/* Works Cited */}
            <div
              id="works"
              className="relative parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[var(--paper-border)] scroll-mt-24"
            >
              <div className="flex items-baseline justify-between border-b border-[var(--paper-border)] pb-2 mb-4">
                <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--ink-dim-text)] font-bold">
                  {lang === "zh" ? "引书与作品" : "Works Cited"}
                </h2>
                <span className="text-[10px] text-[var(--accent)] font-sans font-bold">
                  {allWorksCited.length} {lang === "zh" ? "部" : "unique"}
                </span>
              </div>
              <p className="text-[10px] text-[var(--ink-dim-text)] italic mb-4">
                {lang === "zh"
                  ? "分组根据作品描述自动推断；未注明者多为演出散出。"
                  : "Groups are inferred from work descriptions; unannotated titles are mostly performed scenes."}
              </p>
              <div className="space-y-5">
                {worksCitedByCategory.map(({ category, label, works }) => (
                  <div key={category}>
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--ink-dim-text)] font-bold">
                        {lang === "zh" ? label.zh : label.en}
                      </p>
                      <span className="text-[9px] text-[var(--accent)] font-sans font-bold">
                        {works.length}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {works.map(([work, count]) => {
                        const workKey = work.replace(/《|》/g, "");
                        const hasDetailedDescription =
                          worksData[workKey]?.descEn !==
                          "A literary work, opera scene, or book cited in Pinhua Baojian.";
                        return (
                          <button
                            key={work}
                            onClick={() => setSelectedWork(workKey)}
                            title={`${count} ${lang === "zh" ? "回" : count === 1 ? "chapter" : "chapters"}`}
                            className={`px-2 py-0.5 text-[10px] rounded-sm font-hans cursor-pointer transition-colors ${hasDetailedDescription
                              ? "border-2 border-[var(--accent)] bg-[#e8dcc4] text-[var(--accent)] font-bold shadow-sm hover:bg-[var(--paper-border)]"
                              : "border border-[var(--paper-border)] bg-[var(--paper-bg)]/80 text-[var(--ink-title)] hover:bg-[var(--paper-border)]/40"
                              }`}
                          >
                            {lang === "en" && WORK_ENGLISH_BY_CHINESE[workKey]
                              ? WORK_ENGLISH_BY_CHINESE[workKey]
                              : work}
                            {count > 1 && (
                              <span
                                className={`ml-1 text-[9px] font-sans ${hasDetailedDescription ? "text-[var(--ink-dim-text)]" : "text-[var(--accent)]"}`}
                              >
                                ×{count}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ScholarStudy />

            {/* Downloads */}
            <div
              id="downloads"
              className="relative parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[var(--paper-border)] scroll-mt-24"
            >
              <div className="flex items-baseline justify-between border-b border-[var(--paper-border)] pb-2 mb-4">
                <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--ink-dim-text)] font-bold flex items-center gap-2">
                  <Download size={12} className="text-[var(--accent)]" />
                  {lang === "zh" ? "下载" : "Download"}
                </h2>
                <span className="text-[10px] text-[var(--accent)] font-sans font-bold">
                  61 {lang === "zh" ? "章" : "chapters"}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--ink-dim-text)] font-bold mb-1">
                  {lang === "en" ? "Full text" : "全文"}
                </p>
                <button
                  onClick={downloadChinese}
                  className="text-left px-2 py-1.5 rounded-sm border border-[var(--paper-border)] hover:bg-[var(--accent)]/8 hover:border-[var(--accent)]/40 transition-all text-[10px] text-[var(--ink-dim-text)] hover:text-[var(--accent)]"
                >
                  {lang === "en" ? "↓ Chinese text (.txt)" : "↓ 中文全文 (.txt)"}
                </button>
                <button
                  onClick={downloadEnglish}
                  className="text-left px-2 py-1.5 rounded-sm border border-[var(--paper-border)] hover:bg-[var(--accent)]/8 hover:border-[var(--accent)]/40 transition-all text-[10px] text-[var(--ink-dim-text)] hover:text-[var(--accent)]"
                >
                  {lang === "en"
                    ? "↓ English translation (.txt)"
                    : "↓ 英文译文 (.txt)"}
                </button>
                <button
                  onClick={downloadInterleaved}
                  className="text-left px-2 py-1.5 rounded-sm border border-[var(--paper-border)] hover:bg-[var(--accent)]/8 hover:border-[var(--accent)]/40 transition-all text-[10px] text-[var(--ink-dim-text)] hover:text-[var(--accent)]"
                >
                  {lang === "en"
                    ? "↓ Bilingual interleaved (.txt)"
                    : "↓ 中英对照 (.txt)"}
                </button>
                <button
                  onClick={downloadJSON}
                  className="text-left px-2 py-1.5 rounded-sm border border-[var(--paper-border)] hover:bg-[var(--accent)]/8 hover:border-[var(--accent)]/40 transition-all text-[10px] text-[var(--ink-dim-text)] hover:text-[var(--accent)]"
                >
                  {lang === "en"
                    ? "↓ Bilingual interleaved (.json)"
                    : "↓ 中英对照 (.json)"}
                </button>
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--paper-border)] space-y-3">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--ink-dim-text)] font-bold">
                  {lang === "en" ? "By chapter" : "分章下载"}
                </p>
                <div>
                  <p className="text-[9px] text-[var(--accent)] font-bold mb-1.5 font-hans">
                    {lang === "en" ? "Chinese (.txt)" : "中文 (.txt)"}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {chapters.map((ch) => (
                      <a
                        key={`zh-${ch.id}`}
                        href={`/downloads/chinese/${chapterTxtFilename(ch.id)}`}
                        download
                        title={ch.title}
                        className="min-w-[1.75rem] px-1.5 py-0.5 text-center text-[9px] rounded-sm border border-[var(--paper-border)] bg-[var(--paper-bg)]/80 text-[var(--ink-title)] hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-colors font-hans font-bold"
                      >
                        {ch.id === 0 ? (lang === "zh" ? "序" : "Pre") : ch.id}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[9px] text-[var(--accent)] font-bold mb-1.5">
                    {lang === "en" ? "English (.txt)" : "英文 (.txt)"}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {chapters.map((ch) => {
                      const enTitle =
                        ch.id === 0
                          ? "Preface"
                          : chapterTitleTranslations[ch.id] || ch.title;
                      return (
                        <a
                          key={`en-${ch.id}`}
                          href={`/downloads/english/${chapterTxtFilename(ch.id)}`}
                          download
                          title={enTitle}
                          className="min-w-[1.75rem] px-1.5 py-0.5 text-center text-[9px] rounded-sm border border-[var(--paper-border)] bg-[var(--paper-bg)]/80 text-[var(--ink-title)] hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-colors font-sans font-bold"
                        >
                          {ch.id === 0 ? "0" : ch.id}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </main>

        <footer className="max-w-[1800px] mx-auto px-4 sm:px-8 pb-10 pt-2">
          {/* Decorative rule */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 border-t border-[var(--paper-border)]" />
            <span className="text-[var(--accent)] opacity-40 text-[10px] tracking-[0.4em]">✦</span>
            <div className="flex-1 border-t border-[var(--paper-border)]" />
          </div>

          <div className="max-w-lg mx-auto text-center space-y-6">
            {/* Source text */}
            <div className="space-y-1.5">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--accent)] font-bold opacity-70">
                {lang === "zh" ? "原著" : "Source Text"}
              </p>
              <p className="text-[11px] text-[var(--ink-dim)] leading-relaxed font-serif">
                <span className="font-semibold italic">
                  {lang === "zh"
                    ? "品花宝鉴"
                    : "Pinhua Baojian / Precious Mirror for Grading Flowers"}
                </span>
              </p>

              <p className="text-[10px] text-[var(--ink-dim-text)] opacity-60 tracking-wide">
                {lang === "zh"
                  ? "陈森著 · 清代 · 共六十回"
                  : "A 60-chapter novel · Chen Sen · Qing dynasty"}
              </p>
            </div>

            {/* Dot separator */}
            <div className="text-[var(--paper-border)] text-[8px] tracking-[0.8em] opacity-60">
              · · ·
            </div>

            {/* Project attribution */}
            <div className="space-y-1.5">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--accent)] font-bold opacity-70">
                {lang === "zh" ? "本项目" : "This Project"}
              </p>
              <p className="text-[11px] text-[var(--ink-dim)] leading-relaxed">
                <span className="font-semibold">
                  {lang === "zh"
                    ? "品花宝境"
                    : "Precious Vibe"}
                </span>
              </p>
              <p className="text-[10px] text-[var(--ink-dim-text)] italic opacity-80">

                {lang === "zh"
                  ? "《品花宝鉴》之意境文学"
                  : "Pinhua Baojian's Vibe Literature"}
              </p>
              <p className="text-[10px] text-[var(--ink-dim-text)] opacity-60 tracking-wide">
                {lang === "zh"
                  ? "周腾朝著 · 2026 · 借助AI技术创作"
                  : "Authored by TengChao Zhou · 2026 · With the help of AI technologies"}
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <CiteButton lang={lang} direction="up" />
          </div>
        </footer>

        {/* Floating Scroll Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-40">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-3 bg-[var(--accent)] text-[var(--paper-bg)] rounded-full shadow-lg border-2 border-[var(--paper-border)] hover:bg-[var(--ink-title)] transition-colors"
            title="Scroll to Top"
          >
            <ChevronUp size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              })
            }
            className="p-3 bg-[var(--accent)] text-[var(--paper-bg)] rounded-full shadow-lg border-2 border-[var(--paper-border)] hover:bg-[var(--ink-title)] transition-colors"
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
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 260 }}
                data-overlay-scroll="true"
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 w-full sm:max-w-lg sm:max-h-[85vh] sm:rounded-sm max-h-[86vh] overflow-y-auto parchment rounded-t-sm sm:rounded-sm border-t-4 sm:border-4 border-x-4 border-double border-[var(--paper-border)] shadow-2xl p-4 sm:p-5"
              >
                <div className="flex items-center justify-between gap-3 border-b border-[var(--paper-border)] pb-3 mb-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--ink-dim-text)] font-bold">
                      {lang === "zh" ? "快速前往" : "Go To"}
                    </p>
                    <h2 className="text-lg font-bold text-[var(--ink-title)]">
                      {lang === "zh" ? "品花宝鉴数据库" : "Pinhua Baojian"}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <ThemeToggle lang={lang} />
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="h-10 w-10 rounded-sm border border-[var(--paper-border)] bg-white/20 text-[var(--ink-title)] flex items-center justify-center hover:bg-black/5 transition-colors"
                      aria-label={lang === "zh" ? "关闭菜单" : "Close menu"}
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
                      className="min-h-14 text-left rounded-sm border border-[var(--paper-border)]/70 bg-white/15 hover:bg-[var(--accent)]/8 hover:border-[var(--accent)]/40 transition-all px-3 py-2 flex items-center gap-3"
                    >
                      <Icon size={17} className="text-[var(--accent)] shrink-0" />
                      <span className="text-[12px] font-bold uppercase tracking-wide text-[var(--ink-title)] leading-tight">
                        {label}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button
                    onClick={openContents}
                    className="min-h-12 rounded-sm bg-[var(--accent)] text-[var(--paper-bg)] px-3 py-2 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider"
                  >
                    <Book size={15} />
                    {lang === "zh" ? "打开目录" : "Open Contents"}
                  </button>
                  <button
                    onClick={() => {
                      const firstChapter = chapters.find(
                        (chapter) => chapter.id === 1,
                      );
                      if (firstChapter) setSelectedChapter(firstChapter);
                      setMobileMenuOpen(false);
                    }}
                    className="min-h-12 rounded-sm border border-[var(--accent)]/50 text-[var(--accent)] bg-[var(--accent)]/5 px-3 py-2 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider"
                  >
                    <BookOpen size={15} />
                    {lang === "zh" ? "读第一回" : "Read Ch. 1"}
                  </button>
                </div>

                <div className="border-t border-[var(--paper-border)] pt-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim-text)] font-bold mb-2">
                    {lang === "zh" ? "常用章节" : "Common Chapters"}
                  </p>
                  <div className="grid grid-cols-6 gap-1.5">
                    {[0, 1, 10, 20, 30, 40, 50, 60].map((chapterId) => {
                      const chapter = chapters.find(
                        (item) => item.id === chapterId,
                      );
                      if (!chapter) return null;
                      return (
                        <button
                          key={chapter.id}
                          onClick={() => {
                            setSelectedChapter(chapter);
                            setMobileMenuOpen(false);
                          }}
                          className="h-10 rounded-sm border border-[var(--paper-border)] bg-white/15 text-[10px] font-bold text-[var(--ink-title)] hover:bg-[var(--accent)]/8 hover:border-[var(--accent)]/40 transition-colors"
                        >
                          {chapter.id === 0
                            ? lang === "zh"
                              ? "序"
                              : "Pre"
                            : chapter.id}
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
              setLang={setLang}
              onSelectCharacter={(character) => setSelectedCharacter(character)}
              onSelectChapter={setSelectedChapter}
              onSelectLacuna={() => setActiveLacunaChapter(selectedChapter.id)}
              keysSuspended={readerObscured}
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
              setLang={setLang}
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
              setLang={setLang}
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
              onSelectCharacter={(character) => {
                // The work modal stacks above the character modal, so close it
                // when navigating to a character.
                setSelectedWork(null);
                setSelectedCharacter(character);
              }}
            />
          )}
        </AnimatePresence>

        {/* Location Detail Modal */}
        <AnimatePresence>
          {selectedLocation && (
            <LocationDetail
              location={selectedLocation}
              lang={lang}
              setLang={setLang}
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
              questionSlug={selectedQuestion}
              onClose={() => setSelectedQuestion(null)}
              lang={lang}
            />
          )}
        </AnimatePresence>
      </div>
    </React.Suspense>
  );
}
