import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 7: Ziyu expounding to Zhongqing, then Zhongqing’s single word lighting up Ziyu. */
export default beatScene(1007, [
  T({ place: 'study', table: { x: -0.6, w: 6.4 }, cast: [who.ziyu(-2.2, { cues: [[0.6, 'speaking']] }), who.zhongqing(1, { cues: [[9, 'laughing']] })], lines: ['妙义环生', '精心讲贯'] }),
  T({ place: 'study', table: { x: -0.6, w: 6.4 }, cast: [who.ziyu(-2.2, { gesture: 'thinking', cues: [[9, 'laughing']] }), who.zhongqing(1, { cues: [[5, 'pointing'], [9, 'still']] })], aura: [-2.8, 0.6], lines: ['白地光明', '一言点悟'] }),
]);
