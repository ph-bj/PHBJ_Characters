import { beatScene } from '../../../beats/engine';
import { portraitBeat, repertoireBeat } from '../../../beats/album';
import { DAN_POSES } from '../../../figures';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 33: Lin Chunxi’s portrait, his plays on stage, and a closing portrait of his promise. */
export default beatScene(1033, [
  portraitBeat(A.chunxi, ['好花含萼', '明珠出胎', '生旦并作']),
  repertoireBeat(A.chunxi, ['寄子', '回猎', '断机', '冥勘']),
  portraitBeat(A.chunxi, ['独出头地', '价重连城'], { flower: 'plum', pose: DAN_POSES[9] }),
]);
