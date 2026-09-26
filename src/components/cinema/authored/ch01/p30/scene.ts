import { beatScene } from '../../../beats/engine';
import { emblemBeat, portraitBeat, repertoireBeat } from '../../../beats/album';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 30: Wang Guibao’s emblem page, his portrait with ivory clappers, and his plays on stage. */
export default beatScene(1030, [
  emblemBeat(A.guibao),
  portraitBeat(A.guibao, ['似兰馨', '如花解语', '能翰墨', '工牙拍']),
  repertoireBeat(A.guibao, ['乔醋', '相约', '讨钗', '拷艳']),
]);
