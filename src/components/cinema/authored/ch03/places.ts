import * as THREE from 'three';
import type { Kit } from '../../cinemaKit';
import { DARK, WOOD, lattice, room } from '../../stage/architecture';
import { flat, tone, type Figure } from '../../stage/figure';
import { bookshelf, cup, dishes, kang, lamp, pot, roundTable, screen, stool, table } from '../../stage/props';
import { theatre } from '../../stage/locations';
import { smoke } from '../../stage/fx';
import { lights } from '../../stage/direct';

/*
 * Sets and small builders for chapter 3: the Mei house's accounts room and Pincai's room, the
 * restaurant with its two private rooms and the thin partition between them, a hotpot, dogs, and
 * the marks that make Old Wang and Rongguan recognisable.
 */

/** A hotpot with its charcoal chimney, steaming. `update(t)` is not needed: the steam runs on time. */
export function hotpot(kit: Kit, parent: THREE.Object3D, x: number, y: number, z: number, s = 1) {
  const g = kit.group(parent, x, y, z); g.scale.setScalar(s);
  kit.mesh(new THREE.CylinderGeometry(0.2, 0.14, 0.12, 20), tone(0x6e675f), g, 0, 0.06, 0);
  kit.mesh(new THREE.TorusGeometry(0.2, 0.02, 6, 24).rotateX(Math.PI / 2), tone(0x4a443e), g, 0, 0.12, 0);
  kit.mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.26, 12), tone(0x3f3a35), g, 0, 0.2, 0);
  kit.mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.1, 12), tone(0x3f3a35), g, 0, -0.04, 0);
  smoke(kit, g, 0, 0.34, 0, { h: 0.9, count: 70, size: 0.07, shade: 0xb9b2a8 });
  return g;
}

/** The Mei house's accounts room (账房): counter with ledgers and abacus, a wall clock, a
 * purple-bamboo bookshelf, and a round table by the stove where the steward eats. Faces +z. */
export function accountsRoom(kit: Kit, parent: THREE.Object3D) {
  const g = kit.group(parent, 0, 0, 0);
  room(kit, g, { w: 10, d: 8, h: 3.6, back: 'plain', floorKind: 'bricks' });
  table(kit, g, { x: -2.6, z: -2.9, w: 2.2, d: 0.8, h: 0.95 });
  for (let k = 0; k < 4; k++) kit.box(g, tone([0x6e675f, 0x9c958b, 0x4a443e, 0x8c857c][k]), [-3.3 + k * 0.22, 1.0 + (k % 2) * 0.02, -3], [0.18, 0.06 + (k % 2) * 0.04, 0.26]);
  // An abacus: frame, rods and beads.
  const abacus = kit.group(g, -1.9, 0.97, -2.9);
  kit.box(abacus, tone(DARK), [0, 0.01, 0], [0.5, 0.02, 0.22]);
  for (let r = 0; r < 9; r++) for (let b = 0; b < 5; b++) kit.mesh(new THREE.SphereGeometry(0.014, 6, 4), tone(0x3f3a35), abacus, -0.2 + r * 0.05, 0.03, -0.08 + b * 0.035 + (b > 0 ? 0.03 : 0));
  // The wall clock: a case, a face and a pendulum.
  const clock = kit.group(g, 1.6, 2.4, -3.88);
  kit.box(clock, tone(WOOD), [0, 0, 0], [0.5, 0.9, 0.12]);
  kit.mesh(new THREE.CircleGeometry(0.18, 24), tone(0xf2eee6), clock, 0, 0.18, 0.07);
  const hand = kit.box(clock, tone(DARK), [0, 0.18, 0.08], [0.012, 0.14, 0.01]);
  hand.geometry.translate(0, 0.06, 0);
  const pendulum = kit.group(clock, 0, -0.08, 0.07);
  kit.box(pendulum, tone(0x9c958b), [0, -0.18, 0], [0.01, 0.34, 0.01]);
  kit.mesh(new THREE.CircleGeometry(0.05, 16), tone(0x9c958b), pendulum, 0, -0.36, 0.005);
  // Purple-bamboo shelf with a few worn books.
  const shelf = bookshelf(kit, g, { x: 3.6, z: -3.4, w: 1.4, h: 2, rand: kit.rand });
  roundTable(kit, g, { x: 0.6, z: -0.2, r: 0.7, h: 0.78 });
  const seats: [number, number][] = [[0.6 - 0.95, -0.2], [0.6 + 0.95, -0.2]];
  seats.forEach(([x, z]) => stool(kit, g, x, z));
  lamp(kit, g, { x: -4, z: -3.2, h: 1.6, power: 1.5 });
  lights(kit, g, { key: [3, 5, 6], intensity: 0.9 });
  return {
    group: g, seats, shelf, table: [0.6, -0.2] as [number, number],
    update: (t: number) => { pendulum.rotation.z = Math.sin(t * Math.PI) * 0.25; hand.rotation.z = -t * 0.02; },
  };
}

/** Pincai's room: a kang with a dressing box on it, a lamp, a window. Faces +z. */
export function pincaiRoom(kit: Kit, parent: THREE.Object3D) {
  const g = kit.group(parent, 0, 0, 0);
  room(kit, g, { w: 8, d: 7, h: 3.4, back: 'lattice', floorKind: 'bricks' });
  kang(kit, g, { x: -1.2, z: -2.5, w: 3, d: 1.6 });
  const box = kit.group(g, -0.2, 0.55, -2.8);
  kit.box(box, tone(0x4a443e), [0, 0.1, 0], [0.4, 0.2, 0.3]);
  kit.box(box, tone(0x9c958b), [0, 0.21, 0], [0.42, 0.02, 0.32]);
  table(kit, g, { x: 2.3, z: -2.9, w: 1.2, d: 0.55 });
  lamp(kit, g, { x: 2.8, z: -2.9, y: 0.82, h: 0.5, power: 2 });
  return { group: g, kang: [-1.2, -2.5] as [number, number], box };
}

/**
 * The restaurant's upstairs: two private rooms side by side (left for Fu the Third's party, right
 * for Xi the Eleventh's), divided by a thin board partition with a crack in it at x = 0. Each
 * room has a round table and stools. Faces +z.
 */
export function restaurant(kit: Kit, parent: THREE.Object3D) {
  const g = kit.group(parent, 0, 0, 0);
  room(kit, g, { w: 14, d: 7, h: 3.4, back: 'lattice', floorKind: 'boards' });
  // The partition, in two leaves with a narrow gap between.
  kit.box(g, tone(WOOD), [0, 1.6, -2.1], [0.08, 3.2, 2.7]);
  kit.box(g, tone(WOOD), [0, 1.6, 0.9], [0.08, 3.2, 3.1]);
  lattice(kit, g, 2, 0.8, 'rings', false, 0, 2.7, 0.9).rotation.y = Math.PI / 2;
  const rooms = [-3.5, 3.5].map(cx => {
    const top = roundTable(kit, g, { x: cx, z: -0.6, r: 0.8, h: 0.8 });
    const seats: [number, number][] = [];
    for (let k = 0; k < 5; k++) { const a = Math.PI + (k - 2) * 1.05; const x = cx + Math.sin(a) * 1.15, z = -0.6 + Math.cos(a) * 1.15; stool(kit, g, x, z); seats.push([x, z]); }
    return { x: cx, seats, table: top };
  });
  screen(kit, g, { x: -6, z: -2.6, panels: 3, w: 0.6, h: 2, kind: 'bamboo', rot: 0.4 });
  const setTable = (i: number, rand: () => number) => dishes(kit, g, 0.82, [[rooms[i].x - 0.25, -0.5], [rooms[i].x + 0.25, -0.75], [rooms[i].x, -0.3]], rand);
  const cups = rooms.map(r => r.seats.map(([x, z]) => cup(kit, g, r.x + (x - r.x) * 0.6, 0.82, -0.6 + (z + 0.6) * 0.6)));
  pot(kit, g, rooms[0].x + 0.1, 0.82, -0.9);
  return { group: g, rooms, cups, setTable, crack: [0, 1.6, -0.75] as [number, number, number] };
}

/** A big street dog: body, head, tail and four legs. `update(t, mode)` walks, eats or fights. */
export function dog(kit: Kit, parent: THREE.Object3D, x: number, z: number, shade = 0x4a443e) {
  const g = kit.group(parent, x, 0, z);
  const coat = tone(shade);
  const body = kit.group(g, 0, 0.45, 0);
  kit.mesh(new THREE.SphereGeometry(0.2, 12, 8), coat, body).scale.set(0.9, 0.9, 2);
  const head = kit.group(body, 0, 0.12, 0.42);
  kit.mesh(new THREE.SphereGeometry(0.11, 10, 8), coat, head);
  kit.mesh(new THREE.ConeGeometry(0.06, 0.16, 8).rotateX(Math.PI / 2), coat, head, 0, -0.02, 0.12);
  for (const s of [-1, 1]) kit.mesh(new THREE.ConeGeometry(0.035, 0.08, 5), coat, head, s * 0.06, 0.1, -0.02);
  const tail = kit.group(body, 0, 0.08, -0.38);
  kit.mesh(new THREE.CylinderGeometry(0.02, 0.01, 0.28, 5).translate(0, 0.14, 0), coat, tail);
  const legs = [[-0.1, 0.25], [0.1, 0.25], [-0.1, -0.25], [0.1, -0.25]].map(([lx, lz]) => {
    const hip = kit.group(g, lx, 0.42, lz);
    kit.mesh(new THREE.CylinderGeometry(0.035, 0.03, 0.42, 6).translate(0, -0.21, 0), coat, hip);
    return hip;
  });
  return {
    group: g, head,
    update(t: number, mode: 'walk' | 'eat' | 'fight' | 'stand' = 'stand', seed = 0) {
      const walk = mode === 'walk' ? 1 : mode === 'fight' ? 0.6 : 0;
      legs.forEach((l, i) => { l.rotation.x = Math.sin(t * 9 + seed + (i % 2 ? Math.PI : 0) + (i > 1 ? Math.PI / 2 : 0)) * 0.5 * walk; });
      head.rotation.x = mode === 'eat' ? 0.8 + Math.sin(t * 8 + seed) * 0.15 : mode === 'fight' ? -0.3 + Math.sin(t * 14 + seed) * 0.3 : 0;
      body.rotation.x = mode === 'fight' ? -0.35 + Math.sin(t * 10 + seed) * 0.2 : mode === 'eat' ? 0.2 : 0;
      body.position.y = 0.45 + (mode === 'fight' ? Math.abs(Math.sin(t * 10 + seed)) * 0.15 : 0);
      tail.rotation.x = -0.6 + Math.sin(t * 12 + seed) * 0.4;
    },
  };
}

/** Old Wang's goitre, a grey sack at the side of his neck. */
export function goitre(kit: Kit, fig: Figure) {
  kit.mesh(new THREE.SphereGeometry(0.06, 10, 8), tone(0xb9b2a8), fig.head, 0.06, -0.12, 0.03).scale.set(1, 1.2, 1);
}

/** Old Wang's yellow lacquer tray of trinkets, held in both hands. */
export function peddlerTray(kit: Kit, fig: Figure) {
  const g = kit.group(fig.hands.r, -0.12, 0, 0.12);
  kit.box(g, tone(0x9c958b), [0, 0, 0], [0.42, 0.03, 0.3]);
  const items: THREE.Object3D[] = [];
  for (let k = 0; k < 7; k++) items.push(kit.mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.06 + (k % 3) * 0.02, 8), tone([0xe6e0d6, 0x6e675f, 0xcfc8bc][k % 3]), g, -0.16 + (k % 4) * 0.1, 0.05, -0.08 + Math.floor(k / 4) * 0.14));
  return { group: g, items };
}

/** Rongguan's little gold earring. */
export function earring(kit: Kit, fig: Figure) {
  kit.mesh(new THREE.TorusGeometry(0.012, 0.003, 5, 12), flat(0x8c857c), fig.head, -0.1, -0.03, 0.0);
}

/**
 * The Sanle Garden (三乐园), the Lianzhu troupe's playhouse, built on the stage kit's theatre: a
 * table for Pincai against the wall by the stage door, a stair up to the right-hand gallery, and
 * the spots where the gallery's parties sit. Gallery floors are at y = 2.7.
 */
export function sanle(kit: Kit, parent: THREE.Object3D) {
  const th = theatre(kit, parent);
  lights(kit, parent, { key: [-4, 7, 9], intensity: 1.1, fill: 0.55, fillFrom: [8, 5, 4] });
  const tbl: [number, number] = [-6.4, -4.4];
  table(kit, parent, { x: tbl[0], z: tbl[1], w: 1.6, d: 0.75, h: 0.78 });
  kit.box(parent, tone(WOOD), [tbl[0], 0.22, tbl[1] + 0.75], [1.8, 0.44, 0.35]);
  for (const side of [-1, 1]) kit.box(parent, tone(WOOD), [tbl[0] + side * 1.05, 0.22, tbl[1]], [0.35, 0.44, 1.2]);
  pot(kit, parent, tbl[0] + 0.4, 0.78, tbl[1] - 0.1, 0.9);
  // The stair to the right-hand gallery, at the back of the hall.
  for (let k = 0; k < 12; k++) kit.box(parent, tone(WOOD), [8.2, 0.11 + k * 0.225, 10 - k * 0.4], [1.2, 0.225, 0.42]);
  // Private boxes on the gallery: low tables along the rail.
  const boxes: [number, number][] = [[9.6, -7], [9.6, -3], [9.6, 1]];
  const deck = kit.group(parent, 0, 2.7, 0);
  for (const [bx, bz] of boxes) { table(kit, deck, { x: bx, z: bz, w: 0.7, d: 1.4, h: 0.6 }); stool(kit, deck, bx + 0.9, bz); }
  return {
    ...th, table: tbl, boxes,
    /** The dressing-room curtain at the stage door, in hall coordinates. */
    door: [-2.64, 1.2, -10.5] as [number, number, number],
    stair: { foot: [8.2, 10.4] as [number, number], top: [8.2, 5.4] as [number, number] },
  };
}
