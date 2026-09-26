import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, face, figure, flat, walkAlong } from '../../../stage/figure';
import { courtyard } from '../../../stage/locations';
import { moon } from '../../../stage/performance';
import { DUSK, blendEnv, lights, move, sets } from '../../../stage/direct';

/*
 * Chapter 3, paragraph 39. Night in the Mei courtyard under a pale moon. The study doors open on
 * lamplight and Ziyu and Yuanmao come out, stretching after their lessons, and cross the dark flags
 * together, Yuanmao lumbering, Ziyu light, toward the one side-room window still glowing: Pincai's.
 */

export default defineScene({
  seed: 3039,
  build: (kit, story) => {
    const { groups: [yard], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const c = courtyard(kit, yard);
    moon(kit, yard, 18, 26, -60, 4);
    // Lit windows: the study in the main hall, and Pincai's room in the west wing.
    kit.mesh(new THREE.PlaneGeometry(2.4, 1.6), flat(0xf4f0e8), yard, 0, 1.8, -8.9);
    const glowPincai = kit.mesh(new THREE.PlaneGeometry(1.8, 1.4), flat(0xf4f0e8), yard, -7.4, 1.8, -3);
    glowPincai.rotation.y = Math.PI / 2;
    const ziyu = figure(kit, yard, CAST.ziyu, 0.4, -8.4);
    const yuanmao = figure(kit, yard, CAST.yuanmao, -0.4, -8.6);
    lights(kit, yard, { key: [10, 12, -20], intensity: 0.45, fill: 0.25 });
    const cam = move(kit, yard, [[0, [3, 3.4, 6], [0, 1.6, -8.4]], [at(1), [2.4, 1.6, -1], [-2, 1.3, -5]], [36, [-1, 1.5, 1.6], [-7, 1.6, -3]]]);

    return (seconds: number) => {
      show(0);
      kit.setEnv(blendEnv(INK_SKY.moonlit([0.3, 0.35, -1], 0.03), DUSK(0.03), 0.4));
      cam(seconds);
      c.main.open(Math.min(1, seconds / 3));
      if (!walkAlong(ziyu, seconds, 4, 30, [[0.4, -8.4], [0.4, -6], [-2.4, -4], [-6.4, -3.2]], G.rest(seconds), 5) && seconds < 4) { face(ziyu, 0, 5); ziyu.pose(G.folded(seconds)); }
      if (!walkAlong(yuanmao, seconds, 3.6, 30.5, [[-0.4, -8.6], [-0.4, -6.2], [-2.8, -4.4], [-6.6, -3.8]], { ...G.rest(seconds), lean: Math.sin(seconds * 3) * 0.06 }, 4) && seconds < 3.6) { face(yuanmao, 0, 5); yuanmao.pose({ ...G.rest(seconds), l: { lift: 2.2, out: 0.4, bend: 0.6 }, r: { lift: 2.2, out: 0.4, bend: 0.6 }, bow: -0.15 }); }
      if (seconds > 30) { face(ziyu, -7.4, -3); ziyu.pose(G.rest(seconds)); face(yuanmao, -7.4, -3); yuanmao.pose(G.rest(seconds)); }
    };
  },
});
