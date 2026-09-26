import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { courtyard, lanternRow } from '../../../stage/locations';
import { petals } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { LIANGGONG } from '../actors';
import { sunFeatures } from '../wang';

/*
 * Chapter 2, paragraph 30. Wang Xun and Zhongqing walk the Sun brothers down the flagged path to the
 * inner gate, and just as the leaves of the flower gate swing open, the father steps through: Sun
 * Lianggong, in his official hat, a servant at his heel with a lantern. The camera is low behind the
 * little party, so he fills the gateway. Then it swings round: the two sons shuffle off the path and
 * stand pressed against the wall with their hands folded, eyes down, while petals drift from the plum.
 */

export default defineScene({
  seed: 2030,
  build: (kit, story) => {
    const { groups: [yard], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;

    const c = courtyard(kit, yard);
    const swing = lanternRow(kit, yard, [-1.8, 3.2, 6.6], [1.8, 3.2, 6.6], 2);
    const wx = figure(kit, yard, CAST.wangxun, -0.5, -2);
    const zq = figure(kit, yard, CAST.zhongqing, 0.5, -2.2);
    const sihui = figure(kit, yard, CAST.sihui, -0.4, -3.2);
    const siyuan = figure(kit, yard, CAST.siyuan, 0.4, -3.4);
    sunFeatures(kit, sihui, siyuan);
    const lg = figure(kit, yard, LIANGGONG, 0, 10);
    const man = figure(kit, yard, CAST.servant, 0.7, 11);
    const fall = petals(kit, yard, { count: 60, w: 8, h: 4, d: 6, x: 0, y: 0.5, z: 1, speed: 0.3, wind: 0.2 });
    lights(kit, yard, { key: [5, 9, 10], intensity: 1 });
    const cam = move(kit, yard, [
      [0, [1.6, 1.2, -6.5], [0, 1.5, 3]],
      [9, [0.8, 1.1, -1.5], [0, 1.6, 6]],
      [at(1), [-4.6, 1.8, 5.4], [0, 1.3, 3.4]],
      [36, [-3.6, 1.6, 6.4], [0.4, 1.3, 3.8]],
    ]);

    return (seconds: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.02));
      cam(seconds);
      swing(seconds);
      fall.update(seconds);
      c.flowerGate.open(span(seconds, 7, 10));
      // The hosts walk the brothers toward the gate; all stop when the father appears.
      const party: [typeof wx, number, number][] = [[wx, -0.5, -2], [zq, 0.5, -2.2], [sihui, -0.4, -3.2], [siyuan, 0.4, -3.4]];
      party.forEach(([f, x, z], i) => {
        const moving = walkAlong(f, seconds, 0, 9, [[x, z], [x, z + 5.2]], i < 2 ? G.speak(seconds) : G.folded(seconds), 3);
        if (!moving) face(f, lg.root.position.x, lg.root.position.z);
      });
      const inside = walkAlong(lg, seconds, 9, 14, [[0, 10], [0, 5.2]], G.behind(seconds), 4);
      walkAlong(man, seconds, 9.3, 14, [[0.7, 11], [1, 6.4]], G.hold(seconds), 4);
      if (!inside && seconds > 14) { face(lg, 0, 0); lg.pose(cue(seconds, [[14, G.behind], [at(1) + 2, G.stroke]])); face(man, 0, 0); man.pose(G.rest(seconds)); }
      if (seconds > 10) {
        wx.pose(cue(seconds, [[10, t => G.salute(t, 0.35)], [16, G.folded]]));
        zq.pose(cue(seconds, [[10, t => G.salute(t, 0.35)], [16, G.folded]]));
      }
      // Shot 2: the sons step off the path to the wall and stand aside.
      if (seconds > 11) {
        walkAlong(sihui, seconds, at(1) - 3, at(1) + 2, [[-0.4, 2], [-1.6, 2.6], [-2.4, 3.2]], G.folded(seconds), 2.6);
        walkAlong(siyuan, seconds, at(1) - 2.6, at(1) + 2.4, [[0.4, 1.8], [-1.2, 2.2], [-2.2, 2.5]], G.folded(seconds), 2.6);
        if (seconds > at(1) + 2.4) {
          for (const s of [sihui, siyuan]) { face(s, 0, 3.4); s.pose({ ...G.folded(seconds), bow: 0.25, pitch: 0.35 }); }
        } else if (seconds < at(1) - 3) for (const s of [sihui, siyuan]) s.pose({ ...G.folded(seconds), bow: 0.2 });
      }
    };
  },
});
