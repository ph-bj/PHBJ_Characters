import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone } from '../../../stage/figure';
import { cup } from '../../../stage/props';
import { hold } from '../../../stage/performance';
import { move, sets, span } from '../../../stage/direct';
import { FU_SAN, GUI_FEN, PINCAI, RONGGUAN } from '../actors';
import { earring } from '../places';
import { pitTable } from '../table';

/*
 * Chapter 3, paragraph 15. On stage, The Southern Shore: a young scholar and his wife at the
 * parting, sleeves raised to their eyes. Pincai, who knows every note, beats time on the bench
 * with his foot and sips. Then a chain of jostles in slowed time: the fat man heaves himself up
 * with a hand on Rongguan's shoulder, Rongguan sways into Pincai's elbow, the cup tips and the tea
 * arcs out over his robe, darkening it. The two apologise, bowing; Pincai laughs and dabs at the
 * stain with his handkerchief.
 */

export default defineScene({
  seed: 3015,
  build: (kit, story) => {
    const { groups: [hall], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const T = pitTable(kit, hall);
    const pincai = figure(kit, hall, PINCAI, 0, 0);
    const fu = figure(kit, hall, FU_SAN, 0, 0);
    const gui = figure(kit, hall, GUI_FEN, 0, 0);
    const rong = figure(kit, hall, RONGGUAN, 0, 0);
    earring(kit, rong);
    const teacup = hold(kit, pincai, 'cup');
    const stain = kit.mesh(new THREE.CircleGeometry(0.12, 16), tone(0x4a443e, true), pincai.torso, 0.03, -0.1, 0.16);
    const kerchief = kit.mesh(new THREE.PlaneGeometry(0.14, 0.14), tone(0xf2eee6, true), pincai.hands.l, 0, -0.03, 0.03);
    const drops = Array.from({ length: 14 }, () => kit.mesh(new THREE.SphereGeometry(0.012, 5, 4), tone(0x6e675f), hall, 0, 0, 0));
    cup(kit, hall, T.tx - 0.4, 0.78, T.tz - 0.1);
    const couple = [{ ...CAST.ziyu, headwear: 'scarf' as const }, CAST.dan].map((s, k) => figure(kit, T.th.stage.deck, s, (k - 0.5) * 1.6, 0.3));
    const cam = move(kit, hall, [
      [0, [T.tx - 0.2, 2, T.tz - 1.6], [0, 2, -8]],
      [6, [T.tx - 1.6, 1.3, T.tz - 1.2], [T.tx - 1.05, 0.8, T.tz - 0.4]],
      [at(1), [T.tx + 0.4, 1.4, T.tz - 1.1], [T.tx - 0.8, 1.2, T.tz - 0.2]],
      [at(1) + 8, [T.tx + 0.1, 1.3, T.tz - 0.9], [T.tx - 0.9, 1.1, T.tz - 0.3]],
      [at(2), [T.tx + 1.2, 1.5, T.tz - 1.5], [T.tx - 0.5, 1.2, T.tz + 0.2]],
      [36, [T.tx - 0.2, 1.3, T.tz - 1.2], [T.tx - 1, 1.15, T.tz - 0.4]],
    ]);

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.02));
      T.th.update(seconds);
      cam(seconds);
      couple.forEach((f, k) => { face(f, (k ? -1 : 1) * 2, 1.5); f.pose(k ? G.weep(seconds) : { ...G.weep(seconds + 1), turn: 0.3 }); f.root.position.x = (k - 0.5) * (1.6 + Math.sin(seconds * 0.4) * 0.5); });
      // Slowed time through the spill: a local clock that crawls between 14 and 20.
      const slow = seconds < 14 ? seconds : seconds < 20 ? 14 + (seconds - 14) * 0.35 : seconds - 3.9;
      const [px, pz] = T.spot('pincai');
      const [fx, fz] = T.spot('fu');
      const [rx, rz] = T.spot('rong');
      pincai.root.position.set(px, 0, pz - 0.45);
      face(pincai, 0, -8);
      const jolt = span(slow, 15.4, 15.8);
      pincai.pose(cue(seconds, [
        [0, t => ({ ...G.drink(t), sit: 1 })],
        [13.5, t => ({ ...G.drink(t), sit: 1, lean: -0.12 * jolt, r: { lift: 1.2 - jolt * 0.4, out: 0.2 + jolt * 0.4, twist: 0.4, bend: 1.6 - jolt * 0.6 } })],
        [at(2) + 1, t => ({ ...G.laugh(t), sit: 1 })],
        [at(2) + 5, t => ({ ...G.rest(t), sit: 1, pitch: 0.4, l: { lift: 0.7 + Math.abs(Math.sin(t * 5)) * 0.1, out: -0.1, twist: -0.3, bend: 1.5 } })],
      ]));
      // Beat time with the foot until the spill.
      pincai.root.position.y = seconds < 12 ? Math.abs(Math.sin(seconds * 4)) * 0.01 : 0;
      teacup.visible = seconds < at(2) + 1;
      stain.visible = slow > 16.2;
      stain.scale.setScalar(Math.min(1, Math.max(0.2, (slow - 16.2) * 1.5)));
      kerchief.visible = seconds > at(2) + 5;
      drops.forEach((d, k) => {
        const u = slow - 15.6 - k * 0.03;
        d.visible = u > 0 && u < 0.8;
        const [cx, cy, cz] = [px + 0.25, 1.15, pz - 0.2];
        d.position.set(cx + u * 0.3 + (k % 3) * 0.02, cy + u * 0.4 - u * u * 3, cz - u * 0.15 + (k % 4) * 0.015);
      });
      // Fu rises leaning on Rongguan; Rongguan sways into Pincai; then both apologise.
      const rise = span(slow, 14.4, 15.4);
      if (seconds < at(2)) {
        fu.root.position.set(fx, 0, fz); face(fu, 0, -8);
        fu.pose({ ...G.rest(seconds), sit: 1 - rise, lean: -0.3 * rise, l: { lift: 0.6 + rise * 0.8, out: 0.9, bend: 0.3 } });
        rong.root.position.set(rx - span(slow, 15, 15.4) * 0.15, 0, rz); face(rong, 0, -8);
        rong.pose({ ...G.rest(seconds), sit: 1, lean: -0.4 * span(slow, 15, 15.5) * (1 - span(slow, 16.5, 17.5)) });
      } else {
        fu.root.position.set(fx - 0.2, 0, fz + 0.2); face(fu, px, pz - 0.45);
        fu.pose(cue(seconds, [[at(2), t => G.salute(t, 0.35)], [at(2) + 4, G.laugh]]));
        T.sit(rong, 'rong', { ...G.salute(seconds, 0.4) }, [px, pz - 0.45]);
      }
      T.sit(gui, 'gui', seconds > at(2) ? G.laugh(seconds) : G.rest(seconds));
    };
  },
});
