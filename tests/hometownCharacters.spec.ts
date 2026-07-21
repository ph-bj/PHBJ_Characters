import { test, expect } from '@playwright/test';

test.describe('Hometown Characters Verification', () => {
  test('should list characters sharing a hometown and allow opening their profile', async ({ page }) => {
    test.setTimeout(45000);
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));

    // Navigate to the main page (defaults to English)
    await page.goto('/');

    // Locate the "Jinling" hometown button in the index
    const jinlingButton = page.locator('button:has-text("Jinling")').first();
    await expect(jinlingButton).toBeVisible({ timeout: 20000 });
    await jinlingButton.scrollIntoViewIfNeeded();
    await jinlingButton.click();

    // Verify that the location detail modal/profile popup opens with title "Jinling"
    const modalHeader = page.locator('h3:has-text("Jinling")');
    await expect(modalHeader).toBeVisible({ timeout: 20000 });

    // Verify that the related characters section displays "Characters from this Hometown"
    const relatedSectionHeader = page.locator('p:has-text("Characters from this Hometown")');
    await expect(relatedSectionHeader).toBeVisible({ timeout: 20000 });

    // Verify that "Méi Zǐyù" is in the related characters list inside the modal
    const meiZiyuChip = page.locator('div.fixed.z-50 button:has-text("Méi Zǐyù")').first();
    await expect(meiZiyuChip).toBeVisible({ timeout: 20000 });

    // Click the "Méi Zǐyù" button inside the location modal
    await meiZiyuChip.click();

    // Verify that the location modal closes and character detail modal for "Méi Zǐyù" opens
    const characterHeader = page.locator('h2:has-text("Méi Zǐyù")');
    await expect(characterHeader).toBeVisible({ timeout: 20000 });
  });
});
