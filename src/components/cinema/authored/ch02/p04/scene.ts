import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 4: Wenhui seen off at the gate, and Shixie entering the flower hall. */
export default beatScene(2004, [
  T({ place: 'gate', cast: [who.shixie(1.4, { gesture: 'bow' }), who.wenhui(-0.6, { walk: [-0.6, -9, 3, 10], flip: true, cues: [[0.4, 'bow']] })] }),
  T({ place: 'flower-hall', cast: [who.shixie(7, { walk: [7, 0.4, 0.4, 9], flip: true }), who.servant(0.4, { walk: [0.4, 9, 2, 7] })] }),
]);
