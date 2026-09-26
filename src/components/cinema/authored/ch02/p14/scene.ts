import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 14: Ziyu remembering the cart, and Pincai boasting of his eye. */
export default beatScene(2014, [
  T({ place: 'night-room', table: { x: -0.4, w: 5.6 }, cast: [who.pincai(-1.9, { cues: [[6, 'still']] }), who.ziyu(1.1, { cues: [[0.4, 'laughing'], [5, 'thinking']] })], aura: [1.1, 0.6], lines: ['一毫不错', '车里所见'] }),
  T({ place: 'night-room', table: { x: -0.4, w: 5.6 }, cast: [who.pincai(-1.9, { cues: [[0.4, 'speaking'], [6, 'pointing'], [12, 'speaking']] }), who.ziyu(1.1, { cues: [[3, 'still']] })], lines: ['识宝回回'] }),
]);
