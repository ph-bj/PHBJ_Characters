import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 34: Wang Xun’s answer, and the banquet hall waiting. */
export default beatScene(2034, [
  T({ place: 'study', table: { x: -0.6, w: 6.2 }, cast: [who.wangxun(-2.2, { cues: [[0.4, 'speaking'], [6, 'laughing']] }), who.zhongqing(1, { cues: [[6, 'laughing']] })], lines: ['醋劲儿'] }),
  T({ place: 'banquet', round: { w: 9.6 }, lines: ['且按下这边'] }),
]);
