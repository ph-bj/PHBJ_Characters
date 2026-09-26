import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { study } from '../../../stage/locations';
import { move, sets } from '../../../stage/direct';
import { DANS, FU_SAN, GUI_FEN, PINCAI, RONGGUAN, XI } from '../actors';
import { earring } from '../places';
import { pitTable } from '../table';

/*
 * Chapter 3, paragraph 20. Fu flaps a big hand at his own ignorance: no scholar, no company for
 * learned old gentlemen. At the name of Lord Mei's son the film slips into the Mei study, where
 * Ziyu, the young man Fu has only heard of, bends over his desk by the moon window. Back at the
 * table the camera rounds the two new friends as Pincai reads them: Fu sprawling and laughing with
 * his whole body, Gui upright, hands folded, measuring every word. Rongguan slips away, and the
 * camera follows him up to the big box, where he leans at the dark-faced man's shoulder.
 */

export default defineScene({
  seed: 3020,
  build: (kit, story) => {
    const { groups: [hall, den], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const T = pitTable(kit, hall);
    const pincai = figure(kit, hall, PINCAI, 0, 0);
    const fu = figure(kit, hall, FU_SAN, 0, 0);
    const gui = figure(kit, hall, GUI_FEN, 0, 0);
    const rong = figure(kit, hall, RONGGUAN, 0, 0);
    earring(kit, rong);
    const [bx, bz] = T.th.boxes[0];
    const xi = figure(kit, hall, XI, bx + 0.9, bz); xi.root.position.y = 2.7;
    const flock = [0, 1].map(k => { const f = figure(kit, hall, DANS[k], bx + 0.3, bz + 0.8 + k * 0.6); f.root.position.y = 2.7; return f; });
    const [px, pz] = T.spot('pincai');
    const [fx, fz] = T.spot('fu');
    const [gx, gz] = T.spot('gui');
    const cam1 = move(kit, hall, [[0, [fx + 0.8, 1.45, fz - 1.4], [fx, 1.3, fz]], [at(1), [fx + 0.4, 1.4, fz - 1.1], [fx, 1.35, fz]]]);
    const cam3 = move(kit, hall, [[at(2), [fx - 0.9, 1.4, fz - 1.2], [(fx + gx) / 2, 1.25, fz]], [at(3), [gx + 1.1, 1.45, gz - 1.1], [(fx + gx) / 2, 1.25, fz]]]);
    const cam4 = move(kit, hall, [[at(3), [T.tx + 1.4, 1.6, T.tz - 1.2], [T.tx + 2, 1.4, T.tz + 1]], [at(3) + 3.5, [3, 2.4, -1], [8, 2.6, -5]], [36, [7.6, 4.1, -2.6], [bx + 0.6, 3.6, bz]]]);

    const s = study(kit, den);
    const ziyu = figure(kit, den, CAST.ziyu, ...s.seats.desk);
    const cam2 = move(kit, den, [[at(1), [2.4, 1.7, 1.8], [0, 1.2, -2.8]], [at(2), [0.9, 1.45, -1], [0, 1.3, -2.9]]]);

    return (seconds: number, shot: number) => {
      show(shot === 1 ? 1 : 0);
      if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.03));
        cam2(seconds);
        s.update(seconds);
        face(ziyu, 0, 1);
        ziyu.pose(cue(seconds, [[at(1), t => ({ ...G.write(t), sit: 1 })], [at(1) + 6, t => ({ ...G.think(t), sit: 1 })]]));
        return;
      }
      kit.setEnv(INK_SKY.paper(0.02));
      T.th.update(seconds);
      if (shot === 0) cam1(seconds); else if (shot === 2) cam3(seconds); else cam4(seconds);
      T.sit(pincai, 'pincai', cue(seconds, [[0, G.rest], [at(2), G.think]]), [fx, fz]);
      pincai.root.position.z = pz - 0.45;
      T.sit(fu, 'fu', cue(seconds, [[0, t => ({ ...G.laugh(t), r: { lift: 1.2 + Math.sin(t * 5) * 0.3, out: 0.5, bend: 0.3 } })], [5, G.speak], [at(2), t => ({ ...G.guffaw(t), lean: Math.sin(t * 2) * 0.1 })]]), [px, pz]);
      T.sit(gui, 'gui', cue(seconds, [[0, G.folded], [at(2), t => ({ ...G.folded(t), pitch: 0.05, mouth: 0.2 * Math.max(0, Math.sin(t * 2)) })]]), [px, pz]);
      // Rongguan leaves the table and ends up at the big man's shoulder.
      if (seconds < at(3) + 1) T.sit(rong, 'rong', G.rest(seconds));
      else if (seconds < at(3) + 4) walkAlong(rong, seconds, at(3) + 1, at(3) + 4, [T.spot('rong'), [T.tx + 2, T.tz + 1.4], [T.tx + 5, T.tz + 2.4]], G.rest(seconds), 5);
      else { rong.root.position.set(bx + 0.5, 2.7, bz - 0.5); face(rong, bx + 0.9, bz); rong.pose({ ...G.speak(seconds), lean: 0.2, l: { lift: 1.2, out: 0.3, bend: 0.3 } }); }
      face(xi, 0, bz); xi.pose({ ...G.rest(seconds), sit: 1, yaw: seconds > at(3) + 4 ? -0.5 : 0 });
      flock.forEach((f, k) => { face(f, bx + 0.9, bz); f.pose(G.laugh(seconds + k)); });
    };
  },
});
