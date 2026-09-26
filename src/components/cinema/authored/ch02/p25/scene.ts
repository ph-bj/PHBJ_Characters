import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 2, paragraph 25: Wang Xun beside Sihui, then Sihui’s portrait. */
export default beatScene(2025, [
  T({ place: 'study', cast: [who.wangxun(-2.4), who.sihui(0.6)], lines: ['天渊之隔'] }),
  T({ place: 'study', cast: [who.sihui(-0.8, { h: 4.8 })], lines: ['红鼻子', '缩颈堆腮', '孙嗣徽'] }),
]);
