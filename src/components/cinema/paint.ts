import { disc, limb, type Ctx, type Point } from './brush';

/**
 * Brush-painting helpers for canvases: tapering strokes, leaves and petals, blossoms, and ten
 * flowers painted in the ink style (each drawn in a 512 × 640 panel; scale the context to reuse).
 */

export const INK = '#231d19';
export const RED = '#b8321f';
export const PETAL_RED = 'rgba(196,62,48,0.9)';
export const WASH = 'rgba(40,32,28,0.22)';

/** A deterministic generator, so each painting is the same every time it is drawn. */
export function seeded(seed: number) {
  return () => { seed = (seed * 16807 + 11) % 2147483647; return seed / 2147483647; };
}

/** A brush stroke through the points, thinning from `w0` to `w1`. */
export function stroke(ctx: Ctx, points: Point[], w0: number, w1: number, color = INK) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  for (let i = 1; i < points.length; i++) {
    ctx.lineWidth = w0 + (w1 - w0) * (i / (points.length - 1));
    ctx.beginPath(); ctx.moveTo(...points[i - 1]); ctx.lineTo(...points[i]); ctx.stroke();
  }
  ctx.restore();
}

/** A tapering leaf or petal from (x0, y0) to (x1, y1), bowed sideways by `bend`. */
export function leaf(ctx: Ctx, x0: number, y0: number, x1: number, y1: number, bend: number, width: number, fill = INK, outline?: string) {
  const mx = (x0 + x1) / 2, my = (y0 + y1) / 2, length = Math.hypot(x1 - x0, y1 - y0) || 1;
  const nx = -(y1 - y0) / length, ny = (x1 - x0) / length;
  const cx = mx + nx * bend, cy = my + ny * bend;
  const left: Point[] = [], right: Point[] = [];
  for (let i = 0; i <= 16; i++) {
    const u = i / 16, a = (1 - u) * (1 - u), b = 2 * (1 - u) * u, c = u * u;
    const x = a * x0 + b * cx + c * x1, y = a * y0 + b * cy + c * y1;
    const w = width * Math.pow(Math.sin(Math.PI * u), 0.8);
    left.push([x + nx * w, y + ny * w]); right.push([x - nx * w, y - ny * w]);
  }
  ctx.save(); ctx.beginPath();
  [...left, ...right.reverse()].forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
  ctx.closePath(); ctx.fillStyle = fill; ctx.fill();
  if (outline) { ctx.strokeStyle = outline; ctx.lineWidth = 1.5; ctx.stroke(); }
  ctx.restore();
}

/** A five-petalled blossom with an ink heart. */
export function blossom(ctx: Ctx, x: number, y: number, r: number, color = RED, turn = 0) {
  ctx.save(); ctx.fillStyle = color;
  for (let k = 0; k < 5; k++) { const a = turn + k * Math.PI * 0.4; disc(ctx, x + Math.cos(a) * r * 0.62, y + Math.sin(a) * r * 0.62, r * 0.52); }
  ctx.fillStyle = INK; disc(ctx, x, y, r * 0.22);
  ctx.restore();
}

export type Painter = (ctx: Ctx, rand: () => number) => void;
/** One flower for each kind: plum, orchid, lotus, chrysanthemum, begonia, pomegranate, bamboo, peony, peach, hibiscus. */
const FLOWER_PAINTERS: Painter[] = [
  // 至 · plum: an old gnarled branch in early flower.
  ctx => {
    stroke(ctx, [[60, 610], [120, 480], [108, 390], [190, 300], [262, 258], [362, 178]], 26, 6);
    stroke(ctx, [[118, 470], [200, 482], [282, 432]], 12, 3);
    stroke(ctx, [[190, 300], [168, 212], [212, 140]], 9, 2);
    for (const [x, y] of [[362, 178], [330, 214], [286, 250], [250, 276], [214, 150], [204, 196], [282, 432], [240, 462], [160, 302], [300, 204], [346, 160], [190, 242]]) blossom(ctx, x, y, 14, RED, x * 0.1);
  },
  // 慧 · orchid: long arching leaves, a few pale flowers.
  ctx => {
    for (const [x1, y1, bend, w] of [[60, 300, 60, 9], [380, 330, -80, 8], [120, 190, 40, 7], [300, 170, -30, 6], [420, 470, -40, 7], [20, 480, 50, 7]]) leaf(ctx, 210, 600, x1, y1, bend, w);
    stroke(ctx, [[210, 600], [236, 420], [250, 320]], 3, 2);
    for (const [x, y] of [[250, 320], [228, 372], [262, 272]]) {
      for (const [dx, dy] of [[-30, -8], [26, -14], [0, -34]]) leaf(ctx, x, y, x + dx, y + dy, 6, 7, WASH, INK);
      disc(ctx, x, y, 4);
    }
  },
  // 韵 · lotus: a broad leaf in wash and a flower held high.
  ctx => {
    ctx.save(); ctx.fillStyle = WASH; ctx.strokeStyle = INK; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.ellipse(170, 470, 150, 58, -0.08, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
    for (let k = 0; k < 9; k++) { const a = k / 9 * Math.PI * 2; limb(ctx, [[170, 470], [170 + Math.cos(a) * 130, 470 + Math.sin(a) * 50]], 1.5); }
    stroke(ctx, [[180, 520], [190, 610]], 6, 5);
    stroke(ctx, [[280, 610], [286, 420], [272, 300]], 6, 4);
    for (const [dx, dy, bend] of [[-70, -40, 16], [-40, -80, 10], [0, -95, 0], [40, -80, -10], [70, -40, -16], [-20, -60, 6], [20, -60, -6]]) leaf(ctx, 272, 300, 272 + dx, 300 + dy, bend, 20, PETAL_RED, INK);
    stroke(ctx, [[120, 600], [124, 420], [118, 340]], 4, 3);
    leaf(ctx, 118, 350, 118, 290, 6, 14, PETAL_RED, INK);
  },
  // 醇 · chrysanthemum: fine petals radiating from a full head.
  ctx => {
    stroke(ctx, [[200, 610], [212, 460], [192, 330]], 6, 4);
    for (const [x1, y1, bend] of [[110, 470, 20], [300, 440, -20], [130, 390, 10], [290, 520, -10]]) leaf(ctx, 206, 470, x1, y1, bend, 26, WASH, INK);
    for (const [cx, cy, r] of [[192, 270, 78], [320, 380, 48]]) {
      for (let k = 0; k < 40; k++) { const a = k / 40 * Math.PI * 2; leaf(ctx, cx, cy, cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.8, 3, 4, 'rgba(0,0,0,0)', INK); }
      disc(ctx, cx, cy, r * 0.16);
    }
  },
  // 淑 · begonia: an arching stem hung with red blossoms.
  ctx => {
    const stem: Point[] = [[80, 610], [150, 420], [260, 300], [360, 290], [392, 340]];
    stroke(ctx, stem, 7, 2);
    for (const [x1, y1] of [[120, 520], [220, 360], [320, 280]]) leaf(ctx, x1, y1, x1 + 60, y1 - 30, -10, 18, WASH, INK);
    for (const [x, y, d] of [[170, 400, 36], [210, 350, 28], [252, 310, 44], [300, 294, 30], [346, 292, 40], [388, 338, 26], [140, 460, 30]]) {
      limb(ctx, [[x, y], [x + 4, y + d]], 2);
      blossom(ctx, x + 4, y + d + 10, 12, PETAL_RED, y);
    }
  },
  // 烈 · pomegranate: a sturdy branch with flame-red flowers.
  ctx => {
    stroke(ctx, [[70, 610], [160, 470], [250, 380], [332, 250]], 16, 4);
    for (const [x0, y0, x1, y1, b] of [[160, 470, 90, 430, 10], [200, 430, 260, 470, -10], [250, 380, 190, 330, 10], [290, 320, 350, 340, -10], [332, 250, 290, 200, 8]]) leaf(ctx, x0, y0, x1, y1, b, 12);
    for (const [x, y] of [[332, 236], [250, 360], [170, 452], [300, 300]]) {
      ctx.save(); ctx.fillStyle = RED; ctx.beginPath(); ctx.moveTo(x - 10, y + 22); ctx.lineTo(x + 10, y + 22); ctx.lineTo(x + 16, y - 8); ctx.lineTo(x - 16, y - 8); ctx.fill(); ctx.restore();
      for (const dx of [-14, 0, 14]) { ctx.save(); ctx.fillStyle = PETAL_RED; disc(ctx, x + dx, y - 14, 11, 9); ctx.restore(); }
    }
  },
  // 直 · bamboo: straight jointed stalks and tapering leaves.
  ctx => {
    for (const [x, width, lean] of [[150, 18, 0.03], [245, 13, -0.02]]) {
      for (let y = 610; y > 130; y -= 92) {
        stroke(ctx, [[x + (610 - y) * lean, y], [x + (610 - y + 84) * lean, y - 84]], width, width);
        limb(ctx, [[x + (610 - y + 88) * lean - width, y - 88], [x + (610 - y + 88) * lean + width, y - 88]], 2);
      }
    }
    for (const [x, y, dir] of [[160, 250, 1], [250, 330, -1], [165, 420, 1], [255, 170, -1]]) {
      for (let k = 0; k < 4; k++) leaf(ctx, x, y, x + dir * (70 + k * 18), y + 20 + k * 22, dir * 8, 9);
    }
  },
  // 酣 · peony: a full, heavy red bloom among dark leaves.
  ctx => {
    for (const [x0, y0, x1, y1, b] of [[210, 400, 110, 470, 20], [210, 400, 320, 480, -20], [210, 420, 170, 560, 10], [210, 420, 280, 560, -10]]) leaf(ctx, x0, y0, x1, y1, b, 30);
    stroke(ctx, [[214, 420], [220, 610]], 6, 5);
    ctx.save();
    for (const [r, n, alpha] of [[82, 10, 0.75], [60, 8, 0.85], [36, 6, 0.95]] as const) {
      ctx.fillStyle = `rgba(190,54,44,${alpha})`;
      for (let k = 0; k < n; k++) { const a = k / n * Math.PI * 2 + r; disc(ctx, 212 + Math.cos(a) * r * 0.55, 330 + Math.sin(a) * r * 0.45, r * 0.42, r * 0.34); }
    }
    ctx.restore();
    ctx.save(); ctx.strokeStyle = INK; ctx.lineWidth = 1.5;
    for (let k = 0; k < 7; k++) { ctx.beginPath(); ctx.arc(212, 330, 30 + k * 8, k, k + 1.4); ctx.stroke(); }
    ctx.restore();
  },
  // 艳 · peach: a flowering branch, bright and abundant.
  (ctx, rand) => {
    stroke(ctx, [[40, 560], [150, 452], [262, 410], [382, 300]], 15, 3);
    stroke(ctx, [[150, 452], [170, 340], [230, 250]], 8, 2);
    for (let k = 0; k < 16; k++) {
      const u = rand(), onUpper = k % 3 === 0;
      const [x, y] = onUpper ? [170 + u * 60, 340 - u * 90] : [60 + u * 320, 540 - u * 240];
      blossom(ctx, x + (rand() - 0.5) * 30, y + (rand() - 0.5) * 30, 11 + rand() * 4, PETAL_RED, k);
    }
    for (let k = 0; k < 6; k++) { const x = 90 + k * 50, y = 520 - k * 38; leaf(ctx, x, y, x + 26, y - 30, 6, 6); }
  },
  // 媚 · hibiscus: broad leaves and large pale flowers blushing red at the heart.
  ctx => {
    stroke(ctx, [[220, 610], [210, 450], [240, 320]], 6, 4);
    for (const [x1, y1, b] of [[110, 430, 20], [330, 450, -20], [150, 540, 10], [300, 560, -10]]) leaf(ctx, 214, 470, x1, y1, b, 40, WASH, INK);
    for (const [cx, cy, r] of [[240, 280, 70], [110, 350, 46]]) {
      for (let k = 0; k < 5; k++) { const a = k / 5 * Math.PI * 2 - 0.3; leaf(ctx, cx, cy, cx + Math.cos(a) * r, cy + Math.sin(a) * r, 10, r * 0.42, 'rgba(250,244,236,0.9)', INK); }
      ctx.save(); ctx.fillStyle = PETAL_RED; disc(ctx, cx, cy, r * 0.22); ctx.restore();
      limb(ctx, [[cx, cy], [cx + r * 0.35, cy - r * 0.35]], 2);
    }
  },
];

export const FLOWER_NAMES = ['plum', 'orchid', 'lotus', 'chrysanthemum', 'begonia', 'pomegranate', 'bamboo', 'peony', 'peach', 'hibiscus'] as const;
export type FlowerName = typeof FLOWER_NAMES[number];
/** Paints a flower into a 512 × 640 area of the context. */
export function paintFlower(ctx: Ctx, name: FlowerName, seed = 7) {
  ctx.save(); ctx.fillStyle = INK; ctx.strokeStyle = INK;
  FLOWER_PAINTERS[FLOWER_NAMES.indexOf(name)](ctx, seeded(seed));
  ctx.restore();
}
