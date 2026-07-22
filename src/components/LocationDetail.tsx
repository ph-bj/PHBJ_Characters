import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BookOpen, Building, ChevronRight, Compass, Leaf, MapPin, Users, X } from "lucide-react";
import { chapters } from "../chapters";
import { locationColors, locationTypeLabels } from "../locations";
import { chapterTranslationsById } from "../chapterTranslations";
import { getCharacterNameForLanguage, type NovelLocationWithChapters } from "../utils";
import { PermalinkButton } from "./PermalinkButton";
import { LanguageSwitch } from "./LanguageSwitch";
import type { Character, Chapter } from "../types";

export function LocationDetail({
  location,
  lang,
  setLang,
  onClose,
  characters = [],
  onSelectCharacter,
  onSelectChapter,
}: {
  location: NovelLocationWithChapters;
  lang: "en" | "zh";
  setLang: (lang: "en" | "zh") => void;
  onClose: () => void;
  characters?: Character[];
  onSelectCharacter?: (char: Character) => void;
  onSelectChapter?: (ch: Chapter) => void;
}) {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  const englishSearchTokens = useMemo(() => {
    const tokens: string[] = [];
    if (location.nameEn) {
      tokens.push(location.nameEn);
    }
    if (location.aliasesEn?.length) {
      tokens.push(...location.aliasesEn);
    }

    const surnameMap: Record<string, string> = {
      华: "Hua", 梅: "Mei", 徐: "Xu", 王: "Wang", 颜: "Yan",
      孙: "Sun", 冯: "Feng", 陆: "Lu", 沈: "Shen", 刘: "Liu",
      李: "Li", 张: "Zhang", 陈: "Chen", 杨: "Yang", 赵: "Zhao",
      周: "Zhou", 吴: "Wu", 郑: "Zheng", 钱: "Qian", 黄: "Huang",
    };

    for (const token of location.searchTokens) {
      const firstChar = token.charAt(0);
      const surname = surnameMap[firstChar];
      if (surname) {
        const descriptors = ["household", "house", "residence", "mansion", "family", "宅", "府", "家"];
        for (const desc of descriptors) {
          const englishToken = `${surname} ${desc}`;
          if (!tokens.includes(englishToken)) {
            tokens.push(englishToken);
          }
        }
      }
    }

    const lowerVariants = tokens
      .filter((t) => !tokens.some((tt) => tt.toLowerCase() === t.toLowerCase() && tt !== t))
      .map((t) => t.toLowerCase());

    return [...tokens, ...lowerVariants];
  }, [location.nameEn, location.aliasesEn, location.searchTokens]);

  const mentionData = useMemo(() => {
    const sortedTokens = [...location.searchTokens].sort((a, b) => b.length - a.length);
    return chapters
      .filter((ch) => ch.id >= 1)
      .map((ch) => {
        const matchedRanges: Array<{ start: number; end: number }> = [];
        for (const token of sortedTokens) {
          let pos = 0;
          while ((pos = ch.content.indexOf(token, pos)) !== -1) {
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
        const isKnownChapter = location.chapterIds.includes(ch.id);
        const count = Math.max(matchedRanges.length, isKnownChapter ? 1 : 0);
        return { ch: ch.id, count };
      });
  }, [location]);

  const mentionedChapters = useMemo(
    () => mentionData.filter((d) => d.count > 0),
    [mentionData]
  );
  const maxCount = useMemo(
    () => Math.max(...mentionData.map((d) => d.count), 1),
    [mentionData]
  );

  const activeSnippets = useMemo(() => {
    if (activeChapter === null) return null;
    const ch = chapters.find((c) => c.id === activeChapter);
    if (!ch) return null;

    if (lang === "en" && englishSearchTokens.length > 0) {
      const enParagraphs = chapterTranslationsById[activeChapter];
      if (enParagraphs && enParagraphs.length > 0) {
        const enText = enParagraphs.join("\n");
        const positions: Array<{ start: number; end: number }> = [];
        for (const token of englishSearchTokens) {
          let pos = 0;
          while ((pos = enText.indexOf(token, pos)) !== -1) {
            positions.push({ start: pos, end: pos + token.length });
            pos += token.length;
          }
        }
        if (positions.length > 0) {
          positions.sort((a, b) => a.start - b.start);
          const snippets: string[] = [];
          let clusterStart = positions[0].start;
          let clusterEnd = positions[0].end;
          for (let i = 1; i < positions.length; i++) {
            const current = positions[i];
            if (current.start - clusterEnd <= 120) {
              clusterEnd = Math.max(clusterEnd, current.end);
            } else {
              snippets.push(
                enText.slice(Math.max(0, clusterStart - 60), Math.min(enText.length, clusterEnd + 60))
              );
              clusterStart = current.start;
              clusterEnd = current.end;
            }
          }
          snippets.push(
            enText.slice(Math.max(0, clusterStart - 60), Math.min(enText.length, clusterEnd + 60))
          );
          return { snippets: snippets.slice(0, 8), tokens: englishSearchTokens, isEnglish: true };
        }
      }
    }

    const sortedTokens = [...location.searchTokens].sort((a, b) => b.length - a.length);
    const matchedRanges: Array<{ start: number; end: number }> = [];
    for (const token of sortedTokens) {
      let pos = 0;
      while ((pos = ch.content.indexOf(token, pos)) !== -1) {
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
    matchedRanges.sort((a, b) => a.start - b.start);
    const snippets: string[] = [];
    let clusterStart = -1,
      clusterEnd = -1;
    for (const range of matchedRanges) {
      if (clusterStart === -1) {
        clusterStart = range.start;
        clusterEnd = range.end;
      } else if (range.start - clusterEnd < 200) {
        clusterEnd = Math.max(clusterEnd, range.end);
      } else {
        snippets.push(
          ch.content.slice(
            Math.max(0, clusterStart - 80),
            Math.min(ch.content.length, clusterEnd + 80),
          )
        );
        clusterStart = range.start;
        clusterEnd = range.end;
      }
    }
    if (clusterStart !== -1) {
      snippets.push(
        ch.content.slice(
          Math.max(0, clusterStart - 80),
          Math.min(ch.content.length, clusterEnd + 80),
        )
      );
    }
    return { snippets: snippets.slice(0, 8), tokens: sortedTokens, isEnglish: false };
  }, [location, activeChapter, lang, englishSearchTokens]);

  const typeLabel = locationTypeLabels[location.type] || { en: location.typeZh, zh: location.typeZh };

  const t = {
    en: {
      chapterAbbr: "Ch.",
      mentions: (count: number) => `mention${count !== 1 ? "s" : ""}`,
      readChapter: "Read Chapter",
    },
    zh: {
      chapterAbbr: "第",
      mentions: (count: number) => `次提及`,
      readChapter: "阅读全回",
    },
  }[lang];

  const chineseNameAndTokens = useMemo(() => {
    const unique = [...new Set([location.name, ...location.searchTokens])];
    return unique.join(" / ");
  }, [location.name, location.searchTokens]);

  const englishNameAndTokens = useMemo(() => {
    const unique = englishSearchTokens.length > 0 ? [...new Set(englishSearchTokens)] : [];
    return unique.join(" / ");
  }, [englishSearchTokens]);

  const relatedCharacters = useMemo(() => {
    if (!characters) return [];
    return characters.filter((c) => {
      if (!c.origin || c.origin === "—") return false;
      if (c.origin === location.nameEn || c.originZh === location.name) return true;
      if (location.id.startsWith("hometown-")) {
        const originFromId = location.id.replace("hometown-", "");
        if (c.origin.toLowerCase() === originFromId.toLowerCase() || c.originZh === location.name) return true;
      }
      return false;
    });
  }, [location, characters]);

  const accentColor = locationColors[location.type] || "var(--accent)";

  const TypeIcon = useMemo(() => {
    switch (location.type) {
      case "garden":
        return Leaf;
      case "place":
        return MapPin;
      case "site":
        return Building;
      case "landscape":
        return Compass;
      default:
        return MapPin;
    }
  }, [location.type]);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const preservedScrollTopRef = useRef(0);

  useLayoutEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    el.scrollTop = preservedScrollTopRef.current;

    return () => {
      preservedScrollTopRef.current = el.scrollTop;
    };
  }, [location.id]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
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
        className="relative z-10 w-[95%] sm:w-full max-w-2xl h-[90vh] sm:h-auto sm:max-h-[92vh] parchment rounded-sm overflow-hidden shadow-2xl border-4 border-double border-[var(--paper-border)] my-4 sm:my-0 flex flex-col"
      >
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex items-center gap-1.5 z-10">
          <LanguageSwitch lang={lang} setLang={setLang} className="scale-90" />
          <PermalinkButton lang={lang} link={{ kind: "location", id: location.id }} />
          <button
            onClick={onClose}
            className="p-2 hover:bg-black/5 rounded-full transition-colors text-[var(--ink-title)]"
          >
            <X size={20} />
          </button>
        </div>

        <div
          data-overlay-scroll="true"
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto p-6 sm:p-10 md:p-16 flex flex-col gap-8"
        >
          {/* Header */}
          <div className="flex items-start gap-4 pr-10">
            <div
              className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0 border"
              style={{
                backgroundColor: accentColor + "18",
                borderColor: accentColor + "40",
              }}
            >
              <TypeIcon size={22} style={{ color: accentColor }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span
                  className="text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm border"
                  style={{
                    color: accentColor,
                    borderColor: accentColor + "40",
                    backgroundColor: accentColor + "12",
                  }}
                >
                  {lang === "zh" ? typeLabel.zh : typeLabel.en}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[var(--ink-title)] font-hans leading-tight">
                {lang === "zh" ? location.name : (location.nameEn || location.name)}
              </h2>
            </div>
          </div>

          {/* Metadata Cards */}
          <div className="grid grid-cols-2 gap-3 text-[11px]">
            <div className="bg-black/3 border border-[var(--paper-border)]/60 rounded-sm p-3">
              <p className="text-[9px] uppercase tracking-widest text-[var(--ink-dim-text)] mb-1 font-bold">
                {lang === "zh" ? "地名 / 搜索词" : "Location Name / Tokens"}
              </p>
              <p className="font-hans text-[var(--ink-title)] font-semibold">
                {lang === "zh" ? chineseNameAndTokens : englishNameAndTokens}
              </p>
            </div>
            <div className="bg-black/3 border border-[var(--paper-border)]/60 rounded-sm p-3">
              <p className="text-[9px] uppercase tracking-widest text-[var(--ink-dim-text)] mb-1 font-bold">
                {lang === "zh" ? "类型" : "Type"}
              </p>
              <p className="font-hans text-[var(--ink-title)] font-semibold">
                {lang === "zh" ? typeLabel.zh : typeLabel.en}
              </p>
            </div>
          </div>

          {/* Related Characters */}
          {relatedCharacters.length > 0 && (
            <div>
              <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--ink-dim-text)] border-b border-[var(--paper-border)] pb-2 mb-3 flex items-center gap-1.5">
                <Users size={10} />
                {lang === "zh"
                  ? `同乡人物 · 共${relatedCharacters.length}人`
                  : `Characters from this Hometown · ${relatedCharacters.length}`}
              </p>
              <div className="flex flex-wrap gap-2">
                {relatedCharacters.map((char) => {
                  const charName = getCharacterNameForLanguage(char, lang);
                  return (
                    <button
                      key={char.id}
                      onClick={() => onSelectCharacter?.(char)}
                      className="group flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-[var(--paper-border)]/70 bg-[var(--paper-bg)]/45 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/[0.06] text-[var(--ink-title)] hover:text-[var(--accent)] transition-all text-[11px] font-hans cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 transition-transform group-hover:scale-125" />
                      <span className="leading-tight transition-colors group-hover:text-[var(--accent)]">
                        {charName}
                      </span>
                      <ChevronRight size={10} className="shrink-0 text-[var(--ink-dim-text)]/30 transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Chapter Appearances */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--ink-dim-text)] border-b border-[var(--paper-border)] pb-2 mb-3 flex items-center gap-2">
              <BookOpen size={10} />
              {lang === "zh"
                ? `章回出现 · 共${mentionedChapters.length}回`
                : `Chapter Appearances · ${mentionedChapters.length} of 60 chapters`}
            </p>

            <div className="flex items-end gap-[2px] h-10 mb-4">
              {mentionData.map((d) => (
                <div
                  key={d.ch}
                  className="flex-1 rounded-t-sm transition-all cursor-pointer hover:opacity-80"
                  style={{
                    height:
                      d.count > 0
                        ? `${Math.max(15, (d.count / maxCount) * 100)}%`
                        : "2px",
                    backgroundColor:
                      d.count > 0
                        ? activeChapter === d.ch
                          ? accentColor
                          : accentColor + "70"
                        : "var(--paper-border)60",
                  }}
                  title={`${t.chapterAbbr}${lang === "zh" ? ` ${d.ch} 回` : d.ch}: ${d.count} ${t.mentions(d.count)}`}
                  onClick={() => {
                    if (d.count > 0)
                      setActiveChapter((prev) => (prev === d.ch ? null : d.ch));
                  }}
                />
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {mentionedChapters.map((d) => (
                <button
                  key={d.ch}
                  onClick={() =>
                    setActiveChapter((prev) => (prev === d.ch ? null : d.ch))
                  }
                  className={`text-[10px] px-2.5 py-1 rounded-sm border font-bold transition-all ${
                    activeChapter === d.ch
                      ? "text-[var(--paper-bg)] border-transparent"
                      : "border-[var(--paper-border)] text-[var(--ink-dim-text)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                  }`}
                  style={
                    activeChapter === d.ch
                      ? {
                          backgroundColor: accentColor,
                          borderColor: accentColor,
                        }
                      : {}
                  }
                >
                  {t.chapterAbbr}
                  {lang === "zh" ? ` ${d.ch} 回` : d.ch}
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
                  className="mt-4 border border-[var(--paper-border)] rounded-sm overflow-hidden"
                >
                  <div className="flex items-center justify-between px-4 py-2.5 bg-black/3 border-b border-[var(--paper-border)]">
                    <div>
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest font-hans"
                        style={{ color: accentColor }}
                      >
                        {t.chapterAbbr}
                        {lang === "zh" ? ` ${activeChapter} 回` : activeChapter}
                      </span>
                      <span className="text-[10px] text-[var(--ink-dim-text)] ml-2 font-hans">
                        {chapters.find((c) => c.id === activeChapter)?.title}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          const ch = chapters.find(
                            (c) => c.id === activeChapter,
                          );
                          if (ch) {
                            onSelectChapter?.(ch);
                            onClose();
                          }
                        }}
                        className="text-[9px] px-2 py-1 rounded-sm border text-[var(--ink-dim-text)] border-[var(--paper-border)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-colors uppercase tracking-widest font-bold"
                      >
                        {t.readChapter}
                      </button>
                      <button
                        onClick={() => setActiveChapter(null)}
                        className="text-[var(--ink-dim-text)] hover:text-[var(--ink-title)]"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  </div>
                  <div
                    data-overlay-scroll="true"
                    className="p-4 space-y-3 max-h-80 overflow-y-auto"
                  >
                    {activeSnippets.snippets.length === 0 ? (
                      <p className="text-[11px] italic text-[var(--ink-dim-text)] font-hans">
                        {lang === "zh"
                          ? "无文本摘录。"
                          : "No text excerpts found."}
                      </p>
                    ) : (
                      activeSnippets.snippets.map((snippet, i) => {
                        const regex = new RegExp(
                          `(${activeSnippets.tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
                          "gi"
                        );
                        const parts = snippet.split(regex);
                        return (
                          <div
                            key={i}
                            className="bg-black/5 rounded-sm px-3 py-2 border-l-2"
                            style={{ borderColor: accentColor + "50" }}
                          >
                            <p className="text-[11px] leading-relaxed text-[var(--ink-title)] font-hans">
                              …
                              {parts.map((part, j) => {
                                const isMatch = activeSnippets.tokens.some(
                                  (t) => t.toLowerCase() === part.toLowerCase()
                                );
                                return isMatch ? (
                                  <mark
                                    key={j}
                                    style={{
                                      backgroundColor: accentColor + "33",
                                      color: accentColor,
                                    }}
                                    className="rounded-sm px-0.5 not-italic font-bold"
                                  >
                                    {part}
                                  </mark>
                                ) : (
                                  part
                                );
                              })}
                              …
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

        <div className="bg-[var(--paper-border)]/20 p-4 text-[var(--ink-dim-text)] text-[10px] font-bold uppercase tracking-[0.5em] text-center border-t border-[var(--paper-border)] font-hans shrink-0">
          Precious Vibe 品花宝境
        </div>
      </motion.div>
    </div>
  );
}
