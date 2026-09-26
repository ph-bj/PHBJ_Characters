import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { courtyard } from '../../../stage/locations';
import { ground, range, reeds } from '../../../stage/nature';
import { writing } from '../../../stage/props';
import { lights, move, sets, span } from '../../../stage/direct';
import { sunFeatures, wangStudy } from '../wang';

/*
 * Chapter 2, paragraph 29. The two characters for gou side by side on a slip, the grass radical and
 * the dog, and Zhongqing's laugh. Then young Sihui's essay taken at its word: on a misty road an ox
 * plods along, looking back over its shoulder, as the opening line appears: 牛何之, "where is the ox
 * going?" Back in the study Sihui, crimson, stamps round and round the room sputtering "Nonsense!",
 * then flings out, his brother after him, and Wang Xun and Zhongqing see them off at the gate.
 */

export default defineScene({
  seed: 2029,
  build: (kit, story) => {
    const { groups: [studySet, road, yard], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shots 1 and 3: the study ------------------------------------------------------------------
    const s = wangStudy(kit, studySet);
    const [a, b, , d] = s.seats;
    const zq = figure(kit, studySet, CAST.zhongqing, ...a);
    const wx = figure(kit, studySet, CAST.wangxun, ...b);
    const sihui = figure(kit, studySet, CAST.sihui, 0, 2);
    const siyuan = figure(kit, studySet, CAST.siyuan, ...d);
    sunFeatures(kit, sihui, siyuan);
    const slip = kit.group(studySet, 0, 2.4, -1.2);
    kit.mesh(new THREE.PlaneGeometry(1.6, 1), tone(0xf4f0e8, true), slip);
    const chars = writing(kit, slip, ['苟', '狗'], { size: 0.4, gap: 2.2, margin: 0.2, z: 0.004 });
    const cam1 = move(kit, studySet, [[0, [0.3, 2.2, 1], [0, 2.3, -1.2]], [6, [2, 1.8, 3], [0, 1.6, -0.4]], [12, [-1.8, 1.6, 2.6], [a[0], 1.3, a[1]]]]);
    const cam3 = move(kit, studySet, [[at(2), [3, 2, 3.6], [0, 1.3, 0.6]], [at(2) + 7, [-2.6, 1.8, 3.2], [0, 1.3, 0.8]]]);

    // --- Shot 2: where is the ox going? --------------------------------------------------------------
    ground(kit, road, { w: 300, d: 300, height: 2, flatten: 12, shade: 0xd6d0c6 });
    reeds(kit, road, 0, -2, { w: 30, d: 4, count: 160, h: 0.9, rand });
    range(kit, road, { z: -100, span: 400, height: 30, shade: 0xc9c2b7, seed: 229 });
    const ox = kit.group(road, -6, 0, 0);
    ox.rotation.y = Math.PI / 2;
    const hide = tone(0x4a443e);
    const bodyOx = kit.mesh(new THREE.SphereGeometry(0.6, 16, 12), hide, ox, 0, 1.1, 0); bodyOx.scale.set(0.85, 0.85, 1.7);
    const head = kit.group(ox, 0, 1.15, 1.05);
    kit.mesh(new THREE.SphereGeometry(0.28, 12, 10), hide, head).scale.set(0.9, 0.9, 1.2);
    for (const side of [-1, 1]) kit.mesh(new THREE.TorusGeometry(0.18, 0.03, 5, 12, Math.PI * 0.7), tone(0xd6d0c6), head, side * 0.2, 0.22, -0.05).rotation.set(0, side * Math.PI / 2, side * 0.6);
    const legs = [[-0.3, 0.6], [0.3, 0.6], [-0.3, -0.6], [0.3, -0.6]].map(([x, z], i) => { const hip = kit.group(ox, x, 0.8, z); kit.mesh(new THREE.CylinderGeometry(0.1, 0.08, 0.8, 8), hide, hip, 0, -0.4, 0); return { hip, i }; });
    const line = writing(kit, road, ['牛何之'], { size: 0.5, margin: 0.2, x: 2.6, y: 3, z: -3 });
    lights(kit, road, { key: [8, 10, 8], intensity: 1 });
    const cam2 = move(kit, road, [[at(1), [0, 1.2, 6], [-4, 1.2, 0]], [at(2), [2, 1.6, 6], [1, 1.6, -1]]]);

    // --- Shot 3 (end): seeing them off -------------------------------------------------------------
    const c = courtyard(kit, yard);
    const pair = [figure(kit, yard, CAST.sihui, -0.4, -2), figure(kit, yard, CAST.siyuan, 0.4, -2.2)];
    sunFeatures(kit, pair[0], pair[1]);
    const hosts = [figure(kit, yard, CAST.wangxun, -0.6, -4), figure(kit, yard, CAST.zhongqing, 0.6, -4.2)];
    lights(kit, yard, { key: [6, 10, 8], intensity: 1 });
    const cam4 = move(kit, yard, [[at(2) + 8, [3, 1.8, 10], [0, 1.4, 4]], [36, [0, 2.4, 13], [0, 1.4, 6]]]);

    return (seconds: number, shot: number) => {
      const out = shot === 2 && seconds > at(2) + 8;
      show(shot === 1 ? 1 : out ? 2 : 0);
      kit.setEnv(INK_SKY.paper(0.025));
      if (shot === 1) {
        cam2(seconds);
        const t = seconds - at(1);
        ox.position.x = -6 + t * 0.6;
        legs.forEach(({ hip, i }) => { hip.rotation.x = Math.sin(t * 3 + [0, Math.PI, Math.PI / 2, Math.PI * 1.5][i]) * 0.3; });
        head.rotation.y = Math.sin(t * 0.8) * 0.5 - 0.3;
        line.set(span(t, 3, 6));
        return;
      }
      if (out) {
        cam4(seconds);
        c.flowerGate.open(1);
        const t = seconds - at(2) - 8;
        pair.forEach((p, i) => walkAlong(p, t, 0, 6, [[i ? 0.4 : -0.4, -2], [i ? 0.5 : -0.3, 9]], i ? G.rest(t) : G.fume(t), 5.5));
        hosts.forEach((h, i) => walkAlong(h, t, 0.4, 4, [[i ? 0.6 : -0.6, -4], [i ? 1.2 : -1.2, 5]], G.folded(t), 5));
        if (t > 4) hosts.forEach(h => { face(h, 0, 10); h.pose(G.salute(t, 0.3)); });
        return;
      }
      if (shot === 2) cam3(seconds); else cam1(seconds);
      chars.set(shot === 0 ? span(seconds, 0.5, 3) : 0);
      slip.visible = shot === 0;
      [zq, wx, siyuan].forEach(f => face(f, 0, 0));
      zq.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 1 })], [5, t => ({ ...G.laugh(t), sit: 1 })]]));
      wx.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 1 })], [at(2), t => ({ ...G.rest(t), sit: 1, yaw: 0.4 })]]));
      siyuan.pose(cue(seconds, [[0, t => ({ ...G.speak(t), sit: 1 })], [at(2), t => ({ ...G.guffaw(t), sit: 1 })]]));
      if (shot === 0) { face(sihui, 0, 0); sihui.pose(G.fume(seconds)); }
      else {
        const t = seconds - at(2);
        const ang = t * 1.1;
        sihui.root.position.set(Math.sin(ang) * 2, 0, Math.cos(ang) * 2);
        sihui.root.rotation.y = ang + Math.PI / 2;
        sihui.pose({ ...G.fume(t), walk: t * 7 });
        sihui.blush(1);
      }
    };
  },
});
