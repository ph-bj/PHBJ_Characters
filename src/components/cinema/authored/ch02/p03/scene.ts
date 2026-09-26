import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { courtyard, gateLane } from '../../../stage/locations';
import { gifts } from '../../../stage/props';
import { lights, move, sets } from '../../../stage/direct';
import { MEI_JIN } from '../actors';

/*
 * Chapter 2, paragraph 3. Pacing the courtyard, Wenhui presses the point: the boy has come a long
 * way to him, and Shixie is bound by duty; far off, beyond the open gate, two travellers wait with
 * their bundles. Then Mei Jin is called, hurries up the flagged walk, bows, and confirms who they
 * are, and Shixie gives him his instructions, while the camera goes out through the gate to the pair
 * waiting in the lane.
 */

export default defineScene({
  seed: 2003,
  build: (kit, story) => {
    const { groups: [yard, lane], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    const c = courtyard(kit, yard);
    const shixie = figure(kit, yard, CAST.shixie, -0.8, -4);
    const wenhui = figure(kit, yard, CAST.wenhui, 0.8, -4.2);
    const meijin = figure(kit, yard, MEI_JIN, 3, 8);
    lights(kit, yard, { key: [8, 10, 8], intensity: 1 });
    const cam1 = move(kit, yard, [
      [0, [5, 1.7, 3], [0, 1.4, -3]],
      [9, [-3.6, 1.8, 2], [0, 1.4, -2]],
      [18, [0, 2.4, 6], [0, 1.4, -1.6]],
    ]);
    const cam2 = move(kit, yard, [
      [at(1), [2.6, 1.6, 2.6], [0, 1.4, 0.2]],
      [at(1) + 7, [-2.4, 1.6, 3], [0.8, 1.4, 0]],
    ]);

    // The lane outside, where the two wait.
    const g = gateLane(kit, lane);
    const pincai = figure(kit, lane, CAST.pincai, -0.9, 4.2);
    const yuanmao = figure(kit, lane, CAST.yuanmao, 0.5, 4.6);
    const theirMan = figure(kit, lane, { ...CAST.servant, robe: 0x9c958b }, 1.9, 4.4);
    gifts(kit, lane, 2.6, 0, 4.9);
    lights(kit, lane, { key: [8, 12, 10], intensity: 1 });
    const cam3 = move(kit, lane, [
      [at(1) + 9, [0, 1.7, -3], [0, 1.4, 4.4]],
      [at(1) + 14, [-3.4, 1.7, 2], [0, 1.4, 4.4]],
      [36, [-4.2, 1.8, 7.4], [0, 1.4, 4.4]],
    ]);

    return (seconds: number, shot: number) => {
      const outside = shot === 1 && seconds > at(1) + 9;
      show(outside ? 1 : 0);
      kit.setEnv(INK_SKY.paper(0.02));
      c.flowerGate.open(1);
      if (!outside) {
        if (shot === 0) {
          cam1(seconds);
          const a = seconds * 0.25;
          shixie.root.position.set(-0.8 + Math.sin(a) * 1.6, 0, -4 + seconds * 0.12);
          wenhui.root.position.set(0.8 + Math.sin(a) * 1.6, 0, -4.2 + seconds * 0.12);
          shixie.root.rotation.y = wenhui.root.rotation.y = Math.cos(a) > 0 ? 0.3 : -0.3;
          shixie.pose({ ...G.behind(seconds), walk: seconds * 4, stride: 0.6, yaw: 0.5 });
          wenhui.pose({ ...G.argue(seconds), walk: seconds * 4, stride: 0.6, yaw: -0.5 });
          meijin.root.visible = false;
        } else {
          const t = seconds - at(1);
          cam2(seconds);
          meijin.root.visible = true;
          shixie.root.position.set(-0.6, 0, -1.4); wenhui.root.position.set(0.8, 0, -1.6);
          walkAlong(meijin, t, 0, 3.4, [[3, 8], [0.2, 1.2]], G.rest(t), 7);
          if (t > 3.4) { face(meijin, -0.6, -1.4); meijin.pose(cue(t, [[3.4, tt => G.bow(tt, 0.6)], [5, tt => ({ ...G.speak(tt), bow: 0.2 })]])); }
          face(shixie, meijin.root.position.x, meijin.root.position.z); face(wenhui, meijin.root.position.x, meijin.root.position.z);
          shixie.pose(cue(t, [[0, G.folded], [6, G.speak]]));
          wenhui.pose(G.stroke(t));
        }
      } else {
        cam3(seconds);
        g.gate.open(1);
        const t = seconds - at(1);
        face(pincai, 0, -3); face(yuanmao, 0, -3); face(theirMan, 0, -3);
        pincai.pose(cue(t, [[9, G.folded], [12, G.speak]]));
        yuanmao.pose({ ...G.rest(t), pitch: 0.3 });
        theirMan.pose(G.hold(t));
      }
    };
  },
});
