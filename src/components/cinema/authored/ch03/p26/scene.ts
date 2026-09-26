import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { plaque } from '../../../stage/architecture';
import { street } from '../../../stage/locations';
import { pot, writing } from '../../../stage/props';
import { cart } from '../../../stage/vehicles';
import { aim, lights, move, sets, span } from '../../../stage/direct';
import { FU_SAN, GUI_FEN, PINCAI, RONGGUAN } from '../actors';
import { inn } from '../inn';

/*
 * Chapter 3, paragraph 26. The carts pull up under a restaurant's signboard and the party goes in.
 * Upstairs, a wide shot takes in both private rooms side by side, open to us like a doll's house:
 * on the left the waiter lays dishes and Rongguan pours for Pincai, Fu and Gui; through the wall on
 * the right, a noisy party. Rongguan gets up, puts his eye to the crack in the boards, and the camera
 * goes through it: Lord Xi lolling at his table with Chunlan in the fox coat and three more dan.
 * Back at the table Pincai leans toward Fu with his careful question.
 */

export default defineScene({
  seed: 3026,
  build: (kit, story) => {
    const { groups: [road, upstairs], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    const st = street(kit, road);
    lights(kit, road, { key: [8, 10, 6], intensity: 1 });
    const sign = plaque(kit, road, 0.8, 2.2, -5.6, 3, -6); sign.rotation.y = Math.PI / 2;
    writing(kit, sign, '福兴居', { size: 0.4, margin: 0.1, z: 0.07 });
    const carts = [0, 1].map(k => cart(kit, road, { x: -2.6, z: -4 - k * 4.4, rot: Math.PI, hood: k ? 0x3f3a35 : 0x6e675f }));
    const party = [PINCAI, RONGGUAN, FU_SAN, GUI_FEN].map((s, k) => figure(kit, road, s, -3.4, -3 - k * 1.2));
    const cam1 = move(kit, road, [[0, [2.4, 1.8, 2], [-4.6, 1.8, -6]], [at(1), [0, 1.6, -2], [-5.6, 1.6, -6]]]);

    const I = inn(kit, upstairs);
    I.setTable(0, kit.rand); I.setTable(1, kit.rand);
    const waiter = I.waiter(-3.5, 3);
    const jug = pot(kit, I.who('rong').hands.r, 0, -0.08, 0.05, 0.7);
    const cam2 = move(kit, upstairs, [[at(1), [0, 3.2, 8.5], [0, 1.2, -0.8]], [at(2) - 1, [-1.2, 2.6, 5.6], [-0.8, 1.3, -0.8]]]);

    return (seconds: number, shot: number) => {
      show(shot === 0 ? 0 : 1);
      kit.setEnv(INK_SKY.paper(0.02));
      if (shot === 0) {
        cam1(seconds);
        st.update(seconds);
        carts.forEach((c, k) => c.update(seconds + k, false));
        party.forEach((f, k) => walkAlong(f, seconds, 1 + k * 0.5, 7 + k * 0.5, [[-3.4, -3 - k * 1.2], [-4.6, -5.4], [-6.6, -6]], G.rest(seconds), 5));
        party.forEach((f, k) => f.fade(1 - span(seconds, 6.5 + k * 0.5, 7 + k * 0.5)));
        return;
      }
      I.sit('pincai', cue(seconds, [[0, G.rest], [at(1) + 3, t => ({ ...G.rest(t), yaw: 0.8 })], [at(3), G.speak]]));
      I.sit('fu', cue(seconds, [[0, G.laugh], [at(1) + 3, t => ({ ...G.rest(t), yaw: -0.6 })], [at(3), t => ({ ...G.rest(t), yaw: 0.4 })]]));
      I.sit('gui', G.rest(seconds));
      // Rongguan pours, then goes to the crack.
      const [kx, , kz] = I.crack;
      jug.visible = seconds < at(1) + 6;
      if (seconds < at(2)) I.sit('rong', cue(seconds, [[0, t => ({ ...G.offer(t), bow: 0.3 })], [at(1) + 6, G.rest]]));
      else if (seconds < at(3)) {
        const rong = I.who('rong');
        if (!walkAlong(rong, seconds, at(2), at(2) + 1.6, [[I.left.rong.x, I.left.rong.z], [kx - 0.35, kz + 0.2]], G.rest(seconds), 5)) { face(rong, kx, kz); rong.pose({ ...G.whisper(seconds), bow: 0.35, mouth: 0 }); }
      } else I.sit('rong', G.whisper(seconds));
      I.sit('xi', cue(seconds, [[0, G.laugh], [at(2) + 3, G.toast], [at(2) + 6, G.guffaw]]));
      I.sit('chunlan', G.speak(seconds)); I.sit('a', G.laugh(seconds + 1)); I.sit('b', G.clap(seconds)); I.sit('c', G.laugh(seconds + 2));
      if (seconds < at(1) + 5) { if (!walkAlong(waiter, seconds, at(1), at(1) + 3, [[-3.5, 3], [-3.2, 0.6]], G.hold(seconds), 5)) { face(waiter, -3.5, -0.6); waiter.pose({ ...G.offer(seconds), bow: 0.4 }); } }
      else walkAlong(waiter, seconds, at(1) + 5, at(2), [[-3.2, 0.6], [-5, 4]], G.rest(seconds), 5);
      if (shot === 1) cam2(seconds);
      else if (shot === 2) {
        if (seconds < at(2) + 2.5) aim(kit, upstairs, [kx - 1.6, 1.5, kz + 1.6], [kx - 0.3, 1.3, kz], 0.3);
        else { const u = span(seconds, at(2) + 2.5, at(3)); aim(kit, upstairs, [kx + 0.05 + u * 0.6, 1.45, kz], [3.5, 1.2, -0.6 - u * 0.2], 0); }
      } else aim(kit, upstairs, [I.left.fu.x + 0.6, 1.4, I.left.fu.z + 1.6], [(I.left.fu.x + I.left.pincai.x) / 2, 1.3, (I.left.fu.z + I.left.pincai.z) / 2], 0.3);
    };
  },
});
