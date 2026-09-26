import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 33: supper in the study, the albino sister-in-law, and the jealous mother-in-law. */
export default beatScene(2033, [
  T({ place: 'study', table: { x: -0.6, w: 6.2 }, cast: [who.wangxun(-2.2, { cues: [[0.4, 'laughing'], [4, 'speaking']] }), who.zhongqing(1, { cues: [[6, 'laughing']] })], props: [{ kind: 'cup', x: -1.2, y: 1.1, s: 0.5, z: 0.9 }, { kind: 'cup', x: 0.2, y: 1.1, s: 0.5, z: 0.9 }], lines: ['无双谱'] }),
  T({ place: 'boudoir', cast: [who.lady(-1, { opacity: 0.4 })], lines: ['一头的白发', '天老'] }),
  T({ place: 'study', table: { x: -0.6, w: 6.2 }, cast: [who.wangxun(-2.2, { cues: [[6, 'speaking']] }), who.zhongqing(1, { cues: [[0.4, 'speaking'], [6, 'still']] })], lines: ['泼妒异常'] }),
]);
