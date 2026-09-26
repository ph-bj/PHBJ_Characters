import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { ingots } from '../../../stage/props';
import { move, sets, span } from '../../../stage/direct';
import { parlour } from '../wang';

/*
 * Chapter 2, paragraph 23. "Three hundred taels: as much as my own stipend!" On the kang table the
 * silver stacks up, ingot on ingot, and Wenhui throws back his head and laughs. A handsome attendant
 * in splendid silks glides in and whispers in his ear; Pincai takes the hint. Wenhui gives the barest
 * bow and swaggers off into the inner rooms. Pincai is left standing alone, and beside him, faint, the
 * figure of gracious Uncle Mei, bowing courteously, as he thinks: what airs.
 */

export default defineScene({
  seed: 2023,
  build: (kit, story) => {
    const { groups: [room1], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;

    const p = parlour(kit, room1);
    const wenhui = figure(kit, room1, CAST.wenhui, ...p.kangSeat);
    const pincai = figure(kit, room1, CAST.pincai, 0.4, -1.3);
    const dandy = figure(kit, room1, { ...CAST.youth, robe: 0xe6e0d6, jacket: 0x2f2a26, sash: 0xc0321e, rouge: false }, 5, 2);
    const mei = figure(kit, room1, CAST.shixie, -0.6, -1.2);
    mei.shadow.visible = false;
    const silver = Array.from({ length: 6 }, (_, k) => ingots(kit, room1, -0.1 + (k % 3) * 0.16, 0.79 + Math.floor(k / 3) * 0.08, -3.1, 1));
    const cam = move(kit, room1, [
      [0, [0.2, 1.3, -2], [0, 0.9, -3.1]],
      [5, [2.2, 1.6, -0.4], [0.6, 1.3, -2.8]],
      [at(1), [2.6, 1.6, 0.4], [1.2, 1.4, -2.2]],
      [at(2), [-1.4, 1.6, 1.2], [1.4, 1.4, -2]],
      [at(3), [-0.6, 1.5, 1.8], [0.3, 1.5, -1.3]],
      [36, [0.5, 1.55, 0.3], [0.1, 1.5, -1.3]],
    ]);

    return (seconds: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.025));
      cam(seconds);
      silver.forEach((s, k) => { s.visible = seconds > 0.6 + k * 0.5 && seconds < at(2); });
      const t2 = seconds - at(1);
      walkAlong(dandy, t2, 0, 2.6, [[5, 2], [1.6, -2.6]], G.rest(t2), 6);
      dandy.root.visible = seconds > at(1) && seconds < at(2) + 3;
      if (t2 > 2.6) { face(dandy, 0.7, -3.1); dandy.pose(G.whisper(t2)); }
      const leave = seconds > at(2) + 1.5;
      if (!leave) { wenhui.root.position.set(p.kangSeat[0], 0.07, p.kangSeat[1]); face(wenhui, 0.4, 0); }
      wenhui.pose(cue(seconds, [[0, t => ({ ...G.speak(t), sit: 1 })], [4, t => ({ ...G.guffaw(t), sit: 1 })], [at(1) + 2.6, t => ({ ...G.rest(t), sit: 1, yaw: 0.5 })], [at(2), t => G.bow(t, 0.15)]]));
      if (leave) walkAlong(wenhui, seconds - at(2), 1.5, 7, [[p.kangSeat[0], p.kangSeat[1] + 0.6], [3, -2.6], [5.4, -3.6]], { ...G.rest(seconds), bow: -0.1, l: { lift: 0.25, out: 0.5, bend: 0.3 }, r: { lift: 0.25, out: 0.5, bend: 0.3 } }, 3.6);
      wenhui.root.visible = seconds < at(2) + 7;
      face(pincai, 0.7, -3.1);
      pincai.pose(cue(seconds, [[0, G.folded], [at(1) + 3, t => ({ ...G.folded(t), yaw: 0.5 })], [at(2), t => G.bow(t, 0.6)], [at(3), t => ({ ...G.behind(t), yaw: -0.6 })], [at(3) + 4, t => ({ ...G.stroke(t), pitch: -0.1 })]]));
      mei.fade(0.45 * span(seconds, at(3) + 1, at(3) + 2.5));
      face(mei, 0.4, 2);
      mei.pose(G.salute(seconds, 0.3));
    };
  },
});
