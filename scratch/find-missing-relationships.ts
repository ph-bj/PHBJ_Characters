/**
 * Script to find co-occurrence pairs with weight >= 3 
 * that don't already have a relationship defined.
 */
import { getCoOccurrenceEdges } from '../src/cooccurrence';
import { relationships, characters } from '../src/data';

const edges = getCoOccurrenceEdges();
const highEdges = edges.filter(e => e.weight >= 3);

const existingPairs = new Set<string>();
for (const rel of relationships) {
  const pair = [rel.source, rel.target].sort().join('|');
  existingPairs.add(pair);
}

function charName(id: string): string {
  const c = characters.find(ch => ch.id === id);
  return c ? c.name : id;
}

function charRole(id: string): string {
  const c = characters.find(ch => ch.id === id);
  return c ? c.role : '';
}

// Find high co-occurrence edges without existing relationships
const missing: Array<{source: string, target: string, weight: number, chapters: number[], sourceName: string, targetName: string}> = [];

for (const edge of highEdges) {
  const pair = [edge.source, edge.target].sort().join('|');
  if (!existingPairs.has(pair)) {
    missing.push({
      ...edge,
      sourceName: charName(edge.source),
      targetName: charName(edge.target),
    });
  }
}

missing.sort((a, b) => b.weight - a.weight);

console.log(`MISSING relationships (weight >= 3): ${missing.length}`);
console.log('');
for (const m of missing) {
  console.log(`${m.source}|${m.target}|${m.sourceName}|${m.targetName}|${charRole(m.source)}|${charRole(m.target)}|${m.weight}|${m.chapters.join(',')}`);
}
