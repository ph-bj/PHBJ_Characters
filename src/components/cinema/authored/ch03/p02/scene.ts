import * as THREE from 'three';
import { defineScene } from '../../define';
import { G, cue, face, figure, tone } from '../../../stage/figure';
import { cup, pot } from '../../../stage/props';
import { smoke } from '../../../stage/fx';
import { blendEnv, move, orbit, sets, span } from '../../../stage/direct';
import { INK_SKY } from '../../../cinemaKit';
import { PINCAI, XU_SHUN } from '../actors';
import { accountsRoom } from '../places';

/*
 * Chapter 3, paragraph 2. The meal cleared, Xu Shun brews strong
 * tea: in close-up the kettle tips, a dark thread of tea runs into the lidded bowl, and steam curls
 * up past the lid as he sets it on. He passes it across with both hands. Then the camera draws back
 * and circles slowly round the two men talking at the little round table while the pendulum clock
 * on the wall swings, its hand creeping on, and the light from the window thickens toward evening.
 */

export default defineScene({
  seed: 3002,
  build: (kit, story) => {
    const { groups: [office], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;

    const room = accountsRoom(kit, office);
    const [tx, tz] = room.table;
    const [sa, sb] = room.seats;
    const pincai = figure(kit, office, PINCAI, ...sa);
    const xu = figure(kit, office, XU_SHUN, ...sb);
    // The lidded bowl before Pincai, and the kettle in Xu Shun's hand.
    const bowl = kit.group(office, tx - 0.3, 0.8, tz + 0.05);
    cup(kit, bowl, 0, 0, 0, 1.6);
    const lid = kit.group(bowl, 0, 0.1, 0);
    kit.mesh(new THREE.SphereGeometry(0.07, 14, 6, 0, Math.PI * 2, 0, Math.PI / 2.6), tone(0xe6e0d6), lid).scale.y = 0.5;
    smoke(kit, bowl, 0, 0.1, 0, { h: 0.6, count: 60, size: 0.05, shade: 0xcfc8bc });
    const kettle = kit.group(office, tx + 0.1, 1.1, tz);
    pot(kit, kettle, 0, -0.1, 0, 1.1);
    const stream = kit.mesh(new THREE.CylinderGeometry(0.006, 0.006, 1, 5).translate(0, -0.5, 0), tone(0x4a443e), office);
    const cam1 = move(kit, office, [[0, [tx - 0.05, 1.05, tz + 0.55], [tx - 0.25, 0.86, tz + 0.05]], [9, [tx + 0.35, 1.15, tz + 0.6], [tx - 0.3, 0.88, tz]], [13, [tx + 1.6, 1.5, tz + 1.8], [tx - 0.2, 1.05, tz]], [at(1), [tx + 0.9, 1.4, tz + 1.5], [tx - 0.4, 1.1, tz]]]);
    const cam2 = orbit(kit, office, [tx, 1.1, tz], { r: 2.6, y: 1.6, a0: 0.5, a1: -0.9, t0: at(1), t1: 36, lookY: 1.2 });

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(blendEnv(INK_SKY.paper(0.02), INK_SKY.paper(0.06), span(seconds, 16, 36)));
      room.update(seconds * 6);
      face(pincai, tx, tz); face(xu, tx, tz);
      // Pouring, lidding, handing across.
      const pouring = seconds > 1 && seconds < 6;
      stream.visible = pouring;
      kettle.visible = seconds < 7.5;
      kettle.rotation.z = pouring ? 0.7 : 0.2;
      kettle.position.set(tx - 0.15, 1.12, tz + 0.05);
      stream.position.set(tx - 0.29, 1.04, tz + 0.05); stream.scale.y = 0.18;
      lid.position.y = 0.1 + (1 - span(seconds, 6.5, 7.5)) * 0.25;
      lid.visible = seconds > 6.5;
      bowl.position.x = tx - 0.3 + span(seconds, 9, 12) * -0.05;
      xu.pose(cue(seconds, [[0, t => ({ ...G.hold(t), sit: 1, bow: 0.2, r: { lift: 1.2, out: -0.1, bend: 0.8 } })], [7.5, t => ({ ...G.offer(t), sit: 1 })], [12, t => ({ ...G.speak(t), sit: 1 })], [at(1), t => ({ ...G.speak(t), sit: 1 })], [24, t => ({ ...G.laugh(t), sit: 1 })], [28, t => ({ ...G.rest(t), sit: 1 })]]));
      pincai.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 1 })], [9, t => ({ ...G.offer(t), sit: 1 })], [12, t => ({ ...G.drink(t), sit: 1 })], [at(1) + 2, t => ({ ...G.speak(t), sit: 1 })], [25, t => ({ ...G.laugh(t), sit: 1 })], [29, t => ({ ...G.drink(t), sit: 1 })]]));
      if (shot === 0) cam1(seconds); else cam2(seconds);
    };
  },
});
