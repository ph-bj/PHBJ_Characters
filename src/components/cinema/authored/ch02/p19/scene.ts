import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, tone } from '../../../stage/figure';
import { room } from '../../../stage/architecture';
import { table, writing } from '../../../stage/props';
import { hold } from '../../../stage/performance';
import { lights, move, sets, span, DUSK } from '../../../stage/direct';
import { parlour } from '../wang';

/*
 * Chapter 2, paragraph 19. Wenhui settles cross-legged on the kang; Pincai offers the letter with both
 * hands. Wenhui takes it in one, glances at the envelope, tosses it down and roars with laughter.
 * Then his story: on an examiner's desk under a lamp, the elder Wei's examination booklet, sure of
 * first place, and on its cover a blade and a brush drawn in ink and a blot soaking outward into the
 * shape of a head, eyes and brows and all; the examiner recoils. Back in the parlour Pincai squirms
 * while Wenhui strokes his long beard and talks on.
 */

export default defineScene({
  seed: 2019,
  build: (kit, story) => {
    const { groups: [room1, desk], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shots 1, 2, 4: the parlour ----------------------------------------------------------------
    const p = parlour(kit, room1);
    const wenhui = figure(kit, room1, CAST.wenhui, ...p.kangSeat);
    wenhui.root.position.y = 0.07;
    const pincai = figure(kit, room1, CAST.pincai, 0.4, -1.3);
    const letter = kit.group(pincai.hands.r, 0, -0.05, 0.1);
    kit.box(letter, tone(0xf0ebe2), [0, 0.1, 0], [0.12, 0.26, 0.01]);
    const tossed = kit.box(room1, tone(0xf0ebe2), [0.1, 0.8, -2.8], [0.26, 0.01, 0.12]);
    lights(kit, room1, { key: [-4, 9, 7], intensity: 1 });
    const cam1 = move(kit, room1, [
      [0, [2.6, 1.6, 1], [0.6, 1.1, -2.4]],
      [at(1), [-1.6, 1.4, -0.4], [0.6, 1.1, -2.6]],
      [at(1) + 5, [0.4, 1.3, -1.8], [0.4, 0.9, -2.8]],
    ]);
    const cam4 = move(kit, room1, [[at(3), [-2.4, 1.5, 1], [0.4, 1.3, -2]], [36, [2.2, 1.5, 0.4], [0.3, 1.3, -2]]]);

    // --- Shot 3: the ink blot ---------------------------------------------------------------------
    room(kit, desk, { w: 8, d: 6, h: 3, back: 'plain', floorKind: 'boards', wall: 0xb9b2a8 });
    table(kit, desk, { w: 1.6, d: 0.9 });
    kit.box(desk, tone(0xe6e0d6), [0, 0.83, 0], [0.5, 0.01, 0.7]);
    const title = writing(kit, desk, '試卷', { size: 0.07, margin: 0.2 });
    title.mesh.rotation.x = -Math.PI / 2; title.mesh.position.set(0, 0.84, -0.25);
    // Blade and brush drawn on the cover.
    kit.box(desk, flat(0x6e675f), [-0.1, 0.842, 0.02], [0.03, 0.001, 0.3]).rotation.y = 0.4;
    kit.box(desk, flat(0x2f2a26), [0.12, 0.842, 0.0], [0.015, 0.001, 0.3]).rotation.y = -0.3;
    const blot = kit.mesh(new THREE.CircleGeometry(0.1, 32).rotateX(-Math.PI / 2), flat(0x1c1816), desk, 0.02, 0.843, 0.18);
    const eyes = [-0.03, 0.035].map(x => kit.mesh(new THREE.CircleGeometry(0.012, 12).rotateX(-Math.PI / 2), flat(0xe6e0d6), desk, x + 0.02, 0.844, 0.16));
    const examiner = figure(kit, desk, { ...CAST.official, beard: 'long', white: true }, 0, -0.8);
    hold(kit, examiner, 'brush');
    lights(kit, desk, { key: [1, 5, 3], intensity: 0.5, fill: 0.15 });
    const cam3 = move(kit, desk, [[at(2), [0.3, 1.8, 0.6], [0, 0.84, 0.05]], [at(3), [0.8, 1.6, 1.6], [0, 1.1, -0.2]]]);

    return (seconds: number, shot: number) => {
      show(shot === 2 ? 1 : 0);
      if (shot === 2) {
        kit.setEnv(DUSK(0.04));
        const t = seconds - at(2);
        cam3(seconds);
        const soak = span(t, 1, 6);
        blot.scale.set(0.2 + soak * 0.8, 1, 0.2 + soak * 1.05);
        eyes.forEach(e => { e.visible = soak > 0.8; });
        face(examiner, 0, 0);
        examiner.pose(cue(t, [[0, t2 => ({ ...G.read(t2), sit: 1, bow: 0.3 })], [6.5, t2 => ({ ...G.fume(t2), sit: 1, bow: -0.2 })]]));
        return;
      }
      kit.setEnv(INK_SKY.paper(0.025));
      if (shot === 3) cam4(seconds); else cam1(seconds);
      face(wenhui, 0.4, 0); face(pincai, 0.7, -3.1);
      wenhui.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 1 })], [at(1), t => ({ ...G.rest(t), sit: 1, r: { lift: 1.1, out: 0.3, bend: 0.4 } })], [at(1) + 2, t => ({ ...G.laugh(t), sit: 1 })], [at(3), t => ({ ...G.stroke(t), sit: 1 })], [at(3) + 4, t => ({ ...G.speak(t), sit: 1 })]]));
      letter.visible = seconds < at(1) + 1;
      tossed.visible = seconds > at(1) + 2;
      pincai.pose(cue(seconds, [[0, G.speak], [3, G.offer], [at(1) + 1, G.folded], [at(3), t => ({ ...G.folded(t), lean: Math.sin(t * 3) * 0.08, yaw: Math.sin(t * 1.7) * 0.3, bow: 0.2 })]]));
    };
  },
});
