import { beatScene } from '../../../beats/engine';
import { poemBeat, readersBeat } from '../../../beats/album';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 26: the two quatrains for Yulin on a scroll, then the readers turn the page. */
export default beatScene(1026, [
  poemBeat(['舞袖长拖艳若霞', '妆成𩭏鬌髻云斜', '侍儿扶上临春阁', '要斗南朝张丽华', '慧绝香心酒半酣', '妙疑才过月初三', '动人最是阳关曲', '听得征夫恨不堪'], A.yulin),
  readersBeat([{ at: 0.2, who: 1, gesture: 'reading' }]),
]);
