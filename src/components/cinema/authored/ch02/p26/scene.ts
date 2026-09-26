import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone } from '../../../stage/figure';
import { book, writing } from '../../../stage/props';
import { inkGather } from '../../../stage/fx';
import { move, sets, span } from '../../../stage/direct';
import { GAO_PIN } from '../actors';
import { sunFeatures, wangStudy } from '../wang';

/*
 * Chapter 2, paragraph 26. Sihui, twenty-six and still short of the Five Classics, holds forth, and
 * archaic particles tumble out of his mouth as ink (之乎者也) and hang about his head. Gao Pin of Suzhou
 * leans on the shelf grinning and names him: a slip unrolls, "The Worm-Eaten Thousand Character
 * Classic", its paper full of holes. Then the brother, Siyuan, buck-toothed, one eyelid hitched up as
 * if circled in vermilion, fights through a stammer, and Gao Pin's second slip drops beside him.
 */

export default defineScene({
  seed: 2026,
  build: (kit, story) => {
    const { groups: [studySet], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;

    wangStudy(kit, studySet);
    const sihui = figure(kit, studySet, CAST.sihui, -0.6, 1.3);
    const siyuan = figure(kit, studySet, CAST.siyuan, 0.9, 1.4);
    sunFeatures(kit, sihui, siyuan);
    const gao = figure(kit, studySet, GAO_PIN, 3, -2.6);
    const tome = book(kit, sihui.hands.r, { w: 0.16, d: 0.22 });
    tome.group.rotation.set(0.9, 0, -1.3);
    ['之', '乎', '者', '也'].forEach((c, i) => {
      const g = inkGather(kit, studySet, c, { size: 0.45, at: 1 + i * 1.8, dur: 1.5, count: 700, spread: 0.6, scatter: 3 + i * 1.8, drop: 0.02 });
      g.points.position.set(-0.6 + (i - 1.5) * 0.4, 2.3 + (i % 2) * 0.2, 1.3);
    });
    // Gao Pin's nicknames on hanging slips: the first riddled with wormholes.
    const slip1 = kit.group(studySet, -1.8, 3.4, 0.6);
    kit.mesh(new THREE.PlaneGeometry(0.6, 2.2), tone(0xf0ebe2, true), slip1, 0, -1.1, 0);
    for (let k = 0; k < 9; k++) kit.mesh(new THREE.CircleGeometry(0.025 + (k % 3) * 0.01, 10), tone(0x6e675f), slip1, (k % 3 - 1) * 0.15, -0.3 - k * 0.2, 0.002);
    const name1 = writing(kit, slip1, '虫蛀千字文', { size: 0.3, margin: 0.1, y: -1.1, z: 0.004 });
    const slip2 = kit.group(studySet, 2.4, 3.4, 0.9);
    kit.mesh(new THREE.PlaneGeometry(0.6, 2.4), tone(0xf0ebe2, true), slip2, 0, -1.2, 0);
    const name2 = writing(kit, slip2, '迭韵双声谱', { size: 0.3, margin: 0.1, y: -1.2, z: 0.004 });
    const cam = move(kit, studySet, [
      [0, [-1.8, 1.7, 3.6], [-0.6, 1.7, 1.3]],
      [at(1), [0.6, 2, 4.6], [0.2, 1.8, 0]],
      [at(1) + 6, [-1.4, 2.2, 3.2], [-1.8, 2.3, 0.6]],
      [at(2), [1.6, 1.6, 3.2], [0.9, 1.5, 1.4]],
      [at(2) + 6, [1.2, 1.55, 2.4], [0.9, 1.55, 1.4]],
      [36, [2.6, 2.1, 4.4], [2, 2, 0.8]],
    ]);

    return (seconds: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.025));
      cam(seconds);
      face(sihui, 1, 3); face(siyuan, -0.6, 2.6); face(gao, 0, 1.4);
      sihui.pose(cue(seconds, [[0, G.argue], [at(1), G.read], [at(2), G.fume]]));
      tome.group.visible = seconds > at(1) - 1 && seconds < at(2);
      siyuan.pose(cue(seconds, [[0, G.rest], [at(2), t => ({ ...G.argue(t), bow: Math.max(0, Math.sin(t * 7)) * 0.2 })]]));
      gao.pose(cue(seconds, [[0, G.behind], [at(1), G.laugh], [at(1) + 3, G.point], [at(2) + 8, G.guffaw]]));
      slip1.position.y = 5.6 - span(seconds, at(1) + 1, at(1) + 2.4) * 2.2;
      name1.set(span(seconds, at(1) + 2, at(1) + 4));
      slip2.position.y = 5.8 - span(seconds, at(2) + 8, at(2) + 9.4) * 2.4;
      name2.set(span(seconds, at(2) + 9, at(2) + 11));
    };
  },
});
