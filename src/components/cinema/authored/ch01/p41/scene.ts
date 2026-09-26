import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { courtyard, gateLane, study } from '../../../stage/locations';
import { book, lamp } from '../../../stage/props';
import { album } from '../../../stage/performance';
import { blendEnv, DUSK, lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 41. At the gate Nanxiang hauls Zhongqing off by the sleeve, still arguing,
 * and Ziyu bows them out. Back at his desk Ziyu turns the album over and thinks of the actors he has
 * seen, a dull, stiff figure on a stage that rises faintly beside him, then fades; he puts the book
 * away. At dusk the tutor returns, Ziyu reads a while, and a maid comes with a lantern to call him in
 * to his mother, the two of them crossing the darkening courtyard.
 */

export default defineScene({
  seed: 1041,
  build: (kit, story) => {
    const { groups: [lane, room, yard], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: dragged away ---------------------------------------------------------------------
    const house = gateLane(kit, lane);
    const nx = figure(kit, lane, CAST.nanxiang, 0.4, 0.8);
    const zq = figure(kit, lane, CAST.zhongqing, -0.4, 0.9);
    const zy = figure(kit, lane, CAST.ziyu, 0, -0.4);
    lights(kit, lane, { key: [8, 12, 10], intensity: 1 });
    const cam1 = move(kit, lane, [
      [0, [-4, 1.7, 6.5], [0, 1.4, 0.5]],
      [12, [6, 2, 7], [3, 1.5, 3]],
    ]);

    // --- Shot 2: nothing like the actors he knew ----------------------------------------------------
    const s = study(kit, room);
    const reader = figure(kit, room, CAST.ziyu, ...s.seats.desk);
    const volume = album(kit, room, { y: 0.83, z: -2.2 });
    const memory = figure(kit, room, { ...CAST.dan, face: 'plain', robe: 0x8c857c }, 1.6, -1.2);
    memory.shadow.visible = false;
    lights(kit, room, { key: [-5, 8, 6], intensity: 0.9 });
    const cam2 = move(kit, room, [
      [at(1), [-1.4, 1.5, -0.4], [0, 1.2, -2.6]],
      [at(1) + 6, [1.2, 1.5, 0.4], [0.8, 1.3, -1.8]],
      [at(2), [2.8, 1.8, 3], [3.6, 1.6, -3]],
    ]);

    // --- Shot 3: back to his books; his mother calls ----------------------------------------------
    const c = courtyard(kit, yard);
    const tutor = figure(kit, yard, CAST.teacher, 1, 9);
    const student = figure(kit, yard, CAST.ziyu, -6.6, -2);
    const maid = figure(kit, yard, CAST.maid, 0.6, -8.5);
    const light = lamp(kit, maid.hands.r, { h: 0.02, power: 3, range: 8 });
    light.group.position.y = -0.3; light.group.scale.setScalar(0.7);
    const text = book(kit, student.hands.r, { w: 0.16, d: 0.22 });
    text.group.rotation.set(0.4, 0, -1.2);
    lights(kit, yard, { key: [6, 8, 8], intensity: 0.7 });
    const cam3 = move(kit, yard, [
      [at(2), [2.4, 1.8, 13], [1, 1.5, 7]],
      [at(2) + 5, [-2, 2.4, 4], [-6, 1.4, -2]],
      [36, [3, 3.2, 3], [-1, 1.4, -6]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam1(seconds);
        house.gate.open(1);
        const drag = span(seconds, 2, 11);
        nx.root.position.set(0.4 + drag * 8, 0, 0.8 + drag * 2.4);
        zq.root.position.set(-0.4 + drag * 7.6, 0, 0.9 + drag * 2.4);
        face(nx, 12, 4); face(zq, 12, 4);
        nx.pose({ ...G.tug(seconds), walk: seconds > 2 && seconds < 11 ? seconds * 6 : undefined });
        zq.pose({ ...G.argue(seconds), walk: seconds > 2 && seconds < 11 ? seconds * 6 : undefined, lean: 0.15 });
        face(zy, nx.root.position.x, nx.root.position.z);
        zy.pose(cue(seconds, [[0, G.speak], [4, t => G.salute(t, 0.35)], [9, G.folded]]));
      } else if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.03));
        const t = seconds - at(1);
        cam2(seconds);
        s.update(seconds);
        volume.turn(span(t, 1, 2.4));
        reader.pose(cue(t, [[0, tt => ({ ...G.read(tt), sit: 1 })], [3, tt => ({ ...G.think(tt), sit: 1 })], [8, tt => ({ ...G.rest(tt), sit: 1, yaw: 0.6 })]]));
        memory.fade(0.45 * span(t, 3, 4.5) * (1 - span(t, 8, 9.5)));
        face(memory, 0, 2);
        memory.pose({ ...G.rest(t), pitch: 0.2 });
        volume.group.position.set(span(t, 9, 11) * 3.4, 0.83 + span(t, 9, 11) * 1.0, -2.2 - span(t, 9, 11) * 1.8);
      } else {
        const t = seconds - at(2);
        kit.setEnv(blendEnv(INK_SKY.paper(0.02), DUSK(0.03), span(t, 0, 10)));
        cam3(seconds);
        c.main.open(1);
        walkAlong(tutor, t, 0, 5, [[1, 9], [0.6, 2], [-5, -2.2]], G.behind(t), 5);
        if (t > 5) { face(tutor, -6.6, -2); tutor.pose(G.stroke(t)); }
        face(student, 0, -2);
        student.pose(cue(t, [[0, G.salute], [2, G.read]]));
        text.group.visible = t > 2 && t < 8;
        walkAlong(maid, t, 5, 8, [[0.6, -8.5], [-4.6, -3]], G.rest(t), 6);
        light.update(seconds);
        if (t > 8) {
          face(maid, -6.6, -2); maid.pose(G.speak(t, 'l'));
          walkAlong(student, t, 9, 12, [[-6.6, -2], [-1, -7.6]], G.folded(t), 5);
          walkAlong(maid, t, 9.2, 12, [[-4.6, -3], [0.2, -8]], G.rest(t), 5);
        }
      }
    };
  },
});
