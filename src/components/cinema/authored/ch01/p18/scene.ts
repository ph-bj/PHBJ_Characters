import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue, face, figure, tone } from '../../../stage/figure';
import { bridge, hall, lattice, roof, wall } from '../../../stage/architecture';
import { rock, water, willow } from '../../../stage/nature';
import { writing } from '../../../stage/props';
import { boat } from '../../../stage/vehicles';
import { coral, hold, moon } from '../../../stage/performance';
import { mist } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 18: Lu Sulan, "a coral branch in the azure sea". The camera skims low over
 * rolling swells toward a reef where vermilion coral rises from the water; Sulan stands on the rock
 * in costume, sleeves lifting in the sea wind, as his emblem and name are written on the mist. Then
 * Suzhou, his home: the camera glides down a canal between white walls and under a humped bridge,
 * where he stands in everyday dress, sixteen years old.
 */

const A = ACTORS.sulan;

export default defineScene({
  seed: 1018,
  build: (kit, story) => {
    const { groups: [sea, town], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: the coral in the azure sea ------------------------------------------------------
    // A swell mesh, heaved every frame from time.
    const swellGeo = new THREE.PlaneGeometry(160, 160, 90, 90).rotateX(-Math.PI / 2);
    const base = Float32Array.from(swellGeo.getAttribute('position').array as Float32Array);
    kit.mesh(swellGeo, tone(0xcfc8bc), sea, 0, 0, -30);
    const heave = (t: number) => {
      const p = swellGeo.getAttribute('position');
      for (let i = 0; i < p.count; i++) {
        const x = base[i * 3], z = base[i * 3 + 2];
        p.setY(i, Math.sin(x * 0.12 + t * 0.9) * 0.45 + Math.sin(z * 0.2 + x * 0.05 + t * 1.3) * 0.35 + Math.sin((x + z) * 0.5 + t * 2) * 0.06);
      }
      p.needsUpdate = true; swellGeo.computeVertexNormals();
    };
    const reef = kit.group(sea, 0, 0, -8);
    rock(kit, reef, 0, 0, { h: 2.6, rand, shade: 0x4a443e }).scale.x *= 2.2;
    for (let k = 0; k < 5; k++) rock(kit, reef, (rand() - 0.5) * 8, -1.5 - rand() * 2, { h: 1 + rand(), rand, shade: 0x4a443e });
    for (let k = 0; k < 9; k++) coral(kit, reef, Math.cos(k * 0.55 + 2.4) * (4 + (k % 3)), Math.sin(k * 0.55 + 2.4) * 2.5 - 2.5, { h: 2 + rand() * 2.5, rand });
    for (let k = 0; k < 7; k++) coral(kit, sea, (rand() - 0.5) * 60, -30 - rand() * 30, { h: 3 + rand() * 4, rand });
    const sulan = figure(kit, reef, A.costume, 0, 0);
    sulan.root.position.y = 2.5;
    sulan.shadow.visible = false;
    moon(kit, sea, 20, 22, -90, 8);
    const spray = mist(kit, sea, { count: 12, w: 80, y: 1.2, d: 40, z: -14, size: 12, opacity: 0.6, drift: 1.4 });
    const emblem = writing(kit, sea, ['碧海珊枝', A.name], { size: 0.62, gap: 1.4, margin: 0.2, x: -4.2, y: 6.4, z: -12 });
    const seal = kit.seal(sea, A.seal, 0.55);
    seal.mesh.position.set(-4.6, 3.9, -11.9);
    lights(kit, sea, { key: [-10, 14, 10], intensity: 1.1 });
    const cam1 = move(kit, sea, [
      [0, [6, 1.2, 24], [0, 1.5, -8]],
      [8, [3, 2.2, 8], [0, 2.8, -8]],
      [14, [2.2, 3.6, -1], [0, 3.6, -8]],
      [20, [-1.2, 4.4, 2.5], [-1.8, 4.6, -9]],
    ]);

    // --- Shot 2: sixteen, of Suzhou ------------------------------------------------------------------
    water(kit, town, { w: 8, d: 200, z: -60, y: 0.02, scale: 1 });
    for (const side of [-1, 1]) {
      for (let k = 0; k < 10; k++) {
        const z = -k * 9 - 4;
        const house = kit.group(town, side * 7.5, 0, z);
        kit.box(house, tone(0xece7de), [0, 2.2, 0], [5, 4.4, 8]);
        roof(kit, house, 6.4, 9, { y: 4.4, rise: 1.4 }).rotation.y = Math.PI / 2;
        const win = lattice(kit, house, 1.4, 1, 'grid', true, -side * 2.52, 2.6, 0);
        win.rotation.y = side * -Math.PI / 2;
        // Steps down to the water.
        for (let st = 0; st < 3; st++) kit.box(house, tone(0x9c958b), [-side * (2.6 + st * 0.3), 0.5 - st * 0.18, 2], [0.3, 0.2, 1.4]);
      }
      wall(kit, town, side * 4.8, 0, side * 4.8, -95, 0.8);
    }
    bridge(kit, town, { z: -22, span: 9, rise: 2.4, w: 2.2 }).rotation.y = 0;
    for (const z of [-8, -36, -58]) willow(kit, town, 4.4, z, { h: 6, rand, strands: 26 });
    hall(kit, town, { w: 8, d: 5, h: 3, z: -100, doors: false });
    const barge = boat(kit, town, { x: 0, z: -40, len: 6, cabin: true });
    const boy = figure(kit, town, A.plain, 0.3, -22);
    boy.root.position.y = 2.5;
    hold(kit, boy, 'fan');
    const facts = writing(kit, town, ['字香畹', '年十六岁', '姑苏人'], { size: 0.3, gap: 1.4, margin: 0.3, x: -3.6, y: 3.4, z: -21, paper: 0xf4f0e8 });
    const haze = mist(kit, town, { count: 10, w: 20, y: 1.4, d: 90, z: -50, size: 10, opacity: 0.5, drift: 0.3 });
    lights(kit, town, { key: [8, 12, 6], intensity: 1 });
    const cam2 = move(kit, town, [
      [at(1), [0, 1.3, 6], [0, 2.2, -22]],
      [at(1) + 9, [0.4, 1.4, -13], [0.3, 3.2, -22]],
      [36, [2.4, 3.4, -17.5], [0.3, 3.4, -22]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.moonlit([0.2, 0.25, -1], 0.014));
        cam1(seconds);
        heave(seconds);
        spray.update(seconds);
        face(sulan, 3, 12);
        sulan.pose(cue(seconds, [[0, G.pose], [6, t => G.dance(t, 3)], [15, G.pose]]));
        emblem.set(span(seconds, 9, 13));
        seal.material.opacity = span(seconds, 13.5, 14);
      } else {
        kit.setEnv(INK_SKY.paper(0.025));
        const t = seconds - at(1);
        cam2(seconds);
        haze.update(seconds);
        barge.update(seconds);
        barge.group.position.z = -40 + t * 0.8;
        face(boy, 0, 6);
        boy.pose(cue(t, [[0, G.fan], [6, G.folded], [10, t2 => ({ ...G.fan(t2), yaw: 0.4 })]]));
        facts.set(span(t, 1.5, 6));
      }
    };
  },
});
