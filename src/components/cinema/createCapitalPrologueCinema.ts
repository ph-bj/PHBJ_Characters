import * as THREE from 'three';
import type { Cinema } from './createParagraphCinema';
import { CINEMA_DURATION } from './paragraphScene';
import { capitalPrologueShotAt } from './capitalPrologueStory';

/** A staged prologue: the city's spectacle, its audience, dignity, then the author's page. */
export function createCapitalPrologueCinema(
  host: HTMLDivElement,
  onProgress: (seconds: number) => void,
  onError: () => void,
): Cinema {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  renderer.domElement.style.cssText = 'width:100%;height:100%;display:block';
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x101e30);
  scene.fog = new THREE.FogExp2(0x162739, 0.014);
  const camera = new THREE.PerspectiveCamera(43, 1, 0.1, 150);
  const geometries = new Set<THREE.BufferGeometry>();
  const materials = new Set<THREE.Material>();
  const textures = new Set<THREE.Texture>();
  let disposed = false;
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
    geometries.forEach(geometry => geometry.dispose());
    materials.forEach(material => material.dispose());
    textures.forEach(texture => texture.dispose());
    renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove();
  };
  let playing = false, seconds = 0, previous = 0, report = -1;
  try {
    const material = (color: number, extra: THREE.MeshStandardMaterialParameters = {}) => {
      const value = new THREE.MeshStandardMaterial({ color, roughness: 0.75, ...extra });
      materials.add(value); return value;
    };
    const wood = material(0x49262a), darkWood = material(0x231f26), gold = material(0xb88b4b, { metalness: 0.4, roughness: 0.4 });
    const plaster = material(0x8c9597), roofInk = material(0x213744), roofGold = material(0x8e6e42);
    const vermilion = material(0x7d2936), cream = material(0xede0c2), jade = material(0x729f9c);
    const stone = material(0x485763), skin = material(0xe3bd99), hair = material(0x171922);
    const whiteSilk = material(0xf1e8d5), roseSilk = material(0xc37d85), blueSilk = material(0x638891);
    const lamp = material(0xffd796, { emissive: 0xffa149, emissiveIntensity: 2 });
    const sphere = new THREE.SphereGeometry(1, 16, 12);
    const cube = new THREE.BoxGeometry(1, 1, 1);
    const tube = new THREE.CylinderGeometry(1, 1, 1, 10);
    geometries.add(sphere); geometries.add(cube); geometries.add(tube);
    const add = (geometry: THREE.BufferGeometry, mat: THREE.Material, parent: THREE.Object3D, x = 0, y = 0, z = 0) => {
      geometries.add(geometry);
      const object = new THREE.Mesh(geometry, mat);
      object.position.set(x, y, z); object.castShadow = true; object.receiveShadow = true;
      parent.add(object); return object;
    };
    const box = (parent: THREE.Object3D, x: number, y: number, z: number, w: number, h: number, d: number, mat = wood) => {
      const object = add(cube, mat, parent, x, y, z); object.scale.set(w, h, d); return object;
    };
    const ball = (parent: THREE.Object3D, x: number, y: number, z: number, w: number, h: number, d: number, mat: THREE.Material) => {
      const object = add(sphere, mat, parent, x, y, z); object.scale.set(w, h, d); return object;
    };
    const rod = (parent: THREE.Object3D, x: number, y: number, z: number, r: number, height: number, mat = wood) => {
      const object = add(tube, mat, parent, x, y, z); object.scale.set(r, height, r); return object;
    };
    const group = (parent: THREE.Object3D, x = 0, y = 0, z = 0) => {
      const value = new THREE.Group(); value.position.set(x, y, z); parent.add(value); return value;
    };
    const texture = (canvas: HTMLCanvasElement) => {
      const value = new THREE.CanvasTexture(canvas); value.colorSpace = THREE.SRGBColorSpace; textures.add(value); return value;
    };
    const glowCanvas = document.createElement('canvas'); glowCanvas.width = glowCanvas.height = 64;
    const glowContext = glowCanvas.getContext('2d')!;
    const gradient = glowContext.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, '#ffe5b1'); gradient.addColorStop(0.18, '#ffc478aa'); gradient.addColorStop(1, '#ffae4200');
    glowContext.fillStyle = gradient; glowContext.fillRect(0, 0, 64, 64);
    const glowMaterial = new THREE.SpriteMaterial({ map: texture(glowCanvas), blending: THREE.AdditiveBlending, transparent: true, opacity: 0.6, depthWrite: false });
    materials.add(glowMaterial);
    const lanterns: THREE.Group[] = [];
    function lantern(parent: THREE.Object3D, x: number, y: number, z: number, scale = 1) {
      const g = group(parent, x, y, z); g.scale.setScalar(scale); lanterns.push(g);
      rod(g, 0, 0.48, 0, 0.012, 0.6, gold);
      ball(g, 0, 0, 0, 0.28, 0.38, 0.28, lamp);
      for (let i = 0; i < 6; i++) {
        const angle = i * Math.PI / 3;
        const rib = rod(g, Math.cos(angle) * 0.27, 0, Math.sin(angle) * 0.27, 0.009, 0.52, gold);
        rib.castShadow = false;
      }
      rod(g, 0, 0.36, 0, 0.18, 0.06, gold); rod(g, 0, -0.36, 0, 0.18, 0.06, gold);
      rod(g, 0, -0.56, 0, 0.018, 0.3, vermilion);
      const glow = new THREE.Sprite(glowMaterial); glow.scale.set(2, 2, 1); g.add(glow);
    }
    function roof(parent: THREE.Object3D, y: number, width: number, depth: number, mat = roofInk) {
      const vertices: number[] = [], indices: number[] = [];
      const nx = 20, nz = 16;
      for (let iz = 0; iz <= nz; iz++) for (let ix = 0; ix <= nx; ix++) {
        const u = ix / nx * 2 - 1, v = iz / nz * 2 - 1;
        const rise = (1 - Math.abs(v)) ** 1.6 * depth * 0.23 + Math.abs(v) ** 9 * 0.25 + Math.abs(u) ** 8 * Math.abs(v) ** 4 * 0.3;
        vertices.push(u * width / 2, y + rise, v * depth / 2);
        if (ix < nx && iz < nz) {
          const a = iz * (nx + 1) + ix, b = a + nx + 1;
          indices.push(a, b, a + 1, a + 1, b, b + 1);
        }
      }
      const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3)); geometry.setIndex(indices); geometry.computeVertexNormals();
      add(geometry, mat, parent);
      box(parent, 0, y + depth * 0.23, 0, width * 0.9, 0.13, 0.17, gold);
      for (const side of [-1, 1]) {
        const points: THREE.Vector3[] = [];
        for (let i = 0; i <= 20; i++) { const u = i / 10 - 1; points.push(new THREE.Vector3(u * width / 2, y + 0.25 + Math.abs(u) ** 8 * 0.3, side * depth / 2)); }
        add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 24, 0.055, 5, false), gold, parent);
      }
    }
    function plaque(parent: THREE.Object3D, text: string, y: number, z: number) {
      const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 128;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#29222a'; ctx.fillRect(0, 0, 512, 128);
      ctx.strokeStyle = '#ba9356'; ctx.lineWidth = 8; ctx.strokeRect(8, 8, 496, 112);
      ctx.font = '64px "Noto Serif SC", "Songti SC", serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#e0bf82'; ctx.fillText(text, 256, 66);
      const mat = material(0xffffff, { map: texture(canvas), roughness: 1 });
      add(new THREE.PlaneGeometry(3.4, 0.85), mat, parent, 0, y, z);
    }
    function facade(x: number, z: number, width = 5, height = 5, palace = false) {
      const g = group(scene, x, 0, z);
      box(g, 0, height / 2, 0, width, height, 4, palace ? vermilion : plaster);
      for (const px of [-width * 0.42, width * 0.42]) rod(g, px, height / 2, 2.12, 0.12, height, wood);
      box(g, 0, 1.15, 2.02, 1.4, 2.3, 0.15, darkWood);
      for (const px of [-width * 0.3, width * 0.3]) {
        box(g, px, height * 0.66, 2.04, 1.15, 1.45, 0.12, material(0xe5b775, { emissive: 0xc4823b, emissiveIntensity: 0.5 }));
        for (let i = 0; i < 4; i++) box(g, px - 0.48 + i * 0.32, height * 0.66, 2.13, 0.035, 1.5, 0.04, wood);
        box(g, px, height * 0.66, 2.14, 1.2, 0.04, 0.04, wood);
      }
      roof(g, height, width + 1.5, 5.2, palace ? roofGold : roofInk);
      lantern(g, -width * 0.35, height - 0.6, 2.65, 0.8);
      lantern(g, width * 0.35, height - 0.6, 2.65, 0.8);
      return g;
    }

    scene.add(new THREE.HemisphereLight(0x9bbfdf, 0x3d2928, 1.45));
    const moonlight = new THREE.DirectionalLight(0x9abce2, 2.3); moonlight.position.set(-12, 22, 4); scene.add(moonlight);
    moonlight.castShadow = true; moonlight.shadow.mapSize.set(1024, 1024);
    Object.assign(moonlight.shadow.camera, { left: -22, right: 22, top: 22, bottom: -22, near: 1, far: 70 });
    moonlight.shadow.normalBias = 0.04;
    const moon = ball(scene, -18, 21, -44, 1.45, 1.45, 1.45, lamp); moon.castShadow = false;
    const moonGlow = new THREE.Sprite(glowMaterial); moonGlow.position.copy(moon.position); moonGlow.scale.setScalar(8); scene.add(moonGlow);
    box(scene, 0, -0.17, 0, 80, 0.3, 100, stone);
    const paving = material(0x6c7377);
    // A processional street opens onto an inhabited theatre court.
    for (let z = -18; z < 24; z += 1.8) for (const x of [-3.1, -1.05, 1.05, 3.1]) box(scene, x, 0, z, 1.98, 0.025, 1.72, paving);
    for (const side of [-1, 1]) for (let i = 0; i < 5; i++) facade(side * (11.2 + i % 2 * 0.5), 13 - i * 8, 5.7, 4.4 + i % 2 * 1.5);
    box(scene, 0, 3.2, -33, 46, 6.4, 2, material(0x334754));
    facade(0, -31, 11, 9, true);
    for (const x of [-18, -9, 9, 18]) facade(x, -36, 6, 7, true);
    for (let i = 0; i < 7; i++) {
      lantern(scene, (i - 3) * 2.5, 6.6 - Math.sin(i / 6 * Math.PI) * 0.8, 10);
      lantern(scene, (i - 3) * 2.3, 7.5 - Math.sin(i / 6 * Math.PI) * 0.8, -1);
    }
    for (const z of [10, -1]) {
      const points = Array.from({ length: 17 }, (_, i) => new THREE.Vector3((i - 8), 7.1 - Math.sin(i / 16 * Math.PI) * 0.8 + (z === -1 ? 0.9 : 0), z));
      add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 24, 0.012, 4, false), darkWood, scene);
    }
    const stage = group(scene, 0, 0, -10);
    box(stage, 0, 0.65, 0, 10, 1.3, 6.6, wood);
    for (let i = 0; i < 4; i++) box(stage, 0, 0.15 + i * 0.3, 4.55 - i * 0.4, 8, 0.3, 0.5, stone);
    for (const x of [-4.5, 4.5]) for (const z of [-2.8, 2.8]) {
      rod(stage, x, 3.7, z, 0.17, 5.3, vermilion);
      rod(stage, x, 1.6, z, 0.23, 0.45, gold);
    }
    box(stage, 0, 6.1, 2.8, 9.6, 0.5, 0.4, wood);
    roof(stage, 6.35, 11.5, 8);
    box(stage, 0, 3.8, -2.8, 9, 5.1, 0.2, vermilion);
    for (const x of [-3.7, 3.7]) for (let i = 0; i < 7; i++) {
      const curtain = rod(stage, x + (i - 3) * 0.19, 3.7, 2.1, 0.16, 4.7, vermilion);
      curtain.scale.x *= 0.85;
    }
    plaque(stage, '歌台舞榭', 5.88, 3.03);
    for (const x of [-3, -1, 1, 3]) lantern(stage, x, 5.05, 1.5, 0.75);
    for (let i = 0; i < 13; i++) box(stage, (i - 6) * 0.64, 1.31, 0, 0.61, 0.025, 6.1, i % 2 ? wood : darkWood);
    const stageLight = new THREE.SpotLight(0xffd39a, 155, 30, Math.PI / 3, 0.75, 1.2);
    stageLight.position.set(0, 7, -3); stageLight.target.position.set(0, 1.8, -9); scene.add(stageLight, stageLight.target);
    for (const x of [-6, 6]) {
      const light = new THREE.PointLight(0xffb96d, 38, 17, 1.6); light.position.set(x, 4, 0); scene.add(light);
    }

    type Figure = { root: THREE.Group; torso: THREE.Group; left: THREE.Group; right: THREE.Group; phase: number };
    const dancers: Figure[] = [], walkers: Figure[] = [], spectators: Figure[] = [];
    const ribbons: { geometry: THREE.BufferGeometry; phase: number }[] = [];
    function figure(parent: THREE.Object3D, x: number, z: number, robe: THREE.Material, performer = false, y = 0): Figure {
      const root = group(parent, x, y, z), torso = group(root, 0, 0.85, 0);
      add(new THREE.CylinderGeometry(0.2, 0.4, 1.05, 14), robe, root, 0, 0.55, 0);
      ball(torso, 0, 0.15, 0, 0.29, 0.34, 0.19, robe);
      ball(torso, 0, 0.69, 0, 0.18, 0.23, 0.17, skin);
      ball(torso, 0, 0.8, -0.02, 0.185, 0.15, 0.17, hair);
      if (performer) {
        for (let i = 0; i < 5; i++) ball(torso, (i - 2) * 0.075, 0.97 + (2 - Math.abs(i - 2)) * 0.06, 0, 0.04, 0.065, 0.045, gold);
        for (const side of [-1, 1]) {
          rod(torso, side * 0.2, 0.76, 0.04, 0.015, 0.33, gold);
          ball(torso, side * 0.2, 0.57, 0.04, 0.035, 0.035, 0.035, cream);
        }
      } else {
        rod(torso, 0, 0.88, -0.02, 0.18, 0.12, hair);
        ball(torso, 0, 0.99, -0.03, 0.065, 0.08, 0.065, hair);
      }
      for (const side of [-1, 1]) {
        ball(torso, side * 0.063, 0.7, 0.155, 0.023, 0.013, 0.018, hair);
        box(torso, side * 0.105, 0.34, 0.177, 0.045, 0.3, 0.035, cream).rotation.z = side * 0.5;
      }
      box(torso, 0, 0.01, 0, 0.52, 0.07, 0.39, gold);
      const arms = [-1, 1].map(side => {
        const arm = group(torso, side * 0.28, 0.27, 0);
        const sleeve = add(new THREE.CylinderGeometry(0.13, 0.22, 0.57, 12), robe, arm, 0, -0.25, 0);
        sleeve.rotation.z = side * 0.12;
        ball(arm, 0, -0.58, 0.02, 0.07, 0.09, 0.06, skin);
        arm.rotation.z = side * 0.28;
        if (performer) {
          const geometry = new THREE.BufferGeometry(); const points = new Float32Array(26 * 3); const indices: number[] = [];
          for (let i = 0; i < 12; i++) { const a = i * 2; indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
          geometry.setAttribute('position', new THREE.BufferAttribute(points, 3)); geometry.setIndex(indices);
          const sleeveMaterial = material(0xf0e9d8, { side: THREE.DoubleSide });
          add(geometry, sleeveMaterial, arm, 0, -0.55, 0);
          ribbons.push({ geometry, phase: side + x });
        }
        return arm;
      });
      return { root, torso, left: arms[0], right: arms[1], phase: x + z };
    }
    dancers.push(figure(stage, -1.45, 1, roseSilk, true, 1.34), figure(stage, 1.45, 0.35, whiteSilk, true, 1.34));
    const musician = figure(stage, -3.5, -1.35, blueSilk, false, 1.34);
    musician.root.rotation.y = 0.5;
    const drum = rod(stage, -3.2, 1.8, -0.65, 0.34, 0.46, vermilion); rod(stage, -3.2, 2.04, -0.65, 0.35, 0.03, cream);
    drum.rotation.y = 0.2;
    function table(x: number, z: number) {
      rod(scene, x, 0.97, z, 0.72, 0.12, wood);
      rod(scene, x, 0.48, z, 0.15, 0.9, darkWood);
      rod(scene, x + 0.15, 1.16, z, 0.085, 0.25, jade);
      for (const side of [-1, 1]) {
        rod(scene, x + side * 0.32, 1.07, z + 0.13, 0.065, 0.1, cream);
        const f = figure(scene, x + side * 0.9, z + 0.1, side === 1 ? blueSilk : cream);
        f.root.rotation.y = Math.PI + side * 0.5; f.root.scale.setScalar(0.88); spectators.push(f);
      }
    }
    for (const z of [0.6, 4.5, 8.3]) for (const x of [-5.4, 5.4]) table(x, z);
    const crowdColors = [blueSilk, roseSilk, cream, jade, plaster];
    for (let i = 0; i < 20; i++) {
      const side = i % 2 ? 1 : -1;
      const f = figure(scene, side * (7.1 + (i % 3) * 0.55), -14 + i * 1.7, crowdColors[i % 5]);
      f.root.rotation.y = i % 3 ? Math.PI : 0; f.root.scale.setScalar(0.75 + (i % 3) * 0.07); walkers.push(f);
    }
    // The paragraph names no individuals: these two figures embody its ethical turn.
    const gentleman = figure(scene, -1.4, -2.2, jade);
    const actor = figure(scene, 1.4, -5.4, whiteSilk, true, 0.3);
    gentleman.root.rotation.y = Math.PI / 2; actor.root.rotation.y = -Math.PI / 2;
    const dignityLight = new THREE.PointLight(0xffd7a2, 18, 10, 1.4); dignityLight.position.set(0, 3.2, -1); scene.add(dignityLight);

    // The closing image belongs to the narrator, spatially separated from the city set.
    const desk = group(scene, 60, 0, 0);
    box(desk, 0, 1.3, 0, 7.6, 0.22, 5.4, darkWood);
    for (const x of [-3.1, 3.1]) for (const z of [-2, 2]) box(desk, x, 0.65, z, 0.18, 1.3, 0.18, wood);
    const manuscript = document.createElement('canvas'); manuscript.width = 1024; manuscript.height = 768;
    const manuscriptContext = manuscript.getContext('2d')!;
    const manuscriptTexture = texture(manuscript);
    const paperMaterial = material(0xffffff, { map: manuscriptTexture, roughness: 1 });
    const paper = add(new THREE.PlaneGeometry(5.4, 3.9), paperMaterial, desk, 0, 1.43, 0); paper.rotation.x = -Math.PI / 2;
    for (const x of [-2.76, 2.76]) { const roller = rod(desk, x, 1.49, 0, 0.13, 4.15, gold); roller.rotation.x = Math.PI / 2; }
    box(desk, 3.03, 1.48, -1, 0.7, 0.14, 0.95, hair);
    box(desk, 3.03, 1.565, -1, 0.47, 0.02, 0.65, darkWood);
    const brush = group(desk, 0, 1.65, 0); brush.rotation.z = -0.35;
    rod(brush, 0, 0.65, 0, 0.045, 1.2, gold);
    add(new THREE.ConeGeometry(0.085, 0.34, 12), hair, brush, 0, -0.1, 0).rotation.z = Math.PI;
    lantern(desk, -3.1, 2.7, -1.4, 0.9);
    const deskLight = new THREE.PointLight(0xffd496, 40, 15, 1.4); deskLight.position.set(58, 5, 3); scene.add(deskLight);
    let paperStep = -1;
    const paintManuscript = (progress: number) => {
      const step = Math.round(progress * 80); if (step === paperStep) return; paperStep = step;
      const ctx = manuscriptContext;
      ctx.fillStyle = '#e4d2ac'; ctx.fillRect(0, 0, 1024, 768);
      // Ten open columns refer to the classification promised at the paragraph's end.
      ctx.strokeStyle = '#b4987077'; ctx.lineWidth = 2;
      for (let i = 0; i <= 10; i++) { ctx.beginPath(); ctx.moveTo(92 + i * 84, 72); ctx.lineTo(92 + i * 84, 696); ctx.stroke(); }
      ctx.strokeRect(70, 48, 884, 672);
      ctx.fillStyle = '#302a25'; ctx.font = '490px "Kaiti SC", "STKaiti", "Noto Serif SC", serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.save(); ctx.beginPath(); ctx.rect(210, 100, 610, 575 * progress); ctx.clip(); ctx.fillText('情', 512, 398); ctx.restore();
      if (progress > 0.94) {
        ctx.strokeStyle = '#953d35'; ctx.lineWidth = 5; ctx.strokeRect(805, 578, 78, 80);
        ctx.fillStyle = '#953d35'; ctx.font = '30px serif'; ctx.fillText('守礼', 844, 620);
      }
      manuscriptTexture.needsUpdate = true;
    };
    paintManuscript(0);
    const particleGeometry = new THREE.BufferGeometry();
    const motes = new Float32Array(240 * 3);
    for (let i = 0; i < 240; i++) { motes[i * 3] = Math.sin(i * 73.1) * 15; motes[i * 3 + 1] = ((i * 1.618) % 9) + 0.5; motes[i * 3 + 2] = Math.cos(i * 19.7) * 25; }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(motes, 3)); geometries.add(particleGeometry);
    const moteMaterial = new THREE.PointsMaterial({ color: 0xe9ba72, map: glowMaterial.map, size: 0.13, opacity: 0.55, transparent: true, depthWrite: false }); materials.add(moteMaterial);
    const particles = new THREE.Points(particleGeometry, moteMaterial); scene.add(particles);

    const from = new THREE.Vector3(), to = new THREE.Vector3(), target = new THREE.Vector3();
    const smooth = (value: number) => THREE.MathUtils.smoothstep(value, 0, 1);
    const render = () => {
      const shot = Math.max(0, capitalPrologueShotAt(seconds));
      const portrait = camera.aspect < 1.3;
      if (shot === 0) {
        const t = smooth(seconds / 9);
        from.set(portrait ? 0 : -4, 10, portrait ? 36 : 26); to.set(portrait ? 0 : -1.5, 7.4, portrait ? 29 : 18);
        camera.position.lerpVectors(from, to, t); target.set(0, 3.7, -9);
      } else if (shot === 1) {
        const t = smooth((seconds - 9) / 11);
        from.set(portrait ? -0.8 : -4.3, 4.2, portrait ? 8 : 2); to.set(portrait ? 0.8 : 3.2, 3.4, portrait ? 6 : -0.2);
        camera.position.lerpVectors(from, to, t); target.set(0, 2.8, -9);
      } else if (shot === 2) {
        const t = smooth((seconds - 20) / 9);
        from.set(portrait ? 0 : -1.6, 2.5, portrait ? 6.6 : 4.4); to.set(portrait ? 0.5 : 1.3, 2.2, portrait ? 5.3 : 3.3);
        camera.position.lerpVectors(from, to, t); target.set(0, 1.3, -2.85);
      } else {
        const t = smooth((seconds - 29) / 7);
        from.set(60.1, portrait ? 12 : 8.4, 3.7); to.set(60, portrait ? 10.8 : 7.2, 2.8);
        camera.position.lerpVectors(from, to, t); target.set(60, 1.4, 0);
      }
      camera.lookAt(target);
      lanterns.forEach((lantern, i) => { lantern.rotation.z = Math.sin(seconds * 0.65 + i * 0.4) * 0.04; });
      dancers.forEach((dancer, i) => {
        dancer.root.rotation.y = Math.sin(seconds * 0.45 + i * Math.PI) * 0.65;
        dancer.torso.rotation.z = Math.sin(seconds * 0.75 + i) * 0.08;
        dancer.left.rotation.z = -1.2 + Math.sin(seconds * 0.8 + i) * 0.5;
        dancer.right.rotation.z = 1.3 + Math.sin(seconds * 0.8 + i + 1) * 0.5;
      });
      ribbons.forEach(({ geometry, phase }) => {
        const positions = geometry.getAttribute('position');
        for (let i = 0; i <= 12; i++) {
          const t = i / 12;
          const x = Math.sin(t * 5 - seconds * 1.8 + phase) * t * 0.3;
          for (let side = 0; side < 2; side++) positions.setXYZ(i * 2 + side, x + (side - 0.5) * 0.31, -t * 1.08, Math.cos(t * 4 + seconds * 1.2 + phase) * t * 0.2);
        }
        positions.needsUpdate = true; geometry.computeVertexNormals();
      });
      walkers.forEach((walker, i) => {
        walker.root.position.z = -18 + ((i * 1.7 + seconds * (i % 2 ? 0.23 : -0.2)) % 38 + 38) % 38;
        walker.torso.rotation.z = Math.sin(seconds * 3 + i) * 0.025;
        walker.left.rotation.x = Math.sin(seconds * 3 + i) * 0.2;
        walker.right.rotation.x = -walker.left.rotation.x;
      });
      spectators.forEach((spectator, i) => { spectator.torso.rotation.y = Math.sin(seconds * 0.35 + i) * 0.12; });
      const bow = seconds >= 20 && seconds <= 29 ? Math.sin(Math.min(1, (seconds - 20) / 5) * Math.PI) * 0.2 : 0;
      gentleman.torso.rotation.x = bow; actor.torso.rotation.x = bow * 0.85;
      gentleman.left.rotation.z = -0.8; gentleman.right.rotation.z = 0.8;
      gentleman.left.rotation.x = -0.5; gentleman.right.rotation.x = -0.5;
      actor.left.rotation.z = -0.65; actor.right.rotation.z = 0.65;
      const written = THREE.MathUtils.clamp((seconds - 29.7) / 5, 0, 1);
      paintManuscript(written);
      brush.position.set(Math.sin(written * 25) * 0.9, written >= 1 ? 2.15 : 1.68, -1.2 + written * 2.7);
      particles.rotation.y = seconds * 0.008;
      renderer.render(scene, camera);
    };
    const resize = () => {
      if (disposed) return;
      const { width, height } = host.getBoundingClientRect();
      renderer.setSize(Math.max(1, width), Math.max(1, height), false);
      camera.aspect = Math.max(1, width) / Math.max(1, height); camera.updateProjectionMatrix(); render();
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
