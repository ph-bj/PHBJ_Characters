import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong, type Figure } from '../../../stage/figure';
import { move, sets, span } from '../../../stage/direct';
import { DANS, FU_SAN, GUI_FEN, OLD_WANG, PINCAI, XI } from '../actors';
import { goitre, peddlerTray } from '../places';
import { pitTable } from '../table';

/*
 * Chapter 3, paragraph 21. Old Wang toils up the gallery stair and sidles along to the big box,
 * dangling trinkets at the dan. The dark-faced man rears up with a bellow; his servants fall on the
 * old man and hustle him back along the gallery, glass bottles bouncing off his tray and bursting
 * on the boards. He goes down the stair a step at a time, weeping, while the dan hang over the rail
 * and shriek with laughter and, below, Fu the Third claps. Then the big man rises, collects four dan,
 * and marches down the stair and out, his men behind.
 */

const STAIR = { x: 8.2, top: 5.4, foot: 10.4, h: 2.7 };
/** Height of the floor at (x, z): the gallery on the right, the stair, or the pit. */
const floorAt = (x: number, z: number) => x > 7.2 && z < STAIR.top + 0.01 ? STAIR.h : x > 7.4 && z < STAIR.foot ? STAIR.h * (STAIR.foot - z) / (STAIR.foot - STAIR.top) : 0;
const lift = (f: Figure) => { f.root.position.y = floorAt(f.root.position.x, f.root.position.z); };

export default defineScene({
  seed: 3021,
  build: (kit, story) => {
    const { groups: [hall], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const T = pitTable(kit, hall);
    const [bx, bz] = T.th.boxes[0];
    const pincai = figure(kit, hall, PINCAI, 0, 0);
    const fu = figure(kit, hall, FU_SAN, 0, 0);
    const gui = figure(kit, hall, GUI_FEN, 0, 0);
    const wang = figure(kit, hall, OLD_WANG, 7.6, 11.4);
    goitre(kit, wang); peddlerTray(kit, wang);
    const xi = figure(kit, hall, XI, bx + 0.9, bz);
    const men = [0, 1].map(k => figure(kit, hall, { ...CAST.servant, robe: 0x4a443e }, bx + 1.8, bz - 0.4 + k * 0.8));
    const dans = Array.from({ length: 5 }, (_, k) => figure(kit, hall, DANS[k % 4], bx + 0.3 + (k % 2) * 0.4, bz - 1 + k * 0.5));
    const bits = Array.from({ length: 6 }, (_, k) => kit.mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.07, 8), tone([0xe6e0d6, 0x6e675f, 0x9c958b][k % 3]), hall, 0, 0, 0));
    const cam = move(kit, hall, [
      [0, [5.6, 1.6, 12], [8.2, 1.6, 8]],
      [at(1) - 1, [6.6, 4.2, 1], [9, 3.4, -5.4]],
      [at(1) + 5, [6.2, 4.4, 2], [8.6, 3.2, 0.4]],
      [at(2), [5.4, 3.2, 12], [8.2, 1.8, 7.6]],
      [at(2) + 5, [T.tx + 1.6, 1.6, T.tz - 1.6], [T.tx, 1.3, T.tz + 0.75]],
      [at(3), [4, 2.2, 3], [8.6, 3, -3]],
      [36, [5, 1.8, 13.5], [8.2, 1.4, 9]],
    ]);

    return (seconds: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.02));
      T.th.update(seconds);
      cam(seconds);
      // Up the stair and along to the box; shoved back; down in tears and out.
      if (seconds < at(1) + 1) {
        const m = walkAlong(wang, seconds, 0, 6.5, [[7.6, 11.4], [STAIR.x, STAIR.foot], [STAIR.x, STAIR.top], [8.3, bz + 2.2], [bx - 0.4, bz + 1]], { ...G.hold(seconds), bow: 0.35 }, 3.5);
        if (!m && seconds > 6.5) { face(wang, bx, bz - 0.5); wang.pose({ ...G.offer(seconds), bow: 0.35, mouth: 0.5 + 0.4 * Math.sin(seconds * 9) }); }
      } else walkAlong(wang, seconds, at(1) + 1, at(3) - 1, [[bx - 0.4, bz + 1], [8.3, bz + 2.4], [STAIR.x, STAIR.top], [STAIR.x, STAIR.foot], [5.6, 12.4]], { ...G.weep(seconds), bow: 0.35, lean: Math.sin(seconds * 5) * 0.12 }, 3.5);
      lift(wang);
      wang.fade(1 - span(seconds, at(3) - 2, at(3) - 1));
      // The big man: seated, rears up roaring, then leaves with four dan.
      xi.root.position.y = 2.7;
      if (seconds < at(3)) {
        xi.root.position.set(bx + 0.9, 2.7, bz); face(xi, seconds > at(1) - 1 ? wang.root.position.x : 0, seconds > at(1) - 1 ? wang.root.position.z : bz);
        xi.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 1 })], [at(1) - 1, t => ({ ...G.fume(t), mouth: 1 })], [at(1) + 1.5, t => ({ ...G.point(t), mouth: 0.8 })], [at(2), t => ({ ...G.laugh(t), sit: 1 })]]));
      } else { walkAlong(xi, seconds, at(3), 36, [[bx + 0.9, bz], [8.4, bz + 3], [STAIR.x, STAIR.top], [STAIR.x, STAIR.foot], [6, 13]], G.behind(seconds), 4.5); lift(xi); }
      men.forEach((m, k) => {
        if (seconds > at(1) && seconds < at(2)) {
          walkAlong(m, seconds, at(1), at(2) - 1, [[bx + 1.8, bz - 0.4 + k * 0.8], [bx - 0.2 + k * 0.3, bz + 1.4], [8.3, bz + 3], [STAIR.x, STAIR.top - 0.3]], { ...G.tug(seconds), bow: 0.3 }, 5);
        } else if (seconds >= at(3)) walkAlong(m, seconds, at(3) + 0.8 + k * 0.4, 36, [[STAIR.x, STAIR.top - 0.3], [STAIR.x, STAIR.foot], [6.4 + k, 13.4]], G.rest(seconds), 5);
        else { face(m, bx, bz); m.pose(G.folded(seconds)); }
        lift(m);
      });
      dans.forEach((d, k) => {
        if (seconds < at(3) || k === 4) {
          d.root.position.set(bx + 0.3 + (k % 2) * 0.4, 2.7, bz - 1 + k * 0.5);
          if (seconds > at(2) && seconds < at(3)) { d.root.position.x = 7.5; face(d, 5, d.root.position.z + 3); d.pose({ ...G.guffaw(seconds + k), bow: 0.5 }); }
          else { face(d, bx + 0.9, bz); d.pose(G.laugh(seconds + k)); }
        } else { walkAlong(d, seconds, at(3) + 0.5 + k * 0.5, 36, [[bx + 0.3, bz - 1 + k * 0.5], [8.4, bz + 3], [STAIR.x, STAIR.top], [STAIR.x, STAIR.foot], [5.4 - k * 0.3, 13]], G.rest(seconds), 5.5); lift(d); }
      });
      // Trinkets bouncing off the tray and bursting on the boards.
      bits.forEach((b, k) => {
        const t0 = at(1) + 2 + k * 0.7;
        const u = seconds - t0;
        b.visible = u > 0 && u < 1.2;
        if (!b.visible) return;
        wang.hands.r.getWorldPosition(b.position); b.position.sub(hall.position);
        b.position.y = Math.max(2.72, b.position.y + u * 1.2 - u * u * 6);
        b.rotation.set(u * 8, 0, u * 5);
        b.scale.setScalar(u > 0.6 ? 0.4 : 1);
      });
      T.sit(pincai, 'pincai', seconds > at(2) + 4 ? G.laugh(seconds) : { ...G.rest(seconds), pitch: -0.3 }, [8, 0]);
      T.sit(fu, 'fu', seconds > at(2) + 4 ? G.clap(seconds) : { ...G.rest(seconds), pitch: -0.3 }, [8, 0]);
      T.sit(gui, 'gui', { ...G.rest(seconds), pitch: -0.3 }, [8, 0]);
    };
  },
});
