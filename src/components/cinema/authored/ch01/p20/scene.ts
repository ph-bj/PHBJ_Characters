import { beatScene } from '../../../beats/engine';
import { poemBeat, readersBeat } from '../../../beats/album';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 20: the two quatrains for Sulan on a scroll, then the readers turn the page. */
export default beatScene(1020, [
  poemBeat(['芙蓉出水露红颜', '肥瘦相宜合燕环', '若使今人行往事', '断无胡马入撞关', '此曲只应天上有', '不知何处落凡尘', '当年我作唐天宝', '愿把江山换美人'], A.sulan),
  readersBeat([{ at: 0.2, who: 1, gesture: 'reading' }]),
]);
