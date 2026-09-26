import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { DARK, WOOD } from '../../../stage/architecture';
import { boatRoom, study } from '../../../stage/locations';
import { reeds, range, water, willow } from '../../../stage/nature';
import { dishes, roundTable, chair } from '../../../stage/props';
import { boat } from '../../../stage/vehicles';
import { mist } from '../../../stage/fx';
import { DUSK, lights, move, sets } from '../../../stage/direct';

/*
 * Chapter 2, paragraph 8. In the tutor's room Yuanmao kowtows to his father, and Pincai and the old
 * man bow each other back and forth over the seat of honour. Ziyu takes Pincai to the boat-room over
 * the pond, the pages bring tea, and Pincai leans in: "Do you still know me?" His memory opens on a
 * river landing years ago: a five-year-old Ziyu hanging on to a young man's sash as the boat is about
 * to leave, refusing to let go. Then supper in the study: Pincai talks and talks, praising Yuanmao,
 * while Yuanmao keeps his head down over his bowl.
 */

export default defineScene({
  seed: 2008,
  build: (kit, story) => {
    const { groups: [tutorRoom, annex, landing, supper], show } = sets(kit, 4);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: father and son ------------------------------------------------------------------
    const s1 = study(kit, tutorRoom);
    const father = figure(kit, tutorRoom, CAST.teacher, 0, -2);
    const son = figure(kit, tutorRoom, CAST.yuanmao, 0, 0.2);
    const pc = figure(kit, tutorRoom, CAST.pincai, 1.4, 0.8);
    const zy = figure(kit, tutorRoom, CAST.ziyu, -1.6, 1);
    lights(kit, tutorRoom, { key: [-4, 8, 6], intensity: 1 });
    const cam1 = move(kit, tutorRoom, [[0, [2.6, 1.5, 3], [0, 1, -0.8]], [9, [-2.4, 1.6, 2.6], [0.6, 1.3, -0.6]]]);

    // --- Shot 2: tea in the boat-room ----------------------------------------------------------------
    const b = boatRoom(kit, annex);
    const ziyu = figure(kit, annex, CAST.ziyu, -0.95, 0);
    const pincai = figure(kit, annex, CAST.pincai, 0.95, 0);
    const pages = [figure(kit, annex, CAST.page, -0.3, 4.2), figure(kit, annex, CAST.page, 0.3, 4.6)];
    lights(kit, annex, { key: [6, 9, 6], intensity: 1 });
    const cam2 = move(kit, annex, [[at(1), [0, 1.6, 5.6], [0, 1.2, 0]], [at(1) + 5, [1.2, 1.3, 1.6], [-0.9, 1.3, 0]], [at(2), [-1.2, 1.3, 1.4], [0.9, 1.35, 0]]]);

    // --- Shot 3: clinging to his sash ----------------------------------------------------------------
    water(kit, landing, { w: 300, d: 100, z: -40 });
    // A plank landing on piles at the water's edge.
    kit.box(landing, tone(WOOD), [0, 0.15, 3], [5, 0.12, 3]);
    for (const [px, pz] of [[-2.3, 1.6], [2.3, 1.6], [-2.3, 4.4], [2.3, 4.4]]) kit.box(landing, tone(DARK), [px, -0.2, pz], [0.14, 0.9, 0.14]);
    const jetty = kit.group(landing, 0, 0.21, 3);
    reeds(kit, landing, -8, 2, { w: 8, d: 2, count: 60, h: 1.2, rand });
    willow(kit, landing, 7, 4, { h: 7, rand });
    range(kit, landing, { z: -120, span: 400, height: 25, shade: 0xc9c2b7, seed: 208 });
    const vessel = boat(kit, landing, { x: 0, z: -2.4, rot: Math.PI / 2, len: 10 });
    const lady = figure(kit, vessel.deck, CAST.ladyYan, 0, 1.2);
    lady.root.position.y = 0.37; lady.root.rotation.y = -Math.PI / 2;
    const youngPc = figure(kit, jetty, { ...CAST.pincai, height: 1.55 }, 0.4, 0);
    const child = figure(kit, jetty, { ...CAST.ziyu, height: 0.95 }, -0.2, 0.1);
    const haze = mist(kit, landing, { count: 10, w: 60, y: 0, d: 30, z: -15, size: 10, opacity: 0.8 });
    lights(kit, landing, { key: [-6, 8, 8], intensity: 0.9 });
    const cam3 = move(kit, landing, [[at(2), [3, 1.2, 7], [0, 1, 3]], [at(3), [-2, 0.9, 5.4], [0.1, 0.9, 3]]]);

    // --- Shot 4: dinner in the study -----------------------------------------------------------------
    study(kit, supper, { night: true });
    roundTable(kit, supper, { z: 0.6, r: 0.8 });
    dishes(kit, supper, 0.84, [[0, 0.6], [0.3, 0.8], [-0.3, 0.4]], rand);
    const diners = [[0, -0.4, CAST.teacher], [-1.05, 0.9, CAST.pincai], [1.05, 0.9, CAST.yuanmao], [0, 1.65, CAST.ziyu]].map(([x, z, spec]) => {
      chair(kit, supper, { x: x as number, z: z as number, rot: Math.atan2(-(x as number), 0.6 - (z as number)) });
      return figure(kit, supper, spec as typeof CAST.ziyu, x as number, z as number);
    });
    lights(kit, supper, { key: [-3, 6, 4], intensity: 0.5, fill: 0.15 });
    const cam4 = move(kit, supper, [[at(3), [2.4, 1.8, 2.8], [0, 1, 0.6]], [36, [-2.2, 1.4, 1.6], [0.6, 1.1, 0.8]]]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.03));
        cam1(seconds);
        s1.update(seconds);
        face(father, 0, 1); face(son, 0, -2); face(pc, 0, -2); face(zy, 0, -1);
        son.pose(cue(seconds, [[0, G.kowtow], [4, G.rest]]));
        father.pose(cue(seconds, [[0, G.stroke], [4, t => ({ ...G.point(t, 'l'), yaw: 0.4 })], [6, G.salute]]));
        pc.pose(cue(seconds, [[0, G.folded], [4.5, t => G.salute(t, 0.5)], [6.5, t => ({ ...G.rest(t), r: { lift: 1.1, out: 0.6, bend: 0.3 } })]]));
        zy.pose(G.folded(seconds));
      } else if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.02));
        const t = seconds - at(1);
        cam2(seconds);
        b.update(seconds);
        face(ziyu, 0.95, 0); face(pincai, -0.95, 0);
        pages.forEach((p, i) => { walkAlong(p, t, 0.5, 3.4, [[i ? 0.3 : -0.3, i ? 4.6 : 4.2], [i ? 0.3 : -0.3, 0.6]], G.offer(t), 6); if (t > 3.4) { face(p, 0, 0); p.pose(G.bow(t, 0.4)); } });
        ziyu.pose(cue(t, [[0, t2 => ({ ...G.rest(t2), sit: 1 })], [5.6, t2 => ({ ...G.think(t2), sit: 1 })]]));
        pincai.pose(cue(t, [[0, t2 => ({ ...G.laugh(t2), sit: 1 })], [4.6, t2 => ({ ...G.speak(t2), sit: 1, bow: 0.2 })]]));
      } else if (shot === 2) {
        kit.setEnv(INK_SKY.paper(0.03));
        const t = seconds - at(2);
        cam3(seconds);
        haze.update(seconds); vessel.update(seconds);
        face(child, 0.4, 0); face(youngPc, 0, -2.4);
        child.pose({ ...G.tug(t), bow: -0.1, pitch: -0.4 });
        youngPc.pose(cue(t, [[0, G.laugh], [4, t2 => ({ ...G.rest(t2), yaw: -0.8, l: { lift: 0.6, out: 0.4, bend: 0.8 } })]]));
        lady.pose(cue(t, [[0, G.folded], [3, t2 => G.speak(t2, 'l')]]));
      } else {
        kit.setEnv(DUSK(0.035));
        const t = seconds - at(3);
        cam4(seconds);
        diners.forEach(d => face(d, 0, 0.6));
        diners[0].pose(cue(t, [[0, t2 => ({ ...G.speak(t2), sit: 1 })], [4, t2 => ({ ...G.stroke(t2), sit: 1 })]]));
        diners[1].pose(cue(t, [[0, t2 => ({ ...G.argue(t2), sit: 1 })], [4, t2 => ({ ...G.point(t2, 'l'), sit: 1 })]]));
        diners[2].pose({ ...G.drink(t), sit: 1, pitch: 0.6, bow: 0.3 });
        diners[3].pose({ ...G.rest(t), sit: 1 });
      }
    };
  },
});
