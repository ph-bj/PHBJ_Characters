import { relationships } from '../src/data';
import { cooccurrenceSpecificRelationships } from '../src/cooccurrenceRelationships';

// Let's trace how candidateMap in NetworkGraph resolves relationships
function getScore(rel: any): number {
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
    typeZh.includes('契')
  ) {
    score += 100;
  } else if (
    typeLow.includes('master') || typeZh.includes('主仆') || typeZh.includes('师徒') ||
    typeLow.includes('family') || typeZh.includes('家属') || typeZh.includes('亲眷') || typeZh.includes('父子') || typeZh.includes('兄妹') ||
    typeLow.includes('antagonistic') || typeZh.includes('结怨') || typeZh.includes('算计') ||
    typeLow.includes('patron') || typeZh.includes('赞助') || typeZh.includes('看重')
  ) {
    score += 70;
  } else if (
    typeLow.includes('peer') || typeZh.includes('同好文人') || typeZh.includes('文人') ||
    typeLow.includes('allied') || typeZh.includes('盟友') ||
    typeLow.includes('colleague') || typeZh.includes('同台') || typeZh.includes('同班')
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

const candidateMapCurrent = new Map<string, { rel: any; score: number }>();
for (const r of relationships) {
  const pairKey = r.source < r.target ? `${r.source}|${r.target}` : `${r.target}|${r.source}`;
  const score = getScore(r);
  const existing = candidateMapCurrent.get(pairKey);
  if (!existing || score > existing.score) {
    candidateMapCurrent.set(pairKey, { rel: r, score });
  }
}

// Let's check cooccurrenceSpecificRelationships entries vs current resolved entries
const overrides: any[] = [];
for (const spec of cooccurrenceSpecificRelationships) {
  const pairKey = spec.source < spec.target ? `${spec.source}|${spec.target}` : `${spec.target}|${spec.source}`;
  const current = candidateMapCurrent.get(pairKey);
  if (current && (current.rel.typeZh !== spec.typeZh || current.rel.type !== spec.type)) {
    overrides.push({
      pairKey,
      spec,
      current: current.rel,
      specScore: getScore(spec),
      currentScore: current.score
    });
  }
}

console.log(`Found ${overrides.length} cooccurrenceSpecificRelationships entries that are overridden by base/manual relationships:`);
for (const o of overrides) {
  console.log(`Pair ${o.pairKey}:`);
  console.log(`  Current displayed: ${o.current.typeZh} (${o.current.type}) [score ${o.currentScore}]`);
  console.log(`  Specific co-oc:    ${o.spec.typeZh} (${o.spec.type}) [score ${o.specScore}]`);
}
