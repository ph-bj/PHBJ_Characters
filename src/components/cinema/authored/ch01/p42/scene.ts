import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { cityscape, courtyard, study } from '../../../stage/locations';
import { cup, dishes, pot, table } from '../../../stage/props';
import { specks } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 42. Two days later, a frosty morning: the breakfast things still on the table
 * in the study, Ziyu bows to Teacher Li and asks for half a day's leave, and the old man nods. Then
 * Ziyu crosses the courtyard with a page, pigeons wheeling up from the eaves, and the camera rises
 * above the roofs until the whole winter capital lies below, the Western Hills beyond.
 */

export default defineScene({
  seed: 1042,
  build: (kit, story) => {
    const { groups: [room, out], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: asking for leave ---------------------------------------------------------------------
    const s = study(kit, room);
    table(kit, room, { x: -3.6, z: -0.6, w: 0.6, d: 0.6, h: 0.75 });
    dishes(kit, room, 0.75, [[-3.7, -0.7], [-3.5, -0.45]], kit.rand);
    cup(kit, room, -3.4, 0.75, -0.8, 1.2); pot(kit, room, -3.8, 0.75, -0.4, 0.8);
    const tutor = figure(kit, room, CAST.teacher, ...s.seats.desk);
    const ziyu = figure(kit, room, CAST.ziyu, 0, -0.9);
    lights(kit, room, { key: [-8, 5, 6], intensity: 1 });
    const cam1 = move(kit, room, [
      [0, [-3, 1.4, 2.6], [0, 1.2, -2]],
      [8, [2.2, 1.5, 1.4], [0, 1.3, -1.8]],
      [16, [0.9, 1.4, -0.2], [0, 1.5, -2.8]],
    ]);

    // --- Shot 2: out to visit his friends --------------------------------------------------------
    courtyard(kit, out);
    const town = cityscape(kit, out, { z: -40, snow: true });
    town.position.y = -0.05;
    const walker = figure(kit, out, CAST.ziyu, -0.4, -8);
    const page = figure(kit, out, CAST.page, 0.6, -8.4);
    const birds = specks(kit, out, { count: 40, w: 16, h: 6, d: 10, fall: -0.4, wind: 1.2, swirl: 2, size: 0.1, dark: true, y: 6 });
    lights(kit, out, { key: [10, 12, 8], intensity: 1 });
    const cam2 = move(kit, out, [
      [at(1), [2.4, 1.5, 1], [0, 1.4, -6]],
      [at(1) + 6, [3, 3, 8], [0, 1.4, 2]],
      [at(1) + 13, [0, 30, 40], [0, 0, -60]],
      [36, [0, 60, 90], [0, 10, -200]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.03));
        cam1(seconds);
        s.update(seconds);
        face(ziyu, 0, -2.95);
        ziyu.pose(cue(seconds, [[0, G.folded], [3, t => G.salute(t, 0.35)], [7, G.speak], [11, t => G.bow(t, 0.6)]]));
        tutor.pose(cue(seconds, [[0, t => ({ ...G.read(t), sit: 1 })], [5, t => ({ ...G.stroke(t), sit: 1 })], [10, t => ({ ...G.rest(t), sit: 1, pitch: 0.3 + Math.sin(t * 4) * 0.08 })]]));
      } else {
        kit.setEnv(INK_SKY.paper(0.004 + (1 - span(seconds - at(1), 8, 14)) * 0.02));
        const t = seconds - at(1);
        cam2(seconds);
        birds.uniforms.uSpeed.value = 1;
        walkAlong(walker, t, 0, 9, [[-0.4, -8], [-0.3, 0], [0, 6.5]], G.folded(t), 5);
        walkAlong(page, t, 0, 9, [[0.6, -8.4], [0.7, -0.4], [0.9, 6.1]], G.hold(t), 5);
      }
    };
  },
});
