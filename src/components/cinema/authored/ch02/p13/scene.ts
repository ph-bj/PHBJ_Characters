import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';
import { DAN_POSES } from '../../../figures';

/** Chapter 2, paragraph 13: Pincai’s praise by lamplight, Qinguan in moonlight, and the two ladies of the Du name. */
export default beatScene(2013, [
  T({ place: 'night-room', table: { x: -0.4, w: 5.6 }, cast: [who.pincai(-1.9, { cues: [[0.4, 'speaking'], [6, 'pointing']] }), who.ziyu(1.1, { cues: [[6, 'thinking']] })] }),
  T({ place: 'moon-palace', aura: [-0.8, 0.4], petals: true, cast: [{ kind: 'dan', x: -0.8, h: 4.8, pose: DAN_POSES[1], opacity: 0.85 }], lines: ['画不到这样的神情', '年十五', '琴官'] }),
  T({ place: 'clouds', cast: [{ kind: 'dan', x: -2.6, pose: DAN_POSES[7], opacity: 0.7 }, { kind: 'deity', x: 0.8, y: 0.8, float: 0.2, opacity: 0.75 }], lines: ['杜兰香下嫁', '杜丽娘还魂'] }),
]);
