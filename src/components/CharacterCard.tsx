import { motion } from "motion/react";
import type { Character } from "../types";
import { ROLE_ACCENTS, ROLE_TEXT_COLORS, ROLE_TINTS } from "../utils";
import { PlumCorner } from "./illustrations/PlumCorner";

export function CharacterCard({
  character,
  isActive,
  onClick,
  lang,
  lockMotion = false,
  mentionCount,
}: {
  character: Character;
  isActive: boolean;
  onClick: () => void;
  lang: "en" | "zh";
  lockMotion?: boolean;
  mentionCount?: number;
  key?: string;
}) {
  const tintClass = ROLE_TINTS[character.role] || ROLE_TINTS.Other;
  const textClass = ROLE_TEXT_COLORS[character.role] || ROLE_TEXT_COLORS.Other;
  const accentColor = ROLE_ACCENTS[character.role] || ROLE_ACCENTS.Other;

  return (
    <motion.div
      layout={!lockMotion}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={lockMotion ? undefined : { y: -4 }}
      onClick={onClick}
      className={`parchment p-5 sm:p-8 rounded-sm cursor-pointer transition-all relative flex flex-col justify-between h-full group border-l-4 ${tintClass} ${
        isActive ? `ring-2 ring-[var(--accent)]/40` : "hover:border-[var(--accent)]/30"
      }`}
      style={{ borderLeftColor: accentColor }}
    >
      {character.id === "char-0" && <PlumCorner />}
      <span className="absolute top-4 right-4 text-[9px] sm:text-[10px] font-serif italic opacity-40">
        {character.id}
      </span>

      <div className="mb-4">
        <div className="text-xl sm:text-2xl font-bold text-[var(--ink-title)] group-hover:text-[var(--accent)] transition-colors leading-tight">
          {character.name}
        </div>
        {character.alias !== "—" && (
          <div className="text-[11px] sm:text-[12px] italic text-[var(--ink-dim-text)] mt-1 font-hans">
            {character.alias}
          </div>
        )}
      </div>

      <div>
        <div
          className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] mb-4 font-hans ${textClass}`}
        >
          {lang === "zh" ? character.roleZh : character.role}
        </div>
        <p
          className={`leading-relaxed text-[var(--ink-title)] line-clamp-3 mb-2 ${lang === "zh" ? "text-[12px] sm:text-[13px] font-hans" : "text-xs sm:text-sm italic"}`}
        >
          {lang === "en" ? character.description : character.descriptionZh}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3 border-t border-[var(--paper-border)] pt-4">
        <span className="text-[9px] sm:text-[10px] text-[var(--ink-dim-text)] uppercase tracking-widest font-bold font-hans">
          {lang === "zh" ? character.originZh : character.origin}
        </span>
        <span className="text-[9px] sm:text-[10px] text-[var(--ink-dim-text)] uppercase tracking-widest font-hans">
          {lang === "en" ? "Age" : "年龄"}: {character.age}
        </span>
        <span className="text-[9px] sm:text-[10px] text-[var(--ink-dim-text)] uppercase tracking-widest font-hans">
          {lang === "en" ? character.gender : character.genderZh}
        </span>
        {mentionCount !== undefined && (
          <span className="text-[9px] sm:text-[10px] text-[var(--accent)] uppercase tracking-widest font-bold font-hans">
            {lang === "en"
              ? `${mentionCount} mentions`
              : `${mentionCount} 次提及`}
          </span>
        )}
      </div>
    </motion.div>
  );
}
