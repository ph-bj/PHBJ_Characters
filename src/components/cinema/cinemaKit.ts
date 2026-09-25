import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Cinema } from './createParagraphCinema';
import { CINEMA_DURATION } from './paragraphScene';

/** Shared machinery for the authored, ink-and-lantern paragraph cinemas. */

export const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
export const ease = (value: number) => { const x = clamp01(value); return x * x * (3 - 2 * x); };
export type V3 = [number, number, number];

/** Night palette for a shot: sky gradient, moon, stars, bloom and fog. The moon direction points from the camera. */
export type Env = {
  top: number; horizon: number; glow: number;
  moon: readonly [number, number, number]; moonSize: number; moonGain: number;
  bloom: number; stars: number; fog: number; density: number;
};

/** A seeded generator keeps every set identical on each replay. */
export function random(seed: number) {
  return () => { seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

export function paint(geometry: THREE.BufferGeometry, color: THREE.Color) {
  const count = geometry.getAttribute('position').count, colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) color.toArray(colors, i * 3);
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return geometry;
}

/** A hipped roof whose concave slopes rise to the ridge and whose corners sweep upward. */
export function roofGeometry(width: number, depth: number, height: number, color: THREE.Color) {
  const nx = 12, nz = 8, positions: number[] = [], uvs: number[] = [], index: number[] = [];
  for (let iz = 0; iz <= nz; iz++) for (let ix = 0; ix <= nx; ix++) {
    const u = ix / nx * 2 - 1, v = iz / nz * 2 - 1;
    const f = Math.min((1 - Math.abs(v)) * depth / 2, (1 - Math.abs(u)) * width / 2) / (depth / 2);
    positions.push(u * width / 2, height * Math.pow(Math.min(1, f), 1.5) + height * 0.25 * Math.pow(Math.abs(u * v), 5), v * depth / 2);
    uvs.push(ix / nx, iz / nz);
    if (ix < nx && iz < nz) { const a = iz * (nx + 1) + ix, b = a + nx + 1; index.push(a, b, a + 1, a + 1, b, b + 1); }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(index); geometry.computeVertexNormals();
  return paint(geometry.toNonIndexed(), color);
}

/** One unit hall (plinth, walls, roof) with baked colours, for instancing. */
export function hallGeometry(roof: number, wall: number, base: number) {
  const box = (w: number, h: number, d: number, y: number, color: number) =>
    paint(new THREE.BoxGeometry(w, h, d).translate(0, y, 0).toNonIndexed(), new THREE.Color(color));
  return mergeGeometries([
    box(0.96, 0.08, 0.72, 0.04, base),
    box(0.8, 0.42, 0.56, 0.29, wall),
    roofGeometry(1.12, 0.86, 0.36, new THREE.Color(roof)).translate(0, 0.5, 0),
  ])!;
}

/** A petal cupped toward +z, rooted at the origin, darker at its base. */
export function petalGeometry(width: number, height: number, base: number, tip: number) {
  const geometry = new THREE.PlaneGeometry(width, height, 4, 6).translate(0, height / 2, 0);
  const position = geometry.getAttribute('position'), colors: number[] = [];
  const from = new THREE.Color(base), to = new THREE.Color(tip), color = new THREE.Color();
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i), v = position.getY(i) / height;
    const taper = 0.3 + 0.7 * Math.sin(Math.min(1, v * 1.6) * Math.PI / 2);
    position.setXYZ(i, x * taper, position.getY(i) + Math.sin(x * 60) * 0.004 * v, (x / (width / 2)) ** 2 * width * 0.3 + Math.sin(v * Math.PI) * height * 0.1);
    // Clamp: float rounding can leave the base row at -1e-9, and pow() of a negative is NaN.
    color.lerpColors(from, to, Math.pow(Math.max(0, v), 0.8)).toArray(colors, colors.length);
  }
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  return geometry;
}

/** Pixel coordinates inside a character, for building it out of particles. */
export function glyphPixels(char: string, rand: () => number) {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 200;
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
  ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = 'bold 176px "KaiTi", "STKaiti", "Kaiti SC", "Noto Serif SC", "Songti SC", serif';
  ctx.fillText(char, 100, 104);
  const data = ctx.getImageData(0, 0, 200, 200).data, pixels: [number, number][] = [];
  for (let y = 0; y < 200; y++) for (let x = 0; x < 200; x++) if (data[(y * 200 + x) * 4 + 3] > 128) pixels.push([x, y]);
  if (!pixels.length) for (let i = 0; i < 400; i++) pixels.push([40 + rand() * 120, 40 + rand() * 120]);
  /** A point inside the glyph, normalised to [-0.5, 0.5] with +y up. */
  return () => { const [px, py] = pixels[Math.floor(rand() * pixels.length)]; return [(px + rand()) / 200 - 0.5, 0.5 - (py + rand()) / 200] as [number, number]; };
}

const skyVertex = /* glsl */`
  varying vec3 vDirection;
  void main() {
    vDirection = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position.z = gl_Position.w;
  }`;
const skyFragment = /* glsl */`
  uniform vec3 uTop, uHorizon, uGlow, uMoon;
  uniform float uMoonSize, uMoonGain, uStars;
  varying vec3 vDirection;
  float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453); }
  void main() {
    vec3 d = normalize(vDirection);
    float h = clamp(d.y, -0.3, 1.0);
    vec3 color = mix(uHorizon, uTop, smoothstep(-0.03, 0.5, h));
    color += uGlow * pow(1.0 - abs(h), 7.0);
    float m = dot(d, normalize(uMoon));
    float disc = smoothstep(cos(uMoonSize), cos(uMoonSize * 0.94), m);
    float mottle = 0.9 + 0.1 * sin(d.x * 900.0) * sin(d.y * 700.0 + d.z * 300.0);
    color += vec3(1.0, 0.93, 0.78) * disc * uMoonGain * mottle;
    color += vec3(0.7, 0.75, 0.9) * (pow(max(m, 0.0), 900.0) * 0.8 + pow(max(m, 0.0), 40.0) * 0.12) * min(1.0, uMoonGain);
    float star = step(0.9978, hash(floor(d * 300.0))) * smoothstep(0.04, 0.35, h) * uStars;
    color += vec3(0.8, 0.85, 1.0) * star * (1.0 - disc);
    gl_FragColor = vec4(color, 1.0);
  }`;
// Additive glows for lanterns, windows and blossoms. `aOn` < 0 means always lit.
const glowVertex = /* glsl */`
  attribute vec3 aColor;
  attribute float aSize, aOn, aSeed;
  uniform float uTime, uScale;
  varying vec3 vColor;
  void main() {
    float on = aOn < 0.0 ? 1.0 : smoothstep(aOn, aOn + 0.7, uTime);
    vColor = aColor * on * (0.82 + 0.18 * sin(uTime * (5.0 + aSeed * 4.0) + aSeed * 40.0));
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = on < 0.01 ? 0.0 : min(180.0, aSize * uScale / -mv.z * (0.5 + 0.5 * on));
  }`;
/** The ink-painting counterpart of a glow: a soft dot of ink (or vermilion) laid on the paper. */
export const inkDotFragment = /* glsl */`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(min(vColor, vec3(1.0)), 0.85 * (1.0 - smoothstep(0.45, 1.0, r)));
  }`;
export const glowFragment = /* glsl */`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(vColor * (exp(-r * r * 5.0) + 0.6 * (1.0 - smoothstep(0.12, 0.32, r))), 1.0);
  }`;

const noiseGlsl = /* glsl */`
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  float fbm(vec2 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; } return v; }`;

/**
 * Turns the rendered frame into ink on paper: light becomes bare paper, darkness becomes ink,
 * edges gain brush outlines, and saturated reds stay vermilion (seals, lanterns).
 */
const inkPassShader = {
  uniforms: {
    tDiffuse: { value: null },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uPaper: { value: new THREE.Vector3(0.94, 0.91, 0.84) },
    uInk: { value: new THREE.Vector3(0.11, 0.09, 0.08) },
    uSeal: { value: new THREE.Vector3(0.66, 0.2, 0.13) },
  },
  vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform vec2 uResolution;
    uniform vec3 uPaper, uInk, uSeal;
    varying vec2 vUv;
    ${noiseGlsl}
    float lum(vec2 uv) { return dot(texture2D(tDiffuse, uv).rgb, vec3(0.299, 0.587, 0.114)); }
    void main() {
      vec2 px = 1.0 / uResolution, frag = vUv * uResolution;
      // The brush never follows the geometry exactly; the offset is fixed so the paper does not swim.
      vec2 uv = vUv + (vec2(fbm(frag / 90.0), fbm(frag / 90.0 + 7.3)) - 0.5) * px * 3.0;
      vec3 c = texture2D(tDiffuse, uv).rgb;
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      float tl = lum(uv + px * vec2(-1.0, 1.0)), t = lum(uv + px * vec2(0.0, 1.0)), tr = lum(uv + px * vec2(1.0, 1.0));
      float ml = lum(uv + px * vec2(-1.0, 0.0)), mr = lum(uv + px * vec2(1.0, 0.0));
      float bl = lum(uv + px * vec2(-1.0, -1.0)), b = lum(uv + px * vec2(0.0, -1.0)), br = lum(uv + px * vec2(1.0, -1.0));
      float edge = smoothstep(0.1, 0.55, length(vec2(-tl - 2.0 * ml - bl + tr + 2.0 * mr + br, -bl - 2.0 * b - br + tl + 2.0 * t + tr)));
      float grain = fbm(frag / 2.5), wash = fbm(frag / 140.0);
      // Uneven washes: ink pools in some places and thins in others.
      float ink = smoothstep(0.03, 0.97, 1.0 - l) * (0.8 + 0.34 * wash);
      ink = clamp(max(ink, edge * 0.8), 0.0, 1.0);
      vec3 paper = uPaper * (0.93 + 0.07 * grain);
      paper *= 1.0 - 0.2 * pow(length(vUv - 0.5) * 1.3, 3.0);
      vec3 color = mix(paper, uInk, ink * (0.9 + 0.1 * grain));
      float red = clamp((c.r - max(c.g, c.b)) * 2.5, 0.0, 1.0);
      color = mix(color, uSeal * (0.85 + 0.15 * grain), red);
      gl_FragColor = vec4(color, 1.0);
    }`,
};

/** Ink that seeps into the paper: reveals a canvas texture through a noisy, growing threshold. */
export function inkRevealMaterial(map: THREE.Texture, color = new THREE.Color(1, 1, 1)) {
  return new THREE.ShaderMaterial({
    uniforms: { map: { value: map }, uReveal: { value: 0 }, uOpacity: { value: 1 }, uColor: { value: color } },
    vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */`
      uniform sampler2D map;
      uniform float uReveal, uOpacity;
      uniform vec3 uColor;
      varying vec2 vUv;
      ${noiseGlsl}
      void main() {
        vec4 texel = texture2D(map, vUv);
        float n = noise(vUv * vec2(5.0, 10.0)) * 0.6 + noise(vUv * 40.0) * 0.4;
        float alpha = texel.a * smoothstep(n - 0.08, n + 0.08, uReveal * 1.3 - 0.15) * uOpacity;
        if (alpha < 0.02) discard;
        gl_FragColor = vec4(texel.rgb * uColor, alpha);
      }`,
    transparent: true, depthWrite: false,
  });
}

export type Kit = {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  rand: () => number;
  /** Uniforms every point shader shares: time in seconds and the pixels-per-unit scale for point sizes. */
  shared: { uTime: { value: number }; uScale: { value: number } };
  ink: THREE.MeshBasicMaterial;
  group: (parent: THREE.Object3D, x?: number, y?: number, z?: number) => THREE.Group;
  mesh: <T extends THREE.BufferGeometry>(geometry: T, material: THREE.Material, parent: THREE.Object3D, x?: number, y?: number, z?: number) => THREE.Mesh<T, THREE.Material>;
  box: (parent: THREE.Object3D, material: THREE.Material, at: V3, size: V3) => THREE.Mesh;
  lambert: (color: number, extra?: THREE.MeshLambertMaterialParameters) => THREE.MeshLambertMaterial;
  canvasTexture: (canvas: HTMLCanvasElement) => THREE.CanvasTexture;
  /** Additive glowing points; each entry is [position, HDR colour, world size, time lit (-1: always)]. */
  glows: (parent: THREE.Object3D, entries: [V3, THREE.Color, number, number][]) => THREE.Points;
  warm: (gain: number, hex?: number) => THREE.Color;
  lantern: (parent: THREE.Object3D, at: V3, scale?: number) => THREE.Group;
  /** A camera move through timed keys of [seconds, position, look-at], eased at both ends. */
  path: (keys: [number, V3, V3][]) => (seconds: number) => void;
  setEnv: (env: Env) => void;
  portrait: () => boolean;
};

/**
 * Builds the renderer, bloom, night sky and playback loop. `build` stages the sets and returns the
 * per-frame update, which must derive everything from `seconds` so seeking and replay are exact.
 */
export function createCinema(
  host: HTMLDivElement,
  onProgress: (seconds: number) => void,
  onError: () => void,
  seed: number,
  build: (kit: Kit) => (seconds: number) => void,
  /** `ink` renders as a traditional ink painting on paper instead of a lantern-lit night. */
  style: 'night' | 'ink' = 'night',
): Cinema {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  // The ink pass reads brightness as ink density, so it needs untoned values.
  renderer.toneMapping = style === 'ink' ? THREE.NoToneMapping : THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  renderer.domElement.style.cssText = 'width:100%;height:100%;display:block';
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const fog = new THREE.FogExp2(0x2a2c46, 0.0055);
  scene.fog = fog;
  const camera = new THREE.PerspectiveCamera(40, 1, 0.05, 1200);
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.9, 0.55, 0.85);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const inkPass = style === 'ink' ? new ShaderPass(inkPassShader) : undefined;
  if (inkPass) { bloom.enabled = false; composer.addPass(inkPass); }
  const textures = new Set<THREE.Texture>();
  let disposed = false, playing = false, seconds = 0, previous = 0, report = -1;
  let observer: ResizeObserver | undefined;
  let sync = () => {};
  const contextLost = (event: Event) => { event.preventDefault(); playing = false; sync(); onError(); };
  const cleanup = () => {
    if (disposed) return;
    disposed = true;
    observer?.disconnect();
    renderer.setAnimationLoop(null);
    document.removeEventListener('visibilitychange', sync);
    renderer.domElement.removeEventListener('webglcontextlost', contextLost);
    const materials = new Set<THREE.Material>();
    scene.traverse(object => {
      const item = object as THREE.Mesh;
      if (item.geometry && !(object instanceof THREE.Sprite)) item.geometry.dispose();
      if (item.material) ([] as THREE.Material[]).concat(item.material).forEach(material => materials.add(material));
    });
    materials.forEach(material => material.dispose());
    textures.forEach(texture => texture.dispose());
    bloom.dispose(); inkPass?.dispose(); composer.dispose();
    renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove();
  };
  try {
    const rand = random(seed);
    const shared = { uTime: { value: 0 }, uScale: { value: 1 } };
    const group: Kit['group'] = (parent, x = 0, y = 0, z = 0) => { const value = new THREE.Group(); value.position.set(x, y, z); parent.add(value); return value; };
    const mesh: Kit['mesh'] = (geometry, material, parent, x = 0, y = 0, z = 0) => {
      const value = new THREE.Mesh(geometry, material); value.position.set(x, y, z); parent.add(value); return value;
    };
    const box: Kit['box'] = (parent, material, [x, y, z], [w, h, d]) => mesh(new THREE.BoxGeometry(w, h, d), material, parent, x, y, z);
    const canvasTexture: Kit['canvasTexture'] = canvas => { const value = new THREE.CanvasTexture(canvas); value.colorSpace = THREE.SRGBColorSpace; textures.add(value); return value; };
    const lambert: Kit['lambert'] = (color, extra = {}) => new THREE.MeshLambertMaterial({ color, ...extra });
    const ink = new THREE.MeshBasicMaterial({ color: 0x05070b, side: THREE.DoubleSide });
    const glows: Kit['glows'] = (parent, entries) => {
      const geometry = new THREE.BufferGeometry();
      const position = new Float32Array(entries.length * 3), colors = new Float32Array(entries.length * 3);
      const size = new Float32Array(entries.length), on = new Float32Array(entries.length), seeds = new Float32Array(entries.length);
      entries.forEach(([p, color, s, lit], i) => { position.set(p, i * 3); color.toArray(colors, i * 3); size[i] = s; on[i] = lit; seeds[i] = rand(); });
      geometry.setAttribute('position', new THREE.BufferAttribute(position, 3));
      geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
      geometry.setAttribute('aOn', new THREE.BufferAttribute(on, 1));
      geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
      // Light cannot be added to paper, so in ink the same points are laid down as dots.
      const points = new THREE.Points(geometry, new THREE.ShaderMaterial({
        uniforms: shared, vertexShader: glowVertex, fragmentShader: style === 'ink' ? inkDotFragment : glowFragment,
        blending: style === 'ink' ? THREE.NormalBlending : THREE.AdditiveBlending, transparent: true, depthWrite: false,
      }));
      points.frustumCulled = false; parent.add(points);
      return points;
    };
    const warm: Kit['warm'] = (gain, hex = 0xffa24c) => new THREE.Color(hex).multiplyScalar(gain);
    const lantern: Kit['lantern'] = (parent, [x, y, z], scale = 1) => {
      const g = group(parent, x, y, z); g.scale.setScalar(scale);
      const shell = new THREE.MeshStandardMaterial({ color: 0xc8402a, emissive: 0xff5a24, emissiveIntensity: 1.8, roughness: 0.6 });
      const brass = new THREE.MeshStandardMaterial({ color: 0x8a6a34, roughness: 0.5, metalness: 0.4 });
      mesh(new THREE.SphereGeometry(1, 16, 12), shell, g).scale.set(0.22, 0.27, 0.22);
      mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.05, 12), brass, g, 0, 0.27, 0);
      mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.05, 12), brass, g, 0, -0.27, 0);
      mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.6, 4), brass, g, 0, 0.58, 0);
      mesh(new THREE.CylinderGeometry(0.03, 0.005, 0.28, 6), shell, g, 0, -0.43, 0);
      return g;
    };
    const path: Kit['path'] = keys => {
      const positions = new THREE.CatmullRomCurve3(keys.map(([, p]) => new THREE.Vector3(...p)), false, 'centripetal');
      const targets = new THREE.CatmullRomCurve3(keys.map(([, , t]) => new THREE.Vector3(...t)), false, 'centripetal');
      const look = new THREE.Vector3();
      return s => {
        const t0 = keys[0][0], t1 = keys[keys.length - 1][0];
        const time = t0 + (t1 - t0) * ease((s - t0) / (t1 - t0));
        let i = 0;
        while (i < keys.length - 2 && time > keys[i + 1][0]) i++;
        const u = (i + clamp01((time - keys[i][0]) / (keys[i + 1][0] - keys[i][0]))) / (keys.length - 1);
        camera.position.copy(positions.getPoint(u));
        camera.lookAt(targets.getPoint(u, look));
      };
    };

    const sky = new THREE.ShaderMaterial({
      uniforms: {
        uTop: { value: new THREE.Color() }, uHorizon: { value: new THREE.Color() }, uGlow: { value: new THREE.Color() },
        uMoon: { value: new THREE.Vector3() }, uMoonSize: { value: 0.04 }, uMoonGain: { value: 1 }, uStars: { value: 1 },
      },
      vertexShader: skyVertex, fragmentShader: skyFragment, side: THREE.BackSide, depthWrite: false, fog: false,
    });
    const dome = mesh(new THREE.SphereGeometry(500, 48, 24), sky, scene);
    dome.renderOrder = -1; dome.frustumCulled = false;
    scene.add(new THREE.HemisphereLight(0x7d8fbf, 0x2a1f1c, 0.55));
    const moonlight = new THREE.DirectionalLight(0xa9bde6, 1.1);
    scene.add(moonlight, moonlight.target);
    const moonDirection = new THREE.Vector3();
    let currentEnv: Env | undefined;
    const setEnv: Kit['setEnv'] = env => {
      if (env === currentEnv) return;
      currentEnv = env;
      sky.uniforms.uTop.value.setHex(env.top); sky.uniforms.uHorizon.value.setHex(env.horizon); sky.uniforms.uGlow.value.setHex(env.glow);
      moonDirection.set(env.moon[0], env.moon[1], env.moon[2]).normalize();
      sky.uniforms.uMoon.value.copy(moonDirection);
      sky.uniforms.uMoonSize.value = env.moonSize; sky.uniforms.uMoonGain.value = env.moonGain; sky.uniforms.uStars.value = env.stars;
      bloom.strength = env.bloom;
      fog.color.setHex(env.fog); fog.density = env.density;
      moonlight.intensity = env.moon[1] > 0 ? 1.1 : 0.15;
    };

    const update = build({
      scene, camera, rand, shared, ink, group, mesh, box, lambert, canvasTexture, glows, warm, lantern, path, setEnv,
      portrait: () => camera.aspect < 0.9,
    });
    const render = () => {
      shared.uTime.value = seconds;
      update(seconds);
      moonlight.position.copy(camera.position).addScaledVector(moonDirection, 100);
      moonlight.target.position.copy(camera.position);
      dome.position.copy(camera.position);
      composer.render();
    };
    const baseFov = 40;
    const resize = () => {
      if (disposed) return;
      const { width, height } = host.getBoundingClientRect();
      const w = Math.max(1, width), h = Math.max(1, height);
      renderer.setSize(w, h, false);
      composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(w, h);
      inkPass?.uniforms.uResolution.value.set(w * renderer.getPixelRatio(), h * renderer.getPixelRatio());
      camera.aspect = w / h;
      // Keep the horizontal field of a 16:10 frame on narrow screens so subjects stay in view.
      const horizontal = 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(baseFov) / 2) * 1.6);
      camera.fov = Math.min(75, Math.max(baseFov, THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(horizontal / 2) / camera.aspect))));
      camera.updateProjectionMatrix();
      shared.uScale.value = h * renderer.getPixelRatio() / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2));
      render();
    };
    const tick = (now: number) => {
      if (previous && playing && !document.hidden) seconds = Math.min(CINEMA_DURATION, seconds + Math.min((now - previous) / 1000, 0.1));
      previous = now; render();
      if (Math.floor(seconds * 12) !== report) { report = Math.floor(seconds * 12); onProgress(seconds); }
      if (seconds >= CINEMA_DURATION) { playing = false; renderer.setAnimationLoop(null); }
    };
    sync = () => { previous = 0; renderer.setAnimationLoop(playing && !document.hidden ? tick : null); };
    observer = new ResizeObserver(resize); observer.observe(host);
    document.addEventListener('visibilitychange', sync);
    renderer.domElement.addEventListener('webglcontextlost', contextLost);
    resize();
    return {
      setPlaying(value) { playing = value; sync(); },
      seek(value) { seconds = THREE.MathUtils.clamp(value, 0, CINEMA_DURATION); onProgress(seconds); render(); sync(); },
      replay() { seconds = 0; onProgress(0); render(); sync(); },
      dispose: cleanup,
    };
  } catch (error) { cleanup(); throw error; }
}
