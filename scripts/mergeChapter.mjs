/**
 * Reads scripts/tmp_chapter.json = { id: N, translations: [...] }
 * Merges into src/chapterTranslations3to60.ts
 */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUTPUT = join(root, 'src/chapterTranslations3to60.ts');
const TMP = join(root, 'scripts/tmp_chapter.json');

const { id: chapterId, translations } = JSON.parse(readFileSync(TMP, 'utf8'));

// Load existing
let existing = {};
try {
  const src = readFileSync(OUTPUT, 'utf8');
  const match = src.match(/Record<number, string\[\]> = (\{[\s\S]*?\n\})/);
  if (match) {
    // Safe parse via Function
    existing = Function('"use strict"; return (' + match[1] + ')')();
  }
} catch(e) { console.warn('Could not parse existing:', e.message); }

existing[chapterId] = translations;

const done = Object.keys(existing).map(Number).sort((a,b) => a-b);
const entries = done.map(id => {
  const arr = existing[id].map(t => JSON.stringify(t)).join(',\n    ');
  return `  ${id}: [\n    ${arr}\n  ]`;
}).join(',\n');

const out = `// AUTO-GENERATED — do not edit manually
// Chapters translated: ${done.join(', ')}
export const chapterTranslations3to60: Record<number, string[]> = {
${entries}
};
`;

writeFileSync(OUTPUT, out, 'utf8');
console.log(`✓ Ch${chapterId}: ${translations.length} paragraphs. Total: ${done.length} chapters (${done[0]}–${done[done.length-1]})`);
