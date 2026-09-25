import * as THREE from 'three';
import type { Cinema } from './createParagraphCinema';
import { TEN_KINDS_SHOTS } from './tenKindsStory';
import { shotAt } from './stories';
import { clamp01, createCinema, ease, glowFragment, glyphPixels, petalGeometry, roofGeometry, type Env, type V3 } from './cinemaKit';
import { FIGURE_H, FIGURE_W, drawDan, drawGentleman } from './tenKindsFigures';

// The gallery sits at the origin; the other sets are placed far away and shown one at a time.
const SET = { garden: 400, glyph: 800 };
/** The ten kinds of gentlemen, in the passage's order. */
const KINDS = ['正', '上', '高', '逸', '华', '豪', '狂', '趣', '和', '乐'];
// Bays run right to left, the way a handscroll is unrolled; the camera spends STEP seconds on each.
const BAY = 10, STEP = 1.9;
const bayX = (k: number) => 45 - k * BAY;
/** When the camera settles on a bay and its lantern is lit. */
const litAt = (k: number) => k === 0 ? 0.3 : STEP * k - 0.2;
const danAt = (k: number) => 19.5 + k * 0.55;

const ENV = [
  { top: 0x0a1428, horizon: 0x27304a, glow: 0x000000, moon: [0.35, 0.6, 1], moonSize: 0.035, moonGain: 1, bloom: 0.85, stars: 1, fog: 0x161b2c, density: 0.012 },
  { top: 0x0b1730, horizon: 0x364662, glow: 0x120e18, moon: [0.25, 0.32, -1], moonSize: 0.05, moonGain: 1.8, bloom: 0.8, stars: 0.7, fog: 0x243049, density: 0.018 },
  { top: 0x03050b, horizon: 0x0b0e1a, glow: 0x180c06, moon: [0, -1, 0], moonSize: 0.01, moonGain: 0, bloom: 1, stars: 1, fog: 0x03050b, density: 0 },
] as const satisfies readonly Env[];

// Lantern light (the gentlemen) and blossom light (the performers) each form 情, then merge.
const pairVertex = /* glsl */`
  attribute vec3 aStart, aColor;
  attribute vec2 aGlyph;
  attribute float aSide, aSeed;
  uniform float uTime, uScale, uPair, uSmall, uBig, uPortrait;
  varying vec3 vColor;
  void main() {
    float s = uTime - 29.0;
    float side = aSide > 0.5 ? 1.0 : -1.0;
    // Lantern light rises from below left; blossom light drifts down from above right.
    vec3 drift = aStart + vec3(sin(aSeed * 20.0 + uTime * 0.6) * 0.5, -side * s * 1.1, cos(aSeed * 13.0 + uTime * 0.5) * 0.5);
    vec2 offset = uPortrait > 0.5 ? vec2(0.0, -side * uPair) : vec2(side * uPair, 0.0);
    vec3 two = vec3(offset + aGlyph * uSmall, (aSeed - 0.5) * 0.6);
    vec3 one = vec3(aGlyph * uBig, (aSeed - 0.5) * 1.4);
    float gather = smoothstep(0.0, 1.0, clamp((s - 0.3 - aSeed * 1.0) / 1.8, 0.0, 1.0));
    float merge = smoothstep(0.0, 1.0, clamp((s - 3.4 - aSeed * 0.7) / 1.8, 0.0, 1.0));
    vec3 p = mix(mix(drift, two, gather), one, merge);
    p += vec3(sin(uTime * 2.0 + aSeed * 50.0), cos(uTime * 1.7 + aSeed * 31.0), 0.0) * 0.03 * (1.0 + merge * 2.0);
    float pulse = 1.0 + 0.5 * exp(-pow((s - 6.0) * 2.2, 2.0));
    vec3 color = mix(aColor, vec3(1.0, 0.82, 0.55), merge * 0.45);
    vColor = color * (0.6 + 0.5 * gather + 0.35 * merge) * pulse * (0.8 + 0.2 * sin(uTime * 3.0 + aSeed * 60.0));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(48.0, mix(0.32, 0.22, gather) * uScale / -mv.z);
  }`;

/** Chapter 1, paragraph 2: ten kinds of gentlemen, ten leading performers, and one word for them all. */
export function createTenKindsCinema(
  host: HTMLDivElement,
  onProgress: (seconds: number) => void,
  onError: () => void,
): Cinema {
  return createCinema(host, onProgress, onError, 20260926, ({ scene, camera, rand, shared, ink, group, mesh, box, lambert, canvasTexture, glows, warm, lantern, path, setEnv, portrait }) => {
    const matrix = new THREE.Matrix4(), quaternion = new THREE.Quaternion(), euler = new THREE.Euler();
    const place = new THREE.Vector3(), size = new THREE.Vector3(1, 1, 1);
    const figureCanvas = () => { const canvas = document.createElement('canvas'); canvas.width = FIGURE_W; canvas.height = FIGURE_H; return canvas; };

    // --- Shots 1–2: the gallery of ten lanterns --------------------------------------------
    const gallery = group(scene);
    const timber = lambert(0x2e211b), lacquer = lambert(0x551a14);
    box(gallery, timber, [0, -0.1, 0], [112, 0.2, 7.4]);
    // One bay of wall, repeated: plaster, a latticed round window open to the night, a hanging scroll.
    const wallCanvas = document.createElement('canvas'); wallCanvas.width = 1024; wallCanvas.height = 400;
    {
      const ctx = wallCanvas.getContext('2d')!;
      const plaster = ctx.createLinearGradient(0, 0, 0, 400);
      plaster.addColorStop(0, '#c9bfa9'); plaster.addColorStop(1, '#d8cebb');
      ctx.fillStyle = plaster; ctx.fillRect(0, 0, 1024, 400);
      for (let i = 0; i < 900; i++) { ctx.fillStyle = `rgba(90,70,50,${0.02 + rand() * 0.03})`; ctx.fillRect(rand() * 1024, rand() * 400, 2 + rand() * 6, 2 + rand() * 6); }
      ctx.fillStyle = '#4d433b'; ctx.fillRect(0, 352, 1024, 48);
      const [cx, cy, r] = [242, 180, 118];
      ctx.save(); ctx.globalCompositeOperation = 'destination-out'; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
      ctx.strokeStyle = '#2b1d17'; ctx.lineWidth = 6;
      for (let d = -2 * r; d <= 2 * r; d += 38) {
        ctx.beginPath(); ctx.moveTo(cx + d - r, cy - r); ctx.lineTo(cx + d + r, cy + r); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx + d + r, cy - r); ctx.lineTo(cx + d - r, cy + r); ctx.stroke();
      }
      ctx.restore();
      ctx.strokeStyle = '#3a2a20'; ctx.lineWidth = 14; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#5b3f2a'; ctx.fillRect(842, 40, 108, 246);
      ctx.fillStyle = '#e4dac4'; ctx.fillRect(852, 56, 88, 214);
      ctx.strokeStyle = 'rgba(40,32,28,0.55)'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(858, 220); ctx.quadraticCurveTo(880, 150, 900, 190); ctx.quadraticCurveTo(916, 130, 934, 210); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(870, 244); ctx.lineTo(928, 244); ctx.stroke();
    }
    const wallTexture = canvasTexture(wallCanvas);
    wallTexture.wrapS = THREE.RepeatWrapping; wallTexture.repeat.set(10, 1);
    mesh(new THREE.PlaneGeometry(100, 3.9), lambert(0xffffff, { map: wallTexture, alphaTest: 0.5, side: THREE.DoubleSide }), gallery, 0, 1.95, -3);
    mesh(roofGeometry(112, 7.4, 1.1, new THREE.Color(0x1c1f28)), lambert(0xffffff, { vertexColors: true, side: THREE.DoubleSide }), gallery, 0, 3.92, -0.1);
    box(gallery, lacquer, [0, 3.82, 2.8], [112, 0.22, 0.2]);
    // Close both ends of the gallery so the first and last bays don't open onto empty sky.
    for (const x of [-50.1, 50.1]) box(gallery, lambert(0xcbc1ac), [x, 1.95, -0.1], [0.2, 3.9, 5.9]);
    for (let j = 0; j <= 10; j++) for (const z of [2.8, -2.85]) mesh(new THREE.CylinderGeometry(0.13, 0.14, 3.9, 12), lacquer, gallery, 50 - j * BAY, 1.95, z);
    // A low railing marks the edge of the gallery nearest the viewer.
    box(gallery, lacquer, [0, 0.56, 2.6], [112, 0.07, 0.07]);
    box(gallery, lacquer, [0, 0.1, 2.6], [112, 0.07, 0.07]);
    const balusters = new THREE.InstancedMesh(new THREE.BoxGeometry(0.035, 0.46, 0.035), lacquer, 240);
    for (let i = 0; i < 240; i++) balusters.setMatrixAt(i, matrix.makeTranslation(-54 + i * 0.45, 0.33, 2.6));
    gallery.add(balusters);
    // Bamboo beyond the wall, seen through the lattice windows.
    const bambooLeaves: THREE.Matrix4[] = [];
    for (let i = 0; i < 50; i++) {
      const x = -52 + rand() * 104, z = -4.4 - rand() * 2.6;
      mesh(new THREE.CylinderGeometry(0.035, 0.05, 7, 6), ink, gallery, x, 3.5, z).rotation.z = (rand() - 0.5) * 0.12;
      for (let k = 0; k < 24; k++) {
        quaternion.setFromEuler(euler.set(rand() * 2 - 1, rand() * Math.PI * 2, 0.6 + rand() * 0.9));
        bambooLeaves.push(new THREE.Matrix4().compose(place.set(x + (rand() - 0.5) * 1.3, 0.8 + rand() * 4.5, z + (rand() - 0.5) * 1.2), quaternion, size));
      }
    }
    const leaves = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.36, 0.055), ink, bambooLeaves.length);
    bambooLeaves.forEach((m, i) => leaves.setMatrixAt(i, m)); gallery.add(leaves);

    // Each bay: a paper lantern bearing its character, and a paper-cut gentleman in its light.
    const woodCap = lambert(0x24170f);
    const bays = KINDS.map((char, k) => {
      const x = bayX(k);
      const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 192;
      const ctx = canvas.getContext('2d')!;
      const paper = ctx.createLinearGradient(0, 0, 512, 0);
      paper.addColorStop(0, '#9c2a18'); paper.addColorStop(0.5, '#ee7440'); paper.addColorStop(1, '#9c2a18');
      ctx.fillStyle = paper; ctx.fillRect(0, 0, 512, 192);
      ctx.strokeStyle = 'rgba(80,20,10,0.35)'; ctx.lineWidth = 2;
      for (let y = 16; y < 192; y += 22) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(512, y); ctx.stroke(); }
      ctx.fillStyle = '#1b0f0a'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = 'bold 128px "KaiTi", "STKaiti", "Kaiti SC", "Noto Serif SC", serif';
      ctx.fillText(char, 256, 100);
      const lamp = new THREE.MeshBasicMaterial({ map: canvasTexture(canvas), fog: false });
      const hang = group(gallery, x + 1.3, 3.0, 0.9);
      // The cylinder's texture centre faces -z; turn it to face the viewer.
      mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.72, 32, 1, true), lamp, hang).rotation.y = Math.PI;
      mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.06, 20), woodCap, hang, 0, 0.39, 0);
      mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.06, 20), woodCap, hang, 0, -0.39, 0);
      mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.45, 4), woodCap, hang, 0, 0.64, 0);
      mesh(new THREE.CylinderGeometry(0.035, 0.008, 0.3, 6), lacquer, hang, 0, -0.57, 0);
      const figure = figureCanvas();
      const figureTexture = canvasTexture(figure);
      const figureMaterial = new THREE.MeshBasicMaterial({ map: figureTexture, transparent: true, depthWrite: false, opacity: 0 });
      mesh(new THREE.PlaneGeometry(1.6, 3.2), figureMaterial, gallery, x + 0.2, 1.6, -0.6);
      drawGentleman(figure.getContext('2d')!, k, 0);
      return { lamp, figure, figureTexture, figureMaterial, hang };
    });
    glows(gallery, KINDS.flatMap((_, k): [V3, THREE.Color, number, number][] => [
      [[bayX(k) + 1.3, 3.0, 1.0], warm(1.1, 0xff8a48), 1.5, litAt(k)],
      [[bayX(k) + 0.8, 2.3, -2.9], warm(0.3), 7, litAt(k)],
      [[bayX(k) + 1.0, 0.05, 0.4], warm(0.16), 5, litAt(k)],
    ]));

    // --- Shot 3: the Pear Garden ------------------------------------------------------------
    const garden = group(scene, SET.garden);
    const water = new THREE.MeshBasicMaterial({ color: 0x0a1320, transparent: true, opacity: 0.62 });
    mesh(new THREE.PlaneGeometry(300, 300).rotateX(-Math.PI / 2), water, garden).renderOrder = 1;
    {
      const shape = new THREE.Shape(); shape.moveTo(-160, -5);
      for (let x = -160; x <= 160; x += 8) shape.lineTo(x, 3 + 4 * Math.sin(x * 0.05) + 2 * Math.sin(x * 0.13));
      shape.lineTo(160, -5);
      mesh(new THREE.ShapeGeometry(shape), new THREE.MeshBasicMaterial({ color: 0x121a2b }), garden, 0, 0, -70);
    }
    const stageWood = lambert(0x3a1a14);
    box(garden, stageWood, [0, 0.78, 0], [22, 0.3, 4.4]);
    box(garden, lambert(0x24110d), [0, 0.5, 2.2], [22, 0.5, 0.1]);
    for (let x = -10.5; x <= 10.6; x += 3) for (const z of [-2, 2]) mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.8, 8), stageWood, garden, x, 0.25, z);
    for (const x of [-11.2, 11.2]) for (const z of [-2, 2]) mesh(new THREE.CylinderGeometry(0.13, 0.14, 3.8, 12), lacquer, garden, x, 2.8, z);
    box(garden, lacquer, [0, 4.6, 2.05], [22.8, 0.24, 0.22]);
    mesh(roofGeometry(24.5, 5.6, 1.4, new THREE.Color(0x1a1d26)), lambert(0xffffff, { vertexColors: true, side: THREE.DoubleSide }), garden, 0, 4.72, 0);
    const stageGlows: [V3, THREE.Color, number, number][] = [];
    for (let x = -9; x <= 9.1; x += 3) { lantern(garden, [x, 4.0, 2.05], 0.8); stageGlows.push([[x, 4.0, 2.05], warm(0.8), 1.4, -1]); }
    const stageLight = new THREE.PointLight(0xffb070, 40, 30, 1.2); stageLight.position.set(0, 3.4, 4); garden.add(stageLight);
    // A lamp-lit paper backdrop, as in the shadow play, so the performers read as silhouettes.
    const backdrop = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.5, 0.4, 0.28), transparent: true, opacity: 0.82 });
    mesh(new THREE.PlaneGeometry(22, 2.9), backdrop, garden, 0, 0.93 + 1.45, -1.95);
    for (let x = -10.5; x <= 10.6; x += 1) stageGlows.push([[x, 0.97, 2.15], warm(0.9, 0xffb060), 0.35, -1]);
    // Pear trees in blossom: dark trunks, clouds of pale light.
    const blossomColor = () => new THREE.Color().setRGB(0.9, 0.93, 1).multiplyScalar(0.45 + rand() * 0.35);
    const tree = (base: V3, height: number) => {
      const top = new THREE.Vector3(base[0] + (rand() - 0.5) * 0.8, height, base[2]);
      mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(...base), new THREE.Vector3(base[0] + (rand() - 0.5) * 0.5, height * 0.5, base[2]), top]), 12, 0.13, 6), ink, garden);
      for (let b = 0; b < 5; b++) {
        const a = b / 5 * Math.PI * 2 + rand();
        const tip = top.clone().add(new THREE.Vector3(Math.cos(a) * (1.4 + rand()), 0.6 + rand() * 1.2, Math.sin(a) * (1 + rand() * 0.6)));
        mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([top, top.clone().lerp(tip, 0.5).add(new THREE.Vector3(0, 0.3, 0)), tip]), 8, 0.05, 5), ink, garden);
        for (let i = 0; i < 90; i++) {
          const offset = new THREE.Vector3(rand() - 0.5, rand() - 0.5, rand() - 0.5).multiplyScalar(2.2);
          stageGlows.push([tip.clone().add(offset).toArray() as V3, blossomColor(), 0.16, -1]);
        }
      }
    };
    for (let i = 0; i < 9; i++) tree([-16 + i * 4 + (rand() - 0.5) * 2, 0, -4 - rand() * 7], 3.2 + rand() * 1.4);
    for (const x of [-14.5, 14.5]) tree([x, 0, 1.5], 3.6);
    // A branch close to the lens opens the shot.
    const near = new THREE.CatmullRomCurve3([new THREE.Vector3(11, 4.7, 5.4), new THREE.Vector3(9.4, 3.95, 4.7), new THREE.Vector3(7.6, 3.45, 4.2)]);
    mesh(new THREE.TubeGeometry(near, 16, 0.04, 5), ink, garden);
    for (let i = 0; i < 70; i++) stageGlows.push([near.getPoint(rand()).add(new THREE.Vector3((rand() - 0.5) * 0.5, (rand() - 0.5) * 0.4, (rand() - 0.5) * 0.3)).toArray() as V3, blossomColor().multiplyScalar(1.3), 0.08, -1]);
    // The moon's broken reflection on the water.
    for (let d = 4; d < 70; d += 0.45) stageGlows.push([[0.25 * d + (rand() - 0.5) * 0.9 * (0.4 + d / 40), 0.02, 10 - d], new THREE.Color(0.85, 0.88, 1).multiplyScalar(0.28), 0.3, -1]);
    glows(garden, stageGlows);
    // Ten dan performers along the stage edge, with their reflections below.
    const performers = Array.from({ length: 10 }, (_, k) => {
      const x = 9 - k * 2;
      const canvas = figureCanvas();
      const texture = canvasTexture(canvas);
      const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, opacity: 0 });
      mesh(new THREE.PlaneGeometry(1.05, 2.1), material, garden, x, 0.93 + 1.05, 0.3);
      const echo = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, opacity: 0, color: 0x9fb2d8 });
      const reflection = mesh(new THREE.PlaneGeometry(1.05, 2.1), echo, garden, x, -0.93 - 1.05, 0.3);
      reflection.scale.y = -1; reflection.renderOrder = 0;
      return { canvas, texture, material, echo };
    });
    const pearPetals = new THREE.InstancedMesh(petalGeometry(0.06, 0.07, 0xd6dcea, 0xffffff), new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide }), 160);
    const petalSeeds = Array.from({ length: 160 }, () => [rand(), rand(), rand(), rand()]);
    garden.add(pearPetals);

    // --- Shot 4: one word ---------------------------------------------------------------------
    const glyphSet = group(scene, SET.glyph);
    const pairUniforms = { uTime: shared.uTime, uScale: shared.uScale, uPair: { value: 9 }, uSmall: { value: 13 }, uBig: { value: 20 }, uPortrait: { value: 0 } };
    {
      const sample = glyphPixels('情', rand);
      const count = 8000, geometry = new THREE.BufferGeometry();
      const start = new Float32Array(count * 3), glyph = new Float32Array(count * 2), colors = new Float32Array(count * 3);
      const side = new Float32Array(count), seed = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        const pale = i % 2;
        glyph.set(sample(), i * 2);
        start.set(pale ? [5 + rand() * 30, 6 + rand() * 18, -rand() * 20 + 4] : [-5 - rand() * 30, -24 + rand() * 18, -rand() * 20 + 4], i * 3);
        (pale ? new THREE.Color(0.85, 0.9, 1).multiplyScalar(0.9 + rand() * 0.3) : new THREE.Color(rand() < 0.15 ? 0xff5a3a : 0xffa04a)).toArray(colors, i * 3);
        side[i] = pale; seed[i] = rand();
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(start, 3));
      geometry.setAttribute('aStart', new THREE.BufferAttribute(start, 3));
      geometry.setAttribute('aGlyph', new THREE.BufferAttribute(glyph, 2));
      geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('aSide', new THREE.BufferAttribute(side, 1));
      geometry.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
      const points = new THREE.Points(geometry, new THREE.ShaderMaterial({
        uniforms: pairUniforms, vertexShader: pairVertex, fragmentShader: glowFragment, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
      }));
      points.frustumCulled = false; glyphSet.add(points);
    }
    const sealCanvas = document.createElement('canvas'); sealCanvas.width = sealCanvas.height = 128;
    {
      const ctx = sealCanvas.getContext('2d')!;
      ctx.fillStyle = '#a3261c'; ctx.fillRect(6, 6, 116, 116);
      ctx.fillStyle = '#f4e3c4'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = 'bold 50px "KaiTi", "STKaiti", "Noto Serif SC", serif';
      ctx.fillText('品', 64, 38); ctx.fillText('花', 64, 92);
    }
    const sealMaterial = new THREE.MeshBasicMaterial({ map: canvasTexture(sealCanvas), transparent: true, opacity: 0, fog: false });
    const seal = mesh(new THREE.PlaneGeometry(1.8, 1.8), sealMaterial, glyphSet, 0, 0, 1);

    // --- Direction ----------------------------------------------------------------------------
    const gardenShot = path([
      [19, [SET.garden + 7.2, 2.2, 4.8], [SET.garden + 6.2, 1.9, 0]],
      [23.5, [SET.garden + 3, 2.4, 10.5], [SET.garden + 1.5, 1.9, 0]],
      [29, [SET.garden, 2.6, 17], [SET.garden, 1.6, 0]],
    ]);
    const sets = [gallery, gallery, garden, glyphSet];
    const envs = [ENV[0], ENV[0], ENV[1], ENV[2]];
    return (seconds: number) => {
      const shot = shotAt(TEN_KINDS_SHOTS, seconds);
      for (const set of [gallery, garden, glyphSet]) set.visible = set === sets[shot];
      setEnv(envs[shot]);
      const isPortrait = portrait();
      if (shot < 2) {
        // Dwell on each bay, then glide to the next, like unrolling a scroll.
        const b = seconds / STEP, k = Math.floor(b);
        const at = Math.min(9, k + ease((b - k - 0.6) / 0.4));
        const x = bayX(at) + 0.35;
        camera.position.set(x, 1.85 + Math.sin(seconds * 0.4) * 0.04, isPortrait ? 9.4 : 6.6);
        camera.lookAt(x - 0.1, 1.9, -3);
        bays.forEach((bay, i) => {
          const on = ease((seconds - litAt(i)) / 0.6);
          bay.lamp.color.setScalar(0.28 + on * (2.0 + Math.sin(seconds * 6 + i) * 0.12));
          bay.hang.rotation.z = Math.sin(seconds * 0.8 + i) * 0.03;
          bay.figureMaterial.opacity = ease((seconds - litAt(i) - 0.25) / 0.7);
          if (Math.abs(at - i) < 1.6) {
            drawGentleman(bay.figure.getContext('2d')!, i, seconds);
            bay.figureTexture.needsUpdate = true;
          }
        });
      } else if (shot === 2) {
        gardenShot(seconds);
        performers.forEach((performer, k) => {
          const show = ease((seconds - danAt(k)) / 0.6);
          performer.material.opacity = show;
          performer.echo.opacity = show * 0.35;
          drawDan(performer.canvas.getContext('2d')!, k, seconds);
          performer.texture.needsUpdate = true;
        });
        petalSeeds.forEach(([a, b, c, d], i) => {
          const fallen = (seconds * (0.35 + c * 0.35) + d * 7) % 6.5;
          place.set(-14 + a * 28 - fallen * 0.3 + Math.sin(seconds * 1.2 + d * 10) * 0.2, 6.3 - fallen, -3 + b * 8);
          quaternion.setFromEuler(euler.set(seconds * (1 + a) + d * 6, seconds * 0.7 + b * 6, seconds * (0.5 + c)));
          pearPetals.setMatrixAt(i, matrix.compose(place, quaternion, size));
        });
        pearPetals.instanceMatrix.needsUpdate = true;
      } else {
        const s = clamp01((seconds - TEN_KINDS_SHOTS[3].start) / 7);
        camera.position.set(SET.glyph + Math.sin(s * 1.4) * 3, 0.6, (isPortrait ? 62 : 44) - ease(s) * 8);
        camera.lookAt(SET.glyph, 0, 0);
        pairUniforms.uPortrait.value = isPortrait ? 1 : 0;
        const big = pairUniforms.uBig.value;
        seal.position.set(big * 0.42, -big * 0.42, 1);
        sealMaterial.opacity = ease((seconds - 34.4) / 0.5);
        seal.scale.setScalar(1 + 0.4 * (1 - ease((seconds - 34.4) / 0.35)));
      }
    };
  });
}
