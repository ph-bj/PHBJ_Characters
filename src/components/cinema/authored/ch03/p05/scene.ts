import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { courtyard } from '../../../stage/locations';
import { book } from '../../../stage/props';
import { lights, move, sets, span } from '../../../stage/direct';
import { ACTORS, BOYS } from '../../ch01/actors';
import { PINCAI, SI_ER } from '../actors';
import { pincaiRoom } from '../places';

/*
 * Chapter 3, paragraph 5. Pincai sits on the kang with his eyes shut; Qinguan's figure stands
 * luminous before him, and the eight of the Manual wheel slowly round the room behind, each paused
 * in turn as he pictures them. The door bangs open and Si'er runs in, breathless: Master Ye from
 * the boat is waiting in the accounts room. The eight are gone at once. Pincai slides the Manual
 * under his dressing box, pats it flat, pulls the door to and latches it, and sets off across the
 * courtyard, Si'er trotting ahead.
 */

const EIGHT = [ACTORS.baozhu, ACTORS.huifang, ACTORS.sulan, ACTORS.shufang, ACTORS.yulin, ACTORS.lanbao, ACTORS.guibao, ACTORS.chunxi];

export default defineScene({
  seed: 3005,
  build: (kit, story) => {
    const { groups: [bedroom, yard], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    const r = pincaiRoom(kit, bedroom);
    const [kx, kz] = r.kang;
    const pincai = figure(kit, bedroom, PINCAI, kx + 0.5, kz + 0.2);
    pincai.root.position.y = 0.53;
    const manual = book(kit, pincai.hands.r, { w: 0.14, d: 0.2, title: '花选' });
    manual.group.rotation.set(1.1, 0, 0);
    const qin = figure(kit, bedroom, BOYS.qinguan, kx + 0.6, kz + 2.2);
    const eight = EIGHT.map(a => figure(kit, bedroom, a.plain, 0, 0));
    const boy = figure(kit, bedroom, SI_ER, 0, 5);
    lights(kit, bedroom, { key: [3, 4, 5], intensity: 0.8, fill: 0.3 });
    const cam1 = move(kit, bedroom, [
      [0, [kx + 0.9, 1.35, kz + 1.3], [kx + 0.5, 1.25, kz + 0.2]],
      [7, [kx + 3.2, 1.8, kz + 4], [kx + 0.5, 1.2, kz + 1]],
      [at(1), [2.2, 1.7, 3.8], [0, 1.2, 1.5]],
      [at(2), [1.6, 1.5, 0.8], [r.box.position.x, 0.8, r.box.position.z]],
      [at(2) + 5, [1, 1.3, -1.2], [r.box.position.x, 0.75, r.box.position.z]],
    ]);

    const c = courtyard(kit, yard);
    const p2 = figure(kit, yard, PINCAI, 8.4, -2.6);
    const b2 = figure(kit, yard, SI_ER, 7.6, -1.8);
    lights(kit, yard, { key: [6, 10, 8], intensity: 0.9 });
    const cam2 = move(kit, yard, [[at(2) + 6, [4, 1.5, 3], [8, 1.3, -2.4]], [36, [2, 1.8, 6], [-2, 1.2, -1]]]);

    return (seconds: number, shot: number) => {
      const out = shot === 2 && seconds > at(2) + 6;
      show(out ? 1 : 0);
      kit.setEnv(INK_SKY.paper(out ? 0.02 : 0.04));
      if (out) {
        cam2(seconds);
        c.flowerGate.open(1);
        walkAlong(b2, seconds, at(2) + 6, 34, [[7.6, -1.8], [4, 0.4], [-2, 0.8], [-7.6, -1.2]], G.rest(seconds), 7);
        walkAlong(p2, seconds, at(2) + 6.3, 36, [[8.4, -2.6], [4.4, 0], [-1.6, 0.4], [-6.6, -1.4]], G.behind(seconds), 5.5);
        return;
      }
      cam1(seconds);
      // The vision: Qinguan before him, the eight wheeling round the room.
      const vision = 1 - span(seconds, at(1) + 1.2, at(1) + 2);
      qin.fade(span(seconds, 0.5, 2) * vision);
      face(qin, kx + 0.5, kz); qin.pose(G.pose(seconds));
      eight.forEach((f, k) => {
        const a = seconds * 0.35 + k * 0.785;
        f.root.position.set(kx + 0.5 + Math.sin(a) * 3, 0, kz + 1.4 + Math.cos(a) * 2.2);
        face(f, kx + 0.5, kz);
        f.fade(span(seconds, 2 + k * 0.4, 3 + k * 0.4) * vision);
        f.pose(G.dance(seconds, k));
      });
      face(pincai, kx + 0.6, kz + 3);
      const hidden = seconds > at(2) + 2.4;
      manual.group.visible = !hidden;
      if (seconds < at(2)) {
        pincai.pose(cue(seconds, [[0, t => ({ ...G.think(t), sit: 1, pitch: 0.1 })], [at(1) + 1, t => ({ ...G.rest(t), sit: 1, yaw: 0.5, pitch: -0.1 })], [at(1) + 6, t => ({ ...G.speak(t), sit: 1 })]]));
      } else {
        // Off the kang, the book under the box, out of the door.
        pincai.root.position.y = 0;
        walkAlong(pincai, seconds, at(2), at(2) + 1.5, [[kx + 0.5, kz + 0.6], [r.box.position.x + 0.1, r.box.position.z + 0.7]], G.rest(seconds), 5);
        if (seconds > at(2) + 1.5 && seconds < at(2) + 4) { face(pincai, r.box.position.x, r.box.position.z); pincai.pose({ ...G.offer(seconds), bow: 0.5 }); }
        r.box.position.y = 0.55 + (seconds > at(2) + 1.8 && seconds < at(2) + 2.6 ? 0.06 : 0);
        if (seconds > at(2) + 4) walkAlong(pincai, seconds, at(2) + 4, at(2) + 6, [[r.box.position.x + 0.1, r.box.position.z + 0.7], [0.4, 3.4]], G.rest(seconds), 5);
      }
      walkAlong(boy, seconds, at(1), at(1) + 1.8, [[0, 5], [0.4, 1.4]], { ...G.rest(seconds), bow: 0.1 }, 9);
      if (seconds > at(1) + 1.8) { face(boy, pincai.root.position.x, pincai.root.position.z); boy.pose(cue(seconds, [[at(1) + 1.8, t => ({ ...G.speak(t), bow: 0.2, mouth: 0.9 })], [at(1) + 5, t => G.point(t, 'l')], [at(2), G.rest]])); }
      boy.fade(1 - span(seconds, at(2) + 3, at(2) + 3.6));
    };
  },
});
