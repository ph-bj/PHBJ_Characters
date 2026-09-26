import { beatScene } from '../../../beats/engine';
import { emblemBeat, portraitBeat, repertoireBeat } from '../../../beats/album';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 21: Jin Shufang’s emblem page, his portrait with the flute, and his most famous scene. */
export default beatScene(1021, [
  emblemBeat(A.shufang),
  portraitBeat(A.shufang, ['秀骨珊珊', '柔情脉脉', '工吟咏吹箫', '善弈棋']),
  repertoireBeat(A.shufang, ['题曲']),
]);
