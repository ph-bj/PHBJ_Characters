import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, tone, VERMILION } from '../../../stage/figure';
import { chamber } from '../../../stage/locations';
import { branch, ground, range, reeds, rock, water, willow } from '../../../stage/nature';
import { mirror } from '../../../stage/props';
import { mist, petals } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { writing } from '../../../stage/props';

/*
 * Chapter 1, paragraph 40. "That beautiful one, across the autumn water": a young man in ancient
 * robes on the far bank of a misty river, as the classics call men beautiful. A plum whose southern
 * branches have blossomed while the northern are bare, and a cock pheasant trailing its long tail
 * beneath. Ziyu before a tall bronze mirror between two maids, and in the glass it is he who is
 * fairest; he blushes. Last, Xishi at the stream, washing silk in her poverty, and Ziyu, faint as a
 * thought, watching her from the bank.
 */

export default defineScene({
  seed: 1040,
  build: (kit, story) => {
    const { groups: [autumn, plum, glass, stream], show } = sets(kit, 4);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: that beautiful person, across the autumn water -----------------------------------
    water(kit, autumn, { w: 300, d: 60, z: -12 });
    ground(kit, autumn, { w: 300, d: 30, height: 0.4, flatten: 0, shade: 0xd6d0c6, z: 12 }).position.y = 0.2;
    ground(kit, autumn, { w: 300, d: 40, height: 0.8, flatten: 0, shade: 0xd6d0c6, z: -38 }).position.y = 0.2;
    reeds(kit, autumn, -9, 3.2, { w: 8, d: 1.6, count: 60, h: 1.1, rand });
    reeds(kit, autumn, 0, -19, { w: 40, d: 2, count: 200, h: 1.4, rand });
    const beauty = figure(kit, autumn, { ...CAST.deity, headwear: 'crown', beard: 'none', white: false, robe: 0xf0ebe2 }, 1, -19.6);
    const classic = writing(kit, autumn, ['彼美人兮', '美人何为隔秋水'], { size: 0.46, gap: 1.4, margin: 0.2, x: -3.8, y: 3.2, z: -6 });
    const fog = mist(kit, autumn, { count: 10, w: 60, y: 0.2, d: 14, z: -12, size: 10, opacity: 0.8, drift: 0.5 });
    lights(kit, autumn, { key: [-6, 8, -10], intensity: 0.8, fill: 0.5 });
    const cam1 = move(kit, autumn, [
      [0, [0, 1.2, 8], [1, 1.2, -19]],
      [9, [0.4, 1.4, 4.6], [1, 1.6, -19]],
    ]);

    // --- Shot 2: the southern branches bloom first --------------------------------------------------
    ground(kit, plum, { w: 200, d: 200, height: 1, flatten: 10, shade: 0xe0dad0 });
    const trunk = kit.group(plum, 0, 0, 0);
    branch(kit, trunk, [[0, 0, 0], [0.3, 1.4, 0], [-0.2, 2.6, 0.1], [0.2, 3.4, 0]], 0.16, 0.08);
    const tips: THREE.Vector3[] = [];
    for (let k = 0; k < 8; k++) {
      const south = k % 2 === 0, y = 1.6 + k * 0.22;
      const end: [number, number, number] = [(south ? 1 : -1) * (1.4 + rand()), y + 0.6, (rand() - 0.5) * 0.8];
      branch(kit, trunk, [[0, y, 0], [end[0] * 0.5, y + 0.4, end[2] * 0.5], end], 0.05, 0.015);
      if (south) for (let j = 0; j < 12; j++) tips.push(new THREE.Vector3(end[0] * (0.4 + rand() * 0.6), y + 0.3 + rand() * 0.4, end[2] + (rand() - 0.5) * 0.3));
    }
    const blossoms = tips.map(p => kit.mesh(new THREE.SphereGeometry(0.05, 6, 5), flat(VERMILION), trunk, p.x, p.y, p.z));
    // A cock pheasant with a long barred tail.
    const bird = kit.group(plum, -0.6, 0, 1.4);
    kit.mesh(new THREE.SphereGeometry(0.2, 12, 10), tone(0x3f3a35), bird, 0, 0.35, 0).scale.set(0.8, 0.8, 1.4);
    const neck = kit.mesh(new THREE.SphereGeometry(0.09, 10, 8), tone(0x1c1816), bird, 0, 0.55, 0.22);
    kit.mesh(new THREE.SphereGeometry(0.04, 6, 5), flat(VERMILION), bird, 0, 0.6, 0.29);
    const tail = kit.group(bird, 0, 0.4, -0.25);
    for (let k = 0; k < 8; k++) kit.box(tail, tone(k % 2 ? 0x6e675f : 0x2f2a26), [0, 0, -0.1 - k * 0.12], [0.06, 0.02, 0.12]);
    for (const side of [-1, 1]) kit.mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.24, 4), tone(0x2f2a26), bird, side * 0.06, 0.12, 0);
    const southLabel = writing(kit, plum, ['梅花南枝先'], { size: 0.36, margin: 0.2, x: -2.4, y: 2.6, z: -1 });
    lights(kit, plum, { key: [8, 8, 4], intensity: 1 });
    const cam2 = move(kit, plum, [
      [at(1), [0.5, 1, 5], [0, 1.8, 0]],
      [at(2), [-2, 2.4, 3.6], [0.4, 2.2, 0]],
    ]);

    // --- Shot 3: in the mirror -------------------------------------------------------------------------
    chamber(kit, glass);
    const bronze = mirror(kit, glass, 0, -2.6);
    bronze.scale.setScalar(1.3);
    const ziyu = figure(kit, glass, CAST.ziyu, 0, -1.2);
    const maids = [figure(kit, glass, CAST.maid, -0.9, -1.3), figure(kit, glass, CAST.maid, 0.9, -1.3)];
    lights(kit, glass, { key: [-3, 7, 5], intensity: 1 });
    const cam3 = move(kit, glass, [
      [at(2), [0.4, 1.8, -2.7], [0, 1.5, -1.2]],
      [at(2) + 5, [1.8, 1.6, 1.4], [0, 1.4, -1.6]],
      [at(3), [0.6, 1.6, 0.2], [0, 1.6, -1.2]],
    ]);

    // --- Shot 4: Xishi washing silk -----------------------------------------------------------------
    ground(kit, stream, { w: 200, d: 200, height: 1, flatten: 8, shade: 0xd9d3c9 });
    water(kit, stream, { w: 200, d: 8, z: -3, y: 0.05 });
    rock(kit, stream, 0.6, -1.4, { h: 0.5, rand });
    const w1 = willow(kit, stream, -3, 1.5, { h: 7, rand });
    range(kit, stream, { z: -80, span: 300, height: 26, shade: 0xc9c2b7, seed: 140 });
    const xishi = figure(kit, stream, { ...CAST.lady, robe: 0xe6e0d6, jacket: 0xb9b2a8 }, 0.4, -0.8);
    const silk = kit.group(xishi.hands.r, 0, -0.05, 0.1);
    kit.mesh(new THREE.PlaneGeometry(0.5, 1.6, 1, 8).translate(0, -0.8, 0), tone(0xfaf8f2, true), silk);
    const dreamer = figure(kit, stream, CAST.ziyu, -2, 2.4);
    const fall = petals(kit, stream, { count: 40, w: 8, h: 5, d: 6, red: false, x: -2, z: 1 });
    lights(kit, stream, { key: [6, 9, 6], intensity: 1 });
    const cam4 = move(kit, stream, [
      [at(3), [3, 1.2, 3], [0.4, 0.8, -1]],
      [36, [-3.4, 1.8, 5.4], [-0.6, 1.2, 0.4]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.03));
        cam1(seconds);
        fog.update(seconds);
        face(beauty, 0, 8);
        beauty.pose(G.folded(seconds));
        classic.set(span(seconds, 1, 5));
      } else if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.02));
        const t = seconds - at(1);
        cam2(seconds);
        blossoms.forEach((b, i) => b.scale.setScalar(Math.max(0.01, span(t, 0.3 + i * 0.03, 1 + i * 0.03))));
        bird.position.x = -0.6 + span(t, 0, 7) * 1.4;
        bird.rotation.y = Math.PI / 2;
        neck.position.y = 0.55 + Math.sin(t * 5) * 0.02;
        tail.rotation.x = Math.sin(t * 3) * 0.05;
        southLabel.set(span(t, 2, 5));
      } else if (shot === 2) {
        kit.setEnv(INK_SKY.paper(0.03));
        const t = seconds - at(2);
        cam3(seconds);
        face(ziyu, 0, -2.6);
        maids.forEach(m => { face(m, 0, -2.6); m.pose(G.folded(t)); });
        ziyu.blush(span(t, 4, 6));
        ziyu.pose(cue(t, [[0, G.folded], [4.5, G.shy]]));
      } else {
        kit.setEnv(INK_SKY.paper(0.025));
        const t = seconds - at(3);
        cam4(seconds);
        w1.update(seconds); fall.update(seconds);
        face(xishi, 1, -4);
        xishi.pose({ ...G.rest(t), bow: 0.7, kneel: 0.5, r: { lift: 1.0, out: 0.2, bend: 0.2 + Math.sin(t * 2) * 0.2 }, l: { lift: 0.8, out: 0.2, bend: 0.4 } });
        silk.rotation.x = Math.sin(t * 2) * 0.4;
        dreamer.fade(0.5);
        face(dreamer, 0.4, -0.8);
        dreamer.pose(G.think(t));
      }
    };
  },
});
