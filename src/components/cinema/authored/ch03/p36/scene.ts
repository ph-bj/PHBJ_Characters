import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, face, figure, tone, walkAlong } from '../../../stage/figure';
import { gate, paifang, plaque, shopRow } from '../../../stage/architecture';
import { ground, range } from '../../../stage/nature';
import { writing } from '../../../stage/props';
import { aim, lights, move, sets } from '../../../stage/direct';
import { FU_SAN, GUI_FEN } from '../actors';
import { inn } from '../inn';

/*
 * Chapter 3, paragraph 36. The three drift back from the doorway to their table, and Rongguan
 * sticks out his tongue. A round of finger-guessing, hands flying across the table. Gui and Pincai
 * both reach for the bill; Fu waves them down and pays the waiter himself. Then his directions,
 * staged: the Golden Archway over an East City street, a tea shop with its banner, Fu's gate
 * opposite, and next door Gui's gate criss-crossed with the Ministry of Revenue's paper seals.
 */

export default defineScene({
  seed: 3036,
  build: (kit, story) => {
    const { groups: [upstairs, lane], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;
    const I = inn(kit, upstairs);
    I.setTable(0, rand);
    I.rooms[1].table.visible = false;
    for (const w of ['xi', 'chunlan', 'a', 'b', 'c'] as const) I.who(w).root.visible = false;
    const waiter = I.waiter(-4.6, 4);
    const L = I.left;
    const cam1 = move(kit, upstairs, [[0, [-1.6, 2, 6.4], [-2.4, 1.2, 0.8]], [at(1), [-2, 1.9, 3.4], [-3.5, 1.1, -0.6]], [at(2), [-5.6, 1.7, 2.6], [-3.3, 1.2, -0.4]]]);

    // --- The Golden Archway -----------------------------------------------------------------------------
    ground(kit, lane, { w: 200, d: 200, height: 0.4, flatten: 30, shade: 0xd9d3c9 });
    paifang(kit, lane, { z: -14, w: 9, h: 6 });
    const archBoard = plaque(kit, lane, 2.4, 0.7, 0, 5.2, -13.7);
    writing(kit, archBoard, '金牌楼', { size: 0.42, margin: 0.1, z: 0.07 });
    const tea = shopRow(kit, lane, { x: 6, z: -4, count: 2, rand, facing: 1 });
    tea.group.rotation.y = -Math.PI / 2;
    const banner = writing(kit, lane, '茶', { size: 0.6, paper: 0xf4f0e8, margin: 0.3, x: 4.2, y: 2.6, z: -3 });
    banner.mesh.rotation.y = -Math.PI / 2;
    const fuGate = gate(kit, lane, { x: -5.6, z: -3, w: 2.4, h: 3, wallSpan: 5 }); fuGate.group.rotation.y = Math.PI / 2;
    const guiGate = gate(kit, lane, { x: 5.8, z: -9, w: 2.4, h: 3, wallSpan: 5 }); guiGate.group.rotation.y = -Math.PI / 2;
    for (const s of [-1, 1]) kit.box(lane, tone(0xf4f0e8), [5.6, 1.5, -9], [0.02, 2.6, 0.14]).rotation.x = s * 0.7;
    const fu = figure(kit, lane, FU_SAN, -4.6, -3);
    const gui = figure(kit, lane, GUI_FEN, 4.8, -9);
    range(kit, lane, { z: -120, span: 400, height: 28, shade: 0xc9c2b7, seed: 336 });
    lights(kit, lane, { key: [6, 10, 10], intensity: 1 });
    const cam2 = move(kit, lane, [[at(3), [0, 1.8, 10], [0, 3, -14]], [at(3) + 4, [-1, 1.7, 2], [-5, 1.5, -3]], [36, [1, 1.7, -3.6], [5.6, 1.6, -9]]]);

    return (seconds: number, shot: number) => {
      show(shot === 3 ? 1 : 0);
      kit.setEnv(INK_SKY.paper(0.02));
      if (shot === 3) {
        cam2(seconds);
        tea.update(seconds);
        face(fu, 0, -3); fu.pose(G.laugh(seconds));
        face(gui, 0, -9); gui.pose(G.folded(seconds));
        return;
      }
      cam1(seconds);
      // Back from the doorway to their seats.
      (['pincai', 'fu', 'gui'] as const).forEach((w, k) => {
        const f = I.who(w), p = L[w];
        if (seconds < 4) walkAlong(f, seconds, 0, 4, [[-2 + k * 0.5, 3.6], [p.x, p.z + 0.8], [p.x, p.z]], G.rest(seconds), 5);
        else I.sit(w, seconds > at(1) && seconds < at(2) ? { ...G.argue(seconds + k), r: { lift: 1.1 + Math.sin(seconds * 9 + k) * 0.3, out: 0.6 + Math.sin(seconds * 9 + k) * 0.3, bend: 0.2 }, mouth: 0.8 } : w === 'fu' && seconds > at(2) + 2 ? G.offer(seconds) : G.laugh(seconds + k));
      });
      I.sit('rong', seconds < at(1) ? { ...G.laugh(seconds), mouth: 1, pitch: -0.1 } : G.clap(seconds));
      if (!walkAlong(waiter, seconds, at(2), at(2) + 2.4, [[-4.6, 4], [L.fu.x - 0.2, L.fu.z + 0.9]], G.rest(seconds), 5) && seconds > at(2) + 2.4) { face(waiter, L.fu.x, L.fu.z); waiter.pose(G.bow(seconds, 0.5)); }
      if (shot === 1) aim(kit, upstairs, [-3.5 + Math.sin(seconds) * 0.2, 2.4, 1.6], [-3.5, 1, -0.6], 0.3);
    };
  },
});
