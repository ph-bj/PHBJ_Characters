import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 8: the cousins walking together in the hills, then Nanxiang beside his horse. */
export default beatScene(1008, [
  T({ place: 'landscape', cast: [who.ziyu(-7, { walk: [-7, -1.8, 0.4, 9] }), who.zhongqing(-8.6, { walk: [-8.6, -3.4, 0.6, 9.2] })], lines: ['亲逾手足', '相聚十余年'] }),
  T({ place: 'landscape', cast: [{ kind: 'horse', x: -2.6, h: 4.4 }, who.nanxiang(0.8, { cues: [[1, 'laughing'], [8, 'pointing'], [14, 'laughing']] })], lines: ['倚马万言', '目空一世', '清狂绝俗', '啸傲忘形'] }),
]);
