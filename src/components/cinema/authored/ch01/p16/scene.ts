import { beatScene } from '../../../beats/engine';
import { portraitBeat, repertoireBeat } from '../../../beats/album';
import { DAN_POSES } from '../../../figures';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 16: Su Huifang on stage under placards of his plays, then a portrait with his words. */
export default beatScene(1016, [
  repertoireBeat(A.huifang, ['瑶台', '盘秋', '亭会']),
  portraitBeat(A.huifang, ['既为此业', '则当安之', '守贞抱洁'], { flower: 'plum', pose: DAN_POSES[7] }),
]);
