import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 48: Wang Xun turning to an acquaintance, and the man in grey fur passing to and fro. */
export default beatScene(1048, [
  T({ place: 'theatre', table: { x: -1.6, w: 5.4 }, cast: [who.ziyu(-3.4, { gesture: 'thinking' }), who.wangxun(-1, { flip: true, cues: [[2, 'speaking']] }), who.zhongqing(3.2, { flip: true, cues: [[1, 'speaking'], [6, 'laughing']] })] }),
  T({ place: 'theatre', table: { x: -1.6, w: 5.4 }, cast: [who.ziyu(-3.4, { gesture: 'thinking' }), who.wangxun(-1, { flip: true, gesture: 'speaking' }), { kind: 'merchant', x: 8, z: 0.2, walk: [8, -8, 0.3, 5.6], flip: true, until: 6 }, { kind: 'merchant', x: -8, z: 0.2, walk: [-8, 8, 6, 11.5], from: 6, until: 12 }, { kind: 'merchant', x: 8, z: 0.2, walk: [8, -8, 12, 17.4], flip: true, from: 12, until: 18 }, { kind: 'merchant', x: -8, z: 0.2, walk: [-8, 1, 18, 21], from: 18 }] }),
]);
