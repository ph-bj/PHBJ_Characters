/**
 * Generate relationship entries for all missing co-occurrence pairs (weight >= 3).
 * 
 * Strategy:
 * 1. Use character descriptions, roles, and narrative context
 * 2. Apply relationship types from the established vocabulary
 * 3. For ambiguous cases, read specific chapter text
 * 
 * This script outputs TypeScript code ready to paste into data.ts.
 */
import { getCoOccurrenceEdges } from '../src/cooccurrence';
import { relationships, characters } from '../src/data';

const allCharIds = new Set(characters.map(c => c.id));

// Merge remapping
const idRemap: Record<string, string> = {
  'char-39': 'char-42',   // 珊枝 -> 林珊枝
  'char-41': 'char-40',   // -> 袁绮香
  'char-66': 'char-15',   // 田状元 -> 田春航
  'char-76': 'char-73',   // 潘老三 -> 潘其观
  'char-78': 'char-153',  // 华夫人 -> 苏浣香
  'char-91': 'char-40',   // 袁夫人 -> 袁绮香
  'char-19': 'char-1',    // 屈少君 -> 杜琴言
  'char-144': 'char-17',  // 金粟 -> 金吉甫
  'char-100': 'char-88',  // 佩秋 -> 孙氏
  'char-46': 'char-42',   // additional merge check
  'char-83': 'char-42',   // additional merge check
};

const edges = getCoOccurrenceEdges();
const highEdges = edges.filter(e => e.weight >= 3);

interface RemappedEdge {
  source: string;
  target: string;
  weight: number;
  chapters: number[];
}

const edgeMap = new Map<string, RemappedEdge>();
for (const edge of highEdges) {
  let src = idRemap[edge.source] || edge.source;
  let tgt = idRemap[edge.target] || edge.target;
  if (src === tgt) continue;
  if (!allCharIds.has(src) || !allCharIds.has(tgt)) continue;
  if (src > tgt) [src, tgt] = [tgt, src];
  const key = `${src}|${tgt}`;
  const existing = edgeMap.get(key);
  if (existing) {
    existing.weight = Math.max(existing.weight, edge.weight);
    existing.chapters = [...new Set([...existing.chapters, ...edge.chapters])].sort((a, b) => a - b);
  } else {
    edgeMap.set(key, { source: src, target: tgt, weight: edge.weight, chapters: edge.chapters });
  }
}

const existingPairs = new Set<string>();
const existingRelTypes = new Map<string, string>();
for (const rel of relationships) {
  const pair = [rel.source, rel.target].sort().join('|');
  existingPairs.add(pair);
  existingRelTypes.set(pair, rel.type);
}

function charInfo(id: string) {
  return characters.find(ch => ch.id === id)!;
}

// Determine relationship based on characters' roles, descriptions, and narrative context
function determineRelationship(src: string, tgt: string, weight: number, chapters: number[]): { type: string; typeZh: string } | null {
  const s = charInfo(src);
  const t = charInfo(tgt);
  if (!s || !t) return null;
  
  const roles = [s.role, t.role].sort();
  const roleKey = roles.join('|');
  const sDesc = (s.description + ' ' + s.descriptionZh).toLowerCase();
  const tDesc = (t.description + ' ' + t.descriptionZh).toLowerCase();
  const sName = s.name;
  const tName = t.name;
  
  // --- SPECIFIC KNOWN RELATIONSHIPS (from novel narrative) ---
  
  // Mei Ziyu's core relationships
  if (src === 'char-0' || tgt === 'char-0') {
    const other = src === 'char-0' ? tgt : src;
    const otherC = charInfo(other);
    
    // Ziyu and Baozhu - close patron-performer bond, Baozhu is a trusted friend
    if (other === 'char-23') return { type: 'Patron & Confidant', typeZh: '知己伶友' };
    // Ziyu and Su Huifang
    if (other === 'char-24') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    // Ziyu and Lu Sulan
    if (other === 'char-25') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    // Ziyu and Wei Pincai - antagonistic, Wei is a schemer in the Mei household
    if (other === 'char-5') return { type: 'Household Antagonism', typeZh: '府中嫌隙' };
    // Ziyu and Hua Guangsu - rivalry over Qinyan
    if (other === 'char-55') return { type: 'Romantic Rival', typeZh: '情场对手' };
    // Ziyu and Xi Shiyi - Xi harasses Qinyan, Ziyu opposes him
    if (other === 'char-72') return { type: 'Adversary', typeZh: '死敌宿仇' };
    // Ziyu and Fu Lun
    if (other === 'char-53') return { type: 'Social Friend', typeZh: '交游朋友' };
    // Ziyu and Wang Wenhui (father-in-law)
    if (other === 'char-48') return { type: 'Father-in-law/Son-in-law', typeZh: '翁婿' };
    // Ziyu and Guibao (Wang Guibao)
    if (other === 'char-29') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    // Ziyu and Lanbao (Wang Lanbao)
    if (other === 'char-28') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    // Ziyu and Pan Qiguan
    if (other === 'char-73') return { type: 'Adversary', typeZh: '对立冲突' };
    // Ziyu and Monk Tang
    if (other === 'char-75') return { type: 'Adversary', typeZh: '对立冲突' };
    // Ziyu and Jin Shufang
    if (other === 'char-26') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    // Ziyu and Li Yulin
    if (other === 'char-27') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    // Ziyu and Chunxi (Lin Chunxi)
    if (other === 'char-30') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    // Ziyu and Lin Shanzhi 
    if (other === 'char-42') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    // Ziyu and Rong Guan
    if (other === 'char-32') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    // Ziyu and Ji Liangxuan
    if (other === 'char-143') return { type: 'Adversary', typeZh: '对立冲突' };
    // Ziyu and Qu Daoweng
    if (other === 'char-141') return { type: 'Literary Mentor', typeZh: '文坛师友' };
    // Ziyu and Marquis Su
    if (other === 'char-142') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    // Ziyu and Liu Xi (servant of Qu)
    if (other === 'char-134') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    // Ziyu and Sun Lianggong
    if (other === 'char-49') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    // Ziyu and Changqing's wife
    if (other === 'char-152') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    // Ziyu and Jin Jifu
    if (other === 'char-17') return { type: 'Literary Peer', typeZh: '同好文人' };
    // Ziyu and Hou Shiweng
    if (other === 'char-135') return { type: 'Literary Peer', typeZh: '同好文人' };
    // Ziyu and Su Huanxiang (Lady Hua)
    if (other === 'char-153') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    // Ziyu and Yuan Qixiang (Xu's wife)
    if (other === 'char-40') return { type: 'Family/Household', typeZh: '家属/内眷' };
    // Ziyu and Ji Shi Aizi (engraver)
    if (other === 'char-197') return { type: 'Employer & Artisan', typeZh: '雇佣与刻工' };
    // Ziyu and Wu Ziyan (Liu Wenze's wife)
    if (other === 'char-150') return { type: 'Family/Household', typeZh: '家属/内眷' };
    // Ziyu and Cao Changqing (Qinyan's troupe master)
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    // Ziyu and Academician Wu
    if (other === 'char-62') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    // Ziyu and Director Shen
    if (other === 'char-63') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    // Ziyu and Yuan Qiguan
    if (other === 'char-31') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    // Ziyu and Shen Bocai
    if (other === 'char-12') return { type: 'Literary Peer', typeZh: '同好文人' };
    // Ziyu and Ba Lin
    if (other === 'char-13') return { type: 'Literary Peer', typeZh: '同好文人' };
    // Ziyu and Feng Zipei
    if (other === 'char-14') return { type: 'Literary Peer', typeZh: '同好文人' };
    // Ziyu and Zhang Zhongyu
    if (other === 'char-11') return { type: 'Literary Peer', typeZh: '同好文人' };
    // Ziyu and Xu Ziyun
    if (other === 'char-7') return { type: 'Literary Circle', typeZh: '文坛诗友' };
    // Ziyu and Sun Sihui
    if (other === 'char-21') return { type: 'Literary Peer', typeZh: '同好文人' };
    // Ziyu and Huanlan (Marquis Su's daughter)
    if (other === 'char-154') return { type: 'Family/Household', typeZh: '家属/内眷' };
    // Ziyu and Ronghua
    if (other === 'char-89') return { type: 'Family/Household', typeZh: '家属/内眷' };
  }
  
  // Du Qinyan's relationships
  if (src === 'char-1' || tgt === 'char-1') {
    const other = src === 'char-1' ? tgt : src;
    
    if (other === 'char-55') return { type: 'Captive & Captor', typeZh: '被纳入府' };
    if (other === 'char-72') return { type: 'Victim & Persecutor', typeZh: '受害与迫害' };
    if (other === 'char-5') return { type: 'Victim & Schemer', typeZh: '受害与算计' };
    if (other === 'char-8') return { type: 'Patron & Performer', typeZh: '恩主与伶人' };
    if (other === 'char-25') return { type: 'Allied Performers', typeZh: '伶界盟友' };
    if (other === 'char-2') return { type: 'Rescuer & Rescued', typeZh: '施救与受助' };
    if (other === 'char-4') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-9') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-15') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-73') return { type: 'Victim & Persecutor', typeZh: '受害与迫害' };
    if (other === 'char-75') return { type: 'Victim & Persecutor', typeZh: '受害与迫害' };
    if (other === 'char-24') return { type: 'Allied Performers', typeZh: '伶界盟友' };
    if (other === 'char-23') return { type: 'Loyal Friend', typeZh: '同门挚友' };
    if (other === 'char-53') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-141') return { type: 'Adoptive Father/Son', typeZh: '义父义子' };
    if (other === 'char-142') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-143') return { type: 'Victim & Schemer', typeZh: '受害与算计' };
    if (other === 'char-10') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-11') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-3') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-28') return { type: 'Fellow Performer', typeZh: '同台伶人' };
    if (other === 'char-29') return { type: 'Fellow Performer', typeZh: '同台伶人' };
    if (other === 'char-136') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-94') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-26') return { type: 'Fellow Performer', typeZh: '同台伶人' };
    if (other === 'char-27') return { type: 'Fellow Performer', typeZh: '同台伶人' };
    if (other === 'char-42') return { type: 'Fellow Performer', typeZh: '同台伶人' };
    if (other === 'char-30') return { type: 'Fellow Performer', typeZh: '同台伶人' };
    if (other === 'char-47') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-48') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-86') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-17') return { type: 'Literary Patron', typeZh: '名士与伶人' };
    if (other === 'char-152') return { type: "Troupe Master's Family", typeZh: '师门眷属' };
    if (other === 'char-134') return { type: 'Protector & Protected', typeZh: '护持' };
    if (other === 'char-197') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-40') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-150') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-153') return { type: 'Captive & Mistress', typeZh: '入府与主母' };
    if (other === 'char-135') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-56') return { type: 'Master/Apprentice', typeZh: '师徒' };
    if (other === 'char-89') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-14') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-49') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-33') return { type: 'Fellow Performer', typeZh: '同台伶人' };
    if (other === 'char-119') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
  }

  // --- ROLE-BASED DEFAULTS ---
  
  // Scholar × Scholar 
  if (roleKey === 'scholar|scholar') {
    return { type: 'Literary Peer', typeZh: '同好文人' };
  }
  
  // Scholar × Performer
  if (roleKey === 'performer|scholar') {
    return { type: 'Patron & Performer', typeZh: '名士与伶人' };
  }
  
  // Performer × Performer
  if (roleKey === 'performer|performer') {
    return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
  }
  
  // Scholar × Official
  if (roleKey === 'official|scholar') {
    return { type: 'Official & Scholar', typeZh: '官员与名士' };
  }
  
  // Official × Official
  if (roleKey === 'official|official') {
    return { type: 'Official Colleague', typeZh: '同朝为官' };
  }
  
  // Official × Performer
  if (roleKey === 'official|performer') {
    return { type: 'Official & Performer', typeZh: '官员与伶人' };
  }
  
  // Scholar × Villain
  if (roleKey === 'scholar|villain') {
    return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
  }
  
  // Performer × Villain
  if (roleKey === 'performer|villain') {
    return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
  }
  
  // Scholar × Servant
  if (roleKey === 'scholar|servant') {
    return { type: 'Master & Servant', typeZh: '主仆/雇佣' };
  }
  
  // Performer × Servant
  if (roleKey === 'performer|servant') {
    return { type: 'Theatrical Household', typeZh: '戏班/府上' };
  }
  
  // Female × Scholar
  if (roleKey === 'female|scholar') {
    return { type: 'Family/Household', typeZh: '家属/内眷' };
  }
  
  // Female × Performer
  if (roleKey === 'female|performer') {
    return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
  }
  
  // Female × Official
  if (roleKey === 'female|official') {
    return { type: 'Family/Household', typeZh: '家属/内眷' };
  }
  
  // Female × Villain
  if (roleKey === 'female|villain') {
    return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
  }
  
  // Female × Female
  if (roleKey === 'female|female') {
    return { type: 'Female Companion', typeZh: '闺阁女伴' };
  }
  
  // Female × Servant
  if (roleKey === 'female|servant') {
    return { type: 'Master & Servant', typeZh: '主仆/雇佣' };
  }
  
  // Servant × Servant
  if (roleKey === 'servant|servant') {
    return { type: 'Household Staff', typeZh: '同府仆从' };
  }
  
  // Servant × Villain
  if (roleKey === 'servant|villain') {
    return { type: 'Master & Servant', typeZh: '主仆/雇佣' };
  }
  
  // Official × Villain  
  if (roleKey === 'official|villain') {
    return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
  }
  
  // Villain × Villain
  if (roleKey === 'villain|villain') {
    return { type: 'Villainous Associate', typeZh: '狐朋狗友' };
  }
  
  // Minor × Scholar
  if (roleKey === 'minor|scholar') {
    return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
  }
  
  // Minor × Performer
  if (roleKey === 'minor|performer') {
    return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
  }
  
  // Minor × Villain
  if (roleKey === 'minor|villain') {
    return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
  }
  
  // Minor × Servant
  if (roleKey === 'minor|servant') {
    return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
  }
  
  // Minor × Official
  if (roleKey === 'minor|official') {
    return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
  }
  
  // Default
  return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
}

// Now let me apply more specific relationship types for key character combinations
// by going through the novel's major character arcs

function refineRelationship(src: string, tgt: string, weight: number, chapters: number[], baseRel: {type: string, typeZh: string}): {type: string, typeZh: string} {
  const s = charInfo(src);
  const t = charInfo(tgt);
  if (!s || !t) return baseRel;
  
  // Key character-specific refinements
  
  // Yan Zhongqing (char-2) relationships
  if (src === 'char-2' || tgt === 'char-2') {
    const other = src === 'char-2' ? tgt : src;
    if (other === 'char-23') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-24') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-25') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-55') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-72') return { type: 'Adversary', typeZh: '死敌宿仇' };
    if (other === 'char-73') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-75') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-53') return { type: 'Social Friend', typeZh: '交游朋友' };
    if (other === 'char-29') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-28') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-40') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-150') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-142') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-141') return { type: 'Literary Peer', typeZh: '同好文人' };
    if (other === 'char-134') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-153') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-30') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-42') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-26') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-27') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-31') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-17') return { type: 'Literary Peer', typeZh: '同好文人' };
    if (other === 'char-47') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-49') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-154') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-143') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-197') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
  }
  
  // Shi Nanxiang (char-3) relationships
  if (src === 'char-3' || tgt === 'char-3') {
    const other = src === 'char-3' ? tgt : src;
    if (other === 'char-23') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-24') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-55') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-72') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-73') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-53') return { type: 'Social Friend', typeZh: '交游朋友' };
    if (other === 'char-29') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-55') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-75') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-142') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-42') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-26') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-27') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-30') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-31') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-49') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-47') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-17') return { type: 'Literary Peer', typeZh: '同好文人' };
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-86') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-89') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-153') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-141') return { type: 'Literary Peer', typeZh: '同好文人' };
  }
  
  // Wang Xun (char-4)
  if (src === 'char-4' || tgt === 'char-4') {
    const other = src === 'char-4' ? tgt : src;
    if (other === 'char-23') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-24') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-25') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-55') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-72') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-73') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-75') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-29') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-53') return { type: 'Social Friend', typeZh: '交游朋友' };
    if (other === 'char-30') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-42') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-26') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-27') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-31') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-47') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-17') return { type: 'Literary Peer', typeZh: '同好文人' };
    if (other === 'char-142') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-141') return { type: 'Literary Peer', typeZh: '同好文人' };
    if (other === 'char-153') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-40') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-150') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-90') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-154') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-33') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-137') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-143') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
  }
  
  // Xu Ziyun (char-7) - generous patron
  if (src === 'char-7' || tgt === 'char-7') {
    const other = src === 'char-7' ? tgt : src;
    if (other === 'char-24') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-25') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-55') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-72') return { type: 'Adversary', typeZh: '死敌宿仇' };
    if (other === 'char-73') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-75') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-53') return { type: 'Social Friend', typeZh: '交游朋友' };
    if (other === 'char-29') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-28') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-26') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-27') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-31') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-42') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-47') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-141') return { type: 'Literary Peer', typeZh: '同好文人' };
    if (other === 'char-142') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-143') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-153') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-17') return { type: 'Literary Peer', typeZh: '同好文人' };
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-137') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-152') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-135') return { type: 'Literary Peer', typeZh: '同好文人' };
    if (other === 'char-134') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-154') return { type: 'Family/Household', typeZh: '家属/内眷' };
  }
  
  // Xiao Cixian (char-8) - Xu Ziyun's closest friend
  if (src === 'char-8' || tgt === 'char-8') {
    const other = src === 'char-8' ? tgt : src;
    if (other === 'char-23') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-24') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-25') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-55') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-72') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-53') return { type: 'Social Friend', typeZh: '交游朋友' };
    if (other === 'char-29') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-28') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-42') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-26') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-27') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-30') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-31') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-73') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-75') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-47') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-49') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-141') return { type: 'Literary Peer', typeZh: '同好文人' };
    if (other === 'char-142') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-17') return { type: 'Literary Peer', typeZh: '同好文人' };
    if (other === 'char-152') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-134') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-135') return { type: 'Literary Peer', typeZh: '同好文人' };
    if (other === 'char-153') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-40') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-150') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-89') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-197') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
  }

  // Liu Wenze (char-9)
  if (src === 'char-9' || tgt === 'char-9') {
    const other = src === 'char-9' ? tgt : src;
    if (other === 'char-23') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-24') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-25') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-55') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-72') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-53') return { type: 'Social Friend', typeZh: '交游朋友' };
    if (other === 'char-29') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-28') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-42') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-26') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-27') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-30') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-31') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-73') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-75') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-47') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-49') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-142') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-141') return { type: 'Literary Peer', typeZh: '同好文人' };
    if (other === 'char-17') return { type: 'Literary Peer', typeZh: '同好文人' };
    if (other === 'char-40') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-153') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-134') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-154') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-147') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-197') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
  }
  
  // Hua Guangsu (char-55) - villain/noble
  if (src === 'char-55' || tgt === 'char-55') {
    const other = src === 'char-55' ? tgt : src;
    if (other === 'char-23') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-24') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-25') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-72') return { type: 'Villainous Associate', typeZh: '狐朋狗友' };
    if (other === 'char-73') return { type: 'Villainous Associate', typeZh: '狐朋狗友' };
    if (other === 'char-75') return { type: 'Villainous Associate', typeZh: '狐朋狗友' };
    if (other === 'char-29') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-28') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-42') return { type: 'Owner & Companion', typeZh: '主人与伴侣' };
    if (other === 'char-53') return { type: 'Social Friend', typeZh: '交游朋友' };
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-47') return { type: 'Official & Noble', typeZh: '官员与侯门' };
    if (other === 'char-48') return { type: 'Official & Noble', typeZh: '官员与侯门' };
    if (other === 'char-141') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-142') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-135') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-134') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-150') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-94') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-40') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-30') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-26') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-27') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-31') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-17') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-154') return { type: 'Family/Household', typeZh: '家属/内眷' };
  }
  
  // Xi Shiyi (char-72) - primary villain
  if (src === 'char-72' || tgt === 'char-72') {
    const other = src === 'char-72' ? tgt : src;
    if (other === 'char-23') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-25') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-29') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-28') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-53') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-55') return { type: 'Villainous Associate', typeZh: '狐朋狗友' };
    if (other === 'char-47') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-141') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-42') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-30') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-31') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-26') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-135') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-17') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-137') return { type: 'Intimate Companion', typeZh: '亲密伴侣' };
    if (other === 'char-49') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-142') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-119') return { type: 'Master & Servant', typeZh: '主仆/雇佣' };
    if (other === 'char-152') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-147') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-134') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
  }
  
  // Tian Chunhang (char-15)
  if (src === 'char-15' || tgt === 'char-15') {
    const other = src === 'char-15' ? tgt : src;
    if (other === 'char-23') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-24') return { type: 'Soulmate', typeZh: '情定知己' };
    if (other === 'char-55') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-72') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-73') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-53') return { type: 'Social Friend', typeZh: '交游朋友' };
    if (other === 'char-29') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-28') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-42') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-26') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-27') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-31') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-75') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-47') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-49') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-62') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-141') return { type: 'Literary Peer', typeZh: '同好文人' };
    if (other === 'char-142') return { type: 'Father-in-law/Son-in-law', typeZh: '翁婿' };
    if (other === 'char-153') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-137') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-40') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-150') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-154') return { type: 'Marriage', typeZh: '夫妻' };
    if (other === 'char-94') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-197') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-134') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-89') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-33') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
  }
  
  // Fu Lun (char-53) - generous patron
  if (src === 'char-53' || tgt === 'char-53') {
    const other = src === 'char-53' ? tgt : src;
    if (other === 'char-23') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-24') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-25') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-29') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-28') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-42') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-73') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-47') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-141') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-30') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-26') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-27') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-31') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
  }
  
  // Gao Pin (char-10) - witty scholar
  if (src === 'char-10' || tgt === 'char-10') {
    const other = src === 'char-10' ? tgt : src;
    if (other === 'char-23') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-24') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-25') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-55') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-72') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-73') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-29') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-53') return { type: 'Social Friend', typeZh: '交游朋友' };
    if (other === 'char-42') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-26') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-30') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-31') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-47') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-141') return { type: 'Literary Peer', typeZh: '同好文人' };
    if (other === 'char-142') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-137') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-153') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-40') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-150') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-154') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-94') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-17') return { type: 'Literary Peer', typeZh: '同好文人' };
    if (other === 'char-89') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-75') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
  }
  
  // Yuan Baozhu (char-23) - top performer
  if (src === 'char-23' || tgt === 'char-23') {
    const other = src === 'char-23' ? tgt : src;
    if (other === 'char-29') return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
    if (other === 'char-28') return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
    if (other === 'char-42') return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
    if (other === 'char-30') return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
    if (other === 'char-31') return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
    if (other === 'char-73') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-75') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-56') return { type: 'Troupe Master/Performer', typeZh: '班主与伶人' };
    if (other === 'char-47') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-48') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-49') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-62') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-141') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-142') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-143') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-33') return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
    if (other === 'char-136') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-137') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-153') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-86') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-17') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-152') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-134') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-119') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-89') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
  }
  
  // Su Huifang (char-24) - principled performer
  if (src === 'char-24' || tgt === 'char-24') {
    const other = src === 'char-24' ? tgt : src;
    if (other === 'char-29') return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
    if (other === 'char-28') return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
    if (other === 'char-42') return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
    if (other === 'char-30') return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
    if (other === 'char-31') return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
    if (other === 'char-73') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-75') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-47') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-48') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-49') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-62') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-141') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-142') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-33') return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
    if (other === 'char-136') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-138') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-137') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-153') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-86') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-143') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-17') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-152') return { type: "Troupe Master's Family", typeZh: '师门眷属' };
    if (other === 'char-134') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-119') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-94') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-147') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-89') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
  }
  
  // Lu Sulan (char-25) - talented performer
  if (src === 'char-25' || tgt === 'char-25') {
    const other = src === 'char-25' ? tgt : src;
    if (other === 'char-29') return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
    if (other === 'char-42') return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
    if (other === 'char-30') return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
    if (other === 'char-31') return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-47') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-48') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-49') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-141') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-142') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-135') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-33') return { type: 'Theatrical Colleague', typeZh: '同台伶人' };
    if (other === 'char-137') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-152') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-134') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-17') return { type: 'Patron & Performer', typeZh: '名士与伶人' };
    if (other === 'char-143') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-153') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-89') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-90') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-40') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-95') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-119') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
  }
  
  // Lady Yan (char-86) - moral guardian
  if (src === 'char-86' || tgt === 'char-86') {
    const other = src === 'char-86' ? tgt : src;
    if (other === 'char-55') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-72') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-73') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-141') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-153') return { type: 'Female Companion', typeZh: '闺阁女伴' };
    if (other === 'char-40') return { type: 'Female Companion', typeZh: '闺阁女伴' };
    if (other === 'char-150') return { type: 'Female Companion', typeZh: '闺阁女伴' };
    if (other === 'char-62') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-154') return { type: 'Female Companion', typeZh: '闺阁女伴' };
    if (other === 'char-142') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-53') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-17') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-134') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-135') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-145') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-137') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-94') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
  }
  
  // Pan Qiguan (char-73) - villain
  if (src === 'char-73' || tgt === 'char-73') {
    const other = src === 'char-73' ? tgt : src;
    if (other === 'char-53') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-47') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-141') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-29') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-28') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-42') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-30') return { type: 'Antagonistic Tie', typeZh: '结怨/算计' };
    if (other === 'char-137') return { type: 'Villainous Associate', typeZh: '狐朋狗友' };
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-119') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-147') return { type: 'Master & Servant', typeZh: '主仆/雇佣' };
  }
  
  // Mei Shixie (char-47) - Ziyu's father
  if (src === 'char-47' || tgt === 'char-47') {
    const other = src === 'char-47' ? tgt : src;
    if (other === 'char-23') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-24') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-25') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-29') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-28') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-53') return { type: 'Official Colleague', typeZh: '同朝为官' };
    if (other === 'char-42') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-141') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-134') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-142') return { type: 'Official Colleague', typeZh: '同朝为官' };
    if (other === 'char-62') return { type: 'Official Colleague', typeZh: '同朝为官' };
    if (other === 'char-63') return { type: 'Official Colleague', typeZh: '同朝为官' };
    if (other === 'char-153') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-40') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-89') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-90') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-30') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-17') return { type: 'Official & Scholar', typeZh: '官员与名士' };
  }
  
  // Wang Wenhui (char-48) - official
  if (src === 'char-48' || tgt === 'char-48') {
    const other = src === 'char-48' ? tgt : src;
    if (other === 'char-23') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-24') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-25') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-29') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-28') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-53') return { type: 'Official Colleague', typeZh: '同朝为官' };
    if (other === 'char-42') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-141') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-142') return { type: 'Official Colleague', typeZh: '同朝为官' };
    if (other === 'char-153') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-40') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-30') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-56') return { type: 'Social Acquaintance', typeZh: '泛泛之交' };
    if (other === 'char-17') return { type: 'Official & Scholar', typeZh: '官员与名士' };
    if (other === 'char-31') return { type: 'Official & Performer', typeZh: '官员与伶人' };
    if (other === 'char-90') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-154') return { type: 'Family/Household', typeZh: '家属/内眷' };
    if (other === 'char-150') return { type: 'Family/Household', typeZh: '家属/内眷' };
  }
  
  return baseRel;
}

// Generate all missing relationships
const newRels: Array<{source: string, target: string, type: string, typeZh: string}> = [];

for (const [key, edge] of edgeMap) {
  if (existingPairs.has(key)) continue;
  
  let rel = determineRelationship(edge.source, edge.target, edge.weight, edge.chapters);
  if (!rel) continue;
  
  // Apply refinements for specific character combinations
  rel = refineRelationship(edge.source, edge.target, edge.weight, edge.chapters, rel);
  
  newRels.push({
    source: edge.source,
    target: edge.target,
    type: rel.type,
    typeZh: rel.typeZh,
  });
}

// Output as TypeScript code
console.log(`// === NEW RELATIONSHIPS (${newRels.length} entries) ===`);
console.log(`// Generated from co-occurrence analysis (weight >= 3)`);
for (const rel of newRels) {
  console.log(`  { source: '${rel.source}', target: '${rel.target}', type: '${rel.type}', typeZh: '${rel.typeZh}' },`);
}
