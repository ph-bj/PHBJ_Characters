/**
 * Scaffolds an authored paragraph cinema from the template.
 *
 *   npm run new-cinema -- <chapter> <paragraph>          e.g. npm run new-cinema -- 1 3
 *   npm run new-cinema -- <chapter> <paragraph> --force  overwrite an existing folder
 *
 * Paragraph numbers are 1-based, as the reader shows them. Creates
 *   src/components/cinema/authored/chNN/pNN/{story,scene}.ts   (prefilled with the paragraph's text)
 *   tests/cinema-chNN-pNN.spec.ts
 * The new cinema appears in the reader at once; there is nothing to register.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const [chapterArg, paragraphArg, ...flags] = process.argv.slice(2);
const chapter = Number(chapterArg), paragraph = Number(paragraphArg);
if (!Number.isInteger(chapter) || !Number.isInteger(paragraph) || chapter < 1 || paragraph < 1) {
  console.error('Usage: npm run new-cinema -- <chapter> <paragraph> [--force]   (paragraph is 1-based)');
  process.exit(1);
}

/** Paragraph arrays are exported as `name + chapter`, either directly or keyed by chapter. */
async function paragraphs(file: string, exportPrefix: string): Promise<string[]> {
  const module = await import(pathToFileURL(file).href);
  const value = module[`${exportPrefix}${chapter}`];
  if (Array.isArray(value)) return value;
  if (value && typeof value === 'object') return value[chapter] ?? Object.values(value)[0];
  throw new Error(`No ${exportPrefix}${chapter} export in ${file}`);
}

const zhFile = join(root, `src/chapterTranslations/chinese/chapterChinese${chapter}.ts`);
const enFile = join(root, `src/chapterTranslations/chapterTranslations${chapter}.ts`);
if (!existsSync(zhFile)) { console.error(`Chapter ${chapter} not found (${relative(root, zhFile)}).`); process.exit(1); }
const zhParagraphs = await paragraphs(zhFile, 'chapterChinese');
const enParagraphs = existsSync(enFile) ? await paragraphs(enFile, 'chapterTranslations') : [];
const clean = (text = '') => text.replace(/[▉□]/g, '').replace(/\*([^*]+)\*/g, '$1').replace(/\s+/g, ' ').trim();
const zh = clean(zhParagraphs[paragraph - 1]);
const en = clean(enParagraphs[paragraph - 1]);
if (!zh) { console.error(`Chapter ${chapter} has ${zhParagraphs.length} paragraphs; there is no paragraph ${paragraph}.`); process.exit(1); }

const pad = (n: number) => String(n).padStart(2, '0');
const folder = join(root, `src/components/cinema/authored/ch${pad(chapter)}/p${pad(paragraph)}`);
const testFile = join(root, `tests/cinema-ch${pad(chapter)}-p${pad(paragraph)}.spec.ts`);
// PowerShell drops the `--` separator, so npm may take `--force` for itself; it then shows up as npm_config_force.
const force = flags.includes('--force') || process.env.npm_config_force === 'true';
if (existsSync(folder) && !force) {
  console.error(`${relative(root, folder)} already exists. Pass --force to overwrite it.`);
  process.exit(1);
}

// Starting quotes: the passage split into two halves at a sentence break; the first clause (up to
// eight characters) as the calligraphy for the closing shot.
const sentences = zh.split(/(?<=[。；！？])/).filter(Boolean);
const half = Math.max(1, Math.ceil(sentences.length / 2));
const quote1 = sentences.slice(0, half).join('');
const quote2 = sentences.slice(half).join('') || quote1;
const keyWords = [...(zh.split(/[，。；：！？、]/).find(clause => clause.trim()) ?? zh).replace(/[“”‘’《》（）\s]/g, '')].slice(0, 8).join('');

const inString = (text: string) => text.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
/** Wraps text for a JSDoc block: `width` characters per line, continuation lines indented. */
const inComment = (text: string, width: number) => {
  const lines: string[] = [];
  let line = '';
  for (const token of text.replace(/\*\//g, '* /').split(/(?<=\s)|(?=[㐀-鿿])/u)) {
    if ((line + token).length > width && line.trim()) { lines.push(line.trimEnd()); line = ''; }
    line += token;
  }
  lines.push(line.trimEnd());
  return lines.join('\n *   ');
};
const fill = (template: string) => template
  .split(/\r?\n/).filter(line => !line.includes('TEMPLATE-ONLY')).join('\n')
  .replaceAll('{{CHAPTER}}', String(chapter))
  .replaceAll('{{PARAGRAPH}}', String(paragraph))
  .replaceAll('{{INDEX}}', String(paragraph - 1))
  .replaceAll('{{SOURCE_ZH}}', inComment(zh, 44))
  .replaceAll('{{SOURCE_EN}}', inComment(en || '(no translation yet)', 92))
  .replaceAll('{{QUOTE_1}}', inString(quote1))
  .replaceAll('{{QUOTE_2}}', inString(quote2))
  .replaceAll('{{KEY_WORDS}}', inString(keyWords))
  // A distinct seed per paragraph, so procedural sets differ between cinemas.
  .replace('seed: 1000,', `seed: ${chapter * 1000 + paragraph},`);

const templates = join(root, 'src/components/cinema/authored/_template/p00');
mkdirSync(folder, { recursive: true });
for (const name of ['story.ts', 'scene.ts']) writeFileSync(join(folder, name), fill(readFileSync(join(templates, name), 'utf8')));
writeFileSync(testFile, fill(readFileSync(join(root, 'tests/templates/authored-cinema.spec.ts.tpl'), 'utf8')));

console.log(`Created the cinema for chapter ${chapter}, paragraph ${paragraph}:
  ${relative(root, join(folder, 'story.ts'))}   titles, shots, captions (fill in the TODOs)
  ${relative(root, join(folder, 'scene.ts'))}   the ink staging (starts as a working placeholder)
  ${relative(root, testFile)}

It already plays in the reader: open chapter ${chapter} and press the cinema button on paragraph ${paragraph}.
Next: write the story, stage the scene, then run
  npx tsc --noEmit
  npx playwright test ${relative(root, testFile).replace(/\\/g, '/')} --workers=1
See src/components/cinema/README.md for the conventions.`);
