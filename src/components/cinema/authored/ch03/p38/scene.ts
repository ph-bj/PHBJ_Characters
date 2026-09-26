import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, VERMILION, cue, face, figure, flat, walkAlong } from '../../../stage/figure';
import { cityGate } from '../../../stage/architecture';
import { gateLane, study, lanternRow } from '../../../stage/locations';
import { ground, range } from '../../../stage/nature';
import { cup } from '../../../stage/props';
import { hold } from '../../../stage/performance';
import { cart } from '../../../stage/vehicles';
import { DUSK, blendEnv, lights, move, sets, span } from '../../../stage/direct';
import { FU_SAN, GUI_FEN, PINCAI, SI_ER } from '../actors';
import { pincaiRoom } from '../places';

/*
 * Chapter 3, paragraph 38. A red sun sits on the city wall; Fu and Gui climb into their cart and
 * it rattles off toward the gate as Pincai waves. Pincai and Si'er walk home through the lane while
 * the light drains away, and the Mei gate's lanterns are glowing when they reach it; across the
 * courtyard the study windows are lit where Ziyu and Yuanmao sit at their lessons. In his own room
 * Pincai kicks off his boots, pours tea, and sits back on the kang.
 */

export default defineScene({
  seed: 3038,
  build: (kit, story) => {
    const { groups: [gateSet, lane, studySet, bedroom], show } = sets(kit, 4);
    const at = (i: number) => story.shots[i].start;

    ground(kit, gateSet, { w: 300, d: 300, height: 1, flatten: 30, shade: 0xd6d0c6 });
    cityGate(kit, gateSet, { z: -30, w: 80, h: 11 });
    range(kit, gateSet, { z: -160, span: 500, height: 30, shade: 0x9c958b, seed: 338 });
    kit.mesh(new THREE.CircleGeometry(4, 32), flat(VERMILION), gateSet, 12, 17, -80);
    const c = cart(kit, gateSet, { x: 0, z: 2, rot: Math.PI, hood: 0x3f3a35 });
    const riders = [FU_SAN, GUI_FEN].map((s, k) => figure(kit, gateSet, s, -1.6 + k * 0.7, 3));
    const pincai = figure(kit, gateSet, PINCAI, -2.4, 4.6);
    const boy = figure(kit, gateSet, SI_ER, -3, 5.2);
    lights(kit, gateSet, { key: [14, 8, -60], intensity: 0.9, fill: 0.4 });
    const cam1 = move(kit, gateSet, [[0, [-6, 1.6, 10], [0, 2, -6]], [at(1), [-4, 2, 8], [0, 3, -24]]]);

    const gl = gateLane(kit, lane, { winter: true });
    const lamps = lanternRow(kit, lane, [-1.9, 3, 0.5], [1.9, 3, 0.5], 2);
    const p2 = figure(kit, lane, PINCAI, 14, 3.4);
    const b2 = figure(kit, lane, SI_ER, 14.8, 3.8);
    lights(kit, lane, { key: [-8, 6, 8], intensity: 0.6, fill: 0.3 });
    const cam2 = move(kit, lane, [[at(1), [8, 1.7, 9], [10, 1.4, 3]], [at(2), [-3, 1.8, 8], [0, 1.6, 1]]]);

    const s = study(kit, studySet, { night: true });
    const ziyu = figure(kit, studySet, CAST.ziyu, ...s.seats.desk);
    const yuanmao = figure(kit, studySet, CAST.yuanmao, ...s.seats.guestA);
    const r = pincaiRoom(kit, bedroom);
    const p3 = figure(kit, bedroom, PINCAI, r.kang[0] + 0.6, r.kang[1] + 0.2);
    p3.root.position.y = 0.53;
    hold(kit, p3, 'cup');
    cup(kit, bedroom, r.kang[0], 0.8, r.kang[1]);
    lights(kit, bedroom, { key: [3, 4, 5], intensity: 0.7, fill: 0.3 });
    const cam3 = move(kit, studySet, [[at(2), [0.4, 1.8, 5.6], [0, 1.2, -2.4]], [at(2) + 5, [0.2, 1.6, 2.4], [0, 1.2, -2.8]]]);
    const cam4 = move(kit, bedroom, [[at(2) + 5, [1.6, 1.5, 2.6], [r.kang[0] + 0.5, 1.1, r.kang[1]]], [36, [0.6, 1.3, 1.2], [r.kang[0] + 0.5, 1.15, r.kang[1]]]]);

    return (seconds: number, shot: number) => {
      if (shot === 0) {
        show(0);
        kit.setEnv(blendEnv(INK_SKY.paper(0.02), DUSK(0.02), 0.5));
        cam1(seconds);
        riders.forEach((f, k) => { walkAlong(f, seconds, 0.5 + k * 0.4, 3, [[-1.6 + k * 0.7, 3], [0, 3.6]], G.rest(seconds), 5); f.fade(1 - span(seconds, 3, 3.5)); });
        const go = Math.max(0, seconds - 4) * 2;
        c.group.position.z = 2 - go; c.update(seconds, go > 0);
        face(pincai, 0, c.group.position.z); pincai.pose(seconds > 4 ? { ...G.point(seconds), r: { lift: 1.8 + Math.sin(seconds * 6) * 0.2, out: 0.4, bend: 0.3 } } : G.salute(seconds, 0.3));
        face(boy, 0, c.group.position.z); boy.pose(G.folded(seconds));
        return;
      }
      if (shot === 1) {
        show(1);
        kit.setEnv(blendEnv(DUSK(0.02), DUSK(0.05), span(seconds, at(1), at(2))));
        cam2(seconds);
        lamps(seconds);
        gl.gate.open(span(seconds, at(2) - 2, at(2)));
        walkAlong(p2, seconds, at(1), at(2), [[14, 3.4], [4, 3.2], [0, 1.4]], G.behind(seconds), 4);
        walkAlong(b2, seconds, at(1) + 0.3, at(2) + 0.3, [[14.8, 3.8], [4.6, 3.8], [0.6, 1.8]], G.rest(seconds), 4.5);
        return;
      }
      const inStudy = seconds < at(2) + 5;
      show(inStudy ? 2 : 3);
      kit.setEnv(DUSK(0.03));
      if (inStudy) {
        cam3(seconds);
        s.update(seconds);
        face(ziyu, 0, 1); ziyu.pose({ ...G.write(seconds), sit: 1 });
        face(yuanmao, 0, -2.6); yuanmao.pose({ ...G.read(seconds), sit: 1, bow: 0.2 });
        return;
      }
      cam4(seconds);
      face(p3, r.kang[0] + 2, r.kang[1] + 3);
      p3.pose(cue(seconds, [[at(2) + 5, t => ({ ...G.drink(t), sit: 1, bow: -0.2 })], [at(2) + 8, t => ({ ...G.rest(t), sit: 1, bow: -0.3, pitch: -0.1 })], [at(2) + 10, t => ({ ...G.drink(t), sit: 1, bow: -0.2 })]]));
    };
  },
});
