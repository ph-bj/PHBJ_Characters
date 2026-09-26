import * as THREE from 'three';
import { glyphPixels, inkDotFragment, petalGeometry, type Kit } from '../cinemaKit';

/*
 * Particles and atmosphere, all computed from time on the GPU (or per frame from time), so seeking
 * is exact: wind-blown flecks and snow, drifting petals, mist, incense smoke, ink that gathers into
 * a character, fireworks, and rings of radiance.
 */

const pointsVertex = /* glsl */`
  attribute vec3 aColor; attribute float aSeed, aSize;
  uniform float uTime, uScale, uSpeed, uFall, uWind, uH, uW, uD, uSwirl;
  varying vec3 vColor;
  void main() {
    vec3 p = position;
    float t = uTime * uSpeed;
    // Fall and wrap in a box W × H × D centred on the origin.
    p.y = mod(p.y - t * uFall * (0.6 + aSeed * 0.8) + uH * 0.5, uH) - uH * 0.5;
    p.x = mod(p.x + t * uWind * (0.7 + aSeed * 0.6) + sin(t * 0.7 + aSeed * 40.0) * uSwirl + uW * 0.5, uW) - uW * 0.5;
    p.z += cos(t * 0.5 + aSeed * 23.0) * uSwirl;
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(40.0, aSize * uScale / -mv.z);
  }`;
/** Falling, drifting specks in a box: snow (pale), wind-blown grit (dark), or ash. */
export function specks(kit: Kit, parent: THREE.Object3D, { count = 1500, w = 30, h = 14, d = 24, fall = 1, wind = 0.5, swirl = 0.4, size = 0.06, color = 0xffffff, dark = false, x = 0, y = 7, z = 0 }: { count?: number; w?: number; h?: number; d?: number; fall?: number; wind?: number; swirl?: number; size?: number; color?: number; dark?: boolean; x?: number; y?: number; z?: number } = {}) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3), col = new Float32Array(count * 3), seed = new Float32Array(count), sz = new Float32Array(count);
  const c = new THREE.Color(dark ? 0x6e675f : color);
  for (let i = 0; i < count; i++) {
    pos.set([(kit.rand() - 0.5) * w, (kit.rand() - 0.5) * h, (kit.rand() - 0.5) * d], i * 3);
    c.toArray(col, i * 3); seed[i] = kit.rand(); sz[i] = size * (0.5 + kit.rand());
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  geo.setAttribute('aSize', new THREE.BufferAttribute(sz, 1));
  const uniforms = { uTime: kit.shared.uTime, uScale: kit.shared.uScale, uSpeed: { value: 1 }, uFall: { value: fall }, uWind: { value: wind }, uH: { value: h }, uW: { value: w }, uD: { value: d }, uSwirl: { value: swirl } };
  const points = new THREE.Points(geo, new THREE.ShaderMaterial({ uniforms, vertexShader: pointsVertex, fragmentShader: inkDotFragment, transparent: true, depthWrite: false }));
  points.position.set(x, y, z); points.frustumCulled = false;
  parent.add(points);
  return { points, uniforms };
}

/** Petals drifting down through a volume (instanced 3D petals). update(t). */
export function petals(kit: Kit, parent: THREE.Object3D, { count = 80, w = 10, h = 6, d = 6, x = 0, y = 0, z = 0, red = true, speed = 0.5, wind = 0.3 }: { count?: number; w?: number; h?: number; d?: number; x?: number; y?: number; z?: number; red?: boolean; speed?: number; wind?: number } = {}) {
  const geo = petalGeometry(0.06, 0.08, red ? 0xb0304a : 0xe6e0d6, red ? 0xf5a3b4 : 0xffffff);
  const inst = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide }), count);
  inst.position.set(x, y, z); inst.frustumCulled = false;
  parent.add(inst);
  const seeds = Array.from({ length: count }, () => [kit.rand(), kit.rand(), kit.rand(), kit.rand()]);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
  const update = (t: number) => {
    seeds.forEach(([a, b, c, s], i) => {
      const fallen = ((t * speed * (0.6 + c * 0.6) + s * h) % h);
      p.set((a - 0.5) * w + Math.sin(t * 1.3 + s * 10) * 0.3 + t * wind * 0.3 % w, h - fallen, (b - 0.5) * d + Math.cos(t + s * 7) * 0.2);
      p.x = ((p.x + w / 2) % w + w) % w - w / 2;
      q.setFromEuler(e.set(t * (1 + a) + s * 6, t * 0.7 + b * 6, t * (0.5 + c)));
      inst.setMatrixAt(i, m.compose(p, q, one));
    });
    inst.instanceMatrix.needsUpdate = true;
  };
  update(0);
  return { mesh: inst, update };
}

let mistTexture: HTMLCanvasElement | undefined;
function mistCanvas() {
  if (mistTexture) return mistTexture;
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const ctx = c.getContext('2d')!;
  for (let i = 0; i < 18; i++) {
    const x = 50 + Math.sin(i * 2.3) * 70 + 78, y = 128 + Math.cos(i * 1.7) * 30, r = 40 + (i * 37) % 60;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(255,255,255,0.4)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 256, 256);
  }
  mistTexture = c;
  return c;
}
/** Banks of mist (white: in ink they erase to bare paper) drifting across. update(t). */
export function mist(kit: Kit, parent: THREE.Object3D, { count = 10, w = 60, y = 1, d = 30, z = 0, size = 18, opacity = 0.7, drift = 0.6, shade = 0xf4f0e8 }: { count?: number; w?: number; y?: number; d?: number; z?: number; size?: number; opacity?: number; drift?: number; shade?: number } = {}) {
  const material = new THREE.SpriteMaterial({ map: kit.canvasTexture(mistCanvas()), color: shade, transparent: true, opacity, depthWrite: false, fog: false });
  const sprites = Array.from({ length: count }, () => {
    const sprite = new THREE.Sprite(material);
    const s = size * (0.6 + kit.rand() * 0.8);
    sprite.scale.set(s * 2, s * 0.6, 1);
    const base = [(kit.rand() - 0.5) * w, y + (kit.rand() - 0.5) * size * 0.3, z + (kit.rand() - 0.5) * d] as const;
    parent.add(sprite);
    return { sprite, base, speed: drift * (0.5 + kit.rand()) };
  });
  const update = (t: number) => sprites.forEach(({ sprite, base, speed }) => {
    const xx = ((base[0] + t * speed + w / 2) % w + w) % w - w / 2;
    sprite.position.set(xx, base[1], base[2]);
  });
  update(0);
  return { update, material };
}

const smokeVertex = /* glsl */`
  attribute float aSeed;
  uniform float uTime, uScale, uH, uSize;
  varying float vAlpha;
  void main() {
    float life = fract(uTime * 0.18 + aSeed);
    vec3 p = position + vec3(sin(life * 9.0 + aSeed * 30.0) * 0.12 * life * 3.0, life * uH, cos(life * 7.0 + aSeed * 20.0) * 0.08 * life * 3.0);
    vAlpha = (1.0 - life) * smoothstep(0.0, 0.1, life) * 0.35;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(64.0, uSize * (0.4 + life * 1.6) * uScale / -mv.z);
  }`;
const smokeFragment = /* glsl */`
  uniform vec3 uInk;
  varying float vAlpha;
  void main() { float r = length(gl_PointCoord - 0.5) * 2.0; if (r > 1.0) discard; gl_FragColor = vec4(uInk, vAlpha * (1.0 - r)); }`;
/** A thread of smoke rising from (x, y, z): incense, a lamp, a teapot's steam. */
export function smoke(kit: Kit, parent: THREE.Object3D, x: number, y: number, z: number, { h = 1.2, count = 120, size = 0.08, shade = 0x6e675f }: { h?: number; count?: number; size?: number; shade?: number } = {}) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3), seed = new Float32Array(count);
  for (let i = 0; i < count; i++) seed[i] = i / count;
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  const points = new THREE.Points(geo, new THREE.ShaderMaterial({ uniforms: { uTime: kit.shared.uTime, uScale: kit.shared.uScale, uH: { value: h }, uSize: { value: size }, uInk: { value: new THREE.Color(shade) } }, vertexShader: smokeVertex, fragmentShader: smokeFragment, transparent: true, depthWrite: false }));
  points.position.set(x, y, z); points.frustumCulled = false;
  parent.add(points);
  return points;
}

const gatherVertex = /* glsl */`
  attribute vec3 aStart; attribute vec2 aGlyph; attribute float aSeed;
  uniform float uTime, uScale, uAt, uDur, uSize, uScatter, uBig, uSpin;
  varying float vAlpha;
  void main() {
    float s = clamp((uTime - uAt - aSeed * uDur * 0.4) / (uDur * 0.6), 0.0, 1.0);
    float g = s * s * (3.0 - 2.0 * s);
    vec3 target = vec3(aGlyph * uBig, (aSeed - 0.5) * 0.1 * uBig);
    vec3 drift = aStart + vec3(sin(uTime * 0.7 + aSeed * 30.0), cos(uTime * 0.6 + aSeed * 20.0), sin(uTime * 0.5 + aSeed * 11.0)) * 0.4;
    float a = (1.0 - g) * uSpin * (aSeed - 0.5) * 6.0;
    drift.xz = mat2(cos(a), -sin(a), sin(a), cos(a)) * drift.xz;
    vec3 p = mix(drift, target, g);
    float sc = clamp((uTime - uScatter - aSeed * 0.6) / 1.4, 0.0, 1.0);
    p += normalize(vec3(aGlyph, aSeed - 0.5) + 0.001) * sc * sc * uBig * 1.2;
    vAlpha = 0.5 * (0.3 + 0.7 * g) * (1.0 - sc);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(48.0, uSize * uScale / -mv.z);
  }`;
const gatherFragment = /* glsl */`
  uniform vec3 uInk;
  varying float vAlpha;
  void main() { float r = length(gl_PointCoord - 0.5) * 2.0; if (r > 1.0) discard; gl_FragColor = vec4(uInk, vAlpha * (1.0 - smoothstep(0.0, 1.0, r))); }`;
/**
 * Drops of ink swirling in from a cloud around the origin and gathering into a character `size` wide,
 * from `at` over `dur` seconds (absolute film time); `scatter` throws them off again.
 */
export function inkGather(kit: Kit, parent: THREE.Object3D, char: string, { size = 4, at = 0, dur = 3, count = 3000, spread = 14, scatter = 999, ink = 0x2f2a26, drop = 0.12, spin = 1 }: { size?: number; at?: number; dur?: number; count?: number; spread?: number; scatter?: number; ink?: number; drop?: number; spin?: number } = {}) {
  const sample = glyphPixels(char, kit.rand);
  const geo = new THREE.BufferGeometry();
  const start = new Float32Array(count * 3), glyph = new Float32Array(count * 2), seed = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const a = kit.rand() * Math.PI * 2, r = spread * (0.4 + kit.rand() * 0.6);
    start.set([Math.cos(a) * r, (kit.rand() - 0.5) * spread * 0.6, Math.sin(a) * r * 0.6], i * 3);
    glyph.set(sample(), i * 2); seed[i] = kit.rand();
  }
  geo.setAttribute('position', new THREE.BufferAttribute(start, 3));
  geo.setAttribute('aStart', new THREE.BufferAttribute(start, 3));
  geo.setAttribute('aGlyph', new THREE.BufferAttribute(glyph, 2));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  const uniforms = { uTime: kit.shared.uTime, uScale: kit.shared.uScale, uAt: { value: at }, uDur: { value: dur }, uSize: { value: drop }, uScatter: { value: scatter }, uBig: { value: size }, uSpin: { value: spin }, uInk: { value: new THREE.Color(ink) } };
  const points = new THREE.Points(geo, new THREE.ShaderMaterial({ uniforms, vertexShader: gatherVertex, fragmentShader: gatherFragment, transparent: true, depthWrite: false }));
  points.frustumCulled = false;
  parent.add(points);
  return { points, uniforms };
}

const burstVertex = /* glsl */`
  attribute vec3 aDir; attribute float aSeed, aBurst;
  uniform float uTime, uScale, uStart, uEvery, uSize, uSpeed;
  varying float vAlpha; varying float vRed;
  void main() {
    float k = floor(aBurst);
    float t0 = uStart + k * uEvery;
    float life = (uTime - t0) / 2.2;
    vec3 origin = vec3(sin(k * 12.9) * 6.0, 8.0 + cos(k * 7.1) * 2.5, cos(k * 3.3) * 3.0);
    vec3 p = origin + aDir * uSpeed * (1.0 - exp(-life * 2.5)) + vec3(0.0, -life * life * 1.6, 0.0);
    vAlpha = (life > 0.0 && life < 1.0) ? (1.0 - life) : 0.0;
    vRed = step(0.5, fract(aSeed * 7.0 + k * 0.37));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = vAlpha <= 0.0 ? 0.0 : min(40.0, uSize * uScale / -mv.z);
  }`;
const burstFragment = /* glsl */`
  varying float vAlpha; varying float vRed;
  void main() { float r = length(gl_PointCoord - 0.5) * 2.0; if (r > 1.0) discard; vec3 c = mix(vec3(0.16, 0.13, 0.11), vec3(0.78, 0.18, 0.1), vRed); gl_FragColor = vec4(c, vAlpha * (1.0 - r * r)); }`;
/** Fireworks (火树银花): bursts of ink and vermilion sparks every `every` seconds from `start`. */
export function fireworks(kit: Kit, parent: THREE.Object3D, { bursts = 8, perBurst = 260, start = 0, every = 1.2, size = 0.12, speed = 4 }: { bursts?: number; perBurst?: number; start?: number; every?: number; size?: number; speed?: number } = {}) {
  const count = bursts * perBurst;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3), dir = new Float32Array(count * 3), seed = new Float32Array(count), burst = new Float32Array(count);
  const v = new THREE.Vector3();
  for (let i = 0; i < count; i++) {
    v.set(kit.rand() - 0.5, kit.rand() - 0.5, kit.rand() - 0.5).normalize().multiplyScalar(0.6 + kit.rand() * 0.4);
    dir.set(v.toArray(), i * 3); seed[i] = kit.rand(); burst[i] = Math.floor(i / perBurst);
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aDir', new THREE.BufferAttribute(dir, 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  geo.setAttribute('aBurst', new THREE.BufferAttribute(burst, 1));
  const points = new THREE.Points(geo, new THREE.ShaderMaterial({ uniforms: { uTime: kit.shared.uTime, uScale: kit.shared.uScale, uStart: { value: start }, uEvery: { value: every }, uSize: { value: size }, uSpeed: { value: speed } }, vertexShader: burstVertex, fragmentShader: burstFragment, transparent: true, depthWrite: false }));
  points.frustumCulled = false;
  parent.add(points);
  return points;
}

/** Rings of radiance spreading from a point, facing the camera direction `normal`. update(t, strength). */
export function radiance(kit: Kit, parent: THREE.Object3D, x: number, y: number, z: number, { rings = 6, max = 4, shade = 0x6e675f }: { rings?: number; max?: number; shade?: number } = {}) {
  const g = kit.group(parent, x, y, z);
  const items = Array.from({ length: rings }, (_, k) => {
    const m = new THREE.MeshBasicMaterial({ color: shade, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false });
    const ring = kit.mesh(new THREE.RingGeometry(0.96, 1, 64), m, g);
    return { ring, m, k };
  });
  return {
    group: g,
    update: (t: number, strength = 1) => items.forEach(({ ring, m, k }) => {
      const u = ((t * 0.35 + k / rings) % 1);
      ring.scale.setScalar(0.2 + u * max);
      m.opacity = strength * (1 - u) * 0.5;
    }),
  };
}
