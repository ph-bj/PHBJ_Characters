/**
 * 2D ink-brush primitives for drawing figures and props onto canvases, which the 3D scenes then
 * use as textures (see `inkRevealMaterial` in cinemaKit). Shared by every authored cinema.
 */

export type Ctx = CanvasRenderingContext2D;
export type Point = [number, number];

/** A stroke through the points with rounded ends: arms, legs, poles, ribbons. */
export function limb(ctx: Ctx, points: Point[], width: number) {
  ctx.lineWidth = width; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.beginPath();
  points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
  ctx.stroke();
}

export function disc(ctx: Ctx, x: number, y: number, rx: number, ry = rx) {
  ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.fill();
}

/** A long robe flaring from the shoulders to the hem; `sway` swings the hem sideways. */
export function robe(ctx: Ctx, x: number, top: number, bottom: number, wTop: number, wBottom: number, sway = 0) {
  ctx.beginPath();
  ctx.moveTo(x - wTop, top);
  ctx.quadraticCurveTo(x - wTop - 4, (top + bottom) / 2, x - wBottom + sway, bottom);
  ctx.quadraticCurveTo(x + sway, bottom + 8, x + wBottom + sway, bottom);
  ctx.quadraticCurveTo(x + wTop + 4, (top + bottom) / 2, x + wTop, top);
  ctx.closePath(); ctx.fill();
}

/** Details in paper colour over the ink, like the carved openings of a leather puppet on a lit screen. */
export function cutout(ctx: Ctx, draw: () => void) {
  ctx.save(); ctx.shadowBlur = 0; ctx.strokeStyle = ctx.fillStyle = 'rgba(246,242,234,0.55)'; draw(); ctx.restore();
}

/** True see-through openings, for figures drawn on a transparent canvas. */
export function pierce(ctx: Ctx, draw: () => void) {
  ctx.save(); ctx.shadowBlur = 0; ctx.globalCompositeOperation = 'destination-out'; draw(); ctx.restore();
}

// --- Standing figures ----------------------------------------------------------------------
// Local coordinates: the feet sit at the origin and y runs negative upward. A standing figure is
// about 205 units tall, with shoulders at (±24, -145) and the head centred at (0, -178).

export const FIGURE_W = 256;
export const FIGURE_H = 512;
const FIGURE_SCALE = 1.75;
const FIGURE_INK = '#0d0a0c';

/** Clears a FIGURE_W × FIGURE_H canvas and draws one figure on it in local coordinates. */
export function drawFigure(ctx: Ctx, draw: (ctx: Ctx) => void) {
  ctx.clearRect(0, 0, FIGURE_W, FIGURE_H);
  ctx.save();
  ctx.translate(FIGURE_W / 2, FIGURE_H - 12);
  ctx.scale(FIGURE_SCALE, FIGURE_SCALE);
  ctx.fillStyle = FIGURE_INK; ctx.strokeStyle = FIGURE_INK;
  ctx.shadowColor = 'rgba(13,10,12,0.6)'; ctx.shadowBlur = 3;
  draw(ctx);
  ctx.restore();
}

/** Robe, shoulders, shoes and neck of a standing figure. */
export function body(ctx: Ctx, sway = 0) {
  robe(ctx, 0, -150, -4, 24, 46, sway);
  disc(ctx, 0, -150, 28, 10);
  disc(ctx, -14, -2, 12, 5); disc(ctx, 14 + sway, -2, 12, 5);
  ctx.fillRect(-5, -168, 10, 16);
}

export type Hair = 'cap' | 'bun' | 'loose';
/** Head and headwear, tilted about the neck: a scholar's cap with ribbons, a topknot, or loose hair. */
export function head(ctx: Ctx, t: number, hair: Hair = 'cap', tilt = 0, x = 0, y = -178) {
  ctx.save(); ctx.translate(x, y + 12); ctx.rotate(tilt); ctx.translate(0, -12);
  disc(ctx, 0, 0, 15, 17);
  if (hair === 'cap') {
    ctx.beginPath(); ctx.moveTo(-16, -6); ctx.lineTo(-14, -26); ctx.lineTo(14, -26); ctx.lineTo(16, -6); ctx.fill();
    for (const side of [-1, 1]) limb(ctx, [[side * 12, -20], [side * 28, -8 + Math.sin(t * 2 + side) * 4], [side * 38, 12 + Math.sin(t * 2.3 + side) * 5]], 4);
  } else if (hair === 'bun') {
    disc(ctx, 0, -18, 10, 8);
    limb(ctx, [[-16, -20], [16, -16]], 2.5);
  } else {
    disc(ctx, 0, -14, 16, 9);
    for (let k = 0; k < 4; k++) limb(ctx, [[-6 + k * 4, -16], [-20 - k * 6 + Math.sin(t * 3 + k) * 4, 4 + k * 4], [-30 - k * 8 + Math.sin(t * 2.6 + k) * 8, 26 + k * 6]], 3);
  }
  ctx.restore();
}

/** An arm through shoulder, elbow and hand, ending in a hand. */
export function arm(ctx: Ctx, points: Point[], width = 12) {
  limb(ctx, points, width);
  const [x, y] = points[points.length - 1];
  disc(ctx, x, y, 7);
}
