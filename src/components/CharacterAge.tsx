import { useState } from "react";
import { BookOpen, Calendar, X } from "lucide-react";
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

  if (character.ageIsEstimate) {
    return <span>{label}</span>;
  }

  return (
    <>
      <button
        type="button"
        className="inline-flex min-h-8 items-center gap-1 rounded-md border border-[var(--paper-border)] px-2 underline decoration-dotted underline-offset-4 transition-colors hover:bg-black/5"
        onClick={() => setOpen(true)}
        aria-label={lang === "zh" ? `查看${label}岁的出处` : `View the book source for age ${label}`}
      >
        <span>{label}</span>
        <BookOpen size={13} style={{ color: accentColor }} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`age-source-${character.id}`}
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-xl border border-[var(--paper-border)] bg-[var(--paper)] p-5 text-left shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--ink-dim-text)]">
                  {lang === "zh" ? "书中明确年龄" : "Age stated in the book"}
                </p>
                <h3 id={`age-source-${character.id}`} className="mt-1 text-xl font-bold text-[var(--ink-title)]">
                  {character.name} · {label}
                </h3>
              </div>
              <button type="button" className="tap-44 rounded-full p-2 hover:bg-black/5" onClick={() => setOpen(false)} aria-label={lang === "zh" ? "关闭" : "Close"}>
                <X size={18} />
              </button>
            </div>
            <div className="flex gap-3 rounded-lg border border-[var(--paper-border)] bg-black/[0.025] p-4">
              <Calendar size={18} className="mt-0.5 shrink-0" style={{ color: accentColor }} />
              <div>
                <p className="font-bold text-[var(--ink-title)]">
                  {lang === "zh" ? `《品花宝鉴》第${character.ageSourceChapter}回` : `Pinhua Baojian, Chapter ${character.ageSourceChapter}`}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-dim-text)]">
                  {lang === "zh" ? character.ageSourceNoteZh : character.ageSourceNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
