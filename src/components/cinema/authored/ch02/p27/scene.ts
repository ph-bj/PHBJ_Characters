import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { cloudBank, ground, range, bareTree } from '../../../stage/nature';
import { mist } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { sunFeatures, wangStudy } from '../wang';

/*
 * Chapter 2, paragraph 27. Zhongqing, caught in the study before he can slip away, sits down with
 * Wang Xun and the brothers. Sihui rises, straightens his robe with great ceremony, and declaims:
 * "The heavens are clear and the air is crisp..." and his two friends bite their lips. As he likens
 * Wang Xun's return to a weary bird, the camera takes him literally: a tired little bird flaps home
 * across an evening sky to a bare branch, and an archer below lowers his bow.
 */

export default defineScene({
  seed: 2027,
  build: (kit, story) => {
    const { groups: [studySet, sky], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    const s = wangStudy(kit, studySet);
    const [a, b, c, d] = s.seats;
    const zq = figure(kit, studySet, CAST.zhongqing, 3, 3);
    const wx = figure(kit, studySet, CAST.wangxun, ...b);
    const sihui = figure(kit, studySet, CAST.sihui, ...c);
    const siyuan = figure(kit, studySet, CAST.siyuan, ...d);
    sunFeatures(kit, sihui, siyuan);
    const cam1 = move(kit, studySet, [
      [0, [3.4, 1.7, 4.6], [0, 1.3, 0]],
      [at(1), [-2.6, 1.6, 2.4], [0.4, 1.3, 0]],
      [at(1) + 7, [c[0] * 2.6 - 0.6, 1.6, c[1] * 2.6], [c[0], 1.5, c[1]]],
      [at(2), [0.6, 1.6, 2.8], [0, 1.4, 0]],
    ]);

    // --- The weary bird knows to return ----------------------------------------------------------
    ground(kit, sky, { w: 400, d: 400, height: 3, flatten: 10, shade: 0xd6d0c6 });
    range(kit, sky, { z: -100, span: 400, height: 30, shade: 0xc9c2b7, seed: 227 });
    bareTree(kit, sky, 3, -2, 6, rand);
    for (let k = 0; k < 5; k++) cloudBank(kit, sky, -20 + k * 10, 14 + (k % 2) * 2, -30, { w: 10, puffs: 8, rand, size: 0.9 });
    const bird = kit.group(sky, 0, 0, 0);
    kit.mesh(new THREE.SphereGeometry(0.12, 10, 8), tone(0x3f3a35), bird).scale.set(1, 0.8, 1.6);
    const wings = [-1, 1].map(side => { const w = kit.group(bird, side * 0.08, 0.02, 0); kit.mesh(new THREE.PlaneGeometry(0.4, 0.14).translate(side * 0.2, 0, 0), tone(0x3f3a35, true), w); return w; });
    const archer = figure(kit, sky, { ...CAST.escort, headwear: 'cap' }, -3, 3);
    const bow = kit.mesh(new THREE.TorusGeometry(0.5, 0.015, 4, 20, Math.PI), tone(0x2f2a26), archer.hands.l, 0, 0, 0.1);
    bow.rotation.z = Math.PI / 2;
    const haze = mist(kit, sky, { count: 8, w: 60, y: 1, d: 30, z: -16, size: 12, opacity: 0.6 });
    lights(kit, sky, { key: [-10, 8, -10], intensity: 0.9, fill: 0.5 });
    const cam2 = move(kit, sky, [[at(2), [-6, 2, 9], [-2, 5, -10]], [36, [-4, 2.6, 7], [2, 4.6, -2]]]);

    return (seconds: number, shot: number) => {
      show(shot === 2 && seconds > at(2) + 1 ? 1 : 0);
      kit.setEnv(INK_SKY.paper(0.025));
      if (!(shot === 2 && seconds > at(2) + 1)) {
        cam1(seconds);
        walkAlong(zq, seconds, 0.5, 4, [[3, 3], [a[0] + 0.3, a[1] + 0.8], a], G.folded(seconds), 5);
        if (seconds > 4) { face(zq, 0, 0); zq.pose(cue(seconds, [[4, t => ({ ...G.rest(t), sit: 1 })], [at(1) + 5, t => ({ ...G.shy(t), sit: 1 })]])); }
        face(wx, 0, 0); wx.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 1 })], [at(1) + 6, t => ({ ...G.laugh(t), sit: 1, bow: 0.3 })]]));
        face(siyuan, 0, 0); siyuan.pose({ ...G.rest(seconds), sit: 1 });
        const standing = seconds > at(1);
        face(sihui, a[0], a[1]);
        sihui.pose(standing ? cue(seconds, [[at(1), t => ({ ...G.rest(t), l: { lift: 0.4, out: 0.5, bend: 1.2 }, r: { lift: 0.4, out: 0.5, bend: 1.2 } })], [at(1) + 2, t => G.salute(t, 0.3)], [at(1) + 4, t => ({ ...G.speak(t), pitch: -0.3 })]]) : { ...G.rest(seconds), sit: 1 });
      } else {
        cam2(seconds);
        haze.update(seconds);
        const u = span(seconds, at(2) + 1, 35);
        bird.position.set(-14 + u * 17, 8 - u * 4.4 + Math.sin(seconds * 4) * 0.2, -14 + u * 12);
        bird.rotation.y = 0.9;
        wings.forEach((w, i) => { w.rotation.z = (i ? -1 : 1) * Math.sin(seconds * (u < 0.97 ? 9 : 0)) * 0.7; });
        face(archer, bird.position.x, bird.position.z);
        archer.pose(cue(seconds, [[at(2), t => ({ ...G.point(t, 'l'), pitch: -0.5, r: { lift: 1.6, out: 0.2, bend: 1.4 } })], [at(2) + 6, t => ({ ...G.rest(t), pitch: -0.3 })]]));
      }
    };
  },
});
