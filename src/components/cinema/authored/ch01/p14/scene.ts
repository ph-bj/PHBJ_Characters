import { beatScene } from '../../../beats/engine';
import { emblemBeat, poemBeat, readersBeat } from '../../../beats/album';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 14: Baozhu’s poem on a scroll, the three friends arguing over the album, then Su Huifang’s emblem. */
export default beatScene(1014, [
  poemBeat(['舞袖轻盈弱不胜', '难将水月比清澄', '自从珠字名卿后', '能使珠光百倍增', '瘦沈腰肢绝可怜', '一生爱好自天然', '风流别有消魂处', '始信人间有谪仙'], A.baozhu),
  readersBeat([{ at: 0.4, who: 1, gesture: 'laughing' }, { at: 3.8, who: 0, gesture: 'speaking' }, { at: 6.4, who: 1, gesture: 'speaking' }, { at: 10.2, who: 2, gesture: 'pointing' }]),
  emblemBeat(A.huifang),
]);
