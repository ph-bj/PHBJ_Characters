import { disc, limb, type Ctx } from '../../../brush';
import { WRITING_INK } from '../../../cinemaKit';
import { FLOWER_NAMES, INK, KAITI, leaf, paintFlower, PETAL_RED, RED, seeded, stroke, WASH } from '../../../paint';

/**
 * Brush paintings for Chapter 1, paragraph 3: a flower album of the ten kinds of leading
 * performers, the eight lower kinds as blotted words, and the embroidered mandarin ducks.
 */

export const PANEL_W = 512;
export const PANEL_H = 640;
export const BLOT_SIZE = 256;
export const DUCKS_SIZE = 1024;
/** The ten kinds of leading performers, in the passage's order. */
export const RANKS = ['至', '慧', '韵', '醇', '淑', '烈', '直', '酣', '艳', '媚'];
/** The eight lower kinds, to whom 情 cannot be applied. */
export const LOW_KINDS = ['淫', '邪', '黠', '荡', '贪', '魔', '祟', '蠹'];

/**
 * One leaf of the album: a flower, its rank written vertically, and a vermilion seal. Drawn on a
 * transparent canvas so only the ink seeps in; the paper is a separate plane behind it.
 */
export function paintFlowerPanel(ctx: Ctx, rank: number) {
  ctx.clearRect(0, 0, PANEL_W, PANEL_H);
  ctx.strokeStyle = 'rgba(60,50,45,0.35)'; ctx.lineWidth = 3; ctx.strokeRect(14, 14, PANEL_W - 28, PANEL_H - 28);
  ctx.fillStyle = INK; ctx.strokeStyle = INK;
  paintFlower(ctx, FLOWER_NAMES[rank], rank + 7);
  ctx.fillStyle = WRITING_INK; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = `bold 44px ${KAITI}`;
  ['情', '中', RANKS[rank]].forEach((char, i) => ctx.fillText(char, 452, 76 + i * 52));
  ctx.fillStyle = RED; ctx.fillRect(430, 250, 44, 44);
  ctx.fillStyle = '#f4ece0'; ctx.font = `bold 32px ${KAITI}`; ctx.fillText(RANKS[rank], 452, 274);
}

/** One of the lower kinds: the word blotted and splattered, as if the ink had spoiled. */
export function paintBlot(ctx: Ctx, char: string, seed: number) {
  const rand = seeded(seed + 101), c = BLOT_SIZE / 2;
  ctx.clearRect(0, 0, BLOT_SIZE, BLOT_SIZE);
  ctx.save(); ctx.translate(c, c); ctx.rotate((rand() - 0.5) * 0.25);
  ctx.fillStyle = WRITING_INK; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = `bold 176px ${KAITI}`;
  // The character itself stays legible; the spoiling is in the splatter and runs around it.
  ctx.fillText(char, 0, 6);
  ctx.restore();
  ctx.fillStyle = '#1d1814';
  for (let i = 0; i < 26; i++) { const a = rand() * Math.PI * 2, d = 60 + rand() * 60; disc(ctx, c + Math.cos(a) * d, c + Math.sin(a) * d, 1.5 + rand() * 5); }
  for (let i = 0; i < 3; i++) { const x = c - 50 + rand() * 100; limb(ctx, [[x, c + 60], [x + (rand() - 0.5) * 6, c + 80 + rand() * 40]], 3 + rand() * 3); }
}

/** The embroidery: a pair of mandarin ducks among ripples and a lotus, drawn on a transparent disc. */
export function paintDucks(ctx: Ctx) {
  const S = DUCKS_SIZE;
  ctx.clearRect(0, 0, S, S);
  ctx.save(); ctx.beginPath(); ctx.arc(S / 2, S / 2, S / 2 - 4, 0, Math.PI * 2); ctx.clip();
  // Ripples.
  ctx.strokeStyle = 'rgba(40,32,28,0.45)'; ctx.lineWidth = 3;
  for (let k = 0; k < 7; k++) {
    const y = 700 + k * 34, x0 = 140 + (k % 2) * 60;
    ctx.beginPath(); ctx.moveTo(x0, y);
    for (let x = x0; x < x0 + 620; x += 40) { ctx.quadraticCurveTo(x + 10, y - 8, x + 20, y); ctx.quadraticCurveTo(x + 30, y + 8, x + 40, y); }
    ctx.stroke();
  }
  // A lotus leaf and a red bud on the right.
  ctx.fillStyle = WASH; ctx.strokeStyle = INK; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.ellipse(780, 700, 150, 52, -0.1, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  stroke(ctx, [[820, 690], [830, 560], [812, 440]], 7, 5);
  leaf(ctx, 812, 450, 812, 350, 10, 28, PETAL_RED, INK);
  leaf(ctx, 812, 450, 770, 380, 14, 18, PETAL_RED, INK);
  // The drake, facing right: a pale body, dark head, vermilion crest, bill and sail feathers.
  const bird = (x: number, y: number, facing: 1 | -1, drake: boolean) => {
    ctx.save(); ctx.translate(x, y); ctx.scale(facing, 1);
    ctx.fillStyle = drake ? 'rgba(210,202,190,1)' : 'rgba(150,140,128,1)'; ctx.strokeStyle = INK; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.ellipse(0, 0, 150, 70, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Wing feathers in ink.
    ctx.lineWidth = 3;
    for (let k = 0; k < 5; k++) { ctx.beginPath(); ctx.arc(-40 + k * 8, -10, 70 - k * 10, 3.5, 5.6); ctx.stroke(); }
    // Tail.
    ctx.fillStyle = INK; ctx.beginPath(); ctx.moveTo(-140, -10); ctx.lineTo(-210, -50); ctx.lineTo(-190, 10); ctx.closePath(); ctx.fill();
    if (drake) { ctx.fillStyle = RED; ctx.beginPath(); ctx.moveTo(-20, -60); ctx.lineTo(20, -130); ctx.lineTo(50, -58); ctx.closePath(); ctx.fill(); }
    // Neck and head.
    ctx.fillStyle = drake ? INK : 'rgba(110,100,90,1)';
    ctx.beginPath(); ctx.moveTo(90, -40); ctx.quadraticCurveTo(110, -110, 130, -140); ctx.lineTo(170, -120); ctx.quadraticCurveTo(150, -70, 140, -20); ctx.closePath(); ctx.fill();
    disc(ctx, 150, -150, 48, 42);
    if (drake) { ctx.fillStyle = RED; ctx.beginPath(); ctx.moveTo(130, -190); ctx.quadraticCurveTo(60, -200, 40, -150); ctx.quadraticCurveTo(90, -170, 120, -160); ctx.fill(); }
    ctx.fillStyle = drake ? RED : '#5a5048'; ctx.beginPath(); ctx.moveTo(192, -158); ctx.lineTo(240, -140); ctx.lineTo(194, -134); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#f7f3eb'; disc(ctx, 162, -162, 9); ctx.fillStyle = INK; disc(ctx, 164, -162, 4);
    ctx.restore();
  };
  bird(300, 600, 1, true);
  bird(724, 650, -1, false);
  ctx.restore();
}
