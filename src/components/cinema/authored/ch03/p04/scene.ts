import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, face, figure, tone } from '../../../stage/figure';
import { DARK } from '../../../stage/architecture';
import { cloudBank, ground, range } from '../../../stage/nature';
import { book } from '../../../stage/props';
import { inkGather, mist } from '../../../stage/fx';
import { lights, move, orbit, sets, span } from '../../../stage/direct';
import { ACTORS, BOYS } from '../../ch01/actors';
import { PINCAI } from '../actors';
import { pincaiRoom } from '../places';

/*
 * Chapter 3, paragraph 4. Pincai's weighing, made literal: in a white void of mist a giant
 * steelyard hangs from a post, Qinguan standing alone on one pan and the eight of the Manual
 * crowded on the other. The beam rocks, and slowly the eight sink: heavenly as Qinguan is, he may
 * not outweigh them all. Back on the kang Pincai frowns and taps the book; perhaps it flatters
 * them. Around him the eight turn to ink and blow away as a doubting 疑 gathers over the page.
 */

const EIGHT = [ACTORS.baozhu, ACTORS.huifang, ACTORS.sulan, ACTORS.shufang, ACTORS.yulin, ACTORS.lanbao, ACTORS.guibao, ACTORS.chunxi];

export default defineScene({
  seed: 3004,
  build: (kit, story) => {
    const { groups: [void_, bedroom], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- The steelyard ---------------------------------------------------------------------------------
    ground(kit, void_, { w: 200, d: 200, height: 1, flatten: 30, shade: 0xe6e0d6 });
    range(kit, void_, { z: -90, span: 300, height: 26, shade: 0xd6d0c6, seed: 304 });
    for (let k = 0; k < 6; k++) cloudBank(kit, void_, -20 + k * 8, 1 + (k % 2), -10 - (k % 3) * 4, { w: 8, puffs: 7, rand, size: 0.8 });
    kit.mesh(new THREE.CylinderGeometry(0.2, 0.3, 11, 10), tone(DARK), void_, 0, 5.5, -2);
    const beam = kit.group(void_, 0, 10.6, -1.7);
    kit.mesh(new THREE.CylinderGeometry(0.12, 0.08, 12, 10).rotateZ(Math.PI / 2), tone(0x4a443e), beam);
    for (let k = -5; k <= 5; k++) kit.mesh(new THREE.SphereGeometry(0.05, 6, 4), tone(0xe6e0d6), beam, k, 0.12, 0.08);
    const pans = [-5, 5].map(x => {
      const hanger = kit.group(void_, x, 0, -1.7);
      for (const a of [0, 2.1, 4.2]) { const l = kit.mesh(new THREE.CylinderGeometry(0.015, 0.015, 5, 4), tone(DARK), hanger, Math.cos(a) * 0.9, 7.6, Math.sin(a) * 0.9); l.rotation.set(Math.sin(a) * 0.17, 0, -Math.cos(a) * 0.17); }
      kit.mesh(new THREE.CylinderGeometry(1.4, 1.2, 0.2, 24), tone(0x6e675f), hanger, 0, 5, 0);
      return hanger;
    });
    const qin = figure(kit, pans[0], BOYS.qinguan, 0, 0);
    qin.root.position.y = 5.1;
    const eight = EIGHT.map((a, k) => { const f = figure(kit, pans[1], a.costume, Math.cos(k * 0.785) * 0.8, Math.sin(k * 0.785) * 0.8); f.root.position.y = 5.1; f.root.scale.setScalar(0.85); return f; });
    const haze = mist(kit, void_, { count: 8, w: 50, y: 1, d: 20, z: -14, size: 14, opacity: 0.5 });
    lights(kit, void_, { key: [6, 14, 10], intensity: 1 });
    const cam1 = orbit(kit, void_, [0, 6.6, -1.7], { r: 15, y: 7.5, a0: -0.35, a1: 0.35, t0: 0, t1: at(1), lookY: 6.6 });

    // --- Doubt ------------------------------------------------------------------------------------------
    const r = pincaiRoom(kit, bedroom);
    const [kx, kz] = r.kang;
    const reader = figure(kit, bedroom, PINCAI, kx - 0.4, kz + 0.1);
    reader.root.position.y = 0.53;
    const tome = book(kit, bedroom, { x: kx + 0.1, y: 0.8, z: kz + 0.1, w: 0.2, d: 0.28, title: '花选' });
    const ghosts = EIGHT.map((a, k) => { const ang = -1 + k * 0.28; const f = figure(kit, bedroom, a.plain, kx + Math.sin(ang) * 2.4, kz + 0.4 + Math.cos(ang) * 2.4); return f; });
    const doubt = inkGather(kit, bedroom, '疑', { size: 0.9, at: at(1) + 7, dur: 3, count: 1600, spread: 2 });
    doubt.points.position.set(kx + 0.1, 2, kz + 0.2);
    lights(kit, bedroom, { key: [3, 4, 5], intensity: 0.7, fill: 0.3 });
    const cam2 = move(kit, bedroom, [[at(1), [kx + 1.6, 1.3, kz + 2.2], [kx - 0.2, 1.05, kz]], [at(1) + 7, [kx + 0.9, 1.15, kz + 1.2], [kx, 0.95, kz + 0.1]], [36, [kx + 2.4, 2, kz + 3.6], [kx, 1.4, kz]]]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.015));
        cam1(seconds);
        haze.update(seconds);
        // The beam rocks, then settles with the eight sinking.
        const settle = span(seconds, 3, 15);
        const tilt = Math.sin(seconds * 1.6) * 0.14 * (1 - settle) - 0.1 * settle;
        beam.rotation.z = tilt;
        pans[0].position.y = -Math.sin(tilt) * 5 + 0; pans[1].position.y = Math.sin(tilt) * 5;
        face(qin, 5, 4); qin.pose(G.pose(seconds));
        eight.forEach((f, k) => { f.root.rotation.y = k * 0.785 + Math.PI; f.pose(G.dance(seconds, k)); });
        return;
      }
      kit.setEnv(INK_SKY.paper(0.05));
      cam2(seconds);
      face(reader, kx + 2, kz + 3);
      const t = seconds - at(1);
      reader.pose({ ...G.think(t), sit: 1, bow: -0.2, r: t > 4 && t < 7 ? { lift: 0.9 + Math.abs(Math.sin(t * 6)) * 0.15, out: 0.2, bend: 0.6 } : G.think(t).r });
      tome.open(1 - span(t, 12, 13));
      ghosts.forEach((f, k) => { f.fade(1 - span(t, 6 + k * 0.4, 7 + k * 0.4)); face(f, kx, kz); f.pose(G.folded(seconds + k)); f.root.position.y = span(t, 6 + k * 0.4, 9 + k * 0.4) * 0.6; });
    };
  },
});
