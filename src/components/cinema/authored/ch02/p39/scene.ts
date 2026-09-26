import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue, tone } from '../../../stage/figure';
import { coins, cup, pot } from '../../../stage/props';
import { inkGather } from '../../../stage/fx';
import { aim, move, sets } from '../../../stage/direct';
import { feast, where } from '../banquet';

/*
 * Chapter 2, paragraph 39. "How many?" Guibao asks round the table with his fist closed; Wenhui says
 * one, and Lianggong, two fingers up, says two. In macro the fist opens over the tablecloth: two
 * coins. Three cups are set in front of Lianggong and filled to the brim, the wine pouring in a thin
 * stream from the pot; he turns to Yang and the two of them square off. Three rounds of finger-
 * guessing crack by in quick cuts, hands flung out, shouts in ink (五, 八, 三), and three times
 * Lianggong loses; he throws up his hands and concedes.
 */

export default defineScene({
  seed: 2039,
  build: (kit, story) => {
    const { groups: [hallSet], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;

    const f = feast(kit, hallSet);
    const { guibao, lg, yang } = f.who;
    const palm = coins(kit, guibao.hands.r, [[-0.012, -0.03, 0.02], [0.014, -0.03, 0.025]]);
    const [lx, lz] = f.cupAt('lg');
    const three = [-1, 0, 1].map(j => cup(kit, hallSet, lx * 0.8 + j * 0.02, 0.83, lz * 0.8 + j * 0.1, 1.1));
    const wine = kit.group(hallSet, 0, 0, 0);
    const jug = kit.group(wine, 0, 0, 0);
    pot(kit, jug, 0, 0, 0, 0.9);
    const stream = kit.mesh(new THREE.CylinderGeometry(0.006, 0.006, 1, 5).translate(0, -0.5, 0), tone(0x6e675f), wine);
    ['五', '八', '三'].map((c, k) => {
      const g = inkGather(kit, hallSet, c, { size: 0.35, at: at(2) + 0.5 + k * 1.8, dur: 0.6, count: 500, spread: 0.3, scatter: 1.4, drop: 0.02 });
      g.points.position.set(-0.44 + (k - 1) * 0.3, 1.9, -0.76);
      return g;
    });
    const cam1 = move(kit, hallSet, [[0, [1.8, 1.9, 3.2], [0, 1, 0.4]], [4.6, [0.5, 1.5, 1.8], [0.2, 1.1, 0.6]]]);
    const cam2 = move(kit, hallSet, [[at(1), [lx * 0.8 + 0.5, 1.1, lz * 0.8 + 0.6], [lx * 0.8, 0.86, lz * 0.8]], [at(1) + 5.6, [lx * 0.5 + 0.4, 1.3, lz * 0.5 + 0.9], [lx * 0.9, 1.1, lz * 0.9]], [at(2), [-0.2, 1.6, 1.2], [-1, 1.2, -0.6]]]);

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.025));
      f.hall.update(seconds);
      const opened = seconds > 8.8;
      palm.forEach(c => { c.visible = opened && seconds < at(1); });
      f.sit('guibao', cue(seconds, [[0, t => ({ ...G.rest(t), bow: 0.3, r: { lift: 1.1, out: 0.5, bend: 0.3 }, yaw: 0.4 })], [6.5, t => ({ ...G.rest(t), bow: 0.3, r: { lift: 1.1, out: 0.3, bend: 0.3, twist: opened ? 1.6 : 0 }, yaw: -0.4 })], [at(1), G.rest], [at(2), G.clap], [at(2) + 7, G.laugh]]));
      f.sit('wenhui', cue(seconds, [[0, G.rest], [4.6, t => ({ ...G.point(t), mouth: 0.5 })], [7, G.rest], [at(2) + 6, G.laugh]]));
      f.sit('lg', cue(seconds, [
        [0, G.rest], [8, t => ({ ...G.point(t), r: { lift: 1.6, out: 0.3, bend: 0.1 } })], [10, G.laugh], [at(1), G.rest],
        [at(1) + 5.6, t => ({ ...G.speak(t), yaw: 0.6 })],
        [at(2), t => ({ ...G.argue(t), yaw: 0.6, r: { lift: 1.2 + Math.sin(t * 10) * 0.3, out: 0.5 + Math.sin(t * 10) * 0.3, bend: 0.2 } })],
        [at(2) + 6, t => ({ ...G.fume(t), l: { lift: 2.3, out: 0.6, bend: 0.3 }, r: { lift: 2.3, out: 0.6, bend: 0.3 }, pitch: -0.3 })],
      ]));
      f.sit('yang', cue(seconds, [[0, G.rest], [10, G.laugh], [at(1) + 5.6, t => ({ ...G.speak(t), yaw: -0.5 })], [at(2), t => ({ ...G.argue(t), yaw: -0.5, r: { lift: 1.2 + Math.sin(t * 10 + 1) * 0.3, out: 0.5 + Math.sin(t * 10 + 1) * 0.3, bend: 0.2 } })], [at(2) + 6, G.guffaw]]));
      f.sit('zhou', cue(seconds, [[0, G.stroke], [10, G.laugh], [at(2) + 6, G.clap]]));
      f.sit('lu', cue(seconds, [[0, G.rest], [10, G.guffaw], [at(1), G.rest], [at(2) + 6, G.laugh]]));
      // Filling the three cups: the pot tips over each in turn.
      three.forEach(c => { c.visible = seconds > at(1) - 0.5; });
      const pouring = shot === 1 && seconds < at(1) + 5.6;
      wine.visible = pouring;
      if (pouring) {
        const k = Math.min(2, Math.floor((seconds - at(1)) / 1.8));
        const c = three[k];
        wine.position.set(c.position.x, 1.18, c.position.z);
        jug.position.set(0.12, 0.02, 0);
        jug.rotation.z = 0.6 + Math.sin(seconds * 2) * 0.05;
        stream.scale.y = 0.32;
      }
      if (shot === 0) {
        if (seconds < 8.6) { cam1(seconds); return; }
        // Macro on the opening fist.
        const h = where(guibao.hands.r, hallSet);
        aim(kit, hallSet, [h[0] * 0.5, h[1] + 0.4, h[2] * 0.5], h, 0.3);
        return;
      }
      if (shot === 1) { cam2(seconds); return; }
      // Quick cuts between the two players' flying hands.
      const t = seconds - at(2);
      const cut = Math.floor(t / 1.2) % 3;
      if (t > 6) f.shoot('lg', { dist: 1.2, side: 0.3 });
      else if (cut === 0) {
        const a = where(lg.hands.r, hallSet), b = where(yang.hands.r, hallSet);
        const mid: [number, number, number] = [(a[0] + b[0]) / 2, 1.1, (a[2] + b[2]) / 2];
        aim(kit, hallSet, [mid[0] * 0.2 + 0.2, 1.3, mid[2] * 0.2], mid, 0.3);
      } else if (cut === 1) f.shoot('yang', { over: 'lg', side: 0.2 });
      else f.shoot('lg', { over: 'yang', side: -0.2 });
    };
  },
});
