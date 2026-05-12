/**
 * Usage: node scripts/appendChapter.mjs <chapterId> '<JSON array of translations>'
 * Reads src/chapterTranslations3to60.ts, adds/replaces the chapter, writes back.
 */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, '../src/chapterTranslations3to60.ts');

const chapterId = parseInt(process.argv[2]);
const translations = JSON.parse(process.argv[3]);

// Load existing
let existing = {};
try {
  const src = readFileSync(OUTPUT, 'utf8');
  // Extract the object body between the first { and last }
  const match = src.match(/Record<number, string\[\]> = (\{[\s\S]*\});/);
  if (match) existing = eval('(' + match[1] + ')');
} catch {}

existing[chapterId] = translations;

// Serialize
const entries = Object.keys(existing)
  .map(Number)
  .sort((a,b) => a-b)
  .map(id => {
    const arr = existing[id].map(t => JSON.stringify(t)).join(',\n    ');
    return `  ${id}: [\n    ${arr}\n  ]`;
  })
  .join(',\n');

const done = Object.keys(existing).sort((a,b)=>Number(a)-Number(b));
const out = `// AUTO-GENERATED — do not edit manually
// PROGRESS: chapters ${done.join(', ')}
export const chapterTranslations3to60: Record<number, string[]> = {
${entries}
};
`;

writeFileSync(OUTPUT, out, 'utf8');
console.log(`Ch${chapterId}: ${translations.length} paragraphs written. Total chapters: ${done.length}`);
