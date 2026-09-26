import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure } from '../../../stage/figure';
import { street } from '../../../stage/locations';
import { cart } from '../../../stage/vehicles';
import { mist } from '../../../stage/fx';
import { aim, blendEnv, lights, sets, span } from '../../../stage/direct';
import { BOYS } from '../actors';

/*
 * Chapter 1, paragraph 54. The jam loosens: the blue-hooded cart with the two boys rolls past Ziyu's,
 * and three or four more carts follow it, full of ordinary children; the camera stands at Ziyu's
 * window and watches them go. Then Ziyu alone in his cab, the street dissolving into mist around him,
 * and in the mist a face, half-formed, drifting just out of reach: he has seen it before, somewhere.
 */

export default defineScene({
  seed: 1054,
  build: (kit, story) => {
    const { groups: [road, haze], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: the cart passes ------------------------------------------------------------------
    const st = street(kit, road);
    const own = cart(kit, road, { x: -1.4, z: 0, rot: Math.PI, fur: true });
    own.curtain(0.9);
    const zy = figure(kit, own.seat, { ...CAST.ziyu, fur: true }, 0, 0.1);
    zy.root.rotation.y = Math.PI; zy.shadow.visible = false;
    const train = [0, 1, 2, 3, 4].map(k => {
      const c = cart(kit, road, { x: 1.4, z: -8 - k * 5, rot: 0, hood: k ? 0x6e675f : 0x3f4f6a, paleMule: k === 0 });
      const riders = k === 0
        ? [figure(kit, c.group, BOYS.qinguan, -0.32, 1.25), figure(kit, c.group, BOYS.qiguan, 0.36, 1.2)]
        : [figure(kit, c.group, { ...CAST.page, robe: 0x9c958b, face: 'plain' }, -0.3, 1.2), figure(kit, c.group, { ...CAST.page, face: 'coarse' }, 0.3, 1.2)];
      riders.forEach(r => { r.root.position.y = 0.55; r.shadow.visible = false; });
      return { c, riders, k };
    });
    lights(kit, road, { key: [8, 10, 6], intensity: 1 });

    // --- Shot 2: a half-remembered face ------------------------------------------------------------
    const cab = cart(kit, haze, { rot: Math.PI, fur: true, mule: false });
    const dreamer = figure(kit, cab.seat, { ...CAST.ziyu, fur: true }, 0, 0.1);
    dreamer.root.rotation.y = Math.PI; dreamer.shadow.visible = false;
    cab.curtain(1);
    const face1 = figure(kit, haze, BOYS.qinguan, 0.4, -3.4);
    face1.shadow.visible = false;
    const fog = mist(kit, haze, { count: 14, w: 20, y: 1, d: 12, z: -4, size: 6, opacity: 0.7, drift: 0.4 });
    lights(kit, haze, { key: [2, 6, 4], intensity: 0.8 });

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.02));
        st.update(seconds);
        own.update(seconds, false);
        zy.pose({ ...G.rest(seconds), sit: 1, bow: 0.25, r: { lift: 2.2, out: 0.2, bend: 0.4 } });
        train.forEach(({ c, riders, k }) => {
          const z = -8 - k * 5 + span(seconds, 0.2, 13) * 30;
          c.group.position.z = z;
          c.update(seconds + k, true);
          riders.forEach((r, i) => { r.pose({ ...G.folded(seconds), sit: 1, yaw: k === 0 && i === 0 ? -0.9 * Math.max(0, 1 - Math.abs(z + 1) / 4) : 0 }); });
        });
        // From Ziyu's window, turning to follow the first cart as it goes by.
        const z0 = -8 + span(seconds, 0.2, 13) * 30;
        aim(kit, road, [-1.3, 1.95, -0.7], [1.4, 1.4, Math.min(z0, 6)], 0.2);
      } else {
        const t = seconds - at(1);
        kit.setEnv(blendEnv(INK_SKY.paper(0.02), INK_SKY.paper(0.08), span(t, 0, 6)));
        fog.update(seconds);
        dreamer.pose(cue(t, [[0, tt => ({ ...G.think(tt), sit: 1 })], [8, tt => ({ ...G.rest(tt), sit: 1, pitch: -0.1, yaw: 0.2 })], [14, tt => ({ ...G.think(tt), sit: 1 })]]));
        const appear = span(t, 4, 8) * (1 - span(t, 15, 20));
        face1.fade(0.85 * appear);
        face1.root.position.set(0.4 + Math.sin(t * 0.4) * 0.6, 0.2 + Math.sin(t * 0.6) * 0.1, -3.4);
        face(face1, 0, 0);
        face1.pose({ ...G.folded(t), pitch: -0.05 });
        const u = span(t, 0, 22);
        aim(kit, haze, [-1.4 + u * 0.8, 1.9, -1.2 - u * 0.4], [0.2, 1.5, -3.2], 0.3);
      }
    };
  },
});
