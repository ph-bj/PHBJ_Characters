/**
 * Comprehensive analysis: categorize ALL missing pairs and group by chapter.
 * Outputs structured data for efficient relationship assignment.
 */
import { getCoOccurrenceEdges } from '../src/cooccurrence';
import { relationships, characters } from '../src/data';

const edges = getCoOccurrenceEdges();
const highEdges = edges.filter(e => e.weight >= 3);

const existingPairs = new Set<string>();
const existingRelMap = new Map<string, {type: string, typeZh: string}>();
for (const rel of relationships) {
  const pair = [rel.source, rel.target].sort().join('|');
  existingPairs.add(pair);
  existingRelMap.set(pair, {type: rel.type, typeZh: rel.typeZh});
}

function charInfo(id: string) {
  const c = characters.find(ch => ch.id === id);
  return c ? { name: c.name, role: c.role, desc: c.description } : { name: id, role: '', desc: '' };
}

interface MissingPair {
  source: string;
  target: string;
  sourceInfo: { name: string; role: string; desc: string };
  targetInfo: { name: string; role: string; desc: string };
  weight: number;
  chapters: number[];
  rolePairKey: string;
}

const missing: MissingPair[] = [];
const generic: Array<MissingPair & { existingType: string; existingTypeZh: string }> = [];

for (const edge of highEdges) {
  const pair = [edge.source, edge.target].sort().join('|');
  const si = charInfo(edge.source);
  const ti = charInfo(edge.target);
  const roles = [si.role, ti.role].sort();
  const rolePairKey = `${roles[0]}|${roles[1]}`;
  
  if (!existingPairs.has(pair)) {
    missing.push({
      source: edge.source,
      target: edge.target,
      sourceInfo: si,
      targetInfo: ti,
      weight: edge.weight,
      chapters: edge.chapters,
      rolePairKey,
    });
  } else {
    const ex = existingRelMap.get(pair)!;
    const genericLabels = ['Frequent Contact', 'Close Association', 'Acquaintance'];
    if (genericLabels.includes(ex.type)) {
      generic.push({
        source: edge.source,
        target: edge.target,
        sourceInfo: si,
        targetInfo: ti,
        weight: edge.weight,
        chapters: edge.chapters,
        rolePairKey,
        existingType: ex.type,
        existingTypeZh: ex.typeZh,
      });
    }
  }
}

// Group missing by role pair
const byRolePair = new Map<string, MissingPair[]>();
for (const m of missing) {
  const key = m.rolePairKey;
  if (!byRolePair.has(key)) byRolePair.set(key, []);
  byRolePair.get(key)!.push(m);
}

console.log(`\n=== MISSING PAIRS BY ROLE COMBINATION ===\n`);
const sortedKeys = [...byRolePair.keys()].sort((a, b) => byRolePair.get(b)!.length - byRolePair.get(a)!.length);
for (const key of sortedKeys) {
  const pairs = byRolePair.get(key)!;
  console.log(`[${key}] — ${pairs.length} pairs`);
}

// Group by chapter range for research
console.log(`\n=== MISSING PAIRS GROUPED BY FIRST SHARED CHAPTER ===\n`);
for (let start = 0; start <= 55; start += 5) {
  const end = start + 4;
  const inRange = missing.filter(m => m.chapters.some(ch => ch >= start && ch <= end));
  console.log(`Chapters ${start}-${end}: ${inRange.length} pairs involve these chapters`);
}

// Output high-weight missing pairs for priority research
console.log(`\n=== HIGH PRIORITY: MISSING PAIRS WITH WEIGHT >= 5 ===\n`);
const highPriority = missing.filter(m => m.weight >= 5).sort((a, b) => b.weight - a.weight);
for (const m of highPriority) {
  console.log(`  w=${m.weight} ${m.source}(${m.sourceInfo.name} [${m.sourceInfo.role}]) <-> ${m.target}(${m.targetInfo.name} [${m.targetInfo.role}]) chs=[${m.chapters.join(',')}]`);
}

console.log(`\n=== GENERIC LABELS NEEDING REVIEW (${generic.length} total) ===\n`);
const highGeneric = generic.filter(g => g.weight >= 5).sort((a, b) => b.weight - a.weight);
for (const g of highGeneric) {
  console.log(`  w=${g.weight} "${g.existingType}" ${g.source}(${g.sourceInfo.name}) <-> ${g.target}(${g.targetInfo.name}) chs=[${g.chapters.join(',')}]`);
}

// Summary stats
console.log(`\n=== SUMMARY ===`);
console.log(`Total missing: ${missing.length}`);
console.log(`  Weight >= 10: ${missing.filter(m => m.weight >= 10).length}`);
console.log(`  Weight 7-9: ${missing.filter(m => m.weight >= 7 && m.weight <= 9).length}`);
console.log(`  Weight 5-6: ${missing.filter(m => m.weight >= 5 && m.weight <= 6).length}`);
console.log(`  Weight 3-4: ${missing.filter(m => m.weight >= 3 && m.weight <= 4).length}`);
console.log(`Generic labels: ${generic.length}`);
