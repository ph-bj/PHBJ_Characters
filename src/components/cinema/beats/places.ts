import { disc, limb, type Ctx } from '../brush';
import { blossom, INK, leaf, RED, seeded, stroke, WASH } from '../paint';

/**
 * Painted backdrops for everyday scenes, each filling a PLACE_W × PLACE_H canvas in ink on paper.
 * They hang behind the figures of a tableau (see tableau.ts). Animated ones take `t`.
 */

export const PLACE_W = 1024;
export const PLACE_H = 576;

export type Place =
  | 'paper' | 'study' | 'hall' | 'boudoir' | 'gate' | 'street' | 'theatre' | 'river' | 'arch'
  | 'landscape' | 'moon-palace' | 'clouds' | 'mirror' | 'stele' | 'still-wine' | 'birds' | 'mud-lotus'
  | 'cart-window'
  // Chapter 2
  | 'flower-hall' | 'night-room' | 'banquet' | 'parlor' | 'guild-hall' | 'canal' | 'exam-paper';

const PAPER = '#ece6da';
const wash = (ctx: Ctx, alpha: number, draw: () => void) => { ctx.save(); ctx.fillStyle = `rgba(40,32,28,${alpha})`; draw(); ctx.restore(); };

/** Distant hills in layered wash. */
function hills(ctx: Ctx, rand: () => number, base: number, layers = 3) {
  for (let l = 0; l < layers; l++) wash(ctx, 0.08 + l * 0.07, () => {
    ctx.beginPath(); ctx.moveTo(0, PLACE_H);
    for (let x = 0; x <= PLACE_W; x += 32) ctx.lineTo(x, base + l * 40 - Math.abs(Math.sin(x * 0.006 + l * 2 + rand())) * (90 - l * 20));
    ctx.lineTo(PLACE_W, PLACE_H); ctx.fill();
  });
}

/** A tiled roof ridge with upturned eaves between x0 and x1 at height y. */
function roof(ctx: Ctx, x0: number, x1: number, y: number, depth = 40) {
  ctx.beginPath(); ctx.moveTo(x0 - 20, y - 10); ctx.quadraticCurveTo(x0 + 10, y, x0 + 30, y - depth);
  ctx.lineTo(x1 - 30, y - depth); ctx.quadraticCurveTo(x1 - 10, y, x1 + 20, y - 10); ctx.lineTo(x1, y + 4); ctx.lineTo(x0, y + 4); ctx.fill();
  ctx.save(); ctx.strokeStyle = PAPER; ctx.lineWidth = 1.5; for (let x = x0 + 34; x < x1 - 30; x += 12) { ctx.beginPath(); ctx.moveTo(x, y - depth + 4); ctx.lineTo(x - 3, y); ctx.stroke(); } ctx.restore();
}

function willow(ctx: Ctx, x: number, y: number, t: number) {
  stroke(ctx, [[x, y], [x - 8, y - 120], [x + 6, y - 220]], 16, 5);
  for (let k = 0; k < 16; k++) { const bx = x - 70 + k * 10, by = y - 210 + Math.abs(k - 8) * 6; limb(ctx, [[bx, by], [bx + Math.sin(t * 1.2 + k) * 8, by + 90 + (k % 3) * 20]], 1.5); }
}

function lattice(ctx: Ctx, x: number, y: number, w: number, h: number) {
  ctx.save(); ctx.strokeStyle = '#3b342e'; ctx.lineWidth = 6; ctx.strokeRect(x, y, w, h); ctx.lineWidth = 3;
  for (let gx = x + 24; gx < x + w; gx += 24) { ctx.beginPath(); ctx.moveTo(gx, y); ctx.lineTo(gx, y + h); ctx.stroke(); }
  for (let gy = y + 24; gy < y + h; gy += 24) { ctx.beginPath(); ctx.moveTo(x, gy); ctx.lineTo(x + w, gy); ctx.stroke(); }
  ctx.restore();
}

const PAINTERS: Record<Place, (ctx: Ctx, t: number, rand: () => number) => void> = {
  paper: () => {},
  study: ctx => {
    ctx.strokeStyle = '#3b342e'; ctx.lineWidth = 10; ctx.beginPath(); ctx.arc(250, 220, 120, 0, Math.PI * 2); ctx.stroke();
    ctx.save(); ctx.beginPath(); ctx.arc(250, 220, 115, 0, Math.PI * 2); ctx.clip(); ctx.lineWidth = 4;
    for (let d = -240; d <= 240; d += 34) { ctx.beginPath(); ctx.moveTo(250 + d - 120, 100); ctx.lineTo(250 + d + 120, 340); ctx.stroke(); ctx.beginPath(); ctx.moveTo(250 + d + 120, 100); ctx.lineTo(250 + d - 120, 340); ctx.stroke(); }
    ctx.restore();
    ctx.fillStyle = '#6e655c'; ctx.fillRect(760, 60, 110, 260); ctx.fillStyle = '#f2ecdf'; ctx.fillRect(770, 76, 90, 228);
    ctx.strokeStyle = '#4a433d'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(780, 250); ctx.quadraticCurveTo(810, 170, 830, 210); ctx.quadraticCurveTo(845, 150, 852, 240); ctx.stroke();
    // A shelf of antique books and a bronze.
    ctx.fillStyle = INK; ctx.fillRect(470, 150, 200, 8); ctx.fillRect(470, 250, 200, 8);
    for (let k = 0; k < 9; k++) ctx.fillRect(480 + k * 14, 112 + (k % 3) * 4, 10, 38 - (k % 3) * 4);
    disc(ctx, 620, 230, 26, 20); ctx.fillRect(600, 200, 40, 8);
  },
  hall: ctx => {
    // An ancestral hall: a plaque over the altar, pillars, an incense table.
    ctx.fillStyle = INK; ctx.fillRect(90, 0, 26, PLACE_H); ctx.fillRect(908, 0, 26, PLACE_H);
    ctx.fillRect(0, 30, PLACE_W, 18);
    // Hung low enough to stay inside the frame.
    ctx.fillStyle = '#4e4640'; ctx.fillRect(382, 112, 260, 56); ctx.fillStyle = PAPER; ctx.fillRect(390, 120, 244, 40);
    ctx.fillRect(300, 470, 424, 14); ctx.fillRect(320, 484, 12, 80); ctx.fillRect(692, 484, 12, 80);
    disc(ctx, 512, 456, 22, 14);
    ctx.save(); ctx.globalAlpha = 0.5; for (let k = 0; k < 3; k++) limb(ctx, [[504 + k * 8, 440], [500 + k * 8, 380], [512 + k * 8, 320]], 1.5); ctx.restore();
  },
  boudoir: (ctx, t) => {
    // A moon window with bamboo beyond, silk curtains, a dressing table.
    ctx.save(); ctx.beginPath(); ctx.arc(700, 230, 140, 0, Math.PI * 2); ctx.clip();
    for (let k = 0; k < 7; k++) { stroke(ctx, [[600 + k * 34, 380], [610 + k * 34, 80]], 5, 3, '#6a625a'); for (let j = 0; j < 3; j++) leaf(ctx, 610 + k * 34, 120 + j * 70 + k * 7, 660 + k * 34 + Math.sin(t + k) * 4, 110 + j * 70 + k * 7, 5, 6, '#6a625a'); }
    ctx.restore();
    ctx.strokeStyle = '#3b342e'; ctx.lineWidth = 10; ctx.beginPath(); ctx.arc(700, 230, 140, 0, Math.PI * 2); ctx.stroke();
    wash(ctx, 0.18, () => { ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(140 + Math.sin(t) * 6, 260, 60, PLACE_H); ctx.lineTo(0, PLACE_H); ctx.fill(); });
    wash(ctx, 0.12, () => { ctx.fillRect(0, 0, PLACE_W, 26); });
    ctx.fillStyle = INK; ctx.fillRect(160, 380, 220, 12); ctx.fillRect(176, 392, 10, 120); ctx.fillRect(354, 392, 10, 120);
    ctx.strokeStyle = INK; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(270, 330, 40, 0, Math.PI * 2); ctx.stroke();
  },
  gate: (ctx, t, rand) => {
    hills(ctx, rand, 300, 2);
    // A courtyard gate in a whitewashed wall, bare winter trees.
    wash(ctx, 0.1, () => ctx.fillRect(0, 250, PLACE_W, 250));
    ctx.fillStyle = INK; roof(ctx, 0, PLACE_W, 250, 22);
    ctx.fillStyle = PAPER; ctx.fillRect(400, 190, 224, 310); ctx.fillStyle = INK;
    roof(ctx, 380, 644, 190, 50);
    ctx.fillRect(420, 250, 14, 250); ctx.fillRect(590, 250, 14, 250);
    ctx.fillStyle = '#4e4640'; ctx.fillRect(446, 290, 132, 210); ctx.fillStyle = PAPER; ctx.fillRect(510, 290, 4, 210);
    ctx.fillStyle = INK; disc(ctx, 494, 400, 5); disc(ctx, 530, 400, 5);
    for (const [x, h] of [[160, 260], [860, 300]]) {
      stroke(ctx, [[x, 500], [x + 10, 500 - h * 0.5], [x - 20, 500 - h]], 14, 3);
      stroke(ctx, [[x + 6, 500 - h * 0.45], [x + 70 + Math.sin(t) * 3, 500 - h * 0.8]], 6, 1);
      stroke(ctx, [[x - 4, 500 - h * 0.6], [x - 70, 500 - h * 0.9]], 5, 1);
    }
    ctx.fillRect(0, 500, PLACE_W, 6);
  },
  street: (ctx, t, rand) => {
    hills(ctx, rand, 220, 1);
    // The city wall and a gate tower far off, shop fronts with banners, a rutted road.
    wash(ctx, 0.16, () => { ctx.fillRect(0, 200, PLACE_W, 40); roof(ctx, 420, 600, 170, 36); ctx.fillRect(450, 170, 120, 40); });
    for (let k = 0; k < 6; k++) {
      const x = k * 180 - 20, w = 150, y = 300 + (k % 2) * 10;
      ctx.fillStyle = INK; roof(ctx, x, x + w, y, 30);
      ctx.fillStyle = '#5a524b'; ctx.fillRect(x + 8, y + 4, w - 16, 150);
      ctx.fillStyle = PAPER; ctx.fillRect(x + 20, y + 30, 40, 80); ctx.fillRect(x + 80, y + 30, 40, 80);
      // A shop banner stirring in the wind.
      ctx.fillStyle = k % 3 === 0 ? RED : '#3b342e';
      ctx.save(); ctx.translate(x + w - 6, y + 10); ctx.rotate(Math.sin(t * 2 + k) * 0.08); ctx.fillRect(0, 0, 18, 70); ctx.restore();
    }
    ctx.fillStyle = INK; ctx.fillRect(0, 462, PLACE_W, 4);
    wash(ctx, 0.08, () => ctx.fillRect(0, 466, PLACE_W, 110));
    ctx.strokeStyle = 'rgba(40,32,28,0.25)'; ctx.lineWidth = 2;
    for (let k = 0; k < 5; k++) { ctx.beginPath(); ctx.moveTo(0, 490 + k * 18); ctx.bezierCurveTo(300, 480 + k * 20, 700, 500 + k * 16, PLACE_W, 488 + k * 18); ctx.stroke(); }
  },
  theatre: (ctx, t) => {
    // A teahouse theatre: the stage with its painted backcloth and two doors, galleries on either side.
    ctx.fillStyle = INK; ctx.fillRect(200, 40, 624, 20); ctx.fillRect(200, 40, 20, 420); ctx.fillRect(804, 40, 20, 420);
    ctx.fillStyle = '#5a524b'; ctx.fillRect(220, 60, 584, 300);
    ctx.fillStyle = PAPER; ctx.fillRect(250, 90, 524, 250);
    ctx.fillStyle = '#6a625a'; for (let k = 0; k < 5; k++) { ctx.beginPath(); ctx.arc(350 + k * 80, 200, 30, 0, Math.PI * 2); ctx.fill(); }
    ctx.fillStyle = '#4e4640'; ctx.fillRect(250, 250, 70, 90); ctx.fillRect(704, 250, 70, 90);
    ctx.fillStyle = RED; ctx.fillRect(262, 262, 46, 6); ctx.fillRect(716, 262, 46, 6);
    ctx.fillStyle = INK; ctx.fillRect(200, 360, 624, 14);
    // Galleries with rows of heads.
    for (const side of [0, 1]) {
      const x0 = side ? 844 : 0;
      ctx.fillRect(x0, 120, 180, 8); ctx.fillRect(x0, 250, 180, 8);
      for (let r = 0; r < 2; r++) for (let k = 0; k < 7; k++) disc(ctx, x0 + 14 + k * 24, 108 + r * 130 + Math.sin(t * 2 + k + r) * 1.5, 9, 10);
    }
  },
  river: (ctx, t, rand) => {
    hills(ctx, rand, 250, 3);
    ctx.fillStyle = PAPER; ctx.fillRect(0, 380, PLACE_W, 196);
    ctx.strokeStyle = 'rgba(40,32,28,0.35)'; ctx.lineWidth = 2;
    for (let k = 0; k < 9; k++) { const y = 400 + k * 18, off = (t * 20 + k * 40) % 120; ctx.beginPath(); for (let x = -120 + off; x < PLACE_W; x += 120) { ctx.moveTo(x, y); ctx.quadraticCurveTo(x + 30, y - 6, x + 60, y); } ctx.stroke(); }
    ctx.fillStyle = INK; for (const [x, y, r] of [[140, 430, 50], [220, 450, 30], [880, 420, 60]]) { ctx.beginPath(); ctx.ellipse(x, y, r, r * 0.55, 0, Math.PI, 0); ctx.fill(); }
    willow(ctx, 900, 420, t);
  },
  arch: (ctx, t, rand) => {
    hills(ctx, rand, 320, 2);
    // A memorial arch of stone, three bays, an imperial tablet at the top.
    ctx.fillStyle = INK;
    for (const x of [300, 420, 604, 724]) ctx.fillRect(x - 12, 200, 24, 300);
    roof(ctx, 280, 744, 200, 34); roof(ctx, 400, 624, 140, 34);
    ctx.fillRect(300, 230, 424, 18); ctx.fillRect(420, 170, 184, 16);
    ctx.fillStyle = '#4e4640'; ctx.fillRect(452, 190, 120, 40); ctx.fillStyle = PAPER; ctx.fillRect(458, 196, 108, 28);
    ctx.fillStyle = RED; ctx.fillRect(500, 150, 24, 14);
    ctx.fillStyle = INK; ctx.fillRect(0, 500, PLACE_W, 5);
    wash(ctx, 0.12, () => { for (let k = 0; k < 3; k++) ctx.fillRect(0, 300 + k * 60 + Math.sin(t * 0.3 + k) * 6, PLACE_W, 18); });
  },
  landscape: (ctx, t, rand) => {
    hills(ctx, rand, 260, 3);
    ctx.fillStyle = INK;
    stroke(ctx, [[120, 520], [140, 380], [110, 260]], 18, 4);
    for (let k = 0; k < 12; k++) leaf(ctx, 130, 280 + k * 16, 80 + (k % 2) * 110 + Math.sin(t + k) * 4, 270 + k * 16, 10, 8, '#3b342e');
    wash(ctx, 0.1, () => { ctx.beginPath(); ctx.ellipse(700, 520, 400, 40, 0, 0, Math.PI * 2); ctx.fill(); });
  },
  'moon-palace': (ctx, t, rand) => {
    // The Guanghan palace in the moon: a disc of bare paper in a wash of cloud, a cassia tree.
    wash(ctx, 0.3, () => ctx.fillRect(0, 0, PLACE_W, PLACE_H));
    ctx.save(); ctx.globalCompositeOperation = 'destination-out'; ctx.fillStyle = 'rgba(0,0,0,1)'; disc(ctx, 512, 250, 200); ctx.restore();
    ctx.fillStyle = PAPER; disc(ctx, 512, 250, 200);
    ctx.fillStyle = '#8a8178';
    roof(ctx, 400, 624, 250, 40); ctx.fillRect(420, 254, 184, 70); roof(ctx, 440, 584, 190, 34); ctx.fillRect(460, 194, 104, 56);
    stroke(ctx, [[650, 340], [660, 250], [640, 180]], 10, 3, '#8a8178');
    for (let k = 0; k < 14; k++) disc(ctx, 610 + (k % 5) * 18 + Math.sin(k) * 10, 170 + Math.floor(k / 5) * 26, 10);
    wash(ctx, 0.12, () => { for (let k = 0; k < 4; k++) { const x = ((t * 14 + k * 300) % 1300) - 150; ctx.beginPath(); ctx.ellipse(x, 360 + k * 40, 160, 20, 0, 0, Math.PI * 2); ctx.fill(); } });
    void rand;
  },
  clouds: (ctx, t) => {
    wash(ctx, 0.06, () => ctx.fillRect(0, 0, PLACE_W, PLACE_H));
    ctx.strokeStyle = 'rgba(40,32,28,0.45)'; ctx.lineWidth = 3;
    for (let k = 0; k < 7; k++) {
      const x = ((t * 18 + k * 190) % 1300) - 140, y = 90 + (k * 71) % 400;
      ctx.beginPath(); ctx.arc(x, y, 40, Math.PI, 0); ctx.arc(x + 60, y + 6, 28, Math.PI, 0); ctx.arc(x + 110, y, 36, Math.PI, 0); ctx.stroke();
      ctx.beginPath(); ctx.arc(x + 30, y - 8, 12, 0, Math.PI * 1.5); ctx.stroke();
    }
  },
  mirror: ctx => {
    // A bronze mirror on a stand, taller than a man, in a boudoir.
    PAINTERS.boudoir(ctx, 0, () => 0.5);
    ctx.fillStyle = '#4e4640'; disc(ctx, 512, 250, 170); ctx.fillStyle = '#e6dfd2'; disc(ctx, 512, 250, 150);
    ctx.fillStyle = INK; ctx.fillRect(504, 420, 16, 110); ctx.fillRect(440, 526, 144, 12);
    ctx.fillStyle = RED; ctx.fillRect(470, 88, 84, 10);
  },
  stele: (ctx, t, rand) => {
    hills(ctx, rand, 330, 2);
    // A blank stele on a tortoise: all surface, nothing written.
    ctx.fillStyle = INK; ctx.beginPath(); ctx.ellipse(512, 490, 150, 44, 0, 0, Math.PI * 2); ctx.fill(); disc(ctx, 670, 480, 30, 22);
    ctx.fillStyle = '#4e4640'; ctx.fillRect(420, 120, 184, 350); ctx.beginPath(); ctx.ellipse(512, 124, 92, 50, 0, Math.PI, 0); ctx.fill();
    ctx.fillStyle = '#e9e2d6'; ctx.fillRect(440, 150, 144, 300);
    void t;
  },
  'still-wine': ctx => {
    // A wine jar with its cup, and an ancient sword across a stand.
    ctx.fillStyle = INK; ctx.beginPath(); ctx.ellipse(330, 380, 110, 130, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillRect(290, 220, 80, 40); ctx.fillStyle = RED; ctx.fillRect(282, 206, 96, 20);
    ctx.fillStyle = PAPER; ctx.fillRect(300, 330, 60, 90);
    ctx.fillStyle = INK; ctx.beginPath(); ctx.moveTo(440, 470); ctx.lineTo(500, 470); ctx.lineTo(486, 510); ctx.lineTo(454, 510); ctx.fill();
    ctx.fillRect(560, 440, 360, 10); ctx.fillRect(580, 450, 10, 70); ctx.fillRect(890, 450, 10, 70);
    ctx.save(); ctx.translate(740, 400); ctx.rotate(-0.12);
    ctx.fillRect(-190, -8, 60, 16); ctx.fillRect(-134, -26, 10, 52);
    ctx.fillStyle = '#8a8178'; ctx.beginPath(); ctx.moveTo(-124, -7); ctx.lineTo(190, -3); ctx.lineTo(210, 0); ctx.lineTo(190, 3); ctx.lineTo(-124, 7); ctx.fill();
    ctx.fillStyle = RED; ctx.fillRect(-200, -2, 12, 30);
    ctx.restore();
  },
  birds: (ctx, t) => {
    // A plum tree blooming on its southern (right) branches first; a cock pheasant with its long tail.
    stroke(ctx, [[480, 560], [500, 380], [470, 240], [520, 120]], 26, 6);
    stroke(ctx, [[500, 360], [700, 300], [860, 240]], 12, 3);
    stroke(ctx, [[480, 300], [320, 260], [180, 230]], 10, 3);
    for (let k = 0; k < 10; k++) blossom(ctx, 560 + k * 30, 330 - k * 9 + (k % 2) * 16, 13, RED, k);
    for (let k = 0; k < 3; k++) disc(ctx, 220 + k * 50, 236 + k * 6, 5);
    ctx.save(); ctx.translate(640, 300);
    ctx.fillStyle = INK; ctx.beginPath(); ctx.ellipse(0, -30, 40, 24, -0.3, 0, Math.PI * 2); ctx.fill(); disc(ctx, 34, -58, 14, 12);
    ctx.fillStyle = RED; disc(ctx, 40, -60, 6, 5);
    stroke(ctx, [[-30, -20], [-140, 20 + Math.sin(t) * 6], [-260, 50 + Math.sin(t) * 10]], 12, 2);
    stroke(ctx, [[-30, -24], [-150, 0 + Math.sin(t) * 6], [-240, 16 + Math.sin(t) * 10]], 7, 1);
    limb(ctx, [[0, -8], [4, 10]], 3); limb(ctx, [[14, -10], [18, 10]], 3);
    ctx.restore();
  },
  'mud-lotus': (ctx, t, rand) => {
    // Lotus rising from a muddy pond: the flower stays clean above the dark water.
    wash(ctx, 0.35, () => ctx.fillRect(0, 400, PLACE_W, 176));
    ctx.fillStyle = 'rgba(40,32,28,0.5)'; for (let k = 0; k < 40; k++) disc(ctx, rand() * PLACE_W, 420 + rand() * 150, 6 + rand() * 20, 3 + rand() * 6);
    for (const x of [360, 620]) {
      stroke(ctx, [[x, 560], [x + 10, 400], [x - 4 + Math.sin(t) * 4, 230]], 6, 4);
      for (let k = 0; k < 7; k++) { const a = -Math.PI / 2 + (k - 3) * 0.35; leaf(ctx, x - 4, 232, x - 4 + Math.cos(a) * 60, 232 + Math.sin(a) * 70, 10, 16, k % 2 ? 'rgba(196,62,48,0.85)' : 'rgba(232,210,200,0.95)', INK); }
    }
    ctx.save(); ctx.fillStyle = WASH; ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(490, 420, 130, 40, 0.05, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
  },
  'cart-window': () => {},
  'flower-hall': (ctx, t) => {
    // The hanging-flower gate (垂花门): carved pendants under a small roof, lattice walls, potted plum.
    ctx.fillStyle = INK; roof(ctx, 300, 724, 120, 40);
    ctx.fillRect(320, 124, 384, 14);
    for (const x of [340, 684]) { ctx.fillRect(x - 8, 138, 16, 330); disc(ctx, x, 176, 12, 18); ctx.fillRect(x - 3, 190, 6, 14); }
    for (let k = 0; k < 7; k++) limb(ctx, [[368 + k * 48, 138], [392 + k * 48, 170], [416 + k * 48, 138]], 3);
    lattice(ctx, 40, 150, 220, 260); lattice(ctx, 764, 150, 220, 260);
    ctx.fillRect(0, 468, PLACE_W, 6);
    for (const x of [140, 884]) {
      ctx.fillRect(x - 40, 400, 80, 60);
      stroke(ctx, [[x, 400], [x - 20, 330], [x + 10, 280]], 8, 2);
      for (let k = 0; k < 5; k++) blossom(ctx, x - 26 + k * 12, 300 + (k % 2) * 30, 8, RED, k + t * 0.2);
    }
  },
  'night-room': (ctx, t) => {
    // Night: the room in wash, a lamp on a stand throwing a pool of bare paper around it.
    wash(ctx, 0.66, () => ctx.fillRect(0, 0, PLACE_W, PLACE_H));
    ctx.save(); ctx.globalCompositeOperation = 'destination-out';
    const flicker = 1 + Math.sin(t * 9) * 0.015 + Math.sin(t * 3.7) * 0.02;
    const glow = ctx.createRadialGradient(512, 300, 20, 512, 300, 270 * flicker);
    glow.addColorStop(0, 'rgba(0,0,0,1)'); glow.addColorStop(0.55, 'rgba(0,0,0,0.85)'); glow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glow; ctx.fillRect(0, 0, PLACE_W, PLACE_H); ctx.restore();
    ctx.globalCompositeOperation = 'destination-over'; ctx.fillStyle = PAPER; ctx.fillRect(0, 0, PLACE_W, PLACE_H); ctx.globalCompositeOperation = 'source-over';
    // A paper window with its lattice, moonlit, and the lamp itself.
    lattice(ctx, 120, 90, 180, 200);
    ctx.fillStyle = INK; ctx.fillRect(508, 200, 8, 120); ctx.fillRect(488, 316, 48, 8);
    ctx.fillStyle = '#6e655c'; ctx.beginPath(); ctx.moveTo(492, 200); ctx.lineTo(532, 200); ctx.lineTo(524, 150); ctx.lineTo(500, 150); ctx.fill();
    ctx.fillStyle = PAPER; ctx.fillRect(504, 160, 16, 34);
  },
  banquet: (ctx, t) => {
    // A reception hall: a great landscape screen, hanging lanterns, a plaque.
    ctx.fillStyle = '#4e4640'; ctx.fillRect(260, 70, 504, 330); ctx.fillStyle = PAPER; ctx.fillRect(276, 86, 472, 298);
    for (let k = 1; k < 4; k++) { ctx.fillStyle = '#4e4640'; ctx.fillRect(276 + k * 118, 86, 4, 298); }
    ctx.save(); ctx.beginPath(); ctx.rect(276, 86, 472, 298); ctx.clip();
    for (let l = 0; l < 3; l++) wash(ctx, 0.12 + l * 0.08, () => { ctx.beginPath(); ctx.moveTo(276, 384); for (let x = 276; x <= 748; x += 24) ctx.lineTo(x, 300 - l * 30 - Math.abs(Math.sin(x * 0.012 + l)) * (110 - l * 25)); ctx.lineTo(748, 384); ctx.fill(); });
    ctx.restore();
    for (const x of [140, 884]) {
      ctx.fillStyle = INK; ctx.fillRect(x - 2, 0, 4, 90 + Math.sin(t + x) * 2);
      ctx.fillStyle = RED; ctx.beginPath(); ctx.ellipse(x, 130, 34, 42, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = INK; ctx.fillRect(x - 20, 86, 40, 6); ctx.fillRect(x - 20, 168, 40, 6); limb(ctx, [[x, 174], [x, 200]], 2);
    }
    ctx.fillStyle = INK; ctx.fillRect(0, 440, PLACE_W, 6);
  },
  parlor: ctx => {
    // Wang Wenhui's parlour: a raised couch (kang) with a low table, a scroll of calligraphy, a window seat.
    ctx.fillStyle = '#6e655c'; ctx.fillRect(420, 40, 184, 250); ctx.fillStyle = '#f2ecdf'; ctx.fillRect(432, 56, 160, 218);
    ctx.fillStyle = INK; ctx.fillRect(300, 370, 424, 18); ctx.fillRect(300, 388, 424, 70);
    ctx.fillStyle = '#6e655c'; ctx.fillRect(470, 340, 84, 30);
    lattice(ctx, 780, 110, 180, 220);
    ctx.fillStyle = INK; ctx.fillRect(0, 470, PLACE_W, 6);
  },
  canal: (ctx, t, rand) => {
    // The Grand Canal crowded with grain barges; two troupe boats with cabins in the foreground.
    PAINTERS.river(ctx, t, rand);
    const boat = (x: number, y: number, w: number, cabin: boolean, bob: number) => {
      ctx.fillStyle = INK; ctx.beginPath(); ctx.moveTo(x - w / 2, y + bob); ctx.quadraticCurveTo(x, y + 34 + bob, x + w / 2, y - 10 + bob); ctx.lineTo(x + w / 2 - 20, y + 8 + bob); ctx.lineTo(x - w / 2 + 10, y + 8 + bob); ctx.fill();
      if (cabin) { ctx.fillStyle = '#5a524b'; ctx.fillRect(x - w * 0.3, y - 50 + bob, w * 0.5, 50); ctx.fillStyle = PAPER; for (let k = 0; k < 3; k++) ctx.fillRect(x - w * 0.26 + k * w * 0.15, y - 40 + bob, w * 0.1, 26); ctx.fillStyle = INK; roof(ctx, x - w * 0.32, x + w * 0.22, y - 50 + bob, 18); }
      else { limb(ctx, [[x, y + bob], [x - 4, y - 150 + bob]], 4); }
    };
    wash(ctx, 0.35, () => { for (let k = 0; k < 6; k++) boat(100 + k * 160, 360, 120, false, 0); });
    boat(330, 440, 300, true, Math.sin(t * 1.4) * 3);
    boat(720, 470, 320, true, Math.sin(t * 1.2 + 1) * 3);
  },
  'exam-paper': ctx => {
    // An examination booklet: on its cover a blade and a brush, and an ink blot soaking into the shape of a head.
    ctx.fillStyle = '#d9d2c4'; ctx.fillRect(330, 40, 364, 500); ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.strokeRect(330, 40, 364, 500);
    ctx.save(); ctx.translate(420, 250); ctx.rotate(-0.5); ctx.fillRect(-10, -80, 20, 50); ctx.fillStyle = '#8a8178'; ctx.beginPath(); ctx.moveTo(-10, -30); ctx.lineTo(10, -30); ctx.lineTo(4, 110); ctx.lineTo(-10, 90); ctx.fill(); ctx.restore();
    ctx.save(); ctx.translate(600, 230); ctx.rotate(0.4); ctx.fillStyle = INK; ctx.fillRect(-6, -110, 12, 150); ctx.beginPath(); ctx.moveTo(-9, 40); ctx.quadraticCurveTo(0, 90, 9, 40); ctx.fill(); ctx.restore();
    ctx.fillStyle = 'rgba(30,24,20,0.85)'; ctx.beginPath(); ctx.ellipse(540, 400, 70, 84, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#d9d2c4'; disc(ctx, 516, 386, 9, 5); disc(ctx, 564, 386, 9, 5); ctx.fillRect(526, 432, 28, 5);
  },
  'guild-hall': ctx => {
    // The Suzhou Guild Hall stage, decked for the spring gathering.
    PAINTERS.theatre(ctx, 0, () => 0.5);
    ctx.fillStyle = RED; ctx.fillRect(360, 20, 304, 34);
  },
};

/** Paints a backdrop; `seed` keeps its random touches the same on every frame. */
export function paintPlace(ctx: Ctx, place: Place, t: number, seed = 7) {
  // Painters work in PLACE_W × PLACE_H units whatever the canvas resolution.
  const k = ctx.canvas.width / PLACE_W;
  ctx.setTransform(k, 0, 0, k, 0, 0);
  ctx.fillStyle = PAPER; ctx.fillRect(0, 0, PLACE_W, PLACE_H);
  PAINTERS[place](ctx, t, seeded(seed));
}

/**
 * Writing on a backdrop's plaques, labels and banners. It is not painted into the backdrop (which is
 * stretched across the frame and would soften it) but drawn on its own sharp canvas laid over its
 * frame (see tableau.ts). Positions and font sizes are in backdrop units (PLACE_W × PLACE_H); each
 * label is centred on (x, y) and runs across, or down when `vertical`.
 */
export type PlaceLabel = { text: string; x: number; y: number; px: number; vertical?: boolean };
export const PLACE_LABELS: Partial<Record<Place, PlaceLabel[]>> = {
  hall: [{ text: '世德堂', x: 512, y: 140, px: 30 }],
  arch: [{ text: '贞烈流芳', x: 512, y: 210, px: 22 }],
  'still-wine': [{ text: '酒', x: 330, y: 375, px: 48 }],
  parlor: [{ text: '福寿', x: 512, y: 165, px: 54, vertical: true }],
  'exam-paper': [{ text: '試卷', x: 512, y: 80, px: 30 }],
  'guild-hall': [{ text: '姑苏会馆', x: 512, y: 37, px: 26 }],
};

/** Backdrops whose painting moves (water, wind, clouds). */
export const ANIMATED_PLACES: Place[] = ['boudoir', 'gate', 'street', 'theatre', 'river', 'arch', 'landscape', 'moon-palace', 'clouds', 'birds', 'mud-lotus', 'flower-hall', 'night-room', 'banquet', 'canal'];
