const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/questions/data/ocr-typos-list.ts');
let content = fs.readFileSync(filePath, 'utf8');

// English:
content = content.replace(/\*\*Chapter (\d+)\*\* \(Line (\d+)\)/g, "**Chapter $1** (Paragraph $2)");

// Chinese:
content = content.replace(/\*\*第(.{1,3})章\*\* \(第 (\d+) 行\)/g, "**第$1章**（第 $2 段）");

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done.');
