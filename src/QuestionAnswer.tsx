import type { ReactNode } from 'react';

type Block =
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: { indent: number; text: string }[] }
  | { type: 'ol'; items: string[] }
  | { type: 'blockquote'; lines: string[] };

function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    const token = match[0];
    if (token.startsWith('**')) {
      parts.push(
        <strong key={key++} className="font-bold text-[#2c2420]">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('*')) {
      parts.push(
        <em key={key++} className="italic text-[#4a3f38]">
          {token.slice(1, -1)}
        </em>
      );
    } else {
      parts.push(
        <code key={key++} className="text-[12px] px-1 py-0.5 rounded-sm bg-[#d4c5a9]/40 text-[#5d5048]">
          {token.slice(1, -1)}
        </code>
      );
    }
    last = match.index + token.length;
  }

  if (last < text.length) {
    parts.push(text.slice(last));
  }
  return parts.length ? parts : [text];
}

function isSectionHeading(line: string): boolean {
  const t = line.trim();
  if (t.startsWith('### ')) return true;
  if (/^\*\*.+\*\*$/.test(t) && t.length > 4) return true;
  return false;
}

function headingText(line: string): string {
  const t = line.trim();
  if (t.startsWith('### ')) return t.slice(4).trim();
  return t.slice(2, -2).trim();
}

function parseBlocks(markdown: string): Block[] {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: Block[] = [];
  let i = 0;

  const flushList = (
    kind: 'ul' | 'ol',
    items: { indent: number; text: string }[] | string[]
  ) => {
    if (!items.length) return;
    if (kind === 'ul') {
      blocks.push({ type: 'ul', items: items as { indent: number; text: string }[] });
    } else {
      blocks.push({ type: 'ol', items: items as string[] });
    }
  };

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    if (isSectionHeading(line)) {
      blocks.push({ type: 'h3', text: headingText(line) });
      i++;
      continue;
    }

    if (trimmed.startsWith('>')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      blocks.push({ type: 'blockquote', lines: quoteLines });
      continue;
    }

    const ulMatch = line.match(/^(\s*)[\*\-]\s+(.+)$/);
    if (ulMatch) {
      const ulItems: { indent: number; text: string }[] = [];
      while (i < lines.length) {
        while (i < lines.length && !lines[i].trim()) i++;
        if (i >= lines.length) break;
        const m = lines[i].match(/^(\s*)[\*\-]\s+(.+)$/);
        if (!m) break;
        ulItems.push({ indent: m[1].length, text: m[2] });
        i++;
      }
      flushList('ul', ulItems);
      continue;
    }

    const olMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (olMatch) {
      const olItems: string[] = [];
      while (i < lines.length) {
        while (i < lines.length && !lines[i].trim()) i++;
        if (i >= lines.length) break;
        const m = lines[i].trim().match(/^\d+\.\s+(.+)$/);
        if (!m) break;
        olItems.push(m[1]);
        i++;
      }
      flushList('ol', olItems);
      continue;
    }

    const para: string[] = [trimmed];
    i++;
    while (i < lines.length) {
      const next = lines[i].trim();
      if (
        !next ||
        isSectionHeading(lines[i]) ||
        next.startsWith('>') ||
        /^(\s*)[\*\-]\s+/.test(lines[i]) ||
        /^\d+\.\s+/.test(next)
      ) {
        break;
      }
      para.push(next);
      i++;
    }
    blocks.push({ type: 'p', text: para.join(' ') });
  }

  return blocks;
}

export function QuestionAnswer({ content }: { content: string }) {
  const blocks = parseBlocks(content);

  return (
    <article className="question-answer space-y-4 text-sm sm:text-base text-[#2c2420] leading-relaxed font-hans">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'h3':
            return (
              <h3
                key={idx}
                className="text-base sm:text-lg font-bold text-[#8b4513] border-b border-[#d4c5a9] pb-2 pt-1 first:pt-0"
              >
                {renderInline(block.text)}
              </h3>
            );
          case 'p':
            return (
              <p key={idx} className="text-[#2c2420]/95 leading-relaxed">
                {renderInline(block.text)}
              </p>
            );
          case 'ul':
            return (
              <ul key={idx} className="list-disc pl-5 sm:pl-6 space-y-2 marker:text-[#8b4513]/70">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="leading-relaxed"
                    style={{
                      marginLeft: item.indent > 0 ? `${Math.min(item.indent, 8) * 0.75}rem` : undefined,
                    }}
                  >
                    {renderInline(item.text)}
                  </li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={idx} className="list-decimal pl-5 sm:pl-6 space-y-2 marker:text-[#8b4513]/70 marker:font-bold">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed pl-1">
                    {renderInline(item)}
                  </li>
                ))}
              </ol>
            );
          case 'blockquote':
            return (
              <blockquote
                key={idx}
                className="border-l-4 border-[#8b4513]/35 bg-[#f4ecd8]/80 pl-4 pr-3 py-3 rounded-r-sm italic text-[#4a3f38] text-[13px] sm:text-sm leading-relaxed shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"
              >
                {block.lines.map((line, j) => (
                  <p key={j} className={j > 0 ? 'mt-2' : undefined}>
                    {renderInline(line)}
                  </p>
                ))}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </article>
  );
}
