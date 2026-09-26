import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';
import { wordsBeat } from '../../../beats/words';

/** Chapter 2, paragraph 28: the stammer stamped out, Sihui preening, the brothers quarrelling, and the dog couplet. */
export default beatScene(2028, [
  wordsBeat([{ text: '哥、哥、哥你这句话', at: 0.4, pace: 0.3 }, { text: '说、说错了', at: 3.8, pace: 0.3 }]),
  T({ place: 'study', table: { x: 0, w: 8.4 }, cast: [who.wangxun(-3, { cues: [[4, 'laughing']], walk: [-3, -9, 4.4, 8] }), who.zhongqing(-1.1, { cues: [[6.4, 'speaking']] }), who.sihui(1, { cues: [[0.4, 'speaking'], [6, 'pointing']] }), who.siyuan(3, { cues: [[3, 'fuming']] })] }),
  T({ place: 'study', table: { x: 0, w: 8.4 }, cast: [who.wangxun(-3), who.zhongqing(-1.1, { cues: [[0.4, 'speaking']] }), who.sihui(1, { cues: [[0.4, 'laughing'], [5, 'fuming']], blush: true }), who.siyuan(3, { cues: [[4.6, 'laughing']] })] }),
  wordsBeat([{ text: '人能弘道', at: 0.5 }, { text: '狗、狗、狗无恒心', at: 3, red: '狗', pace: 0.3 }]),
]);
