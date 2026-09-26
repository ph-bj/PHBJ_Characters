import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 19: Pincai presenting the letter, Wenhui laughing it off, the haunted exam paper, and Pincai squirming. */
export default beatScene(2019, [
  T({ place: 'parlor', cast: [who.wenhui(0.2, { y: 1.5, gesture: 'seated' }), who.pincai(-3.4, { cues: [[0.4, 'speaking'], [4, 'handing']] }), who.zhongqing(3.4, { h: 4 })] }),
  T({ place: 'parlor', cast: [who.wenhui(0.2, { y: 1.5, gesture: 'seated', cues: [[0.4, 'reading'], [2.4, 'laughing'], [6, 'speaking']] }), who.pincai(-3.4, { cues: [[0, 'bow']] }), who.zhongqing(3.4, { h: 4 })], lines: ['大人安启'] }),
  T({ place: 'exam-paper', lines: ['一团墨浸', '一枝笔', '一把刀'] }),
  T({ place: 'parlor', cast: [who.wenhui(0.2, { y: 1.5, gesture: 'seated', cues: [[0.4, 'speaking']] }), who.pincai(-3.4, { cues: [[0, 'thinking']], blush: true }), who.zhongqing(3.4, { h: 4 })] }),
]);
