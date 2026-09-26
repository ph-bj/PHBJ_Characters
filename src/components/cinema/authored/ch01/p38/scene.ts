import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone } from '../../../stage/figure';
import { study, theatre } from '../../../stage/locations';
import { table } from '../../../stage/props';
import { album, hold, qilin } from '../../../stage/performance';
import { cloudBank } from '../../../stage/nature';
import { lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 38. On stage a clown with a white-patched nose, a painted-face general and a
 * doddering old man tumble about, and in the pit Ziyu, for once, laughs aloud. In the study Ziyu says
 * the album wrongs the ancients and Nanxiang flings it down in a fury; then Zhongqing laughs, opens a
 * book of marvels between them, and tiny wonders rise from its pages and circle the table: a qilin
 * on a cloud, an immortal, like the tales Ziyu does not believe.
 */

export default defineScene({
  seed: 1038,
  build: (kit, story) => {
    const { groups: [house, room], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: clowns and painted faces ---------------------------------------------------------
    const t1 = theatre(kit, house);
    const clown = figure(kit, house, CAST.clown, -1.6, -7.6);
    const general = figure(kit, house, { ...CAST.official, headwear: 'helmet', beard: 'long', face: 'coarse', robe: 0x3f3a35, girth: 1.4 }, 1.4, -8.4);
    const oldman = figure(kit, house, { ...CAST.elder, headwear: 'cap' }, 0.2, -9);
    for (const f of [clown, general, oldman]) f.root.position.y = 1.2;
    // The painted face: bold patches across the general's face.
    for (const side of [-1, 1]) kit.box(general.head, tone(0x1c1816), [side * 0.04, 0.02, 0.095], [0.05, 0.08, 0.01]);
    hold(kit, general, 'sword');
    const ziyu = figure(kit, house, CAST.ziyu, 0.35, 0.6);
    const wx = figure(kit, house, CAST.zhongqing, -0.55, 0.65);
    for (const f of [ziyu, wx]) f.root.rotation.y = Math.PI;
    lights(kit, house, { key: [2, 12, 6], intensity: 0.9 });
    const cam1 = move(kit, house, [
      [0, [0, 2.6, -2], [0, 2.2, -8.4]],
      [6, [-1.6, 1.5, 2.4], [0.2, 1.5, 0.6]],
      [12, [1.6, 1.4, 2.2], [0, 1.6, 0.6]],
    ]);

    // --- Shots 2–3: Nanxiang angered; Zhongqing mediates --------------------------------------------
    const s = study(kit, room);
    table(kit, room, { x: 0, z: 0.5, w: 1.3, d: 0.8, h: 0.78 });
    const book = album(kit, room, { y: 0.79, z: 0.5 });
    const zy = figure(kit, room, CAST.ziyu, -1, -0.2);
    const nx = figure(kit, room, CAST.nanxiang, 1.1, -0.1);
    const zq = figure(kit, room, CAST.zhongqing, 0, 1.4);
    const marvels = kit.group(room, 0, 1.4, 0.5);
    const beast = qilin(kit, marvels, { s: 0.14 });
    const puff = cloudBank(kit, marvels, 0, 0, 0, { w: 0.4, puffs: 6, rand, size: 0.08 });
    const sage = kit.group(marvels, 0, 0, 0);
    const immortal = figure(kit, sage, CAST.deity);
    immortal.root.scale.setScalar(0.15); immortal.shadow.visible = false;
    lights(kit, room, { key: [-4, 9, 7], intensity: 1 });
    const cam2 = move(kit, room, [
      [at(1), [-2.6, 1.6, 2.2], [0.8, 1.4, -0.1]],
      [at(1) + 6, [2.2, 1.7, 2.6], [0, 1.3, 0.2]],
      [at(2), [0.2, 1.5, 3.4], [0, 1.4, 0.8]],
    ]);
    const cam3 = move(kit, room, [
      [at(2), [0.2, 1.5, 3.4], [0, 1.4, 0.8]],
      [at(2) + 5, [1.4, 1.8, 1.8], [0, 1.6, 0.5]],
      [36, [-1.2, 2, 2.2], [0, 1.7, 0.5]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot === 0 ? 0 : 1);
      kit.setEnv(INK_SKY.paper(0.025));
      if (shot === 0) {
        cam1(seconds);
        t1.update(seconds);
        clown.root.position.x = -1.6 + Math.sin(seconds * 1.6) * 1.2;
        clown.root.rotation.y = seconds * 2;
        clown.pose({ ...G.laugh(seconds), walk: seconds * 9, kneel: Math.max(0, Math.sin(seconds * 3)) * 0.4 });
        face(general, clown.root.position.x, -7.6);
        general.pose(cue(seconds, [[0, G.fume], [4, G.point], [8, G.fume]]));
        oldman.pose({ ...G.stroke(seconds), bow: 0.4, lean: Math.sin(seconds * 2) * 0.15 });
        ziyu.pose(cue(seconds, [[0, G.rest], [4, G.laugh], [7, G.guffaw], [10, G.clap]]));
        wx.pose(G.laugh(seconds + 1));
      } else {
        s.update(seconds);
        face(zy, 1.1, -0.1); face(nx, -1, -0.2); face(zq, 0, 0);
        if (shot === 1) {
          const t = seconds - at(1);
          cam2(seconds);
          zy.pose(cue(t, [[0, G.speak], [6, G.rest]]));
          nx.pose(cue(t, [[0, G.fan], [6, G.fume], [8, tt => ({ ...G.point(tt), bow: 0.2 })]]));
          zq.pose(G.folded(t));
          book.group.position.y = 0.79 + Math.max(0, Math.sin((t - 6.4) * 4)) * (t > 6.4 && t < 7.2 ? 0.2 : 0);
          book.group.rotation.y = span(t, 6.4, 7.2) * 0.6;
          marvels.visible = false;
        } else {
          const t = seconds - at(2);
          cam3(seconds);
          zq.pose(cue(t, [[0, G.laugh], [2, tt => ({ ...G.offer(tt), bow: 0.3 })], [6, G.speak]]));
          zy.pose(cue(t, [[0, G.rest], [4, tt => ({ ...G.rest(tt), pitch: -0.3 })], [8, G.think]]));
          nx.pose(cue(t, [[0, G.fume], [5, G.behind]]));
          book.turn(span(t, 2, 3));
          marvels.visible = t > 3;
          marvels.scale.setScalar(span(t, 3, 5));
          const a = t * 0.8;
          beast.group.position.set(Math.cos(a) * 0.5, 0.2 + Math.sin(t * 2) * 0.05, Math.sin(a) * 0.35);
          beast.group.rotation.y = -a;
          beast.update(seconds, true);
          puff.position.set(Math.cos(a + Math.PI) * 0.45, 0.35, Math.sin(a + Math.PI) * 0.3);
          sage.position.copy(puff.position);
          immortal.pose(G.stroke(t));
        }
      }
    };
  },
});
