import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "phbj-theme";

export type Theme = "parchment" | "plum";

function getStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "parchment" || stored === "plum") return stored;
  } catch {
    /* localStorage may be unavailable */
  }
  return "plum"; // default
}

function applyTheme(theme: Theme) {
  if (theme === "plum") {
    document.documentElement.setAttribute("data-theme", "plum");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

/** Apply theme before first paint (call at module level or in index.html). */
export function initTheme() {
  applyTheme(getStoredTheme());
}

export function ThemeToggle({
  lang,
  className = "",
}: {
  lang: "en" | "zh";
  className?: string;
}) {
  const [theme, setThemeState] = useState<Theme>(getStoredTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggle = useCallback((t: Theme) => {
    setThemeState(t);
    applyTheme(t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {
      /* noop */
    }
  }, []);

  return (
    <div
      className={`flex bg-black/5 p-1 rounded-sm border border-[var(--paper-border)] ${className}`}
      role="group"
      aria-label={lang === "zh" ? "主题" : "Theme"}
    >
      <button
        type="button"
        onClick={() => toggle("parchment")}
        className={`px-2 py-1 text-[10px] font-bold tracking-wider transition-all rounded-sm ${
          theme === "parchment"
            ? "bg-[var(--accent)] text-[var(--paper-bg)]"
            : "text-[var(--ink-dim-text)] hover:bg-black/5"
        }`}
        title={lang === "zh" ? "古卷" : "Parchment"}
      >
        {lang === "zh" ? "古卷" : "🏛️"}
      </button>
      <button
        type="button"
        onClick={() => toggle("plum")}
        className={`px-2 py-1 text-[10px] font-bold tracking-wider transition-all rounded-sm ${
          theme === "plum"
            ? "bg-[var(--accent)] text-[var(--paper-bg)]"
            : "text-[var(--ink-dim-text)] hover:bg-black/5"
        }`}
        title={lang === "zh" ? "青梅" : "Plum Green"}
      >
        {lang === "zh" ? "青梅" : "🌿"}
      </button>
    </div>
  );
}
