import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { courtyard, study } from '../../../stage/locations';
import { stool, table, writing } from '../../../stage/props';
import { inkGather } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { sunFeatures, wangStudy } from '../wang';

/*
 * Chapter 2, paragraph 28. Siyuan stutters his objection, "b-b-brother", and the words burst from
 * him as ink, one syllable repeated and shrinking. Sihui lectures on erudition; Wang Xun mutters
 * about the washroom and escapes into the courtyard to double up laughing behind a pillar. Praised
 * by Zhongqing, Sihui glows, every pimple shining; mocked, he puffs up like a toad while Siyuan wipes
 * tears of laughter. Then Siyuan's story: in a schoolroom a teacher's couplet, and young Sihui's
 * brush dashing off his answer: 狗无恒心, "the dog has no constant heart".
 */

export default defineScene({
  seed: 2028,
  build: (kit, story) => {
    const { groups: [studySet, yard, school], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;

    // --- Shots 1 and 3: the study ---------------------------------------------------------------
    const s = wangStudy(kit, studySet);
    const [a, b, c, d] = s.seats;
    const zq = figure(kit, studySet, CAST.zhongqing, ...a);
    const wx = figure(kit, studySet, CAST.wangxun, ...b);
    const sihui = figure(kit, studySet, CAST.sihui, ...c);
    const siyuan = figure(kit, studySet, CAST.siyuan, ...d);
    sunFeatures(kit, sihui, siyuan);
    ['哥', '哥', '哥'].forEach((ch, i) => {
      const g = inkGather(kit, studySet, ch, { size: 0.5 - i * 0.12, at: 0.4 + i * 0.9, dur: 0.8, count: 600, spread: 0.3, scatter: 3.4, drop: 0.02 });
      g.points.position.set(d[0] * 0.6 + i * 0.35, 1.9, d[1] * 0.6);
    });
    const cam1 = move(kit, studySet, [[0, [d[0] * 2.2, 1.4, d[1] * 2.2 + 0.4], [d[0], 1.4, d[1]]], [at(1), [-2.4, 1.7, 2.6], [0, 1.2, 0]]]);
    const cam3 = move(kit, studySet, [[at(2), [c[0] * 2.4, 1.3, c[1] * 2.4], [c[0], 1.25, c[1]]], [at(2) + 5, [c[0] * 2.2, 1.35, c[1] * 2.2 + 0.4], [c[0], 1.25, c[1]]], [at(3), [0.2, 1.8, 3.2], [0, 1.2, 0]]]);

    // --- Shot 2 (latter half): Wang Xun flees to laugh ---------------------------------------------
    courtyard(kit, yard);
    const runaway = figure(kit, yard, CAST.wangxun, 8, -3);
    lights(kit, yard, { key: [6, 10, 8], intensity: 1 });
    const cam2 = move(kit, yard, [[0, [4.4, 1.6, 2.4], [7.6, 1.3, -3]], [3, [4, 1.5, 1.8], [7.4, 1.25, -3]]]);

    // --- Shot 4: the dog couplet ---------------------------------------------------------------------
    study(kit, school);
    const teacher = figure(kit, school, CAST.teacher, 0, -2.95);
    table(kit, school, { x: 0, z: 0.4, w: 0.8, d: 0.5, h: 0.6 });
    stool(kit, school, 0, 1.1);
    const boy = figure(kit, school, { ...CAST.sihui, height: 1.3 }, 0, 1.1);
    sunFeatures(kit, boy, undefined);
    boy.root.rotation.y = Math.PI;
    const upper = writing(kit, school, ['人能弘道'], { size: 0.3, paper: 0xf4f0e8, margin: 0.3, x: 1.3, y: 2.2, z: -3.9 });
    const answer = writing(kit, school, ['狗无恒心'], { size: 0.3, paper: 0xf4f0e8, margin: 0.3, x: -1.3, y: 2.2, z: -3.9 });
    const cam4 = move(kit, school, [[at(3), [1.6, 1.4, 3.4], [0, 1.4, -2]], [36, [0, 2, 1.6], [0, 2, -3.9]]]);

    return (seconds: number, shot: number) => {
      const fled = shot === 1 && seconds > at(1) + 4.2;
      show(shot === 3 ? 2 : fled ? 1 : 0);
      kit.setEnv(INK_SKY.paper(0.025));
      if (shot === 3) {
        cam4(seconds);
        const t = seconds - at(3);
        face(teacher, 0, 1); teacher.pose(cue(t, [[0, t2 => ({ ...G.point(t2), sit: 1 })], [5, t2 => ({ ...G.fume(t2), sit: 1 })]]));
        boy.pose(cue(t, [[0, t2 => ({ ...G.write(t2), sit: 1 })], [5, t2 => ({ ...G.laugh(t2), sit: 1 })]]));
        upper.set(span(t, 0.3, 1.5)); answer.set(span(t, 2, 4.5));
        return;
      }
      if (fled) {
        const t = seconds - at(1) - 4.2;
        cam2(t);
        walkAlong(runaway, t, 0, 1.2, [[8, -1], [7.6, -3]], G.rest(t), 8);
        if (t > 1.2) { face(runaway, 4, 2); runaway.pose(G.guffaw(t)); }
        return;
      }
      [zq, wx, sihui, siyuan].forEach(f => face(f, 0, 0));
      if (shot === 2) cam3(seconds); else cam1(seconds);
      siyuan.pose(cue(seconds, [[0, t => ({ ...G.argue(t), sit: 1, bow: Math.max(0, Math.sin(t * 8)) * 0.15 })], [at(1), t => ({ ...G.rest(t), sit: 1 })], [at(2) + 4, t => ({ ...G.guffaw(t), sit: 1 })], [at(2) + 6, t => ({ ...G.weep(t), sit: 1 })]]));
      sihui.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 1 })], [at(1), t => ({ ...G.argue(t), sit: 1 })], [at(2), t => ({ ...G.laugh(t), sit: 1 })], [at(2) + 4.5, t => ({ ...G.fume(t), sit: 1 })]]));
      sihui.head.scale.set(1 + span(seconds, at(2) + 4.5, at(2) + 6) * 0.18, 1, 1);
      sihui.blush(span(seconds, at(2), at(2) + 2));
      zq.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 1 })], [at(2), t => ({ ...G.salute(t, 0.2), sit: 1 })], [at(2) + 4, t => ({ ...G.shy(t), sit: 1 })]]));
      wx.root.visible = !(seconds > at(1) + 4 && seconds < at(2) + 1);
      wx.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 1 })], [at(1) + 3, G.speak]]));
    };
  },
});
