import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 54: the carts passing, and Ziyu lost in a half-remembered face. */
export default beatScene(1054, [
  T({ place: 'street', cast: [{ kind: 'cart', x: 1, walk: [1, -13, 0.5, 5], flip: true }, { kind: 'cart', x: 12, walk: [12, -13, 3.5, 9.5], flip: true, from: 3.5 }, { kind: 'cart', x: 12, walk: [12, -13, 6.5, 12.5], flip: true, from: 6.5 }] }),
  T({ place: 'clouds', cast: [who.ziyu(-2, { gesture: 'thinking' }), { kind: 'scholar', hair: 'bun', x: 1.8, opacity: 0.3, float: 0.1 }], lines: ['再想不起', '似像见过'] }),
]);
