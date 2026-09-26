import { beatScene } from '../../../beats/engine';
import { banquetBeat } from '../../../beats/banquet';

/** Chapter 2, paragraph 39: the guess, three cups set before Lianggong, and the finger-guessing. */
export default beatScene(2039, [
  banquetBeat({ cues: { guibao: [[0.4, 'fist']], wenhui: [[2, 'speaking'], [4, 'still']], sun: [[5, 'fist'], [8, 'laughing']] }, props: [{ kind: 'coins', x: 3.2, y: 1.05, s: 0.8, from: 8 }] }),
  banquetBeat({ cues: { sun: [[0.4, 'laughing'], [6, 'speaking']] }, props: [{ kind: 'cup', x: 1.8, y: 1.1, s: 0.5, from: 1 }, { kind: 'cup', x: 2.4, y: 1.1, s: 0.5, from: 1.6 }, { kind: 'cup', x: 3, y: 1.1, s: 0.5, from: 2.2 }] }),
  banquetBeat({ cues: { sun: [[0.4, 'fist'], [8, 'fuming']], yang: [[0.4, 'fist'], [8, 'laughing']], guibao: [[8, 'laughing']] } }),
]);
