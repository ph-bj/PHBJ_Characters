import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 11: the vulgar actor, Ziyu’s guess and the laughter, and Ziyu blushing as he explains. */
export default beatScene(1011, [
  T({ place: 'theatre', cast: [{ kind: 'escort', x: -0.8, h: 4.6 }], lines: ['可恨', '油头粉面'] }),
  T({ place: 'study', table: {}, cast: [who.zhongqing(-2.5, { cues: [[4, 'laughing']] }), who.ziyu(0, { gesture: 'reading', cues: [[0.4, 'speaking'], [4, 'still']] }), who.nanxiang(2.5, { cues: [[5.4, 'laughing']] })] }),
  T({ place: 'study', table: {}, cast: [who.zhongqing(-2.5), who.ziyu(0, { gesture: 'reading', blush: true, cues: [[0.4, 'speaking']] }), who.nanxiang(2.5)], lines: ['乌衣美秀', '挥麈清淡'] }),
]);
