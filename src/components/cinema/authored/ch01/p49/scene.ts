import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 49: Ziyu fidgeting at the table, then the man and the escort boy squeezing in. */
export default beatScene(1049, [
  T({ place: 'theatre', table: { x: -1.6, w: 5.4 }, cast: [who.ziyu(-3.4, { gesture: 'thinking', cues: [[5, 'still'], [8, 'thinking']] }), who.wangxun(-1, { cues: [[1, 'speaking'], [4, 'still']] })] }),
  T({ place: 'theatre', table: { x: -1.6, w: 5.4 }, cast: [who.ziyu(-3.4), who.wangxun(-1), { kind: 'scholar', hair: 'cap', x: 8, walk: [8, 2.6, 0.4, 5], flip: true, cues: [[5.2, 'bow']] }, { kind: 'escort', x: 9.4, walk: [9.4, 0.6, 0.6, 6.4], flip: true, cues: [[8, 'tugging']] }] }),
]);
