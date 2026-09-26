import { beatScene } from '../../../beats/engine';
import { poemBeat, readersBeat } from '../../../beats/album';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 29: the two quatrains for Lanbao on a scroll, then the readers turn the page. */
export default beatScene(1029, [
  poemBeat(['侠骨柔情世所难', '肯随红袖倚阑干', '平生知己无须嘱', '请把龙纹仔细看', '纷披五色起朝霞', '鼙鼓声声气倍加', '戏罢卸妆垂手立', '亭亭一树碧桃花'], A.lanbao),
  readersBeat([{ at: 0.2, who: 1, gesture: 'reading' }]),
]);
