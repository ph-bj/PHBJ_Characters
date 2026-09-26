import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { chamber, courtyard, formalHall, gateLane, theatre } from '../../../stage/locations';
import { card } from '../../../stage/props';
import { cart, horse } from '../../../stage/vehicles';
import { blendEnv, DUSK, lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 2, paragraph 1. Ziyu's cart comes home still full of the boy's face, and at the Mei gate
 * stand Commissioner Wang's carriage and three horses, grooms stamping in the cold. In the hall
 * Wenhui booms about the spring gathering, and the camera drifts into his words: the Suzhou Guild
 * Hall's stage with a few scattered tables. In the inner room, with Lady Yan, he asks Shixie to find a
 * husband for Qionghua. Then a maid comes through the middle gate holding up two red visiting cards,
 * and the camera reads them.
 */

export default defineScene({
  seed: 2001,
  build: (kit, story) => {
    const { groups: [lane, hallSet, inner, yard], show } = sets(kit, 4);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: a carriage and three horses at the gate ----------------------------------------------
    const g = gateLane(kit, lane);
    const wangs = cart(kit, lane, { x: 4, z: 4, rot: -Math.PI / 2, hood: 0x2f2a26 });
    const spare = [horse(kit, lane, { x: 7.4, z: 5.4, rot: -Math.PI / 2 }), horse(kit, lane, { x: 9, z: 5.2, rot: -Math.PI / 2 })];
    const grooms = [figure(kit, lane, CAST.servant, 6.2, 6), figure(kit, lane, CAST.servant, 8.4, 6.2)];
    const own = cart(kit, lane, { x: -14, z: 3.6, rot: Math.PI / 2, fur: true });
    const zy = figure(kit, lane, { ...CAST.ziyu, fur: true }, -0.8, 3.4);
    lights(kit, lane, { key: [-8, 8, 10], intensity: 0.9 });
    const cam1 = move(kit, lane, [
      [0, [-12, 1.7, 8], [-8, 1.4, 3.6]],
      [8, [-2.6, 1.8, 9], [3, 1.4, 4.4]],
    ]);

    // --- Shot 2: the spring gathering ---------------------------------------------------------------
    const hall = formalHall(kit, hallSet);
    const shixie = figure(kit, hallSet, CAST.shixie, ...hall.seats.hostL);
    const wenhui = figure(kit, hallSet, CAST.wenhui, ...hall.seats.hostR);
    const guild = theatre(kit, hallSet, { x: 0, z: -40 });
    lights(kit, hallSet, { key: [-4, 10, 8], intensity: 1 });
    const cam2 = move(kit, hallSet, [
      [at(1), [2.4, 1.5, 1.6], [0.8, 1.4, -3]],
      [at(1) + 4, [0.2, 2.2, -1.8], [0, 1.8, -8]],
      [at(2), [0, 4.4, -32], [0, 2.4, -48]],
    ]);

    // --- Shot 3: a match for Qionghua ---------------------------------------------------------------
    chamber(kit, inner);
    const lady = figure(kit, inner, CAST.ladyYan, -1.4, -1.8);
    const sx2 = figure(kit, inner, CAST.shixie, 0, -2.2);
    const wh2 = figure(kit, inner, CAST.wenhui, 1.6, -1.4);
    const maid = figure(kit, inner, CAST.maid, -2.6, -2.6);
    lights(kit, inner, { key: [-3, 7, 5], intensity: 1 });
    const cam3 = move(kit, inner, [
      [at(2), [3.6, 1.6, 2.4], [0, 1.4, -1.8]],
      [at(3), [-2.4, 1.6, 2.2], [0.6, 1.5, -1.8]],
    ]);

    // --- Shot 4: two red cards -----------------------------------------------------------------------
    const c = courtyard(kit, yard);
    const bearer = figure(kit, yard, { ...CAST.maid, height: 1.55, robe: 0x9c958b }, 0, 8);
    // She carries the two cards upright before her, as if on a tray.
    const cards = [card(kit, bearer.root, '魏聘才', { x: 0.1, y: 1.12, z: 0.36, w: 0.13, h: 0.34 }), card(kit, bearer.root, '李元茂', { x: -0.1, y: 1.12, z: 0.36, w: 0.13, h: 0.34 })];
    lights(kit, yard, { key: [6, 9, 8], intensity: 0.9 });

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(blendEnv(INK_SKY.paper(0.02), DUSK(0.02), 0.2));
        cam1(seconds);
        g.gate.open(0.4);
        wangs.update(seconds, false); spare.forEach((h, i) => h.update(seconds + i, false));
        grooms.forEach(gr => { face(gr, 7, 4); gr.pose(G.hold(seconds)); });
        own.group.position.x = -14 + span(seconds, 0, 4) * 11;
        own.update(seconds, seconds < 4);
        zy.root.visible = seconds > 4.4;
        face(zy, 4, 4);
        zy.pose(cue(seconds, [[4.4, G.think], [6, G.rest]]));
      } else if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam2(seconds);
        guild.update(seconds);
        shixie.pose({ ...G.stroke(seconds), sit: 1, yaw: 0.5 });
        wenhui.pose({ ...G.argue(seconds), sit: 1, yaw: -0.5 });
      } else if (shot === 2) {
        kit.setEnv(INK_SKY.paper(0.03));
        const t = seconds - at(2);
        cam3(seconds);
        face(lady, 1.6, -1.4); face(sx2, 1.6, -1.4); face(wh2, 0, -2.2); face(maid, 0, -2);
        lady.pose(cue(t, [[0, G.folded], [3, G.speak]]));
        wh2.pose(cue(t, [[0, G.speak], [3, G.salute], [6, G.laugh]]));
        sx2.pose(cue(t, [[0, G.stroke], [6, G.speak]]));
        maid.pose(G.folded(t));
      } else {
        kit.setEnv(INK_SKY.paper(0.02));
        const t = seconds - at(3);
        c.flowerGate.open(span(t, 0, 1.4));
        walkAlong(bearer, t, 0.6, 4, [[0, 8], [0, 3]], G.offer(t), 5);
        if (t > 4) { face(bearer, 0, -4); bearer.pose(G.offer(t)); }
        cards.forEach(cd => { cd.rotation.x = -0.15; });
        const u = span(t, 3, 7);
        const tx = bearer.root.position.z;
        const cp: [number, number, number] = [0.9 - u * 0.7, 1.45, tx - 2.8 + u * 1.1];
        const look: [number, number, number] = [0, 1.15, tx - 0.36];
        kit.camera.position.set(yard.position.x + cp[0], cp[1], cp[2]);
        kit.camera.lookAt(yard.position.x + look[0], look[1], look[2]);
        if (kit.portrait()) kit.camera.position.z -= 0.6;
      }
    };
  },
});
