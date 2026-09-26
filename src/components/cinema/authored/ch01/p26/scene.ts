import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, tone, walkAlong } from '../../../stage/figure';
import { ground, plumTree, range, willow } from '../../../stage/nature';
import { study } from '../../../stage/locations';
import { table } from '../../../stage/props';
import { album, hold, tower } from '../../../stage/performance';
import { mist, petals } from '../../../stage/fx';
import { lights, move, scroll, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 26: the quatrains for Yulin. His long sleeves trailing like dawn cloud, two
 * attendants help him up the stair of the three-storeyed Pavilion of Approaching Spring (临春阁) to
 * rival Zhang Lihua; at the top, half-drunk, he sings Yang Pass under a new crescent while the camera
 * falls away to a traveller turning back on the road below. The poem hangs on the tower. Then,
 * at noon, Nanxiang reaches across and turns the album to the sixth entry for Ziyu.
 */

const POEM = ['舞袖长拖艳若霞', '妆成鬌髻云斜', '侍儿扶上临春阁', '要斗南朝张丽华', '慧绝香心酒半酣', '妙疑才过月初三', '动人最是阳关曲', '听得征夫恨不堪'];

export default defineScene({
  seed: 1026,
  build: (kit, story) => {
    const { groups: [palace, desk], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: the Pavilion of Approaching Spring -------------------------------------------------
    ground(kit, palace, { w: 400, d: 400, height: 2, flatten: 16, shade: 0xdcd6cc });
    tower(kit, palace, { levels: 3, w: 7, h: 3.2, shade: 0x6e675f });
    // An outside stair winding up to the top storey.
    const steps = 30;
    for (let k = 0; k < steps; k++) { const y = 0.8 + k * 0.28; kit.box(palace, tone(k % 2 ? 0xb9b2a8 : 0xa39b91), [-5.6 + k * 0.03, y / 2, 5.4 - k * 0.36], [1.2, y, 0.38]); }
    for (let k = 0; k < 4; k++) plumTree(kit, palace, -10 + k * 6.5, 6 + (k % 2) * 2, { h: 3.6, rand, blossoms: 120 });
    willow(kit, palace, 9, 2, { h: 7, rand });
    range(kit, palace, { z: -120, span: 400, height: 35, shade: 0xc9c2b7, seed: 81 });
    const yl = figure(kit, palace, ACTORS.yulin.costume, -5.6, 7);
    hold(kit, yl, 'cup');
    const maids = [figure(kit, palace, CAST.maid, -6.3, 7.3), figure(kit, palace, CAST.maid, -4.9, 7.3)];
    const verse = scroll(kit, palace, POEM, { size: 0.36, x: 3.2, y: 4.6, z: 4.66 });
    const traveller = figure(kit, palace, { ...CAST.wangxun, fur: true }, 12, 30);
    // The moon just past its third night: a thin crescent of bare paper in the wash.
    const crescent = new THREE.Shape(); crescent.absarc(0, 0, 3, Math.PI * 0.5, Math.PI * 1.5, false); crescent.absarc(-0.9, 0, 2.6, Math.PI * 1.5, Math.PI * 0.5, true);
    kit.mesh(new THREE.ShapeGeometry(crescent, 32), flat(0xfbf9f4, { fog: false }), palace, 30, 26, -80);
    const clouds = mist(kit, palace, { count: 8, w: 80, y: 1, d: 30, z: -30, size: 14, opacity: 0.7 });
    const fall = petals(kit, palace, { count: 80, w: 16, h: 10, d: 12, z: 4 });
    lights(kit, palace, { key: [8, 14, 10], intensity: 1 });
    const cam1 = move(kit, palace, [
      [0, [-10, 2, 14], [-5.6, 1.6, 6]],
      [8, [-9, 5, 6], [-5.3, 4.4, 1.5]],
      [14, [-2, 10.5, 9], [-2.4, 9.6, 3]],
      [22, [1.6, 7, 11], [2.8, 5.4, 4.6]],
      [30, [4, 14, 22], [12, 0, 30]],
    ]);

    // --- Shot 2: the sixth entry ----------------------------------------------------------------------
    study(kit, desk);
    table(kit, desk, { x: 0, z: 0.6, w: 1.2, d: 0.7, h: 0.78 });
    const book = album(kit, desk, { y: 0.79, z: 0.6 });
    const ziyu = figure(kit, desk, CAST.ziyu, 0, -0.15);
    const nx = figure(kit, desk, CAST.nanxiang, 0.9, 1.3);
    lights(kit, desk, { key: [2, 10, 6], intensity: 1.1 });
    const cam2 = move(kit, desk, [
      [at(1), [-1.6, 1.5, 2.4], [0.2, 1, 0.6]],
      [36, [-0.9, 1.3, 1.6], [0.2, 0.95, 0.6]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.moonlit([0.4, 0.3, -1], 0.012));
        cam1(seconds);
        clouds.update(seconds); fall.update(seconds);
        verse.set((seconds - 0.4) / 27.6);
        // Up the stair, an attendant at each side.
        const climb = span(seconds, 1, 14);
        const k = Math.min(steps - 1, climb * (steps - 1));
        const x = -5.6 + k * 0.03, z = 5.4 - k * 0.36, y = 0.8 + k * 0.28;
        const onStair = seconds > 3.2;
        if (!onStair) walkAlong(yl, seconds, 0, 3.2, [[-5.6, 7], [-5.6, 5.6]], G.rest(seconds), 5);
        else { yl.root.position.set(x, y, z); yl.root.rotation.y = Math.PI; yl.pose({ ...G.rest(seconds), walk: seconds < 14 ? seconds * 5 : undefined, flutter: 0.7, l: { lift: 0.9, out: 0.6, bend: 0.5 }, r: { lift: 0.9, out: 0.6, bend: 0.5 } }); }
        maids.forEach((m, i) => {
          m.root.position.set(yl.root.position.x + (i ? 0.55 : -0.55), yl.root.position.y, yl.root.position.z + 0.3);
          m.root.rotation.y = Math.PI;
          m.pose({ ...G.rest(seconds), walk: seconds < 14 ? seconds * 5 + i : undefined, [i ? 'l' : 'r']: { lift: 0.9, out: -0.1, bend: 0.8 } });
        });
        if (seconds > 15) { face(yl, 2, 20); yl.pose(cue(seconds, [[15, G.drink], [18, t => G.dance(t)], [24, t => ({ ...G.speak(t), pitch: -0.2 })]])); }
        walkAlong(traveller, seconds, 20, 30, [[12, 30], [14, 40]], G.behind(seconds), 4);
        if (seconds > 26) { face(traveller, -3, 0); traveller.pose(G.weep(seconds)); }
      } else {
        kit.setEnv(INK_SKY.paper(0.02));
        const t = seconds - at(1);
        cam2(seconds);
        book.turn(span(t, 1.4, 3.4));
        face(ziyu, 0, 1); face(nx, 0, 0.5);
        ziyu.pose(G.read(t));
        nx.pose(cue(t, [[0, G.laugh], [1, tt => ({ ...G.rest(tt), bow: 0.3, r: { lift: 1.3, out: 0.3 - span(tt, 1.4, 3.4) * 0.5, bend: 0.3 } })], [3.6, G.point]]));
      }
    };
  },
});
