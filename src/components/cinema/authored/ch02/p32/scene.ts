import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { courtyard, lanternRow } from '../../../stage/locations';
import { lights, move, sets, span } from '../../../stage/direct';
import { GUIBAO, LIANGGONG } from '../actors';
import { sunFeatures } from '../wang';

/*
 * Chapter 2, paragraph 32. Lianggong turns to his sons, about to speak, when through the flower gate
 * comes Wang Guibao, light-footed, and sees the company and stands aside too. Lianggong's eye travels
 * to the boy and back. "Go home, and say nothing." The brothers nod and trudge out through the gate,
 * while their father takes Guibao by the arm and walks him up the long flagged path to the lit hall;
 * the camera rises to watch the two pairs part in opposite directions.
 */

export default defineScene({
  seed: 2032,
  build: (kit, story) => {
    const { groups: [yard], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;

    const c = courtyard(kit, yard);
    const swing = lanternRow(kit, yard, [-1.8, 3.2, 6.6], [1.8, 3.2, 6.6], 2);
    const hallLights = lanternRow(kit, yard, [-4, 3.4, -8.6], [4, 3.4, -8.6], 4);
    const lg = figure(kit, yard, LIANGGONG, 0, 4.8);
    const wx = figure(kit, yard, CAST.wangxun, -1.9, 3.3);
    const zq = figure(kit, yard, CAST.zhongqing, -1.3, 2.8);
    const sihui = figure(kit, yard, CAST.sihui, 1.4, 3.6);
    const siyuan = figure(kit, yard, CAST.siyuan, 2, 3.9);
    sunFeatures(kit, sihui, siyuan);
    const gb = figure(kit, yard, GUIBAO.plain, 0.3, 11);
    lights(kit, yard, { key: [4, 9, 10], intensity: 1 });
    const cam = move(kit, yard, [
      [0, [-0.8, 1.6, 2], [1, 1.4, 5]],
      [6, [-2.6, 1.6, 1.4], [0.6, 1.4, 5.6]],
      [at(1), [1.6, 1.5, 2.6], [0.4, 1.5, 4.8]],
      [at(1) + 7, [-2.6, 3.4, 1.4], [0.2, 1.3, 3.4]],
      [36, [-5, 9, 10], [0, 0.5, -2]],
    ]);

    return (seconds: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.02));
      cam(seconds);
      swing(seconds); hallLights(seconds);
      c.flowerGate.open(1);
      // Guibao comes in and stands aside by the hosts.
      const gbIn = walkAlong(gb, seconds, 0.5, 6, [[0.3, 11], [0.2, 7], [-0.6, 5.4], [-0.8, 4.6]], G.rest(seconds), 6.5);
      for (const f of [wx, zq]) { face(f, 0, 4.8); f.pose(G.folded(seconds)); }
      const sons = [sihui, siyuan];
      const leading = seconds > at(1) + 8;
      if (!leading) {
        face(lg, seconds < at(1) + 2 && seconds > 3 ? -0.8 : 1.6, seconds < at(1) + 2 && seconds > 3 ? 4.6 : 3.8);
        lg.pose(cue(seconds, [[0, G.speak], [3, G.behind], [at(1) + 2, G.point], [at(1) + 5, G.speak], [at(1) + 7, G.behind]]));
        if (!gbIn && seconds > 6) { face(gb, 0, 4.8); gb.pose(cue(seconds, [[6, G.shy], [9, G.folded]])); }
      } else {
        // Father takes the boy's arm; up the path to the hall.
        const t0 = at(1) + 8;
        walkAlong(lg, seconds, t0, 36, [[0, 4.8], [0.1, 0], [0.2, -6], [0.2, -8]], { ...G.rest(seconds), r: { lift: 0.6, out: 0.5, bend: 0.4 } }, 4.5);
        walkAlong(gb, seconds, t0 - 0.3, 36, [[-0.8, 4.6], [-0.6, 0], [-0.5, -6], [-0.5, -8]], { ...G.shy(seconds), l: { lift: 0.5, out: 0.4, bend: 0.3 } }, 4.5);
      }
      sons.forEach((s, i) => {
        const t0 = at(1) + 7.5 + i * 0.4;
        if (seconds < t0) {
          face(s, 0, 4.8);
          s.pose(cue(seconds, [[0, t => ({ ...G.folded(t), bow: 0.2, pitch: 0.3 })], [at(1) + 5.5, t => ({ ...G.bow(t, 0.4), pitch: Math.abs(Math.sin(t * 3)) * 0.3 })]]));
        } else walkAlong(s, seconds, t0, t0 + 10, [[i ? 2 : 1.4, i ? 3.9 : 3.6], [i ? 0.6 : 0, 6.4], [i ? 0.5 : -0.3, 12]], { ...G.folded(seconds), bow: 0.15 * span(seconds, t0, t0 + 1) }, 5);
      });
    };
  },
});
