import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { gate, plaque, theatreStage } from '../../../stage/architecture';
import { ground, range, willow } from '../../../stage/nature';
import { study } from '../../../stage/locations';
import { ingots, writing } from '../../../stage/props';
import { mist } from '../../../stage/fx';
import { DUSK, lights, move, orbit, sets, span } from '../../../stage/direct';
import { BOYS } from '../../ch01/actors';
import { JIN_ER, PINCAI, XU_SHUN, YE_MAOLIN } from '../actors';
import { accountsRoom } from '../places';

/*
 * Chapter 3, paragraph 7. A bare stage in the mist, a slip announcing 腊月初十: the curtain door
 * parts and Qiguan steps out for his first bow, as the other boys of the boat, far off, walk away
 * with their masters. Then Willow Lane: willows over a whitewashed wall and the Lianjin troupe's
 * gate, where Ye Maolin bows Pincai an invitation. Back in the accounts room Xu Shun and Jin return,
 * the date settles in ink (正月初六 · 姑苏会馆) and silver ingots are set out one by one as the
 * deposit. Night: through the study's window Ziyu bends over his lesson under the lamp.
 */

export default defineScene({
  seed: 3007,
  build: (kit, story) => {
    const { groups: [void_, lane, office, night], show } = sets(kit, 4);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Qiguan's debut --------------------------------------------------------------------------------
    ground(kit, void_, { w: 200, d: 200, height: 1, flatten: 30, shade: 0xe6e0d6 });
    const st = theatreStage(kit, void_, { w: 8, d: 6, h: 1, tall: 3.8 });
    const qi = figure(kit, st.deck, BOYS.qiguan, -2.6, -2.6);
    const date = writing(kit, void_, '腊月初十', { size: 0.4, paper: 0xf4f0e8, margin: 0.3, x: 5.4, y: 3.4, z: 1 });
    const others = [BOYS.qinguan, CAST.youth, CAST.youth].map((spec, k) => figure(kit, void_, spec, -8 - k * 1.5, 6));
    const masters = [YE_MAOLIN, CAST.elder, CAST.merchant].map((spec, k) => figure(kit, void_, spec, -7.4 - k * 1.5, 6.4));
    const haze = mist(kit, void_, { count: 8, w: 50, y: 1, d: 20, z: -10, size: 14, opacity: 0.55 });
    lights(kit, void_, { key: [5, 10, 10], intensity: 1 });
    const cam1 = move(kit, void_, [[0, [0, 2.2, 9], [0, 2.2, -1]], [at(1), [-3, 2.6, 11], [-2, 1.6, 2]]]);

    // --- Willow Lane --------------------------------------------------------------------------------------
    ground(kit, lane, { w: 200, d: 160, height: 0.5, flatten: 30, shade: 0xd9d3c9 });
    const door = gate(kit, lane, { w: 3, h: 3.2, wallSpan: 30 });
    const sign = plaque(kit, lane, 2, 0.6, 0, 3.5, 0.3);
    writing(kit, sign, '联锦班', { size: 0.34, margin: 0.1, z: 0.07 });
    for (const x of [-9, -5, 6, 10]) willow(kit, lane, x, 3 + rand() * 2, { h: 6.5, rand });
    range(kit, lane, { z: -110, span: 400, height: 28, shade: 0xc9c2b7, seed: 307 });
    const ye = figure(kit, lane, YE_MAOLIN, 0.6, 1.6);
    const visitor = figure(kit, lane, PINCAI, 3, 7);
    lights(kit, lane, { key: [6, 10, 10], intensity: 1 });
    const cam2 = move(kit, lane, [[at(1), [6, 1.8, 11], [0, 2, 0]], [at(2), [3.4, 1.7, 6.5], [0.6, 1.5, 1.6]]]);

    // --- The deposit --------------------------------------------------------------------------------------
    const room = accountsRoom(kit, office);
    const [tx, tz] = room.table;
    const xu = figure(kit, office, XU_SHUN, tx + 0.2, tz - 0.9);
    const jin = figure(kit, office, JIN_ER, tx - 0.4, tz + 1);
    const ye2 = figure(kit, office, YE_MAOLIN, tx + 0.9, tz + 0.8);
    const silver = Array.from({ length: 5 }, (_, k) => ingots(kit, office, tx - 0.3 + k * 0.15, 0.8, tz - 0.1, 1));
    const deal = writing(kit, office, ['正月初六', '姑苏会馆'], { size: 0.24, paper: 0xf4f0e8, margin: 0.3, x: tx, y: 2.3, z: tz - 0.6 });
    const cam3 = orbit(kit, office, [tx, 1.1, tz], { r: 2.6, y: 1.9, a0: 0.8, a1: -0.4, t0: at(2), t1: at(3), lookY: 1.1 });

    // --- Lesson night -------------------------------------------------------------------------------------
    const s = study(kit, night, { night: true });
    const ziyu = figure(kit, night, CAST.ziyu, ...s.seats.desk);
    const tutor = figure(kit, night, CAST.teacher, ...s.seats.guestA);
    const cam4 = move(kit, night, [[at(3), [0.6, 1.8, 5], [0, 1.2, -2.6]], [36, [0.3, 1.45, 0.4], [0, 1.1, -2.7]]]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam1(seconds);
        haze.update(seconds);
        walkAlong(qi, seconds, 1, 4, [[-2.6, -2.6], [-0.5, -0.4], [0, 1]], G.rest(seconds), 4);
        if (seconds > 4) { face(qi, 0, 8); qi.pose(cue(seconds, [[4, G.pose], [6.5, t => G.bow(t, 0.5)]])); }
        date.set(span(seconds, 2, 4));
        others.forEach((f, k) => walkAlong(f, seconds, 1 + k * 0.3, 9, [[-8 - k * 1.5, 6], [-20 - k * 2, 2]], G.rest(seconds), 5));
        masters.forEach((f, k) => walkAlong(f, seconds, 1 + k * 0.3, 9, [[-7.4 - k * 1.5, 6.4], [-19.4 - k * 2, 2.4]], G.behind(seconds), 5));
        return;
      }
      if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam2(seconds);
        door.open(span(seconds, at(1), at(1) + 2));
        walkAlong(visitor, seconds, at(1), at(1) + 4, [[3, 7], [1.6, 3]], G.rest(seconds), 5);
        if (seconds > at(1) + 4) { face(visitor, 0.6, 1.6); visitor.pose(G.salute(seconds, 0.3)); }
        face(ye, visitor.root.position.x, visitor.root.position.z);
        ye.pose(cue(seconds, [[at(1), G.folded], [at(1) + 3, t => G.bow(t, 0.4)], [at(1) + 5.5, t => ({ ...G.point(t, 'l'), yaw: -0.6 })]]));
        return;
      }
      if (shot === 2) {
        kit.setEnv(INK_SKY.paper(0.03));
        cam3(seconds);
        room.update(seconds);
        for (const f of [xu, jin, ye2]) face(f, tx, tz);
        xu.pose(cue(seconds, [[at(2), G.speak], [at(2) + 4, t => ({ ...G.offer(t), bow: 0.4 })], [at(2) + 8, G.folded]]));
        jin.pose(cue(seconds, [[at(2), G.rest], [at(2) + 3, G.laugh], [at(2) + 6, t => G.salute(t, 0.35)]]));
        ye2.pose(cue(seconds, [[at(2), G.folded], [at(2) + 6, G.laugh]]));
        silver.forEach((g, k) => { g.visible = seconds > at(2) + 4 + k * 0.6; });
        deal.set(span(seconds, at(2) + 1, at(2) + 3.5));
        return;
      }
      kit.setEnv(DUSK(0.03));
      cam4(seconds);
      s.update(seconds);
      face(ziyu, 0, 1); ziyu.pose({ ...G.write(seconds), sit: 1 });
      face(tutor, 0, -2.6); tutor.pose({ ...G.read(seconds), sit: 1 });
    };
  },
});
