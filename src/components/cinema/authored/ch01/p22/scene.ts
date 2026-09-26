import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone } from '../../../stage/figure';
import { pavilion } from '../../../stage/architecture';
import { cloudBank, ground, plumTree, reeds, water, willow } from '../../../stage/nature';
import { bookshelf, table, zither } from '../../../stage/props';
import { boat } from '../../../stage/vehicles';
import { hold, moon } from '../../../stage/performance';
import { mist, petals } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 22: Jin Shufang. At dawn among crabapple and jasmine the camera drifts close to
 * him, and above, an immortal on a cloud leans to look and nearly tumbles from it. By a moonlit river
 * a scholar plays the zither to him (琴挑); then the boat pulls away and he runs along the bank after
 * it (秋江). Last, the heavenly library: shelves of books stacked into the clouds, and Shufang among
 * them with a scroll, its immortal keeper.
 */

const A = ACTORS.shufang;

export default defineScene({
  seed: 1022,
  build: (kit, story) => {
    const { groups: [dawn, river, library], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: like a crabapple newly opened ----------------------------------------------------
    ground(kit, dawn, { w: 200, d: 200, height: 1, flatten: 10, shade: 0xe0dad0 });
    for (let k = 0; k < 5; k++) plumTree(kit, dawn, -6 + k * 3 + rand(), -3 - (k % 2) * 2.5, { h: 3.6 + rand(), rand, blossoms: 150 });
    // Jasmine bushes: low domes starred with white buds.
    for (let k = 0; k < 6; k++) {
      const b = kit.group(dawn, -5 + k * 2.2, 0, 1.8 + (k % 2) * 0.8);
      kit.mesh(new THREE.SphereGeometry(0.6, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), tone(0x4a443e), b).scale.y = 0.9;
      for (let j = 0; j < 14; j++) { const a = rand() * 6.28, e = rand() * 1.2; kit.mesh(new THREE.SphereGeometry(0.035, 6, 5), tone(0xf4f0e8), b, Math.cos(a) * Math.cos(e) * 0.6, Math.sin(e) * 0.55, Math.sin(a) * Math.cos(e) * 0.6); }
    }
    const sf = figure(kit, dawn, A.plain, 0, 0);
    const high = cloudBank(kit, dawn, 1.6, 6.4, -3, { w: 2.4, puffs: 9, rand, size: 0.4 });
    const immortal = figure(kit, high, CAST.deity, 0, 0);
    immortal.root.position.y = 0.4; immortal.shadow.visible = false;
    const fall = petals(kit, dawn, { count: 80, w: 10, h: 6, d: 8, z: -1 });
    lights(kit, dawn, { key: [-8, 6, 8], intensity: 1 });
    const cam1 = move(kit, dawn, [
      [0, [3, 1.2, 6], [0, 1.4, 0]],
      [8, [0.9, 1.55, 1.8], [0, 1.55, 0]],
      [12, [0.8, 2.2, 3.2], [0.8, 4, -1.5]],
      [16, [1.5, 5.5, 4.5], [1.6, 6.6, -3]],
    ]);

    // --- Shot 2: Flirting with a Zither, and The Autumn River -----------------------------------------
    water(kit, river, { w: 300, d: 40, z: -14, y: -0.1 });
    ground(kit, river, { w: 300, d: 30, height: 0.4, flatten: 0, shade: 0xd6d0c6, z: 10 });
    reeds(kit, river, 0, 5, { w: 60, d: 1.5, count: 200, h: 1.1, rand });
    pavilion(kit, river, { x: -3, z: 0, r: 1.8, h: 2.5, sides: 4 });
    table(kit, river, { x: -3, z: 0, w: 1.3, d: 0.5, h: 0.72 }).position.y = 0.5;
    zither(kit, river, -3, 1.22, 0);
    const player = figure(kit, river, CAST.wangxun, -3, -0.7);
    player.root.position.y = 0.5;
    const nun = figure(kit, river, { ...A.costume, headwear: 'lady' }, -1.2, 0.8);
    nun.root.position.y = 0.5;
    const skiff = boat(kit, river, { x: 2, z: -6, rot: Math.PI / 2, len: 5, cabin: false });
    const traveller = figure(kit, skiff.deck, CAST.wangxun, 0, 0.6);
    traveller.root.position.y = 0.37; traveller.root.rotation.y = Math.PI;
    willow(kit, river, 6, 3, { h: 7, rand });
    moon(kit, river, -10, 14, -80, 6);
    const haze = mist(kit, river, { count: 10, w: 80, y: 0.2, d: 20, z: -12, size: 12, opacity: 0.6 });
    lights(kit, river, { key: [-6, 10, -10], intensity: 0.8, fill: 0.5 });
    const cam2 = move(kit, river, [
      [at(1), [-1, 1.6, 5], [-2.6, 1.4, 0]],
      [at(1) + 5, [-0.2, 1.8, 4], [-2, 1.3, 0.2]],
      [at(1) + 8, [3, 2.2, 7], [2, 1, -5]],
      [at(2), [6, 2.4, 8], [4, 1.3, -2]],
    ]);

    // --- Shot 3: the immortal keeper of the heavenly library -------------------------------------
    cloudBank(kit, library, 0, -1, 0, { w: 30, puffs: 40, rand, size: 1.3 });
    const stacks: THREE.Object3D[] = [];
    for (let k = 0; k < 16; k++) {
      const a = k / 16 * Math.PI * 2, r = 5 + (k % 2) * 1.2;
      for (let lv = 0; lv < 3 + (k % 3); lv++) {
        const sh = bookshelf(kit, library, { x: Math.cos(a) * r, z: Math.sin(a) * r, w: 2, h: 2.4, rot: -a - Math.PI / 2, rand });
        sh.position.y = sh.userData.y = lv * 2.5;
        stacks.push(sh);
      }
    }
    const keeper = figure(kit, library, { ...A.costume, headwear: 'crown' }, 0, 0);
    keeper.root.position.y = 0.2; keeper.shadow.visible = false;
    hold(kit, keeper, 'brush');
    lights(kit, library, { key: [0, 16, 6], intensity: 1 });
    const cam3 = move(kit, library, [
      [at(2), [0, 2, 3.4], [0, 1.6, 0]],
      [36, [0.5, 9, 3], [0, 4, -2]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam1(seconds);
        fall.update(seconds);
        face(sf, 3, 5);
        sf.pose(cue(seconds, [[0, G.folded], [5, G.shy], [9, G.folded]]));
        face(immortal, 0, 0);
        const lean = span(seconds, 11, 13.5);
        immortal.pose({ ...G.stroke(seconds), bow: lean * 0.9, pitch: 0.4 });
        high.position.y = 6.4 - lean * 0.6 + Math.sin(seconds * 2) * 0.05;
        high.rotation.z = lean * 0.15;
      } else if (shot === 1) {
        kit.setEnv(INK_SKY.moonlit([-0.2, 0.3, -1], 0.02));
        const t = seconds - at(1);
        cam2(seconds);
        haze.update(seconds);
        face(player, -1.2, 0.8);
        player.pose(t < 7 ? { sit: 1, l: { lift: 0.9, out: 0.3, bend: 0.9 + Math.sin(t * 5) * 0.1 }, r: { lift: 0.9, out: 0.3, bend: 0.9 + Math.sin(t * 6 + 1) * 0.1 }, pitch: 0.3 } : G.rest(t));
        player.root.visible = t < 7;
        const leaving = span(t, 7, 12);
        skiff.group.position.x = 2 + leaving * 16;
        skiff.update(seconds);
        traveller.pose(G.salute(t, 0.2));
        if (t < 7) { face(nun, -3, -0.7); nun.pose(cue(t, [[0, G.shy], [4, G.fan]])); }
        else { nun.root.position.set(-1.2 + leaving * 8, 0, 0.8 + leaving * 2); face(nun, 18, -6); nun.pose({ ...G.point(t, 'r'), walk: t * 9, stride: 1 - span(t, 11, 12), flutter: 1 }); }
      } else {
        kit.setEnv(INK_SKY.paper(0.01));
        const t = seconds - at(2);
        cam3(seconds);
        stacks.forEach((s, i) => { s.position.y = s.userData.y + Math.sin(t * 0.5 + i) * 0.08; });
        keeper.root.rotation.y = Math.sin(t * 0.3) * 0.5;
        keeper.pose(cue(t, [[0, G.read], [4, G.pose]]));
      }
    };
  },
});
