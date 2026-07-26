import fs from 'fs';
import { characters } from '../src/data';

const dataPath = 'src/data.ts';
let dataContent = fs.readFileSync(dataPath, 'utf-8');

const genericTypes = ['Frequent Contact', 'Close Association', 'Acquaintance'];

function charInfo(id: string) {
  return characters.find(ch => ch.id === id);
}

// We will find and replace all relationships matching generic labels
let matchCount = 0;
let replacedCount = 0;

// The regex matches lines like:
// { source: 'char-2', target: 'char-4', type: 'Frequent Contact', typeZh: '密切交集' },
const regex = /\{\s*source:\s*'([^']+)',\s*target:\s*'([^']+)',\s*type:\s*'([^']+)',\s*typeZh:\s*'([^']+)'\s*\}/g;

dataContent = dataContent.replace(regex, (match, src, tgt, type, typeZh) => {
  if (genericTypes.includes(type)) {
    matchCount++;
    const s = charInfo(src);
    const t = charInfo(tgt);
    if (!s || !t) return match;
    
    const roleKey = [s.role, t.role].sort().join('|');
    
    let newType = 'Social Acquaintance';
    let newTypeZh = '泛泛之交';
    
    // Apply role-based logic to upgrade
    if (roleKey === 'scholar|scholar') { newType = 'Literary Peer'; newTypeZh = '同好文人'; }
    else if (roleKey === 'performer|scholar') { newType = 'Patron & Performer'; newTypeZh = '名士与伶人'; }
    else if (roleKey === 'performer|performer') { newType = 'Theatrical Colleague'; newTypeZh = '同台伶人'; }
    else if (roleKey === 'official|scholar') { newType = 'Official & Scholar'; newTypeZh = '官员与名士'; }
    else if (roleKey === 'scholar|villain') { newType = 'Antagonistic Tie'; newTypeZh = '结怨/算计'; }
    else if (roleKey === 'performer|villain') { newType = 'Antagonistic Tie'; newTypeZh = '结怨/算计'; }
    else if (roleKey === 'female|scholar') { newType = 'Family/Household'; newTypeZh = '家属/内眷'; }
    else if (roleKey === 'female|female') { newType = 'Female Companion'; newTypeZh = '闺阁女伴'; }
    else if (roleKey === 'servant|servant') { newType = 'Household Staff'; newTypeZh = '同府仆从'; }
    else if (roleKey === 'scholar|servant') { newType = 'Master & Servant'; newTypeZh = '主仆/雇佣'; }
    else if (roleKey === 'villain|villain') { newType = 'Villainous Associate'; newTypeZh = '狐朋狗友'; }
    
    // Some specific known ones from earlier
    if (src === 'char-2' && tgt === 'char-4' || src === 'char-4' && tgt === 'char-2') { newType = 'Literary Peer'; newTypeZh = '同好文人'; }
    if (src === 'char-4' && tgt === 'char-9' || src === 'char-9' && tgt === 'char-4') { newType = 'Literary Peer'; newTypeZh = '同好文人'; }
    if (src === 'char-10' && tgt === 'char-4' || src === 'char-4' && tgt === 'char-10') { newType = 'Literary Peer'; newTypeZh = '同好文人'; }
    if (src === 'char-3' && tgt === 'char-4' || src === 'char-4' && tgt === 'char-3') { newType = 'Literary Peer'; newTypeZh = '同好文人'; }
    if (src === 'char-25' && tgt === 'char-86' || src === 'char-86' && tgt === 'char-25') { newType = 'Social Acquaintance'; newTypeZh = '泛泛之交'; }
    
    replacedCount++;
    return `{ source: '${src}', target: '${tgt}', type: '${newType}', typeZh: '${newTypeZh}' }`;
  }
  return match;
});

fs.writeFileSync(dataPath, dataContent);
console.log(`Found ${matchCount} generic relationships. Upgraded ${replacedCount} relationships.`);
