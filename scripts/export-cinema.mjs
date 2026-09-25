/**
 * Records a paragraph cinema to MP4, frame by frame on a virtual clock, so the video is smooth
 * however slowly the machine renders.
 *
 *   npm run export-cinema -- <chapter> <paragraph> [--out file.mp4] [--lang en|zh] [--url http://localhost:3000]
 *
 * Needs the dev server running (`npm run dev`) and ffmpeg on the PATH. Paragraph is 1-based.
 * By default the video is saved to ~/Documents/PHBJ-chNN-pNN-cinema.mp4 at 1920×1080, 30 fps.
 */
import { chromium } from 'playwright';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { homedir, tmpdir } from 'node:os';
import { join } from 'node:path';

const args = process.argv.slice(2);
const option = (name, fallback) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : fallback; };
const chapter = Number(args[0]), paragraph = Number(args[1]);
if (!Number.isInteger(chapter) || !Number.isInteger(paragraph) || paragraph < 1) {
  console.error('Usage: npm run export-cinema -- <chapter> <paragraph> [--out file.mp4] [--lang en|zh] [--url http://localhost:3000]');
  process.exit(1);
}
const pad = n => String(n).padStart(2, '0');
const lang = option('lang', 'en');
const baseUrl = option('url', 'http://localhost:3000');
const out = option('out', join(homedir(), 'Documents', `PHBJ-ch${pad(chapter)}-p${pad(paragraph)}-cinema.mp4`));
const FPS = 30, DURATION = 36, W = 1920, H = 1080;
if (spawnSync('ffmpeg', ['-version']).status !== 0) { console.error('ffmpeg was not found on the PATH.'); process.exit(1); }

const frames = mkdtempSync(join(tmpdir(), 'phbj-cinema-'));
const browser = await chromium.launch({ args: ['--use-angle=d3d11', '--ignore-gpu-blocklist'] });
try {
  const page = await browser.newPage({ viewport: { width: W + 200, height: H + 400 }, deviceScaleFactor: 1 });
  await page.emulateMedia({ reducedMotion: 'reduce' }); // opens paused
  await page.goto(`${baseUrl}/#/${lang}/chapter/${chapter}`);
  const key = `${lang}-${paragraph - 1}`;
  await page.locator(`[data-cinema-key="${key}"]`).waitFor({ timeout: 60000 });
  await page.waitForTimeout(1500);
  await page.evaluate(k => document.querySelector(`[data-cinema-key="${k}"]`).click(), key);
  await page.waitForFunction(() => document.querySelector('dialog [data-testid=paragraph-cinema-canvas] canvas') && !document.querySelector('dialog [role=status]'), null, { timeout: 60000 });
  // Size the stage to exactly W×H.
  await page.evaluate(({ W, H }) => {
    const dialog = document.querySelector('dialog');
    Object.assign(dialog.style, { maxWidth: 'none', width: `${W + 120}px`, maxHeight: 'none' });
    const host = document.querySelector('[data-testid=paragraph-cinema-canvas]');
    Object.assign(host.style, { width: `${W}px`, height: `${H}px`, minHeight: '0' });
    host.parentElement.id = 'cinema-stage';
  }, { W, H });
  await page.waitForTimeout(800);
  // A virtual clock: animation frames fire only when stepped.
  await page.evaluate(FPS => {
    let id = 0, queue = new Map(), now = performance.now();
    window.requestAnimationFrame = callback => { queue.set(++id, callback); return id; };
    window.cancelAnimationFrame = handle => { queue.delete(handle); };
    window.__step = () => { now += 1000 / FPS; const due = queue; queue = new Map(); due.forEach(callback => callback(now)); };
  }, FPS);
  await page.evaluate(() => [...document.querySelectorAll('dialog button')].find(b => /^(Play|播放)$/.test(b.textContent.trim())).click());
  await page.evaluate(() => window.__step()); // the first frame only records the start time
  const stage = page.locator('#cinema-stage');
  const total = FPS * DURATION;
  for (let i = 0; i <= total; i++) {
    if (i) await page.evaluate(() => window.__step());
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 0))); // let React draw the fade
    await stage.screenshot({ path: join(frames, `f${String(i).padStart(5, '0')}.png`) });
    if (i % 90 === 0) console.log(`frame ${i}/${total}`);
  }
} finally {
  await browser.close();
}
const encode = spawnSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', join(frames, 'f%05d.png'),
  '-vf', `scale=${W}:${H}:flags=lanczos`, '-c:v', 'libx264', '-preset', 'slow', '-crf', '18', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out], { stdio: 'inherit' });
rmSync(frames, { recursive: true, force: true });
if (encode.status !== 0) process.exit(encode.status ?? 1);
console.log(`Saved ${out}`);
