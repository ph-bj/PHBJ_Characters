import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 3: Wenhui’s advice, and the servant Mei Jin receiving orders. */
export default beatScene(2003, [
  T({ place: 'study', table: { x: -0.6, w: 6.2 }, cast: [who.shixie(-2.2), who.wenhui(1, { cues: [[0.4, 'speaking']] })], lines: ['义无所辞'] }),
  T({ place: 'study', cast: [who.shixie(-2, { cues: [[5, 'speaking']] }), who.servant(8, { walk: [8, 1.2, 0.3, 4], flip: true, cues: [[4.2, 'bow']] })], lines: ['西席之子', '梅进'] }),
]);
