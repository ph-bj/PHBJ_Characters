import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 51: leaving the theatre with the boy trailing, and the two carts parting ways. */
export default beatScene(1051, [
  T({ place: 'street', cast: [who.ziyu(-2, { walk: [-2, -9, 1, 9], flip: true }), who.wangxun(0, { walk: [0, -7, 1, 11], flip: true }), { kind: 'escort', x: 1.4, walk: [1.4, -2, 1, 5], flip: true, gesture: 'tugging', until: 6 }, { kind: 'escort', x: -2, walk: [-2, 8, 6, 12], from: 6 }] }),
  T({ place: 'street', flurry: true, cast: [{ kind: 'cart', x: -1.4, walk: [-1.4, -13, 3, 16], flip: true }, { kind: 'cart', x: 1.8, walk: [1.8, 13, 3.4, 16.4] }] }),
]);
