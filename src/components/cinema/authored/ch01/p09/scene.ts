import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { courtyard, study } from '../../../stage/locations';
import { cup, pot, table } from '../../../stage/props';
import { smoke } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 9. A long following shot: the gatekeeper leads Zhongqing and Nanxiang in
 * through the hanging-flower gate and across the courtyard toward the study. In the study a page
 * brings tea on a tray while Nanxiang's gaze travels round the room's antiques; then, over the
 * steaming cups, the camera moves between the two as Nanxiang puts his question and Ziyu answers.
 */

export default defineScene({
  seed: 1009,
  build: (kit, story) => {
    const { groups: [yard, room], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: shown straight in ------------------------------------------------------------------
    const court = courtyard(kit, yard);
    const keeper = figure(kit, yard, CAST.servant, 0, 10.5);
    const zq = figure(kit, yard, CAST.zhongqing, -0.5, 12);
    const nx = figure(kit, yard, CAST.nanxiang, 0.7, 12.6);
    lights(kit, yard, { key: [6, 10, 10], intensity: 1 });
    const cam1 = move(kit, yard, [
      [0, [0.4, 1.7, 16.5], [0, 1.4, 8]],
      [5, [0.6, 1.8, 11], [0, 1.4, 3]],
      [10, [2.8, 2.2, 3], [0, 1.4, -6]],
    ]);

    // --- Shots 2–3: tea, and the question -------------------------------------------------------
    const s = study(kit, room);
    const ziyu = figure(kit, room, CAST.ziyu, -0.9, 0.5);
    const nanxiang = figure(kit, room, CAST.nanxiang, 1.2, 0.2);
    const zhongqing = figure(kit, room, CAST.zhongqing, 1.6, 1.6);
    table(kit, room, { x: 0.2, z: 0.5, w: 1, d: 0.6, h: 0.72 });
    const cups = [[-0.1, 0.45], [0.45, 0.5], [0.2, 0.7]].map(([x, z]) => cup(kit, room, x, 0.72, z, 1.3));
    pot(kit, room, 0.2, 0.72, 0.28);
    const steam = cups.map(c => smoke(kit, room, c.position.x, 0.8, c.position.z, { h: 0.6, count: 50, size: 0.05, shade: 0x9c958b }));
    const page = figure(kit, room, CAST.page, -5, 4);
    const tray = kit.group(page.hands.r, 0, -0.06, 0.1);
    kit.box(tray, new THREE.MeshLambertMaterial({ color: 0x3f3a35 }), [0, 0, 0], [0.4, 0.02, 0.3]);
    lights(kit, room, { key: [-5, 9, 7], intensity: 0.95 });
    const cam2 = move(kit, room, [
      [at(1), [-3.8, 1.9, 5.5], [-0.5, 1.2, 0]],
      [at(1) + 4.5, [0.8, 1.7, 3.4], [1.2, 1.5, 0.2]],
      [at(1) + 6.5, [1.6, 1.8, 1.8], [3.6, 1.7, -4]],
      [at(2), [0.6, 1.9, 1.7], [-3.4, 1.6, -3.5]],
    ]);
    const cam3 = move(kit, room, [
      [at(2), [-2.2, 1.6, 2.2], [1.2, 1.5, 0.2]],
      [at(2) + 4.4, [-1.8, 1.5, 1.6], [1.2, 1.55, 0.2]],
      [at(2) + 5.4, [2.4, 1.55, 1.4], [-0.9, 1.4, 0.5]],
      [at(2) + 10, [2.2, 1.5, 1.2], [-0.9, 1.45, 0.5]],
      [36, [0.2, 2.8, 5.4], [0.2, 1.1, 0.4]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot === 0 ? 0 : 1);
      kit.setEnv(INK_SKY.paper(0.03));
      if (shot === 0) {
        cam1(seconds);
        court.flowerGate.open(span(seconds, 0.5, 2.5));
        walkAlong(keeper, seconds, 0.6, 9.5, [[0, 10.5], [0, 5], [0.3, -2], [1.5, -6]], G.hold(seconds), 5.5);
        walkAlong(zq, seconds, 1, 10, [[-0.5, 12], [-0.5, 6], [-0.4, -1], [0.4, -5]], G.folded(seconds), 5.5);
        walkAlong(nx, seconds, 1.2, 10, [[0.7, 12.6], [0.7, 6.4], [0.9, 0], [2.2, -4.6]], G.speak(seconds, 'r'), 5.5);
        nx.head.rotation.y = Math.sin(seconds * 0.7) * 0.5;
      } else {
        s.update(seconds);
        face(ziyu, 1.2, 0.2); face(nanxiang, -0.9, 0.5); face(zhongqing, -0.3, 0.3);
        steam.forEach(p => { p.visible = seconds > at(1) + 3.4; });
        cups.forEach(c => { c.visible = seconds > at(1) + 3.4; });
        if (shot === 1) {
          const t = seconds - at(1);
          cam2(seconds);
          const walking = walkAlong(page, t, 0, 3.4, [[-5, 4], [-1.5, 2], [-0.2, 1.1]], { ...G.offer(t), bow: 0.05 }, 7);
          if (!walking) { face(page, 0.2, 0.5); page.pose(t < 4.4 ? G.offer(t) : G.bow(t, 0.4)); if (t > 5) walkAlong(page, t, 5, 9, [[-0.2, 1.1], [-3, 3], [-6, 6]], G.rest(t), 7); }
          tray.visible = t < 3.6;
          ziyu.pose(cue(t, [[0, G.speak], [4, G.rest]]));
          nanxiang.pose(cue(t, [[0, G.laugh], [4, tt => ({ ...G.behind(tt), yaw: -0.9 + Math.sin(tt * 0.5) * 0.9 })]]));
          zhongqing.pose(G.fan(t));
        } else {
          const t = seconds - at(2);
          cam3(seconds);
          nanxiang.pose(cue(t, [[0, tt => ({ ...G.speak(tt), bow: 0.2 })], [4.6, G.rest], [10, G.argue]]));
          ziyu.pose(cue(t, [[0, G.rest], [4.6, G.think], [6, tt => G.speak(tt, 'l')], [10, G.rest]]));
          zhongqing.pose(cue(t, [[0, G.fan], [10, G.laugh]]));
        }
      }
    };
  },
});
