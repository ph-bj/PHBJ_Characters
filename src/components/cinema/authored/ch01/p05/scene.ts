import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 5: the teacher leaving the study, two friends arriving at the gate, and Yan Zhongqing introduced. */
export default beatScene(1005, [
  T({ place: 'study', table: { x: 0.8, w: 5 }, cast: [who.teacher(-1.4, { walk: [-1.4, -9, 1, 6], flip: true }), who.ziyu(0.8, { gesture: 'reading' })] }),
  T({ place: 'gate', cast: [who.page(-2.6, { gesture: 'bow', from: 5 }), who.zhongqing(8, { walk: [8, 0.4, 0.5, 7], flip: true }), who.nanxiang(9.6, { walk: [9.6, 2.2, 1, 7.6], flip: true })] }),
  T({ place: 'gate', cast: [who.zhongqing(-0.8)], lines: ['颜夫人之侄', '年二十三', '号剑潭', '颜仲清'] }),
]);
