import { beatScene } from '../../../beats/engine';
import { portraitBeat, repertoireBeat } from '../../../beats/album';
import { DAN_POSES } from '../../../figures';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 25: a portrait of Li Yulin, then his willow-farewell scene and his other plays on stage. */
export default beatScene(1025, [
  portraitBeat(A.yulin, ['初日芙蕖', '晓风杨柳', '娴吟咏', '工丝竹']),
  repertoireBeat(A.yulin, ['折柳阳关']),
  repertoireBeat(A.yulin, ['藏舟', '草地', '寄扇'], { pose: DAN_POSES[6] }),
]);
