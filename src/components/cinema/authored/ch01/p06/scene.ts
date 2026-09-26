import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, tone, VERMILION, walkAlong } from '../../../stage/figure';
import { courtyard } from '../../../stage/locations';
import { bareTree, ground, range, rock, water } from '../../../stage/nature';
import { paifang, pavilion, platform } from '../../../stage/architecture';
import { mist, specks } from '../../../stage/fx';
import { boat } from '../../../stage/vehicles';
import { writing } from '../../../stage/props';
import { lights, move, sets, span, DUSK, blendEnv } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 6. Snow on the memorial arch raised to Lady Zheng, who starved herself to
 * follow her husband; Shixie leading the orphaned three-year-old through his courtyard, the child
 * growing into the young man as they walk; Shi Nanxiang on the bluffs of Hanyang above the river,
 * the top candidate of his province; and the two cousins' ways of learning, one peering into the
 * depths of a well, the other surveying the whole range from a tower.
 */

export default defineScene({
  seed: 1006,
  build: (kit, story) => {
    const { groups: [arch, yard, river, paths], show } = sets(kit, 4);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: the memorial arch in snow --------------------------------------------------------
    ground(kit, arch, { w: 200, d: 200, height: 1.2, flatten: 16, shade: 0xe8e3da });
    paifang(kit, arch, { w: 9, h: 7 });
    const tablet = writing(kit, arch, ['贞', '烈'], { size: 0.34, gap: 1.2, margin: 0.1, x: 0, y: 7 * 0.74, z: 0.19 });
    for (const [x, z] of [[-9, -6], [8, -8], [-14, 4], [13, 2]]) bareTree(kit, arch, x, z, 7, rand);
    range(kit, arch, { z: -90, span: 260, height: 26, shade: 0xc9c2b7, seed: 4 });
    const widow = figure(kit, arch, { ...CAST.lady, robe: 0xf0ebe2, jacket: 0xe6e0d6, rouge: false }, 0, 2);
    widow.root.rotation.y = Math.PI;
    const snow = specks(kit, arch, { count: 2200, w: 40, h: 16, d: 30, fall: 0.8, wind: 0.3, size: 0.03, dark: true, y: 7 });
    lights(kit, arch, { key: [-6, 10, 8], intensity: 0.8 });
    const cam1 = move(kit, arch, [
      [0, [0, 0.8, 9], [0, 1.2, 1.5]],
      [5, [2.4, 2.5, 7], [0, 3.6, 0]],
      [10, [0.6, 5.2, 3.6], [0, 5.2, 0]],
    ]);

    // --- Shot 2: raised by Shixie ---------------------------------------------------------------
    courtyard(kit, yard);
    const shixie = figure(kit, yard, CAST.shixie, -0.8, 6);
    const child = figure(kit, yard, { ...CAST.zhongqing, height: 0.95, girth: 0.9 }, 0.2, 6);
    const grown = figure(kit, yard, CAST.zhongqing, 0.4, 6);
    lights(kit, yard, { key: [8, 11, 6], intensity: 1 });
    const cam2 = move(kit, yard, [
      [at(1), [3.5, 1.2, 9], [0, 1, 4]],
      [at(1) + 4, [3.2, 1.4, 3], [0, 1.1, 0]],
      [at(2), [2.4, 1.7, -2.5], [0, 1.4, -5]],
    ]);

    // --- Shot 3: Shi Nanxiang of Hanyang ---------------------------------------------------------
    water(kit, river, { w: 400, d: 200, z: -80, y: -3, scale: 0.4 });
    kit.box(river, tone(0x8c857c), [0, -2, 0], [34, 4, 22]);
    kit.box(river, tone(0xcfc8bc), [0, -0.02, 0], [34.2, 0.06, 22.2]);
    // Craggy cliffs along the bluff's face hide its edge.
    for (let k = 0; k < 12; k++) rock(kit, river, -17 + k * 3.1, 11 + rand() * 0.6, { h: 4.2 + rand() * 1.4, rand, shade: 0x8c857c }).position.y = -2.4;
    for (let k = 0; k < 7; k++) rock(kit, river, -17.5 + k * 0.1, -8 + k * 3, { h: 4.4, rand, shade: 0x8c857c }).position.y = -2.4;
    for (let k = 0; k < 6; k++) rock(kit, river, -14 + k * 5.5, -10 - rand() * 0.8, { h: 1.2 + rand() * 1.6, rand, shade: 0xb9b2a8 });
    pavilion(kit, river, { x: -5, z: -3, r: 1.8, h: 2.6 });
    range(kit, river, { z: -140, span: 400, height: 30, shade: 0xc9c2b7, seed: 9 });
    const sails = Array.from({ length: 5 }, (_, k) => boat(kit, river, { x: -40 + k * 20, z: -40 - k * 12, rot: Math.PI / 2, len: 8, cabin: false, mast: true }));
    sails.forEach(s => { s.group.position.y = -3; });
    const poet = figure(kit, river, CAST.nanxiang, 1.2, -6.5);
    // The list of successful candidates, a long red placard, carried up by a runner.
    const runner = figure(kit, river, CAST.servant, 12, -4);
    const placard = kit.group(runner.root, 0.55, 0, 0.3);
    kit.box(placard, flat(VERMILION), [0, 1.9, 0], [0.7, 1.6, 0.04]);
    kit.box(placard, tone(0x2f2a26), [0, 0.9, -0.03], [0.05, 1.9, 0.05]);
    writing(kit, placard, '解元', { size: 0.42, margin: 0.2, x: 0, y: 1.9, z: 0.025 });
    const riverMist = mist(kit, river, { count: 10, w: 120, y: -1.5, d: 60, z: -40, size: 24, opacity: 0.7, drift: 1 });
    lights(kit, river, { key: [10, 12, 4], intensity: 1.1 });
    const cam3 = move(kit, river, [
      [at(2), [-16, 7, 30], [0, 0.5, -6]],
      [at(2) + 5, [5, 2.2, 2.5], [1.2, 1.6, -6.5]],
      [at(3), [6.5, 2.4, -1.6], [0.6, 1.6, -7]],
    ]);

    // --- Shot 4: purity and breadth ---------------------------------------------------------------
    ground(kit, paths, { w: 200, d: 200, height: 2, flatten: 10, shade: 0xd6d0c6 });
    // Ziyu's well: a deep shaft of stone rings going down into darkness.
    const well = kit.group(paths, -3, 0, 0);
    for (let k = 0; k < 14; k++) kit.mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.45, 24, 1, true), tone(k % 2 ? 0x9c958b : 0xb9b2a8, true), well, 0, -k * 0.45 + 0.2, 0);
    kit.mesh(new THREE.CircleGeometry(0.9, 24).rotateX(-Math.PI / 2), tone(0x3f3a35), well, 0, -6, 0);
    // At the very bottom, the moon's reflection: what the patient search finds.
    kit.mesh(new THREE.CircleGeometry(0.3, 24).rotateX(-Math.PI / 2), flat(0xfaf8f2), well, 0.2, -5.98, -0.1);
    kit.mesh(new THREE.TorusGeometry(0.95, 0.12, 8, 24).rotateX(Math.PI / 2), tone(0x9c958b), well, 0, 0.45, 0);
    const deep = figure(kit, paths, CAST.ziyu, -3, 1.4);
    // Zhongqing's tower: a terrace high above the plain.
    const tower = kit.group(paths, 5, 0, -4);
    platform(kit, tower, 4, 4, 6, { steps: false });
    pavilion(kit, tower, { r: 1.4, h: 2.4, base: 6.1, sides: 4 });
    const broad = figure(kit, tower, CAST.zhongqing, 0, 1.2);
    broad.root.position.y = 6.1;
    range(kit, paths, { z: -80, span: 300, height: 22, shade: 0xb9b2a8, seed: 12 });
    range(kit, paths, { z: -140, span: 400, height: 36, shade: 0xd6d0c6, seed: 13 });
    const cam4 = move(kit, paths, [
      [at(3), [-0.6, 1.6, 4.2], [-3, 0.7, 0.4]],
      [at(3) + 3, [-2.4, 2.2, 1.6], [-3, -1, 0]],
      [at(3) + 4.5, [-3, 0.6, 0.1], [-3, -6, 0]],
      [at(3) + 6, [0, 3, 8], [3, 5, -4]],
      [36, [9, 8.5, 3], [0, 6, -30]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(blendEnv(DUSK(0.035), INK_SKY.paper(0.03), span(seconds, 0, 8)));
        cam1(seconds);
        snow.uniforms.uSpeed.value = 1;
        widow.fade(1 - span(seconds, 3, 8));
        widow.pose(G.weep(seconds));
        tablet.set(span(seconds, 5, 8.5));
      } else if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.025));
        const t = seconds - at(1);
        cam2(seconds);
        const grow = span(t, 3.4, 5.6);
        walkAlong(shixie, t, 0, 7.6, [[-0.8, 6], [-0.8, 0], [-0.8, -6]], { ...G.rest(t), r: { lift: 0.25 + (1 - grow) * 0.3, out: 0.3, bend: 0.4 } }, 5);
        walkAlong(child, t, 0, 7.6, [[0.2, 6], [0.2, 0], [0.2, -6]], { ...G.rest(t), l: { lift: 0.9, out: 0.5, bend: 0.2 } }, 9);
        walkAlong(grown, t, 0, 7.6, [[0.5, 6], [0.5, 0], [0.5, -6]], G.folded(t), 5);
        child.fade(1 - grow); grown.fade(grow);
        if (t > 7.6) { face(grown, -0.8, -6); face(shixie, 0.5, -6); grown.pose(G.bow(t, 0.7)); shixie.pose(G.stroke(t)); }
      } else if (shot === 2) {
        kit.setEnv(INK_SKY.paper(0.012));
        const t = seconds - at(2);
        cam3(seconds);
        riverMist.update(seconds);
        sails.forEach((s, i) => { s.update(seconds, i); s.group.position.x = -40 + i * 20 + t * 0.6; });
        face(poet, 0, -60);
        poet.pose(cue(t, [[0, G.behind], [3, G.laugh], [6, tt => ({ ...G.point(tt), pitch: -0.2 })]]));
        if (!walkAlong(runner, t, 2.5, 6, [[12, -4], [7, -4.6], [3.6, -5.4]], G.hold(t), 9) && t > 6) { face(runner, 1.2, -6.5); runner.pose(G.bow(t, 0.4)); }
      } else {
        kit.setEnv(INK_SKY.paper(0.01));
        const t = seconds - at(3);
        cam4(seconds);
        face(deep, -3, 0);
        deep.pose({ ...G.think(t), bow: 0.5, pitch: 0.6 });
        face(broad, 0, -10);
        broad.pose(cue(t, [[0, G.behind], [5, tt => ({ ...G.point(tt), pitch: -0.1 })]]));
      }
    };
  },
});
