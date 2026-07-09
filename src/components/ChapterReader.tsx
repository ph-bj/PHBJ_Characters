import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUp,
  Book,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Search,
  Square,
  Volume2,
  X,
} from "lucide-react";
import { characters } from "../data";
import { chapters } from "../chapters";
import { chapterSummaries } from "../chapterSummaries";
import { WORK_ENGLISH_BY_CHINESE } from "../englishWorkTitles";
import type { Character, Chapter } from "../types";
import {
  CHAPTER_ANNOTATION_TOKEN_SPLIT_REGEX,
  GENERIC_HONORIFICS,
  ROLE_CHIP_IDLE,
  chapterTitleTranslations,
  chapterWorkAnchorId,
  countSearchMatchesInRenderedText,
  countTextSearchMatches,
  getChapterMentionedCharacters,
  getChapterReaderSubtitle,
  getChapterReaderTitle,
  getChineseShortFormTokens,
  getEnglishAliasTokens,
  getSegmentChipLabel,
  isChineseWorkAnnotationToken,
  isWorkAnnotationToken,
  renderTextWithSearchHighlight,
  segmentText,
  stripDiacritics,
  translationMap,
  workKeyFromAnnotationToken,
} from "../utils";
import { PermalinkButton } from "./PermalinkButton";
import { ChapterScene } from "./illustrations/ChapterScene";
import { ChapterEndScene } from "./illustrations/ChapterEndScene";
import { ChapterAppreciation } from "./ChapterAppreciation";
import {
  ChapterMidScene,
  midSceneParagraphIndex,
} from "./illustrations/ChapterMidScene";
import { SnowMountainSVG } from "./illustrations/snow/SnowMountainSVG";
import { SnowPagodaSVG } from "./illustrations/snow/SnowPagodaSVG";
import { SnowScreenSVG } from "./illustrations/snow/SnowScreenSVG";
import { SnowLanternSVG } from "./illustrations/snow/SnowLanternSVG";
import { SnowLionSVG } from "./illustrations/snow/SnowLionSVG";
import { SnowCatSVG } from "./illustrations/snow/SnowCatSVG";
import { SnowArhatSVG } from "./illustrations/snow/SnowArhatSVG";
import { SnowBeautySVG } from "./illustrations/snow/SnowBeautySVG";
import { SnowFeelingSVG } from "./illustrations/snow/SnowFeelingSVG";
import { SnowShadowSVG } from "./illustrations/snow/SnowShadowSVG";
import { SnowSoundSVG } from "./illustrations/snow/SnowSoundSVG";
import { SnowColorSVG } from "./illustrations/snow/SnowColorSVG";

export const READER_LAST_POSITION_KEY = "phbj-reader-last-position";
const READER_FONT_SCALE_KEY = "phbj-reader-font-scale";
const READER_FONT_SCALES = [0.85, 1, 1.15, 1.3, 1.5];
const DEFAULT_FONT_SCALE_INDEX = 1;
const READER_ZH_VOICE_KEY = "phbj-reader-zh-voice";
const READER_EN_VOICE_KEY = "phbj-reader-en-voice";

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

function injectParagraphNumber(nodes: React.ReactNode, num: number): React.ReactNode {
  if (nodes === null || nodes === undefined) return nodes;

  // If nodes is a string
  if (typeof nodes === "string") {
    const trimmed = nodes.trimStart();
    const leadingWhitespace = nodes.slice(0, nodes.length - trimmed.length);
    if (trimmed.length > 0) {
      const firstChar = trimmed.charAt(0);
      const rest = trimmed.slice(1);
      return (
        <span key="para-start">
          {leadingWhitespace}
          <ruby className="ruby-paragraph-number">
            {firstChar}
            <rt className="text-[10px] select-none font-sans font-normal text-[var(--ink-dim-text)]/75">{num}</rt>
          </ruby>
          {rest}
        </span>
      );
    }
    return nodes;
  }

  // If nodes is an array of ReactNode
  if (Array.isArray(nodes)) {
    const newNodes = [...nodes];
    for (let i = 0; i < newNodes.length; i++) {
      const originalNode = newNodes[i];
      const modifiedNode = injectParagraphNumber(originalNode, num);
      if (modifiedNode !== originalNode) {
        newNodes[i] = modifiedNode;
        return newNodes;
      }
    }
    return nodes;
  }

  // If nodes is a valid React element
  if (React.isValidElement(nodes)) {
    const children = (nodes.props as any).children;
    if (children !== undefined && children !== null) {
      const modifiedChildren = injectParagraphNumber(children, num);
      if (modifiedChildren !== children) {
        return React.cloneElement(nodes, {} as any, modifiedChildren);
      }
    }
  }

  return nodes;
}

const PlumIcon: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 20 }) => {
  const INK = "#2c2420";
  return (
    <svg
      viewBox="-4 -1 25 25"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="readerPlumGradient" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#e8efb8" stopOpacity="0.95" />
          <stop offset="30%" stopColor="#c5d66a" stopOpacity="0.92" />
          <stop offset="65%" stopColor="#8db34a" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#5c7a3a" stopOpacity="0.95" />
        </radialGradient>
        <linearGradient id="readerLeafGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a7c29b" />
          <stop offset="100%" stopColor="#5c7a4d" />
        </linearGradient>
        <filter id="readerPlumShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0.3" dy="0.6" stdDeviation="0.4" floodColor="#140d0b" floodOpacity="0.25" />
        </filter>
      </defs>
      <g transform="translate(12, 12) scale(1.5)" filter="url(#readerPlumShadow)">
        <path
          d="M 0 -3 C -1.5 -5, -3 -6, -4.5 -5.5"
          fill="none"
          stroke={INK}
          strokeWidth="0.55"
          strokeLinecap="round"
        />
        <path
          d="M -3 -5.5 C -5.5 -7.5, -9 -7.5, -10 -6 C -11 -4, -8 -4, -3 -5.5 Z"
          fill="url(#readerLeafGradient)"
          stroke={INK}
          strokeWidth="0.4"
        />
        <path
          d="M -3.5 -5.5 C -6 -6.2, -7.5 -6.0, -9 -6.2"
          fill="none"
          stroke={INK}
          strokeWidth="0.25"
          opacity="0.6"
        />
        <path
          d="M 0 -3 C -3.8 -3, -5.8 -0.8, -5.5 2.8 C -5.2 6.4, -2.6 8, 0 8 C 2.6 8, 5.2 6.4, 5.5 2.8 C 5.8 -0.8, 3.8 -3, 0 -3 Z"
          fill="url(#readerPlumGradient)"
          stroke={INK}
          strokeWidth="0.6"
        />
      </g>
    </svg>
  );
};

export function ChapterReader({
  chapter,
  onClose,
  lang,
  onSelectCharacter,
  onSelectChapter,
  onSelectLacuna,
  keysSuspended = false,
}: {
  chapter: Chapter;
  onClose: () => void;
  lang: "en" | "zh";
  onSelectCharacter: (character: Character) => void;
  onSelectChapter: (chapter: Chapter) => void;
  onSelectLacuna: () => void;
  /** True while another modal is stacked above the reader. */
  keysSuspended?: boolean;
}) {
  const [chapterSearchInput, setChapterSearchInput] = useState("");
  const [chapterSearchQuery, setChapterSearchQuery] = useState("");
  const [chapterSearchMatchIndex, setChapterSearchMatchIndex] = useState(0);
  const [speakingParagraph, setSpeakingParagraph] = useState<string | null>(null);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedZhVoiceName, setSelectedZhVoiceName] = useState<string>(() => {
    try { return localStorage.getItem(READER_ZH_VOICE_KEY) ?? ""; } catch { return ""; }
  });
  const [selectedEnVoiceName, setSelectedEnVoiceName] = useState<string>(() => {
    try { return localStorage.getItem(READER_EN_VOICE_KEY) ?? ""; } catch { return ""; }
  });
  const [showZhVoicePicker, setShowZhVoicePicker] = useState(false);
  const [showEnVoicePicker, setShowEnVoicePicker] = useState(false);
  const zhVoicePickerRef = useRef<HTMLDivElement | null>(null);
  const enVoicePickerRef = useRef<HTMLDivElement | null>(null);
  const chapterSearchMatchCounter = useRef(0);
  const chapterWorkAnchorIdsRef = useRef<Map<string, string>>(new Map());
  const contentScrollRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const savePositionTimer = useRef<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [fontScaleIndex, setFontScaleIndex] = useState(() => {
    try {
      const raw = localStorage.getItem(READER_FONT_SCALE_KEY);
      const stored = raw === null ? NaN : Number(raw);
      if (
        Number.isInteger(stored) &&
        stored >= 0 &&
        stored < READER_FONT_SCALES.length
      ) {
        return stored;
      }
    } catch {
      // Fall through to the default scale.
    }
    return DEFAULT_FONT_SCALE_INDEX;
  });

  const adjustFontScale = (delta: 1 | -1) => {
    setFontScaleIndex((prev) => {
      const next = Math.min(
        READER_FONT_SCALES.length - 1,
        Math.max(0, prev + delta),
      );
      try {
        localStorage.setItem(READER_FONT_SCALE_KEY, String(next));
      } catch {
        // Storage unavailable; the size still applies for this session.
      }
      return next;
    });
  };

  const chapterIndex = chapters.findIndex((c) => c.id === chapter.id);
  const prevChapter = chapterIndex > 0 ? chapters[chapterIndex - 1] : null;
  const nextChapter =
    chapterIndex >= 0 && chapterIndex < chapters.length - 1
      ? chapters[chapterIndex + 1]
      : null;

  const chapterNavLabel = (target: Chapter) => {
    if (target.id === 0) return lang === "zh" ? "序" : "Preface";
    return lang === "zh" ? `第${target.id}回` : `Ch. ${target.id}`;
  };

  // Progress bar and saved position are updated via refs / debounced storage
  // writes so scrolling never re-renders the (expensive) annotated text.
  const handleContentScroll = () => {
    const el = contentScrollRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    const ratio = max > 0 ? Math.min(1, el.scrollTop / max) : 0;
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${ratio * 100}%`;
    }
    setShowBackToTop(el.scrollTop > 600);
    if (chapter.id >= 0) {
      if (savePositionTimer.current !== null) {
        window.clearTimeout(savePositionTimer.current);
      }
      savePositionTimer.current = window.setTimeout(() => {
        try {
          localStorage.setItem(
            READER_LAST_POSITION_KEY,
            JSON.stringify({ id: chapter.id, top: el.scrollTop }),
          );
        } catch {
          // Storage unavailable; resume-reading simply won't persist.
        }
      }, 250);
    }
  };

  useEffect(() => {
    const el = contentScrollRef.current;
    if (!el) return;
    const saved = readLastReadingPosition();
    const top = saved && saved.id === chapter.id ? saved.top : 0;
    el.scrollTop = top;
    if (chapter.id >= 0) {
      try {
        localStorage.setItem(
          READER_LAST_POSITION_KEY,
          JSON.stringify({ id: chapter.id, top }),
        );
      } catch {
        // Storage unavailable; resume-reading simply won't persist.
      }
    }
    handleContentScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter.id]);

  useEffect(
    () => () => {
      if (savePositionTimer.current !== null) {
        window.clearTimeout(savePositionTimer.current);
      }
    },
    [],
  );

  // Load available speech synthesis voices
  useEffect(() => {
    if (typeof speechSynthesis === "undefined") return;
    const loadVoices = () => {
      setAvailableVoices(speechSynthesis.getVoices());
    };
    loadVoices();
    speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => speechSynthesis.removeEventListener("voiceschanged", loadVoices);
  }, []);

  // Close voice pickers when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (zhVoicePickerRef.current && !zhVoicePickerRef.current.contains(e.target as Node)) {
        setShowZhVoicePicker(false);
      }
      if (enVoicePickerRef.current && !enVoicePickerRef.current.contains(e.target as Node)) {
        setShowEnVoicePicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const zhVoices = useMemo(() => availableVoices.filter(v => v.lang.startsWith("zh")), [availableVoices]);
  const enVoices = useMemo(() => availableVoices.filter(v => v.lang.startsWith("en")), [availableVoices]);

  const selectZhVoice = useCallback((name: string) => {
    setSelectedZhVoiceName(name);
    setShowZhVoicePicker(false);
    try { localStorage.setItem(READER_ZH_VOICE_KEY, name); } catch { /* noop */ }
  }, []);

  const selectEnVoice = useCallback((name: string) => {
    setSelectedEnVoiceName(name);
    setShowEnVoicePicker(false);
    try { localStorage.setItem(READER_EN_VOICE_KEY, name); } catch { /* noop */ }
  }, []);

  useEffect(() => {
    if (keysSuspended) return;
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.key === "ArrowLeft" && prevChapter) {
        e.preventDefault();
        onSelectChapter(prevChapter);
      } else if (e.key === "ArrowRight" && nextChapter) {
        e.preventDefault();
        onSelectChapter(nextChapter);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [keysSuspended, prevChapter, nextChapter, onSelectChapter]);

  const runChapterSearch = () => {
    setChapterSearchQuery(chapterSearchInput.trim());
    setChapterSearchMatchIndex(0);
  };

  const clearChapterSearch = () => {
    setChapterSearchInput("");
    setChapterSearchQuery("");
    setChapterSearchMatchIndex(0);
  };

  const chapterSummary = useMemo(
    () => chapterSummaries[chapter.id] ?? null,
    [chapter.id],
  );

  const chapterMentionedCharacters = useMemo(
    () =>
      chapter.id > 0 ? getChapterMentionedCharacters(chapter.content) : [],
    [chapter.id, chapter.content],
  );

  const chapterCitedWorks = useMemo(() => {
    if (chapter.id < 0) return [];
    const matches = chapter.content.match(/《[^》\n]{1,40}》/g) ?? [];
    const unique = Array.from(new Set(matches.map((m) => m.trim()))) as string[];
    return unique.map((zhTagged) => {
      const key = zhTagged.replace(/《|》/g, "");
      return {
        key,
        zh: zhTagged,
        en: WORK_ENGLISH_BY_CHINESE[key] ?? zhTagged,
      };
    });
  }, [chapter.id, chapter.content]);

  const scrollToChapterWork = (workKey: string) => {
    const id = chapterWorkAnchorIdsRef.current.get(workKey);
    document
      .getElementById(id ?? "")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const tokenMap = useMemo<[string, Character][]>(() => {
    const entries: [string, Character][] = [];
    for (const char of characters) {
      // Chinese tokens: full name + given-name shortform + aliases
      const chineseName = char.name.split(" ")[0];
      const shortForms = getChineseShortFormTokens(char);
      const surname = chineseName[0];
      const compositeTokens = shortForms
        .filter((sf) => !sf.startsWith(surname))
        .map((sf) => surname + sf);
      const candidates = [chineseName, ...shortForms, ...compositeTokens];
      const zhTokens = [...new Set(candidates)].filter(
        (t) => t.length >= 2 && !GENERIC_HONORIFICS.has(t),
      );
      for (const t of zhTokens) entries.push([t, char]);

      // English tokens: the full de-accented pinyin name, plus distinctive
      // given-name parts. The surname (first part) is deliberately NOT emitted
      // as a standalone token: bare surnames such as Wang, Tang, Yang, Zhang,
      // Chen, Shen, Huan collide with dynasty names, place names, and historical
      // figures throughout the text (e.g. "Zhang Lihua", "Yang Pass", the Tang
      // dynasty), producing spurious character chips. Full names and given names
      // stay linked; only the ambiguous surname-alone match is dropped.
      const pinyinPart = char.name.slice(chineseName.length).trim();
      if (pinyinPart) {
        const plain = stripDiacritics(pinyinPart);
        const allParts = plain
          .split(/\s+/)
          .filter((p) => /^[a-z]+$/i.test(p));
        const enTokens = new Set<string>();
        if (allParts.length >= 2) {
          enTokens.add(allParts.join(" "));
          // Given-name components only (skip the surname at index 0).
          for (const p of allParts.slice(1)) {
            if (p.length >= 4) enTokens.add(p);
          }
        } else if (
          allParts.length === 1 &&
          allParts[0].length >= 4 &&
          chineseName.length >= 2
        ) {
          // A single distinctive two-syllable given name (e.g. 宝珠 Bǎozhū) —
          // but never a bare single-character surname (e.g. 张 Zhāng).
          enTokens.add(allParts[0]);
        }
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
      total += countSearchMatchesInRenderedText(
        text,
        query,
        tokenMap,
        showBilingual,
      );
    };
    const addPlain = (text: string) => {
      total += countTextSearchMatches(text, query);
    };

    if (chapterSummary) {
      addRendered(chapterSummary.en);
      addRendered(chapterSummary.zh);
    }

    if (chapter.id === -1) {
      for (const line of chapter.content.split("\n")) addPlain(line);
      return total;
    }

    if (translationMap[chapter.id]) {
      const paragraphs = chapter.content.split("\n\n");
      const translations = translationMap[chapter.id];
      for (let i = 0; i < paragraphs.length; i++) {
        addRendered(paragraphs[i]);
        if (translations[i]) addRendered(translations[i]);
      }
      return total;
    }

    addRendered(chapter.content);
    return total;
  }, [
    chapter.id,
    chapter.content,
    chapterSummary,
    chapterSearchQuery,
    tokenMap,
  ]);

  useEffect(() => {
    clearChapterSearch();
    // Stop any ongoing speech when switching chapters
    if (typeof speechSynthesis !== "undefined") {
      speechSynthesis.cancel();
    }
    setSpeakingParagraph(null);
  }, [chapter.id]);

  // Clean up speech synthesis on unmount
  useEffect(
    () => () => {
      if (typeof speechSynthesis !== "undefined") {
        speechSynthesis.cancel();
      }
    },
    [],
  );

  /** Strip annotation markers and work-title brackets to produce plain speakable text. */
  const stripForSpeech = (raw: string): string =>
    raw
      .replace(/《|》/g, "")
      .replace(/\*(?!\s)([^*]+)(?<!\s)\*/g, "$1")
      .replace(/[▉□]/g, "")
      .trim();

  /**
   * Speak a paragraph aloud using the Web Speech API.
   * `paraKey` is a stable identifier (e.g. "zh-3" or "en-3") used to track
   * which paragraph is currently being read.
   */
  const speakParagraph = (text: string, paraKey: string, speechLang: "zh-CN" | "en-US" = "zh-CN") => {
    if (typeof speechSynthesis === "undefined") return;

    // If this paragraph is already playing, stop it
    if (speakingParagraph === paraKey) {
      speechSynthesis.cancel();
      setSpeakingParagraph(null);
      return;
    }

    // Cancel any other ongoing speech
    speechSynthesis.cancel();

    const plain = stripForSpeech(text);
    if (!plain) return;

    const utterance = new SpeechSynthesisUtterance(plain);
    utterance.lang = speechLang;
    utterance.rate = 0.95;

    // Apply user-selected voice if available
    const selectedName = speechLang === "zh-CN" ? selectedZhVoiceName : selectedEnVoiceName;
    if (selectedName) {
      const voice = availableVoices.find(v => v.name === selectedName);
      if (voice) utterance.voice = voice;
    }

    utterance.onend = () => setSpeakingParagraph(null);
    utterance.onerror = () => setSpeakingParagraph(null);

    setSpeakingParagraph(paraKey);
    speechSynthesis.speak(utterance);
  };

  const TtsButton = ({ paraKey, text, speechLang = "zh-CN" }: { paraKey: string; text: string; speechLang?: "zh-CN" | "en-US" }) => {
    const isActive = speakingParagraph === paraKey;
    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          speakParagraph(text, paraKey, speechLang);
        }}
        className={`inline-flex items-center justify-center shrink-0 rounded-full border transition-all duration-200 mr-1.5 align-middle select-none ${
          isActive
            ? "w-6 h-6 bg-[var(--accent)] border-[var(--accent)] text-white shadow-sm hover:bg-red-600 hover:border-red-600"
            : "w-5 h-5 bg-[var(--paper-bg)]/80 border-[var(--paper-border)] text-[var(--ink-dim-text)]/60 hover:text-[var(--accent)] hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/10"
        }`}
        title={
          isActive
            ? lang === "zh" ? "停止朗读" : "Stop reading"
            : lang === "zh" ? "朗读本段" : "Read aloud"
        }
        aria-label={
          isActive
            ? lang === "zh" ? "停止朗读" : "Stop reading"
            : lang === "zh" ? "朗读本段" : "Read aloud"
        }
      >
        {isActive ? <Square size={10} /> : <Volume2 size={11} />}
      </button>
    );
  };

  useEffect(() => {
    if (chapterSearchMatchCount === 0) return;
    if (chapterSearchMatchIndex >= chapterSearchMatchCount) {
      setChapterSearchMatchIndex(Math.max(0, chapterSearchMatchCount - 1));
    }
  }, [chapterSearchMatchCount, chapterSearchMatchIndex]);

  useEffect(() => {
    if (!chapterSearchQuery.trim() || chapterSearchMatchCount === 0) return;
    const el = document.getElementById(
      `chapter-search-${chapterSearchMatchIndex}`,
    );
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [
    chapterSearchMatchIndex,
    chapterSearchMatchCount,
    chapterSearchQuery,
    chapter.id,
  ]);

  const goToAdjacentSearchMatch = (direction: 1 | -1) => {
    if (chapterSearchMatchCount === 0) return;
    setChapterSearchMatchIndex(
      (prev) =>
        (prev + direction + chapterSearchMatchCount) % chapterSearchMatchCount,
    );
  };

  const renderTextWithSnowPoems = (
    text: string,
    showBilingual = false,
    paragraphNumber?: number,
    injectSvgs = true,
  ) => {
    if (chapter.id !== 4 || !text) return renderAnnotated(text, showBilingual, paragraphNumber);

    const poemMap = [
      { en: "Snow Mountain", zh: "雪山", Cmp: SnowMountainSVG },
      { en: "Snow Pagoda", zh: "雪塔", Cmp: SnowPagodaSVG },
      { en: "Snow Screen", zh: "雪屏", Cmp: SnowScreenSVG },
      { en: "Snow Lantern", zh: "雪灯", Cmp: SnowLanternSVG },
      { en: "Snow Lion", zh: "雪狮", Cmp: SnowLionSVG },
      { en: "Snow Cat", zh: "雪猫", Cmp: SnowCatSVG },
      { en: "Snow Arhat", zh: "雪罗汉", Cmp: SnowArhatSVG },
      { en: "Snow Beauty", zh: "雪美人", Cmp: SnowBeautySVG },
      { en: "Snow Feeling", zh: "雪意", Cmp: SnowFeelingSVG },
      { en: "Snow Shadow", zh: "雪影", Cmp: SnowShadowSVG },
      { en: "Snow Sound", zh: "雪声", Cmp: SnowSoundSVG },
      { en: "Snow Color", zh: "雪色", Cmp: SnowColorSVG },
    ];

    let chunks: string[];
    const isEnglish = text.includes("\n\n");
    if (isEnglish) {
      chunks = text.split("\n\n");
    } else {
      chunks = text.split(/(?=雪山\n|雪塔\n|雪屏\n|雪灯\n|雪狮\n|雪猫\n|雪罗汉\n|雪美人\n|雪意\n|雪影\n|雪声\n|雪色\n)/);
    }

    return chunks.map((chunk, idx) => {
      if (!chunk.trim()) return null;
      let SvgCmp = null;
      for (const p of poemMap) {
        if (chunk.startsWith(p.en) || chunk.startsWith(p.zh + "\n")) {
          SvgCmp = p.Cmp;
          break;
        }
      }
      return (
        <React.Fragment key={idx}>
          {idx > 0 && !isEnglish ? (
             <span className="block mt-4">{renderAnnotated(chunk, showBilingual, idx === 0 ? paragraphNumber : undefined)}</span>
          ) : (
             <>{renderAnnotated(chunk, showBilingual, idx === 0 ? paragraphNumber : undefined)}{isEnglish && idx < chunks.length - 1 && <br/>}{isEnglish && idx < chunks.length - 1 && <br/>}</>
          )}
          {injectSvgs && SvgCmp && (
            <div className="mt-4 mb-8 block w-full">
              <SvgCmp />
            </div>
          )}
        </React.Fragment>
      );
    });
  };

  const renderAnnotated = (
    text: string,
    showBilingual = false,
    paragraphNumber?: number,
  ) => {
    if (!text) return null;

    const highlightPlain = (plain: string) =>
      renderTextWithSearchHighlight(
        plain,
        chapterSearchQuery,
        chapterSearchMatchIndex,
        chapterSearchMatchCounter,
      );

    const nodes = segmentText(text, tokenMap).map((seg, i) => {
      if (typeof seg === "string") {
        const parts = seg.split(CHAPTER_ANNOTATION_TOKEN_SPLIT_REGEX);
        if (parts.length === 1) return highlightPlain(seg);

        return parts.map((part, j) => {
          if (!part) return null;

          if (part === "▉" || part === "□") {
            return (
              <button
                key={`${i}-${j}`}
                onClick={onSelectLacuna}
                className="inline-flex items-center rounded-sm border px-1 py-[1px] mx-[1px] align-baseline cursor-pointer transition-all hover:brightness-95 bg-amber-200/70 text-[var(--ink-title)] border-amber-400/50"
                title={lang === "zh" ? "查看缺文档案" : "View Lacunae"}
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
                className={`glowing-work${isChineseWorkAnnotationToken(part) ? "" : " italic"}`}
              >
                {highlightPlain(displayText)}
              </span>
            );
          }

          return <span key={`${i}-${j}`}>{highlightPlain(part)}</span>;
        });
      }

      const roleChipClass =
        ROLE_CHIP_IDLE[seg.char.role] ?? ROLE_CHIP_IDLE.Other;
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

    if (paragraphNumber !== undefined) {
      return injectParagraphNumber(nodes, paragraphNumber);
    }
    return nodes;
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
        className="relative z-10 w-full max-w-none h-[100dvh] max-h-[100dvh] sm:max-w-5xl md:max-w-6xl sm:h-[90dvh] sm:max-h-[90dvh] parchment rounded-none sm:rounded-sm overflow-hidden shadow-2xl border-0 sm:border-4 border-double border-[var(--paper-border)] flex flex-col"
      >
        <div className="p-4 sm:p-6 border-b border-[var(--paper-border)] bg-[var(--paper-bg)] space-y-3 shrink-0">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <PlumIcon className="shrink-0" size={20} />
              <h2
                className={`text-lg sm:text-xl font-bold text-[var(--ink-title)] line-clamp-2 ${lang === "en" ? "font-sans" : "font-hans"}`}
              >
                {chapter.id === -1
                  ? (lang === "zh" ? "目录" : "Table of Contents")
                  : chapter.id === 0
                  ? (lang === "zh" ? "序" : "Preface")
                  : (lang === "zh" ? `第${chapter.id}回` : `Ch. ${chapter.id}`)}
              </h2>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="relative" ref={zhVoicePickerRef}>
                <button
                  type="button"
                  onClick={() => { setShowZhVoicePicker(p => !p); setShowEnVoicePicker(false); }}
                  className={`flex items-center gap-1 px-2 py-1.5 rounded-sm border transition-colors text-[10px] font-bold uppercase tracking-wider touch-manipulation shrink-0 ${
                    selectedZhVoiceName
                      ? "border-[var(--accent)]/40 bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20"
                      : "border-[var(--paper-border)] bg-[var(--paper-bg)]/80 text-[var(--ink-dim-text)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
                  }`}
                  title={lang === "zh" ? "选择中文语音" : "Choose Chinese voice"}
                  aria-label={lang === "zh" ? "选择中文语音" : "Choose Chinese voice"}
                >
                  <span className="font-sans">CN</span>
                  <Volume2 size={12} />
                  <ChevronDown size={10} />
                </button>
                <AnimatePresence>
                  {showZhVoicePicker && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 top-full mt-1 z-50 w-64 max-h-56 overflow-y-auto rounded-sm border border-[var(--paper-border)] bg-[var(--paper-bg)] shadow-xl scrollbar-thin"
                    >
                      <button
                        type="button"
                        onClick={() => selectZhVoice("")}
                        className={`w-full text-left px-3 py-2 text-[11px] font-sans transition-colors border-b border-[var(--paper-border)]/50 ${
                          !selectedZhVoiceName
                            ? "bg-[var(--accent)]/10 text-[var(--accent)] font-bold"
                            : "text-[var(--ink-dim-text)] hover:bg-black/5"
                        }`}
                      >
                        {lang === "zh" ? "默认语音" : "Default voice"}
                      </button>
                      {zhVoices.length === 0 ? (
                        <div className="px-3 py-3 text-[11px] text-[var(--ink-dim-text)] italic font-sans">
                          {lang === "zh" ? "未找到中文语音" : "No Chinese voices found"}
                        </div>
                      ) : zhVoices.map(v => (
                        <button
                          key={v.name}
                          type="button"
                          onClick={() => selectZhVoice(v.name)}
                          className={`w-full text-left px-3 py-2 text-[11px] font-sans transition-colors border-b border-[var(--paper-border)]/30 last:border-0 ${
                            selectedZhVoiceName === v.name
                              ? "bg-[var(--accent)]/10 text-[var(--accent)] font-bold"
                              : "text-[var(--ink-title)] hover:bg-black/5"
                          }`}
                        >
                          <span className="block truncate">{v.name}</span>
                          <span className="block text-[9px] text-[var(--ink-dim-text)] mt-0.5">{v.lang}{v.localService ? "" : " · remote"}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="relative" ref={enVoicePickerRef}>
                <button
                  type="button"
                  onClick={() => { setShowEnVoicePicker(p => !p); setShowZhVoicePicker(false); }}
                  className={`flex items-center gap-1 px-2 py-1.5 rounded-sm border transition-colors text-[10px] font-bold uppercase tracking-wider touch-manipulation shrink-0 ${
                    selectedEnVoiceName
                      ? "border-[var(--accent)]/40 bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20"
                      : "border-[var(--paper-border)] bg-[var(--paper-bg)]/80 text-[var(--ink-dim-text)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
                  }`}
                  title={lang === "zh" ? "选择英文语音" : "Choose English voice"}
                  aria-label={lang === "zh" ? "选择英文语音" : "Choose English voice"}
                >
                  <span className="font-sans">EN</span>
                  <Volume2 size={12} />
                  <ChevronDown size={10} />
                </button>
                <AnimatePresence>
                  {showEnVoicePicker && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-1 z-50 w-64 max-h-56 overflow-y-auto rounded-sm border border-[var(--paper-border)] bg-[var(--paper-bg)] shadow-xl scrollbar-thin"
                    >
                      <button
                        type="button"
                        onClick={() => selectEnVoice("")}
                        className={`w-full text-left px-3 py-2 text-[11px] font-sans transition-colors border-b border-[var(--paper-border)]/50 ${
                          !selectedEnVoiceName
                            ? "bg-[var(--accent)]/10 text-[var(--accent)] font-bold"
                            : "text-[var(--ink-dim-text)] hover:bg-black/5"
                        }`}
                      >
                        {lang === "zh" ? "默认语音" : "Default voice"}
                      </button>
                      {enVoices.length === 0 ? (
                        <div className="px-3 py-3 text-[11px] text-[var(--ink-dim-text)] italic font-sans">
                          {lang === "zh" ? "未找到英文语音" : "No English voices found"}
                        </div>
                      ) : enVoices.map(v => (
                        <button
                          key={v.name}
                          type="button"
                          onClick={() => selectEnVoice(v.name)}
                          className={`w-full text-left px-3 py-2 text-[11px] font-sans transition-colors border-b border-[var(--paper-border)]/30 last:border-0 ${
                            selectedEnVoiceName === v.name
                              ? "bg-[var(--accent)]/10 text-[var(--accent)] font-bold"
                              : "text-[var(--ink-title)] hover:bg-black/5"
                          }`}
                        >
                          <span className="block truncate">{v.name}</span>
                          <span className="block text-[9px] text-[var(--ink-dim-text)] mt-0.5">{v.lang}{v.localService ? "" : " · remote"}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <PermalinkButton
                lang={lang}
                link={{ kind: "chapter", id: chapter.id }}
              />
              <button
                onClick={onClose}
                className="p-2 hover:bg-black/5 rounded-full transition-colors text-[var(--ink-title)] shrink-0"
                aria-label={lang === "zh" ? "关闭" : "Close"}
              >
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={chapterSearchInput}
              onChange={(e) => setChapterSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  runChapterSearch();
                }
                if (e.key === "Escape") {
                  clearChapterSearch();
                }
              }}
              placeholder={lang === "zh" ? "搜索本章…" : "Search in chapter…"}
              className="flex-1 min-w-0 px-3 py-1.5 text-sm bg-[#faf6ee] border border-[var(--paper-border)] rounded-sm text-[var(--ink-title)] placeholder:text-[var(--ink-dim-text)]/70 focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/40 font-hans"
              aria-label={lang === "zh" ? "搜索本章" : "Search in chapter"}
            />
            <button
              type="button"
              onClick={runChapterSearch}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-sm border border-[var(--accent)]/40 bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors shrink-0 text-[11px] font-bold uppercase tracking-wider"
              aria-label={lang === "zh" ? "搜索" : "Search"}
            >
              <Search size={14} />
              <span className="hidden sm:inline font-sans">
                {lang === "zh" ? "搜索" : "Search"}
              </span>
            </button>
            <div className="flex items-center shrink-0 rounded-sm border border-[var(--paper-border)] overflow-hidden">
              <button
                type="button"
                onClick={() => adjustFontScale(-1)}
                disabled={fontScaleIndex === 0}
                className="px-2 py-1.5 text-[11px] font-bold font-sans text-[var(--ink-dim-text)] hover:bg-black/5 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                aria-label={lang === "zh" ? "缩小字号" : "Decrease text size"}
                title={lang === "zh" ? "缩小字号" : "Decrease text size"}
              >
                A−
              </button>
              <div className="w-px self-stretch bg-[var(--paper-border)]" aria-hidden />
              <button
                type="button"
                onClick={() => adjustFontScale(1)}
                disabled={fontScaleIndex === READER_FONT_SCALES.length - 1}
                className="px-2 py-1.5 text-[11px] font-bold font-sans text-[var(--ink-dim-text)] hover:bg-black/5 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                aria-label={lang === "zh" ? "放大字号" : "Increase text size"}
                title={lang === "zh" ? "放大字号" : "Increase text size"}
              >
                A+
              </button>
            </div>
            {chapterSearchQuery.trim() && (
              <div className="flex items-center gap-1 shrink-0">
                <span className="text-[10px] tabular-nums text-[var(--ink-dim-text)] font-sans min-w-[2.5rem] text-center">
                  {chapterSearchMatchCount > 0
                    ? `${chapterSearchMatchIndex + 1}/${chapterSearchMatchCount}`
                    : lang === "zh"
                      ? "无"
                      : "0"}
                </span>
                <button
                  type="button"
                  onClick={() => goToAdjacentSearchMatch(-1)}
                  disabled={chapterSearchMatchCount === 0}
                  className="p-1.5 rounded-sm border border-[var(--paper-border)] text-[var(--ink-dim-text)] hover:bg-black/5 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  aria-label={lang === "zh" ? "上一处" : "Previous match"}
                >
                  <ChevronUp size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => goToAdjacentSearchMatch(1)}
                  disabled={chapterSearchMatchCount === 0}
                  className="p-1.5 rounded-sm border border-[var(--paper-border)] text-[var(--ink-dim-text)] hover:bg-black/5 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  aria-label={lang === "zh" ? "下一处" : "Next match"}
                >
                  <ChevronDown size={14} />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="h-[3px] bg-[var(--accent)]/10 shrink-0" aria-hidden>
          <div
            ref={progressBarRef}
            className="h-full w-0 bg-[var(--accent)]/60"
          />
        </div>

        <div
          ref={contentScrollRef}
          onScroll={handleContentScroll}
          data-overlay-scroll="true"
          className="flex-1 min-h-0 overflow-y-auto px-5 py-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] sm:p-12 font-serif text-[var(--ink-main)] leading-loose selection:bg-[var(--accent)]/20 scrollbar-thin"
        >
          <div
            className="max-w-2xl mx-auto space-y-6"
            style={{ fontSize: `${READER_FONT_SCALES[fontScaleIndex]}rem` }}
          >
            <div className="text-center mb-12">
              <div className="w-16 h-1 bg-[var(--accent)]/20 mx-auto mb-6" />
              <h3
                className={`text-2xl sm:text-3xl font-bold mb-4 max-w-3xl mx-auto leading-relaxed ${lang === "en" ? "font-sans" : "font-hans"}`}
              >
                {getChapterReaderTitle(chapter, lang)}
              </h3>
              {getChapterReaderSubtitle(chapter, lang) && (
                <p
                  className={`text-sm sm:text-base text-[#4a3f38] max-w-3xl mx-auto leading-relaxed mb-4 ${lang === "en" ? "font-hans" : "font-sans"}`}
                >
                  {getChapterReaderSubtitle(chapter, lang)}
                </p>
              )}
              <div className="text-[10px] uppercase tracking-[0.5em] text-[var(--ink-dim-text)] opacity-60">
                Precious Vibe 品花宝境
              </div>
            </div>
            {chapterSummary && (
              <div className="mb-8 border border-[var(--paper-border)] bg-black/5 p-4 rounded-sm space-y-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim-text)] font-bold">
                  {lang === "en" ? "Chapter Summary" : "章节提要"}
                </p>
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-[var(--ink-title)]">
                    {lang === "zh" ? "英文" : "English"}
                  </p>
                  <p className="text-[0.875em] sm:text-[1em] text-[#4a3f38] leading-relaxed font-sans whitespace-pre-line">
                    {renderAnnotated(chapterSummary.en)}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-[var(--ink-title)]">
                    {lang === "zh" ? "中文" : "Chinese"}
                  </p>
                  <p className="text-[0.8em] text-[var(--ink-title)] font-hans leading-relaxed whitespace-pre-line">
                    {renderAnnotated(chapterSummary.zh)}
                  </p>
                </div>
              </div>
            )}
            {chapter.id > 0 && chapterMentionedCharacters.length > 0 && (
              <div className="mb-8 border border-[var(--paper-border)] bg-black/5 p-4 rounded-sm">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim-text)] font-bold mb-3">
                  {lang === "en"
                    ? "Characters Mentioned In This Chapter"
                    : "本回出现人物"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {chapterMentionedCharacters.map((character) => (
                    <button
                      key={character.id}
                      onClick={() => onSelectCharacter(character)}
                      className={`px-2 py-1 text-[11px] rounded-sm border transition-colors font-hans hover:brightness-95 ${ROLE_CHIP_IDLE[character.role] ?? ROLE_CHIP_IDLE.Other
                        }`}
                    >
                      {character.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {chapter.id >= 1 && <ChapterScene chapterId={chapter.id} />}
            {chapter.id === -1 ? (
              <div className="space-y-5">
                {chapter.content.split("\n").map((line, i) => {
                  const targetChapter =
                    chapters.find((c) => c.id === i + 1) ?? null;
                  return (
                    <div key={i} className="border-b border-[var(--paper-border)]/50 pb-4">
                      <button
                        type="button"
                        disabled={!targetChapter}
                        onClick={() =>
                          targetChapter && onSelectChapter(targetChapter)
                        }
                        title={
                          targetChapter
                            ? lang === "zh"
                              ? "打开本回"
                              : "Open this chapter"
                            : undefined
                        }
                        className="w-full text-left group cursor-pointer disabled:cursor-default"
                      >
                        <p className="text-[1em] font-hans text-[var(--ink-title)] leading-snug transition-colors group-hover:text-[var(--accent)]">
                          {renderTextWithSearchHighlight(
                            line,
                            chapterSearchQuery,
                            chapterSearchMatchIndex,
                            chapterSearchMatchCounter,
                          )}
                        </p>
                        {chapterTitleTranslations[i + 1] != null &&
                          chapterTitleTranslations[i + 1] !== "" && (
                            <p className="text-[0.75em] italic text-[var(--ink-dim-text)] mt-1 leading-snug">
                              {chapterTitleTranslations[i + 1]}
                            </p>
                          )}
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : translationMap[chapter.id] ? (
              <div className="space-y-8">
                {chapter.content.split("\n\n").map((para, i) => (
                  <div
                    key={i}
                    className="relative border-b border-[var(--paper-border)]/40 pb-6 last:border-0"
                  >
                    {lang === "en" && translationMap[chapter.id][i] ? (
                      <>
                        <div className="text-[0.875em] sm:text-[1em] text-[#4a3f38] leading-[1.75] font-sans whitespace-pre-line">
                          <TtsButton paraKey={`en-${i}`} text={translationMap[chapter.id][i]} speechLang="en-US" />
                          {renderTextWithSnowPoems(translationMap[chapter.id][i], false, i + 1, false)}
                        </div>
                        <div className="text-[1em] font-hans text-[var(--ink-title)] leading-relaxed mt-3 whitespace-pre-line">
                          <TtsButton paraKey={`zh-${i}`} text={para} speechLang="zh-CN" />
                          {renderTextWithSnowPoems(para, false, undefined, true)}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-[1em] font-hans text-[var(--ink-title)] leading-relaxed whitespace-pre-line">
                          <TtsButton paraKey={`zh-${i}`} text={para} speechLang="zh-CN" />
                          {renderTextWithSnowPoems(para, false, i + 1, true)}
                        </div>
                        {translationMap[chapter.id][i] && (
                          <div className="text-[0.875em] sm:text-[1em] text-[#4a3f38] mt-3 leading-[1.75] font-sans whitespace-pre-line">
                            <TtsButton paraKey={`en-${i}`} text={translationMap[chapter.id][i]} speechLang="en-US" />
                            {renderTextWithSnowPoems(translationMap[chapter.id][i], false, undefined, false)}
                          </div>
                        )}
                      </>
                    )}
                    {chapter.id >= 1 &&
                      midSceneParagraphIndex(chapter.id) === i && (
                        <ChapterMidScene chapterId={chapter.id} />
                      )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="whitespace-pre-wrap text-[1em] sm:text-[1.125em] italic font-hans">
                <TtsButton paraKey="single-0" text={chapter.content} speechLang="zh-CN" />
                {renderAnnotated(chapter.content)}
              </div>
            )}
            {chapter.id >= 1 && <ChapterEndScene chapterId={chapter.id} />}
            {chapter.id === 1 && <ChapterAppreciation lang={lang} />}
            {chapter.id >= 0 && chapterCitedWorks.length > 0 && (
              <div className="mt-10 border border-[var(--paper-border)] bg-black/5 p-4 rounded-sm">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim-text)] font-bold mb-3">
                  {lang === "en" ? "Cited Books / Works" : "本回引书与作品"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {chapterCitedWorks.map((work) => {
                    const englishTitle = WORK_ENGLISH_BY_CHINESE[work.key];
                    return (
                      <button
                        key={work.zh}
                        type="button"
                        onClick={() => scrollToChapterWork(work.key)}
                        title={
                          lang === "zh"
                            ? "跳至文中引用处"
                            : "Jump to mention in chapter"
                        }
                        className="flex flex-col items-start gap-0.5 px-2.5 py-1.5 text-left rounded-sm border border-[var(--paper-border)] bg-[var(--paper-bg)]/80 text-[var(--ink-title)] cursor-pointer transition-colors hover:bg-[var(--paper-border)]/50 hover:border-[var(--accent)]/40"
                      >
                        <span className="text-[11px] font-hans leading-tight">
                          {work.zh}
                        </span>
                        {englishTitle && (
                          <span className="text-[10px] font-sans italic leading-tight text-[var(--ink-dim-text)]">
                            {englishTitle}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="pt-12 text-center text-[var(--ink-dim-text)] italic text-sm opacity-60">
              {lang === "en" ? "--- End of Chapter ---" : "--- 本回完 ---"}
            </div>
          </div>
        </div>

        {showBackToTop && (
          <button
            type="button"
            onClick={() =>
              contentScrollRef.current?.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="absolute bottom-16 right-4 sm:right-6 z-20 p-2.5 rounded-full border border-[var(--paper-border)] bg-[var(--paper-bg)]/95 text-[var(--accent)] shadow-md hover:bg-[var(--accent)] hover:text-[var(--paper-bg)] transition-colors"
            aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
            title={lang === "zh" ? "回到顶部" : "Back to top"}
          >
            <ArrowUp size={16} />
          </button>
        )}

        <div className="bg-[var(--paper-border)]/20 border-t border-[var(--paper-border)] shrink-0 px-3 sm:px-4 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] flex items-center justify-between gap-3">
          {prevChapter ? (
            <button
              type="button"
              onClick={() => onSelectChapter(prevChapter)}
              title={getChapterReaderTitle(prevChapter, lang)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-sm border border-[var(--paper-border)] bg-[var(--paper-bg)]/60 text-[11px] font-bold font-hans text-[var(--ink-dim-text)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-colors shrink-0"
            >
              <ChevronLeft size={14} />
              <span>{chapterNavLabel(prevChapter)}</span>
            </button>
          ) : (
            <span aria-hidden className="w-16 shrink-0" />
          )}
          {chapter.id !== -1 ? (
            <button
              type="button"
              onClick={() =>
                onSelectChapter({
                  id: -1,
                  title: "目录",
                  content: chapters
                    .filter((c) => c.id > 0)
                    .map((c) => c.title)
                    .join("\n"),
                })
              }
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-sm border border-[var(--paper-border)] bg-[var(--paper-bg)]/60 text-[11px] font-bold font-hans text-[var(--ink-dim-text)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-colors shrink-0 cursor-pointer"
              title={lang === "zh" ? "返回目录" : "Back to Contents"}
            >
              <Book size={14} />
              <span>{lang === "zh" ? "目录" : "Contents"}</span>
            </button>
          ) : (
            <div className="min-w-0 truncate text-[var(--ink-dim-text)] text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.5em] text-center font-hans">
              Precious Vibe 品花宝境
            </div>
          )}
          {nextChapter ? (
            <button
              type="button"
              onClick={() => onSelectChapter(nextChapter)}
              title={getChapterReaderTitle(nextChapter, lang)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-sm border border-[var(--paper-border)] bg-[var(--paper-bg)]/60 text-[11px] font-bold font-hans text-[var(--ink-dim-text)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-colors shrink-0"
            >
              <span>{chapterNavLabel(nextChapter)}</span>
              <ChevronRight size={14} />
            </button>
          ) : (
            <span aria-hidden className="w-16 shrink-0" />
          )}
        </div>
      </motion.div>
    </div>
  );
}
