import { getCoOccurrenceEdges } from '../src/cooccurrence';
import { characters, relationships } from '../src/data';

const charMap = new Map(characters.map(c => [c.id, c]));
const edges = getCoOccurrenceEdges().filter(e => e.weight >= 8);

console.log(`Analyzing ${edges.length} edges with co-occurrence >= 8...`);

// Let's create specific mapping rules based on character IDs and roles
interface Spec {
  source: string;
  target: string;
  type: string;
  typeZh: string;
}

const refinedSpecs: Spec[] = [];

// Helper to find character
const getC = (id: string) => charMap.get(id);

for (const edge of edges) {
  const c1 = getC(edge.source);
  const c2 = getC(edge.target);
  if (!c1 || !c2) continue;

  const id1 = edge.source;
  const id2 = edge.target;

  // Let's match specific pairs by ID or character patterns
  let spec: { type: string; typeZh: string } | null = null;

  // Protagonist core
  if ((id1 === 'char-0' && id2 === 'char-1') || (id1 === 'char-1' && id2 === 'char-0')) {
    spec = { type: 'Platonic Soulmates', typeZh: '精神知己与生死契' };
  } else if ((id1 === 'char-0' && id2 === 'char-2') || (id1 === 'char-2' && id2 === 'char-0')) {
    spec = { type: 'Chivalrous Cousin-Friend', typeZh: '侠义表兄与文会同道' };
  } else if ((id1 === 'char-0' && id2 === 'char-4') || (id1 === 'char-4' && id2 === 'char-0')) {
    spec = { type: 'Maternal Cousin & Opera Host', typeZh: '表兄弟与戏曲文席同好' };
  } else if ((id1 === 'char-0' && id2 === 'char-7') || (id1 === 'char-7' && id2 === 'char-0')) {
    spec = { type: 'Yiyuan Salon Host & Guest', typeZh: '怡园雅集主宾与艺术知音' };
  } else if ((id1 === 'char-0' && id2 === 'char-23') || (id1 === 'char-23' && id2 === 'char-0')) {
    spec = { type: 'Literary Confidant & Performer', typeZh: '清高琴友与画中知音' };
  } else if ((id1 === 'char-0' && id2 === 'char-55') || (id1 === 'char-55' && id2 === 'char-0')) {
    spec = { type: 'Romantic Rival & Aristocratic Antagonist', typeZh: '夺琴之仇与贵戚宿敌' };
  } else if ((id1 === 'char-0' && id2 === 'char-72') || (id1 === 'char-72' && id2 === 'char-0')) {
    spec = { type: 'Persecutor of Qinyan & Depraved Merchant', typeZh: '逼迫琴言之市井恶少' };
  } else if ((id1 === 'char-0' && id2 === 'char-5') || (id1 === 'char-5' && id2 === 'char-0')) {
    spec = { type: 'Parasitic Guest & Household Gossip', typeZh: '寄居造谣与家庭嫌隙' };
  } else if ((id1 === 'char-0' && id2 === 'char-90') || (id1 === 'char-90' && id2 === 'char-0')) {
    spec = { type: 'Betrothed Spouse & Literary Partner', typeZh: '诗文缔姻与正室伉俪' };
  } else if ((id1 === 'char-0' && id2 === 'char-86') || (id1 === 'char-86' && id2 === 'char-0')) {
    spec = { type: 'Protective Mother & Son', typeZh: '道德守护慈母与顺从子' };
  } else if ((id1 === 'char-0' && id2 === 'char-47') || (id1 === 'char-47' && id2 === 'char-0')) {
    spec = { type: 'Strict Confucian Father & Son', typeZh: '翰林严父与功名期望' };
  }

  // Tian Chunhang & Su Huifang
  else if ((id1 === 'char-15' && id2 === 'char-24') || (id1 === 'char-24' && id2 === 'char-15')) {
    spec = { type: 'Romantic Soulmates & Exam Laureate', typeZh: '情投意合与状元知己' };
  }
  // Shi Nanxiang & Lu Sulan
  else if ((id1 === 'char-3' && id2 === 'char-25') || (id1 === 'char-25' && id2 === 'char-3')) {
    spec = { type: 'Passionate Lover & Calligraphy Confidant', typeZh: '痴情金兰与书法知己' };
  }
  // Xu Ziyun & Du Qinyan
  else if ((id1 === 'char-7' && id2 === 'char-1') || (id1 === 'char-1' && id2 === 'char-7')) {
    spec = { type: 'Redeemer Patron & Mentor', typeZh: '重金赎身恩主与艺术知己' };
  }
  // Xu Ziyun & Yuan Baozhu
  else if ((id1 === 'char-7' && id2 === 'char-23') || (id1 === 'char-23' && id2 === 'char-7')) {
    spec = { type: 'Yiyuan Patron & Flower Champion', typeZh: '怡园主人与花榜状元知音' };
  }
  // Xu Ziyun & Xiao Cixian
  else if ((id1 === 'char-7' && id2 === 'char-8') || (id1 === 'char-8' && id2 === 'char-7')) {
    spec = { type: 'Yiyuan Designers & Polymath Intimates', typeZh: '怡园营造同道与莫逆之交' };
  }
  // Du Qinyan & Lu Sulan
  else if ((id1 === 'char-1' && id2 === 'char-25') || (id1 === 'char-25' && id2 === 'char-1')) {
    spec = { type: 'Loyal Allies in Qinyan Redemption', typeZh: '苦心促成重逢之盟友' };
  }
  // Du Qinyan & Su Huifang
  else if ((id1 === 'char-1' && id2 === 'char-24') || (id1 === 'char-24' && id2 === 'char-1')) {
    spec = { type: 'High-Principled Allies & Redemption Strategists', typeZh: '机智助赎身之同道' };
  }
  // Yuan Baozhu & Lu Sulan
  else if ((id1 === 'char-23' && id2 === 'char-25') || (id1 === 'char-25' && id2 === 'char-23')) {
    spec = { type: 'Top Flower Rank Performers', typeZh: '花榜状元探花与画艺文友' };
  }
  // Jin Shufang & Li Yulin
  else if ((id1 === 'char-26' && id2 === 'char-27') || (id1 === 'char-27' && id2 === 'char-26')) {
    spec = { type: 'Lianzhu Troupe Musicians', typeZh: '联珠班笛师与乐艺琴友' };
  }
  // Hua Guangsu & Du Qinyan
  else if ((id1 === 'char-55' && id2 === 'char-1') || (id1 === 'char-1' && id2 === 'char-55')) {
    spec = { type: 'Captor & Forcible Abduction Victim', typeZh: '强纳锦春园之霸占与受害者' };
  }
  // Xi Shiyi & Du Qinyan
  else if ((id1 === 'char-72' && id2 === 'char-1') || (id1 === 'char-1' && id2 === 'char-72')) {
    spec = { type: 'Depraved Merchant Harasser & Victim', typeZh: '纠缠逼迫之恶少与受害者' };
  }
  // Wei Pincai & Du Qinyan
  else if ((id1 === 'char-5' && id2 === 'char-1') || (id1 === 'char-1' && id2 === 'char-5')) {
    spec = { type: 'Scheming Hanger-on & Victim', typeZh: '利诱陷害与同路受害者' };
  }
  // Wei Pincai & Xi Shiyi
  else if ((id1 === 'char-5' && id2 === 'char-72') || (id1 === 'char-72' && id2 === 'char-5')) {
    spec = { type: 'Sycophantic Cronies & Opium/Gambling Partners', typeZh: '附势帮凶与烟赌同恶' };
  }
  // Wei Pincai & Hua Guangsu
  else if ((id1 === 'char-5' && id2 === 'char-55') || (id1 === 'char-55' && id2 === 'char-5')) {
    spec = { type: 'Sycophantic Parasite & Noble Patron', typeZh: '投机附势与奢靡公府' };
  }
  // Hua Guangsu & Xi Shiyi
  else if ((id1 === 'char-55' && id2 === 'char-72') || (id1 === 'char-72' && id2 === 'char-55')) {
    spec = { type: 'Dissolute Noble & Depraved Merchant Allies', typeZh: '纨绔侯门与广东富商恶少' };
  }
  // Pan Qiguan & Xi Shiyi
  else if ((id1 === 'char-73' && id2 === 'char-72') || (id1 === 'char-72' && id2 === 'char-73')) {
    spec = { type: 'Silver Bureau Henchman & Crony', typeZh: '起盛银号帮凶与恶少同党' };
  }
  // Tang Heshang & Xi Shiyi
  else if ((id1 === 'char-75' && id2 === 'char-72') || (id1 === 'char-72' && id2 === 'char-75')) {
    spec = { type: 'Dissolute Monk & Opium Den Partners', typeZh: '宏济寺酒肉和尚与烟赌同伙' };
  }
  // Liu Wenze & Xu Ziyun
  else if ((id1 === 'char-9' && id2 === 'char-7') || (id1 === 'char-7' && id2 === 'char-9')) {
    spec = { type: 'Banquet Host & Yiyuan Patron', typeZh: '侍郎之子与怡园主客' };
  }
  // Gao Pin & Yan Zhongqing
  else if ((id1 === 'char-10' && id2 === 'char-2') || (id1 === 'char-2' && id2 === 'char-10')) {
    spec = { type: 'Witty Tribute Student & Hongji Temple Peer', typeZh: '鸿济寺幽默拔贡与戏考同好' };
  }
  // Zhang Zhongyu & Yuan Qiguan
  else if ((id1 === 'char-11' && id2 === 'char-31') || (id1 === 'char-31' && id2 === 'char-11')) {
    spec = { type: 'Grand Secretary Nephew & Opera Patron', typeZh: '阁学之侄与名伶追捧者' };
  }
  // Jin Jifu & Mei Ziyu
  else if ((id1 === 'char-17' && id2 === 'char-0') || (id1 === 'char-0' && id2 === 'char-17')) {
    spec = { type: 'Senior Literary Arbiter & Historian', typeZh: '文坛耆宿与结语名士' };
  }
  // Qu Daoweng & Du Qinyan
  else if ((id1 === 'char-141' && id2 === 'char-1') || (id1 === 'char-1' && id2 === 'char-141')) {
    spec = { type: 'Adoptive Father & Spiritual Master', typeZh: '屈道翁义父与琴仙宗师' };
  }
  // Cao Changqing & Du Qinyan
  else if ((id1 === 'char-56' && id2 === 'char-1') || (id1 === 'char-1' && id2 === 'char-56')) {
    spec = { type: 'Troupe Master & Star Apprentice', typeZh: '师傅与摇钱树徒弟' };
  }
  // Li Yuanmao & Sun Family
  else if ((id1 === 'char-6' && id2 === 'char-21') || (id1 === 'char-21' && id2 === 'char-6')) {
    spec = { type: 'Comic Targets & Matrilocal In-Laws', typeZh: '东园笑柄与招赘姻亲' };
  }
  // Sun Lianggong & Sun Sons
  else if ((id1 === 'char-49' && id2 === 'char-21') || (id1 === 'char-21' && id2 === 'char-49')) {
    spec = { type: 'Ministry Official Father & Pedantic Son', typeZh: '工部官员与迂腐长子' };
  }
  // Yun'er & Mei Ziyu
  else if ((id1 === 'char-102' && id2 === 'char-0') || (id1 === 'char-0' && id2 === 'char-102')) {
    spec = { type: 'Message-Carrying Page & Master', typeZh: '骑马传信小厮' };
  }
  // Fu Lun & Rongguan
  else if ((id1 === 'char-53' && id2 === 'char-32') || (id1 === 'char-32' && id2 === 'char-53')) {
    spec = { type: 'Imperial Household Patron & Young Performer', typeZh: '热心出资赞助之恩主' };
  }
  // Xu Sanjie & Pan Qiguan
  else if ((id1 === 'char-94' && id2 === 'char-73') || (id1 === 'char-73' && id2 === 'char-94')) {
    spec = { type: 'Mastermind of Revenge & Harassed Merchant', typeZh: '计惩潘三之泼辣女杰' };
  }

  // Generic Role-Pair Fallbacks for remaining cooc >= 8 pairs
  if (!spec) {
    const r1 = c1.role;
    const r2 = c2.role;

    if (r1 === 'scholar' && r2 === 'scholar') {
      spec = { type: 'Yiyuan Salon Scholar Peers', typeZh: '怡园雅集同道文人' };
    } else if ((r1 === 'scholar' && r2 === 'performer') || (r1 === 'performer' && r2 === 'scholar')) {
      spec = { type: 'Literary Patron & Opera Performer', typeZh: '雅集名士与应酬名伶' };
    } else if ((r1 === 'scholar' && r2 === 'villain') || (r1 === 'villain' && r2 === 'scholar')) {
      spec = { type: 'Literary Circle & Parasitic Villain', typeZh: '雅集名士与投机恶少' };
    } else if (r1 === 'performer' && r2 === 'performer') {
      spec = { type: 'Troupe Performers & Flower Rank Peers', typeZh: '花榜名伶与同台场友' };
    } else if ((r1 === 'performer' && r2 === 'villain') || (r1 === 'villain' && r2 === 'performer')) {
      spec = { type: 'Harassed Performer & Entangled Villain', typeZh: '名伶与纠缠市井恶少' };
    } else if (r1 === 'villain' && r2 === 'villain') {
      spec = { type: 'Sycophantic Cronies & Opium Partners', typeZh: '投机帮凶与烟赌恶少' };
    } else if ((r1 === 'official' && r2 === 'scholar') || (r1 === 'scholar' && r2 === 'official')) {
      spec = { type: 'Imperial Official & Salon Scholar', typeZh: '朝廷官员与京师名士' };
    } else if ((r1 === 'official' && r2 === 'performer') || (r1 === 'performer' && r2 === 'official')) {
      spec = { type: 'High Official & Opera Patron', typeZh: '高官达贵与堂名戏子' };
    } else if ((r1 === 'servant' && r2 === 'scholar') || (r1 === 'scholar' && r2 === 'servant')) {
      spec = { type: 'Household Retainer & Scholar Master', typeZh: '府上跟班与京师名士' };
    } else if ((r1 === 'female' && r2 === 'scholar') || (r1 === 'scholar' && r2 === 'female')) {
      spec = { type: 'Inner Household Lady & Scholar Cousin', typeZh: '闺阁内眷与文人表亲' };
    } else if ((r1 === 'female' && r2 === 'female')) {
      spec = { type: 'Inner Household Ladies & Relatives', typeZh: '闺阁夫人与亲眷女伴' };
    } else if ((r1 === 'female' && r2 === 'performer') || (r1 === 'performer' && r2 === 'female')) {
      spec = { type: 'Inner Household Lady & Invited Actor', typeZh: '内宅主母与受邀名伶' };
    } else {
      spec = { type: 'Shared Chapter Co-presence', typeZh: '同回目场景交集' };
    }
  }

  refinedSpecs.push({
    source: id1,
    target: id2,
    type: spec.type,
    typeZh: spec.typeZh
  });
}

console.log(`Generated ${refinedSpecs.length} refined specs.`);
