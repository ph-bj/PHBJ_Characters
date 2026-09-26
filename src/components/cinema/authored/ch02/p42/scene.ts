import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';
import { banquetBeat } from '../../../beats/banquet';
import { DAN_POSES } from '../../../figures';

/** Chapter 2, paragraph 42: the reward, Guibao’s news in the study, and the two new actors in moonlight. */
export default beatScene(2042, [
  banquetBeat({ cues: { wenhui: [[0.4, 'speaking']] }, move: { guibao: { x: 2.4, cues: [[4, 'bow']] } }, leave: ['sun'], props: [{ kind: 'silver', x: 1.6, y: 1.05, s: 0.9, from: 2 }] }),
  T({ place: 'study', cast: [who.wangxun(-2.4), who.zhongqing(-0.8, { cues: [[6, 'laughing']] }), who.guibao(1.6, { flip: true, cues: [[0.4, 'speaking']] })] }),
  T({ place: 'moon-palace', aura: [-0.6, 0.4], petals: true, cast: [{ kind: 'dan', x: -1.8, pose: DAN_POSES[1], opacity: 0.8 }, { kind: 'dan', x: 0.6, h: 4.2, pose: DAN_POSES[6], opacity: 0.7 }], lines: ['琪官', '琴官'] }),
]);
