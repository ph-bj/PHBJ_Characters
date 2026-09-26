import { beatScene } from '../../../beats/engine';
import { portraitBeat } from '../../../beats/album';
import { tableauBeat as T } from '../../../beats/tableau';
import { BOY } from '../actors';

/** Chapter 1, paragraph 53: the crabapple boy, the peerless boy in radiance, the gazes across the carts, and the dazzled scattering of light and fragrance. */
export default beatScene(1053, [
  portraitBeat(BOY, ['似海棠花', '娇艳无比', '眉目天然']),
  T({ place: 'moon-palace', aura: [-0.8, 0.4], petals: true, cast: [{ kind: 'scholar', hair: 'bun', x: -0.8, h: 4.8 }], lines: ['以珠光宝气为精神', '以花为情', '以月为魂', '以玉为骨'] }),
  T({ place: 'street', window: true, petals: true, aura: [-2.6, 0.6], camera: { from: 10.4, to: 9.2, drift: 0.2 }, cast: [{ kind: 'cart', x: 0.4, h: 4, flip: true, z: -1 }, { kind: 'scholar', hair: 'bun', x: -2.6, y: 0.2, h: 3.2, z: -0.4, gesture: 'thinking' }, { kind: 'scholar', hair: 'bun', x: -3.8, y: 0.2, h: 3, z: -0.4 }] }),
  T({ place: 'clouds', aura: [0, 0.4], petals: true, cast: [{ kind: 'scholar', hair: 'bun', x: 0, h: 4.8, opacity: 0.7, float: 0.12 }], lines: ['满鼻异香', '心摇目眩'] }),
]);
