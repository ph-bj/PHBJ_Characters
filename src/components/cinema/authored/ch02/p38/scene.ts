import { beatScene } from '../../../beats/engine';
import { banquetBeat } from '../../../beats/banquet';

/** Chapter 2, paragraph 38: Guibao laughing over the seeds, then turning to Zhou. */
export default beatScene(2038, [
  banquetBeat({ cues: { guibao: [[0.4, 'laughing']], lu: [[4, 'laughing']] }, props: [{ kind: 'seeds', x: -0.4, y: 1.05, s: 0.9 }] }),
  banquetBeat({ cues: { guibao: [[0.4, 'pointing']], zhou: [[5, 'speaking']] } }),
]);
