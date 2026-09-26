import * as THREE from 'three';
import { roofGeometry, type Kit } from '../cinemaKit';
import { contactShadow, flat, tone, VERMILION } from './figure';

/*
 * Buildings in real 3D, in ink tones: tiled roofs with sweeping eaves, columns, lattice, steps and
 * walls. Everything is placed in metres; a figure is about 1.7 m tall.
 */

export const WOOD = 0x3f3a35;
export const DARK = 0x2f2a26;
export const PLASTER = 0xe6e0d6;
export const STONE = 0xb9b2a8;
export const TILE = 0x4a443e;

type Canvas2D = CanvasRenderingContext2D;
function canvas(w: number, h: number, draw: (ctx: Canvas2D) => void) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d')!);
  return c;
}

const textureCache = new WeakMap<Kit, Map<string, THREE.Texture>>();
/** A canvas texture made once per cinema and reused. */
export function cachedTexture(kit: Kit, key: string, make: () => HTMLCanvasElement, repeat?: [number, number]) {
  let map = textureCache.get(kit);
  if (!map) { map = new Map(); textureCache.set(kit, map); }
  const k = `${key}:${repeat?.join('x') ?? ''}`;
  let t = map.get(k);
  if (!t) {
    t = kit.canvasTexture(make());
    if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); }
    map.set(k, t);
  }
  return t;
}

/** Lattice: a window or door screen of thin wooden bars over paper, as a see-through texture. */
function latticeCanvas(kind: 'grid' | 'diamond' | 'ice' | 'rings', paper: boolean) {
  return canvas(256, 256, ctx => {
    if (paper) { ctx.fillStyle = '#ece6da'; ctx.fillRect(0, 0, 256, 256); }
    ctx.strokeStyle = '#2f2a26'; ctx.lineWidth = 10; ctx.strokeRect(0, 0, 256, 256);
    ctx.lineWidth = 5;
    if (kind === 'grid') {
      for (let k = 32; k < 256; k += 32) { ctx.beginPath(); ctx.moveTo(k, 0); ctx.lineTo(k, 256); ctx.moveTo(0, k); ctx.lineTo(256, k); ctx.stroke(); }
    } else if (kind === 'diamond') {
      for (let k = -256; k < 512; k += 36) { ctx.beginPath(); ctx.moveTo(k, 0); ctx.lineTo(k + 256, 256); ctx.moveTo(k + 256, 0); ctx.lineTo(k, 256); ctx.stroke(); }
    } else if (kind === 'rings') {
      for (let y = 0; y <= 256; y += 42) for (let x = 0; x <= 256; x += 42) { ctx.beginPath(); ctx.arc(x, y, 22, 0, Math.PI * 2); ctx.stroke(); }
    } else {
      // Cracked ice (冰裂纹), from fixed points so every copy matches.
      const pts = [[40, 20], [120, 60], [200, 30], [70, 120], [170, 140], [230, 110], [30, 200], [110, 220], [210, 230], [140, 100]];
      const links = [[0, 1], [1, 2], [0, 3], [1, 9], [9, 4], [2, 5], [5, 4], [3, 6], [3, 9], [4, 7], [6, 7], [7, 8], [4, 8], [5, 8]];
      for (const [a, b] of links) { ctx.beginPath(); ctx.moveTo(pts[a][0], pts[a][1]); ctx.lineTo(pts[b][0], pts[b][1]); ctx.stroke(); }
    }
  });
}
export function lattice(kit: Kit, parent: THREE.Object3D, w: number, h: number, kind: 'grid' | 'diamond' | 'ice' | 'rings' = 'grid', paper = true, x = 0, y = 0, z = 0) {
  const map = cachedTexture(kit, `lattice-${kind}-${paper}`, () => latticeCanvas(kind, paper), [Math.max(1, Math.round(w / 0.9)), Math.max(1, Math.round(h / 0.9))]);
  const m = new THREE.MeshLambertMaterial({ map, transparent: !paper, alphaTest: paper ? 0 : 0.4, side: THREE.DoubleSide });
  const mesh = kit.mesh(new THREE.PlaneGeometry(w, h), m, parent, x, y, z);
  return mesh;
}

/** A floor of square bricks (or boards) that recedes in perspective. */
export function floor(kit: Kit, parent: THREE.Object3D, w: number, d: number, { kind = 'bricks', shade = 0xd8d2c8, x = 0, z = 0, y = 0 }: { kind?: 'bricks' | 'boards' | 'flag' | 'plain'; shade?: number; x?: number; z?: number; y?: number } = {}) {
  let material: THREE.Material;
  if (kind === 'plain') material = tone(shade);
  else {
    const map = cachedTexture(kit, `floor-${kind}`, () => canvas(256, 256, ctx => {
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 256, 256);
      ctx.strokeStyle = 'rgba(40,34,30,0.45)'; ctx.lineWidth = 3;
      if (kind === 'bricks') { for (let k = 0; k <= 256; k += 128) { ctx.beginPath(); ctx.moveTo(k, 0); ctx.lineTo(k, 256); ctx.moveTo(0, k); ctx.lineTo(256, k); ctx.stroke(); } }
      else if (kind === 'boards') { for (let k = 0; k <= 256; k += 64) { ctx.beginPath(); ctx.moveTo(0, k); ctx.lineTo(256, k); ctx.stroke(); } for (let k = 0; k < 4; k++) { ctx.beginPath(); ctx.moveTo((k * 97) % 256, k * 64); ctx.lineTo((k * 97) % 256, k * 64 + 64); ctx.stroke(); } }
      else { ctx.lineWidth = 2; const pts = [[0, 60], [90, 40], [180, 80], [256, 50], [60, 150], [150, 170], [256, 140], [30, 256], [120, 230], [220, 256]]; for (const [a, b] of [[0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 6], [4, 5], [5, 6], [4, 7], [5, 8], [6, 9], [7, 8], [8, 9], [1, 4], [2, 5]]) { ctx.beginPath(); ctx.moveTo(pts[a][0], pts[a][1]); ctx.lineTo(pts[b][0], pts[b][1]); ctx.stroke(); } }
    }), [w / (kind === 'bricks' ? 1.2 : 2.4), d / (kind === 'bricks' ? 1.2 : 2.4)]);
    material = new THREE.MeshLambertMaterial({ map, color: shade });
  }
  return kit.mesh(new THREE.PlaneGeometry(w, d).rotateX(-Math.PI / 2), material, parent, x, y, z);
}

/** A tiled roof with sweeping eaves, a ridge and ridge ornaments, its eaves at height y. */
export function roof(kit: Kit, parent: THREE.Object3D, w: number, d: number, { y = 3, rise = 1.1, shade = TILE, x = 0, z = 0 }: { y?: number; rise?: number; shade?: number; x?: number; z?: number } = {}) {
  const g = kit.group(parent, x, y, z);
  // Rows of tiles run down the slopes: stripes along the roof's width, in the geometry's uv.
  const map = cachedTexture(kit, 'roof-tiles', () => canvas(64, 8, ctx => {
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 64, 8);
    ctx.fillStyle = '#6a625a'; ctx.fillRect(0, 0, 18, 8);
  }), [Math.round(w / 0.32), 1]);
  const m = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide, map });
  kit.mesh(roofGeometry(w, d, rise, new THREE.Color(shade)), m, g);
  // Ridge and its upturned ends.
  kit.box(g, tone(DARK), [0, rise + 0.02, 0], [w * 0.62, 0.14, 0.16]);
  for (const side of [-1, 1]) {
    const end = kit.mesh(new THREE.ConeGeometry(0.1, 0.34, 6), tone(DARK), g, side * w * 0.31, rise + 0.2, 0);
    end.rotation.z = -side * 0.5;
  }
  return g;
}

/** A round column on a stone base. */
export function column(kit: Kit, parent: THREE.Object3D, x: number, z: number, h: number, r = 0.14, shade = WOOD) {
  kit.mesh(new THREE.CylinderGeometry(r, r * 1.05, h, 14), tone(shade), parent, x, h / 2, z);
  kit.mesh(new THREE.CylinderGeometry(r * 1.5, r * 1.7, 0.16, 12), tone(STONE), parent, x, 0.08, z);
}

/** A stepped stone platform (台基) with steps at the front. */
export function platform(kit: Kit, parent: THREE.Object3D, w: number, d: number, h = 0.45, { x = 0, z = 0, steps = true } = {}) {
  kit.box(parent, tone(STONE), [x, h / 2, z], [w, h, d]);
  kit.box(parent, tone(0x9c958b), [x, h - 0.03, z], [w + 0.08, 0.06, d + 0.08]);
  if (steps) {
    const n = Math.max(2, Math.round(h / 0.15));
    for (let k = 0; k < n; k++) kit.box(parent, tone(k % 2 ? 0xc9c2b7 : STONE), [x, (k + 0.5) * h / n, z + d / 2 + (n - k) * 0.28 - 0.14], [Math.min(w * 0.4, 3.2), h / n, 0.28]);
  }
}

/**
 * A hall seen from outside: a platform, columns, lattice doors between them, a tiled roof. Its front
 * faces +z. `open` swings the central doors.
 */
export function hall(kit: Kit, parent: THREE.Object3D, { w = 10, d = 6, h = 3.4, bays = 5, x = 0, z = 0, base = 0.45, shade = TILE, doors = true, plaque }: { w?: number; d?: number; h?: number; bays?: number; x?: number; z?: number; base?: number; shade?: number; doors?: boolean; plaque?: boolean } = {}) {
  const g = kit.group(parent, x, 0, z);
  platform(kit, g, w + 1, d + 1, base);
  const body = kit.group(g, 0, base, 0);
  // Walls behind the colonnade.
  kit.box(body, tone(PLASTER), [0, h / 2, -d / 2 + 0.3], [w, h, 0.2]);
  for (const side of [-1, 1]) kit.box(body, tone(PLASTER), [side * w / 2, h / 2, 0], [0.2, h, d - 0.6]);
  const bay = w / bays;
  for (let k = 0; k <= bays; k++) { column(kit, body, -w / 2 + k * bay, d / 2 - 0.5, h); column(kit, body, -w / 2 + k * bay, -d / 2 + 0.5, h); }
  kit.box(body, tone(DARK), [0, h - 0.1, d / 2 - 0.5], [w + 0.3, 0.26, 0.24]);
  kit.box(body, tone(0x6e675f), [0, h - 0.34, d / 2 - 0.5], [w, 0.14, 0.18]);
  const leaves: THREE.Group[] = [];
  if (doors) for (let k = 0; k < bays; k++) {
    const cx = -w / 2 + (k + 0.5) * bay;
    if (k === Math.floor(bays / 2)) {
      for (const side of [-1, 1]) {
        const pivot = kit.group(body, cx + side * bay / 2 * 0.92, 0, d / 2 - 0.9);
        lattice(kit, pivot, bay * 0.46, h - 0.6, 'grid', true, -side * bay * 0.23, (h - 0.6) / 2, 0);
        leaves.push(pivot);
      }
    } else lattice(kit, body, bay * 0.92, h - 0.6, k % 2 ? 'diamond' : 'grid', true, cx, (h - 0.6) / 2, d / 2 - 0.9);
  }
  roof(kit, body, w + 2.4, d + 2.2, { y: h, rise: Math.min(2.2, d * 0.28 + 0.5), shade });
  if (plaque) {
    kit.box(body, tone(DARK), [0, h + 0.05, d / 2 + 0.2], [w * 0.22, 0.6, 0.08]);
  }
  return { group: g, body, leaves, open: (u: number) => leaves.forEach((l, i) => { l.rotation.y = (i ? -1 : 1) * u * 1.3; }) };
}

/**
 * An interior, open toward +z (where the camera stands): floor, back wall, side walls, columns,
 * beams overhead. The back wall can hold a moon window, lattice windows or shelves.
 */
export function room(kit: Kit, parent: THREE.Object3D, { w = 9, d = 7, h = 3.6, x = 0, z = 0, back = 'lattice', sides = true, floorKind = 'bricks', wall = PLASTER, beams = true }: { w?: number; d?: number; h?: number; x?: number; z?: number; back?: 'lattice' | 'moon' | 'plain' | 'screen' | 'doors'; sides?: boolean; floorKind?: 'bricks' | 'boards' | 'plain'; wall?: number; beams?: boolean } = {}) {
  const g = kit.group(parent, x, 0, z);
  floor(kit, g, w + 6, d + 8, { kind: floorKind, z: 2 });
  const backZ = -d / 2;
  if (back === 'moon') {
    const shape = new THREE.Shape([new THREE.Vector2(-w / 2, 0), new THREE.Vector2(w / 2, 0), new THREE.Vector2(w / 2, h), new THREE.Vector2(-w / 2, h)]);
    const hole = new THREE.Path(); hole.absarc(-w * 0.18, h * 0.52, h * 0.3, 0, Math.PI * 2, true); shape.holes.push(hole);
    kit.mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.25, bevelEnabled: false, curveSegments: 48 }), tone(wall), g, 0, 0, backZ - 0.25);
    kit.mesh(new THREE.TorusGeometry(h * 0.3, 0.05, 8, 48), tone(DARK), g, -w * 0.18, h * 0.52, backZ + 0.01);
    lattice(kit, g, h * 0.6, h * 0.6, 'ice', false, -w * 0.18, h * 0.52, backZ - 0.12);
  } else {
    kit.box(g, tone(wall), [0, h / 2, backZ - 0.1], [w, h, 0.2]);
    if (back === 'lattice') for (const cx of [-w * 0.3, w * 0.3]) lattice(kit, g, w * 0.22, h * 0.45, 'diamond', true, cx, h * 0.55, backZ + 0.02);
    if (back === 'doors') for (let k = -1; k <= 1; k++) lattice(kit, g, w * 0.18, h * 0.8, 'grid', true, k * w * 0.22, h * 0.42, backZ + 0.02);
  }
  if (sides) for (const side of [-1, 1]) {
    kit.box(g, tone(wall), [side * w / 2, h / 2, 0], [0.2, h, d]);
    lattice(kit, g, d * 0.3, h * 0.4, 'grid', true, side * (w / 2 - 0.12), h * 0.55, -d * 0.1).rotation.y = Math.PI / 2;
  }
  for (const [cx, cz] of [[-w / 2 + 0.3, backZ + 0.3], [w / 2 - 0.3, backZ + 0.3], [-w / 2 + 0.3, d / 2], [w / 2 - 0.3, d / 2]]) column(kit, g, cx, cz, h, 0.13);
  if (beams) {
    for (const bz of [backZ + 0.3, 0, d / 2]) kit.box(g, tone(WOOD), [0, h - 0.1, bz], [w, 0.22, 0.2]);
    for (let k = -2; k <= 2; k++) kit.box(g, tone(DARK), [k * w / 5, h + 0.02, 0], [0.1, 0.1, d]);
    kit.box(g, tone(0x6e675f), [0, h + 0.1, 0], [w, 0.05, d]);
  }
  return g;
}

/** A whitewashed wall with a tiled coping, from (x0, z0) to (x1, z1). */
export function wall(kit: Kit, parent: THREE.Object3D, x0: number, z0: number, x1: number, z1: number, h = 2.6, shade = PLASTER) {
  const len = Math.hypot(x1 - x0, z1 - z0), a = Math.atan2(z1 - z0, x1 - x0);
  const g = kit.group(parent, (x0 + x1) / 2, 0, (z0 + z1) / 2);
  g.rotation.y = -a;
  kit.box(g, tone(shade), [0, h / 2, 0], [len, h, 0.36]);
  kit.box(g, tone(0x8c857c), [0, 0.2, 0], [len + 0.02, 0.4, 0.4]);
  const cap = kit.mesh(new THREE.CylinderGeometry(0.34, 0.34, len + 0.3, 3, 1), tone(TILE), g, 0, h + 0.1, 0);
  cap.rotation.z = Math.PI / 2; cap.rotation.x = Math.PI / 2; cap.scale.set(1, 1, 0.5);
  kit.box(g, tone(DARK), [0, h + 0.2, 0], [len + 0.3, 0.1, 0.12]);
  return g;
}

/** A courtyard gate (门楼): a roofed doorway with two leaves that open (`open(0..1)`). */
export function gate(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, w = 3.2, h = 3.2, wallSpan = 16, knockers = true }: { x?: number; z?: number; w?: number; h?: number; wallSpan?: number; knockers?: boolean } = {}) {
  const g = kit.group(parent, x, 0, z);
  if (wallSpan > 0) { wall(kit, g, -wallSpan / 2, 0, -w / 2 - 0.3, 0, h - 0.6); wall(kit, g, w / 2 + 0.3, 0, wallSpan / 2, 0, h - 0.6); }
  for (const side of [-1, 1]) kit.box(g, tone(DARK), [side * (w / 2 + 0.15), h / 2, 0], [0.3, h, 0.5]);
  kit.box(g, tone(DARK), [0, h + 0.1, 0], [w + 0.6, 0.3, 0.5]);
  platform(kit, g, w + 1.4, 1.6, 0.3, { steps: true });
  roof(kit, g, w + 2.4, 2.6, { y: h + 0.25, rise: 0.8 });
  const leaves = [-1, 1].map(side => {
    const pivot = kit.group(g, side * w / 2, 0.3, 0);
    kit.box(pivot, tone(0x4a443e), [-side * w / 4, (h - 0.3) / 2, 0], [w / 2 - 0.04, h - 0.3, 0.1]);
    if (knockers) kit.mesh(new THREE.TorusGeometry(0.07, 0.015, 6, 16), tone(0x8c857c), pivot, -side * (w / 2 - 0.35), (h - 0.3) * 0.5, 0.07);
    for (let k = 0; k < 4; k++) for (let j = 0; j < 3; j++) kit.mesh(new THREE.SphereGeometry(0.025, 6, 5), tone(0x8c857c), pivot, -side * (0.25 + j * 0.35), 0.5 + k * 0.6, 0.06);
    return pivot;
  });
  // Stone drums flanking the doorway.
  for (const side of [-1, 1]) kit.mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.22, 16), tone(STONE), g, side * (w / 2 + 0.55), 0.62, 0.5).rotation.x = Math.PI / 2;
  return { group: g, open: (u: number) => leaves.forEach((l, i) => { l.rotation.y = (i ? 1 : -1) * u * 1.4; }) };
}

/** The hanging-flower gate (垂花门) of an inner courtyard: carved pendants under a small roof. */
export function flowerGate(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, w = 3.4, h = 3 }: { x?: number; z?: number; w?: number; h?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  platform(kit, g, w + 1.2, 2.2, 0.35);
  const body = kit.group(g, 0, 0.35, 0);
  for (const side of [-1, 1]) column(kit, body, side * w / 2, -0.5, h, 0.12);
  kit.box(body, tone(DARK), [0, h, 0.2], [w + 0.4, 0.22, 1.6]);
  // The pendants: carved posts ending in lotus buds, hanging free at the front.
  for (const side of [-1, 1]) {
    kit.box(body, tone(DARK), [side * w / 2, h - 0.35, 0.8], [0.14, 0.6, 0.14]);
    kit.mesh(new THREE.SphereGeometry(0.12, 10, 8), tone(0x6e675f), body, side * w / 2, h - 0.72, 0.8).scale.y = 1.4;
    kit.mesh(new THREE.SphereGeometry(0.05, 8, 6), flat(VERMILION), body, side * w / 2, h - 0.9, 0.8);
  }
  lattice(kit, body, w - 0.2, 0.5, 'rings', false, 0, h - 0.4, 0.82);
  roof(kit, body, w + 1.8, 2.6, { y: h + 0.1, rise: 0.9 });
  const leaves = [-1, 1].map(side => {
    const pivot = kit.group(body, side * w / 2 * 0.95, 0, -0.5);
    lattice(kit, pivot, w / 2 * 0.9, h - 0.2, 'grid', true, -side * w / 4 * 0.95, (h - 0.2) / 2, 0);
    return pivot;
  });
  wall(kit, g, -10, -0.6, -w / 2 - 0.6, -0.6, 2.6);
  wall(kit, g, w / 2 + 0.6, -0.6, 10, -0.6, 2.6);
  return { group: g, open: (u: number) => leaves.forEach((l, i) => { l.rotation.y = (i ? -1 : 1) * u * 1.4; }) };
}

/** A moon gate in a garden wall. */
export function moonGate(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, span = 14, h = 3.4, r = 1.3 }: { x?: number; z?: number; span?: number; h?: number; r?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  const shape = new THREE.Shape([new THREE.Vector2(-span / 2, 0), new THREE.Vector2(span / 2, 0), new THREE.Vector2(span / 2, h), new THREE.Vector2(-span / 2, h)]);
  const hole = new THREE.Path(); hole.absarc(0, r + 0.05, r, 0, Math.PI * 2, true); shape.holes.push(hole);
  kit.mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.4, bevelEnabled: false, curveSegments: 48 }).translate(0, 0, -0.2), tone(PLASTER), g);
  for (const zz of [0.21, -0.21]) kit.mesh(new THREE.TorusGeometry(r + 0.03, 0.05, 8, 48), tone(0x6e675f), g, 0, r + 0.05, zz);
  const cap = kit.mesh(new THREE.CylinderGeometry(0.36, 0.36, span + 0.3, 3), tone(TILE), g, 0, h + 0.1, 0);
  cap.rotation.z = Math.PI / 2; cap.rotation.x = Math.PI / 2; cap.scale.set(1, 1, 0.5);
  return g;
}

/** A hexagonal (or square) pavilion with a pointed roof. */
export function pavilion(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, r = 2, h = 2.8, sides = 6, base = 0.5 }: { x?: number; z?: number; r?: number; h?: number; sides?: number; base?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  kit.mesh(new THREE.CylinderGeometry(r + 0.4, r + 0.5, base, sides), tone(STONE), g, 0, base / 2, 0);
  for (let k = 0; k < sides; k++) {
    const a = k / sides * Math.PI * 2;
    column(kit, kit.group(g, 0, base, 0), Math.cos(a) * r, Math.sin(a) * r, h, 0.1);
    // Benches (美人靠) between columns, except at the front.
    if (k !== Math.round(sides / 4)) {
      const a2 = (k + 0.5) / sides * Math.PI * 2, len = 2 * r * Math.sin(Math.PI / sides);
      const bench = kit.box(g, tone(WOOD), [Math.cos(a2) * r * 0.92, base + 0.45, Math.sin(a2) * r * 0.92], [len * 0.9, 0.08, 0.3]);
      bench.rotation.y = -a2 + Math.PI / 2;
    }
  }
  const top = kit.mesh(new THREE.ConeGeometry(r * 1.55, r * 0.95, sides, 1, true), tone(TILE, true), g, 0, base + h + r * 0.45, 0);
  top.rotation.y = Math.PI / sides;
  kit.mesh(new THREE.SphereGeometry(0.16, 10, 8), tone(DARK), g, 0, base + h + r * 0.95, 0);
  kit.mesh(new THREE.CylinderGeometry(r * 1.05, r * 1.05, 0.2, sides), tone(DARK), g, 0, base + h, 0).rotation.y = Math.PI / sides;
  return g;
}

/** A humped stone bridge over water, along x. */
export function bridge(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, span = 8, rise = 1.6, w = 2.2 }: { x?: number; z?: number; span?: number; rise?: number; w?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  const shape = new THREE.Shape();
  shape.moveTo(-span / 2 - 1, -0.5); shape.lineTo(-span / 2 - 1, 0.1);
  for (let k = 0; k <= 20; k++) { const u = k / 20 * 2 - 1; shape.lineTo(u * span / 2, 0.1 + rise * (1 - u * u)); }
  shape.lineTo(span / 2 + 1, 0.1); shape.lineTo(span / 2 + 1, -0.5);
  const hole = new THREE.Path(); hole.absarc(0, -0.5, span * 0.3, 0, Math.PI, false); shape.holes.push(hole);
  kit.mesh(new THREE.ExtrudeGeometry(shape, { depth: w, bevelEnabled: false, curveSegments: 24 }).translate(0, 0, -w / 2), tone(STONE), g);
  // Balustrades.
  for (const side of [-1, 1]) for (let k = 0; k <= 10; k++) {
    const u = k / 10 * 2 - 1;
    kit.box(g, tone(0x8c857c), [u * span / 2, 0.1 + rise * (1 - u * u) + 0.35, side * (w / 2 - 0.08)], [0.1, 0.7, 0.1]);
  }
  return g;
}

/** A stone memorial arch (牌坊) of three bays. */
export function paifang(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, w = 9, h = 6 }: { x?: number; z?: number; w?: number; h?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  const posts = [-w / 2, -w / 6, w / 6, w / 2];
  for (const px of posts) {
    kit.box(g, tone(0x8c857c), [px, h * 0.42, 0], [0.45, h * 0.84, 0.45]);
    kit.box(g, tone(STONE), [px, 0.5, 0], [0.9, 1, 0.9]);
    // Clasping drum stones.
    for (const side of [-1, 1]) kit.box(g, tone(STONE), [px, 0.9, side * 0.55], [0.3, 1.8, 0.6]);
  }
  kit.box(g, tone(0x9c958b), [0, h * 0.62, 0], [w + 0.6, 0.4, 0.4]);
  kit.box(g, tone(0x9c958b), [0, h * 0.84, 0], [w / 3 + 0.6, 0.4, 0.4]);
  roof(kit, g, w / 3 + 1.8, 1.6, { y: h * 0.86, rise: 0.7, shade: 0x6e675f });
  for (const side of [-1, 1]) roof(kit, g, w / 3 + 0.9, 1.4, { y: h * 0.64, rise: 0.5, shade: 0x6e675f, x: side * w / 3 });
  // The imperial tablet between the tiers.
  kit.box(g, tone(DARK), [0, h * 0.74, 0.1], [1.6, 0.8, 0.12]);
  kit.box(g, tone(0xe6e0d6), [0, h * 0.74, 0.17], [1.4, 0.62, 0.02]);
  return g;
}

/** A city wall with a gate tower. */
export function cityGate(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, w = 60, h = 10 }: { x?: number; z?: number; w?: number; h?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  const shape = new THREE.Shape([new THREE.Vector2(-w / 2, 0), new THREE.Vector2(w / 2, 0), new THREE.Vector2(w / 2 - 1, h), new THREE.Vector2(-w / 2 + 1, h)]);
  const arch = new THREE.Path(); arch.moveTo(-2.2, 0); arch.lineTo(-2.2, 3.6); arch.absarc(0, 3.6, 2.2, Math.PI, 0, true); arch.lineTo(2.2, 0); shape.holes.push(arch);
  kit.mesh(new THREE.ExtrudeGeometry(shape, { depth: 8, bevelEnabled: false, curveSegments: 20 }).translate(0, 0, -4), tone(0x8c857c), g);
  for (let k = -w / 2 + 1; k < w / 2 - 1; k += 1.4) kit.box(g, tone(0x6e675f), [k, h + 0.4, 3.6], [0.8, 0.8, 0.6]);
  const tower = kit.group(g, 0, h, 0);
  kit.box(tower, tone(PLASTER), [0, 2.2, 0], [16, 4.4, 6]);
  for (let k = -3; k <= 3; k++) kit.box(tower, tone(DARK), [k * 2.2, 2.4, 3.05], [0.5, 0.7, 0.1]);
  roof(kit, tower, 20, 9, { y: 4.4, rise: 2.4 });
  kit.box(tower, tone(PLASTER), [0, 7.4, 0], [12, 2.4, 5]);
  roof(kit, tower, 16, 8, { y: 8.5, rise: 2.6 });
  return g;
}

/** A row of shop fronts along x, facing +z, with banners stirring. Returns an update for the banners. */
export function shopRow(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, count = 6, rand, facing = 1 }: { x?: number; z?: number; count?: number; rand: () => number; facing?: 1 | -1 }) {
  const g = kit.group(parent, x, 0, z);
  g.rotation.y = facing === 1 ? 0 : Math.PI;
  const banners: THREE.Object3D[] = [];
  let cx = -count * 2.4;
  for (let k = 0; k < count; k++) {
    const w = 4 + rand() * 1.4, h = 3 + rand() * 1.2;
    const shop = kit.group(g, cx + w / 2, 0, 0);
    kit.box(shop, tone(0xb9b2a8), [0, h / 2, -1.5], [w, h, 3]);
    kit.box(shop, tone(DARK), [0, h - 0.3, 0.05], [w, 0.5, 0.1]);
    lattice(kit, shop, w * 0.8, h * 0.45, k % 2 ? 'grid' : 'diamond', true, 0, h * 0.4, 0.02);
    roof(kit, shop, w + 0.8, 3.8, { y: h, rise: 0.8, z: -1.5 });
    // A counter and hanging goods.
    kit.box(shop, tone(WOOD), [0, 0.5, 0.5], [w * 0.7, 1, 0.5]);
    const pole = kit.group(shop, w / 2 - 0.2, h - 0.2, 0.9);
    kit.box(pole, tone(DARK), [0, 0.3, 0], [0.06, 1.2, 0.06]);
    const cloth = kit.group(pole, 0, -0.1, 0);
    kit.box(cloth, k % 3 === 0 ? flat(VERMILION) : tone(0x4a443e), [0, -0.8, 0], [0.45, 1.6, 0.02]);
    banners.push(cloth);
    cx += w + 0.3;
  }
  return { group: g, update: (t: number) => banners.forEach((b, i) => { b.rotation.x = Math.sin(t * 2 + i) * 0.12; b.rotation.z = Math.sin(t * 1.3 + i * 2) * 0.06; }) };
}

/** A teahouse theatre stage (戏台): raised, four columns, a roof, a back screen with two doors, a rail. */
export function theatreStage(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, w = 8, d = 7, h = 1.2, tall = 4 }: { x?: number; z?: number; w?: number; d?: number; h?: number; tall?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  kit.box(g, tone(0x4a443e), [0, h / 2, 0], [w, h, d]);
  const deck = kit.group(g, 0, h, 0);
  floor(kit, deck, w, d, { kind: 'boards', shade: 0xcfc8bc, y: 0.01 });
  for (const [cx, cz] of [[-w / 2 + 0.3, d / 2 - 0.3], [w / 2 - 0.3, d / 2 - 0.3], [-w / 2 + 0.3, -d / 2 + 0.3], [w / 2 - 0.3, -d / 2 + 0.3]]) column(kit, deck, cx, cz, tall, 0.16, DARK);
  kit.box(deck, tone(DARK), [0, tall, d / 2 - 0.3], [w + 0.4, 0.4, 0.3]);
  // A carved valance with red trim over the front.
  lattice(kit, deck, w - 0.8, 0.45, 'rings', false, 0, tall - 0.35, d / 2 - 0.28);
  kit.box(deck, flat(VERMILION), [0, tall - 0.62, d / 2 - 0.28], [w - 0.8, 0.06, 0.04]);
  // The back screen with the entrance and exit doors (出将入相), curtained.
  kit.box(deck, tone(0x6e675f), [0, tall / 2, -d / 2 + 0.25], [w - 0.6, tall, 0.12]);
  kit.box(deck, tone(0xe6e0d6), [0, tall * 0.62, -d / 2 + 0.33], [w * 0.5, tall * 0.5, 0.02]);
  for (const side of [-1, 1]) {
    kit.box(deck, tone(DARK), [side * w * 0.33, 1.1, -d / 2 + 0.33], [1.0, 2.2, 0.04]);
    kit.box(deck, flat(VERMILION), [side * w * 0.33, 2.3, -d / 2 + 0.34], [1.1, 0.12, 0.04]);
  }
  // A low rail at the front corners.
  for (const side of [-1, 1]) kit.box(deck, tone(DARK), [side * (w / 2 - 0.9), 0.35, d / 2 - 0.1], [1.4, 0.06, 0.06]);
  roof(kit, deck, w + 2.4, d + 2, { y: tall + 0.2, rise: 1.6 });
  return { group: g, deck };
}

/** A crowd of seated or standing spectators, instanced: bodies and heads, seen mostly from behind. */
export function crowd(kit: Kit, parent: THREE.Object3D, spots: [number, number, number?][], rand: () => number, { standing = false, facing = Math.PI } = {}) {
  const n = spots.length;
  const bodyG = new THREE.CylinderGeometry(0.2, 0.28, standing ? 1.3 : 0.9, 10);
  const headG = new THREE.SphereGeometry(0.11, 12, 10);
  const capG = new THREE.SphereGeometry(0.115, 12, 6, 0, Math.PI * 2, 0, Math.PI * 0.5);
  const bodies = new THREE.InstancedMesh(bodyG, tone(0xffffff), n);
  const heads = new THREE.InstancedMesh(headG, tone(0xefe8dc), n);
  const caps = new THREE.InstancedMesh(capG, tone(0x1c1816), n);
  const m = new THREE.Matrix4(), c = new THREE.Color();
  const baseY = standing ? 0.65 : 0.45;
  const seeds = spots.map(() => rand());
  const place = (t: number) => {
    spots.forEach(([x, z, y = 0], i) => {
      const s = seeds[i];
      const sway = Math.sin(t * (1 + s) + s * 20) * 0.04;
      m.makeRotationY(facing + sway).setPosition(x, y + baseY, z);
      bodies.setMatrixAt(i, m);
      m.makeRotationY(facing + Math.sin(t * 0.6 + s * 9) * 0.5 * Math.max(0, Math.sin(t * 0.3 + s * 5))).setPosition(x + sway * 0.3, y + baseY * 2 + 0.12, z);
      heads.setMatrixAt(i, m);
      caps.setMatrixAt(i, m);
    });
    bodies.instanceMatrix.needsUpdate = heads.instanceMatrix.needsUpdate = caps.instanceMatrix.needsUpdate = true;
  };
  spots.forEach((_, i) => bodies.setColorAt(i, c.setHex([0x4a443e, 0x6e675f, 0x8c857c, 0x3f3a35, 0xa39b91][Math.floor(seeds[i] * 5)])));
  place(0);
  parent.add(bodies, heads, caps);
  return { update: place };
}

/** A wall-hanging plaque (匾) with a dark frame and pale field; put calligraphy in front of it. */
export function plaque(kit: Kit, parent: THREE.Object3D, w: number, h: number, x = 0, y = 0, z = 0) {
  const g = kit.group(parent, x, y, z);
  kit.box(g, tone(DARK), [0, 0, 0], [w, h, 0.1]);
  kit.box(g, tone(0xe6e0d6), [0, 0, 0.055], [w * 0.88, h * 0.76, 0.01]);
  return g;
}

/** A soft shadow for a building footprint. */
export function footprint(kit: Kit, parent: THREE.Object3D, w: number, d: number, x = 0, z = 0) {
  const s = contactShadow(kit, parent, w * 1.3, d * 1.5, 0.5);
  s.position.x = x; s.position.z = z;
  return s;
}
