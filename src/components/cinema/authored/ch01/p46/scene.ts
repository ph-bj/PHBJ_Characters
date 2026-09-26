import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 46: Ziyu and Wang Xun in the study, arguing over the book. */
export default beatScene(1046, [
  T({ place: 'study', table: { x: -0.6, w: 6.4 }, cast: [who.wangxun(-2.2), who.ziyu(1, { cues: [[3, 'speaking']] })] }),
  T({ place: 'study', table: { x: -0.6, w: 6.4 }, cast: [who.wangxun(-2.2, { cues: [[0.4, 'speaking'], [12, 'still']] }), who.ziyu(1, { cues: [[12, 'thinking']] })], lines: ['尚恐说不到', '据实而言'] }),
]);
