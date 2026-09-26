import { beatScene } from '../../../beats/engine';
import { emblemBeat, portraitBeat, repertoireBeat } from '../../../beats/album';
import { DAN_POSES } from '../../../figures';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 13: Yuan Baozhu’s emblem page, portrait, famous scenes, and a closing portrait of his purity. */
export default beatScene(1013, [
  emblemBeat(A.baozhu),
  portraitBeat(A.baozhu, ['善丹青', '娴吟咏', '纤音遏云', '柔情如水']),
  repertoireBeat(A.baozhu, ['鹊桥', '密誓', '惊梦', '寻梦']),
  portraitBeat(A.baozhu, ['励志冰清', '守身玉洁'], { flower: 'lotus', pose: DAN_POSES[7] }),
]);
