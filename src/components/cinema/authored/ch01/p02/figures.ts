import { arm, body, disc, drawFigure, head, limb, pierce as cutout, robe, type Ctx, type Point } from '../../../brush';
import { dan, DAN_POSES } from '../../../figures';

/**
 * Paper-cut figures for Chapter 1, paragraph 2, drawn with the shared brush primitives
 * (local coordinates: feet at the origin, y negative upward).
 */

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

export function drawGentleman(ctx: Ctx, kind: number, t: number) {
  drawFigure(ctx, c => GENTLEMEN[kind](c, t));
}

export function drawDan(ctx: Ctx, kind: number, t: number) {
  drawFigure(ctx, c => dan(c, t, DAN_POSES[kind], kind * 1.3));
}
