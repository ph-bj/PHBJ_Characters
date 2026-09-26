import { beatScene } from '../../../beats/engine';
import { emblemBeat, portraitBeat } from '../../../beats/album';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 18: Lu Sulan’s emblem page, then a portrait with his particulars. */
export default beatScene(1018, [
  emblemBeat(A.sulan),
  portraitBeat(A.sulan, ['字香畹', '年十六岁', '姑苏人']),
]);
