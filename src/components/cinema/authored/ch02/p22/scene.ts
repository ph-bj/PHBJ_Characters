import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { floor, hall, wall } from '../../../stage/architecture';
import { boat } from '../../../stage/vehicles';
import { table } from '../../../stage/props';
import { water } from '../../../stage/nature';
import { lights, move, sets } from '../../../stage/direct';
import { parlour } from '../wang';
import { OLD_WEI } from '../actors';

/*
 * Chapter 2, paragraph 22. "My father now clerks in a salt office." A salt yard by the river: white
 * cones of salt higher than a man, porters with shoulder-poles, barges at the landing, and in an open
 * office at the side Old Wei clicking an abacus over a ledger. Then back in the parlour Wenhui, on
 * his kang, slowly nods his approval, and Pincai lets out his breath.
 */

export default defineScene({
  seed: 2022,
  build: (kit, story) => {
    const { groups: [yard, room1], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: the salt administration ------------------------------------------------------------
    floor(kit, yard, 80, 60, { kind: 'flag', shade: 0xcfc8bc });
    water(kit, yard, { w: 200, d: 40, z: -30, y: -0.2 });
    for (let k = 0; k < 8; k++) kit.mesh(new THREE.ConeGeometry(2 + rand() * 0.8, 3 + rand() * 1.4, 20), tone(0xf4f0e8), yard, -12 + k * 3.4, 1.6, -8 - (k % 2) * 3.4);
    const barges = [boat(kit, yard, { x: -6, z: -16, rot: Math.PI / 2, len: 10, cabin: false }), boat(kit, yard, { x: 8, z: -18, rot: Math.PI / 2, len: 12, cabin: false })];
    barges.forEach(b => { b.group.position.y = -0.2; });
    const office = hall(kit, yard, { x: 8, z: 2, w: 7, d: 4, h: 3, bays: 3, base: 0.3, doors: false });
    table(kit, office.body, { w: 1.4, d: 0.7 });
    const abacus = kit.group(office.body, 0.2, 0.82, 0.1);
    kit.box(abacus, tone(0x3f3a35), [0, 0.02, 0], [0.4, 0.03, 0.2]);
    for (let r = 0; r < 7; r++) for (let b = 0; b < 5; b++) kit.mesh(new THREE.SphereGeometry(0.012, 6, 4), tone(0x1c1816), abacus, -0.15 + r * 0.05, 0.05, -0.07 + b * 0.035);
    wall(kit, yard, -20, 8, 20, 8, 2.6);
    const wei = figure(kit, office.body, OLD_WEI, 0, -0.7);
    const porters = Array.from({ length: 4 }, (_, k) => {
      const f = figure(kit, yard, { ...CAST.servant, cut: 'short', face: 'coarse' }, -8 + k * 3, -2);
      const pole = kit.group(f.torso, 0, 0.42, 0);
      kit.mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.8, 5), tone(0x3f3a35), pole).rotation.z = Math.PI / 2;
      for (const side of [-1, 1]) kit.mesh(new THREE.CylinderGeometry(0.18, 0.15, 0.25, 12), tone(0xe6e0d6), pole, side * 0.85, -0.7, 0);
      return f;
    });
    lights(kit, yard, { key: [10, 12, 8], intensity: 1.1 });
    const cam1 = move(kit, yard, [[0, [-10, 5, 12], [-2, 1.4, -6]], [9, [2, 2.2, 8], [6, 1.4, 0]], [18, [8.6, 1.6, 4.6], [8, 1.3, 1.7]]]);

    // --- Shot 2: Wenhui nods ------------------------------------------------------------------------
    const p = parlour(kit, room1);
    const wenhui = figure(kit, room1, CAST.wenhui, ...p.kangSeat);
    wenhui.root.position.y = 0.07;
    const pincai = figure(kit, room1, CAST.pincai, 0.4, -1.3);
    const cam2 = move(kit, room1, [[at(1), [0.4, 1.4, -1.9], [0.7, 1.35, -3.1]], [36, [-1.8, 1.6, 1.4], [0.5, 1.2, -2]]]);

    return (seconds: number, shot: number) => {
      show(shot);
      kit.setEnv(INK_SKY.paper(0.02));
      if (shot === 0) {
        cam1(seconds);
        barges.forEach((b, i) => b.update(seconds, i));
        face(wei, 0, 0.1);
        wei.pose({ ...G.write(seconds), sit: 1, r: { lift: 0.9, out: 0.2 + Math.abs(Math.sin(seconds * 8)) * 0.08, bend: 1 } });
        porters.forEach((f, k) => walkAlong(f, seconds, k * 0.8, 14 + k * 0.8, [[-8 + k * 3, -2], [0, 0], [10 + k, -4]], { ...G.rest(seconds), bow: 0.2, l: { lift: 1.6, out: 0.4, bend: 1.6 } }, 6));
      } else {
        cam2(seconds);
        face(wenhui, 0.4, 0); face(pincai, 0.7, -3.1);
        const t = seconds - at(1);
        wenhui.pose({ ...G.stroke(t), sit: 1, pitch: 0.15 + Math.max(0, Math.sin(t * 2)) * 0.2 * (t > 3 && t < 9 ? 1 : 0) });
        pincai.pose(cue(t, [[0, G.speak], [6, G.folded], [10, t2 => ({ ...G.folded(t2), pitch: -0.1 })]]));
      }
    };
  },
});
