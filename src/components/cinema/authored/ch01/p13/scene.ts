import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue, face, figure, tone } from '../../../stage/figure';
import { cloudBank, peony, plumTree, water } from '../../../stage/nature';
import { pavilion } from '../../../stage/architecture';
import { table, writing } from '../../../stage/props';
import { theatre } from '../../../stage/locations';
import { hold, moon, placard, tower } from '../../../stage/performance';
import { mist, petals, specks } from '../../../stage/fx';
import { blendEnv, DUSK, lights, move, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 13: Yuan Baozhu, first in the 《花选》. The camera rises out of a sea of cloud
 * to the jade tower (琼楼), where a tree of pearls (珠树) glimmers on the terrace and Baozhu stands at
 * the rail as the banners of his emblem and name unfurl. In a pavilion among peonies he paints, then
 * rises into the 《霓裳》 dance. On the teahouse stage he dances while the placards of his four famous
 * scenes drop one by one. Last, alone on a frozen lake under the moon: clear as ice, pure as jade.
 */

const A = ACTORS.baozhu;

export default defineScene({
  seed: 1013,
  build: (kit, story) => {
    const { groups: [sky, garden, stageSet, ice], show } = sets(kit, 4);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: the jade tower above the clouds ---------------------------------------------------
    const base = kit.group(sky, 0, 6, 0);
    tower(kit, base, { levels: 3, w: 6, h: 3, shade: 0x8c857c });
    const pearls = plumTree(kit, base, 4.6, 3.2, { h: 4.2, rand, blossoms: 160, red: false });
    pearls.position.y = 0.8;
    for (let k = 0; k < 7; k++) cloudBank(kit, sky, Math.cos(k * 0.9) * 14, 4 + (k % 3), Math.sin(k * 0.9) * 12 - 4, { w: 12, puffs: 12, rand, size: 0.9 });
    cloudBank(kit, sky, 0, 3.4, 0, { w: 22, puffs: 30, rand, size: 1.2 });
    moon(kit, sky, -30, 34, -90, 9);
    const baozhu = figure(kit, base, A.costume, -1.4, 3.4);
    baozhu.root.position.y = 0.8;
    hold(kit, baozhu, 'fan');
    // Two silk banners hang from the eaves, the emblem and the name.
    const banners = [['琼楼珠树', 1.35], [A.name, -0.2]].map(([text, x]) => {
      const b = kit.group(base, x as number + 0.8, 4.3, 3.6);
      kit.box(b, tone(0xf4f0e8), [0, -1.3, 0], [0.62, 2.6, 0.02]);
      kit.box(b, tone(0x3f3a35), [0, 0, 0], [0.8, 0.06, 0.06]);
      const w = writing(kit, b, text as string, { size: 0.42, margin: 0.1, x: 0, y: -1.3, z: 0.02 });
      return { b, w };
    });
    const facts = writing(kit, base, A.facts, { size: 0.24, gap: 1.35, margin: 0.2, x: 2.9, y: 3.2, z: 3.62, paper: 0xf4f0e8 });
    const seal = kit.seal(base, A.seal, 0.5);
    seal.mesh.position.set(2.9, 2.3, 3.65);
    const sea = mist(kit, sky, { count: 14, w: 60, y: 4, d: 40, size: 16, opacity: 0.8, drift: 0.9 });
    lights(kit, sky, { key: [-8, 20, 10], intensity: 1 });
    const cam1 = move(kit, sky, [
      [0, [8, 2, 22], [0, 7, 0]],
      [5, [4, 9, 14], [0, 9, 2]],
      [10, [0.6, 7.9, 8.4], [0.4, 7.9, 3.5]],
    ]);

    // --- Shot 2: painter and poet among the peonies ---------------------------------------------
    pavilion(kit, garden, { r: 2.6, h: 2.8, base: 0.4 });
    table(kit, garden, { x: 0.4, z: -0.6, w: 1.4, d: 0.7 }).position.y = 0.4;
    kit.mesh(new THREE.PlaneGeometry(0.8, 0.5).rotateX(-Math.PI / 2), tone(0xf4f0e8), garden, 0.4, 1.23, -0.6);
    const blooms = Array.from({ length: 14 }, (_, k) => {
      const a = k / 14 * Math.PI * 2, r = 4 + (k % 3) * 0.7;
      return peony(kit, garden, Math.cos(a) * r, 0.6 + (k % 2) * 0.2, Math.sin(a) * r, { s: 1.8 });
    });
    for (const bloom of blooms) kit.mesh(new THREE.SphereGeometry(0.5, 10, 8), tone(0x4a443e), garden, bloom.group.position.x, 0.25, bloom.group.position.z).scale.y = 0.6;
    const painter = figure(kit, garden, A.costume, 0.3, -1.5);
    painter.root.position.y = 0.4;
    hold(kit, painter, 'brush');
    const drift = petals(kit, garden, { count: 60, w: 10, h: 4, d: 10, red: true });
    lights(kit, garden, { key: [6, 10, 8], intensity: 1 });
    const cam2 = move(kit, garden, [
      [at(1), [5.5, 1.3, 5], [0.3, 1.1, -1]],
      [at(1) + 4, [2.2, 1.6, 2.4], [0.3, 1.5, -1.2]],
      [at(2), [-3.2, 2.4, 4.2], [0.2, 1.6, -1.2]],
    ]);

    // --- Shot 3: his famous scenes -------------------------------------------------------------------
    const house = theatre(kit, stageSet);
    const dancer = figure(kit, stageSet, A.costume, 0, -8);
    dancer.root.position.y = 1.2;
    hold(kit, dancer, 'fan');
    const boards = ['鹊桥', '密誓', '惊梦', '寻梦'].map((play, i) => placard(kit, stageSet, play, { x: [-3.4, -2.5, 2.5, 3.4][i], y: 9, z: -5.2 + (i % 2) * 0.3, size: 0.3 }));
    lights(kit, stageSet, { key: [2, 12, 6], intensity: 0.9 });
    const cam3 = move(kit, stageSet, [
      [at(2), [0, 2.4, 11], [0, 2.6, -6]],
      [at(2) + 5, [-2.5, 2.8, 4], [0, 2.8, -7]],
      [at(3), [1.8, 2.6, -1.4], [0, 2.8, -7.5]],
    ]);

    // --- Shot 4: clear as ice, pure as jade -----------------------------------------------------------
    water(kit, ice, { w: 200, d: 200, shade: 0xf0ece4, line: 0xb9b2a8, scale: 0.3 });
    const shards = new THREE.InstancedMesh(new THREE.BoxGeometry(0.4, 0.04, 0.3), tone(0xe6e0d6), 60);
    const m = new THREE.Matrix4();
    for (let k = 0; k < 60; k++) { m.makeRotationY(rand() * 3).setPosition((rand() - 0.5) * 16, 0.02, (rand() - 0.5) * 12 - 3); shards.setMatrixAt(k, m); }
    ice.add(shards);
    moon(kit, ice, 6, 14, -60, 7);
    for (let k = 0; k < 5; k++) plumTree(kit, ice, -9 + k * 4.5, -14 - (k % 2) * 3, { h: 3.5, rand, blossoms: 50, red: false });
    const pure = figure(kit, ice, A.plain, 0, 0);
    const frost = specks(kit, ice, { count: 300, w: 20, h: 8, d: 16, fall: 0.3, wind: 0.1, size: 0.014, dark: true, y: 4 });
    lights(kit, ice, { key: [4, 8, -10], intensity: 0.8, fill: 0.4 });
    const cam4 = move(kit, ice, [
      [at(3), [-1.5, 0.6, 7], [0, 1.4, 0]],
      [36, [0.4, 1.5, 3], [0, 1.55, 0]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.moonlit([-0.3, 0.35, -1], 0.012));
        cam1(seconds);
        sea.update(seconds);
        face(baozhu, 0.4, 12);
        baozhu.pose(cue(seconds, [[0, G.pose], [5, t => G.dance(t)]]));
        banners.forEach(({ b, w }, i) => { b.scale.y = Math.max(0.01, span(seconds, 3 + i * 1.2, 4.5 + i * 1.2)); w.set(span(seconds, 4 + i * 1.2, 6 + i * 1.2)); b.rotation.z = Math.sin(seconds * 1.2 + i) * 0.03; });
        facts.set(span(seconds, 6.5, 8.5));
        seal.material.opacity = span(seconds, 8.6, 9);
      } else if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.02));
        const t = seconds - at(1);
        cam2(seconds);
        drift.update(seconds);
        blooms.forEach((b, i) => b.open(0.6 + 0.4 * Math.sin(t * 0.5 + i) ** 2));
        face(painter, 0.4, t < 4.4 ? -0.6 : 4);
        painter.pose(cue(t, [[0, G.write], [4.4, G.pose], [5.6, tt => G.dance(tt, 1)]]));
      } else if (shot === 2) {
        kit.setEnv(blendEnv(INK_SKY.paper(0.02), DUSK(0.02), 0.25));
        const t = seconds - at(2);
        cam3(seconds);
        house.update(seconds);
        dancer.root.position.x = Math.sin(t * 0.6) * 1.6;
        dancer.root.rotation.y = Math.sin(t * 0.9) * 0.8;
        dancer.pose(G.dance(t));
        boards.forEach((b, i) => { b.position.y = 9 - span(t, 0.8 + i * 2.2, 1.6 + i * 2.2) * 4.6 + Math.sin(t * 2 + i) * 0.03; });
      } else {
        kit.setEnv(INK_SKY.moonlit([0.1, 0.25, -1], 0.03));
        const t = seconds - at(3);
        cam4(seconds);
        frost.uniforms.uSpeed.value = 1;
        face(pure, -1, 6);
        pure.pose(cue(t, [[0, G.folded], [3.5, tt => ({ ...G.folded(tt), pitch: -0.25 })]]));
      }
    };
  },
});
