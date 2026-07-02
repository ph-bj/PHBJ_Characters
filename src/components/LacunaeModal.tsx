import { motion } from "motion/react";
import { X } from "lucide-react";
import type { LacunaConfidence, LacunaEntry } from "../utils";
import { PermalinkButton } from "./PermalinkButton";

export function LacunaeModal({
  chapterId,
  entries,
  onClose,
  lang,
}: {
  chapterId: number;
  entries: LacunaEntry[];
  onClose: () => void;
  lang: "en" | "zh";
}) {
  const t = {
    en: {
      lacunae: "Lacunae",
      noLacunae: "No lacunae annotations are available for this chapter yet.",
      inferred: "Inferred",
      certain: "Certain",
      probable: "Probable",
      speculative: "Speculative",
      chapter: "Chapter",
    },
    zh: {
      lacunae: "缺文档案",
      noLacunae: "此回暂无缺文勘误记录。",
      inferred: "推断字",
      certain: "确凿",
      probable: "合理",
      speculative: "存疑",
      chapter: "第",
    },
  }[lang];

  const confidenceTone: Record<LacunaConfidence, string> = {
    certain: "bg-emerald-100 text-emerald-800 border-emerald-300",
    probable: "bg-amber-100 text-amber-800 border-amber-300",
    speculative: "bg-violet-100 text-violet-800 border-violet-300",
  };
  const confidenceLabel: Record<LacunaConfidence, { en: string; zh: string }> =
    {
      certain: { en: "Certain", zh: "确证" },
      probable: { en: "Probable", zh: "可能" },
      speculative: { en: "Speculative", zh: "推测" },
    };

  const renderSnippet = (snippet: string, symbol: LacunaEntry["symbol"]) => {
    const idx = snippet.indexOf(symbol);
    if (idx === -1) return snippet;
    return (
      <>
        {snippet.slice(0, idx)}
        <mark className="bg-amber-300/70 text-[#2c2420] px-1 rounded-sm">
          {symbol}
        </mark>
        {snippet.slice(idx + symbol.length)}
      </>
    );
  };

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
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-hidden parchment rounded-sm border-4 border-double border-[#d4c5a9] shadow-2xl flex flex-col"
      >
        <div className="p-4 sm:p-5 border-b border-[#d4c5a9] bg-[#f4ecd8] flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#5d5048]">
              {lang === "zh" ? "缺文" : "Lacunae"}
            </p>
            <h3 className="text-lg font-bold text-[#2c2420]">
              {lang === "zh" ? `第 ${chapterId} 回` : `Chapter ${chapterId}`}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <PermalinkButton
              lang={lang}
              link={{ kind: "lacunae", chapter: chapterId }}
            />
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/5 transition-colors text-[#2c2420]"
              aria-label="Close lacunae modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div
          data-overlay-scroll="true"
          className="p-5 sm:p-6 overflow-y-auto space-y-4"
        >
          {entries.length === 0 ? (
            <div className="border border-[#d4c5a9] rounded-sm p-5 bg-black/5">
              <p className="text-[12px] text-[#5d5048] italic">
                {lang === "zh"
                  ? "此回暂无缺文勘误记录。"
                  : "No lacunae annotations are available for this chapter yet."}
              </p>
            </div>
          ) : (
            entries.map((entry, idx) => (
              <div
                key={`${entry.chapterId}-${idx}`}
                className="border border-[#d4c5a9] rounded-sm p-4 bg-black/5 space-y-3"
              >
                <p className="text-[14px] font-hans text-[#2c2420] leading-relaxed">
                  {renderSnippet(entry.snippet, entry.symbol)}
                </p>

                {entry.confidence === "certain" && (
                  <>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-widest text-[#5d5048] font-bold">
                          {lang === "zh" ? "推断字" : "Inferred"}
                        </span>
                        <span className="text-3xl leading-none font-serif text-[#2c2420]">
                          {entry.inferredCharacter}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest border rounded-sm px-2 py-1 ${confidenceTone[entry.confidence]}`}
                      >
                        {lang === "zh"
                          ? confidenceLabel[entry.confidence].zh
                          : confidenceLabel[entry.confidence].en}
                      </span>
                    </div>

                    <p className="text-[11px] leading-relaxed text-[#4a3f38] font-sans">
                      {entry.note}
                    </p>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
}
