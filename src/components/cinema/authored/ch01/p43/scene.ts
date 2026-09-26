import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 43: Lady Yan and the fur coat, the cart and riders in the wind, and Wang Xun at his gate. */
export default beatScene(1043, [
  T({ place: 'boudoir', cast: [who.lady(-1.4, { gesture: 'offering' }), who.ziyu(1.4, { flip: true, gesture: 'bow' })], lines: ['白狐暖围', '葡萄猞猁裘'] }),
  T({ place: 'street', flurry: true, cast: [{ kind: 'horse', x: -9, h: 2.6, walk: [-9, 9, 0.2, 9] }, who.page(-9, { y: 0.55, h: 3, walk: [-9, 9, 0.2, 9] }), { kind: 'cart', x: -13, fur: true, walk: [-13, 2, 2, 13] }] }),
  T({ place: 'gate', flurry: true, cast: [who.wangxun(0, { walk: [0, -1.4, 0.4, 2.4], cues: [[3, 'bow']] }), who.ziyu(8, { walk: [8, 1.6, 0.6, 5.4], flip: true, cues: [[5.6, 'bow']] })] }),
]);
