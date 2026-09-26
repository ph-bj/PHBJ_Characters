import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, tone, VERMILION, walkAlong } from '../../../stage/figure';
import { gateLane, study, theatre } from '../../../stage/locations';
import { cart, horse } from '../../../stage/vehicles';
import { drum, hold } from '../../../stage/performance';
import { DUSK, blendEnv, lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 47. In Wang Xun's study Ziyu, intrigued at last, asks to be taken to a play.
 * At the Wang gate grooms lead out a harnessed cart and a saddled horse. Then the theatre: Ziyu steps
 * in to a roaring sea of people, and on stage the Three Kingdoms, generals with plumes and flags
 * wheeling to deafening gongs. They squeeze to the stage's edge, and all round them, instead of the
 * famous six, dark-faced escorts drift past, looking for patrons.
 */

export default defineScene({
  seed: 1047,
  build: (kit, story) => {
    const { groups: [room, lane, house], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: broaden my horizons --------------------------------------------------------------
    const s = study(kit, room);
    const zy = figure(kit, room, CAST.ziyu, -0.8, 0.2);
    const wx = figure(kit, room, CAST.wangxun, 0.8, 0.3);
    lights(kit, room, { key: [-4, 8, 6], intensity: 1 });
    const cam1 = move(kit, room, [[0, [0.2, 1.5, 3.2], [0, 1.4, 0.2]], [8, [-1.8, 1.55, 2.2], [0.6, 1.5, 0.3]]]);

    // --- Shot 2: off to the Lianjin -----------------------------------------------------------
    const g = gateLane(kit, lane);
    const c = cart(kit, lane, { x: -6, z: 3.6, rot: Math.PI / 2 });
    const mount = horse(kit, lane, { x: 4, z: 4.4, rot: -Math.PI / 2 });
    const grooms = [figure(kit, lane, CAST.servant, -3.8, 3), figure(kit, lane, CAST.servant, 2.6, 5)];
    const cousins = [figure(kit, lane, CAST.ziyu, -0.4, -0.6), figure(kit, lane, CAST.wangxun, 0.5, -0.8)];
    lights(kit, lane, { key: [8, 12, 10], intensity: 1 });
    const cam2 = move(kit, lane, [[at(1), [-2, 3.4, 11], [0, 1, 2]], [at(2), [3, 1.6, 8], [-1, 1.3, 2.5]]]);

    // --- Shots 3–4: a sea of people, the dark-faced escorts --------------------------------------
    const t3 = theatre(kit, house);
    const generals = [0, 1, 2].map(i => { const f = figure(kit, house, { ...CAST.official, headwear: 'helmet', face: 'coarse', beard: i ? 'long' : 'full', robe: [0x3f3a35, 0x6e675f, 0x2f2a26][i], girth: 1.3 }, -2 + i * 2, -8); f.root.position.y = 1.2; hold(kit, f, 'sword'); return f; });
    // Each general wears four pennants on his back (靠旗).
    generals.forEach(f => {
      for (let k = 0; k < 4; k++) {
        const fl = kit.group(f.torso, (k - 1.5) * 0.12, 0.45, -0.18);
        fl.rotation.z = (k - 1.5) * 0.25;
        kit.box(fl, tone(0x2f2a26), [0, 0.35, 0], [0.012, 0.7, 0.012]);
        kit.box(fl, k % 2 ? flat(VERMILION) : tone(0xe6e0d6), [0.12, 0.55, 0], [0.22, 0.3, 0.005]);
      }
    });
    const gongs = [drum(kit, house, -5.4, -7.4, 0.35), drum(kit, house, 5.4, -7.4, 0.35)];
    gongs.forEach(d => { d.group.position.y = 1.2; });
    const zyT = figure(kit, house, CAST.ziyu, -0.3, -2.6);
    const wxT = figure(kit, house, CAST.wangxun, 0.6, -2.4);
    const escorts = Array.from({ length: 7 }, (_, i) => figure(kit, house, { ...CAST.escort, robe: [0x3f3a35, 0x4a443e, 0x2f2a26][i % 3] }, -6 + i * 2, 4 - (i % 2) * 2));
    lights(kit, house, { key: [2, 12, 6], intensity: 0.9 });
    const cam3 = move(kit, house, [
      [at(2), [0, 2, 12], [0, 2, 0]],
      [at(2) + 6, [-1, 3.2, 1.8], [0, 2.4, -8]],
      [at(3), [1.8, 1.6, -0.6], [-0.2, 1.4, -2.4]],
    ]);
    const cam4 = move(kit, house, [
      [at(3), [1.8, 1.6, -0.6], [-0.2, 1.4, -2.4]],
      [36, [-2.4, 2.2, 3.6], [0.2, 1.4, -1.6]],
    ]);

    return (seconds: number, shot: number) => {
      show(Math.min(shot, 2));
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.03));
        cam1(seconds);
        s.update(seconds);
        face(zy, 0.8, 0.3); face(wx, -0.8, 0.2);
        wx.pose(cue(seconds, [[0, G.argue], [4, G.laugh]]));
        zy.pose(cue(seconds, [[0, G.think], [4, G.speak]]));
      } else if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.02));
        const t = seconds - at(1);
        cam2(seconds);
        g.gate.open(1);
        c.group.position.x = -6 + span(t, 0, 4) * 4.4;
        c.update(seconds, t < 4);
        mount.update(seconds, false);
        grooms.forEach((f, i) => { face(f, i ? 4 : c.group.position.x, 4); f.pose(G.hold(t)); f.root.position.x = i ? 2.6 : c.group.position.x + 2.2; });
        cousins.forEach((f, i) => walkAlong(f, t, 2, 6, [[f.root.position.x, -0.6], [i ? 2.8 : -1.4, 2.8]], G.folded(t), 5));
      } else {
        const t = seconds - at(2);
        kit.setEnv(blendEnv(INK_SKY.paper(0.025), DUSK(0.03), 0.2));
        t3.update(seconds);
        gongs.forEach((d, i) => d.update(seconds + i, 8));
        generals.forEach((f, i) => {
          f.root.position.x = -2 + i * 2 + Math.sin(t * 1.2 + i * 2) * 1.2;
          f.root.rotation.y = Math.sin(t * 1.5 + i) * 1.4;
          f.pose({ ...G.dance(t * 1.2, i), flutter: 0, bow: 0.1 });
        });
        face(zyT, 0, -8); face(wxT, 0, -8);
        if (shot === 2) {
          cam3(seconds);
          walkAlong(zyT, t, 0, 5, [[-0.2, 9], [-0.3, -2.6]], G.folded(t), 5);
          walkAlong(wxT, t, 0, 5, [[0.6, 9.4], [0.6, -2.4]], G.rest(t), 5);
          escorts.forEach(e => { e.root.visible = false; });
        } else {
          cam4(seconds);
          zyT.pose(cue(t, [[10, G.folded], [13, t2 => ({ ...G.folded(t2), yaw: -0.8 })]]));
          wxT.pose(cue(t, [[10, t2 => ({ ...G.rest(t2), yaw: 0.6 + Math.sin(t2) * 0.5 })]]));
          escorts.forEach((e, i) => {
            e.root.visible = true;
            walkAlong(e, t, 10 + i * 0.5, 20 + i * 0.5, i % 2 ? [[-7, 2 - i * 0.3], [0.4, -1.6], [7, 1]] : [[7, 3 - i * 0.2], [-0.2, -1.4], [-7, 0.6]], { ...G.rest(t), yaw: 0.6 }, 5);
          });
        }
      }
    };
  },
});
