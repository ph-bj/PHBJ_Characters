import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 22: Pincai answering, Wenhui nodding. */
export default beatScene(2022, [
  T({ place: 'parlor', cast: [who.wenhui(0.2, { y: 1.5, gesture: 'seated' }), who.pincai(-3.4, { cues: [[0.4, 'speaking']] }), who.zhongqing(3.4, { h: 4 })], lines: ['盐务司事'] }),
  T({ place: 'parlor', cast: [who.wenhui(0.2, { y: 1.5, gesture: 'seated', cues: [[2, 'laughing']] }), who.pincai(-3.4, { cues: [[0, 'bow']] }), who.zhongqing(3.4, { h: 4 })] }),
]);
