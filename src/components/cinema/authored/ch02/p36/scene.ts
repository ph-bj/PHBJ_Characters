import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { coins, dishes } from '../../../stage/props';
import { inkGather } from '../../../stage/fx';
import { aim, move, sets, span } from '../../../stage/direct';
import { feast, where } from '../banquet';

/*
 * Chapter 2, paragraph 36. Servants set down more dishes and Wenhui, bored with plain drinking, turns
 * to Guibao for a game. "The challenge game", says Guibao, and the word 擂 (a challenge platform)
 * gathers in ink over the table, whereupon Lianggong clutches his head: they have summoned the
 * patriarch of drinking games. Six copper coins are fetched and dropped one by one onto the table,
 * ringing and settling; Zhou and Lu haggle over the size of the cups; and in a low, tight shot Guibao
 * holds out his closed fist to Wenhui across the dishes: how many cups?
 */

export default defineScene({
  seed: 2036,
  build: (kit, story) => {
    const { groups: [hallSet], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;

    const f = feast(kit, hallSet);
    const { guibao, wenhui } = f.who;
    dishes(kit, hallSet, 0.84, [[0.3, -0.1], [-0.35, 0.05]], kit.rand);
    const waiters = [figure(kit, hallSet, CAST.servant, 3, 3), figure(kit, hallSet, CAST.servant, -3, 3.4)];
    const lei = inkGather(kit, hallSet, '擂', { size: 0.8, at: 5, dur: 2.5, count: 1800, spread: 1.4, scatter: 8.5, drop: 0.04 });
    lei.points.position.set(0, 1.9, 0);
    // The six coins, dropped in a row on the table in front of Wenhui.
    const row = Array.from({ length: 6 }, (_, k) => [(k - 2.5) * 0.09, 0.84, 0.55] as [number, number, number]);
    const cash = coins(kit, hallSet, row);
    const tray = figure(kit, hallSet, CAST.servant, 2.6, 4);
    const cam1 = move(kit, hallSet, [
      [0, [3.4, 2.6, 4.2], [0, 0.9, 0]],
      [4.6, [-0.2, 1.45, 0.6], [-0.9, 1.25, 1.5]],
      [8.6, [-0.4, 1.45, 0.3], [-1.75, 1.3, 0]],
      [at(1), [-0.6, 1.5, 0.5], [-1.75, 1.3, 0]],
    ]);
    const cam2 = move(kit, hallSet, [
      [at(1), [0.3, 1.5, 1.3], [0, 0.84, 0.55]],
      [20, [1.6, 1.8, 0.4], [0.2, 1.1, -0.9]],
      [27, [-1.8, 1.7, -0.4], [-0.3, 1.1, -0.9]],
    ]);

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.025));
      f.hall.update(seconds);
      // Waiters bring the dishes and withdraw.
      waiters.forEach((w, i) => {
        walkAlong(w, seconds, 0, 5, [[i ? -3 : 3, i ? 3.4 : 3], [i ? -1.2 : 1.2, i ? 1.9 : 1.5], [i ? -4 : 4, i ? 4 : 4]], G.hold(seconds), 5);
      });
      f.sit('yang', cue(seconds, [[0, G.rest], [9, G.laugh], [12, G.rest], [27, G.think]]));
      f.sit('zhou', cue(seconds, [[0, G.drink], [9, G.guffaw], [14.4, G.speak], [20, G.stroke]]));
      f.sit('lu', cue(seconds, [[0, G.rest], [9, G.laugh], [20, G.speak], [27, G.rest]]));
      f.sit('wenhui', cue(seconds, [[0, G.speak], [4.6, G.rest], [9, G.clap], [14.4, G.point], [27, t => ({ ...G.think(t), yaw: -0.3 })]]));
      f.sit('lg', cue(seconds, [[0, G.rest], [8.6, t => ({ ...G.think(t), r: { lift: 1.5, out: 0.3, bend: 2.2 }, l: { lift: 1.5, out: 0.3, bend: 2.2 }, bow: 0.3, mouth: 0.8 })], [13, G.fume], [20, G.rest]]));
      if (seconds < 27) f.sit('guibao', cue(seconds, [[0, G.rest], [4.6, G.speak], [8.6, G.laugh], [14.4, G.rest]]));
      else {
        f.sit('guibao', { ...G.rest(seconds), bow: 0.35, r: { lift: 1.4 * span(seconds, 27, 28), out: 0.4, bend: 0.2 }, mouth: 0.3 });
        guibao.root.rotation.y += 0.5;
      }
      // Coins: carried in on a tray, then dropped one by one, bouncing.
      walkAlong(tray, seconds, at(1) - 1, at(1) + 1.6, [[2.6, 4], [0.9, 1.9]], G.hold(seconds), 5);
      if (seconds > at(1) + 1.6) { face(tray, 0, 0); tray.pose(G.bow(seconds, 0.3)); }
      cash.forEach((c, k) => {
        const t0 = at(1) + 1.8 + k * 0.45;
        const u = seconds - t0;
        c.visible = seconds > t0 && seconds < 27.4;
        c.position.y = 0.84 + (u < 0.5 ? Math.abs(Math.sin(u * 14)) * 0.08 * (1 - u * 2) : 0);
        c.rotation.x = u < 0.5 ? Math.sin(u * 30) * 0.4 * (1 - u * 2) : 0;
      });
      if (shot === 0) cam1(seconds);
      else if (seconds < 27) cam2(seconds);
      else {
        // A low two-shot along the fist from Guibao to Wenhui.
        const fist = where(guibao.hands.r, hallSet);
        const [wx, , wz] = where(wenhui.head, hallSet);
        const mx = (fist[0] + wx) / 2, mz = (fist[2] + wz) / 2;
        aim(kit, hallSet, [mx * 0.15, 1.2, mz * 0.15], [mx, 1.05, mz], 0.3);
      }
    };
  },
});
