import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { book, writing } from '../../../stage/props';
import { lights, move, orbit, sets, span } from '../../../stage/direct';
import { ACTORS } from '../../ch01/actors';
import { PINCAI, XU_SHUN } from '../actors';
import { accountsRoom, pincaiRoom } from '../places';

/*
 * Chapter 3, paragraph 3. The camera climbs the wall clock's case to its face (just past one),
 * then slides along to the purple-bamboo shelf, where Pincai draws out worn volumes: copied arias,
 * and a slim printed book whose title settles in ink, 曲台花选. Xu Shun laughs off any ear for
 * music and waves him to take them, and the books vanish into Pincai's sleeve. In his own room he
 * lies back on the kang reading, and one by one the eight performers of the Manual step out round
 * him in the lamplight, each with a slip bearing a name, while the camera circles the kang.
 */

const EIGHT = [ACTORS.baozhu, ACTORS.huifang, ACTORS.sulan, ACTORS.shufang, ACTORS.yulin, ACTORS.lanbao, ACTORS.guibao, ACTORS.chunxi];

export default defineScene({
  seed: 3003,
  build: (kit, story) => {
    const { groups: [office, bedroom], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    const room = accountsRoom(kit, office);
    const pincai = figure(kit, office, PINCAI, 3.4, -2.3);
    const xu = figure(kit, office, XU_SHUN, 1.8, -1);
    const libretto = book(kit, pincai.hands.l, { w: 0.16, d: 0.22 });
    libretto.group.rotation.set(1.1, 0, 0);
    const manual = book(kit, pincai.hands.r, { w: 0.14, d: 0.2, title: '曲台花选' });
    manual.group.rotation.set(1.1, 0, 0);
    const title = writing(kit, office, '曲台花选', { size: 0.22, paper: 0xf4f0e8, margin: 0.3, x: 2.6, y: 2.3, z: -2.2 });
    const cam1 = move(kit, office, [
      [0, [1.6, 2.2, -2.9], [1.6, 2.55, -3.9]],
      [4, [2.3, 1.9, -1.4], [3.6, 1.6, -3.4]],
      [at(1), [2.6, 1.7, -0.9], [3.4, 1.4, -2.4]],
      [at(1) + 5, [2.9, 1.6, -1.4], [3.35, 1.35, -2.2]],
      [at(2), [0.2, 1.7, 1.4], [2.6, 1.3, -1.7]],
      [at(3), [-1, 1.6, 2.8], [1.6, 1.2, 1.2]],
    ]);

    // --- On the kang, the eight ------------------------------------------------------------------------
    const r = pincaiRoom(kit, bedroom);
    const [kx, kz] = r.kang;
    const reader = figure(kit, bedroom, PINCAI, kx - 0.5, kz);
    reader.root.position.y = 0.53;
    const opened = book(kit, reader.hands.r, { w: 0.14, d: 0.2 });
    opened.group.rotation.set(1.2, 0, 0);
    const eight = EIGHT.map((a, k) => {
      const ang = -1.2 + k * 0.34;
      const x = kx + Math.sin(ang) * 2.6, z = kz + 0.4 + Math.cos(ang) * 2.6;
      const f = figure(kit, bedroom, a.plain, x, z);
      const slip = writing(kit, bedroom, a.name, { size: 0.14, paper: 0xf4f0e8, margin: 0.2, x, y: 2.15, z });
      slip.mesh.rotation.y = Math.atan2(kx - x, kz - z);
      return { f, slip, x, z };
    });
    lights(kit, bedroom, { key: [3, 4, 5], intensity: 0.7, fill: 0.3 });
    const cam4 = orbit(kit, bedroom, [kx, 1.1, kz + 0.6], { r: 4.4, y: 2, a0: 0.7, a1: -0.5, t0: at(3), t1: 36, lookY: 1.3 });

    return (seconds: number, shot: number) => {
      show(shot === 3 ? 1 : 0);
      if (shot === 3) {
        kit.setEnv(INK_SKY.paper(0.05));
        cam4(seconds);
        face(reader, kx + 2, kz + 3);
        reader.pose({ ...G.read(seconds), sit: 1, bow: -0.3, pitch: 0.2 });
        opened.open(0.9);
        eight.forEach(({ f, slip }, k) => {
          const t0 = at(3) + 1 + k * 0.8;
          f.fade(span(seconds, t0, t0 + 0.8));
          face(f, kx, kz);
          f.pose(k % 3 === 0 ? G.shy(seconds + k) : k % 3 === 1 ? G.folded(seconds + k) : G.fan(seconds + k));
          slip.set(span(seconds, t0 + 0.3, t0 + 1.2));
        });
        return;
      }
      kit.setEnv(INK_SKY.paper(0.03));
      cam1(seconds);
      room.update(seconds);
      // Pulls out a libretto, then the Manual; Xu Shun waves him to take them; into the sleeve and away.
      libretto.group.visible = seconds > 5 && seconds < at(1) + 3;
      manual.group.visible = seconds > at(1) + 2.5 && seconds < at(2) + 5;
      manual.open(span(seconds, at(1) + 4, at(1) + 5));
      title.set(span(seconds, at(1) + 4, at(1) + 6));
      title.mesh.visible = seconds > at(1) + 3.5 && seconds < at(2);
      face(xu, pincai.root.position.x, pincai.root.position.z);
      xu.pose(cue(seconds, [[0, G.folded], [at(2), G.laugh], [at(2) + 3, t => ({ ...G.speak(t), r: { lift: 1.1, out: 0.6, bend: 0.3 } })], [at(2) + 6, G.folded]]));
      if (seconds < at(2) + 5) {
        face(pincai, seconds < at(2) ? 3.6 : 1.8, seconds < at(2) ? -3.4 : -1);
        pincai.pose(cue(seconds, [[0, G.behind], [4, t => ({ ...G.point(t), pitch: -0.1 })], [5, G.read], [at(2), t => ({ ...G.speak(t), r: { lift: 1, out: 0.2, bend: 1.1 } })], [at(2) + 4, t => G.salute(t, 0.3)]]));
      } else walkAlong(pincai, seconds, at(2) + 5, at(3), [[3.4, -2.3], [1.5, 0.4], [0.5, 3.8]], { ...G.rest(seconds), l: { lift: 0.4, out: 0.1, bend: 1.6 } }, 5);
    };
  },
});
