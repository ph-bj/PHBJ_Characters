import { beatScene } from '../../../beats/engine';
import { poemBeat } from '../../../beats/album';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 4: an unsigned book, the Mei ancestral hall, Lady Yan’s dream of jade, and Ziyu at his books. */
export default beatScene(1004, [
  poemBeat(['此书不着姓名', '究不知何代何年', '何地何人所作']),
  T({ place: 'hall', cast: [{ kind: 'elder', x: -3.8, opacity: 0.45 }, { kind: 'elder', x: -1.6, opacity: 0.65 }, who.teacher(0.8)], lines: ['三代单传', '翰林院侍读学士', '梅士燮'] }),
  T({ place: 'clouds', table: { x: -2.2, w: 3.2 }, cast: [who.lady(-2.2, { gesture: 'sleeping' }), { kind: 'deity', x: 1.4, y: 1, float: 0.25, from: 1.5, opacity: 0.85 }], lines: ['梦神人授玉', '遂生玉郎'] }),
  T({ place: 'study', cast: [who.lady(-3.4, { opacity: 0.8 }), who.ziyu(-0.6, { gesture: 'reading' })], lines: ['志在云霄', '守身如玉', '质比精金', '貌如良玉'] }),
]);
