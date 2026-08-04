import { useState } from "react";
import { Calendar, ChevronDown, Info } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { Character } from "../types";

export function formatCharacterAge(character: Character, lang: "en" | "zh") {
  if (!character.ageIsEstimate) return character.age;
  return lang === "zh" ? `${character.age}岁（估算）` : `${character.age} (estimate)`;
}

export function CharacterAge({
  character,
  lang,
  accentColor,
}: {
  character: Character;
  lang: "en" | "zh";
  accentColor?: string;
}) {
  const [open, setOpen] = useState(false);
  const label = formatCharacterAge(character, lang);

  const noteText = character.ageIsEstimate
    ? (lang === "zh" ? character.ageEstimateNoteZh : character.ageEstimateNote)
    : (lang === "zh" ? character.ageSourceNoteZh : character.ageSourceNote);

  const noteTitle = character.ageIsEstimate
    ? (lang === "zh" ? "估算依据" : "Basis for estimate")
    : (lang === "zh"
      ? `《品花宝鉴》第 ${character.ageSourceChapter} 回`
      : `Pinhua Baojian, Chapter ${character.ageSourceChapter}`);

  const hasNote = Boolean(noteText);
  const evidenceLocation = character.ageEvidenceChapter
    ? (lang === "zh"
      ? `第${character.ageEvidenceChapter}回，第${character.ageEvidenceParagraph}段`
      : `Chapter ${character.ageEvidenceChapter}, paragraph ${character.ageEvidenceParagraph}`)
    : undefined;

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 text-sm sm:text-base text-[var(--ink-title)] font-hans">
        <Calendar
          size={16}
          className="shrink-0"
          style={{ color: accentColor }}
        />
        {hasNote ? (
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls={`age-info-${character.id}`}
            aria-label={
              character.ageIsEstimate
                ? (lang === "zh"
                  ? (open ? "隐藏估算依据" : "查看估算依据")
                  : (open ? "Hide estimation basis" : "View estimation basis"))
                : (lang === "zh"
                  ? (open ? "隐藏出处" : "查看出处")
                  : (open ? "Hide source" : "View source"))
            }
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 border border-[var(--paper-border)] bg-black/5 hover:bg-black/10 transition-colors cursor-pointer text-left font-hans text-sm sm:text-base text-[var(--ink-title)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <span>{label}</span>
            <ChevronDown
              size={14}
              className={`shrink-0 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
              style={{ color: accentColor }}
            />
          </button>
        ) : (
          <span>{label}</span>
        )}
      </div>

      {hasNote && (
        <AnimatePresence>
          {open && (
            <motion.div
              id={`age-info-${character.id}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-2.5 rounded-lg border border-[var(--paper-border)] bg-black/[0.03] p-3 text-left shadow-xs">
                <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-[var(--ink-title)] mb-1.5 font-hans">
                  <Info size={13} className="shrink-0" style={{ color: accentColor }} />
                  <span>{noteTitle}</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-[var(--ink-dim-text)] font-hans">
                  {noteText}
                </p>
                {character.ageEvidenceExcerpt && (
                  <div className="mt-3 border-t border-[var(--paper-border)] pt-2.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink-title)] mb-1">
                      {lang === "zh" ? "原文证据" : "Primary-text evidence"}
                      {evidenceLocation ? ` · ${evidenceLocation}` : ""}
                    </div>
                    <blockquote className="border-l-2 pl-2.5 text-xs sm:text-sm leading-relaxed text-[var(--ink-dim-text)] font-hans" style={{ borderColor: accentColor }}>
                      {character.ageEvidenceExcerpt}
                    </blockquote>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
