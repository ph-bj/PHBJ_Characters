import { beatScene } from '../../../beats/engine';
import { emblemBeat, portraitBeat } from '../../../beats/album';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 32: Lin Chunxi’s emblem page of a qilin among clouds, then a portrait with his particulars. */
export default beatScene(1032, [
  emblemBeat(A.chunxi),
  portraitBeat(A.chunxi, ['字小梅', '年十四岁', '姑苏人']),
]);
