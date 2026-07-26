import { getCoOccurrenceEdges } from '../src/cooccurrence';
import { characters, relationships } from '../src/data';

const charMap = new Map(characters.map(c => [c.id, c]));
const edges = getCoOccurrenceEdges().filter(e => e.weight >= 8);

const relMap = new Map<string, typeof relationships[0]>();
for (const r of relationships) {
  relMap.set(`${r.source}|${r.target}`, r);
  relMap.set(`${r.target}|${r.source}`, r);
}

// Group pairs by role pairs (e.g. scholar-scholar, scholar-performer, scholar-villain, performer-performer, etc.)
const rolePairGroups = new Map<string, Array<any>>();

for (const e of edges) {
  const c1 = charMap.get(e.source);
  const c2 = charMap.get(e.target);
  const r1 = c1?.role || 'unknown';
  const r2 = c2?.role || 'unknown';
  const key = [r1, r2].sort().join(' <-> ');
  
  if (!rolePairGroups.has(key)) rolePairGroups.set(key, []);
  
  const rel = relMap.get(`${e.source}|${e.target}`);
  rolePairGroups.get(key)!.push({
    c1: c1?.name || e.source,
    c1Id: e.source,
    c2: c2?.name || e.target,
    c2Id: e.target,
    weight: e.weight,
    chapters: e.chapters,
    relType: rel?.type || 'NONE',
    relTypeZh: rel?.typeZh || '未标注'
  });
}

console.log('=== ROLE PAIR GROUPINGS FOR CO-OCCURRENCE >= 8 ===');
for (const [group, pairs] of rolePairGroups.entries()) {
  console.log(`\nGroup: ${group} (${pairs.length} pairs)`);
  // Print top 5 pairs in each group
  pairs.sort((a, b) => b.weight - a.weight);
  for (const p of pairs.slice(0, 8)) {
    console.log(`  [${p.weight} chs] ${p.c1} <-> ${p.c2} | Curr: ${p.relTypeZh} (${p.relType})`);
  }
  if (pairs.length > 8) {
    console.log(`  ... and ${pairs.length - 8} more pairs`);
  }
}
