import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { study, street } from '../../../stage/locations';
import { table } from '../../../stage/props';
import { album } from '../../../stage/performance';
import { cart } from '../../../stage/vehicles';
import { blendEnv, DUSK, lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 39. Dusk in the study, the lamp lit: Zhongqing taps the closed album and
 * argues that nobody believes such tales until he sees for himself. Then the plan becomes the
 * morning: the three friends set off down a busy street of the capital toward the theatres, a cart
 * rolling past, as the camera lifts above the roofs toward the city gate.
 */

export default defineScene({
  seed: 1039,
  build: (kit, story) => {
    const { groups: [room, road], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: who would believe it? ---------------------------------------------------------------
    const s = study(kit, room, { night: true });
    table(kit, room, { x: 0, z: 0.5, w: 1.3, d: 0.8, h: 0.78 });
    album(kit, room, { y: 0.79, z: 0.5 });
    const zq = figure(kit, room, CAST.zhongqing, 0.9, 1.2);
    const zy = figure(kit, room, CAST.ziyu, -0.9, -0.1);
    const nx = figure(kit, room, CAST.nanxiang, 0.9, -0.3);
    lights(kit, room, { key: [-3, 6, 4], intensity: 0.5, fill: 0.15 });
    const cam1 = move(kit, room, [
      [0, [2.6, 1.3, 3.4], [0, 1.2, 0.4]],
      [8, [-2, 1.5, 3], [0.6, 1.4, 0.6]],
      [16, [-0.2, 1.7, 2.6], [0.9, 1.6, 1.2]],
    ]);

    // --- Shot 2: tomorrow we take him out --------------------------------------------------------
    const st = street(kit, road);
    const trio = [figure(kit, road, CAST.ziyu, -0.6, 8), figure(kit, road, CAST.zhongqing, 0.4, 8.3), figure(kit, road, CAST.nanxiang, 1.4, 8)];
    const passing = cart(kit, road, { x: -2.6, z: -30, rot: 0 });
    const walkers = [figure(kit, road, CAST.merchant, 3, -10), figure(kit, road, CAST.servant, -3.4, -18), figure(kit, road, CAST.escort, 2.4, -26)];
    lights(kit, road, { key: [8, 12, 10], intensity: 1 });
    const cam2 = move(kit, road, [
      [at(1), [0.4, 1.6, 12], [0.4, 1.5, 6]],
      [at(1) + 8, [2.6, 2, 1], [0.4, 1.5, -3]],
      [36, [0, 14, 4], [0, 6, -100]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(DUSK(0.035));
        cam1(seconds);
        s.update(seconds);
        face(zq, -0.9, -0.1); face(zy, 0.9, 1.2); face(nx, -0.9, -0.1);
        zq.pose(cue(seconds, [[0, G.speak], [5, G.argue], [10, t => ({ ...G.point(t), pitch: 0.2 })]]));
        zy.pose(cue(seconds, [[0, G.folded], [6, G.think], [12, G.laugh]]));
        nx.pose(cue(seconds, [[0, G.fan], [9, G.clap]]));
      } else {
        const t = seconds - at(1);
        kit.setEnv(blendEnv(INK_SKY.paper(0.012), INK_SKY.paper(0.008), span(t, 0, 20)));
        cam2(seconds);
        st.update(seconds);
        trio.forEach((f, i) => walkAlong(f, t, i * 0.3, 20, [[f.root.position.x, 8], [[-0.6, 0.4, 1.4][i], -30]], i === 2 ? G.point(t) : i ? G.speak(t) : G.folded(t), 5.5));
        passing.group.position.z = -30 + t * 3.2;
        passing.update(seconds, true);
        walkers.forEach((w, i) => walkAlong(w, t, 0, 20, [[w.root.position.x, [-10, -18, -26][i]], [w.root.position.x, [-10, -18, -26][i] + 30]], G.rest(t), 5));
      }
    };
  },
});
