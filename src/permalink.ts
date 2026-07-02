// Stable, hash-based deep links plus scholarly citation formatting.
// Hash format: #/<kind>/<id>, e.g. #/character/char-1, #/chapter/12,
// #/work/%E7%89%A1%E4%B8%B9%E4%BA%AD, #/question/<slug>, #/lacunae/7.

export type DeepLink =
  | { kind: 'character'; id: string }
  | { kind: 'chapter'; id: number }
  | { kind: 'garden'; id: string }
  | { kind: 'location'; id: string }
  | { kind: 'work'; key: string }
  | { kind: 'question'; slug: string }
  | { kind: 'lacunae'; chapter: number };

export function formatHash(link: DeepLink | null): string {
  if (!link) return '';
  switch (link.kind) {
    case 'character': return `#/character/${encodeURIComponent(link.id)}`;
    case 'chapter': return `#/chapter/${link.id}`;
    case 'garden': return `#/garden/${encodeURIComponent(link.id)}`;
    case 'location': return `#/location/${encodeURIComponent(link.id)}`;
    case 'work': return `#/work/${encodeURIComponent(link.key)}`;
    case 'question': return `#/question/${encodeURIComponent(link.slug)}`;
    case 'lacunae': return `#/lacunae/${link.chapter}`;
  }
}

export function parseHash(hash: string): DeepLink | null {
  const match = hash.match(/^#\/([a-z]+)\/(.+)$/);
  if (!match) return null;
  const [, kind, rawId] = match;
  let id: string;
  try {
    id = decodeURIComponent(rawId);
  } catch {
    return null;
  }
  switch (kind) {
    case 'character': return { kind: 'character', id };
    case 'garden': return { kind: 'garden', id };
    case 'location': return { kind: 'location', id };
    case 'work': return { kind: 'work', key: id };
    case 'question': return { kind: 'question', slug: id };
    case 'chapter': {
      const n = Number(id);
      return Number.isInteger(n) && n >= 0 && n <= 60 ? { kind: 'chapter', id: n } : null;
    }
    case 'lacunae': {
      const n = Number(id);
      return Number.isInteger(n) && n >= 1 && n <= 60 ? { kind: 'lacunae', chapter: n } : null;
    }
    default: return null;
  }
}

const SITE_TITLE = 'Precious Vibe 品花宝境: A Digital Companion to Pinhua Baojian';
const SITE_YEAR = '2026';
const AUTHOR_MLA = 'Zhou, TengChao';
const AUTHOR_CHICAGO = 'Zhou, TengChao';

export interface Citations {
  mla: string;
  chicago: string;
}

/**
 * Plain-text MLA (9th ed.) and Chicago (17th ed., bibliography style)
 * citations. `itemTitle` cites a page within the site (a character, chapter,
 * work, etc.); omit it to cite the project as a whole.
 */
export function buildCitations(url: string, itemTitle?: string): Citations {
  const now = new Date();
  const mlaDate = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const chicagoDate = now.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  const item = itemTitle?.trim();

  const mla = item
    ? `${AUTHOR_MLA}. "${item}." ${SITE_TITLE}, ${SITE_YEAR}, ${url}. Accessed ${mlaDate}.`
    : `${AUTHOR_MLA}. ${SITE_TITLE}. ${SITE_YEAR}, ${url}. Accessed ${mlaDate}.`;

  const chicago = item
    ? `${AUTHOR_CHICAGO}. "${item}." ${SITE_TITLE}. ${SITE_YEAR}. Accessed ${chicagoDate}. ${url}.`
    : `${AUTHOR_CHICAGO}. ${SITE_TITLE}. ${SITE_YEAR}. Accessed ${chicagoDate}. ${url}.`;

  return { mla, chicago };
}
