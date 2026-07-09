import { chapterChinese1 } from './src/chapterTranslations/chinese/chapterChinese1.ts';
import { chapterTranslations1 } from './src/chapterTranslations/chapterTranslations1.ts';
console.log(chapterChinese1.length === chapterTranslations1.length ? `OK: ${chapterChinese1.length}` : `MISMATCH: CH=${chapterChinese1.length}, EN=${chapterTranslations1.length}`);
