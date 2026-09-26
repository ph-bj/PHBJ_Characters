import * as THREE from 'three';
import { petalGeometry, type Kit } from '../cinemaKit';
import { flat, tone, VERMILION } from './figure';

/*
 * Landscape in 3D for the ink cinemas: rolling ground, ranges of peaks that fade into mist, water
 * that ripples, and trees (willow, plum, pine, bamboo, bare winter trees), rocks and lotus.
 */

const noise2 = (x: number, z: number, seed: number) =>
  Math.sin(x * 0.13 + seed) * Math.cos(z * 0.11 + seed * 1.7) + 0.5 * Math.sin(x * 0.31 + z * 0.23 + seed * 3.1) + 0.25 * Math.sin(x * 0.71 - z * 0.53 + seed);

/** Rolling ground, w × d, gently displaced; `flatten` keeps a radius around the centre level. */
export function ground(kit: Kit, parent: THREE.Object3D, { w = 200, d = 200, height = 1.2, seed = 1, shade = 0xdcd6cc, flatten = 12, x = 0, z = 0 }: { w?: number; d?: number; height?: number; seed?: number; shade?: number; flatten?: number; x?: number; z?: number } = {}) {
  const g = new THREE.PlaneGeometry(w, d, 80, 80).rotateX(-Math.PI / 2);
  const p = g.getAttribute('position');
  for (let i = 0; i < p.count; i++) {
    const px = p.getX(i), pz = p.getZ(i);
    const r = Math.hypot(px, pz);
    const k = Math.min(1, Math.max(0, (r - flatten) / (flatten + 10)));
    p.setY(i, noise2(px, pz, seed) * height * k);
  }
  g.computeVertexNormals();
  return kit.mesh(g, tone(shade), parent, x, 0, z);
}

/**
 * A range of peaks in 3D (not a flat cut-out): lumpy cones side by side at distance `z`, spanning
 * `span`. Farther ranges should be paler; mist does the rest.
 */
export function range(kit: Kit, parent: THREE.Object3D, { z = -80, span = 300, height = 30, count = 9, shade = 0xb9b2a8, seed = 2, x = 0 }: { z?: number; span?: number; height?: number; count?: number; shade?: number; seed?: number; x?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  let s = seed;
  const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  for (let k = 0; k < count; k++) {
    const h = height * (0.5 + rnd() * 0.7), r = h * (0.7 + rnd() * 0.6);
    const geo = new THREE.ConeGeometry(r, h, 18, 8);
    const pos = geo.getAttribute('position');
    for (let i = 0; i < pos.count; i++) {
      const px = pos.getX(i), py = pos.getY(i), pz = pos.getZ(i);
      const a = Math.atan2(pz, px), u = (py + h / 2) / h;
      const bump = 1 + 0.18 * Math.sin(a * 5 + k) + 0.1 * Math.sin(a * 11 + k * 2) + 0.15 * Math.sin(u * 9 + a * 3);
      pos.setXYZ(i, px * bump, py + Math.sin(a * 3 + k) * h * 0.04 * u, pz * bump * 0.8);
    }
    geo.computeVertexNormals();
    const mesh = kit.mesh(geo, tone(shade), g, (k / Math.max(1, count - 1) - 0.5) * span + (rnd() - 0.5) * span / count, h / 2 - 1, (rnd() - 0.5) * 30);
    mesh.rotation.y = rnd() * 6;
  }
  return g;
}

const waterVertex = /* glsl */`
  varying vec2 vUv; varying vec3 vWorld;
  #include <fog_pars_vertex>
  void main() {
    vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz;
    vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }`;
const waterFragment = /* glsl */`
  uniform float uTime; uniform vec3 uColor, uLine; uniform float uScale;
  varying vec2 vUv; varying vec3 vWorld;
  #include <fog_pars_fragment>
  void main() {
    vec2 p = vWorld.xz * uScale;
    float w = sin(p.y * 3.0 + sin(p.x * 0.7 + uTime * 0.6) * 1.4 + uTime * 0.9);
    float line = smoothstep(0.93, 0.99, w) * (0.5 + 0.5 * sin(p.x * 0.35 + uTime * 0.3 + p.y));
    gl_FragColor = vec4(mix(uColor, uLine, line * 0.8), 1.0);
    #include <fog_fragment>
  }`;
/** Water with drifting ripple lines, w × d. */
export function water(kit: Kit, parent: THREE.Object3D, { w = 80, d = 60, x = 0, z = 0, y = 0.02, shade = 0xe8e3da, line = 0x6e675f, scale = 0.8 }: { w?: number; d?: number; x?: number; z?: number; y?: number; shade?: number; line?: number; scale?: number } = {}) {
  const material = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { uColor: { value: new THREE.Color(shade) }, uLine: { value: new THREE.Color(line) }, uScale: { value: scale } }]),
    vertexShader: waterVertex, fragmentShader: waterFragment, fog: true,
  });
  material.uniforms.uTime = kit.shared.uTime;
  return kit.mesh(new THREE.PlaneGeometry(w, d).rotateX(-Math.PI / 2), material, parent, x, y, z);
}

/** A mirrored copy of `source` under a water plane at height 0, for reflections. */
export function reflect(kit: Kit, parent: THREE.Object3D, source: THREE.Object3D, opacity = 0.35) {
  const copy = source.clone(true);
  copy.scale.y *= -1;
  copy.position.y = -source.position.y;
  copy.traverse(o => {
    const m = o as THREE.Mesh;
    if (m.material) {
      const mats = ([] as THREE.Material[]).concat(m.material).map(x => { const c = x.clone(); c.transparent = true; c.opacity = opacity; c.depthWrite = false; c.side = THREE.DoubleSide; return c; });
      m.material = mats.length === 1 ? mats[0] : mats;
    }
  });
  parent.add(copy);
  return copy;
}

type V = [number, number, number];
const vec = (p: V) => new THREE.Vector3(...p);

/** A branch as a tapering tube through points. */
export function branch(kit: Kit, parent: THREE.Object3D, points: V[], r0: number, r1 = r0 * 0.3, shade = 0x2f2a26) {
  const curve = new THREE.CatmullRomCurve3(points.map(vec));
  const tube = new THREE.TubeGeometry(curve, Math.max(8, points.length * 6), 1, 7, false);
  // Taper along the length.
  const pos = tube.getAttribute('position');
  const segs = Math.max(8, points.length * 6), ring = 8;
  for (let i = 0; i <= segs; i++) {
    const c = curve.getPointAt(i / segs), r = r0 + (r1 - r0) * (i / segs);
    for (let j = 0; j < ring; j++) {
      const k = i * ring + j;
      if (k >= pos.count) continue;
      const v = new THREE.Vector3(pos.getX(k), pos.getY(k), pos.getZ(k)).sub(c).multiplyScalar(r).add(c);
      pos.setXYZ(k, v.x, v.y, v.z);
    }
  }
  tube.computeVertexNormals();
  kit.mesh(tube, tone(shade), parent);
  return curve;
}

/** A bare winter tree: a trunk and forking branches. */
export function bareTree(kit: Kit, parent: THREE.Object3D, x: number, z: number, h = 6, rand: () => number = Math.random, shade = 0x2f2a26) {
  const g = kit.group(parent, x, 0, z);
  const grow = (from: THREE.Vector3, dir: THREE.Vector3, len: number, r: number, depth: number) => {
    const mid = from.clone().addScaledVector(dir, len * 0.5).add(new THREE.Vector3((rand() - 0.5) * len * 0.3, 0, (rand() - 0.5) * len * 0.3));
    const end = from.clone().addScaledVector(dir, len);
    branch(kit, g, [from.toArray() as V, mid.toArray() as V, end.toArray() as V], r, r * 0.6, shade);
    if (depth <= 0) return;
    for (let k = 0; k < 2 + (rand() < 0.4 ? 1 : 0); k++) {
      const d = dir.clone().add(new THREE.Vector3((rand() - 0.5) * 1.4, 0.3 + rand() * 0.3, (rand() - 0.5) * 1.4)).normalize();
      grow(end, d, len * (0.55 + rand() * 0.2), r * 0.6, depth - 1);
    }
  };
  grow(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0), h * 0.45, h * 0.035, 3);
  return g;
}

/** A plum tree: a gnarled trunk, angular branches, blossoms in vermilion (or white). */
export function plumTree(kit: Kit, parent: THREE.Object3D, x: number, z: number, { h = 4, rand = Math.random, blossoms = 120, red = true }: { h?: number; rand?: () => number; blossoms?: number; red?: boolean } = {}) {
  const g = kit.group(parent, x, 0, z);
  const tips: THREE.Vector3[] = [];
  const grow = (from: THREE.Vector3, dir: THREE.Vector3, len: number, r: number, depth: number) => {
    const bend = new THREE.Vector3((rand() - 0.5) * 0.8, (rand() - 0.3) * 0.4, (rand() - 0.5) * 0.8);
    const mid = from.clone().addScaledVector(dir.clone().add(bend).normalize(), len * 0.5);
    const end = mid.clone().addScaledVector(dir, len * 0.5);
    branch(kit, g, [from.toArray() as V, mid.toArray() as V, end.toArray() as V], r, r * 0.55);
    tips.push(mid, end);
    if (depth <= 0) return;
    for (let k = 0; k < 2; k++) {
      const d = new THREE.Vector3((rand() - 0.5) * 2, 0.2 + rand() * 0.6, (rand() - 0.5) * 2).normalize();
      grow(end, d, len * 0.65, r * 0.55, depth - 1);
    }
  };
  grow(new THREE.Vector3(), new THREE.Vector3(0.2, 1, 0).normalize(), h * 0.5, h * 0.04, 3);
  const geo = new THREE.SphereGeometry(0.05, 6, 5);
  const inst = new THREE.InstancedMesh(geo, red ? flat(VERMILION) : tone(0xf4f0e8), blossoms);
  const m = new THREE.Matrix4();
  for (let i = 0; i < blossoms; i++) {
    const t = tips[Math.floor(rand() * tips.length)];
    m.makeScale(1 + rand(), 1 + rand(), 1 + rand()).setPosition(t.x + (rand() - 0.5) * 0.35, t.y + (rand() - 0.5) * 0.3, t.z + (rand() - 0.5) * 0.35);
    inst.setMatrixAt(i, m);
  }
  g.add(inst);
  return g;
}

/** A pine: a leaning trunk carrying flat, cloud-like pads of needles. */
export function pine(kit: Kit, parent: THREE.Object3D, x: number, z: number, { h = 7, rand = Math.random }: { h?: number; rand?: () => number } = {}) {
  const g = kit.group(parent, x, 0, z);
  const lean = (rand() - 0.5) * 1.5;
  const trunk = branch(kit, g, [[0, 0, 0], [lean * 0.4, h * 0.35, 0.2], [lean, h * 0.7, -0.1], [lean * 0.8, h, 0.2]], h * 0.045, h * 0.02);
  for (let k = 0; k < 6; k++) {
    const p = trunk.getPoint(0.45 + k * 0.1);
    const side = k % 2 ? 1 : -1, len = h * (0.25 + rand() * 0.15);
    const end: V = [p.x + side * len, p.y + rand() * 0.4, p.z + (rand() - 0.5) * 1];
    branch(kit, g, [p.toArray() as V, [p.x + side * len * 0.5, p.y - 0.2, p.z], end], h * 0.015, h * 0.008);
    const pad = kit.mesh(new THREE.SphereGeometry(1, 12, 8), tone(0x3f3a35), g, end[0], end[1] + 0.15, end[2]);
    pad.scale.set(len * 0.7, 0.35, len * 0.5);
  }
  const top = kit.mesh(new THREE.SphereGeometry(1, 12, 8), tone(0x3f3a35), g, lean * 0.8, h + 0.1, 0.2);
  top.scale.set(h * 0.18, 0.4, h * 0.14);
  return g;
}

/** A willow: a trunk and a curtain of drooping strands that sway (call update(t)). */
export function willow(kit: Kit, parent: THREE.Object3D, x: number, z: number, { h = 6, rand = Math.random, strands = 40 }: { h?: number; rand?: () => number; strands?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  branch(kit, g, [[0, 0, 0], [0.3, h * 0.4, 0], [-0.2, h * 0.75, 0.2], [0.1, h, 0]], h * 0.05, h * 0.025);
  const crown = kit.group(g, 0, h, 0);
  const lines: { pivot: THREE.Group; phase: number }[] = [];
  const mat = tone(0x5a534c);
  for (let i = 0; i < strands; i++) {
    const a = rand() * Math.PI * 2, r = 0.5 + rand() * h * 0.28;
    const pivot = kit.group(crown, Math.cos(a) * r, (rand() - 0.5) * 0.6, Math.sin(a) * r);
    const len = h * (0.35 + rand() * 0.35);
    kit.mesh(new THREE.CylinderGeometry(0.012, 0.004, len, 3), mat, pivot, 0, -len / 2, 0);
    lines.push({ pivot, phase: rand() * 6 });
  }
  // The crown's arching limbs.
  for (let k = 0; k < 5; k++) {
    const a = k / 5 * Math.PI * 2;
    branch(kit, g, [[0.1, h * 0.85, 0], [Math.cos(a) * h * 0.18, h * 1.02, Math.sin(a) * h * 0.18], [Math.cos(a) * h * 0.3, h * 0.95, Math.sin(a) * h * 0.3]], h * 0.018, h * 0.008);
  }
  return { group: g, update: (t: number, wind = 1) => lines.forEach(({ pivot, phase }) => { pivot.rotation.x = Math.sin(t * 1.1 + phase) * 0.08 * wind; pivot.rotation.z = Math.sin(t * 0.8 + phase * 1.3) * 0.12 * wind + 0.05 * wind; }) };
}

/** A clump of bamboo: culms with nodes and fans of leaves; update(t) sways them. */
export function bamboo(kit: Kit, parent: THREE.Object3D, x: number, z: number, { h = 6, count = 7, rand = Math.random, spread = 1.4 }: { h?: number; count?: number; rand?: () => number; spread?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  const culms: { pivot: THREE.Group; phase: number }[] = [];
  const leafGeo = new THREE.PlaneGeometry(0.42, 0.06);
  const ink = tone(0x2f2a26, true);
  for (let i = 0; i < count; i++) {
    const hh = h * (0.7 + rand() * 0.4);
    const pivot = kit.group(g, (rand() - 0.5) * spread, 0, (rand() - 0.5) * spread);
    kit.mesh(new THREE.CylinderGeometry(0.035, 0.05, hh, 6), tone(0x4a443e), pivot, 0, hh / 2, 0);
    for (let y = 0.5; y < hh; y += 0.45) kit.mesh(new THREE.CylinderGeometry(0.052, 0.052, 0.03, 6), ink, pivot, 0, y, 0);
    const leaves = new THREE.InstancedMesh(leafGeo, ink, 26);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
    for (let k = 0; k < 26; k++) {
      q.setFromEuler(e.set((rand() - 0.5) * 1.2, rand() * Math.PI * 2, -0.5 - rand() * 0.8));
      m.compose(new THREE.Vector3((rand() - 0.5) * 0.6, hh * (0.45 + rand() * 0.55), (rand() - 0.5) * 0.6), q, new THREE.Vector3(1, 1, 1));
      leaves.setMatrixAt(k, m);
    }
    pivot.add(leaves);
    culms.push({ pivot, phase: rand() * 6 });
  }
  return { group: g, update: (t: number, wind = 1) => culms.forEach(({ pivot, phase }) => { pivot.rotation.z = Math.sin(t * 0.9 + phase) * 0.03 * wind; pivot.rotation.x = Math.sin(t * 0.7 + phase * 2) * 0.02 * wind; }) };
}

/** A garden rock (太湖石): a lumpy, pitted form. */
export function rock(kit: Kit, parent: THREE.Object3D, x: number, z: number, { h = 1.6, rand = Math.random, shade = 0x6e675f }: { h?: number; rand?: () => number; shade?: number } = {}) {
  const geo = new THREE.IcosahedronGeometry(1, 3);
  const p = geo.getAttribute('position');
  const seed = rand() * 10;
  for (let i = 0; i < p.count; i++) {
    const v = new THREE.Vector3(p.getX(i), p.getY(i), p.getZ(i));
    const k = 1 + 0.25 * Math.sin(v.x * 4 + seed) * Math.cos(v.y * 5 + seed) + 0.15 * Math.sin(v.z * 7 + seed * 2);
    v.multiplyScalar(k);
    p.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  const m = kit.mesh(geo, tone(shade), parent, x, h / 2, z);
  m.scale.set(h * 0.4, h / 2, h * 0.3);
  m.rotation.y = rand() * 6;
  return m;
}

/** Lotus leaves and flowers on water around (x, z). */
export function lotus(kit: Kit, parent: THREE.Object3D, x: number, z: number, { count = 12, rand = Math.random, radius = 3, flowers = 3 }: { count?: number; rand?: () => number; radius?: number; flowers?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  for (let i = 0; i < count; i++) {
    const r = 0.3 + rand() * 0.45, a = rand() * 6.28, d = rand() * radius;
    const up = rand() < 0.4 ? 0.3 + rand() * 0.8 : 0.05;
    const leaf = kit.mesh(new THREE.CircleGeometry(r, 16, 0.2, Math.PI * 2 - 0.2), tone(0x4a443e, true), g, Math.cos(a) * d, up, Math.sin(a) * d);
    leaf.rotation.x = -Math.PI / 2 + (up > 0.1 ? (rand() - 0.5) * 0.5 : 0);
    if (up > 0.1) kit.mesh(new THREE.CylinderGeometry(0.012, 0.012, up, 4), tone(0x4a443e), g, Math.cos(a) * d, up / 2, Math.sin(a) * d);
  }
  const petal = petalGeometry(0.1, 0.18, 0xc0321e, 0xf5c9c0);
  const pm = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
  for (let f = 0; f < flowers; f++) {
    const a = rand() * 6.28, d = rand() * radius * 0.8, hh = 0.6 + rand() * 0.7;
    const fl = kit.group(g, Math.cos(a) * d, hh, Math.sin(a) * d);
    kit.mesh(new THREE.CylinderGeometry(0.012, 0.012, hh, 4), tone(0x4a443e), g, Math.cos(a) * d, hh / 2, Math.sin(a) * d);
    for (let k = 0; k < 8; k++) { const pp = kit.mesh(petal, pm, fl); pp.rotation.set(-0.5 - (k % 2) * 0.3, k / 8 * 6.28, 0, 'YXZ'); }
  }
  return g;
}

/** A bank of cloud: overlapping pale puffs, drifting with time if updated. */
export function cloudBank(kit: Kit, parent: THREE.Object3D, x: number, y: number, z: number, { w = 12, puffs = 10, rand = Math.random, shade = 0xe4ded4, size = 1 }: { w?: number; puffs?: number; rand?: () => number; shade?: number; size?: number } = {}) {
  const g = kit.group(parent, x, y, z);
  for (let i = 0; i < puffs; i++) {
    const s = (0.8 + rand() * 1.6) * size;
    const p = kit.mesh(new THREE.SphereGeometry(s, 14, 10), flat(shade), g, (rand() - 0.5) * w, (rand() - 0.3) * s * 0.6, (rand() - 0.5) * w * 0.3);
    p.scale.y = 0.6;
  }
  return g;
}

/** Tufts of grass or reeds scattered over an area. */
export function reeds(kit: Kit, parent: THREE.Object3D, x: number, z: number, { w = 6, d = 2, count = 40, h = 0.9, rand = Math.random }: { w?: number; d?: number; count?: number; h?: number; rand?: () => number } = {}) {
  const geo = new THREE.ConeGeometry(0.02, 1, 3);
  const inst = new THREE.InstancedMesh(geo, tone(0x4a443e), count);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  for (let i = 0; i < count; i++) {
    const hh = h * (0.5 + rand());
    q.setFromEuler(e.set((rand() - 0.5) * 0.5, 0, (rand() - 0.5) * 0.5));
    m.compose(new THREE.Vector3(x + (rand() - 0.5) * w, hh / 2, z + (rand() - 0.5) * d), q, new THREE.Vector3(1, hh, 1));
    inst.setMatrixAt(i, m);
  }
  parent.add(inst);
  return inst;
}

/** A tree peony bloom (or several), rings of cupped petals opening with `open(0..1)`. */
export function peony(kit: Kit, parent: THREE.Object3D, x: number, y: number, z: number, { s = 1, red = true }: { s?: number; red?: boolean } = {}) {
  const g = kit.group(parent, x, y, z); g.scale.setScalar(s);
  const rings = [{ n: 6, r: 0.01, w: 0.05, h: 0.06 }, { n: 9, r: 0.025, w: 0.08, h: 0.09 }, { n: 12, r: 0.04, w: 0.1, h: 0.11 }, { n: 14, r: 0.055, w: 0.12, h: 0.12 }];
  const petals = new THREE.InstancedMesh(petalGeometry(1, 1, red ? 0x6a0c22 : 0xb9b2a8, red ? 0xf5a3b4 : 0xffffff), new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide }), rings.reduce((a, r) => a + r.n, 0));
  g.add(petals);
  kit.mesh(new THREE.SphereGeometry(0.025, 10, 8), tone(0x8c857c), g);
  for (let k = 0; k < 5; k++) { const l = kit.mesh(new THREE.SphereGeometry(1, 8, 6), tone(0x3f3a35, true), g, Math.cos(k * 1.3) * 0.16, -0.06, Math.sin(k * 1.3) * 0.16); l.scale.set(0.12, 0.012, 0.05); l.rotation.y = -k * 1.3; }
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(0, 0, 0, 'YXZ'), p = new THREE.Vector3(), sc = new THREE.Vector3();
  const open = (u: number) => {
    let i = 0;
    rings.forEach((ring, k) => {
      for (let j = 0; j < ring.n; j++) {
        const a = j / ring.n * Math.PI * 2 + k * 0.7, tilt = 0.12 + k * 0.08 + (0.18 + k * 0.3) * u;
        p.set(-Math.sin(a) * ring.r, 0, -Math.cos(a) * ring.r);
        q.setFromEuler(e.set(-tilt, a, 0));
        petals.setMatrixAt(i++, m.compose(p, q, sc.set(ring.w, ring.h, ring.w)));
      }
    });
    petals.instanceMatrix.needsUpdate = true;
  };
  open(1);
  return { group: g, open };
}
