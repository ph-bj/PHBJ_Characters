export function CharacterDetail({
  character,
  onClose,
  lang,
  onSelectChapter,
  elevated = false,
}: {
  character: Character;
  onClose: () => void;
  lang: "en" | "zh";
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
        className={`relative z-10 w-[95%] sm:w-full max-w-2xl md:max-w-3xl h-[90vh] sm:h-auto sm:max-h-[92vh] parchment rounded-sm overflow-hidden shadow-2xl border-4 border-double border-[#d4c5a9] my-4 sm:my-0 flex flex-col`}
      >
        <div className="relative shrink-0 px-4 sm:px-6 pt-4 sm:pt-5 pb-3 border-b border-[#d4c5a9]/50 bg-[#f4ecd8]">
          <code
            className="text-[9px] font-mono text-[#5d5048]/35 select-all"
            title={lang === "zh" ? "内部人物键" : "Internal character key"}
          >
            {character.id}
          </code>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 hover:bg-black/5 rounded-full transition-colors text-[#2c2420]"
          >
            <X size={20} />
          </button>
        </div>

        <div
          data-overlay-scroll="true"
          className="flex-1 overflow-y-auto p-6 sm:p-10 md:p-16"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-8 sm:mb-10 border-b-2 border-[#d4c5a9] pb-6 sm:pb-8">
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
              <h2 className="text-3xl sm:text-5xl font-bold text-[#2c2420] leading-tight">
                {character.name}
              </h2>
              {character.alias !== "—" && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {character.alias.split(/\s*\/\s*/).map((a, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 bg-black/5 text-[#5d5048] italic font-hans rounded-sm border border-[#d4c5a9]"
                    >
                      {a.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-12">
            <div className="space-y-1.5">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#5d5048] font-hans">
                {t.alias}
              </p>
              {character.alias === "—" ? (
                <p className="text-sm sm:text-base italic text-[#2c2420] font-hans">
                  —
                </p>
              ) : (
                <div className="flex flex-wrap gap-1">
                  {character.alias.split(/\s*\/\s*/).map((a, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 bg-black/5 text-[#5d5048] italic font-hans rounded-sm border border-[#d4c5a9]"
                    >
                      {a.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="space-y-1">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#5d5048] font-hans">
                {t.origin}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-[#2c2420] font-hans">
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
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#5d5048] font-hans">
                {t.gender}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-[#2c2420] font-hans">
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
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#5d5048] font-hans">
                {t.firstEntry}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-[#2c2420] font-hans">
                <BookOpen
                  size={14}
                  className="sm:w-4 sm:h-4 shrink-0"
                  style={{ color: accentColor }}
                />
                <span>{character.chapter}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#5d5048] font-hans">
                {t.historicalRecord}
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-black/5 p-4 sm:p-6 rounded-sm border border-[#d4c5a9]">
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#8b4513] mb-1 sm:mb-2 font-hans opacity-60">
                    {lang === "zh" ? "英文记录" : "English Record"}
                  </p>
                  <p className="leading-relaxed text-[#2c2420] text-sm sm:text-base italic">
                    {character.description}
                  </p>
                </div>
                <div className="bg-black/5 p-4 sm:p-6 rounded-sm border border-[#d4c5a9]">
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#8b4513] mb-1 sm:mb-2 font-hans opacity-60">
                    {lang === "zh" ? "中文记录" : "Chinese Record"}
                  </p>
                  <p className="leading-relaxed text-[#2c2420] text-base sm:text-lg font-hans">
                    {character.descriptionZh}
                  </p>
                </div>
              </div>
            </div>

            {/* Chapter Appearances Timeline */}
            <div className="space-y-2 sm:space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#5d5048] font-hans">
                  {t.appearances}
                </p>
                <p className="text-[9px] sm:text-[10px] text-[#8b7355] font-hans">
                  {t.mentionedIn(mentionedChapters.length)}
                </p>
              </div>
              <div className="bg-black/5 p-4 rounded-sm border border-[#d4c5a9]">
                <ResponsiveContainer width="100%" height={90}>
                  <BarChart
                    data={mentionData}
                    margin={{ top: 4, right: 4, left: -28, bottom: 0 }}
                  >
                    <XAxis
                      dataKey="ch"
                      tick={{ fill: "#8b7355", fontSize: 9 }}
                      tickLine={false}
                      axisLine={{ stroke: "#d4c5a9" }}
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
                          <div className="bg-[#f4ecd8] border border-[#d4c5a9] p-2 text-[#2c2420] text-[10px] max-w-[220px] shadow-md">
                            <p className="font-bold mb-1">
                              {t.chapterAbbr}
                              {lang === "zh" ? ` ${ch} 回` : ch} — {count}{" "}
                              {t.mentions(count)}
                            </p>
                            {summary && (
                              <p className="text-[#5d5048] leading-snug italic">
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
                          fill={count > 0 ? "#8b4513" : "#e8dcc8"}
                          opacity={
                            count > 0 ? 0.4 + 0.6 * (count / maxCount) : 1
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>

                {/* Chapter pills */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#d4c5a9]">
                  {mentionedChapters.map(({ ch, count }) => (
                    <button
                      key={ch}
                      onClick={() =>
                        setActiveChapter(activeChapter === ch ? null : ch)
                      }
                      title={`${t.chapterAbbr}${lang === "zh" ? ` ${ch} 回` : ch}: ${count} ${t.mentions(count)}`}
                      className={`px-2 py-0.5 text-[10px] font-bold border transition-colors rounded-sm font-hans ${
                        activeChapter === ch
                          ? "bg-[#8b4513] text-[#f4ecd8] border-[#8b4513]"
                          : "border-[#8b4513]/40 text-[#8b4513] hover:bg-[#8b4513]/10"
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
                      className="mt-3 border border-[#8b4513]/30 rounded-sm overflow-hidden"
                    >
                      {/* Panel header */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[#8b4513]/8 border-b border-[#8b4513]/20">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#8b4513] font-hans">
                            {t.chapterAbbr}
                            {lang === "zh"
                              ? ` ${activeChapter} 回`
                              : activeChapter}
                          </span>
                          <span className="text-[10px] text-[#5d5048] ml-2 font-hans">
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
                            className="text-[#8b7355] hover:text-[#2c2420] transition-colors"
                          >
                            <X size={13} />
                          </button>
                        </div>
                      </div>

                      {/* Panel body: Scene Summary always before Text Excerpts */}
                      <div className="px-4 py-3 space-y-2.5 bg-[#faf6ee]">
                        {displaySceneBullets.length > 0 && (
                          <>
                            <p className="text-[9px] uppercase tracking-[0.2em] text-[#8b4513]/70 font-bold font-hans mb-1">
                              {lang === "zh" ? "场景摘要" : "Scene Summary"}
                            </p>
                            {displaySceneBullets.map((scene, i) => (
                              <div key={i} className="flex gap-2.5">
                                <span className="text-[#8b4513]/50 mt-0.5 shrink-0">
                                  ◆
                                </span>
                                <p className="text-[11px] sm:text-xs leading-relaxed text-[#2c2420]">
                                  {lang === "zh" ? scene.zh : scene.en}
                                </p>
                              </div>
                            ))}
                          </>
                        )}
                        {activeScenes.snippets.length > 0 && (
                          <>
                            {displaySceneBullets.length > 0 && (
                              <div className="border-t border-[#d4c5a9] my-2 pt-2">
                                <p className="text-[9px] uppercase tracking-[0.2em] text-[#8b4513]/70 font-bold font-hans mb-1">
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
                                  className="bg-black/5 rounded-sm px-3 py-2 border-l-2 border-[#8b4513]/30"
                                >
                                  <p className="text-[11px] leading-relaxed text-[#2c2420] font-hans">
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

        <div className="bg-[#d4c5a9]/20 p-4 text-[#5d5048] text-[10px] font-bold uppercase tracking-[0.5em] text-center border-t border-[#d4c5a9] font-hans shrink-0">
          Pinhua baojian Database 品花宝鉴数据库
        </div>
      </motion.div>
    </div>
  );
}
