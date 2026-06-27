import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));

function parseBracketArray(text, startIdx) {
  let i = startIdx;
  if (text[i] !== '[') return null;
  let depth = 0;
  let inStr = false;
  let esc = false;
  const begin = i;
  for (; i < text.length; i++) {
    const c = text[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') {
      inStr = true;
      continue;
    }
    if (c === '[') depth++;
    else if (c === ']') {
      depth--;
      if (depth === 0) {
        // eslint-disable-next-line no-eval
        return eval(text.slice(begin, i + 1));
      }
    }
  }
  return null;
}

function parseStringArrayFile(path, chapterId, isEn = false) {
  const text = readFileSync(path, 'utf8');
  if (isEn) {
    const marker = `${chapterId}: [`;
    const idx = text.indexOf(marker);
    if (idx !== -1) {
      const arrStart = idx + marker.length - 1;
      return parseBracketArray(text, arrStart) ?? [];
    }
  }
  const eqArr = text.indexOf('= [');
  const arrStart = eqArr === -1 ? -1 : eqArr + 2;
  return arrStart >= 0 ? (parseBracketArray(text, arrStart) ?? []) : [];
}

function joinParagraphs(paras) {
  return paras.join('\n\n');
}

function chapterFilename(id) {
  return id === 0 ? '00-preface.txt' : `${String(id).padStart(2, '0')}.txt`;
}

function loadChapterTitleTranslations() {
  const utilsText = readFileSync(join(ROOT, 'src/utils.tsx'), 'utf8');
  const start = utilsText.indexOf('export const chapterTitleTranslations');
  const openBrace = utilsText.indexOf('{', start);
  let depth = 0;
  for (let i = openBrace; i < utilsText.length; i++) {
    const c = utilsText[i];
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth === 0) {
        // eslint-disable-next-line no-eval
        return eval(`(${utilsText.slice(openBrace, i + 1)})`);
      }
    }
  }
  return {};
}

const chapterMeta = JSON.parse(readFileSync(join(ROOT, 'src/chapterMeta.json'), 'utf8'));
const chapterTitleTranslations = loadChapterTitleTranslations();

const zhOut = join(ROOT, 'public/downloads/chinese');
const enOut = join(ROOT, 'public/downloads/english');
mkdirSync(zhOut, { recursive: true });
mkdirSync(enOut, { recursive: true });

const prefaceZh = parseStringArrayFile(
  join(ROOT, 'src/chapterTranslations/chinese/prefaceChinese.ts'),
  0,
  false,
);
const prefaceEn = parseStringArrayFile(join(ROOT, 'src/prefaceTranslation.ts'), 0, false);

writeFileSync(
  join(zhOut, chapterFilename(0)),
  `序\n\n${joinParagraphs(prefaceZh)}`,
  'utf8',
);
writeFileSync(
  join(enOut, chapterFilename(0)),
  `Preface\n\n${joinParagraphs(prefaceEn)}`,
  'utf8',
);

const zhDir = join(ROOT, 'src/chapterTranslations/chinese');
const enDir = join(ROOT, 'src/chapterTranslations');

for (const ch of chapterMeta.chapters) {
  const { id, title } = ch;
  const zhParas = parseStringArrayFile(join(zhDir, `chapterChinese${id}.ts`), id, false);
  const enParas = parseStringArrayFile(join(enDir, `chapterTranslations${id}.ts`), id, true);
  const enTitle = `Chapter ${id} — ${chapterTitleTranslations[id] || title}`;

  writeFileSync(join(zhOut, chapterFilename(id)), `${title}\n\n${joinParagraphs(zhParas)}`, 'utf8');
  writeFileSync(join(enOut, chapterFilename(id)), `${enTitle}\n\n${joinParagraphs(enParas)}`, 'utf8');
}

const manifest = {
  preface: chapterFilename(0),
  chapters: chapterMeta.chapters.map((ch) => ({
    id: ch.id,
    titleZh: ch.title,
    titleEn: `Chapter ${ch.id} — ${chapterTitleTranslations[ch.id] || ch.title}`,
    filename: chapterFilename(ch.id),
  })),
};

writeFileSync(join(ROOT, 'public/downloads/manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

console.log(
  `Wrote ${1 + chapterMeta.chapters.length} Chinese and ${1 + chapterMeta.chapters.length} English chapter .txt files to public/downloads/`,
);
