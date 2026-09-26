import * as THREE from 'three';
import { clamp01, ease, type Kit } from '../cinemaKit';

/*
 * Articulated 3D figures for the ink cinemas. Each figure is a small rig of lathed robes, a head with
 * a painted face, and two arms (shoulder, elbow, sleeve, hand) that can be posed and animated from
 * time alone. The figure stands at its group's origin and faces +z.
 *
 * Tones follow the ink pass: pale robes print as bare paper with an outline, dark ones as thick ink.
 * Only saturated red survives (lips and rouge, hat tassels, a dan's pompoms), so keep everything else grey.
 */

export type Headwear =
  | 'cap' // a scholar's melon cap over a shaved crown, and a queue
  | 'bare' // young master: hair drawn back to a queue, a jade pin
  | 'scarf' // a soft scholar's hat whose two tails fly in the wind (Nanxiang)
  | 'official' // a Qing official's hat: upturned brim, red tassels, a button
  | 'lady' // a high bun with pins and a red flower
  | 'maid' // two buns
  | 'dan' // a performer's headdress: tiers of pearls and red pompoms, hair falling behind
  | 'crown' // an immortal's tall crown with ribbons
  | 'helmet' // a martial role: a small helmet with two long pheasant plumes
  | 'tufts' // a page's two tufts
  | 'none';

export type FigureSpec = {
  /** Standing height in metres (default 1.72). */
  height?: number;
  /** Width of body and robe (default 1); portly men 1.3. */
  girth?: number;
  headwear?: Headwear;
  /** Robe tone (grey), jacket tone (a shorter outer layer), sash. */
  robe?: number;
  jacket?: number;
  sash?: number;
  /** Long, trailing performer's sleeves. */
  waterSleeves?: boolean;
  /** Robe shape: a scholar's straight robe, a skirt flaring wide, or a short jacket over trousers. */
  cut?: 'robe' | 'skirt' | 'short';
  beard?: 'none' | 'goatee' | 'full' | 'long' | 'whiskers';
  /** Beard and hair of an old man: white instead of ink. */
  white?: boolean;
  /** Lips and rouge in vermilion (performers, ladies). */
  rouge?: boolean;
  /** A thick fur coat with pale trim. */
  fur?: boolean;
  /** Face shape and features: 'fine', 'plain', 'coarse' (big nose, heavy brows), 'clown' (white patch). */
  face?: 'fine' | 'plain' | 'coarse' | 'clown';
  /** Skin tone: pale for most; darker for rough men. */
  skin?: number;
};

export type ArmPose = { lift?: number; out?: number; twist?: number; bend?: number };
export type Pose = {
  /** Forward bow of the torso at the waist (radians). */
  bow?: number;
  /** Sideways lean. */
  lean?: number;
  /** Twist of the torso. */
  turn?: number;
  yaw?: number; pitch?: number; roll?: number;
  l?: ArmPose; r?: ArmPose;
  /** 0 stands, 1 kneels. */
  kneel?: number;
  /** 0 stands, 1 sits (on a chair of seat height about 0.48). */
  sit?: number;
  /** Walk cycle phase in radians; undefined when still. */
  walk?: number;
  /** Stride amount (0..1) while walking. */
  stride?: number;
  /** Sleeve flutter (water sleeves). */
  flutter?: number;
  /** Mouth open, 0..1. */
  mouth?: number;
};

const skinTone = 0xefe8dc;
const inkTone = 0x1c1816;

/** A lathe profile [[radius, y], ...] as geometry, flattened front to back by `depth`. */
function lathe(points: [number, number][], depth = 0.78, segments = 20) {
  const g = new THREE.LatheGeometry(points.map(([r, y]) => new THREE.Vector2(Math.max(0.0001, r), y)), segments);
  g.scale(1, 1, depth);
  g.computeVertexNormals();
  return g;
}

const materialCache = new Map<string, THREE.Material>();
/** Shared lambert materials by tone (and side), so a crowd of figures does not multiply materials. */
export function tone(hex: number, doubleSide = false): THREE.MeshLambertMaterial {
  const key = `${hex}:${doubleSide}`;
  let m = materialCache.get(key) as THREE.MeshLambertMaterial | undefined;
  if (!m || (m as unknown as { _disposed?: boolean })._disposed) {
    m = new THREE.MeshLambertMaterial({ color: hex, side: doubleSide ? THREE.DoubleSide : THREE.FrontSide });
    // Disposed with the scene; mark so the next cinema builds fresh ones.
    const dispose = m.dispose.bind(m);
    m.dispose = () => { (m as unknown as { _disposed?: boolean })._disposed = true; materialCache.delete(key); dispose(); };
    materialCache.set(key, m);
  }
  return m;
}
/** Flat, unlit material: exact greys (paper, ink) and vermilion. */
export function flat(hex: number, extra: THREE.MeshBasicMaterialParameters = {}) {
  return new THREE.MeshBasicMaterial({ color: hex, ...extra });
}
export const VERMILION = 0xc0321e;

let shadowTexture: THREE.Texture | undefined;
/** A soft contact shadow texture, shared. */
export function shadowMap(kit: Kit) {
  if (shadowTexture && (shadowTexture as unknown as { _live?: boolean })._live) return shadowTexture;
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(0,0,0,0.55)'); g.addColorStop(0.55, 'rgba(0,0,0,0.25)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
  shadowTexture = kit.canvasTexture(c);
  (shadowTexture as unknown as { _live?: boolean })._live = true;
  const dispose = shadowTexture.dispose.bind(shadowTexture);
  shadowTexture.dispose = () => { (shadowTexture as unknown as { _live?: boolean })._live = false; dispose(); };
  return shadowTexture;
}
/** A soft shadow on the ground under something, w × d metres. */
export function contactShadow(kit: Kit, parent: THREE.Object3D, w: number, d: number, opacity = 0.7) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: shadowMap(kit), transparent: true, depthWrite: false, opacity, color: 0x000000 }));
  m.position.y = 0.012; m.renderOrder = 1;
  parent.add(m);
  return m;
}

export type Figure = {
  root: THREE.Group;
  /** Sets the pose; missing fields return to rest. */
  pose: (p: Pose) => void;
  /** Blush in vermilion on the cheeks, 0..1. */
  blush: (v: number) => void;
  /** Where things held in the hands attach (children of the forearm ends). */
  hands: { l: THREE.Group; r: THREE.Group };
  head: THREE.Group;
  torso: THREE.Group;
  /** Fade the whole figure (dreams, memories), 0..1. */
  fade: (v: number) => void;
  height: number;
  /** The soft shadow at its feet (hide it for figures lying down or floating). */
  shadow: THREE.Mesh;
};

/** Builds a figure at (x, 0, z) in `parent`, facing +z (rotate root.rotation.y to face elsewhere). */
export function figure(kit: Kit, parent: THREE.Object3D, spec: FigureSpec = {}, x = 0, z = 0): Figure {
  const H = spec.height ?? 1.72, s = H / 1.72, girth = spec.girth ?? 1;
  const robeTone = spec.robe ?? 0xd8d2c8;
  const skin = tone(spec.skin ?? skinTone), ink = tone(inkTone);
  const robe = tone(robeTone, true);
  const materials: THREE.Material[] = [];
  const own = <T extends THREE.Material>(m: T) => { materials.push(m); return m; };
  const root = kit.group(parent, x, 0, z);
  root.scale.setScalar(s);
  const add = (g: THREE.BufferGeometry, m: THREE.Material, p: THREE.Object3D, px = 0, py = 0, pz = 0) => kit.mesh(g, m, p, px, py, pz);
  const shadow = contactShadow(kit, root, 0.9 * girth, 0.7 * girth, 0.6);

  // --- Lower body -----------------------------------------------------------------------------
  const cut = spec.cut ?? 'robe';
  const hem = cut === 'skirt' ? 0.34 : cut === 'short' ? 0.2 : 0.27;
  const lower = kit.group(root, 0, 0, 0);
  const waistY = 1.0;
  add(lathe(cut === 'short'
    ? [[0.001, 0.62], [0.16 * girth, 0.62], [0.17 * girth, 0.7], [0.165 * girth, waistY]]
    : [[0.001, 0.03], [hem * girth, 0.03], [hem * girth * 0.97, 0.12], [hem * 0.8 * girth, 0.45], [0.2 * girth, 0.8], [0.165 * girth, waistY]]), robe, lower);
  if (cut === 'short') {
    // Trousers and boots.
    for (const side of [-1, 1]) add(new THREE.CylinderGeometry(0.075 * girth, 0.07, 0.6, 10), tone(0x5a534c), lower, side * 0.08 * girth, 0.33, 0);
  }
  // Boots peeking under the hem; they step when walking.
  const feet = [-1, 1].map(side => {
    const f = add(new THREE.BoxGeometry(0.1, 0.07, 0.24), ink, lower, side * 0.09, 0.035, 0.06);
    return f;
  });
  if (spec.fur) add(lathe([[0.001, 0.25], [0.3 * girth, 0.25], [0.28 * girth, 0.45], [0.22 * girth, 0.85], [0.2 * girth, waistY + 0.02]]), tone(0x8c857c, true), lower);
  const furHem = spec.fur ? add(new THREE.TorusGeometry(0.29 * girth, 0.045, 6, 20).rotateX(Math.PI / 2), tone(0xf2eee6), lower, 0, 0.26, 0) : undefined;
  if (furHem) furHem.scale.z = 0.78;

  // --- Torso ----------------------------------------------------------------------------------
  const torso = kit.group(root, 0, waistY, 0);
  const torsoTone = spec.jacket ?? robeTone;
  add(lathe([[0.165 * girth, 0], [0.19 * girth, 0.18], [0.2 * girth, 0.34], [0.17, 0.42], [0.07, 0.47], [0.001, 0.48]], 0.72), tone(torsoTone, true), torso);
  if (spec.jacket !== undefined) add(lathe([[0.21 * girth, -0.12], [0.2 * girth, 0.05], [0.21 * girth, 0.2], [0.215 * girth, 0.35], [0.18, 0.43], [0.08, 0.475], [0.001, 0.485]], 0.74), tone(spec.jacket, true), torso);
  if (spec.fur) {
    add(lathe([[0.25 * girth, -0.2], [0.24 * girth, 0.1], [0.23 * girth, 0.34], [0.19, 0.43], [0.09, 0.48], [0.001, 0.49]], 0.76), tone(0x8c857c, true), torso);
    add(new THREE.TorusGeometry(0.1, 0.045, 6, 16).rotateX(Math.PI / 2), tone(0xf2eee6), torso, 0, 0.46, 0);
  }
  // Collar edge and sash.
  add(new THREE.TorusGeometry(0.075, 0.014, 5, 16).rotateX(Math.PI / 2), tone(0x5a534c), torso, 0, 0.465, 0);
  if (spec.sash !== undefined) {
    const sash = add(new THREE.TorusGeometry(0.172 * girth, 0.022, 5, 22).rotateX(Math.PI / 2), tone(spec.sash), torso, 0, 0.04, 0);
    sash.scale.z = 0.74;
    for (const side of [-1, 1]) add(new THREE.BoxGeometry(0.035, 0.34, 0.012), tone(spec.sash), torso, side * 0.03, -0.14, 0.14 * girth).rotation.z = side * 0.06;
  }

  // --- Head -----------------------------------------------------------------------------------
  const neck = kit.group(torso, 0, 0.47, 0);
  add(new THREE.CylinderGeometry(0.045, 0.05, 0.08, 10), skin, neck, 0, 0.03, 0);
  const head = kit.group(neck, 0, 0.16, 0.005);
  const skull = add(new THREE.SphereGeometry(0.1, 20, 16), skin, head);
  skull.scale.set(0.92, 1.12, 1);
  const faceKind = spec.face ?? 'fine';
  // Eyes, brows, nose, mouth: small dark shapes on the front of the face.
  const eyeMaterial = ink;
  const eyeGeometry = new THREE.SphereGeometry(0.012, 8, 6);
  for (const side of [-1, 1]) {
    const eye = add(eyeGeometry, eyeMaterial, head, side * 0.034, 0.012, 0.09);
    eye.scale.set(faceKind === 'fine' ? 1.5 : 1.1, faceKind === 'fine' ? 0.55 : 0.8, 0.5);
    eye.rotation.z = side * (faceKind === 'fine' ? -0.18 : 0);
    const brow = add(new THREE.BoxGeometry(faceKind === 'coarse' ? 0.05 : 0.04, faceKind === 'coarse' ? 0.011 : 0.006, 0.01), ink, head, side * 0.036, faceKind === 'coarse' ? 0.042 : 0.038, 0.088);
    brow.rotation.z = side * (faceKind === 'fine' ? 0.18 : -0.08);
  }
  const nose = add(new THREE.ConeGeometry(faceKind === 'coarse' ? 0.02 : 0.012, faceKind === 'coarse' ? 0.05 : 0.035, 6), skin, head, 0, -0.014, 0.1);
  nose.rotation.x = Math.PI / 2 + 0.3;
  const rouge = spec.rouge ?? false;
  const mouthMaterial = rouge ? flat(VERMILION) : tone(0x5a4a44);
  if (rouge) own(mouthMaterial);
  const mouth = add(new THREE.SphereGeometry(0.014, 10, 6), mouthMaterial, head, 0, -0.052, 0.086);
  mouth.scale.set(1.3, 0.45, 0.5);
  // Rouge washes around the eyes (performers), and a blush that can rise on anyone's cheeks.
  const cheek = new THREE.MeshBasicMaterial({ color: VERMILION, transparent: true, opacity: rouge ? 0.3 : 0, depthWrite: false });
  own(cheek);
  for (const side of [-1, 1]) {
    const c = add(new THREE.CircleGeometry(0.022, 14), cheek, head, side * 0.047, -0.03, 0.083);
    c.rotation.y = side * 0.45;
  }
  if (faceKind === 'clown') add(new THREE.BoxGeometry(0.07, 0.05, 0.01), flat(0xffffff), head, 0, 0.0, 0.1);

  // Beards.
  const hairTone = tone(spec.white ? 0xeae6de : inkTone);
  const beard = spec.beard ?? 'none';
  if (beard === 'goatee') add(new THREE.ConeGeometry(0.02, 0.08, 6), hairTone, head, 0, -0.1, 0.07).rotation.x = Math.PI;
  if (beard === 'full' || beard === 'long') {
    const b = add(new THREE.ConeGeometry(0.06, beard === 'long' ? 0.24 : 0.12, 8), hairTone, head, 0, beard === 'long' ? -0.17 : -0.11, 0.05);
    b.rotation.x = Math.PI - 0.25; b.scale.z = 0.6;
  }
  if (beard !== 'none') for (const side of [-1, 1]) {
    const w = add(new THREE.CylinderGeometry(0.004, 0.002, 0.09, 4), hairTone, head, side * 0.03, -0.055, 0.09);
    w.rotation.z = side * 1.1;
  }

  // Headwear.
  const hw = spec.headwear ?? 'cap';
  const hatMaterial = ink;
  const queue = () => {
    const q = add(new THREE.CylinderGeometry(0.018, 0.008, 0.5, 6), hairTone, head, 0, -0.3, -0.085);
    q.rotation.x = -0.08;
    return q;
  };
  let flyers: THREE.Object3D[] = [];
  if (hw === 'cap' || hw === 'bare' || hw === 'scarf' || hw === 'official') {
    // The shaved front and the hair behind.
    add(new THREE.SphereGeometry(0.104, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.5), hairTone, head, 0, 0.012, -0.012).scale.set(0.93, 1.05, 0.96);
    queue();
  }
  if (hw === 'cap') {
    add(new THREE.SphereGeometry(0.108, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.45), hatMaterial, head, 0, 0.03, 0).scale.set(0.95, 0.95, 1);
    add(new THREE.SphereGeometry(0.018, 8, 6), hatMaterial, head, 0, 0.135, 0);
  } else if (hw === 'bare') {
    add(new THREE.CylinderGeometry(0.012, 0.012, 0.08, 6), tone(0xe6e2d8), head, 0.02, 0.11, -0.04).rotation.z = 1.2;
  } else if (hw === 'scarf') {
    add(new THREE.BoxGeometry(0.18, 0.13, 0.19), hatMaterial, head, 0, 0.1, -0.01);
    flyers = [-1, 1].map(side => {
      const pivot = kit.group(head, side * 0.05, 0.1, -0.1);
      add(new THREE.BoxGeometry(0.035, 0.26, 0.006), hatMaterial, pivot, 0, -0.13, 0);
      return pivot;
    });
  } else if (hw === 'official') {
    add(new THREE.CylinderGeometry(0.2, 0.2, 0.03, 20, 1, true), hatMaterial, head, 0, 0.08, 0).rotation.x = 0.05;
    add(new THREE.ConeGeometry(0.2, 0.08, 20, 1, true), hatMaterial, head, 0, 0.12, 0);
    add(new THREE.ConeGeometry(0.15, 0.12, 20), own(flat(VERMILION)), head, 0, 0.16, 0);
    add(new THREE.SphereGeometry(0.025, 10, 8), tone(0x6a6560), head, 0, 0.225, 0);
  } else if (hw === 'lady' || hw === 'maid') {
    add(new THREE.SphereGeometry(0.106, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.55), hairTone, head, 0, 0.01, -0.01);
    if (hw === 'lady') {
      const bun = add(new THREE.SphereGeometry(0.07, 12, 10), hairTone, head, 0, 0.1, -0.08); bun.scale.set(1.4, 0.9, 1);
      add(new THREE.CylinderGeometry(0.006, 0.006, 0.26, 5), tone(0xe6e2d8), head, 0, 0.11, -0.07).rotation.z = Math.PI / 2 - 0.2;
      add(new THREE.SphereGeometry(0.025, 8, 6), own(flat(VERMILION)), head, 0.08, 0.1, 0.0);
    } else {
      for (const side of [-1, 1]) add(new THREE.SphereGeometry(0.045, 10, 8), hairTone, head, side * 0.075, 0.09, -0.02);
    }
  } else if (hw === 'dan') {
    add(new THREE.SphereGeometry(0.106, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.6), hairTone, head, 0, 0.0, -0.01);
    // Hair falling behind, the crown of tiers, pearls, and red pompoms.
    add(new THREE.BoxGeometry(0.14, 0.5, 0.03), hairTone, head, 0, -0.22, -0.09).rotation.x = 0.08;
    add(new THREE.TorusGeometry(0.1, 0.022, 6, 20, Math.PI), hatMaterial, head, 0, 0.06, 0.0).rotation.set(-0.35, 0, 0);
    add(new THREE.ConeGeometry(0.06, 0.12, 8), hatMaterial, head, 0, 0.16, -0.02);
    const pearl = tone(0xf4f0e8);
    for (let k = 0; k < 7; k++) add(new THREE.SphereGeometry(0.012, 6, 5), pearl, head, Math.cos(Math.PI * k / 6) * 0.1, 0.08 + Math.sin(Math.PI * k / 6) * 0.05, 0.05);
    const pom = own(flat(VERMILION));
    for (const [px, py] of [[0, 0.24], [-0.08, 0.15], [0.08, 0.15]]) add(new THREE.SphereGeometry(0.022, 8, 6), pom, head, px, py, 0.03);
    // Tassels of pearls hanging at the temples.
    for (const side of [-1, 1]) for (let k = 0; k < 4; k++) add(new THREE.SphereGeometry(0.008, 5, 4), pearl, head, side * 0.1, 0.03 - k * 0.03, 0.04);
  } else if (hw === 'crown') {
    add(new THREE.SphereGeometry(0.106, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.55), hairTone, head, 0, 0.01, -0.01);
    add(new THREE.CylinderGeometry(0.05, 0.07, 0.16, 8), hatMaterial, head, 0, 0.16, -0.01);
    add(new THREE.CylinderGeometry(0.004, 0.004, 0.3, 4), hatMaterial, head, 0, 0.2, 0).rotation.z = Math.PI / 2;
    flyers = [-1, 1].map(side => {
      const pivot = kit.group(head, side * 0.08, 0.12, -0.05);
      add(new THREE.BoxGeometry(0.03, 0.42, 0.005), tone(0xe6e2d8), pivot, 0, -0.21, 0);
      return pivot;
    });
  } else if (hw === 'helmet') {
    add(new THREE.SphereGeometry(0.112, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.5), hatMaterial, head, 0, 0.01, 0);
    add(new THREE.SphereGeometry(0.02, 8, 6), own(flat(VERMILION)), head, 0, 0.13, 0.05);
    // Two long pheasant plumes arcing up and back.
    flyers = [-1, 1].map(side => {
      const pivot = kit.group(head, side * 0.05, 0.1, 0.02);
      const curve = new THREE.CatmullRomCurve3([[0, 0, 0], [side * 0.08, 0.35, -0.05], [side * 0.25, 0.7, -0.22], [side * 0.5, 0.85, -0.45]].map(([a, b, c]) => new THREE.Vector3(a, b, c)));
      add(new THREE.TubeGeometry(curve, 20, 0.008, 4), hatMaterial, pivot);
      return pivot;
    });
  } else if (hw === 'tufts') {
    add(new THREE.SphereGeometry(0.104, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.5), hairTone, head, 0, 0.012, -0.012);
    for (const side of [-1, 1]) add(new THREE.SphereGeometry(0.035, 8, 6), hairTone, head, side * 0.07, 0.1, -0.01);
  }

  // --- Arms -----------------------------------------------------------------------------------
  const sleeveTone = tone(spec.fur ? 0x8c857c : torsoTone, true);
  const water = spec.waterSleeves ?? false;
  const cuffTone = tone(0xf4f0e8, true);
  const arms = ([1, -1] as const).map(side => {
    const shoulder = kit.group(torso, side * 0.19 * girth, 0.4, 0);
    add(new THREE.SphereGeometry(0.06, 10, 8), sleeveTone, shoulder);
    add(new THREE.CylinderGeometry(0.058, 0.062, 0.3, 10), sleeveTone, shoulder, 0, -0.15, 0);
    const elbow = kit.group(shoulder, 0, -0.3, 0);
    add(new THREE.SphereGeometry(0.058, 10, 8), sleeveTone, elbow);
    // Wide sleeve, open at the cuff, widening toward the hand.
    add(new THREE.CylinderGeometry(0.09, 0.06, 0.26, 12, 1, true), sleeveTone, elbow, 0, -0.13, 0);
    const hand = kit.group(elbow, 0, -0.27, 0);
    add(new THREE.SphereGeometry(0.036, 10, 8), skin, hand, 0, -0.02, 0).scale.set(0.8, 1.2, 0.6);
    // Water sleeves: three segments of white silk hanging from the cuff.
    const silk: THREE.Group[] = [];
    if (water) {
      let at: THREE.Object3D = kit.group(elbow, 0, -0.25, 0);
      for (let k = 0; k < 3; k++) {
        const seg = kit.group(at, 0, 0, 0);
        add(new THREE.CylinderGeometry(0.085, 0.09, 0.22, 10, 1, true), cuffTone, seg, 0, -0.11, 0);
        silk.push(seg);
        at = kit.group(seg, 0, -0.22, 0);
      }
    }
    return { side, shoulder, elbow, hand, silk };
  });
  const [left, right] = arms;

  // --- Posing ---------------------------------------------------------------------------------
  const setArm = (arm: typeof left, a: ArmPose | undefined, extraLift: number, flutter: number, t: number) => {
    const lift = (a?.lift ?? 0.05) + extraLift, out = (a?.out ?? 0.12), bend = a?.bend ?? 0.15;
    arm.shoulder.rotation.set(-lift, a?.twist ?? 0, arm.side * out, 'XZY');
    arm.elbow.rotation.set(-bend, 0, 0);
    arm.silk.forEach((seg, k) => {
      seg.rotation.x = flutter * Math.sin(t * 5 + k * 0.9 + arm.side) * 0.5 * (k + 1) / 3 + flutter * 0.3;
      seg.rotation.z = flutter * Math.sin(t * 3.7 + k + arm.side * 2) * 0.35;
    });
  };
  const pose = (p: Pose) => {
    const kneel = clamp01(p.kneel ?? 0), sit = clamp01(p.sit ?? 0);
    const stride = p.stride ?? 1;
    const walking = p.walk !== undefined;
    const w = p.walk ?? 0;
    const bob = walking ? Math.abs(Math.sin(w)) * 0.025 * stride : 0;
    // Kneeling lowers the torso and squashes the robe; sitting drops the waist to seat height.
    const drop = kneel * 0.5 + sit * 0.46;
    torso.position.y = waistY - drop + bob;
    lower.scale.y = 1 - kneel * 0.5 - sit * 0.46;
    lower.position.z = sit * 0.18;
    lower.rotation.x = sit * 0.0;
    lower.scale.z = 1 + sit * 0.9;
    torso.rotation.set(p.bow ?? 0, p.turn ?? 0, p.lean ?? 0, 'YXZ');
    if (walking) torso.rotation.y += Math.sin(w) * 0.06 * stride;
    head.rotation.set(p.pitch ?? 0, p.yaw ?? 0, p.roll ?? 0, 'YXZ');
    const swing = walking ? Math.sin(w) * 0.35 * stride : 0;
    setArm(left, p.l, -swing, p.flutter ?? (water ? 0.25 : 0), w + (p.flutter ?? 0) * 3);
    setArm(right, p.r, swing, p.flutter ?? (water ? 0.25 : 0), w + 1 + (p.flutter ?? 0) * 3);
    feet.forEach((f, i) => {
      const step = walking ? Math.sin(w + i * Math.PI) * 0.12 * stride : 0;
      f.position.z = 0.06 + step + sit * 0.3;
      f.position.y = 0.035 + (walking ? Math.max(0, Math.cos(w + i * Math.PI)) * 0.03 * stride : 0);
      f.visible = kneel < 0.5;
    });
    lower.rotation.z = walking ? Math.sin(w) * 0.03 * stride : 0;
    mouth.scale.y = 0.45 + (p.mouth ?? 0) * 1.1;
    flyers.forEach((f, i) => {
      const flap = Math.sin(w * 0.7 + i * 2 + (p.flutter ?? 0) * 7) * 0.3;
      f.rotation.x = hw === 'helmet' ? flap * 0.3 : 0.6 + flap;
      if (hw !== 'helmet') f.rotation.z = (i ? 1 : -1) * 0.2;
    });
  };
  pose({});

  const blush = (v: number) => { cheek.opacity = (rouge ? 0.3 : 0) + clamp01(v) * 0.3; };
  let faded: THREE.Material[] | undefined;
  const fade = (v: number) => {
    // Fading swaps in per-figure transparent copies, so shared tones stay opaque for everyone else.
    if (!faded) {
      const copies = new Map<THREE.Material, THREE.Material>();
      root.traverse(o => {
        const mesh = o as THREE.Mesh;
        if (!mesh.material) return;
        const m = mesh.material as THREE.Material;
        let c = copies.get(m);
        if (!c) { c = m.clone(); c.transparent = true; copies.set(m, c); }
        mesh.material = c;
      });
      faded = [...copies.values()];
    }
    for (const m of faded) {
      const base = (m as THREE.MeshBasicMaterial).userData.base ?? m.opacity;
      m.userData.base = base;
      m.opacity = base * clamp01(v);
      m.visible = v > 0.01;
    }
  };

  return { root, pose, blush, hands: { l: left.hand, r: right.hand }, head, torso, fade, height: H, shadow };
}

// --- Pose vocabulary -------------------------------------------------------------------------

/** Named gestures. Each takes the time (for small living movements) and returns a pose. */
export const G = {
  rest: (t = 0): Pose => ({ l: { lift: 0.08, out: 0.1, bend: 0.2 }, r: { lift: 0.08, out: 0.1, bend: 0.2 }, pitch: Math.sin(t * 0.7) * 0.02 }),
  /** Hands folded into the sleeves at the belly: a composed scholar. */
  folded: (t = 0): Pose => ({ l: { lift: 0.55, out: 0.28, twist: -0.4, bend: 1.4 }, r: { lift: 0.55, out: 0.28, twist: 0.4, bend: 1.4 }, pitch: 0.05 + Math.sin(t * 0.6) * 0.02 }),
  /** Behind the back: strolling, musing. */
  behind: (t = 0): Pose => ({ l: { lift: -0.35, out: 0.2, bend: 1.2, twist: 0.6 }, r: { lift: -0.35, out: 0.2, bend: 1.2, twist: -0.6 }, pitch: -0.05 + Math.sin(t * 0.5) * 0.03 }),
  /** Cupped-hand salute (拱手), pumping gently. */
  salute: (t = 0, depth = 0.25): Pose => ({ bow: depth * (0.6 + 0.4 * Math.sin(t * 4) ** 2), l: { lift: 1.05, out: 0.35, twist: -0.5, bend: 1.2 }, r: { lift: 1.05, out: 0.35, twist: 0.5, bend: 1.2 }, pitch: 0.1 }),
  bow: (t = 0, depth = 0.6): Pose => ({ bow: depth, l: { lift: 0.9, out: 0.3, twist: -0.5, bend: 1.1 }, r: { lift: 0.9, out: 0.3, twist: 0.5, bend: 1.1 }, pitch: 0.2 + Math.sin(t) * 0.02 }),
  speak: (t = 0, hand: 'l' | 'r' = 'r'): Pose => {
    const a = { lift: 0.75 + Math.sin(t * 3.1) * 0.18, out: 0.35 + Math.sin(t * 2.3) * 0.1, bend: 0.9 + Math.sin(t * 4.2) * 0.2 };
    return { [hand]: a, [hand === 'l' ? 'r' : 'l']: { lift: 0.1, out: 0.1, bend: 0.3 }, yaw: Math.sin(t * 0.9) * 0.12, pitch: Math.sin(t * 5.3) * 0.04, mouth: 0.5 + 0.5 * Math.sin(t * 11) } as Pose;
  },
  /** Both hands talking, emphatic. */
  argue: (t = 0): Pose => ({ bow: 0.12 + Math.sin(t * 3) * 0.05, l: { lift: 0.9 + Math.sin(t * 3.4) * 0.3, out: 0.5, bend: 0.8 }, r: { lift: 0.9 + Math.sin(t * 3.4 + 1.5) * 0.3, out: 0.5, bend: 0.8 }, yaw: Math.sin(t * 1.3) * 0.2, mouth: 0.5 + 0.5 * Math.sin(t * 12) }),
  point: (t = 0, hand: 'l' | 'r' = 'r'): Pose => ({ [hand]: { lift: 1.45 + Math.sin(t * 5) * 0.05, out: 0.25, bend: 0.05 }, [hand === 'l' ? 'r' : 'l']: { lift: 0.3, out: 0.15, bend: 0.8 }, mouth: 0.4 + 0.4 * Math.sin(t * 10) } as Pose),
  laugh: (t = 0): Pose => ({ bow: -0.12 + Math.sin(t * 9) * 0.04, pitch: -0.25 + Math.sin(t * 9) * 0.05, l: { lift: 0.8, out: 0.3, bend: 1.5 }, r: { lift: 0.3, out: 0.4, bend: 0.4 }, mouth: 0.9 }),
  /** Doubled over laughing. */
  guffaw: (t = 0): Pose => ({ bow: 0.45 + Math.sin(t * 10) * 0.08, pitch: -0.2, l: { lift: 0.5, out: 0.3, bend: 1.3 }, r: { lift: 0.9, out: 0.2, bend: 1.4 }, mouth: 1 }),
  /** Reading a book held in both hands. */
  read: (t = 0): Pose => ({ pitch: 0.35 + Math.sin(t * 0.4) * 0.03, l: { lift: 0.9, out: 0.25, twist: -0.3, bend: 1.3 }, r: { lift: 0.9, out: 0.25, twist: 0.3, bend: 1.3 } }),
  /** A hand to the chin. */
  think: (t = 0): Pose => ({ pitch: 0.15, yaw: -0.2 + Math.sin(t * 0.3) * 0.1, r: { lift: 1.1, out: 0.1, twist: 0.5, bend: 2.1 }, l: { lift: 0.55, out: 0.3, twist: -0.4, bend: 1.5 } }),
  /** Offering something with both hands. */
  offer: (t = 0): Pose => ({ bow: 0.2, l: { lift: 1.25, out: 0.18, bend: 0.4 }, r: { lift: 1.25, out: 0.18, bend: 0.4 }, pitch: 0.2 + Math.sin(t) * 0.02 }),
  /** A cup raised to drink. */
  drink: (t = 0): Pose => ({ pitch: -0.3, r: { lift: 1.3, out: 0.1, twist: 0.4, bend: 1.9 + Math.sin(t) * 0.05 }, l: { lift: 0.3, out: 0.2, bend: 0.6 } }),
  /** A cup raised in a toast. */
  toast: (t = 0): Pose => ({ bow: 0.1, r: { lift: 1.5 + Math.sin(t * 2) * 0.05, out: 0.2, bend: 0.5 }, l: { lift: 1.0, out: 0.3, bend: 1.3 }, mouth: 0.5 }),
  /** Sleeve raised to hide the face: shy. */
  shy: (t = 0): Pose => ({ bow: 0.15, pitch: 0.35, yaw: -0.4, r: { lift: 1.4, out: 0.0, twist: 0.6, bend: 1.8 }, l: { lift: 0.4, out: 0.2, bend: 1.0 } , roll: Math.sin(t) * 0.03 }),
  /** Arms thrown wide in anger or astonishment. */
  fume: (t = 0): Pose => ({ bow: -0.05, l: { lift: 0.6 + Math.sin(t * 6) * 0.2, out: 0.9, bend: 0.8 }, r: { lift: 0.6 + Math.sin(t * 6 + 1) * 0.2, out: 0.9, bend: 0.8 }, pitch: -0.1, mouth: 0.8 }),
  /** Clapping hands in delight. */
  clap: (t = 0): Pose => ({ l: { lift: 1.1, out: 0.1 + Math.abs(Math.sin(t * 7)) * 0.3, twist: -0.3, bend: 1.0 }, r: { lift: 1.1, out: 0.1 + Math.abs(Math.sin(t * 7)) * 0.3, twist: 0.3, bend: 1.0 }, pitch: -0.1, mouth: 0.8 }),
  kowtow: (t = 0, depth = 1): Pose => ({ kneel: 1, bow: 1.25 * depth * (0.7 + 0.3 * Math.abs(Math.sin(t * 1.5))), l: { lift: 1.3, out: 0.3, bend: 0.4 }, r: { lift: 1.3, out: 0.3, bend: 0.4 }, pitch: 0.3 }),
  kneel: (t = 0): Pose => ({ kneel: 1, bow: 0.15, l: { lift: 0.9, out: 0.3, twist: -0.5, bend: 1.1 }, r: { lift: 0.9, out: 0.3, twist: 0.5, bend: 1.1 }, pitch: 0.2 + Math.sin(t) * 0.02 }),
  /** Seated, hands on the knees or table. */
  seated: (t = 0): Pose => ({ sit: 1, l: { lift: 0.7, out: 0.2, bend: 0.7 }, r: { lift: 0.7, out: 0.2, bend: 0.7 }, pitch: 0.05 + Math.sin(t * 0.5) * 0.02 }),
  /** A performer's dance: sleeves thrown and circled. */
  dance: (t = 0, k = 0): Pose => ({
    turn: Math.sin(t * 1.3 + k) * 0.5, lean: Math.sin(t * 0.9 + k) * 0.12, bow: Math.sin(t * 1.1) * 0.08,
    l: { lift: 1.2 + Math.sin(t * 2.1 + k) * 1.0, out: 0.6 + Math.sin(t * 1.7) * 0.4, bend: 0.4 + Math.sin(t * 2.6) * 0.3 },
    r: { lift: 0.8 + Math.sin(t * 2.1 + k + 2.2) * 0.9, out: 0.5 + Math.sin(t * 1.5 + 1) * 0.4, bend: 0.5 },
    yaw: Math.sin(t * 1.2 + k) * 0.3, roll: Math.sin(t * 1.4) * 0.1, flutter: 1,
  }),
  /** A performer's poised stance, sleeve raised to the face (亮相). */
  pose: (t = 0): Pose => ({ turn: 0.35, lean: 0.06, r: { lift: 1.6, out: 0.4, bend: 1.2 }, l: { lift: 0.25, out: 0.5, bend: 0.5 }, yaw: -0.4, roll: 0.1, flutter: 0.3 + Math.sin(t * 2) * 0.1 }),
  /** Hands on the shoulders of a cart shaft or a rein: riding, driving. */
  hold: (t = 0): Pose => ({ l: { lift: 0.9, out: 0.1, bend: 0.8 }, r: { lift: 0.9, out: 0.1, bend: 0.8 }, pitch: Math.sin(t * 3) * 0.02 }),
  /** Fanning oneself. */
  fan: (t = 0): Pose => ({ r: { lift: 1.2, out: 0.3 + Math.sin(t * 6) * 0.15, twist: 0.3, bend: 1.4 }, l: { lift: 0.4, out: 0.2, bend: 0.9 }, yaw: 0.1 }),
  /** Stroking a beard. */
  stroke: (t = 0): Pose => ({ pitch: -0.08, r: { lift: 1.05, out: 0.05, twist: 0.4, bend: 1.9 + Math.sin(t * 2) * 0.12 }, l: { lift: 0.5, out: 0.3, twist: -0.4, bend: 1.4 } }),
  /** Whispering: leaning in, a hand shielding the mouth. */
  whisper: (t = 0): Pose => ({ bow: 0.3, lean: -0.1, r: { lift: 1.3, out: -0.1, twist: 0.8, bend: 1.9 }, l: { lift: 0.2, out: 0.1, bend: 0.4 }, yaw: -0.3, mouth: 0.3 + 0.3 * Math.sin(t * 14) }),
  /** Tugging someone's hand or sleeve. */
  tug: (t = 0): Pose => ({ lean: -0.1 + Math.sin(t * 4) * 0.06, bow: 0.15, r: { lift: 1.2, out: 0.5 + Math.sin(t * 4) * 0.1, bend: 0.2 }, l: { lift: 1.0, out: 0.4, bend: 0.3 }, mouth: 0.5 }),
  /** Writing with a brush on a table. */
  write: (t = 0): Pose => ({ bow: 0.35, pitch: 0.4, r: { lift: 0.95 + Math.sin(t * 2.6) * 0.06, out: 0.2 + Math.sin(t * 3.3) * 0.08, bend: 1.0 }, l: { lift: 0.6, out: 0.3, bend: 1.5 } }),
  /** A sleeve raised to wipe tears. */
  weep: (t = 0): Pose => ({ bow: 0.25, pitch: 0.4, r: { lift: 1.35, out: 0.05, twist: 0.6, bend: 2.0 + Math.sin(t * 5) * 0.05 }, l: { lift: 0.5, out: 0.2, bend: 1.4 } }),
};

/** Blends two poses. */
export function mix(a: Pose, b: Pose, u: number): Pose {
  const k = clamp01(u);
  const n = (x?: number, y?: number) => (x ?? 0) + ((y ?? 0) - (x ?? 0)) * k;
  const arm = (x?: ArmPose, y?: ArmPose): ArmPose => ({ lift: n(x?.lift ?? 0.05, y?.lift ?? 0.05), out: n(x?.out ?? 0.12, y?.out ?? 0.12), twist: n(x?.twist, y?.twist), bend: n(x?.bend ?? 0.15, y?.bend ?? 0.15) });
  return {
    bow: n(a.bow, b.bow), lean: n(a.lean, b.lean), turn: n(a.turn, b.turn), yaw: n(a.yaw, b.yaw), pitch: n(a.pitch, b.pitch), roll: n(a.roll, b.roll),
    l: arm(a.l, b.l), r: arm(a.r, b.r), kneel: n(a.kneel, b.kneel), sit: n(a.sit, b.sit), mouth: n(a.mouth, b.mouth),
    flutter: n(a.flutter, b.flutter),
    walk: b.walk ?? a.walk, stride: b.walk !== undefined ? (b.stride ?? 1) * k + (a.walk !== undefined ? (a.stride ?? 1) * (1 - k) : 0) : a.walk !== undefined ? (a.stride ?? 1) * (1 - k) : undefined,
  };
}

/**
 * A timeline of poses: [[time, pose(t)], ...]. Each pose holds from its time and blends in over
 * `blend` seconds from the one before.
 */
export function cue(t: number, keys: [number, (t: number) => Pose][], blend = 0.45): Pose {
  let i = 0;
  while (i < keys.length - 1 && t >= keys[i + 1][0]) i++;
  const [at, now] = keys[i];
  const current = now(t);
  if (i === 0) return current;
  const u = ease((t - at) / blend);
  return u >= 1 ? current : mix(keys[i - 1][1](t), current, u);
}

/** Walks a figure along a path of [x, z] points between two times; returns true while moving. */
export function walkAlong(fig: Figure, t: number, t0: number, t1: number, points: [number, number][], base: Pose = G.rest(t), speed = 7) {
  const u = clamp01((t - t0) / Math.max(0.01, t1 - t0));
  const curve = new THREE.CatmullRomCurve3(points.map(([x, z]) => new THREE.Vector3(x, 0, z)));
  const e = u; // constant pace looks like walking; ease only at the very ends
  const p = curve.getPoint(e);
  const ahead = curve.getPoint(Math.min(1, e + 0.01)), behind = curve.getPoint(Math.max(0, e - 0.01));
  fig.root.position.x = p.x; fig.root.position.z = p.z;
  const moving = t > t0 && t < t1;
  if (ahead.distanceTo(behind) > 1e-5) fig.root.rotation.y = Math.atan2(ahead.x - behind.x, ahead.z - behind.z);
  fig.pose(moving ? { ...base, walk: t * speed, stride: Math.min(1, Math.min(t - t0, t1 - t) * 3) } : base);
  return moving;
}

/** Turns a figure to face a point (x, z) in its parent's space. */
export function face(fig: Figure, x: number, z: number) {
  fig.root.rotation.y = Math.atan2(x - fig.root.position.x, z - fig.root.position.z);
}

// --- Cast of the novel ----------------------------------------------------------------------

/** How the recurring characters look, so they are recognisable from film to film. */
export const CAST = {
  /** 梅子玉 Mei Ziyu: young, fine features, pale robe, bare head with a jade pin. */
  ziyu: { headwear: 'bare', robe: 0xe4dfd6, jacket: 0xc9c2b8, sash: 0x8f887e, face: 'fine' } as FigureSpec,
  /** 颜仲清 Yan Zhongqing: a melon cap, mid-grey robe, composed. */
  zhongqing: { headwear: 'cap', robe: 0xa39b91, jacket: 0x6e675f, face: 'fine' } as FigureSpec,
  /** 史南湘 Shi Nanxiang: the wild poet in a dark robe and a soft hat with flying tails. */
  nanxiang: { headwear: 'scarf', robe: 0x5a534c, sash: 0xd6d0c6, face: 'plain', beard: 'whiskers' } as FigureSpec,
  /** 王恂 Wang Xun: handsome, a cap, a pale jacket. */
  wangxun: { headwear: 'cap', robe: 0xcfc8bc, jacket: 0x8c857c, face: 'fine' } as FigureSpec,
  /** 梅士燮 Mei Shixie: Hanlin scholar, stern: an official hat, dark robe, long beard. */
  shixie: { headwear: 'official', robe: 0x4a443e, jacket: 0x2f2a26, beard: 'long', face: 'plain', height: 1.76 } as FigureSpec,
  /** 颜夫人 Lady Yan. */
  ladyYan: { headwear: 'lady', robe: 0xb9b2a8, jacket: 0x7d766e, cut: 'skirt', rouge: true, height: 1.6 } as FigureSpec,
  /** 李先生 the tutor, Li Xingquan: an old teacher. */
  teacher: { headwear: 'cap', robe: 0x7d766e, beard: 'long', white: true, face: 'plain', height: 1.68 } as FigureSpec,
  page: { headwear: 'tufts', robe: 0xb9b2a8, cut: 'short', height: 1.38, face: 'plain' } as FigureSpec,
  maid: { headwear: 'maid', robe: 0xd6d0c6, jacket: 0x9c958b, cut: 'skirt', height: 1.5, rouge: true } as FigureSpec,
  servant: { headwear: 'cap', robe: 0x8c857c, cut: 'short', face: 'plain' } as FigureSpec,
  /** 王文辉 Wang Wenhui: third-rank official, square face, grizzled beard, imposing. */
  wenhui: { headwear: 'official', robe: 0x3f3a35, jacket: 0x2a2522, beard: 'full', face: 'coarse', girth: 1.25, height: 1.8 } as FigureSpec,
  /** 魏聘才 Wei Pincai: slight, bright-eyed, nimble. */
  pincai: { headwear: 'cap', robe: 0xb9b2a8, jacket: 0x5a534c, face: 'fine', girth: 0.9, height: 1.66 } as FigureSpec,
  /** 李元茂 Li Yuanmao: heavy, sallow, thick-browed, short-sighted. */
  yuanmao: { headwear: 'cap', robe: 0x9c958b, face: 'coarse', girth: 1.35, height: 1.66, skin: 0xd9d0c0 } as FigureSpec,
  /** 孙嗣徽 Sun Sihui: sunken neck, puffed cheeks, red nose. */
  sihui: { headwear: 'cap', robe: 0x8c857c, jacket: 0x4a443e, face: 'coarse', girth: 1.3, height: 1.62 } as FigureSpec,
  /** 孙嗣元 Sun Siyuan: buck teeth and a stammer. */
  siyuan: { headwear: 'cap', robe: 0xa39b91, face: 'coarse', girth: 1.0, height: 1.6 } as FigureSpec,
  /** 孙亮功 Sun Lianggong: a flat, purplish face, a few whiskers, official's hat. */
  lianggong: { headwear: 'official', robe: 0x5a534c, jacket: 0x3f3a35, beard: 'goatee', face: 'plain', girth: 1.15 } as FigureSpec,
  guest: { headwear: 'official', robe: 0x6e675f, jacket: 0x3f3a35, beard: 'full', face: 'plain', girth: 1.1 } as FigureSpec,
  /** A young dan in costume. */
  dan: { headwear: 'dan', robe: 0xf0ebe2, jacket: 0xd6d0c6, sash: VERMILION, cut: 'skirt', waterSleeves: true, rouge: true, height: 1.62 } as FigureSpec,
  /** A young dan in everyday dress. */
  youth: { headwear: 'bare', robe: 0xe9e4db, jacket: 0xb9b2a8, face: 'fine', rouge: true, height: 1.6 } as FigureSpec,
  elder: { headwear: 'cap', robe: 0x6e675f, beard: 'long', white: true, face: 'plain', height: 1.68 } as FigureSpec,
  official: { headwear: 'official', robe: 0x3f3a35, jacket: 0x2a2522, beard: 'full', face: 'coarse', girth: 1.2 } as FigureSpec,
  pedant: { headwear: 'cap', robe: 0x9c958b, beard: 'goatee', face: 'plain', girth: 0.85, height: 1.66 } as FigureSpec,
  merchant: { headwear: 'cap', robe: 0x6e675f, jacket: 0x3f3a35, face: 'coarse', girth: 1.4, height: 1.66 } as FigureSpec,
  escort: { headwear: 'bare', robe: 0x4a443e, jacket: 0x2f2a26, face: 'coarse', skin: 0xb8ad9c, height: 1.55 } as FigureSpec,
  clown: { headwear: 'cap', robe: 0x9c958b, cut: 'short', face: 'clown', height: 1.55 } as FigureSpec,
  deity: { headwear: 'crown', robe: 0xf0ebe2, jacket: 0xd6d0c6, sash: 0x9c958b, beard: 'long', white: true, height: 1.85 } as FigureSpec,
  lady: { headwear: 'lady', robe: 0xd6d0c6, jacket: 0x9c958b, cut: 'skirt', rouge: true, height: 1.58 } as FigureSpec,
} satisfies Record<string, FigureSpec>;
