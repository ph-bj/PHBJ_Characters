import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 42: Ziyu bowing to his teacher, then setting out through the winter gate. */
export default beatScene(1042, [
  T({ place: 'study', cast: [who.teacher(-2.2, { cues: [[5, 'speaking'], [8, 'still']] }), who.ziyu(1, { flip: true, gesture: 'bow' })], lines: ['告了半天假', '过了两日'] }),
  T({ place: 'gate', flurry: true, cast: [who.ziyu(-1, { walk: [-1, 9, 2, 14] }), who.page(-2.4, { walk: [-2.4, 7.6, 2.4, 14.4] })] }),
]);
