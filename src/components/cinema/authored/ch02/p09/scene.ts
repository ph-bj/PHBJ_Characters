import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 9: tea in the study, and the guests’ room at night. */
export default beatScene(2009, [
  T({ place: 'study', table: { x: -0.4, w: 7 }, cast: [who.teacher(-2.6), who.pincai(-0.6, { cues: [[0.4, 'speaking']] }), who.yuanmao(1.4, { gesture: 'thinking' }), who.ziyu(3.2)] }),
  T({ place: 'night-room', cast: [who.pincai(-2.6, { gesture: 'bow' }), who.yuanmao(-0.9, { gesture: 'thinking' }), who.ziyu(1.2, { cues: [[1, 'speaking'], [7, 'bow']], walk: [1.2, 9.6, 9.4, 16] }), who.page(3, { walk: [3, 9, 9, 16] })] }),
]);
