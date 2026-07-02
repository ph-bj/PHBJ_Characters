import { useMemo } from "react";
import { motion } from "motion/react";
import { Book, Info, Users, X } from "lucide-react";
import { chapters } from "../chapters";
import { WORK_ENGLISH_BY_CHINESE } from "../englishWorkTitles";
import { getCharacterNameForLanguage, worksData } from "../utils";
import { getCharactersNearWork } from "../intertexts";
import { getWorkSceneLinks } from "../workLinks";
import { characters } from "../data";
import type { Character } from "../types";
import { CiteButton } from "./CiteButton";

export function WorkModal({
  work,
  lang,
  onClose,
  onSelectCharacter,
}: {
  work: string;
  lang: "en" | "zh";
  onClose: () => void;
  onSelectCharacter?: (character: Character) => void;
}) {
  const data = worksData[work];

  const characterLinks = useMemo(
    () => getCharactersNearWork(work, data?.chapters ?? []),
    [work, data?.chapters],
  );

  const sceneLinks = useMemo(() => {
    return getWorkSceneLinks(work)
      .map((link) => ({
        ...link,
        character: characters.find((c) => c.id === link.characterId),
      }))
      .filter((link) => link.character);
  }, [work]);

  const workTokenRegex = useMemo(() => {
    // We can just construct a RegExp from a literal instead of string concatenation inside the app
    // Actually, simple RegExp constructor works better
    return new RegExp(`(${work})`, "g");
  }, [work]);

  const workMentions = useMemo(() => {
    if (!data?.chapters) return [];
    return data.chapters.map((chapterId) => {
      const chapter = chapters.find((item) => item.id === chapterId);
      if (!chapter) return { chapterId, snippets: [] as string[] };

      const positions: Array<{ start: number; end: number }> = [];
      let pos = 0;
      while ((pos = chapter.content.indexOf(work, pos)) !== -1) {
        positions.push({ start: pos, end: pos + work.length });
        pos += work.length;
      }

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
  }, [data?.chapters, work]);

  if (!data) return null;

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
        className="absolute inset-0 z-0 bg-[#2c2420]/80 backdrop-blur-sm pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-2xl max-h-[85vh] bg-[#f4ecd8] rounded-sm shadow-2xl border-4 border-double border-[#8b4513] flex flex-col overflow-hidden parchment"
      >
        <div className="flex-none p-4 sm:p-6 border-b border-[#d4c5a9]">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#2c2420] font-hans">
                {lang === "zh"
                  ? `《${work}》`
                  : WORK_ENGLISH_BY_CHINESE[work] || work}
              </h2>
            </div>
            <div className="flex items-center gap-1.5">
              <CiteButton
                lang={lang}
                itemTitle={
                  lang === "zh"
                    ? `《${work}》`
                    : WORK_ENGLISH_BY_CHINESE[work] || `《${work}》`
                }
              />
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-[#8b4513]/60 hover:text-[#8b4513] hover:bg-[#d4c5a9]/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>

        <div
          data-overlay-scroll="true"
          className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar"
          id="workmodal-scroll-area"
        >
          <div className="space-y-6">
            <section>
              <h3 className="text-sm font-bold text-[#8b4513] uppercase tracking-wider mb-2 font-sans flex items-center gap-2">
                <Book className="w-4 h-4" />
                {lang === "zh" ? "简介" : "Description"}
              </h3>
              <p className="text-sm sm:text-base text-[#2c2420]/90 leading-relaxed font-hans whitespace-pre-wrap">
                {lang === "zh" ? data.descZh : data.descEn}
              </p>
            </section>

            {data.chapters && data.chapters.length > 0 && (
              <section>
                <h3 className="text-sm font-bold text-[#8b4513] uppercase tracking-wider mb-2 font-sans flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  {lang === "zh" ? "出现章节" : "Appears in Chapters"}
                </h3>
                <div>
                  <div className="flex flex-wrap gap-1.5">
                    {data.chapters.map((ch) => (
                      <span
                        key={ch}
                        className="px-2 py-0.5 text-[10px] rounded-sm border border-[#d4c5a9] bg-[#f4ecd8]/50 text-[#5d5048] font-sans"
                      >
                        {lang === "zh" ? `第${ch}回` : `Chapter ${ch}`}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {characterLinks.length > 0 && (
              <section>
                <h3 className="text-sm font-bold text-[#8b4513] uppercase tracking-wider mb-1 font-sans flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {lang === "zh" ? "关联人物" : "Linked Characters"}
                </h3>
                <p className="text-[10px] text-[#5d5048] italic mb-2">
                  {lang === "zh"
                    ? "根据正文自动推算：该作品被引用时于附近文字提及的人物。"
                    : "Computed from the text: characters mentioned near citations of this work."}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {characterLinks.map(({ character, chapters: chapterIds, hits }) => (
                    <button
                      key={character.id}
                      type="button"
                      onClick={() => onSelectCharacter?.(character)}
                      disabled={!onSelectCharacter}
                      title={
                        lang === "zh"
                          ? `第 ${chapterIds.join("、")} 回`
                          : `Chapter${chapterIds.length > 1 ? "s" : ""} ${chapterIds.join(", ")}`
                      }
                      className="px-2 py-0.5 text-[11px] rounded-sm border border-[#d4c5a9] bg-[#f4ecd8]/70 text-[#2c2420] font-hans hover:bg-[#8b4513]/10 hover:border-[#8b4513]/40 transition-colors disabled:pointer-events-none"
                    >
                      {getCharacterNameForLanguage(character, lang)}
                      {hits > 1 && (
                        <span className="ml-1 text-[9px] font-sans text-[#8b4513]">
                          ×{hits}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </section>
            )}

            {sceneLinks.length > 0 && (
              <section>
                <h3 className="text-sm font-bold text-[#8b4513] uppercase tracking-wider mb-1 font-sans flex items-center gap-2">
                  <Book className="w-4 h-4" />
                  {lang === "zh" ? "场景笔记" : "Scene Notes"}
                </h3>
                <p className="text-[10px] text-[#5d5048] italic mb-2">
                  {lang === "zh"
                    ? "编者场景摘记中直接涉及此作品之处。"
                    : "Curated scene summaries that invoke this work directly."}
                </p>
                <div className="space-y-2">
                  {sceneLinks.map((link, idx) => (
                    <div
                      key={`${link.characterId}-${link.chapter}-${idx}`}
                      className="border border-[#d4c5a9]/70 rounded-sm p-2 bg-[#f4ecd8]/60"
                    >
                      <p className="text-[10px] font-bold text-[#8b4513] mb-1">
                        <button
                          type="button"
                          onClick={() => onSelectCharacter?.(link.character!)}
                          disabled={!onSelectCharacter}
                          className="underline decoration-dotted underline-offset-2 hover:text-[#2c2420] transition-colors disabled:pointer-events-none disabled:no-underline"
                        >
                          {getCharacterNameForLanguage(link.character!, lang)}
                        </button>
                        {" · "}
                        {lang === "zh"
                          ? `第 ${link.chapter} 回`
                          : `Chapter ${link.chapter}`}
                      </p>
                      <p className="text-[11px] leading-relaxed font-hans text-[#2c2420]">
                        {lang === "zh" ? link.bullet.zh : link.bullet.en}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {workMentions.length > 0 && (
              <section>
                <div className="border border-[#d4c5a9] rounded-sm p-3 bg-black/5 space-y-3">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#5d5048]">
                    {lang === "zh"
                      ? "章节提及与上下文"
                      : "Mentions with Context"}
                  </p>
                  <div className="space-y-3">
                    {workMentions.map(({ chapterId, snippets }) => (
                      <div
                        key={chapterId}
                        className="border border-[#d4c5a9]/70 rounded-sm p-2 bg-[#f4ecd8]/60"
                      >
                        <p className="text-[10px] font-bold text-[#8b4513] mb-1">
                          {lang === "zh"
                            ? `第 ${chapterId} 回`
                            : `Chapter ${chapterId}`}{" "}
                          ({snippets.length})
                        </p>
                        {snippets.length === 0 ? (
                          <p className="text-[11px] text-[#5d5048] italic">
                            {lang === "zh"
                              ? "无上下文摘录。"
                              : "No surrounding snippet found."}
                          </p>
                        ) : (
                          <div className="space-y-1.5">
                            {snippets.map((snippet, idx) => (
                              <p
                                key={`${chapterId}-${idx}`}
                                className="text-[11px] leading-relaxed font-hans text-[#2c2420]"
                              >
                                …
                                {(workTokenRegex
                                  ? snippet.split(workTokenRegex)
                                  : [snippet]
                                ).map((part, partIdx) => {
                                  const isMatch = part === work;
                                  return isMatch ? (
                                    <mark
                                      key={`${chapterId}-${idx}-${partIdx}`}
                                      className="bg-amber-300/70 text-[#2c2420] px-0.5 rounded-sm"
                                    >
                                      {part}
                                    </mark>
                                  ) : (
                                    <span
                                      key={`${chapterId}-${idx}-${partIdx}`}
                                    >
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
              </section>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
