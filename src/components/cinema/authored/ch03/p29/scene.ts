import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { cup, dishes } from '../../../stage/props';
import { aim, move, sets, span } from '../../../stage/direct';
import { PROPRIETOR, WAITER } from '../actors';
import { inn } from '../inn';

/*
 * Chapter 3, paragraph 29. Rongguan, shuddering, mimes the blow to Old Wang's goitre. Then a
 * roar through the partition: the camera pulls back to take in both rooms, the left table frozen,
 * Rongguan's eye at the crack, while on the right Xi is up and cursing Chunlan. Smash for smash:
 * a cup flies and bursts, a bowl, then dishes, Chunlan hurling back as fast as Xi, until Xi heaves
 * the whole table over in a spray of crockery. One dan bolts, two clutch at Xi's sleeves, Chunlan
 * runs out sobbing, and the proprietor and his waiters come pelting up.
 */

type Throw = { by: 'xi' | 'chunlan'; t: number; big: boolean };
const THROWS: Throw[] = [
  { by: 'xi', t: 19, big: false }, { by: 'chunlan', t: 20.2, big: true }, { by: 'xi', t: 21.4, big: true },
  { by: 'chunlan', t: 22.3, big: false }, { by: 'chunlan', t: 22.9, big: false }, { by: 'chunlan', t: 23.5, big: true }, { by: 'xi', t: 24.4, big: true },
];

export default defineScene({
  seed: 3029,
  build: (kit, story) => {
    const { groups: [upstairs], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const I = inn(kit, upstairs);
    I.setTable(0, kit.rand);
    const right = I.rooms[1];
    dishes(kit, right.table, 0.82, [[-0.25, 0.1], [0.25, -0.15], [0, 0.3], [0.3, 0.3]], kit.rand);
    const onTable = [cup(kit, right.table, 0.4, 0.82, -0.2), cup(kit, right.table, -0.4, 0.82, 0.1)];
    const flying = THROWS.map(({ big }) => kit.mesh(big ? new THREE.CylinderGeometry(0.12, 0.08, 0.07, 14) : new THREE.CylinderGeometry(0.05, 0.035, 0.06, 10), tone(0xe6e0d6), upstairs, 0, 0, 0));
    const shards = THROWS.map(() => Array.from({ length: 5 }, (_, k) => kit.mesh(new THREE.CircleGeometry(0.03 + (k % 3) * 0.015, 3).rotateX(-Math.PI / 2), tone(0xe6e0d6, true), upstairs, 0, 0.01, 0)));
    const boss = figure(kit, upstairs, PROPRIETOR, 4, 6);
    const waiters = [0, 1].map(k => figure(kit, upstairs, WAITER, 3 + k, 6.5));
    const [kx, , kz] = I.crack;
    const cam = move(kit, upstairs, [
      [at(1), [0, 3, 8], [0, 1.2, -0.8]],
      [at(2), [2.6, 2, 5], [3.5, 1.1, -0.6]],
      [at(3), [1.4, 2.6, 6.4], [3.4, 0.8, -0.2]],
      [36, [0.4, 3.4, 9.5], [2.6, 0.8, 0]],
    ]);

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.02));
      const L = I.left;
      I.sit('pincai', seconds > at(1) ? { ...G.rest(seconds), yaw: 0.9 } : G.rest(seconds));
      I.sit('fu', seconds > at(1) ? { ...G.rest(seconds), yaw: 0.9, mouth: 0 } : G.laugh(seconds));
      I.sit('gui', seconds > at(1) ? { ...G.rest(seconds), yaw: 0.9 } : G.rest(seconds));
      if (seconds < at(1) + 2) I.sit('rong', cue(seconds, [[0, t => ({ ...G.point(t), r: { lift: 1.4, out: 0.1, twist: 0.5, bend: 1.9 } })], [3, G.weep]]));
      else { const r = I.who('rong'); if (!walkAlong(r, seconds, at(1) + 2, at(1) + 3.5, [[L.rong.x, L.rong.z], [kx - 0.35, kz + 0.2]], G.rest(seconds), 5)) { face(r, kx, kz); r.pose({ ...G.whisper(seconds), bow: 0.35, mouth: 0 }); } }
      // The right room: Xi on his feet, cursing, throwing; Chunlan answering; the table over.
      const xi = I.who('xi'), chun = I.who('chunlan');
      const R = I.right;
      const tipped = span(seconds, 27.6, 28.3);
      right.table.rotation.z = tipped * 1.45;
      right.table.position.y = tipped * 0.35;
      onTable.forEach(c => { c.visible = tipped < 0.3; });
      if (seconds < at(1)) I.sit('xi', G.laugh(seconds));
      else { xi.root.position.set(R.xi.x, 0, R.xi.z); face(xi, chun.root.position.x, chun.root.position.z); xi.pose(cue(seconds, [[at(1), G.fume], [18.8, G.point], [24, G.argue], [27.4, t => ({ ...G.fume(t), bow: 0.4, r: { lift: 0.4, out: 0.5, bend: 0.2 }, l: { lift: 0.4, out: 0.5, bend: 0.2 } })], [28.4, t => ({ ...G.fume(t), mouth: 1 })]])); }
      if (seconds < at(1) + 3) I.sit('chunlan', G.shy(seconds));
      else if (seconds < 28.5) { chun.root.position.set(R.chunlan.x + 0.3, 0, R.chunlan.z + 0.3); face(chun, xi.root.position.x, xi.root.position.z); chun.pose(seconds > 20 ? G.point(seconds, 'l') : G.argue(seconds)); }
      else if (!walkAlong(chun, seconds, 28.5, 31, [[R.chunlan.x + 0.3, R.chunlan.z + 0.3], [5.4, 2], [6.4, 3.6]], { ...G.weep(seconds), bow: 0.3 }, 7)) { face(chun, 7, 6); chun.pose({ ...G.weep(seconds), bow: 0.4 }); }
      (['a', 'b', 'c'] as const).forEach((w, k) => {
        const f = I.who(w);
        if (seconds < 28.4) I.sit(w, seconds > at(1) ? G.shy(seconds + k) : G.laugh(seconds + k));
        else if (k === 2) walkAlong(f, seconds, 28.4, 31, [[R[w].x, R[w].z], [6.6, 1], [7, 5]], G.rest(seconds), 8);
        else { f.root.position.set(xi.root.position.x + (k ? 0.45 : -0.45), 0, xi.root.position.z + 0.35); face(f, xi.root.position.x, xi.root.position.z); f.pose(G.tug(seconds + k)); }
      });
      // The crockery: thrown in an arc from the thrower's hand to the floor, and burst.
      THROWS.forEach(({ by, t }, k) => {
        const u = (seconds - t) / 0.55;
        const m = flying[k];
        const from = I.who(by).hands.r;
        const land: [number, number] = [3.5 + Math.sin(k * 2.3) * 1.1, -0.1 + Math.cos(k * 1.7) * 0.8];
        m.visible = u > 0 && u < 1;
        if (m.visible) { from.getWorldPosition(m.position); m.position.sub(upstairs.position); m.position.set(m.position.x + (land[0] - m.position.x) * u, m.position.y * (1 - u) + Math.sin(u * Math.PI) * 0.5, m.position.z + (land[1] - m.position.z) * u); m.rotation.set(u * 6, 0, u * 4); }
        shards[k].forEach((s, j) => { const v = Math.min(1, Math.max(0, seconds - t - 0.55) * 4); s.visible = seconds > t + 0.55; const a = j * 1.25 + k; s.position.set(land[0] + Math.cos(a) * v * 0.35, 0.01, land[1] + Math.sin(a) * v * 0.3); });
      });
      // The proprietor and waiters come running.
      [boss, ...waiters].forEach((f, k) => { walkAlong(f, seconds, 31 + k * 0.3, 34.5, [[4 + k * 0.6, 6 + k * 0.4], [3.6 + k * 0.5, 1.2]], G.rest(seconds), 8); if (seconds > 34.5) { face(f, R.xi.x, R.xi.z); f.pose(G.bow(seconds, 0.5)); } });
      if (shot === 0) aim(kit, upstairs, [L.rong.x + 0.9, 1.35, L.rong.z + 1.3], [L.rong.x, 1.3, L.rong.z], 0.3);
      else cam(seconds);
    };
  },
});
