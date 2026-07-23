import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { Book, BookOpen, ChevronDown, Menu } from "lucide-react";
import type { NavSection } from "../utils";

export function NavMenuDropdown({
  lang,
  sections,
  onScrollToSection,
  onOpenContents,
  onOpenChapter,
}: {
  lang: "en" | "zh";
  sections: NavSection[];
  onScrollToSection: (id: string) => void;
  onOpenContents: () => void;
  onOpenChapter: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const updateMenuPosition = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    const width = window.matchMedia("(min-width: 768px)").matches ? 480 : 288;
    const left = Math.min(
      Math.max(8, rect.right - width),
      window.innerWidth - width - 8,
    );

    setMenuPosition({
      top: rect.bottom + 6,
      left,
      width,
    });
  }, []);

  useLayoutEffect(() => {
    if (!open) {
      setMenuPosition(null);
      return;
    }

    updateMenuPosition();
    window.addEventListener("resize", updateMenuPosition);
    window.addEventListener("scroll", updateMenuPosition, true);
    return () => {
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition, true);
    };
  }, [open, updateMenuPosition]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        triggerRef.current?.contains(target) ||
        panelRef.current?.contains(target)
      )
        return;
      setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        // Claim the key so the app-level Escape handler doesn't also react.
        event.preventDefault();
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const navigate = (action: () => void) => {
    setOpen(false);
    action();
  };

  const menuPanel =
    open &&
    menuPosition &&
    createPortal(
      <AnimatePresence>
        <motion.div
          ref={panelRef}
          key="nav-menu-panel"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          role="menu"
          style={{
            position: "fixed",
            top: menuPosition.top,
            left: menuPosition.left,
            width: menuPosition.width,
            zIndex: 60,
          }}
          className="max-h-[min(70vh,28rem)] overflow-y-auto parchment rounded-sm border-double border-4 border-[var(--paper-border)] shadow-xl p-3"
        >
          <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--ink-dim-text)] font-bold mb-2 px-1">
            {lang === "zh" ? "快速前往" : "Go To"}
          </p>
          <div className="grid grid-cols-3 gap-1.5 mb-3">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                role="menuitem"
                onClick={() => navigate(() => onScrollToSection(id))}
                className="w-full rounded-sm border border-[var(--paper-border)]/70 bg-white/15 hover:bg-[var(--accent)]/8 hover:border-[var(--accent)]/40 transition-all px-2 py-2 flex flex-col items-center justify-center gap-1 min-w-0 text-center"
              >
                <Icon size={15} className="text-[var(--accent)] shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-wide text-[var(--ink-title)] leading-tight line-clamp-2">
                  {label}
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-[var(--paper-border)]">
            <button
              type="button"
              role="menuitem"
              onClick={() => navigate(onOpenContents)}
              className="col-span-2 min-h-10 rounded-sm bg-[var(--accent)] text-[var(--paper-bg)] px-2 py-1.5 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider"
            >
              <Book size={13} />
              {lang === "zh" ? "目录" : "Contents"}
            </button>
            <button
              type="button"
              role="menuitem"
              onClick={() => navigate(onOpenChapter)}
              className="min-h-10 rounded-sm border border-[var(--accent)]/50 text-[var(--accent)] bg-[var(--accent)]/5 px-2 py-1.5 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider"
            >
              <BookOpen size={13} />
              {lang === "zh" ? "第一回" : "Ch. 1"}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          if (open) {
            setOpen(false);
            return;
          }
          updateMenuPosition();
          setOpen(true);
        }}
        className="h-[32px] flex items-center gap-1.5 px-3 bg-black/5 rounded-sm border border-[var(--paper-border)] text-[var(--ink-dim-text)] hover:bg-black/5 transition-all box-border cursor-pointer"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={lang === "zh" ? "打开菜单" : "Open menu"}
      >
        <Menu size={14} />
        <span className="text-[10px] font-bold uppercase tracking-widest">
          {lang === "zh" ? "菜单" : "Menu"}
        </span>
        <ChevronDown
          size={12}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {menuPanel}
    </>
  );
}
