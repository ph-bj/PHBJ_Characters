import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, VERMILION, flat, figure, tone, type Figure, type FigureSpec, type Pose } from '../../../stage/figure';
import { column, floor, lattice, roof, theatreStage } from '../../../stage/architecture';
import { bamboo, ground, plumTree, range, rock, water, willow } from '../../../stage/nature';
import { writing } from '../../../stage/props';
import { hold } from '../../../stage/performance';
import { inkGather, mist, petals } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 2. A long covered gallery, unrolled like a handscroll: the camera travels its
 * length in one unbroken move, and bay by bay a lantern is touched with vermilion and a gentleman
 * takes up his kind: the upright standing square, the aspiring looking up, the lofty leaning on a
 * rock, the free lounging, the splendid with a flower; the bold raising a wine bowl, the wild
 * dancing, the witty teasing a caged bird, the gentle offering a cup, the joyful playing the flute.
 * Then a water pavilion under pear blossom, where ten leading dan performers step out one by one,
 * each with a different flourish of the sleeves, the camera craning across the water. Last, in
 * mist, thick ink and pale wash each gather into 情, drift together and become one.
 */

const KINDS = ['正', '上', '高', '逸', '华', '豪', '狂', '趣', '和', '乐'];
const BAY = 6;
const bayX = (k: number) => 27 - k * BAY;
/** When the camera arrives at bay k and its lantern turns vermilion. */
const litAt = (k: number) => 0.4 + k * 1.9;

/** Each kind's bearing. */
const BEARING: ((t: number) => Pose)[] = [
  t => ({ ...G.folded(t), pitch: 0 }),
  t => ({ ...G.salute(t, 0.05), pitch: -0.45 }),
  t => ({ ...G.behind(t), pitch: -0.15, yaw: 0.5, lean: 0.05 }),
  t => ({ ...G.fan(t), sit: 1, lean: -0.15 }),
  t => ({ ...G.stroke(t), r: { lift: 1.2, out: 0.2, twist: 0.4, bend: 1.4 }, pitch: 0.2 }),
  t => ({ ...G.toast(t), pitch: -0.2 }),
  t => G.dance(t, 1.3),
  t => ({ ...G.point(t), lean: 0.12, mouth: 0.6 }),
  t => ({ ...G.offer(t), bow: 0.3 }),
  t => ({ ...G.hold(t), r: { lift: 1.3, out: 0.4, bend: 1.5 }, l: { lift: 1.3, out: 0.1, bend: 1.3 }, pitch: 0.1 }),
];
const GENTS: FigureSpec[] = [
  { ...CAST.zhongqing }, { ...CAST.ziyu }, { ...CAST.elder }, { ...CAST.nanxiang }, { ...CAST.youth, rouge: false },
  { ...CAST.wenhui, headwear: 'cap' }, { ...CAST.shixie }, { ...CAST.guest, headwear: 'cap' }, { ...CAST.wangxun }, { ...CAST.pedant, beard: 'none' },
];

export default defineScene({
  seed: 1002,
  build: (kit, story) => {
    const { groups: [gallery, pavilion, word], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- The gallery ---------------------------------------------------------------------------------
    ground(kit, gallery, { w: 260, d: 160, height: 1, flatten: 14, shade: 0xdcd6cc });
    floor(kit, gallery, 64, 3.8, { kind: 'boards', shade: 0xcfc8bc, y: 0.3 });
    kit.box(gallery, tone(0x9c958b), [0, 0.15, 0], [64, 0.3, 3.8]);
    for (let k = 0; k <= 10; k++) for (const z of [-1.7, 1.7]) column(kit, gallery, bayX(k) + BAY / 2, z, 3, 0.12);
    roof(kit, gallery, 66, 4.6, { y: 3.2, rise: 0.9 });
    // Back wall with a lattice window in every bay, and a low rail at the front.
    kit.box(gallery, tone(0xe6e0d6), [0, 1.8, -1.72], [64, 2.9, 0.08]);
    for (let k = 0; k < 10; k++) lattice(kit, gallery, 1.6, 1.2, (['rings', 'ice', 'diamond', 'grid'] as const)[k % 4], true, bayX(k), 1.9, -1.66);
    kit.box(gallery, tone(0x4a443e), [0, 0.75, 1.72], [64, 0.06, 0.06]);
    for (let k = 0; k < 10; k++) {
      bamboo(kit, gallery, bayX(k) + 2, 4 + rand() * 2, { h: 3 + rand() * 2, count: 4, rand, spread: 0.8 });
      if (k % 3 === 1) rock(kit, gallery, bayX(k) - 2.2, 3.4, { h: 1.1 + rand() * 0.5, rand });
    }
    willow(kit, gallery, -40, -8, { h: 8, rand });
    range(kit, gallery, { z: -110, span: 400, height: 30, shade: 0xc9c2b7, seed: 102 });
    const lanterns = KINDS.map((ch, k) => {
      const g = kit.group(gallery, bayX(k), 2.75, 1.5);
      kit.box(g, tone(0x2f2a26), [0, 0.2, 0], [0.02, 0.4, 0.02]);
      const pale = kit.mesh(new THREE.SphereGeometry(0.22, 14, 10), tone(0xe6e0d6), g); pale.scale.y = 1.25;
      const lit = kit.mesh(new THREE.SphereGeometry(0.23, 14, 10), flat(VERMILION), g); lit.scale.y = 1.25;
      const w = writing(kit, g, ch, { size: 0.2, margin: 0.2, paper: 0xf4f0e8, y: -0.52, z: 0.02 });
      return { g, pale, lit, w };
    });
    const gents: Figure[] = GENTS.map((spec, k) => figure(kit, gallery, spec, bayX(k), -0.4));
    gents.forEach(f => { f.root.position.y = 0.3; });
    // Props for some of the kinds.
    kit.box(gallery, tone(0x6e675f), [bayX(3) - 0.1, 0.55, -0.9], [0.9, 0.5, 0.5]);
    gents[3].root.position.set(bayX(3), 0.3 + 0.1, -0.7);
    rock(kit, gallery, bayX(2) + 0.8, -0.9, { h: 1.3, rand });
    kit.mesh(new THREE.SphereGeometry(0.05, 8, 6), flat(VERMILION), gents[4].hands.r, 0, 0.04, 0.04);
    kit.mesh(new THREE.CylinderGeometry(0.1, 0.06, 0.08, 12), tone(0x4a443e), gents[5].hands.r, 0, 0.05, 0);
    const cage = kit.group(gallery, bayX(7) + 0.8, 1.6, 0);
    kit.mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.4, 12, 1, true), new THREE.MeshLambertMaterial({ color: 0x4a443e, wireframe: true }), cage);
    const bird = kit.mesh(new THREE.SphereGeometry(0.05, 8, 6), tone(0x2f2a26), cage, 0, -0.05, 0);
    kit.box(gallery, tone(0x2f2a26), [bayX(7) + 0.8, 2.3, 0], [0.01, 1, 0.01]);
    hold(kit, gents[8], 'cup');
    hold(kit, gents[9], 'flute');
    lights(kit, gallery, { key: [8, 10, 10], intensity: 1 });
    const cam1 = move(kit, gallery, KINDS.map((_, k) => [litAt(k), [bayX(k) + 1.2, 1.7, 5.4 + (k % 2) * 0.6], [bayX(k) - 0.4, 1.3, -0.4]] as [number, [number, number, number], [number, number, number]]).concat([[at(2), [bayX(9) - 3, 2.2, 7.5], [bayX(9) - 0.5, 1.3, -0.4]]]), { pull: 0.5 });

    // --- The water pavilion under pear blossom ---------------------------------------------------------
    ground(kit, pavilion, { w: 260, d: 200, height: 1.5, flatten: 20, shade: 0xdcd6cc, z: -40 });
    water(kit, pavilion, { w: 120, d: 40, z: 6, y: 0.03 });
    const st = theatreStage(kit, pavilion, { z: -2, w: 10, d: 6, h: 0.9, tall: 3.8 });
    for (const [px, pz] of [[-8, -6], [8, -7], [-12, -2], [12, -3]]) plumTree(kit, pavilion, px, pz, { h: 5, rand, blossoms: 160, red: false });
    const fall = petals(kit, pavilion, { count: 140, w: 18, h: 6, d: 10, z: 0, red: false, speed: 0.3, wind: 0.25 });
    range(kit, pavilion, { z: -120, span: 400, height: 26, shade: 0xc9c2b7, seed: 202 });
    const dans = Array.from({ length: 10 }, (_, k) => {
      const row = k < 5 ? 0 : 1;
      const f = figure(kit, st.deck, { ...CAST.dan, robe: [0xf0ebe2, 0xe6e0d6, 0xd6d0c6][k % 3], jacket: [0xd6d0c6, 0xb9b2a8, 0x9c958b][k % 3] }, (k % 5 - 2) * 1.7 + row * 0.85, row ? -1.3 : 0.6);
      return f;
    });
    lights(kit, pavilion, { key: [6, 10, 12], intensity: 1 });
    const cam2 = move(kit, pavilion, [[at(2), [-9, 1.2, 14], [0, 1.6, -2]], [at(2) + 5, [0, 2.4, 10], [0, 2, -2]], [at(3), [7, 4.2, 9], [0, 1.6, -2]]]);

    // --- One word ----------------------------------------------------------------------------------------
    ground(kit, word, { w: 200, d: 200, height: 1, flatten: 30, shade: 0xe6e0d6 });
    range(kit, word, { z: -90, span: 300, height: 24, shade: 0xd6d0c6, seed: 302 });
    const haze = mist(kit, word, { count: 8, w: 60, y: 0.5, d: 20, z: -14, size: 14, opacity: 0.6 });
    const thick = inkGather(kit, word, '情', { size: 4, at: at(3) + 0.3, dur: 2.6, count: 5000, spread: 8, ink: 0x2f2a26 });
    const pale = inkGather(kit, word, '情', { size: 4, at: at(3) + 0.6, dur: 2.6, count: 5000, spread: 8, ink: 0x9c958b });
    const cam3 = move(kit, word, [[at(3), [0, 3.2, 16], [0, 3.2, 0]], [36, [0, 3.4, 12], [0, 3.3, 0]]]);

    return (seconds: number, shot: number) => {
      show(shot < 2 ? 0 : shot - 1);
      if (shot < 2) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam1(seconds);
        lanterns.forEach(({ pale: p, lit, w }, k) => {
          const u = span(seconds, litAt(k) - 0.3, litAt(k) + 0.3);
          lit.scale.setScalar(u); lit.scale.y *= 1.25; lit.visible = u > 0; p.visible = u < 1;
          w.set(span(seconds, litAt(k), litAt(k) + 1.2));
        });
        gents.forEach((f, k) => {
          f.fade(span(seconds, litAt(k) - 0.6, litAt(k) + 0.6));
          f.root.rotation.y = k === 2 ? 0.6 : k === 3 ? 0.3 : 0;
          f.pose(BEARING[k](seconds));
        });
        bird.position.x = Math.sin(seconds * 5) * 0.08;
        cage.rotation.z = Math.sin(seconds * 1.3) * 0.05;
        return;
      }
      if (shot === 2) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam2(seconds);
        fall.update(seconds);
        dans.forEach((f, k) => {
          const t0 = at(2) + 0.4 + k * 0.8;
          f.fade(span(seconds, t0, t0 + 0.8));
          f.root.rotation.y = (k % 5 - 2) * -0.12;
          f.pose(seconds < t0 + 2 ? G.pose(seconds + k) : G.dance(seconds, k * 0.7));
        });
        return;
      }
      kit.setEnv(INK_SKY.paper(0.03));
      cam3(seconds);
      haze.update(seconds);
      // The two words settle side by side, then drift together and become one.
      const u = span(seconds, at(3) + 3.6, at(3) + 5.6);
      const e = u * u * (3 - 2 * u);
      thick.points.position.set(-2.6 * (1 - e), 3.2, 0);
      pale.points.position.set(2.6 * (1 - e), 3.2, -0.05);
    };
  },
});
