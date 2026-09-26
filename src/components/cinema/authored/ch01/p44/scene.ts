import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 44: Wang Xun’s portrait, then the two cousins greeting each other. */
export default beatScene(1044, [
  T({ place: 'study', cast: [who.wangxun(-0.8)], lines: ['心地浑厚', '丰华俊雅', '一表非凡', '王恂'] }),
  T({ place: 'gate', cast: [who.wangxun(-2, { gesture: 'bow' }), who.ziyu(0.8, { flip: true, gesture: 'bow' })], lines: ['莫逆之交', '表弟兄'] }),
]);
