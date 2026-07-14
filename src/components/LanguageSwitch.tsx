export function LanguageSwitch({
  lang,
  setLang,
  className = "",
}: {
  lang: "en" | "zh";
  setLang: (lang: "en" | "zh") => void;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-row bg-black/5 p-0.5 rounded-sm border border-[var(--paper-border)] transition-all ${className}`}
      role="group"
      aria-label={lang === "zh" ? "语言" : "Language"}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-2 py-0.5 sm:px-2.5 sm:py-0.7 text-[10px] sm:text-[10px] font-bold uppercase tracking-wider transition-all rounded-sm cursor-pointer ${
          lang === "en"
            ? "bg-[var(--accent)] text-[var(--paper-bg)] shadow-sm"
            : "text-[var(--ink-dim-text)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
        }`}
      >
        en
      </button>
      <button
        type="button"
        onClick={() => setLang("zh")}
        className={`px-2 py-0.5 sm:px-2.5 sm:py-0.7 text-[10px] sm:text-[10px] font-bold transition-all rounded-sm font-hans cursor-pointer ${
          lang === "zh"
            ? "bg-[var(--accent)] text-[var(--paper-bg)] shadow-sm"
            : "text-[var(--ink-dim-text)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
        }`}
      >
        中
      </button>
    </div>
  );
}
