import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 32: Guibao arriving, and Lianggong leading him in while the sons go home. */
export default beatScene(2032, [
  T({ place: 'gate', cast: [who.lianggong(1.4, { flip: true }), who.wangxun(-0.6), who.zhongqing(-2.2), who.guibao(-9, { walk: [-9, -4, 0.4, 5], cues: [[5.2, 'bow']] })] }),
  T({ place: 'gate', cast: [who.sihui(3.2, { cues: [[5, 'bow']], walk: [3.2, 10, 7, 13] }), who.siyuan(4.6, { cues: [[5, 'bow']], walk: [4.6, 11.4, 7.2, 13.2] }), who.lianggong(1.4, { flip: true, cues: [[0.4, 'speaking']], walk: [1.4, -9, 8, 16] }), who.guibao(-0.4, { walk: [-0.4, -10.4, 8, 16], flip: true })] }),
]);
