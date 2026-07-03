import { useEffect, useRef, useState } from 'react';
import { Check, Copy, Quote } from 'lucide-react';
import { buildCitations } from '../permalink';

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Older/insecure contexts: fall back to a hidden textarea.
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(textarea);
      return ok;
    } catch {
      return false;
    }
  }
}

/**
 * "Cite this" button with a popover offering MLA and Chicago citations for
 * the project as a whole.
 */
export function CiteButton({
  lang,
  align = 'right',
  direction = 'down',
}: {
  lang: 'en' | 'zh';
  align?: 'left' | 'right';
  direction?: 'down' | 'up';
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && event.target instanceof Node && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // Claim the key so the app-level Escape handler doesn't also close
        // the modal underneath this popover.
        event.preventDefault();
        setOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(null), 1600);
    return () => clearTimeout(timer);
  }, [copied]);

  // Built at render time while open, so the access date is current.
  const citations = open ? buildCitations() : null;

  const entries = citations
    ? [
        { style: 'MLA', text: citations.mla },
        { style: 'Chicago', text: citations.chicago },
      ]
    : [];

  return (
    <div ref={rootRef} className="relative inline-block">
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          setOpen((v) => !v);
        }}
        aria-expanded={open}
        title={lang === 'zh' ? '引用本站' : 'Cite this site'}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-sm border border-[var(--paper-border)] bg-[var(--paper-bg)]/80 text-[var(--ink-dim-text)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-colors text-[10px] font-bold uppercase tracking-wider touch-manipulation"
      >
        <Quote size={12} />
        <span>{lang === 'zh' ? '引用' : 'Cite'}</span>
      </button>
      {open && (
        <div
          onClick={(event) => event.stopPropagation()}
          className={`absolute z-[130] w-[min(88vw,400px)] parchment border-2 border-[var(--paper-border)] rounded-sm shadow-xl p-3 space-y-3 text-left ${
            direction === 'down' ? 'top-full mt-2' : 'bottom-full mb-2'
          } ${align === 'right' ? 'right-0' : 'left-0'}`}
        >
          {entries.map(({ style, text }) => (
            <div key={style}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--accent)]">
                  {style}
                </span>
                <button
                  type="button"
                  onClick={async () => {
                    if (await copyText(text)) setCopied(style);
                  }}
                  className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[var(--ink-dim-text)] hover:text-[var(--accent)] transition-colors touch-manipulation"
                >
                  {copied === style ? <Check size={11} /> : <Copy size={11} />}
                  {copied === style
                    ? (lang === 'zh' ? '已复制' : 'Copied')
                    : (lang === 'zh' ? '复制' : 'Copy')}
                </button>
              </div>
              <p className="text-[11px] leading-snug text-[var(--ink-title)] select-all break-words">
                {text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
