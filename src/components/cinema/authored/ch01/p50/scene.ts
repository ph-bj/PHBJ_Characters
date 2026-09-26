import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 50: the name that makes Ziyu laugh, the boy pestering Wang Xun, and Yun’er announcing the carriage. */
export default beatScene(1050, [
  T({ place: 'theatre', table: { x: -1.6, w: 5.4 }, cast: [who.ziyu(-3.4, { cues: [[5, 'laughing']] }), who.wangxun(-1, { cues: [[0.4, 'speaking'], [3, 'still']] }), { kind: 'escort', x: 1.6 }], lines: ['保珠'] }),
  T({ place: 'theatre', table: { x: -1.6, w: 5.4 }, cast: [who.ziyu(-3.4, { gesture: 'thinking' }), who.wangxun(-1, { cues: [[6, 'speaking']] }), { kind: 'escort', x: 1.2, flip: true, gesture: 'tugging' }] }),
  T({ place: 'theatre', table: { x: -1.6, w: 5.4 }, cast: [who.ziyu(-3.4, { cues: [[6, 'speaking']] }), who.wangxun(-1), who.page(8, { walk: [8, 2.4, 0.4, 4.4], flip: true, cues: [[4.6, 'speaking'], [7, 'bow']] })] }),
]);
