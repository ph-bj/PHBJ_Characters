import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone } from '../../../stage/figure';
import { room, theatreStage } from '../../../stage/architecture';
import { chamber } from '../../../stage/locations';
import { bamboo, ground, rock, water, willow } from '../../../stage/nature';
import { candle, mirror, stool, table, vase } from '../../../stage/props';
import { hold } from '../../../stage/performance';
import { mist, petals, smoke } from '../../../stage/fx';
import { DUSK, lights, move, sets } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 37. A row of actors at their mirrors under bare candles, caked powder and
 * rouge, coarse gestures: beautiful but not radiant. Then the quiet of a lady's chamber: one
 * embroiders at the window, one reads, one arranges flowers, and nothing is made up. Last, on a rough
 * stage by a river a heavy-jawed actor plays Xishi, and beyond the stage, at the water's edge, the
 * true Xishi washing silk turns her face away.
 */

export default defineScene({
  seed: 1037,
  build: (kit, story) => {
    const { groups: [green, boudoir, river], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: beautiful but not radiant ------------------------------------------------------------
    room(kit, green, { w: 12, d: 6, h: 3, back: 'plain', floorKind: 'boards', wall: 0x9c958b });
    table(kit, green, { x: 0, z: -2.1, w: 9, d: 0.6 });
    const flames = [-3.4, 0, 3.4].map(x => candle(kit, green, x + 0.8, 0.82, -2.2, 1.6));
    const vain = [-3.4, -1.1, 1.2, 3.4].map((x, i) => {
      mirror(kit, green, x, -2.35);
      const f = figure(kit, green, { ...CAST.dan, face: 'coarse', robe: [0x8c857c, 0x6e675f, 0x9c958b, 0x7d766e][i] }, x, -1.2);
      return f;
    });
    smoke(kit, green, 0, 1, -1.5, { h: 2, count: 160, size: 0.3 });
    lights(kit, green, { key: [0, 4, 2], intensity: 0.6, fill: 0.15 });
    const cam1 = move(kit, green, [
      [0, [-6, 1.6, 0], [-3, 1.5, -1.6]],
      [12, [5, 1.6, 0.4], [3, 1.5, -1.8]],
    ]);

    // --- Shot 2: maidens of the red boudoir ------------------------------------------------------------
    chamber(kit, boudoir);
    const grove = bamboo(kit, boudoir, 0, -7, { h: 7, count: 10, rand });
    stool(kit, boudoir, -1.6, -2.6);
    const embroider = figure(kit, boudoir, CAST.lady, -1.6, -2.55);
    kit.mesh(new THREE.TorusGeometry(0.16, 0.012, 6, 24), tone(0x3f3a35), embroider.hands.r, 0, -0.05, 0.12);
    const reader = figure(kit, boudoir, { ...CAST.lady, robe: 0xe6e0d6 }, 1.6, -1.2);
    const arranger = figure(kit, boudoir, { ...CAST.lady, robe: 0xcfc8bc }, 3.2, -2.6);
    vase(kit, boudoir, 3.2, 0.82, -3.2, { rand });
    const drift = petals(kit, boudoir, { count: 40, w: 6, h: 3, d: 4, z: -3 });
    lights(kit, boudoir, { key: [-4, 7, 5], intensity: 1 });
    const cam2 = move(kit, boudoir, [
      [at(1), [-3.6, 1.5, 2.4], [-1.6, 1.2, -2.5]],
      [at(1) + 7, [0.2, 1.6, 2.8], [1.4, 1.3, -1.6]],
      [at(2), [4.6, 1.6, 1.2], [3.2, 1.3, -2.6]],
    ]);

    // --- Shot 3: an insult to Xishi ----------------------------------------------------------------------
    ground(kit, river, { w: 300, d: 200, height: 1, flatten: 20, shade: 0xd6d0c6 });
    water(kit, river, { w: 300, d: 40, z: -24 });
    theatreStage(kit, river, { w: 7, d: 5, h: 1, tall: 3.6 });
    const pretender = figure(kit, river, { ...CAST.dan, face: 'coarse', girth: 1.3, skin: 0xd9d0c0 }, 0, 0);
    pretender.root.position.y = 1;
    hold(kit, pretender, 'fan');
    willow(kit, river, -8, -5, { h: 7, rand });
    rock(kit, river, 6.2, -5.4, { h: 0.6, rand });
    const xishi = figure(kit, river, { ...CAST.lady, headwear: 'lady', robe: 0xf0ebe2, jacket: 0xd6d0c6 }, 6, -5);
    const silk = kit.mesh(new THREE.PlaneGeometry(0.4, 1.6, 1, 8).translate(0, -0.8, 0), tone(0xfaf8f2, true), xishi.hands.r, 0, 0, 0.1);
    const haze = mist(kit, river, { count: 8, w: 60, y: -0.5, d: 20, z: -14, size: 10, opacity: 0.6 });
    lights(kit, river, { key: [8, 10, 6], intensity: 1 });
    const cam3 = move(kit, river, [
      [at(2), [-3, 2, 6], [0, 2.2, 0]],
      [at(2) + 5, [2.4, 1.8, 4.2], [0.6, 2.2, -0.4]],
      [36, [9, 1.8, -1], [6, 1.2, -5]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(DUSK(0.05));
        cam1(seconds);
        flames.forEach(f => f.update(seconds));
        vain.forEach((f, i) => {
          face(f, f.root.position.x, -2.35);
          f.pose(cue(seconds + i * 1.3, [[0, t => ({ ...G.rest(t), r: { lift: 1.5, out: 0.3, twist: 0.5, bend: 1.8 + Math.sin(t * 7) * 0.2 } })], [4, G.laugh], [7, t => ({ ...G.fan(t), roll: 0.2 })]]));
        });
      } else if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.03));
        const t = seconds - at(1);
        cam2(seconds);
        grove.update(seconds); drift.update(seconds);
        face(embroider, -1.6, 0);
        embroider.pose({ sit: 1, pitch: 0.4, l: { lift: 0.9, out: 0.2, twist: -0.3, bend: 1.2 }, r: { lift: 0.9 + Math.sin(t * 2.4) * 0.2, out: 0.2, twist: 0.3, bend: 1.3 } });
        face(reader, -1, 3); reader.pose(G.read(t));
        face(arranger, 3.2, -3.2); arranger.pose(cue(t, [[0, G.offer], [6, tt => ({ ...G.shy(tt), yaw: 0.8 })]]));
      } else {
        kit.setEnv(INK_SKY.paper(0.02));
        const t = seconds - at(2);
        cam3(seconds);
        haze.update(seconds);
        face(pretender, 0, 6);
        pretender.pose(cue(t, [[0, G.pose], [3, tt => G.dance(tt, 1)], [7, G.shy]]));
        face(xishi, t > 6 ? 10 : 6, t > 6 ? -3 : -8);
        xishi.pose(cue(t, [[0, tt => ({ ...G.rest(tt), bow: 0.6, r: { lift: 1.0, out: 0.2, bend: 0.3 + Math.sin(tt * 2) * 0.2 } })], [6, tt => ({ ...G.shy(tt), yaw: 0.6 })]]));
        silk.rotation.x = Math.sin(t * 2) * 0.3;
      }
    };
  },
});
