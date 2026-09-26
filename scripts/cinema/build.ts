/**
 * Regenerates a chapter's authored cinemas from its specs (scripts/cinema/specs/chNN*.ts).
 *
 *   npm run build-cinemas -- 2            every paragraph of chapter 2 that has a spec
 *   npm run build-cinemas -- 2 5 6 7      only paragraphs 5, 6 and 7
 *
 * Then: npx tsc --noEmit, npm run cinema-contact-sheet -- <chapter> <from> <to>, and
 * npx playwright test tests/authoredCinemas.spec.ts --workers=1 --grep "chNN".
 */
import { readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { writeCinemas, type Spec } from './write';

const [chapterArg, ...rest] = process.argv.slice(2);
const chapter = Number(chapterArg);
if (!Number.isInteger(chapter) || chapter < 1) { console.error('Usage: npm run build-cinemas -- <chapter> [paragraph ...]'); process.exit(1); }
const only = rest.map(Number).filter(Number.isInteger);

const specsDir = join(dirname(fileURLToPath(import.meta.url)), 'specs');
const prefix = `ch${String(chapter).padStart(2, '0')}`;
const files = readdirSync(specsDir).filter(f => f.startsWith(prefix) && f.endsWith('.ts'));
if (!files.length) { console.error(`No specs for chapter ${chapter} in scripts/cinema/specs.`); process.exit(1); }
const specs: Spec[] = [];
for (const file of files) specs.push(...(await import(pathToFileURL(join(specsDir, file)).href)).specs as Spec[]);
const seen = new Set<number>();
for (const s of specs) { if (seen.has(s.n)) throw new Error(`Paragraph ${s.n} has two specs.`); seen.add(s.n); }

const written = await writeCinemas(chapter, specs.sort((a, b) => a.n - b.n), only);
console.log(`Chapter ${chapter}: wrote ${written.length} cinemas (${written.join(', ')}).`);
