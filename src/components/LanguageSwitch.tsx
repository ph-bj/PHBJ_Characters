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
      className={`flex items-center h-[32px] bg-black/5 p-1 rounded-sm border border-[var(--paper-border)] box-border ${className}`}
      role="group"
      aria-label={lang === "zh" ? "语言" : "Language"}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`h-full px-2 flex items-center justify-center text-[10px] font-bold uppercase tracking-wider transition-all rounded-sm cursor-pointer ${
          lang === "en"
            ? "bg-[var(--accent)] text-[var(--paper-bg)]"
            : "text-[var(--ink-dim-text)] hover:bg-black/5"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("zh")}
        className={`h-full px-2 flex items-center justify-center text-[10px] font-bold transition-all rounded-sm font-hans cursor-pointer ${
          lang === "zh"
            ? "bg-[var(--accent)] text-[var(--paper-bg)]"
            : "text-[var(--ink-dim-text)] hover:bg-black/5"
        }`}
      >
        中
      </button>
    </div>
  );
}
