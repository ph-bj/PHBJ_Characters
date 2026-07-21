import { test, expect } from '@playwright/test';

test.describe('Garden Detail Language Switch Verification', () => {
  test('should open garden detail and allow switching languages', async ({ page }) => {
    test.setTimeout(45000);
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));

    // Navigate to a garden direct link in Chinese
    await page.goto('/#/zh/garden/garden-yiyuan');

    // Verify that the details modal is open and the title is in Chinese ("怡园")
    const titleZh = page.locator('h2:has-text("怡园")');
    await expect(titleZh).toBeVisible({ timeout: 20000 });

    // Find the language switcher button within the modal's top bar and click "en"
    // We target the fixed z-50 modal overlay to avoid selecting the background page header's language switcher
    const enButton = page.locator('div.fixed.z-50 button:has-text("en")').first();
    await expect(enButton).toBeVisible({ timeout: 20000 });
    await enButton.click();

    // Verify that the garden title switches to English ("Garden of Contentment")
    const titleEn = page.locator('h2:has-text("Garden of Contentment")');
    await expect(titleEn).toBeVisible({ timeout: 20000 });

    // Check that the URL hash changed to /en/
    await expect(page).toHaveURL(/.*\/en\/garden\/garden-yiyuan/);

    // Switch back to Chinese by clicking "中"
    const zhButton = page.locator('div.fixed.z-50 button:has-text("中")').first();
    await expect(zhButton).toBeVisible({ timeout: 20000 });
    await zhButton.click();

    // Verify it changed back to Chinese title
    await expect(titleZh).toBeVisible({ timeout: 20000 });
    await expect(page).toHaveURL(/.*\/zh\/garden\/garden-yiyuan/);
  });
});
