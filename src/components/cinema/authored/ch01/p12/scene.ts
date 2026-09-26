import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure } from '../../../stage/figure';
import { study } from '../../../stage/locations';
import { book, cup, jar, stool, sword, table } from '../../../stage/props';
import { inkGather } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 12. Low round the table: a wine jar unsealed, cups poured, and Ziyu drawing an
 * ancient sword to catch the light. Nanxiang props a boot on a stool and pulls a book from it, and
 * Zhongqing laughs. Then over Ziyu's shoulder the book opens on its title, 《曲台花选》, the camera
 * sinks toward the page, and drops of ink rise from it to gather into 花.
 */

export default defineScene({
  seed: 1012,
  build: (kit, story) => {
    const { groups: [room, page], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    const s = study(kit, room);
    table(kit, room, { x: 0, z: 0.5, w: 1.3, d: 0.8, h: 0.75 });
    jar(kit, room, -0.35, 0.75, 0.45, 0.45);
    const cups = [[0.1, 0.35], [0.35, 0.6], [-0.05, 0.7]].map(([x, z]) => cup(kit, room, x, 0.75, z, 1.4));
    const ziyu = figure(kit, room, CAST.ziyu, -0.3, -0.35);
    const blade = sword(kit, ziyu.hands.r, { len: 0.8, drawn: true });
    blade.rotation.set(0, 0, -Math.PI / 2);
    const scabbard = sword(kit, room, { x: 0.1, y: 0.77, z: 0.55, len: 0.8 });
    const nx = figure(kit, room, CAST.nanxiang, 1.3, 1.2);
    const zq = figure(kit, room, CAST.zhongqing, -1.5, 1.3);
    stool(kit, room, 1.0, 1.9);
    const boots = book(kit, nx.hands.r, { w: 0.14, d: 0.2 });
    boots.group.rotation.set(0.4, 0, -1.3);
    lights(kit, room, { key: [-4, 8, 7], intensity: 1 });
    const cam1 = move(kit, room, [
      [0, [2.2, 0.95, 2.4], [-0.1, 0.9, 0.5]],
      [4, [0.9, 1.05, 1.6], [-0.2, 1.2, -0.2]],
      [9, [-1.2, 1.2, 1.8], [-0.3, 1.5, -0.3]],
    ]);
    const cam2 = move(kit, room, [
      [at(1), [-0.6, 1.5, 3.4], [1.1, 1.0, 1.4]],
      [at(1) + 5, [0.2, 1.3, 3.2], [1.1, 0.8, 1.6]],
      [at(1) + 8.4, [-0.4, 1.7, 3.6], [-0.6, 1.4, 1.2]],
      [at(2), [-0.2, 1.8, 1.6], [-0.3, 1.3, -0.3]],
    ]);

    // --- Shot 3: the title page, and 花 --------------------------------------------------------------
    table(kit, page, { w: 1.6, d: 1, h: 0.8 });
    const manual = book(kit, page, { y: 0.81, w: 0.34, d: 0.46, title: '曲台花选' });
    const hands = figure(kit, page, CAST.ziyu, 0, -0.75);
    const flower = inkGather(kit, page, '花', { size: 1.2, at: at(2) + 7, dur: 3.5, count: 2600, spread: 2.4, drop: 0.035 });
    flower.points.position.set(0, 1.7, 0);
    lights(kit, page, { key: [-3, 7, 5], intensity: 1 });
    const cam3 = move(kit, page, [
      [at(2), [0.2, 2.1, -1.4], [0, 0.82, 0.05]],
      [at(2) + 5, [0.05, 1.7, -0.25], [0, 0.82, 0.05]],
      [at(2) + 8, [0.3, 1.6, 1.8], [0, 1.4, 0]],
      [36, [0.1, 1.7, 3.2], [0, 1.65, 0]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot < 2 ? 0 : 1);
      kit.setEnv(INK_SKY.paper(0.03));
      if (shot < 2) {
        s.update(seconds);
        face(ziyu, 0, 1.2); face(nx, -0.3, -0.3); face(zq, 0, 0);
        cups.forEach(c => { c.visible = true; });
        if (shot === 0) {
          const t = seconds;
          cam1(seconds);
          // Drawing the sword: it slides out along his arm and turns to the light.
          ziyu.pose(cue(t, [[0, G.drink], [3, tt => ({ ...G.rest(tt), r: { lift: 1.3 + Math.sin(tt) * 0.1, out: 0.5, twist: 0.3, bend: 0.4 }, pitch: -0.2, yaw: 0.4 })]]));
          blade.visible = t > 3; scabbard.visible = t < 3;
          blade.rotation.x = t * 0.4;
          nx.pose(G.toast(t)); zq.pose(G.fan(t));
          boots.group.visible = false;
        } else {
          const t = seconds - at(1);
          cam2(seconds);
          blade.visible = false; scabbard.visible = true;
          // A foot up on the stool, a hand to the boot, and out comes the book.
          face(nx, 1.0, 1.9);
          nx.pose(cue(t, [[0, tt => ({ ...G.rest(tt), bow: 0.55, r: { lift: 0.4, out: 0.1, bend: 0.4 } })], [2.6, tt => ({ ...G.offer(tt), bow: 0.1 })]]));
          if (t > 2.6) face(nx, -0.3, -0.35);
          boots.group.visible = t > 1.8;
          ziyu.pose(cue(t, [[0, G.rest], [3.2, G.offer], [5, G.read]]));
          zq.pose(cue(t, [[0, G.fan], [8.4, G.laugh], [11, G.speak]]));
        }
      } else {
        const t = seconds - at(2);
        cam3(seconds);
        manual.open(span(t, 2.2, 3.6));
        hands.pose(G.read(t));
      }
    };
  },
});
