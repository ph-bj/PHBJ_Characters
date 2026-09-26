import { beatScene } from '../../../beats/engine';
import { portraitBeat } from '../../../beats/album';
import { DAN_POSES } from '../../../figures';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 15: two portrait pages of Su Huifang, with phrases from his entry. */
export default beatScene(1015, [
  portraitBeat(A.huifang, ['本官家子', '秋水为神', '琼花作骨']),
  portraitBeat(A.huifang, ['工吟咏', '尚气节', '善权变', '色艺冠一时'], { flower: 'orchid', pose: DAN_POSES[1] }),
]);
