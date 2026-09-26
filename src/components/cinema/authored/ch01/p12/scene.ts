import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who, coverBeat } from '../../../beats/tableau';

/** Chapter 1, paragraph 12: a still life of wine and sword, Nanxiang handing over his book, and the book opening. */
export default beatScene(1012, [
  T({ place: 'still-wine', lines: ['古剑照胆', '醇醪醉心'] }),
  T({ place: 'study', table: {}, cast: [who.zhongqing(-2.5, { cues: [[7, 'laughing']] }), who.ziyu(0, { gesture: 'reading', cues: [[4, 'still']] }), who.nanxiang(2.5, { cues: [[0.4, 'speaking'], [3, 'pointing'], [6.6, 'still']] })] }),
  coverBeat('曲台花选', ['第一题', '琼楼珠树袁宝珠']),
]);
