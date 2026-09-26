import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue } from '../../../stage/figure';
import { cup, writing } from '../../../stage/props';
import { move, sets, span } from '../../../stage/direct';
import { feast, type Guest } from '../banquet';

/*
 * Chapter 2, paragraph 37. Six wine cups stand in a row before Wenhui, and the camera skims along
 * them at table height as he sets the stakes; at "a cup may be split" the last cup divides into three
 * smaller ones. Then each guest names a rule and the camera whips from face to face, the rule rising
 * in ink on a slip behind the speaker: Yang's finger-guessing (豁拳), Lianggong's playing the young
 * dan (装旦), Lu's handful of melon seeds (瓜子). Last, Zhou strokes his great beard, doubtful, and
 * Lianggong shows him how: a coy hand drawn across his whiskers.
 */

export default defineScene({
  seed: 2037,
  build: (kit, story) => {
    const { groups: [hallSet], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;

    const f = feast(kit, hallSet);
    // The six cups before Wenhui, in a row along the table's edge.
    const [sx, sz] = f.seat('wenhui');
    const cx = sx * 0.5, cz = sz * 0.5, tx = 0.866, tz = -0.5;
    const six = Array.from({ length: 6 }, (_, k) => cup(kit, hallSet, cx + tx * (k - 2.5) * 0.11, 0.83, cz + tz * (k - 2.5) * 0.11, 0.9));
    const split = [-1, 0, 1].map(j => cup(kit, hallSet, cx + tx * 0.36 + j * 0.06, 0.83, cz + tz * 0.36 + 0.12 + Math.abs(j) * 0.02, 0.55));
    // The rules, each on a slip that rises behind its speaker.
    const rules: [Guest, string, number][] = [['yang', '豁拳', 12.4], ['lg', '装旦', 16], ['lu', '瓜子', 20]];
    const slips = rules.map(([g, text, t0]) => {
      const [x, z] = f.seat(g);
      const w = writing(kit, hallSet, text, { size: 0.26, paper: 0xf4f0e8, margin: 0.25, x: x * 1.25, y: 2.1, z: z * 1.25 });
      w.mesh.rotation.y = Math.atan2(-x, -z);
      return { w, t0 };
    });
    const cam1 = move(kit, hallSet, [
      [0, [cx + tx * -0.9 + 0.2, 0.98, cz + tz * -0.9 + 0.35], [cx, 0.86, cz]],
      [6, [cx + tx * 0.8 + 0.25, 1, cz + tz * 0.8 + 0.4], [cx, 0.9, cz]],
      [at(1), [sx * 0.2, 1.45, sz * 0.2], [sx, 1.25, sz]],
    ]);

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.025));
      f.hall.update(seconds);
      // Cup six splits into three.
      const u = span(seconds, 7.5, 8.5);
      six[5].scale.setScalar(0.9 * (1 - u));
      split.forEach((c, j) => { c.visible = u > 0; c.scale.setScalar(0.55 * span(seconds, 7.6 + j * 0.2, 8.4 + j * 0.2)); });
      slips.forEach(({ w, t0 }) => { w.set(span(seconds, t0 + 0.2, t0 + 1.8)); w.mesh.position.y = 1.7 + span(seconds, t0, t0 + 1.2) * 0.5; w.mesh.visible = seconds > t0; });

      f.sit('wenhui', cue(seconds, [[0, G.speak], [6, G.point], [9, G.speak], [12, G.rest], [24, G.laugh]]));
      f.sit('yang', cue(seconds, [[0, G.rest], [12.4, t => ({ ...G.argue(t), r: { lift: 1.2, out: 0.3, bend: 0.3 } })], [16, G.rest], [26, G.laugh]]));
      f.sit('lg', cue(seconds, [[0, G.rest], [16, t => ({ ...G.shy(t), yaw: 0.2 })], [19.4, G.laugh], [24.4, G.rest], [30, t => ({ ...G.shy(t), pitch: 0.1, mouth: 0.6 })]]));
      f.sit('lu', cue(seconds, [[0, G.rest], [20, G.offer], [23, G.laugh]]));
      f.sit('zhou', cue(seconds, [[0, G.drink], [12, G.rest], [24.4, G.stroke], [30, t => ({ ...G.stroke(t), yaw: -0.4 })], [33, G.guffaw]]));
      f.sit('guibao', cue(seconds, [[0, G.rest], [12, G.clap], [14, G.rest], [31, G.laugh]]));

      if (shot === 0) { cam1(seconds); return; }
      // Whip from speaker to speaker; hold on each over the shoulder of the one opposite.
      const speaker: Guest = shot === 2 ? (seconds < 30 ? 'zhou' : 'lg') : seconds < 16 ? 'yang' : seconds < 20 ? 'lg' : 'lu';
      f.shoot(speaker, shot === 2 ? { dist: 0.9, side: 0.2 } : { dist: 1.6, side: 0.4, look: 0.3 });
    };
  },
});
