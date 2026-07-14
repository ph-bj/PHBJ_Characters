import { test, expect } from '@playwright/test';

test.describe('Character Name Chip Verification', () => {
  test('should render "富三" as a name chip in Chapter 5 and open character details on click', async ({ page }) => {
    test.setTimeout(45000);
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));

    // Navigate to Chapter 5
    await page.goto('/#/chapter/5');

    // Wait for the chapter content to be rendered and locate the inline name chip button
    const fuSanButton = page.locator('button.align-baseline:has-text("富三")').first();
    await expect(fuSanButton).toBeVisible({ timeout: 20000 });

    // Click the button to open the character details modal/panel
    await fuSanButton.click();

    // Verify that the details modal/panel heading for "富伦" is displayed
    const detailHeader = page.locator('h2:has-text("富伦")');
    await expect(detailHeader).toBeVisible({ timeout: 20000 });
  });

  test('should render "贵大" as a name chip in Chapter 3 and open character details on click', async ({ page }) => {
    test.setTimeout(45000);
    // Navigate to Chapter 3
    await page.goto('/#/chapter/3');

    // Wait for the chapter content to be rendered and locate the inline name chip button
    const guiDaButton = page.locator('button.align-baseline:has-text("贵大")').first();
    await expect(guiDaButton).toBeVisible({ timeout: 20000 });

    // Click the button to open the character details modal/panel
    await guiDaButton.click();

    // Verify that the details modal/panel heading for "贵芬" is displayed
    const detailHeader = page.locator('h2:has-text("贵芬")');
    await expect(detailHeader).toBeVisible({ timeout: 20000 });
  });

  test('should render "Yaoqing" as a name chip in Chapter 31 (English translation) and open character details on click', async ({ page }) => {
    test.setTimeout(45000);
    // Navigate to Chapter 31
    await page.goto('/#/chapter/31');

    // Wait for the chapter content to be rendered and locate the inline name chip button for Yaoqing
    const yaoqingButton = page.locator('button.align-baseline:has-text("Yaoqing")').first();
    await expect(yaoqingButton).toBeVisible({ timeout: 20000 });

    // Click the button to open the character details modal/panel
    await yaoqingButton.click();

    // Verify that the details modal/panel heading for "袁宝珠" is displayed
    const detailHeader = page.locator('h2:has-text("袁宝珠")');
    await expect(detailHeader).toBeVisible({ timeout: 20000 });
  });

  test('should load the page in English when URL hash contains the "/en/" prefix', async ({ page }) => {
    test.setTimeout(30000);
    // Navigate using the English hash route
    await page.goto('/#/en/chapter/31');

    // Wait for the chapter title heading to be rendered and check for English prefix
    const englishHeader = page.locator('h2:has-text("Ch. 31")');
    await expect(englishHeader).toBeVisible({ timeout: 20000 });
  });
});

