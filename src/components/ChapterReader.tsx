import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUp,
  Book,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Search,
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

export const READER_LAST_POSITION_KEY = "phbj-reader-last-position";
const READER_FONT_SCALE_KEY = "phbj-reader-font-scale";
const READER_FONT_SCALES = [0.85, 1, 1.15, 1.3, 1.5];
const DEFAULT_FONT_SCALE_INDEX = 1;

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

      // English tokens: full de-accented pinyin plus longer individual name parts.
      const pinyinPart = char.name.slice(chineseName.length).trim();
      if (pinyinPart) {
        const plain = stripDiacritics(pinyinPart);
        const allParts = plain.split(/\s+/).filter(Boolean);
        const parts = allParts.filter((p) => p.length >= 4);
        const enTokens = new Set<string>();
        if (allParts.length >= 2) enTokens.add(allParts.join(" "));
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
  }, [chapter.id]);

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

  const renderAnnotated = (text: string, showBilingual = false) => {
    if (!text) return null;

    const highlightPlain = (plain: string) =>
      renderTextWithSearchHighlight(
        plain,
        chapterSearchQuery,
        chapterSearchMatchIndex,
        chapterSearchMatchCounter,
      );

    return segmentText(text, tokenMap).map((seg, i) => {
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
              <Book className="text-[var(--accent)] shrink-0" size={20} />
              <h2
                className={`text-lg sm:text-xl font-bold text-[var(--ink-title)] line-clamp-2 ${lang === "en" ? "font-sans" : "font-hans"}`}
              >
                {getChapterReaderTitle(chapter, lang)}
              </h2>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
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
              <div className="space-y-8 pl-7 sm:pl-0">
                {chapter.content.split("\n\n").map((para, i) => (
                  <div
                    key={i}
                    className="relative border-b border-[var(--paper-border)]/40 pb-6 last:border-0 sm:pl-0"
                  >
                    <span
                      className="absolute left-0 sm:-left-10 md:-left-12 top-0 w-6 sm:w-8 text-[10px] tabular-nums text-[var(--ink-dim-text)]/55 text-right leading-relaxed select-none font-sans"
                      aria-hidden
                      title={
                        lang === "zh" ? `第 ${i + 1} 段` : `Paragraph ${i + 1}`
                      }
                    >
                      {i + 1}
                    </span>
                    {lang === "en" && translationMap[chapter.id][i] ? (
                      <>
                        <p className="text-[0.875em] sm:text-[1em] text-[#4a3f38] leading-[1.75] font-sans whitespace-pre-line">
                          {renderAnnotated(translationMap[chapter.id][i])}
                        </p>
                        <p className="text-[1em] font-hans text-[var(--ink-title)] leading-relaxed mt-3">
                          {renderAnnotated(para)}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-[1em] font-hans text-[var(--ink-title)] leading-relaxed">
                          {renderAnnotated(para)}
                        </p>
                        {translationMap[chapter.id][i] && (
                          <p className="text-[0.875em] sm:text-[1em] text-[#4a3f38] mt-3 leading-[1.75] font-sans whitespace-pre-line">
                            {renderAnnotated(translationMap[chapter.id][i])}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="whitespace-pre-wrap text-[1em] sm:text-[1.125em] italic font-hans first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                {renderAnnotated(chapter.content)}
              </div>
            )}
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
          <div className="min-w-0 truncate text-[var(--ink-dim-text)] text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.5em] text-center font-hans">
            Precious Vibe 品花宝境
          </div>
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
