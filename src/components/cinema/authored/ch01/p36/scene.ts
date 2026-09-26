import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 36: lotus in a muddy pond, Ziyu’s comparisons in the study, and the actor once more. */
export default beatScene(1036, [
  T({ place: 'mud-lotus', lines: ['而不滓', '出污泥'] }),
  T({ place: 'study', table: {}, cast: [who.zhongqing(-2.5), who.ziyu(0, { gesture: 'reading', cues: [[0.4, 'speaking'], [8, 'pointing']] }), who.nanxiang(2.5, { cues: [[9, 'thinking']] })], lines: ['炼铅水之刀', '拆锦袜之线'] }),
  T({ place: 'theatre', cast: [{ kind: 'escort', x: -0.8, h: 4.6, cues: [[4, 'speaking']] }], lines: ['出言无章', '脏腑秽浊'] }),
]);
