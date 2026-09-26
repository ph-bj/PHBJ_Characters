import { beatScene } from '../../../beats/engine';
import { repertoireBeat } from '../../../beats/album';
import { ACTORS as A } from '../actors';

/** Chapter 1, paragraph 28: Wang Lanbao on stage in his martial roles, sword on his back, then sword in hand. */
export default beatScene(1028, [
  repertoireBeat(A.lanbao, ['双红记', '盗令', '青门']),
  repertoireBeat(A.lanbao, ['刺虎', '杀舟'], { pose: { lift: [2.4, 2.8], swing: 0.5, sleeve: 0.6, turn: 1.2, crouch: 0.2, prop: 'sword', swordOnBack: true } }),
]);
