import { beatScene } from '../../../beats/engine';
import { poemBeat } from '../../../beats/album';
import { tableauBeat as T, who } from '../../../beats/tableau';

/** Chapter 1, paragraph 56: the vulgar Baozhu beside the peerless boy, Ziyu’s cart arriving home, and the chapter’s closing words. */
export default beatScene(1056, [
  T({ place: 'paper', aura: [1.4, 0.4], cast: [{ kind: 'escort', x: -2.6 }, { kind: 'scholar', hair: 'bun', x: 1.4, h: 4.6 }], lines: ['也还不配', '做他的舆儓'] }),
  T({ place: 'gate', cast: [{ kind: 'cart', x: -11, walk: [-11, -1, 0.3, 9] }, who.page(-2.8, { gesture: 'bow', from: 9 })] }),
  poemBeat(['不知后事如何', '且听下回分解']),
]);
