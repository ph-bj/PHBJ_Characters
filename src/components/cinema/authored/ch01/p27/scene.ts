import { beatScene } from '../../../beats/engine';
import { emblemBeat, portraitBeat } from '../../../beats/album';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 27: Wang Lanbao’s emblem page of fireworks, then his portrait with sword. */
export default beatScene(1027, [
  emblemBeat(A.lanbao),
  portraitBeat(A.lanbao, ['翩若惊鸿', '婉若游龙', '善武技', '不屈豪贵']),
]);
