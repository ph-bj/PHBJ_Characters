import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure } from '../../../stage/figure';
import { formalHall } from '../../../stage/locations';
import { censer } from '../../../stage/props';
import { smoke } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { OLD_WEI } from '../actors';

/*
 * Chapter 2, paragraph 5: two ways to kowtow. The camera slides along the pair as they stand in the
 * flower hall, the slight, quick-eyed one and the heavy, sallow, squinting one. Pincai darts forward
 * all smiles, calls "Uncle" and is down and up again in a blink, and for a moment his father's sly
 * figure stands faint behind him. Yuanmao raises his joined hands high as if before a temple altar,
 * sinks slowly to his knees and bows four times; a thread of incense rises in front of him, and he
 * mumbles something no one can make out.
 */

export default defineScene({
  seed: 2005,
  build: (kit, story) => {
    const { groups: [hallSet], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;

    formalHall(kit, hallSet);
    const shixie = figure(kit, hallSet, CAST.shixie, 0, -2.2);
    const pincai = figure(kit, hallSet, CAST.pincai, -1, 0.6);
    const yuanmao = figure(kit, hallSet, CAST.yuanmao, 1.1, 0.8);
    const ghost = figure(kit, hallSet, OLD_WEI, -1.3, 1.4);
    ghost.shadow.visible = false;
    const incense = censer(kit, hallSet, 1.1, 0, -0.1, 0.9);
    const thread = smoke(kit, hallSet, 1.1, 0.35, -0.1, { h: 2.4, count: 120, size: 0.1 });
    lights(kit, hallSet, { key: [-4, 10, 8], intensity: 1 });
    const cam = move(kit, hallSet, [
      [0, [-2.6, 1.6, 3.4], [-1, 1.5, 0.6]],
      [5, [2.8, 1.5, 3.4], [1.1, 1.4, 0.8]],
      [at(1), [-3, 1.5, 2.2], [-0.6, 1.1, -0.2]],
      [at(1) + 6, [-2.4, 1.6, 3.6], [-0.8, 1.3, 0]],
      [at(2), [3.6, 1.2, 2.6], [0.8, 1.0, 0]],
      [at(2) + 7, [2.2, 0.9, 1.4], [1.1, 0.8, 0.2]],
      [36, [0.2, 1.7, 4.4], [0.4, 1.2, -0.6]],
    ]);

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.025));
      cam(seconds);
      face(shixie, 0, 3);
      face(pincai, 0, -2.2); face(yuanmao, 0, -2.2); face(ghost, 0, -2.2);
      shixie.pose(cue(seconds, [[0, G.folded], [at(1) + 3, t => G.salute(t, 0.5)], [at(1) + 6, G.speak], [at(2) + 6, t => ({ ...G.offer(t), bow: 0.4 })], [at(2) + 8, G.folded]]));
      const t1 = seconds - at(1);
      pincai.root.position.z = shot >= 1 ? 0.6 - span(t1, 0, 0.8) * 1.2 : 0.6;
      pincai.pose(cue(seconds, [[0, t => ({ ...G.folded(t), yaw: Math.sin(t * 2) * 0.4 })], [at(1), t => ({ ...G.laugh(t), walk: t * 9 })], [at(1) + 0.8, t => G.kowtow(t, 0.9)], [at(1) + 2.6, t => G.salute(t, 0.3)], [at(1) + 5, G.laugh]]));
      ghost.fade(0.35 * span(t1, 5, 6.2) * (1 - span(t1, 10, 11.5)));
      ghost.pose(G.laugh(seconds));
      const t2 = seconds - at(2);
      incense.visible = thread.visible = shot === 2 && t2 < 9;
      yuanmao.pose(cue(seconds, [
        [0, t => ({ ...G.rest(t), pitch: 0.2 })],
        [at(2), t => ({ ...G.salute(t, 0), l: { lift: 2.4, out: 0.3, twist: -0.5, bend: 0.6 }, r: { lift: 2.4, out: 0.3, twist: 0.5, bend: 0.6 } })],
        [at(2) + 2, t => ({ ...G.kneel(t), kneel: span(t, at(2) + 2, at(2) + 4) })],
        [at(2) + 4, t => G.kowtow(t * 0.7, 1)],
        [at(2) + 9, t => ({ ...G.rest(t), mouth: 0.4 + 0.4 * Math.sin(t * 7), pitch: 0.2 })],
      ]));
    };
  },
});
