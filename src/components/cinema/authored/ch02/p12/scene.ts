import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, tone } from '../../../stage/figure';
import { banquetHall, canal } from '../../../stage/locations';
import { hold } from '../../../stage/performance';
import { petals } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { MASTER, QIGUAN } from '../actors';

/*
 * Chapter 2, paragraph 12. "Is it true princes sit with them as equals?" In a lantern-hung hall a
 * prince in a dragon-embroidered robe shares a bench with a young dan, pouring for him. Then the Grand
 * Canal: four months among the grain barges, the troupe's boat nosing north through the crush. On its
 * deck the master Ye Maolin claps out the beat while ten boys rehearse in rows, sleeves swinging
 * together. Last, Qiguan at the bow in the evening light, singing, and birds circle and settle on the
 * rail to listen.
 */

export default defineScene({
  seed: 2012,
  build: (kit, story) => {
    const { groups: [palace, river], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: princes sit beside them ------------------------------------------------------------
    const hall = banquetHall(kit, palace);
    const prince = figure(kit, palace, { ...CAST.official, robe: 0x2f2a26, jacket: 0x1c1816, beard: 'goatee', face: 'fine' }, -0.35, -1.75);
    // A dragon coiled on the prince's robe, in a thin vermilion line.
    const coil = new THREE.CatmullRomCurve3(Array.from({ length: 16 }, (_, k) => new THREE.Vector3(Math.sin(k * 0.9) * 0.14, 0.1 + k * 0.03, 0.2)));
    kit.mesh(new THREE.TubeGeometry(coil, 60, 0.006, 4), flat(0xc0321e), prince.torso);
    const dan = figure(kit, palace, CAST.dan, 0.35, -1.75);
    hold(kit, dan, 'cup');
    lights(kit, palace, { key: [-4, 10, 8], intensity: 1 });
    const cam1 = move(kit, palace, [[0, [0, 1.4, 1.6], [0, 1.2, -1.7]], [9, [1.8, 1.6, 0.6], [0, 1.2, -1.6]]]);

    // --- Shots 2–4: on the canal ----------------------------------------------------------------------
    const c = canal(kit, river);
    const deck = c.troupe.deck;
    const master = figure(kit, deck, MASTER, 0, -3.2);
    master.root.position.y = 0.37;
    const boys = Array.from({ length: 10 }, (_, k) => {
      const f = figure(kit, deck, { ...CAST.youth, height: 1.35 + (k % 3) * 0.05, robe: [0xe6e0d6, 0xd6d0c6, 0xcfc8bc][k % 3], jacket: [0x6e675f, 0x8c857c][k % 2] }, (k % 2 ? 0.45 : -0.45), 2.8 - Math.floor(k / 2) * 0.55);
      f.root.position.y = 0.37; f.root.rotation.y = Math.PI;
      return f;
    });
    const qiguan = figure(kit, deck, QIGUAN, 0, 5.2);
    qiguan.root.position.y = 0.37;
    const birds = Array.from({ length: 5 }, () => {
      const b = kit.group(river, 0, 0, 0);
      kit.mesh(new THREE.SphereGeometry(0.06, 8, 6), tone(0x3f3a35), b).scale.set(1, 0.8, 1.6);
      for (const side of [-1, 1]) kit.mesh(new THREE.PlaneGeometry(0.16, 0.06), tone(0x3f3a35, true), b, side * 0.09, 0.02, 0).rotation.y = side * 0.3;
      kit.mesh(new THREE.ConeGeometry(0.012, 0.04, 4), flat(0xc0321e), b, 0, 0, 0.1).rotation.x = Math.PI / 2;
      return { b, seed: rand() * 6 };
    });
    const drift = petals(kit, river, { count: 30, w: 20, h: 6, d: 10, red: false });
    lights(kit, river, { key: [-10, 8, 10], intensity: 1 });
    const cam2 = move(kit, river, [
      [at(1), [-30, 14, 26], [0, 0, -8]],
      [at(1) + 5, [-12, 4, 12], [0, 1, 0]],
      [at(2), [-4, 2.6, 4], [0, 1.4, 0]],
    ]);
    const cam3 = move(kit, river, [
      [at(2), [-4, 2.6, 4], [0, 1.4, 0]],
      [at(3), [3.6, 2.2, 1.6], [0, 1.2, 0.5]],
    ]);
    const cam4 = move(kit, river, [
      [at(3), [6.4, 1.8, 2.4], [5.2, 1.6, 0]],
      [36, [6.6, 1.7, 1.2], [5.2, 1.6, 0]],
    ], { pull: 0.4 });

    return (seconds: number, shot: number) => {
      show(shot === 0 ? 0 : 1);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.025));
        cam1(seconds);
        hall.update(seconds);
        face(prince, 0.35, -1.75); face(dan, -0.35, -1.75);
        prince.pose(cue(seconds, [[0, t => ({ ...G.laugh(t), sit: 1 })], [3, t => ({ ...G.toast(t), sit: 1 })]]));
        dan.pose(cue(seconds, [[0, t => ({ ...G.offer(t), sit: 1 })], [4, t => ({ ...G.shy(t), sit: 1 })]]));
        return;
      }
      kit.setEnv(INK_SKY.paper(0.015 + (shot === 3 ? 0.01 : 0)));
      c.update(seconds);
      drift.update(seconds);
      if (shot === 1) cam2(seconds); else if (shot === 2) cam3(seconds); else cam4(seconds);
      face(master, 0, 0);
      master.pose(shot === 2 ? { ...G.clap(seconds), pitch: -0.1 } : G.stroke(seconds));
      boys.forEach((b, k) => b.pose(shot === 2 ? { ...G.dance(seconds + (k % 2) * 0.1, 0), flutter: 0 } : { ...G.rest(seconds), sit: 1, yaw: Math.sin(seconds + k) * 0.3 }));
      qiguan.root.rotation.y = Math.PI / 2;
      qiguan.pose(shot === 3 ? { ...G.speak(seconds, 'l'), pitch: -0.25, mouth: 0.6 + 0.4 * Math.sin(seconds * 6) } : G.folded(seconds));
      birds.forEach(({ b, seed }, i) => {
        const settle = span(seconds, at(3) + 2 + i * 0.6, at(3) + 4 + i * 0.6);
        const a = seconds * 1.2 + seed;
        const orbitPos = new THREE.Vector3(5.2 + Math.cos(a) * 2.2, 2.4 + Math.sin(a * 2) * 0.4, Math.sin(a) * 1.8);
        const perch = new THREE.Vector3(5.2 + (i - 2) * 0.12, 1.02, 0.55);
        b.position.lerpVectors(orbitPos, perch, settle);
        b.rotation.y = settle < 1 ? -a : Math.PI;
        b.visible = shot === 3;
      });
    };
  },
});
