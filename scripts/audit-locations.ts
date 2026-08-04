import fs from 'node:fs';
import path from 'node:path';
import { novelLocations } from '../src/locations';
import coordinates from '../src/assets/coordinates.json';

const chineseDir = path.resolve('src/chapterTranslations/chinese');
const corpus = fs.readdirSync(chineseDir)
  .filter((file) => file.endsWith('.ts'))
  .map((file) => fs.readFileSync(path.join(chineseDir, file), 'utf8'))
  .join('\n');

const errors: string[] = [];
const ids = new Set<string>();

for (const location of novelLocations) {
  if (ids.has(location.id)) errors.push(`Duplicate id: ${location.id}`);
  ids.add(location.id);

  if (!location.searchTokens.some((token) => corpus.includes(token))) {
    errors.push(`Not attested in Chinese text: ${location.id} (${location.name})`);
  }

  if (location.type !== 'allusion' && !(location.id in coordinates)) {
    errors.push(`Missing map coordinate: ${location.id} (${location.name})`);
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  const counts = novelLocations.reduce<Record<string, number>>((result, location) => {
    result[location.type] = (result[location.type] ?? 0) + 1;
    return result;
  }, {});
  console.log(`Verified ${novelLocations.length} text-attested geographic entries.`);
  for (const [type, count] of Object.entries(counts)) {
    console.log(`  ${type}: ${count}`);
  }
}
