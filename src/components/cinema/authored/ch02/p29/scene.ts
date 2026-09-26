import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';
import { wordsBeat } from '../../../beats/words';

/** Chapter 2, paragraph 29: the two gou characters, the ox essay, and Sihui pacing and storming out. */
export default beatScene(2029, [
  wordsBeat([{ text: '苟无恒心', at: 0.5, red: '苟' }, { text: '狗无恒心', at: 2.6, red: '狗' }]),
  wordsBeat([{ text: '先生将何之', at: 0.5 }, { text: '牛何之', at: 3, red: '牛' }]),
  T({ place: 'study', cast: [who.wangxun(-3.4), who.zhongqing(-1.8, { cues: [[2, 'laughing']] }), who.siyuan(3.4, { gesture: 'laughing' }), who.sihui(-0.4, { gesture: 'fuming', walk: [-0.4, 2.2, 0.4, 3], until: 3 }), who.sihui(-0.4, { gesture: 'fuming', walk: [-0.4, 9, 6, 11], from: 5.6 }), who.sihui(2.2, { gesture: 'fuming', walk: [2.2, -0.4, 3, 5.6], from: 3, until: 5.6 })] }),
]);
