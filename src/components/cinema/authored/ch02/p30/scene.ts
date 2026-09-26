import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 30: the inner gate, the father arriving and the sons stepping aside. */
export default beatScene(2030, [
  T({ place: 'gate', cast: [who.wangxun(-1.2, { walk: [-1.2, 1.2, 0.3, 5] }), who.zhongqing(-2.6, { walk: [-2.6, -0.2, 0.3, 5] }), who.sihui(0.6, { walk: [0.6, 3, 0.3, 5] }), who.siyuan(-4, { walk: [-4, -1.6, 0.3, 5] }), who.lianggong(9, { walk: [9, 4.6, 4, 9], flip: true })] }),
  T({ place: 'gate', cast: [who.lianggong(1.4, { flip: true }), who.wangxun(-0.6), who.zhongqing(-2.2), who.sihui(3.6, { gesture: 'bow' }), who.siyuan(4.9, { gesture: 'bow' })] }),
]);
