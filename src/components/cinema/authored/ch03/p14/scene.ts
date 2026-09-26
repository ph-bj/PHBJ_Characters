import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure } from '../../../stage/figure';
import { aim, move, sets, span } from '../../../stage/direct';
import { DANS, FU_SAN, GUI_FEN, PINCAI, RONGGUAN } from '../actors';
import { earring } from '../places';
import { pitTable } from '../table';

/*
 * Chapter 3, paragraph 14. The fat man laughs till his eyes are slits and reaches over to pinch
 * Rongguan's lips. Then Pincai's slow look, as a camera move: round the boy's head at arm's length,
 * the melon-seed face, the dimples, the little ring of gold in one ear. Rongguan tilts his chin
 * across the hall, and the camera follows it up to the far gallery where Xiaofu sits aloof among
 * his patrons. Last, the lean man shrugs off Kunqu while on stage two players in a clapper-opera
 * fight tumble and leap.
 */

export default defineScene({
  seed: 3014,
  build: (kit, story) => {
    const { groups: [hall], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const T = pitTable(kit, hall);
    const pincai = figure(kit, hall, PINCAI, 0, 0);
    const fu = figure(kit, hall, FU_SAN, 0, 0);
    const gui = figure(kit, hall, GUI_FEN, 0, 0);
    const rong = figure(kit, hall, RONGGUAN, 0, 0);
    earring(kit, rong);
    // Xiaofu, across the hall in the left gallery, with patrons.
    const xiaofu = figure(kit, hall, { ...DANS[1], robe: 0xf0ebe2 }, 9.2, 3.6);
    const patrons = [CAST.official, CAST.merchant].map((s, k) => figure(kit, hall, s, 9.8, 2.6 + k * 2));
    for (const f of [xiaofu, ...patrons]) f.root.position.y = 2.7;
    const fighters = [CAST.escort, { ...CAST.escort, robe: 0x6e675f }].map((s, k) => figure(kit, T.th.stage.deck, s, (k - 0.5) * 2, 0));
    const [rx, rz] = T.spot('rong');
    const cam4 = move(kit, hall, [[at(3), [T.tx + 1.4, 1.6, T.tz + 1.8], [T.tx + 0.6, 1.3, T.tz + 0.75]], [36, [T.tx + 1.2, 1.8, T.tz + 2.6], [0, 2.2, -8]]]);

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.02));
      T.th.update(seconds);
      const [fx, fz] = T.spot('fu');
      T.sit(pincai, 'pincai', shot === 1 ? { ...G.rest(seconds), yaw: 0.3 } : G.rest(seconds), [rx, rz]);
      pincai.root.position.z -= 0.45;
      T.sit(fu, 'fu', cue(seconds, [[0, t => ({ ...G.guffaw(t), bow: 0.3 })], [2.5, t => ({ ...G.laugh(t), l: { lift: 1.4, out: 0.1, twist: -0.8, bend: 0.5 } })], [6, G.laugh], [at(2) + 5, G.argue], [at(3), G.rest]]), [rx, rz]);
      T.sit(gui, 'gui', shot === 3 ? { ...G.speak(seconds), r: { lift: 0.9, out: 0.3, bend: 0.8 } } : G.rest(seconds));
      T.sit(rong, 'rong', cue(seconds, [[0, t => ({ ...G.laugh(t), pitch: 0.1 })], [at(1), t => ({ ...G.rest(t), pitch: -0.05 })], [at(2), t => ({ ...G.point(t, 'l'), yaw: 0.4 })], [at(2) + 4, G.laugh], [at(3), t => ({ ...G.speak(t), yaw: 0.6 })]]), [fx, fz]);
      rong.blush(0.6);
      face(xiaofu, 0, 3.6); xiaofu.pose({ ...G.rest(seconds), pitch: -0.1 });
      patrons.forEach((p, k) => { face(p, 9.2, 3.6); p.pose(G.speak(seconds + k)); });
      fighters.forEach((f, k) => {
        f.root.position.x = (k - 0.5) * 2 + Math.sin(seconds * 2 + k) * 0.6;
        f.root.position.y = Math.max(0, Math.sin(seconds * 3 + k * 1.6)) * 0.5;
        face(f, (k ? -1 : 1) * 3, 0);
        f.pose({ ...G.argue(seconds + k), turn: Math.sin(seconds * 3 + k) * 0.8 });
      });
      if (shot === 0) T.close(rong, [0.45, 0.12, -0.75], -0.05);
      else if (shot === 1) {
        const a = (seconds - at(1)) * 0.2 - 0.9;
        T.close(rong, [Math.sin(a) * 0.62, 0.05, -Math.cos(a) * 0.62], 0);
      } else if (shot === 2) {
        const u = span(seconds, at(2), at(2) + 5);
        aim(kit, hall, [rx - 0.4, 1.5, rz - 0.4], [rx + (9.2 - rx) * u, 1.3 + u * 2.2, rz + (3.6 - rz) * u], 0.3);
      } else cam4(seconds);
    };
  },
});
