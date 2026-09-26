import { beatScene } from '../../../beats/engine';
import { tableauBeat as T } from '../../../beats/tableau';

/** Chapter 1, paragraph 10: three caricatures in turn: the official, the pedant, the merchant. */
export default beatScene(1010, [
  T({ place: 'hall', cast: [{ kind: 'official', x: -0.8, h: 4.8 }], lines: ['可畏', '位尊望重'] }),
  T({ place: 'study', cast: [{ kind: 'pedant', x: -0.8, h: 4.6 }], lines: ['可笑', '酸腐措大'] }),
  T({ place: 'street', cast: [{ kind: 'merchant', x: -0.8, h: 4.6 }], lines: ['可恶', '市井逐臭'] }),
]);
