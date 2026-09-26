import * as THREE from 'three';
import { hallGeometry, type Kit, type V3 } from '../cinemaKit';
import { flat, tone, VERMILION } from './figure';
import { cityGate, column, crowd, DARK, floor, gate, hall, lattice, pavilion, plaque, room, shopRow, theatreStage, wall, WOOD, bridge, flowerGate } from './architecture';
import { bamboo, bareTree, ground, lotus, plumTree, range, rock, water, willow } from './nature';
import { bookshelf, chair, hangingScroll, lamp, roundTable, screen, studySet, table, vase, zither, dishes, cup, pot } from './props';
import { boat } from './vehicles';
import { mist } from './fx';
import { writing } from './props';

/*
 * The novel's recurring places, built once per film as standing sets: Ziyu's study, the Mei
 * courtyard and gate, a street of the capital, the teahouse theatre, the Wang reception hall, a
 * garden, the Grand Canal. Films stage their own action and camera in them.
 */

/** 梅子玉的书房: moon window onto bamboo, shelves, desk, zither, scrolls. Faces +z (open front). */
export function study(kit: Kit, parent: THREE.Object3D, { night = false, x = 0, z = 0 }: { night?: boolean; x?: number; z?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  const rand = kit.rand;
  room(kit, g, { w: 12, d: 9, h: 4.2, back: 'moon' });
  const grove = [bamboo(kit, g, -3, -7.5, { h: 8, count: 10, rand }), bamboo(kit, g, 1, -8.5, { h: 9, count: 8, rand })];
  rock(kit, g, -1.2, -6.2, { h: 1.8, rand });
  bookshelf(kit, g, { x: 3.6, z: -4.2, w: 2.4, h: 2.6, rand });
  bookshelf(kit, g, { x: 5.6, z: -2.5, w: 2.2, h: 2.6, rot: -Math.PI / 2, rand });
  hangingScroll(kit, g, { x: 1.4, y: 2.5, z: -4.38, w: 0.8, h: 2, kind: 'landscape' });
  hangingScroll(kit, g, { x: -5.85, y: 2.4, z: -1, w: 0.7, h: 1.8, kind: 'orchid' }).rotation.y = Math.PI / 2;
  // The desk, facing the room, and chairs for guests along the sides.
  table(kit, g, { x: 0, z: -2.2, w: 2, d: 0.95 });
  studySet(kit, g, 0.82, { x: 0.2, z: -2.2 });
  vase(kit, g, -0.7, 0.82, -2.4, { s: 0.9, rand });
  chair(kit, g, { x: 0, z: -3.1 });
  table(kit, g, { x: -3.6, z: -0.6, w: 0.6, d: 0.6, h: 0.75 });
  chair(kit, g, { x: -3.6, z: -1.4, rot: Math.PI / 2.2 });
  chair(kit, g, { x: -3.6, z: 0.3, rot: Math.PI / 1.8 });
  table(kit, g, { x: 3.4, z: 0.2, w: 1.4, d: 0.5, h: 0.72 });
  zither(kit, g, 3.4, 0.72, 0.2);
  const light = night ? lamp(kit, g, { x: 1.3, z: -2.6, y: 0.82, h: 0.5, power: 3.2 }) : undefined;
  return {
    group: g,
    /** Where people sit: behind the desk, and the two guest chairs. */
    seats: { desk: [0, -2.95] as [number, number], guestA: [-3.45, -1.35] as [number, number], guestB: [-3.45, 0.35] as [number, number] },
    update: (t: number) => { grove.forEach(b => b.update(t)); light?.update(t); },
  };
}

/**
 * A courtyard house seen from its lane: the gate in a long wall, trees behind it, the halls' roofs
 * beyond, and the lane stretching away. The gate faces +z; the lane runs along x at z = 3.
 */
export function gateLane(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, winter = true }: { x?: number; z?: number; winter?: boolean } = {}) {
  const g = kit.group(parent, x, 0, z);
  const rand = kit.rand;
  ground(kit, g, { w: 160, d: 120, height: 0.5, flatten: 30, shade: 0xd9d3c9 });
  floor(kit, g, 60, 5, { kind: 'flag', z: 3.2, y: 0.01 });
  const door = gate(kit, g, { w: 3, h: 3.4, wallSpan: 40 });
  hall(kit, g, { w: 12, d: 6, h: 3.2, z: -9, doors: false });
  hall(kit, g, { w: 9, d: 5, h: 3, x: -14, z: -8, doors: false });
  for (const [tx, tz] of [[-6, -3], [6, -4], [11, -2.5], [-12, -2]]) (winter ? bareTree(kit, g, tx, tz, 7 + rand() * 3, rand) : willow(kit, g, tx, tz, { h: 7, rand }));
  // The facing wall across the lane.
  wall(kit, g, -30, 12, 30, 12, 2.8);
  range(kit, g, { z: -120, span: 400, height: 28, shade: 0xc9c2b7, seed: 3 });
  for (const side of [-1, 1]) kit.mesh(new THREE.SphereGeometry(0.22, 10, 8), flat(VERMILION), g, side * 1.9, 2.8, 0.45);
  return { group: g, gate: door };
}

/** A street of the capital: shop rows both sides, a city gate at its end, traffic. update(t) moves banners. */
export function street(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0 }: { x?: number; z?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  const rand = kit.rand;
  ground(kit, g, { w: 240, d: 240, height: 0.3, flatten: 40, shade: 0xd6d0c6 });
  // Ruts along the road, running away from the camera along -z.
  floor(kit, g, 9, 200, { kind: 'flag', shade: 0xcfc8bc, z: -60, y: 0.01 });
  const rows = [] as ReturnType<typeof shopRow>[];
  for (let k = 0; k < 4; k++) {
    const left = shopRow(kit, g, { x: -8.5, z: -k * 26, count: 5, rand, facing: 1 });
    left.group.rotation.y = Math.PI / 2;
    const right = shopRow(kit, g, { x: 8.5, z: -k * 26 - 10, count: 5, rand, facing: 1 });
    right.group.rotation.y = -Math.PI / 2;
    rows.push(left, right);
  }
  cityGate(kit, g, { z: -130, w: 80, h: 11 });
  range(kit, g, { z: -220, span: 500, height: 40, shade: 0xc9c2b7, seed: 7 });
  const haze = mist(kit, g, { count: 8, w: 60, y: 2, d: 80, z: -70, size: 16, opacity: 0.45, drift: 0.8 });
  return { group: g, update: (t: number) => { rows.forEach(r => r.update(t)); haze.update(t); } };
}

/**
 * The teahouse theatre (戏园): a stage at -z, the pit of tables and benches before it, galleries on
 * both sides, all packed. update(t) stirs the crowd.
 */
export function theatre(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0 }: { x?: number; z?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  const rand = kit.rand;
  floor(kit, g, 40, 40, { kind: 'bricks', shade: 0xcfc8bc });
  const stage = theatreStage(kit, g, { z: -8, w: 8, d: 6, h: 1.2, tall: 4 });
  // The hall: walls, a gallery of two tiers on each side, a roof far overhead in shadow.
  for (const side of [-1, 1]) {
    kit.box(g, tone(0xb9b2a8), [side * 12, 4, -2], [0.3, 8, 26]);
    kit.box(g, tone(WOOD), [side * 9.5, 2.6, -2], [5, 0.2, 24]);
    kit.box(g, tone(DARK), [side * 7.1, 3.1, -2], [0.12, 0.9, 24]);
    for (let k = 0; k < 6; k++) column(kit, g, side * 7.1, -12 + k * 4.6, 6.2, 0.14, DARK);
  }
  kit.box(g, tone(0x8c857c), [0, 7.6, -2], [24, 0.3, 26]);
  for (let k = -3; k <= 3; k++) kit.box(g, tone(DARK), [0, 7.4, -2 + k * 3.6], [24, 0.3, 0.3]);
  const tables: [number, number][] = [];
  for (let r = 0; r < 4; r++) for (let c = -2; c <= 2; c++) tables.push([c * 2.6, -2.5 + r * 2.8]);
  const spots: [number, number, number?][] = [];
  for (const [tx, tz] of tables) {
    table(kit, g, { x: tx, z: tz, w: 1.4, d: 0.7, h: 0.75 });
    for (const dx of [-0.45, 0.45]) spots.push([tx + dx + (rand() - 0.5) * 0.1, tz + 0.65]);
    if (rand() < 0.6) spots.push([tx - 0.85, tz + (rand() - 0.5) * 0.3]);
    if (rand() < 0.6) spots.push([tx + 0.85, tz + (rand() - 0.5) * 0.3]);
    cup(kit, g, tx - 0.2, 0.75, tz, 1.4); pot(kit, g, tx + 0.25, 0.75, tz - 0.1, 0.9);
  }
  const pit = crowd(kit, g, spots, rand);
  const upper: [number, number, number?][] = [];
  for (const side of [-1, 1]) for (let k = 0; k < 20; k++) upper.push([side * (8 + rand() * 3), -12 + k * 1.2 + rand() * 0.3, 2.7]);
  const gallery = crowd(kit, g, upper, rand, { facing: 0 });
  // The gallery-goers face the stage (inward and toward -z).
  const standers: [number, number, number?][] = [];
  for (let k = 0; k < 18; k++) standers.push([(rand() - 0.5) * 14, 9 + rand() * 3]);
  const back = crowd(kit, g, standers, rand, { standing: true });
  const lanterns: THREE.Group[] = [];
  for (let k = -2; k <= 2; k++) {
    const l = kit.group(g, k * 3.2, 5.6, -4.6);
    kit.box(l, tone(DARK), [0, 0.6, 0], [0.02, 1.2, 0.02]);
    kit.mesh(new THREE.SphereGeometry(0.28, 12, 10), flat(VERMILION), l).scale.y = 1.25;
    lanterns.push(l);
  }
  const house = new THREE.PointLight(0xfff6ea, 6, 30, 1.2); house.position.set(0, 6, -6); g.add(house);
  return {
    group: g, stage, tables,
    update: (t: number) => { pit.update(t); gallery.update(t * 0.8); back.update(t * 1.1); lanterns.forEach((l, i) => { l.rotation.z = Math.sin(t * 0.8 + i) * 0.04; }); },
  };
}

/** Wang Wenhui's reception hall: a round banquet table with six chairs, screen, lanterns, plaque. */
export function banquetHall(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0 }: { x?: number; z?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  room(kit, g, { w: 16, d: 12, h: 5, back: 'plain', floorKind: 'bricks' });
  screen(kit, g, { z: -5.3, panels: 6, w: 1.1, h: 3, kind: 'landscape' });
  roundTable(kit, g, { r: 1.25 });
  const seats: [number, number, number][] = [];
  for (let k = 0; k < 6; k++) {
    // Seat angle: 0 is the far side (seat of honour faces the room), going round.
    const a = Math.PI + (k - 2.5) * (Math.PI * 2 / 6);
    const sx = Math.sin(a) * 1.75, sz = Math.cos(a) * 1.75;
    chair(kit, g, { x: sx, z: sz, rot: Math.atan2(-sx, -sz) });
    seats.push([sx, sz, Math.atan2(-sx, -sz)]);
  }
  dishes(kit, g, 0.84, [[0, 0], [0.5, 0.3], [-0.5, 0.3], [0.45, -0.4], [-0.45, -0.4], [0, 0.6], [0, -0.65]], kit.rand);
  const lanterns = [-5, 5].flatMap(lx => [-2, 2].map(lz => {
    const l = kit.group(g, lx, 4.2, lz);
    kit.box(l, tone(DARK), [0, 0.5, 0], [0.02, 1, 0.02]);
    kit.mesh(new THREE.SphereGeometry(0.35, 14, 10), flat(VERMILION), l).scale.y = 1.3;
    kit.box(l, tone(DARK), [0, -0.5, 0], [0.3, 0.06, 0.3]);
    return l;
  }));
  const board = plaque(kit, g, 3.4, 0.9, 0, 4.3, -5.85);
  writing(kit, board, ['燕', '喜', '堂'], { size: 0.52, gap: 1.12, margin: 0.2, z: 0.07 });
  for (const side of [-1, 1]) { const l = new THREE.PointLight(0xfff6ea, 3, 10, 1.5); l.position.set(side * 3, 2.6, -2); g.add(l); }
  return { group: g, seats, update: (t: number) => lanterns.forEach((l, i) => { l.rotation.z = Math.sin(t * 0.7 + i) * 0.05; }) };
}

/** A garden: a pond with a humped bridge, a pavilion, rocks, willows, a plum, lotus. */
export function garden(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, season = 'spring' as 'spring' | 'autumn' | 'winter' } = {}) {
  const g = kit.group(parent, x, 0, z);
  const rand = kit.rand;
  ground(kit, g, { w: 200, d: 200, height: 1.5, flatten: 18, shade: 0xd9d3c9 });
  water(kit, g, { w: 26, d: 14, z: -6, y: 0.05 });
  bridge(kit, g, { x: -3, z: -6, span: 7, rise: 1.4, w: 1.8 }).rotation.y = Math.PI / 2;
  pavilion(kit, g, { x: 6, z: -12, r: 2.2 });
  for (let k = 0; k < 6; k++) rock(kit, g, -12 + k * 5 + rand() * 2, -13.5 + rand() * 2, { h: 1 + rand() * 2.2, rand });
  const willows = [willow(kit, g, -9, -1.5, { h: 7, rand }), willow(kit, g, 11, -2, { h: 6.5, rand })];
  plumTree(kit, g, 3, 1, { h: 4, rand, blossoms: season === 'autumn' ? 0 : 140, red: season !== 'winter' });
  if (season !== 'winter') lotus(kit, g, 2, -6, { count: 18, rand, radius: 4, flowers: season === 'autumn' ? 1 : 4 });
  range(kit, g, { z: -110, span: 300, height: 30, shade: 0xc9c2b7, seed: 11 });
  const haze = mist(kit, g, { count: 8, w: 50, y: 0.6, d: 20, z: -12, size: 10, opacity: 0.5, drift: 0.3 });
  return { group: g, update: (t: number) => { willows.forEach(w => w.update(t)); haze.update(t); } };
}

/** The Grand Canal crowded with grain barges; returns the troupe's boat to stage on. */
export function canal(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0 }: { x?: number; z?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  const rand = kit.rand;
  water(kit, g, { w: 400, d: 60, y: 0.0, z: -10, scale: 0.6 });
  for (const side of [-1, 1]) {
    ground(kit, g, { w: 400, d: 60, height: 1.2, flatten: 0, shade: 0xd9d3c9, z: side * 50 - 10 }).position.y = 0.4;
    for (let k = 0; k < 10; k++) willow(kit, g, -60 + k * 13 + rand() * 4, side * 21 - 10, { h: 6 + rand() * 2, rand, strands: 20 });
  }
  const barges = Array.from({ length: 10 }, (_, k) => boat(kit, g, { x: -70 + k * 15 + rand() * 4, z: -14 - rand() * 5, rot: Math.PI / 2, len: 10 + rand() * 4, cabin: rand() < 0.4, mast: true, shade: 0x4a443e }));
  const troupe = boat(kit, g, { x: 0, z: 0, rot: Math.PI / 2, len: 12, cabin: true });
  range(kit, g, { z: -160, span: 500, height: 26, shade: 0xc9c2b7, seed: 5 });
  const haze = mist(kit, g, { count: 10, w: 120, y: 1, d: 30, z: -20, size: 18, opacity: 0.55, drift: 0.8 });
  return { group: g, troupe, update: (t: number) => { barges.forEach((b, i) => b.update(t, i)); troupe.update(t, 7); haze.update(t); } };
}

/** The Mei house's courtyard, inside the gate: halls on three sides, the flower gate, trees. */
export function courtyard(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0 }: { x?: number; z?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  const rand = kit.rand;
  floor(kit, g, 60, 60, { kind: 'bricks', shade: 0xd6d0c6 });
  floor(kit, g, 2.4, 22, { kind: 'flag', shade: 0xe6e0d6, y: 0.012 });
  const main = hall(kit, g, { w: 13, d: 6, h: 3.6, z: -12 });
  for (const side of [-1, 1]) { const h = hall(kit, g, { w: 10, d: 5, h: 3.2, x: side * 10, z: -3 }); h.group.rotation.y = -side * Math.PI / 2; }
  const fg = flowerGate(kit, g, { z: 7 });
  fg.group.rotation.y = Math.PI;
  for (const [tx, tz] of [[-4.5, -5], [4.5, -5]]) plumTree(kit, g, tx, tz, { h: 4, rand, blossoms: 60 });
  kit.mesh(new THREE.CylinderGeometry(0.6, 0.5, 0.7, 16), tone(0x6e675f), g, -4.5, 0.35, -5);
  kit.mesh(new THREE.CylinderGeometry(0.6, 0.5, 0.7, 16), tone(0x6e675f), g, 4.5, 0.35, -5);
  return { group: g, main, flowerGate: fg };
}

/** Lanterns hung in a row, gently swaying; returns an update. */
export function lanternRow(kit: Kit, parent: THREE.Object3D, from: V3, to: V3, n: number) {
  const ls = Array.from({ length: n }, (_, k) => {
    const u = n === 1 ? 0.5 : k / (n - 1);
    const l = kit.group(parent, from[0] + (to[0] - from[0]) * u, from[1] + (to[1] - from[1]) * u, from[2] + (to[2] - from[2]) * u);
    kit.box(l, tone(DARK), [0, 0.4, 0], [0.02, 0.8, 0.02]);
    kit.mesh(new THREE.SphereGeometry(0.25, 12, 10), flat(VERMILION), l).scale.y = 1.25;
    return l;
  });
  return (t: number) => ls.forEach((l, i) => { l.rotation.z = Math.sin(t * 0.9 + i) * 0.05; });
}

/** A lady's inner chamber: bed, dressing table, mirror, screen, curtained doorway. */
export function chamber(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0 }: { x?: number; z?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  room(kit, g, { w: 11, d: 8, h: 3.8, back: 'lattice', floorKind: 'boards' });
  screen(kit, g, { x: -3.6, z: -3.2, panels: 4, w: 0.8, h: 2.3, kind: 'plum', rot: 0.3 });
  table(kit, g, { x: 3.2, z: -3.3, w: 1.2, d: 0.6 });
  vase(kit, g, 3.5, 0.82, -3.3, { rand: kit.rand });
  lattice(kit, g, 2, 2.8, 'rings', false, 0, 1.4, -3.95);
  return { group: g };
}

/**
 * The capital seen from above: blocks of courtyard houses (instanced), avenues, the vermilion palace
 * to the north and the Western Hills beyond. Centre at the origin; north is -z.
 */
export function cityscape(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, snow = false }: { x?: number; z?: number; snow?: boolean } = {}) {
  const g = kit.group(parent, x, 0, z);
  const rand = kit.rand;
  ground(kit, g, { w: 900, d: 900, height: 0.5, flatten: 200, shade: snow ? 0xf0ece4 : 0xd9d3c9 });
  const halls: [number, number, number][] = [];
  for (let i = -12; i <= 12; i++) for (let j = -14; j <= 6; j++) {
    if (i === 0 || j === -4) continue;
    for (const [ox, oz] of [[-3, -3], [3, -3], [-3, 3], [3, 3]]) if (rand() < 0.8) halls.push([i * 14 + ox + (rand() - 0.5), j * 14 + oz + (rand() - 0.5), 4 + rand() * 2]);
  }
  const geo = hallGeometryCache(snow);
  const inst = new THREE.InstancedMesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }), halls.length);
  const m = new THREE.Matrix4();
  halls.forEach(([hx, hz, w], i) => { m.makeScale(w, w * 0.8, w * 0.7).setPosition(hx, 0, hz); inst.setMatrixAt(i, m); });
  g.add(inst);
  const palace = kit.group(g, 0, 0, -230);
  hall(kit, palace, { w: 40, d: 20, h: 8, base: 3, bays: 9, doors: false, shade: 0x6e675f });
  kit.box(palace, tone(VERMILION), [0, 3, 18], [80, 6, 1.5]);
  range(kit, g, { z: -420, span: 1200, height: 90, shade: 0xc9c2b7, seed: 77 });
  return g;
}

function hallGeometryCache(snow: boolean) {
  // Snow lies white on the roofs.
  return hallGeometry(snow ? 0xd6d0c6 : 0x4a443e, 0x9c958b, 0xb9b2a8);
}

/**
 * A formal hall (花厅 or reception room): a screen at the back, a pair of armchairs of honour with a
 * table between, and chairs down both sides with tea tables, potted flowers at the columns. Faces +z.
 */
export function formalHall(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, flowers = true, screenKind = 'landscape' as 'landscape' | 'plum' | 'bamboo' | 'peony' } = {}) {
  const g = kit.group(parent, x, 0, z);
  const rand = kit.rand;
  room(kit, g, { w: 14, d: 10, h: 4.4, back: 'plain', floorKind: 'bricks' });
  screen(kit, g, { z: -4.4, panels: 6, w: 1, h: 2.8, kind: screenKind });
  table(kit, g, { z: -3.2, w: 1, d: 0.6, h: 0.85 });
  const seats = { hostL: [-0.95, -3.1] as [number, number], hostR: [0.95, -3.1] as [number, number], side: [] as [number, number, number][] };
  chair(kit, g, { x: -0.95, z: -3.2 }); chair(kit, g, { x: 0.95, z: -3.2 });
  for (const side of [-1, 1]) for (let k = 0; k < 3; k++) {
    const cz = -1.4 + k * 1.6;
    chair(kit, g, { x: side * 3.4, z: cz, rot: -side * Math.PI / 2 });
    seats.side.push([side * 3.25, cz, -side * Math.PI / 2]);
    if (k < 2) { table(kit, g, { x: side * 3.4, z: cz + 0.8, w: 0.5, d: 0.5, h: 0.72 }); cup(kit, g, side * 3.4, 0.72, cz + 0.8, 1.2); }
  }
  if (flowers) for (const [fx, fz] of [[-5.8, -4], [5.8, -4], [-5.8, 3.5], [5.8, 3.5]]) {
    kit.mesh(new THREE.CylinderGeometry(0.35, 0.28, 0.5, 14), tone(0x6e675f), g, fx, 0.25, fz);
    plumTree(kit, g, fx, fz, { h: 1.8, rand, blossoms: 50 }).position.y = 0.45;
  }
  plaque(kit, g, 3, 0.8, 0, 3.9, -4.85);
  return { group: g, seats };
}

/**
 * The boat-room (船房): a long, low pavilion built out over a pond like a moored boat, lattice windows
 * down both sides, a table at its middle. Runs along z; the open end faces +z.
 */
export function boatRoom(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, night = false }: { x?: number; z?: number; night?: boolean } = {}) {
  const g = kit.group(parent, x, 0, z);
  const rand = kit.rand;
  water(kit, g, { w: 60, d: 50, y: -0.3 });
  lotus(kit, g, 4, -2, { count: 18, rand, radius: 3, flowers: 1 });
  kit.box(g, tone(0x8c857c), [0, -0.15, 0], [3.6, 0.3, 9]);
  floor(kit, g, 3.2, 8.6, { kind: 'boards', y: 0.01 });
  for (const side of [-1, 1]) {
    for (let k = 0; k < 5; k++) column(kit, g, side * 1.6, -4 + k * 2, 2.5, 0.07, DARK);
    for (let k = 0; k < 4; k++) lattice(kit, g, 1.8, 1.2, k % 2 ? 'rings' : 'diamond', true, side * 1.62, 1.6, -3 + k * 2).rotation.y = Math.PI / 2;
    kit.box(g, tone(WOOD), [side * 1.62, 0.5, 0], [0.08, 0.8, 8.6]);
  }
  kit.box(g, tone(DARK), [0, 2.55, 0], [3.4, 0.1, 9]);
  const top = kit.mesh(new THREE.CylinderGeometry(2.2, 2.2, 9.4, 18, 1, true, -Math.PI / 2, Math.PI), tone(TILE_TONE, true), g, 0, 2.3, 0);
  top.rotation.x = Math.PI / 2; top.rotation.z = Math.PI / 2; top.scale.set(1, 1, 0.45);
  table(kit, g, { w: 1.2, d: 0.7, h: 0.76 });
  chair(kit, g, { x: -0.9, z: 0, rot: Math.PI / 2 }); chair(kit, g, { x: 0.9, z: 0, rot: -Math.PI / 2 });
  cup(kit, g, -0.25, 0.76, 0, 1.3); cup(kit, g, 0.25, 0.76, 0, 1.3); pot(kit, g, 0, 0.76, -0.2);
  const w = willow(kit, g, 4.4, -5, { h: 7, rand });
  const light = night ? lamp(kit, g, { x: 0.4, z: -0.25, y: 0.76, h: 0.35, power: 3 }) : undefined;
  return { group: g, update: (t: number) => { w.update(t); light?.update(t); } };
}
const TILE_TONE = 0x4a443e;
