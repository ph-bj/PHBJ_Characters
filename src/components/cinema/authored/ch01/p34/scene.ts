import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, tone } from '../../../stage/figure';
import { floor, shopRow, DARK } from '../../../stage/architecture';
import { cloudBank } from '../../../stage/nature';
import { chair, ingots, table } from '../../../stage/props';
import { study } from '../../../stage/locations';
import { album, hold, palaceHall } from '../../../stage/performance';
import { smoke } from '../../../stage/fx';
import { cart } from '../../../stage/vehicles';
import { lights, move, scroll, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 34: the last quatrains, and Ziyu's verdict. In a palace among the clouds
 * Chunxi kneels with his censer before the Jade Emperor's throne while gold rains down; then a
 * little goat cart rolls down a long street where ten miles of pearl curtains rise at once. The poem
 * stands on a scroll at the palace steps. Back in the study Ziyu only smiles, closes the album, and
 * when Nanxiang presses him, sets it aside: a waste of brush and ink.
 */

const POEM = ['别有人间傅粉郎', '销金为饰玉为妆', '石麟天上原无价', '应捧炉香待玉皇', '才啭歌喉赞不休', '黄金争掷作缠头', '王郎偶驾羊车出', '十里珠帘尽上钩'];

export default defineScene({
  seed: 1034,
  build: (kit, story) => {
    const { groups: [sky, room], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: the poem ----------------------------------------------------------------------
    cloudBank(kit, sky, 0, -0.4, -4, { w: 40, puffs: 50, rand, size: 1.3 });
    floor(kit, sky, 16, 10, { kind: 'bricks', shade: 0xe6e0d6, z: -6, y: 0.02 });
    palaceHall(kit, sky, 0, -19, 14);
    chair(kit, sky, { x: 0, z: -9.5 }).scale.setScalar(1.6);
    const emperor = figure(kit, sky, { ...CAST.deity, headwear: 'crown', robe: 0x6e675f, jacket: 0x3f3a35 }, 0, -9.4);
    const chunxi = figure(kit, sky, ACTORS.chunxi.costume, 0, -6.4);
    hold(kit, chunxi, 'censer');
    smoke(kit, sky, 0, 1.1, -6.1, { h: 3, count: 160, size: 0.12 });
    const gold = Array.from({ length: 16 }, (_, k) => { const g = ingots(kit, sky, (rand() - 0.5) * 3, 6, -6 + (rand() - 0.5) * 2, 1); return { g, k, x: g.position.x }; });
    const verse = scroll(kit, sky, POEM, { size: 0.3, x: -4.2, y: 2.2, z: -5 });
    // The street of pearl curtains, off to the right, and the goat cart.
    const street = kit.group(sky, 30, 0, 0);
    floor(kit, street, 8, 80, { kind: 'flag', shade: 0xd9d3c9, z: -30 });
    const rows = [shopRow(kit, street, { x: -5.5, z: -30, count: 8, rand }), shopRow(kit, street, { x: 5.5, z: -30, count: 8, rand })];
    rows[0].group.rotation.y = Math.PI / 2; rows[1].group.rotation.y = -Math.PI / 2;
    const beads = new THREE.InstancedMesh(new THREE.SphereGeometry(0.035, 6, 5), flat(0xf4f0e8), 1800);
    const curtainAt: [number, number, number][] = [];
    for (const side of [-1, 1]) for (let k = 0; k < 18; k++) for (let s = 0; s < 10; s++) curtainAt.push([side * 3.6, -2 - k * 3.6 + s * 0.3, s]);
    street.add(beads);
    const goatCart = cart(kit, street, { rot: Math.PI, hood: 0x6e675f, mule: false });
    goatCart.group.scale.setScalar(0.6);
    const goat = kit.group(goatCart.group, 0, 0, 2.2);
    kit.mesh(new THREE.SphereGeometry(0.4, 12, 10), tone(0xf0ebe2), goat, 0, 0.9, 0).scale.set(0.8, 0.8, 1.4);
    kit.mesh(new THREE.SphereGeometry(0.2, 10, 8), tone(0xf0ebe2), goat, 0, 1.3, 0.6);
    for (const side of [-1, 1]) kit.mesh(new THREE.TorusGeometry(0.12, 0.03, 5, 10, Math.PI), tone(DARK), goat, side * 0.12, 1.45, 0.55).rotation.y = Math.PI / 2;
    lights(kit, sky, { key: [-6, 14, 10], intensity: 1.1 });
    const cam1 = move(kit, sky, [
      [0, [4, 1.6, 4], [0, 1.4, -6.5]],
      [5, [-1.6, 1.3, -3.2], [0, 1.9, -9]],
      [9, [2, 6, 0], [0, 3, -6]],
      [12, [30, 4, 8], [30, 1.6, -10]],
      [18, [30.4, 2, -8], [30, 1.8, -30]],
    ]);

    // --- Shot 2: “a waste of brush and ink” ---------------------------------------------------------
    const s = study(kit, room);
    table(kit, room, { x: 0, z: 0.6, w: 1.2, d: 0.7, h: 0.78 });
    const book = album(kit, room, { y: 0.79, z: 0.6 });
    const ziyu = figure(kit, room, CAST.ziyu, 0, -0.15);
    const nx = figure(kit, room, CAST.nanxiang, 1.3, 1.2);
    const zq = figure(kit, room, CAST.zhongqing, -1.3, 1.1);
    lights(kit, room, { key: [-4, 9, 7], intensity: 1 });
    const cam2 = move(kit, room, [
      [at(1), [0.2, 1.5, 2.6], [0, 1.3, 0]],
      [at(1) + 5, [-2, 1.7, 3.4], [0.4, 1.4, 0.4]],
      [at(1) + 10, [0.9, 1.55, 1.6], [0, 1.5, -0.2]],
      [36, [0.5, 1.6, 1.2], [0, 1.55, -0.15]],
    ]);
    const m = new THREE.Matrix4();

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.01));
        cam1(seconds);
        verse.set((seconds - 0.4) / 16);
        face(chunxi, 0, -9.4);
        chunxi.pose(cue(seconds, [[0, G.offer], [2, t => ({ ...G.offer(t), kneel: 1 })]]));
        emperor.pose({ ...G.stroke(seconds), sit: 1 });
        emperor.root.position.y = 0.3;
        gold.forEach(({ g, k, x }) => { const f = Math.max(0, (seconds - 8 - k * 0.12)); g.position.set(x, Math.max(0.05, 6 - f * f * 4.9), g.position.z); g.rotation.y = f * 3; });
        // The curtains rise as the cart passes.
        const cz = -span(seconds, 11, 18) * 60;
        goatCart.group.position.z = -2 + cz;
        goatCart.update(seconds, seconds > 11);
        curtainAt.forEach(([x, z, s], i) => {
          const up = span(seconds, 11 + (-z / 60) * 5, 12 + (-z / 60) * 5);
          m.makeTranslation(x, 3.2 - s * 0.25 * (1 - up) - up * 0.1 * s, z);
          beads.setMatrixAt(i, m);
        });
        beads.count = curtainAt.length;
        beads.instanceMatrix.needsUpdate = true;
        rows.forEach(r => r.update(seconds));
      } else {
        kit.setEnv(INK_SKY.paper(0.03));
        const t = seconds - at(1);
        cam2(seconds);
        s.update(seconds);
        book.turn(1 - span(t, 1, 2.5));
        face(ziyu, 0, 1); face(nx, 0, -0.15); face(zq, 0, -0.15);
        ziyu.pose(cue(t, [[0, t2 => ({ ...G.read(t2), mouth: 0.1, pitch: 0.2 })], [3, G.folded], [8, G.speak], [13, t2 => ({ ...G.rest(t2), r: { lift: 0.9, out: 0.8, bend: 0.3 }, yaw: -0.3 })]]));
        nx.pose(cue(t, [[0, G.fan], [4, G.point], [8, G.rest], [13, G.fume]]));
        zq.pose(cue(t, [[0, G.folded], [13, G.laugh]]));
      }
    };
  },
});
