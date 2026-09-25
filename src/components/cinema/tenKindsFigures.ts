import { disc, limb, robe, type Ctx, type Point } from './prologueShadowPlay';

/**
 * Paper-cut figures for Chapter 1, paragraph 2, drawn in the shadow-play vocabulary.
 * Coordinates are local: the feet sit at the origin and y runs negative upward; a standing
 * figure is about 205 units tall with shoulders at (±24, -145).
 */

export const FIGURE_W = 256;
export const FIGURE_H = 512;
const SCALE = 1.75;
const INK = '#0d0a0c';

/** Pierces the silhouette, like the carved openings in a leather puppet. */
function cutout(ctx: Ctx, draw: () => void) {
  ctx.save(); ctx.shadowBlur = 0; ctx.globalCompositeOperation = 'destination-out'; draw(); ctx.restore();
}

function body(ctx: Ctx, sway = 0) {
  robe(ctx, 0, -150, -4, 24, 46, sway);
  disc(ctx, 0, -150, 28, 10);
  disc(ctx, -14, -2, 12, 5); disc(ctx, 14 + sway, -2, 12, 5);
  ctx.fillRect(-5, -168, 10, 16);
}

type Hair = 'cap' | 'bun' | 'loose';
/** Head and headwear, tilted about the neck. `hair` streams for the loose-haired. */
function head(ctx: Ctx, t: number, hair: Hair = 'cap', tilt = 0, x = 0, y = -178) {
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

function arm(ctx: Ctx, points: Point[], width = 12) {
  limb(ctx, points, width);
  const [x, y] = points[points.length - 1];
  disc(ctx, x, y, 7);
}

/** The ten kinds of gentlemen, in the order the passage names them. */
const GENTLEMEN: ((ctx: Ctx, t: number) => void)[] = [
  // 正 upright: squarely planted, hands clasped before him.
  (ctx, t) => {
    body(ctx); head(ctx, t);
    arm(ctx, [[-24, -145], [-30, -112], [-4, -102]], 13); arm(ctx, [[24, -145], [30, -112], [4, -102]], 13);
  },
  // 上 aspiring: face lifted, one hand raised toward the moon.
  (ctx, t) => {
    body(ctx); head(ctx, t, 'cap', -0.35);
    arm(ctx, [[-24, -145], [-32, -110], [-12, -92]]);
    arm(ctx, [[24, -145], [42, -182], [50 + Math.sin(t) * 2, -224]]);
  },
  // 高 lofty: on a rock, a tall staff in hand, ribbons in the wind.
  (ctx, t) => {
    ctx.beginPath(); ctx.moveTo(-72, 0); ctx.quadraticCurveTo(-64, -34, -34, -44); ctx.quadraticCurveTo(10, -54, 48, -40); ctx.quadraticCurveTo(70, -26, 72, 0); ctx.fill();
    cutout(ctx, () => { ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-40, -30); ctx.quadraticCurveTo(-20, -20, -26, -6); ctx.moveTo(24, -36); ctx.quadraticCurveTo(34, -22, 30, -10); ctx.stroke(); });
    ctx.save(); ctx.translate(0, -42);
    body(ctx, Math.sin(t * 1.5) * 4); head(ctx, t, 'cap', -0.08);
    limb(ctx, [[44, 0], [46, -262]], 4); disc(ctx, 46, -266, 6, 8);
    arm(ctx, [[24, -145], [40, -128], [44, -150]]); arm(ctx, [[-24, -145], [-34, -106], [-28, -80]]);
    ctx.restore();
  },
  // 逸 unfettered: reclining on the floor, one knee up, fanning himself.
  (ctx, t) => {
    ctx.fillRect(-70, -4, 140, 4);
    limb(ctx, [[6, -30], [38, -76], [56, -8]], 16); disc(ctx, 60, -4, 11, 5);
    limb(ctx, [[-4, -24], [46, -14], [68, -10]], 16);
    ctx.save(); ctx.translate(0, -30); ctx.rotate(-0.32);
    robe(ctx, 0, -84, 4, 22, 30);
    disc(ctx, 0, -84, 26, 9);
    ctx.fillRect(-5, -102, 10, 16);
    head(ctx, t, 'bun', 0.1, 0, -112);
    arm(ctx, [[-22, -80], [-46, -46], [-50, -14]]);
    const fanY = -122 + Math.sin(t * 3) * 6;
    arm(ctx, [[22, -80], [46, -96], [54, fanY]]);
    ctx.beginPath(); ctx.moveTo(54, fanY); ctx.arc(54, fanY, 30, -1.9, -0.6); ctx.closePath(); ctx.fill();
    ctx.restore();
  },
  // 华 splendid: a peony raised to his face, a tasselled fan at his side, patterned silk.
  (ctx, t) => {
    body(ctx); head(ctx, t);
    for (let k = 0; k < 5; k++) disc(ctx, 16 + Math.cos(k * 1.25) * 5, -196 + Math.sin(k * 1.25) * 5, 4);
    cutout(ctx, () => { for (const [x, y] of [[-14, -120], [14, -96], [-10, -64], [18, -40], [-22, -24]]) { ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.stroke(); } });
    arm(ctx, [[24, -145], [48, -132], [30, -166]]);
    for (let k = 0; k < 6; k++) disc(ctx, 30 + Math.cos(k * 1.05) * 8, -176 + Math.sin(k * 1.05) * 8, 6);
    arm(ctx, [[-24, -145], [-36, -108], [-34, -82]]);
    limb(ctx, [[-34, -82], [-34, -58]], 5);
    limb(ctx, [[-34, -58], [-34 + Math.sin(t * 2) * 6, -40]], 2);
  },
  // 豪 bold: feet planted wide, a great wine bowl raised overhead.
  (ctx, t) => {
    const tip = Math.max(0, Math.sin(t * 1.2)) * 0.5;
    robe(ctx, 0, -150, -74, 26, 36);
    limb(ctx, [[-12, -80], [-34, -40], [-46, 0]], 18); limb(ctx, [[12, -80], [34, -40], [46, 0]], 18);
    disc(ctx, -48, -2, 12, 5); disc(ctx, 48, -2, 12, 5);
    disc(ctx, 0, -150, 30, 10); ctx.fillRect(-5, -168, 10, 16);
    head(ctx, t, 'cap', -0.2);
    arm(ctx, [[-26, -145], [-54, -116], [-30, -92]], 13);
    arm(ctx, [[26, -145], [46, -190], [34, -230]], 13);
    ctx.save(); ctx.translate(30, -240); ctx.rotate(-0.4 - tip);
    ctx.beginPath(); ctx.ellipse(0, 0, 20, 12, 0, 0, Math.PI); ctx.fill(); ctx.fillRect(-20, -2, 40, 3);
    ctx.restore();
    for (let k = 0; k < 3; k++) if (tip > 0.25) disc(ctx, 6 - k * 5, -232 + k * 12 + tip * 20, 2.5);
  },
  // 狂 wild: dancing drunk, hair loose, arms flung wide, the wine jar knocked over.
  (ctx, t) => {
    ctx.save(); ctx.translate(48, -10); ctx.rotate(1.3); ctx.beginPath(); ctx.ellipse(0, 0, 12, 16, 0, 0, Math.PI * 2); ctx.fill(); ctx.fillRect(-6, -22, 12, 8); ctx.restore();
    ctx.save(); ctx.rotate(Math.sin(t * 2.4) * 0.12);
    body(ctx, Math.sin(t * 2.4) * 10); head(ctx, t, 'loose', -0.3 + Math.sin(t * 2.4) * 0.15);
    arm(ctx, [[-24, -145], [-54, -168 + Math.sin(t * 3) * 10], [-70, -200 + Math.sin(t * 3.3) * 14]], 15);
    arm(ctx, [[24, -145], [56, -132 + Math.sin(t * 3 + 1) * 12], [72, -104 + Math.sin(t * 2.7) * 16]], 15);
    ctx.restore();
  },
  // 趣 witty: bent toward a caged bird, pointing and teasing.
  (ctx, t) => {
    ctx.save(); ctx.rotate(0.06);
    body(ctx); head(ctx, t, 'cap', 0.25);
    arm(ctx, [[24, -145], [34, -150], [30, -176]]);
    limb(ctx, [[30, -176], [60, -214]], 3);
    arm(ctx, [[-24, -145], [2, -160], [26, -150]]);
    ctx.restore();
    const cx = 60, cy = -168 + Math.sin(t * 1.4) * 2;
    limb(ctx, [[60, -212], [cx, cy - 34]], 2);
    ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, cy, 30, Math.PI, 0); ctx.stroke();
    for (let k = -2; k <= 2; k++) { ctx.beginPath(); ctx.moveTo(cx + k * 11, cy - Math.sqrt(900 - (k * 11) ** 2)); ctx.lineTo(cx + k * 11, cy + 20); ctx.stroke(); }
    ctx.fillRect(cx - 32, cy + 18, 64, 5);
    const hop = Math.abs(Math.sin(t * 5)) * 6;
    disc(ctx, cx + 4, cy + 6 - hop, 7, 6); disc(ctx, cx + 11, cy + 1 - hop, 4);
    limb(ctx, [[cx - 2, cy + 8 - hop], [cx - 12, cy + 12 - hop]], 3);
  },
  // 和 gentle: a courteous half-bow, a cup offered in both hands.
  (ctx, t) => {
    const bow = 0.5 + 0.5 * Math.sin(t * 1.1);
    ctx.save(); ctx.translate(0, -60); ctx.scale(1, 1 - bow * 0.04); ctx.translate(0, 60);
    body(ctx); head(ctx, t, 'cap', 0, 0, -176 + bow * 5);
    arm(ctx, [[-24, -145], [-20, -118], [-6, -128]], 13); arm(ctx, [[24, -145], [20, -118], [6, -128]], 13);
    ctx.beginPath(); ctx.moveTo(-10, -148); ctx.lineTo(10, -148); ctx.lineTo(5, -134); ctx.lineTo(-5, -134); ctx.fill();
    ctx.restore();
  },
  // 乐 joyful: swaying as he plays the flute, notes drifting up.
  (ctx, t) => {
    ctx.save(); ctx.rotate(Math.sin(t * 1.6) * 0.05);
    body(ctx, Math.sin(t * 1.6) * 5); head(ctx, t, 'bun', 0.12);
    arm(ctx, [[-24, -145], [-4, -150], [14, -166]]);
    arm(ctx, [[24, -145], [46, -148], [56, -164]]);
    limb(ctx, [[2, -168], [72, -162]], 4);
    ctx.restore();
    for (let k = 0; k < 3; k++) {
      const p = (t * 0.5 + k / 3) % 1;
      ctx.globalAlpha = 1 - p;
      disc(ctx, 74 + Math.sin(p * 9 + k) * 8, -172 - p * 70, 4); limb(ctx, [[78 + Math.sin(p * 9 + k) * 8, -172 - p * 70], [78 + Math.sin(p * 9 + k) * 8, -186 - p * 70]], 1.5);
      ctx.globalAlpha = 1;
    }
  },
];

type DanPose = { lift: [number, number]; swing: number; sleeve: number; turn: number; crouch: number; cover?: boolean; fan?: boolean; crown?: boolean };
/** Ten dan performers: the same costume, each with her own flourish of the water sleeves. */
const DAN: DanPose[] = [
  { lift: [2.6, 2.6], swing: 0.3, sleeve: 1, turn: 0, crouch: 0, crown: true },
  { lift: [0.5, 2.2], swing: 0.2, sleeve: 1.1, turn: 0, crouch: 0, cover: true },
  { lift: [1.6, 1.6], swing: 0.5, sleeve: 1.3, turn: 1.4, crouch: 0 },
  { lift: [0.9, 1.2], swing: 0.2, sleeve: 0.9, turn: 0, crouch: 0.5 },
  { lift: [0.4, 1.8], swing: 0.25, sleeve: 0.6, turn: 0, crouch: 0, fan: true, crown: true },
  { lift: [1.55, 1.55], swing: 0.15, sleeve: 1.4, turn: 0, crouch: 0 },
  { lift: [2.2, 0.6], swing: 0.3, sleeve: 1, turn: 0.7, crouch: 0.15 },
  { lift: [0.6, 0.6], swing: 0.1, sleeve: 1.2, turn: 0, crouch: 0, crown: true },
  { lift: [2.9, 1.2], swing: 0.35, sleeve: 1.2, turn: 2.2, crouch: 0 },
  { lift: [1.1, 2.4], swing: 0.3, sleeve: 1, turn: 0, crouch: 0.25, crown: true },
];

function dan(ctx: Ctx, t: number, pose: DanPose, phase: number) {
  const turn = pose.turn ? Math.cos(t * pose.turn + phase) : 1;
  ctx.save(); ctx.scale((turn < 0 ? -1 : 1) * (0.45 + 0.55 * Math.abs(turn)), 1);
  const drop = pose.crouch * 46;
  ctx.translate(0, drop);
  const bob = Math.sin(t * 2.4 + phase) * 3;
  robe(ctx, 0, -148 + bob, -4 - drop, 20, 58 + pose.crouch * 22 + Math.sin(t * 2 + phase) * 5, Math.sin(t * 1.5 + phase) * 6);
  disc(ctx, 0, -148 + bob, 23, 9);
  ctx.fillRect(-4, -166 + bob, 8, 14);
  disc(ctx, 0, -176 + bob, 14, 16);
  disc(ctx, 0, -195 + bob, 12, 9);
  const beads = pose.crown ? 4 : 2;
  for (let k = -beads; k <= beads; k++) disc(ctx, k * 7, -201 + bob - (beads - Math.abs(k)) * 2.5, 3);
  if (pose.crown) for (const side of [-1, 1]) limb(ctx, [[side * 16, -196 + bob], [side * 22, -176 + bob], [side * 20 + Math.sin(t * 3) * 2, -156 + bob]], 2);
  for (const side of [-1, 1] as const) {
    const i = side < 0 ? 0 : 1;
    if (pose.cover && side < 0) {
      // A sleeve raised to veil the face, falling in front of the body.
      arm(ctx, [[-22, -144 + bob], [-24, -168 + bob], [-4, -182 + bob]], 11);
      limb(ctx, [[-4, -182 + bob], [4, -160 + bob], [2 + Math.sin(t * 2) * 3, -120 + bob]], 14);
      continue;
    }
    const a = pose.lift[i] + Math.sin(t * 2.2 + phase + i * 1.7) * pose.swing;
    const dir: Point = [side * Math.sin(a), Math.cos(a)];
    const shoulder: Point = [side * 20, -144 + bob];
    const elbow: Point = [shoulder[0] + dir[0] * 30, shoulder[1] + dir[1] * 30];
    const bend = a + 0.35;
    const hand: Point = [elbow[0] + side * Math.sin(bend) * 28, elbow[1] + Math.cos(bend) * 28];
    arm(ctx, [shoulder, elbow, hand], 11);
    if (pose.fan && side > 0) {
      ctx.beginPath(); ctx.moveTo(hand[0], hand[1]); ctx.arc(hand[0], hand[1], 34, -2.2, -0.9); ctx.closePath(); ctx.fill();
      continue;
    }
    // Water sleeves continue the arm's line, then fall and ripple.
    let previous = hand;
    const count = Math.round(10 * pose.sleeve);
    for (let k = 1; k <= count; k++) {
      const next: Point = [
        hand[0] + side * Math.sin(bend) * k * 7 + Math.sin(t * 2.6 + phase - k * 0.6) * k * 1.6,
        hand[1] + Math.cos(bend) * k * 7 + k * k * 0.9,
      ];
      limb(ctx, [previous, next], Math.max(4, 16 - k));
      previous = next;
    }
  }
  ctx.restore();
}

function begin(ctx: Ctx) {
  ctx.clearRect(0, 0, FIGURE_W, FIGURE_H);
  ctx.save();
  ctx.translate(FIGURE_W / 2, FIGURE_H - 12);
  ctx.scale(SCALE, SCALE);
  ctx.fillStyle = INK; ctx.strokeStyle = INK;
  ctx.shadowColor = 'rgba(13,10,12,0.6)'; ctx.shadowBlur = 3;
}

export function drawGentleman(ctx: Ctx, kind: number, t: number) {
  begin(ctx); GENTLEMEN[kind](ctx, t); ctx.restore();
}

export function drawDan(ctx: Ctx, kind: number, t: number) {
  begin(ctx); dan(ctx, t, DAN[kind], kind * 1.3); ctx.restore();
}
