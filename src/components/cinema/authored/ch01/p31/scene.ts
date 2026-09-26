import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure } from '../../../stage/figure';
import { garden } from '../../../stage/locations';
import { pavilion } from '../../../stage/architecture';
import { cup, dishes, pot, roundTable, table } from '../../../stage/props';
import { album, hold } from '../../../stage/performance';
import { cloudBank } from '../../../stage/nature';
import { petals } from '../../../stage/fx';
import { lights, move, scroll, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 31: the quatrains for Guibao. In an empty spring garden, thinking himself
 * unseen, he mimics a lovelorn beauty sighing over fallen blossom, then catches the camera's eye and
 * laughs. Across the pond a feast in a pavilion begs for him (乞紫云) under a cloud tinged purple; he
 * crosses and plays the red ivory clappers for the guests, singing in his white silk skirt. The poem
 * hangs by the pond. Then, from straight above, three pairs of hands on the album as a page turns.
 */

const POEM = ['盈盈十五已风流', '巧笑横波未解羞', '最爱娇憨太无赖', '到无人处学春愁', '我欲当筵乞紫云', '一时声价遍传闻', '红牙拍到消魂处', '檀口清歌白练裙'];

export default defineScene({
  seed: 1031,
  build: (kit, story) => {
    const { groups: [yard, desk], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: the garden and the feast ------------------------------------------------------------
    const g = garden(kit, yard);
    const gb = figure(kit, yard, { ...ACTORS.guibao.costume, robe: 0xfaf8f2 }, 3.4, 2);
    const clappers = hold(kit, gb, 'clappers');
    const fall = petals(kit, yard, { count: 80, w: 8, h: 5, d: 6, x: 3, z: 1 });
    pavilion(kit, yard, { x: 16, z: -2, r: 2.6, h: 2.8 });
    roundTable(kit, yard, { x: 16, z: -2, r: 0.9 }).position.y = 0.5;
    dishes(kit, yard, 1.34, [[16, -2], [16.4, -1.7], [15.6, -2.2]], rand);
    cup(kit, yard, 16.5, 1.34, -2.4, 1.3); pot(kit, yard, 15.7, 1.34, -1.6);
    const guests = [[14.8, -2.6], [16, -3.3], [17.2, -2.6]].map(([x, z], i) => { const f = figure(kit, yard, [CAST.guest, CAST.wangxun, CAST.official][i], x, z); f.root.position.y = 0.5; return f; });
    const purple = cloudBank(kit, yard, 16, 8, -5, { w: 6, puffs: 10, rand, size: 0.7, shade: 0xb9a9c0 });
    const verse = scroll(kit, yard, POEM, { size: 0.3, x: -1.2, y: 2.5, z: 3.2 });
    verse.group.rotation.y = 0.3;
    lights(kit, yard, { key: [6, 12, 8], intensity: 1 });
    const cam1 = move(kit, yard, [
      [0, [6.5, 1.5, 7], [3.4, 1.4, 2]],
      [9, [4.5, 1.6, 4.6], [3.4, 1.5, 1.8]],
      [14, [0.8, 2.6, 6.6], [-1.2, 2.4, 3]],
      [21, [18.6, 2.4, 2.6], [16, 1.7, -2]],
      [30, [12.4, 3.2, 4.2], [16, 1.9, -1.4]],
    ]);

    // --- Shot 2: hands on the album, from above -------------------------------------------------
    table(kit, desk, { w: 1.4, d: 1, h: 0.78 });
    const book = album(kit, desk, { y: 0.79 });
    const readers = [figure(kit, desk, CAST.ziyu, 0, -0.75), figure(kit, desk, CAST.zhongqing, -0.85, 0.2), figure(kit, desk, CAST.nanxiang, 0.85, 0.3)];
    lights(kit, desk, { key: [3, 8, 4], intensity: 1 });
    const cam2 = move(kit, desk, [
      [at(1), [0.01, 3.2, 0.02], [0, 0.78, 0]],
      [36, [0.01, 2.5, 0.3], [0, 0.78, 0]],
    ], { pull: 0.3 });

    return (seconds: number, shot: number) => {
      show(shot === 0 ? 0 : 1);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam1(seconds);
        g.update(seconds); fall.update(seconds);
        verse.set((seconds - 0.4) / 27.6);
        clappers.visible = seconds > 15;
        purple.position.y = 8 - span(seconds, 13, 16) * 3;
        // Alone: the mimicked sigh; seen: the laugh; then off across the bridge to the feast.
        if (seconds < 15) { face(gb, 2.5, 0.5); gb.pose(cue(seconds, [[0, G.weep], [4, G.shy], [8.5, t => ({ ...G.laugh(t), yaw: 0.8 })], [11, G.pose]])); gb.root.position.set(3.4, 0, 2); }
        else {
          const u = span(seconds, 15, 20);
          gb.root.position.set(3.4 + u * 12, u * 0.5, 2 - u * 3.2);
          if (u < 1) { gb.root.rotation.y = Math.atan2(12, -3.2); gb.pose({ ...G.rest(seconds), walk: seconds * 6 }); }
          else { face(gb, 16, -2); gb.pose({ ...G.dance(seconds, 3), r: { lift: 1.4, out: 0.3, bend: 1 + Math.sin(seconds * 10) * 0.3 } }); }
        }
        guests.forEach((f, i) => { face(f, gb.root.position.x, gb.root.position.z); f.pose(cue(seconds, [[0, t => ({ ...G.toast(t), sit: 1 })], [21 + i * 0.3, t => ({ ...G.clap(t), sit: 1 })]])); });
      } else {
        kit.setEnv(INK_SKY.paper(0.02));
        const t = seconds - at(1);
        cam2(seconds);
        book.turn(span(t, 1.4, 3.4));
        readers.forEach((r, i) => { face(r, 0, 0); r.pose(i === 0 ? { ...G.read(t), r: { lift: 1.2, out: 0.35 - span(t, 1.4, 3.4) * 0.6, bend: 0.5 } } : { ...G.rest(t), bow: 0.4, [i === 1 ? 'r' : 'l']: { lift: 1.2, out: 0.1, bend: 0.4 } }); });
      }
    };
  },
});
