import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';
import { DAN_POSES } from '../../../figures';

/** Chapter 2, paragraph 15: the proud boy turning away, and Pincai’s verdict by lamplight. */
export default beatScene(2015, [
  T({ place: 'clouds', cast: [{ kind: 'dan', x: -0.8, h: 4.8, pose: DAN_POSES[1] }], lines: ['气得要哭', '索性不理人'] }),
  T({ place: 'night-room', table: { x: -0.4, w: 5.6 }, cast: [who.pincai(-1.9, { cues: [[0.4, 'speaking'], [8, 'laughing']] }), who.ziyu(1.1, { cues: [[4, 'thinking']] })], lines: ['总压不下他'] }),
]);
