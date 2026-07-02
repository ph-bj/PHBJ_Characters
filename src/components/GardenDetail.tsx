import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BookOpen, Home, Leaf, X } from "lucide-react";
import { chapters } from "../chapters";
import { getGardenById, type Garden } from "../gardens";
import type { Chapter } from "../types";
import { PermalinkButton } from "./PermalinkButton";

export function GardenDetail({
  garden,
  onClose,
  lang,
  onSelectChapter,
  onSelectGarden,
}: {
  garden: Garden;
  onClose: () => void;
  lang: "en" | "zh";
  onSelectChapter: (ch: Chapter) => void;
  onSelectGarden: (g: Garden) => void;
}) {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  const mentionData = useMemo(() => {
    const tokens = garden.searchTokens;
    return chapters
      .filter((ch) => ch.id >= 1)
      .map((ch) => {
        const count = tokens.reduce((sum, token) => {
          let n = 0,
            pos = 0;
          while ((pos = ch.content.indexOf(token, pos)) !== -1) {
            n++;
            pos++;
          }
          return sum + n;
        }, 0);
        return { ch: ch.id, count };
      });
  }, [garden]);

  const mentionedChapters = mentionData.filter((d) => d.count > 0);
  const maxCount = Math.max(...mentionData.map((d) => d.count), 1);

  const activeSnippets = useMemo(() => {
    if (activeChapter === null) return null;
    const ch = chapters.find((c) => c.id === activeChapter);
    if (!ch) return null;
    const tokens = garden.searchTokens;
    const positions: number[] = [];
    for (const token of tokens) {
      let pos = 0;
      while ((pos = ch.content.indexOf(token, pos)) !== -1) {
        positions.push(pos);
        pos++;
      }
    }
    positions.sort((a, b) => a - b);
    const snippets: string[] = [];
    let clusterStart = -1,
      clusterEnd = -1;
    for (const pos of positions) {
      if (clusterStart === -1) {
        clusterStart = pos;
        clusterEnd = pos;
      } else if (pos - clusterEnd < 200) {
        clusterEnd = pos;
      } else {
        snippets.push(
          ch.content.slice(
            Math.max(0, clusterStart - 80),
            Math.min(ch.content.length, clusterEnd + 80),
          ),
        );
        clusterStart = pos;
        clusterEnd = pos;
      }
    }
    if (clusterStart !== -1) {
      snippets.push(
        ch.content.slice(
          Math.max(0, clusterStart - 80),
          Math.min(ch.content.length, clusterEnd + 80),
        ),
      );
    }
    return { snippets: snippets.slice(0, 8), tokens };
  }, [garden, activeChapter]);

  const typeBadge = {
    major: lang === "zh" ? "主要园林" : "Major Garden",
    sublocation: lang === "zh" ? "园中胜景" : "Sub-Location",
    other: lang === "zh" ? "其他场所" : "Other Space",
  }[garden.type];

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

  const parent = garden.parentId ? getGardenById(garden.parentId) : null;
  const children = (garden.subLocationIds ?? [])
    .map((id) => getGardenById(id))
    .filter((g): g is NonNullable<typeof g> => g !== undefined);
  const accentColor = garden.accentColor;

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
        className="relative z-10 w-[95%] sm:w-full max-w-2xl h-[90vh] sm:h-auto sm:max-h-[92vh] parchment rounded-sm overflow-hidden shadow-2xl border-4 border-double border-[#d4c5a9] my-4 sm:my-0 flex flex-col"
      >
        <div className="absolute top-4 right-14 sm:top-6 sm:right-16 z-10">
          <PermalinkButton lang={lang} link={{ kind: "garden", id: garden.id }} />
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 hover:bg-black/5 rounded-full transition-colors z-10 text-[#2c2420]"
        >
          <X size={20} />
        </button>

        <div
          data-overlay-scroll="true"
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
              <Leaf size={22} style={{ color: accentColor }} />
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
                  {typeBadge}
                </span>
                {parent && (
                  <button
                    onClick={() => onSelectGarden(parent)}
                    className="text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm border border-[#d4c5a9] text-[#5d5048] hover:text-[#8b4513] hover:border-[#8b4513]/40 transition-colors"
                  >
                    ↑ {lang === "zh" ? parent.name : parent.nameEn}
                  </button>
                )}
              </div>
              <h2 className="text-3xl font-bold text-[#2c2420] font-hans leading-tight">
                {lang === "zh" ? garden.name : garden.nameEn}
              </h2>
              <p className="text-sm text-[#5d5048] mt-0.5 italic">
                {lang === "zh"
                  ? `${garden.pinyin} · ${garden.nameEn}`
                  : garden.pinyin}
              </p>
            </div>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-3 text-[11px]">
            <div className="bg-black/3 border border-[#d4c5a9]/60 rounded-sm p-3">
              <p className="text-[9px] uppercase tracking-widest text-[#5d5048] mb-1 font-bold">
                {lang === "zh" ? "园主 / 相关人物" : "Owner / Associated"}
              </p>
              <p className="font-hans text-[#2c2420] font-semibold">
                {lang === "zh" ? garden.owner : garden.ownerEn}
              </p>
            </div>
            <div className="bg-black/3 border border-[#d4c5a9]/60 rounded-sm p-3">
              <p className="text-[9px] uppercase tracking-widest text-[#5d5048] mb-1 font-bold">
                {lang === "zh" ? "位置" : "Location"}
              </p>
              <p className="font-hans text-[#2c2420] font-semibold">
                {lang === "zh" ? garden.location : garden.locationEn}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-3">
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#5d5048] border-b border-[#d4c5a9] pb-2">
              {lang === "zh" ? "园林志 · 英文" : "Garden Record · English"}
            </p>
            <p className="text-[12px] leading-relaxed text-[#2c2420]">
              {garden.description}
            </p>
            {lang === "zh" && (
              <>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#5d5048] border-b border-[#d4c5a9] pb-2 mt-2">
                  园林志 · 中文
                </p>
                <p className="text-[12px] leading-relaxed text-[#2c2420] font-hans">
                  {garden.descriptionZh}
                </p>
              </>
            )}
          </div>

          {/* Sub-locations */}
          {children.length > 0 && (
            <div>
              <p className="text-[9px] font-bold uppercase tracking-widest text-[#5d5048] border-b border-[#d4c5a9] pb-2 mb-3">
                {lang === "zh" ? "园中胜景" : "Notable Sub-Locations"}
              </p>
              <div className="flex flex-wrap gap-2">
                {children.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => onSelectGarden(child)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-[#d4c5a9]/60 hover:border-[#8b4513]/40 hover:bg-[#8b4513]/5 text-[#2c2420] hover:text-[#8b4513] transition-all text-[11px] font-hans"
                  >
                    <Home size={10} className="shrink-0" />
                    {lang === "zh" ? child.name : child.nameEn}
                    <span className="text-[9px] text-[#5d5048]">
                      · {child.pinyin}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chapter Appearances */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#5d5048] border-b border-[#d4c5a9] pb-2 mb-3 flex items-center gap-2">
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
                        : "#d4c5a960",
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
                  className={`text-[10px] px-2.5 py-1 rounded-sm border font-bold transition-all ${activeChapter === d.ch
                      ? "text-[#f4ecd8] border-transparent"
                      : "border-[#d4c5a9] text-[#5d5048] hover:border-[#8b4513]/40 hover:text-[#8b4513]"
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
                  className="mt-4 border border-[#d4c5a9] rounded-sm overflow-hidden"
                >
                  <div className="flex items-center justify-between px-4 py-2.5 bg-black/3 border-b border-[#d4c5a9]">
                    <div>
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest font-hans"
                        style={{ color: accentColor }}
                      >
                        {t.chapterAbbr}
                        {lang === "zh" ? ` ${activeChapter} 回` : activeChapter}
                      </span>
                      <span className="text-[10px] text-[#5d5048] ml-2 font-hans">
                        {chapters.find((c) => c.id === activeChapter)?.title}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          const ch = chapters.find(
                            (c) => c.id === activeChapter,
                          );
                          if (ch) onSelectChapter(ch);
                        }}
                        className="text-[9px] px-2 py-1 rounded-sm border text-[#5d5048] border-[#d4c5a9] hover:bg-[#8b4513]/10 hover:text-[#8b4513] transition-colors uppercase tracking-widest font-bold"
                      >
                        {t.readChapter}
                      </button>
                      <button
                        onClick={() => setActiveChapter(null)}
                        className="text-[#5d5048] hover:text-[#2c2420]"
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
                      <p className="text-[11px] italic text-[#5d5048] font-hans">
                        {lang === "zh"
                          ? "无文本摘录。"
                          : "No text excerpts found."}
                      </p>
                    ) : (
                      activeSnippets.snippets.map((snippet, i) => {
                        const parts = snippet.split(
                          new RegExp(
                            `(${activeSnippets.tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
                            "g",
                          ),
                        );
                        return (
                          <div
                            key={i}
                            className="bg-black/5 rounded-sm px-3 py-2 border-l-2"
                            style={{ borderColor: accentColor + "50" }}
                          >
                            <p className="text-[11px] leading-relaxed text-[#2c2420] font-hans">
                              …
                              {parts.map((part, j) =>
                                activeSnippets.tokens.includes(part) ? (
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
                                ),
                              )}
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

        <div className="bg-[#d4c5a9]/20 p-4 text-[#5d5048] text-[10px] font-bold uppercase tracking-[0.5em] text-center border-t border-[#d4c5a9] font-hans shrink-0">
          Precious Vibe 品花宝境</div>
      </motion.div>
    </div>
  );
}
