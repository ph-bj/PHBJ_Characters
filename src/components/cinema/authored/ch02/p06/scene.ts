import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 6: Ziyu greeting the guests, and Ziyu leading them off while Xu Shun takes his orders. */
export default beatScene(2006, [
  T({ place: 'flower-hall', cast: [who.shixie(-3, { cues: [[5, 'speaking']] }), who.pincai(-1, { gesture: 'bow' }), who.yuanmao(0.8, { gesture: 'bow' }), who.ziyu(8, { walk: [8, 3, 0.4, 4.4], flip: true, cues: [[4.6, 'bow']] })] }),
  T({ place: 'gate', cast: [who.servant(-3.4, { gesture: 'bow' }), who.ziyu(-0.6, { walk: [-0.6, 9, 2, 12] }), who.pincai(-2, { walk: [-2, 7.6, 2.4, 12.4] }), who.yuanmao(-3.4, { walk: [-3.4, 6.2, 3, 13], from: 2.6 })], lines: ['另院两间', '书房后身'] }),
]);
