import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { gateLane } from '../../../stage/locations';
import { lights, move, sets, span } from '../../../stage/direct';
import { parlour } from '../wang';

/*
 * Chapter 2, paragraph 18. Morning at the Wang gate: Pincai, his boy Si'er at his heels with the
 * letter, is shown in. In the parlour he meets Zhongqing and pours on the compliments, all bows and
 * smiles. A servant hurries in with a bundle of robes: the master is back. Then the camera drops to
 * the floor as heavy boots thud in, and rises up the body of a big square-faced man with a grizzled
 * beard in third-rank robes, while Pincai folds into his deepest bow.
 */

export default defineScene({
  seed: 2018,
  build: (kit, story) => {
    const { groups: [lane, room], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: at the Wang gate ---------------------------------------------------------------------
    const g = gateLane(kit, lane);
    const pc = figure(kit, lane, CAST.pincai, -9, 3.2);
    const sier = figure(kit, lane, CAST.page, -10, 3.6);
    kit.box(sier.hands.r, tone(0xf0ebe2), [0, 0.05, 0.1], [0.12, 0.24, 0.01]);
    const porter = figure(kit, lane, CAST.servant, 0, -1);
    lights(kit, lane, { key: [8, 12, 10], intensity: 1 });
    const cam1 = move(kit, lane, [[0, [-12, 1.6, 9], [-8, 1.3, 3.4]], [10, [3, 1.8, 8], [0, 1.4, 1.6]]]);

    // --- Shots 2–4: in the parlour -------------------------------------------------------------------
    parlour(kit, room);
    const zq = figure(kit, room, CAST.zhongqing, -0.8, -0.8);
    const pincai = figure(kit, room, CAST.pincai, 0.8, -0.6);
    const servant = figure(kit, room, CAST.servant, 5, 3);
    const bundle = kit.mesh(new THREE.BoxGeometry(0.5, 0.3, 0.4), tone(0x4a443e), servant.hands.r, 0, 0.1, 0.2);
    const wenhui = figure(kit, room, CAST.wenhui, 5, 4);
    lights(kit, room, { key: [-4, 9, 7], intensity: 1 });
    const cam2 = move(kit, room, [
      [at(1), [2.4, 1.5, 2.4], [0, 1.4, -0.7]],
      [at(1) + 6, [-2, 1.6, 2], [0.2, 1.4, -0.7]],
      [at(2), [1, 1.7, 2.8], [2, 1.3, 0.8]],
      [at(3), [0.2, 1.6, -2.4], [2.4, 1, 2]],
    ]);
    const cam4 = move(kit, room, [
      [at(3), [1.6, 0.25, -0.8], [3.4, 0.2, 1.6]],
      [at(3) + 3, [1.4, 0.8, -1.2], [3.2, 1.2, 0.8]],
      [36, [0.6, 1.3, -2], [2.6, 1.8, 0.4]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot === 0 ? 0 : 1);
      kit.setEnv(INK_SKY.paper(0.025));
      if (shot === 0) {
        cam1(seconds);
        g.gate.open(span(seconds, 5, 7));
        walkAlong(pc, seconds, 0, 5, [[-9, 3.2], [-1, 2.4]], G.folded(seconds), 5);
        walkAlong(sier, seconds, 0.3, 5.4, [[-10, 3.6], [-1.8, 2.9]], G.offer(seconds), 5);
        if (seconds > 5) { face(pc, 0, 0); pc.pose(G.salute(seconds, 0.35)); }
        face(porter, 0, 3); porter.pose(seconds > 6 ? G.bow(seconds, 0.4) : G.rest(seconds));
        return;
      }
      face(zq, pincai.root.position.x, pincai.root.position.z);
      zq.pose(cue(seconds, [[0, G.folded], [at(1) + 4, G.laugh], [at(2), G.rest]]));
      const t = seconds - at(2);
      walkAlong(servant, t, 0, 2.4, [[5, 3], [1.6, 0.6]], G.offer(t), 7);
      servant.root.visible = shot >= 2 && t < 6;
      if (t > 2.4) { face(servant, 0, -0.7); servant.pose(G.speak(t, 'l')); }
      bundle.visible = true;
      const t4 = seconds - at(3);
      wenhui.root.visible = shot === 3;
      walkAlong(wenhui, t4, 0, 3.4, [[5, 4], [2.2, 0.8]], { ...G.rest(t4), bow: -0.08, l: { lift: 0.2, out: 0.4, bend: 0.3 }, r: { lift: 0.2, out: 0.4, bend: 0.3 } }, 4);
      if (t4 > 3.4) { face(wenhui, 0.8, -0.6); wenhui.pose(G.stroke(t4)); }
      face(pincai, shot === 3 ? wenhui.root.position.x : -0.8, shot === 3 ? wenhui.root.position.z : -0.8);
      pincai.pose(cue(seconds, [[0, G.salute], [at(1) + 2, G.speak], [at(1) + 6, G.laugh], [at(2), G.rest], [at(3) + 1.5, tt => G.bow(tt, 0.9)]]));
      if (shot === 3) cam4(seconds); else cam2(seconds);
    };
  },
});
