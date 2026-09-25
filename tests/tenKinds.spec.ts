import { test, expect } from '@playwright/test';

// Paragraph 2 continues the prologue: ten gentlemen, ten performers, one word.
test('the second paragraph has its own four-beat, bilingual cinema', async ({ page }, testInfo) => {
  test.setTimeout(90000);
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error' && /THREE|WebGL|shader/i.test(message.text())) errors.push(message.text()); });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/#/en/chapter/1');
  await page.locator('[data-cinema-key="en-1"]').click();
  const dialog = page.getByRole('dialog');
  await expect(dialog.getByRole('heading')).toHaveText('Ten kinds, one word');
  await expect(dialog.getByRole('button', { name: 'Play', exact: true })).toBeEnabled({ timeout: 15000 });
  const sceneNames = ['Upright, aspiring, lofty, free, splendid', 'Bold, wild, witty, gentle, joyful', 'Stars of the Pear Garden', 'Also one word: feeling'];
  for (const [index, name] of sceneNames.entries()) {
    const button = dialog.getByRole('button', { name: new RegExp(name) });
    await button.click();
    await expect(button).toHaveAttribute('aria-pressed', 'true');
    await dialog.getByTestId('paragraph-cinema-canvas').screenshot({ path: testInfo.outputPath(`shot-${index + 1}.png`) });
  }
  await expect(dialog.getByTestId('cinema-story-caption')).toContainText('也是一个情字');
  await dialog.getByRole('button', { name: 'Play', exact: true }).click();
  await expect(dialog.locator('progress')).toHaveAttribute('value', '36', { timeout: 20000 });
  await dialog.getByRole('button', { name: 'Close cinema' }).click();
  await page.goto('/#/zh/chapter/1');
  await page.locator('[data-cinema-key="zh-1"]').click();
  await expect(dialog.getByRole('heading')).toHaveText('十种人物，一个情字');
  await expect(dialog.getByRole('button', { name: '03梨园名旦' })).toBeEnabled({ timeout: 15000 });
  expect(errors).toEqual([]);
});
