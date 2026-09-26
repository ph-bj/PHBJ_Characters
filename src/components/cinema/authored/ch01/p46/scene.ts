import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure } from '../../../stage/figure';
import { room } from '../../../stage/architecture';
import { bookshelf, censer, chair, cup, hangingScroll, pot, table, zither } from '../../../stage/props';
import { bareTree, bamboo } from '../../../stage/nature';
import { album } from '../../../stage/performance';
import { specks, smoke } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 46: Wang Xun's study, a warmer, busier room than Ziyu's, a brazier smoking and
 * portraits of performers pinned by the shelves. Over tea Ziyu says the 《花选》 is exaggerated;
 * Wang Xun leaps up, snatches his own copy from the shelf and taps its pages: if anything it falls
 * short. Ziyu looks at him, understands his cousin shares the craze, and turns to the window, where
 * the snow comes down on the bamboo, and says no more.
 */

export default defineScene({
  seed: 1046,
  build: kit => {
    const { groups: [room1], show } = sets(kit, 1);
    const rand = kit.rand;

    room(kit, room1, { w: 11, d: 8, h: 3.6, back: 'lattice', floorKind: 'boards' });
    bookshelf(kit, room1, { x: -4.2, z: -3.4, w: 2, h: 2.6, rand });
    bookshelf(kit, room1, { x: 3.8, z: -3.4, w: 2, h: 2.6, rand });
    for (const [x, kind] of [[-2.2, 'peony'], [1.8, 'orchid'], [5.3, 'plum']] as const) hangingScroll(kit, room1, { x, y: 2.3, z: -3.88, w: 0.7, h: 1.6, kind });
    table(kit, room1, { x: 0, z: -0.8, w: 1.2, d: 0.7, h: 0.76 });
    chair(kit, room1, { x: -1, z: -0.8, rot: Math.PI / 2 });
    chair(kit, room1, { x: 1, z: -0.8, rot: -Math.PI / 2 });
    cup(kit, room1, -0.3, 0.76, -0.8, 1.3); cup(kit, room1, 0.3, 0.76, -0.8, 1.3); pot(kit, room1, 0, 0.76, -1);
    zither(kit, room1, -4, 0.72, 0.8, 0.3);
    table(kit, room1, { x: -4, z: 0.8, w: 1.3, d: 0.5, h: 0.72 });
    // A brazier.
    censer(kit, room1, 2.4, 0, 0.8, 1.6);
    smoke(kit, room1, 2.4, 0.5, 0.8, { h: 1.6, count: 100, size: 0.14 });
    const outside = [bamboo(kit, room1, -2, -7, { h: 7, count: 10, rand }), bamboo(kit, room1, 3, -7.5, { h: 7, count: 10, rand })];
    bareTree(kit, room1, 6, -8, 6, rand);
    const snow = specks(kit, room1, { count: 800, w: 14, h: 8, d: 6, fall: 0.7, wind: 0.1, size: 0.025, dark: true, y: 4, z: -6.5 });
    const zy = figure(kit, room1, CAST.ziyu, -1, -0.8);
    const wx = figure(kit, room1, CAST.wangxun, 1, -0.8);
    const copy = album(kit, wx.hands.r, { w: 0.2, d: 0.26 });
    copy.group.rotation.set(0.9, 0, -1.3);
    lights(kit, room1, { key: [-4, 8, 6], intensity: 1 });
    const cam = move(kit, room1, [
      [0, [0, 1.3, 2.6], [0, 1.1, -0.8]],
      [7, [-2.6, 1.3, 1.4], [1, 1.1, -0.8]],
      [14, [2.2, 1.6, 1.8], [-0.6, 1.3, -1]],
      [22, [-1.8, 1.6, 1.6], [2.8, 1.5, -2.8]],
      [30, [-0.4, 1.6, 0.6], [-1.4, 1.5, -3.4]],
      [36, [0.2, 1.7, 1.2], [-1.2, 1.7, -5]],
    ]);

    return (seconds: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.03));
      cam(seconds);
      outside.forEach(b => b.update(seconds));
      snow.uniforms.uSpeed.value = 1;
      face(zy, 1, -0.8);
      const t = seconds;
      zy.pose(cue(t, [[0, tt => ({ ...G.drink(tt), sit: 1 })], [6, tt => ({ ...G.speak(tt), sit: 1 })], [14, tt => ({ ...G.rest(tt), sit: 1 })], [26, tt => ({ ...G.rest(tt), sit: 1, yaw: -1.2 })]]));
      copy.group.visible = t > 15 && t < 26;
      copy.turn(span(t, 17, 18.5));
      if (t < 14) { wx.root.position.set(1, 0, -0.8); face(wx, -1, -0.8); wx.pose(cue(t, [[0, tt => ({ ...G.rest(tt), sit: 1 })], [9, tt => ({ ...G.laugh(tt), sit: 1 })]])); }
      else if (t < 16) { const u = span(t, 14, 15.5); wx.root.position.set(1 + u * 2.6, 0, -0.8 - u * 2.2); face(wx, 3.8, -3.4); wx.pose({ ...G.rest(t), walk: t * 6 }); }
      else { const u = span(t, 16, 17); wx.root.position.set(3.6 - u * 2.2, 0, -3 + u * 2.1); face(wx, -1, -0.8); wx.pose(cue(t, [[16, G.offer], [18.5, G.argue], [26, G.laugh]])); }
    };
  },
});
