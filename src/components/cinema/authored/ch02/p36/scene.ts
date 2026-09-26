import { beatScene } from '../../../beats/engine';
import { banquetBeat } from '../../../beats/banquet';

/** Chapter 2, paragraph 36: the game proposed and the coins brought, then Guibao’s fist. */
export default beatScene(2036, [
  banquetBeat({ cues: { wenhui: [[0.4, 'speaking'], [4, 'still']], guibao: [[4, 'speaking']], sun: [[8, 'laughing']] } }),
  banquetBeat({ cues: { zhou: [[1, 'speaking'], [5, 'still']], yang: [[5, 'speaking'], [9, 'still']], lu: [[9, 'speaking'], [13, 'still']], guibao: [[14, 'fist']] }, props: [{ kind: 'coins', x: 0.4, y: 1.05, s: 0.9, from: 0.5 }] }),
]);
