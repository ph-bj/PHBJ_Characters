import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone } from '../../../stage/figure';
import { room as interior } from '../../../stage/architecture';
import { study } from '../../../stage/locations';
import { candle, mirror, table } from '../../../stage/props';
import { smoke } from '../../../stage/fx';
import { DUSK, lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 11. A smoky back room where two vulgar actors preen at a mirror, greasing
 * their hair and powdering, the camera tilting uneasily around them. Back in the study Ziyu offers
 * his guess (a few kindred friends) and the other two double over with laughter. The camera finds
 * Ziyu's blush, then drifts past him through the moon window, where gentlemen in dark robes appear
 * in the bamboo, talking with deer-tail whisks: the pleasure he means.
 */

export default defineScene({
  seed: 1011,
  build: (kit, story) => {
    const { groups: [back, room], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: vulgar actors -----------------------------------------------------------------------
    interior(kit, back, { w: 7, d: 6, h: 2.8, back: 'plain', floorKind: 'boards', wall: 0x9c958b });
    table(kit, back, { x: 0, z: -2, w: 2.2, d: 0.7 });
    mirror(kit, back, -0.5, -2.3);
    const lights1 = [candle(kit, back, 0.6, 0.82, -2.1, 1.6), candle(kit, back, -1.4, 0.82, -2.1, 1.6)];
    smoke(kit, back, 1, 0.9, -1.8, { h: 1.8, count: 120, size: 0.2 });
    const flashy = { ...CAST.youth, robe: 0x6e675f, jacket: 0x3f3a35, sash: 0xc0321e, face: 'plain' as const };
    const a = figure(kit, back, flashy, -0.5, -1.1);
    const b = figure(kit, back, { ...flashy, robe: 0x8c857c, headwear: 'dan' }, 0.9, -0.7);
    for (let k = 0; k < 6; k++) kit.mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.12, 8), tone([0xf4f0e8, 0x3f3a35][k % 2]), back, -1 + k * 0.3, 0.88, -1.9);
    lights(kit, back, { key: [2, 5, 3], intensity: 0.6, fill: 0.15 });

    // --- Shots 2–3: in the study ---------------------------------------------------------------------
    const s = study(kit, room);
    const ziyu = figure(kit, room, CAST.ziyu, -0.6, 0.2);
    const zq = figure(kit, room, CAST.zhongqing, 1.0, 0.6);
    const nx = figure(kit, room, CAST.nanxiang, 0.3, 1.6);
    // Beyond the moon window, in the grove: the kindred spirits he imagines.
    const sages = [figure(kit, room, { ...CAST.zhongqing, robe: 0x2f2a26, jacket: 0x1c1816, headwear: 'scarf' }, -3.1, -5.9), figure(kit, room, { ...CAST.ziyu, robe: 0x3f3a35, jacket: 0x2f2a26 }, -2.0, -5.5)];
    const whisk = sages.map(sg => { const w = kit.group(sg.hands.r, 0, -0.05, 0); kit.mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.3, 4), tone(0x2f2a26), w, 0, 0.1, 0); kit.mesh(new THREE.ConeGeometry(0.05, 0.3, 8), tone(0xf0ebe2), w, 0, 0.35, 0); return w; });
    lights(kit, room, { key: [-5, 9, 6], intensity: 0.95 });
    const cam2 = move(kit, room, [
      [at(1), [-2.6, 1.6, 3], [0.2, 1.4, 0.6]],
      [at(1) + 5, [2.8, 1.8, 3.4], [0.3, 1.3, 0.6]],
      [at(2), [0.4, 1.7, 2.5], [-0.6, 1.5, 0.2]],
    ]);
    const cam3 = move(kit, room, [
      [at(2), [0.1, 1.62, 1.3], [-0.6, 1.55, 0.2]],
      [at(2) + 5, [0.2, 1.65, 1.1], [-0.6, 1.55, 0.2]],
      [at(2) + 9, [-1.6, 2.1, -1.6], [-2.4, 1.6, -5.8]],
      [36, [-2.2, 2.0, -3.4], [-2.5, 1.5, -5.8]],
    ], { pull: 0.35 });

    return (seconds: number, shot: number) => {
      show(shot === 0 ? 0 : 1);
      if (shot === 0) {
        kit.setEnv(DUSK(0.06));
        const t = seconds;
        lights1.forEach(c => c.update(t));
        // An uneasy, tilting camera circling the preening pair.
        const ang = -0.6 + t * 0.12;
        kit.camera.position.set(back.position.x + Math.sin(ang) * (kit.portrait() ? 3.8 : 2.6), 1.5, Math.cos(ang) * (kit.portrait() ? 3.8 : 2.6) - 0.6);
        kit.camera.lookAt(back.position.x + 0.2, 1.45, -1);
        kit.camera.rotateZ(Math.sin(t * 0.6) * 0.1 + 0.08);
        face(a, -0.5, -2.3);
        a.pose({ ...G.rest(t), r: { lift: 1.5, out: 0.3, twist: 0.5, bend: 1.8 + Math.sin(t * 6) * 0.2 }, l: { lift: 1.4, out: 0.4, twist: -0.5, bend: 2.0 }, pitch: -0.1, roll: Math.sin(t * 2) * 0.1 });
        face(b, -0.5, -1.1);
        b.pose(cue(t, [[0, G.fan], [4, G.laugh], [7, tt => ({ ...G.pose(tt), roll: 0.2 })]]));
      } else {
        s.update(seconds);
        face(ziyu, 1, 0.8); face(zq, -0.6, 0.2); face(nx, -0.6, 0.2);
        if (shot === 1) {
          kit.setEnv(INK_SKY.paper(0.03));
          const t = seconds - at(1);
          cam2(seconds);
          ziyu.pose(cue(t, [[0, G.think], [0.8, G.speak], [5.4, G.rest]]));
          zq.pose(cue(t, [[0, G.rest], [5.4, G.laugh], [8, G.guffaw]]));
          nx.pose(cue(t, [[0, G.fan], [5.8, G.guffaw], [8.5, G.point]]));
          sages.forEach(sg => sg.root.visible = false);
        } else {
          kit.setEnv(INK_SKY.paper(0.03));
          const t = seconds - at(2);
          cam3(seconds);
          ziyu.blush(span(t, 0, 2.5));
          ziyu.pose(cue(t, [[0, G.shy], [5, G.speak], [9, G.think]]));
          zq.pose(G.laugh(t)); nx.pose(G.laugh(t + 1));
          sages.forEach((sg, i) => {
            sg.root.visible = true;
            sg.fade(span(t, 6, 9));
            face(sg, i ? -3.1 : -2.0, i ? -5.9 : -5.5);
            sg.pose(i ? G.speak(t, 'r') : G.stroke(t));
            whisk[i].rotation.z = Math.sin(t * 2 + i) * 0.4;
          });
        }
      }
    };
  },
});
