import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { courtyard, gateLane, study } from '../../../stage/locations';
import { book } from '../../../stage/props';
import { petals } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 5. The camera slips in through the study's moon window as the tutor leaves
 * and Ziyu is left alone with his books; two friends come down the lane to the Mei gate, which
 * swings open for them; in the courtyard the camera circles Yan Zhongqing, Lady Yan's nephew, as
 * he greets his cousin, while his aunt watches from the steps of the main hall.
 */

export default defineScene({
  seed: 1005,
  build: (kit, story) => {
    const { groups: [inside, lane, yard], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: alone in the study --------------------------------------------------------------
    const room = study(kit, inside);
    const ziyu = figure(kit, inside, CAST.ziyu, ...room.seats.desk);
    const volume = book(kit, inside, { x: -0.1, y: 0.83, z: -2.1, w: 0.22, d: 0.3 });
    const tutor = figure(kit, inside, CAST.teacher, 1.4, -2.2);
    lights(kit, inside, { key: [-6, 9, 5], intensity: 0.9 });
    const cam1 = move(kit, inside, [
      [0, [-2.4, 2.2, -9.5], [-1.4, 1.6, -2.5]],
      [4, [-2.2, 2.0, -5.2], [-0.5, 1.3, -2.4]],
      [8, [-1.2, 1.7, 1.2], [0, 1.1, -2.7]],
      [12, [1.3, 1.45, -0.6], [0, 1.25, -2.9]],
    ]);

    // --- Shot 2: two friends arrive at the gate --------------------------------------------------
    const house = gateLane(kit, lane);
    const zhongqing = figure(kit, lane, CAST.zhongqing, -16, 3.3);
    const nanxiang = figure(kit, lane, CAST.nanxiang, -17.2, 3.9);
    const porter = figure(kit, lane, CAST.servant, 0, -1.5);
    lights(kit, lane, { key: [8, 12, 10], intensity: 1 });
    const cam2 = move(kit, lane, [
      [at(1), [-18, 1.4, 8], [-15, 1.4, 3]],
      [at(1) + 5, [-9, 1.6, 8.5], [-6, 1.5, 3.2]],
      [at(1) + 9, [-3, 2.2, 9], [-0.6, 1.8, 1]],
      [at(2), [2.6, 2.4, 8], [-0.5, 2.0, 0]],
    ]);

    // --- Shot 3: Yan Zhongqing, Lady Yan's nephew -------------------------------------------------
    const court = courtyard(kit, yard);
    const zq = figure(kit, yard, CAST.zhongqing, 0.9, 1.5);
    const zy = figure(kit, yard, CAST.ziyu, -0.9, -0.2);
    const nx = figure(kit, yard, CAST.nanxiang, 2.6, 2.4);
    const aunt = figure(kit, yard, CAST.ladyYan, 0.6, -9.4);
    const maid = figure(kit, yard, CAST.maid, 1.6, -9.7);
    aunt.root.position.y = maid.root.position.y = 0.45;
    const blossom = petals(kit, yard, { count: 70, w: 12, h: 5, d: 8, z: -2 });
    lights(kit, yard, { key: [7, 10, 9], intensity: 1 });

    return (seconds: number, shot: number) => {
      show(shot);
      kit.setEnv(INK_SKY.paper(shot === 1 ? 0.018 : 0.03));
      if (shot === 0) {
        cam1(seconds);
        room.update(seconds);
        ziyu.pose(cue(seconds, [[0, t => ({ ...G.salute(t, 0.2), sit: 1 })], [3.4, t => ({ ...G.read(t), sit: 1 })], [8, t => ({ ...G.think(t), sit: 1 })]]));
        volume.open(span(seconds, 3.4, 4.4));
        // The tutor bows out and leaves by the open front of the room.
        walkAlong(tutor, seconds, 1.6, 7.5, [[1.4, -2.2], [2.4, -0.6], [3.6, 2.5], [4.5, 7]], G.behind(seconds));
        if (seconds < 1.6) { face(tutor, 0, -2.9); tutor.pose(G.salute(seconds, 0.3)); }
        tutor.root.visible = seconds < 7.4;
      } else if (shot === 1) {
        const t = seconds - at(1);
        cam2(seconds);
        walkAlong(zhongqing, t, 0, 8, [[-16, 3.3], [-8, 3.3], [-1.2, 2.2]], G.folded(t));
        walkAlong(nanxiang, t, 0, 8.6, [[-17.2, 3.9], [-9, 4.0], [0.4, 2.8]], G.speak(t, 'r'));
        if (t > 8) { face(zhongqing, 0, 0); zhongqing.pose(G.salute(t)); }
        if (t > 8.6) { face(nanxiang, 0, 0); nanxiang.pose(G.laugh(t)); }
        house.gate.open(span(t, 7.4, 9.4));
        porter.root.position.z = -1.5 + span(t, 9, 10.5) * 2;
        porter.pose(t > 9.8 ? G.bow(t, 0.5) : G.rest(t));
      } else {
        const t = seconds - at(2);
        const a = -1.1 + span(t, 0, 12) * 1.9;
        kit.camera.position.set(yard.position.x + 0.9 + Math.sin(a) * 3.4 * (kit.portrait() ? 1.5 : 1), 1.75 - span(t, 0, 12) * 0.2, 1.5 + Math.cos(a) * 3.4 * (kit.portrait() ? 1.5 : 1));
        kit.camera.lookAt(yard.position.x + 0.5, 1.5, 0.8);
        face(zq, -0.9, -0.2); face(zy, 0.9, 1.5); face(nx, -0.9, -0.2);
        zq.pose(cue(t, [[0, tt => G.salute(tt, 0.35)], [3.5, G.speak], [8, G.folded]]));
        zy.pose(cue(t, [[0, tt => G.salute(tt, 0.3)], [4, G.rest], [8, tt => G.speak(tt, 'l')]]));
        nx.pose(G.fan(t));
        aunt.pose(G.folded(t)); maid.pose(G.folded(t + 1));
        face(aunt, 0, 0);
        blossom.update(seconds);
        court.main.open(1);
      }
    };
  },
});
