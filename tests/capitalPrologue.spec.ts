import { test, expect } from '@playwright/test';

// Paragraph 1 is an authored prologue; the adjacent paragraph keeps its own interpretation.
test('the opening paragraph has four distinct, bilingual cinematic beats', async ({ page }, testInfo) => {
  test.setTimeout(90000);
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error' && /THREE|WebGL|shader/i.test(message.text())) errors.push(message.text()); });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/#/en/chapter/1');
  await page.locator('[data-cinema-key="en-0"]').click();
  const dialog = page.getByRole('dialog');
  await expect(dialog.getByRole('heading')).toHaveText('The capital, a theatre of feeling');
  await expect(dialog.getByRole('button', { name: 'Play', exact: true })).toBeEnabled({ timeout: 15000 });
  const sceneNames = ['The capital after dark', 'A city watching the stage', 'Feeling with dignity', 'One word: feeling'];
  for (const [index, name] of sceneNames.entries()) {
    const button = dialog.getByRole('button', { name: new RegExp(name) });
    await button.click();
    await expect(button).toHaveAttribute('aria-pressed', 'true');
    await expect(dialog.getByTestId('cinema-story-caption')).toBeVisible();
    await dialog.getByTestId('paragraph-cinema-canvas').screenshot({ path: testInfo.outputPath(`shot-${index + 1}.png`) });
  }
  await dialog.getByRole('button', { name: 'Play', exact: true }).click();
  await expect(dialog.locator('progress')).toHaveAttribute('value', '36', { timeout: 20000 });
  await expect(dialog.getByRole('button', { name: 'Replay', exact: true })).toBeVisible();
  await dialog.getByTestId('paragraph-cinema-canvas').screenshot({ path: testInfo.outputPath('manuscript-complete.png') });
  await dialog.getByRole('button', { name: 'Close cinema' }).click();
  await page.locator('[data-cinema-key="en-1"]').click();
  await expect(dialog.getByRole('heading')).not.toHaveText('The capital, a theatre of feeling');
  await expect(dialog.getByRole('button', { name: /The capital after dark/ })).toHaveCount(0);
  await page.keyboard.press('Escape');
  await page.goto('/#/zh/chapter/1');
  await page.locator('[data-cinema-key="zh-0"]').click();
  await expect(dialog.getByRole('heading')).toHaveText('京华繁梦，一字情深');
  await expect(dialog.getByRole('button', { name: '01京华入夜' })).toBeEnabled();
  expect(errors).toEqual([]);
});

test('the opening cinema keeps its subjects in frame on mobile', async ({ page }, testInfo) => {
  test.setTimeout(60000);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/#/en/chapter/1');
  await page.locator('[data-cinema-key="en-0"]').click();
  const dialog = page.getByRole('dialog');
  await expect(dialog.getByRole('button', { name: 'Play', exact: true })).toBeEnabled({ timeout: 15000 });
  for (const [index, name] of ['The capital after dark', 'A city watching the stage', 'Feeling with dignity', 'One word: feeling'].entries()) {
    await dialog.getByRole('button', { name: new RegExp(name) }).click();
    await dialog.getByTestId('paragraph-cinema-canvas').screenshot({ path: testInfo.outputPath(`mobile-${index + 1}.png`) });
  }
  const bounds = await dialog.boundingBox();
  expect(bounds!.width).toBeLessThanOrEqual(390);
  await page.keyboard.press('Escape');
  await expect(page.locator('[data-cinema-key="en-0"]')).toBeFocused();
});
