import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue, face, figure, tone } from '../../../stage/figure';
import { bridge, pavilion } from '../../../stage/architecture';
import { branch, ground, range, rock, water, willow } from '../../../stage/nature';
import { writing } from '../../../stage/props';
import { boat } from '../../../stage/vehicles';
import { hold } from '../../../stage/performance';
import { mist, petals, specks } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 24: Li Yulin, "a jade tree facing the wind". On a bare headland a tree of
 * pale jade bends and springs back in a gale, and Yulin stands beneath it, sleeves streaming, while
 * the emblem is written on the wind. Then Yangzhou, his home: the Slender West Lake at evening, a
 * bridge crowned with five pavilions, pleasure boats sliding under it, and Yulin on the bridge.
 */

const A = ACTORS.yulin;

export default defineScene({
  seed: 1024,
  build: (kit, story) => {
    const { groups: [cape, lake], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: the jade tree in the wind ---------------------------------------------------------
    ground(kit, cape, { w: 300, d: 300, height: 3, flatten: 8, shade: 0xe0dad0, seed: 12 });
    for (let k = 0; k < 6; k++) rock(kit, cape, -6 + k * 2.4 + rand(), 3 + rand() * 2, { h: 0.8 + rand(), rand, shade: 0x8c857c });
    // The jade tree: pale branches, every limb a pivot so the whole crown can bend in the gusts.
    const tree = kit.group(cape, 1.2, 0, -1.5);
    const limbs: THREE.Group[] = [];
    const grow = (parent: THREE.Object3D, len: number, r: number, depth: number) => {
      const pivot = kit.group(parent, 0, 0, 0);
      branch(kit, pivot, [[0, 0, 0], [(rand() - 0.5) * 0.3, len * 0.5, (rand() - 0.5) * 0.3], [0, len, 0]], r, r * 0.6, 0xe6e0d6);
      limbs.push(pivot);
      if (depth > 0) for (let k = 0; k < 3; k++) {
        const child = kit.group(pivot, 0, len * (0.55 + k * 0.2), 0);
        child.rotation.set((rand() - 0.5) * 1.4, rand() * 6, 0.5 + rand() * 0.5);
        grow(child, len * 0.62, r * 0.6, depth - 1);
      }
    };
    grow(tree, 2.6, 0.14, 3);
    // Pale leaves as a scatter of small discs round the tips.
    const leafGeo = new THREE.CircleGeometry(0.1, 8);
    limbs.slice(-20).forEach(l => { for (let k = 0; k < 8; k++) kit.mesh(leafGeo, tone(0xf4f0e8, true), l, (rand() - 0.5) * 0.5, 1 + rand() * 0.8, (rand() - 0.5) * 0.5).rotation.set(rand() * 3, rand() * 3, 0); });
    const yl = figure(kit, cape, A.costume, -0.6, 0.4);
    hold(kit, yl, 'willow');
    range(kit, cape, { z: -120, span: 400, height: 30, shade: 0xc9c2b7, seed: 61 });
    water(kit, cape, { w: 400, d: 200, z: -120, y: -0.6 });
    const gale = specks(kit, cape, { count: 1400, w: 30, h: 8, d: 20, fall: 0.1, wind: 4, swirl: 0.6, size: 0.026, dark: true, y: 3 });
    const leaves = petals(kit, cape, { count: 60, w: 16, h: 5, d: 8, red: false, wind: 6, speed: 0.4 });
    const emblem = writing(kit, cape, ['玉树临风', A.name], { size: 0.62, gap: 1.4, margin: 0.2, x: -4.6, y: 4.4, z: -4 });
    const seal = kit.seal(cape, A.seal, 0.5);
    seal.mesh.position.set(-5, 1.9, -3.95);
    lights(kit, cape, { key: [8, 12, 8], intensity: 1.1 });
    const cam1 = move(kit, cape, [
      [0, [7, 0.8, 10], [0, 2.4, -1]],
      [10, [2.5, 2, 6.5], [0.4, 2.2, -1]],
      [20, [-2.6, 2.8, 5.5], [-2.4, 3, -3]],
    ]);

    // --- Shot 2: Yangzhou, the Slender West Lake ------------------------------------------------
    water(kit, lake, { w: 200, d: 120, z: -30 });
    for (const side of [-1, 1]) {
      ground(kit, lake, { w: 60, d: 200, height: 1, flatten: 0, shade: 0xd6d0c6, x: side * 42, z: -30 }).position.y = 0.3;
      for (let k = 0; k < 8; k++) willow(kit, lake, side * 13.5, 10 - k * 9, { h: 6.5, rand, strands: 28 });
    }
    const span5 = kit.group(lake, 0, 0, -12);
    bridge(kit, span5, { span: 18, rise: 1.2, w: 3.4 });
    // Five pavilions on the bridge: a large one at the centre, four at the corners.
    pavilion(kit, span5, { r: 1.6, h: 2.2, sides: 4, base: 1.4 });
    for (const [x, z] of [[-4.5, -1.5], [4.5, -1.5], [-4.5, 1.5], [4.5, 1.5]]) pavilion(kit, span5, { x, z, r: 1.1, h: 1.8, sides: 4, base: 1.1 });
    const boats = [boat(kit, lake, { x: -6, z: -4, rot: 0.2, len: 6 }), boat(kit, lake, { x: 5, z: -22, rot: -0.1, len: 7 })];
    const boy = figure(kit, span5, A.plain, 0.4, 1.8);
    boy.root.position.y = 1.35;
    hold(kit, boy, 'fan');
    const facts = writing(kit, lake, ['字佩仙', '年十五岁', '扬州人'], { size: 0.34, gap: 1.4, margin: 0.3, x: 7.4, y: 3.6, z: -9, paper: 0xf4f0e8 });
    const evening = mist(kit, lake, { count: 10, w: 80, y: -1, d: 40, z: -40, size: 14, opacity: 0.7 });
    lights(kit, lake, { key: [-10, 8, -14], intensity: 0.9, fill: 0.5 });
    const cam2 = move(kit, lake, [
      [at(1), [-8, 1.4, 10], [0, 2, -12]],
      [at(1) + 8, [-2, 1.2, 2], [0.4, 2.8, -10.2]],
      [36, [3.2, 3, -6], [0.4, 2.8, -10.2]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.012));
        cam1(seconds);
        const gust = 0.6 + 0.4 * Math.sin(seconds * 0.9) + 0.3 * Math.sin(seconds * 2.3);
        limbs.forEach((l, i) => { l.rotation.z = -gust * 0.08 * (1 + (i % 3) * 0.3) + Math.sin(seconds * 3 + i) * 0.02; });
        gale.uniforms.uSpeed.value = 1;
        leaves.update(seconds);
        face(yl, 6, 8);
        yl.pose({ ...G.pose(seconds), flutter: 0.6 + gust * 0.6, lean: -0.08 * gust });
        emblem.set(span(seconds, 6, 10));
        seal.material.opacity = span(seconds, 11, 11.5);
      } else {
        kit.setEnv(INK_SKY.moonlit([0.1, 0.12, -1], 0.012));
        const t = seconds - at(1);
        cam2(seconds);
        evening.update(seconds);
        boats.forEach((b, i) => { b.update(seconds, i); b.group.position.z = (i ? -22 : -4) + t * (i ? 0.9 : -0.7); });
        face(boy, -3, 8);
        boy.pose(cue(t, [[0, G.fan], [7, G.folded], [11, G.fan]]));
        facts.set(span(t, 2, 6));
      }
    };
  },
});
