import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 16: Ziyu realising, the clothes described, the cart remembered through its window, and the two friends delighted. */
export default beatScene(2016, [
  T({ place: 'night-room', table: { x: -0.4, w: 5.6 }, cast: [who.pincai(-1.9), who.ziyu(1.1, { cues: [[0.4, 'thinking']] })], aura: [1.1, 0.6], lines: ['同一天进京'] }),
  T({ place: 'clouds', cast: [{ kind: 'scholar', hair: 'bun', x: -1.6, h: 4.4, opacity: 0.8 }, { kind: 'scholar', hair: 'bun', x: 0.2, h: 4.2, opacity: 0.6 }], lines: ['酱色呢得胜褂', '蓝绉绸皮袄'] }),
  T({ place: 'street', window: true, petals: true, camera: { from: 10.6, to: 9.6, drift: 0.2 }, cast: [{ kind: 'cart', x: 0.4, h: 4, flip: true, z: -1 }, { kind: 'scholar', hair: 'bun', x: -2.5, y: 0.2, h: 3.1, z: -0.4, gesture: 'thinking' }, { kind: 'scholar', hair: 'bun', x: -3.6, y: 0.2, h: 3, z: -0.4 }] }),
  T({ place: 'night-room', table: { x: -0.4, w: 5.6 }, cast: [who.pincai(-1.9, { cues: [[2, 'laughing']] }), who.ziyu(1.1, { cues: [[0.4, 'laughing'], [4, 'speaking']] })], lines: ['真要算绝色了'] }),
]);
