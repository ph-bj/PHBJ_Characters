import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { translations } from './translations/chapter24-en.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
if (translations.length !== 8) process.exit(1);
writeFileSync(join(__dirname, 'tmp_chapter.json'), JSON.stringify({ id: 24, translations }, null, 2), 'utf8');
console.log('OK ch24', translations.length);
