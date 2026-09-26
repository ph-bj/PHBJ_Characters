import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 2: the two officials over the cards, and old Wei remembered. */
export default beatScene(2002, [
  T({ place: 'study', table: { x: -0.6, w: 6.2 }, cast: [who.shixie(-2.2, { gesture: 'reading', cues: [[6, 'thinking']] }), who.wenhui(1, { cues: [[7, 'speaking']] })], lines: ['小门生', '世愚侄'] }),
  T({ place: 'study', table: { x: -0.6, w: 6.2 }, cast: [{ kind: 'pedant', x: -4.8, opacity: 0.35 }, who.shixie(-2.2, { cues: [[0.4, 'speaking'], [9, 'still']] }), who.wenhui(1, { cues: [[9, 'speaking'], [15, 'laughing']] })], lines: ['泼皮秀才'] }),
]);
