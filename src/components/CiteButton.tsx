import { useEffect, useRef, useState } from 'react';
import { Check, Copy, Quote } from 'lucide-react';
import { buildCitations } from '../permalink';

async function copyText(text: string): Promise<boolean> {
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
 * the current permalink. `itemTitle` names the cited page (character,
 * chapter, work…); omit it to cite the whole project.
 */
export function CiteButton({
  lang,
  itemTitle,
  align = 'right',
  direction = 'down',
}: {
  lang: 'en' | 'zh';
  itemTitle?: string;
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
      if (event.key === 'Escape') setOpen(false);
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

  // Built at render time while open, so the URL reflects the current permalink hash.
  const citations = open ? buildCitations(window.location.href, itemTitle) : null;

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
        title={lang === 'zh' ? '引用此页' : 'Cite this page'}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-sm border border-[#d4c5a9] bg-[#f4ecd8]/80 text-[#5d5048] hover:bg-[#8b4513]/10 hover:text-[#8b4513] transition-colors text-[10px] font-bold uppercase tracking-wider touch-manipulation"
      >
        <Quote size={12} />
        <span>{lang === 'zh' ? '引用' : 'Cite'}</span>
      </button>
      {open && (
        <div
          onClick={(event) => event.stopPropagation()}
          className={`absolute z-[130] w-[min(88vw,400px)] parchment border-2 border-[#d4c5a9] rounded-sm shadow-xl p-3 space-y-3 text-left ${
            direction === 'down' ? 'top-full mt-2' : 'bottom-full mb-2'
          } ${align === 'right' ? 'right-0' : 'left-0'}`}
        >
          {entries.map(({ style, text }) => (
            <div key={style}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#8b4513]">
                  {style}
                </span>
                <button
                  type="button"
                  onClick={async () => {
                    if (await copyText(text)) setCopied(style);
                  }}
                  className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[#5d5048] hover:text-[#8b4513] transition-colors touch-manipulation"
                >
                  {copied === style ? <Check size={11} /> : <Copy size={11} />}
                  {copied === style
                    ? (lang === 'zh' ? '已复制' : 'Copied')
                    : (lang === 'zh' ? '复制' : 'Copy')}
                </button>
              </div>
              <p className="text-[11px] leading-snug text-[#2c2420] select-all break-words">
                {text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
