import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { aim, move, sets, span } from '../../../stage/direct';
import { FU_SAN, GUI_FEN, PINCAI, RONGGUAN } from '../actors';
import { earring } from '../places';
import { pitTable } from '../table';

/*
 * Chapter 3, paragraph 22. Rongguan comes trotting back through the pit and slides onto the bench;
 * Fu the Third, grinning, wags a finger at him: all that fawning and not even a dinner. The camera
 * drifts round the table as he teases. Then Rongguan, chin up, says he wouldn't have gone, and the
 * camera rises from his cool face across the hall to the big box standing empty now, a lone
 * attendant sweeping broken glass off the gallery boards.
 */

export default defineScene({
  seed: 3022,
  build: (kit, story) => {
    const { groups: [hall], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const T = pitTable(kit, hall);
    const [bx, bz] = T.th.boxes[0];
    const pincai = figure(kit, hall, PINCAI, 0, 0);
    const fu = figure(kit, hall, FU_SAN, 0, 0);
    const gui = figure(kit, hall, GUI_FEN, 0, 0);
    const rong = figure(kit, hall, RONGGUAN, 2, 3);
    earring(kit, rong);
    const sweeper = figure(kit, hall, CAST.servant, bx - 0.6, bz + 1.2); sweeper.root.position.y = 2.7;
    const broom = kit.group(sweeper.hands.r, 0, -0.05, 0.05);
    kit.mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.1, 5).translate(0, -0.45, 0), tone(0x6e675f), broom).rotation.x = 0.6;
    const glass = Array.from({ length: 9 }, (_, k) => kit.mesh(new THREE.CircleGeometry(0.03 + (k % 3) * 0.015, 3).rotateX(-Math.PI / 2), tone(0xe6e0d6, true), hall, bx - 0.8 + (k % 3) * 0.3, 2.72, bz + 1.4 + Math.floor(k / 3) * 0.3));
    const [rx, rz] = T.spot('rong');
    const [fx, fz] = T.spot('fu');
    const cam = move(kit, hall, [
      [0, [T.tx + 2.8, 1.6, T.tz - 1.2], [T.tx + 0.4, 1.2, T.tz + 1]],
      [6, [T.tx + 1.2, 1.5, T.tz - 1.6], [(rx + fx) / 2, 1.3, fz]],
      [at(1), [T.tx - 0.2, 1.45, T.tz - 1.4], [(rx + fx) / 2, 1.3, fz]],
    ]);

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.02));
      T.th.update(seconds);
      if (!walkAlong(rong, seconds, 0, 4, [[2, 3], [T.tx + 1.8, T.tz + 1.8], [rx, rz + 0.5]], G.rest(seconds), 5) && seconds > 4) {
        T.sit(rong, 'rong', cue(seconds, [[4, G.laugh], [at(1), t => ({ ...G.rest(t), pitch: -0.15, yaw: 0.2, mouth: 0.4 * Math.max(0, Math.sin(t * 8)) })], [at(1) + 8, t => ({ ...G.folded(t), pitch: -0.1 })]]), [fx, fz]);
      }
      T.sit(fu, 'fu', cue(seconds, [[0, G.rest], [4, t => ({ ...G.point(t), mouth: 0.6 })], [9, G.laugh], [at(1), G.rest], [at(1) + 9, G.laugh]]), [rx, rz]);
      T.sit(gui, 'gui', G.rest(seconds));
      T.sit(pincai, 'pincai', seconds > 9 ? G.laugh(seconds) : G.rest(seconds), [rx, rz]);
      pincai.root.position.z -= 0.45;
      face(sweeper, bx - 0.6, bz + 2);
      sweeper.pose({ ...G.hold(seconds), bow: 0.4, turn: Math.sin(seconds * 3) * 0.4 });
      glass.forEach((g, k) => { g.position.x = bx - 0.8 + (k % 3) * 0.3 + span(seconds, 26 + k * 0.6, 27 + k * 0.6) * 1.2; });
      if (shot === 0) { cam(seconds); return; }
      const u = span(seconds, at(1) + 5, at(1) + 12);
      const e = u * u * (3 - 2 * u);
      const [hx, hz] = [rx, rz];
      aim(kit, hall, [hx + 0.6 + e * 3, 1.35 + e * 1.8, hz - 0.9 + e * 2], [hx + (bx - 0.6 - hx) * e, 1.3 + e * 1.7, hz + (bz + 1.4 - hz) * e], 0.3);
    };
  },
});
