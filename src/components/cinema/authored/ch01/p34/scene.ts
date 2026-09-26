import { beatScene } from '../../../beats/engine';
import { poemBeat, readersBeat } from '../../../beats/album';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 34: Chunxi’s poem on a scroll, then Ziyu smiling and dismissing the album in the study. */
export default beatScene(1034, [
  poemBeat(['别有人间傅粉郎', '销金为饰玉为妆', '石麟天上原无价', '应捧炉香待玉皇', '才啭歌喉赞不休', '黄金争掷作缠头', '王郎偶驾羊车出', '十里珠帘尽上钩'], A.chunxi),
  readersBeat([{ at: 0.4, who: 1, gesture: 'laughing' }, { at: 4.4, who: 2, gesture: 'pointing' }, { at: 8, who: 1, gesture: 'speaking' }]),
]);
