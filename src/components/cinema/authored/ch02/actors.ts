import { CAST, type FigureSpec } from '../../stage/figure';
import { ACTORS, BOYS } from '../ch01/actors';

/**
 * Chapter 2's cast as the cinemas show them, so they look the same from film to film. The boys from
 * the cart in chapter 1 return here by name: 琴官 Qinguan, the peerless one, and 琪官 Qiguan.
 */
export const QINGUAN: FigureSpec = BOYS.qinguan;
export const QIGUAN: FigureSpec = BOYS.qiguan;
/** 叶茂林 Ye Maolin, the troupe master. */
export const MASTER: FigureSpec = BOYS.master;
/** 王桂保 Wang Guibao, in everyday dress and in costume. */
export const GUIBAO = { plain: ACTORS.guibao.plain, costume: ACTORS.guibao.costume };
/** 魏老仁 Old Wei, Pincai's father: sharp-eyed, sly. */
export const OLD_WEI: FigureSpec = { ...CAST.pincai, beard: 'goatee', robe: 0x8c857c, jacket: 0x4a443e, height: 1.64 };
/** 梅进 Mei Jin and 许顺 Xu Shun, the Mei household's servants. */
export const MEI_JIN: FigureSpec = { ...CAST.servant, robe: 0x6e675f };
export const XU_SHUN: FigureSpec = { ...CAST.servant, robe: 0x8c857c, face: 'coarse' };
/** 蓉华 Ronghua, Zhongqing's wife; 琼华 Qionghua. */
export const RONGHUA: FigureSpec = { ...CAST.lady, robe: 0xe6e0d6, jacket: 0xb9b2a8 };
/** 陆夫人 Lady Lu. */
export const LADY_LU: FigureSpec = { ...CAST.ladyYan, robe: 0x8c857c, jacket: 0x4a443e };
/** The banquet's guests: 杨方猷 Yang, 周锡爵 Zhou, 陆宗沅 Lu. */
export const YANG: FigureSpec = { ...CAST.guest, beard: 'long', robe: 0x4a443e };
export const ZHOU: FigureSpec = { ...CAST.guest, beard: 'full', robe: 0x6e675f, girth: 1.2 };
export const LU: FigureSpec = { ...CAST.guest, beard: 'goatee', robe: 0x5a534c, face: 'fine' };
/** 高品 Gao Pin, who gave the Sun brothers their nicknames. */
export const GAO_PIN: FigureSpec = { ...CAST.nanxiang, headwear: 'cap', robe: 0x6e675f };
/** 孙亮功 Sun Lianggong: a flat, purplish face and snub nose, but regular features and a few whiskers. */
export const LIANGGONG: FigureSpec = { ...CAST.lianggong, skin: 0xc4b3a8, beard: 'whiskers' };
