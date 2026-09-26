import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, VERMILION } from '../../../stage/figure';
import { cloudBank, ground, plumTree, range, water } from '../../../stage/nature';
import { study } from '../../../stage/locations';
import { lamp, table } from '../../../stage/props';
import { album, drum, terrace } from '../../../stage/performance';
import { petals } from '../../../stage/fx';
import { blendEnv, DUSK, lights, move, scroll, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 29: the quatrains for Lanbao. Before dawn he leans on a terrace rail in red
 * sleeves, his dragon-patterned sword laid along it; the camera studies the blade. Clouds of dawn
 * rise red behind the drums, which begin to beat; then the play is over, the costume gone, and he
 * stands with hands at his sides under a peach tree in blossom. The poem is written on a scroll at
 * the rail. Then Zhongqing holds up a lamp while Ziyu turns to the seventh entry.
 */

const POEM = ['侠骨柔情世所难', '肯随红袖倚阑干', '平生知己无须嘱', '请把龙纹仔细看', '纷披五色起朝霞', '鼙鼓声声气倍加', '戏罢卸妆垂手立', '亭亭一树碧桃花'];

export default defineScene({
  seed: 1029,
  build: (kit, story) => {
    const { groups: [dawn, desk], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: the poem at the terrace rail ------------------------------------------------------
    ground(kit, dawn, { w: 400, d: 400, height: 2, flatten: 16, shade: 0xd6d0c6 });
    water(kit, dawn, { w: 300, d: 120, z: -70, y: -0.4 });
    const deck = terrace(kit, dawn, { w: 12, d: 8, h: 1.4 });
    range(kit, dawn, { z: -130, span: 500, height: 30, shade: 0xb9b2a8, seed: 101 });
    const red = Array.from({ length: 6 }, (_, k) => cloudBank(kit, dawn, -30 + k * 12, 6 + (k % 3) * 2, -60 - (k % 2) * 10, { w: 12, puffs: 10, rand, size: 1.1, shade: k % 2 ? 0xd98a7a : 0xe6c8bc }));
    const lb = figure(kit, dawn, { ...ACTORS.lanbao.costume, jacket: VERMILION }, -0.8, -3.2);
    lb.root.position.y = deck.top;
    const plain = figure(kit, dawn, ACTORS.lanbao.plain, 2.6, -1.2);
    plain.root.position.y = deck.top;
    const peach = plumTree(kit, dawn, 3.8, -2.4, { h: 4.2, rand, blossoms: 200 });
    peach.position.y = deck.top;
    // The dragon-patterned sword along the rail.
    const blade = kit.group(dawn, -0.2, deck.top + 0.72, -3.85);
    kit.box(blade, flat(0xe6e0d6), [0, 0, 0], [1.2, 0.05, 0.012]);
    kit.box(blade, flat(0x2f2a26), [-0.7, 0, 0], [0.22, 0.04, 0.03]);
    const dragon = new THREE.CatmullRomCurve3(Array.from({ length: 12 }, (_, k) => new THREE.Vector3(-0.5 + k * 0.09, Math.sin(k * 1.4) * 0.012, 0.008)));
    kit.mesh(new THREE.TubeGeometry(dragon, 48, 0.003, 4), flat(0x6e675f), blade);
    const drums = [drum(kit, dawn, -4.4, -2.2, 0.5), drum(kit, dawn, -5.6, -1, 0.4)];
    drums.forEach(d => { d.group.position.y = deck.top; });
    const verse = scroll(kit, dawn, POEM, { size: 0.3, x: 1.6, y: deck.top + 2.4, z: -4.2 });
    const fall = petals(kit, dawn, { count: 70, w: 8, h: 5, d: 6, x: 3, y: deck.top, z: -2 });
    lights(kit, dawn, { key: [-12, 6, -30], intensity: 1, fill: 0.5 });
    const cam1 = move(kit, dawn, [
      [0, [-3, 2.6, 2.5], [-0.8, 2.4, -3.2]],
      [7, [-0.9, 2.3, -2.6], [-0.1, 2.1, -3.85]],
      [12, [0.6, 2.9, 3], [-2, 5, -40]],
      [18, [-6, 2.8, 2], [-4.8, 2.4, -2]],
      [24, [4.6, 2.6, 2.6], [2.8, 2.4, -1.6]],
      [30, [0, 3.2, 6.5], [1.4, 3, -3]],
    ]);

    // --- Shot 2: by lamplight, the seventh entry ----------------------------------------------
    study(kit, desk, { night: true });
    table(kit, desk, { x: 0, z: 0.6, w: 1.2, d: 0.7, h: 0.78 });
    const book = album(kit, desk, { y: 0.79, z: 0.6 });
    const ziyu = figure(kit, desk, CAST.ziyu, 0, -0.15);
    const zq = figure(kit, desk, CAST.zhongqing, -0.9, 0.9);
    const handLamp = lamp(kit, zq.hands.r, { h: 0.02, power: 3, range: 5 });
    handLamp.group.position.y = -0.3; handLamp.group.scale.setScalar(0.7);
    lights(kit, desk, { key: [-2, 5, 4], intensity: 0.4, fill: 0.1 });
    const cam2 = move(kit, desk, [
      [at(1), [1.4, 1.6, 2.2], [-0.2, 1.1, 0.4]],
      [36, [0.8, 1.3, 1.5], [-0.1, 1.0, 0.5]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(blendEnv(DUSK(0.012), INK_SKY.paper(0.012), span(seconds, 8, 16)));
        cam1(seconds);
        verse.set((seconds - 0.4) / 27.6);
        red.forEach((c, k) => { c.position.y = 2 + (k % 3) * 2 + span(seconds, 10, 17) * 6; });
        drums.forEach((d, i) => d.update(seconds + i, seconds > 15 && seconds < 21 ? 9 : 0));
        const done = span(seconds, 20.5, 22.5);
        lb.fade(1 - done); plain.fade(done);
        face(lb, 0, -12);
        lb.pose(cue(seconds, [[0, t => ({ ...G.rest(t), bow: 0.35, l: { lift: 1.2, out: 0.2, bend: 1.4 }, r: { lift: 1.1, out: 0.3, bend: 1.2 } })], [15, t => ({ ...G.dance(t, 5), flutter: 0 })]]));
        face(plain, 0, 8);
        plain.pose({ ...G.rest(seconds), l: { lift: 0, out: 0.05, bend: 0.05 }, r: { lift: 0, out: 0.05, bend: 0.05 } });
        fall.update(seconds);
      } else {
        kit.setEnv(DUSK(0.035));
        const t = seconds - at(1);
        cam2(seconds);
        handLamp.update(seconds);
        book.turn(span(t, 1.4, 3.4));
        face(ziyu, 0, 1); face(zq, 0, 0.6);
        ziyu.pose(G.read(t));
        zq.pose({ ...G.rest(t), r: { lift: 1.5, out: 0.25, bend: 0.5 }, pitch: 0.3 });
      }
    };
  },
});
