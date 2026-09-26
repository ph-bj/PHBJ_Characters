import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, figure, walkAlong } from '../../../stage/figure';
import { street } from '../../../stage/locations';
import { cart, horse } from '../../../stage/vehicles';
import { mist, smoke } from '../../../stage/fx';
import { aim, lights, move, sets, span } from '../../../stage/direct';
import { jam } from '../jam';

/*
 * Chapter 1, paragraph 52. Riding home in the swaying cart, Ziyu laughs to himself at the craze, the
 * camera sitting in the cab with him, the street sliding past the side lattice. Then the traffic
 * thickens and wedges fast: carts nose to tail, drivers shouting. A thread of fragrance, neither
 * orchid nor musk, drifts in, and Ziyu leans to the glass pane in his curtain: through it, the camera
 * finds the cart opposite, an old man inside, and two boys sitting outside on its shafts.
 */

export default defineScene({
  seed: 1052,
  build: (kit, story) => {
    const { groups: [road, stuck], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: laughing to himself, riding home ---------------------------------------------------
    const st = street(kit, road);
    const own = cart(kit, road, { x: -1.6, z: 0, rot: Math.PI, fur: true });
    const rider = figure(kit, own.seat, { ...CAST.ziyu, fur: true }, 0, 0.1);
    rider.root.rotation.y = Math.PI; rider.shadow.visible = false;
    const pages = [horse(kit, road, { x: -1, z: -5, rot: Math.PI }), horse(kit, road, { x: -2.4, z: -5.4, rot: Math.PI })];
    const passers = [figure(kit, road, CAST.merchant, 2.4, -12), figure(kit, road, CAST.escort, 3, -20)];
    lights(kit, road, { key: [-10, 8, 6], intensity: 0.9 });

    // --- Shots 2–3: the bottleneck, the fragrance, the window ---------------------------------------
    const j = jam(kit, stuck);
    const scent = smoke(kit, stuck, 0.2, 1.4, -4.4, { h: 0.1, count: 90, size: 0.2, shade: 0xb9b2a8 });
    const haze = mist(kit, stuck, { count: 6, w: 20, y: 0.5, d: 30, z: -20, size: 10, opacity: 0.5 });
    const cam2 = move(kit, stuck, [
      [at(1), [5, 3.4, 8], [0, 1.2, -3]],
      [at(1) + 6, [3.2, 2.2, 1.4], [0.4, 1.4, -3.6]],
      [at(2), [0.9, 1.9, 1.6], [0, 1.6, -0.4]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot === 0 ? 0 : 1);
      kit.setEnv(INK_SKY.paper(0.02));
      if (shot === 0) {
        const z = -seconds * 1.4;
        own.group.position.z = z;
        own.update(seconds, true);
        pages.forEach((h, i) => { h.group.position.z = z - 5 - i * 0.4; h.update(seconds + i, true); });
        st.update(seconds);
        passers.forEach((p, i) => walkAlong(p, seconds, 0, 12, [[p.root.position.x, i ? -20 : -12], [p.root.position.x, i ? -4 : 4]], G.rest(seconds), 5));
        rider.pose(cue(seconds, [[0, t => ({ ...G.folded(t), sit: 1 })], [2, t => ({ ...G.laugh(t), sit: 1 })], [7, t => ({ ...G.think(t), sit: 1 })]]));
        // Inside the cab with him, then out beside the wheel.
        if (seconds < 7) aim(kit, road, [1.4, 2.0, z + 2.6], [-1.6, 1.4, z - 0.4]);
        else aim(kit, road, [1.6, 1.3, z + 2 - (seconds - 7) * 0.3], [-1.6, 1.4, z - 1]);
      } else {
        const t = seconds - at(1);
        j.update(seconds);
        haze.update(seconds);
        scent.visible = t > 5;
        j.drivers.forEach((d, i) => d.pose(cue(t + i, [[0, G.fume], [3, G.point], [6, G.argue]])));
        j.master.pose({ ...G.stroke(t), sit: 1 });
        j.qin.pose({ ...G.folded(t), sit: 1, pitch: 0.2 });
        j.qi.pose({ ...G.rest(t), sit: 1, yaw: 0.4 });
        j.ziyu.pose(cue(t, [[0, tt => ({ ...G.think(tt), sit: 1 })], [6, tt => ({ ...G.rest(tt), sit: 1, pitch: -0.2 })], [12, tt => ({ ...G.rest(tt), sit: 1, bow: 0.3 })]]));
        if (shot === 1) cam2(seconds);
        else {
          // Through the pane: from behind Ziyu's shoulder, closing on the glass.
          const u = span(t, 12, 17);
          aim(kit, stuck, [0.02, 1.62, 0.4 - u * 1.05], [0.4, 1.4, -3.7], 0.1);
          j.lift(0);
        }
      }
    };
  },
});
