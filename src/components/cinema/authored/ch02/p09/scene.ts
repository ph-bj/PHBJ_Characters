import { defineScene } from '../../define';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { floor, hall, wall } from '../../../stage/architecture';
import { bamboo, bareTree } from '../../../stage/nature';
import { bed, cup, lamp, pot, table } from '../../../stage/props';
import { moon } from '../../../stage/performance';
import { DUSK, lights, move, sets } from '../../../stage/direct';

/*
 * Chapter 2, paragraph 9. Late tea in the visitors' room by lamplight: Pincai talks of the south,
 * Ziyu listens, and Yuanmao's head keeps nodding until he jerks awake; Pincai laughs and rises. Ziyu
 * sees them into their room, the beds made up, bows "rest early", and steps out; Jun'er lights a
 * lantern and the two cross the moonlit courts back to the main house, the lantern swinging, the
 * camera craning up to watch the little light go.
 */

export default defineScene({
  seed: 2009,
  build: (kit, story) => {
    const { groups: [court], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    floor(kit, court, 60, 50, { kind: 'bricks', shade: 0xcfc8bc });
    const guestRoom = hall(kit, court, { x: 0, z: -4, w: 7, d: 5, h: 3, bays: 3, base: 0.3 });
    guestRoom.open(1);
    const body = guestRoom.body;
    table(kit, body, { w: 1, d: 0.6, h: 0.76, z: 0.4 });
    cup(kit, body, -0.2, 0.76, 0.4, 1.3); cup(kit, body, 0.2, 0.76, 0.4, 1.3); pot(kit, body, 0, 0.76, 0.3);
    bed(kit, body, { x: -2.2, z: -1.2, rot: Math.PI / 2 });
    bed(kit, body, { x: 2.2, z: -1.2, rot: -Math.PI / 2 });
    const glow = lamp(kit, body, { x: 0.3, z: 0.2, y: 0.76, h: 0.35, power: 3 });
    wall(kit, court, -14, 8, 14, 8, 2.6); wall(kit, court, -14, -30, 14, -30, 2.6);
    hall(kit, court, { x: 0, z: -24, w: 13, d: 6, h: 3.6, doors: false });
    const grove = bamboo(kit, court, -8, -2, { h: 6, count: 10, rand });
    bareTree(kit, court, 7, -12, 6, rand);
    moon(kit, court, -10, 18, -70, 5);
    const pc = figure(kit, body, CAST.pincai, 0.8, 0.4);
    const ym = figure(kit, body, CAST.yuanmao, -0.8, 0.4);
    const zy = figure(kit, court, CAST.ziyu, 0, -3.2);
    const jun = figure(kit, court, CAST.page, 1.6, 2);
    const handLamp = lamp(kit, jun.hands.r, { h: 0.02, power: 2.6, range: 7 });
    handLamp.group.position.y = -0.3; handLamp.group.scale.setScalar(0.7);
    lights(kit, court, { key: [-6, 10, -12], intensity: 0.5, fill: 0.2 });
    const cam = move(kit, court, [
      [0, [2.6, 1.6, 0.2], [0, 1.2, -3.6]],
      [8, [-2, 1.4, 0], [0.4, 1.1, -3.6]],
      [at(1), [0.4, 1.7, 2.4], [0, 1.3, -3.4]],
      [at(1) + 8, [3, 1.8, 4.4], [0.4, 1.3, 0]],
      [36, [0, 16, 10], [0, 0, -18]],
    ]);

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(DUSK(0.03));
      cam(seconds);
      glow.update(seconds);
      grove.update(seconds);
      face(pc, -0.8, 0.4); face(ym, 0.8, 0.4);
      pc.pose(cue(seconds, [[0, t => ({ ...G.speak(t), sit: 1 })], [7, G.laugh], [9, t => G.salute(t, 0.3)]]));
      ym.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 1, pitch: 0.5 * Math.max(0, Math.sin(t * 0.8)) })], [5, t => ({ ...G.rest(t), sit: 1, pitch: -0.2 })], [9, G.rest]]));
      if (shot === 0) {
        zy.root.position.set(0, 0.3, -4.1); face(zy, 0, 0);
        zy.pose({ ...G.rest(seconds), sit: 1 });
        jun.root.visible = false;
      } else {
        const t = seconds - at(1);
        jun.root.visible = true;
        if (t < 6) { zy.root.position.set(0, 0.3, -3.2); face(zy, 0, -5); zy.pose(cue(t, [[0, G.folded], [2, tt => G.bow(tt, 0.5)], [4, G.speak]])); }
        else walkAlong(zy, t, 6, 20, [[0, -3.2], [0.4, 1.6], [2, 5], [0, -12], [0, -21]], G.folded(t), 4.4);
        if (t < 7) { face(jun, 0, -2); jun.pose(t > 4 ? G.bow(t, 0.4) : G.rest(t)); }
        else walkAlong(jun, t, 7, 20, [[1.6, 2], [1.2, 4.4], [0.8, -12], [0.8, -21]], { ...G.rest(t), r: { lift: 0.7, out: 0.25, bend: 0.3 } }, 4.4);
        handLamp.update(seconds);
        handLamp.group.visible = t > 5;
        zy.root.visible = jun.root.visible = t < 20;
      }
    };
  },
});
