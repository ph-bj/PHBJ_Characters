import * as THREE from 'three';
import { defineScene } from '../../define';
import { CAST, G, cue, face, figure, flat } from '../../../stage/figure';
import { room } from '../../../stage/architecture';
import { cup, lamp, pot, table } from '../../../stage/props';
import { mist } from '../../../stage/fx';
import { DUSK, lights, move, sets, span } from '../../../stage/direct';
import { QIGUAN, QINGUAN } from '../actors';

/*
 * Chapter 2, paragraph 14. By the lamp Ziyu laughs at Pincai's praise, and as he thinks, the two
 * boys from the cart rise in pale ink over the table between them, exactly as he saw them: the words
 * fit them to a hair. Pincai, sure of himself, turns a piece of jade in the lamplight like a gem
 * dealer (识宝回回) and holds it up; then his tone drops: their tempers are forbidding, and the two
 * figures turn their backs and fade.
 */

export default defineScene({
  seed: 2014,
  build: (kit) => {
    const { groups: [night], show } = sets(kit, 1);

    room(kit, night, { w: 8, d: 6, h: 3, back: 'lattice', floorKind: 'boards' });
    table(kit, night, { x: 0, z: -0.6, w: 1.4, d: 0.7, h: 0.76 });
    cup(kit, night, -0.3, 0.76, -0.6, 1.3); cup(kit, night, 0.3, 0.76, -0.6, 1.3); pot(kit, night, 0, 0.76, -0.8);
    const glow = lamp(kit, night, { x: 0.45, z: -0.8, y: 0.76, h: 0.35, power: 3 });
    const zy = figure(kit, night, CAST.ziyu, -1, -0.6);
    const pc = figure(kit, night, CAST.pincai, 1, -0.6);
    const jade = kit.mesh(new THREE.TorusGeometry(0.05, 0.022, 10, 24), flat(0xf4f0e8), pc.hands.r, 0, -0.05, 0.08);
    const boys = [figure(kit, night, QINGUAN, -0.25, -1.6), figure(kit, night, QIGUAN, 0.35, -1.7)];
    boys.forEach(b => { b.shadow.visible = false; b.root.position.y = 0.3; });
    const haze = mist(kit, night, { count: 6, w: 3, y: 1.4, d: 1.4, z: -1.6, size: 2, opacity: 0.35, drift: 0.2 });
    lights(kit, night, { key: [2, 5, 3], intensity: 0.4, fill: 0.12 });
    const cam = move(kit, night, [
      [0, [-2.6, 1.5, 1.8], [0, 1.3, -0.8]],
      [8, [0, 1.6, 2.2], [0, 1.7, -1.6]],
      [16, [2.4, 1.4, 1.2], [0.9, 1.35, -0.6]],
      [24, [1.8, 1.3, 0.2], [1, 1.4, -0.6]],
      [36, [0, 1.8, 2.8], [0, 1.6, -1.4]],
    ]);

    return (seconds: number) => {
      show(0);
      kit.setEnv(DUSK(0.035));
      cam(seconds);
      glow.update(seconds);
      haze.update(seconds);
      face(zy, 1, -0.6); face(pc, -1, -0.6);
      zy.pose(cue(seconds, [[0, t => ({ ...G.laugh(t), sit: 1 })], [4, t => ({ ...G.think(t), sit: 1 })], [12, t => ({ ...G.speak(t), sit: 1 })]]));
      pc.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 1 })], [16, t => ({ ...G.rest(t), sit: 1, r: { lift: 1.6, out: 0.2, bend: 1.0 }, pitch: -0.2 })], [22, t => ({ ...G.speak(t), sit: 1 })], [27, t => ({ ...G.argue(t), sit: 1 })]]));
      jade.visible = seconds > 15 && seconds < 23;
      jade.rotation.y = seconds * 2;
      const vision = span(seconds, 4, 7) * (1 - span(seconds, 31, 34));
      boys.forEach((b, i) => {
        b.fade(0.55 * vision);
        b.root.rotation.y = seconds > 28 ? Math.PI * span(seconds, 28, 30) : 0;
        b.pose({ ...G.folded(seconds), sit: 1, pitch: i ? 0.2 : 0.05 });
      });
    };
  },
});
