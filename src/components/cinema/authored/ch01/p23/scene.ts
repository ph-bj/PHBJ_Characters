import { beatScene } from '../../../beats/engine';
import { poemBeat, readersBeat } from '../../../beats/album';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 23: the two quatrains for Shufang on a scroll, then the readers turn the page. */
export default beatScene(1023, [
  poemBeat(['纤纤一片彩云飞', '流雪回风何处依', '金缕香多舞衣重', '只应常着六铢衣', '芙蓉输面柳输腰', '恰称花梁金步摇', '就使无情更无语', '当场窄步已魂消'], A.shufang),
  readersBeat([{ at: 0.2, who: 1, gesture: 'reading' }]),
]);
