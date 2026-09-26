import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue, face, figure, flat, tone, VERMILION } from '../../../stage/figure';
import { bamboo, bareTree, ground, plumTree, range, reeds, rock, water } from '../../../stage/nature';
import { gate, hall, theatreStage } from '../../../stage/architecture';
import { writing } from '../../../stage/props';
import { boat } from '../../../stage/vehicles';
import { hold } from '../../../stage/performance';
import { mist, petals, specks } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 15: Su Huifang. One long drifting shot down an autumn river: from the gate of
 * the official house where he was born, a small boat carries the boy through reeds and mist past
 * leafless trees to the red lanterns of a riverside stage, where a tree of white jade blossoms
 * stands (秋水为神，琼花作骨). Then in a bamboo grove, the grove of integrity, he writes a poem at a
 * stone table and rises to perform among the stalks, first of his day in beauty and art.
 */

const A = ACTORS.huifang;

export default defineScene({
  seed: 1015,
  build: (kit, story) => {
    const { groups: [river, grove], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: drifting from the official house to the pear orchard ----------------------------
    water(kit, river, { w: 400, d: 40, z: 0, shade: 0xece7de, line: 0x8c857c, scale: 0.7 });
    for (const side of [-1, 1]) {
      const bank = ground(kit, river, { w: 400, d: 60, height: 1, flatten: 0, shade: 0xd6d0c6, z: side * 38 });
      bank.position.y = 0.3;
      reeds(kit, river, 0, side * 8.5, { w: 120, d: 2, count: 260, h: 1.2, rand });
    }
    const home = kit.group(river, -30, 0.3, -14);
    hall(kit, home, { w: 10, d: 6, h: 3.4, z: -5 });
    gate(kit, home, { w: 2.8, h: 3, wallSpan: 18 });
    for (const side of [-1, 1]) kit.mesh(new THREE.SphereGeometry(0.25, 10, 8), flat(0xf4f0e8), home, side * 1.8, 2.6, 0.5);
    for (let k = 0; k < 7; k++) bareTree(kit, river, -18 + k * 7 + rand() * 2, -12 - rand() * 4, 5 + rand() * 2, rand);
    const theatre = kit.group(river, 32, 0.3, -13);
    theatreStage(kit, theatre, { w: 7, d: 5.5, tall: 3.6 });
    for (let k = -2; k <= 2; k++) kit.mesh(new THREE.SphereGeometry(0.3, 12, 10), flat(VERMILION), theatre, k * 1.6, 5.4, 3);
    plumTree(kit, river, 26, -9.5, { h: 5, rand, blossoms: 200, red: false });
    range(kit, river, { z: -120, span: 500, height: 30, shade: 0xc9c2b7, seed: 15 });
    const skiff = boat(kit, river, { x: -30, z: -2, rot: Math.PI / 2, len: 5, cabin: false });
    const boy = figure(kit, skiff.deck, { ...A.plain, height: 1.3 }, 0, 0.6);
    boy.root.position.y = 0.37;
    boy.root.rotation.y = -Math.PI / 2;
    const boatman = figure(kit, skiff.deck, { headwear: 'cap', robe: 0x6e675f, cut: 'short', face: 'plain' }, 0, -1.8);
    boatman.root.position.y = 0.37;
    const pole = kit.mesh(new THREE.CylinderGeometry(0.03, 0.03, 4, 6), tone(0x3f3a35), boatman.hands.r, 0, -0.4, 0);
    pole.rotation.x = 0.3;
    const leaves = specks(kit, river, { count: 500, w: 80, h: 10, d: 20, fall: 0.35, wind: 0.8, size: 0.06, dark: true, y: 5, z: -4 });
    const fog = mist(kit, river, { count: 16, w: 120, y: 0.8, d: 20, z: -4, size: 14, opacity: 0.6, drift: 0.6 });
    lights(kit, river, { key: [10, 12, 8], intensity: 1 });
    const words = writing(kit, river, ['秋水为神', '琼花作骨'], { size: 0.5, gap: 1.5, margin: 0.2, x: 26, y: 5.2, z: -5 });

    // --- Shot 2: integrity and art in the bamboo ------------------------------------------------
    ground(kit, grove, { w: 200, d: 200, height: 1, flatten: 10, shade: 0xd9d3c9 });
    const clumps = Array.from({ length: 16 }, (_, k) => {
      const a = k / 16 * Math.PI * 2, r = 6 + (k % 3) * 2.5;
      return bamboo(kit, grove, Math.cos(a) * r, Math.sin(a) * r - 2, { h: 9 + rand() * 3, count: 9, rand, spread: 2 });
    });
    water(kit, grove, { w: 6, d: 4, x: -3, z: 2.5, y: 0.03 });
    rock(kit, grove, -5.4, 1.4, { h: 1.6, rand });
    kit.mesh(new THREE.CylinderGeometry(0.6, 0.5, 0.75, 16), tone(0x9c958b), grove, 1.2, 0.375, -1.2);
    kit.mesh(new THREE.PlaneGeometry(0.6, 0.4).rotateX(-Math.PI / 2), tone(0xf4f0e8), grove, 1.2, 0.76, -1.2);
    const lines = writing(kit, grove, ['尚气节', '善权变'], { size: 0.08, gap: 1.4, margin: 0.2 });
    lines.mesh.rotation.x = -Math.PI / 2; lines.mesh.position.set(1.2, 0.77, -1.2);
    const hf = figure(kit, grove, A.costume, 1.2, -2.0);
    const fan = hold(kit, hf, 'fan');
    const brush = hold(kit, hf, 'brush');
    const fall = petals(kit, grove, { count: 70, w: 10, h: 7, d: 10, red: false, z: -1 });
    lights(kit, grove, { key: [-6, 12, 5], intensity: 1 });
    const cam2 = move(kit, grove, [
      [at(1), [3.4, 1.3, 1.6], [1.2, 0.9, -1.4]],
      [at(1) + 6, [3.2, 1.8, 3.6], [1.0, 1.4, -1.5]],
      [at(1) + 12, [-2.8, 1.5, 3.2], [0.6, 1.5, -1.4]],
      [36, [-0.4, 2.8, 6.6], [0.6, 1.6, -1.4]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.018));
        const u = span(seconds, 0, 17);
        const bx = -30 + u * 56;
        skiff.group.position.x = bx;
        skiff.update(seconds);
        fog.update(seconds);
        leaves.uniforms.uSpeed.value = 1;
        boatman.pose({ ...G.hold(seconds), bow: 0.2 + Math.sin(seconds * 1.4) * 0.15, l: { lift: 1.1, out: 0.2, bend: 0.6 } });
        boy.pose(cue(seconds, [[0, t => ({ ...G.folded(t), yaw: 1.2 })], [5, G.folded], [12, t => ({ ...G.folded(t), yaw: -0.8, pitch: -0.2 })]]));
        const cx = bx + 4 - u * 2, cy = 3 - u * 1.4;
        kit.camera.position.set(river.position.x + cx, cy, 9 * (kit.portrait() ? 1.5 : 1) - u * 3);
        kit.camera.lookAt(river.position.x + bx + 2 + u * 3, 1.3 + u * 1.4, -4 - u * 3);
        words.set(span(seconds, 12.5, 16));
      } else {
        kit.setEnv(INK_SKY.paper(0.025));
        const t = seconds - at(1);
        cam2(seconds);
        clumps.forEach(c => c.update(seconds, 1.4));
        fall.update(seconds);
        const writingPart = t < 7;
        fan.visible = !writingPart; brush.visible = writingPart;
        lines.set(span(t, 0.5, 5.5));
        if (writingPart) { face(hf, 1.2, -1.2); hf.pose(G.write(t)); }
        else {
          hf.root.rotation.y = (t - 7) * 0.7;
          hf.root.position.x = 1.2 + Math.sin((t - 7) * 0.5) * 1.2;
          hf.pose(cue(t, [[7, tt => G.dance(tt, 1)], [15, G.pose]]));
        }
      }
    };
  },
});
