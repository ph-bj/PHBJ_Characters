import { defineScene } from '../../define';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { chamber } from '../../../stage/locations';
import { room } from '../../../stage/architecture';
import { bed, lamp, table } from '../../../stage/props';
import { moon } from '../../../stage/performance';
import { mist } from '../../../stage/fx';
import { cart } from '../../../stage/vehicles';
import { DUSK, lights, move, sets, span } from '../../../stage/direct';
import { QINGUAN } from '../actors';

/*
 * Chapter 2, paragraph 17. Pincai promises to find out tomorrow which troupe the boys have joined.
 * The lamp flares up and a little maid calls from the doorway: the mistress says the young master
 * should go to bed. Then Ziyu lies awake in his curtained bed in the moonlight, and above him, in the
 * dark of the room, the street and the blue-hooded cart and the boy's face take shape again, slowly
 * turning, as he goes over every detail.
 */

export default defineScene({
  seed: 2017,
  build: (kit, story) => {
    const { groups: [night, bedroom], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shots 1–2: the promise; retire early ---------------------------------------------------------
    room(kit, night, { w: 8, d: 6, h: 3, back: 'lattice', floorKind: 'boards' });
    table(kit, night, { x: 0, z: -1.2, w: 1.2, d: 0.6, h: 0.76 });
    const glow = lamp(kit, night, { x: 0.4, z: -1.3, y: 0.76, h: 0.35, power: 3 });
    const zy = figure(kit, night, CAST.ziyu, -0.9, -0.9);
    const pc = figure(kit, night, CAST.pincai, 0.9, -0.9);
    const maid = figure(kit, night, CAST.maid, 3.4, 3.6);
    lights(kit, night, { key: [2, 5, 3], intensity: 0.5, fill: 0.15 });
    const cam1 = move(kit, night, [
      [0, [0, 1.4, 2.4], [0, 1.2, -1]],
      [at(1), [-2.4, 1.5, 1.6], [0.6, 1.2, -1]],
      [at(1) + 4, [-1.6, 1.6, 0.2], [3, 1.4, 3]],
      [at(2), [-1.4, 1.5, 0.8], [0, 1.2, -1]],
    ]);

    // --- Shot 3: over and over ------------------------------------------------------------------------
    chamber(kit, bedroom);
    bed(kit, bedroom, { x: 0, z: -1.6 });
    const sleeper = figure(kit, bedroom, CAST.ziyu, 0, 0);
    sleeper.root.position.set(-0.9, 0.8, -1.7); sleeper.root.rotation.set(-Math.PI / 2, 0, -Math.PI / 2, 'YXZ'); sleeper.shadow.visible = false;
    moon(kit, bedroom, -6, 6, -20, 2);
    const memory = kit.group(bedroom, 0, 2.2, -2.6);
    memory.scale.setScalar(0.45);
    const ghostCart = cart(kit, memory, { rot: -Math.PI / 2, hood: 0x3f4f6a, paleMule: true });
    const boy = figure(kit, ghostCart.group, QINGUAN, 0.85, 0.35);
    boy.root.position.y = 0.55; boy.root.rotation.y = Math.PI / 2;
    const fog = mist(kit, bedroom, { count: 6, w: 6, y: 2.2, d: 3, z: -2.6, size: 3, opacity: 0.4, drift: 0.2 });
    lights(kit, bedroom, { key: [-4, 5, -6], intensity: 0.4, fill: 0.2 });
    const cam2 = move(kit, bedroom, [
      [at(2), [2.4, 1.6, 2.6], [0, 1, -1.6]],
      [at(2) + 8, [1.2, 1.4, 0.6], [0.6, 1, -1.7]],
      [36, [0.6, 2.2, 2.2], [0, 2.3, -2.6]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot === 2 ? 1 : 0);
      kit.setEnv(DUSK(0.035));
      if (shot < 2) {
        cam1(seconds);
        glow.update(seconds);
        const flare = shot === 1 ? Math.max(0, 1 - Math.abs(seconds - at(1) - 0.6) * 2) : 0;
        glow.light.intensity = 3 * (1 + flare * 2.5);
        face(zy, 0.9, -0.9); face(pc, -0.9, -0.9);
        pc.pose(cue(seconds, [[0, t => ({ ...G.speak(t), sit: 1 })], [5, t => ({ ...G.point(t), sit: 1 })]]));
        zy.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 1 })], [5, t => ({ ...G.laugh(t), sit: 1 })], [at(1) + 1.5, t => ({ ...G.rest(t), sit: 1, yaw: 0.9 })]]));
        const t = seconds - at(1);
        maid.root.visible = shot === 1;
        walkAlong(maid, t, 1, 3.4, [[3.4, 3.6], [2.4, 2]], G.folded(t), 6);
        if (t > 3.4) { face(maid, -0.9, -0.9); maid.pose(cue(t, [[3.4, G.bow], [5, tt => G.speak(tt, 'l')]])); }
      } else {
        const t = seconds - at(2);
        cam2(seconds);
        fog.update(seconds);
        sleeper.pose({ ...G.rest(t), yaw: Math.sin(t * 0.3) * 0.3 });
        const appear = span(t, 4, 8);
        memory.visible = appear > 0.01;
        memory.rotation.y = t * 0.15;
        memory.scale.setScalar(0.1 + appear * 0.35);
        boy.pose({ ...G.folded(t), sit: 1, pitch: -0.1 });
        ghostCart.update(t, false);
      }
    };
  },
});
