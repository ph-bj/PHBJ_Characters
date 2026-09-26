import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { plaque } from '../../../stage/architecture';
import { gateLane, street } from '../../../stage/locations';
import { writing } from '../../../stage/props';
import { drum } from '../../../stage/performance';
import { cart, horse } from '../../../stage/vehicles';
import { lights, move, sets, span } from '../../../stage/direct';
import { PINCAI, SI_ER } from '../actors';
import { sanle } from '../places';

/*
 * Chapter 3, paragraph 8. Morning at the Mei gate: Pincai, freshly dressed, steps out with Si'er
 * and a string of cash. The playhouse street: five theatres with their name boards, carts and
 * horses wedged wheel to wheel, the two of them threading between. At the Lianjin troupe's board
 * the bill says there is no show today; then a drum thunders along the street and they follow it
 * to the Sanle Garden. Inside, a crane down over the packed pit and galleries to a table by the
 * stage door, where an usher lays a cushion and sets down tea as the first act begins.
 */

export default defineScene({
  seed: 3008,
  build: (kit, story) => {
    const { groups: [home, road, hall], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;

    // --- Setting out ------------------------------------------------------------------------------------
    const gl = gateLane(kit, home, { winter: true });
    const p1 = figure(kit, home, PINCAI, 0, -1);
    const b1 = figure(kit, home, SI_ER, 0.6, -1.4);
    const cash = kit.group(b1.hands.r, 0, -0.06, 0);
    kit.mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.28, 10).rotateZ(Math.PI / 2), tone(0x4a443e), cash);
    lights(kit, home, { key: [8, 10, 10], intensity: 1 });
    const cam1 = move(kit, home, [[0, [4, 1.6, 7], [0, 1.6, 0]], [at(1), [-4, 1.7, 7.5], [-2, 1.3, 3]]]);

    // --- The playhouse street --------------------------------------------------------------------------
    const st = street(kit, road);
    const names = ['三乐园', '广德楼', '庆乐园', '中和园', '广和楼'];
    names.forEach((n, k) => {
      const side = k % 2 ? 1 : -1;
      const b = plaque(kit, road, 0.7, 2, side * 5.6, 3, -6 - k * 9);
      b.rotation.y = -side * Math.PI / 2;
      writing(kit, b, n, { size: 0.36, margin: 0.1, z: 0.07 });
    });
    const carts = Array.from({ length: 7 }, (_, k) => cart(kit, road, { x: (k % 2 ? 2.2 : -2.2) + (k % 3) * 0.3, z: -4 - k * 5.5, rot: k % 2 ? Math.PI : 0 }));
    const nag = horse(kit, road, { x: 3.4, z: -18, rot: Math.PI / 2 });
    const bill = writing(kit, road, ['联锦班', '今日传差'], { size: 0.3, paper: 0xf4f0e8, margin: 0.3, x: -5.5, y: 2, z: -30 });
    bill.mesh.rotation.y = Math.PI / 2;
    const beat = drum(kit, road, 4.6, -40, 0.5);
    const drummer = figure(kit, road, CAST.servant, 5.2, -40);
    const p2 = figure(kit, road, PINCAI, 0.3, 4);
    const b2 = figure(kit, road, SI_ER, 0.9, 4.6);
    const crowd = Array.from({ length: 8 }, (_, k) => figure(kit, road, [CAST.merchant, CAST.servant, CAST.pedant, CAST.guest][k % 4], (k % 2 ? 3.8 : -3.8) + Math.sin(k) * 0.4, -3 - k * 4.5));
    lights(kit, road, { key: [8, 12, 10], intensity: 1 });
    const cam2 = move(kit, road, [[at(1), [0.4, 2.6, 10], [0, 1.4, -8]], [at(2), [-1.8, 1.8, -20], [-4.6, 1.8, -30]], [at(2) + 5, [1.2, 1.8, -32], [4.6, 1.2, -40]], [at(3), [2.4, 2.2, -34], [4.6, 1.6, -44]]]);

    // --- Inside the Sanle Garden -----------------------------------------------------------------------
    const th = sanle(kit, hall);
    const [tx, tz] = th.table;
    const p3 = figure(kit, hall, PINCAI, tx - 1.05, tz);
    const b3 = figure(kit, hall, SI_ER, tx - 1.6, tz + 0.8);
    const usher = figure(kit, hall, CAST.servant, tx + 1.4, tz + 1.8);
    const cushion = kit.box(hall, tone(0x6e675f), [tx - 1.05, 0.47, tz + 0.7], [0.55, 0.06, 0.4]);
    const act = [CAST.clown, CAST.escort].map((spec, k) => figure(kit, th.stage.deck, spec, (k - 0.5) * 2, 0));
    const cam3 = move(kit, hall, [[at(3), [0, 7, 11], [0, 1.4, -4]], [at(3) + 5, [-3, 3.5, 3], [tx, 1, tz]], [36, [-4.2, 1.5, -1.2], [tx - 0.6, 1.1, tz]]]);

    return (seconds: number, shot: number) => {
      show(shot === 0 ? 0 : shot === 3 ? 2 : 1);
      kit.setEnv(INK_SKY.paper(0.02));
      if (shot === 0) {
        cam1(seconds);
        gl.gate.open(span(seconds, 0, 1.5));
        walkAlong(p1, seconds, 1, at(1), [[0, -1], [0, 2.4], [-3, 3.4], [-8, 3.4]], G.behind(seconds), 5);
        walkAlong(b1, seconds, 1.3, at(1), [[0.6, -1.4], [0.6, 2.6], [-2.4, 3.8], [-7.4, 3.8]], G.hold(seconds), 5.5);
        return;
      }
      if (shot < 3) {
        cam2(seconds);
        st.update(seconds);
        carts.forEach((c, k) => c.update(seconds + k, Math.sin(seconds * 0.7 + k) > 0.3));
        nag.update(seconds, false, 1);
        crowd.forEach((f, k) => { f.root.rotation.y = k % 2 ? -Math.PI / 2 : Math.PI / 2; f.pose(k % 3 ? G.rest(seconds + k) : G.speak(seconds + k)); });
        walkAlong(p2, seconds, at(1), at(2) + 2, [[0.3, 4], [-0.6, -6], [0.4, -14], [-1, -22], [-4, -28.5]], G.rest(seconds), 5);
        walkAlong(b2, seconds, at(1) + 0.3, at(2) + 2.3, [[0.9, 4.6], [0.2, -5.6], [1, -13.6], [-0.4, -22], [-3.4, -28]], G.hold(seconds), 5.5);
        if (seconds > at(2) + 2) {
          const drawn = seconds > at(2) + 4.6;
          if (!drawn) { face(p2, -5.5, -30); p2.pose(cue(seconds, [[at(2) + 2, G.read], [at(2) + 3.8, t => ({ ...G.rest(t), yaw: 0.8 })]])); face(b2, -5.5, -30); b2.pose(G.rest(seconds)); }
          else {
            walkAlong(p2, seconds, at(2) + 4.6, at(3), [[-4, -28.5], [0, -34], [3.2, -39]], G.rest(seconds), 5);
            walkAlong(b2, seconds, at(2) + 4.8, at(3), [[-3.4, -28], [0.6, -33.6], [3.6, -38.4]], G.hold(seconds), 5.5);
          }
        }
        bill.set(span(seconds, at(2), at(2) + 2));
        face(drummer, 4.6, -40);
        drummer.pose({ ...G.rest(seconds), r: { lift: 0.9 + Math.abs(Math.sin(seconds * 9)) * 0.5, out: 0.3, bend: 0.7 }, l: { lift: 0.9 + Math.abs(Math.sin(seconds * 9 + 1.5)) * 0.5, out: 0.3, bend: 0.7 } });
        beat.update(seconds, 9);
        return;
      }
      cam3(seconds);
      th.update(seconds);
      act.forEach((f, k) => { f.root.rotation.y = (k - 0.5) * 0.8; f.pose(k ? G.argue(seconds) : G.laugh(seconds)); });
      const t = seconds - at(3);
      walkAlong(usher, t, 0, 3, [[tx + 1.4, tz + 1.8], [tx + 0.1, tz + 1.4], [tx - 0.5, tz + 0.6]], G.hold(t), 5);
      if (t > 3) { face(usher, tx - 1.05, tz); usher.pose(cue(t, [[3, tt => ({ ...G.offer(tt), bow: 0.5 })], [6, G.folded]])); }
      cushion.visible = t > 4;
      face(p3, tx, tz - 3);
      p3.pose(t > 4.5 ? { ...G.drink(t), sit: 1 } : G.rest(t));
      face(b3, tx - 1.05, tz); b3.pose(G.folded(t));
    };
  },
});
