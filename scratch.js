import { chapterTranslations11 } from './src/chapterTranslations/chapterTranslations11.ts';
import { chapterChinese11 } from './src/chapterTranslations/chinese/chapterChinese11.ts';

const enArr = Array.isArray(chapterTranslations11) ? chapterTranslations11 : chapterTranslations11[11];
const chArr = Array.isArray(chapterChinese11) ? chapterChinese11 : chapterChinese11[11];

console.log('--- EN LAST 3 ---');
console.log(enArr[enArr.length - 3]);
console.log(enArr[enArr.length - 2]);
console.log(enArr[enArr.length - 1]);

console.log('--- CH LAST 3 ---');
console.log(chArr[chArr.length - 3]);
console.log(chArr[chArr.length - 2]);
console.log(chArr[chArr.length - 1]);
