import { beatScene } from '../../../beats/engine';
import { tableauBeat as T, who } from '../../../beats/tableau';
import { banquetBeat } from '../../../beats/banquet';

/** Chapter 2, paragraph 35: arrival, the six seated, talk of the Garden of Contentment, and Guibao’s penalty cup. */
export default beatScene(2035, [
  T({ place: 'hall', cast: [who.wenhui(1.8, { cues: [[5, 'bow']] }), who.lianggong(-9, { walk: [-9, -0.6, 0.3, 5] }), who.guibao(-10.4, { walk: [-10.4, -2.2, 0.6, 5.4] })] }),
  banquetBeat({ cues: { guibao: [[0.4, 'toast'], [6, 'speaking']], yang: [[5, 'speaking']] }, props: [{ kind: 'cup', x: -1.6, y: 1.1, s: 0.45 }, { kind: 'cup', x: 1.8, y: 1.1, s: 0.45 }] }),
  banquetBeat({ cues: { guibao: [[0.4, 'speaking']], lu: [[5, 'speaking'], [7, 'still']], wenhui: [[7, 'speaking']] }, linesSide: 'left', lines: ['怡园'] }),
  banquetBeat({ cues: { sun: [[0.4, 'speaking'], [3, 'laughing'], [5, 'toast']], yang: [[3, 'laughing']], zhou: [[3, 'laughing']], lu: [[3, 'laughing']], wenhui: [[3, 'laughing']] }, move: { guibao: { x: 3.4, cues: [[4, 'toast']] } } }),
]);
