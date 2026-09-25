import { test, expect } from '@playwright/test';

// Scaffolded by `npm run new-cinema`. Checks that the authored cinema for chapter 1,
// paragraph 3 opens in both languages, visits every shot, and plays to the end cleanly.
test('chapter 1, paragraph 3 plays its authored cinema', async ({ page }, testInfo) => {
  test.setTimeout(120000);
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error' && /THREE|WebGL|shader|cinema/i.test(message.text())) errors.push(message.text()); });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/#/en/chapter/1');
  await page.locator('[data-cinema-key="en-2"]').click({ timeout: 30000 });
  const dialog = page.getByRole('dialog');
  await expect(dialog.getByText('Chapter 1 · Paragraph 3')).toBeVisible();
  await expect(dialog.getByRole('button', { name: 'Play', exact: true })).toBeEnabled({ timeout: 20000 });
  // Every authored cinema has shot buttons; visit each one.
  const shots = dialog.getByTestId('cinema-shots').getByRole('button');
  expect(await shots.count()).toBeGreaterThanOrEqual(2);
  for (let i = 0; i < await shots.count(); i++) {
    await shots.nth(i).click();
    await expect(shots.nth(i)).toHaveAttribute('aria-pressed', 'true');
    await dialog.getByTestId('paragraph-cinema-canvas').screenshot({ path: testInfo.outputPath(`shot-${i + 1}.png`) });
  }
  // Subtitles show the passage over the film, and the CC button hides them.
  await shots.first().click();
  await expect(dialog.getByTestId('cinema-subtitle')).toBeVisible();
  await dialog.getByRole('button', { name: 'Subtitles' }).click();
  await expect(dialog.getByTestId('cinema-subtitle')).toHaveCount(0);
  await dialog.getByRole('button', { name: 'Subtitles' }).click();
  await expect(dialog.getByTestId('cinema-subtitle')).toBeVisible();
  await dialog.getByRole('button', { name: 'Play', exact: true }).click();
  await expect(dialog.locator('progress')).toHaveAttribute('value', '36', { timeout: 30000 });
  await dialog.getByRole('button', { name: 'Close cinema' }).click();
  await page.goto('/#/zh/chapter/1');
  await page.locator('[data-cinema-key="zh-2"]').click({ timeout: 30000 });
  await expect(dialog.getByText('第1回 · 第3段')).toBeVisible();
  await expect(dialog.getByTestId('cinema-shots').getByRole('button').first()).toBeEnabled({ timeout: 20000 });
  expect(errors).toEqual([]);
});
