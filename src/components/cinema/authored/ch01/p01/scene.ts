import * as THREE from 'three';
import { defineScene } from '../../define';
import { createShadowPlay } from './shadowPlay';
import { clamp01, ease, hallGeometry, inkDotFragment, petalGeometry, roofGeometry, type Env, type V3, WRITING_RED } from '../../../cinemaKit';
import { appFont, fillCentered } from '../../../fonts';

// Each shot has its own set, placed far apart; only the current one is shown.
const SET = { shadow: 400, gate: 800, glyph: 1200 };
// Night palette per shot: sky gradient, moon, stars and fog. Moon direction points from the camera.
// Ink-painting palettes. The kit's ink pass reads brightness as ink density: pale skies stay bare
// paper, white fog fades distance into the paper, and the moon is left blank inside a light wash.
const ENV = [
  { top: 0xcdc7bd, horizon: 0xf0ece4, glow: 0x000000, moon: [-0.3, 0.15, -1], moonSize: 0.035, moonGain: 0.5, bloom: 0, stars: 0, fog: 0xf0ece4, density: 0.0055 },
  { top: 0xcdc7bd, horizon: 0xf0ece4, glow: 0x000000, moon: [-0.3, 0.15, -1], moonSize: 0.035, moonGain: 0.5, bloom: 0, stars: 0, fog: 0xf0ece4, density: 0.0055 },
  { top: 0xefebe3, horizon: 0xefebe3, glow: 0x000000, moon: [0, -1, 0], moonSize: 0.01, moonGain: 0, bloom: 0, stars: 0, fog: 0xefebe3, density: 0.02 },
  { top: 0xb4ada3, horizon: 0xe6e1d8, glow: 0x000000, moon: [0, 0.075, -1], moonSize: 0.07, moonGain: 0.62, bloom: 0, stars: 0, fog: 0xece8e0, density: 0.016 },
  { top: 0xf4f0e8, horizon: 0xf4f0e8, glow: 0x000000, moon: [0, -1, 0], moonSize: 0.01, moonGain: 0, bloom: 0, stars: 0, fog: 0xf4f0e8, density: 0 },
] as const satisfies readonly Env[];

// The crowd: every lantern walks its own street, computed from time alone.
const crowdVertex = /* glsl */`
  attribute vec3 aColor, aDirection;
  attribute float aLength, aSpeed, aSeed;
  uniform float uTime, uScale;
  varying vec3 vColor;
  void main() {
    vec3 p = position + aDirection * mod(aSeed * aLength + uTime * aSpeed, aLength);
    p.y += sin(uTime * 4.0 + aSeed * 30.0) * 0.05;
    vColor = aColor * (0.85 + 0.15 * sin(uTime * 6.0 + aSeed * 50.0));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(64.0, 0.5 * uScale / -mv.z);
  }`;
// Ink drops rise, gather into ten 情, then merge into one.
const glyphVertex = /* glsl */`
  attribute vec3 aStart, aColor;
  attribute vec2 aGlyph;
  attribute float aCluster, aSeed;
  uniform float uTime, uScale, uCols, uSpacing, uSmall, uBig;
  varying vec3 vColor;
  void main() {
    float s = uTime - 29.0;
    vec3 drift = aStart + vec3(sin(aSeed * 20.0 + uTime * 0.6) * 0.5, s * 1.4, cos(aSeed * 13.0 + uTime * 0.5) * 0.5);
    float rows = 10.0 / uCols, column = mod(aCluster, uCols), row = floor(aCluster / uCols);
    vec3 center = vec3((column - (uCols - 1.0) * 0.5) * uSpacing, ((rows - 1.0) * 0.5 - row) * uSpacing * 1.08, 0.0);
    vec3 ten = center + vec3(aGlyph * uSmall, (aSeed - 0.5) * 0.5);
    vec3 one = vec3(aGlyph * uBig, (aSeed - 0.5) * 1.6);
    float gather = smoothstep(0.0, 1.0, clamp((s - 0.5 - aSeed * 1.1) / 1.7, 0.0, 1.0));
    float merge = smoothstep(0.0, 1.0, clamp((s - 3.5 - aSeed * 0.7) / 1.8, 0.0, 1.0));
    vec3 p = mix(mix(drift, ten, gather), one, merge);
    p += vec3(sin(uTime * 2.0 + aSeed * 50.0), cos(uTime * 1.7 + aSeed * 31.0), 0.0) * 0.03 * (1.0 + merge * 2.0);
    float pulse = 1.0 + 0.5 * exp(-pow((s - 6.0) * 2.2, 2.0));
    vColor = aColor * (0.6 + 0.5 * gather + 0.35 * merge) * pulse * (0.8 + 0.2 * sin(uTime * 3.0 + aSeed * 60.0));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(64.0, mix(0.95, 0.7, gather) * uScale / -mv.z);
  }`;
const wineFragment = /* glsl */`
  uniform float uTime, uHit;
  varying vec2 vUv;
  void main() {
    vec2 p = vUv - 0.5, hit = vec2(-0.12, 0.05), moon = vec2(0.05, 0.13);
    float dt = uTime - uHit, r = length(p - hit), wave = 0.0;
    if (dt > 0.0) wave = sin(r * 95.0 - dt * 10.0) * exp(-dt * 0.8) * (1.0 - smoothstep(dt * 0.22, dt * 0.22 + 0.03, r)) * exp(-r * 3.0);
    vec2 q = p + normalize(p - hit + 1e-4) * wave * 0.014;
    float m = length(q - moon);
    vec3 color = vec3(0.09, 0.02, 0.015) + vec3(1.0, 0.9, 0.72) * (1.0 - smoothstep(0.1, 0.115, m)) * 1.25 + vec3(0.45, 0.4, 0.35) * exp(-m * 9.0) * 0.4;
    color += vec3(0.3, 0.2, 0.1) * max(wave, 0.0);
    gl_FragColor = vec4(color, 1.0 - smoothstep(0.46, 0.5, length(p)));
  }`;

// Soft, overlapping drops so the strokes pool like wet ink with feathered edges.
const inkGlyphFragment = /* glsl */`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(min(vColor, vec3(1.0)), 0.42 * (1.0 - smoothstep(0.0, 1.0, r)));
  }`;

/** A new staging of the prologue: heaven's doorstep, moon and flowers, a playful brush, a moon gate, and 情. */
export default defineScene({
  seed: 20260925,
  build: ({ scene, camera, rand, shared, ink, group, mesh, box, lambert, canvasTexture, glyph, glows, warm, lantern, path, setEnv, portrait }, story) => {
    // --- Shots 1–2: the capital ------------------------------------------------------------
    const city = group(scene);
    mesh(new THREE.PlaneGeometry(1400, 1400).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xe6e1d8 }), city);
    const halls: { x: number; z: number; w: number; h: number; d: number; stage: boolean }[] = [];
    for (let i = -9; i <= 9; i++) for (let j = -10; j <= 2; j++) {
      const cx = i * 16, cz = j * 16;
      if (i === 0 && cz > -40) continue; // the processional avenue
      if (Math.abs(i) <= 2 && cz <= -36) continue; // the palace precinct
      for (const ox of [-3.25, 3.25]) for (const oz of [-3.25, 3.25]) {
        if (rand() > 0.82) continue;
        const w = 4 + rand() * 2.2, stage = rand() < 0.06;
        halls.push({ x: cx + ox + (rand() - 0.5), z: cz + oz + (rand() - 0.5), w, h: w * (0.75 + rand() * 0.3) * (stage ? 1.45 : 1), d: w * (0.7 + rand() * 0.15), stage });
      }
    }
    const cityMaterial = lambert(0xffffff, { vertexColors: true, side: THREE.DoubleSide });
    const houses = new THREE.InstancedMesh(hallGeometry(0x4a4540, 0x8d867d, 0xb4ada3), cityMaterial, halls.length);
    const matrix = new THREE.Matrix4(), tint = new THREE.Color();
    halls.forEach((hall, i) => {
      matrix.makeScale(hall.w, hall.h, hall.d).setPosition(hall.x, 0, hall.z);
      houses.setMatrixAt(i, matrix);
      houses.setColorAt(i, tint.setScalar(0.8 + rand() * 0.4));
    });
    city.add(houses);
    // The Forbidden City: vermilion walls, a gate tower and three great halls on marble terraces.
    const palaceHall = hallGeometry(0x3a3430, 0xa33a26, 0xc9c3b9);
    const palace = new THREE.InstancedMesh(palaceHall, cityMaterial, 4);
    [[0, 6, -38, 28], [0, 2.4, -64, 30], [0, 2.4, -88, 20], [0, 2.4, -112, 32]].forEach(([x, y, z, w], i) => {
      palace.setMatrixAt(i, matrix.makeScale(w, w * 0.85, w * 0.72).setPosition(x, y, z));
    });
    city.add(palace);
    const vermilion = lambert(0xa33a26), marble = lambert(0xc9c3b9);
    box(city, vermilion, [0, 3, -38], [34, 6, 10]);
    for (const z of [-64, -88, -112]) box(city, marble, [0, 1.2, z], [40, 2.4, 26]);
    for (const x of [-38, 38]) box(city, vermilion, [x, 3, -86], [1.2, 6, 96]);
    box(city, vermilion, [0, 3, -134], [77, 6, 1.2]);
    // Western Hills on the horizon, drawn as flat washes beyond the fog.
    [[-430, 0xc4beb4, 60], [-360, 0xa29b91, 36]].forEach(([z, color, peak]) => {
      const shape = new THREE.Shape(); shape.moveTo(-900, -40);
      for (let x = -900; x <= 900; x += 30) shape.lineTo(x, 8 + peak * (0.5 + 0.3 * Math.sin(x * 0.011 + z) + 0.2 * Math.sin(x * 0.031)));
      shape.lineTo(900, -40);
      mesh(new THREE.ShapeGeometry(shape), new THREE.MeshBasicMaterial({ color, fog: false }), city, 0, 0, z);
    });
    // Windows glow faintly everywhere; the theatres light up in a wave spreading from the palace.
    const cityGlows: [V3, THREE.Color, number, number][] = [];
    for (const hall of halls) {
      const lit = Math.hypot(hall.x, hall.z + 60);
      if (!hall.stage) continue;
      const on = 1.4 + lit / 180 * 4.2 + rand() * 0.4;
      for (let k = 0; k < 6; k++) cityGlows.push([[hall.x + (k / 5 - 0.5) * 0.8 * hall.w, 0.46 * hall.h, hall.z + 0.46 * hall.d], warm(1, 0xc0321e), 0.8, on + k * 0.05]);
    }
    for (let k = 0; k < 12; k++) for (const x of [-6, 6]) cityGlows.push([[x, 1.6, 30 - k * 6], warm(1, 0xc0321e), 0.7, 0.9 + (12 - k) * 0.08]);
    for (let k = 0; k < 9; k++) cityGlows.push([[(k - 4) * 3.2, 7.5, -32.5], warm(1, 0xc0321e), 0.9, 0.6]);
    glows(city, cityGlows);
    // 大千队里: a river of hand lanterns along every street, thickest on the avenue.
    {
      const count = 3200, geometry = new THREE.BufferGeometry();
      const start = new Float32Array(count * 3), direction = new Float32Array(count * 3), colors = new Float32Array(count * 3);
      const length = new Float32Array(count), speed = new Float32Array(count), seed = new Float32Array(count);
      const hues = [0x2f2a26, 0x4a443e, 0xb8321f];
      for (let i = 0; i < count; i++) {
        const along = rand() < 0.5 ? 1 : -1;
        if (i < 1500) { start.set([(rand() - 0.5) * 9, 1, along > 0 ? -34 : 50], i * 3); direction.set([0, 0, along], i * 3); length[i] = 84; }
        else if (rand() < 0.5) { const x = (Math.floor(rand() * 18) - 9) * 16 + 8 + (rand() - 0.5) * 2; start.set([x, 1, along > 0 ? -168 : 40], i * 3); direction.set([0, 0, along], i * 3); length[i] = 208; }
        else { const z = (Math.floor(rand() * 13) - 10) * 16 + 8 + (rand() - 0.5) * 2; start.set([along > 0 ? -152 : 152, 1, z], i * 3); direction.set([along, 0, 0], i * 3); length[i] = 304; }
        new THREE.Color(hues[i % 3]).toArray(colors, i * 3);
        speed[i] = 1 + rand() * 1.2; seed[i] = rand();
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(start, 3));
      geometry.setAttribute('aDirection', new THREE.BufferAttribute(direction, 3));
      geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('aLength', new THREE.BufferAttribute(length, 1));
      geometry.setAttribute('aSpeed', new THREE.BufferAttribute(speed, 1));
      geometry.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
      const crowd = new THREE.Points(geometry, new THREE.ShaderMaterial({
        uniforms: shared, vertexShader: crowdVertex, fragmentShader: inkDotFragment, transparent: true, depthWrite: false,
      }));
      crowd.frustumCulled = false; city.add(crowd);
    }
    // Clouds for the descent from 尺五天边.
    {
      const canvas = document.createElement('canvas'); canvas.width = canvas.height = 256;
      const ctx = canvas.getContext('2d')!;
      for (let i = 0; i < 14; i++) {
        const x = 60 + rand() * 136, y = 90 + rand() * 76, r = 30 + rand() * 60;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        gradient.addColorStop(0, 'rgba(255,255,255,0.35)'); gradient.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = gradient; ctx.fillRect(0, 0, 256, 256);
      }
      const cloud = new THREE.SpriteMaterial({ map: canvasTexture(canvas), color: 0x9a948b, transparent: true, opacity: 0.35, depthWrite: false, fog: false });
      for (let i = 0; i < 16; i++) {
        const sprite = new THREE.Sprite(cloud);
        sprite.position.set((rand() - 0.5) * 170, 55 + rand() * 55, -30 + rand() * 170);
        sprite.scale.set(50 + rand() * 50, 22 + rand() * 18, 1);
        city.add(sprite);
      }
    }

    // The tavern terrace at the avenue's south end, looking north to the palace.
    const terrace = group(city, 0, 16, 52);
    const lacquer = lambert(0x3a3431), timber = lambert(0x2e2926);
    // Floor and table are pale washes so the close-up on the cup is not a pool of ink.
    box(terrace, lambert(0xc9c2b7), [0, -0.1, 0.5], [8, 0.2, 5]);
    box(terrace, lacquer, [0, 0.92, -1.3], [7.4, 0.07, 0.08]);
    box(terrace, lacquer, [0, 0.12, -1.3], [7.4, 0.07, 0.08]);
    for (let x = -3.6; x <= 3.61; x += 0.4) box(terrace, lacquer, [x, 0.52, -1.3], [0.045, 0.8, 0.045]);
    for (const x of [-3.7, 3.7]) box(terrace, lacquer, [x, 2.2, -1.3], [0.2, 4.6, 0.2]);
    box(terrace, lacquer, [0, 4.4, -1.3], [7.8, 0.25, 0.22]);
    box(terrace, lambert(0xa39b90), [0, 0.77, 0.5], [1.7, 0.06, 1]);
    for (const x of [-0.75, 0.75]) for (const z of [0.1, 0.9]) box(terrace, timber, [x, 0.37, z], [0.06, 0.74, 0.06]);
    const celadon = new THREE.MeshStandardMaterial({ color: 0x8fb8a6, roughness: 0.25, side: THREE.DoubleSide });
    const cup = mesh(new THREE.LatheGeometry([[0, 0], [0.03, 0], [0.035, 0.008], [0.06, 0.03], [0.075, 0.062], [0.071, 0.064]].map(([x, y]) => new THREE.Vector2(x, y)), 32), celadon, terrace, 0.35, 0.8, 0.55);
    const wine = new THREE.ShaderMaterial({ uniforms: { uTime: shared.uTime, uHit: { value: 13.4 } }, vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }', fragmentShader: wineFragment, transparent: true });
    mesh(new THREE.CircleGeometry(0.068, 48).rotateX(-Math.PI / 2), wine, cup, 0, 0.05, 0);
    // 评花: a single peony in a vase opens as the camera settles.
    const vase = mesh(new THREE.LatheGeometry([[0, 0], [0.06, 0], [0.085, 0.03], [0.1, 0.1], [0.085, 0.2], [0.05, 0.27], [0.042, 0.3], [0.055, 0.33]].map(([x, y]) => new THREE.Vector2(x, y)), 48), new THREE.MeshStandardMaterial({ color: 0x2c4a66, roughness: 0.3 }), terrace, -0.15, 0.8, 0.28);
    mesh(new THREE.CylinderGeometry(0.008, 0.01, 0.2, 5), lambert(0x28401e), vase, 0, 0.42, 0);
    const leaf = lambert(0x2f4a26, { side: THREE.DoubleSide });
    for (const [a, y] of [[0.6, 0.4], [2.6, 0.44], [4.4, 0.37]]) {
      const l = mesh(new THREE.SphereGeometry(1, 8, 6), leaf, vase, Math.cos(a) * 0.09, y, Math.sin(a) * 0.09);
      l.scale.set(0.1, 0.012, 0.04); l.rotation.set(0, -a, -0.4);
    }
    const flower = group(vase, 0, 0.5, 0); flower.scale.setScalar(1.4);
    const petalMaterial = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55, side: THREE.DoubleSide, emissive: 0x3a0812 });
    const rings = [{ n: 6, r: 0.01, w: 0.05, h: 0.06 }, { n: 9, r: 0.025, w: 0.08, h: 0.09 }, { n: 12, r: 0.04, w: 0.1, h: 0.11 }, { n: 14, r: 0.055, w: 0.12, h: 0.12 }];
    const petals = new THREE.InstancedMesh(petalGeometry(1, 1, 0x6a0c22, 0xf5a3b4), petalMaterial, rings.reduce((sum, ring) => sum + ring.n, 0));
    flower.add(petals);
    mesh(new THREE.SphereGeometry(0.025, 10, 8), new THREE.MeshStandardMaterial({ color: 0xe8c04a, emissive: 0x5a3a08 }), flower);
    const euler = new THREE.Euler(0, 0, 0, 'YXZ'), quaternion = new THREE.Quaternion(), place = new THREE.Vector3(), size = new THREE.Vector3();
    const openPeony = (bloom: number) => {
      let index = 0;
      rings.forEach((ring, k) => {
        for (let i = 0; i < ring.n; i++) {
          const a = i / ring.n * Math.PI * 2 + k * 0.7;
          const tilt = THREE.MathUtils.lerp(0.12 + k * 0.08, 0.3 + k * 0.38, bloom);
          place.set(-Math.sin(a) * ring.r, 0, -Math.cos(a) * ring.r);
          quaternion.setFromEuler(euler.set(-tilt, a, 0));
          petals.setMatrixAt(index++, matrix.compose(place, quaternion, size.set(ring.w, ring.h, ring.w)));
        }
      });
      petals.instanceMatrix.needsUpdate = true;
    };
    const fallingPetal = mesh(petalGeometry(0.08, 0.1, 0xb0304a, 0xf5a3b4), petalMaterial, terrace);
    lantern(terrace, [-1.5, 2.3, 0.1], 0.9);
    const lanternLight = new THREE.PointLight(0xfff6ea, 3, 9, 1.6);
    lanternLight.position.set(-1.5, 2.2, 0.3); terrace.add(lanternLight);
    // A candle between vase and cup keys the close-up.
    mesh(new THREE.CylinderGeometry(0.018, 0.02, 0.14, 12), lambert(0xe9dcc0), terrace, 0.12, 0.87, 0.12);
    mesh(new THREE.ConeGeometry(0.008, 0.03, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffd08a).multiplyScalar(3) }), terrace, 0.12, 0.965, 0.12);
    const candle = new THREE.PointLight(0xfff6ea, 1.4, 3, 1.4); candle.position.set(0.12, 1.0, 0.16); terrace.add(candle);

    // --- Shot 3: the shadow-play screen ----------------------------------------------------
    const shadow = group(scene, SET.shadow);
    const play = createShadowPlay();
    const screenTexture = canvasTexture(play.canvas);
    mesh(new THREE.PlaneGeometry(40, 40).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xd8d2c8 }), shadow);
    const screenMaterial = new THREE.MeshBasicMaterial({ map: screenTexture, fog: false });
    screenMaterial.color.setRGB(1.08, 1.0, 0.9);
    mesh(new THREE.PlaneGeometry(7.2, 4.05), screenMaterial, shadow, 0, 2.55, 0);
    const frame = lambert(0x3a3431);
    for (const x of [-3.72, 3.72]) box(shadow, frame, [x, 2.6, 0], [0.22, 5.2, 0.2]);
    box(shadow, frame, [0, 4.66, 0], [7.8, 0.22, 0.22]);
    box(shadow, frame, [0, 0.52, 0], [7.8, 0.12, 0.22]);
    box(shadow, lambert(0x2a2522), [0, 0.24, 0.02], [7.6, 0.46, 0.14]);
    mesh(roofGeometry(8.8, 1.6, 0.55, new THREE.Color(0x1a1c24)), lambert(0xffffff, { vertexColors: true, side: THREE.DoubleSide }), shadow, 0, 4.78, 0);
    for (const x of [-4.4, 4.4]) lantern(shadow, [x, 3.9, 0.3]);
    const screenLight = new THREE.PointLight(0xfff6ea, 9, 14, 1.4); screenLight.position.set(0, 2.5, 1.2); shadow.add(screenLight);
    // Qing-dynasty spectators seen from behind: skullcaps and queues.
    const audience: THREE.Group[] = [];
    for (const [x, z] of [[-1.95, 6.8], [-0.7, 7.0], [0.65, 6.8], [1.9, 6.9], [-1.3, 5.0], [1.3, 5.1]]) {
      const person = group(shadow, x, 0, z);
      mesh(new THREE.SphereGeometry(1, 16, 12), ink, person, 0, 1.2, 0).scale.set(0.3, 0.36, 0.22);
      mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.14, 8), ink, person, 0, 1.52, 0);
      const head = group(person, 0, 1.64, 0);
      mesh(new THREE.SphereGeometry(0.13, 16, 12), ink, head);
      mesh(new THREE.SphereGeometry(0.137, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), ink, head, 0, 0.03, 0);
      mesh(new THREE.SphereGeometry(0.025, 8, 6), ink, head, 0, 0.17, 0);
      mesh(new THREE.CylinderGeometry(0.018, 0.01, 0.6, 5), ink, head, 0, -0.32, 0.13).rotation.x = 0.12;
      audience.push(head);
    }

    // --- Shot 4: the moon gate --------------------------------------------------------------
    const gate = group(scene, SET.gate);
    mesh(new THREE.PlaneGeometry(80, 80).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xd6d0c6 }), gate);
    const wallShape = new THREE.Shape([new THREE.Vector2(-9, 0), new THREE.Vector2(9, 0), new THREE.Vector2(9, 5.4), new THREE.Vector2(-9, 5.4)]);
    const hole = new THREE.Path(); hole.absarc(0, 2.55, 2.25, 0, Math.PI * 2, true); wallShape.holes.push(hole);
    mesh(new THREE.ExtrudeGeometry(wallShape, { depth: 0.5, bevelEnabled: false, curveSegments: 72 }).translate(0, 0, -0.25), lambert(0xd8cfbf), gate);
    for (const x of [-4.95, 4.95]) box(gate, lambert(0x474a50), [x, 0.22, 0], [8.1, 0.44, 0.56]);
    const stone = lambert(0x3b3e44);
    for (const z of [0.26, -0.26]) mesh(new THREE.TorusGeometry(2.3, 0.08, 8, 72), stone, gate, 0, 2.55, z);
    mesh(roofGeometry(19, 1.2, 0.4, new THREE.Color(0x20242e)), lambert(0xffffff, { vertexColors: true, side: THREE.DoubleSide }), gate, 0, 5.4, 0);
    // Beyond the gate: a garden dissolving into moonlit mist.
    const pavilion = new THREE.Mesh(hallGeometry(0x151a22, 0x1c1a1a, 0x22252a), lambert(0xffffff, { vertexColors: true, side: THREE.DoubleSide }));
    pavilion.position.set(-3.2, 0, -16); pavilion.scale.set(7, 6, 5); gate.add(pavilion);
    mesh(new THREE.DodecahedronGeometry(1), ink, gate, -2.6, 0.7, -5.5).scale.set(1.2, 1.5, 0.9);
    const bambooLeaves: THREE.Matrix4[] = [];
    for (let i = 0; i < 9; i++) {
      const x = 2.2 + rand() * 2.6, z = -3 - rand() * 4, height = 6.5 + rand() * 2;
      mesh(new THREE.CylinderGeometry(0.04, 0.06, height, 6), ink, gate, x, height / 2, z).rotation.z = (rand() - 0.5) * 0.1;
      for (let k = 0; k < 30; k++) {
        quaternion.setFromEuler(euler.set(rand() * 2 - 1, rand() * Math.PI * 2, 0.6 + rand() * 0.9));
        bambooLeaves.push(new THREE.Matrix4().compose(place.set(x + (rand() - 0.5) * 1.2, 3 + rand() * (height - 3), z + (rand() - 0.5) * 1.2), quaternion, size.set(1, 1, 1)));
      }
    }
    const leaves = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.4, 0.06), ink, bambooLeaves.length);
    bambooLeaves.forEach((m, i) => leaves.setMatrixAt(i, m)); gate.add(leaves);
    // Plum branch arching over the gate, its blossoms faintly luminous.
    const branch = new THREE.CatmullRomCurve3([[4.8, 5.7, 0.35], [3.7, 5.3, 0.45], [2.6, 5.0, 0.5], [1.6, 4.95, 0.55], [0.7, 4.6, 0.6], [0.0, 4.15, 0.62]].map(([x, y, z]) => new THREE.Vector3(x, y, z)));
    mesh(new THREE.TubeGeometry(branch, 48, 0.045, 6), ink, gate);
    const blossoms: [V3, THREE.Color, number, number][] = [];
    for (const [from, to] of [[0.3, [2.9, 4.4, 0.6]], [0.55, [1.8, 5.5, 0.5]], [0.75, [0.9, 4.2, 0.7]]] as const) {
      const p = branch.getPoint(from);
      const twig = new THREE.CatmullRomCurve3([p, p.clone().lerp(new THREE.Vector3(...to), 0.5).add(new THREE.Vector3(0, 0.12, 0)), new THREE.Vector3(...to)]);
      mesh(new THREE.TubeGeometry(twig, 12, 0.02, 5), ink, gate);
      for (let k = 0; k < 6; k++) blossoms.push([twig.getPoint(0.2 + k * 0.15).add(new THREE.Vector3((rand() - 0.5) * 0.1, (rand() - 0.5) * 0.1, 0)).toArray() as V3, new THREE.Color(0xc2413a), 0.12, -1]);
    }
    for (let k = 0; k < 26; k++) blossoms.push([branch.getPoint(rand()).add(new THREE.Vector3((rand() - 0.5) * 0.14, (rand() - 0.5) * 0.14, 0.05)).toArray() as V3, new THREE.Color(rand() < 0.5 ? 0xc2413a : 0xa8322c), 0.11, -1]);
    for (const x of [-3.6, 3.6]) {
      lantern(gate, [x, 3.7, 0.6]);
      const light = new THREE.PointLight(0xfff6ea, 9, 9, 1.5); light.position.set(x, 3.6, 0.9); gate.add(light);
      box(gate, ink, [x, 4.35, 0.42], [0.05, 0.05, 0.4]);
    }
    // Neutral, same brightness as the old cool fill: a blue cast would read as writing in the ink pass.
    const fill = new THREE.DirectionalLight(0x9c9c9c, 0.6); fill.position.set(-4, 7, 12); gate.add(fill, fill.target);
    glows(gate, blossoms);
    const fallingPetals = new THREE.InstancedMesh(petalGeometry(0.05, 0.06, 0xd89aa6, 0xffe2e6), new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide }), 90);
    const petalSeeds = Array.from({ length: 90 }, () => [rand(), rand(), rand(), rand()]);
    gate.add(fallingPetals);
    // The gentleman and the performer, as paper-cut silhouettes. The shapes face +x; the upper body
    // pivots at the waist so each can bow without moving the feet.
    const spline = (points: number[][]) => { const shape = new THREE.Shape(); shape.moveTo(points[0][0], points[0][1]); shape.splineThru(points.slice(1).map(([x, y]) => new THREE.Vector2(x, y))); shape.closePath(); return shape; };
    const poly = (points: number[][]) => new THREE.Shape(points.map(([x, y]) => new THREE.Vector2(x, y)));
    const circle = (x: number, y: number, r: number) => { const shape = new THREE.Shape(); shape.absarc(x, y, r, 0, Math.PI * 2, false); return shape; };
    const cut = (shapes: THREE.Shape[], parent: THREE.Object3D) => mesh(new THREE.ExtrudeGeometry(shapes, { depth: 0.04, bevelEnabled: false, curveSegments: 16 }), ink, parent);
    function silhouette(lower: number[][], upper: THREE.Shape[], at: V3, facing: 1 | -1) {
      const root = group(gate, ...at); root.scale.x = facing;
      cut([spline(lower)], root);
      const torso = group(root, 0, 0.95, 0);
      cut(upper, torso);
      return { root, torso };
    }
    const gentleman = silhouette(
      [[-0.15, 0.97], [-0.2, 0.6], [-0.27, 0.15], [-0.31, 0.01], [0, 0], [0.3, 0.01], [0.26, 0.2], [0.18, 0.6], [0.14, 0.97]],
      [
        spline([[-0.16, 0], [-0.19, 0.25], [-0.15, 0.45], [-0.06, 0.53], [0.06, 0.52], [0.14, 0.44], [0.16, 0.2], [0.14, 0]]),
        poly([[-0.04, 0.5], [0.06, 0.5], [0.06, 0.62], [-0.04, 0.62]]), circle(0.02, 0.7, 0.105),
        poly([[0.11, 0.73], [0.145, 0.685], [0.11, 0.665]]),
        poly([[-0.1, 0.75], [-0.1, 0.9], [0.1, 0.9], [0.12, 0.76]]),
        poly([[-0.1, 0.87], [-0.24, 0.6], [-0.21, 0.58], [-0.08, 0.8]]),
        spline([[-0.02, 0.45], [0.12, 0.4], [0.28, 0.28], [0.34, 0.18], [0.3, 0.08], [0.18, 0.04], [0.06, 0.14], [-0.04, 0.3]]),
        circle(0.35, 0.23, 0.045),
      ],
      [-2.7, 0, 1.4], 1,
    );
    const performer = silhouette(
      [[-0.13, 0.97], [-0.17, 0.6], [-0.25, 0.12], [-0.28, 0.01], [0, 0], [0.27, 0.01], [0.22, 0.2], [0.15, 0.6], [0.12, 0.97]],
      [
        spline([[-0.13, 0], [-0.16, 0.25], [-0.12, 0.44], [-0.05, 0.5], [0.05, 0.5], [0.12, 0.43], [0.14, 0.2], [0.12, 0]]),
        poly([[-0.035, 0.47], [0.045, 0.47], [0.045, 0.6], [-0.035, 0.6]]), circle(0.02, 0.67, 0.095),
        poly([[0.1, 0.7], [0.13, 0.66], [0.1, 0.645]]),
        circle(-0.08, 0.74, 0.07), circle(0, 0.78, 0.06),
        poly([[-0.15, 0.8], [0.07, 0.865], [0.075, 0.845], [-0.15, 0.782]]),
        poly([[-0.145, 0.79], [-0.175, 0.58], [-0.158, 0.58], [-0.13, 0.78]]),
        spline([[-0.01, 0.44], [0.1, 0.38], [0.2, 0.2], [0.24, -0.1], [0.25, -0.42], [0.17, -0.47], [0.13, -0.12], [0.06, 0.18], [-0.03, 0.3]]),
      ],
      [1.0, 0, -1.2], -1,
    );

    // --- Shot 5: ten kinds, one word ---------------------------------------------------------
    const glyphSet = group(scene, SET.glyph);
    const glyphUniforms = { uTime: shared.uTime, uScale: shared.uScale, uCols: { value: 5 }, uSpacing: { value: 6.8 }, uSmall: { value: 5.2 }, uBig: { value: 21 } };
    {
      const canvas = document.createElement('canvas'); canvas.width = canvas.height = 200;
      const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
      ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = appFont(176, 700);
      ctx.fillText('情', 100, 104);
      const data = ctx.getImageData(0, 0, 200, 200).data, pixels: [number, number][] = [];
      for (let y = 0; y < 200; y += 1) for (let x = 0; x < 200; x += 1) if (data[(y * 200 + x) * 4 + 3] > 128) pixels.push([x, y]);
      if (!pixels.length) for (let i = 0; i < 400; i++) pixels.push([40 + rand() * 120, 40 + rand() * 120]);
      const count = 7000, geometry = new THREE.BufferGeometry();
      const start = new Float32Array(count * 3), glyph = new Float32Array(count * 2), colors = new Float32Array(count * 3);
      const cluster = new Float32Array(count), seed = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        const [px, py] = pixels[Math.floor(rand() * pixels.length)];
        glyph.set([(px + rand()) / 200 - 0.5, 0.5 - (py + rand()) / 200], i * 2);
        start.set([(rand() - 0.5) * 70, -24 + rand() * 22, -rand() * 26 + 6], i * 3);
        new THREE.Color(rand() < 0.5 ? 0x2f2a26 : 0x3f3a35).toArray(colors, i * 3);
        cluster[i] = i % 10; seed[i] = rand();
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(start, 3));
      geometry.setAttribute('aStart', new THREE.BufferAttribute(start, 3));
      geometry.setAttribute('aGlyph', new THREE.BufferAttribute(glyph, 2));
      geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('aCluster', new THREE.BufferAttribute(cluster, 1));
      geometry.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
      const points = new THREE.Points(geometry, new THREE.ShaderMaterial({
        uniforms: glyphUniforms, vertexShader: glyphVertex, fragmentShader: inkGlyphFragment, transparent: true, depthWrite: false,
      }));
      points.frustumCulled = false; glyphSet.add(points);
    }
    // The author's seal, pressed once the word is whole.
    const sealCanvas = document.createElement('canvas'); sealCanvas.width = sealCanvas.height = 128;
    {
      const ctx = sealCanvas.getContext('2d')!;
      ctx.fillStyle = WRITING_RED; ctx.fillRect(6, 6, 116, 116);
      ctx.fillStyle = '#f4e3c4'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = appFont(50, 700);
      fillCentered(ctx, '品', 64, 35); fillCentered(ctx, '花', 64, 93);
    }
    const sealMaterial = new THREE.MeshBasicMaterial({ map: canvasTexture(sealCanvas, true), transparent: true, opacity: 0, fog: false });
    const seal = mesh(new THREE.PlaneGeometry(1.8, 1.8), sealMaterial, glyphSet, 0, 0, 1);
    // Once the drops have merged, the word settles in crisp brushwork over them.
    const word = glyph(glyphSet, '情');
    word.mesh.position.z = 0.9;

    // --- Direction ----------------------------------------------------------------------------
    const shots = [
      path([[0, [0, 112, 150], [0, 70, -200]], [3.5, [0, 78, 118], [0, 24, -100]], [7, [0, 40, 88], [0, 4, -70]]]),
      path([[7, [2.2, 18.6, 60], [0, 8, -80]], [10, [1.2, 17.9, 55.8], [-0.2, 14, -20]], [12.4, [0.45, 17.75, 54.0], [0.05, 17.22, 52.42]], [15, [0.45, 17.1, 52.95], [0.35, 16.84, 52.55]]]),
      path([[15, [SET.shadow + 0.5, 1.7, 11], [SET.shadow, 2.3, 0]], [18.5, [SET.shadow + 0.2, 1.95, 8.2], [SET.shadow, 2.45, 0]], [22, [SET.shadow, 2.55, 5.7], [SET.shadow, 2.55, 0]]]),
      path([[22, [SET.gate + 0.4, 1.95, 10.4], [SET.gate - 0.35, 2.1, 0]], [29, [SET.gate, 2.05, 7.4], [SET.gate, 2.35, 0]]]),
    ];
    const sets = [city, city, shadow, gate, glyphSet];
    return (seconds: number, shot: number) => {
      for (const set of [city, shadow, gate, glyphSet]) set.visible = set === sets[shot];
      terrace.visible = shot === 1;
      setEnv(ENV[shot]);
      const isPortrait = portrait();
      if (shot < 4) shots[shot](seconds);
      else {
        const s = clamp01((seconds - story.shots[4].start) / 7);
        const distance = (isPortrait ? 58 : 44) - ease(s) * 8;
        camera.position.set(SET.glyph + Math.sin(s * 1.4) * 3, 0.6, distance);
        camera.lookAt(SET.glyph, 0, 0);
      }
      if (shot === 1) {
        openPeony(ease((seconds - 8.2) / 3.8));
        // One petal drops from the peony into the wine, starting the ripples.
        const fall = clamp01((seconds - 12.2) / 1.2);
        fallingPetal.visible = seconds > 12.2;
        const drift = Math.max(0, seconds - 13.4);
        fallingPetal.position.set(
          THREE.MathUtils.lerp(-0.13, 0.334, ease(fall)) + Math.sin(fall * 9) * 0.05 * (1 - fall) + drift * 0.004,
          THREE.MathUtils.lerp(1.34, 0.852, fall * fall),
          THREE.MathUtils.lerp(0.3, 0.543, fall) + Math.cos(fall * 7) * 0.04 * (1 - fall),
        );
        fallingPetal.rotation.set(fall < 1 ? fall * 8 : -Math.PI / 2, fall * 5 + drift * 0.2, fall < 1 ? Math.sin(fall * 11) : 0);
      }
      if (shot === 2) {
        play.draw(seconds - 15);
        screenTexture.needsUpdate = true;
        audience.forEach((head, i) => { head.rotation.y = Math.sin(seconds * 0.7 + i * 1.9) * 0.35 * Math.max(0, Math.sin(seconds * 0.4 + i)); });
      }
      if (shot === 3) {
        // The gentleman bows first; the performer returns it; neither steps across the threshold.
        const bow = (start: number, depth: number) => depth * ease((seconds - start) / 1.1) * (1 - ease((seconds - start - 2.2) / 1.2));
        gentleman.torso.rotation.z = -bow(23, 0.55);
        performer.torso.rotation.z = -bow(24.3, 0.38);
        performer.root.position.y = -bow(24.3, 0.05);
        petalSeeds.forEach(([a, b, c, d], i) => {
          const fallen = (seconds * (0.3 + c * 0.3) + d * 6) % 5.4;
          place.set(-0.8 + a * 4.6 - fallen * 0.35 + Math.sin(seconds * 1.3 + d * 10) * 0.15, 5.3 - fallen, -1 + b * 2.4);
          quaternion.setFromEuler(euler.set(seconds * (1 + a) + d * 6, seconds * 0.7 + b * 6, seconds * (0.5 + c)));
          fallingPetals.setMatrixAt(i, matrix.compose(place, quaternion, size.set(1, 1, 1)));
        });
        fallingPetals.instanceMatrix.needsUpdate = true;
      }
      if (shot === 4) {
        const big = glyphUniforms.uBig.value;
        glyphUniforms.uCols.value = isPortrait ? 2 : 5;
        seal.position.set(big * 0.42, -big * 0.42, 1);
        word.mesh.scale.setScalar(big);
        word.material.uniforms.uReveal.value = ease((seconds - 34) / 1);
        sealMaterial.opacity = ease((seconds - 34.4) / 0.5);
        seal.scale.setScalar(1 + 0.4 * (1 - ease((seconds - 34.4) / 0.35)));
      }
    };
  },
});
