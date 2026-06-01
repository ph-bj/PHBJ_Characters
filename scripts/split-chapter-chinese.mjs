/**
 * Regenerates Chinese paragraph modules from a legacy chapterData.json export.
 * After the split, source of truth is src/chapterTranslations/chinese/*.ts
 * and src/chapterMeta.json (restore chapterData.json from git if re-running).
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dataPath = path.join(root, 'src/chapterData.json');
const outDir = path.join(root, 'src/chapterTranslations/chinese');
const metaPath = path.join(root, 'src/chapterMeta.json');

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

function paragraphs(text) {
  return text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
}

function emitTsFile(filePath, exportName, paras, headerComment) {
  const lines = paras.map((p) => `  ${JSON.stringify(p)},`);
  const body = [
    headerComment ? `/** ${headerComment} */\n` : '',
    `export const ${exportName}: string[] = [`,
    ...lines,
    '];',
    '',
  ].join('\n');
  fs.writeFileSync(filePath, body, 'utf8');
}

fs.mkdirSync(outDir, { recursive: true });

const prefaceParas = paragraphs(data.preface);
emitTsFile(
  path.join(outDir, 'prefaceChinese.ts'),
  'prefaceChinese',
  prefaceParas,
  '序 — paragraph-aligned to prefaceTranslation.ts',
);

for (const ch of data.chapters) {
  const paras = paragraphs(ch.content);
  emitTsFile(
    path.join(outDir, `chapterChinese${ch.id}.ts`),
    `chapterChinese${ch.id}`,
    paras,
    `Chapter ${ch.id} — ${ch.title}`,
  );
}

const meta = {
  chapters: data.chapters.map(({ id, title }) => ({ id, title })),
};
fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2) + '\n', 'utf8');

console.log(`Wrote preface (${prefaceParas.length} ¶) + ${data.chapters.length} chapters → ${outDir}`);
console.log(`Wrote ${metaPath}`);
