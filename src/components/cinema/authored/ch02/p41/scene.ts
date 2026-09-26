import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, VERMILION, cue, face, figure, flat, walkAlong } from '../../../stage/figure';
import { candle, writing } from '../../../stage/props';
import { hold } from '../../../stage/performance';
import { aim, move, orbit, sets, span } from '../../../stage/direct';
import { feast, where, type Guest } from '../banquet';

/*
 * Chapter 2, paragraph 41. Flying flowers: each guest's line of verse, with its 花, lifts off the table
 * in ink and sails across to the drinker it lands on, and every one seems to find Lianggong. He
 * dares Guibao to fly two more at him; Guibao sends three at once, whirling round his head, and he
 * drinks cup after cup to applause. Then Guibao crushes a few plum blossoms in his palms and blows:
 * a red cloud of petals across the table, plastered over Lianggong's face, who sneezes. A real servant
 * comes in and whispers at his ear; Lianggong goes rigid, and over his head, for an instant, flickers
 * the lamp that awaits him at home.
 */

export default defineScene({
  seed: 2041,
  build: (kit, story) => {
    const { groups: [hallSet], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;

    const f = feast(kit, hallSet);
    const { lg, guibao } = f.who;
    const glass = hold(kit, lg, 'cup');
    // Lines of verse: [speaker, target, text, start].
    const verses: [Guest, Guest, string, number][] = [
      ['wenhui', 'lg', '桃花细逐杨花落', 0.6], ['lu', 'lg', '无可奈何花落去', 4.8], ['yang', 'lu', '笑隔荷花共人语', 6.6],
      ['guibao', 'lg', '人面桃花相映红', 13.6], ['guibao', 'lg', '落花时节又逢君', 14.2], ['guibao', 'lg', '一片花飞减却春', 14.8],
    ];
    const lines = verses.map(([from, to, text, t0]) => ({ from, to, t0, w: writing(kit, hallSet, text, { size: 0.12, margin: 0.2, paper: 0xf4f0e8 }) }));
    // Petals: blown from Guibao's hands across to Lianggong, some sticking to his face.
    const N = 120;
    const cloud = new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial({ color: VERMILION, size: 0.03 }));
    const pos = new Float32Array(N * 3);
    cloud.geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    hallSet.add(cloud);
    const jitter = Array.from({ length: N }, () => [kit.rand() - 0.5, kit.rand() - 0.5, kit.rand() - 0.5, 0.7 + kit.rand() * 0.6]);
    const stuck = Array.from({ length: 9 }, (_, k) => {
      const a = k * 2.1, r = 0.02 + (k % 3) * 0.018;
      return kit.mesh(new THREE.CircleGeometry(0.012, 5), flat(VERMILION), lg.head, Math.cos(a) * r * 1.4, -0.01 + Math.sin(a) * r, 0.1);
    });
    const lampAtHome = candle(kit, lg.head, 0, 0.2, 0, 0.8);
    const runner = figure(kit, hallSet, CAST.servant, 0, 7);
    const cam1 = orbit(kit, hallSet, [0, 1.3, 0], { r: 1.2, y: 2.2, a0: 0.4, a1: -0.8, t0: 0, t1: at(1), lookY: 1.7 });
    const cam3 = move(kit, hallSet, [[at(2), [-0.6, 1.35, 1], [-0.875, 1.25, 1.52]], [at(2) + 4.4, [-0.4, 1.45, 0.5], [-1.4, 1.3, 0.6]], [at(3), [-0.5, 1.5, 0.35], [-1.75, 1.3, 0]]]);

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.025));
      f.hall.update(seconds);
      // Verses fly.
      lines.forEach(({ from, to, t0, w }) => {
        const u = span(seconds, t0 + 1, t0 + 3.4);
        w.mesh.visible = seconds > t0 && seconds < t0 + 4.2;
        w.set(span(seconds, t0, t0 + 1));
        const a = where(f.who[from].head, hallSet), b = where(f.who[to].head, hallSet);
        const whirl = from === 'guibao' ? Math.sin(u * Math.PI) * 0.4 : 0;
        const e = u * u * (3 - 2 * u);
        w.mesh.position.set(a[0] * 0.8 + (b[0] * 0.85 - a[0] * 0.8) * e + Math.cos(seconds * 4 + t0) * whirl, 1.9 + Math.sin(u * Math.PI) * 0.4 - e * 0.35, a[2] * 0.8 + (b[2] * 0.85 - a[2] * 0.8) * e + Math.sin(seconds * 4 + t0) * whirl);
        w.mesh.rotation.y = Math.atan2(-w.mesh.position.x, -w.mesh.position.z);
      });
      const drinking = (t: number) => ({ ...G.drink(t), pitch: -0.3 - Math.max(0, Math.sin(t * 2.4)) * 0.2 });
      f.sit('wenhui', cue(seconds, [[0, G.speak], [4, G.rest], [15, G.clap], [18, G.rest], [24, G.laugh], [27, G.rest], [32, G.guffaw]]));
      f.sit('lu', cue(seconds, [[0, G.rest], [4.6, G.speak], [8, G.rest], [15, G.clap], [18, G.rest], [23, t => ({ ...G.point(t), mouth: 0.9 })], [26, G.laugh], [32, G.laugh]]));
      f.sit('yang', cue(seconds, [[0, G.rest], [6.6, G.speak], [9, G.rest], [15, G.clap], [18, G.rest], [23.5, G.guffaw], [27, G.rest], [32, G.laugh]]));
      f.sit('zhou', cue(seconds, [[0, G.stroke], [15, G.clap], [18, G.stroke], [23.5, G.laugh], [27, G.rest], [32, G.guffaw]]));
      f.sit('guibao', cue(seconds, [[0, G.rest], [9.4, G.laugh], [13.4, t => ({ ...G.speak(t), mouth: 0.5 + 0.5 * Math.sin(t * 16) })], [16, G.laugh], [at(2), t => ({ ...G.hold(t), l: { lift: 1.1, out: 0.05 + Math.abs(Math.sin(t * 8)) * 0.05, bend: 1.2 }, r: { lift: 1.1, out: 0.05, bend: 1.2 } })], [21.8, t => ({ ...G.offer(t), yaw: 0.6, bow: 0.3, mouth: 0.3 })], [24, G.laugh], [31.6, t => ({ ...G.point(t), yaw: 0.6 })]]));
      const sneeze = seconds > 24 && seconds < 24.6 ? Math.sin((seconds - 24) / 0.6 * Math.PI) : 0;
      f.sit('lg', cue(seconds, [
        [0, G.rest], [2.2, drinking], [4, G.rest], [6, drinking], [8, G.rest],
        [9.4, t => ({ ...G.argue(t), yaw: 0.3 })], [13.4, G.rest], [16, drinking],
        [at(2), G.rest], [22.6, t => ({ ...G.shy(t), pitch: -0.2 - sneeze * 0.5, bow: sneeze * 0.5, r: { lift: 1.3, out: 0.1, bend: 1.9 } })],
        [26, G.rest], [29, t => ({ ...G.rest(t), pitch: 0.1, yaw: 0.3, l: { lift: 0, out: 0.1, bend: 0.1 }, r: { lift: 0, out: 0.1, bend: 0.1 } })],
      ]));
      glass.visible = seconds < 28;
      // Petals.
      const pt = seconds - 22;
      cloud.visible = pt > 0 && pt < 1.4;
      if (cloud.visible) {
        const [mx, my, mz] = where(guibao.head, hallSet);
        const [tx, ty, tz] = where(lg.head, hallSet);
        jitter.forEach(([a, b, c, v], i) => {
          const u = Math.min(1, pt * 1.6 * v);
          const spread = Math.sin(u * Math.PI) * 0.5;
          pos[i * 3] = mx + (tx - mx) * u + a * spread;
          pos[i * 3 + 1] = my - 0.05 + (ty - my) * u + b * spread * 0.6;
          pos[i * 3 + 2] = mz + (tz - mz) * u + c * spread;
        });
        cloud.geometry.attributes.position.needsUpdate = true;
      }
      stuck.forEach((p, k) => { p.visible = seconds > 22.7 + k * 0.05 && seconds < 29; });
      // The servant with his message, and the lamp flickering over Lianggong's head.
      walkAlong(runner, seconds, at(3), 29.6, [[0, 7], [-1.4, 3], [-2.3, 0.6], [-2.1, 0.25]], G.rest(seconds), 5.5);
      if (seconds > 29.6) { face(runner, -1.75, 0); runner.pose(G.whisper(seconds)); }
      lampAtHome.group.visible = seconds > 32.4 && seconds < 35 && Math.sin(seconds * 23) > -0.6;
      lampAtHome.update(seconds);

      if (shot === 0) { cam1(seconds); return; }
      if (shot === 1) { f.shoot('lg', { dist: 1.4 - span(seconds, at(1), at(2)) * 0.4, side: 0.4 * Math.cos(seconds * 0.3), lift: 0.3, look: 0.2 }); return; }
      if (shot === 2) { cam3(seconds); return; }
      const [hx, hy, hz] = where(lg.head, hallSet);
      const k = span(seconds, at(3), 36);
      aim(kit, hallSet, [hx + 1.6 - k * 0.8, hy + 0.1, hz + 0.9 - k * 0.5], [hx, hy + (seconds > 32 ? 0.1 : -0.05), hz], 0.3);
    };
  },
});
