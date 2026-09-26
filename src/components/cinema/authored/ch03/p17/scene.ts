import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone } from '../../../stage/figure';
import { writing } from '../../../stage/props';
import { inkGather } from '../../../stage/fx';
import { move, sets, span } from '../../../stage/direct';
import { FU_SAN, GUI_FEN, OLD_WANG, PINCAI, RONGGUAN } from '../actors';
import { goitre, peddlerTray } from '../places';
import { pitTable } from '../table';

/*
 * Chapter 3, paragraph 17. The old peddler leans his whole weight against Pincai, the bottle
 * pinned between them, while Pincai shakes his head: no silver, no note, no, he lives far away. On
 * stage a young dan steps out of the curtain; one voice cries 好, and the whole house erupts, the
 * word bursting in ink over the pit again and again. Pincai jerks, the bottle leaves the old man's
 * fingers and turns over in the air in slow motion, and shatters on the bricks. The peddler
 * kneels, unhurried, and lays the pieces out on the bench one by one: six taels now. Pincai rounds
 * on him, and at the next table heads turn and fingers point.
 */

export default defineScene({
  seed: 3017,
  build: (kit, story) => {
    const { groups: [hall], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const T = pitTable(kit, hall);
    const pincai = figure(kit, hall, PINCAI, 0, 0);
    const fu = figure(kit, hall, FU_SAN, 0, 0);
    const gui = figure(kit, hall, GUI_FEN, 0, 0);
    const rong = figure(kit, hall, RONGGUAN, 0, 0);
    const wang = figure(kit, hall, OLD_WANG, 0, 0);
    goitre(kit, wang); peddlerTray(kit, wang);
    const [px, pz] = T.spot('pincai');
    const stand: [number, number] = [px - 0.05, pz - 0.95];
    const bottle = kit.mesh(new THREE.CylinderGeometry(0.025, 0.035, 0.08, 10), tone(0x9c958b), hall, 0, 0, 0);
    const pieces = Array.from({ length: 6 }, (_, k) => kit.mesh(new THREE.TetrahedronGeometry(0.025 + (k % 3) * 0.008), tone(0x9c958b), hall, 0, 0, 0));
    const debut = figure(kit, T.th.stage.deck, CAST.dan, -2.64, -2.6);
    [0, 1, 2, 3].forEach(k => { const g = inkGather(kit, hall, '好', { size: 1.4 - k * 0.2, at: at(1) + 1 + k * 1.2, dur: 0.5, scatter: at(1) + 2.4 + k * 1.2, count: 1200, spread: 2 }); g.points.position.set(-4 + k * 3, 4 + (k % 2), -2 + k * 1.5); });
    const price = writing(kit, hall, ['六两', '六吊'], { size: 0.16, paper: 0xf4f0e8, margin: 0.25, x: px - 0.4, y: 1.95, z: pz - 1.1 });
    const neighbours = [CAST.merchant, CAST.pedant].map((s, k) => figure(kit, hall, s, -3.4 + k * 0.7, -3.6));
    const cam = move(kit, hall, [
      [0, [px + 1.9, 1.5, pz + 0.6], [px - 0.05, 1.2, pz - 0.8]],
      [at(1) - 0.5, [px + 1.6, 1.45, pz + 0.3], [px - 0.05, 1.2, pz - 0.8]],
      [at(1), [T.tx + 3, 2.4, T.tz - 1], [0, 2, -8]],
      [at(1) + 6, [T.tx + 3.4, 3.2, T.tz + 2], [-1, 2.4, -3]],
      [at(2), [px + 1.3, 1.2, pz + 0.3], [px, 0.5, pz - 0.9]],
      [at(3), [px + 1.6, 1.4, pz + 0.5], [px - 0.1, 0.7, pz - 0.8]],
      [36, [px + 2.6, 1.8, pz + 1.2], [px - 0.2, 1.1, pz - 0.6]],
    ]);

    return (seconds: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.02));
      T.th.update(seconds * (seconds > at(1) + 1 && seconds < at(2) ? 4 : 1));
      cam(seconds);
      pincai.root.position.set(px, 0, pz - 0.45);
      face(pincai, stand[0], stand[1]);
      const jerk = seconds > 17.4 && seconds < 18.2 ? Math.sin((seconds - 17.4) / 0.8 * Math.PI) : 0;
      pincai.pose(cue(seconds, [
        [0, t => ({ ...G.rest(t), sit: 1, yaw: Math.sin(t * 4) * 0.4, lean: -0.1 })],
        [at(1), t => ({ ...G.rest(t), sit: 1, yaw: -0.8, pitch: -0.1 })],
        [17.4, t => ({ ...G.rest(t), sit: 1, lean: -0.2 * jerk, r: { lift: 0.3 + jerk * 1.2, out: 0.3 + jerk * 0.6, bend: 0.4 } })],
        [19, t => ({ ...G.rest(t), sit: 1, pitch: 0.4 })],
        [31, t => ({ ...G.argue(t), sit: 1 })],
      ]));
      T.sit(fu, 'fu', seconds > 31 ? { ...G.fume(seconds), yaw: -0.5 } : G.rest(seconds));
      T.sit(gui, 'gui', G.rest(seconds)); T.sit(rong, 'rong', seconds > 27 ? { ...G.point(seconds, 'l'), yaw: -0.5 } : G.rest(seconds));
      wang.root.position.set(stand[0], 0, stand[1]);
      face(wang, px, pz - 0.45);
      wang.pose(cue(seconds, [
        [0, t => ({ ...G.offer(t), bow: 0.45, lean: 0.1, mouth: 0.5 + 0.4 * Math.sin(t * 9) })],
        [at(2) + 2, t => ({ ...G.kneel(t), bow: 0.6 })],
        [at(3) - 1, t => ({ ...G.offer(t), bow: 0.3, mouth: 0.6 })],
      ]));
      // The debut, the roar.
      debut.root.position.x = -2.64 + span(seconds, at(1), at(1) + 2) * 2.6;
      debut.root.position.z = -2.6 + span(seconds, at(1), at(1) + 2) * 2.4;
      face(debut, 0, 8); debut.pose(seconds > at(1) + 2 ? G.pose(seconds) : G.rest(seconds));
      // The bottle: held, falling and turning, shattering.
      const drop = span(seconds, 17.6, 19.4);
      bottle.visible = drop < 1;
      if (drop <= 0) { wang.hands.r.getWorldPosition(bottle.position); bottle.position.sub(hall.position); }
      else { bottle.position.set(stand[0] + 0.15 * drop, 1.05 * (1 - drop * drop), stand[1] + 0.3 + 0.1 * drop); bottle.rotation.set(drop * 4, 0, drop * 6); }
      pieces.forEach((p, k) => {
        const u = Math.max(0, seconds - 19.4);
        p.visible = seconds > 19.4;
        const laid = span(seconds, 22 + k * 0.6, 22.6 + k * 0.6);
        const a = k * 1.05;
        const flung: [number, number, number] = [stand[0] + 0.15 + Math.cos(a) * Math.min(1, u * 3) * 0.3, 0.02, stand[1] + 0.4 + Math.sin(a) * Math.min(1, u * 3) * 0.25];
        const onBench: [number, number, number] = [px - 0.1 + k * 0.06, 0.46, pz + 0.4];
        p.position.set(flung[0] + (onBench[0] - flung[0]) * laid, flung[1] + (onBench[1] - flung[1]) * laid, flung[2] + (onBench[2] - flung[2]) * laid);
      });
      price.set(span(seconds, at(3), at(3) + 1.5));
      price.mesh.visible = seconds > at(3);
      neighbours.forEach((n, k) => { face(n, px, pz); n.pose(seconds > 31.5 ? G.point(seconds + k, k ? 'l' : 'r') : { ...G.rest(seconds), yaw: 0.6 }); });
    };
  },
});
