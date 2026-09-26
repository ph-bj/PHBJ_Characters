import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 6: a memorial arch to Zhongqing’s mother, his upbringing, Nanxiang’s portrait, and the two cousins compared. */
export default beatScene(1006, [
  T({ place: 'arch', cast: [who.lady(-4.2, { opacity: 0.4 })], lines: ['请旌表烈', '绝食殉节', '郑氏'] }),
  T({ place: 'hall', cast: [who.teacher(-1.8), who.page(0.4, { gesture: 'bow' })], lines: ['赘于王门', '十九中副车', '抚养在家'] }),
  T({ place: 'landscape', cast: [who.nanxiang(-1, { gesture: 'laughing' })], lines: ['已中解元', '汉阳人', '号竹君', '史南湘'] }),
  T({ place: 'study', table: { x: -0.6, w: 6.4 }, cast: [who.ziyu(-2.2, { gesture: 'reading' }), who.zhongqing(1, { cues: [[3, 'speaking'], [6, 'still']] })], lines: ['仲清旷达', '子玉纯粹'] }),
]);
