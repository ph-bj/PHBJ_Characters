export function ChapterReader({
  chapter,
  onClose,
  lang,
  onSelectCharacter,
  onSelectLacuna,
}: {
  chapter: Chapter;
  onClose: () => void;
  lang: "en" | "zh";
  onSelectCharacter: (character: Character) => void;
  onSelectLacuna: () => void;
}) {
  const [chapterSearchInput, setChapterSearchInput] = useState("");
  const [chapterSearchQuery, setChapterSearchQuery] = useState("");
  const [chapterSearchMatchIndex, setChapterSearchMatchIndex] = useState(0);
  const chapterSearchMatchCounter = useRef(0);
  const chapterWorkAnchorIdsRef = useRef<Map<string, string>>(new Map());

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
    const unique = Array.from(new Set(matches.map((m) => m.trim())));
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
                className="inline-flex items-center rounded-sm border px-1 py-[1px] mx-[1px] align-baseline cursor-pointer transition-all hover:brightness-95 bg-amber-200/70 text-[#2c2420] border-amber-400/50"
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
        className="relative z-10 w-full max-w-none h-[100dvh] max-h-[100dvh] sm:max-w-5xl md:max-w-6xl sm:h-[90dvh] sm:max-h-[90dvh] parchment rounded-none sm:rounded-sm overflow-hidden shadow-2xl border-0 sm:border-4 border-double border-[#d4c5a9] flex flex-col"
      >
        <div className="p-4 sm:p-6 border-b border-[#d4c5a9] bg-[#f4ecd8] space-y-3 shrink-0">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <Book className="text-[#8b4513] shrink-0" size={20} />
              <h2
                className={`text-lg sm:text-xl font-bold text-[#2c2420] line-clamp-2 ${lang === "en" ? "font-sans" : "font-hans"}`}
              >
                {getChapterReaderTitle(chapter, lang)}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-black/5 rounded-full transition-colors text-[#2c2420] shrink-0"
              aria-label={lang === "zh" ? "关闭" : "Close"}
            >
              <X size={20} />
            </button>
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
              className="flex-1 min-w-0 px-3 py-1.5 text-sm bg-[#faf6ee] border border-[#d4c5a9] rounded-sm text-[#2c2420] placeholder:text-[#5d5048]/70 focus:outline-none focus:ring-1 focus:ring-[#8b4513]/40 font-hans"
              aria-label={lang === "zh" ? "搜索本章" : "Search in chapter"}
            />
            <button
              type="button"
              onClick={runChapterSearch}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-sm border border-[#8b4513]/40 bg-[#8b4513]/10 text-[#8b4513] hover:bg-[#8b4513]/20 transition-colors shrink-0 text-[11px] font-bold uppercase tracking-wider"
              aria-label={lang === "zh" ? "搜索" : "Search"}
            >
              <Search size={14} />
              <span className="hidden sm:inline font-sans">
                {lang === "zh" ? "搜索" : "Search"}
              </span>
            </button>
            {chapterSearchQuery.trim() && (
              <div className="flex items-center gap-1 shrink-0">
                <span className="text-[10px] tabular-nums text-[#5d5048] font-sans min-w-[2.5rem] text-center">
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
                  className="p-1.5 rounded-sm border border-[#d4c5a9] text-[#5d5048] hover:bg-black/5 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  aria-label={lang === "zh" ? "上一处" : "Previous match"}
                >
                  <ChevronUp size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => goToAdjacentSearchMatch(1)}
                  disabled={chapterSearchMatchCount === 0}
                  className="p-1.5 rounded-sm border border-[#d4c5a9] text-[#5d5048] hover:bg-black/5 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  aria-label={lang === "zh" ? "下一处" : "Next match"}
                >
                  <ChevronDown size={14} />
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          data-overlay-scroll="true"
          className="flex-1 min-h-0 overflow-y-auto px-5 py-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] sm:p-12 font-serif text-[#2c2420] leading-loose selection:bg-[#8b4513]/20 scrollbar-thin"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center mb-12">
              <div className="w-16 h-1 bg-[#8b4513]/20 mx-auto mb-6" />
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
              <div className="text-[10px] uppercase tracking-[0.5em] text-[#5d5048] opacity-60">
                Pinhua baojian Database 品花宝鉴数据库
              </div>
            </div>
            {chapterSummary && (
              <div className="mb-8 border border-[#d4c5a9] bg-black/5 p-4 rounded-sm space-y-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#5d5048] font-bold">
                  {lang === "en" ? "Chapter Summary" : "章节提要"}
                </p>
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-[#2c2420]">
                    {lang === "zh" ? "英文" : "English"}
                  </p>
                  <p className="text-sm sm:text-base text-[#4a3f38] leading-relaxed font-sans whitespace-pre-line">
                    {renderAnnotated(chapterSummary.en)}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-[#2c2420]">
                    {lang === "zh" ? "中文" : "Chinese"}
                  </p>
                  <p className="text-[12px] text-[#2c2420] font-hans leading-relaxed whitespace-pre-line">
                    {renderAnnotated(chapterSummary.zh)}
                  </p>
                </div>
              </div>
            )}
            {chapter.id > 0 && chapterMentionedCharacters.length > 0 && (
              <div className="mb-8 border border-[#d4c5a9] bg-black/5 p-4 rounded-sm">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#5d5048] font-bold mb-3">
                  {lang === "en"
                    ? "Characters Mentioned In This Chapter"
                    : "本回出现人物"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {chapterMentionedCharacters.map((character) => (
                    <button
                      key={character.id}
                      onClick={() => onSelectCharacter(character)}
                      className={`px-2 py-1 text-[11px] rounded-sm border transition-colors font-hans hover:brightness-95 ${
                        ROLE_CHIP_IDLE[character.role] ?? ROLE_CHIP_IDLE.Other
                      }`}
                    >
                      {character.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {chapter.id === -1 ? (
              <div className="space-y-5">
                {chapter.content.split("\n").map((line, i) => (
                  <div key={i} className="border-b border-[#d4c5a9]/50 pb-4">
                    <p className="text-base font-hans text-[#2c2420] leading-snug">
                      {renderTextWithSearchHighlight(
                        line,
                        chapterSearchQuery,
                        chapterSearchMatchIndex,
                        chapterSearchMatchCounter,
                      )}
                    </p>
                    {chapterTitleTranslations[i + 1] != null &&
                      chapterTitleTranslations[i + 1] !== "" && (
                        <p className="text-[12px] italic text-[#5d5048] mt-1 leading-snug">
                          {chapterTitleTranslations[i + 1]}
                        </p>
                      )}
                  </div>
                ))}
              </div>
            ) : translationMap[chapter.id] ? (
              <div className="space-y-8 pl-7 sm:pl-0">
                {chapter.content.split("\n\n").map((para, i) => (
                  <div
                    key={i}
                    className="relative border-b border-[#d4c5a9]/40 pb-6 last:border-0 sm:pl-0"
                  >
                    <span
                      className="absolute left-0 sm:-left-10 md:-left-12 top-0 w-6 sm:w-8 text-[10px] tabular-nums text-[#5d5048]/55 text-right leading-relaxed select-none font-sans"
                      aria-hidden
                      title={
                        lang === "zh" ? `第 ${i + 1} 段` : `Paragraph ${i + 1}`
                      }
                    >
                      {i + 1}
                    </span>
                    {lang === "en" && translationMap[chapter.id][i] ? (
                      <>
                        <p className="text-sm sm:text-base text-[#4a3f38] leading-7 font-sans whitespace-pre-line">
                          {renderAnnotated(translationMap[chapter.id][i])}
                        </p>
                        <p className="text-base font-hans text-[#2c2420] leading-relaxed mt-3">
                          {renderAnnotated(para)}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-base font-hans text-[#2c2420] leading-relaxed">
                          {renderAnnotated(para)}
                        </p>
                        {translationMap[chapter.id][i] && (
                          <p className="text-sm sm:text-base text-[#4a3f38] mt-3 leading-7 font-sans whitespace-pre-line">
                            {renderAnnotated(translationMap[chapter.id][i])}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="whitespace-pre-wrap text-base sm:text-lg italic font-hans first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                {renderAnnotated(chapter.content)}
              </div>
            )}
            {chapter.id >= 0 && chapterCitedWorks.length > 0 && (
              <div className="mt-10 border border-[#d4c5a9] bg-black/5 p-4 rounded-sm">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#5d5048] font-bold mb-3">
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
                        className="flex flex-col items-start gap-0.5 px-2.5 py-1.5 text-left rounded-sm border border-[#d4c5a9] bg-[#f4ecd8]/80 text-[#2c2420] cursor-pointer transition-colors hover:bg-[#d4c5a9]/50 hover:border-[#8b4513]/40"
                      >
                        <span className="text-[11px] font-hans leading-tight">
                          {work.zh}
                        </span>
                        {englishTitle && (
                          <span className="text-[10px] font-sans italic leading-tight text-[#5d5048]">
                            {englishTitle}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="pt-12 text-center text-[#5d5048] italic text-sm opacity-60">
              {lang === "en" ? "--- End of Chapter ---" : "--- 本回完 ---"}
            </div>
          </div>
        </div>

        <div className="bg-[#d4c5a9]/20 p-4 text-[#5d5048] text-[10px] font-bold uppercase tracking-[0.5em] text-center border-t border-[#d4c5a9] font-hans shrink-0">
          Pinhua baojian Database 品花宝鉴数据库
        </div>
      </motion.div>
    </div>
  );
}
