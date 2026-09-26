import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 45: the ladies of the Wang house, Qionghua hiding, and Lady Lu chatting with Ziyu. */
export default beatScene(1045, [
  T({ place: 'hall', cast: [who.lady(-3.4), who.lady(-1.2, { cues: [[5, 'speaking']] }), who.lady(0.9), who.ziyu(8, { walk: [8, 3.4, 0.4, 4.4], flip: true, cues: [[4.6, 'bow']] })] }),
  T({ place: 'boudoir', cast: [who.lady(-1, { gesture: 'hiding', blush: true })], lines: ['不肯出来', '琼华小姐'] }),
  T({ place: 'hall', table: { x: -1.8, w: 3.4 }, cast: [who.lady(-1.8, { cues: [[0.5, 'speaking']] }), who.ziyu(1.6, { flip: true, cues: [[7, 'bow']] })], lines: ['见一回爱一回'] }),
]);
