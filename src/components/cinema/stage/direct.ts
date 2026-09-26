import * as THREE from 'three';
import { clamp01, ease, type Env, type Kit, type V3 } from '../cinemaKit';
import { tone } from './figure';
import { DARK } from './architecture';
import { writing } from './props';

/*
 * Direction: camera moves, light, and the plumbing of sets. Every film builds its sets far apart
 * along x and shows one at a time; the camera flies along eased splines, pulls back on tall screens,
 * and breathes a little like a hand-held camera so nothing is ever quite still.
 */

/** Builds `n` empty sets 600 m apart along x; `show(i)` shows only set i. */
export function sets(kit: Kit, n: number) {
  const groups = Array.from({ length: n }, (_, i) => kit.group(kit.scene, i * 600));
  return { groups, show: (i: number) => groups.forEach((g, k) => { g.visible = k === i; }) };
}

/** A key light and a softer fill, parented to a set so they light only while it is shown. */
export function lights(kit: Kit, parent: THREE.Object3D, { key = [6, 10, 8] as V3, intensity = 1.1, fill = 0.35, fillFrom = [-8, 4, 6] as V3 } = {}) {
  // Brighter than it sounds: the ink pass reads light as bare paper, and sets should stay airy.
  const k = new THREE.DirectionalLight(0xffffff, intensity * 1.45);
  k.position.set(...key); parent.add(k); parent.add(k.target);
  const f = new THREE.DirectionalLight(0xffffff, fill * 1.7);
  f.position.set(...fillFrom); parent.add(f); parent.add(f.target);
  return { key: k, fill: f };
}

export type Key = [number, V3, V3];

/**
 * Time along a move of length T: eases in over the first second or so and out over the last, and
 * runs at an even pace between, so each key is reached close to its own time.
 */
function warp(t: number, T: number) {
  const r = Math.min(1.5, T / 3), D = T - r, x = Math.min(T, Math.max(0, t));
  const p = x < r ? x * x / (2 * r) : x < T - r ? x - r / 2 : D - (T - x) * (T - x) / (2 * r);
  return p / D * T;
}

/**
 * A camera move through timed keys [seconds, position, look-at], in the set's local coordinates
 * (the set's own coordinates). Eased at both ends; on tall screens the camera pulls back from what it
 * looks at by `pull` (a fraction of the distance). `breathe` adds a slow hand-held drift.
 */
export function move(kit: Kit, set: THREE.Object3D, keys: Key[], { pull = 0.55, breathe = 0.04 } = {}) {
  const o = set.position.clone();
  const pos = new THREE.CatmullRomCurve3(keys.map(([, p]) => new THREE.Vector3(...p).add(o)), false, 'centripetal');
  const look = new THREE.CatmullRomCurve3(keys.map(([, , l]) => new THREE.Vector3(...l).add(o)), false, 'centripetal');
  if (keys.length === 1) { pos.points.push(pos.points[0].clone()); look.points.push(look.points[0].clone()); }
  const p = new THREE.Vector3(), l = new THREE.Vector3();
  const t0 = keys[0][0], t1 = keys[keys.length - 1][0];
  return (seconds: number) => {
    const time = t1 > t0 ? t0 + warp(seconds - t0, t1 - t0) : t0;
    let i = 0;
    while (i < keys.length - 2 && time > keys[i + 1][0]) i++;
    const span = keys.length > 1 ? Math.max(1e-3, keys[i + 1][0] - keys[i][0]) : 1;
    const u = keys.length > 1 ? (i + clamp01((time - keys[i][0]) / span)) / (keys.length - 1) : 0;
    pos.getPoint(u, p); look.getPoint(u, l);
    if (breathe) {
      p.x += Math.sin(seconds * 0.37) * breathe + Math.sin(seconds * 1.13) * breathe * 0.3;
      p.y += Math.sin(seconds * 0.51 + 1) * breathe * 0.7;
      l.x += Math.sin(seconds * 0.29 + 2) * breathe * 0.5;
    }
    if (kit.portrait() && pull) p.addScaledVector(p.clone().sub(l), pull);
    kit.camera.position.copy(p);
    kit.camera.lookAt(l);
  };
}

/** Circles the camera around a centre from angle a0 to a1 (radians, 0 = +z) between t0 and t1. */
export function orbit(kit: Kit, set: THREE.Object3D, center: V3, { r = 8, y = 2, a0 = -0.4, a1 = 0.4, t0 = 0, t1 = 10, lookY = center[1], rise = 0, pull = 0.55, zoom = 0 }: { r?: number; y?: number; a0?: number; a1?: number; t0?: number; t1?: number; lookY?: number; rise?: number; pull?: number; zoom?: number } = {}) {
  return (seconds: number) => {
    const u = ease((seconds - t0) / Math.max(0.01, t1 - t0));
    const a = a0 + (a1 - a0) * u, rr = (r - zoom * u) * (kit.portrait() ? 1 + pull : 1);
    const o = set.position;
    kit.camera.position.set(o.x + center[0] + Math.sin(a) * rr, o.y + y + rise * u + Math.sin(seconds * 0.5) * 0.03, o.z + center[2] + Math.cos(a) * rr);
    kit.camera.lookAt(o.x + center[0], o.y + lookY, o.z + center[2]);
  };
}

/** Linear interpolation of tuples. */
export const lerp3 = (a: V3, b: V3, u: number): V3 => [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u];
/** 0..1 over [t0, t1], eased. */
export const span = (t: number, t0: number, t1: number) => ease((t - t0) / Math.max(1e-3, t1 - t0));
/** Rises over [t0, t0+fadeIn], holds, falls over [t1-fadeOut, t1]. */
export const window01 = (t: number, t0: number, t1: number, f = 0.5) => Math.min(span(t, t0, t0 + f), 1 - span(t, t1 - f, t1));

/**
 * A hanging scroll of verse or sayings: silk mount, paper, rods, and columns of writing that appear
 * one after another, right to left, as `set(progress)` goes 0 → 1.
 */
export function scroll(kit: Kit, parent: THREE.Object3D, lines: string[], { size = 0.3, gap = 1.35, x = 0, y = 0, z = 0, mount = 0x8c857c }: { size?: number; gap?: number; x?: number; y?: number; z?: number; mount?: number } = {}) {
  const g = kit.group(parent, x, y, z);
  const rows = Math.max(...lines.map(l => [...l].length));
  const w = ((lines.length - 1) * gap + 1) * size + size * 1.6, h = rows * size + size * 1.6;
  kit.mesh(new THREE.PlaneGeometry(w + size * 0.8, h + size * 2.2), tone(mount), g, 0, 0, -0.01);
  kit.mesh(new THREE.PlaneGeometry(w, h), tone(0xf4f0e8), g, 0, 0, 0);
  for (const [yy, r] of [[-(h / 2 + size * 1.15), 0.05], [h / 2 + size * 1.1, 0.03]] as const) kit.mesh(new THREE.CylinderGeometry(r, r, w + size * 1.2, 10), tone(DARK), g, 0, yy, 0.02).rotation.z = Math.PI / 2;
  const cols = lines.map((line, i) => {
    const wr = writing(kit, g, line, { size, margin: 0, paper: null });
    wr.mesh.position.set(((lines.length - 1) / 2 - i) * gap * size, (rows - [...line].length) * size / 2, 0.005);
    wr.set(0);
    return wr;
  });
  return { group: g, width: w, height: h, set: (progress: number) => cols.forEach((c, i) => c.set(clamp01(progress * cols.length - i))) };
}

/** Everything in a set gently swaying, for water and wind. */
export function sway(obj: THREE.Object3D, t: number, amount = 0.02, speed = 0.8, seed = 0) {
  obj.rotation.z = Math.sin(t * speed + seed) * amount;
  obj.rotation.x = Math.sin(t * speed * 0.8 + seed * 2) * amount * 0.5;
}

/** Blends two skies (colours, moon and mist), for light that changes within a shot. */
export function blendEnv(a: Env, b: Env, u: number): Env {
  const k = clamp01(u);
  const c = (x: number, y: number) => new THREE.Color(x).lerp(new THREE.Color(y), k).getHex();
  const n = (x: number, y: number) => x + (y - x) * k;
  return {
    top: c(a.top, b.top), horizon: c(a.horizon, b.horizon), glow: c(a.glow, b.glow),
    moon: [n(a.moon[0], b.moon[0]), n(a.moon[1], b.moon[1]), n(a.moon[2], b.moon[2])], moonSize: n(a.moonSize, b.moonSize), moonGain: n(a.moonGain, b.moonGain),
    bloom: 0, stars: 0, fog: c(a.fog, b.fog), density: n(a.density, b.density),
  };
}

/** A dusky sky for night and gloom, in ink: grey washes, thick mist. */
export const DUSK = (density = 0.05): Env => ({ top: 0x6e675f, horizon: 0x9c958b, glow: 0, moon: [0, -1, 0], moonSize: 0.01, moonGain: 0, bloom: 0, stars: 0, fog: 0x8c857c, density });

/** Places the camera at `pos` looking at `look` (set coordinates), pulling back on tall screens. */
export function aim(kit: Kit, set: THREE.Object3D, pos: V3, look: V3, pull = 0.55) {
  const p = new THREE.Vector3(...pos).add(set.position), l = new THREE.Vector3(...look).add(set.position);
  if (kit.portrait() && pull) p.addScaledVector(p.clone().sub(l), pull);
  kit.camera.position.copy(p);
  kit.camera.lookAt(l);
}
