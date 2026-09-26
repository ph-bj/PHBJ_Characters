import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, figure, tone, walkAlong } from '../../../stage/figure';
import { courtyard, gateLane, lanternRow } from '../../../stage/locations';
import { gifts } from '../../../stage/props';
import { cart } from '../../../stage/vehicles';
import { blendEnv, DUSK, lights, move, sets, span } from '../../../stage/direct';
import { MEI_JIN, XU_SHUN } from '../actors';

/*
 * Chapter 2, paragraph 7. A little procession: from a hired cart in the lane the visitors' man and
 * the Mei servants shoulder trunks, bedding rolls and a zither case in through the gate, one after
 * another, the camera craning up to watch the line cross the court. Then dusk: lanterns are lit
 * along the eaves and Shixie, his duty done, walks alone through the inner gate to the main house.
 */

export default defineScene({
  seed: 2007,
  build: (kit, story) => {
    const { groups: [lane, yard], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: fetching the luggage ---------------------------------------------------------------
    const g = gateLane(kit, lane);
    const hired = cart(kit, lane, { x: -5, z: 4.4, rot: Math.PI / 2, hood: 0x6e675f });
    const porters = [MEI_JIN, XU_SHUN, { ...CAST.servant, robe: 0x9c958b }, CAST.servant].map((spec, i) => {
      const f = figure(kit, lane, spec, -5 + i * 0.4, 5.8);
      const load = kit.group(f.hands.r, 0, 0, 0);
      if (i % 2) kit.mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.9, 14).rotateZ(Math.PI / 2), tone(0xe6e0d6), load, 0, 0.1, 0.2);
      else kit.box(load, tone(0x4a443e), [0, 0.1, 0.2], [0.7, 0.4, 0.45]);
      return f;
    });
    gifts(kit, lane, -3.6, 0, 5.4);
    lights(kit, lane, { key: [8, 12, 10], intensity: 1 });
    const cam1 = move(kit, lane, [
      [0, [-9, 1.4, 9], [-4, 1.3, 4.6]],
      [8, [3, 3, 9], [-1, 1.2, 3]],
      [18, [2, 8, 12], [0, 0, -4]],
    ]);

    // --- Shot 2: to the main house ------------------------------------------------------------------
    const c = courtyard(kit, yard);
    const hang = lanternRow(kit, yard, [-6, 3.4, -8.4], [6, 3.4, -8.4], 6);
    const shixie = figure(kit, yard, CAST.shixie, 0, 6);
    lights(kit, yard, { key: [4, 8, 8], intensity: 0.8 });
    const cam2 = move(kit, yard, [
      [at(1), [2.4, 1.6, 9], [0, 1.4, 4]],
      [36, [0, 2.8, 4], [0, 2, -12]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam1(seconds);
        g.gate.open(1);
        hired.update(seconds, false);
        porters.forEach((p, i) => {
          walkAlong(p, seconds, 1 + i * 2.4, 7 + i * 2.4, [[-5 + i * 0.4, 5.8], [-1, 3.4], [0, 0], [0, -5]], { ...G.rest(seconds), r: { lift: 2.6, out: 0.2, bend: 1.4 }, bow: 0.15 }, 5);
          p.root.visible = seconds < 7.2 + i * 2.4;
        });
      } else {
        const t = seconds - at(1);
        kit.setEnv(blendEnv(INK_SKY.paper(0.02), DUSK(0.025), span(t, 0, 10)));
        cam2(seconds);
        hang(seconds);
        c.main.open(span(t, 10, 12));
        walkAlong(shixie, t, 0.5, 14, [[0, 6], [0, -2], [0, -9.2]], G.behind(t), 3.6);
      }
    };
  },
});
