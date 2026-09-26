import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, tone } from '../../../stage/figure';
import { hall, roof, theatreStage, crowd } from '../../../stage/architecture';
import { ground, range } from '../../../stage/nature';
import { table } from '../../../stage/props';
import { drum, hold, moon, tiger } from '../../../stage/performance';
import { petals } from '../../../stage/fx';
import { DUSK, lights, move, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 28: Wang Lanbao as the swordswoman Hongxian. Under a full moon he runs the
 * ridges of a palace's roofs, twin dragon swords on his back, drops through a hall's doors to the
 * table where the golden box waits, and is gone. Then on the stage, war drums thundering at the
 * side like the emperor's jie drum, he fights a tiger, and as it falls ten thousand red flowers burst
 * over the stage.
 */

const A = ACTORS.lanbao;

export default defineScene({
  seed: 1028,
  build: (kit, story) => {
    const { groups: [roofs, stageSet], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: Hongxian over the roofs ------------------------------------------------------------
    ground(kit, roofs, { w: 400, d: 400, height: 0.4, flatten: 40, shade: 0x8c857c });
    // A run of hall roofs, the path across their ridges.
    const ridges: [number, number, number][] = [];
    for (let k = 0; k < 6; k++) {
      const x = -24 + k * 9, z = (k % 2) * 3 - 2, h = 3.4 + (k % 3) * 0.6;
      const w = 7.5;
      const g = kit.group(roofs, x, 0, z);
      kit.box(g, tone(0xb9b2a8), [0, h / 2, 0], [w, h, 5]);
      roof(kit, g, w + 1.4, 6.4, { y: h, rise: 1.6 });
      ridges.push([x, h + 1.7, z]);
    }
    const treasury = hall(kit, roofs, { w: 10, d: 6, h: 4, x: 30, z: 0 });
    table(kit, roofs, { x: 30, z: 0, w: 1.2, d: 0.6 }).position.y = 0.45;
    const box = kit.mesh(new THREE.BoxGeometry(0.3, 0.2, 0.22), flat(0xd6d0c6), roofs, 30, 1.37, 0);
    moon(kit, roofs, 10, 24, -80, 8);
    range(kit, roofs, { z: -140, span: 400, height: 30, shade: 0x6e675f, seed: 91 });
    const hongxian = figure(kit, roofs, A.costume, -24, -2);
    hongxian.shadow.visible = false;
    for (const side of [-1, 1]) { const s = kit.box(hongxian.torso, tone(0x2f2a26), [side * 0.08, 0.2, -0.16], [0.03, 0.9, 0.03]); s.rotation.z = side * 0.35; }
    lights(kit, roofs, { key: [10, 20, -30], intensity: 0.8, fill: 0.3 });
    const path = new THREE.CatmullRomCurve3([...ridges.map(([x, y, z]) => new THREE.Vector3(x, y, z)), new THREE.Vector3(28, 5.9, 2), new THREE.Vector3(29.4, 0.45, 1.4)]);

    // --- Shot 2: Slaying the Tiger, the war drums -----------------------------------------------------
    theatreStage(kit, stageSet, { w: 9, d: 7, h: 1.2, tall: 4.4 });
    const big = tiger(kit, stageSet, { x: 1.6, z: -0.6, rot: -Math.PI / 2, s: 0.9 });
    big.group.position.y = 1.2;
    const fighter = figure(kit, stageSet, A.costume, -1.4, -0.4);
    fighter.root.position.y = 1.2;
    hold(kit, fighter, 'sword');
    const drums = [drum(kit, stageSet, -6, 2), drum(kit, stageSet, -7.4, 1)];
    const drummer = figure(kit, stageSet, { ...CAST.shixie, headwear: 'crown', beard: 'goatee' }, -6.6, 2.9);
    const spots: [number, number][] = [];
    for (let r = 0; r < 4; r++) for (let k = 0; k < 14; k++) spots.push([-7 + k + (rand() - 0.5) * 0.3, 6 + r * 1.2]);
    const house = crowd(kit, stageSet, spots, rand);
    const bloom = petals(kit, stageSet, { count: 220, w: 10, h: 7, d: 8, red: true, y: 1.2, speed: 0.9 });
    lights(kit, stageSet, { key: [2, 12, 8], intensity: 0.9 });
    const cam2 = move(kit, stageSet, [
      [at(1), [-8, 2.2, 6.5], [-6.4, 1.4, 2]],
      [at(1) + 5, [2, 2.4, 6], [0, 2, -0.5]],
      [at(1) + 11, [-2.6, 1.7, 3], [0.4, 2.2, -0.6]],
      [36, [0, 4.8, 10], [0, 2.8, -1]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(DUSK(0.012));
        const u = span(seconds, 0.5, 15);
        const p = path.getPoint(u), ahead = path.getPoint(Math.min(1, u + 0.01));
        hongxian.root.position.copy(p);
        hongxian.root.rotation.y = Math.atan2(ahead.x - p.x, ahead.z - p.z);
        const running = seconds < 14.5;
        hongxian.pose(running ? { bow: 0.35, walk: seconds * 11, stride: 1, l: { lift: -0.6, out: 0.4, bend: 0.4 }, r: { lift: -0.6, out: 0.4, bend: 0.4 } } : { ...G.offer(seconds), kneel: 0.4 });
        box.visible = seconds < 16.5;
        treasury.open(span(seconds, 13, 14));
        // A chase camera beside her, then waiting inside the hall.
        const c = new THREE.Vector3().copy(p).add(new THREE.Vector3(-3, 1.6, 7));
        const cam = seconds < 13 ? c : new THREE.Vector3(33, 2.4, 5.2);
        const look = seconds < 13 ? p.clone().add(new THREE.Vector3(3, 0.5, 0)) : new THREE.Vector3(29.6, 1.3, 0.4);
        if (kit.portrait()) cam.addScaledVector(cam.clone().sub(look), 0.5);
        kit.camera.position.copy(cam).add(roofs.position);
        kit.camera.lookAt(look.add(roofs.position));
      } else {
        kit.setEnv(INK_SKY.paper(0.02));
        const t = seconds - at(1);
        cam2(seconds);
        house.update(seconds);
        drums.forEach((d, i) => d.update(seconds + i, 6));
        face(drummer, -6.7, 1.5);
        drummer.pose({ ...G.rest(t), l: { lift: 1.2 + Math.sin(t * 6) * 0.4, out: 0.3, bend: 0.8 }, r: { lift: 1.2 + Math.sin(t * 6 + Math.PI) * 0.4, out: 0.3, bend: 0.8 } });
        const leap = span(t, 4, 5) * (1 - span(t, 5.2, 6));
        big.update(seconds, leap);
        big.group.position.x = 1.6 - leap * 1.2;
        const slain = span(t, 9, 10.5);
        big.group.rotation.z = slain * 1.4;
        big.group.position.y = 1.2 - slain * 0.25;
        face(fighter, big.group.position.x, -0.6);
        fighter.pose(cue(t, [[0, G.pose], [3.6, tt => ({ ...G.dance(tt, 5), flutter: 0, kneel: 0.3 })], [7, tt => ({ ...G.point(tt), bow: 0.3 })], [9, tt => ({ ...G.point(tt), bow: 0.5, kneel: 0.3 })], [11, G.pose]]));
        bloom.update(seconds);
        bloom.mesh.visible = t > 10.4;
      }
    };
  },
});
