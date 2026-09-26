import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, VERMILION } from '../../../stage/figure';
import { courtyard } from '../../../stage/locations';
import { bareTree, ground } from '../../../stage/nature';
import { hall, wall } from '../../../stage/architecture';
import { ingots, writing } from '../../../stage/props';
import { hold } from '../../../stage/performance';
import { fireworks, petals } from '../../../stage/fx';
import { DUSK, lights, move, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 27: Wang Lanbao, "silver flowers on a fiery tree". A lantern-festival night:
 * a great bare tree hung with vermilion lanterns, fireworks bursting over the roofs, and Lanbao in
 * his martial costume on the wall-top, plumes swaying, as his emblem is written. Then at dawn in the
 * courtyard he whirls through a sword form like a startled swan, and when a rich patron comes with a
 * tray of silver he sheathes the blade and turns his back.
 */

const A = ACTORS.lanbao;

export default defineScene({
  seed: 1027,
  build: (kit, story) => {
    const { groups: [festival, yard], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: the fiery tree -------------------------------------------------------------------
    ground(kit, festival, { w: 300, d: 300, height: 0.5, flatten: 30, shade: 0x9c958b });
    hall(kit, festival, { w: 14, d: 7, h: 3.6, z: -16, doors: false });
    hall(kit, festival, { w: 10, d: 6, h: 3.2, x: -14, z: -8, doors: false }).group.rotation.y = 0.5;
    wall(kit, festival, -10, -2, 10, -2, 3);
    const tree = bareTree(kit, festival, 3, -5, 9, rand, 0x2f2a26);
    const lanterns: THREE.Mesh[] = [];
    tree.updateMatrixWorld(true);
    tree.traverse(o => { const m = o as THREE.Mesh; if (m.isMesh && rand() < 0.6) { const p = new THREE.Vector3(); (m.geometry as THREE.BufferGeometry).computeBoundingBox(); m.geometry.boundingBox!.getCenter(p); const l = kit.mesh(new THREE.SphereGeometry(0.14, 10, 8), flat(VERMILION), tree, p.x, p.y - 0.25, p.z); l.scale.y = 1.3; lanterns.push(l); } });
    const bursts = fireworks(kit, festival, { bursts: 12, perBurst: 240, start: 0.5, every: 1.2, size: 0.14, speed: 4.5 });
    bursts.position.set(0, 3, -10);
    const lb = figure(kit, festival, A.costume, -2, -2);
    lb.root.position.y = 3.2;
    hold(kit, lb, 'sword');
    const emblem = writing(kit, festival, ['火树银花', A.name], { size: 0.6, gap: 1.4, margin: 0.2, x: -6, y: 6.5, z: -4 });
    const facts = writing(kit, festival, ['年十七', '扬州人', '联锦部'], { size: 0.32, gap: 1.4, margin: 0.2, x: -7.8, y: 5.4, z: -4 });
    lights(kit, festival, { key: [4, 8, 10], intensity: 0.7, fill: 0.2 });
    const cam1 = move(kit, festival, [
      [0, [6, 1.4, 10], [3, 6, -5]],
      [8, [0, 2.6, 6], [-1.6, 4.4, -2]],
      [16, [-4, 4.2, 5.5], [-4.8, 5.4, -3]],
    ]);

    // --- Shot 2: a startled swan, a swimming dragon --------------------------------------------------
    courtyard(kit, yard);
    const swordsman = figure(kit, yard, A.costume, 0, 0);
    const blade = hold(kit, swordsman, 'sword');
    const patron = figure(kit, yard, { ...CAST.merchant, headwear: 'official', robe: 0x4a443e }, -6, 4);
    const servant = figure(kit, yard, CAST.servant, -6.8, 4.5);
    const tray = kit.group(servant.hands.r, 0, -0.08, 0.15);
    ingots(kit, tray, 0, 0, 0, 5);
    const leaves = petals(kit, yard, { count: 60, w: 12, h: 5, d: 10, red: true, z: -1 });
    lights(kit, yard, { key: [-6, 8, 8], intensity: 1 });
    const cam2 = move(kit, yard, [
      [at(1), [3, 0.7, 4], [0, 1.4, 0]],
      [at(1) + 6, [-3, 1.8, 4.5], [0, 1.3, 0]],
      [at(1) + 12, [2.8, 1.7, 4.6], [-2, 1.5, 1.2]],
      [36, [3.4, 1.8, 1.6], [-1.8, 1.5, 2]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(DUSK(0.02));
        cam1(seconds);
        lanterns.forEach((l, i) => { l.rotation.z = Math.sin(seconds * 1.5 + i) * 0.1; });
        face(lb, 3, 8);
        lb.pose(cue(seconds, [[0, G.pose], [5, t => ({ ...G.dance(t, 4), flutter: 0 })], [10, t => ({ ...G.point(t, 'r'), pitch: -0.3 })]]));
        emblem.set(span(seconds, 6, 10)); facts.set(span(seconds, 10, 12));
      } else {
        kit.setEnv(INK_SKY.paper(0.02));
        const t = seconds - at(1);
        cam2(seconds);
        leaves.update(seconds);
        // The sword form: whirling turns, lunges, a leap.
        const form = t < 8;
        if (form) {
          swordsman.root.rotation.y = t * 2.4 + Math.sin(t * 1.3) * 1.2;
          swordsman.root.position.set(Math.sin(t * 0.8) * 1.4, Math.max(0, Math.sin((t - 3) * 2.2)) * (t > 3 && t < 4.4 ? 0.6 : 0), Math.cos(t * 0.6) * 0.8);
          swordsman.pose({ lean: Math.sin(t * 3) * 0.2, bow: Math.sin(t * 2) * 0.2, r: { lift: 1.2 + Math.sin(t * 4) * 0.9, out: 0.6 + Math.sin(t * 3) * 0.4, bend: 0.2 }, l: { lift: 1.4 + Math.sin(t * 4 + 2) * 0.6, out: 0.9, bend: 0.6 }, walk: t * 8, stride: 0.6, kneel: t > 5.5 && t < 6.6 ? 0.5 : 0 });
        } else {
          swordsman.root.position.set(0, 0, 0);
          face(swordsman, t > 12.5 ? 4 : -6, t > 12.5 ? -4 : 4);
          swordsman.pose(cue(t, [[8, G.rest], [12.5, G.behind]]));
          blade.visible = t < 12;
        }
        face(patron, 0, 0); face(servant, 0, 0);
        const approach = span(t, 7, 10.5);
        patron.root.position.set(-6 + approach * 4, 0, 4 - approach * 2.4);
        servant.root.position.set(-6.8 + approach * 4, 0, 4.5 - approach * 2.4);
        patron.pose({ ...(t > 10.5 ? G.salute(t, 0.35) : G.rest(t)), walk: t > 7 && t < 10.5 ? t * 5 : undefined });
        servant.pose({ ...G.offer(t), walk: t > 7 && t < 10.5 ? t * 5 : undefined });
        if (t > 13) patron.pose(G.fume(t));
      }
    };
  },
});
