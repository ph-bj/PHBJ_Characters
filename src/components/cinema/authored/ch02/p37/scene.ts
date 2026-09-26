import { beatScene } from '../../../beats/engine';
import { banquetBeat } from '../../../beats/banquet';
import { wordsBeat } from '../../../beats/words';

/** Chapter 2, paragraph 37: Wenhui laying down the rules, the rules written out, and the bearded guests laughing at the dan rule. */
export default beatScene(2037, [
  banquetBeat({ cues: { wenhui: [[0.4, 'speaking']] } }),
  wordsBeat([{ text: '一杯化作三杯', at: 0.4 }, { text: '找人豁拳', at: 2 }, { text: '两杯装作小旦敬人', at: 4 }, { text: '抓一把瓜子', at: 7 }]),
  banquetBeat({ cues: { zhou: [[0.4, 'laughing'], [4, 'speaking']], sun: [[6, 'speaking']], yang: [[2, 'laughing']], guibao: [[8, 'laughing']] } }),
]);
