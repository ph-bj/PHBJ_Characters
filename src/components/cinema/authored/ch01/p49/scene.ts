import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, VERMILION, walkAlong } from '../../../stage/figure';
import { theatre } from '../../../stage/locations';
import { smoke } from '../../../stage/fx';
import { blendEnv, DUSK, lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 49. Ziyu at the table by the stage, shifting and fidgeting, and under his
 * bench the floor smoulders with embers (如坐涂炭) while heat curls up round him; Wang Xun turns back
 * from his chat, and Ziyu is about to say they should go. Then a beaming man pushes through leading a
 * heavy-headed boy, both bob their greetings, the boy squeezes onto the bench between them, and a
 * dark hand closes on Ziyu's pale one: the camera comes down to the two hands.
 */

export default defineScene({
  seed: 1049,
  build: (kit, story) => {
    const { groups: [house], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    const t3 = theatre(kit, house);
    const [tx, tz] = t3.tables[7];
    const zy = figure(kit, house, CAST.ziyu, tx - 0.55, tz - 0.55);
    const wx = figure(kit, house, CAST.wangxun, tx + 0.55, tz - 0.55);
    zy.root.rotation.y = wx.root.rotation.y = Math.PI;
    // Embers under his seat.
    const embers = Array.from({ length: 40 }, () => kit.mesh(new THREE.SphereGeometry(0.03 + rand() * 0.03, 6, 5), flat(VERMILION), house, tx - 0.55 + (rand() - 0.5) * 0.9, 0.02, tz - 0.55 + (rand() - 0.5) * 0.7));
    const heat = smoke(kit, house, tx - 0.55, 0.05, tz - 0.55, { h: 2, count: 140, size: 0.18, shade: 0x8c857c });
    const pimp = figure(kit, house, { ...CAST.servant, cut: 'robe', robe: 0x5a534c, face: 'coarse' }, tx + 5, tz + 3);
    const boy = figure(kit, house, { ...CAST.escort, face: 'coarse', robe: 0x6e675f, jacket: 0x3f3a35, skin: 0xe6ded0, height: 1.5 }, tx + 5.6, tz + 3.4);
    // His hands are dark though his face is white.
    boy.hands.l.children.concat(boy.hands.r.children).forEach(o => { (o as THREE.Mesh).material = flat(0x4a443e); });
    lights(kit, house, { key: [2, 12, 6], intensity: 0.9 });
    const cam = move(kit, house, [
      [0, [tx - 0.6, 1.3, tz - 2.4], [tx - 0.55, 1.0, tz - 0.55]],
      [5, [tx - 0.2, 0.6, tz - 1.6], [tx - 0.55, 0.3, tz - 0.55]],
      [11, [tx, 1.6, tz - 2.8], [tx, 1.3, tz - 0.4]],
      [at(1) + 6, [tx + 2.4, 1.7, tz - 2.4], [tx + 0.4, 1.3, tz - 0.2]],
      [at(1) + 14, [tx - 0.9, 1.5, tz - 1.6], [tx - 0.3, 1.2, tz - 0.5]],
      [36, [tx - 0.5, 1.2, tz - 1.2], [tx - 0.3, 1.0, tz - 0.55]],
    ]);

    return (seconds: number) => {
      show(0);
      kit.setEnv(blendEnv(INK_SKY.paper(0.025), DUSK(0.03), 0.3));
      cam(seconds);
      t3.update(seconds);
      const burn = span(seconds, 1, 4) * (1 - span(seconds, 11, 13));
      embers.forEach((e, i) => { e.visible = burn > 0.05; e.scale.setScalar(Math.max(0.01, burn * (0.6 + 0.4 * Math.sin(seconds * 6 + i)))); });
      heat.visible = burn > 0.1;
      zy.pose(cue(seconds, [[0, t => ({ ...G.rest(t), lean: Math.sin(t * 3) * 0.08, yaw: Math.sin(t * 1.7) * 0.4 })], [6, t => ({ ...G.speak(t), yaw: 0.6 })], [at(1) + 1, G.folded], [at(1) + 17, t => ({ ...G.rest(t), r: { lift: 0.9, out: 0.4, bend: 0.4 }, yaw: -0.4, pitch: 0.2 })]]));
      wx.pose(cue(seconds, [[0, t => ({ ...G.speak(t), yaw: 1.2 })], [6, G.rest], [at(1) + 1, G.laugh]]));
      const t = seconds - at(1);
      walkAlong(pimp, t, 0, 3, [[tx + 5, tz + 3], [tx + 1.4, tz - 1.2]], G.laugh(t), 6);
      walkAlong(boy, t, 0, 3.6, [[tx + 5.6, tz + 3.4], [tx + 2, tz - 1.4], [tx, tz - 0.9]], G.rest(t), 6);
      if (t > 3) { face(pimp, tx - 0.55, tz - 0.55); pimp.pose(cue(t, [[3, tt => G.kneel(tt)], [5, G.salute], [8, G.laugh]])); }
      if (t > 3.6) {
        face(boy, tx - 0.55, tz - 0.55);
        boy.pose(cue(t, [[3.6, tt => G.kneel(tt)], [6, tt => ({ ...G.laugh(tt), sit: 0.3 })], [17, tt => ({ ...G.rest(tt), sit: 0.3, l: { lift: 1.1, out: 0.6, bend: 0.3 } })]]));
      }
      pimp.root.visible = boy.root.visible = seconds > at(1);
    };
  },
});
