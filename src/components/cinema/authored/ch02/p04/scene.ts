import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { courtyard, formalHall, gateLane } from '../../../stage/locations';
import { cart, horse } from '../../../stage/vehicles';
import { lights, move, sets, span } from '../../../stage/direct';
import { MEI_JIN } from '../actors';

/*
 * Chapter 2, paragraph 4. "Seat them in the flower hall." Shixie sees Wenhui out: at the gate the
 * Commissioner climbs into his carriage and it rolls off with its outriders. Shixie turns back, and
 * the camera goes with him through the hanging-flower gate, where he sends an attendant running to
 * the study for his son, and on across the court, until he strolls up the steps into the flower hall
 * where the two visitors rise to meet him.
 */

export default defineScene({
  seed: 2004,
  build: (kit, story) => {
    const { groups: [lane, yard], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: Wenhui takes his leave -----------------------------------------------------------
    const g = gateLane(kit, lane);
    const carriage = cart(kit, lane, { x: 2.4, z: 4, rot: -Math.PI / 2, hood: 0x2f2a26 });
    const outriders = [horse(kit, lane, { x: 5.6, z: 5.2, rot: -Math.PI / 2 }), horse(kit, lane, { x: 7.2, z: 5.2, rot: -Math.PI / 2 })];
    const shixie = figure(kit, lane, CAST.shixie, -0.6, 1.6);
    const wenhui = figure(kit, lane, CAST.wenhui, 0.6, 1.8);
    lights(kit, lane, { key: [8, 12, 10], intensity: 1 });
    const cam1 = move(kit, lane, [
      [0, [-4, 1.6, 8], [0.6, 1.4, 2.4]],
      [8, [-2, 1.8, 9], [3.6, 1.4, 4]],
      [14, [-6, 2.2, 10], [10, 1.4, 4]],
    ]);

    // --- Shot 2: through the hanging-flower gate -------------------------------------------------
    const c = courtyard(kit, yard);
    formalHall(kit, yard, { z: -22 });
    // The flower hall stands where the main hall would be.
    c.main.group.visible = false;
    const sx = figure(kit, yard, CAST.shixie, 0, 12);
    const runner = figure(kit, yard, MEI_JIN, 0.8, 9);
    const guests = [figure(kit, yard, CAST.pincai, -3.2, -23.2), figure(kit, yard, CAST.yuanmao, 3.2, -23.2)];
    lights(kit, yard, { key: [6, 10, 8], intensity: 1 });
    const cam2 = move(kit, yard, [
      [at(1), [1.4, 1.7, 13.8], [0, 1.5, 8]],
      [at(1) + 7, [1.6, 1.8, 3], [0, 1.4, -4]],
      [at(1) + 15, [1.2, 1.9, -8], [0, 1.5, -18]],
      [36, [2.6, 1.8, -17], [0, 1.4, -22]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      kit.setEnv(INK_SKY.paper(0.02));
      if (shot === 0) {
        cam1(seconds);
        g.gate.open(1);
        outriders.forEach((h, i) => h.update(seconds + i, seconds > 8));
        carriage.update(seconds, seconds > 8);
        const go = span(seconds, 8, 14);
        carriage.group.position.x = 2.4 + go * 16;
        outriders.forEach((h, i) => { h.group.position.x = [5.6, 7.2][i] + go * 16; });
        face(shixie, wenhui.root.position.x, wenhui.root.position.z);
        shixie.pose(cue(seconds, [[0, G.speak], [4, t => G.salute(t, 0.35)], [9, G.folded]]));
        walkAlong(wenhui, seconds, 5, 7, [[0.6, 1.8], [2.4, 3]], G.rest(seconds), 5);
        wenhui.root.visible = seconds < 7.4;
        if (seconds < 5) { face(wenhui, -0.6, 1.6); wenhui.pose(cue(seconds, [[0, G.laugh], [4, t => G.salute(t, 0.3)]])); }
      } else {
        const t = seconds - at(1);
        cam2(seconds);
        c.flowerGate.open(span(t, 0.5, 2));
        walkAlong(sx, t, 0, 20, [[0, 12], [0, 6], [0, -8], [0, -19.6]], G.behind(t), 3.6);
        if (t > 3 && t < 5) { face(sx, 0.8, 9); sx.pose(G.point(t)); }
        walkAlong(runner, t, 4.2, 9, [[0.8, 9], [6, 2], [9, -3]], G.rest(t), 9);
        if (t < 4.2) { face(runner, 0, 12); runner.pose(G.bow(t, 0.4)); }
        runner.root.visible = t < 9;
        guests.forEach((gu, i) => { face(gu, sx.root.position.x, sx.root.position.z); gu.pose(t > 18 ? G.salute(t, 0.35) : { ...G.rest(t), sit: t < 17 ? 1 : 0 }); gu.root.position.z = t < 17 ? -23.35 : -23.2; gu.root.position.x = i ? 3.25 : -3.25; });
      }
    };
  },
});
