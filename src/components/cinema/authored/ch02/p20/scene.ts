import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 20: Wenhui talking on from his couch. */
export default beatScene(2020, [
  T({ place: 'parlor', cast: [who.wenhui(0.2, { y: 1.5, gesture: 'seated', cues: [[0.4, 'speaking']] }), who.pincai(-3.4), who.zhongqing(3.4, { h: 4 })], lines: ['硬荐了两个亲戚', '侯石翁'] }),
  T({ place: 'parlor', cast: [who.wenhui(0.2, { y: 1.5, gesture: 'seated', cues: [[0.4, 'speaking'], [8, 'laughing']] }), who.pincai(-3.4, { cues: [[4, 'bow']] }), who.zhongqing(3.4, { h: 4 })] }),
]);
