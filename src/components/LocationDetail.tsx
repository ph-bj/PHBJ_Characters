export function LocationDetail({
  location,
  lang,
  onClose,
}: {
  location: NovelLocationWithChapters;
  lang: "en" | "zh";
  onClose: () => void;
}) {
  const typeLabel = locationTypeLabels[location.type];
  const chapterList = location.chapterIds.join(", ");
  const tokenList = location.searchTokens.join(" / ");
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
        className="relative z-10 w-full max-w-xl max-h-[88vh] overflow-hidden parchment rounded-sm border-4 border-double border-[#d4c5a9] shadow-2xl flex flex-col"
      >
        <div className="p-4 sm:p-5 border-b border-[#d4c5a9] bg-[#f4ecd8] flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#5d5048]">
              {lang === "zh" ? "地点档案" : "Location Profile"}
            </p>
            <h3 className="text-lg font-bold text-[#2c2420] font-hans">
              {location.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 transition-colors text-[#2c2420]"
            aria-label="Close location modal"
          >
            <X size={20} />
          </button>
        </div>

        <div
          data-overlay-scroll="true"
          className="p-5 sm:p-6 overflow-y-auto space-y-4 text-[#2c2420]"
        >
          <div className="border border-[#d4c5a9] rounded-sm p-3 bg-black/5">
            <p className="text-[10px] uppercase tracking-widest font-bold text-[#5d5048] mb-1">
              {lang === "zh" ? "英文名" : "English Name"}
            </p>
            <p className="text-sm font-sans">{location.nameEn}</p>
          </div>

          <div className="border border-[#d4c5a9] rounded-sm p-3 bg-black/5">
            <p className="text-[10px] uppercase tracking-widest font-bold text-[#5d5048] mb-1">
              {lang === "zh" ? "类型" : "Type"}
            </p>
            <p className="text-sm font-hans">
              {lang === "zh" ? typeLabel.zh : typeLabel.en}
            </p>
          </div>

          <div className="border border-[#d4c5a9] rounded-sm p-3 bg-black/5">
            <p className="text-[10px] uppercase tracking-widest font-bold text-[#5d5048] mb-1">
              {lang === "zh" ? "检索词" : "Search Tokens"}
            </p>
            <p className="text-sm font-hans break-words">{tokenList}</p>
          </div>

          <div className="border border-[#d4c5a9] rounded-sm p-3 bg-black/5">
            <div className="flex items-center justify-between gap-2 mb-1">
              <p className="text-[10px] uppercase tracking-widest font-bold text-[#5d5048]">
                {lang === "zh" ? "出现回目" : "Chapter Appearances"}
              </p>
              <span className="text-[10px] font-bold text-[#8b4513]">
                {location.chapterIds.length}
              </span>
            </div>
            <p className="text-sm font-sans">{chapterList}</p>
          </div>

          <div className="border border-[#d4c5a9] rounded-sm p-3 bg-black/5 space-y-3">
            <p className="text-[10px] uppercase tracking-widest font-bold text-[#5d5048]">
              {lang === "zh" ? "章节提及与上下文" : "Mentions with Context"}
            </p>
            <div className="space-y-3">
              {locationMentions.map(({ chapterId, snippets }) => (
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
                          {(locationTokenRegex
                            ? snippet.split(locationTokenRegex)
                            : [snippet]
                          ).map((part, partIdx) => {
                            const isMatch =
                              location.searchTokens.includes(part);
                            return isMatch ? (
                              <mark
                                key={`${chapterId}-${idx}-${partIdx}`}
                                className="bg-amber-300/70 text-[#2c2420] px-0.5 rounded-sm"
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
