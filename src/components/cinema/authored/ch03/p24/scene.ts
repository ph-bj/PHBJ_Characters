import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { gate, plaque } from '../../../stage/architecture';
import { street } from '../../../stage/locations';
import { writing } from '../../../stage/props';
import { cart } from '../../../stage/vehicles';
import { lights, move, sets, span } from '../../../stage/direct';
import { FU_SAN, GUI_FEN, PINCAI, RONGGUAN, SI_ER } from '../actors';
import { earring } from '../places';
import { pitTable } from '../table';

/*
 * Chapter 3, paragraph 24. "Brother Wei, the play is no good today." Fu leans across the table
 * with the invitation; Pincai presses to be host, and Fu laughs yes. Then, in close-up, Fu hitches
 * up a boot and draws out a leather folio, peels off a banknote and hands it to his man, who takes
 * it across to the usher; Pincai bows his thanks. The party rises and threads out through the pit,
 * and outside the Sanle Garden's gate, under its board, their carts are waiting in the street.
 */

export default defineScene({
  seed: 3024,
  build: (kit, story) => {
    const { groups: [hall, road], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const T = pitTable(kit, hall);
    const pincai = figure(kit, hall, PINCAI, 0, 0);
    const fu = figure(kit, hall, FU_SAN, 0, 0);
    const gui = figure(kit, hall, GUI_FEN, 0, 0);
    const rong = figure(kit, hall, RONGGUAN, 0, 0);
    earring(kit, rong);
    const man = figure(kit, hall, { ...CAST.servant, robe: 0x5a534c }, T.tx + 1.3, T.tz + 1.5);
    const usher = figure(kit, hall, CAST.servant, T.tx + 3.4, T.tz + 3.4);
    const folio = kit.group(fu.hands.r, 0, -0.03, 0.05);
    kit.box(folio, tone(0x3f3a35), [0, 0, 0], [0.1, 0.02, 0.16]);
    const note = kit.mesh(new THREE.PlaneGeometry(0.09, 0.16).rotateX(-Math.PI / 2), tone(0xf4f0e8, true), folio, 0.04, 0.015, 0);
    const handed = kit.mesh(new THREE.PlaneGeometry(0.09, 0.16), tone(0xf4f0e8, true), man.hands.r, 0, -0.02, 0.06);
    const [px, pz] = T.spot('pincai');
    const [fx, fz] = T.spot('fu');
    const cam1 = move(kit, hall, [
      [0, [fx + 1.2, 1.5, fz - 1.6], [fx - 0.4, 1.3, fz]],
      [at(1), [fx + 0.6, 1, fz - 0.6], [fx, 0.5, fz]],
      [at(1) + 5, [fx + 1.2, 1.4, fz + 0.2], [fx + 1.4, 1.1, fz + 1.4]],
      [at(2), [T.tx + 3, 2, T.tz - 1.6], [T.tx + 1, 1.2, T.tz + 2]],
    ]);
    const walkers = [pincai, fu, gui, rong];

    // --- Outside the gate ---------------------------------------------------------------------------------
    const st = street(kit, road);
    const door = gate(kit, road, { x: -6, z: -8, w: 2.6, h: 3, wallSpan: 10 });
    door.group.rotation.y = Math.PI / 2;
    const sign = plaque(kit, road, 2.2, 0.7, -5.8, 3.5, -8);
    sign.rotation.y = Math.PI / 2;
    writing(kit, sign, '三乐园', { size: 0.4, margin: 0.1, z: 0.07 });
    const carts = [0, 1].map(k => cart(kit, road, { x: -2, z: -5 - k * 4.4, rot: Math.PI, hood: k ? 0x3f3a35 : 0x6e675f }));
    const party = [PINCAI, FU_SAN, GUI_FEN, RONGGUAN, SI_ER].map((s, k) => figure(kit, road, s, -6.4, -8.4 + k * 0.4));
    lights(kit, road, { key: [8, 10, 6], intensity: 1 });
    const cam2 = move(kit, road, [[at(2) + 5, [2.4, 1.8, -3], [-5.6, 1.6, -8]], [36, [1.6, 2.6, 2], [-3.2, 1.2, -7]]]);

    return (seconds: number, shot: number) => {
      const out = shot === 2 && seconds > at(2) + 5;
      show(out ? 1 : 0);
      kit.setEnv(INK_SKY.paper(0.02));
      if (out) {
        cam2(seconds);
        st.update(seconds);
        door.open(1);
        carts.forEach((c, k) => c.update(seconds + k, false));
        party.forEach((f, k) => walkAlong(f, seconds, at(2) + 5 + k * 0.3, at(2) + 9 + k * 0.3, [[-6.4, -8.4 + k * 0.4], [-3.4, -7.2 + k * 0.5], [-3 + (k % 2) * 0.3, -5 - (k < 2 ? 0 : 4.4) + k * 0.2]], k === 1 ? G.laugh(seconds) : G.rest(seconds), 5));
        return;
      }
      T.th.update(seconds);
      cam1(seconds);
      const leaving = seconds > at(2);
      if (!leaving) {
        T.sit(pincai, 'pincai', cue(seconds, [[0, G.rest], [5, G.speak], [at(1) + 7, t => ({ ...G.salute(t, 0.3) })]]), [fx, fz]);
        pincai.root.position.z = pz - 0.45;
        T.sit(fu, 'fu', cue(seconds, [[0, G.speak], [8, G.laugh], [at(1), t => ({ ...G.rest(t), bow: 0.55, r: { lift: 0.2, out: 0.3, bend: 0.4 } })], [at(1) + 2.5, t => ({ ...G.offer(t), bow: 0.1 })], [at(1) + 5, G.laugh]]), [px, pz]);
        T.sit(gui, 'gui', G.rest(seconds));
        T.sit(rong, 'rong', G.laugh(seconds));
      } else walkers.forEach((f, k) => { walkAlong(f, seconds, at(2) + k * 0.3, at(2) + 5, [T.spot(['pincai', 'fu', 'gui', 'rong'][k] as 'fu'), [T.tx + 2 + k * 0.3, T.tz + 2], [T.tx + 5, T.tz + 6 + k * 0.4]], G.rest(seconds), 5); });
      folio.visible = seconds > at(1) && seconds < at(1) + 3;
      note.visible = seconds < at(1) + 2.4;
      handed.visible = seconds > at(1) + 2.4 && seconds < at(1) + 6.5;
      walkAlong(man, seconds, at(1) + 1, at(1) + 2.4, [[T.tx + 1.3, T.tz + 1.5], [fx + 0.4, fz + 0.6]], G.rest(seconds), 5);
      if (seconds > at(1) + 2.4) walkAlong(man, seconds, at(1) + 3, at(1) + 6, [[fx + 0.4, fz + 0.6], [T.tx + 3, T.tz + 3]], G.hold(seconds), 5);
      if (seconds > at(1) + 1 && seconds < at(1) + 3) { face(man, fx, fz); man.pose(G.offer(seconds)); }
      face(usher, man.root.position.x, man.root.position.z);
      usher.pose(seconds > at(1) + 6 ? { ...G.bow(seconds, 0.5) } : G.folded(seconds));
      man.fade(1 - span(seconds, at(2) + 2, at(2) + 3));
    };
  },
});
