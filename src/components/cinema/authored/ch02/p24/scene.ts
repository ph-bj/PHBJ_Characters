import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { chamber, courtyard } from '../../../stage/locations';
import { cup, dishes, table } from '../../../stage/props';
import { lights, move, sets } from '../../../stage/direct';
import { RONGHUA } from '../actors';
import { sunFeatures, wangStudy } from '../wang';

/*
 * Chapter 2, paragraph 24. In their own rooms Zhongqing finishes his meal and talks a while with his
 * wife Ronghua across the little table, the two at ease. He crosses to Wang Xun's study just as Wang
 * Xun comes in from outside, and they greet each other at the door. Then, announced by a servant,
 * Wang Xun's two brothers-in-law come waddling across the courtyard side by side: Sun Sihui and Sun
 * Siyuan, a truly matched pair.
 */

export default defineScene({
  seed: 2024,
  build: (kit, story) => {
    const { groups: [home, studySet, yard], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: Zhongqing and Ronghua ------------------------------------------------------------
    chamber(kit, home);
    table(kit, home, { x: 0, z: -1, w: 1, d: 0.7, h: 0.76 });
    dishes(kit, home, 0.76, [[-0.2, -1], [0.2, -0.9]], kit.rand);
    cup(kit, home, 0.1, 0.76, -1.2, 1.2);
    const zq = figure(kit, home, CAST.zhongqing, -0.8, -1);
    const rh = figure(kit, home, RONGHUA, 0.8, -1);
    lights(kit, home, { key: [-3, 7, 5], intensity: 1 });
    const cam1 = move(kit, home, [[0, [2.4, 1.5, 2], [0, 1.1, -1]], [12, [-1.6, 1.4, 1.2], [0.6, 1.2, -1]]]);

    // --- Shot 2: Wang Xun's study -------------------------------------------------------------------
    wangStudy(kit, studySet);
    const zq2 = figure(kit, studySet, CAST.zhongqing, -1.4, 1.4);
    const wx = figure(kit, studySet, CAST.wangxun, 4.6, 4);
    const cam2 = move(kit, studySet, [[at(1), [-3, 1.6, 3.6], [0, 1.3, 0.6]], [at(2), [0.4, 1.6, 3.8], [1.2, 1.4, 1.6]]]);

    // --- Shot 3: the Sun brothers ------------------------------------------------------------------
    const c = courtyard(kit, yard);
    const sihui = figure(kit, yard, CAST.sihui, -0.5, 9);
    const siyuan = figure(kit, yard, CAST.siyuan, 0.5, 9.2);
    sunFeatures(kit, sihui, siyuan);
    const servant = figure(kit, yard, CAST.servant, 1.6, 4);
    lights(kit, yard, { key: [6, 10, 8], intensity: 1 });
    const cam3 = move(kit, yard, [[at(2), [0, 1.3, -2], [0, 1.4, 6]], [36, [0.2, 1.55, 1.6], [0, 1.5, 4]]]);

    return (seconds: number, shot: number) => {
      show(shot);
      kit.setEnv(INK_SKY.paper(0.025));
      if (shot === 0) {
        cam1(seconds);
        face(zq, 0.8, -1); face(rh, -0.8, -1);
        zq.pose(cue(seconds, [[0, t => ({ ...G.drink(t), sit: 1 })], [4, t => ({ ...G.speak(t), sit: 1 })], [9, t => ({ ...G.laugh(t), sit: 1 })]]));
        rh.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 1 })], [5, t => ({ ...G.shy(t), sit: 1 })], [8, t => ({ ...G.speak(t, 'l'), sit: 1 })]]));
      } else if (shot === 1) {
        cam2(seconds);
        const t = seconds - at(1);
        walkAlong(wx, t, 0, 4, [[4.6, 4], [0, 1.6]], G.rest(t), 5);
        face(zq2, wx.root.position.x, wx.root.position.z);
        zq2.pose(cue(t, [[0, G.behind], [4, tt => G.salute(tt, 0.3)], [7, G.speak]]));
        if (t > 4) { face(wx, -1.4, 1.4); wx.pose(cue(t, [[4, tt => G.salute(tt, 0.3)], [7, G.laugh]])); }
      } else {
        cam3(seconds);
        const t = seconds - at(2);
        c.flowerGate.open(1);
        walkAlong(sihui, t, 0.5, 9, [[-0.5, 9], [-0.5, 4.6]], { ...G.folded(t), bow: -0.1, lean: Math.sin(t * 4.5) * 0.08 }, 3.8);
        walkAlong(siyuan, t, 0.5, 9, [[0.5, 9.2], [0.5, 4.8]], { ...G.rest(t), lean: Math.sin(t * 4.5 + 1) * 0.08 }, 3.8);
        face(servant, 0, 9); servant.pose(t > 2 ? G.bow(t, 0.5) : G.rest(t));
      }
    };
  },
});
