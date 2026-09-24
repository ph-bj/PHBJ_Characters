/** A lantern-lit shadow-play screen: a playful brush sketches the city's players into moving silhouettes. */
export const SHADOW_W = 1024;
export const SHADOW_H = 576;
const INK = '#1b110c';
const GROUND = 470;

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const ease = (value: number) => { const x = clamp01(value); return x * x * (3 - 2 * x); };
type Ctx = CanvasRenderingContext2D;
type Point = [number, number];

function limb(ctx: Ctx, points: Point[], width: number) {
  ctx.lineWidth = width; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.beginPath();
  points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
  ctx.stroke();
}
function disc(ctx: Ctx, x: number, y: number, rx: number, ry = rx) {
  ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.fill();
}
function robe(ctx: Ctx, x: number, top: number, bottom: number, wTop: number, wBottom: number, sway = 0) {
  ctx.beginPath();
  ctx.moveTo(x - wTop, top);
  ctx.quadraticCurveTo(x - wTop - 4, (top + bottom) / 2, x - wBottom + sway, bottom);
  ctx.quadraticCurveTo(x + sway, bottom + 8, x + wBottom + sway, bottom);
  ctx.quadraticCurveTo(x + wTop + 4, (top + bottom) / 2, x + wTop, top);
  ctx.closePath(); ctx.fill();
}
/** Paper-coloured cut-outs, as in carved leather puppets. */
function cutout(ctx: Ctx, draw: () => void) {
  ctx.save(); ctx.shadowBlur = 0; ctx.strokeStyle = ctx.fillStyle = 'rgba(255,214,150,0.4)'; draw(); ctx.restore();
}

function scholar(ctx: Ctx, x: number, g: number, t: number) {
  const sway = Math.sin(t * 1.3) * 3;
  robe(ctx, x, g - 150, g - 4, 24, 46, sway);
  disc(ctx, x, g - 150, 28, 10);
  disc(ctx, x - 14, g - 2, 12, 5); disc(ctx, x + 14 + sway, g - 2, 12, 5);
  ctx.fillRect(x - 5, g - 168, 10, 16);
  disc(ctx, x, g - 178, 15, 17);
  ctx.beginPath(); ctx.moveTo(x - 16, g - 184); ctx.lineTo(x - 14, g - 204); ctx.lineTo(x + 14, g - 204); ctx.lineTo(x + 16, g - 184); ctx.fill();
  for (const side of [-1, 1]) limb(ctx, [[x + side * 12, g - 198], [x + side * 30, g - 186 + Math.sin(t * 2 + side) * 4], [x + side * 40, g - 165 + Math.sin(t * 2.3 + side) * 6]], 4);
  limb(ctx, [[x - 24, g - 145], [x - 36, g - 105], [x - 30, g - 78]], 13);
  disc(ctx, x - 30, g - 72, 7);
  const fanY = g - 150 + Math.sin(t * 2.1) * 10;
  limb(ctx, [[x + 24, g - 145], [x + 50, g - 118], [x + 60, fanY]], 12);
  const open = 0.5 + 1.1 * (0.5 + 0.5 * Math.sin(t * 1.6));
  const mid = -Math.PI / 2 + 0.35, radius = 54;
  ctx.beginPath(); ctx.moveTo(x + 60, fanY); ctx.arc(x + 60, fanY, radius, mid - open / 2, mid + open / 2); ctx.closePath(); ctx.fill();
  cutout(ctx, () => {
    ctx.lineWidth = 1.5;
    for (let k = 1; k < 8; k++) {
      const a = mid - open / 2 + open * k / 8;
      ctx.beginPath(); ctx.moveTo(x + 60 + Math.cos(a) * 12, fanY + Math.sin(a) * 12); ctx.lineTo(x + 60 + Math.cos(a) * (radius - 6), fanY + Math.sin(a) * (radius - 6)); ctx.stroke();
    }
    robe(ctx, x, g - 120, g - 112, 10, 10);
  });
}

function dancer(ctx: Ctx, x: number, g: number, t: number) {
  // A turn reads on a flat screen as the silhouette narrowing and flipping.
  const turn = Math.cos(t * 1.5);
  ctx.save(); ctx.translate(x, 0); ctx.scale((turn < 0 ? -1 : 1) * (0.42 + 0.58 * Math.abs(turn)), 1);
  const bob = Math.sin(t * 3) * 3;
  robe(ctx, 0, g - 148 + bob, g - 4, 20, 60 + Math.sin(t * 3) * 6, Math.sin(t * 1.5) * 8);
  disc(ctx, 0, g - 148 + bob, 24, 9);
  ctx.fillRect(-4, g - 166 + bob, 8, 14);
  disc(ctx, 0, g - 176 + bob, 14, 16);
  disc(ctx, 0, g - 195 + bob, 12, 9);
  for (let k = -2; k <= 2; k++) disc(ctx, k * 9, g - 201 + bob - (2 - Math.abs(k)) * 3, 3.2);
  limb(ctx, [[12, g - 196 + bob], [26, g - 186 + bob], [28, g - 168 + bob]], 2);
  for (const side of [-1, 1]) {
    const a = t * 2.2 + (side > 0 ? 0 : Math.PI * 0.6);
    const hand: Point = [side * (58 + Math.cos(a) * 10), g - 196 + bob - Math.sin(a) * 30];
    limb(ctx, [[side * 22, g - 144 + bob], [side * (44 + Math.sin(a) * 6), g - 160 + bob - Math.sin(a) * 20], hand], 11);
    // Water sleeves: long silk extensions that trail the arm's motion.
    let previous = hand;
    for (let k = 1; k <= 11; k++) {
      const next: Point = [hand[0] + side * k * 9 + Math.sin(a * 1.3 - k * 0.6) * k * 3.2, hand[1] - Math.sin(a - k * 0.5) * k * 4 + k * k * 1.1];
      limb(ctx, [previous, next], 17 - k);
      previous = next;
    }
  }
  cutout(ctx, () => { for (let k = 0; k < 3; k++) disc(ctx, 0, g - 120 + bob + k * 22, 4); });
  ctx.restore();
}

function acrobat(ctx: Ctx, x: number, g: number, t: number) {
  const phase = (t % 2.2) / 2.2;
  const p = clamp01((phase - 0.25) / 0.6);
  const jump = Math.sin(Math.PI * p) * 120;
  const crouch = phase < 0.25 ? Math.sin(phase / 0.25 * Math.PI) * 12 : 0;
  const tuck = Math.sin(Math.PI * p);
  ctx.save(); ctx.translate(x, g - 78 - jump + crouch); ctx.rotate(ease(p) * Math.PI * 2);
  for (const side of [-1, 1]) {
    limb(ctx, [[side * 9, 0], [side * (14 + tuck * 6 + crouch * 0.6), 38 - tuck * 30 - crouch], [side * 12, 74 - tuck * 50 - crouch]], 12);
    disc(ctx, side * 16, 78 - tuck * 50 - crouch, 9, 5);
  }
  ctx.beginPath(); ctx.moveTo(-18, -62); ctx.lineTo(18, -62); ctx.lineTo(24, 6); ctx.lineTo(-24, 6); ctx.closePath(); ctx.fill();
  disc(ctx, 0, -62, 22, 8);
  disc(ctx, 0, -86, 14, 15);
  limb(ctx, [[-12, -92], [-30, -86 + Math.sin(t * 9) * 4], [-42, -94 + Math.sin(t * 7) * 6]], 3);
  for (const side of [-1, 1]) limb(ctx, [[side * 18, -58], [side * (40 - tuck * 14), -58 + tuck * 20 - (1 - tuck) * 18], [side * (52 - tuck * 30), -78 + tuck * 50]], 10);
  cutout(ctx, () => { ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-14, -30); ctx.lineTo(14, -30); ctx.moveTo(-16, -14); ctx.lineTo(16, -14); ctx.stroke(); });
  ctx.restore();
}

function clown(ctx: Ctx, x: number, g: number, t: number) {
  const hop = Math.abs(Math.sin(t * 3.2)) * 16;
  ctx.save(); ctx.translate(x, g - hop); ctx.rotate(Math.sin(t * 3.2) * 0.08);
  robe(ctx, 0, -120, -30, 26, 42);
  for (const side of [-1, 1]) { limb(ctx, [[side * 14, -34], [side * 22, -16], [side * 16, 0]], 11); disc(ctx, side * 20, 2, 11, 5); }
  disc(ctx, 0, -120, 30, 10);
  disc(ctx, 0, -142, 16, 15);
  ctx.beginPath(); ctx.moveTo(-17, -150); ctx.quadraticCurveTo(-6, -200, 22, -222); ctx.quadraticCurveTo(4, -190, 17, -150); ctx.closePath(); ctx.fill();
  disc(ctx, 24, -224, 7);
  // The clown's white nose patch, left as bare paper.
  cutout(ctx, () => ctx.fillRect(-6, -148, 12, 9));
  limb(ctx, [[-24, -116], [-44, -96], [-26, -80]], 10);
  limb(ctx, [[24, -116], [44, -100], [52, -120]], 10);
  limb(ctx, [[52, -120], [66, -232]], 4);
  const swing = Math.sin(t * 3.2 + 0.8) * 0.3;
  const lx = 88 + Math.sin(swing) * 18, ly = -192;
  limb(ctx, [[66, -232], [84, -226], [lx, ly - 18]], 2);
  disc(ctx, lx, ly, 15, 19);
  cutout(ctx, () => { ctx.lineWidth = 1.6; for (const dx of [-7, 0, 7]) { ctx.beginPath(); ctx.moveTo(lx + dx, ly - 14); ctx.lineTo(lx + dx, ly + 14); ctx.stroke(); } });
  limb(ctx, [[lx, ly + 18], [lx, ly + 32]], 3);
  ctx.restore();
}

function brush(ctx: Ctx, x: number, y: number, tilt: number) {
  ctx.save();
  ctx.shadowBlur = 16; ctx.shadowColor = 'rgba(27,17,12,0.8)';
  ctx.translate(x, y); ctx.rotate(0.38 + tilt);
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(-10, -22, -7, -46); ctx.lineTo(7, -46); ctx.quadraticCurveTo(10, -22, 0, 0); ctx.fill();
  ctx.fillRect(-7, -58, 14, 12);
  ctx.fillRect(-5, -260, 10, 204);
  ctx.restore();
}

const FIGURES = [
  { x: 190, draw: scholar },
  { x: 420, draw: dancer },
  { x: 650, draw: acrobat },
  { x: 860, draw: clown },
];

export function createShadowPlay() {
  const canvas = document.createElement('canvas');
  canvas.width = SHADOW_W; canvas.height = SHADOW_H;
  const ctx = canvas.getContext('2d')!;
  // The lamp-lit paper is fixed, so render it once.
  const paper = document.createElement('canvas');
  paper.width = SHADOW_W; paper.height = SHADOW_H;
  const p = paper.getContext('2d')!;
  const glow = p.createRadialGradient(SHADOW_W / 2, SHADOW_H * 0.62, 40, SHADOW_W / 2, SHADOW_H * 0.55, SHADOW_W * 0.62);
  glow.addColorStop(0, '#fff1cc'); glow.addColorStop(0.45, '#f3c27c'); glow.addColorStop(1, '#8a4a1e');
  p.fillStyle = glow; p.fillRect(0, 0, SHADOW_W, SHADOW_H);
  let seed = 7;
  const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  p.globalAlpha = 0.08; p.strokeStyle = '#6b3b16'; p.lineWidth = 1;
  for (let i = 0; i < 280; i++) {
    const x = random() * SHADOW_W, y = random() * SHADOW_H, length = 10 + random() * 40, a = random() * Math.PI;
    p.beginPath(); p.moveTo(x, y);
    p.quadraticCurveTo(x + Math.cos(a) * length * 0.5 + (random() - 0.5) * 8, y + Math.sin(a) * length * 0.5, x + Math.cos(a) * length, y + Math.sin(a) * length);
    p.stroke();
  }

  /** `t` is seconds since the shot began; everything derives from it so seeking is exact. */
  function draw(t: number) {
    ctx.shadowBlur = 0;
    ctx.drawImage(paper, 0, 0);
    ctx.fillStyle = `rgba(60,25,5,${0.07 + 0.04 * Math.sin(t * 9.1) * Math.sin(t * 3.3)})`;
    ctx.fillRect(0, 0, SHADOW_W, SHADOW_H);
    ctx.fillStyle = INK; ctx.strokeStyle = INK;
    ctx.shadowColor = 'rgba(27,17,12,0.7)'; ctx.shadowBlur = 5;

    // The brush first lays the stage floor, tapering at both ends.
    const floor = ease((t - 0.2) / 1.2);
    let tip: Point | null = null;
    if (floor > 0) {
      const x0 = 50, x1 = 974, end = x0 + (x1 - x0) * floor, top: Point[] = [], bottom: Point[] = [];
      for (let x = x0; x <= end; x += 8) {
        const u = (x - x0) / (x1 - x0), w = 1.5 + 6 * Math.pow(Math.sin(Math.PI * u), 0.5), y = GROUND + 8 + Math.sin(x * 0.013) * 3;
        top.push([x, y - w]); bottom.push([x, y + w * 0.8]);
      }
      ctx.beginPath();
      [...top, ...bottom.reverse()].forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
      ctx.closePath(); ctx.fill();
      if (floor < 1) tip = [end, GROUND + 8];
    }
    // Then each player is brushed in from the feet up.
    FIGURES.forEach((figure, i) => {
      const reveal = clamp01((t - 1.3 - i * 1.05) / 0.9);
      if (reveal <= 0) return;
      const edge = GROUND + 30 - reveal * 330;
      ctx.save(); ctx.beginPath(); ctx.rect(figure.x - 140, edge, 280, SHADOW_H); ctx.clip();
      figure.draw(ctx, figure.x, GROUND, t);
      ctx.restore();
      if (reveal < 1) tip = [figure.x + Math.sin(t * 22) * 55 * (1 - reveal * 0.4), edge + Math.cos(t * 17) * 8];
    });
    const lift = clamp01((t - 5.4) / 0.9);
    if (!tip && lift < 1) tip = t < 5.4 ? null : [860 + lift * 180, GROUND - 300 - lift * 260];
    if (tip) brush(ctx, tip[0], tip[1], Math.sin(t * 20) * 0.12);
  }
  return { canvas, draw };
}
