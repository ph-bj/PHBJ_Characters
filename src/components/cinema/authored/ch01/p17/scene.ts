import { beatScene } from '../../../beats/engine';
import { poemBeat, readersBeat } from '../../../beats/album';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 17: the two quatrains for Huifang on a scroll, then the readers turn the page. */
export default beatScene(1017, [
  poemBeat(['风流林下久传扬', '苏小生来独擅长', '一曲清歌绕梁韵', '天花乱落舞衣香', '箫管当场犹自羞', '暂将仙骨换娇柔', '一团绛雪随风散', '散作千秋儿女愁'], A.huifang),
  readersBeat([{ at: 0.2, who: 1, gesture: 'reading' }]),
]);
