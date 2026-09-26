import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { floor, room } from '../../../stage/architecture';
import { jar, roundTable, screen, stool } from '../../../stage/props';
import { lanternRow } from '../../../stage/locations';
import { aim, lights, move, sets } from '../../../stage/direct';
import { CHUNLAN, PROPRIETOR, WAITER, XI } from '../actors';

/*
 * Chapter 3, paragraph 30. In the lantern-lit yard behind the rooms the proprietor, all giggles,
 * takes Chunlan's fox-leg coat by the hem and scrubs the grease spots with spirits from a jar,
 * a waiter holding the lamp. Then a fresh private room: Xi sulking at a clean table while the
 * proprietor tows the weeping boy in by the sleeve. Chunlan will not bow; so the proprietor bows for
 * him, again and again, making faces, until Xi's scowl breaks and the boy's tears dry.
 */

export default defineScene({
  seed: 3030,
  build: (kit, story) => {
    const { groups: [yard, fresh], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- The yard -------------------------------------------------------------------------------------
    floor(kit, yard, 20, 20, { kind: 'bricks', shade: 0xcfc8bc });
    for (const [x, z, w, d] of [[0, -4, 12, 0.3], [-6, 0, 0.3, 8], [6, 0, 0.3, 8]] as const) kit.box(yard, tone(0xe6e0d6), [x, 1.6, z], [w, 3.2, d]);
    const swing = lanternRow(kit, yard, [-4, 3, -3.6], [4, 3, -3.6], 4);
    const chun = figure(kit, yard, CHUNLAN, 0, -1);
    const boss = figure(kit, yard, PROPRIETOR, 0.7, -0.4);
    jar(kit, yard, 1.4, 0, -0.9, 0.7);
    const rag = kit.mesh(new THREE.PlaneGeometry(0.16, 0.14), tone(0xf2eee6, true), boss.hands.r, 0, -0.04, 0.05);
    const lampman = figure(kit, yard, WAITER, -1, 0.4);
    lights(kit, yard, { key: [-3, 5, 5], intensity: 0.8, fill: 0.35 });
    const cam1 = move(kit, yard, [[0, [2.6, 1.3, 3], [0.2, 0.8, -0.8]], [at(1), [1.2, 1, 1.2], [0.1, 0.55, -0.9]]]);

    // --- A fresh room ----------------------------------------------------------------------------------
    room(kit, fresh, { w: 9, d: 7, h: 3.4, back: 'lattice', floorKind: 'boards' });
    roundTable(kit, fresh, { x: 0, z: -1, r: 0.8, h: 0.8 });
    stool(kit, fresh, 0, -2.1);
    screen(kit, fresh, { x: -3.4, z: -2.6, panels: 3, w: 0.6, h: 2, kind: 'plum', rot: 0.4 });
    const xi = figure(kit, fresh, XI, 0, -2.1);
    const chun2 = figure(kit, fresh, CHUNLAN, 1.4, 3);
    const boss2 = figure(kit, fresh, PROPRIETOR, 0.8, 3.4);
    const guard = figure(kit, fresh, { ...CAST.servant, robe: 0x4a443e }, -1.6, -2.4);
    lights(kit, fresh, { key: [3, 6, 6], intensity: 0.9 });
    const cam2 = move(kit, fresh, [[at(1), [2.6, 1.7, 4.4], [0, 1.2, -0.8]], [at(2), [-1.8, 1.6, 3.2], [0.4, 1.2, -0.2]], [36, [2.2, 1.4, 1.8], [0.3, 1.2, -0.6]]]);

    return (seconds: number, shot: number) => {
      show(shot === 0 ? 0 : 1);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.04));
        cam1(seconds);
        swing(seconds);
        face(chun, 2, 3); chun.pose({ ...G.weep(seconds), bow: 0.2 });
        face(boss, 0, -1);
        boss.pose(cue(seconds, [[0, t => ({ ...G.laugh(t), bow: 0.3 })], [3, t => ({ ...G.write(t * 2.2), bow: 0.75, kneel: 0.4 })]]));
        rag.visible = seconds > 3;
        face(lampman, 0, -1); lampman.pose({ ...G.hold(seconds), r: { lift: 1.3, out: 0.3, bend: 0.4 } });
        return;
      }
      kit.setEnv(INK_SKY.paper(0.03));
      cam2(seconds);
      const t = seconds - at(1);
      face(xi, 0, 2); xi.pose(cue(t, [[0, tt => ({ ...G.fume(tt), sit: 1 })], [8, tt => ({ ...G.rest(tt), sit: 1, yaw: -0.4 })], [14, tt => ({ ...G.speak(tt), sit: 1 })], [19, tt => ({ ...G.laugh(tt), sit: 1 })]]));
      face(guard, 0, 0); guard.pose(G.folded(t));
      walkAlong(boss2, t, 0, 3, [[0.8, 3.4], [0.5, 0.4]], { ...G.tug(t), bow: 0.1 }, 5);
      walkAlong(chun2, t, 0.2, 3.3, [[1.4, 3], [1.1, 0.7]], { ...G.weep(t), bow: 0.3 }, 5);
      if (t > 3) {
        face(boss2, 0, -2.1);
        boss2.pose(cue(t, [[3, tt => ({ ...G.speak(tt), l: { lift: 0.9, out: 0.8, bend: 0.2 } })], [12, tt => G.bow(tt, 0.4 + Math.abs(Math.sin(tt * 2.4)) * 0.4)], [16, tt => ({ ...G.salute(tt, 0.5), mouth: 0.8 })], [20, G.laugh]]));
        face(chun2, 2, 1); chun2.pose(cue(t, [[3, tt => ({ ...G.weep(tt), bow: 0.35 })], [19, tt => ({ ...G.shy(tt), yaw: -0.6 })]]));
      }
      if (shot === 2 && t > 18) aim(kit, fresh, [1.6, 1.35, 1.4], [0.8, 1.35, 0.5], 0.3);
    };
  },
});
