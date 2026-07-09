import fs from 'fs';

let imports = '';
let checks = '';

for (let i = 1; i <= 60; i++) {
  imports += `import { chapterTranslations${i} } from './src/chapterTranslations/chapterTranslations${i}.ts';\n`;
  imports += `import { chapterChinese${i} } from './src/chapterTranslations/chinese/chapterChinese${i}.ts';\n`;
  
  checks += `
  try {
    let enArr;
    if (Array.isArray(chapterTranslations${i})) {
      enArr = chapterTranslations${i};
    } else {
      enArr = chapterTranslations${i}[${i}];
    }
    
    let chArr;
    if (Array.isArray(chapterChinese${i})) {
      chArr = chapterChinese${i};
    } else {
      chArr = chapterChinese${i}[${i}];
    }
    
    if (enArr.length !== chArr.length) {
      console.log(\`Chapter ${i} MISMATCH: EN=\${enArr.length}, CH=\${chArr.length}\`);
    } else {
      // console.log(\`Chapter ${i} OK\`);
    }
  } catch (e) {
    console.log(\`Chapter ${i} ERROR: \`, e.message);
  }
  `;
}

fs.writeFileSync('do_check.ts', imports + '\n' + checks);
