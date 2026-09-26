import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 31: greetings at the gate, and Lianggong’s portrait. */
export default beatScene(2031, [
  T({ place: 'gate', cast: [who.lianggong(1.4, { flip: true, cues: [[4, 'speaking']] }), who.wangxun(-0.6, { cues: [[0.4, 'bow'], [7, 'speaking']] }), who.zhongqing(-2.2, { gesture: 'bow' })] }),
  T({ place: 'gate', cast: [who.lianggong(-0.8, { h: 4.8 })], lines: ['几根胡须', '紫糖色扁脸'] }),
]);
