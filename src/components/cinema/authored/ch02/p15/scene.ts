import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { courtyard, theatre } from '../../../stage/locations';
import { gifts } from '../../../stage/props';
import { hold } from '../../../stage/performance';
import { petals } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { QINGUAN } from '../actors';

/*
 * Chapter 2, paragraph 15, as Pincai tells it. In a courtyard admirers crowd round Qinguan with
 * fans and gifts; he turns his back on them, and when one presses closer his shoulders shake, a
 * sleeve goes to his eyes, and he nearly weeps and slips away. Then on a stage the capital's famous
 * xianggong stand in a row in their finery; Qinguan walks in among them in his plain coat, and one by
 * one they seem to pale beside him as the camera closes on his face.
 */

export default defineScene({
  seed: 2015,
  build: (kit, story) => {
    const { groups: [yard, house], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: he ignores everyone -----------------------------------------------------------------
    courtyard(kit, yard);
    const qin = figure(kit, yard, QINGUAN, 0, 0);
    const fans = [CAST.merchant, CAST.official, CAST.wangxun, CAST.guest].map((spec, i) => figure(kit, yard, spec, [-2.4, 2.2, -1.2, 1.6][i], [1.6, 1.4, 2.8, 2.9][i]));
    const box = gifts(kit, fans[0].hands.r, 0, -0.1, 0.2);
    box.scale.setScalar(0.5);
    lights(kit, yard, { key: [6, 10, 8], intensity: 1 });
    const cam1 = move(kit, yard, [
      [0, [0, 1.8, 7], [0, 1.4, 0.8]],
      [8, [-2.6, 1.6, -2.4], [0, 1.5, 0.4]],
      [18, [1.2, 1.55, -1.6], [0, 1.5, 0]],
    ]);

    // --- Shot 2: none could outshine him ---------------------------------------------------------------
    const t2 = theatre(kit, house);
    const stars = [-3, -1.8, 1.8, 3].map((x, i) => { const f = figure(kit, house, { ...CAST.dan, robe: [0xe6e0d6, 0xd6d0c6, 0xf0ebe2, 0xcfc8bc][i] }, x, -8.2); f.root.position.y = 1.2; hold(kit, f, 'fan'); return f; });
    const q2 = figure(kit, house, QINGUAN, 0, -6);
    q2.root.position.y = 1.2;
    const fall = petals(kit, house, { count: 60, w: 6, h: 5, d: 4, y: 1.2, z: -8 });
    lights(kit, house, { key: [2, 12, 6], intensity: 0.9 });
    const cam2 = move(kit, house, [
      [at(1), [0, 2.4, 4], [0, 2.4, -8]],
      [at(1) + 9, [1, 2.5, -3], [0, 2.4, -8]],
      [36, [0.3, 2.75, -6.2], [0, 2.7, -8]],
    ], { pull: 0.4 });

    return (seconds: number, shot: number) => {
      show(shot);
      kit.setEnv(INK_SKY.paper(0.025));
      if (shot === 0) {
        cam1(seconds);
        const press = span(seconds, 7, 10);
        fans.forEach((f, i) => { face(f, 0, 0); f.pose(i === 0 ? G.offer(seconds) : i === 1 ? G.fan(seconds) : G.speak(seconds)); });
        fans[2].root.position.z = 2.8 - press * 2;
        qin.root.rotation.y = Math.PI * span(seconds, 2, 3.5);
        if (seconds < 13) qin.pose(cue(seconds, [[0, G.folded], [3.5, G.behind], [10, G.weep]]));
        else walkAlong(qin, seconds, 13, 18, [[0, 0], [0.4, -4], [0, -9]], G.weep(seconds), 5);
      } else {
        const t = seconds - at(1);
        cam2(seconds);
        t2.update(seconds); fall.update(seconds);
        walkAlong(q2, t, 0, 4, [[0, -6], [0, -8]], G.folded(t), 4);
        if (t > 4) { face(q2, 0, 4); q2.pose(G.folded(t)); }
        stars.forEach((s, i) => { face(s, 0, 4); s.pose(G.pose(t + i)); s.fade(1 - 0.6 * span(t, 5 + i * 1.2, 7 + i * 1.2)); });
      }
    };
  },
});
