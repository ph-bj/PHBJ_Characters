import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BarChart, Bar, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { BookOpen, Info, MapPin, MessageSquare, Type, User, X } from "lucide-react";
import { chapters } from "../chapters";
import { chapterSummaries } from "../chapterSummaries";
import {
  getCharacterSceneBullets,
  type SceneBullet,
} from "../characterAppearances";
import type { Character } from "../types";
import {
  ENGLISH_ALIAS_TOKENS,
  ROLE_ACCENTS,
  ROLE_ICONS,
  ROLE_TEXT_COLORS,
  ROLE_TINTS,
  countMentionsInText,
  findMentionPositionsInText,
  getCharacterMentionTokens,
  getCharacterNameForLanguage,
} from "../utils";
import { PermalinkButton } from "./PermalinkButton";
import { LanguageSwitch } from "./LanguageSwitch";

export function CharacterDetail({
  character,
  onClose,
  lang,
  setLang,
  onSelectChapter,
  elevated = false,
}: {
  character: Character;
  onClose: () => void;
  lang: "en" | "zh";
  setLang: (lang: "en" | "zh") => void;
  onSelectChapter: (chapter: (typeof chapters)[0]) => void;
  elevated?: boolean;
}) {
  const Icon = ROLE_ICONS[character.role] || Info;
  const tintClass = ROLE_TINTS[character.role] || ROLE_TINTS.Other;
  const textClass = ROLE_TEXT_COLORS[character.role] || ROLE_TEXT_COLORS.Other;
  const accentColor = ROLE_ACCENTS[character.role] || ROLE_ACCENTS.Other;

  const t = {
    en: {
      alias: "Alias",
      chapterAbbr: "Ch.",
      mentions: (count: number) => `mention${count !== 1 ? "s" : ""}`,
      readChapter: "Read Chapter",
      origin: "Origin",
      gender: "Gender",
      firstEntry: "First Entry",
      speeches: "Speeches",
      wordsSpoken: "Words Spoken",
      historicalRecord: "Historical Record",
      dossier: "Dossier",
      archives: "Imperial Archives",
      appearances: "Chapter Appearances",
      mentionedIn: (n: number) => `Mentioned in ${n} of 60 chapters`,
    },
    zh: {
      alias: "别名",
      chapterAbbr: "第",
      mentions: (count: number) => `次提及`,
      readChapter: "阅读全回",
      origin: "籍贯",
      gender: "性别",
      firstEntry: "首次登场",
      speeches: "发言次数",
      wordsSpoken: "中文发言字数",
      historicalRecord: "历史记录",
      dossier: "档案",
      archives: "皇家档案馆",
      appearances: "章回出现",
      mentionedIn: (n: number) => `出现于60回中的${n}回`,
    },
  }[lang];

  const mentionData = useMemo(() => {
    const tokens = getCharacterMentionTokens(character);
    return chapters
      .filter((ch) => ch.id >= 1)
      .map((ch) => ({
        ch: ch.id,
        count: countMentionsInText(ch.content, tokens),
      }));
  }, [character]);

  const mentionedChapters = mentionData.filter((d) => d.count > 0);
  const maxCount = Math.max(...mentionData.map((d) => d.count), 1);

  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  const activeScenes = useMemo(() => {
    if (activeChapter === null) return null;

    const ch = chapters.find((c) => c.id === activeChapter);
    if (!ch) return null;

    const tokens = getCharacterMentionTokens(character);
    const positions = findMentionPositionsInText(ch.content, tokens);

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

    const trimmedSnippets = snippets.slice(0, 8);
    const sceneBullets = getCharacterSceneBullets(character.id, activeChapter);

    return { sceneBullets, snippets: trimmedSnippets, tokens };
  }, [activeChapter, character]);

  const displaySceneBullets = useMemo(() => {
    if (!activeScenes) return [];
    const seen = new Set<string>();
    const line =
      lang === "zh" ? (b: SceneBullet) => b.zh : (b: SceneBullet) => b.en;
    return activeScenes.sceneBullets.filter((b) => {
      const k = line(b);
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }, [activeScenes, lang]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center p-4 ${elevated ? "z-[110]" : "z-50"}`}
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
        className={`relative z-10 w-[95%] sm:w-full max-w-2xl md:max-w-3xl h-[90vh] sm:h-auto sm:max-h-[92vh] parchment rounded-sm overflow-hidden shadow-2xl border-4 border-double border-[var(--paper-border)] my-4 sm:my-0 flex flex-col`}
      >
        <div className="relative shrink-0 px-4 sm:px-6 pt-4 sm:pt-5 pb-3 border-b border-[var(--paper-border)]/50 bg-[var(--paper-bg)]">
          <code
            className="text-[9px] font-mono text-[var(--ink-dim-text)]/35 select-all"
            title={lang === "zh" ? "内部人物键" : "Internal character key"}
          >
            {character.id}
          </code>
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-1.5 z-10">
            <LanguageSwitch lang={lang} setLang={setLang} />
            <PermalinkButton
              lang={lang}
              link={{ kind: "character", id: character.id }}
            />
            <button
              onClick={onClose}
              className="p-2 hover:bg-black/5 rounded-full transition-colors text-[var(--ink-title)]"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div
          data-overlay-scroll="true"
          className="flex-1 overflow-y-auto p-6 sm:p-10 md:p-16"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-8 sm:mb-10 border-b-2 border-[var(--paper-border)] pb-6 sm:pb-8">
            <div
              className={`p-3 sm:p-4 rounded-sm border-2 border-double ${tintClass} ${textClass}`}
            >
              <Icon size={24} className="sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div
                className={`text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.3em] ${textClass} mb-1 sm:mb-2 font-hans`}
              >
                {lang === "zh" ? character.roleZh : character.role} {t.dossier}
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-[var(--ink-title)] leading-tight">
                {getCharacterNameForLanguage(character, lang)}
              </h2>
              <div className="flex flex-wrap items-center gap-1.5 mt-2">
                <span className="text-[11px] px-2 py-0.5 bg-black/5 text-[var(--ink-dim-text)] italic font-hans rounded-sm border border-[var(--paper-border)]">
                  {lang === "en" ? character.name.split(" ")[0] : character.name.slice(character.name.split(" ")[0].length).trim()}
                </span>
                {character.alias !== "—" && character.alias.split(/\s*\/\s*/).map((a, i) => {
                  const trimmed = a.trim();
                  const isChinese = !/[A-Za-z]/.test(trimmed);
                  const engAliases = isChinese ? (ENGLISH_ALIAS_TOKENS[trimmed] || []) : [];
                  const displayText = engAliases.length > 0
                    ? `${trimmed} (${engAliases.join(" / ")})`
                    : trimmed;
                  return (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 bg-black/5 text-[var(--ink-dim-text)] italic font-hans rounded-sm border border-[var(--paper-border)]"
                    >
                      {displayText}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            <div className="space-y-1">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[var(--ink-dim-text)] font-hans">
                {t.origin}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-[var(--ink-title)] font-hans">
                <MapPin
                  size={14}
                  className="sm:w-4 sm:h-4"
                  style={{ color: accentColor }}
                />
                <span>
                  {lang === "zh" ? character.originZh : character.origin}
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[var(--ink-dim-text)] font-hans">
                {t.gender}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-[var(--ink-title)] font-hans">
                <User
                  size={14}
                  className="sm:w-4 sm:h-4"
                  style={{ color: accentColor }}
                />
                <span>
                  {lang === "zh" ? character.genderZh : character.gender}
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[var(--ink-dim-text)] font-hans">
                {t.firstEntry}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-[var(--ink-title)] font-hans">
                <BookOpen
                  size={14}
                  className="sm:w-4 sm:h-4 shrink-0"
                  style={{ color: accentColor }}
                />
                <span>{character.chapter}</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[var(--ink-dim-text)] font-hans">
                {t.speeches}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-[var(--ink-title)] font-hans">
                <MessageSquare
                  size={14}
                  className="sm:w-4 sm:h-4 shrink-0"
                  style={{ color: accentColor }}
                />
                <span>{character.speechesCount}</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[var(--ink-dim-text)] font-hans">
                {t.wordsSpoken}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-[var(--ink-title)] font-hans">
                <Type
                  size={14}
                  className="sm:w-4 sm:h-4 shrink-0"
                  style={{ color: accentColor }}
                />
                <span>{character.speechesCharCount}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[var(--ink-dim-text)] font-hans">
                {t.historicalRecord}
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-black/5 p-4 sm:p-6 rounded-sm border border-[var(--paper-border)]">
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-1 sm:mb-2 font-hans opacity-60">
                    {lang === "zh" ? "英文记录" : "English Record"}
                  </p>
                  <p className="leading-relaxed text-[var(--ink-title)] text-sm sm:text-base italic">
                    {character.description}
                  </p>
                </div>
                <div className="bg-black/5 p-4 sm:p-6 rounded-sm border border-[var(--paper-border)]">
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-1 sm:mb-2 font-hans opacity-60">
                    {lang === "zh" ? "中文记录" : "Chinese Record"}
                  </p>
                  <p className="leading-relaxed text-[var(--ink-title)] text-base sm:text-lg font-hans">
                    {character.descriptionZh}
                  </p>
                </div>
              </div>
            </div>

            {/* Chapter Appearances Timeline */}
            <div className="space-y-2 sm:space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[var(--ink-dim-text)] font-hans">
                  {t.appearances}
                </p>
                <p className="text-[9px] sm:text-[10px] text-[#8b7355] font-hans">
                  {t.mentionedIn(mentionedChapters.length)}
                </p>
              </div>
              <div className="bg-black/5 p-4 rounded-sm border border-[var(--paper-border)]">
                <ResponsiveContainer width="100%" height={90}>
                  <BarChart
                    data={mentionData}
                    margin={{ top: 4, right: 4, left: -28, bottom: 0 }}
                  >
                    <XAxis
                      dataKey="ch"
                      tick={{ fill: "#8b7355", fontSize: 9 }}
                      tickLine={false}
                      axisLine={{ stroke: "var(--paper-border)" }}
                      interval={9}
                    />
                    <YAxis hide domain={[0, maxCount]} />
                    <Tooltip
                      cursor={{ fill: "rgba(0,0,0,0.04)" }}
                      content={({ active, payload }) => {
                        if (!active || !payload?.length) return null;
                        const { ch, count } = payload[0].payload as {
                          ch: number;
                          count: number;
                        };
                        if (count === 0) return null;
                        const summary = chapterSummaries[ch];
                        return (
                          <div className="bg-[var(--paper-bg)] border border-[var(--paper-border)] p-2 text-[var(--ink-title)] text-[10px] max-w-[220px] shadow-md">
                            <p className="font-bold mb-1">
                              {t.chapterAbbr}
                              {lang === "zh" ? ` ${ch} 回` : ch} — {count}{" "}
                              {t.mentions(count)}
                            </p>
                            {summary && (
                              <p className="text-[var(--ink-dim-text)] leading-snug italic">
                                {(lang === "zh"
                                  ? summary.zh
                                  : summary.en
                                ).slice(0, 120)}
                                …
                              </p>
                            )}
                          </div>
                        );
                      }}
                    />
                    <Bar dataKey="count" maxBarSize={12}>
                      {mentionData.map(({ ch, count }) => (
                        <Cell
                          key={`cell-${ch}`}
                          fill={count > 0 ? "var(--accent)" : "#e8dcc8"}
                          opacity={
                            count > 0 ? 0.4 + 0.6 * (count / maxCount) : 1
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>

                {/* Chapter pills */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[var(--paper-border)]">
                  {mentionedChapters.map(({ ch, count }) => (
                    <button
                      key={ch}
                      onClick={() =>
                        setActiveChapter(activeChapter === ch ? null : ch)
                      }
                      title={`${t.chapterAbbr}${lang === "zh" ? ` ${ch} 回` : ch}: ${count} ${t.mentions(count)}`}
                      className={`px-2 py-0.5 text-[10px] font-bold border transition-colors rounded-sm font-hans ${activeChapter === ch
                          ? "bg-[var(--accent)] text-[var(--paper-bg)] border-[var(--accent)]"
                          : "border-[var(--accent)]/40 text-[var(--accent)] hover:bg-[var(--accent)]/10"
                        }`}
                    >
                      {t.chapterAbbr}
                      {lang === "zh" ? ` ${ch} 回` : ch}
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
                      className="mt-3 border border-[var(--accent)]/30 rounded-sm overflow-hidden"
                    >
                      {/* Panel header */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--accent)]/8 border-b border-[var(--accent)]/20">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] font-hans">
                            {t.chapterAbbr}
                            {lang === "zh"
                              ? ` ${activeChapter} 回`
                              : activeChapter}
                          </span>
                          <span className="text-[10px] text-[var(--ink-dim-text)] ml-2 font-hans">
                            {
                              chapters.find((c) => c.id === activeChapter)
                                ?.title
                            }
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[9px] text-[#8b7355] font-hans">
                            {mentionData.find((d) => d.ch === activeChapter)
                              ?.count ?? 0}{" "}
                            {t.mentions(
                              mentionData.find((d) => d.ch === activeChapter)
                                ?.count ?? 0,
                            )}
                          </span>
                          <button
                            onClick={() => setActiveChapter(null)}
                            className="text-[#8b7355] hover:text-[var(--ink-title)] transition-colors"
                          >
                            <X size={13} />
                          </button>
                        </div>
                      </div>

                      {/* Panel body: Scene Summary always before Text Excerpts */}
                      <div className="px-4 py-3 space-y-2.5 bg-[#faf6ee]">
                        {displaySceneBullets.length > 0 && (
                          <>
                            <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]/70 font-bold font-hans mb-1">
                              {lang === "zh" ? "场景摘要" : "Scene Summary"}
                            </p>
                            {displaySceneBullets.map((scene, i) => (
                              <div key={i} className="flex gap-2.5">
                                <span className="text-[var(--accent)]/50 mt-0.5 shrink-0">
                                  ◆
                                </span>
                                <p className="text-[11px] sm:text-xs leading-relaxed text-[var(--ink-title)]">
                                  {lang === "zh" ? scene.zh : scene.en}
                                </p>
                              </div>
                            ))}
                          </>
                        )}
                        {activeScenes.snippets.length > 0 && (
                          <>
                            {displaySceneBullets.length > 0 && (
                              <div className="border-t border-[var(--paper-border)] my-2 pt-2">
                                <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]/70 font-bold font-hans mb-1">
                                  {lang === "zh" ? "原文节选" : "Text Excerpts"}
                                </p>
                              </div>
                            )}
                            {activeScenes.snippets.map((snippet, i) => {
                              const regex = new RegExp(
                                `(${activeScenes.tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
                                "g",
                              );
                              const parts = snippet.split(regex);
                              return (
                                <div
                                  key={i}
                                  className="bg-black/5 rounded-sm px-3 py-2 border-l-2 border-[var(--accent)]/30"
                                >
                                  <p className="text-[11px] leading-relaxed text-[var(--ink-title)] font-hans">
                                    …
                                    {parts.map((part, j) =>
                                      activeScenes.tokens.includes(part) ? (
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

        <div className="bg-[var(--paper-border)]/20 p-4 text-[var(--ink-dim-text)] text-[10px] font-bold uppercase tracking-[0.5em] text-center border-t border-[var(--paper-border)] font-hans shrink-0">
          Precious Vibe 品花宝境
        </div>
      </motion.div>
    </div>
  );
}
