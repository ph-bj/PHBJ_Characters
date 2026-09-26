import { beatScene } from '../../../beats/engine';
import { portraitBeat, repertoireBeat } from '../../../beats/album';
import { DAN_POSES } from '../../../figures';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 19: Lu Sulan’s portrait, his Yang Guifei scenes on stage, and a closing portrait. */
export default beatScene(1019, [
  portraitBeat(A.sulan, ['玉骨冰肌', '锦心绣口', '工书法']),
  repertoireBeat(A.sulan, ['制谱', '舞盘', '小宴', '絮阁']),
  portraitBeat(A.sulan, ['好义若渴', '避恶如仇', '守白圭之洁'], { flower: 'chrysanthemum', pose: DAN_POSES[5] }),
]);
