import { beatScene } from '../../../beats/engine';
import { who } from '../../../beats/tableau';
import { banquetBeat } from '../../../beats/banquet';
import { wordsBeat } from '../../../beats/words';

/** Chapter 2, paragraph 40: Lianggong mincing across the room, toasting Yang, spraying Lu, and the unlucky verse. */
export default beatScene(2040, [
  banquetBeat({ leave: ['sun'], cues: { yang: [[3, 'laughing']], zhou: [[3, 'laughing']], lu: [[3, 'laughing']], wenhui: [[3, 'laughing']], guibao: [[3, 'laughing']] }, extra: [who.lianggong(2.4, { z: 2.3, gesture: 'mincing', walk: [2.4, -2.6, 1, 9], flip: true })] }),
  banquetBeat({ leave: ['sun'], cues: { yang: [[0.4, 'laughing'], [5, 'toast']], zhou: [[1, 'laughing']], lu: [[1, 'laughing']], wenhui: [[1, 'laughing']], guibao: [[1, 'laughing']] }, extra: [who.lianggong(-2.6, { z: 2.3, flip: true, cues: [[0, 'bow'], [1.4, 'mincing']] })] }),
  banquetBeat({ leave: ['sun'], cues: { lu: [[0.4, 'speaking'], [5, 'fuming']], yang: [[5, 'laughing']], zhou: [[5, 'laughing']], wenhui: [[5, 'laughing']], guibao: [[5, 'laughing']] }, extra: [who.lianggong(0.4, { z: 2.3, flip: true, cues: [[0.4, 'toast'], [5, 'laughing']] })] }),
  wordsBeat([{ text: '二十五粒', at: 0.5, small: true }, { text: '岂宜重问后庭花', at: 2.4, red: '花' }]),
]);
