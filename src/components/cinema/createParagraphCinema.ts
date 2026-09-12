import * as THREE from 'three';
import { createCapitalPrologueCinema } from './createCapitalPrologueCinema';
import { CINEMA_DURATION, type ScenePlan } from './paragraphScene';
export type Cinema = { setPlaying: (playing: boolean) => void; replay: () => void; seek: (seconds: number) => void; dispose: () => void };

export function createParagraphCinema(
  host: HTMLDivElement,
  plan: ScenePlan,
  castCount: number,
  onProgress: (seconds: number) => void,
  onError: () => void,
): Cinema {
  if (plan.sequence === 'capital-prologue') return createCapitalPrologueCinema(host, onProgress, onError);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  renderer.domElement.style.cssText = 'width:100%;height:100%;display:block';
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const sky = plan.night ? 0x101b29 : plan.mood === 'tense' ? 0x574c52 : 0x879b9a;
  scene.background = new THREE.Color(sky);
  scene.fog = new THREE.FogExp2(sky, 0.024);
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 120);
  scene.add(new THREE.HemisphereLight(plan.night ? 0xa7cce8 : 0xffead2, 0x262732, 2.4));
  const sun = new THREE.DirectionalLight(plan.night ? 0x9bbfea : 0xffd9a2, 3);
  sun.position.set(-8, 14, 5);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 0.5, far: 55 });
  sun.shadow.bias = -0.001;
  sun.shadow.normalBias = 0.04;
  scene.add(sun);
  let seed = plan.seed;
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  const materials = new Set<THREE.Material>();
  const geometries = new Set<THREE.BufferGeometry>();
  const mat = (color: number, extra: THREE.MeshStandardMaterialParameters = {}) => {
    const material = new THREE.MeshStandardMaterial({ color, roughness: 0.8, ...extra });
    materials.add(material);
    return material;
  };
  const ink = mat(0x243741), wood = mat(0x523a32), plaster = mat(0xc2b6a0);
  const stone = mat(0x7c8581), gold = mat(0xc0a16c, { metalness: 0.35 });
  const silk = mat(plan.mood === 'tense' ? 0x7e2837 : 0x9d4e49);
  const lanternMat = mat(0xf8bc69, { emissive: 0xff9238, emissiveIntensity: 1.8 });
  const mesh = (geometry: THREE.BufferGeometry, material: THREE.Material, x: number, y: number, z: number, parent: THREE.Object3D = scene) => {
    geometries.add(geometry);
    const object = new THREE.Mesh(geometry, material);
    object.position.set(x, y, z);
    object.castShadow = true;
    object.receiveShadow = true;
    parent.add(object);
    return object;
  };
  const box = (w: number, h: number, d: number, material: THREE.Material, x: number, y: number, z: number, parent: THREE.Object3D = scene) =>
    mesh(new THREE.BoxGeometry(w, h, d), material, x, y, z, parent);
  const cylinder = (top: number, bottom: number, h: number, material: THREE.Material, x: number, y: number, z: number, parent: THREE.Object3D = scene) =>
    mesh(new THREE.CylinderGeometry(top, bottom, h, 12), material, x, y, z, parent);

  const lanterns: THREE.Group[] = [];
  function lantern(x: number, y: number, z: number) {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    scene.add(group);
    cylinder(0.015, 0.015, 0.6, gold, 0, 0.4, 0, group);
    const globe = mesh(new THREE.SphereGeometry(0.28, 12, 8), lanternMat, 0, 0, 0, group);
    globe.scale.set(1, 1.25, 1);
    cylinder(0.18, 0.18, 0.07, wood, 0, 0.32, 0, group);
    cylinder(0.18, 0.18, 0.07, gold, 0, -0.32, 0, group);
    cylinder(0.018, 0.018, 0.25, silk, 0, -0.49, 0, group);
    lanterns.push(group);
  }
  function pavilion(x: number, z: number, scale = 1) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    group.scale.setScalar(scale);
    scene.add(group);
    box(5, 0.35, 3.4, stone, 0, 0.17, 0, group);
    for (const px of [-2, 2]) for (const pz of [-1.3, 1.3]) cylinder(0.1, 0.14, 3.3, wood, px, 1.9, pz, group);
    box(4.7, 0.22, 3.1, wood, 0, 3.5, 0, group);
    // Stepped, gently rising eaves read as a theatrical Chinese roof silhouette.
    for (let i = 0; i < 7; i++) box(5.6 - i * 0.52, 0.14, 4.1 - i * 0.46, ink, 0, 3.65 + i * 0.15, 0, group);
    for (const px of [-2.55, 2.55]) {
      const eave = box(0.7, 0.12, 4.1, ink, px, 3.77, 0, group);
      eave.rotation.z = Math.sign(px) * 0.23;
    }
    lantern(x - 1.6 * scale, 2.9 * scale, z + 1.4 * scale);
    lantern(x + 1.6 * scale, 2.9 * scale, z + 1.4 * scale);
  }
  function tree(x: number, z: number, blossom: boolean) {
    const trunk = mat(0x494139);
    cylinder(0.08, 0.24, 3.5, trunk, x, 1.75, z);
    const leaves = mat(blossom ? 0xca8d93 : 0x536f64);
    for (let i = 0; i < 8; i++) {
      const a = i * 2.4;
      const branch = cylinder(0.025, 0.07, 1.7, trunk, x + Math.cos(a) * 0.5, 2.5 + random(), z + Math.sin(a) * 0.5);
      branch.rotation.z = Math.cos(a) * 0.7;
      const crown = mesh(new THREE.IcosahedronGeometry(0.7 + random() * 0.5, 1), leaves, x + Math.cos(a), 3.4 + random(), z + Math.sin(a));
      crown.scale.y = 0.5;
    }
  }

  box(80, 0.3, 80, mat(plan.weather === 'snow' ? 0xc8d1d2 : 0x505f59), 0, -0.25, 0);
  // Layered mountains provide depth beyond the miniature stage.
  for (let i = 0; i < 15; i++) {
    const mountain = mesh(new THREE.ConeGeometry(4 + random() * 5, 7 + random() * 11, 5), mat(i % 2 ? 0x5a7579 : 0x435d69), (i - 7) * 6, 2, -24 - random() * 14);
    mountain.scale.z = 0.5;
    mountain.castShadow = false;
  }
  const moon = mesh(new THREE.SphereGeometry(1.25, 24, 16), mat(0xf5e8cc, { emissive: 0xe8d9b2, emissiveIntensity: 0.8 }), -12, 14, -26);
  moon.visible = plan.night;
  moon.castShadow = false;
  let water: THREE.Mesh | undefined;
  let boat: THREE.Group | undefined;
  if (plan.setting === 'river') {
    water = box(30, 0.08, 25, mat(0x386d79, { metalness: 0.65, roughness: 0.23 }), 0, 0, 3);
    box(6, 0.4, 28, stone, -11, 0.12, 1);
    pavilion(-10, -9, 0.85);
    boat = new THREE.Group(); scene.add(boat);
    const hull = mesh(new THREE.SphereGeometry(1, 16, 8), wood, 0, 0.1, 1, boat);
    hull.scale.set(1.5, 0.38, 3.3);
    box(2.5, 0.12, 4.8, wood, 0, 0.42, 1, boat);
    for (const x of [-1, 1]) cylinder(0.045, 0.045, 2.2, wood, x, 1.5, 0, boat);
    const canopy = mesh(new THREE.CylinderGeometry(1.1, 1.1, 2.4, 16, 1, true, 0, Math.PI), plaster, 0, 2.2, 0, boat);
    canopy.rotation.x = Math.PI / 2;
    lantern(-0.9, 2, 2);
    for (let i = 0; i < 22; i++) box(1 + random() * 3, 0.014, 0.035, mat(0x86a9a7, { transparent: true, opacity: 0.35 }), random() * 24 - 12, 0.07, random() * 22 - 8);
  } else if (plan.setting === 'stage') {
    pavilion(0, -2, 1.65);
    box(7, 0.5, 5, wood, 0, 0.4, 0);
    for (const x of [-3.1, 3.1]) for (let i = 0; i < 6; i++) cylinder(0.18, 0.24, 4.5, silk, x + (i - 2.5) * 0.16, 2.8, -0.9);
    box(5.5, 3.5, 0.12, silk, 0, 2.4, -4);
    for (let i = 0; i < 3; i++) box(7, 0.22, 0.6, wood, 0, 0.8 - i * 0.22, 2.3 + i * 0.6);
  } else if (plan.setting === 'street') {
    box(5, 0.08, 30, stone, 0, 0, -5);
    for (let i = 0; i < 4; i++) for (const side of [-1, 1]) {
      const x = side * 5.7, z = 2 - i * 6;
      box(4, 3, 4, plaster, x, 1.5, z);
      pavilion(x, z, 0.9);
      box(1.1, 1.7, 0.12, wood, x, 0.9, z + 2.03);
    }
  } else if (plan.setting === 'study') {
    pavilion(0, -2, 1.4);
    box(7, 4, 0.2, plaster, 0, 2, -4);
    for (const x of [-2.2, 2.2]) {
      box(1.6, 2.5, 0.15, wood, x, 2.3, -3.8);
      for (let i = 0; i < 5; i++) box(1.4, 0.025, 0.1, gold, x, 1.3 + i * 0.46, -3.68);
      for (let i = 0; i < 4; i++) box(0.025, 2.3, 0.1, gold, x - 0.6 + i * 0.4, 2.3, -3.67);
    }
    box(1.3, 2.5, 0.06, mat(0xe1d1ac), 0, 2.3, -3.7);
    for (let i = 0; i < 6; i++) box(0.07, 0.18 + random() * 0.12, 0.02, ink, 0, 3.1 - i * 0.3, -3.65);
  } else {
    pavilion(0, -5, 1.25);
    for (const x of [-7, 7]) tree(x, -1, plan.weather === 'petals');
    if (plan.setting === 'garden') {
      water = box(7, 0.06, 5, mat(0x467a77, { metalness: 0.5, roughness: 0.3 }), -5, 0.02, 3);
      for (let i = 0; i < 12; i++) {
        const rock = mesh(new THREE.DodecahedronGeometry(0.4 + random() * 0.55), stone, -8.5 + random() * 7, 0.3, 0.4 + random() * 0.5);
        rock.scale.y = 1.5;
      }
    }
  }
  if (plan.setting === 'study' || plan.setting === 'courtyard' || plan.setting === 'garden') {
    box(3, 0.15, 1.4, wood, 0, 1.15, 0);
    for (const x of [-1.2, 1.2]) for (const z of [-0.5, 0.5]) box(0.12, 1.1, 0.12, wood, x, 0.55, z);
    box(1.2, 0.025, 0.75, plaster, -0.4, 1.25, 0);
    cylinder(0.14, 0.1, 0.23, gold, 0.7, 1.32, 0);
    if (plan.setting === 'study') cylinder(0.02, 0.02, 0.8, ink, 0.95, 1.6, 0);
  }

  const figures: THREE.Group[] = [];
  const colors = [0x98afb3, 0xc69391, 0xd7c7a6, 0x657b92, 0x806e8a, 0x9b9978];
  for (let i = 0; i < Math.min(castCount, 6); i++) {
    const figure = new THREE.Group();
    const x = castCount === 1 ? 0 : (i - (Math.min(castCount, 6) - 1) / 2) * 1.2;
    figure.position.set(x, plan.setting === 'stage' ? 0.67 : plan.setting === 'river' ? 0.45 : 0, plan.setting === 'study' ? -0.9 : 1.1 + (i % 2) * 0.6);
    (boat ?? scene).add(figure);
    const robe = mat(colors[i]);
    cylinder(0.21, 0.43, 1.3, robe, 0, 0.72, 0, figure);
    mesh(new THREE.SphereGeometry(0.2, 16, 12), mat(0xd8b895), 0, 1.59, 0, figure);
    const hair = mesh(new THREE.SphereGeometry(0.205, 12, 8), ink, 0, 1.68, -0.025, figure);
    hair.scale.y = 0.64;
    cylinder(0.09, 0.12, 0.17, ink, 0, 1.84, -0.025, figure);
    for (const side of [-1, 1]) {
      const sleeve = cylinder(0.16, 0.24, 0.7, robe, side * 0.31, 1.02, 0.03, figure);
      sleeve.rotation.z = side * 0.28;
    }
    figure.rotation.y = i % 2 ? -0.35 : 0.35;
    figures.push(figure);
  }
  const warm = new THREE.PointLight(0xffb765, 24, 15, 2);
  warm.position.set(0, 3, 2); scene.add(warm);
  const count = plan.weather === 'dust' ? 120 : 260;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) { positions[i * 3] = random() * 30 - 15; positions[i * 3 + 1] = random() * 15; positions[i * 3 + 2] = random() * 26 - 12; }
  const particleGeometry = new THREE.BufferGeometry(); geometries.add(particleGeometry);
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMaterial = new THREE.PointsMaterial({ color: plan.weather === 'petals' ? 0xf2beca : plan.weather === 'dust' ? 0xf9d397 : 0xddebf0, size: plan.weather === 'petals' ? 0.1 : 0.045, transparent: true, opacity: 0.65 });
  materials.add(particleMaterial);
  const particles = new THREE.Points(particleGeometry, particleMaterial); scene.add(particles);
  const initialHeights = Float32Array.from({ length: count }, (_, i) => positions[i * 3 + 1]);
  let seconds = 0, playing = false, previous = 0, lastReport = -1, disposed = false;
  const draw = () => {
    const t = seconds / CINEMA_DURATION;
    const angle = -0.22 + Math.sin(t * Math.PI * 2 - 0.5) * 0.32;
    const distance = 17 - Math.sin(t * Math.PI) * 5;
    camera.position.set(Math.sin(angle) * distance, 5.6 - Math.sin(t * Math.PI) * 1.9, Math.cos(angle) * distance);
    camera.lookAt(0, 1.6, -1);
    figures.forEach((figure, i) => { figure.rotation.z = Math.sin(seconds * 0.7 + i) * 0.015; });
    lanterns.forEach((lantern, i) => { lantern.rotation.z = Math.sin(seconds * 0.8 + i) * 0.07; });
    if (boat) { boat.rotation.z = Math.sin(seconds * 0.8) * 0.02; boat.position.y = Math.sin(seconds) * 0.035; }
    if (water) (water.material as THREE.MeshStandardMaterial).roughness = 0.28 + Math.sin(seconds) * 0.04;
    const attribute = particleGeometry.getAttribute('position');
    const speed = plan.weather === 'rain' ? 4 : plan.weather === 'dust' ? 0.08 : 0.4;
    for (let i = 0; i < count; i++) {
      attribute.setY(i, ((initialHeights[i] - seconds * speed) % 15 + 15) % 15);
    }
    attribute.needsUpdate = true;
    particles.rotation.y = seconds * 0.015;
    renderer.render(scene, camera);
  };
  const render = draw;
  const resize = () => {
    if (disposed) return;
    const { width, height } = host.getBoundingClientRect();
    renderer.setSize(Math.max(width, 1), Math.max(height, 1), false);
    camera.aspect = Math.max(width, 1) / Math.max(height, 1);
    camera.updateProjectionMatrix(); render();
  };
  const observer = new ResizeObserver(resize); observer.observe(host);
  const tick = (now: number) => {
    if (previous && playing && !document.hidden) seconds = Math.min(CINEMA_DURATION, seconds + Math.min((now - previous) / 1000, 0.1));
    previous = now;
    render();
    if (Math.floor(seconds * 4) !== lastReport) { lastReport = Math.floor(seconds * 4); onProgress(seconds); }
    if (seconds >= CINEMA_DURATION) { playing = false; renderer.setAnimationLoop(null); }
  };
  const sync = () => { previous = 0; renderer.setAnimationLoop(playing && !document.hidden ? tick : null); };
  const contextLost = (event: Event) => { event.preventDefault(); playing = false; sync(); onError(); };
  renderer.domElement.addEventListener('webglcontextlost', contextLost);
  document.addEventListener('visibilitychange', sync);
  resize();
  return {
    setPlaying(value) { playing = value; sync(); },
    seek(value) { seconds = THREE.MathUtils.clamp(value, 0, CINEMA_DURATION); onProgress(seconds); render(); sync(); },
    replay() { seconds = 0; onProgress(0); render(); sync(); },
    dispose() {
      disposed = true; observer.disconnect(); renderer.setAnimationLoop(null);
      document.removeEventListener('visibilitychange', sync);
      renderer.domElement.removeEventListener('webglcontextlost', contextLost);
      geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose());
      renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove();
    },
  };
}
