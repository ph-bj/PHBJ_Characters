import { disc, limb, type Ctx } from '../brush';
import { INK, leaf, PETAL_RED, RED, seeded, stroke, WASH } from '../paint';

/**
 * Ink paintings for the emblems (题目) that open each actor's entry in the 《花选》, painted on a
 * 1024 × 768 canvas. `t` animates the ones that move: snow, fireworks, wind, water.
 */
export const MOTIF_W = 1024;
export const MOTIF_H = 768;

export type Motif = 'pearl-tree' | 'jade-moon' | 'coral' | 'snow-peak' | 'jade-tree' | 'fire-tree' | 'autumn-lotus' | 'qilin';
/** Motifs that change over time and must be redrawn each frame. */
export const ANIMATED_MOTIFS: Motif[] = ['snow-peak', 'jade-tree', 'fire-tree', 'autumn-lotus', 'pearl-tree'];

function cloud(ctx: Ctx, x: number, y: number, r: number) {
  ctx.save(); ctx.strokeStyle = INK; ctx.lineWidth = 3;
  for (const [dx, dy, k] of [[0, 0, 1], [r * 1.1, r * 0.2, 0.8], [-r * 1.1, r * 0.25, 0.75]]) {
    ctx.beginPath(); ctx.arc(x + dx, y + dy, r * k, Math.PI * 0.9, Math.PI * 2.2); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + dx + r * 0.25 * k, y + dy - r * 0.05, r * k * 0.45, Math.PI * 1.1, Math.PI * 2.4); ctx.stroke();
  }
  ctx.restore();
}

function waves(ctx: Ctx, y0: number, t: number, rows = 5) {
  ctx.save(); ctx.strokeStyle = INK; ctx.lineWidth = 3;
  for (let r = 0; r < rows; r++) {
    const y = y0 + r * 34, offset = (t * 20 + r * 37) % 90;
    for (let x = -90 + offset; x < MOTIF_W + 90; x += 90) {
      ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + 30, y - 26, x + 60, y); ctx.quadraticCurveTo(x + 50, y - 10, x + 40, y - 4); ctx.stroke();
    }
  }
  ctx.restore();
}

const PAINTERS: Record<Motif, (ctx: Ctx, t: number) => void> = {
  // 琼楼珠树 — a jade tower and a tree hung with pearls.
  'pearl-tree': (ctx, t) => {
    ctx.fillStyle = WASH; ctx.fillRect(560, 470, 360, 26);
    for (const x of [600, 700, 800, 880]) stroke(ctx, [[x, 470], [x, 300]], 10, 8);
    stroke(ctx, [[540, 300], [940, 300]], 12, 12);
    ctx.fillStyle = INK; ctx.beginPath(); ctx.moveTo(520, 300); ctx.quadraticCurveTo(740, 250, 960, 300); ctx.lineTo(900, 250); ctx.quadraticCurveTo(740, 200, 580, 250); ctx.closePath(); ctx.fill();
    stroke(ctx, [[600, 250], [880, 250]], 5, 5);
    ctx.beginPath(); ctx.moveTo(600, 250); ctx.quadraticCurveTo(740, 150, 880, 250); ctx.fill();
    stroke(ctx, [[240, 700], [260, 520], [230, 400], [300, 260], [380, 190]], 30, 8);
    stroke(ctx, [[250, 480], [150, 400], [120, 300]], 14, 4);
    stroke(ctx, [[270, 380], [400, 330], [470, 280]], 12, 4);
    const rand = seeded(3);
    for (let i = 0; i < 26; i++) {
      const x = 100 + rand() * 400, y = 180 + rand() * 300, glint = 0.5 + 0.5 * Math.sin(t * 3 + i);
      limb(ctx, [[x, y - 26], [x, y - 6]], 1.2);
      ctx.save(); ctx.fillStyle = '#f7f3ea'; ctx.strokeStyle = INK; ctx.lineWidth = 2 + glint;
      ctx.beginPath(); ctx.arc(x, y, 9, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
    }
  },
  // 瑶台璧月 — a jade moon over the jasper terrace.
  'jade-moon': ctx => {
    ctx.save(); ctx.strokeStyle = INK; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(650, 250, 150, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = WASH; ctx.beginPath(); ctx.arc(650, 250, 230, 0, Math.PI * 2); ctx.arc(650, 250, 152, 0, Math.PI * 2, true); ctx.fill(); ctx.restore();
    cloud(ctx, 300, 200, 50); cloud(ctx, 880, 420, 40);
    ctx.fillStyle = WASH; ctx.fillRect(80, 620, 860, 60);
    stroke(ctx, [[80, 560], [940, 560]], 8, 8); stroke(ctx, [[80, 620], [940, 620]], 10, 10);
    for (let x = 100; x <= 920; x += 70) { stroke(ctx, [[x, 560], [x, 620]], 6, 6); disc(ctx, x, 552, 9); }
  },
  // 碧海珊枝 — a coral branch rising from the sea.
  coral: (ctx, t) => {
    waves(ctx, 560, t);
    const branch = (x: number, y: number, a: number, len: number, w: number, depth: number) => {
      const x2 = x + Math.cos(a) * len, y2 = y - Math.sin(a) * len;
      stroke(ctx, [[x, y], [x2, y2]], w, w * 0.7, RED);
      if (depth > 0) { branch(x2, y2, a + 0.45, len * 0.72, w * 0.7, depth - 1); branch(x2, y2, a - 0.4, len * 0.7, w * 0.7, depth - 1); }
      else { ctx.save(); ctx.fillStyle = RED; disc(ctx, x2, y2, w * 0.9); ctx.restore(); }
    };
    branch(520, 590, Math.PI / 2, 150, 26, 4);
  },
  // 嵰山艳雪 — bright snow on Mount Qian.
  'snow-peak': (ctx, t) => {
    for (const [x0, peak, h] of [[40, 360, 330], [340, 560, 470], [620, 820, 380]]) {
      ctx.fillStyle = WASH; ctx.beginPath(); ctx.moveTo(x0, 720); ctx.lineTo(peak, 720 - h); ctx.lineTo(x0 + 460, 720); ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#f7f3ea'; ctx.beginPath(); ctx.moveTo(peak - 70, 720 - h + 110); ctx.lineTo(peak, 720 - h); ctx.lineTo(peak + 80, 720 - h + 120); ctx.lineTo(peak + 20, 720 - h + 90); ctx.closePath(); ctx.fill();
      stroke(ctx, [[x0, 720], [peak, 720 - h], [x0 + 460, 720]], 5, 3);
      for (let k = 0; k < 4; k++) stroke(ctx, [[peak - 10 + k * 14, 720 - h + 40 + k * 30], [peak - 40 + k * 20, 720 - h + 140 + k * 40]], 3, 1);
    }
    const rand = seeded(11);
    ctx.fillStyle = INK;
    for (let i = 0; i < 90; i++) { const x = rand() * MOTIF_W, speed = 30 + rand() * 40; disc(ctx, (x + Math.sin(t + i) * 12) % MOTIF_W, (rand() * MOTIF_H + t * speed) % MOTIF_H, 2 + rand() * 2.5); }
  },
  // 玉树临风 — a jade tree facing the wind.
  'jade-tree': (ctx, t) => {
    const sway = Math.sin(t * 1.4) * 14;
    ctx.fillStyle = WASH; ctx.beginPath(); ctx.ellipse(500, 700, 240, 40, 0, 0, Math.PI * 2); ctx.fill();
    stroke(ctx, [[500, 700], [510, 560], [490, 420], [520 + sway * 0.4, 280], [540 + sway, 160]], 26, 7);
    for (let k = 0; k < 6; k++) {
      const y = 200 + k * 70, x = 505 + sway * (1 - k / 6);
      stroke(ctx, [[x, y], [x + 120 + sway * 2, y - 30 + k * 4]], 7, 2);
      for (let j = 0; j < 5; j++) leaf(ctx, x + 30 + j * 22 + sway, y - 12 + j * 2, x + 90 + j * 26 + sway * 2.4, y - 8 + j * 6, 6, 7);
    }
    for (let k = 0; k < 8; k++) { const y = 150 + k * 60; limb(ctx, [[700 + (t * 160 + k * 90) % 300, y], [760 + (t * 160 + k * 90) % 300, y - 6]], 2); }
  },
  // 火树银花 — silver flowers on a fiery tree: fireworks over a festival tree.
  'fire-tree': (ctx, t) => {
    stroke(ctx, [[500, 720], [500, 520], [460, 420]], 24, 10);
    stroke(ctx, [[500, 540], [600, 450], [640, 380]], 12, 4);
    stroke(ctx, [[495, 580], [380, 500], [340, 440]], 12, 4);
    for (const [x, y] of [[460, 420], [640, 380], [340, 440], [520, 470]]) { ctx.save(); ctx.fillStyle = PETAL_RED; disc(ctx, x, y, 16); ctx.restore(); }
    for (let b = 0; b < 5; b++) {
      const phase = (t * 0.55 + b / 5) % 1, cx = 180 + b * 170, cy = 120 + (b % 2) * 110, r = 30 + phase * 120;
      ctx.save(); ctx.globalAlpha = 1 - phase; ctx.strokeStyle = b % 2 ? RED : INK; ctx.lineWidth = 3;
      for (let k = 0; k < 16; k++) { const a = k / 16 * Math.PI * 2; ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * r * 0.55, cy + Math.sin(a) * r * 0.55); ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); ctx.stroke(); }
      ctx.restore();
    }
  },
  // 秋水芙蓉 — lotus on autumn water.
  'autumn-lotus': (ctx, t) => {
    ctx.save(); ctx.strokeStyle = 'rgba(40,32,28,0.5)'; ctx.lineWidth = 2;
    for (let r = 0; r < 6; r++) { const y = 600 + r * 26; ctx.beginPath(); for (let x = 60; x < 960; x += 20) ctx.lineTo(x, y + Math.sin(x * 0.03 + t * 1.5 + r) * 4); ctx.stroke(); }
    ctx.restore();
    for (const [x, h, bend] of [[140, 380, 30], [190, 300, -20], [820, 420, -30], [880, 340, 20]]) stroke(ctx, [[x, 640], [x + bend, 640 - h]], 3, 1);
    ctx.fillStyle = WASH; ctx.beginPath(); ctx.ellipse(360, 560, 150, 46, 0.1, 0, Math.PI * 2); ctx.fill();
    stroke(ctx, [[520, 640], [530, 460], [520, 380]], 6, 4);
    for (const [dx, dy, b] of [[-70, -40, 16], [-40, -80, 10], [0, -95, 0], [40, -80, -10], [70, -40, -16]]) leaf(ctx, 520, 380, 520 + dx, 380 + dy, b, 22, PETAL_RED, INK);
    stroke(ctx, [[640, 640], [650, 520]], 4, 3); leaf(ctx, 650, 530, 650, 470, 6, 16, PETAL_RED, INK);
  },
  // 天上玉麟 — a jade qilin among the clouds of heaven.
  qilin: ctx => {
    for (const [x, y, r] of [[160, 560, 60], [420, 640, 70], [760, 600, 60], [880, 250, 40], [200, 220, 45]]) cloud(ctx, x, y, r);
    ctx.save(); ctx.translate(520, 420); ctx.fillStyle = INK; ctx.strokeStyle = INK;
    ctx.beginPath(); ctx.ellipse(0, 0, 150, 60, -0.05, 0, Math.PI * 2); ctx.fill();
    for (const [x, lean] of [[-110, -0.3], [-70, 0.2], [80, -0.2], [120, 0.3]]) stroke(ctx, [[x, 30], [x + lean * 40, 110], [x + lean * 60, 150]], 16, 10);
    ctx.beginPath(); ctx.moveTo(110, -30); ctx.quadraticCurveTo(170, -110, 200, -150); ctx.lineTo(250, -130); ctx.quadraticCurveTo(210, -60, 170, 0); ctx.closePath(); ctx.fill();
    disc(ctx, 230, -150, 40, 30);
    stroke(ctx, [[220, -178], [200, -240]], 8, 2);
    ctx.fillStyle = '#f7f3ea'; disc(ctx, 244, -156, 7);
    for (let k = 0; k < 10; k++) { ctx.fillStyle = '#f7f3ea'; disc(ctx, -110 + k * 24, -14 + (k % 2) * 16, 7); }
    for (let k = 0; k < 5; k++) { ctx.save(); ctx.fillStyle = RED; ctx.beginPath(); const x = -150 - k * 10, y = -20 + k * 14; ctx.moveTo(x, y); ctx.quadraticCurveTo(x - 60, y - 30, x - 80, y + 10); ctx.quadraticCurveTo(x - 40, y, x, y + 14); ctx.fill(); ctx.restore(); }
    ctx.restore();
  },
};

export function paintMotif(ctx: Ctx, motif: Motif, t: number) {
  ctx.save(); ctx.fillStyle = INK; ctx.strokeStyle = INK; PAINTERS[motif](ctx, t); ctx.restore();
}
