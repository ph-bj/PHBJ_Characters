import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';
import { poemBeat } from '../../../beats/album';

/** Chapter 1, paragraph 40: the classics on a scroll, plum and pheasant, Ziyu before a mirror, and Xishi washing silk. */
export default beatScene(1040, [
  poemBeat(['彼美人兮', '美人何为隔秋水', '望美人兮天一方', '南方多佳人']),
  T({ place: 'birds', lines: ['禽鸟雄者文采', '梅花南枝先'] }),
  T({ place: 'mirror', cast: [{ kind: 'maid', x: -3.4, h: 3.9 }, who.ziyu(-0.6, { blush: 4 }), { kind: 'maid', x: 2.2, h: 3.9 }], lines: ['同在镜里一照'] }),
  T({ place: 'river', cast: [who.lady(-2.2, { gesture: 'offering' }), who.ziyu(1.4, { gesture: 'thinking', opacity: 0.55 })], lines: ['贫贱浣纱', '西子'] }),
]);
