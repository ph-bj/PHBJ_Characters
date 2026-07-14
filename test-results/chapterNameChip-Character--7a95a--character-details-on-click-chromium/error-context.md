# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapterNameChip.spec.ts >> Character Name Chip Verification >> should render "富三" as a name chip in Chapter 5 and open character details on click
- Location: tests/chapterNameChip.spec.ts:4:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('button.align-baseline:has-text("富三")').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('button.align-baseline:has-text("富三")').first()

```

```yaml
- text: Loading...
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Character Name Chip Verification', () => {
  4  |   test('should render "富三" as a name chip in Chapter 5 and open character details on click', async ({ page }) => {
  5  |     // Navigate to Chapter 5
  6  |     await page.goto('/#/chapter/5');
  7  | 
  8  |     // Wait for the chapter content to be rendered and locate the inline name chip button
  9  |     const fuSanButton = page.locator('button.align-baseline:has-text("富三")').first();
> 10 |     await expect(fuSanButton).toBeVisible();
     |                               ^ Error: expect(locator).toBeVisible() failed
  11 | 
  12 |     // Click the button to open the character details modal/panel
  13 |     await fuSanButton.click();
  14 | 
  15 |     // Verify that the details modal/panel heading for "富伦" is displayed
  16 |     const detailHeader = page.locator('h2:has-text("富伦")');
  17 |     await expect(detailHeader).toBeVisible();
  18 |   });
  19 | 
  20 |   test('should render "贵大" as a name chip in Chapter 3 and open character details on click', async ({ page }) => {
  21 |     // Navigate to Chapter 3
  22 |     await page.goto('/#/chapter/3');
  23 | 
  24 |     // Wait for the chapter content to be rendered and locate the inline name chip button
  25 |     const guiDaButton = page.locator('button.align-baseline:has-text("贵大")').first();
  26 |     await expect(guiDaButton).toBeVisible();
  27 | 
  28 |     // Click the button to open the character details modal/panel
  29 |     await guiDaButton.click();
  30 | 
  31 |     // Verify that the details modal/panel heading for "贵芬" is displayed
  32 |     const detailHeader = page.locator('h2:has-text("贵芬")');
  33 |     await expect(detailHeader).toBeVisible();
  34 |   });
  35 | 
  36 |   test('should render "Yaoqing" as a name chip in Chapter 31 (English translation) and open character details on click', async ({ page }) => {
  37 |     // Navigate to Chapter 31
  38 |     await page.goto('/#/chapter/31');
  39 | 
  40 |     // Wait for the chapter content to be rendered and locate the inline name chip button for Yaoqing
  41 |     const yaoqingButton = page.locator('button.align-baseline:has-text("Yaoqing")').first();
  42 |     await expect(yaoqingButton).toBeVisible();
  43 | 
  44 |     // Click the button to open the character details modal/panel
  45 |     await yaoqingButton.click();
  46 | 
  47 |     // Verify that the details modal/panel heading for "袁宝珠" is displayed
  48 |     const detailHeader = page.locator('h2:has-text("袁宝珠")');
  49 |     await expect(detailHeader).toBeVisible();
  50 |   });
  51 | 
  52 |   test('should load the page in English when URL hash contains the "/en/" prefix', async ({ page }) => {
  53 |     // Navigate using the English hash route
  54 |     await page.goto('/#/en/chapter/31');
  55 | 
  56 |     // Wait for the chapter title heading to be rendered and check for English prefix
  57 |     const englishHeader = page.locator('h2:has-text("Ch. 31")');
  58 |     await expect(englishHeader).toBeVisible();
  59 |   });
  60 | });
  61 | 
  62 | 
```