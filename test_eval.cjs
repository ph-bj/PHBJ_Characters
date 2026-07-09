const fs = require('fs');
const path = require('path');

function getParagraphs(chapterNum) {
  const fileContent = fs.readFileSync(path.join(__dirname, `src/chapterTranslations/chinese/chapterChinese${chapterNum}.ts`), 'utf8');
  const match = fileContent.match(/=\s*(\[[\s\S]*\]);/);
  if (match) {
    try {
      return eval(match[1]);
    } catch (e) {
      console.error("Eval error for chapter", chapterNum, e);
      return [];
    }
  }
  return [];
}

const paras = getParagraphs(15);
console.log(`Chapter 15 has ${paras.length} paragraphs.`);
if (paras.length > 0) {
  const idx = paras.findIndex(p => p.includes('重叠'));
  console.log(`Found "重叠" in paragraph ${idx + 1}`);
}
