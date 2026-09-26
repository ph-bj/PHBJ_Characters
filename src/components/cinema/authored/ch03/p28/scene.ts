import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { gate } from '../../../stage/architecture';
import { cloudBank, ground, range } from '../../../stage/nature';
import { writing } from '../../../stage/props';
import { hold, moon } from '../../../stage/performance';
import { mist, petals } from '../../../stage/fx';
import { aim, lights, move, sets } from '../../../stage/direct';
import { GUI_FEN } from '../actors';
import { inn } from '../inn';

/*
 * Chapter 3, paragraph 28. Fu talks of being born in the Jiangning yamen. Gui's career, as he sees
 * it: a short flagged road across a bare plain to a single gate with two slips beside it, 同知 and
 * 通判, and no road beyond. "And me?" asks Rongguan; Pincai sends him to the Moon Palace, and there
 * he floats among clouds before a vast pale moon, sleeves drifting, petals falling. Laughing,
 * Rongguan pours Pincai a brimming penalty cup, and Fu, wagging a finger, lectures on bullies.
 */

export default defineScene({
  seed: 3028,
  build: (kit, story) => {
    const { groups: [upstairs, road, sky], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;
    const I = inn(kit, upstairs);
    I.setTable(0, rand); I.setTable(1, rand);
    const cup = hold(kit, I.who('rong'), 'cup');
    const L = I.left;
    const cam1 = move(kit, upstairs, [[0, [L.fu.x + 1.2, 1.5, L.fu.z + 2], [L.fu.x, 1.3, L.fu.z]], [at(1), [L.fu.x - 0.4, 1.4, L.fu.z + 1.6], [L.fu.x, 1.3, L.fu.z]]]);

    // --- Gui's road --------------------------------------------------------------------------------------
    ground(kit, road, { w: 300, d: 300, height: 1, flatten: 30, shade: 0xd9d3c9 });
    for (let k = 0; k < 18; k++) kit.box(road, tone(0xe6e0d6), [0, 0.02, 6 - k * 0.8], [1.4, 0.04, 0.7]);
    gate(kit, road, { z: -9, w: 2.6, h: 3, wallSpan: 6 });
    [['同知', -2.4], ['通判', 2.4]].forEach(([t, x]) => writing(kit, road, t as string, { size: 0.35, paper: 0xf4f0e8, margin: 0.25, x: x as number, y: 2, z: -8.6 }));
    range(kit, road, { z: -120, span: 400, height: 24, shade: 0xc9c2b7, seed: 328 });
    const walker = figure(kit, road, GUI_FEN, 0, 6);
    lights(kit, road, { key: [5, 10, 10], intensity: 1 });
    const cam2 = move(kit, road, [[at(1), [2, 1.8, 10], [0, 1.2, 2]], [at(2), [0.4, 2.4, -2], [0, 1.6, -9]]]);

    // --- The Moon Palace ------------------------------------------------------------------------------------
    moon(kit, sky, 0, 6, -30, 12);
    for (let k = 0; k < 8; k++) cloudBank(kit, sky, -16 + k * 4.5, -1 + (k % 3) * 0.6, -4 - (k % 2) * 4, { w: 6, puffs: 8, rand, size: 0.8 });
    const immortal = figure(kit, sky, { ...CAST.dan, robe: 0xf4f0e8, jacket: 0xe6e0d6 }, 0, 0);
    const fall = petals(kit, sky, { count: 80, w: 10, h: 6, d: 6, y: 0, red: false, speed: 0.2, wind: 0.2 });
    const haze = mist(kit, sky, { count: 6, w: 30, y: -2, d: 10, z: -6, size: 10, opacity: 0.5 });
    lights(kit, sky, { key: [0, 6, 10], intensity: 1 });

    return (seconds: number, shot: number) => {
      show(shot === 1 ? 1 : shot === 2 ? 2 : 0);
      if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam2(seconds);
        walkAlong(walker, seconds, at(1), at(2) - 1, [[0, 6], [0, -7.6]], G.behind(seconds), 4);
        if (seconds > at(2) - 1) { face(walker, 0, -9); walker.pose(G.bow(seconds, 0.3)); }
        return;
      }
      if (shot === 2) {
        kit.setEnv(INK_SKY.moonlit([0, 0.2, -1], 0.02));
        const t = seconds - at(2);
        aim(kit, sky, [Math.sin(t * 0.15) * 2, 1 + t * 0.05, 6 - t * 0.2], [0, 1.4 + t * 0.05, 0], 0.3);
        fall.update(seconds); haze.update(seconds);
        immortal.root.position.y = 0.4 + Math.sin(t * 0.8) * 0.15 + t * 0.06;
        face(immortal, 0, 5); immortal.pose(G.dance(t * 0.6, 2));
        return;
      }
      kit.setEnv(INK_SKY.paper(0.02));
      I.sit('fu', cue(seconds, [[0, G.speak], [at(3), G.laugh], [at(3) + 4.5, t => ({ ...G.point(t), mouth: 0.6 })]]));
      I.sit('gui', G.rest(seconds));
      I.sit('pincai', cue(seconds, [[0, G.rest], [at(3), t => ({ ...G.drink(t) })], [at(3) + 3, G.laugh]]));
      cup.visible = seconds > at(3) && seconds < at(3) + 3;
      I.sit('rong', cue(seconds, [[0, G.laugh], [at(3), t => ({ ...G.offer(t), yaw: 0.6 })], [at(3) + 3, G.laugh]]));
      (['xi', 'chunlan', 'a', 'b', 'c'] as const).forEach((w, k) => I.sit(w, G.laugh(seconds + k)));
      if (shot === 0) cam1(seconds);
      else aim(kit, upstairs, [L.rong.x + 1.2, 1.4, L.rong.z + 1.6], [(L.rong.x + L.pincai.x) / 2, 1.25, (L.rong.z + L.pincai.z) / 2], 0.3);
    };
  },
});
