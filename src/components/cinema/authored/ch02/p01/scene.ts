import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 1: Ziyu’s cart at the gate, the fathers in the study, Wenhui with Lady Yan, and the two red cards. */
export default beatScene(2001, [
  T({ place: 'gate', cast: [{ kind: 'cart', x: 3.4, flip: true }, { kind: 'horse', x: 6.2, h: 2.8, flip: true }, { kind: 'cart', x: -12, walk: [-12, -2.6, 0.3, 6] }] }),
  T({ place: 'study', table: { x: -0.8, w: 6 }, cast: [who.shixie(-2.4, { cues: [[5, 'speaking']] }), who.wenhui(0.6, { cues: [[0.4, 'speaking'], [5, 'still']] }), who.ziyu(3.4, { gesture: 'bow' })], linesSide: 'left', lines: ['姑苏会馆', '联锦班'] }),
  T({ place: 'hall', cast: [who.lady(-3, { cues: [[6, 'speaking']] }), who.wenhui(-0.6, { cues: [[0.4, 'speaking'], [6, 'still']] }), who.shixie(1.8, { cues: [[3.4, 'speaking'], [6, 'still']] })], lines: ['尚未字人', '琼华十六'] }),
  T({ place: 'hall', cast: [who.maid(7, { walk: [7, 2.8, 0.2, 2], flip: true, gesture: 'offering', until: 3 }), who.shixie(-3.4, { cues: [[2.4, 'reading']] })], props: [{ kind: 'card', x: -1.2, y: 1.2, s: 3, text: '魏聘才', from: 2.4 }, { kind: 'card', x: 1, y: 1.2, s: 3, text: '李元茂', from: 3 }] }),
]);
