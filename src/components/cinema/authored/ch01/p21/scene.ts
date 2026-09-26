import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue, face, figure, tone } from '../../../stage/figure';
import { crowd, pavilion, theatreStage } from '../../../stage/architecture';
import { ground, pine, plumTree, range, rock } from '../../../stage/nature';
import { lamp, table, writing } from '../../../stage/props';
import { hold } from '../../../stage/performance';
import { mist, specks } from '../../../stage/fx';
import { DUSK, lights, move, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 21: Jin Shufang, "luminous snow on Mount Qian". The camera climbs a snowbound
 * cliff where the emblem is carved into the rock, to a pine ledge where Shufang stands in the falling
 * snow. In a pavilion on the mountain he plays the flute over a game of Go, a recluse among the pines.
 * Then the stage in the dark: one lamp, a desk, and Shufang as Xiaoqing inscribing the song, the
 * house hushed before him.
 */

const A = ACTORS.shufang;

export default defineScene({
  seed: 1021,
  build: (kit, story) => {
    const { groups: [cliff, peak, night], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: the emblem carved in the snowy cliff --------------------------------------------
    ground(kit, cliff, { w: 300, d: 300, height: 2, flatten: 6, shade: 0xf0ece4 });
    const face1 = kit.group(cliff, 0, 0, -6);
    for (let k = 0; k < 9; k++) rock(kit, face1, -9 + k * 2.2, -3.5 - rand() * 1.5, { h: 9 + rand() * 5, rand, shade: 0xb9b2a8 });
    kit.box(face1, tone(0xb9b2a8), [0, 4.5, 1.2], [4.4, 7.4, 0.3]);
    const carved = writing(kit, face1, ['嵰山艳雪', A.name], { size: 0.8, gap: 1.4, margin: 0.3, x: 0, y: 4.6, z: 1.37 });
    const facts = writing(kit, face1, A.facts, { size: 0.34, gap: 1.4, margin: 0.2, x: -1.6, y: 2.5, z: 1.37 });
    const ledge = kit.group(cliff, 4.5, 0, -2);
    kit.box(ledge, tone(0x9c958b), [0, 1.5, 0], [3, 3, 3]);
    pine(kit, ledge, 0.8, -0.6, { h: 5, rand }).position.y = 3;
    const sf = figure(kit, ledge, A.costume, -0.4, 0.6);
    sf.root.position.y = 3;
    range(kit, cliff, { z: -90, span: 300, height: 50, shade: 0xe0dad0, seed: 41 });
    const snow1 = specks(kit, cliff, { count: 1800, w: 30, h: 16, d: 20, fall: 0.8, wind: 0.4, size: 0.028, dark: true, y: 7 });
    lights(kit, cliff, { key: [-6, 12, 10], intensity: 1 });
    const cam1 = move(kit, cliff, [
      [0, [0, 0.8, 7], [0, 3, -5]],
      [6, [-1.5, 4.8, 5], [0, 4.4, -5]],
      [12, [7.5, 5.4, 4], [4.2, 4.4, -1.6]],
    ]);

    // --- Shot 2: flute and chess ---------------------------------------------------------------------
    ground(kit, peak, { w: 300, d: 300, height: 3, flatten: 8, shade: 0xf0ece4, seed: 4 });
    pavilion(kit, peak, { r: 2.2, h: 2.6, sides: 4, base: 0.4 });
    table(kit, peak, { w: 0.8, d: 0.8, h: 0.7 }).position.y = 0.4;
    // The Go board with stones in play.
    kit.box(peak, tone(0xb9b2a8), [0, 1.13, 0], [0.62, 0.05, 0.62]);
    const stones = new THREE.InstancedMesh(new THREE.SphereGeometry(0.016, 8, 6), tone(0xffffff), 60);
    const m = new THREE.Matrix4(), c = new THREE.Color();
    for (let k = 0; k < 60; k++) { m.makeScale(1, 0.5, 1).setPosition((Math.floor(rand() * 13) - 6) * 0.042, 1.165, (Math.floor(rand() * 13) - 6) * 0.042); stones.setMatrixAt(k, m); stones.setColorAt(k, c.setHex(k % 2 ? 0xf4f0e8 : 0x1c1816)); }
    peak.add(stones);
    const flutist = figure(kit, peak, A.plain, -0.9, 0.2);
    flutist.root.position.y = 0.4;
    const flute = hold(kit, flutist, 'flute');
    for (let k = 0; k < 6; k++) pine(kit, peak, -12 + k * 5 + rand() * 2, -8 - rand() * 4, { h: 6 + rand() * 3, rand });
    plumTree(kit, peak, 3.4, 1.4, { h: 3.4, rand, blossoms: 80 });
    range(kit, peak, { z: -80, span: 300, height: 40, shade: 0xd6d0c6, seed: 42 });
    const cloud = mist(kit, peak, { count: 12, w: 80, y: -1, d: 40, z: -20, size: 16, opacity: 0.8, drift: 0.7 });
    const snow2 = specks(kit, peak, { count: 900, w: 20, h: 10, d: 16, fall: 0.5, wind: 0.2, size: 0.025, dark: true, y: 5 });
    lights(kit, peak, { key: [6, 10, 6], intensity: 1 });
    const cam2 = move(kit, peak, [
      [at(1), [-6, 3.6, 8], [0, 1.2, 0]],
      [at(1) + 7, [2.2, 1.6, 2.6], [-0.6, 1.4, 0.2]],
      [at(2), [0.6, 2.2, 0.5], [0, 1.1, 0]],
    ]);

    // --- Shot 3: “Inscribing the Song” ----------------------------------------------------------
    theatreStage(kit, night, { w: 8, d: 6, h: 1.2, tall: 4 });
    table(kit, night, { x: 0.6, z: -0.6, w: 1.2, d: 0.6 }).position.y = 1.2;
    const glow = lamp(kit, night, { x: 1.0, z: -0.7, y: 2.02, h: 0.3, power: 5, range: 6 });
    const xiaoqing = figure(kit, night, A.costume, 0.4, -1.5);
    xiaoqing.root.position.y = 1.2;
    hold(kit, xiaoqing, 'brush');
    const song = writing(kit, night, ['冷雨幽窗', '不可听'], { size: 0.07, gap: 1.4, margin: 0.2 });
    song.mesh.rotation.x = -Math.PI / 2; song.mesh.position.set(0.4, 2.035, -0.55);
    kit.mesh(new THREE.PlaneGeometry(0.5, 0.36).rotateX(-Math.PI / 2), tone(0xf4f0e8), night, 0.4, 2.03, -0.55);
    const spots: [number, number][] = [];
    for (let r = 0; r < 5; r++) for (let k = 0; k < 12; k++) spots.push([-6 + k + (rand() - 0.5) * 0.3, 5 + r * 1.1]);
    const audience = crowd(kit, night, spots, rand);
    lights(kit, night, { key: [2, 8, 6], intensity: 0.5, fill: 0.1 });
    const cam3 = move(kit, night, [
      [at(2), [0, 1.6, 10], [0.4, 2.4, -1]],
      [36, [1.6, 2.6, 1.4], [0.5, 2.2, -0.9]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam1(seconds);
        snow1.uniforms.uSpeed.value = 1;
        carved.set(span(seconds, 1.5, 5));
        facts.set(span(seconds, 5, 7.5));
        face(sf, 0, 8);
        sf.pose(cue(seconds, [[0, G.folded], [8, G.pose]]));
      } else if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.015));
        const t = seconds - at(1);
        cam2(seconds);
        cloud.update(seconds);
        snow2.uniforms.uSpeed.value = 1;
        face(flutist, 0, 0);
        const playing = t < 8.6;
        flute.visible = playing;
        flutist.pose(playing
          ? { sit: 1, r: { lift: 1.3, out: 0.55, twist: 0.4, bend: 1.4 }, l: { lift: 1.25, out: -0.1, twist: -0.3, bend: 1.3 }, yaw: 0.5 + Math.sin(t) * 0.05, pitch: 0.05, roll: 0.15 }
          : { ...G.think(t), sit: 1, r: { lift: 0.9 + span(t, 9, 10) * 0.4, out: 0.3, bend: 0.4 } });
      } else {
        kit.setEnv(DUSK(0.04));
        const t = seconds - at(2);
        cam3(seconds);
        glow.update(seconds);
        audience.update(seconds * 0.3);
        face(xiaoqing, 0.4, -0.55);
        xiaoqing.pose(cue(t, [[0, G.write], [6, G.weep], [8.5, G.write]]));
        song.set(span(t, 0.5, 6));
      }
    };
  },
});
