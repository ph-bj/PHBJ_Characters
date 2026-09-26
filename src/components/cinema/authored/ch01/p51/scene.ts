import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, VERMILION, walkAlong } from '../../../stage/figure';
import { floor, gate, hall, shopRow } from '../../../stage/architecture';
import { cityscape, lanternRow } from '../../../stage/locations';
import { coins } from '../../../stage/props';
import { cart } from '../../../stage/vehicles';
import { blendEnv, DUSK, lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 51. Out of the theatre gate under its lanterns at dusk: Wang Xun's man counts
 * coins into the doorkeeper's palm, the escort boy hangs on Wang Xun's sleeve for a few steps, sees
 * there will be no dinner, and slouches off. Then a crossroads: the cousins climb into their carts
 * and the camera rises as the two carts roll apart down different streets into the evening city.
 */

export default defineScene({
  seed: 1051,
  build: (kit, story) => {
    const { groups: [door, cross], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: the boy gives up ---------------------------------------------------------------
    floor(kit, door, 60, 40, { kind: 'flag', shade: 0xd6d0c6 });
    const theatreGate = gate(kit, door, { w: 3.6, h: 3.6, wallSpan: 26 });
    theatreGate.open(1);
    hall(kit, door, { w: 16, d: 10, h: 6, z: -9, doors: false });
    const swing = lanternRow(kit, door, [-3, 3.4, 0.6], [3, 3.4, 0.6], 4);
    const zy = figure(kit, door, CAST.ziyu, -0.6, 0.6);
    const wx = figure(kit, door, CAST.wangxun, 0.5, 0.4);
    const man = figure(kit, door, CAST.servant, 2.4, 0.2);
    const keeper = figure(kit, door, { ...CAST.servant, robe: 0x4a443e }, 3.2, 0.6);
    const paid = coins(kit, door, [[2.9, 1.1, 0.5], [2.95, 1.12, 0.52], [3.0, 1.14, 0.48]]);
    const boy = figure(kit, door, { ...CAST.escort, face: 'coarse', robe: 0x6e675f, jacket: 0x3f3a35, height: 1.5 }, 1.2, -0.2);
    lights(kit, door, { key: [6, 8, 8], intensity: 0.8 });
    const cam1 = move(kit, door, [
      [0, [0.4, 1.6, 7], [0.4, 1.5, 0]],
      [8, [4.6, 1.7, 4], [1.8, 1.3, 1.4]],
      [14, [-3, 1.8, 6], [2.6, 1.3, 3]],
    ]);

    // --- Shot 2: separate ways ----------------------------------------------------------------
    const town = cityscape(kit, cross, { z: -30 });
    town.position.y = -0.05;
    floor(kit, cross, 9, 200, { kind: 'flag', shade: 0xd9d3c9, y: 0.02 });
    floor(kit, cross, 200, 9, { kind: 'flag', shade: 0xd9d3c9, y: 0.02 });
    for (const [x, z, r] of [[-9, -9, 0], [9, -9, 0], [-9, 9, Math.PI], [9, 9, Math.PI]] as const) { const row = shopRow(kit, cross, { x, z, count: 2, rand }); row.group.rotation.y = r; }
    const carts = [cart(kit, cross, { x: -1.4, z: 2, rot: Math.PI, fur: true }), cart(kit, cross, { x: 1.4, z: 2, rot: Math.PI })];
    kit.mesh(new THREE.CircleGeometry(8, 48), flat(VERMILION, { fog: false }), cross, 60, 14, -300);
    lights(kit, cross, { key: [-30, 8, -40], intensity: 0.9, fill: 0.4 });
    const cam2 = move(kit, cross, [
      [at(1), [0, 1.8, 10], [0, 1.4, 0]],
      [at(1) + 8, [0, 12, 16], [0, 0, -4]],
      [36, [0, 40, 30], [0, 0, -20]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      kit.setEnv(blendEnv(INK_SKY.paper(0.02), DUSK(0.02), shot === 0 ? 0.4 : 0.2 + span(seconds, at(1), 36) * 0.4));
      if (shot === 0) {
        cam1(seconds);
        swing(seconds);
        face(man, 3.2, 0.6); face(keeper, 2.4, 0.2);
        man.pose(cue(seconds, [[0, G.offer], [4, G.salute]]));
        keeper.pose(cue(seconds, [[0, G.rest], [2, G.offer], [4, G.bow]]));
        paid.forEach(c => { c.visible = seconds > 2 && seconds < 4.5; });
        face(zy, 0, 6); zy.pose(cue(seconds, [[0, G.speak], [5, G.folded]]));
        const pull = span(seconds, 5, 9.4);
        wx.root.position.set(0.5 + pull * 1.4, 0, 0.4 + pull * 2.6);
        face(wx, 2, 4);
        wx.pose({ ...G.rest(seconds), walk: seconds > 5 && seconds < 9.4 ? seconds * 5 : undefined, r: { lift: 0.4 + (1 - pull) * 0.6, out: 0.5, bend: 0.2 } });
        if (seconds < 9.4) { boy.root.position.set(wx.root.position.x + 0.7, 0, wx.root.position.z - 0.2); face(boy, wx.root.position.x, wx.root.position.z); boy.pose({ ...G.tug(seconds), walk: seconds > 5 ? seconds * 5 : undefined }); }
        else { walkAlong(boy, seconds, 9.4, 14, [[wx.root.position.x + 0.7, wx.root.position.z - 0.2], [8, 2], [14, 5]], { ...G.behind(seconds), bow: 0.2 }, 5); }
      } else {
        const t = seconds - at(1);
        cam2(seconds);
        carts.forEach((c, i) => {
          const u = span(t, 2, 20);
          if (u < 0.15) { c.group.position.set((i ? 1.4 : -1.4), 0, 2 - u * 10); c.group.rotation.y = Math.PI; }
          else { const k = (u - 0.15) / 0.85; c.group.position.set((i ? 1 : -1) * (1.4 + k * 60), 0, 0.5); c.group.rotation.y = i ? Math.PI / 2 : -Math.PI / 2; }
          c.update(seconds, t > 2 && t < 20);
        });
      }
    };
  },
});
