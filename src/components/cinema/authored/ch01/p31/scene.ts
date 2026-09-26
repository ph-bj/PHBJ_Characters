import { beatScene } from '../../../beats/engine';
import { poemBeat, readersBeat } from '../../../beats/album';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 31: the two quatrains for Guibao on a scroll, then the readers turn the page. */
export default beatScene(1031, [
  poemBeat(['盈盈十五已风流', '巧笑横波未解羞', '最爱娇憨太无赖', '到无人处学春愁', '我欲当筵乞紫云', '一时声价遍传闻', '红牙拍到消魂处', '檀口清歌白练裙'], A.guibao),
  readersBeat([{ at: 0.2, who: 1, gesture: 'reading' }]),
]);
