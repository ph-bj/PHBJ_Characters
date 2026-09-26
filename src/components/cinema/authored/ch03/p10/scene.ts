import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong, type Figure } from '../../../stage/figure';
import { cup, pot } from '../../../stage/props';
import { aim, move, sets } from '../../../stage/direct';
import { DANS, PINCAI, XI } from '../actors';
import { sanle } from '../places';

/*
 * Chapter 3, paragraph 10. The empty box nearest the stage: up the gallery strides a tall,
 * dark-faced man in a sea-otter cloak with three servants behind him, who lay out his own pewter
 * teapot, covered cups and a brass water pipe before he deigns to sit. At once the dan come
 * swarming, crowding the box until there is no room to stand. He waves for this and that; a
 * servant brings a plate, and he sweeps it off the table so it smashes across the gallery floor,
 * then rounds on the man, cursing. Below, Pincai cranes up, trying to place the accent.
 */

export default defineScene({
  seed: 3010,
  build: (kit, story) => {
    const { groups: [hall], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const Y = 2.7;

    const th = sanle(kit, hall);
    const [bx, bz] = th.boxes[0];
    const [tx, tz] = th.table;
    const up = (f: Figure) => { f.root.position.y = Y; return f; };
    const xi = up(figure(kit, hall, XI, 8.3, -1));
    const men = [0, 1, 2].map(k => up(figure(kit, hall, { ...CAST.servant, robe: 0x4a443e }, 8.4, 0 + k * 0.8)));
    // His own things, set out on the box's table.
    const things = kit.group(hall, bx, Y + 0.6, bz);
    const teapot = kit.group(things, 0, 0, -0.3); pot(kit, teapot, 0, 0, 0, 1.4);
    const cups = [-0.05, 0.15].map(z => cup(kit, things, 0.1, 0, z, 1.2));
    const pipe = kit.group(things, -0.1, 0, 0.45);
    kit.mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.14, 10), tone(0x9c958b), pipe, 0, 0.07, 0);
    kit.mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.3, 5), tone(0x9c958b), pipe, 0.03, 0.25, 0).rotation.z = -0.3;
    const dans = Array.from({ length: 7 }, (_, k) => up(figure(kit, hall, DANS[k % 4], 8.2, 5.4)));
    // The plate that gets flung, and its pieces.
    const plate = kit.mesh(new THREE.CylinderGeometry(0.12, 0.09, 0.03, 16), tone(0xe6e0d6), hall, 0, 0, 0);
    const shards = Array.from({ length: 7 }, (_, k) => kit.mesh(new THREE.CircleGeometry(0.05 + (k % 3) * 0.02, 3).rotateX(-Math.PI / 2), tone(0xe6e0d6, true), hall, 0, 0, 0));
    const pincai = figure(kit, hall, PINCAI, tx - 1.05, tz);
    const cam1 = move(kit, hall, [[0, [6.4, 4.2, 4], [8.6, 3.6, -2]], [at(1), [6.8, 4.2, -2.8], [9.8, 3.4, -7]]]);
    const cam2 = move(kit, hall, [[at(1), [6.4, 4.8, -1.4], [9.6, 3.4, -6.8]], [at(2), [7, 4, -10.6], [9.6, 3.5, -7]]]);

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.02));
      th.update(seconds);
      const sitAt: [number, number] = [bx + 0.9, bz];
      // His entrance, the servants laying out his things, and his seat.
      walkAlong(xi, seconds, 0.5, 5.5, [[8.3, -1], [8.4, -5], sitAt], { ...G.behind(seconds), pitch: -0.15 }, 4);
      men.forEach((m, k) => {
        const spot: [number, number] = [bx + 1.8, bz - 0.7 + k * 0.7];
        const moving = walkAlong(m, seconds, 0.8 + k * 0.3, 5.2 + k * 0.3, [[8.4, k * 0.8], [8.6, -4.5], spot], G.hold(seconds), 5);
        if (!moving && seconds > 5) { face(m, bx, bz); m.pose(seconds < 7.5 && k < 2 ? { ...G.offer(seconds), bow: 0.4 } : G.folded(seconds)); }
      });
      teapot.visible = seconds > 6; cups.forEach(c => { c.visible = seconds > 6.4; }); pipe.visible = seconds > 6.8;
      if (seconds > 5.5) {
        face(xi, 0, bz);
        xi.pose(cue(seconds, [[5.5, G.behind], [7.5, t => ({ ...G.rest(t), sit: 1, pitch: -0.1 })], [at(2), t => ({ ...G.point(t), sit: 1, yaw: 0.5 })], [27, t => ({ ...G.fume(t), sit: 1, r: { lift: 1.2, out: 1, bend: 0.2 } })], [28.5, t => ({ ...G.argue(t), sit: 1, yaw: 0.7 })]]));
      }
      // The swarm.
      dans.forEach((f, k) => {
        const t0 = at(1) + k * 0.6;
        f.root.visible = seconds > t0 - 0.2;
        const spot: [number, number] = [bx + 0.3 + (k % 3) * 0.55, bz - 1 + Math.floor(k / 3) * 0.9 + (k % 2) * 0.3];
        if (!walkAlong(f, seconds, t0, t0 + 3.5, [[8.2, 5.4], [8.4, 0], spot], G.rest(seconds), 6) && seconds > t0 + 3.5) {
          face(f, ...sitAt);
          f.pose(k % 2 ? { ...G.laugh(seconds + k), lean: 0.15 } : { ...G.shy(seconds + k), bow: 0.15 });
        }
      });
      // The plate: brought, swept off, smashed.
      const fling = 27;
      plate.visible = seconds > 24 && seconds < fling + 0.5;
      if (seconds < fling) plate.position.set(bx + 0.1, Y + 0.62, bz + 0.2);
      else { const u = Math.min(1, (seconds - fling) / 0.45); plate.position.set(bx + 0.1 - u * 1.2, Y + 0.62 + Math.sin(u * Math.PI) * 0.3 - u * 0.6, bz + 0.2 + u * 0.4); plate.rotation.z = u * 3; }
      shards.forEach((s, k) => { const u = Math.min(1, Math.max(0, seconds - fling - 0.45) * 3); s.visible = seconds > fling + 0.45; const a = k * 0.9; s.position.set(bx - 1.1 + Math.cos(a) * u * (0.3 + k * 0.05), Y + 0.01, bz + 0.6 + Math.sin(a) * u * (0.3 + k * 0.05)); });
      face(pincai, 9.6, -7);
      pincai.pose(seconds > 30 ? { ...G.think(seconds), sit: 1, pitch: -0.3 } : { ...G.rest(seconds), sit: 1, pitch: -0.3 });
      if (shot === 0) cam1(seconds);
      else if (shot === 1) cam2(seconds);
      else if (seconds < 31) aim(kit, hall, [bx - 2.4, Y + 1.7, bz + 2.6], [bx + 0.3, Y + 1, bz], 0.3);
      else aim(kit, hall, [tx + 1.4, 1.3, tz + 1.6], [tx - 1.05, 1.45, tz], 0.3);
    };
  },
});
