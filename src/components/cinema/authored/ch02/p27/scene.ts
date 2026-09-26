import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';
import { wordsBeat } from '../../../beats/words';

/** Chapter 2, paragraph 27: the four in the study, Sihui’s phrases stamped out, and the listeners holding back laughter. */
export default beatScene(2027, [
  T({ place: 'study', table: { x: 0, w: 8.4 }, cast: [who.wangxun(-3, { cues: [[0.4, 'speaking']] }), who.zhongqing(-1.1, { cues: [[4, 'bow']] }), who.sihui(1), who.siyuan(3)] }),
  wordsBeat([{ text: '天朗气清', at: 0.5 }, { text: '正其衣冠', at: 2.2 }, { text: '翩然而来', at: 3.9 }]),
  T({ place: 'study', table: { x: 0, w: 8.4 }, cast: [who.wangxun(-3, { cues: [[5, 'laughing']] }), who.zhongqing(-1.1, { cues: [[6, 'laughing']] }), who.sihui(1, { cues: [[0.4, 'speaking']] }), who.siyuan(3)], linesSide: 'left', lines: ['鸟倦飞而知还'] }),
]);
