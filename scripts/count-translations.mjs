import fs from 'fs';
import { pathToFileURL } from 'url';
import { createRequire } from 'module';

const req = createRequire(import.meta.url);
const text = fs.readFileSync(new URL('../src/chapterTranslations3to60.ts', import.meta.url), 'utf8');

for (let id = 19; id <= 25; id++) {
  const next = id + 1;
  const re = new RegExp(`\\s+${id}:\\s*\\[([\\s\\S]*?)\\n\\s*${next}:`, 'm');
  const m = text.match(re);
  if (!m) {
    console.log(id, 'parse fail');
    continue;
  }
  const block = m[1];
  let count = 0;
  let i = 0;
  while (i < block.length) {
    const q = block.indexOf('"', i);
    if (q < 0) break;
    let end = q + 1;
    while (end < block.length) {
      const c = block[end];
      if (c === '\\') {
        end += 2;
        continue;
      }
      if (c === '"') {
        count++;
        end++;
        break;
      }
      end++;
    }
    i = end;
  }
  console.log(id, 'strings:', count);
}
