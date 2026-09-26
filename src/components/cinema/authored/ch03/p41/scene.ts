import { defineScene } from '../../define';
import { CAST, G, cue, face, figure, tone } from '../../../stage/figure';
import { DARK, floor } from '../../../stage/architecture';
import { courtyard } from '../../../stage/locations';
import { specks } from '../../../stage/fx';
import { DUSK, blendEnv, lights, move, sets, span } from '../../../stage/direct';
import { PINCAI } from '../actors';
import { pincaiRoom } from '../places';

/*
 * Chapter 3, paragraph 41, the chapter's close. Yuanmao stands in the open storm door, arms flung
 * wide, and bellows; Pincai and Ziyu spin round. The camera slips past his shoulder and out into the
 * dark courtyard, where the first flakes are coming down, then thicker, soft and large as cotton,
 * whitening the flagstones and the rooftops as the camera rises over the house: what the disaster
 * is, the next chapter will tell.
 */

export default defineScene({
  seed: 3041,
  build: (kit, story) => {
    const { groups: [bedroom, yard], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    pincaiRoom(kit, bedroom);
    kit.box(bedroom, tone(DARK), [-1.1, 1.3, 3.5], [0.1, 2.6, 0.1]); kit.box(bedroom, tone(DARK), [0.1, 1.3, 3.5], [0.1, 2.6, 0.1]);
    const yuanmao = figure(kit, bedroom, CAST.yuanmao, -0.5, 3.2);
    const pincai = figure(kit, bedroom, PINCAI, 0.2, 0.6);
    const ziyu = figure(kit, bedroom, CAST.ziyu, 1.6, 1.2);
    lights(kit, bedroom, { key: [3, 4, 5], intensity: 0.8, fill: 0.35 });
    const cam1 = move(kit, bedroom, [[0, [0.8, 1.6, 0], [-0.5, 1.5, 3.2]], [at(1) - 3, [-0.2, 1.6, 1.6], [-0.5, 1.6, 4.5]]]);

    courtyard(kit, yard);
    const snowCover = floor(kit, yard, 40, 40, { kind: 'plain', shade: 0xf4f0e8, y: 0.03 });
    specks(kit, yard, { count: 4000, w: 30, h: 12, d: 30, fall: 0.8, wind: 0.3, swirl: 0.5, size: 0.06, y: 6 });
    lights(kit, yard, { key: [6, 10, 8], intensity: 0.5, fill: 0.3 });
    const cam2 = move(kit, yard, [[at(1), [-6, 1.7, -2], [0, 1.6, 2]], [36, [-4, 14, 16], [0, 0, -4]]]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(DUSK(0.04));
        cam1(seconds);
        face(yuanmao, 0.4, 0.8);
        yuanmao.pose(cue(seconds, [[0, t => ({ ...G.argue(t), mouth: 1 })], [5, t => ({ ...G.point(t, 'l'), mouth: 0.8, yaw: -0.8 })]]));
        face(pincai, -0.5, 3.2); pincai.pose(G.fume(seconds));
        face(ziyu, -0.5, 3.2); ziyu.pose({ ...G.rest(seconds), bow: -0.1 });
        return;
      }
      const u = span(seconds, at(1), 36);
      kit.setEnv(blendEnv(DUSK(0.04), DUSK(0.02), u));
      cam2(seconds);
      snowCover.visible = u > 0.2;
    };
  },
});
