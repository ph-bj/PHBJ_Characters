import { beatScene } from '../../../beats/engine';
import { emblemBeat, portraitBeat } from '../../../beats/album';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 24: Li Yulin’s emblem page, then a portrait with his particulars. */
export default beatScene(1024, [
  emblemBeat(A.yulin),
  portraitBeat(A.yulin, ['字佩仙', '年十五岁', '扬州人']),
]);
