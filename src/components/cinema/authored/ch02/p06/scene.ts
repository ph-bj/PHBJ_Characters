import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { floor, hall, wall } from '../../../stage/architecture';
import { formalHall } from '../../../stage/locations';
import { bareTree, bamboo } from '../../../stage/nature';
import { bed, table } from '../../../stage/props';
import { specks } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { XU_SHUN } from '../actors';

/*
 * Chapter 2, paragraph 6. Ziyu comes into the flower hall and exchanges bows with the visitors while
 * his father asks after their parents, and is told to take Yuanmao to his father. Then out behind the
 * study: a small separate court, bamboo against its wall, where Xu Shun flings open two shuttered
 * rooms, beats the dust out of a quilt in the sunlight and makes up the beds, as the three young men
 * come along the covered way.
 */

export default defineScene({
  seed: 2006,
  build: (kit, story) => {
    const { groups: [hallSet, back], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: Ziyu comes out -------------------------------------------------------------------
    formalHall(kit, hallSet);
    const shixie = figure(kit, hallSet, CAST.shixie, 0, -2.2);
    const ziyu = figure(kit, hallSet, CAST.ziyu, 5, 2);
    const pincai = figure(kit, hallSet, CAST.pincai, -1, 0.4);
    const yuanmao = figure(kit, hallSet, CAST.yuanmao, 1.1, 0.6);
    lights(kit, hallSet, { key: [-4, 10, 8], intensity: 1 });
    const cam1 = move(kit, hallSet, [
      [0, [4, 1.6, 4.2], [1, 1.4, 0.4]],
      [7, [-2.6, 1.6, 3.2], [0.8, 1.4, 0.2]],
      [14, [-3.2, 1.7, 1.6], [0.6, 1.5, -1]],
    ]);

    // --- Shot 2: two rooms prepared -------------------------------------------------------------------
    floor(kit, back, 40, 30, { kind: 'bricks', shade: 0xd6d0c6 });
    const rooms = [-3.2, 3.2].map(x => hall(kit, back, { x, z: -5, w: 5.6, d: 4.4, h: 3, bays: 3, base: 0.3 }));
    wall(kit, back, -12, 4, 12, 4, 2.6); wall(kit, back, -9, -9, -9, 4, 2.6); wall(kit, back, 9, -9, 9, 4, 2.6);
    const grove = bamboo(kit, back, 7.4, 1.6, { h: 6, count: 10, rand });
    bareTree(kit, back, -7, 1.4, 6, rand);
    // A covered way along one side.
    for (let k = 0; k < 6; k++) kit.box(back, tone(0x3f3a35), [-7.4, 1.3, 2.4 - k * 2], [0.12, 2.6, 0.12]);
    kit.box(back, tone(0x4a443e), [-7.1, 2.65, -2.6], [1.4, 0.12, 11]);
    rooms.forEach((r, i) => bed(kit, r.body, { x: i ? 1.2 : -1.2, z: -0.8 }));
    table(kit, back, { x: 0, z: -1.6, w: 1, d: 0.6 });
    const xu = figure(kit, back, XU_SHUN, 0, -1);
    const quilt = kit.mesh(new THREE.PlaneGeometry(1.4, 1, 6, 4), tone(0xe6e0d6, true), xu.hands.r, 0, -0.3, 0.3);
    const dust = specks(kit, back, { count: 400, w: 3, h: 2.5, d: 2, fall: -0.1, wind: 0.3, swirl: 0.8, size: 0.02, dark: true, y: 1.6, z: 0 });
    const trio = [figure(kit, back, CAST.ziyu, -7, 10), figure(kit, back, CAST.pincai, -7.2, 11.4), figure(kit, back, CAST.yuanmao, -6.8, 12.8)];
    lights(kit, back, { key: [8, 10, 8], intensity: 1.1 });
    const cam2 = move(kit, back, [
      [at(1), [4, 1.8, 2.8], [0, 1.4, -3]],
      [at(1) + 8, [1.6, 1.3, 2.2], [0, 1.4, -0.6]],
      [36, [2.8, 3.2, 3.4], [-4, 1.4, -1]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      kit.setEnv(INK_SKY.paper(0.02));
      if (shot === 0) {
        cam1(seconds);
        walkAlong(ziyu, seconds, 0, 3, [[5, 2], [0.4, 1.2]], G.rest(seconds), 5);
        if (seconds > 3) { face(ziyu, -1, 0.4); ziyu.pose(cue(seconds, [[3, t => G.salute(t, 0.35)], [6, G.speak], [9, t => G.bow(t, 0.4)]])); }
        face(pincai, ziyu.root.position.x, ziyu.root.position.z); face(yuanmao, ziyu.root.position.x, ziyu.root.position.z);
        pincai.pose(cue(seconds, [[0, G.folded], [3, t => G.salute(t, 0.4)], [6, G.laugh]]));
        yuanmao.pose(cue(seconds, [[0, G.rest], [3.6, t => G.bow(t, 0.8)], [6.5, G.rest]]));
        face(shixie, 0, 2);
        shixie.pose(cue(seconds, [[0, G.speak], [8, t => ({ ...G.point(t), yaw: 0.4 })]]));
      } else {
        const t = seconds - at(1);
        cam2(seconds);
        grove.update(seconds);
        rooms.forEach((r, i) => r.open(span(t, 0.5 + i * 2, 2 + i * 2)));
        const beating = t > 6 && t < 14;
        quilt.visible = beating;
        dust.points.visible = beating;
        face(xu, 0, 3);
        xu.pose(beating ? { ...G.rest(t), r: { lift: 1.4 + Math.sin(t * 7) * 0.4, out: 0.2, bend: 0.4 }, l: { lift: 1.2, out: 0.1, bend: 0.6 } } : cue(t, [[0, G.bow], [3, G.point], [14, G.bow]]));
        trio.forEach((f, i) => walkAlong(f, t, 8 + i * 0.4, 20, [[f.root.position.x, [10, 11.4, 12.8][i]], [-7 + i * 0.3, 0], [-1.4 + i * 0.9, 1.2]], i === 1 ? G.speak(t) : G.folded(t), 5));
      }
    };
  },
});
