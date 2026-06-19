export function LanguageSwitch({
  lang,
  setLang,
  className = "",
  compact = false,
}: {
  lang: "en" | "zh";
  setLang: (lang: "en" | "zh") => void;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex bg-black/5 p-1 rounded-sm border border-[#d4c5a9] ${className}`}
      role="group"
      aria-label={lang === "zh" ? "语言" : "Language"}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`${compact ? "px-1.5 py-1 text-[8px]" : "px-3 py-1 text-[10px]"} font-bold uppercase tracking-widest transition-all rounded-sm ${
          lang === "en"
            ? "bg-[#8b4513] text-[#f4ecd8]"
            : "text-[#5d5048] hover:bg-black/5"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("zh")}
        className={`${compact ? "px-1.5 py-1 text-[8px]" : "px-3 py-1 text-[10px]"} font-bold uppercase tracking-widest transition-all rounded-sm font-hans ${
          lang === "zh"
            ? "bg-[#8b4513] text-[#f4ecd8]"
            : "text-[#5d5048] hover:bg-black/5"
        }`}
      >
        {compact ? "中" : "中文"}
      </button>
    </div>
  );
}
