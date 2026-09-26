import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 35: Ziyu arguing in the study, an actor fawning over a patron, and a blank stele. */
export default beatScene(1035, [
  T({ place: 'study', table: {}, cast: [who.zhongqing(-2.5), who.ziyu(0, { gesture: 'reading', cues: [[0.4, 'speaking']] }), who.nanxiang(2.5)], lines: ['不媚必谄', '以色事人'] }),
  T({ place: 'theatre', cast: [{ kind: 'merchant', x: 0.6 }, { kind: 'escort', x: -1.8, cues: [[0, 'speaking'], [5, 'tugging']] }], lines: ['缠头是爱', '强笑假欢'] }),
  T({ place: 'stele', lines: ['没字碑', '麒麟楦'] }),
]);
