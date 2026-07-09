import fs from 'fs';
import path from 'path';

let mismatches = [];

for (let i = 1; i <= 60; i++) {
  try {
    const enFile = `./src/chapterTranslations/chapterTranslations${i}.ts`;
    const chFile = `./src/chapterTranslations/chinese/chapterChinese${i}.ts`;
    
    if (!fs.existsSync(enFile) || !fs.existsSync(chFile)) {
       console.log(`Skipping ${i}, file missing`);
       continue;
    }
    
    const enContent = fs.readFileSync(enFile, 'utf8');
    const chContent = fs.readFileSync(chFile, 'utf8');
    
    // Quick heuristic: count the number of string elements in the arrays by counting lines that look like array entries
    // Or just dynamically import them? Dynamic import in Node with ES modules for .ts is tricky without tsx.
    // Let's just generate a script that tsx can run which imports them all.
  } catch (e) {
    console.error(e);
  }
}
