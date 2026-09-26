import { beatScene } from '../../../beats/engine';
import { portraitBeat } from '../../../beats/album';
import { tableauBeat as T, who } from '../../../beats/tableau';
import { DAN_POSES } from '../../../figures';
import { QIGUAN } from '../actors';

/** Chapter 2, paragraph 12: the talk by lamplight, the troupe boats on the Grand Canal, the boys rehearsing, and Qiguan. */
export default beatScene(2012, [
  T({ place: 'night-room', table: { x: -0.4, w: 5.6 }, cast: [who.pincai(-1.9, { cues: [[0.4, 'speaking'], [5, 'still']] }), who.ziyu(1.1, { cues: [[5, 'laughing']] })] }),
  T({ place: 'canal', lines: ['四个多月', '由水路进京'] }),
  T({ place: 'canal', cast: [{ kind: 'elder', x: -3.2 }, { kind: 'dan', x: -1, h: 3.8, pose: DAN_POSES[2] }, { kind: 'dan', x: 0.8, h: 3.6, pose: DAN_POSES[5] }], lines: ['天天学戏'] }),
  portraitBeat(QIGUAN, ['琪官', '年十四岁', '一弹就破', '声胜黄鹂']),
]);
