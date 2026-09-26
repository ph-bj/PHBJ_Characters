import { arm, body, disc, head, limb, robe, type Ctx, type Hair, type Point } from './brush';

/**
 * Posed figures for the cinemas, drawn in figure coordinates (feet at the origin, y negative
 * upward; see `drawFigure` in brush.ts). Everything is a function of `t`, so they animate.
 */

/** What a dan performer holds in the right hand; water sleeves when nothing. */
export type DanProp = 'sleeves' | 'fan' | 'flute' | 'sword' | 'willow' | 'clappers' | 'censer';

export type DanPose = {
  /** Arm angles (left, right) in radians from hanging down; π is straight up. */
  lift: [number, number];
  swing: number;
  /** Water-sleeve length, 1 is ordinary. */
  sleeve: number;
  /** Speed of turning on the spot; 0 to face the viewer. */
  turn: number;
  /** 0 standing, 1 kneeling. */
  crouch: number;
  /** The left sleeve raised to veil the face. */
  cover?: boolean;
  /** A phoenix crown with tassels rather than a plain topknot. */
  crown?: boolean;
  prop?: DanProp;
  /** A sword worn across the back (martial roles). */
  swordOnBack?: boolean;
};

/** Ten ready-made poses, each with a different flourish of the water sleeves. */
export const DAN_POSES: DanPose[] = [
  { lift: [2.6, 2.6], swing: 0.3, sleeve: 1, turn: 0, crouch: 0, crown: true },
  { lift: [0.5, 2.2], swing: 0.2, sleeve: 1.1, turn: 0, crouch: 0, cover: true },
  { lift: [1.6, 1.6], swing: 0.5, sleeve: 1.3, turn: 1.4, crouch: 0 },
  { lift: [0.9, 1.2], swing: 0.2, sleeve: 0.9, turn: 0, crouch: 0.5 },
  { lift: [0.4, 1.8], swing: 0.25, sleeve: 0.6, turn: 0, crouch: 0, prop: 'fan', crown: true },
  { lift: [1.55, 1.55], swing: 0.15, sleeve: 1.4, turn: 0, crouch: 0 },
  { lift: [2.2, 0.6], swing: 0.3, sleeve: 1, turn: 0.7, crouch: 0.15 },
  { lift: [0.6, 0.6], swing: 0.1, sleeve: 1.2, turn: 0, crouch: 0, crown: true },
  { lift: [2.9, 1.2], swing: 0.35, sleeve: 1.2, turn: 2.2, crouch: 0 },
  { lift: [1.1, 2.4], swing: 0.3, sleeve: 1, turn: 0, crouch: 0.25, crown: true },
];

function drawProp(ctx: Ctx, prop: DanProp, hand: Point, t: number) {
  const [x, y] = hand;
  if (prop === 'fan') { ctx.beginPath(); ctx.moveTo(x, y); ctx.arc(x, y, 34, -2.2, -0.9); ctx.closePath(); ctx.fill(); }
  else if (prop === 'flute') limb(ctx, [[x - 46, y - 14], [x + 14, y + 4]], 4);
  else if (prop === 'sword') { limb(ctx, [[x, y], [x + 26, y - 70]], 4); limb(ctx, [[x - 8, y - 2], [x + 10, y + 4]], 5); }
  else if (prop === 'clappers') for (let k = 0; k < 3; k++) { ctx.save(); ctx.translate(x, y); ctx.rotate(-0.4 + k * 0.25 + Math.sin(t * 8) * 0.1 * k); ctx.fillRect(-3, -34, 6, 34); ctx.restore(); }
  else if (prop === 'censer') { disc(ctx, x, y - 10, 14, 10); ctx.fillRect(x - 12, y - 4, 4, 12); ctx.fillRect(x + 8, y - 4, 4, 12); for (let k = 0; k < 3; k++) limb(ctx, [[x - 4 + k * 4, y - 20], [x - 4 + k * 4 + Math.sin(t * 2 + k) * 6, y - 50 - k * 6]], 1.5); }
  else if (prop === 'willow') {
    limb(ctx, [[x, y], [x + 30, y - 40], [x + 44, y - 60]], 3);
    for (let k = 0; k < 6; k++) { const bx = x + 6 + k * 7, by = y - 10 - k * 9; limb(ctx, [[bx, by], [bx + 8 + Math.sin(t * 2 + k) * 4, by + 30 + k * 3]], 1.5); }
  }
}

/** A dan performer in robe and headdress, animated by `t`; `phase` staggers several on one stage. */
export function dan(ctx: Ctx, t: number, pose: DanPose, phase = 0) {
  const turn = pose.turn ? Math.cos(t * pose.turn + phase) : 1;
  ctx.save(); ctx.scale((turn < 0 ? -1 : 1) * (0.45 + 0.55 * Math.abs(turn)), 1);
  const drop = pose.crouch * 46;
  ctx.translate(0, drop);
  const bob = Math.sin(t * 2.4 + phase) * 3;
  if (pose.swordOnBack) { limb(ctx, [[-34, -70 + bob], [30, -200 + bob]], 5); limb(ctx, [[18, -178 + bob], [40, -170 + bob]], 6); }
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
    if (pose.prop && pose.prop !== 'sleeves' && side > 0) { drawProp(ctx, pose.prop, hand, t); continue; }
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

/** What a scholar is doing with his hands. */
export type ScholarGesture = 'still' | 'reading' | 'speaking' | 'laughing' | 'pointing';

/** A robed scholar; draw him behind a table to seat him. `speaking` animates the gesture. */
export function scholar(ctx: Ctx, t: number, { hair = 'cap', gesture = 'still', speaking = false, phase = 0 }: { hair?: Hair; gesture?: ScholarGesture; speaking?: boolean; phase?: number } = {}) {
  const talk = speaking ? Math.sin(t * 5 + phase) : 0;
  body(ctx, Math.sin(t * 0.8 + phase) * 2);
  head(ctx, t, hair, gesture === 'laughing' ? -0.25 + talk * 0.05 : talk * 0.06);
  if (gesture === 'reading') {
    arm(ctx, [[-24, -145], [-30, -118], [-6, -124]]); arm(ctx, [[24, -145], [30, -118], [6, -124]]);
    ctx.fillRect(-26, -150, 52, 32);
  } else if (gesture === 'pointing') {
    arm(ctx, [[-24, -145], [-30, -110], [-20, -86]]); arm(ctx, [[24, -145], [48, -150 + talk * 6], [72, -160 + talk * 8]]);
  } else if (gesture === 'speaking') {
    arm(ctx, [[-24, -145], [-30, -110], [-20, -86]]); arm(ctx, [[24, -145], [40, -128], [44 + talk * 6, -150 - Math.abs(talk) * 10]]);
  } else if (gesture === 'laughing') {
    arm(ctx, [[-24, -145], [-36, -126], [-30, -150 - Math.abs(talk) * 6]]); arm(ctx, [[24, -145], [36, -126], [30, -150 - Math.abs(talk) * 6]]);
  } else {
    arm(ctx, [[-24, -145], [-30, -112], [-4, -102]], 13); arm(ctx, [[24, -145], [30, -112], [4, -102]], 13);
  }
}
