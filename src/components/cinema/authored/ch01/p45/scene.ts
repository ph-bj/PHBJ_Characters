import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { hall, lattice, room } from '../../../stage/architecture';
import { chamber } from '../../../stage/locations';
import { chair, cup, kang, screen, table, vase } from '../../../stage/props';
import { plumTree } from '../../../stage/nature';
import { lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 45: the Wang inner quarters. Ziyu bows to his aunt Lady Lu on the raised
 * couch, then to Lady Sun and to his cousin Ronghua. Upstairs, behind a lattice window, Miss Qionghua
 * hears his voice below, peeps down, and shrinks back, blushing, at the thought of the match. Below,
 * Lady Lu keeps him to chat over tea, fonder each time, until he rises and bows himself out.
 */

export default defineScene({
  seed: 1045,
  build: (kit, story) => {
    const { groups: [inner, upstairs], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shots 1 and 3: the inner hall ------------------------------------------------------------
    room(kit, inner, { w: 13, d: 9, h: 4, back: 'doors', floorKind: 'bricks' });
    screen(kit, inner, { z: -4, panels: 6, w: 1, h: 2.8, kind: 'peony' });
    kang(kit, inner, { z: -2.6, w: 3, d: 1.4 });
    for (const side of [-1, 1]) { chair(kit, inner, { x: side * 3.2, z: -0.6, rot: side * -Math.PI / 2.4 }); table(kit, inner, { x: side * 3.3, z: -1.6, w: 0.5, d: 0.5, h: 0.75 }); }
    vase(kit, inner, 3.3, 0.75, -1.6, { rand });
    cup(kit, inner, -0.4, 0.8, -2.6, 1.3); cup(kit, inner, 0.4, 0.8, -2.6, 1.3);
    const aunt = figure(kit, inner, { ...CAST.ladyYan, robe: 0x8c857c, jacket: 0x4a443e }, 0.6, -2.5);
    aunt.root.position.y = 0.5;
    const sun = figure(kit, inner, { ...CAST.lady, robe: 0xd6d0c6 }, -3.2, -0.2);
    const ronghua = figure(kit, inner, { ...CAST.lady, robe: 0xe6e0d6, jacket: 0xb9b2a8 }, 3.2, -0.2);
    const maids = [figure(kit, inner, CAST.maid, -1.8, -3.4), figure(kit, inner, CAST.maid, 1.9, -3.4)];
    const ziyu = figure(kit, inner, CAST.ziyu, -0.4, 3);
    const wx = figure(kit, inner, CAST.wangxun, 0.8, 3.6);
    lights(kit, inner, { key: [-4, 9, 7], intensity: 1 });
    const cam1 = move(kit, inner, [
      [0, [0, 1.8, 7], [0, 1.4, 0]],
      [5, [-2.6, 1.6, 2.4], [0.4, 1.3, -2]],
      [10, [2.4, 1.6, 2.4], [-3, 1.4, -0.4]],
      [14, [-1.6, 1.6, 2], [3.2, 1.4, -0.3]],
    ]);
    const cam3 = move(kit, inner, [
      [at(2), [1.8, 1.4, 1.2], [0.4, 1.5, -2.3]],
      [at(2) + 5, [-1.8, 1.7, 2.6], [0.4, 1.2, -1.4]],
      [36, [0, 2.6, 8], [0, 1.2, 0]],
    ]);

    // --- Shot 2: Qionghua stays away ----------------------------------------------------------------
    chamber(kit, upstairs);
    lattice(kit, upstairs, 1.8, 1.6, 'diamond', true, 0, 1.6, 2.6);
    plumTree(kit, upstairs, 2.6, 6, { h: 4, rand, blossoms: 80 });
    hall(kit, upstairs, { w: 12, d: 6, h: 3, z: 12, doors: false }).group.rotation.y = Math.PI;
    const qh = figure(kit, upstairs, { ...CAST.lady, robe: 0xf0ebe2, jacket: 0xd6d0c6, height: 1.55 }, 0.2, 1.8);
    const nurse = figure(kit, upstairs, CAST.maid, -2, -1.6);
    lights(kit, upstairs, { key: [3, 7, 5], intensity: 1 });
    const cam2 = move(kit, upstairs, [
      [at(1), [-2.6, 1.6, -1], [0.2, 1.5, 1.8]],
      [at(1) + 6, [1.2, 1.5, 0.4], [0.2, 1.55, 1.8]],
      [at(2), [2.4, 1.8, -2.2], [0, 1.4, 1.2]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot === 1 ? 1 : 0);
      kit.setEnv(INK_SKY.paper(0.03));
      if (shot === 1) {
        const t = seconds - at(1);
        cam2(seconds);
        const peep = span(t, 1, 2.5) * (1 - span(t, 6, 7.5));
        qh.root.position.z = 1.8 + peep * 0.6;
        face(qh, 0, 6);
        qh.pose(cue(t, [[0, G.folded], [2.5, tt => ({ ...G.rest(tt), bow: 0.3, pitch: 0.4 })], [6, G.shy], [9, tt => ({ ...G.shy(tt), yaw: -1 })]]));
        qh.blush(span(t, 5, 7));
        face(nurse, 0.2, 1.8);
        nurse.pose(cue(t, [[0, G.folded], [6, G.laugh]]));
        return;
      }
      face(aunt, ziyu.root.position.x, ziyu.root.position.z);
      aunt.pose({ ...(shot === 0 ? G.rest(seconds) : G.speak(seconds)), sit: 1 });
      maids.forEach(m => { face(m, 0, 2); m.pose(G.folded(seconds)); });
      if (shot === 0) {
        cam1(seconds);
        walkAlong(ziyu, seconds, 0, 3, [[-0.4, 3], [-0.2, -0.8]], G.folded(seconds), 5);
        walkAlong(wx, seconds, 0, 3, [[0.8, 3.6], [1.2, 0.4]], G.folded(seconds), 5);
        if (seconds > 3) {
          const target = seconds < 8 ? [0.6, -2.5] : seconds < 11 ? [-3.2, -0.2] : [3.2, -0.2];
          face(ziyu, target[0], target[1]);
          ziyu.pose(cue(seconds, [[3, t => G.kowtow(t, 0.7)], [6, G.folded], [8, t => G.bow(t, 0.5)], [11, t => G.bow(t, 0.5)]]));
          face(wx, 0.6, -2.5);
          wx.pose(G.folded(seconds));
        }
        face(sun, -0.2, -0.8); face(ronghua, -0.2, -0.8);
        sun.pose(cue(seconds, [[0, G.folded], [8, t => G.bow(t, 0.3)]]));
        ronghua.pose(cue(seconds, [[0, G.folded], [11, t => G.bow(t, 0.3)]]));
      } else {
        const t = seconds - at(2);
        cam3(seconds);
        ziyu.root.position.set(-0.2, 0, -0.8);
        face(ziyu, 0.6, -2.5);
        ziyu.pose(cue(t, [[0, G.folded], [3, G.speak], [6.5, tt => G.bow(tt, 0.6)]]));
        walkAlong(ziyu, t, 8, 11, [[-0.2, -0.8], [-0.4, 4]], G.folded(t), 5);
        sun.pose(G.fan(t)); ronghua.pose(G.laugh(t));
      }
    };
  },
});
