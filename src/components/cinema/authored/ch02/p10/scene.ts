import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, tone, walkAlong } from '../../../stage/figure';
import { courtyard, formalHall } from '../../../stage/locations';
import { card, gifts, table } from '../../../stage/props';
import { blendEnv, DUSK, lights, move, sets } from '../../../stage/direct';
import { MEI_JIN, XU_SHUN } from '../actors';

/*
 * Chapter 2, paragraph 10. Next morning in Lady Yan's hall the visitors kneel and present their
 * southern gifts, boxes tied in red, and their fathers' letters on a tray. Shixie hands Pincai a
 * sealed letter for Wang Wenhui: deliver it yourself. Then ten days pass in one shot of the courtyard,
 * the sun wheeling across and the shadows swinging, while Pincai darts from one member of the household
 * to the next, joking with the maids, helping Xu Shun with a load, bowing to Lady Yan, and they all
 * laugh; from the study window Ziyu watches, not displeased.
 */

export default defineScene({
  seed: 2010,
  build: (kit, story) => {
    const { groups: [hallSet, yard], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shots 1–2: gifts and the letter -----------------------------------------------------------
    const hall = formalHall(kit, hallSet, { screenKind: 'peony' });
    const lady = figure(kit, hallSet, CAST.ladyYan, ...hall.seats.hostL);
    const shixie = figure(kit, hallSet, CAST.shixie, ...hall.seats.hostR);
    const pc = figure(kit, hallSet, CAST.pincai, -0.6, 0);
    const ym = figure(kit, hallSet, CAST.yuanmao, 0.7, 0.2);
    table(kit, hallSet, { x: -0.2, z: -1.3, w: 1.2, d: 0.5, h: 0.6 });
    gifts(kit, hallSet, -0.5, 0.6, -1.3); gifts(kit, hallSet, 0.2, 0.6, -1.3);
    const letter = kit.group(shixie.hands.r, 0, -0.05, 0.08);
    kit.box(letter, tone(0xf0ebe2), [0, 0.1, 0], [0.12, 0.26, 0.01]);
    kit.box(letter, flat(0xb8283c), [0, 0.1, 0.006], [0.04, 0.26, 0.002]);
    card(kit, letter, '王通政', { x: 0, y: 0.1, z: 0.009, w: 0.09, h: 0.2, red: false });
    lights(kit, hallSet, { key: [-4, 10, 8], intensity: 1 });
    const cam1 = move(kit, hallSet, [
      [0, [0, 1.5, 4], [0, 1.1, -1.6]],
      [6, [-2.6, 1.4, 1.2], [0, 1, -1.8]],
      [at(1), [2.6, 1.5, 0.4], [0.4, 1.2, -2.2]],
      [at(1) + 6, [2, 1.5, -0.2], [0.8, 1.15, -2.6]],
      [at(2), [-1.6, 1.6, 1.6], [0.4, 1.3, -2]],
    ]);

    // --- Shot 3: ten days of charm ---------------------------------------------------------------------
    const c = courtyard(kit, yard);
    const pincai = figure(kit, yard, CAST.pincai, 0, 4);
    const maids = [figure(kit, yard, CAST.maid, -4, 2), figure(kit, yard, CAST.maid, -3.2, 2.6)];
    const xu = figure(kit, yard, XU_SHUN, 4.6, 0);
    const bundle = kit.mesh(new THREE.BoxGeometry(0.6, 0.4, 0.4), tone(0x4a443e), xu.hands.r, 0, 0.1, 0.2);
    const meijin = figure(kit, yard, MEI_JIN, 3, 3.8);
    const lady2 = figure(kit, yard, CAST.ladyYan, 0, -8.6);
    lady2.root.position.y = 0.45;
    const watcher = figure(kit, yard, CAST.ziyu, -8.2, -2.6);
    lights(kit, yard, { key: [8, 10, 6], intensity: 1 });
    const sunLight = new THREE.DirectionalLight(0xffffff, 0.8);
    yard.add(sunLight, sunLight.target);
    const cam3 = move(kit, yard, [
      [at(2), [0, 9, 14], [0, 0.6, 0]],
      [at(2) + 8, [-6, 5, 10], [0, 0.8, -1]],
      [36, [-10.4, 1.9, 2], [-4, 1.4, -2]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot < 2 ? 0 : 1);
      if (shot < 2) {
        kit.setEnv(INK_SKY.paper(0.025));
        const t = seconds;
        lady.pose(cue(t, [[0, tt => ({ ...G.rest(tt), sit: 1 })], [4, tt => ({ ...G.speak(tt), sit: 1 })]]));
        face(pc, 0, -3); face(ym, 0, -3);
        pc.pose(cue(t, [[0, G.kowtow], [3, G.offer], [at(1), G.folded], [at(1) + 3, tt => ({ ...G.offer(tt), bow: 0.3 })], [at(1) + 6, tt => G.bow(tt, 0.6)]]));
        ym.pose(cue(t, [[0, tt => G.kowtow(tt, 0.8)], [4, G.rest]]));
        if (shot === 1) { pc.root.position.set(0.3, 0, -2.4); face(pc, 0.95, -3.1); }
        shixie.pose(cue(t, [[0, tt => ({ ...G.stroke(tt), sit: 1 })], [at(1) + 2, tt => ({ ...G.offer(tt), sit: 1 })], [at(1) + 7, tt => ({ ...G.speak(tt), sit: 1 })]]));
        letter.visible = shot === 1 && t < at(1) + 7;
        cam1(seconds);
      } else {
        const t = seconds - at(2);
        // Ten days in twelve seconds: the light swings round and round.
        const day = (t / 1.2) % 1;
        const a = Math.PI * (0.1 + 0.8 * day);
        sunLight.position.set(Math.cos(a) * 20, Math.sin(a) * 16 + 2, -6);
        kit.setEnv(blendEnv(INK_SKY.paper(0.02), DUSK(0.02), Math.pow(Math.abs(day - 0.5) * 2, 3) * 0.6));
        cam3(seconds);
        c.main.open(1);
        const stops: [number, number][] = [[0, 4], [-3.3, 1.6], [3.8, 0.6], [0.2, -7.6], [3, 3]];
        const k = Math.min(stops.length - 1, Math.floor(t / 2.4)), lt = t - k * 2.4;
        if (lt < 0.9 && k > 0) walkAlong(pincai, lt, 0, 0.9, [stops[k - 1], stops[k]], G.rest(t), 9);
        else {
          pincai.root.position.set(stops[k][0], k === 3 ? 0.45 : 0, stops[k][1]);
          const targets = [maids[0], maids[0], xu, lady2, meijin][k];
          face(pincai, targets.root.position.x, targets.root.position.z);
          pincai.pose([G.speak, G.laugh, G.offer, (tt: number) => G.bow(tt, 0.6), G.argue][k](t));
        }
        maids.forEach(m => { face(m, pincai.root.position.x, pincai.root.position.z); m.pose(k === 1 ? G.laugh(t) : G.shy(t)); });
        face(xu, pincai.root.position.x, pincai.root.position.z);
        xu.pose(k === 2 ? G.laugh(t) : { ...G.rest(t), r: { lift: 1.2, out: 0.2, bend: 0.6 } });
        bundle.visible = k < 2;
        face(lady2, 0, 4); lady2.pose(k === 3 ? G.laugh(t) : G.folded(t));
        face(meijin, pincai.root.position.x, pincai.root.position.z); meijin.pose(k === 4 ? G.laugh(t) : G.rest(t));
        face(watcher, 0, 2);
        watcher.pose(cue(t, [[0, G.folded], [8, G.stroke]]));
      }
    };
  },
});
