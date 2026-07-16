import { useMemo } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { chapters } from "../chapters";
import { locationTypeLabels } from "../locations";
import { chapterTranslationsById } from "../chapterTranslations";
import type { NovelLocationWithChapters } from "../utils";
import { PermalinkButton } from "./PermalinkButton";
import { LanguageSwitch } from "./LanguageSwitch";

export function LocationDetail({
  location,
  lang,
  setLang,
  onClose,
}: {
  location: NovelLocationWithChapters;
  lang: "en" | "zh";
  setLang: (lang: "en" | "zh") => void;
  onClose: () => void;
}) {
  const typeLabel = locationTypeLabels[location.type];
  const chapterList = location.chapterIds.join(", ");

  const locationTokenRegex = useMemo(() => {
    const escaped = [...location.searchTokens]
      .sort((a, b) => b.length - a.length)
      .map((token) => token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    return escaped.length > 0
      ? new RegExp(`(${escaped.join("|")})`, "g")
      : null;
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
      if (positions.length === 0)
        return { chapterId, snippets: [] as string[] };

      const snippets: string[] = [];
      let clusterStart = positions[0].start;
      let clusterEnd = positions[0].end;
      for (let i = 1; i < positions.length; i++) {
        const current = positions[i];
        if (current.start - clusterEnd <= 120) {
          clusterEnd = Math.max(clusterEnd, current.end);
        } else {
          snippets.push(
            chapter.content.slice(
              Math.max(0, clusterStart - 60),
              Math.min(chapter.content.length, clusterEnd + 60),
            ),
          );
          clusterStart = current.start;
          clusterEnd = current.end;
        }
      }
      snippets.push(
        chapter.content.slice(
          Math.max(0, clusterStart - 60),
          Math.min(chapter.content.length, clusterEnd + 60),
        ),
      );

      return { chapterId, snippets };
    });
  }, [location.chapterIds, location.searchTokens]);

  const englishSearchTokens = useMemo(() => {
    if (location.aliasesEn?.length) {
      return [location.nameEn, ...location.aliasesEn];
    }
    if (location.nameEn) {
      return [location.nameEn];
    }
    return [];
  }, [location.nameEn, location.aliasesEn]);

  const locationTokenRegexEn = useMemo(() => {
    if (englishSearchTokens.length === 0) return null;
    const escaped = [...englishSearchTokens]
      .sort((a, b) => b.length - a.length)
      .map((token) => token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    return new RegExp(`(${escaped.join("|")})`, "g");
  }, [englishSearchTokens]);

  const locationMentionsEn = useMemo(() => {
    if (englishSearchTokens.length === 0) return [];

    return location.chapterIds.map((chapterId) => {
      const enParagraphs = chapterTranslationsById[chapterId];
      if (!enParagraphs || enParagraphs.length === 0) {
        return { chapterId, snippets: [] as string[] };
      }
      const enText = enParagraphs.join("\n");

      const positions: Array<{ start: number; end: number }> = [];
      for (const token of englishSearchTokens) {
        let pos = 0;
        while ((pos = enText.indexOf(token, pos)) !== -1) {
          positions.push({ start: pos, end: pos + token.length });
          pos += token.length;
        }
      }
      if (positions.length === 0) return { chapterId, snippets: [] as string[] };
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
            enText.slice(
              Math.max(0, clusterStart - 60),
              Math.min(enText.length, clusterEnd + 60),
            ),
          );
          clusterStart = current.start;
          clusterEnd = current.end;
        }
      }
      snippets.push(
        enText.slice(
          Math.max(0, clusterStart - 60),
          Math.min(enText.length, clusterEnd + 60),
        ),
      );

      return { chapterId, snippets };
    });
  }, [location.chapterIds, englishSearchTokens]);

  const chineseNameAndTokens = useMemo(() => {
    const unique = [...new Set([location.name, ...location.searchTokens])];
    return unique.join(" / ");
  }, [location.name, location.searchTokens]);

  const chineseAltNames = useMemo(
    () => location.searchTokens.filter((t) => t !== location.name),
    [location.searchTokens, location.name],
  );

  const englishNameAndTokens = useMemo(() => {
    const unique = englishSearchTokens.length > 0
      ? [...new Set(englishSearchTokens)]
      : [];
    return unique.join(" / ");
  }, [englishSearchTokens]);

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
        className="absolute inset-0 z-0 bg-black/55 backdrop-blur-sm pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-xl max-h-[88vh] overflow-hidden parchment rounded-sm border-4 border-double border-[var(--paper-border)] shadow-2xl flex flex-col"
      >
        <div className="p-4 sm:p-5 border-b border-[var(--paper-border)] bg-[var(--paper-bg)] flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[var(--ink-dim-text)]">
              {lang === "zh" ? "地点档案" : "Location Profile"}
            </p>
            <h3 className="text-lg font-bold text-[var(--ink-title)] font-hans">
              {location.name}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <PermalinkButton
              lang={lang}
              link={{ kind: "location", id: location.id }}
            />
            <LanguageSwitch lang={lang} setLang={setLang} className="scale-90" />
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/5 transition-colors text-[var(--ink-title)]"
              aria-label="Close location modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div
          data-overlay-scroll="true"
          className="p-5 sm:p-6 overflow-y-auto space-y-4 text-[var(--ink-title)]"
        >
          {lang === "zh" ? (
            <div className="border border-[var(--paper-border)] rounded-sm p-3 bg-black/5">
              <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--ink-dim-text)] mb-1">
                地名
              </p>
              <p className="text-sm font-hans">{chineseNameAndTokens}</p>
            </div>
          ) : (
            <div className="border border-[var(--paper-border)] rounded-sm p-3 bg-black/5">
              <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--ink-dim-text)] mb-1">
                English Name
              </p>
              <p className="text-sm font-sans">{englishNameAndTokens}</p>
            </div>
          )}

          <div className="border border-[var(--paper-border)] rounded-sm p-3 bg-black/5">
            <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--ink-dim-text)] mb-1">
              {lang === "zh" ? "类型" : "Type"}
            </p>
            <p className="text-sm font-hans">
              {lang === "zh" ? typeLabel.zh : typeLabel.en}
            </p>
          </div>

          <div className="border border-[var(--paper-border)] rounded-sm p-3 bg-black/5">
            <div className="flex items-center justify-between gap-2 mb-1">
              <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--ink-dim-text)]">
                {lang === "zh" ? "出现回目" : "Chapter Appearances"}
              </p>
              <span className="text-[10px] font-bold text-[var(--accent)]">
                {location.chapterIds.length}
              </span>
            </div>
            <p className="text-sm font-sans">{chapterList}</p>
          </div>

          <div className="border border-[var(--paper-border)] rounded-sm p-3 bg-black/5 space-y-3">
            <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--ink-dim-text)]">
              {lang === "zh" ? "章节提及与上下文" : "Mentions with Context"}
            </p>
            <div className="space-y-3">
              {(lang === "en" && locationMentionsEn.length > 0
                ? locationMentionsEn
                : locationMentions
              ).map(({ chapterId, snippets }) => (
                <div
                  key={chapterId}
                  className="border border-[var(--paper-border)]/70 rounded-sm p-2 bg-[var(--paper-bg)]/60"
                >
                  <p className="text-[10px] font-bold text-[var(--accent)] mb-1">
                    {lang === "zh"
                      ? `第 ${chapterId} 回`
                      : `Chapter ${chapterId}`}{" "}
                    ({snippets.length})
                  </p>
                  {snippets.length === 0 ? (
                    <p className="text-[11px] text-[var(--ink-dim-text)] italic">
                      {lang === "zh"
                        ? "无上下文摘录。"
                        : "No surrounding snippet found."}
                    </p>
                  ) : (
                    <div className="space-y-1.5">
                      {snippets.map((snippet, idx) => (
                        <p
                          key={`${chapterId}-${idx}`}
                          className={
                            lang === "zh"
                              ? "text-[11px] leading-relaxed font-hans text-[var(--ink-title)]"
                              : "text-[11px] leading-relaxed text-[var(--ink-title)]"
                          }
                        >
                          …
                          {(lang === "zh"
                            ? locationTokenRegex
                              ? snippet.split(locationTokenRegex)
                              : [snippet]
                            : locationTokenRegexEn
                              ? snippet.split(locationTokenRegexEn)
                              : [snippet]
                          ).map((part, partIdx) => {
                            const isMatch = lang === "zh"
                              ? location.searchTokens.includes(part)
                              : !!locationTokenRegexEn?.test(part);
                            return isMatch ? (
                              <mark
                                key={`${chapterId}-${idx}-${partIdx}`}
                                className="bg-amber-300/70 text-[var(--ink-title)] px-0.5 rounded-sm"
                              >
                                {part}
                              </mark>
                            ) : (
                              <span key={`${chapterId}-${idx}-${partIdx}`}>
                                {part}
                              </span>
                            );
                          })}
                          …
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
