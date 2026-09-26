import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { room } from '../../../stage/architecture';
import { cup, dishes, roundTable, stool } from '../../../stage/props';
import { hold } from '../../../stage/performance';
import { inkGather } from '../../../stage/fx';
import { aim, lights, move, sets, span } from '../../../stage/direct';
import { CHUNLAN, DANS, PROPRIETOR, WAITER, XI } from '../actors';
import { dog, restaurant } from '../places';

/*
 * Chapter 3, paragraph 31. In the fresh room the three runaway dan are led back in and waiters lay
 * the feast anew on the thinnest white porcelain. The proprietor lifts a bowl to his ear, flicks it
 * with a fingernail so it rings (叮), and wags a finger at the hang-dog waiter: the sound of fine
 * porcelain smashing is the sweetest music, and his tip is ten strings lighter. The waiters double
 * up laughing. Meanwhile, in the wrecked room next door, four big dogs have slunk in and are
 * gorging on the feast among the shards and the upturned table.
 */

export default defineScene({
  seed: 3031,
  build: (kit, story) => {
    const { groups: [fresh, wreck], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    room(kit, fresh, { w: 9, d: 7, h: 3.4, back: 'lattice', floorKind: 'boards' });
    roundTable(kit, fresh, { x: 0, z: -1, r: 0.8, h: 0.8 });
    const seats: [number, number][] = [[0, -2.1], [-1, -1.5], [1, -1.5], [-1, -0.2], [1, -0.2]];
    seats.forEach(([x, z]) => stool(kit, fresh, x, z));
    const diners = [XI, CHUNLAN, DANS[0], DANS[1], DANS[3]].map((s, k) => figure(kit, fresh, s, ...seats[k]));
    const newDishes = kit.group(fresh, 0, 0, 0);
    dishes(kit, newDishes, 0.8, [[-0.3, -1.1], [0.3, -0.9], [0, -0.6], [0.35, -1.3]], rand);
    const cups = seats.map(([x, z]) => cup(kit, fresh, x * 0.55, 0.8, -1 + (z + 1) * 0.55));
    const boss = figure(kit, fresh, PROPRIETOR, 1.6, 1.2);
    const bowl = hold(kit, boss, 'cup');
    const waiters = [0, 1, 2].map(k => figure(kit, fresh, WAITER, -1.6 + k * 0.9, 2.2));
    const ding = inkGather(kit, fresh, '叮', { size: 0.5, at: at(1) + 2, dur: 0.4, scatter: at(1) + 3.2, count: 500, spread: 0.6, drop: 0.03 });
    ding.points.position.set(1.8, 2.3, 1.2);
    lights(kit, fresh, { key: [3, 6, 6], intensity: 0.9 });
    const cam1 = move(kit, fresh, [[0, [2.8, 2.2, 4.4], [0, 1, -0.9]], [at(1), [3, 1.7, 3.2], [1.2, 1.5, 1.2]], [at(1) + 7, [0.4, 1.6, 4.2], [0.4, 1.3, 1.6]]]);

    // --- The wrecked room and the dogs --------------------------------------------------------------------
    const r = restaurant(kit, wreck);
    lights(kit, wreck, { key: [2, 6, 8], intensity: 1 });
    const t2 = r.rooms[1].table; t2.rotation.z = 1.45; t2.position.y = 0.35;
    for (let k = 0; k < 18; k++) kit.mesh(new THREE.CircleGeometry(0.04 + (k % 3) * 0.02, 3).rotateX(-Math.PI / 2), tone(0xe6e0d6, true), wreck, 2.6 + rand() * 2.2, 0.01, -1.4 + rand() * 1.8);
    for (let k = 0; k < 6; k++) kit.mesh(new THREE.CircleGeometry(0.12 + rand() * 0.08, 10).rotateX(-Math.PI / 2), tone(0x8c857c, true), wreck, 2.8 + rand() * 1.6, 0.012, -1.2 + rand() * 1.2);
    const dogs = [0, 1, 2, 3].map(k => dog(kit, wreck, 2.8 + (k % 2) * 1.2, -1.2 + Math.floor(k / 2) * 1, [0x4a443e, 0x6e675f, 0x3f3a35, 0x8c857c][k]));
    dogs.forEach((d, k) => { d.group.rotation.y = k * 1.7; });
    const cam2 = move(kit, wreck, [[at(2), [0.8, 1.4, 3.6], [3.4, 0.4, -0.6]], [36, [5.8, 1.1, 2], [3.4, 0.4, -0.7]]]);

    return (seconds: number, shot: number) => {
      show(shot === 2 ? 1 : 0);
      kit.setEnv(INK_SKY.paper(0.03));
      if (shot === 2) {
        cam2(seconds);
        dogs.forEach((d, k) => d.update(seconds, 'eat', k * 1.3));
        return;
      }
      diners.forEach((f, k) => { face(f, 0, -1); f.pose({ ...(k ? G.laugh(seconds + k) : G.drink(seconds)), sit: 1 }); });
      newDishes.visible = seconds > 3;
      cups.forEach((c, k) => { c.visible = seconds > 3 + k * 0.4; });
      waiters.forEach((w, k) => {
        if (seconds < at(1)) { walkAlong(w, seconds, k * 0.6, 3 + k * 0.6, [[-1.6 + k * 0.9, 2.2], [seats[k + 1][0] * 0.9, seats[k + 1][1] + 0.9]], G.hold(seconds), 5); if (seconds > 3 + k * 0.6) { face(w, 0, -1); w.pose({ ...G.offer(seconds), bow: 0.4 }); } }
        else { w.root.position.set(0.2 + k * 0.7, 0, 2.4 + (k % 2) * 0.3); face(w, 1.6, 1.2); w.pose(k === 0 ? cue(seconds, [[at(1), t => ({ ...G.rest(t), bow: 0.3, pitch: 0.4 })], [at(2) - 3, G.guffaw]]) : seconds > at(1) + 8 ? G.guffaw(seconds + k) : G.rest(seconds)); }
      });
      face(boss, 0.2, 2.4);
      boss.pose(cue(seconds, [[0, G.folded], [at(1), t => ({ ...G.rest(t), r: { lift: 1.4, out: 0.2, twist: 0.3, bend: 1.9 }, yaw: -0.3 })], [at(1) + 4, t => ({ ...G.point(t, 'l'), mouth: 0.7 })], [at(1) + 8, G.laugh]]));
      bowl.visible = seconds > at(1) - 1;
      if (shot === 0) cam1(seconds);
      else if (seconds < at(1) + 7) { const u = span(seconds, at(1), at(1) + 7); aim(kit, fresh, [2.6 - u * 0.6, 1.8, 3], [1.6, 1.5, 1.2], 0.3); }
      else cam1(seconds);
    };
  },
});
