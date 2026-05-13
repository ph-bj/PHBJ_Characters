const fs = require('fs');

const worksData = JSON.parse(fs.readFileSync('src/worksData.json', 'utf8'));

const workKeys = Object.keys(worksData).sort((a, b) => b.length - a.length);

const chapterFiles = [
  'chapter1Translation.ts',
  'chapter2Translation.ts',
  'chapterTranslations3to60.ts',
  'chapterTranslations32.ts',
  'chapterTranslations33to36.ts',
  'chapterTranslations37to38.ts',
  'chapterTranslations39to40.ts',
  'chapterTranslations41to42.ts',
  'chapterTranslations43to44.ts',
  'chapterTranslations45.ts',
  'chapterTranslations46.ts',
  'chapterTranslations47.ts',
  'chapterTranslations48.ts',
  'chapterTranslations49.ts',
  'chapterTranslations50.ts',
  'chapterTranslations51.ts',
  'chapterTranslations52.ts',
  'chapterTranslations53.ts',
  'chapterTranslations54.ts',
  'chapterTranslations55.ts',
  'chapterTranslations56.ts',
  'chapterTranslations57.ts',
  'chapterTranslations58.ts',
  'chapterTranslations59.ts',
  'chapterTranslations60.ts',
];

console.log(workKeys.length);
