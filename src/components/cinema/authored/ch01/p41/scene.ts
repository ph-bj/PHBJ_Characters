import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 41: the friends leaving at the gate, Ziyu alone with the book, and the teacher and Lady Yan. */
export default beatScene(1041, [
  T({ place: 'gate', cast: [who.ziyu(-2.6, { gesture: 'bow' }), who.nanxiang(0.4, { walk: [0.4, 9, 1, 8] }), who.zhongqing(1.8, { walk: [1.8, 10.4, 0.6, 8] })] }),
  T({ place: 'study', table: { x: 0, w: 5 }, cast: [who.ziyu(0, { gesture: 'thinking' })], lines: ['一毫不对', '默默一想'] }),
  T({ place: 'study', table: { x: -0.4, w: 6.4 }, cast: [who.teacher(-2.4, { cues: [[0.4, 'speaking'], [6, 'still']] }), who.ziyu(1, { gesture: 'reading' }), who.lady(-9, { walk: [-9, -5, 6.5, 9.5], cues: [[9.6, 'speaking']] })] }),
]);
