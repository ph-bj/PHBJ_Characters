import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';
import { wordsBeat } from '../../../beats/words';

/** Chapter 2, paragraph 26: Sihui mouthing the classics, his nickname, and Siyuan’s portrait. */
export default beatScene(2026, [
  T({ place: 'study', cast: [who.sihui(-0.8, { cues: [[0.4, 'speaking']] })], lines: ['满口之乎者也'] }),
  wordsBeat([{ text: '虫蛀千字文', at: 0.6 }]),
  T({ place: 'study', cast: [who.siyuan(-0.8, { h: 4.8, cues: [[6, 'speaking']] })], lines: ['迭韵双声谱', '吊眼皮', '孙嗣元'] }),
]);
