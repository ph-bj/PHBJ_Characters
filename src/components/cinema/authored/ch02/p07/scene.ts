import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 7: servants carrying the luggage in, and Shixie retiring. */
export default beatScene(2007, [
  T({ place: 'gate', cast: [who.servant(8, { walk: [8, -9, 0.5, 12], flip: true, gesture: 'offering' }), who.servant(9.6, { walk: [9.6, -7.4, 1.4, 13], flip: true, gesture: 'offering' }), who.page(11, { walk: [11, -6, 2.4, 14], flip: true, gesture: 'offering' })] }),
  T({ place: 'hall', cast: [who.shixie(1.6, { walk: [1.6, -9, 1, 13], flip: true })] }),
]);
