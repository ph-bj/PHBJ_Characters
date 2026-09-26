import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 5: the two visitors side by side, Pincai’s kowtow, and Yuanmao’s four temple bows. */
export default beatScene(2005, [
  T({ place: 'flower-hall', cast: [who.pincai(-1.8, { cues: [[1, 'laughing'], [3, 'still']] }), who.yuanmao(1.2, { gesture: 'thinking' })], lines: ['浓眉近视', '面目伶俐'] }),
  T({ place: 'flower-hall', cast: [who.pincai(-0.6, { cues: [[0.4, 'bow'], [2, 'kowtow'], [8, 'speaking']] }), who.shixie(2.6, { flip: true, cues: [[3, 'bow'], [7, 'speaking']] }), who.yuanmao(-3.6)] }),
  T({ place: 'flower-hall', cast: [who.yuanmao(-0.6, { cues: [[0.4, 'bow'], [3, 'kneel'], [4.6, 'kowtow'], [11, 'speaking']] }), who.shixie(2.6, { flip: true, cues: [[9.4, 'bow'], [11, 'still']] }), who.pincai(-3.6, { cues: [[6, 'laughing']] })] }),
]);
