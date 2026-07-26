import { getCoOccurrenceEdges } from '../src/cooccurrence';
import { characters, relationships } from '../src/data';

const charMap = new Map(characters.map(c => [c.id, c]));
const edges = getCoOccurrenceEdges().filter(e => e.weight >= 8);

const relMap = new Map<string, typeof relationships[0]>();
for (const r of relationships) {
  relMap.set(`${r.source}|${r.target}`, r);
  relMap.set(`${r.target}|${r.source}`, r);
}

// Let's find pairs with template labels
const templateTypes = new Set([
  '同好文人', '名士与伶人', '结怨/算计', '同台伶人', '主仆/雇佣', '泛泛之交',
  '戏班/府上', '官员与名士', '官员与伶人', '狐朋狗友', '死敌宿仇', '同府仆从',
  '家属/内眷', 'Fellow Performer', 'Social Acquaintance', 'Literary Peer',
  'Patron & Performer', 'Antagonistic Tie', 'Theatrical Colleague', 'Master & Servant',
  'Theatrical Household', 'Official & Scholar', 'Official & Performer',
  'Villainous Associate', 'Adversary', 'Household Staff', 'Family/Household', 'NONE', '未标注'
]);

const templatePairs: any[] = [];
for (const e of edges) {
  const c1 = charMap.get(e.source);
  const c2 = charMap.get(e.target);
  const rel = relMap.get(`${e.source}|${e.target}`);
  const typeZh = rel?.typeZh || '未标注';
  if (templateTypes.has(typeZh) || templateTypes.has(rel?.type || '')) {
    templatePairs.push({
      sId: e.source,
      sName: c1?.name.split('\t')[0] || e.source,
      sRole: c1?.role,
      tId: e.target,
      tName: c2?.name.split('\t')[0] || e.target,
      tRole: c2?.role,
      weight: e.weight,
      chapters: e.chapters,
      currTypeZh: typeZh,
      currType: rel?.type || 'NONE'
    });
  }
}

console.log(`Found ${templatePairs.length} pairs with generic template labels (out of ${edges.length} total cooc >= 8 pairs).`);
