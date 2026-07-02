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
import worksDataJson from "./worksData.json";
import {
  ENGLISH_WORK_TITLES,
  ENGLISH_WORK_TITLE_SET,
  WORK_ENGLISH_BY_CHINESE,
} from "./englishWorkTitles";
import type { Character, Chapter } from "./types";
import NetworkGraph from "./components/NetworkGraph";
import { parseHash, formatHash, type DeepLink } from "./permalink";
import {
  categorizeWork,
  WORK_CATEGORY_LABELS,
  WORK_CATEGORY_ORDER,
} from "./workCategories";
import { CiteButton } from "./components/CiteButton";

import { worksData, escapeRegExp, englishWorkTitleRegexFragment, ENGLISH_WORK_SPLIT_PATTERN, CHAPTER_ANNOTATION_TOKEN_SPLIT_REGEX, ENGLISH_WORK_TITLE_LOWERCASE, chapterTitleTranslations, translationMap, getChapterReaderTitle, getChapterReaderSubtitle, ROLE_ORDER, ROLE_ICONS, ROLE_TINTS, ROLE_TEXT_COLORS, ROLE_ACCENTS, ROLE_CHIP_IDLE, ROLE_CHIP_ACTIVE, extractChineseTokens, stripDiacritics, Segment, LacunaConfidence, LacunaEntry, NovelLocationWithChapters, CONTEXT_SENSITIVE_TOKENS, ENGLISH_ALIAS_TOKENS, getEnglishAliasTokens, isPersonNameContext, getChineseShortFormTokens, removeTrailingSurname, segmentText, countTextSearchMatches, renderTextWithSearchHighlight, isWorkAnnotationToken, isChineseWorkAnnotationToken, CHINESE_WORK_BY_ENGLISH_LOWER, workKeyFromAnnotationToken, chapterWorkAnchorId, getSegmentChipLabel, ENGLISH_CHARACTER_NAME_FALLBACKS, getCharacterNameForLanguage, countSearchMatchesInRenderedText, getChapterMentionedCharacters, getCharacterTotalMentions, NavSection } from "./utils";

import { LanguageSwitch } from "./components/LanguageSwitch";
import { NavMenuDropdown } from "./components/NavMenuDropdown";
import { LacunaeModal } from "./components/LacunaeModal";
import { QuestionsModal } from "./components/QuestionsModal";
import { WorkModal } from "./components/WorkModal";
import { LocationDetail } from "./components/LocationDetail";
import { ChapterReader } from "./components/ChapterReader";
import { HometownMap } from "./components/HometownMap";
import { CharacterCard } from "./components/CharacterCard";
import { CharacterDetail } from "./components/CharacterDetail";
import { GardenDetail } from "./components/GardenDetail";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
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
  const [lang, setLang] = useState<"en" | "zh">("zh");
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
      siteSubtitle: "《品花宝鉴》之境文学",
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
        const conversations = (ch.content.match(/[「『]/g) ?? []).length;
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
    if (selectedQuestion) return { kind: "question", slug: selectedQuestion };
    if (activeLacunaChapter !== null)
      return { kind: "lacunae", chapter: activeLacunaChapter };
    if (selectedLocation) return { kind: "location", id: selectedLocation.id };
    if (selectedWork) return { kind: "work", key: selectedWork };
    if (selectedGarden) return { kind: "garden", id: selectedGarden.id };
    if (selectedCharacter) return { kind: "character", id: selectedCharacter.id };
    if (selectedChapter) return { kind: "chapter", id: selectedChapter.id };
    return null;
  }, [
    selectedCharacter,
    selectedWork,
    selectedGarden,
    selectedLocation,
    selectedQuestion,
    activeLacunaChapter,
    selectedChapter,
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
    { id: "gardens", label: lang === "zh" ? "园林" : "Gardens", icon: Leaf },
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
      id: "locations",
      label: lang === "zh" ? "地点" : "Locations",
      icon: MapPin,
    },
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
    { id: "lacunae", label: lang === "zh" ? "缺文" : "Lacunae", icon: Info },
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
    <div className="min-h-screen font-sans text-[var(--ink-main)] selection:bg-amber-900/20">
      {/* Header */}
      <div
        id="overview"
        className="max-w-[1800px] mx-auto w-full px-2 sm:px-5 md:px-4 lg:px-5 scroll-mt-24 md:sticky md:top-0 md:z-30 md:bg-[#e5dcc3]/95 md:backdrop-blur-sm overflow-visible"
      >
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
            <p
              className={`text-[10px] sm:text-[11px] italic text-[#8b4513] tracking-wide ${lang === "zh" ? "font-hans" : ""}`}
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
            <LanguageSwitch lang={lang} setLang={setLang} />
          </div>
        </header>
      </div>

      <div className="md:hidden sticky top-0 z-30 px-2 pb-2 bg-[#e5dcc3]/95 backdrop-blur-sm border-b border-[#d4c5a9]/80">
        <nav
          className="parchment rounded-sm border border-[#d4c5a9] p-1 sm:p-2 flex items-center gap-1 sm:gap-2 shadow-md"
          aria-label={lang === "zh" ? "移动导航" : "Mobile navigation"}
        >
          {mobileSections.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="flex-1 min-w-0 h-11 sm:h-12 rounded-sm flex flex-col items-center justify-center gap-0.5 text-[#5d5048] hover:bg-[#8b4513]/8 hover:text-[#8b4513] transition-colors"
            >
              <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="text-[7px] sm:text-[10px] font-bold leading-none uppercase tracking-tighter truncate max-w-full">
                {label}
              </span>
            </button>
          ))}
          <LanguageSwitch
            lang={lang}
            setLang={setLang}
            compact
            className="shrink-0 p-0.5"
          />
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-sm bg-[#8b4513] text-[#f4ecd8] flex items-center justify-center border border-[#8b4513] shadow-sm shrink-0"
            aria-label={lang === "zh" ? "打开全部菜单" : "Open full menu"}
          >
            <Menu size={18} />
          </button>
        </nav>
      </div>

      <main className="max-w-[1800px] mx-auto p-2 sm:p-4 md:p-4 lg:p-5 grid grid-cols-1 md:grid-cols-[minmax(200px,240px)_1fr] lg:grid-cols-[240px_1fr_260px] xl:grid-cols-[280px_1fr_300px] gap-4 md:gap-5 lg:gap-6">
        {/* Left Sidebar */}
        <aside className="flex flex-col gap-4 md:gap-5 h-fit order-2 md:order-1 md:self-start">
          <div
            id="stats"
            className="parchment p-4 sm:p-6 md:p-5 lg:p-8 rounded-sm flex flex-col gap-6 md:gap-8 lg:gap-10 border-double border-4 border-[#d4c5a9] scroll-mt-24"
          >
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-6 font-bold border-b border-[#d4c5a9] pb-2">
                {t.hometown}
              </h2>
              <div className="space-y-4">
                {stats.topOrigins.map((stat, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-[12px]">
                      <span className="truncate pr-2 font-hans">
                        {lang === "zh"
                          ? stat.name === "Unknown"
                            ? "未知"
                            : stat.chars[0]?.originZh || stat.name
                          : stat.name}
                      </span>
                      <span className="text-[#5d5048] flex-shrink-0">
                        {stat.count}
                      </span>
                    </div>
                    <div className="h-1 bg-black/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.percentage}%` }}
                        className="h-full bg-[#8b4513] opacity-60"
                      />
                    </div>
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {stat.chars.map((c) => (
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
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-6 font-bold border-b border-[#d4c5a9] pb-2">
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
                      <span className="text-[#5d5048] flex-shrink-0">
                        {stat.count}
                      </span>
                    </div>
                    <div className="h-1 bg-black/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.percentage}%` }}
                        className={`h-full opacity-60 ${stat.group === "?" ? "bg-[#5d5048]" : "bg-[#8b4513]"}`}
                      />
                    </div>
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {stat.chars.map((c) => (
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
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-6 font-bold border-b border-[#d4c5a9] pb-2">
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
                      <span className="text-[#5d5048] flex-shrink-0">
                        {stat.count}
                      </span>
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
                  <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mt-6 mb-6 font-bold border-b border-[#d4c5a9] pb-2">
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
                        className="bg-black/3 rounded-sm p-2 border border-[#d4c5a9]/50"
                      >
                        <p className="text-[8px] uppercase tracking-widest text-[#5d5048] mb-0.5 leading-tight">
                          {label}
                        </p>
                        <p className="text-[10px] font-bold text-[#2c2420] font-sans leading-tight">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Sparkline */}
                  <p className="text-[8px] uppercase tracking-widest text-[#5d5048] mb-1.5">
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
                            backgroundColor: "#8b4513",
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
                          ? "bg-[#8b4513] text-[#f4ecd8] border-[#8b4513]"
                          : "border-[#d4c5a9] text-[#5d5048] hover:border-[#8b4513]/40 hover:text-[#8b4513]"
                          }`}
                      >
                        {lang === "zh" ? labelZh : labelEn}
                      </button>
                    ))}
                  </div>
                  {/* Badge legend */}
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <span className="text-[8px] text-[#5d5048] italic">
                      {lang === "zh" ? "标记：" : "Tags:"}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[8px] text-amber-700">
                      <span className="px-1 rounded-sm bg-amber-100 border border-amber-300 font-bold font-sans leading-tight">
                        令
                      </span>
                      {lang === "zh" ? "酒令" : "Drinking game"}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[8px] text-sky-700">
                      <span className="px-1 rounded-sm bg-sky-100 border border-sky-300 font-bold font-sans leading-tight">
                        诗
                      </span>
                      {lang === "zh" ? "文字游戏" : "Word game"}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[8px] text-rose-700">
                      <span className="px-1 rounded-sm bg-rose-100 border border-rose-300 font-bold font-sans leading-tight">
                        艳
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
                          className="w-full text-left group px-2 py-2 rounded-sm border border-[#d4c5a9]/40 hover:border-[#8b4513]/30 hover:bg-[#8b4513]/3 transition-colors"
                        >
                          <div className="flex justify-between items-center text-[10px] mb-1">
                            <span className="text-[#5d5048] group-hover:text-[#8b4513] transition-colors font-bold">
                              Ch.{c.id}
                            </span>
                            <span className="text-[#5d5048] font-sans text-right leading-tight">
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
                                令
                              </span>
                            )}
                            {c.hasWordGame && (
                              <span
                                title={lang === "zh" ? "文字游戏" : "Word game"}
                                className="inline-block text-[8px] px-1.5 py-0.5 rounded-sm bg-sky-100 text-sky-700 border border-sky-300 leading-tight font-bold font-sans"
                              >
                                诗
                              </span>
                            )}
                            {c.hasMature && (
                              <span
                                title={
                                  lang === "zh" ? "成人内容" : "Mature content"
                                }
                                className="inline-block text-[8px] px-1.5 py-0.5 rounded-sm bg-rose-100 text-rose-700 border border-rose-300 leading-tight font-bold font-sans"
                              >
                                艳
                              </span>
                            )}
                          </div>
                          <div className="h-1 bg-black/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{
                                width: `${Math.round((c.chineseChars / maxChineseChars) * 100)}%`,
                              }}
                              className="h-full bg-[#8b4513] opacity-50 group-hover:opacity-70 transition-opacity"
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
          </div>

          {/* === Illustration: Garden Stroll 游园图 (Ch.15 Spring Outing) === */}
          <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center">
            <svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ maxHeight: '130px' }}>
              <rect x="3" y="3" width="274" height="144" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="1" />
              <rect x="6" y="6" width="268" height="138" fill="none" stroke="#2c2420" strokeWidth="1.2" rx="2" />
              <path d="M60 105 Q100 70, 140 105" fill="none" stroke="#2c2420" strokeWidth="1.5" />
              <path d="M65 105 Q100 75, 135 105" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <line x1="75" y1="95" x2="75" y2="90" stroke="#2c2420" strokeWidth="0.5" />
              <line x1="90" y1="86" x2="90" y2="81" stroke="#2c2420" strokeWidth="0.5" />
              <line x1="100" y1="83" x2="100" y2="78" stroke="#2c2420" strokeWidth="0.5" />
              <line x1="110" y1="86" x2="110" y2="81" stroke="#2c2420" strokeWidth="0.5" />
              <line x1="125" y1="95" x2="125" y2="90" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M75 90 Q90 78, 100 78 Q110 78, 125 90" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <circle cx="88" cy="72" r="4" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M86 68 Q88 65, 90 68" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <line x1="88" y1="76" x2="88" y2="77.5" stroke="#2c2420" strokeWidth="0.7" />
              <path d="M82 80 Q85 77.5, 88 78 Q91 77.5, 94 80" fill="none" stroke="#2c2420" strokeWidth="1" />
              <line x1="82" y1="80" x2="83" y2="88" stroke="#2c2420" strokeWidth="0.9" />
              <line x1="94" y1="80" x2="93" y2="88" stroke="#2c2420" strokeWidth="0.9" />
              <path d="M84 82 Q86 84, 88 83 Q90 84, 92 82" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M82 80 Q76 76, 72 72" fill="none" stroke="#2c2420" strokeWidth="0.9" />
              <path d="M94 80 Q98 82, 100 84" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <circle cx="112" cy="74" r="4" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M110 70 Q112 67, 114 70" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <line x1="112" y1="78" x2="112" y2="79.5" stroke="#2c2420" strokeWidth="0.7" />
              <path d="M106 82 Q109 79.5, 112 80 Q115 79.5, 118 82" fill="none" stroke="#2c2420" strokeWidth="1" />
              <line x1="106" y1="82" x2="107" y2="90" stroke="#2c2420" strokeWidth="0.9" />
              <line x1="118" y1="82" x2="117" y2="90" stroke="#2c2420" strokeWidth="0.9" />
              <path d="M108 84 Q110 86, 112 85 Q114 86, 116 84" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M106 82 Q102 84, 100 87" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M118 82 Q122 84, 124 87" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M25 10 Q28 30, 26 55 Q24 70, 28 90" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              <path d="M26 35 Q18 45, 15 60" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M27 45 Q20 55, 18 68" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M26 30 Q34 40, 36 55" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M27 40 Q35 50, 38 62" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M20 50 Q16 48, 13 52" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M18 60 Q14 58, 12 62" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M34 45 Q38 43, 40 47" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M40 115 Q70 110, 100 115 Q130 120, 160 115" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <ellipse cx="75" cy="118" rx="6" ry="2.5" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <ellipse cx="120" cy="116" rx="5" ry="2" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <line x1="95" y1="115" x2="95" y2="108" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M93 108 Q95 103, 97 108" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M200 85 Q195 70, 200 60 Q205 50, 210 55" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M200 60 Q210 55, 220 60" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <circle cx="210" cy="52" r="6" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <circle cx="210" cy="52" r="3" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <circle cx="210" cy="52" r="1" fill="#2c2420" />
              <circle cx="220" cy="58" r="4.5" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <circle cx="220" cy="58" r="2" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <circle cx="220" cy="58" r="0.8" fill="#2c2420" />
              <path d="M195 68 Q190 65, 188 70" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M205 65 Q210 62, 215 66" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <line x1="240" y1="35" x2="240" y2="75" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M232 45 L240 38 L248 45" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <path d="M234 55 L240 50 L246 55" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M235 65 L240 60 L245 65" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M231 45 Q229 43, 228 41" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M249 45 Q251 43, 252 41" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M170 25 Q173 20, 176 23 Q179 18, 182 23" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M185 20 Q187 16, 189 19 Q191 15, 193 19" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M10 130 Q70 125, 140 128 Q210 131, 270 127" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M180 100 Q182 95, 184 100" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M210 95 Q212 90, 214 95" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <rect x="250" y="118" width="14" height="14" fill="none" stroke="#8b2500" strokeWidth="1" rx="0.5" />
              <text x="257" y="129" textAnchor="middle" fill="#8b2500" fontSize="7" fontFamily="serif" fontWeight="bold">园</text>
            </svg>
            <p className="text-[9px] text-[#5d5048] italic mt-1 font-hans">{lang === 'zh' ? '第十五回 · 携手游园赏春光' : 'Ch. 15 · A Spring Outing, Arm in Arm Through the Garden'}</p>
          </div>

          {/* Gardens Section */}
          <div
            id="gardens"
            className="parchment p-4 sm:p-8 rounded-sm flex flex-col gap-5 border-double border-4 border-[#d4c5a9] scroll-mt-24"
          >
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-1 font-bold border-b border-[#d4c5a9] pb-2 flex items-center gap-2">
                <Leaf size={11} className="text-[#4d6a3a]" />
                {lang === "zh" ? "园林与场所" : "Gardens & Spaces"}
              </h2>
              <p className="text-[10px] text-[#5d5048] italic mt-2 mb-4 font-hans leading-relaxed">
                {lang === "zh"
                  ? "小说中出现的13处命名园林与建筑空间"
                  : "13 named locations across the 60 chapters"}
              </p>

              {/* Major gardens */}
              <p className="text-[9px] uppercase tracking-widest text-[#5d5048] mb-2 font-bold">
                {lang === "zh" ? "主要园林" : "Major Gardens"}
              </p>
              <div className="flex flex-col gap-1.5 mb-4">
                {gardens
                  .filter((g) => g.type === "major")
                  .map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setSelectedGarden(g)}
                      className="text-left px-2.5 py-2 rounded-sm border border-[#d4c5a9]/60 hover:border-[#4d6a3a]/50 hover:bg-[#4d6a3a]/5 transition-all group flex items-center gap-2"
                    >
                      <Leaf
                        size={10}
                        className="text-[#4d6a3a]/50 group-hover:text-[#4d6a3a] shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="text-[12px] font-hans font-bold text-[#2c2420] block leading-tight">
                          {lang === "zh" ? g.name : g.nameEn}
                        </span>
                        <span className="text-[9px] text-[#5d5048] leading-tight">
                          {lang === "zh" ? g.location : g.locationEn}
                        </span>
                      </div>
                    </button>
                  ))}
              </div>

              {/* Sub-locations */}
              <p className="text-[9px] uppercase tracking-widest text-[#5d5048] mb-2 font-bold">
                {lang === "zh" ? "园中胜景" : "Sub-Locations"}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {gardens
                  .filter((g) => g.type === "sublocation")
                  .map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setSelectedGarden(g)}
                      className="text-[10px] px-2 py-1 rounded-sm border border-[#d4c5a9]/60 hover:border-[#8b4513]/40 bg-white/20 hover:bg-[#8b4513]/5 text-[#5d5048] hover:text-[#8b4513] transition-all font-hans leading-tight"
                    >
                      {lang === "zh" ? g.name : g.nameEn}
                    </button>
                  ))}
              </div>

              {/* Other */}
              <p className="text-[9px] uppercase tracking-widest text-[#5d5048] mb-2 font-bold">
                {lang === "zh" ? "其他场所" : "Other Spaces"}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {gardens
                  .filter((g) => g.type === "other")
                  .map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setSelectedGarden(g)}
                      className="text-[10px] px-2 py-1 rounded-sm border border-[#d4c5a9]/60 hover:border-[#8b4513]/40 bg-white/20 hover:bg-[#8b4513]/5 text-[#5d5048] hover:text-[#8b4513] transition-all font-hans leading-tight"
                    >
                      {lang === "zh" ? g.name : g.nameEn}
                    </button>
                  ))}
              </div>
            </div>
          </div>

          {/* Lacunae Sidebar */}
          <div
            id="lacunae"
            className="parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[#d4c5a9] scroll-mt-24"
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-4 font-bold border-b border-[#d4c5a9] pb-2">
              {lang === "zh" ? "缺文" : "Lacunae"}
            </h2>
            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-4 xl:grid-cols-5 gap-1.5">
              {lacunaChapterNumbers.map((chapterNumber) =>
                (() => {
                  const lacunaCount = lacunaCountByChapter[chapterNumber] ?? 0;
                  const isDisabled = lacunaCount === 0;
                  return (
                    <button
                      key={chapterNumber}
                      onClick={
                        isDisabled
                          ? undefined
                          : () => setActiveLacunaChapter(chapterNumber)
                      }
                      aria-disabled={isDisabled}
                      className={`text-center text-[10px] font-bold px-1.5 py-1.5 rounded-sm border transition-colors ${isDisabled
                        ? "border-[#d4c5a9]/25 bg-black/5 text-[#5d5048]/45 cursor-default"
                        : "border-[#d4c5a9]/40 text-[#2c2420] hover:bg-amber-700/10 hover:border-amber-700/40 cursor-pointer"
                        }`}
                      title={
                        isDisabled
                          ? `Chapter ${chapterNumber} (no lacunae)`
                          : `Chapter ${chapterNumber} (${lacunaCount} lacunae)`
                      }
                    >
                      <span className="block leading-tight">
                        {chapterNumber}
                      </span>
                      <span
                        className={`block text-[9px] font-sans leading-tight ${isDisabled ? "text-[#5d5048]/40" : "text-[#8b4513]"}`}
                      >
                        {lacunaCount}
                      </span>
                    </button>
                  );
                })(),
              )}
            </div>
          </div>

          {/* === Illustration: Theater Performance 戏台图 (Ch.7 Opera Night) === */}
          <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center">
            <svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ maxHeight: '130px' }}>
              <rect x="3" y="3" width="274" height="144" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="1" />
              <rect x="6" y="6" width="268" height="138" fill="none" stroke="#2c2420" strokeWidth="1.2" rx="2" />
              <path d="M50 95 L230 95 L240 105 L40 105 Z" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              <line x1="50" y1="95" x2="50" y2="105" stroke="#2c2420" strokeWidth="0.6" />
              <line x1="230" y1="95" x2="230" y2="105" stroke="#2c2420" strokeWidth="0.6" />
              <line x1="90" y1="96" x2="85" y2="104" stroke="#2c2420" strokeWidth="0.3" />
              <line x1="140" y1="96" x2="135" y2="104" stroke="#2c2420" strokeWidth="0.3" />
              <line x1="190" y1="96" x2="185" y2="104" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M55 25 Q140 18, 225 25" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M55 25 L55 95" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M225 25 L225 95" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M55 25 Q60 35, 65 30 Q70 25, 75 32" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M225 25 Q220 35, 215 30 Q210 25, 205 32" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M55 25 Q140 15, 225 25" fill="none" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="2,2" />
              <circle cx="140" cy="52" r="5" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              <path d="M135 47 Q137 42, 140 44 Q143 42, 145 47" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M137 43 Q140 39, 143 43" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <line x1="140" y1="39" x2="140" y2="42" stroke="#2c2420" strokeWidth="0.5" />
              <line x1="140" y1="57" x2="140" y2="59" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M130 62 Q135 59, 140 60 Q145 59, 150 62" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M130 62 Q128 75, 126 90" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M150 62 Q152 75, 154 90" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M133 70 Q140 73, 147 70" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M131 78 Q140 82, 149 78" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M130 62 Q120 58, 108 55 Q100 54, 95 58" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M95 58 Q90 62, 88 65" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M150 62 Q160 58, 172 55 Q180 54, 185 58" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M185 58 Q190 62, 192 65" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <circle cx="72" cy="72" r="4" fill="none" stroke="#2c2420" strokeWidth="0.9" />
              <path d="M70 68 Q72 66, 74 68" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <line x1="72" y1="76" x2="72" y2="77" stroke="#2c2420" strokeWidth="0.6" />
              <path d="M66 79 Q69 77, 72 78 Q75 77, 78 79" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <line x1="66" y1="79" x2="67" y2="92" stroke="#2c2420" strokeWidth="0.7" />
              <line x1="78" y1="79" x2="77" y2="92" stroke="#2c2420" strokeWidth="0.7" />
              <ellipse cx="82" cy="82" rx="3" ry="6" fill="none" stroke="#2c2420" strokeWidth="0.6" transform="rotate(-15 82 82)" />
              <line x1="82" y1="76" x2="82" y2="88" stroke="#2c2420" strokeWidth="0.3" />
              <circle cx="80" cy="118" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <path d="M78 115 Q80 113, 82 115" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M76 124 Q80 128, 84 124" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <circle cx="110" cy="120" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <path d="M108 117 Q110 115, 112 117" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M106 126 Q110 130, 114 126" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <circle cx="170" cy="120" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <path d="M168 117 Q170 115, 172 117" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M166 126 Q170 130, 174 126" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <circle cx="200" cy="118" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <path d="M198 115 Q200 113, 202 115" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M196 124 Q200 128, 204 124" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <line x1="80" y1="10" x2="80" y2="22" stroke="#2c2420" strokeWidth="0.4" />
              <ellipse cx="80" cy="27" rx="4" ry="6" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <line x1="200" y1="10" x2="200" y2="22" stroke="#2c2420" strokeWidth="0.4" />
              <ellipse cx="200" cy="27" rx="4" ry="6" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <rect x="248" y="118" width="14" height="14" fill="none" stroke="#8b2500" strokeWidth="1" rx="0.5" />
              <text x="255" y="129" textAnchor="middle" fill="#8b2500" fontSize="7" fontFamily="serif" fontWeight="bold">戏</text>
            </svg>
            <p className="text-[9px] text-[#5d5048] italic mt-1 font-hans">{lang === 'zh' ? '第七回 · 梨园妙音惊满座' : 'Ch. 7 · A Dazzling Opera Stuns the Hall'}</p>
          </div>

          {/* Questions Sidebar */}
          <div
            id="questions"
            className="parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[#d4c5a9] scroll-mt-24"
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-4 font-bold border-b border-[#d4c5a9] pb-2">
              {lang === "zh" ? "问题" : "Questions"}
            </h2>
            <div className="space-y-2">
              {questions.map((q) => (
                <button
                  key={q.slug}
                  onClick={() => setSelectedQuestion(q.slug)}
                  className="w-full text-left p-3 rounded-sm border border-[#d4c5a9]/40 bg-black/5 hover:bg-amber-700/10 hover:border-amber-700/40 transition-colors cursor-pointer"
                >
                  <p className="text-[11px] font-bold text-[#2c2420] leading-relaxed">
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
          <div id="about" className="parchment p-5 sm:p-8 rounded-sm border-double border-4 border-[#d4c5a9] scroll-mt-24">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-4 font-bold border-b border-[#d4c5a9] pb-2">
              {lang === "en" ? "About Precious Vibe" : "关于品花宝境"}
            </h2>
            <p className="text-sm text-[#3a2e28] leading-relaxed mb-6 font-hans">
              {lang === "en"
                ? "Precious Vibe (品花宝境) is an interactive scholarly database for Pinhua Baojian (品花宝鉴), a classic Qing-dynasty Chinese novel. It brings together annotated chapter reading, character profiles, relationship mapping, place data, and literary citations into a single integrated research tool."
                : "品花宝境是针对清代经典小说《品花宝鉴》打造的交互式学术数据库，将注释章节阅读、人物档案、人物关系图谱、地点数据及文学引用整合为一体，服务于研究与阅读。"}
            </p>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {/* Chapter Reader */}
              <div className="flex gap-3 items-baseline py-2.5 border-t border-[#d4c5a9]/60 first:border-t-0">
                <BookOpen size={12} className="text-[#8b4513] shrink-0 translate-y-[1px]" />
                <div>
                  <dt className="inline text-[11px] font-bold text-[#5d5048] uppercase tracking-wider mr-1">
                    {lang === "en" ? "Chapter Reader" : "章节阅读"}
                  </dt>
                  <dd className="inline text-[11px] text-[#3a2e28]/75 leading-snug">
                    — {lang === "en"
                      ? "Read all 60 chapters in Chinese with aligned English translations and scene-level annotations."
                      : "阅读全部六十回原文，并附英文对照翻译与场景注释。"}
                  </dd>
                </div>
              </div>
              {/* Character Database */}
              <div className="flex gap-3 items-baseline py-2.5 border-t border-[#d4c5a9]/60 sm:first:border-t-0">
                <Users size={12} className="text-[#8b4513] shrink-0 translate-y-[1px]" />
                <div>
                  <dt className="inline text-[11px] font-bold text-[#5d5048] uppercase tracking-wider mr-1">
                    {lang === "en" ? "Character Database" : "人物数据库"}
                  </dt>
                  <dd className="inline text-[11px] text-[#3a2e28]/75 leading-snug">
                    — {lang === "en"
                      ? `Profiles for all ${characters.length} characters, with roles, aliases, chapter appearances, and mention counts.`
                      : `收录全部 ${characters.length} 位人物的角色、别名、登场章回及提及次数。`}
                  </dd>
                </div>
              </div>
              {/* Relationship Network */}
              <div className="flex gap-3 items-baseline py-2.5 border-t border-[#d4c5a9]/60">
                <Network size={12} className="text-[#8b4513] shrink-0 translate-y-[1px]" />
                <div>
                  <dt className="inline text-[11px] font-bold text-[#5d5048] uppercase tracking-wider mr-1">
                    {lang === "en" ? "Relationship Network" : "人物关系网络"}
                  </dt>
                  <dd className="inline text-[11px] text-[#3a2e28]/75 leading-snug">
                    — {lang === "en"
                      ? "Interactive force graph visualising social bonds, rivalries, and family ties across the cast."
                      : "互动力导向图，可视化展示全书人物的社交、对立与家族关系。"}
                  </dd>
                </div>
              </div>
              {/* Gardens & Locations */}
              <div className="flex gap-3 items-baseline py-2.5 border-t border-[#d4c5a9]/60">
                <Leaf size={12} className="text-[#8b4513] shrink-0 translate-y-[1px]" />
                <div>
                  <dt className="inline text-[11px] font-bold text-[#5d5048] uppercase tracking-wider mr-1">
                    {lang === "en" ? "Gardens & Locations" : "园林与地点"}
                  </dt>
                  <dd className="inline text-[11px] text-[#3a2e28]/75 leading-snug">
                    — {lang === "en"
                      ? "Named gardens, residences, and districts, each linked to the chapters where they appear."
                      : "小说中的名园、宅邸与街区，每处均关联其出现的章回。"}
                  </dd>
                </div>
              </div>
              {/* Literary Citations */}
              <div className="flex gap-3 items-baseline py-2.5 border-t border-[#d4c5a9]/60">
                <Book size={12} className="text-[#8b4513] shrink-0 translate-y-[1px]" />
                <div>
                  <dt className="inline text-[11px] font-bold text-[#5d5048] uppercase tracking-wider mr-1">
                    {lang === "en" ? "Literary Citations" : "文学引用"}
                  </dt>
                  <dd className="inline text-[11px] text-[#3a2e28]/75 leading-snug">
                    — {lang === "en"
                      ? "Every allusion to classical poetry and drama linked to its source work, with context snippets."
                      : "书中每处诗词典故均附来源及上下文片段，便于溯源考证。"}
                  </dd>
                </div>
              </div>
              {/* Hometown Map */}
              <div className="flex gap-3 items-baseline py-2.5 border-t border-[#d4c5a9]/60">
                <MapIcon size={12} className="text-[#8b4513] shrink-0 translate-y-[1px]" />
                <div>
                  <dt className="inline text-[11px] font-bold text-[#5d5048] uppercase tracking-wider mr-1">
                    {lang === "en" ? "Hometown Map" : "籍贯地图"}
                  </dt>
                  <dd className="inline text-[11px] text-[#3a2e28]/75 leading-snug">
                    — {lang === "en"
                      ? "A geographic map pinpointing each character's hometown, revealing the regional spread of the cast."
                      : "地理地图标注每位人物的籍贯，直观呈现全书人物的地域分布。"}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* === Illustration: Banquet Scene 宴饮图 (Ch.4 Plum Blossom Banquet) === */}
          <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center">
            <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ maxHeight: '140px' }}>
              <defs>
                <linearGradient id="bqWash" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2c2420" stopOpacity="0.03" />
                  <stop offset="100%" stopColor="#2c2420" stopOpacity="0.08" />
                </linearGradient>
              </defs>
              <rect x="3" y="3" width="274" height="154" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="1" />
              <rect x="6" y="6" width="268" height="148" fill="none" stroke="#2c2420" strokeWidth="1.2" rx="2" />
              <ellipse cx="140" cy="110" rx="42" ry="14" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              <line x1="110" y1="118" x2="108" y2="140" stroke="#2c2420" strokeWidth="0.8" />
              <line x1="170" y1="118" x2="172" y2="140" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M128 104 L128 100 Q130 96, 132 100 L132 104" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <path d="M145 103 L145 98 Q148 94, 151 98 L151 103" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <ellipse cx="140" cy="106" rx="3" ry="1.5" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <ellipse cx="122" cy="107" rx="2" ry="1" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <ellipse cx="158" cy="107" rx="2" ry="1" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <circle cx="95" cy="82" r="5" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              <path d="M92 77 Q95 74, 98 77" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <line x1="95" y1="87" x2="95" y2="89" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M87 92 Q91 89, 95 90 Q99 89, 103 92" fill="none" stroke="#2c2420" strokeWidth="1" />
              <line x1="87" y1="92" x2="89" y2="108" stroke="#2c2420" strokeWidth="1" />
              <line x1="103" y1="92" x2="101" y2="108" stroke="#2c2420" strokeWidth="1" />
              <path d="M90 96 Q93 98, 95 96 Q97 98, 100 96" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M87 92 Q82 86, 80 80" fill="none" stroke="#2c2420" strokeWidth="1" />
              <ellipse cx="79" cy="79" rx="2" ry="1" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M103 92 Q108 96, 112 100" fill="none" stroke="#2c2420" strokeWidth="0.9" />
              <circle cx="185" cy="82" r="5" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              <path d="M182 77 Q185 74, 188 77" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <line x1="185" y1="87" x2="185" y2="89" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M177 92 Q181 89, 185 90 Q189 89, 193 92" fill="none" stroke="#2c2420" strokeWidth="1" />
              <line x1="177" y1="92" x2="179" y2="108" stroke="#2c2420" strokeWidth="1" />
              <line x1="193" y1="92" x2="191" y2="108" stroke="#2c2420" strokeWidth="1" />
              <path d="M180 96 Q183 98, 185 96 Q187 98, 190 96" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M177 92 Q172 96, 168 100" fill="none" stroke="#2c2420" strokeWidth="0.9" />
              <path d="M193 92 Q198 88, 202 84" fill="none" stroke="#2c2420" strokeWidth="1" />
              <circle cx="140" cy="58" r="4.5" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M137 54 Q140 51, 143 54" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <line x1="140" y1="62.5" x2="140" y2="64" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M132 67 Q136 64, 140 65 Q144 64, 148 67" fill="none" stroke="#2c2420" strokeWidth="1" />
              <line x1="132" y1="67" x2="134" y2="90" stroke="#2c2420" strokeWidth="0.9" />
              <line x1="148" y1="67" x2="146" y2="90" stroke="#2c2420" strokeWidth="0.9" />
              <path d="M135 71 Q138 73, 140 71 Q142 73, 145 71" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M148 67 Q153 72, 155 78" fill="none" stroke="#2c2420" strokeWidth="0.9" />
              <path d="M155 78 L155 82 Q156 80, 157 82" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <path d="M10 15 Q30 22, 55 20 Q75 18, 90 22" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M45 20 Q50 12, 58 10" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <circle cx="55" cy="18" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <circle cx="55" cy="18" r="1.2" fill="#2c2420" />
              <circle cx="72" cy="19" r="3" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <circle cx="72" cy="19" r="1" fill="#2c2420" />
              <circle cx="38" cy="21" r="2.5" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <circle cx="38" cy="21" r="0.8" fill="#2c2420" />
              <circle cx="58" cy="10" r="2.5" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <circle cx="58" cy="10" r="0.8" fill="#2c2420" />
              <line x1="220" y1="10" x2="220" y2="28" stroke="#2c2420" strokeWidth="0.5" />
              <ellipse cx="220" cy="36" rx="7" ry="10" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <line x1="213" y1="36" x2="227" y2="36" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M216 46 Q220 50, 224 46" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <rect x="230" y="15" width="30" height="40" fill="none" stroke="#2c2420" strokeWidth="0.8" rx="1" />
              <line x1="245" y1="15" x2="245" y2="55" stroke="#2c2420" strokeWidth="0.4" />
              <line x1="230" y1="35" x2="260" y2="35" stroke="#2c2420" strokeWidth="0.4" />
              <circle cx="252" cy="25" r="5" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M10 145 Q70 140, 140 143 Q210 146, 270 142" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <rect x="248" y="130" width="14" height="14" fill="none" stroke="#8b2500" strokeWidth="1" rx="0.5" />
              <text x="255" y="141" textAnchor="middle" fill="#8b2500" fontSize="7" fontFamily="serif" fontWeight="bold">宴</text>
            </svg>
            <p className="text-[9px] text-[#5d5048] italic mt-1 font-hans">{lang === 'zh' ? '第四回 · 梅花宴上品花评' : 'Ch. 4 · Judging Flowers at the Plum Blossom Banquet'}</p>
          </div>

          {/* Network Graph Section */}
          <div id="network" className="scroll-mt-24">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-6 font-bold border-b border-[#d4c5a9] pb-2">
              {lang === "en"
                ? "Character Relationship Network"
                : "人物关系网络图谱"}
            </h2>
            <p className="text-xs italic text-[#5d5048] mb-4">{t.subtitle}</p>
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
            className="parchment p-4 sm:p-6 rounded-sm flex flex-col gap-4 sm:gap-6 border-double border-4 border-[#d4c5a9] scroll-mt-24"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5d5048]"
                  size={16}
                />
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
                  onClick={() => setSortBy("mentions")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all ${sortBy === "mentions"
                    ? "bg-[#8b4513] text-[#f4ecd8]"
                    : "text-[#5d5048] hover:bg-black/5"
                    }`}
                >
                  <BarChart2 size={12} />
                  {t.mentionSort}
                </button>
                <button
                  onClick={() => setSortBy("appearance")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all ${sortBy === "appearance"
                    ? "bg-[#8b4513] text-[#f4ecd8]"
                    : "text-[#5d5048] hover:bg-black/5"
                    }`}
                >
                  <Clock size={12} />
                  {t.chronology}
                </button>
                <button
                  onClick={() => setSortBy("role")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all ${sortBy === "role"
                    ? "bg-[#8b4513] text-[#f4ecd8]"
                    : "text-[#5d5048] hover:bg-black/5"
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
                className={`px-3.5 sm:px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all border whitespace-nowrap min-h-11 touch-manipulation ${!selectedRole
                  ? "bg-[#2c2420] text-[#f4ecd8] border-[#2c2420]"
                  : "bg-white/10 text-[#5d5048] border-[#d4c5a9] hover:border-[#8b4513]/30 active:opacity-80"
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
            <div className="parchment p-20 text-center rounded-sm border-double border-4 border-[#d4c5a9]">
              <Search size={40} className="mx-auto mb-4 text-[#5d5048]" />
              <p className="text-[#5d5048] italic font-hans">{t.noRecords}</p>
            </div>
          )}
          <HometownMap characters={filteredCharacters} lang={lang} />
        </section>

        {/* Right Sidebar - Chapters */}
        <aside className="order-3 md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5 h-fit lg:col-span-1 lg:self-start">
          <div
            id="chapters"
            className="parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[#d4c5a9] scroll-mt-24"
          >
            {/* Chinese Garden with Figure - Line Drawing */}
            <svg
              viewBox="0 0 520 400"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full mb-4"
              style={{ maxHeight: '320px' }}
            >
              {/* ===== DEFS: Ink wash gradients & filters for 水墨画 style ===== */}
              <defs>
                {/* Ink wash gradient for mountains */}
                <linearGradient id="inkMountain" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2c2420" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#2c2420" stopOpacity="0.08" />
                </linearGradient>
                {/* Radial wash for moon halo */}
                <radialGradient id="moonHalo" cx="50%" cy="50%" r="50%">
                  <stop offset="40%" stopColor="#2c2420" stopOpacity="0" />
                  <stop offset="100%" stopColor="#2c2420" stopOpacity="0.06" />
                </radialGradient>
                {/* Mist gradient */}
                <linearGradient id="mistFade" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f5efe0" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#f5efe0" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#f5efe0" stopOpacity="0.8" />
                </linearGradient>
                {/* Water wash */}
                <linearGradient id="waterWash" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2c2420" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#2c2420" stopOpacity="0.12" />
                </linearGradient>
                {/* Ink splatter filter for brush texture */}
                <filter id="inkTexture" x="-5%" y="-5%" width="110%" height="110%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
                </filter>
              </defs>

              {/* ===== BACKGROUND ===== */}
              {/* Outer frame - double border like traditional scroll */}
              <rect x="3" y="3" width="514" height="394" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
              <rect x="8" y="8" width="504" height="384" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />

              {/* ===== MOON with halo ===== */}
              <circle cx="420" cy="65" r="40" fill="url(#moonHalo)" />
              <circle cx="420" cy="65" r="26" fill="none" stroke="#2c2420" strokeWidth="1.5" />
              <circle cx="416" cy="62" r="21" fill="none" stroke="#2c2420" strokeWidth="0.5" strokeDasharray="2,4" />

              {/* ===== DISTANT MOUNTAINS with ink wash ===== */}
              {/* Far mountains - lighter wash */}
              <path d="M12 170 Q50 100, 100 155 Q130 120, 175 150 Q210 100, 270 145 Q310 90, 370 140 Q410 105, 460 135 Q480 120, 515 165" fill="url(#inkMountain)" stroke="none" opacity="0.3" />
              <path d="M12 170 Q50 100, 100 155 Q130 120, 175 150 Q210 100, 270 145 Q310 90, 370 140 Q410 105, 460 135 Q480 120, 515 165" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              {/* Near mountain ridge */}
              <path d="M12 180 Q90 140, 160 175 Q220 145, 280 172 Q340 150, 400 168 Q440 155, 515 178" fill="url(#inkMountain)" stroke="none" opacity="0.15" />
              <path d="M12 180 Q90 140, 160 175 Q220 145, 280 172 Q340 150, 400 168 Q440 155, 515 178" fill="none" stroke="#2c2420" strokeWidth="0.8" strokeDasharray="4,3" />
              {/* Mountain texture strokes (皴法 - cun fa) */}
              <path d="M80 140 Q85 145, 82 152" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
              <path d="M250 120 Q255 128, 252 135" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
              <path d="M350 115 Q354 122, 351 130" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.5" />
              <path d="M450 130 Q453 136, 451 142" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.4" />

              {/* ===== MIST LAYER (云雾) ===== */}
              <rect x="10" y="165" width="500" height="20" fill="url(#mistFade)" />

              {/* ===== CLOUD WISPS (祥云) ===== */}
              <path d="M120 55 Q135 42, 155 48 Q168 38, 185 48 Q198 40, 212 50 Q222 42, 235 52" fill="none" stroke="#2c2420" strokeWidth="0.7" opacity="0.5" />
              <path d="M125 60 Q138 50, 152 55 Q162 48, 175 55" fill="none" stroke="#2c2420" strokeWidth="0.4" opacity="0.35" />
              <path d="M290 50 Q305 40, 322 46 Q332 38, 348 48" fill="none" stroke="#2c2420" strokeWidth="0.6" opacity="0.45" />
              <path d="M55 80 Q68 72, 82 78 Q92 70, 105 78" fill="none" stroke="#2c2420" strokeWidth="0.5" opacity="0.4" />

              {/* ===== PLUM BLOSSOM BRANCH (梅花 - top left) ===== */}
              <path d="M12 25 Q40 42, 75 48 Q105 50, 130 45 Q145 42, 155 38" fill="none" stroke="#2c2420" strokeWidth="1.5" />
              <path d="M55 48 Q62 32, 78 28" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M100 47 Q108 38, 118 35" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              {/* Blossoms - 5 petal style */}
              <circle cx="72" cy="46" r="5" fill="none" stroke="#2c2420" strokeWidth="0.9" />
              <circle cx="72" cy="46" r="2" fill="#2c2420" />
              <circle cx="92" cy="48" r="4.5" fill="none" stroke="#2c2420" strokeWidth="0.9" />
              <circle cx="92" cy="48" r="1.8" fill="#2c2420" />
              <circle cx="112" cy="44" r="4" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <circle cx="112" cy="44" r="1.5" fill="#2c2420" />
              <circle cx="78" cy="28" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <circle cx="78" cy="28" r="1.2" fill="#2c2420" />
              <circle cx="130" cy="43" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <circle cx="130" cy="43" r="1.2" fill="#2c2420" />
              <circle cx="150" cy="38" r="3" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <circle cx="150" cy="38" r="1" fill="#2c2420" />
              <circle cx="118" cy="35" r="3" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <circle cx="118" cy="35" r="1" fill="#2c2420" />

              {/* ===== WILLOW BRANCHES (柳枝 - top right) ===== */}
              <path d="M500 15 Q475 45, 465 95 Q460 125, 465 155" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M493 20 Q472 55, 468 105 Q465 135, 470 165" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <path d="M508 25 Q485 60, 478 100 Q475 120, 478 140" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <path d="M495 40 Q480 50, 472 70" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              {/* Willow leaves */}
              <path d="M475 60 Q468 56, 462 62" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M470 80 Q463 76, 458 82" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M468 100 Q460 96, 456 102" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M467 120 Q460 117, 455 122" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M472 140 Q465 137, 460 142" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M480 75 Q474 72, 468 76" fill="none" stroke="#2c2420" strokeWidth="0.3" />

              {/* ===== CHINESE PAVILION (亭) ===== */}
              {/* Main roof */}
              <path d="M30 210 L80 178 L130 210" fill="none" stroke="#2c2420" strokeWidth="2" />
              <path d="M36 210 L80 183 L124 210" fill="none" stroke="#2c2420" strokeWidth="0.9" />
              {/* Roof upturned corners (飞檐) */}
              <path d="M28 211 Q23 206, 18 203" fill="none" stroke="#2c2420" strokeWidth="1.5" />
              <path d="M132 211 Q137 206, 142 203" fill="none" stroke="#2c2420" strokeWidth="1.5" />
              {/* Roof ridge ornament */}
              <circle cx="80" cy="177" r="2" fill="#2c2420" />
              {/* Pillars */}
              <line x1="50" y1="210" x2="50" y2="255" stroke="#2c2420" strokeWidth="1.5" />
              <line x1="110" y1="210" x2="110" y2="255" stroke="#2c2420" strokeWidth="1.5" />
              {/* Base platform */}
              <path d="M38 255 L122 255 L128 260 L32 260 Z" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              {/* Railing */}
              <line x1="50" y1="238" x2="110" y2="238" stroke="#2c2420" strokeWidth="0.9" />
              <line x1="65" y1="238" x2="65" y2="255" stroke="#2c2420" strokeWidth="0.6" />
              <line x1="80" y1="238" x2="80" y2="255" stroke="#2c2420" strokeWidth="0.6" />
              <line x1="95" y1="238" x2="95" y2="255" stroke="#2c2420" strokeWidth="0.6" />

              {/* ===== FIGURE 1: Man practicing martial arts by pavilion (练武) ===== */}
              {/* Head */}
              <circle cx="68" cy="215" r="5.5" fill="none" stroke="#2c2420" strokeWidth="1.3" />
              {/* Hair bun */}
              <path d="M65 210 Q68 206, 71 210" fill="none" stroke="#2c2420" strokeWidth="1" />
              <line x1="68" y1="207" x2="68" y2="210" stroke="#2c2420" strokeWidth="0.8" />
              {/* Neck */}
              <line x1="68" y1="220.5" x2="68" y2="223" stroke="#2c2420" strokeWidth="1" />
              {/* Broad shoulders */}
              <path d="M56 226 Q61 222, 68 223 Q75 222, 80 226" fill="none" stroke="#2c2420" strokeWidth="1.3" />
              {/* Torso V-taper */}
              <line x1="56" y1="226" x2="60" y2="248" stroke="#2c2420" strokeWidth="1.2" />
              <line x1="80" y1="226" x2="76" y2="248" stroke="#2c2420" strokeWidth="1.2" />
              {/* Chest */}
              <path d="M60 229 Q65 232, 68 230 Q71 232, 76 229" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              {/* Abs */}
              <line x1="68" y1="232" x2="68" y2="246" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M63 235 Q68 236, 73 235" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M63 239 Q68 240, 73 239" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M64 243 Q68 244, 72 243" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              {/* Waist */}
              <path d="M60 248 Q68 250, 76 248" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              {/* Left arm raised in martial pose */}
              <path d="M56 226 Q48 218, 42 212" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              <path d="M42 212 Q38 208, 35 205" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              {/* Left arm muscle */}
              <path d="M52 220 Q48 216, 46 213" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              {/* Right arm extended forward */}
              <path d="M80 226 Q88 228, 95 225" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              <path d="M95 225 Q100 223, 104 222" fill="none" stroke="#2c2420" strokeWidth="1" />
              {/* Right arm muscle */}
              <path d="M84 226 Q89 225, 93 224" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              {/* Legs in wide stance */}
              <line x1="63" y1="248" x2="55" y2="268" stroke="#2c2420" strokeWidth="1.2" />
              <line x1="73" y1="248" x2="82" y2="268" stroke="#2c2420" strokeWidth="1.2" />
              {/* Thigh muscles */}
              <path d="M60 250 Q57 256, 56 262" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M76 250 Q79 256, 80 262" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              {/* Calf definition */}
              <path d="M57 260 Q55 264, 55 268" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M80 260 Q82 264, 82 268" fill="none" stroke="#2c2420" strokeWidth="0.3" />

              {/* ===== MOON GATE (圆门) ===== */}
              <circle cx="215" cy="255" r="38" fill="none" stroke="#2c2420" strokeWidth="2" />
              {/* Gate walls */}
              <line x1="177" y1="217" x2="177" y2="298" stroke="#2c2420" strokeWidth="2" />
              <line x1="253" y1="217" x2="253" y2="298" stroke="#2c2420" strokeWidth="2" />
              <line x1="158" y1="217" x2="177" y2="217" stroke="#2c2420" strokeWidth="2" />
              <line x1="253" y1="217" x2="272" y2="217" stroke="#2c2420" strokeWidth="2" />
              <line x1="158" y1="217" x2="158" y2="298" stroke="#2c2420" strokeWidth="1.2" />
              <line x1="272" y1="217" x2="272" y2="298" stroke="#2c2420" strokeWidth="1.2" />
              {/* Wall texture - brick lines */}
              <line x1="161" y1="232" x2="175" y2="232" stroke="#2c2420" strokeWidth="0.4" />
              <line x1="161" y1="248" x2="175" y2="248" stroke="#2c2420" strokeWidth="0.4" />
              <line x1="161" y1="264" x2="175" y2="264" stroke="#2c2420" strokeWidth="0.4" />
              <line x1="161" y1="280" x2="175" y2="280" stroke="#2c2420" strokeWidth="0.4" />
              <line x1="255" y1="232" x2="270" y2="232" stroke="#2c2420" strokeWidth="0.4" />
              <line x1="255" y1="248" x2="270" y2="248" stroke="#2c2420" strokeWidth="0.4" />
              <line x1="255" y1="264" x2="270" y2="264" stroke="#2c2420" strokeWidth="0.4" />
              <line x1="255" y1="280" x2="270" y2="280" stroke="#2c2420" strokeWidth="0.4" />

              {/* ===== FIGURE 2: Man standing inside moon gate (original, enlarged) ===== */}
              {/* Head */}
              <circle cx="215" cy="230" r="7" fill="none" stroke="#2c2420" strokeWidth="1.3" />
              {/* Hair bun (traditional 髻) */}
              <path d="M211 223 Q215 218, 219 223" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              <line x1="215" y1="219" x2="215" y2="223" stroke="#2c2420" strokeWidth="0.9" />
              {/* Face detail - slight */}
              <path d="M213 229 Q215 230, 217 229" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              {/* Neck */}
              <line x1="215" y1="237" x2="215" y2="240" stroke="#2c2420" strokeWidth="1.1" />
              {/* Broad shoulders */}
              <path d="M200 244 Q207 239, 215 240 Q223 239, 230 244" fill="none" stroke="#2c2420" strokeWidth="1.4" />
              {/* Torso - V-taper muscular */}
              <line x1="200" y1="244" x2="205" y2="272" stroke="#2c2420" strokeWidth="1.2" />
              <line x1="230" y1="244" x2="225" y2="272" stroke="#2c2420" strokeWidth="1.2" />
              {/* Chest muscles (胸肌) */}
              <path d="M205 248 Q210 252, 215 249 Q220 252, 225 248" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              {/* Abs definition (腹肌) */}
              <line x1="215" y1="252" x2="215" y2="270" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M209 256 Q215 257, 221 256" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M209 260 Q215 261, 221 260" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M210 264 Q215 265, 220 264" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M210 268 Q215 269, 220 268" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              {/* Waist / hip */}
              <path d="M205 272 Q215 275, 225 272" fill="none" stroke="#2c2420" strokeWidth="0.9" />
              {/* Left arm - relaxed at side */}
              <path d="M200 244 Q194 252, 191 262" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              <path d="M191 262 Q190 267, 192 272" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              {/* Left bicep bulge */}
              <path d="M198 248 Q194 254, 194 260" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              {/* Right arm - relaxed */}
              <path d="M230 244 Q236 252, 239 262" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              <path d="M239 262 Q240 267, 238 272" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              {/* Right bicep bulge */}
              <path d="M232 248 Q236 254, 236 260" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              {/* Legs */}
              <line x1="209" y1="272" x2="206" y2="293" stroke="#2c2420" strokeWidth="1.2" />
              <line x1="221" y1="272" x2="224" y2="293" stroke="#2c2420" strokeWidth="1.2" />
              {/* Thigh muscle */}
              <path d="M210 275 Q208 281, 207 288" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M220 275 Q222 281, 223 288" fill="none" stroke="#2c2420" strokeWidth="0.4" />

              {/* ===== GARDEN ROCKS (太湖石) ===== */}
              {/* Large rock formation */}
              <path d="M285 300 Q278 278, 292 268 Q298 256, 312 264 Q322 254, 332 268 Q342 274, 336 292 Q326 308, 308 312 Q290 310, 285 300" fill="none" stroke="#2c2420" strokeWidth="1.5" />
              {/* Rock holes (通透) */}
              <ellipse cx="300" cy="278" rx="5" ry="6" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <ellipse cx="318" cy="284" rx="4" ry="4" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <ellipse cx="305" cy="296" rx="3" ry="3.5" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              {/* Rock texture (皴法) */}
              <path d="M290 288 Q294 285, 296 290" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M324 272 Q328 276, 326 282" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M295 270 Q299 268, 302 273" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M330 280 Q333 284, 331 289" fill="none" stroke="#2c2420" strokeWidth="0.3" />

              {/* Small rocks */}
              <path d="M340 310 Q337 298, 346 292 Q354 296, 358 306 Q352 315, 343 312 Z" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M275 315 Q273 308, 280 305 Q286 308, 287 314 Q282 318, 276 316 Z" fill="none" stroke="#2c2420" strokeWidth="0.7" />

              {/* ===== FIGURE 3: Man leaning on garden rock, contemplating (倚石沉思) ===== */}
              {/* Head */}
              <circle cx="350" cy="260" r="6" fill="none" stroke="#2c2420" strokeWidth="1.3" />
              {/* Hair bun */}
              <path d="M347 254 Q350 250, 353 254" fill="none" stroke="#2c2420" strokeWidth="1" />
              <line x1="350" y1="251" x2="350" y2="254" stroke="#2c2420" strokeWidth="0.8" />
              {/* Neck */}
              <line x1="350" y1="266" x2="350" y2="269" stroke="#2c2420" strokeWidth="1" />
              {/* Shoulders */}
              <path d="M338 272 Q343 268, 350 269 Q357 268, 362 272" fill="none" stroke="#2c2420" strokeWidth="1.3" />
              {/* Torso leaning slightly */}
              <line x1="338" y1="272" x2="341" y2="296" stroke="#2c2420" strokeWidth="1.2" />
              <line x1="362" y1="272" x2="358" y2="296" stroke="#2c2420" strokeWidth="1.2" />
              {/* Chest */}
              <path d="M342 276 Q347 279, 350 277 Q353 279, 358 276" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              {/* Abs */}
              <line x1="350" y1="279" x2="350" y2="294" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M345 282 Q350 283, 355 282" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M345 286 Q350 287, 355 286" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M346 290 Q350 291, 354 290" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              {/* Waist */}
              <path d="M341 296 Q350 298, 358 296" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              {/* Left arm resting on rock */}
              <path d="M338 272 Q332 278, 328 285" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              <path d="M328 285 Q325 290, 322 292" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M335 276 Q331 282, 330 286" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              {/* Right arm - hand on hip */}
              <path d="M362 272 Q366 280, 364 288" fill="none" stroke="#2c2420" strokeWidth="1.2" />
              <path d="M364 288 Q362 293, 358 296" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M363 276 Q366 282, 365 288" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              {/* Legs - crossed casual stance */}
              <line x1="345" y1="296" x2="342" y2="320" stroke="#2c2420" strokeWidth="1.2" />
              <line x1="355" y1="296" x2="352" y2="320" stroke="#2c2420" strokeWidth="1.2" />
              {/* Leg muscles */}
              <path d="M344 300 Q342 306, 342 312" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M354 300 Q352 306, 352 312" fill="none" stroke="#2c2420" strokeWidth="0.4" />

              {/* ===== BAMBOO CLUSTER (竹林 - right side) ===== */}
              {/* Stalks */}
              <line x1="400" y1="180" x2="400" y2="320" stroke="#2c2420" strokeWidth="1.5" />
              <line x1="412" y1="185" x2="412" y2="320" stroke="#2c2420" strokeWidth="1.2" />
              <line x1="393" y1="190" x2="393" y2="320" stroke="#2c2420" strokeWidth="1" />
              <line x1="420" y1="195" x2="420" y2="320" stroke="#2c2420" strokeWidth="0.8" />
              {/* Nodes */}
              <line x1="398" y1="210" x2="402" y2="210" stroke="#2c2420" strokeWidth="1.8" />
              <line x1="398" y1="240" x2="402" y2="240" stroke="#2c2420" strokeWidth="1.8" />
              <line x1="398" y1="270" x2="402" y2="270" stroke="#2c2420" strokeWidth="1.8" />
              <line x1="398" y1="300" x2="402" y2="300" stroke="#2c2420" strokeWidth="1.8" />
              <line x1="410" y1="220" x2="414" y2="220" stroke="#2c2420" strokeWidth="1.4" />
              <line x1="410" y1="250" x2="414" y2="250" stroke="#2c2420" strokeWidth="1.4" />
              <line x1="410" y1="280" x2="414" y2="280" stroke="#2c2420" strokeWidth="1.4" />
              <line x1="391" y1="225" x2="395" y2="225" stroke="#2c2420" strokeWidth="1.2" />
              <line x1="391" y1="260" x2="395" y2="260" stroke="#2c2420" strokeWidth="1.2" />
              <line x1="391" y1="295" x2="395" y2="295" stroke="#2c2420" strokeWidth="1.2" />
              {/* Bamboo leaves (竹叶) - pointed brush strokes */}
              <path d="M400 180 Q382 174, 370 180" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M400 180 Q388 168, 372 165" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M400 180 Q412 170, 425 174" fill="none" stroke="#2c2420" strokeWidth="0.9" />
              <path d="M412 185 Q425 177, 438 180" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M412 185 Q422 178, 432 168" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M393 190 Q378 184, 365 188" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M393 190 Q380 180, 368 176" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M420 195 Q432 188, 442 192" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              {/* Mid-level leaves */}
              <path d="M400 210 Q386 204, 374 208" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <path d="M400 210 Q414 204, 426 208" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <path d="M412 220 Q426 214, 438 218" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <path d="M393 225 Q380 220, 368 224" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              {/* Lower leaves */}
              <path d="M400 240 Q388 235, 376 238" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M412 250 Q424 245, 434 248" fill="none" stroke="#2c2420" strokeWidth="0.5" />

              {/* ===== FIGURE 4: Man meditating by bamboo (竹林打坐) ===== */}
              {/* Head */}
              <circle cx="440" cy="268" r="6" fill="none" stroke="#2c2420" strokeWidth="1.3" />
              {/* Hair bun */}
              <path d="M437 262 Q440 258, 443 262" fill="none" stroke="#2c2420" strokeWidth="1" />
              <line x1="440" y1="259" x2="440" y2="262" stroke="#2c2420" strokeWidth="0.8" />
              {/* Neck */}
              <line x1="440" y1="274" x2="440" y2="276" stroke="#2c2420" strokeWidth="1" />
              {/* Shoulders */}
              <path d="M428 279 Q433 276, 440 277 Q447 276, 452 279" fill="none" stroke="#2c2420" strokeWidth="1.3" />
              {/* Torso - upright seated */}
              <line x1="428" y1="279" x2="432" y2="302" stroke="#2c2420" strokeWidth="1.2" />
              <line x1="452" y1="279" x2="448" y2="302" stroke="#2c2420" strokeWidth="1.2" />
              {/* Chest */}
              <path d="M432 283 Q436 286, 440 284 Q444 286, 448 283" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              {/* Abs */}
              <line x1="440" y1="286" x2="440" y2="300" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M435 289 Q440 290, 445 289" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M435 293 Q440 294, 445 293" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M436 297 Q440 298, 444 297" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              {/* Waist */}
              <path d="M432 302 Q440 304, 448 302" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              {/* Arms in meditation mudra (hands on knees) */}
              {/* Left arm */}
              <path d="M428 279 Q424 286, 422 294" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              <path d="M422 294 Q420 298, 424 302" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M426 283 Q423 289, 423 294" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              {/* Right arm */}
              <path d="M452 279 Q456 286, 458 294" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              <path d="M458 294 Q460 298, 456 302" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M454 283 Q457 289, 457 294" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              {/* Crossed legs (盘腿) */}
              <path d="M435 302 Q428 308, 425 312 Q422 316, 430 318" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              <path d="M445 302 Q452 308, 455 312 Q458 316, 450 318" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              {/* Leg overlap */}
              <path d="M430 318 Q438 315, 440 310 Q442 315, 450 318" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              {/* Thigh muscles */}
              <path d="M433 304 Q430 309, 428 314" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M447 304 Q450 309, 452 314" fill="none" stroke="#2c2420" strokeWidth="0.4" />

              {/* ===== WATER / POND (池塘) ===== */}
              <rect x="12" y="330" width="496" height="55" fill="url(#waterWash)" />
              <path d="M12 330 Q60 324, 120 330 Q180 336, 240 330 Q300 324, 360 330 Q420 336, 508 330" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M30 338 Q80 334, 140 338 Q200 342, 260 338 Q320 334, 380 338 Q430 342, 490 338" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M50 346 Q100 343, 160 346 Q220 349, 280 346 Q340 343, 400 346 Q450 349, 500 346" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.6" />
              {/* Water ripples */}
              <path d="M180 350 Q190 348, 200 350 Q210 352, 220 350" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.4" />
              <path d="M350 355 Q360 353, 370 355 Q380 357, 390 355" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.4" />
              {/* Lotus leaves in water */}
              <ellipse cx="120" cy="345" rx="10" ry="4" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <line x1="120" y1="341" x2="120" y2="349" stroke="#2c2420" strokeWidth="0.3" />
              <ellipse cx="380" cy="348" rx="8" ry="3" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <line x1="380" y1="345" x2="380" y2="351" stroke="#2c2420" strokeWidth="0.3" />
              {/* Lotus bud */}
              <line x1="150" y1="340" x2="150" y2="330" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M147 330 Q150 324, 153 330" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <path d="M148 331 Q150 326, 152 331" fill="none" stroke="#2c2420" strokeWidth="0.4" />

              {/* ===== FIGURE 5: Man bathing in pond (沐浴) ===== */}
              {/* Head and upper body above water */}
              <circle cx="320" cy="322" r="6" fill="none" stroke="#2c2420" strokeWidth="1.3" />
              {/* Hair bun - wet/loose */}
              <path d="M317 316 Q320 312, 323 316" fill="none" stroke="#2c2420" strokeWidth="1" />
              <line x1="320" y1="313" x2="320" y2="316" stroke="#2c2420" strokeWidth="0.8" />
              {/* Hair flowing down */}
              <path d="M314 322 Q312 326, 311 330" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              {/* Neck */}
              <line x1="320" y1="328" x2="320" y2="330" stroke="#2c2420" strokeWidth="1" />
              {/* Shoulders emerging from water */}
              <path d="M308 333 Q313 330, 320 331 Q327 330, 332 333" fill="none" stroke="#2c2420" strokeWidth="1.3" />
              {/* Upper chest visible */}
              <path d="M310 335 Q315 338, 320 336 Q325 338, 330 335" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              {/* Arms resting on water surface */}
              <path d="M308 333 Q302 336, 298 338" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              <path d="M332 333 Q338 336, 342 338" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              {/* Shoulder/deltoid definition */}
              <path d="M310 332 Q308 334, 306 336" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M330 332 Q332 334, 334 336" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              {/* Water splashes around body */}
              <path d="M305 340 Q310 338, 315 340" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M325 340 Q330 338, 335 340" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M295 342 Q300 340, 305 342" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M335 342 Q340 340, 345 342" fill="none" stroke="#2c2420" strokeWidth="0.3" />

              {/* ===== STEPPING STONES (踏石) ===== */}
              <ellipse cx="155" cy="300" rx="10" ry="4" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <ellipse cx="175" cy="310" rx="9" ry="3.5" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              <ellipse cx="195" cy="318" rx="8" ry="3" fill="none" stroke="#2c2420" strokeWidth="0.6" />

              {/* ===== PINE TREE (松树 - left side) ===== */}
              <path d="M18 155 Q22 140, 20 120 Q18 100, 25 85 Q30 72, 28 60" fill="none" stroke="#2c2420" strokeWidth="2" />
              {/* Pine branches */}
              <path d="M25 85 Q40 78, 55 82" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M22 100 Q10 94, 15 85" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M28 60 Q38 52, 48 56" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              {/* Pine needle clusters */}
              <path d="M48 56 Q55 50, 52 44" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M48 56 Q56 54, 58 48" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M48 56 Q54 58, 58 54" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M55 82 Q62 76, 60 70" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M55 82 Q63 80, 66 74" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M55 82 Q60 85, 65 80" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M15 85 Q8 80, 10 74" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M15 85 Q10 82, 6 76" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              {/* Bark texture */}
              <path d="M22 130 Q24 128, 22 125" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M24 110 Q26 108, 24 105" fill="none" stroke="#2c2420" strokeWidth="0.4" />

              {/* ===== CRANE (仙鹤 - auspicious bird) ===== */}
              <path d="M470 290 Q475 285, 478 280" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <circle cx="478" cy="278" r="3" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              {/* Beak */}
              <path d="M481 278 L486 276" fill="none" stroke="#2c2420" strokeWidth="0.7" />
              {/* Body */}
              <path d="M470 290 Q465 295, 462 300 Q458 306, 465 310" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M470 290 Q476 296, 478 302 Q480 308, 475 312" fill="none" stroke="#2c2420" strokeWidth="1" />
              {/* Tail feathers */}
              <path d="M465 310 Q460 314, 455 312" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <path d="M465 310 Q462 316, 458 315" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              {/* Legs */}
              <line x1="468" y1="310" x2="466" y2="325" stroke="#2c2420" strokeWidth="0.6" />
              <line x1="473" y1="310" x2="475" y2="325" stroke="#2c2420" strokeWidth="0.6" />
              {/* Wing detail */}
              <path d="M468 295 Q472 292, 476 296" fill="none" stroke="#2c2420" strokeWidth="0.4" />

              {/* ===== GROUND / EARTH TEXTURE ===== */}
              <path d="M12 320 Q100 315, 155 318 Q200 322, 285 318 Q370 314, 440 320 Q480 323, 508 318" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              {/* Grass tufts */}
              <path d="M35 268 Q38 262, 40 268" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M38 268 Q42 263, 44 268" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M140 305 Q143 299, 145 305" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M460 325 Q463 320, 465 325" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M490 322 Q493 317, 495 322" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M370 318 Q372 313, 375 318" fill="none" stroke="#2c2420" strokeWidth="0.3" />

              {/* ===== RED SEAL STAMP (印章) ===== */}
              <rect x="475" y="352" width="22" height="22" fill="none" stroke="#8b2500" strokeWidth="1.5" rx="1" />
              <text x="486" y="367" textAnchor="middle" fill="#8b2500" fontSize="10" fontFamily="serif" fontWeight="bold">品</text>

              {/* ===== CALLIGRAPHY TITLE (题字) ===== */}
              <text x="488" y="200" textAnchor="middle" fill="#2c2420" fontSize="14" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">品花宝鉴</text>
              <text x="502" y="200" textAnchor="middle" fill="#2c2420" fontSize="7" fontFamily="serif" writingMode="vertical-rl" opacity="0.5">陈森</text>

              {/* ===== FLYING BIRDS (飞鸟) ===== */}
              <path d="M180 95 Q185 88, 190 92 Q195 86, 200 92" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M200 88 Q204 82, 208 86 Q212 80, 216 86" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M160 100 Q164 94, 168 98 Q172 93, 176 98" fill="none" stroke="#2c2420" strokeWidth="0.4" />
            </svg>

            <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] mb-6 font-bold border-b border-[#d4c5a9] pb-2">
              {t.chapters}
            </h2>
            <div className="mb-6 space-y-2 pb-4 border-b border-[#d4c5a9]">
              <p className="text-base font-bold font-hans text-[#2c2420]">
                品花宝鉴
              </p>
              <p className="text-[11px] font-hans text-[#5d5048]">作者：陈森</p>
              <p className="text-[11px] font-hans text-[#2c2420] leading-relaxed">
                {lang === "en"
                  ? "Pinhua Baojian (also known as Yiqing Yishi and Qunhua Baojian) is a 60-chapter novel by Chen Sen of the Qing dynasty, depicting the culture of male entertainers. A native of Changzhou, Chen Sen repeatedly failed the imperial examinations and gave up around age 40. While living in Beijing he frequently associated with performers, gathering material for the novel."
                  : "《品花宝鉴》，亦作《怡情佚史》、《群花宝鉴》，清代陈森所著的一部描写狎优风气的长篇小说，共60回。陈森是常州人，科举常年不得意，40岁后放弃科举。他寓居北京时常与优伶交往，为日后的创作积累了素材。"}
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
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
                className="text-left p-2 rounded-sm border border-[#8b4513]/40 hover:bg-[#8b4513]/10 hover:border-[#8b4513]/60 transition-all group flex items-center gap-2 mb-1"
              >
                <Book
                  size={12}
                  className="text-[#8b4513]/60 group-hover:text-[#8b4513] shrink-0"
                />
                <span className="text-[11px] font-hans font-bold text-[#8b4513] leading-tight">
                  {lang === "en" ? "Contents" : "目录"}
                </span>
              </button>
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => setSelectedChapter(chapter)}
                  className="text-left p-2 rounded-sm border border-[#d4c5a9]/30 hover:bg-[#8b4513]/5 hover:border-[#8b4513]/30 transition-all group flex items-center gap-2"
                >
                  <Book
                    size={12}
                    className="text-[#8b4513]/40 group-hover:text-[#8b4513] shrink-0"
                  />
                  <span className="text-[11px] font-hans text-[#2c2420] leading-tight">
                    {lang === "en"
                      ? chapter.id === 0
                        ? "Preface"
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
              {lang === "en" ? "Source: Wikisource" : "文本来源：维基文库"}
            </a>
          </div>

          {/* Works Cited */}
          <div
            id="works"
            className="parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[#d4c5a9] scroll-mt-24"
          >
            <div className="flex items-baseline justify-between border-b border-[#d4c5a9] pb-2 mb-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] font-bold">
                {lang === "zh" ? "引书与作品" : "Works Cited"}
              </h2>
              <span className="text-[10px] text-[#8b4513] font-sans font-bold">
                {allWorksCited.length} {lang === "zh" ? "部" : "unique"}
              </span>
            </div>
            <p className="text-[10px] text-[#5d5048] italic mb-4">
              {lang === "zh"
                ? "分组根据作品描述自动推断；未注明者多为演出散出。"
                : "Groups are inferred from work descriptions; unannotated titles are mostly performed scenes."}
            </p>
            <div className="space-y-5">
              {worksCitedByCategory.map(({ category, label, works }) => (
                <div key={category}>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#5d5048] font-bold">
                      {lang === "zh" ? label.zh : label.en}
                    </p>
                    <span className="text-[9px] text-[#8b4513] font-sans font-bold">
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
                            ? "border-2 border-[#8b4513] bg-[#e8dcc4] text-[#8b4513] font-bold shadow-sm hover:bg-[#d4c5a9]"
                            : "border border-[#d4c5a9] bg-[#f4ecd8]/80 text-[#2c2420] hover:bg-[#d4c5a9]/40"
                            }`}
                        >
                          {lang === "en" && WORK_ENGLISH_BY_CHINESE[workKey]
                            ? WORK_ENGLISH_BY_CHINESE[workKey]
                            : work}
                          {count > 1 && (
                            <span
                              className={`ml-1 text-[9px] font-sans ${hasDetailedDescription ? "text-[#5d5048]" : "text-[#8b4513]"}`}
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

          {/* Locations */}
          <div
            id="locations"
            className="parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[#d4c5a9] scroll-mt-24"
          >
            <div className="flex items-baseline justify-between border-b border-[#d4c5a9] pb-2 mb-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] font-bold flex items-center gap-2">
                <MapPin size={12} className="text-[#8b4513]" />
                {lang === "zh" ? "地点索引" : "Locations"}
              </h2>
              <span className="text-[10px] text-[#8b4513] font-sans font-bold">
                {locationsByType.reduce(
                  (sum, group) => sum + group.locations.length,
                  0,
                )}{" "}
                {lang === "zh" ? "处" : "places"}
              </span>
            </div>
            <div className="space-y-5">
              {locationsByType.map((group) => (
                <div key={group.type}>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#5d5048] font-bold">
                      {lang === "zh" ? group.label.zh : group.label.en}
                    </p>
                    <span className="text-[9px] text-[#8b4513] font-sans font-bold">
                      {group.locations.length}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.locations.map((location) => (
                      <button
                        key={location.id}
                        onClick={() => setSelectedLocation(location)}
                        className="px-2.5 py-1.5 rounded-sm border border-[#d4c5a9]/50 bg-white/10 hover:bg-[#8b4513]/5 hover:border-[#8b4513]/30 transition-all group"
                        title={
                          lang === "zh" ? `${location.name}` : location.nameEn
                        }
                      >
                        <p className="text-[11px] font-bold text-[#2c2420] font-hans leading-tight group-hover:text-[#8b4513] transition-colors whitespace-nowrap">
                          {lang === "zh" ? location.name : location.nameEn}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* === Illustration: Scholar's Study 书斋图 (Ch.1 Arrival in Beijing) === */}
          <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center mt-5 mb-5">
            <svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ maxHeight: '130px' }}>
              <rect x="3" y="3" width="274" height="144" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="1" />
              <rect x="6" y="6" width="268" height="138" fill="none" stroke="#2c2420" strokeWidth="1.2" rx="2" />
              <path d="M80 85 L200 85 L205 90 L75 90 Z" fill="none" stroke="#2c2420" strokeWidth="1" />
              <line x1="85" y1="90" x2="85" y2="120" stroke="#2c2420" strokeWidth="0.8" />
              <line x1="195" y1="90" x2="195" y2="120" stroke="#2c2420" strokeWidth="0.8" />
              <line x1="85" y1="110" x2="195" y2="110" stroke="#2c2420" strokeWidth="0.4" />
              <rect x="170" y="76" width="18" height="9" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <line x1="170" y1="79" x2="188" y2="79" stroke="#2c2420" strokeWidth="0.3" />
              <line x1="170" y1="82" x2="188" y2="82" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M120 82 Q130 78, 140 82" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <path d="M140 82 Q150 78, 160 82" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <line x1="140" y1="78" x2="140" y2="85" stroke="#2c2420" strokeWidth="0.3" />
              <line x1="125" y1="80" x2="137" y2="80" stroke="#2c2420" strokeWidth="0.2" />
              <line x1="143" y1="80" x2="155" y2="80" stroke="#2c2420" strokeWidth="0.2" />
              <ellipse cx="100" cy="82" rx="5" ry="3" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <line x1="92" y1="78" x2="108" y2="78" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M92 78 Q90 76, 89 78" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <circle cx="140" cy="52" r="5.5" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              <path d="M137 47 Q140 43, 143 47" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <line x1="140" y1="44" x2="140" y2="47" stroke="#2c2420" strokeWidth="0.6" />
              <line x1="140" y1="57.5" x2="140" y2="59" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M130 62 Q135 59, 140 60 Q145 59, 150 62" fill="none" stroke="#2c2420" strokeWidth="1.1" />
              <line x1="130" y1="62" x2="133" y2="82" stroke="#2c2420" strokeWidth="1" />
              <line x1="150" y1="62" x2="147" y2="82" stroke="#2c2420" strokeWidth="1" />
              <path d="M134 66 Q137 68, 140 67 Q143 68, 146 66" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <line x1="140" y1="68" x2="140" y2="80" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M136 71 Q140 72, 144 71" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M136 75 Q140 76, 144 75" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M130 62 Q124 68, 120 75" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M120 75 Q118 78, 118 80" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <path d="M150 62 Q156 68, 160 75" fill="none" stroke="#2c2420" strokeWidth="1" />
              <path d="M160 75 Q162 78, 162 80" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <rect x="220" y="30" width="40" height="60" fill="none" stroke="#2c2420" strokeWidth="0.8" />
              <line x1="220" y1="45" x2="260" y2="45" stroke="#2c2420" strokeWidth="0.4" />
              <line x1="220" y1="60" x2="260" y2="60" stroke="#2c2420" strokeWidth="0.4" />
              <line x1="220" y1="75" x2="260" y2="75" stroke="#2c2420" strokeWidth="0.4" />
              <rect x="223" y="32" width="3" height="12" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <rect x="227" y="33" width="3" height="11" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <rect x="231" y="32" width="4" height="12" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <rect x="236" y="34" width="3" height="10" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <rect x="224" y="47" width="3" height="12" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <rect x="228" y="48" width="4" height="11" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <rect x="233" y="47" width="3" height="12" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <circle cx="250" cy="52" r="3" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <line x1="250" y1="49" x2="250" y2="55" stroke="#2c2420" strokeWidth="0.3" />
              <rect x="25" y="20" width="22" height="50" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <line x1="36" y1="15" x2="36" y2="20" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M28 45 Q33 32, 38 40 Q42 30, 44 45" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M58 78 Q60 72, 62 78" fill="none" stroke="#2c2420" strokeWidth="0.6" />
              <ellipse cx="60" cy="79" rx="4" ry="2" fill="none" stroke="#2c2420" strokeWidth="0.5" />
              <path d="M60 72 Q58 66, 60 60 Q62 54, 60 48" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.5" />
              <path d="M60 70 Q63 64, 62 58" fill="none" stroke="#2c2420" strokeWidth="0.25" opacity="0.4" />
              <rect x="15" y="75" width="30" height="30" fill="none" stroke="#2c2420" strokeWidth="0.7" rx="1" />
              <line x1="30" y1="75" x2="30" y2="105" stroke="#2c2420" strokeWidth="0.3" />
              <line x1="15" y1="90" x2="45" y2="90" stroke="#2c2420" strokeWidth="0.3" />
              <line x1="25" y1="78" x2="25" y2="102" stroke="#2c2420" strokeWidth="0.4" />
              <path d="M25 82 Q20 80, 18 83" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M25 90 Q30 88, 33 91" fill="none" stroke="#2c2420" strokeWidth="0.3" />
              <path d="M10 130 Q140 126, 270 130" fill="none" stroke="#2c2420" strokeWidth="0.4" />
              <rect x="248" y="118" width="14" height="14" fill="none" stroke="#8b2500" strokeWidth="1" rx="0.5" />
              <text x="255" y="129" textAnchor="middle" fill="#8b2500" fontSize="7" fontFamily="serif" fontWeight="bold">书</text>
            </svg>
            <p className="text-[9px] text-[#5d5048] italic mt-1 font-hans">{lang === 'zh' ? '第一回 · 梅子玉初入京华' : 'Ch. 1 · Mei Ziyu Arrives in the Capital'}</p>
          </div>

          {/* Downloads */}
          <div
            id="downloads"
            className="parchment p-4 sm:p-6 rounded-sm border-double border-4 border-[#d4c5a9] scroll-mt-24"
          >
            <div className="flex items-baseline justify-between border-b border-[#d4c5a9] pb-2 mb-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#5d5048] font-bold flex items-center gap-2">
                <Download size={12} className="text-[#8b4513]" />
                {lang === "zh" ? "下载" : "Download"}
              </h2>
              <span className="text-[10px] text-[#8b4513] font-sans font-bold">
                61 {lang === "zh" ? "章" : "chapters"}
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#5d5048] font-bold mb-1">
                {lang === "en" ? "Full text" : "全文"}
              </p>
              <button
                onClick={downloadChinese}
                className="text-left px-2 py-1.5 rounded-sm border border-[#d4c5a9] hover:bg-[#8b4513]/8 hover:border-[#8b4513]/40 transition-all text-[10px] text-[#5d5048] hover:text-[#8b4513]"
              >
                {lang === "en" ? "↓ Chinese text (.txt)" : "↓ 中文全文 (.txt)"}
              </button>
              <button
                onClick={downloadEnglish}
                className="text-left px-2 py-1.5 rounded-sm border border-[#d4c5a9] hover:bg-[#8b4513]/8 hover:border-[#8b4513]/40 transition-all text-[10px] text-[#5d5048] hover:text-[#8b4513]"
              >
                {lang === "en"
                  ? "↓ English translation (.txt)"
                  : "↓ 英文译文 (.txt)"}
              </button>
              <button
                onClick={downloadInterleaved}
                className="text-left px-2 py-1.5 rounded-sm border border-[#d4c5a9] hover:bg-[#8b4513]/8 hover:border-[#8b4513]/40 transition-all text-[10px] text-[#5d5048] hover:text-[#8b4513]"
              >
                {lang === "en"
                  ? "↓ Bilingual interleaved (.txt)"
                  : "↓ 中英对照 (.txt)"}
              </button>
              <button
                onClick={downloadJSON}
                className="text-left px-2 py-1.5 rounded-sm border border-[#d4c5a9] hover:bg-[#8b4513]/8 hover:border-[#8b4513]/40 transition-all text-[10px] text-[#5d5048] hover:text-[#8b4513]"
              >
                {lang === "en"
                  ? "↓ Bilingual interleaved (.json)"
                  : "↓ 中英对照 (.json)"}
              </button>
            </div>
            <div className="mt-4 pt-4 border-t border-[#d4c5a9] space-y-3">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#5d5048] font-bold">
                {lang === "en" ? "By chapter" : "分章下载"}
              </p>
              <div>
                <p className="text-[9px] text-[#8b4513] font-bold mb-1.5 font-hans">
                  {lang === "en" ? "Chinese (.txt)" : "中文 (.txt)"}
                </p>
                <div className="flex flex-wrap gap-1">
                  {chapters.map((ch) => (
                    <a
                      key={`zh-${ch.id}`}
                      href={`/downloads/chinese/${chapterTxtFilename(ch.id)}`}
                      download
                      title={ch.title}
                      className="min-w-[1.75rem] px-1.5 py-0.5 text-center text-[9px] rounded-sm border border-[#d4c5a9] bg-[#f4ecd8]/80 text-[#2c2420] hover:bg-[#8b4513]/10 hover:border-[#8b4513]/40 hover:text-[#8b4513] transition-colors font-hans font-bold"
                    >
                      {ch.id === 0 ? "序" : ch.id}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[9px] text-[#8b4513] font-bold mb-1.5">
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
                        className="min-w-[1.75rem] px-1.5 py-0.5 text-center text-[9px] rounded-sm border border-[#d4c5a9] bg-[#f4ecd8]/80 text-[#2c2420] hover:bg-[#8b4513]/10 hover:border-[#8b4513]/40 hover:text-[#8b4513] transition-colors font-sans font-bold"
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

      <footer className="max-w-[1800px] mx-auto px-2 sm:px-5 pb-8 text-center">
        <p className="text-xs text-[#5d5048]">
          Precious Vibe 品花宝境 is authored by TengChao Zhou in
          2026 with the help of AI technologies.
        </p>
        <div className="mt-3 flex justify-center">
          <CiteButton lang={lang} direction="up" />
        </div>
      </footer>

      {/* Floating Scroll Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-40">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-3 bg-[#8b4513] text-[#f4ecd8] rounded-full shadow-lg border-2 border-[#d4c5a9] hover:bg-[#2c2420] transition-colors"
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
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              data-overlay-scroll="true"
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full sm:max-w-lg sm:max-h-[85vh] sm:rounded-sm max-h-[86vh] overflow-y-auto parchment rounded-t-sm sm:rounded-sm border-t-4 sm:border-4 border-x-4 border-double border-[#d4c5a9] shadow-2xl p-4 sm:p-5"
            >
              <div className="flex items-center justify-between gap-3 border-b border-[#d4c5a9] pb-3 mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#5d5048] font-bold">
                    {lang === "zh" ? "快速前往" : "Go To"}
                  </p>
                  <h2 className="text-lg font-bold text-[#2c2420]">
                    {lang === "zh" ? "品花宝鉴数据库" : "Pinhua Baojian"}
                  </h2>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="h-10 w-10 rounded-sm border border-[#d4c5a9] bg-white/20 text-[#2c2420] flex items-center justify-center hover:bg-black/5 transition-colors"
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
                    className="min-h-14 text-left rounded-sm border border-[#d4c5a9]/70 bg-white/15 hover:bg-[#8b4513]/8 hover:border-[#8b4513]/40 transition-all px-3 py-2 flex items-center gap-3"
                  >
                    <Icon size={17} className="text-[#8b4513] shrink-0" />
                    <span className="text-[12px] font-bold uppercase tracking-wide text-[#2c2420] leading-tight">
                      {label}
                    </span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <button
                  onClick={openContents}
                  className="min-h-12 rounded-sm bg-[#8b4513] text-[#f4ecd8] px-3 py-2 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider"
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
                  className="min-h-12 rounded-sm border border-[#8b4513]/50 text-[#8b4513] bg-[#8b4513]/5 px-3 py-2 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider"
                >
                  <BookOpen size={15} />
                  {lang === "zh" ? "读第一回" : "Read Ch. 1"}
                </button>
              </div>

              <div className="border-t border-[#d4c5a9] pt-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#5d5048] font-bold mb-2">
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
                        className="h-10 rounded-sm border border-[#d4c5a9] bg-white/15 text-[10px] font-bold text-[#2c2420] hover:bg-[#8b4513]/8 hover:border-[#8b4513]/40 transition-colors"
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
            onSelectWork={setSelectedWork}
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
  );
}
