import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

async function generate() {
  const svgPath = resolve('public/favicon.svg');
  const svgContent = readFileSync(svgPath, 'utf8');

  console.log('Launching headless browser...');
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const sizes = [
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 }
  ];

  for (const { name, size } of sizes) {
    await page.setViewportSize({ width: size, height: size });
    await page.setContent(`
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: transparent;
          }
          svg {
            width: 100%;
            height: 100%;
            display: block;
          }
        </style>
      </head>
      <body>
        ${svgContent}
      </body>
      </html>
    `);

    // Give a small delay to make sure rendering is complete
    await page.waitForTimeout(200);

    const buffer = await page.screenshot({
      type: 'png',
      omitBackground: true
    });

    const outputPath = resolve('public', name);
    writeFileSync(outputPath, buffer);
    console.log(`Generated public/${name} (${size}x${size})`);
  }

  await browser.close();
  console.log('All icons generated successfully!');
}

generate().catch(console.error);
