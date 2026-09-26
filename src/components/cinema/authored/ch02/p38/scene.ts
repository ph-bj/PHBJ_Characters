import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue } from '../../../stage/figure';
import { coins, cup } from '../../../stage/props';
import { inkGather, petals } from '../../../stage/fx';
import { hold } from '../../../stage/performance';
import { move, sets, span } from '../../../stage/direct';
import { feast } from '../banquet';

/*
 * Chapter 2, paragraph 38. Seen from straight above, the table turns slowly like a dish of its own:
 * six diners round the ring of plates, and in the middle Guibao's fist opens and the coins spill. The
 * cup falls to Wenhui, who tosses it off in one gulp, and the camera sinks from the ceiling to find
 * Lianggong wagging a finger: that one got off lightly. Then over Guibao's shoulder, as he leans to
 * Zhou for the rules of the fifth and sixth cups: two cups stand ready in the middle of the table,
 * Zhou strokes his beard, and between them the character 花 slowly gathers, a few petals drifting.
 */

export default defineScene({
  seed: 2038,
  build: (kit, story) => {
    const { groups: [hallSet], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;

    const f = feast(kit, hallSet);
    const { wenhui } = f.who;
    const spill = coins(kit, hallSet, [[0.02, 0.84, 0.05], [-0.06, 0.84, 0.1], [0.09, 0.84, -0.03]]);
    const held = hold(kit, wenhui, 'cup');
    const pair = [cup(kit, hallSet, -0.08, 0.83, -0.02, 1.1), cup(kit, hallSet, 0.08, 0.83, 0.02, 1.1)];
    const hua = inkGather(kit, hallSet, '花', { size: 0.5, at: at(1) + 6, dur: 6, count: 1400, spread: 1.2, scatter: 5 });
    const drift = petals(kit, hallSet, { count: 40, w: 3, h: 2, d: 3, y: 0.9, speed: 0.15, wind: 0.1 });
    const cam1 = move(kit, hallSet, [[0, [0.01, 4.4, 0.02], [0, 0.8, 0]], [9, [0.2, 3.8, 0.3], [0, 0.8, 0]], [at(1), [-0.3, 1.5, 0.3], [-1.75, 1.3, 0]]], { breathe: 0 });

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.025));
      f.hall.update(seconds);
      drift.update(seconds);
      // The whole table turns under the overhead camera, by rotating the camera's up vector.
      spill.forEach((c, k) => { c.visible = seconds > 2 + k * 0.1 && shot === 0; c.position.y = 0.84 + Math.max(0, 0.2 - (seconds - 2 - k * 0.1) * 0.6); });
      held.visible = seconds > 4 && seconds < 9;
      pair.forEach((c, k) => { c.visible = shot === 1; c.position.y = 0.83 + (1 - span(seconds, at(1) + 1 + k * 0.5, at(1) + 2 + k * 0.5)) * 0.3; });
      hua.points.position.set(0, 1.5, 0);
      f.sit('guibao', cue(seconds, [[0, t => ({ ...G.offer(t), bow: 0.4 })], [3, G.laugh], [6, G.rest], [at(1), t => ({ ...G.speak(t), bow: 0.3, yaw: -0.3 })], [at(1) + 6, G.rest]]));
      f.sit('wenhui', cue(seconds, [[0, G.rest], [4, G.drink], [6.5, G.laugh], [9, G.rest]]));
      f.sit('lg', cue(seconds, [[0, G.rest], [8, t => ({ ...G.point(t), lean: 0.1 })], [12, t => ({ ...G.speak(t), mouth: 0.8 })], [at(1), G.rest]]));
      f.sit('yang', cue(seconds, [[0, G.rest], [9, G.laugh], [at(1), G.rest]]));
      f.sit('lu', cue(seconds, [[0, G.rest], [9.5, G.guffaw], [14, G.rest]]));
      f.sit('zhou', cue(seconds, [[0, G.drink], [9, G.laugh], [at(1), G.rest], [at(1) + 4, G.stroke], [at(1) + 12, G.think]]));
      if (shot === 0) {
        const up = kit.camera.up;
        const a = seconds * 0.12;
        up.set(Math.sin(a), seconds < 9 ? 0 : span(seconds, 9, 14), Math.cos(a)).normalize();
        cam1(seconds);
        return;
      }
      kit.camera.up.set(0, 1, 0);
      f.shoot('zhou', { over: 'guibao', side: 0.25 - span(seconds, at(1), 36) * 0.2, lift: 0.15, look: -0.3 + span(seconds, at(1), 36) * 0.3 });
    };
  },
});
