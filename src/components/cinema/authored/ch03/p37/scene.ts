import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { hold } from '../../../stage/performance';
import { aim, move, sets, span } from '../../../stage/direct';
import { inn } from '../inn';

/*
 * Chapter 3, paragraph 37. All three on their feet, Pincai clasps Fu's hands, then Gui's, across
 * the dishes: friends from today, though he is only a commoner. "A penalty!" Fu and Gui each thrust
 * a cup at him, and he drinks laughing. Fu counts strings of cash into Rongguan's hands and two
 * more to his page; Rongguan bows to each in turn and goes, the page at his heels, and the camera
 * watches them out of the open front of the room.
 */

export default defineScene({
  seed: 3037,
  build: (kit, story) => {
    const { groups: [upstairs], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const I = inn(kit, upstairs);
    I.setTable(0, kit.rand);
    I.rooms[1].table.visible = false;
    for (const w of ['xi', 'chunlan', 'a', 'b', 'c'] as const) I.who(w).root.visible = false;
    const L = I.left;
    const cups = [hold(kit, I.who('fu'), 'cup'), hold(kit, I.who('gui'), 'cup')];
    const cash = [0, 1].map(() => kit.mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.24, 10).rotateZ(Math.PI / 2), tone(0x4a443e), upstairs, 0, 0, 0));
    const page = figure(kit, upstairs, CAST.page, -5.2, 1.2);
    const stand = { pincai: [L.pincai.x - 0.1, L.pincai.z + 0.4], fu: [L.fu.x, L.fu.z + 0.3], gui: [L.gui.x + 0.1, L.gui.z + 0.4], rong: [L.rong.x, L.rong.z] } as const;
    const cam = move(kit, upstairs, [[0, [-2.2, 1.6, 2.6], [-3.3, 1.35, -1]], [at(1), [-4.6, 1.6, 2.2], [-3.1, 1.35, -1]], [at(2), [-1.4, 1.7, 3], [-4, 1.3, 0]], [36, [-2, 2.4, 7], [-4.4, 1.2, 2]]]);

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.02));
      cam(seconds);
      const P = I.who('pincai'), F = I.who('fu'), Gu = I.who('gui'), R = I.who('rong');
      const put = (f: typeof P, [x, z]: readonly [number, number]) => f.root.position.set(x, 0, z);
      put(P, stand.pincai); put(F, stand.fu); put(Gu, stand.gui);
      face(P, seconds < 5 ? F.root.position.x : Gu.root.position.x, seconds < 5 ? F.root.position.z : Gu.root.position.z);
      P.pose(cue(seconds, [[0, t => ({ ...G.tug(t), bow: 0.2 })], [5, t => ({ ...G.tug(t), bow: 0.2 })], [8, t => G.salute(t, 0.4)], [at(1) + 3, G.drink], [at(1) + 6, G.laugh]]));
      face(F, P.root.position.x, P.root.position.z); face(Gu, P.root.position.x, P.root.position.z);
      F.pose(cue(seconds, [[0, t => ({ ...G.offer(t) })], [at(1), t => ({ ...G.toast(t), mouth: 0.9 })], [at(2), t => ({ ...G.offer(t), yaw: -0.5 })], [at(2) + 5, G.laugh]]));
      Gu.pose(cue(seconds, [[0, G.folded], [5, G.offer], [at(1), t => ({ ...G.toast(t), mouth: 0.9 })], [at(2), G.laugh]]));
      cups.forEach(c => { c.visible = seconds > at(1) - 0.5 && seconds < at(1) + 6; });
      // Rongguan and his page take the cash, bow, and go.
      if (seconds < at(2) + 5) { put(R, [L.fu.x - 0.9, L.fu.z + 0.8]); face(R, F.root.position.x, F.root.position.z); R.pose(cue(seconds, [[0, G.clap], [at(2) + 1, G.offer], [at(2) + 3, t => G.bow(t, 0.4)]])); }
      else walkAlong(R, seconds, at(2) + 5, 34, [[L.fu.x - 0.9, L.fu.z + 0.8], [-4.4, 2.4], [-3.4, 6]], G.rest(seconds), 5);
      if (seconds < at(2) + 3) { walkAlong(page, seconds, at(2), at(2) + 2, [[-5.2, 1.2], [L.fu.x - 1.4, L.fu.z + 1.4]], G.rest(seconds), 6); if (seconds > at(2) + 2) { face(page, F.root.position.x, F.root.position.z); page.pose(G.offer(seconds)); } }
      else walkAlong(page, seconds, at(2) + 5.4, 34.4, [[L.fu.x - 1.4, L.fu.z + 1.4], [-4.8, 2.6], [-3.8, 6.2]], G.rest(seconds), 6);
      cash[0].visible = seconds > at(2) + 1 && seconds < at(2) + 3;
      if (cash[0].visible) { R.hands.r.getWorldPosition(cash[0].position); cash[0].position.sub(upstairs.position); }
      cash[1].visible = seconds > at(2) + 2 && seconds < at(2) + 3.5;
      if (cash[1].visible) { page.hands.r.getWorldPosition(cash[1].position); cash[1].position.sub(upstairs.position); }
      [R, page].forEach(f => f.fade(1 - span(seconds, 33, 34.5)));
      if (shot === 1 && seconds > at(1) + 2) aim(kit, upstairs, [P.root.position.x + 0.9, 1.5, P.root.position.z + 1.2], [P.root.position.x, 1.45, P.root.position.z], 0.3);
    };
  },
});
