import * as THREE from 'three';
import type { Kit } from '../cinemaKit';
import { flat, tone, VERMILION, type Figure } from './figure';
import { DARK, hall, platform, roof, STONE, WOOD } from './architecture';
import { branch } from './nature';
import { writing } from './props';
import { clamp01 } from '../cinemaKit';

/*
 * The theatre's and the album's things: what performers hold, the placards that name the plays,
 * the album itself with its turning leaves, and the emblems' creatures and wonders (a pagoda of
 * jade, a marble terrace, a moon, coral, a qilin, a tiger, drums).
 */

export type Held = 'fan' | 'flute' | 'willow' | 'sword' | 'clappers' | 'censer' | 'gui' | 'brush' | 'cup' | 'whisk' | 'pipa';

/** Puts something in a figure's right (or left) hand. */
export function hold(kit: Kit, fig: Figure, kind: Held, hand: 'l' | 'r' = 'r') {
  const g = kit.group(fig.hands[hand], 0, -0.05, 0);
  if (kind === 'fan') {
    const fan = kit.mesh(new THREE.CircleGeometry(0.26, 24, 0, Math.PI * 0.9), tone(0xf0ebe2, true), g, 0, 0, 0.02);
    fan.rotation.set(0, Math.PI / 2, Math.PI * 0.55);
    for (let k = 0; k < 9; k++) { const rib = kit.box(g, tone(DARK), [0, 0, 0], [0.004, 0.26, 0.004]); rib.rotation.x = -Math.PI * 0.05 + k * 0.1; rib.position.y = 0.0; rib.geometry.translate(0, 0.13, 0); }
  } else if (kind === 'flute') {
    const f = kit.mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.6, 8), tone(0x6e675f), g, 0, 0, 0.05);
    f.rotation.z = Math.PI / 2;
  } else if (kind === 'willow') {
    branch(kit, g, [[0, 0, 0], [0.05, 0.3, 0.05], [0.12, 0.55, 0.08]], 0.01, 0.004);
    for (let k = 0; k < 7; k++) { const s = kit.mesh(new THREE.CylinderGeometry(0.004, 0.002, 0.35, 3), tone(0x5a534c), g, 0.03 + k * 0.012, 0.35 + k * 0.03, 0.06); s.position.y -= 0.15; s.rotation.z = 0.1 * k; }
  } else if (kind === 'sword') {
    const s = kit.group(g, 0, 0, 0);
    kit.box(s, tone(DARK), [0, 0.08, 0], [0.03, 0.16, 0.03]);
    kit.box(s, tone(0x4a443e), [0, 0.17, 0], [0.12, 0.02, 0.04]);
    kit.box(s, tone(0xe6e0d6), [0, 0.6, 0], [0.035, 0.85, 0.006]);
    kit.mesh(new THREE.SphereGeometry(0.03, 6, 5), flat(VERMILION), s, 0, -0.03, 0);
    s.rotation.x = -Math.PI / 2;
  } else if (kind === 'clappers') {
    for (let k = 0; k < 3; k++) kit.box(g, tone(0xe6e0d6), [0, 0.08, k * 0.012 - 0.012], [0.05, 0.22, 0.008]);
    kit.box(g, flat(VERMILION), [0, 0.2, 0], [0.012, 0.04, 0.04]);
  } else if (kind === 'censer') {
    kit.mesh(new THREE.SphereGeometry(0.09, 12, 8, 0, Math.PI * 2, Math.PI * 0.4, Math.PI * 0.6), tone(0x3f3a35, true), g, 0, 0.12, 0.08);
  } else if (kind === 'gui') {
    const j = kit.box(g, flat(0xf4f0e8), [0, 0.2, 0.03], [0.06, 0.42, 0.015]);
    j.rotation.x = -0.2;
  } else if (kind === 'brush') {
    kit.mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.24, 6), tone(0x6e675f), g, 0, 0.05, 0);
    kit.mesh(new THREE.ConeGeometry(0.014, 0.05, 6), tone(0x1c1816), g, 0, -0.09, 0).rotation.x = Math.PI;
  } else if (kind === 'cup') {
    kit.mesh(new THREE.LatheGeometry([[0, 0], [0.02, 0], [0.035, 0.03], [0.04, 0.05]].map(([a, b]) => new THREE.Vector2(a, b)), 12), tone(0xe6e0d6, true), g, 0, 0.02, 0.03);
  } else if (kind === 'whisk') {
    kit.mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.3, 4), tone(DARK), g, 0, 0.1, 0);
    kit.mesh(new THREE.ConeGeometry(0.05, 0.3, 8), tone(0xf0ebe2), g, 0, 0.35, 0);
  } else if (kind === 'pipa') {
    kit.mesh(new THREE.SphereGeometry(0.16, 14, 10), tone(0x6e675f), g, 0, 0.05, 0.08).scale.set(1, 1.4, 0.3);
    kit.box(g, tone(DARK), [0, 0.35, 0.08], [0.04, 0.4, 0.03]);
  }
  return g;
}

/**
 * A water-board placard (水牌) naming a play: a pale board in a dark frame on cords. Returns the
 * group, hung from its top edge; drop it in by animating y.
 */
export function placard(kit: Kit, parent: THREE.Object3D, text: string, { x = 0, y = 0, z = 0, size = 0.36 }: { x?: number; y?: number; z?: number; size?: number } = {}) {
  const g = kit.group(parent, x, y, z);
  const n = [...text].length, h = n * size + size * 1.3, w = size * 1.8;
  kit.box(g, tone(DARK), [0, -h / 2, 0], [w, h, 0.05]);
  kit.box(g, tone(0xf4f0e8), [0, -h / 2, 0.028], [w * 0.8, h - size * 0.4, 0.005]);
  writing(kit, g, text, { size, margin: 0.1, x: 0, y: -h / 2, z: 0.033 });
  for (const side of [-1, 1]) kit.box(g, tone(DARK), [side * w * 0.35, 1.5, 0], [0.012, 3, 0.012]);
  return g;
}

/**
 * The 《花选》 album lying open on a surface: two boards, a leaf that turns (`turn(0..1)` flips it
 * from right to left), and whatever the pages carry. Its spine runs along z at the group's origin.
 */
export function album(kit: Kit, parent: THREE.Object3D, { x = 0, y = 0, z = 0, w = 0.34, d = 0.44 }: { x?: number; y?: number; z?: number; w?: number; d?: number } = {}) {
  const g = kit.group(parent, x, y, z);
  for (const side of [-1, 1]) {
    kit.box(g, tone(0x4a4a50), [side * (w / 2 + 0.01), 0.008, 0], [w, 0.016, d + 0.02]);
    kit.box(g, tone(0xf2ede3), [side * (w / 2 + 0.01), 0.022, 0], [w - 0.02, 0.012, d - 0.02]);
  }
  const hinge = kit.group(g, 0, 0.03, 0);
  const leaf = kit.mesh(new THREE.PlaneGeometry(w - 0.02, d - 0.02).translate(w / 2, 0, 0).rotateX(-Math.PI / 2), tone(0xf2ede3, true), hinge);
  return {
    group: g, left: kit.group(g, -w / 2, 0.03, 0), right: kit.group(g, w / 2, 0.03, 0),
    turn: (u: number) => { const k = clamp01(u); hinge.rotation.z = k * Math.PI; leaf.position.y = Math.sin(k * Math.PI) * 0.02; hinge.visible = k > 0.001 && k < 0.999; },
  };
}

/** A tower of several storeys (a pagoda of halls), e.g. the jade tower 琼楼. */
export function tower(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, levels = 3, w = 6, h = 3, shade = 0x9c958b }: { x?: number; z?: number; levels?: number; w?: number; h?: number; shade?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  platform(kit, g, w + 2, w + 2, 0.8, { steps: true });
  let y = 0.8;
  for (let k = 0; k < levels; k++) {
    const ww = w * (1 - k * 0.18);
    const lv = kit.group(g, 0, y, 0);
    kit.box(lv, tone(0xe6e0d6), [0, h / 2, 0], [ww, h, ww]);
    for (let c = 0; c < 4; c++) for (const s of [-1, 1]) kit.box(lv, tone(WOOD), [s * ww / 2, h / 2, (c / 3 - 0.5) * ww], [0.14, h, 0.14]);
    kit.box(lv, tone(DARK), [0, h * 0.95, 0], [ww + 0.3, 0.2, ww + 0.3]);
    // A balcony round each upper storey.
    if (k > 0) kit.box(lv, tone(WOOD), [0, 0.5, 0], [ww + 1, 0.08, ww + 1]);
    roof(kit, lv, ww + 2.2, ww + 2.2, { y: h, rise: k === levels - 1 ? 1.6 : 0.8, shade });
    y += h + (k === levels - 1 ? 0 : 0.8);
  }
  kit.mesh(new THREE.ConeGeometry(0.25, 1.4, 8), tone(DARK), g, 0, y + 2.1, 0);
  return g;
}

/** A marble terrace with carved balustrades (瑶台). */
export function terrace(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, w = 12, d = 9, h = 1.6 }: { x?: number; z?: number; w?: number; d?: number; h?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  platform(kit, g, w, d, h, { steps: true });
  const rail = (x0: number, z0: number, x1: number, z1: number) => {
    const n = Math.round(Math.hypot(x1 - x0, z1 - z0) / 0.9);
    for (let k = 0; k <= n; k++) {
      const u = k / n;
      kit.box(g, tone(0xe6e0d6), [x0 + (x1 - x0) * u, h + 0.45, z0 + (z1 - z0) * u], [0.14, 0.9, 0.14]);
      kit.mesh(new THREE.SphereGeometry(0.1, 8, 6), tone(0xe6e0d6), g, x0 + (x1 - x0) * u, h + 0.95, z0 + (z1 - z0) * u);
    }
    const len = Math.hypot(x1 - x0, z1 - z0);
    const bar = kit.box(g, tone(STONE), [(x0 + x1) / 2, h + 0.7, (z0 + z1) / 2], [len, 0.08, 0.08]);
    bar.rotation.y = -Math.atan2(z1 - z0, x1 - x0);
  };
  rail(-w / 2, -d / 2, w / 2, -d / 2);
  rail(-w / 2, -d / 2, -w / 2, d / 2);
  rail(w / 2, -d / 2, w / 2, d / 2);
  rail(-w / 2, d / 2, -1.8, d / 2);
  rail(1.8, d / 2, w / 2, d / 2);
  return { group: g, top: h };
}

/** A great moon: a disc of bare paper inside a ring of pale wash (烘云托月), always facing +z. */
export function moon(kit: Kit, parent: THREE.Object3D, x: number, y: number, z: number, r = 6) {
  const g = kit.group(parent, x, y, z);
  kit.mesh(new THREE.CircleGeometry(r * 1.8, 64), flat(0xd6d0c6, { fog: false, transparent: true, opacity: 0.8 }), g);
  kit.mesh(new THREE.CircleGeometry(r * 1.35, 64), flat(0xe4ded4, { fog: false }), g, 0, 0, 0.01);
  kit.mesh(new THREE.CircleGeometry(r, 64), flat(0xfbf9f4, { fog: false }), g, 0, 0, 0.02);
  return g;
}

/** Branching coral in vermilion rising from the sea floor. */
export function coral(kit: Kit, parent: THREE.Object3D, x: number, z: number, { h = 3, rand = Math.random }: { h?: number; rand?: () => number } = {}) {
  const g = kit.group(parent, x, 0, z);
  const grow = (from: THREE.Vector3, dir: THREE.Vector3, len: number, r: number, depth: number) => {
    const end = from.clone().addScaledVector(dir, len);
    const mid = from.clone().lerp(end, 0.5).add(new THREE.Vector3((rand() - 0.5) * len * 0.3, 0, (rand() - 0.5) * len * 0.3));
    branch(kit, g, [from.toArray() as [number, number, number], mid.toArray() as [number, number, number], end.toArray() as [number, number, number]], r, r * 0.7, VERMILION);
    if (depth > 0) for (let k = 0; k < 2; k++) grow(end, dir.clone().add(new THREE.Vector3((rand() - 0.5) * 1.3, 0.4, (rand() - 0.5) * 1.3)).normalize(), len * 0.7, r * 0.65, depth - 1);
  };
  grow(new THREE.Vector3(), new THREE.Vector3(0, 1, 0), h * 0.4, h * 0.05, 3);
  // Coral is flat vermilion: swap the branch materials.
  g.traverse(o => { const m = o as THREE.Mesh; if (m.isMesh) m.material = flat(VERMILION); });
  return g;
}

/** A qilin: a deer-bodied, scaled beast with a single horn and a flaming tail. update(t, galloping). */
export function qilin(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, s = 1, shade = 0xe6e0d6 }: { x?: number; z?: number; s?: number; shade?: number } = {}) {
  const g = kit.group(parent, x, 0, z); g.scale.setScalar(s);
  const hide = tone(shade), ink = tone(0x2f2a26);
  const body = kit.group(g, 0, 1.2, 0);
  kit.mesh(new THREE.SphereGeometry(0.42, 16, 12), hide, body).scale.set(0.8, 0.85, 1.7);
  // Scales along the back as ink ridges.
  for (let k = 0; k < 7; k++) kit.mesh(new THREE.ConeGeometry(0.06, 0.16, 5), ink, body, 0, 0.36, -0.5 + k * 0.16);
  const neck = kit.group(body, 0, 0.2, 0.55); neck.rotation.x = 0.5;
  kit.mesh(new THREE.CylinderGeometry(0.15, 0.22, 0.6, 10), hide, neck, 0, 0.3, 0);
  const head = kit.group(neck, 0, 0.62, 0.05);
  kit.mesh(new THREE.SphereGeometry(0.2, 12, 10), hide, head).scale.set(0.9, 0.9, 1.3);
  kit.mesh(new THREE.ConeGeometry(0.035, 0.34, 6), ink, head, 0, 0.22, -0.05).rotation.x = -0.4;
  for (const side of [-1, 1]) kit.mesh(new THREE.SphereGeometry(0.03, 6, 5), ink, head, side * 0.1, 0.05, 0.15);
  const mane = kit.group(head, 0, 0, -0.1);
  for (let k = 0; k < 6; k++) { const f = kit.mesh(new THREE.ConeGeometry(0.05, 0.3, 5), ink, mane, (k % 2 ? 1 : -1) * 0.1, -0.1 - k * 0.05, -0.1); f.rotation.x = -1.8; }
  const tail = kit.group(body, 0, 0.1, -0.7);
  for (let k = 0; k < 5; k++) { const f = kit.mesh(new THREE.ConeGeometry(0.06 - k * 0.008, 0.4, 5), k % 2 ? flat(VERMILION) : ink, tail, (k - 2) * 0.05, 0.1 + k * 0.03, -0.2); f.rotation.x = -2.2 + k * 0.15; }
  const legs = [[-0.2, 0.45], [0.2, 0.45], [-0.2, -0.45], [0.2, -0.45]].map(([lx, lz], i) => {
    const hip = kit.group(g, lx, 1.05, lz);
    kit.mesh(new THREE.CylinderGeometry(0.07, 0.04, 1.0, 8), hide, hip, 0, -0.5, 0);
    kit.mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.06, 8), ink, hip, 0, -1.02, 0);
    return { hip, phase: [0, Math.PI, Math.PI / 2, Math.PI * 1.5][i] };
  });
  // Clouds under its hooves: it walks on air.
  const clouds = legs.map(({ hip }) => kit.mesh(new THREE.SphereGeometry(0.16, 10, 8), tone(0xf0ebe2), g, hip.position.x, 0.02, hip.position.z));
  return {
    group: g, head,
    update: (t: number, moving = true) => {
      legs.forEach(({ hip, phase }) => { hip.rotation.x = moving ? Math.sin(t * 5 + phase) * 0.45 : 0; });
      body.position.y = 1.2 + (moving ? Math.abs(Math.sin(t * 5)) * 0.05 : Math.sin(t) * 0.02);
      tail.rotation.x = Math.sin(t * 3) * 0.2; mane.rotation.x = Math.sin(t * 4) * 0.15;
      clouds.forEach((c, i) => c.scale.setScalar(1 + Math.sin(t * 3 + i) * 0.2));
    },
  };
}

/** A tiger, crouching and springing: pounce(u) 0 crouched → 1 in mid-leap. */
export function tiger(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, rot = 0, s = 1 }: { x?: number; z?: number; rot?: number; s?: number } = {}) {
  const g = kit.group(parent, x, 0, z); g.rotation.y = rot; g.scale.setScalar(s);
  const fur = tone(0xb9b2a8), ink = tone(0x1c1816);
  const body = kit.group(g, 0, 0.7, 0);
  kit.mesh(new THREE.SphereGeometry(0.4, 16, 12), fur, body).scale.set(0.85, 0.75, 1.9);
  for (let k = 0; k < 8; k++) { const st = kit.mesh(new THREE.TorusGeometry(0.33, 0.03, 4, 12, Math.PI), ink, body, 0, 0, -0.55 + k * 0.15); st.rotation.y = Math.PI / 2; st.rotation.z = Math.PI / 2 + 0.2; st.scale.set(1, 0.9, 1); }
  const head = kit.group(body, 0, 0.18, 0.78);
  kit.mesh(new THREE.SphereGeometry(0.28, 14, 12), fur, head).scale.set(1, 0.9, 1);
  for (const side of [-1, 1]) {
    kit.mesh(new THREE.SphereGeometry(0.035, 6, 5), ink, head, side * 0.1, 0.08, 0.24);
    kit.mesh(new THREE.ConeGeometry(0.07, 0.12, 5), fur, head, side * 0.17, 0.24, -0.02);
  }
  const jaw = kit.mesh(new THREE.SphereGeometry(0.14, 10, 8), fur, head, 0, -0.12, 0.18);
  kit.mesh(new THREE.BoxGeometry(0.16, 0.04, 0.05), flat(VERMILION), head, 0, -0.1, 0.24);
  const tail = kit.group(body, 0, 0.1, -0.75);
  kit.mesh(new THREE.CylinderGeometry(0.04, 0.03, 0.8, 6), fur, tail, 0, -0.4, 0);
  const legs = [[-0.2, 0.5], [0.2, 0.5], [-0.2, -0.5], [0.2, -0.5]].map(([lx, lz]) => {
    const hip = kit.group(g, lx, 0.62, lz);
    kit.mesh(new THREE.CylinderGeometry(0.08, 0.06, 0.62, 8), fur, hip, 0, -0.31, 0);
    return hip;
  });
  return {
    group: g,
    update: (t: number, pounce = 0) => {
      const p = clamp01(pounce);
      body.position.y = 0.55 + p * 0.9 + Math.sin(t * 2) * 0.02;
      body.rotation.x = -p * 0.4;
      legs.forEach((l, i) => { l.position.y = 0.5 + p * 0.9; l.rotation.x = (i < 2 ? -1 : 1) * p * 0.9; });
      head.rotation.x = -0.1 + Math.sin(t * 3) * 0.05 - p * 0.2;
      jaw.position.y = -0.12 - p * 0.06;
      tail.rotation.x = 0.6 + Math.sin(t * 4) * 0.4;
    },
  };
}

/** A big drum on a stand, and its sticks' strike: beat(t) returns the drum's shiver. */
export function drum(kit: Kit, parent: THREE.Object3D, x: number, z: number, r = 0.45) {
  const g = kit.group(parent, x, 0, z);
  for (const s of [-1, 1]) for (const f of [-1, 1]) kit.box(g, tone(WOOD), [s * r * 0.7, 0.5, f * r * 0.5], [0.05, 1, 0.05]);
  const skin = kit.group(g, 0, 1.1, 0);
  kit.mesh(new THREE.CylinderGeometry(r, r, r * 1.1, 24), flat(VERMILION), skin).rotation.x = Math.PI / 2;
  for (const f of [-1, 1]) kit.mesh(new THREE.CircleGeometry(r * 0.98, 24), tone(0xe6e0d6), skin, 0, 0, f * r * 0.56).rotation.y = f < 0 ? Math.PI : 0;
  return { group: g, update: (t: number, rate = 4) => { skin.scale.setScalar(1 + Math.max(0, Math.sin(t * rate)) * 0.03); } };
}

/** A lady's hall on a high base, for the Pavilion of Approaching Spring and other palaces. */
export function palaceHall(kit: Kit, parent: THREE.Object3D, x = 0, z = 0, w = 12) {
  return hall(kit, parent, { x, z, w, d: w * 0.55, h: 4, base: 2.2, bays: 5, plaque: true });
}
