import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 8: the tutor and his son, tea in the boat-room, a remembered quayside, and dinner. */
export default beatScene(2008, [
  T({ place: 'study', cast: [who.teacher(-2.4), who.yuanmao(0.2, { cues: [[0.4, 'kneel'], [1.6, 'kowtow'], [6, 'still']] }), who.pincai(2.6, { gesture: 'bow' })] }),
  T({ place: 'study', table: { x: -0.4, w: 5.6 }, cast: [who.pincai(-1.9, { cues: [[1, 'laughing'], [4, 'speaking']] }), who.ziyu(1.1, { cues: [[6, 'thinking']] }), who.page(8, { walk: [8, 3.6, 0.2, 2.6], flip: true, gesture: 'offering', until: 4 })] }),
  T({ place: 'canal', cast: [who.lady(-3.2, { opacity: 0.6 }), who.page(-1, { h: 3, gesture: 'tugging', opacity: 0.75 }), who.pincai(0.6, { opacity: 0.75, gesture: 'laughing' })], lines: ['送到船上', '那一年'] }),
  T({ place: 'study', table: { x: 0, w: 8 }, cast: [who.teacher(-2.8, { cues: [[0.4, 'speaking'], [5, 'still']] }), who.pincai(-1, { cues: [[5, 'speaking']] }), who.yuanmao(0.9, { gesture: 'bow' }), who.ziyu(2.8)] }),
]);
