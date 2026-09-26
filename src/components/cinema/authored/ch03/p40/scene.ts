import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, tone, walkAlong } from '../../../stage/figure';
import { DARK } from '../../../stage/architecture';
import { ground, range, water, willow } from '../../../stage/nature';
import { mist, specks } from '../../../stage/fx';
import { moon } from '../../../stage/performance';
import { DUSK, aim, lights, move, sets, span } from '../../../stage/direct';
import { BOYS } from '../../ch01/actors';
import { PINCAI } from '../actors';
import { pincaiRoom } from '../places';

/*
 * Chapter 3, paragraph 40. Pincai paces in slow circles round his room, one hand in his robe and
 * the empty sleeve swinging, grinning at his visitors; Yuanmao sniffs at him and recoils: wine.
 * Asked about Qinguan, Pincai talks of a crystal in the boy's heart, and we see it: Qinguan alone in
 * a dark cold void, a hard white crystal glinting in his breast, frost drifting past. Ziyu's
 * answering reverie: on a moonlit bank a willow lets go one white catkin, and it floats out over
 * the water on the wind toward a far figure on the other shore. Then the storm door bangs open.
 */

export default defineScene({
  seed: 3040,
  build: (kit, story) => {
    const { groups: [bedroom, void_, bank], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    pincaiRoom(kit, bedroom);
    const pincai = figure(kit, bedroom, PINCAI, 0, 0);
    const ziyu = figure(kit, bedroom, CAST.ziyu, 1.8, 1.8);
    const yuanmao = figure(kit, bedroom, CAST.yuanmao, 0.6, 2.4);
    // The storm door at the front of the room.
    kit.box(bedroom, tone(DARK), [-1.1, 1.3, 3.5], [0.1, 2.6, 0.1]); kit.box(bedroom, tone(DARK), [0.1, 1.3, 3.5], [0.1, 2.6, 0.1]);
    const leaf = kit.group(bedroom, -1.05, 0, 3.5);
    kit.box(leaf, tone(0xb9b2a8), [0.55, 1.25, 0], [1.1, 2.5, 0.05]);
    lights(kit, bedroom, { key: [3, 4, 5], intensity: 0.8, fill: 0.35 });
    const cam1 = move(kit, bedroom, [[0, [2.8, 2.2, 4], [0, 1, 0]], [at(1), [1.6, 1.5, 2.6], [0.4, 1.4, 1]], [at(2), [0.8, 1.5, 3], [0.8, 1.35, 1.6]]]);

    // --- The crystal heart ------------------------------------------------------------------------------
    const qin = figure(kit, void_, BOYS.qinguan, 0, 0);
    const crystal = kit.mesh(new THREE.OctahedronGeometry(0.07), flat(0xffffff), qin.torso, 0, 0.3, 0.18);
    specks(kit, void_, { count: 900, w: 8, h: 5, d: 6, fall: 0.2, wind: 0.3, size: 0.02, y: 1.6 });
    lights(kit, void_, { key: [2, 4, 6], intensity: 0.5, fill: 0.15 });

    // --- The catkin -------------------------------------------------------------------------------------
    ground(kit, bank, { w: 200, d: 200, height: 1, flatten: 12, shade: 0xb9b2a8 });
    water(kit, bank, { w: 80, d: 16, z: -8, y: 0.05 });
    range(kit, bank, { z: -90, span: 300, height: 20, shade: 0x8c857c, seed: 340 });
    moon(kit, bank, -10, 14, -60, 4);
    willow(kit, bank, -3, 1, { h: 6, rand });
    const dreamer = figure(kit, bank, CAST.ziyu, -1.6, 1.4);
    const far = figure(kit, bank, BOYS.qinguan, 3, -16);
    const catkin = kit.mesh(new THREE.SphereGeometry(0.05, 8, 6), flat(0xffffff), bank, 0, 0, 0);
    const haze = mist(kit, bank, { count: 6, w: 40, y: 0.4, d: 10, z: -12, size: 10, opacity: 0.5 });
    lights(kit, bank, { key: [-10, 14, -60], intensity: 0.5, fill: 0.3 });

    return (seconds: number, shot: number) => {
      show(shot === 2 ? 1 : shot === 3 ? 2 : 0);
      if (shot === 2) {
        kit.setEnv(DUSK(0.06));
        const t = seconds - at(2);
        aim(kit, void_, [Math.sin(t * 0.3) * 1.4, 1.4, 2.2 - t * 0.1], [0, 1.35, 0], 0.3);
        face(qin, Math.sin(t * 0.3) * 1.4, 2);
        qin.pose({ ...G.rest(t), pitch: -0.1, yaw: 0.4 });
        crystal.rotation.set(t, t * 1.3, 0);
        crystal.scale.setScalar(1 + Math.sin(t * 3) * 0.15);
        return;
      }
      if (shot === 3) {
        kit.setEnv(INK_SKY.moonlit([-0.2, 0.25, -1], 0.03));
        const t = seconds - at(3);
        haze.update(seconds);
        const u = span(t, 0.5, 8);
        catkin.position.set(-2.6 + u * 5.6 + Math.sin(t * 2) * 0.3, 3 - u * 1.4 + Math.sin(t * 3) * 0.2, 0.6 - u * 16);
        face(dreamer, 3, -16); dreamer.pose({ ...G.rest(t), pitch: -0.1 });
        face(far, 0, 0); far.pose(G.rest(t));
        aim(kit, bank, [catkin.position.x - 1.4 + u * 0.6, catkin.position.y + 0.3, catkin.position.z + 3.2], [catkin.position.x, catkin.position.y, catkin.position.z - 1], 0.3);
        return;
      }
      kit.setEnv(INK_SKY.paper(0.05));
      if (shot === 4) aim(kit, bedroom, [0.4, 1.6, 0.6], [-0.4, 1.4, 3.5], 0.3); else cam1(seconds);
      // Pacing in circles, empty sleeve swinging.
      const a = seconds * 0.7;
      if (seconds < at(1) + 2) { pincai.root.position.set(Math.sin(a) * 1.2, 0, 0.6 + Math.cos(a) * 0.8); pincai.root.rotation.y = a + Math.PI / 2; pincai.pose({ ...G.rest(seconds), walk: seconds * 4, stride: 0.6, r: { lift: 0.9, out: 0.1, twist: 0.6, bend: 2.1 }, l: { lift: 0.2 + Math.sin(seconds * 4) * 0.3, out: 0.2, bend: 0.1 } }); }
      else { face(pincai, 1.8, 1.8); pincai.pose(cue(seconds, [[at(1) + 2, G.laugh], [at(1) + 4, G.speak], [at(2) - 1, t => ({ ...G.argue(t), r: { lift: 1.2, out: 0.1, twist: 0.5, bend: 1.9 } })]])); }
      face(ziyu, pincai.root.position.x, pincai.root.position.z);
      ziyu.pose(cue(seconds, [[0, G.folded], [at(1) + 5, G.speak], [at(2), G.think]]));
      if (shot === 4) {
        const t = seconds - at(4);
        walkAlong(yuanmao, t, 0, 1.2, [[0.6, 2.4], [-0.5, 3.2]], G.rest(t), 5);
        leaf.rotation.y = -span(t, 1.2, 1.6) * 1.8;
        if (t > 1.2) { face(yuanmao, 0, 0); yuanmao.pose({ ...G.argue(t), mouth: 1 }); }
      } else { face(yuanmao, pincai.root.position.x, pincai.root.position.z); yuanmao.pose(seconds > at(1) && seconds < at(2) ? { ...G.rest(seconds), bow: 0.35, lean: 0.1, pitch: 0.1 } : G.rest(seconds)); if (seconds > at(1)) yuanmao.root.position.set(0.3, 0, 1.8); }
    };
  },
});
