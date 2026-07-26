/**
 * Accurate analysis accounting for character merges.
 * The cooccurrence system uses raw characterAppearance IDs which may include
 * pre-merge IDs. We need to remap them through idRemap before checking
 * against the relationships set.
 */
import { getCoOccurrenceEdges } from '../src/cooccurrence';
import { relationships, characters } from '../src/data';

// Reconstruct idRemap by checking which IDs exist vs don't
const allCharIds = new Set(characters.map(c => c.id));

// Get edges and remap
const edges = getCoOccurrenceEdges();

// We need to find the remap. Let's extract it from the data module.
// Since idRemap is not exported, let's reconstruct it by finding IDs
// in the co-occurrence that don't exist in characters
const unknownIds = new Set<string>();
for (const edge of edges) {
  if (!allCharIds.has(edge.source)) unknownIds.add(edge.source);
  if (!allCharIds.has(edge.target)) unknownIds.add(edge.target);
}

console.log("Unknown IDs in co-occurrence (merged away):", [...unknownIds].sort());

// Build a manual remap based on the mergeGroups in data.ts
const idRemap: Record<string, string> = {};

// From the mergeGroups, we know:
// char-66 (田状元) -> char-15 (田春航)
// char-100 (佩秋/孙氏) -> char-88 (孙氏)  -- actually char-88 is 孙氏, char-100 佩秋
// char-39 (珊枝) -> char-42 (林珊枝)
// char-78 (华夫人) -> char-153 (苏浣香)
// char-91 (袁夫人) -> char-40 (袁绮香)
// char-19 (屈少君) -> char-1 (杜琴言)
// char-76 (潘老三) -> char-73 (潘其观)
// char-144 (金粟) -> char-17 (金吉甫)

// Let me find which ones are actually merged
for (const uid of unknownIds) {
  // Try to find this in the rawData
  const possibleMerges: Record<string, string> = {
    'char-39': 'char-42',   // 珊枝 -> 林珊枝
    'char-41': 'char-40',   // ? Let's check
    'char-66': 'char-15',   // 田状元 -> 田春航
    'char-76': 'char-73',   // 潘老三 -> 潘其观
    'char-78': 'char-153',  // 华夫人 -> 苏浣香
    'char-91': 'char-40',   // 袁夫人 -> 袁绮香
    'char-19': 'char-1',    // 屈少君 -> 杜琴言
    'char-144': 'char-17',  // 金粟 -> 金吉甫
    'char-100': 'char-88',  // 佩秋 -> 孙氏
  };
  if (possibleMerges[uid]) {
    idRemap[uid] = possibleMerges[uid];
    console.log(`  ${uid} -> ${possibleMerges[uid]} (${characters.find(c => c.id === possibleMerges[uid])?.name})`);
  }
}

// Now re-analyze with proper remapping
const highEdges = edges.filter(e => e.weight >= 3);

// Remap edges
interface RemappedEdge {
  source: string;
  target: string;
  weight: number;
  chapters: number[];
}

const remappedEdges: RemappedEdge[] = [];
for (const edge of highEdges) {
  const src = idRemap[edge.source] || edge.source;
  const tgt = idRemap[edge.target] || edge.target;
  if (src === tgt) continue; // self-loops after merge
  if (!allCharIds.has(src) || !allCharIds.has(tgt)) continue;
  remappedEdges.push({
    source: src < tgt ? src : tgt,
    target: src < tgt ? tgt : src,
    weight: edge.weight,
    chapters: edge.chapters,
  });
}

// Deduplicate remapped edges (same pair might appear multiple times)
const edgeMap = new Map<string, RemappedEdge>();
for (const e of remappedEdges) {
  const key = `${e.source}|${e.target}`;
  const existing = edgeMap.get(key);
  if (existing) {
    existing.weight = Math.max(existing.weight, e.weight); // take max for weight
    existing.chapters = [...new Set([...existing.chapters, ...e.chapters])].sort((a, b) => a - b);
  } else {
    edgeMap.set(key, { ...e });
  }
}

// Check against existing relationships
const existingPairs = new Set<string>();
for (const rel of relationships) {
  const pair = [rel.source, rel.target].sort().join('|');
  existingPairs.add(pair);
}

let missingCount = 0;
let totalCount = 0;
const missingPairs: Array<RemappedEdge & {sourceName: string, targetName: string, sourceRole: string, targetRole: string}> = [];

for (const [key, edge] of edgeMap) {
  totalCount++;
  if (!existingPairs.has(key)) {
    missingCount++;
    const sc = characters.find(c => c.id === edge.source);
    const tc = characters.find(c => c.id === edge.target);
    missingPairs.push({
      ...edge,
      sourceName: sc?.name || edge.source,
      targetName: tc?.name || edge.target,
      sourceRole: sc?.role || '',
      targetRole: tc?.role || '',
    });
  }
}

missingPairs.sort((a, b) => b.weight - a.weight);

console.log(`\n=== AFTER MERGE REMAPPING ===`);
console.log(`Total unique pairs (weight >= 3): ${totalCount}`);
console.log(`Already have relationships: ${totalCount - missingCount}`);
console.log(`Still missing: ${missingCount}`);
console.log(`  Weight >= 10: ${missingPairs.filter(m => m.weight >= 10).length}`);
console.log(`  Weight 7-9: ${missingPairs.filter(m => m.weight >= 7 && m.weight <= 9).length}`);
console.log(`  Weight 5-6: ${missingPairs.filter(m => m.weight >= 5 && m.weight <= 6).length}`);
console.log(`  Weight 3-4: ${missingPairs.filter(m => m.weight >= 3 && m.weight <= 4).length}`);

// Group by role combination
const byRolePair = new Map<string, number>();
for (const m of missingPairs) {
  const roles = [m.sourceRole, m.targetRole].sort().join(' × ');
  byRolePair.set(roles, (byRolePair.get(roles) || 0) + 1);
}
console.log(`\n=== MISSING BY ROLE COMBINATION ===`);
for (const [roles, count] of [...byRolePair.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${roles}: ${count}`);
}

// Print all missing pairs
console.log(`\n=== ALL MISSING PAIRS (sorted by weight) ===`);
for (const m of missingPairs) {
  console.log(`${m.source}|${m.target}|${m.sourceName}|${m.targetName}|${m.sourceRole}|${m.targetRole}|${m.weight}|${m.chapters.join(',')}`);
}
