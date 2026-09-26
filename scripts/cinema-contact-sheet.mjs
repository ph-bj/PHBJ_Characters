/**
 * Renders a contact sheet of authored cinemas: one row per cinema, one frame from the middle of
 * each shot, so a whole batch can be reviewed at a glance.
 *
 *   npm run cinema-contact-sheet                    every authored cinema
 *   npm run cinema-contact-sheet -- 1               every cinema in chapter 1
 *   npm run cinema-contact-sheet -- 1 13 34         chapter 1, paragraphs 13 to 34
 *   ... [--lang zh] [--out folder] [--url http://localhost:3000]
 *
 * Needs the dev server (`npm run dev`) and ffmpeg. Writes one PNG per shot and sheet.png (the grid)
 * into the output folder (default: test-results/contact-sheet).
 */
import { chromium } from 'playwright';
import { spawnSync } from 'node:child_process';
import { mkdirSync, readdirSync, rmSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const option = (name, fallback) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : fallback; };
const numbers = args.filter((a, i) => /^\d+$/.test(a) && !args[i - 1]?.startsWith('--')).map(Number);
const [chapterFilter, fromParagraph = 1, toParagraph = 999] = numbers;
const lang = option('lang', 'en');
const baseUrl = option('url', 'http://localhost:3000');
const out = option('out', join(root, 'test-results', 'contact-sheet'));

// Authored cinemas are the folders cinema/authored/chNN/pNN.
const authored = join(root, 'src/components/cinema/authored');
const cinemas = readdirSync(authored).filter(d => /^ch\d+$/.test(d)).flatMap(ch =>
  readdirSync(join(authored, ch)).filter(p => /^p\d+$/.test(p)).map(p => ({ chapter: Number(ch.slice(2)), paragraph: Number(p.slice(1)) })))
  .filter(c => (!chapterFilter || c.chapter === chapterFilter) && c.paragraph >= fromParagraph && c.paragraph <= toParagraph)
  .sort((a, b) => a.chapter - b.chapter || a.paragraph - b.paragraph);
if (!cinemas.length) { console.error('No authored cinemas match.'); process.exit(1); }

rmSync(out, { recursive: true, force: true }); mkdirSync(out, { recursive: true });
const pad = n => String(n).padStart(2, '0');
const browser = await chromium.launch({ args: ['--use-angle=d3d11', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
await page.emulateMedia({ reducedMotion: 'reduce' });
let maxShots = 0;
const rows = [];
for (const { chapter, paragraph } of cinemas) {
  await page.goto(`${baseUrl}/#/${lang}/chapter/${chapter}`);
  const key = `${lang}-${paragraph - 1}`;
  await page.locator(`[data-cinema-key="${key}"]`).waitFor({ timeout: 60000 });
  await page.evaluate(() => { window.__phbjCinema = undefined; });
  await page.evaluate(k => document.querySelector(`[data-cinema-key="${k}"]`).click(), key);
  await page.waitForFunction(() => window.__phbjCinema && !document.querySelector('dialog [role=status]'), null, { timeout: 60000 });
  const shots = await page.evaluate(() => window.__phbjStory.shots.map(s => ({ start: s.start, end: s.end, title: s.title.en })));
  const names = [];
  for (const [s, shot] of shots.entries()) {
    // A frame from the middle of the shot, where its staging is usually fully drawn.
    const middle = (shot.start + shot.end) / 2;
    await page.evaluate(t => { window.__phbjCinema.setPlaying(false); window.__phbjCinema.seek(t); }, middle);
    await page.waitForTimeout(300);
    const name = `ch${pad(chapter)}-p${pad(paragraph)}-s${s + 1}.png`;
    await page.getByTestId('paragraph-cinema-canvas').screenshot({ path: join(out, name) });
    names.push(name);
    console.log(`${name}  t=${middle.toFixed(1)}  ${shot.title}`);
  }
  maxShots = Math.max(maxShots, names.length);
  rows.push(names);
  await page.keyboard.press('Escape');
}
await browser.close();

// Build the grid with ffmpeg: pad short rows with blanks, tile each row, then stack the rows.
const first = join(out, rows[0][0]);
const probe = spawnSync('ffprobe', ['-v', 'error', '-select_streams', 'v', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', first], { encoding: 'utf8' });
const [w, h] = probe.stdout.trim().split(',').map(Number);
const tile = 480, th = Math.round(h * tile / w);
spawnSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'lavfi', '-i', `color=c=white:s=${w}x${h}`, '-frames:v', '1', join(out, 'blank.png')]);
const rowFiles = rows.map((names, r) => {
  const files = [...names, ...Array(maxShots - names.length).fill('blank.png')].map(n => join(out, n));
  const rowFile = join(out, `row-${pad(r)}.png`);
  const inputs = files.flatMap(f => ['-i', f]);
  const filter = files.map((_, i) => `[${i}:v]scale=${tile}:${th}[v${i}]`).join(';') + ';' + files.map((_, i) => `[v${i}]`).join('') + `hstack=inputs=${files.length}`;
  spawnSync('ffmpeg', ['-y', '-loglevel', 'error', ...inputs, '-filter_complex', files.length > 1 ? filter : `[0:v]scale=${tile}:${th}`, rowFile]);
  return rowFile;
});
const sheet = join(out, 'sheet.png');
spawnSync('ffmpeg', ['-y', '-loglevel', 'error', ...rowFiles.flatMap(f => ['-i', f]), '-filter_complex', rowFiles.length > 1 ? `vstack=inputs=${rowFiles.length}` : 'null', sheet]);
for (const f of rowFiles) rmSync(f);
if (existsSync(join(out, 'blank.png'))) rmSync(join(out, 'blank.png'));
console.log(`Contact sheet: ${sheet}  (${rows.length} cinemas × up to ${maxShots} shots)`);
