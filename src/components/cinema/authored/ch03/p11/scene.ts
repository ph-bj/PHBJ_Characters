import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, face, figure, tone, walkAlong } from '../../../stage/figure';
import { move, sets, span } from '../../../stage/direct';
import { DANS, FU_SAN, GUI_FEN, PINCAI } from '../actors';
import { pitTable } from '../table';

/*
 * Chapter 3, paragraph 11. A slow push in on Pincai at his table, head tipped up to the galleries,
 * teacup forgotten in his hand. Behind him, out of focus at first, a small procession threads
 * down the aisle: a servant with seat cushions, then two gentlemen and two dan. The servant spreads
 * the cushions on the bench; the newcomers squeeze in. Pincai feels the bench give, and turns.
 */

export default defineScene({
  seed: 3011,
  build: (kit, story) => {
    const { groups: [hall], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const T = pitTable(kit, hall);
    const pincai = figure(kit, hall, PINCAI, 0, 0);
    const fu = figure(kit, hall, FU_SAN, -2, 6);
    const gui = figure(kit, hall, GUI_FEN, -1.2, 6.8);
    const danA = figure(kit, hall, DANS[2], -2.6, 7.6);
    const danB = figure(kit, hall, DANS[3], -1.8, 8.2);
    const man = figure(kit, hall, CAST.servant, -2.4, 5);
    const cushions = [0, 1].map(k => kit.box(hall, tone(0x6e675f), [T.tx - 0.05 + k * 0.7, 0.47, T.tz + 0.75], [0.55, 0.06, 0.32]));
    const cam = move(kit, hall, [[0, [T.tx + 1.8, 1.6, T.tz - 2.2], [T.tx - 1, 1.5, T.tz]], [at(1) - 2, [T.tx + 0.4, 1.35, T.tz - 1.5], [T.tx - 1.05, 1.35, T.tz - 0.1]], [at(1) + 4, [T.tx + 0.6, 1.5, T.tz - 2.6], [T.tx - 0.2, 1.2, T.tz + 0.6]], [36, [T.tx + 2.4, 1.7, T.tz - 3.2], [T.tx, 1.1, T.tz + 0.5]]]);

    return (seconds: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.02));
      T.th.update(seconds);
      cam(seconds);
      const turn = span(seconds, at(1), at(1) + 1.5);
      T.sit(pincai, 'pincai', { ...G.drink(seconds), pitch: -0.35 * (1 - turn), yaw: turn * 1.2 }, [9, -2]);
      const arrive = (f: typeof fu, s: 'fu' | 'gui' | 'danA' | 'danB', t0: number, from: [number, number]) => {
        const [x, z] = T.spot(s);
        if (!walkAlong(f, seconds, t0, t0 + 6, [from, [x - 0.4, z + 2.2], [x, z + 0.6]], G.rest(seconds), 5) && seconds > t0 + 6) T.sit(f, s, s.startsWith('dan') ? G.speak(seconds) : G.rest(seconds));
      };
      arrive(fu, 'fu', 6, [-2, 6]); arrive(gui, 'gui', 6.4, [-1.2, 6.8]); arrive(danA, 'danA', 7, [-2.6, 7.6]); arrive(danB, 'danB', 7.4, [-1.8, 8.2]);
      walkAlong(man, seconds, 4, 9, [[-2.4, 5], [T.tx + 0.3, T.tz + 1.6]], G.hold(seconds), 5);
      if (seconds > 9) { face(man, T.tx, T.tz + 0.75); man.pose({ ...G.offer(seconds), bow: 0.6 }); }
      man.fade(1 - span(seconds, 12, 13));
      cushions.forEach(c => { c.visible = seconds > 10; });
    };
  },
});
