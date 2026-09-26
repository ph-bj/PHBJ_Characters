import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 18: Pincai at the Wang gate, talking with Zhongqing, a servant with the master’s clothes, and Wenhui striding in. */
export default beatScene(2018, [
  T({ place: 'gate', cast: [who.pincai(8, { walk: [8, 0.6, 0.4, 7], flip: true }), who.page(9.4, { walk: [9.4, 2.2, 0.8, 7.4], flip: true, gesture: 'offering' })] }),
  T({ place: 'parlor', cast: [who.zhongqing(1.4, { cues: [[6, 'speaking']] }), who.pincai(-1.6, { cues: [[0.4, 'bow'], [2, 'speaking']] })] }),
  T({ place: 'parlor', cast: [who.zhongqing(1.4), who.pincai(-1.6, { cues: [[4, 'bow']] }), who.servant(8, { walk: [8, 3.4, 0.3, 3.4], flip: true, gesture: 'offering', cues: [[3.6, 'speaking']] })] }),
  T({ place: 'parlor', cast: [who.zhongqing(3.4, { h: 4, gesture: 'bow' }), who.pincai(-1.2, { cues: [[2, 'bow']] }), who.wenhui(-9, { walk: [-9, -3.2, 0.2, 2.6], cues: [[3, 'speaking']] })] }),
]);
