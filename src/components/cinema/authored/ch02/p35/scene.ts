import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { pavilion } from '../../../stage/architecture';
import { garden } from '../../../stage/locations';
import { rock } from '../../../stage/nature';
import { hold } from '../../../stage/performance';
import { pot } from '../../../stage/props';
import { lights, move, orbit, sets } from '../../../stage/direct';
import { GUIBAO } from '../actors';
import { feast } from '../banquet';

/*
 * Chapter 2, paragraph 35. Lianggong brings Guibao into the Hall of Happy Feasts and they bow to
 * Wenhui; the guests file in, and the camera circles overhead as each takes his seat by rank, Yang,
 * Zhou, Lu, Lianggong, the host, while Guibao goes round with the wine pot. Guibao's day in the
 * Garden of Contentment becomes a scene of its own: a labyrinth of rockery in which he and Master Xu
 * wander lost, and a crane shot up and up to reveal how vast the half-million-tael garden is. Back
 * at table Lianggong's jibe raises a laugh, and Guibao stands over him with a brimming penalty cup.
 */

export default defineScene({
  seed: 2035,
  build: (kit, story) => {
    const { groups: [hallSet, maze], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    const f = feast(kit, hallSet);
    const { yang, zhou, lu, lg, wenhui, guibao } = f.who;
    const winePot = kit.group(guibao.hands.r, 0, -0.06, 0.04);
    pot(kit, winePot, 0, -0.1, 0, 0.7);
    const bigCup = hold(kit, guibao, 'cup', 'l');
    const servants = [figure(kit, hallSet, CAST.servant, -5, -3), figure(kit, hallSet, CAST.servant, 5, -3)];
    const cam1 = move(kit, hallSet, [[0, [2.4, 1.8, 7.4], [0, 1.3, 3]], [at(1), [4.2, 2.4, 5.4], [0, 0.9, 0]]]);
    const cam2 = orbit(kit, hallSet, [0, 0.8, 0], { r: 4.4, y: 3.4, a0: 0.9, a1: -0.6, t0: at(1), t1: at(2) });
    const cam4 = move(kit, hallSet, [[at(3), [-1.4, 1.6, 3.4], [-1.2, 1.1, 0]], [at(3) + 4, [-3.4, 1.8, 2.8], [0, 1, 0]], [36, [-3.4, 1.5, 1], [-1.75, 1.2, 0]]]);

    // --- Shot 3: lost in the Garden of Contentment --------------------------------------------------
    garden(kit, maze);
    const path: [number, number][] = [[0, 16], [3, 14], [0, 12], [-3, 10.5], [0, 9], [3, 7.5], [0, 6]];
    for (let k = 0; k < path.length - 1; k++) {
      const [x0, z0] = path[k], [x1, z1] = path[k + 1];
      const nx = -(z1 - z0), nz = x1 - x0, len = Math.hypot(nx, nz);
      for (const side of [-1, 1]) for (let j = 0; j < 3; j++) {
        const u = (j + 0.5) / 3;
        rock(kit, maze, x0 + (x1 - x0) * u + side * nx / len * 1.4, z0 + (z1 - z0) * u + side * nz / len * 1.4, { h: 1.1 + rand() * 0.9, rand });
      }
    }
    for (const [px, pz] of [[-14, -20], [16, -26], [-24, -40], [28, -8], [0, -44]]) pavilion(kit, maze, { x: px, z: pz, r: 2 + rand(), h: 3 });
    const wanderer = figure(kit, maze, GUIBAO.plain, 0, 16);
    const master = figure(kit, maze, { ...CAST.guest, robe: 0x3f3a35, girth: 1.2 }, 0, 17);
    lights(kit, maze, { key: [6, 12, 8], intensity: 1 });
    const cam3 = move(kit, maze, [[at(2), [5, 6.5, 20], [0, 0.8, 13]], [at(2) + 4.4, [5, 8, 15], [0, 0.5, 9]], [at(3), [12, 40, 40], [0, 0, -10]]]);

    return (seconds: number, shot: number) => {
      show(shot === 2 ? 1 : 0);
      kit.setEnv(INK_SKY.paper(shot === 2 ? 0.012 : 0.025));
      if (shot === 2) {
        cam3(seconds);
        const t = seconds - at(2);
        walkAlong(wanderer, t, 0, 9, path, { ...G.rest(t), yaw: Math.sin(t * 1.4) * 0.5 }, 6);
        walkAlong(master, t, 0.6, 9, [[0, 17], ...path.slice(0, -1)], G.fan(t), 6);
        return;
      }
      f.hall.update(seconds);
      servants.forEach(s => { face(s, 0, 0); s.pose(G.folded(seconds)); });
      winePot.visible = shot === 1;
      bigCup.visible = shot === 3 && seconds > at(3) + 4.6;
      if (shot === 0) {
        cam1(seconds);
        // Lianggong and Guibao come in from the door; the others stand to greet them.
        walkAlong(lg, seconds, 0, 4, [[-0.6, 6], [-0.4, 3.2]], G.rest(seconds), 5);
        walkAlong(guibao, seconds, 0.3, 4.3, [[0.3, 6.4], [0.4, 3.4]], G.rest(seconds), 5);
        wenhui.root.position.set(0.2, 0, 1.8);
        face(wenhui, 0, 3.3);
        wenhui.pose(cue(seconds, [[0, G.behind], [4, t => G.salute(t, 0.2)], [6, G.speak]]));
        if (seconds > 4) {
          face(lg, 0.2, 1.8); face(guibao, 0.2, 1.8);
          lg.pose(cue(seconds, [[4, t => G.salute(t, 0.35)], [6.5, G.speak]]));
          guibao.pose(cue(seconds, [[4, t => G.bow(t, 0.5)], [6, G.folded]]));
        }
        ([[yang, -2.4, -2.6], [zhou, -1.6, -3.4], [lu, 2.6, -2.8]] as const).forEach(([g, x, z], i) => {
          walkAlong(g, seconds, 2 + i, 7 + i, [[x, z], [x * 0.9, z + 2.4]], G.folded(seconds), 4.5);
          if (seconds > 7 + i) { face(g, 0, 3); g.pose(G.salute(seconds, 0.25)); }
        });
        return;
      }
      if (shot === 1) {
        cam2(seconds);
        // Each sits in turn by rank; until then stands behind his chair.
        const order = [['yang', 9.4], ['zhou', 11.4], ['lu', 13.6], ['lg', 14.6], ['wenhui', 15.6]] as const;
        for (const [g, t0] of order) {
          if (seconds > t0) f.sit(g, cue(seconds, [[t0, G.seated], [t0 + 1, G.rest]]));
          else { const [x, z] = f.seat(g); f.who[g].root.position.set(x * 1.3, 0, z * 1.3); face(f.who[g], 0, 0); f.who[g].pose(G.folded(seconds)); }
        }
        // Guibao goes round the table pouring, then takes his own seat.
        const ring: [number, number][] = order.map(([g]) => { const [x, z] = f.seat(g); return [x * 1.35, z * 1.35] as [number, number]; });
        if (seconds < 17.4) walkAlong(guibao, seconds, 12, 17.4, [[1.4, 2.6], ...ring], { ...G.hold(seconds), bow: 0.1 }, 5);
        else f.sit('guibao', G.rest(seconds));
        return;
      }
      cam4(seconds);
      const t = seconds - at(3);
      f.sit('yang', t > 4 ? G.laugh(t) : G.rest(t));
      f.sit('zhou', t > 4 ? G.guffaw(t) : G.drink(t));
      f.sit('lu', t > 4.2 ? G.laugh(t) : G.rest(t));
      f.sit('wenhui', t > 4 ? G.clap(t) : G.rest(t));
      f.sit('lg', cue(t, [[0, G.speak], [3.2, G.laugh], [6, t2 => ({ ...G.shy(t2), yaw: 0.5 })], [7.6, G.drink]]));
      if (t < 4.2) f.sit('guibao', cue(t, [[0, G.rest], [2.4, G.fume]]));
      else {
        const [x, z] = f.seat('lg');
        walkAlong(guibao, t, 4.2, 6, [[-0.875, 1.52], [-1.9, 1.1], [x - 0.2, z + 0.55]], G.hold(t), 5);
        if (t > 6) { face(guibao, x, z); guibao.pose(cue(t, [[6, G.offer], [7.4, G.tug]])); }
      }
    };
  },
});
