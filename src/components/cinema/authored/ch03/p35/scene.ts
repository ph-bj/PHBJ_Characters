import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue, face, figure } from '../../../stage/figure';
import { ingots, writing } from '../../../stage/props';
import { inkGather } from '../../../stage/fx';
import { aim, move, orbit, sets, span } from '../../../stage/direct';
import { CHUNLAN, PROPRIETOR, XI } from '../actors';
import { accountsRoom } from '../places';

/*
 * Chapter 3, paragraph 35. At the counter Xi, laughing, tips a heap of silver onto the bill
 * without a glance at it while the proprietor bows lower with every ingot. The camera circles the
 * big man as his name gathers above him in ink, 奚十一, the eleventh son, the willing dupe. Then,
 * apart by the window in his cut-down fox coat, eyes dry now and chin up: Chunlan, his name
 * brushed on a slip beside him.
 */

export default defineScene({
  seed: 3035,
  build: (kit, story) => {
    const { groups: [counter], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const room = accountsRoom(kit, counter);
    const xi = figure(kit, counter, XI, -2.6, -1.9);
    const boss = figure(kit, counter, PROPRIETOR, -2.6, -3.4);
    const heap = Array.from({ length: 6 }, (_, k) => ingots(kit, counter, -2.9 + (k % 3) * 0.25, 0.97 + Math.floor(k / 3) * 0.07, -2.8, 2));
    const name = inkGather(kit, counter, '奚', { size: 0.9, at: at(1) + 1, dur: 2.5, count: 1500, spread: 1.6 });
    name.points.position.set(-2.6, 3, -1.9);
    const eleven = writing(kit, counter, '十一', { size: 0.3, paper: 0xf4f0e8, margin: 0.25, x: -1.6, y: 2.6, z: -1.9 });
    const chun = figure(kit, counter, CHUNLAN, 3, -1.6);
    const label = writing(kit, counter, '春兰', { size: 0.22, paper: 0xf4f0e8, margin: 0.25, x: 3.7, y: 2.1, z: -1.6 });
    const cam1 = move(kit, counter, [[0, [-0.8, 1.7, 0.6], [-2.6, 1.1, -2.6]], [at(1), [-1.2, 1.6, 0.4], [-2.6, 1.5, -2.2]]]);
    const cam2 = orbit(kit, counter, [-2.6, 1.8, -1.9], { r: 3.4, y: 1.8, a0: 0.6, a1: -0.5, t0: at(1), t1: at(2), lookY: 2 });

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.03));
      room.update(seconds);
      face(xi, -2.6, -3.4);
      xi.pose(cue(seconds, [[0, t => ({ ...G.offer(t), bow: 0.1 })], [4, G.laugh], [at(1), t => ({ ...G.behind(t), pitch: -0.2 })]]));
      heap.forEach((h, k) => { h.visible = seconds > 1 + k * 0.6; });
      face(boss, -2.6, -1.9);
      boss.pose(G.bow(seconds, 0.3 + span(seconds, 1, 5) * 0.5));
      eleven.set(span(seconds, at(1) + 3.5, at(1) + 5));
      face(chun, 0, 3); chun.pose({ ...G.rest(seconds), pitch: -0.15, yaw: -0.3 });
      label.set(span(seconds, at(2) + 3, at(2) + 5));
      if (shot === 0) cam1(seconds);
      else if (shot === 1) cam2(seconds);
      else { const u = span(seconds, at(2), 36); aim(kit, counter, [2.2 + u * 0.4, 1.5, 0.4 - u * 0.6], [3.2, 1.45, -1.6], 0.3); }
    };
  },
});
