import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;

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
    if (idx === -1) return [];
    const arrStart = idx + marker.length - 1;
    return parseBracketArray(text, arrStart) ?? [];
  }
  const eqArr = text.indexOf('= [');
  const arrStart = eqArr === -1 ? -1 : eqArr + 2;
  return arrStart >= 0 ? (parseBracketArray(text, arrStart) ?? []) : [];
}

function extractZh(text) {
  return [...text.matchAll(/《([^》\n]{1,40})》/g)].map((x) => x[1]);
}

function extractEn(text) {
  return [...text.matchAll(/\*([^*\n]+)\*/g)].map((x) => x[1].trim());
}

const pairs = new Map();
const conflicts = [];

const zhDir = join(ROOT, 'src/chapterTranslations/chinese');
const enDir = join(ROOT, 'src/chapterTranslations');

for (const f of readdirSync(enDir)) {
  const m = f.match(/^chapterTranslations(\d+)\.ts$/);
  if (!m) continue;
  const id = m[1];
  const zhPath = join(zhDir, `chapterChinese${id}.ts`);
  try {
    readFileSync(zhPath);
  } catch {
    continue;
  }
  const zhParas = parseStringArrayFile(zhPath, id, false);
  const enParas = parseStringArrayFile(join(enDir, f), id, true);
  const n = Math.min(zhParas.length, enParas.length);
  for (let i = 0; i < n; i++) {
    const zhs = extractZh(zhParas[i]);
    const ens = extractEn(enParas[i]);
    if (zhs.length && ens.length === zhs.length) {
      for (let j = 0; j < zhs.length; j++) {
        const prev = pairs.get(zhs[j]);
        if (!prev) pairs.set(zhs[j], ens[j]);
        else if (prev !== ens[j]) conflicts.push(`${zhs[j]}: ${prev} | ${ens[j]}`);
      }
    }
  }
}

const existing = {};
const mapText = readFileSync(join(ROOT, 'src/englishWorkTitles.ts'), 'utf8');
for (const m of mapText.matchAll(/"([^"]+)":\s*"([^"]+)"/g)) {
  existing[m[1]] = m[2];
}

const allKeys = new Set();
for (const f of readdirSync(zhDir)) {
  if (!f.endsWith('.ts')) continue;
  const text = readFileSync(join(zhDir, f), 'utf8');
  for (const k of extractZh(text)) allKeys.add(k);
}

const missing = [...allKeys].filter((k) => !existing[k]).sort();
const resolved = missing.filter((k) => pairs.has(k));

console.log(JSON.stringify({
  pairs: pairs.size,
  conflicts: conflicts.length,
  missing: missing.length,
  resolved: resolved.length,
  stillMissing: missing.length - resolved.length,
}, null, 2));

const additions = {};
for (const k of resolved) additions[k] = pairs.get(k);
writeFileSync(
  join(ROOT, 'scripts/work-pairs-from-translations.json'),
  JSON.stringify({ additions, conflicts, stillMissing: missing.filter((k) => !pairs.has(k)) }, null, 2),
);
