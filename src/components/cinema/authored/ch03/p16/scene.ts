import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { writing } from '../../../stage/props';
import { move, sets, span } from '../../../stage/direct';
import { FU_SAN, GUI_FEN, OLD_WANG, PINCAI, RONGGUAN } from '../actors';
import { goitre, peddlerTray } from '../places';
import { pitTable } from '../table';

/*
 * Chapter 3, paragraph 16. Low along the aisle between the packed tables comes a bent old man, a
 * grey goitre swinging at his neck, a yellow lacquer tray of trinkets held out before him. He stops
 * at Pincai's elbow and puts a snuff bottle into his hand; Pincai turns it to the light. The
 * haggling is written in the air between them, each price a slip that replaces the last: 十二两,
 * 十两, then Pincai's careless 二两, the old man's 六两, and at last 二两 again, accepted. The
 * bottle is pushed back at him; Pincai, with no silver on him, stares fixedly at the stage and
 * turns red to the ears.
 */

const PRICES: [string, number, boolean][] = [['十二两', 13, false], ['十两', 16, false], ['二两', 20.5, true], ['六两', 23.5, false], ['二两', 28, false]];

export default defineScene({
  seed: 3016,
  build: (kit, story) => {
    const { groups: [hall], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const T = pitTable(kit, hall);
    const pincai = figure(kit, hall, PINCAI, 0, 0);
    const fu = figure(kit, hall, FU_SAN, 0, 0);
    const gui = figure(kit, hall, GUI_FEN, 0, 0);
    const rong = figure(kit, hall, RONGGUAN, 0, 0);
    const wang = figure(kit, hall, OLD_WANG, 3, 7);
    goitre(kit, wang);
    peddlerTray(kit, wang);
    const bottle = kit.mesh(new THREE.CylinderGeometry(0.025, 0.035, 0.08, 10), tone(0x9c958b), hall, 0, 0, 0);
    const [px, pz] = T.spot('pincai');
    const stand: [number, number] = [px - 0.2, pz - 1.1];
    const slips = PRICES.map(([text], k) => writing(kit, hall, text, { size: 0.16, paper: 0xf4f0e8, margin: 0.25, x: px + (k % 2 ? 0.3 : -0.5), y: 1.95, z: pz - 0.8 }));
    const cam = move(kit, hall, [
      [0, [T.tx + 3, 1.5, T.tz + 3.6], [0, 1.1, 4]],
      [at(1) - 2, [T.tx + 1.2, 1.4, T.tz - 2.4], [px, 1.2, pz - 0.8]],
      [at(1), [px + 0.6, 1.3, pz - 1.4], [px, 1.1, pz - 0.6]],
      [at(2), [px + 1.4, 1.5, pz - 2.2], [px - 0.2, 1.4, pz - 0.8]],
      [at(3), [px + 1.1, 1.45, pz - 1.8], [px - 0.1, 1.45, pz - 0.6]],
      [36, [px + 0.7, 1.35, pz - 1.2], [px, 1.4, pz - 0.4]],
    ]);

    return (seconds: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.02));
      T.th.update(seconds);
      cam(seconds);
      pincai.root.position.set(px, 0, pz - 0.45);
      const holding = seconds > 10 && seconds < 26 || seconds > 30;
      face(pincai, seconds > 31 ? 0 : stand[0], seconds > 31 ? -8 : stand[1]);
      pincai.pose(cue(seconds, [
        [0, t => ({ ...G.rest(t), sit: 1 })],
        [10, t => ({ ...G.read(t), sit: 1 })],
        [16.5, t => ({ ...G.offer(t), sit: 1 })],
        [20, t => ({ ...G.speak(t), sit: 1, yaw: 0.4 })],
        [24, t => ({ ...G.rest(t), sit: 1, yaw: Math.sin(t * 5) * 0.4 })],
        [31, t => ({ ...G.rest(t), sit: 1, pitch: -0.2 })],
      ]));
      pincai.blush(span(seconds, 31, 33));
      T.sit(fu, 'fu', G.rest(seconds)); T.sit(gui, 'gui', G.rest(seconds)); T.sit(rong, 'rong', G.rest(seconds));
      const moving = walkAlong(wang, seconds, 0, 8, [[3, 7], [0.2, 4.2], [-2.4, 0.2], [T.tx + 1.8, T.tz - 1.6], stand], { ...G.hold(seconds), bow: 0.35 }, 3.5);
      if (!moving && seconds > 8) {
        face(wang, px, pz - 0.45);
        wang.pose(cue(seconds, [[8, t => ({ ...G.offer(t), bow: 0.4 })], [11, t => ({ ...G.hold(t), bow: 0.35, mouth: 0.5 + 0.4 * Math.sin(t * 10) })], [26, t => ({ ...G.offer(t), bow: 0.4 })], [29, t => ({ ...G.hold(t), bow: 0.35 })]]));
      }
      // The bottle: in the peddler's fingers, in Pincai's hand, back to the peddler, pushed back again.
      const hand = holding ? pincai.hands.r : wang.hands.l;
      hand.getWorldPosition(bottle.position);
      bottle.position.sub(hall.position);
      bottle.visible = seconds > 9;
      slips.forEach((w, k) => {
        const [, t0] = PRICES[k];
        const t1 = k < PRICES.length - 1 ? PRICES[k + 1][1] : 36;
        w.mesh.visible = seconds > t0 && seconds < t1;
        w.set(span(seconds, t0, t0 + 0.8));
      });
    };
  },
});
