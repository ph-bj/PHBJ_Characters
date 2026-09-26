import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY, petalGeometry } from '../../../cinemaKit';
import { CAST, G, cue, face, figure } from '../../../stage/figure';
import { cityGate, pavilion } from '../../../stage/architecture';
import { cloudBank, ground, lotus, range, water, willow } from '../../../stage/nature';
import { table } from '../../../stage/props';
import { album, hold } from '../../../stage/performance';
import { horse } from '../../../stage/vehicles';
import { mist } from '../../../stage/fx';
import { lights, move, scroll, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 20: the quatrains for Sulan, as one journey. A great lotus opens on the pond
 * and Sulan rises from it (芙蓉出水); beyond, horsemen gallop toward a mountain pass and falter
 * before it; a stair of cloud lets the heavenly melody down to the mortal dust; and at the end the
 * camera lifts over rivers and mountains, the realm an emperor would trade. Then, in a garden
 * pavilion, Ziyu and Zhongqing lean over the album together as the page turns.
 */

const POEM = ['芙蓉出水露红颜', '肥瘦相宜合燕环', '若使今人行往事', '断无胡马入撞关', '此曲只应天上有', '不知何处落凡尘', '当年我作唐天宝', '愿把江山换美人'];

export default defineScene({
  seed: 1020,
  build: (kit, story) => {
    const { groups: [world, garden], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: the poem's journey --------------------------------------------------------------
    ground(kit, world, { w: 500, d: 500, height: 3, flatten: 20, shade: 0xd6d0c6, seed: 5 });
    water(kit, world, { w: 30, d: 18, z: -2, y: 0.05 });
    lotus(kit, world, 0, -2, { count: 28, rand, radius: 7, flowers: 6 });
    // The great lotus, and Sulan rising from it.
    const bloom = kit.group(world, 0, 0.1, -2);
    const petal = petalGeometry(0.9, 1.6, 0xc0321e, 0xf5d5cf);
    const pm = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
    const leaves = Array.from({ length: 12 }, (_, k) => { const p = kit.mesh(petal, pm, bloom); p.rotation.set(0, k / 12 * Math.PI * 2 + (k % 2) * 0.26, 0, 'YXZ'); return { p, k }; });
    const sulan = figure(kit, bloom, ACTORS.sulan.costume, 0, 0);
    sulan.shadow.visible = false;
    hold(kit, sulan, 'fan');
    const verse = scroll(kit, world, POEM, { size: 0.34, x: -5.2, y: 2.4, z: 1.4 });
    verse.group.rotation.y = 0.4;
    // The pass and the horsemen.
    const pass = kit.group(world, 18, 0, -70);
    cityGate(kit, pass, { w: 50, h: 9 });
    range(kit, pass, { z: -30, span: 160, height: 40, shade: 0xb9b2a8, seed: 30 });
    const riders = Array.from({ length: 6 }, (_, k) => {
      const h = horse(kit, world, { x: -20 - k * 3, z: -40 - (k % 3) * 2.5, rot: Math.PI / 2 });
      const r = figure(kit, h.group, { ...CAST.escort, headwear: 'helmet' }, 0, 0);
      r.root.position.y = 1.2; r.shadow.visible = false;
      return { h, r, k };
    });
    // A stair of cloud from the sky.
    const stair = Array.from({ length: 8 }, (_, k) => cloudBank(kit, world, 6 - k * 1.2, 24 - k * 2.6, -12 + k * 1.2, { w: 3, puffs: 6, rand, size: 0.45 }));
    const descending = figure(kit, world, ACTORS.sulan.costume, 6, -12);
    descending.shadow.visible = false;
    range(kit, world, { z: -150, span: 600, height: 50, shade: 0xc9c2b7, seed: 31 });
    range(kit, world, { z: -230, span: 800, height: 80, shade: 0xe0dad0, seed: 32 });
    const emperor = figure(kit, world, { ...CAST.deity, headwear: 'crown', robe: 0x4a443e, jacket: 0x2f2a26, beard: 'full', white: false }, -3.5, 5);
    const clouds = mist(kit, world, { count: 14, w: 120, y: 8, d: 60, z: -30, size: 20, opacity: 0.6, drift: 1 });
    lights(kit, world, { key: [-10, 16, 12], intensity: 1.1 });
    const cam1 = move(kit, world, [
      [0, [2.5, 1.6, 8], [0, 1.4, -2]],
      [6, [-4, 2.6, 6.5], [-4.6, 2.6, 1.4]],
      [11, [-6, 4, 2], [-10, 2, -40]],
      [17, [0, 10, 4], [4, 14, -10]],
      [23, [5, 4, -2], [6, 3, -12]],
      [30, [-6, 26, 30], [10, 0, -100]],
    ]);

    // --- Shot 2: the fourth entry, in the garden pavilion -------------------------------------------
    ground(kit, garden, { w: 200, d: 200, height: 1, flatten: 10, shade: 0xd9d3c9 });
    pavilion(kit, garden, { r: 2.4, h: 2.8, base: 0.5, sides: 6 });
    const willows = [willow(kit, garden, -6, -4, { h: 7, rand }), willow(kit, garden, 6, -6, { h: 7, rand })];
    table(kit, garden, { w: 1.2, d: 0.8, h: 0.78 }).position.y = 0.5;
    const book = album(kit, garden, { y: 1.29 });
    const ziyu = figure(kit, garden, CAST.ziyu, 0, -0.8); ziyu.root.position.y = 0.5;
    const zq = figure(kit, garden, CAST.zhongqing, -0.9, -0.3); zq.root.position.y = 0.5;
    lights(kit, garden, { key: [6, 10, 6], intensity: 1 });
    const cam2 = move(kit, garden, [
      [at(1), [2.6, 2.4, 3.2], [0, 1.4, 0]],
      [36, [1.2, 2.0, 1.6], [0, 1.3, 0]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.006));
        cam1(seconds);
        clouds.update(seconds);
        verse.set((seconds - 0.4) / 27.6);
        const open = span(seconds, 0.3, 4);
        leaves.forEach(({ p, k }) => { p.rotation.x = -0.15 - open * (0.9 + (k % 2) * 0.3); });
        bloom.scale.setScalar(0.4 + open * 0.6);
        sulan.root.position.y = -1.2 + span(seconds, 2, 5) * 1.3;
        face(sulan, 3, 8);
        sulan.pose(cue(seconds, [[0, G.folded], [4, t => G.dance(t)]]));
        riders.forEach(({ h, r, k }) => {
          const halt = span(seconds, 13, 15.5);
          h.group.position.x = -20 - k * 3 + span(seconds, 7, 15.5) * 26 * (1 - halt * 0.15);
          h.update(seconds + k, seconds > 7 && seconds < 15);
          r.pose({ ...G.hold(seconds), bow: halt * -0.2 });
        });
        const down = span(seconds, 16, 23);
        descending.root.position.set(6 - down * 8.4, 26 - down * 20.8, -12 + down * 8.4);
        descending.pose(G.dance(seconds, 2));
        descending.fade(span(seconds, 15.5, 17));
        stair.forEach((c, k) => { c.visible = seconds > 15 + k * 0.4; });
        face(emperor, 0, -2);
        emperor.pose(cue(seconds, [[0, G.folded], [24, t => ({ ...G.offer(t), pitch: 0 })]]));
      } else {
        kit.setEnv(INK_SKY.paper(0.02));
        const t = seconds - at(1);
        cam2(seconds);
        willows.forEach(w => w.update(seconds));
        book.turn(span(t, 1.2, 3.2));
        face(ziyu, 0, 1); face(zq, 0.2, 0.4);
        ziyu.pose(cue(t, [[0, G.read], [1.2, tt => ({ ...G.read(tt), r: { lift: 1.2, out: 0.5, bend: 0.8 } })], [3.4, G.read]]));
        zq.pose({ ...G.behind(t), bow: 0.3, pitch: 0.4 });
      }
    };
  },
});
