import { beatScene } from '../../../beats/engine';
import { tableauBeat as T } from '../../../beats/tableau';

/** Chapter 1, paragraph 52: Ziyu’s cart rolling home, two carts wedged in the street, and the view through the glass window. */
export default beatScene(1052, [
  T({ place: 'street', flurry: true, cast: [{ kind: 'cart', x: -9, walk: [-9, 1, 0.3, 11] }], lines: ['神昏目暗', '颠倒得'] }),
  T({ place: 'street', petals: true, cast: [{ kind: 'cart', x: -7, walk: [-7, -2.4, 0.3, 4] }, { kind: 'cart', x: 8, walk: [8, 2.6, 0.3, 4], flip: true }], lines: ['非兰非麝', '一阵清香'] }),
  T({ place: 'street', window: true, petals: true, camera: { from: 10.6, to: 9.8, drift: 0.2 }, cast: [{ kind: 'cart', x: 0.4, h: 4, flip: true, z: -1 }, { kind: 'elder', x: -0.6, y: 1.2, h: 1.4, z: -0.9, opacity: 0.8 }, { kind: 'scholar', hair: 'bun', x: -2.4, y: 0.2, h: 3, z: -0.4 }, { kind: 'scholar', hair: 'bun', x: -3.4, y: 0.2, h: 3, z: -0.4, gesture: 'thinking' }] }),
]);
