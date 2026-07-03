import { useEffect, useState } from 'react';
import { Check, Link as LinkIcon } from 'lucide-react';
import { buildPermalink, type DeepLink } from '../permalink';
import { copyText } from './CiteButton';

/** Copies the page's permanent URL on the published site to the clipboard. */
export function PermalinkButton({
  lang,
  link,
}: {
  lang: 'en' | 'zh';
  link: DeepLink;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={async (event) => {
        event.stopPropagation();
        if (await copyText(buildPermalink(link))) setCopied(true);
      }}
      title={lang === 'zh' ? '复制永久链接' : 'Copy permanent link'}
      className="flex items-center gap-1.5 px-2 py-1.5 rounded-sm border border-[var(--paper-border)] bg-[var(--paper-bg)]/80 text-[var(--ink-dim-text)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-colors text-[10px] font-bold uppercase tracking-wider touch-manipulation shrink-0"
    >
      {copied ? <Check size={12} /> : <LinkIcon size={12} />}
      <span>
        {copied
          ? lang === 'zh' ? '已复制' : 'Copied'
          : lang === 'zh' ? '链接' : 'Link'}
      </span>
    </button>
  );
}
