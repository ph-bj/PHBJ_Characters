import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 24: Zhongqing with Ronghua, Zhongqing and Wang Xun, and the Sun brothers arriving. */
export default beatScene(2024, [
  T({ place: 'boudoir', cast: [who.lady(-1.4, { cues: [[5, 'speaking']] }), who.zhongqing(1.4, { flip: true, cues: [[0.4, 'speaking'], [5, 'still']] })] }),
  T({ place: 'study', cast: [who.zhongqing(-1.4, { cues: [[5, 'speaking']] }), who.wangxun(8, { walk: [8, 1.4, 0.3, 4.4], flip: true, cues: [[4.6, 'bow']] })] }),
  T({ place: 'study', cast: [who.wangxun(-1.8), who.zhongqing(-0.4), who.sihui(8, { walk: [8, 0.4, 0.3, 5], flip: true, cues: [[5.2, 'bow']] }), who.siyuan(9.6, { walk: [9.6, 2.2, 0.6, 5.6], flip: true, cues: [[5.8, 'bow']] })], linesSide: 'left', lines: ['难兄难弟'] }),
]);
