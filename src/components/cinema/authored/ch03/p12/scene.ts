import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { move, sets, span } from '../../../stage/direct';
import { DANS, FU_SAN, GUI_FEN, PINCAI, RONGGUAN, XI } from '../actors';
import { earring } from '../places';
import { pitTable } from '../table';

/*
 * Chapter 3, paragraph 12. Around Pincai's table: the fat man spread across the bench, the lean
 * one with his wisp of beard, two unremarkable dan chattering. The camera lifts to the big box on
 * the gallery, where one dan among the crowd round the dark-faced man looks down their way; then he
 * is crossing the pit toward them, and the table has no room. He bows to Pincai, who slides along
 * the bench; he sits, turns to ask Pincai's name, and a fat hand clamps on his arm.
 */

export default defineScene({
  seed: 3012,
  build: (kit, story) => {
    const { groups: [hall], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const T = pitTable(kit, hall);
    const pincai = figure(kit, hall, PINCAI, 0, 0);
    const fu = figure(kit, hall, FU_SAN, 0, 0);
    const gui = figure(kit, hall, GUI_FEN, 0, 0);
    const danA = figure(kit, hall, DANS[2], 0, 0);
    const danB = figure(kit, hall, DANS[3], 0, 0);
    const rong = figure(kit, hall, RONGGUAN, 9.8, -6);
    earring(kit, rong);
    const [bx, bz] = T.th.boxes[0];
    const xi = figure(kit, hall, XI, bx + 0.9, bz); xi.root.position.y = 2.7;
    const flock = [0, 1, 2].map(k => { const f = figure(kit, hall, DANS[k], bx + 0.5 + k * 0.5, bz + 1); f.root.position.y = 2.7; return f; });
    const [rx, rz] = T.spot('rong');
    const cam = move(kit, hall, [
      [0, [T.tx + 2.6, 1.7, T.tz - 2.4], [T.tx + 0.2, 1.1, T.tz + 0.4]],
      [at(1), [T.tx + 1.8, 2, T.tz - 1.2], [bx, 3.8, bz]],
      [at(1) + 5, [T.tx + 1.4, 1.8, T.tz - 1.6], [2, 1.4, -2]],
      [at(2), [T.tx - 1.2, 1.5, T.tz - 2.2], [T.tx - 0.6, 1.2, T.tz + 0.4]],
      [at(3), [T.tx - 0.2, 1.4, T.tz - 1.5], [T.tx - 0.5, 1.25, T.tz + 0.6]],
      [36, [T.tx - 0.4, 1.35, T.tz - 1.1], [T.tx - 0.4, 1.25, T.tz + 0.7]],
    ]);

    return (seconds: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.02));
      T.th.update(seconds);
      cam(seconds);
      const slid = span(seconds, at(2) + 3, at(2) + 4.5);
      const [px, pz] = T.spot('pincai');
      T.sit(pincai, 'pincai', cue(seconds, [[0, G.rest], [at(2) + 2, t => ({ ...G.salute(t, 0.1) })], [at(2) + 5, G.rest], [at(3) + 1, G.speak]]), [9, -2]);
      pincai.root.position.z = pz - slid * 0.45;
      if (seconds > at(2) + 5) face(pincai, rx, rz);
      T.sit(fu, 'fu', seconds < at(3) + 4 ? G.laugh(seconds) : { ...G.rest(seconds), r: { lift: 0.9, out: 0.6, bend: 0.3 }, lean: -0.15 });
      T.sit(gui, 'gui', G.rest(seconds));
      T.sit(danA, 'danA', G.speak(seconds), [T.tx, T.tz + 0.75]);
      T.sit(danB, 'danB', G.laugh(seconds + 1), [T.tx, T.tz + 0.75]);
      face(xi, 0, bz); xi.pose({ ...G.rest(seconds), sit: 1 });
      flock.forEach((f, k) => { face(f, bx + 0.9, bz); f.pose(G.laugh(seconds + k)); });
      // Rongguan: looks down from the box, then crosses the pit and greets the table.
      if (seconds < at(1) + 4) {
        rong.root.position.set(bx - 0.3, 2.7, bz + 0.2);
        face(rong, T.tx, T.tz); rong.pose({ ...G.rest(seconds), pitch: 0.3 });
      } else {
        rong.root.position.y = 0;
        const moving = walkAlong(rong, seconds, at(1) + 4, at(2) + 1, [[5.8, -6.4], [2.6, -6.2], [-2.4, -5.8], [T.tx + 0.2, T.tz + 1.5]], G.rest(seconds), 5);
        if (!moving && seconds < at(2) + 5) { face(rong, T.tx, T.tz); rong.pose(cue(seconds, [[at(2) + 1, t => G.salute(t, 0.3)], [at(2) + 2.2, t => ({ ...G.bow(t, 0.25), yaw: -0.5 })]])); }
        if (seconds > at(2) + 5) T.sit(rong, 'rong', cue(seconds, [[at(2) + 5, G.rest], [at(3), t => ({ ...G.speak(t), yaw: -0.8 })], [at(3) + 4, t => ({ ...G.rest(t), lean: 0.12, l: { lift: 0.5, out: 0.5, bend: 0.3 } })]]), [px, pz]);
      }
    };
  },
});
