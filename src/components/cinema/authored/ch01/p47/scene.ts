import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 47: the cousins deciding, the cart setting out, the packed theatre, and hustlers milling around their table. */
export default beatScene(1047, [
  T({ place: 'study', table: { x: -0.6, w: 6.4 }, cast: [who.wangxun(-2.2, { cues: [[0.3, 'speaking'], [4, 'still']] }), who.ziyu(1, { cues: [[4, 'speaking']] })] }),
  T({ place: 'street', cast: [{ kind: 'horse', x: -9, h: 2.6, walk: [-9, 8, 0.2, 6.6] }, { kind: 'cart', x: -12, walk: [-12, 1, 0.8, 6.8] }] }),
  T({ place: 'theatre', cast: [{ kind: 'warrior', x: 0, y: 1.4, h: 3.4, z: -1.4 }, { kind: 'escort', x: -4.6, h: 4 }, { kind: 'page', x: 4.4, h: 3.8 }, who.wangxun(8, { walk: [8, 1.8, 0.5, 6], flip: true }), who.ziyu(9.4, { walk: [9.4, 3.2, 0.8, 6.4], flip: true })], linesSide: 'left', lines: ['锣鼓盈天'] }),
  T({ place: 'theatre', table: { x: -2.6, w: 4.4 }, cast: [{ kind: 'warrior', x: 1.4, y: 1.4, h: 3.4, z: -1.4 },who.ziyu(-3.6, { gesture: 'thinking' }), who.wangxun(-1.6), { kind: 'escort', x: 7, walk: [7, -8, 0.5, 6.5], flip: true }, { kind: 'escort', x: -8, walk: [-8, 7, 3, 9.5] }] }),
]);
