import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 21: Pincai bewildered and bowing, and Wenhui’s pointed question. */
export default beatScene(2021, [
  T({ place: 'parlor', cast: [who.wenhui(0.2, { y: 1.5, gesture: 'seated', cues: [[0.4, 'speaking'], [5, 'still']] }), who.pincai(-3.4, { cues: [[0.4, 'thinking'], [6, 'bow']] }), who.zhongqing(3.4, { h: 4 })] }),
  T({ place: 'parlor', cast: [who.wenhui(0.2, { y: 1.5, gesture: 'seated', cues: [[0.4, 'pointing'], [7, 'speaking']] }), who.pincai(-3.4, { cues: [[0, 'bow']] }), who.zhongqing(3.4, { h: 4 })], lines: ['还做那勾当'] }),
]);
