import { test, expect } from '@playwright/test';
import { readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// One test per authored cinema (src/components/cinema/authored/chNN/pNN), found on disk, so a new
// cinema is covered without writing a spec. Each opens the film, visits every shot, checks the
// subtitles, and fails on any WebGL or page error. Run a single one with --grep, e.g.
//   npx playwright test tests/authoredCinemas.spec.ts --workers=1 --grep "ch01 p13"
// (tests/cinema-ch01-p03.spec.ts additionally plays one film to the end and checks both languages.)
const authored = join(dirname(fileURLToPath(import.meta.url)), '../src/components/cinema/authored');
const cinemas = readdirSync(authored).filter(d => /^ch\d+$/.test(d)).flatMap(ch =>
  readdirSync(join(authored, ch)).filter(p => /^p\d+$/.test(p)).map(p => ({ ch, p, chapter: Number(ch.slice(2)), paragraph: Number(p.slice(1)) })));

for (const { ch, p, chapter, paragraph } of cinemas) {
  test(`authored cinema ${ch} ${p} opens and visits every shot`, async ({ page }, testInfo) => {
    test.setTimeout(120000);
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error' && /THREE|WebGL|shader|cinema/i.test(message.text())) errors.push(message.text()); });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(`/#/en/chapter/${chapter}`);
    await page.locator(`[data-cinema-key="en-${paragraph - 1}"]`).click({ timeout: 30000 });
    const dialog = page.getByRole('dialog');
    await expect(dialog.getByText(`Chapter ${chapter} · Paragraph ${paragraph}`)).toBeVisible();
    await expect(dialog.getByRole('button', { name: 'Play', exact: true })).toBeEnabled({ timeout: 30000 });
    const shots = dialog.getByTestId('cinema-shots').getByRole('button');
    expect(await shots.count()).toBeGreaterThanOrEqual(2);
    for (let i = 0; i < await shots.count(); i++) {
      await shots.nth(i).click();
      await expect(shots.nth(i)).toHaveAttribute('aria-pressed', 'true');
      await dialog.getByTestId('paragraph-cinema-canvas').screenshot({ path: testInfo.outputPath(`shot-${i + 1}.png`) });
    }
    // Cues begin a moment after each cut, so play from the start until the first one shows.
    await shots.first().click();
    await dialog.getByRole('button', { name: 'Play', exact: true }).click();
    await expect(dialog.getByTestId('cinema-subtitle')).toBeVisible({ timeout: 20000 });
    expect(errors).toEqual([]);
  });
}
