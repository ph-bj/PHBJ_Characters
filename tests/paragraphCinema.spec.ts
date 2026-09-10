import { test, expect } from '@playwright/test';

test('paragraph cinema renders, pauses, replays, and closes without leaving the reader', async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/#/en/chapter/1');
  const opener = page.locator('[data-cinema-key="en-0"]');
  await expect(opener).toBeVisible();
  await expect(opener.locator('..').getByRole('button', { name: 'Read aloud', exact: true })).toBeVisible();
  await opener.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('canvas')).toBeVisible();
  await expect(dialog.getByRole('button', { name: 'Pause', exact: true })).toBeEnabled();
  await expect.poll(async () => Number(await dialog.locator('progress').getAttribute('value'))).toBeGreaterThan(0.5);
  await dialog.getByRole('button', { name: 'Pause', exact: true }).click();
  const pausedAt = await dialog.locator('progress').getAttribute('value');
  await page.waitForTimeout(400);
  await expect(dialog.locator('progress')).toHaveAttribute('value', pausedAt!);
  await dialog.getByRole('button', { name: 'Restart cinema' }).click();
  await expect.poll(async () => Number(await dialog.locator('progress').getAttribute('value'))).toBeLessThan(Number(pausedAt));
  await dialog.getByText('Read the passage', { exact: true }).click();
  await expect(dialog.locator('details p')).toContainText('The theatrical arts of the capital');
  await page.keyboard.press('ArrowRight');
  await expect(page).toHaveURL(/chapter\/1$/);
  await page.screenshot({ path: testInfo.outputPath('cinema-desktop.png') });
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(opener).toBeFocused();
  await expect(page).toHaveURL(/chapter\/1$/);
  await page.locator('[data-cinema-key="en-1"]').click();
  await expect(page.getByRole('dialog').locator('canvas')).toBeVisible();
  await expect(page.getByText('Chapter 1 · Paragraph 2', { exact: false })).toBeVisible();
  await page.getByRole('button', { name: 'Close cinema' }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  expect(errors).toEqual([]);
});

test('Chinese mobile cinema respects reduced motion and stays within the viewport', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/#/zh/chapter/4');
  await page.locator('[data-cinema-key="zh-0"]').click();
  const dialog = page.getByRole('dialog');
  await expect(dialog.locator('canvas')).toBeVisible();
  await expect(dialog.getByRole('button', { name: '播放', exact: true })).toBeEnabled();
  await expect(dialog.locator('progress')).toHaveAttribute('value', '0');
  const bounds = await dialog.boundingBox();
  expect(bounds!.x).toBeGreaterThanOrEqual(0);
  expect(bounds!.width).toBeLessThanOrEqual(390);
  await page.screenshot({ path: testInfo.outputPath('cinema-mobile.png') });
  await dialog.getByRole('button', { name: '关闭光影演绎' }).click();
  await expect(page.locator('[data-cinema-key="zh-0"]')).toBeFocused();
});

test('missing WebGL gives a readable fallback that can be closed', async ({ page }, testInfo) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type: string, ...args: unknown[]) {
      if (type.startsWith('webgl')) return null;
      return original.apply(this, [type, ...args]);
    } as typeof original;
  });
  await page.goto('/#/en/chapter/1');
  await page.locator('[data-cinema-key="en-0"]').click();
  await expect(page.getByRole('alert')).toContainText('WebGL');
  await page.getByRole('button', { name: 'Close cinema' }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
});
