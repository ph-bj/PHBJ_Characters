import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 11: Ziyu and Pincai at a lamp-lit table. */
export default beatScene(2011, [
  T({ place: 'night-room', table: { x: -0.4, w: 5.6 }, cast: [who.pincai(-1.9), who.ziyu(1.1)] }),
  T({ place: 'night-room', table: { x: -0.4, w: 5.6 }, cast: [who.pincai(-1.9, { cues: [[0.4, 'speaking']] }), who.ziyu(1.1, { cues: [[9, 'thinking']] })], lines: ['相公'] }),
]);
