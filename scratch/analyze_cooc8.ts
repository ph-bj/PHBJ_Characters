import { getCoOccurrenceEdges } from '../src/cooccurrence';
import { characters, relationships } from '../src/data';

const charMap = new Map(characters.map(c => [c.id, c]));
const edges = getCoOccurrenceEdges().filter(e => e.weight >= 8);

const relMap = new Map<string, typeof relationships[0]>();
for (const r of relationships) {
  relMap.set(`${r.source}|${r.target}`, r);
  relMap.set(`${r.target}|${r.source}`, r);
}

console.log(`Total edges with weight >= 8: ${edges.length}`);

// Group by relationship typeZh
const typeCount = new Map<string, number>();
let unannotated = 0;

for (const edge of edges) {
  const rel = relMap.get(`${edge.source}|${edge.target}`);
  if (rel) {
    const key = `${rel.typeZh} (${rel.type})`;
    typeCount.set(key, (typeCount.get(key) || 0) + 1);
  } else {
    unannotated++;
  }
}

console.log(`\nUnannotated pairs: ${unannotated}`);
console.log('\nAnnotated types breakdown:');
const sortedTypes = [...typeCount.entries()].sort((a, b) => b[1] - a[1]);
for (const [t, c] of sortedTypes) {
  console.log(`  ${t}: ${c}`);
}
