import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone } from '../../../stage/figure';
import { chamber } from '../../../stage/locations';
import { candle, cup, dishes, pot, stool, writing } from '../../../stage/props';
import { album } from '../../../stage/performance';
import { lights, move, sets, span } from '../../../stage/direct';
import { wangStudy } from '../wang';

/*
 * Chapter 2, paragraph 33. Evening in the study, the two friends in house robes over supper and wine
 * by candlelight. Wang Xun lays open an album, the Peerless Register (无双谱), whose woodblock heroes
 * are each one of a kind, and taps it: his brothers-in-law belong in it. Then, as he explains, the
 * camera slips away through the house to a far chamber, where the elder sister-in-law, nearly thirty
 * and unmarried, sits sewing by a lamp, her hair as white as the paper. Back at the table Zhongqing
 * leans in with his question about the fearsome mother-in-law.
 */

export default defineScene({
  seed: 2033,
  build: (kit, story) => {
    const { groups: [studySet, far], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    const s = wangStudy(kit, studySet);
    const [a, b] = s.seats;
    const houseRobe = { jacket: undefined, headwear: 'bare' as const };
    const wx = figure(kit, studySet, { ...CAST.wangxun, ...houseRobe, robe: 0xd6d0c6 }, ...a);
    const zq = figure(kit, studySet, { ...CAST.zhongqing, ...houseRobe, robe: 0xb9b2a8 }, ...b);
    dishes(kit, studySet, 0.8, [[-0.3, 0.2], [0.3, -0.2], [0, 0.35]], kit.rand);
    pot(kit, studySet, 0.25, 0.8, 0.25);
    cup(kit, studySet, a[0] * 0.55, 0.8, a[1] * 0.55); cup(kit, studySet, b[0] * 0.55, 0.8, b[1] * 0.55);
    candle(kit, studySet, -0.2, 0.8, -0.3, 2);
    const book = album(kit, studySet, { x: 0, y: 0.81, z: 0.1, w: 0.3, d: 0.4 });
    book.group.rotation.y = Math.atan2(a[0], a[1]);
    writing(kit, book.left, ['无双谱'], { size: 0.07, margin: 0.02, y: 0.004 }).mesh.rotation.x = -Math.PI / 2;
    // A woodblock hero on the right-hand page: a few strokes of a figure.
    const hero = kit.group(book.right, 0, 0.004, 0);
    for (const [w, h, x, z] of [[0.05, 0.16, 0, 0], [0.12, 0.02, 0, -0.05], [0.04, 0.04, 0, -0.1]]) kit.mesh(new THREE.PlaneGeometry(w, h).rotateX(-Math.PI / 2), tone(0x3f3a35), hero, x, 0, z);
    lights(kit, studySet, { key: [-2, 5, 4], intensity: 0.7, fill: 0.3 });
    const cam1 = move(kit, studySet, [
      [0, [2.8, 2.2, 3.4], [0, 1, 0]],
      [5, [0.9, 1.6, 1.4], [0, 0.9, 0.1]],
      [at(1), [0.5, 1.4, 1.2], [0, 0.85, 0.1]],
    ]);
    const cam3 = move(kit, studySet, [[at(2), [-2.2, 1.35, 1.8], [0, 1.1, 0]], [36, [-1.4, 1.3, 0.9], [b[0] * 0.3, 1.15, b[1] * 0.3]]]);

    // --- Shot 2: the white-haired sister-in-law ------------------------------------------------------
    chamber(kit, far);
    const sister = figure(kit, far, { ...CAST.lady, white: true, rouge: false, robe: 0xe6e0d6, jacket: 0xc9c2b8, height: 1.6 }, 1.4, -1.4);
    stool(kit, far, 1.4, -1.4);
    candle(kit, far, 1.15, 0.76, -0.75, 2.2);
    kit.box(far, tone(0x5a534c), [1.4, 0.38, -0.8], [0.7, 0.76, 0.45]);
    lights(kit, far, { key: [-3, 5, 5], intensity: 0.6, fill: 0.25 });
    const cam2 = move(kit, far, [[at(1), [-0.8, 1.7, 2.6], [1.3, 1.1, -1.2]], [at(2), [1.1, 1.3, 0.7], [1.4, 1.2, -1.4]]]);

    return (seconds: number, shot: number) => {
      show(shot === 1 ? 1 : 0);
      if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.05));
        cam2(seconds);
        face(sister, 1.4, 0);
        sister.pose({ ...G.write(seconds), sit: 1, pitch: 0.5 });
        return;
      }
      kit.setEnv(INK_SKY.paper(0.04));
      if (shot === 0) cam1(seconds); else cam3(seconds);
      book.turn(span(seconds, 5, 7));
      face(wx, 0, 0); face(zq, 0, 0);
      wx.pose(cue(seconds, [[0, t => ({ ...G.drink(t), sit: 1 })], [5, t => ({ ...G.point(t), sit: 1, bow: 0.2 })], [8, t => ({ ...G.laugh(t), sit: 1 })], [at(2), t => ({ ...G.rest(t), sit: 1 })], [at(2) + 8, t => ({ ...G.speak(t), sit: 1 })]]));
      zq.pose(cue(seconds, [[0, t => ({ ...G.speak(t), sit: 1 })], [5, t => ({ ...G.read(t), sit: 1 })], [9, t => ({ ...G.laugh(t), sit: 1 })], [at(2), t => ({ ...G.whisper(t), sit: 1 })]]));
    };
  },
});
