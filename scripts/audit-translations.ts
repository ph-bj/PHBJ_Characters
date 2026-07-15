import * as fs from 'fs';
import * as path from 'path';

const SRC_DIR = '/Users/tcz/Documents/GitHub/PHBJ_Characters/src';

// Helper to check if a line has Chinese characters
function hasChinese(text: string): boolean {
  return /[\u4e00-\u9fa5]/.test(text);
}

function auditFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const results: { lineNum: number; content: string }[] = [];

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.startsWith('import')) {
      return;
    }
    // Filter out lines that already contain a language switch check
    if (
      trimmed.includes('lang ===') ||
      trimmed.includes('lang !==') ||
      trimmed.includes('lang ?') ||
      trimmed.includes('lang :') ||
      trimmed.includes('lang === "zh"') ||
      trimmed.includes('lang === \'zh\'') ||
      trimmed.includes('lang === "en"') ||
      trimmed.includes('lang === \'en\'')
    ) {
      return;
    }

    if (hasChinese(line)) {
      results.push({ lineNum: index + 1, content: line });
    }
  });

  if (results.length > 0) {
    console.log(`\n=== File: ${path.relative(SRC_DIR, filePath)} ===`);
    results.forEach(({ lineNum, content }) => {
      console.log(`Line ${lineNum}: ${content.trim()}`);
    });
  }
}

function walkDir(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file === 'components') {
        walkDir(fullPath);
      }
    } else {
      const relPath = path.relative(SRC_DIR, fullPath);
      if (relPath === 'App.tsx' || relPath.startsWith('components/')) {
        auditFile(fullPath);
      }
    }
  }
}

walkDir(SRC_DIR);
console.log("\nAudit completed.");
