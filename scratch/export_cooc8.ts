import { getCoOccurrenceEdges } from '../src/cooccurrence';
import { characters, relationships } from '../src/data';
import * as fs from 'fs';

const charMap = new Map(characters.map(c => [c.id, c]));
const edges = getCoOccurrenceEdges().filter(e => e.weight >= 8);

const relMap = new Map<string, typeof relationships[0]>();
for (const r of relationships) {
  relMap.set(`${r.source}|${r.target}`, r);
  relMap.set(`${r.target}|${r.source}`, r);
}

const detailedPairs = edges.map(e => {
  const c1 = charMap.get(e.source);
  const c2 = charMap.get(e.target);
  const rel = relMap.get(`${e.source}|${e.target}`);
  return {
    source: e.source,
    sourceName: c1?.name || e.source,
    sourceRole: c1?.role,
    target: e.target,
    targetName: c2?.name || e.target,
    targetRole: c2?.role,
    weight: e.weight,
    chapters: e.chapters,
    currentType: rel?.type || 'NONE',
    currentTypeZh: rel?.typeZh || 'NONE'
  };
});

detailedPairs.sort((a, b) => b.weight - a.weight);

fs.writeFileSync('scratch/cooc8_detailed.json', JSON.stringify(detailedPairs, null, 2));
console.log(`Saved ${detailedPairs.length} detailed pairs.`);
