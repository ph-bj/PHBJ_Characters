import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue } from '../../../stage/figure';
import { moon } from '../../../stage/performance';
import { petals, radiance } from '../../../stage/fx';
import { aim, sets, span } from '../../../stage/direct';
import { jam } from '../jam';

/*
 * Chapter 1, paragraph 53. On the shafts of the cart opposite: the first boy, like a crabapple
 * blossom, petals drifting across him as the camera studies his face. Then the other: the camera
 * moves slowly round him as the street behind softens into mist and a moon rises at his shoulder,
 * jade for bones, the moon for a soul. Ziyu, struck dumb, lifts his curtain; the boy lifts his eyes
 * and gazes back, and the two looks hold across the gap. Last, a radiance spreads from that face in
 * rings and dissolves into fragrance.
 */

export default defineScene({
  seed: 1053,
  build: (kit, story) => {
    const { groups: [stuck], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;

    const j = jam(kit, stuck);
    // Boys' heads in world: other cart at z -6.4, boys at +1.25 → about z -5.2, seated, heads near y 1.5.
    const qiHead: [number, number, number] = [0.8, 1.42, -3.7];
    const qinHead: [number, number, number] = [0.05, 1.47, -3.7];
    const blossom = petals(kit, stuck, { count: 60, w: 3, h: 3, d: 2, x: 0.8, y: 0.4, z: -3.4, red: true, speed: 0.3 });
    const halo = moon(kit, stuck, -1.6, 3.4, -14, 2.2);
    const glow = radiance(kit, stuck, qinHead[0], qinHead[1], qinHead[2] + 0.2, { rings: 8, max: 5, shade: 0x9c958b });
    const scent = petals(kit, stuck, { count: 50, w: 1.2, h: 2.4, d: 3, x: 0, y: 0.3, z: -2, red: false, speed: 0.5, wind: -1 });

    return (seconds: number, shot: number) => {
      show(0);
      j.update(seconds);
      j.master.pose({ ...G.stroke(seconds), sit: 1 });
      const t = seconds;
      const mistiness = shot >= 1 ? 0.02 + span(t, 9, 14) * 0.05 : 0.02;
      kit.setEnv(INK_SKY.paper(mistiness));
      blossom.update(seconds); blossom.mesh.visible = shot === 0;
      halo.visible = shot >= 1;
      halo.position.y = 1.4 + span(t, 9, 16) * 2;
      scent.mesh.visible = shot === 3; scent.update(seconds);
      glow.group.visible = shot === 3;
      glow.group.lookAt(stuck.position.x, 1.6, 0);
      glow.update(seconds, span(t, 30, 31.5));
      j.qi.pose(cue(t, [[0, tt => ({ ...G.folded(tt), sit: 1, yaw: 0.3, pitch: 0.1 })], [5, tt => ({ ...G.shy(tt), sit: 1 })]]));
      j.qin.pose(cue(t, [[0, tt => ({ ...G.folded(tt), sit: 1, pitch: 0.3 })], [22, tt => ({ ...G.folded(tt), sit: 1, pitch: -0.05 })], [25, tt => ({ ...G.folded(tt), sit: 1, pitch: -0.1, yaw: 0.05 })]]));
      j.ziyu.pose(cue(t, [[0, tt => ({ ...G.rest(tt), sit: 1, bow: 0.3 })], [20.4, tt => ({ ...G.rest(tt), sit: 1, bow: 0.2, r: { lift: 2.2, out: 0.2, bend: 0.4 } })], [23, tt => ({ ...G.rest(tt), sit: 1, bow: 0.25, r: { lift: 2.3, out: 0.2, bend: 0.4 }, mouth: 0.4 })]]));
      j.lift(span(t, 20.6, 22));
      j.ziyu.blush(span(t, 30, 33));
      j.qin.blush(span(t, 26, 29) * 0.6);
      if (shot === 0) {
        const u = span(t, 0, 9);
        aim(kit, stuck, [qiHead[0] + 0.9 - u * 0.4, qiHead[1] + 0.1, qiHead[2] + 1.6 - u * 0.5], qiHead, 0.3);
      } else if (shot === 1) {
        const u = span(t, at(1), at(2));
        const a = -0.7 + u * 1.1;
        aim(kit, stuck, [qinHead[0] + Math.sin(a) * 1.3, qinHead[1] + 0.1, qinHead[2] + Math.cos(a) * 1.3], [qinHead[0], qinHead[1] + 0.05, qinHead[2]], 0.3);
      } else if (shot === 2) {
        // Cross-cutting: Ziyu lifting the curtain, then the boy's answering gaze.
        if (t < at(2) + 4.6) aim(kit, stuck, [0.7, 1.7, -2.2], [0, 1.55, 0.2], 0.2);
        else aim(kit, stuck, [0.3, 1.6, -1.6], qinHead, 0.2);
      } else {
        const u = span(t, at(3), 36);
        aim(kit, stuck, [4.4 + u * 0.6, 1.8, -1.6], [0.1, 1.5, -1.8], 0.3);
      }
    };
  },
});
