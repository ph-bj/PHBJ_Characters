import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure } from '../../../stage/figure';
import { hall as building, plaque } from '../../../stage/architecture';
import { cloudBank, ground, range, water } from '../../../stage/nature';
import { censer, writing } from '../../../stage/props';
import { radiance, smoke, specks } from '../../../stage/fx';
import { aim, lights, move, orbit, sets, span } from '../../../stage/direct';
import { inn } from '../inn';

/*
 * Chapter 3, paragraph 27. Gui leans over to explain the question, and Fu, beaming, gives his
 * father's name. Pincai rises and the film follows his eloquence to Nanjing: a shrine of eminent
 * officials under its board, townsfolk bowing before the old governor's tablet through incense
 * smoke. Then over flooded fields thick with locusts, a robed figure appears in the clouds in rings
 * of radiance, and the swarm thins and scatters. Back upstairs Pincai bows low across the table and
 * Fu the Third, crimson and delighted, cannot find a word.
 */

export default defineScene({
  seed: 3027,
  build: (kit, story) => {
    const { groups: [upstairs, shrine, fields], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;
    const I = inn(kit, upstairs);
    I.setTable(0, rand); I.setTable(1, rand);
    const [fx, fz] = [I.left.fu.x, I.left.fu.z];
    const [gx, gz] = [I.left.gui.x, I.left.gui.z];

    // --- The shrine ---------------------------------------------------------------------------------
    ground(kit, shrine, { w: 200, d: 200, height: 0.5, flatten: 30, shade: 0xd9d3c9 });
    building(kit, shrine, { w: 12, d: 6, h: 3.6, z: -4, doors: false });
    const board = plaque(kit, shrine, 3, 0.9, 0, 4.4, -0.9);
    writing(kit, board, '名宦祠', { size: 0.52, margin: 0.1, z: 0.07 });
    const tablet = writing(kit, shrine, '富公安世之位', { size: 0.2, paper: 0xe6e0d6, margin: 0.2, x: 0, y: 1.9, z: -1.6 });
    censer(kit, shrine, 0, 0.45, 0, 1.6);
    smoke(kit, shrine, 0, 1, 0, { h: 2.4, count: 120, size: 0.09 });
    const folk = Array.from({ length: 12 }, (_, k) => figure(kit, shrine, [CAST.merchant, CAST.servant, CAST.elder, CAST.lady, CAST.page][k % 5], (k % 4 - 1.5) * 1.3, 2 + Math.floor(k / 4) * 1.3));
    lights(kit, shrine, { key: [6, 10, 10], intensity: 1 });
    const cam2 = move(kit, shrine, [[at(1), [4, 1.6, 9], [0, 1.4, 0]], [at(2), [-1.6, 2.2, 5], [0, 2, -1.6]]]);

    // --- The spirit over the fields -------------------------------------------------------------------
    ground(kit, fields, { w: 300, d: 300, height: 2, flatten: 20, shade: 0xd6d0c6 });
    water(kit, fields, { w: 60, d: 30, z: -6, y: 0.2 });
    range(kit, fields, { z: -120, span: 400, height: 30, shade: 0xc9c2b7, seed: 327 });
    for (let k = 0; k < 6; k++) cloudBank(kit, fields, -18 + k * 7, 13 + (k % 2), -14, { w: 8, puffs: 8, rand, size: 0.9 });
    const locusts = specks(kit, fields, { count: 2600, w: 40, h: 8, d: 30, fall: 0.1, wind: 3, swirl: 2, size: 0.05, dark: true, y: 4, z: -4 });
    const spirit = figure(kit, fields, { ...CAST.deity, headwear: 'official' }, 0, -12);
    spirit.root.position.y = 11;
    const glow = radiance(kit, fields, 0, 12, -12.5, { rings: 7, max: 5 });
    const cam3 = orbit(kit, fields, [0, 6, -10], { r: 22, y: 3, a0: -0.3, a1: 0.25, t0: at(2), t1: at(3), lookY: 8 });

    return (seconds: number, shot: number) => {
      show(shot === 1 ? 1 : shot === 2 ? 2 : 0);
      if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam2(seconds);
        tablet.set(span(seconds, at(1) + 1, at(1) + 3));
        folk.forEach((f, k) => { face(f, 0, -1.6); f.pose(G.kowtow(seconds + k * 0.3, 0.9)); });
        return;
      }
      if (shot === 2) {
        kit.setEnv(INK_SKY.paper(0.015));
        cam3(seconds);
        const t = seconds - at(2);
        locusts.points.visible = t < 8;
        spirit.fade(span(t, 1, 3));
        face(spirit, 0, 20); spirit.pose({ ...G.offer(t), bow: 0, l: { lift: 1.6, out: 0.8, bend: 0.2 }, r: { lift: 1.6, out: 0.8, bend: 0.2 } });
        glow.update(seconds);
        return;
      }
      kit.setEnv(INK_SKY.paper(0.02));
      const rising = shot === 3;
      I.sit('fu', cue(seconds, [[0, t => ({ ...G.rest(t), yaw: 0.4 })], [3.5, G.speak], [at(3), t => ({ ...G.laugh(t), pitch: -0.1 })]]));
      I.who('fu').blush(span(seconds, at(3) + 1, at(3) + 3));
      I.sit('gui', cue(seconds, [[0, t => ({ ...G.whisper(t), yaw: -0.6 })], [3.5, G.rest]]));
      I.sit('rong', G.rest(seconds));
      if (rising) { const p = I.who('pincai'); p.root.position.set(I.left.pincai.x, 0, I.left.pincai.z); face(p, fx, fz); p.pose(cue(seconds, [[at(3), t => G.salute(t, 0.5)], [at(3) + 3, G.speak]])); }
      else I.sit('pincai', G.rest(seconds));
      (['xi', 'chunlan', 'a', 'b', 'c'] as const).forEach((w, k) => I.sit(w, k ? G.laugh(seconds + k) : G.toast(seconds)));
      if (shot === 0) aim(kit, upstairs, [(fx + gx) / 2 + 0.2, 1.45, fz + 1.8], [(fx + gx) / 2, 1.25, (fz + gz) / 2], 0.3);
      else aim(kit, upstairs, [fx - 0.9 + (seconds - at(3)) * 0.05, 1.45, fz + 2], [fx + 0.3, 1.3, fz], 0.3);
    };
  },
});
