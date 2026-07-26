import { getCoOccurrenceEdges } from '../src/cooccurrence';
import { characters, relationships } from '../src/data';
import * as fs from 'fs';

const charMap = new Map(characters.map(c => [c.id, c]));

const relMap = new Map<string, { type: string; typeZh: string }[]>();
for (const r of relationships) {
  const k1 = `${r.source}|${r.target}`;
  const k2 = `${r.target}|${r.source}`;
  if (!relMap.has(k1)) relMap.set(k1, []);
  if (!relMap.has(k2)) relMap.set(k2, []);
  relMap.get(k1)!.push({ type: r.type, typeZh: r.typeZh });
  relMap.get(k2)!.push({ type: r.type, typeZh: r.typeZh });
}

const edges = getCoOccurrenceEdges().filter(e => e.weight >= 8);
edges.sort((a, b) => b.weight - a.weight);

const out = edges.map(e => {
  const c1 = charMap.get(e.source);
  const c2 = charMap.get(e.target);
  const rels = relMap.get(`${e.source}|${e.target}`) || [];
  return {
    weight: e.weight,
    c1Id: e.source,
    c1Name: c1 ? `${c1.name} (${c1.alias || 'no alias'})` : e.source,
    c1Role: c1?.role,
    c2Id: e.target,
    c2Name: c2 ? `${c2.name} (${c2.alias || 'no alias'})` : e.target,
    c2Role: c2?.role,
    currentRel: rels,
    chapters: e.chapters
  };
});

fs.writeFileSync('./scratch/pairs_result.json', JSON.stringify(out, null, 2));
console.log(`Saved ${out.length} pairs to scratch/pairs_result.json`);
