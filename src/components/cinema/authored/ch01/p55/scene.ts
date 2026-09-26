import { beatScene } from '../../../beats/engine';
import { tableauBeat as T } from '../../../beats/tableau';

/** Chapter 1, paragraph 55: Ziyu’s cart going on through the street, and the boy imagined in the Guanghan palace. */
export default beatScene(1055, [
  T({ place: 'street', cast: [{ kind: 'cart', x: -6, walk: [-6, 4, 0.3, 17] }], lines: ['天下无双', '服饰又不华美'] }),
  T({ place: 'moon-palace', aura: [0, 0.2], cast: [{ kind: 'scholar', hair: 'bun', x: 0, h: 4.4, opacity: 0.7, float: 0.15 }], lines: ['当以广寒宫贮之'] }),
]);
