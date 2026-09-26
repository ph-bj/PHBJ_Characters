import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 17: the promise, the maid at the door, and Ziyu awake with a remembered face. */
export default beatScene(2017, [
  T({ place: 'night-room', table: { x: -0.4, w: 5.6 }, cast: [who.pincai(-1.9, { cues: [[0.4, 'speaking']] }), who.ziyu(1.1, { cues: [[4, 'bow']] })] }),
  T({ place: 'night-room', table: { x: -0.4, w: 5.6 }, cast: [who.pincai(-1.9), who.ziyu(1.1, { cues: [[5, 'bow']], walk: [1.1, 9, 6, 10] }), who.maid(9, { walk: [9, 3.6, 0.4, 3], flip: true, cues: [[3.2, 'speaking']] })] }),
  T({ place: 'night-room', cast: [who.ziyu(-1.6, { gesture: 'thinking' }), { kind: 'scholar', hair: 'bun', x: 1.8, opacity: 0.3, float: 0.12 }], lines: ['细细追摹', '想了又想'] }),
]);
