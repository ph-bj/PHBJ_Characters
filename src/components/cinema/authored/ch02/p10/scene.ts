import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 10: gifts for Lady Yan, a letter for Wenhui, and the household charmed. */
export default beatScene(2010, [
  T({ place: 'hall', cast: [who.lady(1.6, { cues: [[6, 'speaking']] }), who.pincai(-1, { cues: [[0.4, 'kneel'], [1.2, 'kowtow'], [6, 'bow']] }), who.yuanmao(-3, { cues: [[0.8, 'kneel'], [1.8, 'kowtow'], [6, 'bow']] })], props: [{ kind: 'gifts', x: 0.2, y: 0, s: 1.4, from: 5 }] }),
  T({ place: 'study', cast: [who.shixie(-1.8, { cues: [[1, 'handing'], [6, 'speaking']] }), who.pincai(1, { flip: true, cues: [[0.4, 'bow'], [3, 'reading']] })], lines: ['致王文辉一信'] }),
  T({ place: 'gate', cast: [who.maid(-3.4, { cues: [[3, 'speaking']] }), who.pincai(-1.2, { cues: [[0.4, 'speaking'], [6, 'laughing']] }), who.servant(0.8, { flip: true, cues: [[2, 'laughing']] }), who.page(2.4, { flip: true })], lines: ['善于哄骗', '千伶百俐'] }),
]);
