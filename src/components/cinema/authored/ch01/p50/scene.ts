import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, walkAlong } from '../../../stage/figure';
import { gateLane, theatre } from '../../../stage/locations';
import { cart } from '../../../stage/vehicles';
import { hold } from '../../../stage/performance';
import { blendEnv, DUSK, lights, move, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 50. "What is this boy called?" "Baozhu." Ziyu cannot help laughing, and for
 * a moment the album's Baozhu, the pearl of the jade tower, rises in costume beside the lumpish boy
 * who bears his name, and is gone. The boy seizes Wang Xun's hand and pesters him for a dinner. Ziyu
 * sends the page Yun'er out: he runs through the crowd to the lane where the cart waits, and back.
 */

export default defineScene({
  seed: 1050,
  build: (kit, story) => {
    const { groups: [house, lane], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    const t3 = theatre(kit, house);
    const [tx, tz] = t3.tables[7];
    const zy = figure(kit, house, CAST.ziyu, tx - 0.8, tz - 0.55);
    const wx = figure(kit, house, CAST.wangxun, tx + 0.8, tz - 0.55);
    const boy = figure(kit, house, { ...CAST.escort, face: 'coarse', robe: 0x6e675f, jacket: 0x3f3a35, skin: 0xe6ded0, height: 1.5 }, tx, tz - 0.9);
    boy.hands.l.children.concat(boy.hands.r.children).forEach(o => { (o as THREE.Mesh).material = flat(0x4a443e); });
    const pimp = figure(kit, house, { ...CAST.servant, cut: 'robe', robe: 0x5a534c, face: 'coarse' }, tx + 1.6, tz - 1.6);
    const ideal = figure(kit, house, ACTORS.baozhu.costume, tx - 0.3, tz - 1.9);
    ideal.shadow.visible = false;
    hold(kit, ideal, 'fan');
    const yuner = figure(kit, house, CAST.page, tx - 1.8, tz - 1.2);
    lights(kit, house, { key: [2, 12, 6], intensity: 0.9 });
    const cam1 = move(kit, house, [
      [0, [tx + 0.2, 1.5, tz - 3.2], [tx, 1.3, tz - 0.8]],
      [6, [tx - 1.6, 1.6, tz - 3], [tx - 0.2, 1.5, tz - 1.4]],
      [at(1), [tx + 2.2, 1.6, tz - 2.6], [tx + 0.4, 1.3, tz - 0.8]],
      [at(2), [tx + 1.2, 1.5, tz - 2.8], [tx + 0.5, 1.3, tz - 0.6]],
    ]);

    const cam1b = move(kit, house, [[0, [tx - 2.6, 1.7, tz - 2.6], [tx - 0.4, 1.4, tz - 0.6]]]);

    // Yun'er's run to the lane.
    const g = gateLane(kit, lane);
    const c = cart(kit, lane, { x: -3, z: 3.8, rot: Math.PI / 2 });
    const driver = figure(kit, lane, CAST.servant, -0.8, 4.6);
    const runner = figure(kit, lane, CAST.page, 6, 2.4);
    lights(kit, lane, { key: [8, 12, 10], intensity: 1 });
    const cam2 = move(kit, lane, [
      [at(2), [9, 1.4, 7], [2, 1.2, 3]],
      [at(2) + 5, [2, 1.6, 8], [-2, 1.3, 3.6]],
      [36, [-6, 1.6, 7.4], [-3, 1.4, 3.6]],
    ]);

    return (seconds: number, shot: number) => {
      const outside = shot === 2 && seconds > at(2) + 0.8 && seconds < at(2) + 7;
      show(outside ? 1 : 0);
      if (!outside) {
        kit.setEnv(blendEnv(INK_SKY.paper(0.025), DUSK(0.03), 0.3));
        cam1(Math.min(seconds, at(2)));
        if (shot === 2) cam1b(seconds);
        t3.update(seconds);
        for (const f of [zy, wx]) f.root.rotation.y = Math.PI;
        face(boy, tx, tz - 3);
        const t = seconds;
        wx.pose(cue(t, [[0, G.speak], [5, G.rest], [at(1), G.fume], [at(1) + 6, t2 => ({ ...G.rest(t2), r: { lift: 1.2, out: 0.7, bend: 0.2 } })]]));
        zy.pose(cue(t, [[0, G.rest], [4.6, G.laugh], [8, G.rest], [at(2) + 7, G.speak]]));
        boy.pose(cue(t, [[0, t2 => ({ ...G.speak(t2), sit: 0.3 })], [at(1), t2 => ({ ...G.tug(t2), yaw: 1 })]]));
        if (t > at(1)) face(boy, wx.root.position.x, wx.root.position.z);
        face(pimp, tx, tz - 0.55);
        pimp.pose(cue(t, [[0, G.speak], [8, G.laugh]]));
        ideal.fade(0.55 * span(t, 4.6, 6) * (1 - span(t, 9, 10.5)));
        face(ideal, tx, tz - 4);
        ideal.pose(G.pose(t));
        yuner.root.visible = t < at(2) + 1 || t > at(2) + 7;
        if (t > at(2) + 7) { face(yuner, tx - 0.8, tz - 0.55); yuner.pose(G.speak(t, 'l')); }
        else { face(yuner, tx - 0.8, tz - 0.55); yuner.pose(cue(t, [[0, G.folded], [at(2), G.bow]])); }
      } else {
        kit.setEnv(INK_SKY.paper(0.02));
        const t = seconds - at(2);
        cam2(seconds);
        g.gate.open(1);
        c.update(seconds, false);
        face(driver, 6, 2.4); driver.pose(t > 3 ? G.salute(t) : G.hold(t));
        walkAlong(runner, t, 0.8, 3, [[6, 2.4], [0.4, 3]], G.rest(t), 10);
        if (t > 3) { face(runner, -0.8, 4.6); runner.pose(G.speak(t)); }
        if (t > 5) walkAlong(runner, t, 5, 7, [[0.4, 3], [7, 2.2]], G.rest(t), 10);
      }
    };
  },
});
