import * as THREE from 'three';
import type { Hair } from '../brush';
import type { DanPose } from '../figures';
import { PETAL_RED } from '../paint';
import { WRITING_INK, WRITING_RED } from '../cinemaKit';
import { clamp01, columns, ease, figure, frontCamera, painting, tone, type Beat } from './engine';
import { CART_H, CART_W, cart, horse, person, type Gesture, type PersonKind } from './people';
import { ANIMATED_PLACES, PLACE_H, PLACE_W, PLACES_WITH_WRITING, paintPlace, type Place } from './places';

/**
 * The tableau: one beat for everyday scenes. A painted place, a cast who can walk, talk, change
 * gesture and come and go, optional furniture, an inscription, and weather. Everything is data,
 * so a paragraph's scene is a list of tableaux.
 */

export type CastMember = {
  kind: PersonKind | 'cart' | 'horse';
  /** Position across the stage (world units, about -6 to 6) and how far above the ground. */
  x: number;
  y?: number;
  /** Height; 4.4 for a standing person, 3.4 for a cart. */
  h?: number;
  /** Depth: negative is further back. */
  z?: number;
  hair?: Hair;
  gesture?: Gesture;
  /** Gesture changes: [seconds into the shot, gesture]. Talking gestures animate the speaker. */
  cues?: [number, Gesture][];
  blush?: boolean | number;
  pose?: DanPose;
  /** Face left instead of right (matters for carts, horses and walkers). */
  flip?: boolean;
  /** Walk (or drive) from x0 to x1 between t0 and t1 seconds into the shot. */
  walk?: [number, number, number, number];
  /** On stage only between these times. */
  from?: number;
  until?: number;
  /** A faint, dreamlike presence. */
  opacity?: number;
  /** Bob up and down, for a floating deity. */
  float?: number;
  /** Carts: the curtained glass window, the fur lining. */
  window?: boolean;
  fur?: boolean;
};

export type Tableau = {
  place: Place;
  cast?: CastMember[];
  /** A table in front of seated figures: its centre x and width. */
  table?: { x?: number; w?: number };
  /** A round banquet table with dishes and cups; `cups` of them, filled up to `filled` seconds. */
  round?: { x?: number; w?: number };
  /** Small things: wine cups, red visiting cards, gift boxes, coins or melon seeds, a letter. */
  props?: Prop[];
  /** An inscription slip of short columns; on the right unless `linesSide` is 'left'. */
  lines?: string[];
  linesSide?: 'left' | 'right';
  /** When the inscription starts writing (seconds into the shot). */
  linesAt?: number;
  /** Wind-blown flecks (a north wind), drifting petals, or a pale radiance behind a point. */
  flurry?: boolean;
  petals?: boolean;
  aura?: [number, number];
  /** Seen through a cart's glass window: a dark frame in the foreground. */
  window?: boolean;
  camera?: { from?: number; to?: number; y?: number; drift?: number; pan?: [number, number] };
};

export type Prop = {
  kind: 'cup' | 'card' | 'gifts' | 'coins' | 'seeds' | 'letter' | 'silver';
  x: number;
  /** Height above the ground; a table top is at about 1.15. */
  y: number;
  /** Size (world units across). */
  s?: number;
  z?: number;
  from?: number;
  until?: number;
  /** Cards and letters: the words on them. */
  text?: string;
};

function paintProp(ctx: CanvasRenderingContext2D, p: Prop) {
  // Drawn in 256-unit coordinates on a larger canvas, so card and letter writing stays sharp.
  const W = 256;
  ctx.setTransform(ctx.canvas.width / W, 0, 0, ctx.canvas.width / W, 0, 0);
  ctx.clearRect(0, 0, W, W);
  ctx.fillStyle = '#231d19'; ctx.strokeStyle = '#231d19';
  const red = p.kind === 'card' ? WRITING_RED : '#b8321f', paper = '#f2ecdf';
  if (p.kind === 'cup') { ctx.beginPath(); ctx.moveTo(78, 120); ctx.lineTo(178, 120); ctx.lineTo(150, 190); ctx.lineTo(106, 190); ctx.fill(); ctx.fillRect(116, 190, 24, 30); ctx.fillRect(96, 216, 64, 10); }
  else if (p.kind === 'card' || p.kind === 'letter') {
    ctx.fillStyle = p.kind === 'card' ? red : paper; ctx.fillRect(78, 20, 100, 216);
    ctx.strokeRect(78, 20, 100, 216);
    ctx.fillStyle = WRITING_INK; // black ink, on red paper for a visiting card
    ctx.font = 'bold 40px "KaiTi", "STKaiti", serif'; ctx.textAlign = 'center';
    [...(p.text ?? '')].slice(0, 5).forEach((c, i) => ctx.fillText(c, 128, 68 + i * 40));
  } else if (p.kind === 'gifts') {
    for (const [x, y, w, h] of [[30, 130, 110, 90], [120, 90, 100, 130], [70, 60, 80, 70]]) { ctx.fillStyle = '#4e4640'; ctx.fillRect(x, y, w, h); ctx.fillStyle = red; ctx.fillRect(x + w / 2 - 6, y, 12, h); ctx.fillRect(x, y + h / 2 - 6, w, 12); }
  } else if (p.kind === 'coins') {
    for (let k = 0; k < 6; k++) { const x = 50 + (k % 3) * 60, y = 140 + Math.floor(k / 3) * 50; ctx.beginPath(); ctx.arc(x, y, 22, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = paper; ctx.fillRect(x - 7, y - 7, 14, 14); ctx.fillStyle = '#231d19'; }
  } else if (p.kind === 'seeds') {
    for (let k = 0; k < 25; k++) { ctx.save(); ctx.translate(40 + (k * 37) % 180, 120 + (k * 53) % 90); ctx.rotate(k); ctx.beginPath(); ctx.ellipse(0, 0, 9, 5, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore(); }
  } else if (p.kind === 'silver') {
    ctx.fillStyle = '#6f675f'; for (const x of [80, 170]) { ctx.beginPath(); ctx.ellipse(x, 180, 44, 18, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.ellipse(x, 164, 20, 16, 0, 0, Math.PI * 2); ctx.fill(); }
  }
}

const TALKING: Gesture[] = ['speaking', 'pointing', 'laughing'];
const GROUND = -2.3;

/** Where a member is along their walk at time t, and whether they are moving. */
function walkAt(m: CastMember, t: number) {
  if (!m.walk) return { x: m.x, moving: false };
  const [x0, x1, t0, t1] = m.walk;
  const u = clamp01((t - t0) / Math.max(0.01, t1 - t0));
  return { x: x0 + (x1 - x0) * u, moving: t > t0 && t < t1 };
}

function gestureAt(m: CastMember, t: number): Gesture | undefined {
  let g = m.gesture;
  for (const [at, cue] of m.cues ?? []) if (at <= t) g = cue;
  return g;
}

export const tableauBeat = (spec: Tableau): Beat => ({ kit, set, x, duration }) => {
  const animated = ANIMATED_PLACES.includes(spec.place);
  // Paper of the backdrop's own tone reaches past the frame, so the painting has no visible edge.
  kit.mesh(new THREE.PlaneGeometry(80, 45), tone(0xece6da), set, 0, 0.5, -2.1);
  // Backdrops with writing on them (plaques, labels) are painted at a higher resolution so the
  // characters stay sharp; moving backdrops, repainted every frame, get less.
  const res = PLACES_WITH_WRITING.includes(spec.place) ? (animated ? 1.5 : 2.5) : 1;
  const back = painting(kit, set, PLACE_W * res, PLACE_H * res, [19.2, 10.8], (ctx, t) => paintPlace(ctx, spec.place, t), animated, res > 1);
  back.mesh.position.set(0, 0.9, -2);

  const back2 = spec.aura ? painting(kit, set, 512, 512, [7, 7], (ctx, t) => {
    ctx.clearRect(0, 0, 512, 512);
    for (let k = 0; k < 6; k++) {
      const r = ((t * 30 + k * 40) % 240) + 10;
      ctx.strokeStyle = `rgba(60,52,46,${0.25 * (1 - r / 250)})`; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(256, 256, r, 0, Math.PI * 2); ctx.stroke();
    }
  }, true) : undefined;
  back2?.mesh.position.set(spec.aura![0], spec.aura![1], -1);

  const cast = (spec.cast ?? []).map((m, i) => {
    const flip = m.flip ? -1 : 1;
    if (m.kind === 'cart' || m.kind === 'horse') {
      const h = m.h ?? 3.4;
      const sprite = painting(kit, set, CART_W, CART_H, [h * CART_W / CART_H, h], (ctx, t) => {
        ctx.clearRect(0, 0, CART_W, CART_H);
        ctx.save(); ctx.translate(CART_W / 2, CART_H - 10); ctx.scale(flip, 1);
        ctx.fillStyle = ctx.strokeStyle = '#0d0a0c'; ctx.shadowColor = 'rgba(13,10,12,0.6)'; ctx.shadowBlur = 3;
        const moving = walkAt(m, t).moving;
        if (m.kind === 'cart') cart(ctx, t, { moving, window: m.window ?? true, fur: m.fur }); else horse(ctx, t, moving);
        ctx.restore();
      }, true);
      return { m, h, sprite };
    }
    const h = m.h ?? (m.kind === 'page' ? 4 : 4.4);
    const sprite = figure(kit, set, h, (ctx, t) => {
      const g = gestureAt(m, t);
      const { moving } = walkAt(m, t);
      const blush = typeof m.blush === 'number' ? t >= m.blush : !!m.blush;
      ctx.save(); ctx.scale(flip, 1);
      person(ctx, t, { kind: m.kind as PersonKind, hair: m.hair, gesture: moving && !g ? 'walking' : g, speaking: !!g && TALKING.includes(g), blush, pose: m.pose, phase: i * 1.3, walking: moving });
      ctx.restore();
    });
    if (m.opacity !== undefined) sprite.material.uniforms.uOpacity.value = m.opacity;
    return { m, h, sprite };
  });

  if (spec.table) {
    const tx = spec.table.x ?? 0, w = spec.table.w ?? 7.6;
    kit.box(set, tone(0x3f3a35), [tx, -1.95, 0], [w, 1.5, 1.6]);
    kit.box(set, tone(0x2f2a26), [tx, -1.18, 0], [w + 0.3, 0.08, 1.8]);
  }

  if (spec.round) {
    const tx = spec.round.x ?? 0, w = spec.round.w ?? 7;
    const top = kit.mesh(new THREE.CylinderGeometry(w / 2, w / 2, 0.12, 48), tone(0x2f2a26), set, tx, -1.18, 0.2);
    top.scale.z = 0.35;
    kit.mesh(new THREE.CylinderGeometry(w / 2 - 0.1, w / 2 - 0.1, 1.1, 48, 1, true), tone(0x3f3a35), set, tx, -1.8, 0.2).scale.z = 0.35;
    // Dishes as pale discs along the front rim.
    for (let k = -2; k <= 2; k++) kit.mesh(new THREE.CircleGeometry(0.34, 24), tone(0xd6d0c6), set, tx + k * 1.15, -1.1, 0.72 - Math.abs(k) * 0.08).scale.y = 0.35;
  }

  const props = (spec.props ?? []).map(p => {
    const s = p.s ?? 0.6;
    const writing = p.kind === 'card' || p.kind === 'letter';
    const sprite = painting(kit, set, writing ? 1024 : 256, writing ? 1024 : 256, [s, s], ctx => paintProp(ctx, p), false, writing);
    sprite.mesh.position.set(p.x, GROUND + p.y + s / 2, p.z ?? 0.75);
    return { p, sprite };
  });

  const front = spec.flurry || spec.petals ? painting(kit, set, 1024, 576, [16, 9], (ctx, t) => {
    ctx.clearRect(0, 0, 1024, 576);
    const count = spec.flurry ? 70 : 26;
    for (let k = 0; k < count; k++) {
      const speed = 60 + (k * 37) % 90;
      const px = (((k * 131) % 1024) - t * speed * (spec.flurry ? 2.4 : 0.8)) % 1100;
      const xx = px < -40 ? px + 1100 : px;
      const yy = ((k * 67) % 576 + t * speed * (spec.flurry ? 0.4 : 0.6) + Math.sin(t * 2 + k) * 12) % 576;
      if (spec.flurry) { ctx.fillStyle = 'rgba(40,32,28,0.55)'; ctx.fillRect(xx, yy, 7 + (k % 4) * 3, 2); }
      else { ctx.fillStyle = PETAL_RED; ctx.beginPath(); ctx.ellipse(xx, yy, 6, 3, t + k, 0, Math.PI * 2); ctx.fill(); }
    }
  }, true) : undefined;
  front?.mesh.position.set(0, 0.5, 0.8);

  const frame = spec.window ? painting(kit, set, 1024, 576, [12.4, 7], ctx => {
    ctx.fillStyle = '#2f2a26'; ctx.fillRect(0, 0, 1024, 576);
    ctx.clearRect(170, 90, 684, 396);
    // The curtain, lifted and gathered at the top.
    ctx.fillStyle = 'rgba(60,52,46,0.85)'; ctx.beginPath(); ctx.moveTo(170, 90); ctx.lineTo(854, 90); ctx.quadraticCurveTo(700, 150, 512, 140); ctx.quadraticCurveTo(320, 150, 170, 90); ctx.fill();
  }) : undefined;
  frame?.mesh.position.set(0, 0.35, 2.4);

  let lines: ReturnType<typeof columns> | undefined;
  if (spec.lines?.length) {
    // Large enough to read in a small player; long lines shrink to fit the height.
    const longest = Math.max(...spec.lines.map(l => [...l].length));
    const size = Math.min(0.56, 4.2 / longest), gap = size * 1.36, n = spec.lines.length, tall = longest * size;
    // Hung clear of the frame's top edge, even in a wide, short player.
    const cx = (spec.linesSide === 'left' ? -1 : 1) * (5.9 - (n - 1) * gap / 2), top = 3.05;
    kit.mesh(new THREE.PlaneGeometry((n - 1) * gap + 1, tall + 0.7), tone(0x6e675f), set, cx, top - tall / 2 - 0.1, 0.28);
    kit.mesh(new THREE.PlaneGeometry((n - 1) * gap + 0.86, tall + 0.56), tone(0xf3eee3), set, cx, top - tall / 2 - 0.1, 0.29);
    lines = columns(kit, set, spec.lines, { size, gap, x: cx, y: top + 0.14 });
    set.children.slice(-n).forEach(child => { child.position.z = 0.31; });
  }

  const cam = spec.camera ?? {};
  return {
    update: t => {
      const pan = cam.pan ? cam.pan[0] + (cam.pan[1] - cam.pan[0]) * ease(t / duration) : 0;
      frontCamera(kit, x + pan, t, duration, { from: cam.from ?? 11, to: cam.to ?? 10, y: cam.y ?? 0.3, drift: cam.drift ?? 0.5 });
      back.set(ease(t / 1.2), t);
      back2?.set(ease((t - 0.5) / 2), t);
      front?.set(1, t);
      frame?.set(1, t);
      for (const { m, h, sprite } of cast) {
        const on = (m.from === undefined || t >= m.from) && (m.until === undefined || t < m.until);
        sprite.mesh.visible = on;
        if (!on) continue;
        const { x: px } = walkAt(m, t);
        const bob = m.float ? Math.sin(t * 1.4) * m.float : 0;
        sprite.mesh.position.set(px, GROUND + (m.y ?? 0) + h / 2 + bob, m.z ?? -0.6);
        const since = m.from !== undefined ? t - m.from : t;
        sprite.set(ease(since / 1.1), t);
      }
      for (const { p, sprite } of props) {
        const on = (p.from === undefined || t >= p.from) && (p.until === undefined || t < p.until);
        sprite.mesh.visible = on;
        if (on) sprite.set(ease((t - (p.from ?? 0)) / 0.6), t);
      }
      lines?.set(ease((t - (spec.linesAt ?? 1)) / Math.max(2, duration * 0.55)));
    },
  };
};

/** A thread-bound book: the cover with its title slip, which then swings open onto a first page. */
export const coverBeat = (title: string, page: string[]): Beat => ({ kit, set, x, duration }) => {
  kit.mesh(new THREE.PlaneGeometry(16, 9), tone(0xe9e3d7), set, 0, 0, -1);
  const w = 4.4, h = 6.2;
  kit.mesh(new THREE.PlaneGeometry(w, h), tone(0xf3eee3), set, w / 2, 0, -0.05);
  const inside = columns(kit, set, page, { size: 0.5, gap: 0.8, x: w / 2 + 0.2, y: 2.4 });
  const hinge = kit.group(set, 0, 0, 0);
  const cover = kit.group(hinge, w / 2, 0, 0);
  kit.mesh(new THREE.PlaneGeometry(w, h), tone(0x4e4a4e, { side: THREE.DoubleSide }), cover, 0, 0, 0);
  for (let k = 0; k < 4; k++) kit.box(cover, tone(0xd6d0c6), [-w / 2 + 0.25, -h / 2 + 0.8 + k * 1.55, 0.02], [0.08, 0.12, 0.02]);
  kit.mesh(new THREE.PlaneGeometry(0.9, 3.8), tone(0xf3eee3), cover, w / 2 - 0.9, 1, 0.02);
  const slip = kit.calligraphy(cover, title, { size: 0.72 });
  slip.mesh.position.set(w / 2 - 0.9, 1, 0.03);
  const open = duration * 0.45;
  return {
    update: t => {
      frontCamera(kit, x + 1.2 * ease((t - open) / 2), t, duration, { from: 11, to: 9.6, y: 0 });
      slip.material.uniforms.uReveal.value = ease((t - 0.3) / 1.6);
      hinge.rotation.y = -Math.PI * 0.92 * ease((t - open) / 1.8);
      inside.set(ease((t - open - 1) / Math.max(1.5, duration - open - 2)));
    },
  };
};

/** Shorthand for the recurring cast of chapter 1's study scenes. */
export const who = {
  ziyu: (x: number, extra: Partial<CastMember> = {}): CastMember => ({ kind: 'scholar', hair: 'bun', x, ...extra }),
  zhongqing: (x: number, extra: Partial<CastMember> = {}): CastMember => ({ kind: 'scholar', hair: 'cap', x, ...extra }),
  nanxiang: (x: number, extra: Partial<CastMember> = {}): CastMember => ({ kind: 'scholar', hair: 'loose', x, ...extra }),
  wangxun: (x: number, extra: Partial<CastMember> = {}): CastMember => ({ kind: 'scholar', hair: 'cap', x, ...extra }),
  teacher: (x: number, extra: Partial<CastMember> = {}): CastMember => ({ kind: 'teacher', x, ...extra }),
  lady: (x: number, extra: Partial<CastMember> = {}): CastMember => ({ kind: 'lady', x, ...extra }),
  page: (x: number, extra: Partial<CastMember> = {}): CastMember => ({ kind: 'page', x, ...extra }),
  // Chapter 2
  shixie: (x: number, extra: Partial<CastMember> = {}): CastMember => ({ kind: 'teacher', x, ...extra }),
  pincai: (x: number, extra: Partial<CastMember> = {}): CastMember => ({ kind: 'pincai', x, ...extra }),
  yuanmao: (x: number, extra: Partial<CastMember> = {}): CastMember => ({ kind: 'yuanmao', x, ...extra }),
  wenhui: (x: number, extra: Partial<CastMember> = {}): CastMember => ({ kind: 'wenhui', x, ...extra }),
  sihui: (x: number, extra: Partial<CastMember> = {}): CastMember => ({ kind: 'sihui', x, ...extra }),
  siyuan: (x: number, extra: Partial<CastMember> = {}): CastMember => ({ kind: 'siyuan', x, ...extra }),
  lianggong: (x: number, extra: Partial<CastMember> = {}): CastMember => ({ kind: 'lianggong', x, ...extra }),
  servant: (x: number, extra: Partial<CastMember> = {}): CastMember => ({ kind: 'servant', x, h: 4.1, ...extra }),
  guibao: (x: number, extra: Partial<CastMember> = {}): CastMember => ({ kind: 'dan', x, h: 4.2, pose: { lift: [0.4, 1.8], swing: 0.25, sleeve: 0.6, turn: 0, crouch: 0, prop: 'fan', crown: true }, ...extra }),
  maid: (x: number, extra: Partial<CastMember> = {}): CastMember => ({ kind: 'maid', x, h: 3.8, ...extra }),
};
