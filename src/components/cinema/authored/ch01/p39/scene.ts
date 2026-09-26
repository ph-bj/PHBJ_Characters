import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 39: Zhongqing speaking in the study, then the three setting out along the street. */
export default beatScene(1039, [
  T({ place: 'study', table: {}, cast: [who.zhongqing(-2.5, { cues: [[0.4, 'speaking'], [8, 'pointing']] }), who.ziyu(0, { gesture: 'reading' }), who.nanxiang(2.5)] }),
  T({ place: 'street', cast: [who.zhongqing(-7, { walk: [-7, -0.6, 0.4, 10] }), who.ziyu(-8.6, { walk: [-8.6, -2.2, 0.6, 10.2] }), who.nanxiang(-10.2, { walk: [-10.2, -3.8, 0.8, 10.4] })], lines: ['亲指一二人', '明日同他出去'] }),
]);
