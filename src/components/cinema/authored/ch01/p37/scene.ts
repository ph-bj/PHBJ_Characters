import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';
import { poemBeat } from '../../../beats/album';

/** Chapter 1, paragraph 37: four flaws written beside a faint actor, a lady in her boudoir, and Ziyu’s verdict on a scroll. */
export default beatScene(1037, [
  T({ place: 'theatre', cast: [{ kind: 'dan', x: -0.8, opacity: 0.55 }], lines: ['气柔不秀', '神妍不清', '肌白不洁', '色美不华'] }),
  T({ place: 'boudoir', cast: [who.lady(-1.2), { kind: 'maid', x: -3.6, h: 3.9, gesture: 'offering' }], lines: ['妙出自然', '金屋丽姝', '红闺弱质'] }),
  poemBeat(['刻画无盐', '唐突西子']),
]);
