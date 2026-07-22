// Stable, hash-based deep links plus scholarly citation formatting.
// Hash format: #/<kind>/<id>, e.g. #/character/char-1, #/chapter/12,
// #/work/%E7%89%A1%E4%B8%B9%E4%BA%AD, #/question/<slug>, #/lacunae/7.

export type DeepLink = (
  | { kind: 'character'; id: string }
  | { kind: 'chapter'; id: number }
  | { kind: 'garden'; id: string }
  | { kind: 'location'; id: string }
  | { kind: 'work'; key: string }
  | { kind: 'question'; slug: string }
  | { kind: 'lacunae'; chapter: number }
) & { lang?: 'en' | 'zh' };

export function formatHash(link: DeepLink | null): string {
  if (!link) return '';
  const prefix = link.lang ? `#/${link.lang}` : '#';
  switch (link.kind) {
    case 'character': return `${prefix}/character/${encodeURIComponent(link.id)}`;
    case 'chapter': return `${prefix}/chapter/${link.id}`;
    case 'garden': return `${prefix}/location/${encodeURIComponent(link.id)}`;
    case 'location': return `${prefix}/location/${encodeURIComponent(link.id)}`;
    case 'work': return `${prefix}/work/${encodeURIComponent(link.key)}`;
    case 'question': return `${prefix}/question/${encodeURIComponent(link.slug)}`;
    case 'lacunae': return `${prefix}/lacunae/${link.chapter}`;
  }
}

export function parseHash(hash: string): DeepLink | null {
  const match = hash.match(/^#\/(?:(en|zh)\/)?([a-z]+)\/(.+)$/);
  if (!match) return null;
  const [, langStr, kind, rawId] = match;
  const lang = (langStr === 'en' || langStr === 'zh') ? langStr : undefined;
  let id: string;
  try {
    id = decodeURIComponent(rawId);
  } catch {
    return null;
  }

  let link: DeepLink | null = null;
  switch (kind) {
    case 'character': link = { kind: 'character', id }; break;
    case 'garden': link = { kind: 'location', id }; break;
    case 'location': link = { kind: 'location', id }; break;
    case 'work': link = { kind: 'work', key: id }; break;
    case 'question': link = { kind: 'question', slug: id }; break;
    case 'chapter': {
      const n = Number(id);
      if (Number.isInteger(n) && n >= 0 && n <= 60) {
        link = { kind: 'chapter', id: n };
      }
      break;
    }
    case 'lacunae': {
      const n = Number(id);
      if (Number.isInteger(n) && n >= 1 && n <= 60) {
        link = { kind: 'lacunae', chapter: n };
      }
      break;
    }
  }

  if (link && lang) {
    link.lang = lang;
  }
  return link;
}

const SITE_TITLE = "Precious Vibe 品花宝境: Pinhua baojian's Vibe Literature";
const SITE_URL = 'https://ph-bj.github.io';
const SITE_YEAR = '2026';
const AUTHOR = 'Zhou, TengChao';

/** Permanent URL on the published site for a deep-linkable page. */
export function buildPermalink(link: DeepLink): string {
  return `${SITE_URL}/${formatHash(link)}`;
}

export interface Citations {
  mla: string;
  chicago: string;
}

/**
 * Plain-text MLA (9th ed.) and Chicago (17th ed., bibliography style)
 * citations for the project as a whole, using the published site URL.
 */
export function buildCitations(): Citations {
  const mla = `${AUTHOR}. ${SITE_TITLE}. ${SITE_YEAR}, ${SITE_URL}.`;
  const chicago = `${AUTHOR}. ${SITE_TITLE}. ${SITE_YEAR}. ${SITE_URL}.`;

  return { mla, chicago };
}
