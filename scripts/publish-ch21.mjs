import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { translations } from './translations/chapter21-en.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
if (translations.length !== 15) {
  console.error('ch21 expected 15, got', translations.length);
  process.exit(1);
}
writeFileSync(join(__dirname, 'tmp_chapter.json'), JSON.stringify({ id: 21, translations }, null, 2), 'utf8');
console.log('OK tmp_chapter.json ch21', translations.length);
