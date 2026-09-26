import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 23: the stipend, the whispering servant, Wenhui swaggering off, and Pincai leaving. */
export default beatScene(2023, [
  T({ place: 'parlor', cast: [who.wenhui(0.2, { y: 1.5, gesture: 'seated', cues: [[0.4, 'speaking'], [5, 'laughing']] }), who.pincai(-3.4, { cues: [[0, 'bow']] }), who.zhongqing(3.4, { h: 4 })], lines: ['三品京堂', '三百金'] }),
  T({ place: 'parlor', cast: [who.wenhui(0.2, { y: 1.5, gesture: 'seated' }), who.pincai(-3.4, { cues: [[6, 'bow']] }), who.servant(8, { walk: [8, 1.6, 0.3, 3.6], flip: true, cues: [[3.8, 'whisper']] })] }),
  T({ place: 'hall', cast: [who.wenhui(1.4, { cues: [[0.4, 'bow']], walk: [1.4, -9, 2, 8], flip: true }), who.pincai(3.2, { gesture: 'bow' })] }),
  T({ place: 'gate', cast: [who.zhongqing(-2.4, { gesture: 'bow' }), who.pincai(0, { cues: [[0, 'thinking']], walk: [0, 9, 4, 11] })], lines: ['好大架子'] }),
]);
