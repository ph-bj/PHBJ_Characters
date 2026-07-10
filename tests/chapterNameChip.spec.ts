import { test, expect } from '@playwright/test';

test.describe('Character Name Chip Verification', () => {
  test('should render "富三" as a name chip in Chapter 5 and open character details on click', async ({ page }) => {
    // Navigate to Chapter 5
    await page.goto('/#/chapter/5');

    // Wait for the chapter content to be rendered and locate the inline name chip button
    const fuSanButton = page.locator('button.align-baseline:has-text("富三")').first();
    await expect(fuSanButton).toBeVisible();

    // Click the button to open the character details modal/panel
    await fuSanButton.click();

    // Verify that the details modal/panel heading for "富伦" is displayed
    const detailHeader = page.locator('h2:has-text("富伦")');
    await expect(detailHeader).toBeVisible();
  });

  test('should render "贵大" as a name chip in Chapter 3 and open character details on click', async ({ page }) => {
    // Navigate to Chapter 3
    await page.goto('/#/chapter/3');

    // Wait for the chapter content to be rendered and locate the inline name chip button
    const guiDaButton = page.locator('button.align-baseline:has-text("贵大")').first();
    await expect(guiDaButton).toBeVisible();

    // Click the button to open the character details modal/panel
    await guiDaButton.click();

    // Verify that the details modal/panel heading for "贵芬" is displayed
    const detailHeader = page.locator('h2:has-text("贵芬")');
    await expect(detailHeader).toBeVisible();
  });
});
