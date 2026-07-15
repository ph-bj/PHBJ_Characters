import * as fs from 'fs';
import * as path from 'path';

const FILE_PATH = '/Users/tcz/Documents/GitHub/PHBJ_Characters/src/components/ChapterAppreciation.tsx';

const content = fs.readFileSync(FILE_PATH, 'utf-8');
const lines = content.split('\n');

lines.forEach((line, index) => {
  const lineNum = index + 1;
  // Skip the protagonist map (lines 40 to 108)
  if (lineNum >= 40 && lineNum <= 108) {
    return;
  }
  if (/[\u4e00-\u9fa5]/.test(line)) {
    console.log(`Line ${lineNum}: ${line.trim()}`);
  }
});
