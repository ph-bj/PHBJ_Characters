import * as THREE from 'three';
import { inkRevealMaterial, WRITING_INK, WRITING_RED, type Kit } from '../cinemaKit';
import { appFont, fillCentered } from '../fonts';
import { contactShadow, flat, tone, VERMILION } from './figure';
import { DARK, WOOD } from './architecture';

/*
 * Furniture and small things in 3D: tables, chairs, desks, shelves, screens, scrolls, lamps, books,
 * cards, cups, jars, swords, a zither. Sizes are in metres.
 */

type Ctx = CanvasRenderingContext2D;
export function paintCanvas(w: number, h: number, draw: (ctx: Ctx) => void) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d')!);
  return c;
}

/**
 * Writing painted into a canvas in WRITING_INK (or vermilion): the ink pass prints it as clean, even
 * ink, and unlike calligraphy on the writing layer, things in front of it still hide it. Columns read
 * right to left. `paper` fills the background (null leaves it clear). Reveal with `set(0..1)`.
 */
export function writing(kit: Kit, parent: THREE.Object3D, text: string | string[], { size = 0.2, gap = 1.3, paper = null as number | null, red = false, margin = 0.6, x = 0, y = 0, z = 0, weight = 700 }: { size?: number; gap?: number; paper?: number | null; red?: boolean; margin?: number; x?: number; y?: number; z?: number; weight?: number } = {}) {
  const lines = Array.isArray(text) ? text : [text];
  const rows = Math.max(...lines.map(l => [...l].length)), cols = lines.length;
  const cell = 160;
  const W = Math.ceil(((cols - 1) * gap + 1 + margin * 2) * cell), H = Math.ceil((rows + margin * 2) * cell);
  const canvas = document.createElement('canvas'); canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d')!;
  const font = appFont(cell * 0.84, weight);
  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    if (paper !== null) { ctx.fillStyle = `#${new THREE.Color(paper).getHexString()}`; ctx.fillRect(0, 0, W, H); }
    ctx.fillStyle = red ? WRITING_RED : WRITING_INK; ctx.font = font;
    lines.forEach((line, c) => [...line].forEach((ch, r) => fillCentered(ctx, ch, W - (margin + 0.5 + c * gap) * cell, (margin + 0.5 + r) * cell)));
  };
  draw();
  const texture = kit.canvasTexture(canvas, true);
  if (typeof document !== 'undefined' && document.fonts) document.fonts.load(font, lines.join('')).then(() => { draw(); texture.needsUpdate = true; }, () => {});
  const material = inkRevealMaterial(texture, undefined, { sharp: true });
  const mesh = kit.mesh(new THREE.PlaneGeometry(W / cell * size, H / cell * size), material, parent, x, y, z);
  material.uniforms.uReveal.value = 1;
  return { mesh, material, set: (u: number) => { material.uniforms.uReveal.value = u; }, width: W / cell * size, height: H / cell * size };
}

/** A painted picture on a canvas texture (landscape, bamboo, plum, orchid...), for scrolls and screens. */
export type Picture = 'landscape' | 'bamboo' | 'plum' | 'orchid' | 'peony' | 'birds' | 'waves' | 'moon' | 'blank';
export function picture(kind: Picture, w = 256, h = 512) {
  return paintCanvas(w, h, ctx => {
    ctx.fillStyle = '#f2ede3'; ctx.fillRect(0, 0, w, h);
    const ink = (a: number) => `rgba(40,32,28,${a})`;
    const rnd = (() => { let s = w * 7 + h + kind.length * 13; return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; }; })();
    if (kind === 'landscape' || kind === 'moon') {
      for (let l = 0; l < 3; l++) {
        ctx.fillStyle = ink(0.12 + l * 0.14);
        ctx.beginPath(); ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 8) ctx.lineTo(x, h * (0.35 + l * 0.18) - Math.abs(Math.sin(x * 0.02 + l * 2)) * h * (0.22 - l * 0.05) - rnd() * 4);
        ctx.lineTo(w, h); ctx.fill();
      }
      if (kind === 'moon') { ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(w * 0.7, h * 0.15, w * 0.12, 0, Math.PI * 2); ctx.fill(); }
      ctx.strokeStyle = ink(0.8); ctx.lineWidth = 2;
      for (let k = 0; k < 3; k++) { const x = w * (0.2 + k * 0.1); ctx.beginPath(); ctx.moveTo(x, h * 0.85); ctx.lineTo(x + 3, h * 0.7); ctx.stroke(); }
    } else if (kind === 'bamboo') {
      for (let k = 0; k < 4; k++) {
        const x = w * (0.2 + k * 0.2); ctx.strokeStyle = ink(0.6 + k * 0.1); ctx.lineWidth = 6;
        ctx.beginPath(); ctx.moveTo(x, h); ctx.lineTo(x + 10, h * 0.1); ctx.stroke();
        ctx.fillStyle = ink(0.75);
        for (let j = 0; j < 6; j++) { ctx.save(); ctx.translate(x + 6, h * (0.2 + j * 0.12)); ctx.rotate(-0.5 - rnd()); ctx.beginPath(); ctx.ellipse(18, 0, 22, 4, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore(); }
      }
    } else if (kind === 'plum' || kind === 'peony' || kind === 'orchid') {
      ctx.strokeStyle = ink(0.85); ctx.lineWidth = kind === 'orchid' ? 3 : 8;
      if (kind === 'orchid') for (let k = 0; k < 9; k++) { ctx.beginPath(); ctx.moveTo(w * 0.5, h * 0.9); ctx.quadraticCurveTo(w * (0.2 + k * 0.08), h * 0.5, w * (0.1 + k * 0.1), h * (0.35 + rnd() * 0.2)); ctx.stroke(); }
      else { ctx.beginPath(); ctx.moveTo(w * 0.1, h); ctx.quadraticCurveTo(w * 0.5, h * 0.6, w * 0.4, h * 0.3); ctx.quadraticCurveTo(w * 0.35, h * 0.15, w * 0.8, h * 0.1); ctx.stroke(); }
      ctx.fillStyle = '#c0321e';
      const n = kind === 'peony' ? 3 : kind === 'orchid' ? 4 : 14;
      for (let k = 0; k < n; k++) { const r = kind === 'peony' ? 26 : 7; ctx.beginPath(); ctx.arc(w * (0.3 + rnd() * 0.5), h * (0.1 + rnd() * 0.5), r, 0, Math.PI * 2); ctx.fill(); }
    } else if (kind === 'birds') {
      ctx.strokeStyle = ink(0.85); ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(0, h * 0.6); ctx.quadraticCurveTo(w * 0.5, h * 0.5, w, h * 0.3); ctx.stroke();
      ctx.fillStyle = ink(0.85); ctx.beginPath(); ctx.ellipse(w * 0.5, h * 0.48, 26, 14, -0.3, 0, Math.PI * 2); ctx.fill();
    } else if (kind === 'waves') {
      ctx.strokeStyle = ink(0.6); ctx.lineWidth = 2;
      for (let y = 20; y < h; y += 18) { ctx.beginPath(); for (let x = 0; x < w; x += 24) { ctx.moveTo(x, y); ctx.quadraticCurveTo(x + 12, y - 8, x + 24, y); } ctx.stroke(); }
    }
  });
}

/** A square or long table with legs and a waisted apron. Its top is at `h`. */
export function table(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, w = 1.4, d = 0.8, h = 0.82, shade = WOOD, rot = 0 }: { x?: number; z?: number; w?: number; d?: number; h?: number; shade?: number; rot?: number } = {}) {
  const g = kit.group(parent, x, 0, z); g.rotation.y = rot;
  kit.box(g, tone(shade), [0, h - 0.03, 0], [w, 0.06, d]);
  kit.box(g, tone(DARK), [0, h - 0.1, 0], [w - 0.1, 0.08, d - 0.1]);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) kit.box(g, tone(shade), [sx * (w / 2 - 0.06), (h - 0.06) / 2, sz * (d / 2 - 0.06)], [0.06, h - 0.06, 0.06]);
  contactShadow(kit, g, w * 1.3, d * 1.4, 0.5);
  return g;
}

/** A round table on a pedestal. */
export function roundTable(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, r = 1.1, h = 0.8 }: { x?: number; z?: number; r?: number; h?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  kit.mesh(new THREE.CylinderGeometry(r, r, 0.07, 40), tone(WOOD), g, 0, h, 0);
  kit.mesh(new THREE.CylinderGeometry(r - 0.06, r - 0.1, 0.12, 40), tone(DARK), g, 0, h - 0.09, 0);
  kit.mesh(new THREE.CylinderGeometry(0.1, 0.35, h - 0.1, 12), tone(DARK), g, 0, (h - 0.1) / 2, 0);
  contactShadow(kit, g, r * 2.8, r * 2.8, 0.5);
  return g;
}

/** An armchair (太师椅) facing +z; seat at 0.48. */
export function chair(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, rot = 0, shade = WOOD }: { x?: number; z?: number; rot?: number; shade?: number } = {}) {
  const g = kit.group(parent, x, 0, z); g.rotation.y = rot;
  kit.box(g, tone(shade), [0, 0.46, 0], [0.62, 0.05, 0.5]);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) kit.box(g, tone(shade), [sx * 0.27, 0.23, sz * 0.21], [0.05, 0.46, 0.05]);
  kit.box(g, tone(shade), [0, 0.85, -0.23], [0.62, 0.75, 0.05]);
  kit.box(g, tone(DARK), [0, 1.24, -0.23], [0.72, 0.07, 0.07]);
  for (const sx of [-1, 1]) kit.box(g, tone(shade), [sx * 0.3, 0.68, 0], [0.05, 0.4, 0.5]);
  return g;
}

/** A stool, round or square. */
export function stool(kit: Kit, parent: THREE.Object3D, x: number, z: number) {
  const g = kit.group(parent, x, 0, z);
  kit.mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.46, 12), tone(WOOD), g, 0, 0.23, 0);
  kit.mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.04, 12), tone(DARK), g, 0, 0.47, 0);
  return g;
}

/** A writing set on a table top at height y: inkstone, brush rack, paper weight, a sheet of paper. */
export function studySet(kit: Kit, parent: THREE.Object3D, y: number, { x = 0, z = 0 }: { x?: number; z?: number } = {}) {
  const g = kit.group(parent, x, y, z);
  kit.box(g, tone(0x2f2a26), [0.35, 0.02, 0.05], [0.18, 0.04, 0.26]);
  const rack = kit.group(g, -0.35, 0, -0.15);
  kit.box(rack, tone(DARK), [0, 0.12, 0], [0.34, 0.03, 0.05]);
  for (const sx of [-1, 1]) kit.box(rack, tone(DARK), [sx * 0.15, 0.06, 0], [0.03, 0.12, 0.08]);
  for (let k = 0; k < 4; k++) {
    kit.mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.2, 5), tone(0x8c857c), rack, -0.1 + k * 0.07, 0.03, 0.01);
    kit.mesh(new THREE.ConeGeometry(0.012, 0.04, 6), tone(0x1c1816), rack, -0.1 + k * 0.07, -0.08, 0.01).rotation.x = Math.PI;
  }
  kit.box(g, tone(0xf4f0e8), [0, 0.004, 0.08], [0.5, 0.005, 0.34]);
  kit.box(g, tone(0x4a443e), [0, 0.02, -0.08], [0.3, 0.02, 0.03]);
  return g;
}

/** A shelf of thread-bound books, antiques and a bronze. */
export function bookshelf(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, w = 1.6, h = 2.2, rot = 0, rand = Math.random }: { x?: number; z?: number; w?: number; h?: number; rot?: number; rand?: () => number } = {}) {
  const g = kit.group(parent, x, 0, z); g.rotation.y = rot;
  for (const sx of [-1, 1]) kit.box(g, tone(WOOD), [sx * w / 2, h / 2, 0], [0.05, h, 0.4]);
  for (let k = 0; k < 4; k++) {
    const y = 0.1 + k * (h - 0.1) / 3.5;
    kit.box(g, tone(WOOD), [0, y, 0], [w, 0.04, 0.4]);
    // Stacks of books, lying flat as Chinese books are kept.
    let cx = -w / 2 + 0.15;
    while (cx < w / 2 - 0.3) {
      const n = 2 + Math.floor(rand() * 5), bw = 0.22 + rand() * 0.1;
      if (rand() < 0.2) { kit.mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.22, 10), tone(0x6e675f), g, cx + 0.1, y + 0.13, 0); cx += 0.3; continue; }
      for (let j = 0; j < n; j++) kit.box(g, tone(j % 2 ? 0x6e675f : 0x8c857c), [cx + bw / 2, y + 0.03 + j * 0.035, 0], [bw, 0.03, 0.28]);
      cx += bw + 0.06;
    }
  }
  return g;
}

/** A folding screen of panels with a painted picture, zig-zagged, facing +z. */
export function screen(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, panels = 4, w = 0.7, h = 2.2, kind = 'landscape' as Picture, rot = 0 }: { x?: number; z?: number; panels?: number; w?: number; h?: number; kind?: Picture; rot?: number } = {}) {
  const g = kit.group(parent, x, 0, z); g.rotation.y = rot;
  const tex = kit.canvasTexture(picture(kind, 512, 400));
  for (let k = 0; k < panels; k++) {
    const p = kit.group(g, (k - (panels - 1) / 2) * w * 0.94, 0, (k % 2) * 0.18);
    p.rotation.y = (k % 2 ? -1 : 1) * 0.25;
    kit.box(p, tone(DARK), [0, h / 2, 0], [w, h, 0.04]);
    const face = tex.clone(); face.needsUpdate = true;
    face.repeat.set(1 / panels, 1); face.offset.set(k / panels, 0);
    kit.mesh(new THREE.PlaneGeometry(w * 0.88, h * 0.78), new THREE.MeshLambertMaterial({ map: face }), p, 0, h * 0.55, 0.025);
  }
  return g;
}

/** A hanging scroll: rods top and bottom, a silk mount and a picture (or leave it blank for writing). */
export function hangingScroll(kit: Kit, parent: THREE.Object3D, { x = 0, y = 2.2, z = 0, w = 0.7, h = 1.8, kind = 'landscape' as Picture }: { x?: number; y?: number; z?: number; w?: number; h?: number; kind?: Picture } = {}) {
  const g = kit.group(parent, x, y, z);
  kit.mesh(new THREE.PlaneGeometry(w, h), tone(0x9c958b), g);
  const tex = kit.canvasTexture(picture(kind, 256, Math.round(256 * h / w)));
  kit.mesh(new THREE.PlaneGeometry(w * 0.84, h * 0.7), new THREE.MeshLambertMaterial({ map: tex }), g, 0, -h * 0.02, 0.005);
  kit.mesh(new THREE.CylinderGeometry(0.025, 0.025, w + 0.12, 8), tone(DARK), g, 0, -h / 2, 0.02).rotation.z = Math.PI / 2;
  kit.mesh(new THREE.CylinderGeometry(0.015, 0.015, w + 0.02, 8), tone(DARK), g, 0, h / 2, 0.02).rotation.z = Math.PI / 2;
  return g;
}

/** An oil lamp on a tall stand, with its light. flicker via update(t). */
export function lamp(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, y = 0, h = 1.3, power = 3, range = 7 }: { x?: number; z?: number; y?: number; h?: number; power?: number; range?: number } = {}) {
  const g = kit.group(parent, x, y, z);
  kit.mesh(new THREE.CylinderGeometry(0.02, 0.025, h, 6), tone(DARK), g, 0, h / 2, 0);
  kit.mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.05, 12), tone(DARK), g, 0, 0.025, 0);
  kit.mesh(new THREE.CylinderGeometry(0.1, 0.05, 0.06, 12), tone(0x6e675f), g, 0, h, 0);
  // A paper shade, lit from within: it stays bare paper in the ink pass.
  kit.mesh(new THREE.CylinderGeometry(0.13, 0.15, 0.32, 12, 1, true), flat(0xffffff, { side: THREE.DoubleSide, transparent: true, opacity: 0.85 }), g, 0, h + 0.17, 0);
  const light = new THREE.PointLight(0xfff6ea, power, range, 1.5);
  light.position.set(0, h + 0.2, 0); g.add(light);
  return { group: g, light, update: (t: number) => { light.intensity = power * (1 + Math.sin(t * 9) * 0.04 + Math.sin(t * 3.7) * 0.05); } };
}

/** A candle on a holder with a vermilion flame. */
export function candle(kit: Kit, parent: THREE.Object3D, x: number, y: number, z: number, power = 1.2) {
  const g = kit.group(parent, x, y, z);
  kit.mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.04, 10), tone(DARK), g, 0, 0.02, 0);
  kit.mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.2, 10), flat(VERMILION), g, 0, 0.14, 0);
  const flame = kit.mesh(new THREE.ConeGeometry(0.012, 0.05, 8), flat(0xffffff), g, 0, 0.27, 0);
  const light = new THREE.PointLight(0xfff6ea, power, 4, 1.5); light.position.set(0, 0.3, 0); g.add(light);
  return { group: g, update: (t: number) => { flame.scale.y = 1 + Math.sin(t * 13) * 0.15; flame.rotation.z = Math.sin(t * 7) * 0.1; light.intensity = power * (1 + Math.sin(t * 11) * 0.06); } };
}

/** A wine or tea cup at (x, y, z). */
export function cup(kit: Kit, parent: THREE.Object3D, x: number, y: number, z: number, s = 1, shade = 0xe6e0d6) {
  return kit.mesh(new THREE.LatheGeometry([[0, 0], [0.02, 0], [0.022, 0.005], [0.035, 0.02], [0.042, 0.045], [0.04, 0.046]].map(([a, b]) => new THREE.Vector2(a * s, b * s)), 16), tone(shade, true), parent, x, y, z);
}
/** A teapot or wine ewer. */
export function pot(kit: Kit, parent: THREE.Object3D, x: number, y: number, z: number, s = 1) {
  const g = kit.group(parent, x, y, z); g.scale.setScalar(s);
  kit.mesh(new THREE.SphereGeometry(0.08, 14, 10), tone(0x6e675f), g, 0, 0.07, 0).scale.y = 0.85;
  kit.mesh(new THREE.CylinderGeometry(0.01, 0.018, 0.1, 6), tone(0x6e675f), g, 0.09, 0.09, 0).rotation.z = -0.8;
  kit.mesh(new THREE.TorusGeometry(0.045, 0.008, 5, 12, Math.PI), tone(0x4a443e), g, -0.07, 0.08, 0).rotation.z = Math.PI / 2;
  kit.mesh(new THREE.SphereGeometry(0.015, 6, 5), tone(0x4a443e), g, 0, 0.14, 0);
  return g;
}
/** Dishes on a table top at height y around a centre. */
export function dishes(kit: Kit, parent: THREE.Object3D, y: number, spots: [number, number][], rand: () => number = Math.random) {
  for (const [x, z] of spots) {
    kit.mesh(new THREE.CylinderGeometry(0.14, 0.1, 0.03, 20), tone(0xf0ebe2), parent, x, y + 0.015, z);
    const food = kit.mesh(new THREE.SphereGeometry(0.09, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), tone([0x8c857c, 0x6e675f, 0xb9b2a8][Math.floor(rand() * 3)]), parent, x, y + 0.03, z);
    food.scale.y = 0.5;
  }
}

/** A thread-bound book, closed or opened; `open(u)` swings the cover. Lies in the xz plane. */
export function book(kit: Kit, parent: THREE.Object3D, { x = 0, y = 0, z = 0, w = 0.2, d = 0.28, title }: { x?: number; y?: number; z?: number; w?: number; d?: number; title?: string } = {}) {
  const g = kit.group(parent, x, y, z);
  kit.box(g, tone(0xf0ebe2), [0, 0.015, 0], [w, 0.03, d]);
  const hinge = kit.group(g, -w / 2, 0.032, 0);
  const cover = kit.group(hinge, 0, 0, 0);
  kit.box(cover, tone(0x4a4a50), [w / 2, 0, 0], [w, 0.004, d]);
  if (title) {
    kit.box(cover, tone(0xf0ebe2), [w * 0.8, 0.003, -d * 0.1], [w * 0.2, 0.002, d * 0.6]);
    const t = writing(kit, cover, title, { size: Math.min(w * 0.16, d * 0.55 / [...title].length), paper: null, margin: 0.1 });
    t.mesh.rotation.x = -Math.PI / 2; t.mesh.position.set(w * 0.8, 0.005, -d * 0.1);
  }
  // Pages: a second leaf appears as the cover opens.
  return { group: g, open: (u: number) => { hinge.rotation.z = u * Math.PI * 0.95; } };
}

/** A card or letter standing (or lying) with writing on it. Red for visiting cards. */
export function card(kit: Kit, parent: THREE.Object3D, text: string, { x = 0, y = 0, z = 0, w = 0.12, h = 0.3, red = true }: { x?: number; y?: number; z?: number; w?: number; h?: number; red?: boolean } = {}) {
  const g = kit.group(parent, x, y, z);
  kit.mesh(new THREE.PlaneGeometry(w, h), red ? flat(0xb8283c, { side: THREE.DoubleSide }) : tone(0xf2ede3, true), g);
  const chars = [...text];
  const size = Math.min(w * 0.7, h * 0.85 / chars.length);
  writing(kit, g, text, { size, paper: null, margin: 0.05, z: 0.002 });
  return g;
}

/** Silver ingots (元宝). */
export function ingots(kit: Kit, parent: THREE.Object3D, x: number, y: number, z: number, n = 3) {
  const g = kit.group(parent, x, y, z);
  for (let k = 0; k < n; k++) {
    const ig = kit.group(g, (k % 3 - 1) * 0.16, Math.floor(k / 3) * 0.07, (k % 2) * 0.06);
    kit.mesh(new THREE.SphereGeometry(0.07, 12, 8), tone(0xd6d0c6), ig, 0, 0.03, 0).scale.set(1.2, 0.5, 0.7);
    kit.mesh(new THREE.SphereGeometry(0.035, 10, 8), tone(0xd6d0c6), ig, 0, 0.06, 0);
  }
  return g;
}

/** Copper coins with square holes. */
export function coins(kit: Kit, parent: THREE.Object3D, spots: [number, number, number][]) {
  const geo = new THREE.CylinderGeometry(0.025, 0.025, 0.004, 16);
  return spots.map(([x, y, z]) => {
    const c = kit.mesh(geo, tone(0x4a443e), parent, x, y, z);
    kit.box(c, tone(0xf0ebe2), [0, 0.003, 0], [0.012, 0.001, 0.012]);
    return c;
  });
}

/** A wine jar with a vermilion seal cloth. */
export function jar(kit: Kit, parent: THREE.Object3D, x: number, y: number, z: number, s = 1) {
  const g = kit.group(parent, x, y, z); g.scale.setScalar(s);
  kit.mesh(new THREE.LatheGeometry([[0, 0], [0.12, 0], [0.2, 0.12], [0.22, 0.28], [0.15, 0.42], [0.1, 0.46], [0.11, 0.5]].map(([a, b]) => new THREE.Vector2(a, b)), 20), tone(0x3f3a35), g);
  kit.mesh(new THREE.SphereGeometry(0.14, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), flat(VERMILION), g, 0, 0.48, 0).scale.y = 0.6;
  return g;
}

/** A sword in its scabbard, or drawn. Along +x from its hilt. */
export function sword(kit: Kit, parent: THREE.Object3D, { x = 0, y = 0, z = 0, len = 0.9, drawn = false }: { x?: number; y?: number; z?: number; len?: number; drawn?: boolean } = {}) {
  const g = kit.group(parent, x, y, z);
  kit.box(g, tone(DARK), [0.08, 0, 0], [0.16, 0.03, 0.03]);
  kit.box(g, tone(0x4a443e), [0.17, 0, 0], [0.02, 0.1, 0.04]);
  kit.box(g, drawn ? tone(0xe6e0d6) : tone(0x3f3a35), [0.18 + len / 2, 0, 0], [len, drawn ? 0.03 : 0.045, drawn ? 0.006 : 0.03]);
  kit.mesh(new THREE.SphereGeometry(0.03, 6, 5), flat(VERMILION), g, -0.02, -0.04, 0);
  return g;
}

/** A seven-string zither (琴) on its table. */
export function zither(kit: Kit, parent: THREE.Object3D, x: number, y: number, z: number, rot = 0) {
  const g = kit.group(parent, x, y, z); g.rotation.y = rot;
  const body = kit.mesh(new THREE.BoxGeometry(1.2, 0.06, 0.2), tone(0x2f2a26), g, 0, 0.03, 0);
  body.scale.set(1, 1, 1);
  for (let k = 0; k < 7; k++) kit.box(g, tone(0xd6d0c6), [0, 0.065, -0.07 + k * 0.023], [1.1, 0.003, 0.003]);
  for (let k = 0; k < 13; k++) kit.mesh(new THREE.SphereGeometry(0.006, 5, 4), tone(0xf4f0e8), g, -0.4 + k * 0.06, 0.063, 0.09);
  return g;
}

/** A tall bronze mirror on a stand. */
export function mirror(kit: Kit, parent: THREE.Object3D, x: number, z: number, rot = 0) {
  const g = kit.group(parent, x, 0, z); g.rotation.y = rot;
  kit.box(g, tone(DARK), [0, 0.7, 0], [0.06, 1.4, 0.06]);
  kit.box(g, tone(DARK), [0, 0.03, 0], [0.6, 0.06, 0.3]);
  kit.mesh(new THREE.TorusGeometry(0.4, 0.04, 8, 32), tone(0x4a443e), g, 0, 1.75, 0);
  // The mirror face is bright: it prints as bare paper with a halo of ink.
  kit.mesh(new THREE.CircleGeometry(0.38, 32), flat(0xf4f0e8), g, 0, 1.75, 0.01);
  return g;
}

/** A stack of gift boxes tied with red cord. */
export function gifts(kit: Kit, parent: THREE.Object3D, x: number, y: number, z: number) {
  const g = kit.group(parent, x, y, z);
  for (const [bx, by, w, h] of [[0, 0.1, 0.4, 0.2], [0.05, 0.28, 0.32, 0.16], [0.0, 0.42, 0.24, 0.12]]) {
    kit.box(g, tone(0x4a443e), [bx, by, 0], [w, h, w * 0.8]);
    kit.box(g, flat(VERMILION), [bx, by, 0], [0.03, h + 0.005, w * 0.8 + 0.005]);
    kit.box(g, flat(VERMILION), [bx, by, 0], [w + 0.005, h + 0.005, 0.03]);
  }
  return g;
}

/** An incense burner (鼎) on three legs. Pair with `smoke` from fx.ts. */
export function censer(kit: Kit, parent: THREE.Object3D, x: number, y: number, z: number, s = 1) {
  const g = kit.group(parent, x, y, z); g.scale.setScalar(s);
  kit.mesh(new THREE.SphereGeometry(0.16, 14, 10, 0, Math.PI * 2, Math.PI * 0.35, Math.PI * 0.65), tone(0x3f3a35, true), g, 0, 0.22, 0);
  for (let k = 0; k < 3; k++) { const a = k / 3 * Math.PI * 2; kit.mesh(new THREE.CylinderGeometry(0.02, 0.015, 0.14, 5), tone(0x3f3a35), g, Math.cos(a) * 0.1, 0.07, Math.sin(a) * 0.1); }
  for (const side of [-1, 1]) kit.mesh(new THREE.TorusGeometry(0.04, 0.012, 5, 10), tone(0x3f3a35), g, side * 0.12, 0.35, 0).rotation.y = Math.PI / 2;
  return g;
}

/** A vase with a spray of blossoms. */
export function vase(kit: Kit, parent: THREE.Object3D, x: number, y: number, z: number, { s = 1, red = true, rand = Math.random }: { s?: number; red?: boolean; rand?: () => number } = {}) {
  const g = kit.group(parent, x, y, z); g.scale.setScalar(s);
  kit.mesh(new THREE.LatheGeometry([[0, 0], [0.07, 0], [0.1, 0.08], [0.1, 0.18], [0.05, 0.28], [0.04, 0.34], [0.06, 0.37]].map(([a, b]) => new THREE.Vector2(a, b)), 18), tone(0x4a443e), g);
  for (let k = 0; k < 3; k++) {
    const a = k * 2.1, tip = new THREE.Vector3(Math.cos(a) * 0.2, 0.7 + rand() * 0.2, Math.sin(a) * 0.15);
    const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0.3, 0), new THREE.Vector3(tip.x * 0.4, 0.5, tip.z * 0.4), tip]);
    kit.mesh(new THREE.TubeGeometry(curve, 8, 0.008, 4), tone(0x2f2a26), g);
    for (let j = 0; j < 5; j++) { const p = curve.getPoint(0.5 + j * 0.1); kit.mesh(new THREE.SphereGeometry(0.022, 6, 5), red ? flat(VERMILION) : tone(0xf4f0e8), g, p.x + (rand() - 0.5) * 0.05, p.y, p.z + (rand() - 0.5) * 0.05); }
  }
  return g;
}

/** A raised couch (炕) with a low table on it. */
export function kang(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, w = 2.4, d = 1.4 }: { x?: number; z?: number; w?: number; d?: number } = {}) {
  const g = kit.group(parent, x, 0, z);
  kit.box(g, tone(WOOD), [0, 0.25, 0], [w, 0.5, d]);
  kit.box(g, tone(0xb9b2a8), [0, 0.52, 0], [w - 0.1, 0.05, d - 0.1]);
  kit.box(g, tone(DARK), [0, 0.8, -d / 2 + 0.05], [w, 0.6, 0.08]);
  for (const sx of [-1, 1]) kit.box(g, tone(DARK), [sx * (w / 2 - 0.04), 0.7, 0], [0.08, 0.4, d]);
  const low = kit.group(g, 0, 0.55, 0);
  kit.box(low, tone(DARK), [0, 0.22, 0], [0.7, 0.04, 0.45]);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) kit.box(low, tone(DARK), [sx * 0.3, 0.1, sz * 0.18], [0.04, 0.2, 0.04]);
  return g;
}

/** A curtained bed (架子床). */
export function bed(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, rot = 0 }: { x?: number; z?: number; rot?: number } = {}) {
  const g = kit.group(parent, x, 0, z); g.rotation.y = rot;
  kit.box(g, tone(WOOD), [0, 0.3, 0], [2.1, 0.6, 1.3]);
  kit.box(g, tone(0xe6e0d6), [0, 0.65, 0], [2, 0.1, 1.2]);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) kit.box(g, tone(DARK), [sx, 1.3, sz * 0.62], [0.06, 2.6, 0.06]);
  kit.box(g, tone(DARK), [0, 2.55, 0], [2.1, 0.12, 1.3]);
  const curtain = new THREE.MeshLambertMaterial({ color: 0xf0ebe2, transparent: true, opacity: 0.7, side: THREE.DoubleSide });
  // Curtains tied back to the posts.
  for (const sx of [-1, 1]) kit.mesh(new THREE.PlaneGeometry(0.22, 1.8), curtain, g, sx * 0.9, 1.6, 0.66);
  kit.box(g, tone(0xf0ebe2), [0, 0.75, -0.2], [1.8, 0.12, 0.6]);
  return g;
}
