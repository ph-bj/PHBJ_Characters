import { CAST, type FigureSpec } from '../../stage/figure';
import { MASTER, XU_SHUN } from '../ch02/actors';

/**
 * Chapter 3's cast as the cinemas show them: Pincai's day at the theatre, the jade peddler, Fu the
 * Third and Gui Fen, the dan Rongguan, and the Cantonese plutocrat Xi the Eleventh with Chunlan.
 */
export const PINCAI: FigureSpec = CAST.pincai;
export { XU_SHUN };
/** 四儿 Si'er, Pincai's boy. */
export const SI_ER: FigureSpec = { ...CAST.page, robe: 0x9c958b };
/** 叶茂林 Ye Maolin, the troupe master from the boat. */
export const YE_MAOLIN: FigureSpec = MASTER;
/** 金二 Jin the Second, the troupe's manager: pale, fat, smooth. */
export const JIN_ER: FigureSpec = { ...CAST.merchant, skin: 0xf6f0e6, face: 'plain', girth: 1.5, robe: 0x8c857c, jacket: 0x4a443e };
/** 富三 Fu Lun, Fu the Third: stout, hearty, a fur-trimmed jacket. */
export const FU_SAN: FigureSpec = { headwear: 'cap', robe: 0x6e675f, jacket: 0x3f3a35, fur: true, face: 'coarse', girth: 1.6, height: 1.7 };
/** 贵芬 Gui Fen: dark, lean, a sparse beard, careful. */
export const GUI_FEN: FigureSpec = { headwear: 'cap', robe: 0x5a534c, jacket: 0x2f2a26, face: 'plain', beard: 'whiskers', girth: 0.8, height: 1.72, skin: 0xcfc2b2 };
/** 蓉官 Rongguan: fifteen or sixteen, a melon-seed face, dimples, a gold ring in one ear. */
export const RONGGUAN: FigureSpec = { ...CAST.youth, robe: 0xe6e0d6, jacket: 0x9c958b, fur: true, height: 1.56 };
/** 奚十一 Xi the Eleventh: tall, swarthy, in a silver-needle sea-otter cloak. */
export const XI: FigureSpec = { headwear: 'cap', robe: 0x3f3a35, jacket: 0x2a2522, fur: true, face: 'coarse', skin: 0xa99c8c, girth: 1.3, height: 1.9 };
/** 春兰 Chunlan, in the black fox-leg coat Xi gave him. */
export const CHUNLAN: FigureSpec = { ...CAST.youth, robe: 0xd6d0c6, jacket: 0x1c1816, fur: true, height: 1.58 };
/** 老王 Old Wang the jade peddler: bent, grey, a goitre like a sack at his neck. */
export const OLD_WANG: FigureSpec = { ...CAST.elder, beard: 'goatee', robe: 0x8c857c, jacket: 0x6e675f, height: 1.6 };
/** The restaurant's proprietor, all smiles. */
export const PROPRIETOR: FigureSpec = { ...CAST.merchant, robe: 0x9c958b, jacket: 0x5a534c, girth: 1.3 };
export const WAITER: FigureSpec = { ...CAST.servant, robe: 0xd6d0c6 };
/** Other young dan in their furs, for the galleries. */
export const DANS: FigureSpec[] = [
  { ...CAST.youth, jacket: 0x6e675f, fur: true }, { ...CAST.youth, robe: 0xd6d0c6, jacket: 0x4a443e, fur: true },
  { ...CAST.youth, robe: 0xf0ebe2, jacket: 0x8c857c }, { ...CAST.youth, robe: 0xcfc8bc, jacket: 0x3f3a35, fur: true },
];
