import { beatScene } from '../../../beats/engine';
import { portraitBeat, repertoireBeat } from '../../../beats/album';
import { DAN_POSES } from '../../../figures';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 22: a portrait of Jin Shufang like a crabapple newly opened, his plays on stage, and a closing portrait. */
export default beatScene(1022, [
  portraitBeat(A.shufang, ['檀口生香', '素腰如柳'], { flower: 'begonia' }),
  repertoireBeat(A.shufang, ['琴挑', '秋江'], { pose: DAN_POSES[2] }),
  portraitBeat(A.shufang, ['秀外慧中', '嫏嬛掌书仙'], { flower: 'orchid', pose: DAN_POSES[3] }),
]);
