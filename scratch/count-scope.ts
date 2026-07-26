/**
 * Count and categorize missing relationships by role pairs
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

let missing = 0;
let total = 0;
for (const edge of highEdges) {
  total++;
  const pair = [edge.source, edge.target].sort().join('|');
  if (!existingPairs.has(pair)) {
    missing++;
  }
}

// Also count existing with generic labels
const genericLabels = ['Frequent Contact', 'Close Association', 'Acquaintance'];
let genericCount = 0;
for (const edge of highEdges) {
  const pair = [edge.source, edge.target].sort().join('|');
  if (existingPairs.has(pair)) {
    const rel = relationships.find(r => {
      const rPair = [r.source, r.target].sort().join('|');
      return rPair === pair;
    });
    if (rel && genericLabels.includes(rel.type)) {
      genericCount++;
    }
  }
}

console.log(`Total co-occurrence pairs (weight >= 3): ${total}`);
console.log(`Already have relationships: ${total - missing}`);
console.log(`  Of which have generic/placeholder labels: ${genericCount}`);
console.log(`Missing relationships entirely: ${missing}`);
console.log(`TOTAL needing research (missing + generic): ${missing + genericCount}`);
