import * as THREE from 'three';
import { defineScene } from '../../define';
import { clamp01, ease, glyphPixels, INK_TONE, inkRevealMaterial, petalGeometry, roofGeometry, type Env, type V3, WRITING_RED } from '../../../cinemaKit';
import { FIGURE_H, FIGURE_W } from '../../../brush';
import { drawDan, drawGentleman } from './figures';

/*
 * Chapter 1, paragraph 2, painted in ink (水墨). The kit's ink pass reads brightness as ink
 * density, so the sets are built from flat washes: near-white is bare paper, dark grey is thick
 * ink, and white fog fades distance into the paper. Only the lanterns and the seal carry colour.
 */

// The gallery sits at the origin; the other sets are placed far away and shown one at a time.
const SET = { garden: 400, glyph: 800 };
/** The ten kinds of gentlemen, in the passage's order. */
const KINDS = ['正', '上', '高', '逸', '华', '豪', '狂', '趣', '和', '乐'];
// Bays run right to left, the way a handscroll is unrolled; the camera spends STEP seconds on each.
const BAY = 10, STEP = 1.9;
const bayX = (k: number) => 45 - k * BAY;
/** When the camera settles on a bay and its lantern is inked in vermilion. */
const litAt = (k: number) => k === 0 ? 0.3 : STEP * k - 0.2;
const danAt = (k: number) => 19.5 + k * 0.55;

// Ink tones, from thick ink to the palest wash (墨分五色).
const TONE = INK_TONE;

const ENV = [
  // The gallery: a blank paper sky; mist turns the bamboo behind the wall to pale ink.
  { top: 0xf4f0e8, horizon: 0xf4f0e8, glow: 0x000000, moon: [0.35, 0.6, 1], moonSize: 0.03, moonGain: 0, bloom: 0, stars: 0, fog: 0xf4f0e8, density: 0.07 },
  // The garden: a light wash of cloud with the moon left as bare paper (烘云托月).
  { top: 0xb4ada3, horizon: 0xe6e1d8, glow: 0x000000, moon: [0.3, 0.24, -1], moonSize: 0.06, moonGain: 0.62, bloom: 0, stars: 0, fog: 0xece8e0, density: 0.028 },
  { top: 0xf4f0e8, horizon: 0xf4f0e8, glow: 0x000000, moon: [0, -1, 0], moonSize: 0.01, moonGain: 0, bloom: 0, stars: 0, fog: 0xf4f0e8, density: 0 },
] as const satisfies readonly Env[];

// Pear blossom painted in outline (圈花): a paper-white five-lobed flower ringed in ink.
const blossomVertex = /* glsl */`
  attribute float aSize, aSeed;
  uniform float uScale;
  varying float vSeed;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(72.0, aSize * uScale / -mv.z);
    vSeed = aSeed;
  }`;
const blossomFragment = /* glsl */`
  uniform vec3 uInk, uPaper;
  varying float vSeed;
  void main() {
    vec2 p = gl_PointCoord - 0.5;
    float r = length(p) * 2.0;
    float lobe = 0.84 + 0.14 * cos(5.0 * atan(p.y, p.x) + vSeed * 6.283);
    if (r > lobe) discard;
    gl_FragColor = vec4(mix(uPaper, uInk, smoothstep(lobe - 0.2, lobe - 0.06, r) * 0.75), 1.0);
  }`;
// Thick ink (the gentlemen) and pale wash (the performers) each settle into 情, then become one.
const pairVertex = /* glsl */`
  attribute vec3 aStart, aColor;
  attribute vec2 aGlyph;
  attribute float aSide, aSeed;
  uniform float uTime, uScale, uPair, uSmall, uBig, uPortrait;
  uniform vec3 uInk;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float s = uTime - 29.0;
    float side = aSide > 0.5 ? 1.0 : -1.0;
    // Ink is flicked in from below left; the wash drifts down from above right.
    vec3 drift = aStart + vec3(sin(aSeed * 20.0 + uTime * 0.6) * 0.5, -side * s * 1.1, cos(aSeed * 13.0 + uTime * 0.5) * 0.5);
    vec2 offset = uPortrait > 0.5 ? vec2(0.0, -side * uPair) : vec2(side * uPair, 0.0);
    vec3 two = vec3(offset + aGlyph * uSmall, (aSeed - 0.5) * 0.6);
    vec3 one = vec3(aGlyph * uBig, (aSeed - 0.5) * 1.4);
    float gather = smoothstep(0.0, 1.0, clamp((s - 0.3 - aSeed * 1.0) / 1.8, 0.0, 1.0));
    float merge = smoothstep(0.0, 1.0, clamp((s - 3.4 - aSeed * 0.7) / 1.8, 0.0, 1.0));
    vec3 p = mix(mix(drift, two, gather), one, merge);
    p += vec3(sin(uTime * 2.0 + aSeed * 50.0), cos(uTime * 1.7 + aSeed * 31.0), 0.0) * 0.02;
    vColor = mix(aColor, uInk, merge);
    vAlpha = mix(0.18, 0.42, gather);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(64.0, mix(1.0, 0.72, gather) * uScale / -mv.z);
  }`;
const pairFragment = /* glsl */`
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(vColor, vAlpha * (1.0 - smoothstep(0.0, 1.0, r)));
  }`;

/** Chapter 1, paragraph 2: ten kinds of gentlemen, ten leading performers, and one word for them all. */
export default defineScene({
  seed: 20260926,
  build: ({ scene, camera, rand, shared, ink, group, mesh, box, canvasTexture, glyph, lantern, path, setEnv, portrait }, story) => {
    const matrix = new THREE.Matrix4(), quaternion = new THREE.Quaternion(), euler = new THREE.Euler();
    const place = new THREE.Vector3(), size = new THREE.Vector3(1, 1, 1);
    const tone = (hex: number, extra: THREE.MeshBasicMaterialParameters = {}) => new THREE.MeshBasicMaterial({ color: hex, ...extra });
    const inkColor = new THREE.Color(TONE.thick), paperColor = new THREE.Color(TONE.paper);
    const figureCanvas = () => { const canvas = document.createElement('canvas'); canvas.width = FIGURE_W; canvas.height = FIGURE_H; return canvas; };
    const blossoms = (parent: THREE.Object3D, entries: [V3, number][]) => {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(entries.flatMap(([p]) => p)), 3));
      geometry.setAttribute('aSize', new THREE.BufferAttribute(new Float32Array(entries.map(([, s]) => s)), 1));
      geometry.setAttribute('aSeed', new THREE.BufferAttribute(new Float32Array(entries.map(() => rand())), 1));
      const points = new THREE.Points(geometry, new THREE.ShaderMaterial({
        uniforms: { uScale: shared.uScale, uInk: { value: inkColor }, uPaper: { value: paperColor } },
        vertexShader: blossomVertex, fragmentShader: blossomFragment,
      }));
      points.frustumCulled = false; parent.add(points);
    };

    // --- Shots 1–2: the gallery of ten lanterns --------------------------------------------
    const gallery = group(scene);
    const timber = tone(TONE.thick);
    box(gallery, tone(TONE.wash), [0, -0.1, 0], [112, 0.2, 7.4]);
    // One bay of wall, repeated: bare plaster, a latticed round window open to the mist, a hanging scroll.
    const wallCanvas = document.createElement('canvas'); wallCanvas.width = 1024; wallCanvas.height = 400;
    {
      const ctx = wallCanvas.getContext('2d')!;
      ctx.fillStyle = '#f2ede3'; ctx.fillRect(0, 0, 1024, 400);
      ctx.fillStyle = '#b9b2a8'; ctx.fillRect(0, 356, 1024, 44);
      const [cx, cy, r] = [242, 180, 118];
      ctx.save(); ctx.globalCompositeOperation = 'destination-out'; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
      ctx.strokeStyle = '#3b342e'; ctx.lineWidth = 5;
      for (let d = -2 * r; d <= 2 * r; d += 38) {
        ctx.beginPath(); ctx.moveTo(cx + d - r, cy - r); ctx.lineTo(cx + d + r, cy + r); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx + d + r, cy - r); ctx.lineTo(cx + d - r, cy + r); ctx.stroke();
      }
      ctx.restore();
      ctx.strokeStyle = '#2f2a26'; ctx.lineWidth = 12; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
      // A hanging scroll with a few strokes of distant mountains.
      ctx.fillStyle = '#6e655c'; ctx.fillRect(842, 40, 108, 246);
      ctx.fillStyle = '#efe9de'; ctx.fillRect(852, 56, 88, 214);
      ctx.strokeStyle = '#4a433d'; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(858, 220); ctx.quadraticCurveTo(880, 150, 900, 190); ctx.quadraticCurveTo(916, 130, 934, 210); ctx.stroke();
      ctx.fillStyle = 'rgba(80,72,64,0.25)'; ctx.beginPath(); ctx.moveTo(858, 222); ctx.quadraticCurveTo(880, 160, 900, 196); ctx.quadraticCurveTo(916, 142, 934, 212); ctx.fill();
      ctx.beginPath(); ctx.moveTo(870, 244); ctx.lineTo(928, 244); ctx.stroke();
    }
    const wallTexture = canvasTexture(wallCanvas);
    wallTexture.wrapS = THREE.RepeatWrapping; wallTexture.repeat.set(10, 1);
    mesh(new THREE.PlaneGeometry(100, 3.9), tone(0xffffff, { map: wallTexture, alphaTest: 0.5, side: THREE.DoubleSide }), gallery, 0, 1.95, -3);
    mesh(roofGeometry(112, 7.4, 1.1, new THREE.Color(TONE.dark)), tone(0xffffff, { vertexColors: true, side: THREE.DoubleSide }), gallery, 0, 3.92, -0.1);
    box(gallery, timber, [0, 3.82, 2.8], [112, 0.22, 0.2]);
    // Close both ends of the gallery so the first and last bays don't open onto blank paper.
    for (const x of [-50.1, 50.1]) box(gallery, tone(0xece6db), [x, 1.95, -0.1], [0.2, 3.9, 5.9]);
    for (let j = 0; j <= 10; j++) for (const z of [2.8, -2.85]) mesh(new THREE.CylinderGeometry(0.12, 0.13, 3.9, 12), timber, gallery, 50 - j * BAY, 1.95, z);
    // A low railing marks the edge of the gallery nearest the viewer.
    box(gallery, timber, [0, 0.56, 2.6], [112, 0.06, 0.06]);
    box(gallery, timber, [0, 0.1, 2.6], [112, 0.06, 0.06]);
    const balusters = new THREE.InstancedMesh(new THREE.BoxGeometry(0.03, 0.46, 0.03), timber, 240);
    for (let i = 0; i < 240; i++) balusters.setMatrixAt(i, matrix.makeTranslation(-54 + i * 0.45, 0.33, 2.6));
    gallery.add(balusters);
    // Bamboo beyond the wall, softened by mist, seen through the lattice windows.
    const bambooLeaves: THREE.Matrix4[] = [];
    for (let i = 0; i < 50; i++) {
      const x = -52 + rand() * 104, z = -4.4 - rand() * 2.6;
      mesh(new THREE.CylinderGeometry(0.035, 0.05, 7, 6), ink, gallery, x, 3.5, z).rotation.z = (rand() - 0.5) * 0.12;
      for (let k = 0; k < 24; k++) {
        quaternion.setFromEuler(euler.set(rand() * 2 - 1, rand() * Math.PI * 2, 0.6 + rand() * 0.9));
        bambooLeaves.push(new THREE.Matrix4().compose(place.set(x + (rand() - 0.5) * 1.3, 0.8 + rand() * 4.5, z + (rand() - 0.5) * 1.2), quaternion, size));
      }
    }
    const leaves = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.4, 0.06), ink, bambooLeaves.length);
    bambooLeaves.forEach((m, i) => leaves.setMatrixAt(i, m)); gallery.add(leaves);

    // Each bay: a paper lantern bearing its character, and a gentleman who seeps into the paper as it is inked.
    const lanternCanvas = (char: string, lit: boolean) => {
      const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 192;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = lit ? '#c23a26' : '#efe9dd'; ctx.fillRect(0, 0, 512, 192);
      ctx.strokeStyle = lit ? 'rgba(90,20,10,0.4)' : 'rgba(120,112,102,0.5)'; ctx.lineWidth = 2;
      for (let y = 16; y < 192; y += 22) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(512, y); ctx.stroke(); }
      ctx.fillStyle = lit ? '#1b120e' : '#8a8279'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = 'bold 128px "KaiTi", "STKaiti", "Kaiti SC", "Noto Serif SC", serif';
      ctx.fillText(char, 256, 100);
      return canvasTexture(canvas, true);
    };
    const bays = KINDS.map((char, k) => {
      const x = bayX(k);
      const hang = group(gallery, x + 1.3, 3.0, 0.9);
      // The cylinder's texture centre faces -z; turn it to face the viewer.
      mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.72, 32, 1, true), tone(0xffffff, { map: lanternCanvas(char, false), fog: false }), hang).rotation.y = Math.PI;
      const lamp = tone(0xffffff, { map: lanternCanvas(char, true), fog: false, transparent: true, opacity: 0 });
      mesh(new THREE.CylinderGeometry(0.303, 0.303, 0.72, 32, 1, true), lamp, hang).rotation.y = Math.PI;
      for (const y of [0.39, -0.39]) mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.06, 20), timber, hang, 0, y, 0);
      mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.45, 4), timber, hang, 0, 0.64, 0);
      mesh(new THREE.CylinderGeometry(0.035, 0.008, 0.3, 6), timber, hang, 0, -0.57, 0);
      const figure = figureCanvas();
      const figureTexture = canvasTexture(figure);
      const figureMaterial = inkRevealMaterial(figureTexture);
      mesh(new THREE.PlaneGeometry(1.6, 3.2), figureMaterial, gallery, x + 0.2, 1.6, -0.6);
      drawGentleman(figure.getContext('2d')!, k, 0);
      return { lamp, figure, figureTexture, figureMaterial, hang };
    });

    // --- Shot 3: the Pear Garden ------------------------------------------------------------
    const garden = group(scene, SET.garden);
    // Water is left as paper, crossed by a few horizontal brush strokes.
    const waterCanvas = document.createElement('canvas'); waterCanvas.width = 512; waterCanvas.height = 512;
    {
      const ctx = waterCanvas.getContext('2d')!;
      ctx.fillStyle = '#efeae1'; ctx.fillRect(0, 0, 512, 512);
      for (let i = 0; i < 70; i++) {
        const y = rand() * 512, x = rand() * 512, w = 30 + rand() * 120;
        ctx.strokeStyle = `rgba(70,62,56,${0.12 + rand() * 0.25})`; ctx.lineWidth = 1 + rand() * 2.5;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + w / 2, y + (rand() - 0.5) * 6, x + w, y); ctx.stroke();
      }
    }
    const waterTexture = canvasTexture(waterCanvas);
    waterTexture.wrapS = waterTexture.wrapT = THREE.RepeatWrapping; waterTexture.repeat.set(12, 12);
    // No depth write, so the reflections drawn after it stay visible.
    mesh(new THREE.PlaneGeometry(300, 300).rotateX(-Math.PI / 2), tone(0xffffff, { map: waterTexture, depthWrite: false }), garden);
    // Far hills in two washes, the farther paler (远山淡).
    [[-70, TONE.pale, 7], [-45, TONE.mid, 4]].forEach(([z, color, height]) => {
      const shape = new THREE.Shape(); shape.moveTo(-160, -5);
      for (let x = -160; x <= 160; x += 6) shape.lineTo(x, 2 + height * (0.6 + 0.4 * Math.sin(x * 0.045 + z) + 0.25 * Math.sin(x * 0.13)));
      shape.lineTo(160, -5);
      mesh(new THREE.ShapeGeometry(shape), tone(color), garden, 0, 0, z);
    });
    const stageWood = tone(TONE.dark);
    box(garden, stageWood, [0, 0.78, 0], [22, 0.3, 4.4]);
    box(garden, tone(TONE.thick), [0, 0.5, 2.2], [22, 0.5, 0.1]);
    for (let x = -10.5; x <= 10.6; x += 3) for (const z of [-2, 2]) mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.8, 8), stageWood, garden, x, 0.25, z);
    for (const x of [-11.2, 11.2]) for (const z of [-2, 2]) mesh(new THREE.CylinderGeometry(0.13, 0.14, 3.8, 12), timber, garden, x, 2.8, z);
    box(garden, timber, [0, 4.6, 2.05], [22.8, 0.24, 0.22]);
    mesh(roofGeometry(24.5, 5.6, 1.4, new THREE.Color(TONE.dark)), tone(0xffffff, { vertexColors: true, side: THREE.DoubleSide }), garden, 0, 4.72, 0);
    for (let x = -9; x <= 9.1; x += 3) lantern(garden, [x, 4.0, 2.05], 0.8);
    // A plain paper screen behind the performers, so each reads as a brushed silhouette.
    mesh(new THREE.PlaneGeometry(22, 2.9), tone(0xf7f3eb), garden, 0, 0.93 + 1.45, -1.95);
    // Pear trees: ink trunks and branches, blossoms in outline.
    const flowers: [V3, number][] = [];
    const tree = (base: V3, height: number) => {
      const top = new THREE.Vector3(base[0] + (rand() - 0.5) * 0.8, height, base[2]);
      mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(...base), new THREE.Vector3(base[0] + (rand() - 0.5) * 0.5, height * 0.5, base[2]), top]), 12, 0.13, 6), ink, garden);
      for (let b = 0; b < 5; b++) {
        const a = b / 5 * Math.PI * 2 + rand();
        const tip = top.clone().add(new THREE.Vector3(Math.cos(a) * (1.4 + rand()), 0.6 + rand() * 1.2, Math.sin(a) * (1 + rand() * 0.6)));
        mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([top, top.clone().lerp(tip, 0.5).add(new THREE.Vector3(0, 0.3, 0)), tip]), 8, 0.05, 5), ink, garden);
        for (let i = 0; i < 45; i++) flowers.push([tip.clone().add(new THREE.Vector3(rand() - 0.5, rand() - 0.5, rand() - 0.5).multiplyScalar(2)).toArray() as V3, 0.26 + rand() * 0.08]);
      }
    };
    for (let i = 0; i < 9; i++) tree([-16 + i * 4 + (rand() - 0.5) * 2, 0, -4 - rand() * 7], 3.2 + rand() * 1.4);
    for (const x of [-14.5, 14.5]) tree([x, 0, 1.5], 3.6);
    // A branch close to the lens opens the shot.
    const near = new THREE.CatmullRomCurve3([new THREE.Vector3(11, 4.7, 5.4), new THREE.Vector3(9.4, 3.95, 4.7), new THREE.Vector3(7.6, 3.45, 4.2)]);
    mesh(new THREE.TubeGeometry(near, 16, 0.035, 5), tone(TONE.thick), garden);
    for (let i = 0; i < 40; i++) flowers.push([near.getPoint(rand()).add(new THREE.Vector3((rand() - 0.5) * 0.5, (rand() - 0.5) * 0.4, (rand() - 0.5) * 0.3)).toArray() as V3, 0.09 + rand() * 0.04]);
    blossoms(garden, flowers);
    // Ten dan performers along the stage edge, with pale reflections in the water.
    const performers = Array.from({ length: 10 }, (_, k) => {
      const x = 9 - k * 2;
      const canvas = figureCanvas();
      const texture = canvasTexture(canvas);
      const material = inkRevealMaterial(texture);
      mesh(new THREE.PlaneGeometry(1.05, 2.1), material, garden, x, 0.93 + 1.05, 0.3);
      const echo = inkRevealMaterial(texture);
      echo.uniforms.uOpacity.value = 0.7;
      const reflection = mesh(new THREE.PlaneGeometry(1.05, 2.1), echo, garden, x, -0.93 - 1.05, 0.3);
      reflection.scale.y = -1;
      return { canvas, texture, material, echo };
    });
    const pearPetals = new THREE.InstancedMesh(petalGeometry(0.07, 0.08, TONE.wash, 0xfbf8f2), new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide }), 160);
    const petalSeeds = Array.from({ length: 160 }, () => [rand(), rand(), rand(), rand()]);
    garden.add(pearPetals);

    // --- Shot 4: one word ---------------------------------------------------------------------
    const glyphSet = group(scene, SET.glyph);
    const pairUniforms = { uTime: shared.uTime, uScale: shared.uScale, uPair: { value: 9 }, uSmall: { value: 13 }, uBig: { value: 20 }, uPortrait: { value: 0 }, uInk: { value: inkColor } };
    {
      const sample = glyphPixels('情', rand);
      const count = 8000, geometry = new THREE.BufferGeometry();
      const start = new Float32Array(count * 3), glyph = new Float32Array(count * 2), colors = new Float32Array(count * 3);
      const side = new Float32Array(count), seed = new Float32Array(count);
      const thick = new THREE.Color(TONE.thick), pale = new THREE.Color(TONE.mid);
      for (let i = 0; i < count; i++) {
        const wash = i % 2;
        glyph.set(sample(), i * 2);
        start.set(wash ? [5 + rand() * 30, 6 + rand() * 18, -rand() * 20 + 4] : [-5 - rand() * 30, -24 + rand() * 18, -rand() * 20 + 4], i * 3);
        (wash ? pale : thick).toArray(colors, i * 3);
        side[i] = wash; seed[i] = rand();
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(start, 3));
      geometry.setAttribute('aStart', new THREE.BufferAttribute(start, 3));
      geometry.setAttribute('aGlyph', new THREE.BufferAttribute(glyph, 2));
      geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('aSide', new THREE.BufferAttribute(side, 1));
      geometry.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
      const points = new THREE.Points(geometry, new THREE.ShaderMaterial({
        uniforms: pairUniforms, vertexShader: pairVertex, fragmentShader: pairFragment, transparent: true, depthWrite: false,
      }));
      points.frustumCulled = false; glyphSet.add(points);
    }
    const sealCanvas = document.createElement('canvas'); sealCanvas.width = sealCanvas.height = 128;
    {
      const ctx = sealCanvas.getContext('2d')!;
      ctx.fillStyle = WRITING_RED; ctx.fillRect(6, 6, 116, 116);
      ctx.fillStyle = '#f4ece0'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = 'bold 50px "KaiTi", "STKaiti", "Noto Serif SC", serif';
      ctx.fillText('品', 64, 38); ctx.fillText('花', 64, 92);
    }
    const sealMaterial = tone(0xffffff, { map: canvasTexture(sealCanvas, true), transparent: true, opacity: 0, fog: false });
    const seal = mesh(new THREE.PlaneGeometry(1.8, 1.8), sealMaterial, glyphSet, 0, 0, 1);
    // Once ink and wash have merged, the word settles in crisp brushwork over them.
    const word = glyph(glyphSet, '情');
    word.mesh.position.z = 0.9;

    // --- Direction ----------------------------------------------------------------------------
    const gardenShot = path([
      [19, [SET.garden + 7.2, 2.2, 4.8], [SET.garden + 6.2, 1.9, 0]],
      [23.5, [SET.garden + 3, 2.4, 10.5], [SET.garden + 1.5, 1.9, 0]],
      [29, [SET.garden, 2.6, 17], [SET.garden, 1.6, 0]],
    ]);
    const sets = [gallery, gallery, garden, glyphSet];
    const envs = [ENV[0], ENV[0], ENV[1], ENV[2]];
    return (seconds: number, shot: number) => {
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
          bay.lamp.opacity = ease((seconds - litAt(i)) / 0.6);
          bay.hang.rotation.z = Math.sin(seconds * 0.8 + i) * 0.03;
          bay.figureMaterial.uniforms.uReveal.value = ease((seconds - litAt(i) - 0.1) / 1.1);
          if (Math.abs(at - i) < 1.6) {
            drawGentleman(bay.figure.getContext('2d')!, i, seconds);
            bay.figureTexture.needsUpdate = true;
          }
        });
      } else if (shot === 2) {
        gardenShot(seconds);
        performers.forEach((performer, k) => {
          const reveal = ease((seconds - danAt(k)) / 0.9);
          performer.material.uniforms.uReveal.value = reveal;
          performer.echo.uniforms.uReveal.value = reveal;
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
        const s = clamp01((seconds - story.shots[3].start) / 7);
        camera.position.set(SET.glyph + Math.sin(s * 1.4) * 3, 0.6, (isPortrait ? 62 : 44) - ease(s) * 8);
        camera.lookAt(SET.glyph, 0, 0);
        pairUniforms.uPortrait.value = isPortrait ? 1 : 0;
        const big = pairUniforms.uBig.value;
        seal.position.set(big * 0.42, -big * 0.42, 1);
        word.mesh.scale.setScalar(big);
        word.material.uniforms.uReveal.value = ease((seconds - 34) / 1);
        sealMaterial.opacity = ease((seconds - 34.4) / 0.5);
        seal.scale.setScalar(1 + 0.4 * (1 - ease((seconds - 34.4) / 0.35)));
      }
    };
  },
});
