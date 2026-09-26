import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure } from '../../../stage/figure';
import { courtyard, lanternRow } from '../../../stage/locations';
import { inkGather } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { LIANGGONG } from '../actors';
import { sunFeatures } from '../wang';

/*
 * Chapter 2, paragraph 31. Under the flower gate Wang Xun and Zhongqing bow; Lianggong, hands behind
 * his back, asks whether the guests are all here, and Wang Xun shakes his head. Then Zhongqing's
 * sidelong appraisal becomes the camera's: a slow, low dolly across three faces in a row, the
 * pimpled son, the father, the buck-toothed son. On the father it lingers: the flat, dark face and
 * snub nose, but regular features and a few whiskers, and the words 五官端正 gather beside him.
 */

export default defineScene({
  seed: 2031,
  build: (kit, story) => {
    const { groups: [yard], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;

    const c = courtyard(kit, yard);
    const swing = lanternRow(kit, yard, [-1.8, 3.2, 6.6], [1.8, 3.2, 6.6], 2);
    const lg = figure(kit, yard, LIANGGONG, 0, 5.2);
    const wx = figure(kit, yard, CAST.wangxun, -0.6, 3.6);
    const zq = figure(kit, yard, CAST.zhongqing, 0.7, 3.4);
    const sihui = figure(kit, yard, CAST.sihui, -1.1, 5.4);
    const siyuan = figure(kit, yard, CAST.siyuan, 1.1, 5.3);
    sunFeatures(kit, sihui, siyuan);
    const man = figure(kit, yard, CAST.servant, 1.2, 6.6);
    const praise = inkGather(kit, yard, '端', { size: 0.34, at: 27, dur: 2, count: 900, spread: 0.8, scatter: 2 });
    praise.points.position.set(0.42, 1.72, 5.2);
    const praise2 = inkGather(kit, yard, '正', { size: 0.34, at: 28, dur: 2, count: 900, spread: 0.8, scatter: 2 });
    praise2.points.position.set(0.42, 1.36, 5.2);
    lights(kit, yard, { key: [4, 8, 12], intensity: 1 });
    const cam = move(kit, yard, [
      [0, [2.6, 1.7, 1], [0, 1.5, 4.8]],
      [8, [-1.8, 1.6, 1.8], [0.2, 1.55, 5]],
      [at(1), [-1.3, 1.55, 3.9], [-1.1, 1.55, 5.4]],
      [at(1) + 6, [0, 1.62, 4.1], [0, 1.58, 5.2]],
      [at(1) + 13, [0.4, 1.62, 4.35], [0.1, 1.6, 5.2]],
      [36, [1.6, 1.6, 3.8], [0.6, 1.5, 5.3]],
    ]);

    return (seconds: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.02));
      cam(seconds);
      swing(seconds);
      c.flowerGate.open(1);
      face(lg, 0, 0); face(man, 0, 0); man.pose(G.hold(seconds));
      lg.pose(cue(seconds, [[0, G.behind], [1.5, G.speak], [8, G.behind], [at(1) + 4, G.stroke], [at(1) + 12, t => ({ ...G.behind(t), pitch: -0.1 })]]));
      face(wx, 0, 5.2); face(zq, 0, 5.2);
      wx.pose(cue(seconds, [[0, t => G.salute(t, 0.35)], [8, t => ({ ...G.rest(t), yaw: Math.sin(t * 5) * 0.3 * (1 - span(t, 10, 11)), mouth: 0.4 })], [11, G.folded]]));
      zq.pose(cue(seconds, [[0, t => G.salute(t, 0.35)], [7, G.folded], [at(1), t => ({ ...G.folded(t), yaw: -0.25 })]]));
      for (const s of [sihui, siyuan]) { face(s, 0, 2); s.pose({ ...G.folded(seconds), bow: 0.15, pitch: 0.3 }); }
    };
  },
});
