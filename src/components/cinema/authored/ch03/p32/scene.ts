import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, face, figure, tone, walkAlong } from '../../../stage/figure';
import { lights, move, sets, span } from '../../../stage/direct';
import { WAITER } from '../actors';
import { dog, restaurant } from '../places';

/*
 * Chapter 3, paragraph 32. Down at dog's-eye level among the shards and spilled food: the four big
 * dogs, fighting over the scraps, rear and snap and roll over one another in a snarling knot. Then
 * the waiters pile in with sticks and a broom, swinging and shouting; the dogs scatter out through
 * the open front of the room and away, and the waiters set about sweeping the floor.
 */

export default defineScene({
  seed: 3032,
  build: (kit, story) => {
    const { groups: [wreck], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;
    const r = restaurant(kit, wreck);
    lights(kit, wreck, { key: [2, 6, 8], intensity: 1 });
    const t2 = r.rooms[1].table; t2.rotation.z = 1.45; t2.position.y = 0.35;
    const mess = Array.from({ length: 22 }, (_, k) => kit.mesh(new THREE.CircleGeometry(k < 16 ? 0.04 + (k % 3) * 0.02 : 0.14, k < 16 ? 3 : 10).rotateX(-Math.PI / 2), tone(k < 16 ? 0xe6e0d6 : 0x8c857c, true), wreck, 2.6 + rand() * 2.2, 0.01, -1.4 + rand() * 1.8));
    const dogs = [0, 1, 2, 3].map(k => dog(kit, wreck, 0, 0, [0x4a443e, 0x6e675f, 0x3f3a35, 0x8c857c][k]));
    const men = [0, 1, 2].map(k => figure(kit, wreck, WAITER, 1 + k * 1.2, 6));
    const tools = men.map((m, k) => { const g = kit.group(m.hands.r, 0, -0.04, 0.04); kit.mesh(new THREE.CylinderGeometry(0.015, 0.015, 1.3, 5).translate(0, 0.5, 0), tone(0x5a534c), g); if (k === 2) kit.mesh(new THREE.ConeGeometry(0.14, 0.3, 8), tone(0x9c958b), g, 0, 1.2, 0); g.rotation.x = 1.2; return g; });
    const cam = move(kit, wreck, [[0, [2, 0.5, 1.8], [3.5, 0.45, -0.6]], [9, [5.2, 0.6, 1.4], [3.5, 0.45, -0.6]], [at(1), [1, 2.4, 5.4], [3.6, 0.6, -0.2]], [36, [2, 2.8, 7.6], [3.2, 0.6, 0.6]]]);

    return (seconds: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.03));
      cam(seconds);
      const chased = seconds > at(1) + 4;
      dogs.forEach((d, k) => {
        if (!chased) {
          const a = seconds * (1.6 + k * 0.2) + k * 1.57;
          const rad = 0.35 + (k % 2) * 0.25;
          d.group.position.set(3.5 + Math.cos(a) * rad, 0, -0.6 + Math.sin(a) * rad * 0.8);
          d.group.rotation.y = -a + (k % 2 ? Math.PI : 0);
          d.update(seconds, seconds < 3 ? 'eat' : 'fight', k * 1.9);
        } else {
          const u = span(seconds, at(1) + 4 + k * 0.3, at(1) + 8 + k * 0.3);
          const x0 = 3.5 + Math.cos(k * 1.57) * 0.5, z0 = -0.6 + Math.sin(k * 1.57) * 0.4;
          d.group.position.set(x0 + (k - 1.5) * 2.2 * u, 0, z0 + u * 9);
          d.group.rotation.y = Math.atan2((k - 1.5) * 2.2, 9);
          d.update(seconds, 'walk', k);
          d.group.visible = u < 1;
        }
      });
      men.forEach((m, k) => {
        const spot: [number, number] = [2.4 + k * 1.1, 0.8 - (k % 2) * 0.4];
        if (!walkAlong(m, seconds, at(1), at(1) + 2.5, [[1 + k * 1.2, 6], spot], G.rest(seconds), 7) && seconds > at(1) + 2.5) {
          face(m, 3.5, -0.6);
          const sweeping = seconds > at(1) + 9;
          m.pose(sweeping ? { ...G.hold(seconds), bow: 0.4, turn: Math.sin(seconds * 3 + k) * 0.4 } : { ...G.argue(seconds + k), r: { lift: 1.2 + Math.sin(seconds * 8 + k) * 0.8, out: 0.3, bend: 0.3 }, mouth: 1 });
          tools[k].rotation.x = sweeping ? 2.2 : 1.2 + Math.sin(seconds * 8 + k) * 0.6;
        }
      });
      mess.forEach((m, k) => { m.visible = !(seconds > at(1) + 10 + k * 0.25); });
    };
  },
});
