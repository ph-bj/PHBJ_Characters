import { useEffect, useRef, useState } from "react";

export function LanguageSwitch({
  lang,
  setLang,
  className = "",
}: {
  lang: "en" | "zh";
  setLang: (lang: "en" | "zh") => void;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<number | null>(null);
  const isHoveredRef = useRef(false);

  const resetTimer = () => {
    setIsVisible(true);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    if (!isHoveredRef.current) {
      timeoutRef.current = window.setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  };

  useEffect(() => {
    resetTimer();

    const handleScroll = () => {
      resetTimer();
    };

    // Capture scrolls on any container, including window and scrollable divs (like the reader)
    window.addEventListener("scroll", handleScroll, { capture: true, passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll, { capture: true });
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    setIsVisible(true);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    resetTimer();
  };

  const handleTouchStart = () => {
    resetTimer();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      className={`flex flex-col sm:flex-row bg-black/5 p-0.5 rounded-sm border border-[var(--paper-border)] transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 pointer-events-none translate-x-6 sm:translate-x-0"
      } ${className}`}
      role="group"
      aria-label={lang === "zh" ? "语言" : "Language"}
    >
      <button
        type="button"
        onClick={() => {
          setLang("en");
          resetTimer();
        }}
        className={`px-4 py-3.5 sm:px-2.5 sm:py-0.7 text-[11px] sm:text-[10px] font-bold uppercase tracking-wider transition-all rounded-sm cursor-pointer ${
          lang === "en"
            ? "bg-[var(--accent)] text-[var(--paper-bg)] shadow-sm"
            : "text-[var(--ink-dim-text)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
        }`}
      >
        en
      </button>
      <button
        type="button"
        onClick={() => {
          setLang("zh");
          resetTimer();
        }}
        className={`px-4 py-3.5 sm:px-2.5 sm:py-0.7 text-[11px] sm:text-[10px] font-bold transition-all rounded-sm font-hans cursor-pointer ${
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
