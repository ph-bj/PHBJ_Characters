import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { DARK, floor, roof, wall } from '../../../stage/architecture';
import { study } from '../../../stage/locations';
import { book } from '../../../stage/props';
import { hold } from '../../../stage/performance';
import { specks } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 44: Wang Xun. At his desk he writes a fine hand; a shivering servant comes in
 * from the cold and Wang Xun takes off his own outer jacket and puts it round the man's shoulders.
 * Then the examination compound: row upon row of tiny open cells, a candidate hunched in each, and
 * the camera drifts down the lane to find Wang Xun among them. It ends with the two cousins walking
 * arm in arm across a courtyard: sworn friends.
 */

export default defineScene({
  seed: 1044,
  build: (kit, story) => {
    const { groups: [room, exam], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: handsome and generous -------------------------------------------------------------
    const s = study(kit, room);
    const wx = figure(kit, room, CAST.wangxun, ...s.seats.desk);
    const warm = figure(kit, room, { ...CAST.wangxun, jacket: undefined }, ...s.seats.desk);
    const brush = hold(kit, wx, 'brush');
    const servant = figure(kit, room, CAST.servant, 4, 4);
    const given = figure(kit, room, { ...CAST.servant, jacket: 0x8c857c }, 0.6, -1.4);
    const draft = book(kit, room, { x: 0.2, y: 0.83, z: -2.2, w: 0.3, d: 0.4 });
    lights(kit, room, { key: [-5, 8, 6], intensity: 1 });
    const cam1 = move(kit, room, [
      [0, [0.4, 1.8, -0.8], [0, 0.9, -2.3]],
      [7, [2.6, 1.6, 1.6], [0.3, 1.3, -2]],
      [14, [-2, 1.6, 1.8], [0.4, 1.4, -1.8]],
      [20, [-0.6, 1.7, 1.2], [0.4, 1.5, -1.6]],
    ]);

    // --- Shot 2: the examination compound, and sworn friends ---------------------------------------
    floor(kit, exam, 80, 120, { kind: 'flag', shade: 0xd6d0c6 });
    const cells: THREE.Object3D[] = [];
    for (const side of [-1, 1]) for (let k = 0; k < 24; k++) {
      const cell = kit.group(exam, side * 2.4, 0, -k * 1.6);
      cell.rotation.y = side < 0 ? Math.PI / 2 : -Math.PI / 2;
      kit.box(cell, tone(0xb9b2a8), [0, 1.3, -0.75], [1.4, 2.6, 0.1]);
      kit.box(cell, tone(0xb9b2a8), [-0.7, 1.3, 0], [0.1, 2.6, 1.5]);
      kit.box(cell, tone(DARK), [0, 0.85, -0.3], [1.3, 0.05, 0.5]);
      cells.push(cell);
    }
    for (const side of [-1, 1]) {
      const r = kit.group(exam, side * 2.6, 0, -18);
      r.rotation.y = Math.PI / 2;
      roof(kit, r, 40, 2.2, { y: 2.6, rise: 0.5 });
      wall(kit, exam, side * 3.4, 2, side * 3.4, -40, 2.6);
    }
    const candidates = cells.filter((_, i) => i % 2 === 0 || i < 10).map((c, i) => {
      const f = figure(kit, c, { ...CAST.pedant, robe: [0x8c857c, 0x6e675f, 0x9c958b][i % 3], beard: i % 3 ? 'none' : 'goatee' }, 0, 0.1);
      f.root.rotation.y = Math.PI;
      return f;
    });
    const hero = figure(kit, cells[10], CAST.wangxun, 0, 0.1);
    hero.root.rotation.y = Math.PI;
    const zy = figure(kit, exam, CAST.ziyu, -0.4, 6);
    const wx2 = figure(kit, exam, CAST.wangxun, 0.4, 6.2);
    const frost = specks(kit, exam, { count: 600, w: 10, h: 6, d: 50, fall: 0.3, wind: 0.2, size: 0.025, dark: true, y: 3, z: -18 });
    lights(kit, exam, { key: [6, 10, 6], intensity: 1 });
    const cam2 = move(kit, exam, [
      [at(1), [0, 4, 4], [0, 1, -30]],
      [at(1) + 6, [0.4, 1.6, -9], [-2.4, 1.2, -8]],
      [at(1) + 9, [0, 1.8, 2], [0, 1.4, 6]],
      [36, [2.4, 2, 12], [0, 1.4, 4]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.03));
        cam1(seconds);
        s.update(seconds);
        draft.open(1);
        const giving = span(seconds, 12, 14);
        wx.fade(1 - giving); warm.fade(giving);
        brush.visible = seconds < 9;
        if (seconds < 9) wx.pose({ ...G.write(seconds), sit: 1 });
        else { wx.root.position.set(0.1, 0, -2.2); warm.root.position.copy(wx.root.position); face(wx, 0.6, -1.4); face(warm, 0.6, -1.4); wx.pose(G.offer(seconds)); warm.pose(cue(seconds, [[12, G.offer], [15, t => G.speak(t, 'l')]])); }
        walkAlong(servant, seconds, 6, 10, [[4, 4], [1.4, 0.4], [0.6, -1.4]], { ...G.folded(seconds), bow: 0.3 }, 5);
        servant.root.visible = seconds < 13; given.root.visible = seconds >= 13;
        face(given, 0.1, -2.2);
        given.pose(cue(seconds, [[13, t => G.bow(t, 0.7)], [16, G.salute]]));
      } else {
        kit.setEnv(INK_SKY.paper(0.02));
        const t = seconds - at(1);
        cam2(seconds);
        frost.uniforms.uSpeed.value = 1;
        candidates.forEach((f, i) => f.pose({ ...G.write(t + i), sit: 1 }));
        hero.pose(cue(t, [[0, tt => ({ ...G.write(tt), sit: 1 })], [5, tt => ({ ...G.think(tt), sit: 1 })]]));
        // The cousins, arm in arm.
        walkAlong(zy, t, 8, 16, [[-0.4, 6], [-0.4, 11]], { ...G.speak(t, 'l'), r: { lift: 0.5, out: -0.2, bend: 0.8 } }, 4.5);
        walkAlong(wx2, t, 8, 16, [[0.4, 6.2], [0.4, 11.2]], { ...G.laugh(t), l: { lift: 0.5, out: -0.2, bend: 0.8 } }, 4.5);
        zy.root.visible = wx2.root.visible = t > 8;
      }
    };
  },
});
