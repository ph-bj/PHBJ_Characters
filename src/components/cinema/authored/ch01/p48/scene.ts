import { defineScene } from '../../define';
import { CAST, G, cue, face, figure } from '../../../stage/figure';
import { theatre } from '../../../stage/locations';
import { hold } from '../../../stage/performance';
import { blendEnv, DUSK, lights, move, sets } from '../../../stage/direct';
import { INK_SKY } from '../../../cinemaKit';

/*
 * Chapter 1, paragraph 48. Ziyu and Wang Xun at a table by the stage while a dull play drags on; a
 * man at the next table calls out and Wang Xun twists round to chat. Then, from Ziyu's side, the
 * broad, flat man in the old grey fox coat and muddy boots comes shouldering through the tables, and
 * back, and back again, each time with a dazed glance at Ziyu and then at Wang Xun; the camera
 * turns with Ziyu's uneasy eyes.
 */

export default defineScene({
  seed: 1048,
  build: (kit, story) => {
    const { groups: [house], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;

    const t3 = theatre(kit, house);
    const tableAt = t3.tables[7];
    const [tx, tz] = tableAt;
    const zy = figure(kit, house, CAST.ziyu, tx - 0.4, tz - 0.55);
    const wx = figure(kit, house, CAST.wangxun, tx + 0.45, tz - 0.55);
    zy.root.rotation.y = wx.root.rotation.y = Math.PI;
    const [ax, az] = t3.tables[8];
    const acquaintance = figure(kit, house, { ...CAST.guest, headwear: 'cap' }, ax + 0.9, az - 0.2);
    const foxcoat = figure(kit, house, { headwear: 'cap', robe: 0x6e675f, fur: true, face: 'coarse', girth: 1.45, height: 1.66 }, tx + 6, tz + 0.9);
    const actor = figure(kit, house, { ...CAST.elder, headwear: 'official' }, 0, -8);
    actor.root.position.y = 1.2;
    hold(kit, actor, 'whisk');
    lights(kit, house, { key: [2, 12, 6], intensity: 0.9 });
    const cam = move(kit, house, [
      [0, [tx, 1.6, tz + 3.6], [tx, 1.2, tz]],
      [6, [tx + 1.4, 1.5, tz + 1.8], [tx + 1.6, 1.3, az]],
      [at(1), [tx - 2.4, 2.0, tz - 1.6], [tx + 0.6, 1.3, tz + 0.4]],
      [at(1) + 12, [tx + 2.6, 2.0, tz - 1.8], [tx - 0.4, 1.3, tz + 0.4]],
      [36, [tx - 0.2, 2.3, tz - 2.6], [tx, 1.3, tz + 0.6]],
    ]);

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(blendEnv(INK_SKY.paper(0.025), DUSK(0.03), 0.25));
      cam(seconds);
      t3.update(seconds);
      actor.pose({ ...G.stroke(seconds), bow: 0.3 });
      face(acquaintance, wx.root.position.x, wx.root.position.z);
      acquaintance.pose(cue(seconds, [[0, G.rest], [1, G.point], [3, G.speak], [8, G.laugh]]));
      zy.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 0 })], [13, t => ({ ...G.folded(t), yaw: 0.9 })], [20, t => ({ ...G.folded(t), yaw: -0.9 })], [27, t => ({ ...G.folded(t), yaw: 0.8 })]]));
      if (shot === 0) { wx.root.rotation.y = Math.PI; wx.pose(G.rest(seconds)); }
      if (seconds > 2) { face(wx, acquaintance.root.position.x, acquaintance.root.position.z); wx.pose(cue(seconds, [[2, G.laugh], [5, G.speak], [14, G.argue], [22, G.laugh]])); }
      // Back and forth behind them, three and four times, glancing each time.
      const lap = 5.4, u = Math.max(0, seconds - at(1)) / lap, k = Math.floor(u), f = u - k;
      const dir = k % 2 ? -1 : 1;
      const x = tx + dir * (6 - f * 12);
      foxcoat.root.position.set(x, 0, tz + 0.9);
      foxcoat.root.rotation.y = dir > 0 ? -Math.PI / 2 : Math.PI / 2;
      const near = Math.abs(x - tx) < 1.4;
      foxcoat.pose({ ...G.rest(seconds), walk: seconds * 4.5, stride: 0.7, lean: dir * 0.12, bow: 0.1, yaw: near ? dir * 1.1 : 0, l: { lift: 0.1, out: 0.3, bend: 0.2 }, r: { lift: 0.1, out: 0.3, bend: 0.2 } });
      foxcoat.root.visible = seconds > at(1);
    };
  },
});
