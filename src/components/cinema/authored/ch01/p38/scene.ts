import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 38: clowns capering on stage, Nanxiang angered, and Zhongqing mediating. */
export default beatScene(1038, [
  T({ place: 'theatre', cast: [{ kind: 'clown', x: -2.2, h: 4 }, { kind: 'clown', x: 0.8, h: 4, flip: true }], lines: ['足助欢笑', '宁看净末老丑'] }),
  T({ place: 'study', table: {}, cast: [who.zhongqing(-2.5), who.ziyu(0, { gesture: 'reading', cues: [[0.4, 'speaking'], [6.4, 'still']] }), who.nanxiang(2.5, { cues: [[6.4, 'pointing']] })] }),
  T({ place: 'study', table: {}, cast: [who.zhongqing(-2.5, { cues: [[0.4, 'laughing'], [3, 'speaking']] }), who.ziyu(0, { gesture: 'reading' }), who.nanxiang(2.5)], lines: ['幽怪之书', '搜神之记'] }),
]);
