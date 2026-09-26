import { beatScene } from '../../../beats/engine';
import { who } from '../../../beats/tableau';
import { banquetBeat } from '../../../beats/banquet';
import { wordsBeat } from '../../../beats/words';

/** Chapter 2, paragraph 41: the flower lines, Guibao’s three lines, the petals blown, and the servant’s whisper. */
export default beatScene(2041, [
  wordsBeat([{ text: '桃花细逐杨花落', at: 0.4, red: '花' }, { text: '无可奈何花落去', at: 2.8, red: '花' }, { text: '笑隔荷花共人语', at: 5.2, red: '花' }]),
  wordsBeat([{ text: '月满花香记得无', at: 0.4, red: '花' }, { text: '漱齿花前酒半酣', at: 2.8, red: '花' }, { text: '楼上花枝笑独眠', at: 5.2, red: '花' }]),
  banquetBeat({ petals: true, cues: { sun: [[0, 'speaking'], [3, 'laughing']], yang: [[3.4, 'laughing']], zhou: [[3.4, 'laughing']], lu: [[3.4, 'laughing']], wenhui: [[3.4, 'laughing']] }, move: { guibao: { x: 3.4, cues: [[0.4, 'pointing'], [2.6, 'speaking'], [4, 'laughing']] } } }),
  banquetBeat({ cues: { sun: [[3.4, 'fuming']], guibao: [[6, 'laughing']], yang: [[6.4, 'laughing']], zhou: [[6.4, 'laughing']], lu: [[6.4, 'laughing']], wenhui: [[6.4, 'laughing']] }, extra: [who.servant(9, { z: 2.3, walk: [9, 3, 0.3, 3], flip: true, cues: [[3.2, 'whisper']] })] }),
]);
