import { getCoOccurrenceEdges } from '../src/cooccurrence';
import { characters, relationships } from '../src/data';

const charMap = new Map(characters.map(c => [c.id, c]));
const edges = getCoOccurrenceEdges().filter(e => e.weight >= 8);

const coOccurrenceMap = new Map();
for (const e of edges) {
  const k = e.source < e.target ? `${e.source}|${e.target}` : `${e.target}|${e.source}`;
  coOccurrenceMap.set(k, e);
}

// Emulate NetworkGraph.tsx resolution
const visibleIds = new Set(characters.map(c => c.id));
const candidateMap = new Map<string, { rel: typeof relationships[0]; score: number }>();

function getScore(rel: typeof relationships[0]): number {
  let score = 0;
  const typeLow = (rel.type || '').toLowerCase();
  const typeZh = rel.typeZh || '';

  if (
    typeLow.includes('soulmate') || typeZh.includes('知己') ||
    typeLow.includes('romantic') || typeZh.includes('挚爱') || typeZh.includes('情感') ||
    typeLow.includes('spouse') || typeZh.includes('夫妻') ||
    typeLow.includes('marriage') || typeZh.includes('姻亲') ||
    typeLow.includes('betrothed') || typeZh.includes('婚约') ||
    typeLow.includes('redeemer') || typeZh.includes('赎身') ||
    typeLow.includes('adoptive') || typeZh.includes('义父') || typeZh.includes('义子') ||
    typeZh.includes('契') || typeZh.includes('霸占') || typeZh.includes('仇') || typeZh.includes('宿敌')
  ) {
    score += 100;
  } else if (
    typeLow.includes('master') || typeZh.includes('主仆') || typeZh.includes('师徒') ||
    typeLow.includes('family') || typeZh.includes('家属') || typeZh.includes('亲眷') || typeZh.includes('父子') || typeZh.includes('兄妹') ||
    typeLow.includes('antagonistic') || typeZh.includes('结怨') || typeZh.includes('算计') ||
    typeLow.includes('patron') || typeZh.includes('赞助') || typeZh.includes('看重') ||
    typeZh.includes('同道') || typeZh.includes('同恶') || typeZh.includes('恶少')
  ) {
    score += 70;
  } else if (
    typeLow.includes('peer') || typeZh.includes('同好文人') || typeZh.includes('文人') ||
    typeLow.includes('allied') || typeZh.includes('盟友') ||
    typeLow.includes('colleague') || typeZh.includes('同台') || typeZh.includes('同班') ||
    typeZh.includes('场友') || typeZh.includes('知音')
  ) {
    score += 40;
  } else if (
    typeLow.includes('acquaintance') || typeZh.includes('泛泛之交') ||
    typeLow.includes('guest') || typeZh.includes('宾客')
  ) {
    score += 10;
  } else {
    score += 20;
  }

  return score;
}

for (const r of relationships) {
  if (!visibleIds.has(r.source) || !visibleIds.has(r.target)) continue;

  const pairKey = r.source < r.target ? `${r.source}|${r.target}` : `${r.target}|${r.source}`;

  const co = coOccurrenceMap.get(pairKey);
  if (!co || co.weight < 8) continue;

  const score = getScore(r);
  const existing = candidateMap.get(pairKey);
  if (!existing || score > existing.score) {
    candidateMap.set(pairKey, { rel: r, score });
  }
}

const resolvedRels = Array.from(candidateMap.values()).map(e => e.rel);
console.log(`Resolved ${resolvedRels.length} relationships for co-occurrence >= 8 pairs.`);

const typeDistribution = new Map<string, number>();
for (const r of resolvedRels) {
  const key = `${r.typeZh} (${r.type})`;
  typeDistribution.set(key, (typeDistribution.get(key) || 0) + 1);
}

console.log('\nTop 15 Resolved Relationship Types in NetworkGraph:');
const sorted = [...typeDistribution.entries()].sort((a, b) => b[1] - a[1]);
for (const [t, c] of sorted.slice(0, 20)) {
  console.log(`  ${t}: ${c}`);
}
