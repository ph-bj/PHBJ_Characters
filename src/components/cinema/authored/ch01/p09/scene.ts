import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 9: the friends shown into the study, tea served, and Nanxiang’s question with Ziyu’s answer. */
export default beatScene(1009, [
  T({ place: 'gate', cast: [who.page(-2.8, { gesture: 'bow' }), who.zhongqing(7, { walk: [7, 0.2, 0.4, 7], flip: true }), who.nanxiang(8.6, { walk: [8.6, 1.8, 0.8, 7.4], flip: true })] }),
  T({ place: 'study', table: {}, cast: [who.page(-7, { walk: [-7, -4.4, 0.5, 4], gesture: 'offering', until: 8 }), who.zhongqing(-2.5), who.ziyu(0, { gesture: 'reading' }), who.nanxiang(2.5, { cues: [[6, 'thinking']] })] }),
  T({ place: 'study', table: {}, cast: [who.zhongqing(-2.5), who.ziyu(0, { gesture: 'reading', cues: [[7, 'thinking'], [9, 'speaking']] }), who.nanxiang(2.5, { cues: [[0.3, 'pointing'], [6, 'still']] })], lines: ['动心荡魄', '娱耳悦目'] }),
]);
