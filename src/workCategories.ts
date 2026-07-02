import { worksData } from './utils';

// Logical grouping for the Works Cited index. Categories are assigned in
// three layers: (1) a curated list for well-known titles, (2) keyword rules
// over the Chinese description for annotated works, (3) a fallback to
// 'opera' — in Pinhua Baojian the overwhelming majority of bare 《…》
// citations are performed zhezixi scene titles.
export type WorkCategory =
  | 'opera'
  | 'registers'
  | 'poetry'
  | 'classics'
  | 'fiction';

export const WORK_CATEGORY_ORDER: WorkCategory[] = [
  'opera',
  'registers',
  'poetry',
  'classics',
  'fiction',
];

export const WORK_CATEGORY_LABELS: Record<
  WorkCategory,
  { en: string; zh: string }
> = {
  opera: { en: 'Operas & Performed Scenes', zh: '戏曲剧目与散出' },
  registers: { en: 'Flower Registers & Connoisseurship', zh: '花谱与品鉴' },
  poetry: { en: 'Poetry & Verse', zh: '诗词歌赋' },
  classics: { en: 'Classics, Histories & Reference', zh: '经史典籍' },
  fiction: { en: 'Fiction', zh: '小说说部' },
};

const CURATED: Record<string, WorkCategory> = {
  // Flower registers & connoisseurship
  花谱: 'registers',
  花选: 'registers',
  曲台花选: 'registers',
  曲台花谱: 'registers',
  仙中和品: 'registers',
  // Fiction
  品花宝鉴: 'fiction',
  水浒传: 'fiction',
  水浒: 'fiction',
  西游记: 'fiction',
  三国演义: 'fiction',
  三国志演义: 'fiction',
  红楼梦: 'fiction',
  石头记: 'fiction',
  金瓶梅: 'fiction',
  聊斋志异: 'fiction',
  怡情佚史: 'fiction',
  // Classics, histories & reference
  孟子: 'classics',
  论语: 'classics',
  大学: 'classics',
  中庸: 'classics',
  四书: 'classics',
  五经: 'classics',
  易经: 'classics',
  周易: 'classics',
  礼记: 'classics',
  周礼: 'classics',
  仪礼: 'classics',
  春秋: 'classics',
  左传: 'classics',
  尚书: 'classics',
  书经: 'classics',
  尔雅: 'classics',
  说文: 'classics',
  说文解字: 'classics',
  史记: 'classics',
  汉书: 'classics',
  后汉书: 'classics',
  晋书: 'classics',
  图书集成: 'classics',
  古今图书集成: 'classics',
  康熙字典: 'classics',
  佩文韵府: 'classics',
  事类赋: 'classics',
  庄子: 'classics',
  老子: 'classics',
  道德经: 'classics',
  山海经: 'classics',
  // Poetry & verse
  诗经: 'poetry',
  毛诗: 'poetry',
  国风: 'poetry',
  楚辞: 'poetry',
  楚词: 'poetry',
  离骚: 'poetry',
  唐诗: 'poetry',
  长恨歌: 'poetry',
  琵琶行: 'poetry',
  赤壁赋: 'poetry',
  宫词: 'poetry',
};

const GENERIC_DESC_EN =
  'A literary work, opera scene, or book cited in Pinhua Baojian.';

const RULES: Array<{ category: WorkCategory; re: RegExp }> = [
  { category: 'registers', re: /花谱|品花|品鉴|名旦|品评/ },
  {
    category: 'opera',
    re: /折子戏|戏曲|昆曲|杂剧|剧目|剧作|京剧|皮黄|梆子|弋阳|唱段|散出|全本|一出|一折|演出|剧本|南戏|花部|雅部|传奇/,
  },
  {
    category: 'poetry',
    re: /诗|词牌|乐府|辞赋|骈文|绝句|律诗|歌行|散曲|曲牌|一首/,
  },
  { category: 'fiction', re: /小说|章回|话本|笔记/ },
  {
    category: 'classics',
    re: /儒家|经典|经书|史书|正史|历史著作|典籍|字书|韵书|类书|辞书|佛经|道教|注疏|论著|礼制|兵书|医书|文集|文选/,
  },
];

/** Category for a work key (Chinese title without 《》). */
export function categorizeWork(key: string): WorkCategory {
  const curated = CURATED[key];
  if (curated) return curated;
  const data = worksData[key];
  if (data && data.descEn !== GENERIC_DESC_EN && data.descZh) {
    for (const rule of RULES) {
      if (rule.re.test(data.descZh)) return rule.category;
    }
  }
  return 'opera';
}
