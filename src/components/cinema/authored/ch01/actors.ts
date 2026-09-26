import { CAST, VERMILION, type FigureSpec } from '../../stage/figure';
import type { Held } from '../../stage/performance';

/**
 * The eight performers of Shi Nanxiang's 《花选》 (Chapter 1, paragraphs 13–34): how each appears in
 * costume, what each holds, and the particulars their entries give. Shared by those paragraphs'
 * cinemas, so each actor looks the same from film to film.
 */
export type Actor = {
  /** 袁宝珠 */
  name: string;
  /** The four-character emblem of the entry, e.g. 琼楼珠树. */
  emblem: string;
  facts: string[];
  seal: string;
  /** In costume on stage. */
  costume: FigureSpec;
  /** In everyday dress. */
  plain: FigureSpec;
  held: Held;
};

const dan = (robe: number, jacket: number, sash = VERMILION): FigureSpec => ({ ...CAST.dan, robe, jacket, sash });
const youth = (robe: number, jacket: number): FigureSpec => ({ ...CAST.youth, robe, jacket });

export const ACTORS = {
  // 琼楼珠树: dances the 《霓裳》, sleeves raised.
  baozhu: { name: '袁宝珠', emblem: '琼楼珠树', facts: ['年十六', '姑苏人', '联锦部'], seal: '宝珠', costume: dan(0xf4f0e8, 0xe6e0d6), plain: youth(0xece7de, 0xc9c2b7), held: 'fan' },
  // 瑶台璧月: an official's son of integrity; poised with a fan.
  huifang: { name: '苏蕙芳', emblem: '瑶台璧月', facts: ['年十七', '姑苏人', '联锦部'], seal: '蕙芳', costume: dan(0xe6e0d6, 0xb9b2a8), plain: youth(0xd6d0c6, 0x8c857c), held: 'fan' },
  // 碧海珊枝: Yang Guifei dancing on the tray.
  sulan: { name: '陆素兰', emblem: '碧海珊枝', facts: ['年十六', '姑苏人', '联锦部'], seal: '素兰', costume: dan(0xf0ebe2, 0xcfc8bc), plain: youth(0xe6e0d6, 0xa39b91), held: 'brush' },
  // 嵰山艳雪: plays the flute.
  shufang: { name: '金漱芳', emblem: '嵰山艳雪', facts: ['年十五', '姑苏人', '联珠部'], seal: '漱芳', costume: dan(0xf4f0e8, 0xd6d0c6, 0x8c857c), plain: youth(0xf0ebe2, 0xb9b2a8), held: 'flute' },
  // 玉树临风: famous for 《折柳阳关》, a willow branch in hand.
  yulin: { name: '李玉林', emblem: '玉树临风', facts: ['年十五', '扬州人', '联珠部'], seal: '玉林', costume: dan(0xe6e0d6, 0x9c958b), plain: youth(0xd6d0c6, 0x9c958b), held: 'willow' },
  // 火树银花: martial roles, a sword in hand and plumes on the helmet.
  lanbao: { name: '王兰保', emblem: '火树银花', facts: ['年十七', '扬州人', '联锦部'], seal: '兰保', costume: { ...dan(0x6e675f, 0x3f3a35), headwear: 'helmet', waterSleeves: false, cut: 'robe' }, plain: youth(0x8c857c, 0x4a443e), held: 'sword' },
  // 秋水芙蓉: playful, with the ivory clappers.
  guibao: { name: '王桂保', emblem: '秋水芙蓉', facts: ['年十五', '兰保弟', '联锦部'], seal: '桂保', costume: dan(0xf0ebe2, 0xd6d0c6), plain: youth(0xe6e0d6, 0xb9b2a8), held: 'clappers' },
  // 天上玉麟: the youngest; holds the incense burner "waiting upon the Jade Emperor".
  chunxi: { name: '林春喜', emblem: '天上玉麟', facts: ['年十四', '姑苏人', '联锦部'], seal: '春喜', costume: { ...dan(0xf4f0e8, 0xe6e0d6), height: 1.5 }, plain: { ...youth(0xf0ebe2, 0xc9c2b7), height: 1.48 }, held: 'censer' },
} satisfies Record<string, Actor>;

/**
 * The two boys in the cart Ziyu passes (paragraphs 52–56), later known as 琴官 Qinguan, the peerless
 * one, and 琪官 Qiguan, "like a crabapple blossom": plain blue crepe fur coats under dark riding
 * jackets. Chapter 2 uses them too.
 */
export const BOYS = {
  qinguan: { ...CAST.youth, robe: 0xf4f0e8, jacket: 0x3f3a35, fur: true, face: 'fine', rouge: true, height: 1.58 } as FigureSpec,
  qiguan: { ...CAST.youth, robe: 0xf0ebe2, jacket: 0x5a534c, fur: true, face: 'fine', rouge: true, height: 1.52 } as FigureSpec,
  /** 叶茂林 Ye Maolin, the troupe master, past fifty. */
  master: { ...CAST.elder, beard: 'full', white: false, robe: 0x6e675f, jacket: 0x3f3a35, fur: true } as FigureSpec,
};
