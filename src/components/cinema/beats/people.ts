import { arm, body, cutout, disc, head, limb, robe, type Ctx, type Hair, type Point } from '../brush';
import { dan, DAN_POSES, scholar, type DanPose, type ScholarGesture } from '../figures';
import { RED } from '../paint';

/**
 * The people of a chapter's everyday scenes, drawn in figure coordinates (feet at the origin, y
 * negative upward, about 205 units tall; see brush.ts). Every drawing is a function of `t`.
 */

export type PersonKind =
  | 'scholar' | 'lady' | 'deity' | 'page' | 'official' | 'pedant' | 'merchant'
  | 'escort' | 'clown' | 'warrior' | 'elder' | 'dan' | 'teacher' | 'maid'
  // Chapter 2
  | 'pincai' | 'yuanmao' | 'wenhui' | 'sihui' | 'siyuan' | 'lianggong' | 'servant' | 'guest';

export type Gesture = ScholarGesture | 'bow' | 'offering' | 'sleeping' | 'hiding' | 'thinking' | 'walking' | 'tugging'
  | 'kowtow' | 'kneel' | 'handing' | 'whisper' | 'toast' | 'fist' | 'mincing' | 'seated' | 'fuming';

export type PersonStyle = {
  kind: PersonKind;
  hair?: Hair;
  gesture?: Gesture;
  speaking?: boolean;
  /** Vermilion on the cheeks: a blush. */
  blush?: boolean;
  pose?: DanPose;
  phase?: number;
  /** Walking: legs and robe swing. */
  walking?: boolean;
};

const cheeks = (ctx: Ctx, x = 0, y = -176) => {
  ctx.save(); ctx.fillStyle = RED; ctx.shadowBlur = 0;
  disc(ctx, x - 8, y + 4, 4, 3); disc(ctx, x + 8, y + 4, 4, 3);
  ctx.restore();
};

/** Walking sways the hem and lifts the shoes in turn. */
const stride = (ctx: Ctx, t: number, on: boolean) => on ? Math.sin(t * 6) * 5 : 0;

function lady(ctx: Ctx, t: number, s: PersonStyle) {
  const sway = Math.sin(t * 0.9 + (s.phase ?? 0)) * 2 + stride(ctx, t, !!s.walking);
  const sleeping = s.gesture === 'sleeping';
  robe(ctx, 0, -146, -2, 20, 42, sway);
  disc(ctx, 0, -146, 22, 8);
  ctx.fillRect(-4, -164, 8, 14);
  ctx.save();
  if (sleeping) { ctx.translate(0, -164); ctx.rotate(0.35); ctx.translate(0, 164); }
  disc(ctx, 0, -176, 13, 15);
  // A high chignon with a pin and a hanging ornament.
  disc(ctx, 0, -196, 12, 9); disc(ctx, -8, -204, 8, 7); disc(ctx, 9, -203, 7, 6);
  limb(ctx, [[-22, -200], [22, -206]], 2);
  limb(ctx, [[18, -205], [22, -186 + Math.sin(t * 2) * 2]], 1.5);
  ctx.restore();
  if (s.blush) cheeks(ctx);
  const g = s.gesture;
  if (sleeping) {
    // Seated asleep, head on the hand.
    arm(ctx, [[18, -140], [30, -150], [14, -170]], 11); arm(ctx, [[-18, -140], [-24, -112], [0, -104]], 12);
  } else if (g === 'offering') {
    arm(ctx, [[-18, -140], [-26, -118], [-40, -126]], 11); arm(ctx, [[18, -140], [26, -118], [40, -126]], 11);
    ctx.fillRect(-48, -136, 96, 12); // a fur robe held out
  } else if (g === 'hiding') {
    arm(ctx, [[-18, -140], [-10, -160], [4, -176]], 12); limb(ctx, [[4, -176], [10, -150], [6, -120]], 14);
    arm(ctx, [[18, -140], [24, -112], [8, -104]], 12);
  } else if (g === 'speaking' || s.speaking) {
    const talk = Math.sin(t * 5);
    arm(ctx, [[-18, -140], [-24, -112], [-4, -104]], 12); arm(ctx, [[18, -140], [34, -126], [40 + talk * 5, -146]], 11);
  } else if (g === 'thinking') {
    arm(ctx, [[-18, -140], [-24, -112], [-4, -104]], 12); arm(ctx, [[18, -140], [22, -130], [8, -164]], 11);
  } else if (g === 'walking') {
    arm(ctx, [[-18, -140], [-26 - sway, -112], [-24 - sway, -92]], 11); arm(ctx, [[18, -140], [26 + sway, -112], [24 + sway, -92]], 11);
  } else {
    // Hands folded in the sleeves.
    arm(ctx, [[-18, -140], [-26, -110], [-2, -104]], 13); arm(ctx, [[18, -140], [26, -110], [2, -104]], 13);
    limb(ctx, [[-16, -104], [16, -104]], 16);
  }
}

function deity(ctx: Ctx, t: number, s: PersonStyle) {
  lady(ctx, t, { ...s, gesture: 'offering' });
  // Streamers lifting on the wind, and a jade disc (a ring left as bare paper) in the hands.
  for (const side of [-1, 1]) limb(ctx, [[side * 20, -144], [side * 50, -170 + Math.sin(t * 1.6 + side) * 10], [side * 70, -130 + Math.sin(t * 1.3 + side) * 14], [side * 60, -80 + Math.sin(t + side) * 12]], 3);
  ctx.save(); ctx.fillStyle = '#6f675f'; disc(ctx, 0, -150, 18); ctx.restore();
  cutout(ctx, () => { disc(ctx, 0, -150, 6); });
  // A curl of cloud underfoot.
  ctx.save(); ctx.fillStyle = 'rgba(80,72,66,0.5)';
  for (let k = -2; k <= 2; k++) disc(ctx, k * 18, 2 + Math.abs(k) * 2, 16, 8);
  ctx.restore();
}

function page(ctx: Ctx, t: number, s: PersonStyle) {
  ctx.save(); ctx.scale(0.72, 0.72);
  body(ctx, stride(ctx, t, !!s.walking) + Math.sin(t) * 1.5);
  disc(ctx, 0, -178, 15, 17);
  disc(ctx, -12, -196, 7); disc(ctx, 12, -196, 7); // two tufts
  if (s.gesture === 'bow') { arm(ctx, [[-24, -145], [-18, -118], [0, -128]]); arm(ctx, [[24, -145], [18, -118], [0, -128]]); }
  else if (s.gesture === 'offering') { arm(ctx, [[-24, -145], [-30, -120], [-10, -126]]); arm(ctx, [[24, -145], [30, -120], [10, -126]]); ctx.fillRect(-24, -138, 48, 8); disc(ctx, -8, -144, 6, 5); disc(ctx, 8, -144, 6, 5); }
  else if (s.gesture === 'speaking' || s.speaking) { arm(ctx, [[-24, -145], [-30, -112], [-22, -90]]); arm(ctx, [[24, -145], [42, -130], [50 + Math.sin(t * 5) * 5, -150]]); }
  else if (s.gesture === 'tugging') { const pull = Math.sin(t * 4) * 4; arm(ctx, [[-24, -145], [4, -128], [36 + pull, -120]]); arm(ctx, [[24, -145], [40, -130], [58 + pull, -122]]); }
  else { arm(ctx, [[-24, -145], [-30, -112], [-24, -90]]); arm(ctx, [[24, -145], [30, -112], [24, -90]]); }
  ctx.restore();
}

function official(ctx: Ctx, t: number) {
  // Stiff as a board: square shoulders, a jade belt, a winged gauze cap.
  robe(ctx, 0, -150, -4, 30, 44, 0);
  ctx.fillRect(-32, -156, 64, 14);
  cutout(ctx, () => { ctx.fillRect(-26, -112, 52, 4); ctx.strokeRect(-12, -140, 24, 22); });
  disc(ctx, -14, -2, 12, 5); disc(ctx, 14, -2, 12, 5);
  ctx.fillRect(-5, -168, 10, 16);
  disc(ctx, 0, -178, 15, 17);
  ctx.fillRect(-15, -206, 30, 22); disc(ctx, 0, -206, 15, 6);
  const flap = Math.sin(t * 0.8) * 1.5;
  for (const side of [-1, 1]) { ctx.save(); ctx.translate(side * 15, -196); ctx.fillRect(side > 0 ? 0 : -34, -3 + flap, 34, 6); ctx.restore(); }
  // Holding the ivory tablet before the chest.
  arm(ctx, [[-30, -145], [-26, -118], [-4, -128]], 12); arm(ctx, [[30, -145], [26, -118], [4, -128]], 12);
  ctx.save(); ctx.fillStyle = '#8a8178'; ctx.fillRect(-4, -170, 8, 44); ctx.restore();
}

function pedant(ctx: Ctx, t: number) {
  // Hunched back, shrugged shoulders, groaning over a phrase.
  const groan = Math.sin(t * 1.6);
  ctx.save(); ctx.translate(0, 0); ctx.rotate(0.12 + groan * 0.03);
  robe(ctx, 6, -140, -4, 22, 36, 0);
  disc(ctx, 4, -140, 30, 14);
  disc(ctx, -14, -2, 12, 5); disc(ctx, 14, -2, 12, 5);
  head(ctx, t, 'cap', 0.35 + groan * 0.1, 18, -160);
  arm(ctx, [[-20, -142], [-4, -120], [12, -128]], 10); arm(ctx, [[26, -142], [30, -122], [16, -128]], 10);
  // Wisps of beard and a few groans drifting up.
  limb(ctx, [[22, -146], [26, -130 + groan * 3]], 2);
  ctx.restore();
  ctx.save(); ctx.globalAlpha = 0.5; for (let k = 0; k < 3; k++) { const u = (t * 0.4 + k / 3) % 1; limb(ctx, [[40 + u * 20, -180 - u * 60], [48 + u * 20, -186 - u * 60]], 2); } ctx.restore();
}

function merchant(ctx: Ctx, t: number) {
  // Portly, a round melon cap, counting silver on an abacus.
  robe(ctx, 0, -146, -4, 26, 52, 0);
  disc(ctx, 0, -110, 40, 34);
  disc(ctx, 0, -146, 28, 10);
  disc(ctx, -14, -2, 12, 5); disc(ctx, 14, -2, 12, 5);
  ctx.fillRect(-5, -166, 10, 14);
  disc(ctx, 0, -178, 17, 17); disc(ctx, 0, -192, 16, 8); disc(ctx, 0, -201, 4);
  const click = Math.round(t * 3) % 4;
  arm(ctx, [[-26, -142], [-40, -118], [-26, -104]], 12); arm(ctx, [[26, -142], [40, -118], [26, -104]], 12);
  ctx.save(); ctx.fillStyle = '#4e4640'; ctx.fillRect(-34, -112, 68, 22); ctx.restore();
  cutout(ctx, () => { for (let r = 0; r < 2; r++) for (let c = 0; c < 6; c++) disc(ctx, -26 + c * 10 + (c === click ? 4 : 0), -106 + r * 10, 3); });
  // A silver ingot at his feet.
  ctx.save(); ctx.fillStyle = '#6f675f'; ctx.beginPath(); ctx.ellipse(48, -6, 16, 7, 0, 0, Math.PI * 2); ctx.fill(); disc(ctx, 48, -12, 7, 6); ctx.restore();
}

function escort(ctx: Ctx, t: number, s: PersonStyle) {
  // Greased hair, a powdered face left pale, a flirting fan.
  body(ctx, Math.sin(t * 1.4 + (s.phase ?? 0)) * 3 + stride(ctx, t, !!s.walking));
  head(ctx, t, 'bun', Math.sin(t * 1.2) * 0.12);
  cutout(ctx, () => { disc(ctx, Math.sin(t * 1.2) * 1.5, -176, 10, 11); });
  if (s.gesture === 'tugging') {
    arm(ctx, [[-24, -145], [-44, -132], [-64, -126 + Math.sin(t * 4) * 4]]); arm(ctx, [[24, -145], [30, -112], [20, -90]]);
  } else {
    arm(ctx, [[-24, -145], [-30, -112], [-10, -104]]);
    const a = Math.sin(t * 3) * 0.3;
    arm(ctx, [[24, -145], [40, -128], [44, -150]]);
    ctx.beginPath(); ctx.moveTo(44, -150); ctx.arc(44, -150, 26, -1.9 + a, -0.8 + a); ctx.closePath(); ctx.fill();
  }
}

function clown(ctx: Ctx, t: number) {
  // The chou: a white patch on the nose, a squat, knees-bent caper.
  const hop = Math.abs(Math.sin(t * 3)) * 10;
  ctx.save(); ctx.translate(0, -hop);
  robe(ctx, 0, -126, -30, 22, 34, Math.sin(t * 3) * 8);
  limb(ctx, [[-10, -30], [-24, -12], [-18, 0]], 10); limb(ctx, [[10, -30], [24, -12], [18, 0]], 10);
  disc(ctx, 0, -126, 26, 10);
  ctx.fillRect(-5, -142, 10, 14);
  disc(ctx, 0, -154, 16, 16);
  ctx.fillRect(-16, -178, 32, 12);
  cutout(ctx, () => { ctx.fillRect(-7, -160, 14, 12); });
  arm(ctx, [[-22, -122], [-44, -140], [-40 + Math.sin(t * 3) * 8, -170]]); arm(ctx, [[22, -122], [44, -110], [58, -126]]);
  ctx.restore();
}

function warrior(ctx: Ctx, t: number, s: PersonStyle) {
  // A Three Kingdoms general: four pennants on the back, pheasant plumes, a spear.
  const turn = Math.sin(t * 1.2 + (s.phase ?? 0));
  for (let k = 0; k < 4; k++) {
    const x = -24 + k * 16, top = -250 - Math.abs(k - 1.5) * -8;
    limb(ctx, [[x * 0.5, -150], [x, top]], 3);
    ctx.beginPath(); ctx.moveTo(x, top); ctx.lineTo(x + 18 + Math.sin(t * 4 + k) * 3, top + 14); ctx.lineTo(x, top + 30); ctx.fill();
  }
  robe(ctx, 0, -150, -4, 30, 50, turn * 6);
  disc(ctx, 0, -150, 32, 12);
  disc(ctx, -16, -2, 13, 6); disc(ctx, 16, -2, 13, 6);
  ctx.fillRect(-5, -168, 10, 16);
  disc(ctx, 0, -178, 16, 17);
  disc(ctx, 0, -198, 14, 8);
  for (const side of [-1, 1]) limb(ctx, [[side * 8, -200], [side * 40, -250], [side * 70 + Math.sin(t * 2) * 6, -236]], 2.5);
  arm(ctx, [[-28, -146], [-50, -126], [-44, -104]], 13);
  arm(ctx, [[28, -146], [50, -150 + turn * 8], [60, -166 + turn * 10]], 13);
  limb(ctx, [[40, -40 + turn * 10], [80, -250 + turn * 20]], 4);
  ctx.beginPath(); ctx.moveTo(80, -250 + turn * 20); ctx.lineTo(74, -226 + turn * 20); ctx.lineTo(88, -228 + turn * 20); ctx.fill();
}

function elder(ctx: Ctx, t: number) {
  body(ctx, Math.sin(t * 0.7) * 1.5);
  head(ctx, t, 'cap', 0.06);
  // A long white beard left as bare paper against the robe.
  cutout(ctx, () => { ctx.beginPath(); ctx.moveTo(-8, -170); ctx.quadraticCurveTo(0, -120 + Math.sin(t) * 2, 8, -170); ctx.fill(); });
  arm(ctx, [[-24, -145], [-30, -112], [-4, -102]], 13); arm(ctx, [[24, -145], [30, -112], [4, -102]], 13);
}

// --- Robed men with a look of their own (chapter 2), and gestures any robed man can make ---------

type Look = {
  hair: Hair | 'hat';
  /** Robe width: 1 ordinary, 1.3 stout, 0.85 slight. */
  girth: number;
  /** Head sunk into the shoulders (a hunched neck). */
  sunk?: number;
  /** Paper-coloured or vermilion touches on the face, drawn around the head centre. */
  face?: (ctx: Ctx, t: number, x: number, y: number) => void;
  beard?: 'long' | 'sparse';
  /** A fur-trimmed official's surcoat. */
  rank?: boolean;
};

const LOOKS: Partial<Record<PersonKind, Look>> = {
  // Slight and quick, always smiling: bright eyes left as paper.
  pincai: { hair: 'bun', girth: 0.85, face: (ctx, t, x, y) => cutout(ctx, () => { limb(ctx, [[x - 8, y - 2], [x - 3, y - 4]], 2); limb(ctx, [[x + 3, y - 4], [x + 8, y - 2]], 2); limb(ctx, [[x - 6, y + 7], [x, y + 10], [x + 6, y + 7]], 2); }) },
  // Heavy and sallow, thick brows, peering short-sightedly.
  yuanmao: { hair: 'bun', girth: 1.3, face: (ctx, t, x, y) => cutout(ctx, () => { ctx.fillRect(x - 11, y - 7, 9, 4); ctx.fillRect(x + 2, y - 7, 9, 4); limb(ctx, [[x - 9, y], [x - 4, y]], 1.5); limb(ctx, [[x + 4, y], [x + 9, y]], 1.5); }) },
  // A square face, a long grizzled beard, third-rank robes with fur.
  wenhui: { hair: 'hat', girth: 1.2, beard: 'long', rank: true },
  // Hunched neck, puffed cheeks, and a red nose among red pimples.
  sihui: { hair: 'cap', girth: 1.05, sunk: 10, face: (ctx, t, x, y) => { ctx.save(); ctx.fillStyle = RED; ctx.shadowBlur = 0; disc(ctx, x, y + 3, 5); for (const [dx, dy] of [[-9, 2], [8, 5], [-6, 9], [10, -3], [-11, -4]]) disc(ctx, x + dx, y + dy, 1.8); ctx.restore(); } },
  // Buck teeth and one eyelid hitched up, as if circled in vermilion.
  siyuan: { hair: 'cap', girth: 0.95, face: (ctx, t, x, y) => { cutout(ctx, () => { ctx.fillRect(x - 4, y + 8, 8, 5); }); ctx.save(); ctx.strokeStyle = RED; ctx.lineWidth = 1.6; ctx.shadowBlur = 0; ctx.beginPath(); ctx.arc(x + 6, y - 3, 5, Math.PI, Math.PI * 1.9); ctx.stroke(); ctx.restore(); } },
  // A flat face and a few whiskers.
  lianggong: { hair: 'hat', girth: 1.1, beard: 'sparse', rank: true },
  servant: { hair: 'hat', girth: 0.9 },
  guest: { hair: 'hat', girth: 1.1, beard: 'long', rank: true },
};

function hat(ctx: Ctx, x: number, y: number) {
  // A round official's hat with an upturned brim and a finial.
  ctx.beginPath(); ctx.ellipse(x, y - 12, 22, 7, 0, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.moveTo(x - 14, y - 12); ctx.quadraticCurveTo(x, y - 36, x + 14, y - 12); ctx.fill();
  disc(ctx, x, y - 32, 4);
}

function manHead(ctx: Ctx, t: number, look: Look, tilt: number, x = 0, y = -178) {
  if (look.hair === 'hat') {
    ctx.save(); ctx.translate(x, y + 12); ctx.rotate(tilt); ctx.translate(0, -12);
    disc(ctx, 0, 0, 15, 17); hat(ctx, 0, -6);
    ctx.restore();
  } else head(ctx, t, look.hair, tilt, x, y);
  if (look.beard === 'long') cutout(ctx, () => { ctx.beginPath(); ctx.moveTo(x - 9, y + 6); ctx.quadraticCurveTo(x + Math.sin(t) * 2, y + 44, x + 9, y + 6); ctx.fill(); });
  if (look.beard === 'sparse') cutout(ctx, () => { for (let k = -1; k <= 1; k++) limb(ctx, [[x + k * 5, y + 10], [x + k * 7, y + 24]], 1.5); });
  look.face?.(ctx, t, x, y);
}

/** A robed man in any gesture; `look` gives him his build and face. */
function robedMan(ctx: Ctx, t: number, s: PersonStyle, look: Look) {
  const g = s.gesture;
  const talk = s.speaking ? Math.sin(t * 5 + (s.phase ?? 0)) : 0;
  const w = look.girth;
  const sunk = look.sunk ?? 0;
  if (g === 'kowtow') {
    // Kneeling with the forehead to the floor, bobbing.
    const bob = Math.max(0, Math.sin(t * 2.4)) * 10;
    ctx.beginPath(); ctx.ellipse(-8, -34, 44 * w, 30, 0.2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(22, -40 - bob * 0.5, 30 * w, 20, -0.4 - bob * 0.01, 0, Math.PI * 2); ctx.fill();
    manHead(ctx, t, look, 1.3, 50, -22 - bob);
    arm(ctx, [[30, -48 - bob * 0.5], [52, -20], [66, -6]], 10);
    return;
  }
  const kneel = g === 'kneel';
  const seated = g === 'seated';
  const drop = kneel ? 58 : 0;
  ctx.save(); ctx.translate(0, drop);
  const sway = g === 'mincing' ? Math.sin(t * 3) * 7 : g === 'fuming' ? Math.sin(t * 8) * 3 : Math.sin(t * 0.8 + (s.phase ?? 0)) * 2;
  if (seated) {
    // Cross-legged on a couch: knees spread wide at the base.
    robe(ctx, 0, -150, -30, 24 * w, 36 * w, 0);
    ctx.beginPath(); ctx.ellipse(0, -30, 62 * w, 22, 0, 0, Math.PI * 2); ctx.fill();
  } else {
    robe(ctx, 0, -150, kneel ? -60 : -4, 24 * w, (kneel ? 40 : 46) * w, sway + (s.walking ? Math.sin(t * 6) * 5 : 0));
    if (!kneel) { disc(ctx, -14, -2, 12, 5); disc(ctx, 14 + sway, -2, 12, 5); }
  }
  disc(ctx, 0, -150, 28 * w, 10);
  if (look.rank) cutout(ctx, () => { ctx.strokeRect(-14, -136, 28, 24); for (let k = -3; k <= 3; k++) limb(ctx, [[k * 8, -156], [k * 8 + 2, -150]], 2); });
  ctx.fillRect(-5, -168 + sunk, 10, 16);
  const hx = g === 'whisper' ? 12 : 0;
  const tilt = g === 'laughing' ? -0.25 + talk * 0.05 : g === 'mincing' ? Math.sin(t * 3) * 0.25 : g === 'bow' || kneel ? 0.28 : g === 'thinking' ? -0.12 : g === 'whisper' ? 0.35 : talk * 0.06;
  manHead(ctx, t, look, tilt, hx, -178 + sunk);
  if (s.blush) cheeks(ctx, hx, -176 + sunk);
  const L: Point = [-24 * w, -145], R: Point = [24 * w, -145];
  const cup = (x: number, y: number) => { ctx.fillRect(x - 6, y - 12, 12, 10); ctx.fillRect(x - 2, y - 2, 4, 5); };
  switch (g) {
    case 'bow': case 'kneel':
      arm(ctx, [L, [-18, -118], [0, -130]]); arm(ctx, [R, [18, -118], [0, -130]]); break;
    case 'handing':
      arm(ctx, [L, [-10, -120], [30, -128]]); arm(ctx, [R, [40, -124], [56, -130]]);
      ctx.save(); ctx.fillStyle = RED; ctx.fillRect(34, -150, 26, 36); ctx.restore(); break;
    case 'whisper':
      arm(ctx, [L, [-30, -112], [-20, -90]]); arm(ctx, [R, [38, -150], [20, -170]]); break;
    case 'toast':
      arm(ctx, [L, [-30, -112], [-20, -90]]); arm(ctx, [R, [40, -140], [34, -168 - Math.abs(talk) * 6]]); cup(34, -168 - Math.abs(talk) * 6); break;
    case 'fist': {
      const shake = Math.abs(Math.sin(t * 7)) * 14;
      arm(ctx, [L, [-30, -112], [-20, -90]]); arm(ctx, [R, [44, -136], [64, -146 + shake]], 12); disc(ctx, 64, -146 + shake, 10); break;
    }
    case 'mincing':
      // One hand veils the beard, the other holds out a cup; hips sway.
      arm(ctx, [L, [-20, -150], [hx - 4, -166]]); arm(ctx, [R, [40, -128], [52, -140]]); cup(52, -140); break;
    case 'fuming':
      arm(ctx, [L, [-40, -128], [-30, -110]]); arm(ctx, [R, [40, -128], [30, -110]]); break;
    case 'seated':
      arm(ctx, [L, [-40, -112], [-50, -60]]); arm(ctx, [R, [40, -112], [50, -60]]); break;
    case 'reading':
      arm(ctx, [L, [-30, -118], [-6, -124]]); arm(ctx, [R, [30, -118], [6, -124]]); ctx.fillRect(-26, -150, 52, 32); break;
    case 'pointing':
      arm(ctx, [L, [-30, -110], [-20, -86]]); arm(ctx, [R, [48, -150 + talk * 6], [72, -160 + talk * 8]]); break;
    case 'speaking':
      arm(ctx, [L, [-30, -110], [-20, -86]]); arm(ctx, [R, [40, -128], [44 + talk * 6, -150 - Math.abs(talk) * 10]]); break;
    case 'laughing':
      arm(ctx, [L, [-36, -126], [-30, -150 - Math.abs(talk) * 6]]); arm(ctx, [R, [36, -126], [30, -150 - Math.abs(talk) * 6]]); break;
    case 'thinking':
      arm(ctx, [L, [-30, -112], [-4, -102]], 13); arm(ctx, [R, [30, -130], [12, -162]]); break;
    case 'walking': {
      const sw = Math.sin(t * 6) * 5;
      arm(ctx, [L, [-30 - sw, -112], [-26 - sw, -90]]); arm(ctx, [R, [30 + sw, -112], [26 + sw, -90]]); break;
    }
    default:
      arm(ctx, [L, [-30 * w, -112], [-4, -102]], 13); arm(ctx, [R, [30 * w, -112], [4, -102]], 13);
  }
  ctx.restore();
}

const NEW_GESTURES: Gesture[] = ['kowtow', 'kneel', 'handing', 'whisper', 'toast', 'fist', 'mincing', 'seated', 'fuming'];

/** Draws one person of the given style at time t. */
export function person(ctx: Ctx, t: number, s: PersonStyle) {
  const g = s.gesture;
  const look = LOOKS[s.kind];
  if (look) { robedMan(ctx, t, s, look); return; }
  if ((s.kind === 'scholar' || s.kind === 'teacher') && g && NEW_GESTURES.includes(g)) {
    robedMan(ctx, t, s, { hair: s.hair ?? (s.kind === 'teacher' ? 'cap' : 'bun'), girth: 1, beard: s.kind === 'teacher' ? 'sparse' : undefined });
    return;
  }
  switch (s.kind) {
    case 'lady': case 'maid': lady(ctx, t, s); return;
    case 'deity': deity(ctx, t, s); return;
    case 'page': page(ctx, t, s); return;
    case 'official': official(ctx, t); return;
    case 'pedant': pedant(ctx, t); return;
    case 'merchant': merchant(ctx, t); return;
    case 'escort': escort(ctx, t, s); return;
    case 'clown': clown(ctx, t); return;
    case 'warrior': warrior(ctx, t, s); return;
    case 'elder': elder(ctx, t); return;
    case 'dan': dan(ctx, t, s.pose ?? DAN_POSES[7], s.phase ?? 0); if (s.blush) cheeks(ctx); return;
    default: {
      // Scholars and the teacher.
      const hair = s.hair ?? (s.kind === 'teacher' ? 'cap' : 'bun');
      if (g === 'bow') {
        body(ctx, 0); head(ctx, t, hair, 0.28);
        arm(ctx, [[-24, -145], [-18, -118], [0, -130]]); arm(ctx, [[24, -145], [18, -118], [0, -130]]);
      } else if (g === 'thinking') {
        body(ctx, Math.sin(t * 0.8) * 2); head(ctx, t, hair, -0.12);
        arm(ctx, [[-24, -145], [-30, -112], [-4, -102]], 13); arm(ctx, [[24, -145], [30, -130], [12, -162]]);
      } else if (g === 'walking' || s.walking) {
        const sw = Math.sin(t * 6) * 5;
        body(ctx, sw); head(ctx, t, hair, 0);
        arm(ctx, [[-24, -145], [-30 - sw, -112], [-26 - sw, -90]]); arm(ctx, [[24, -145], [30 + sw, -112], [26 + sw, -90]]);
      } else {
        scholar(ctx, t, { hair, gesture: (g as ScholarGesture) ?? 'still', speaking: !!s.speaking, phase: s.phase ?? 0 });
      }
      if (s.blush) cheeks(ctx);
      if (s.kind === 'teacher') cutout(ctx, () => { limb(ctx, [[-4, -166], [0, -146], [4, -166]], 3); });
    }
  }
}

// --- Animals and carts, drawn on wider canvases (CART_W × CART_H) --------------------------------

export const CART_W = 512;
export const CART_H = 320;

/** A horse in profile facing right, walking when `moving`; origin at the hooves' centre. */
export function horse(ctx: Ctx, t: number, moving: boolean) {
  const step = moving ? t * 7 : 0;
  ctx.beginPath(); ctx.ellipse(0, -92, 62, 26, 0, 0, Math.PI * 2); ctx.fill();
  const legs: [number, number][] = [[-44, 0], [-30, Math.PI], [36, Math.PI], [50, 0]];
  for (const [x, ph] of legs) { const s = Math.sin(step + ph) * 12; limb(ctx, [[x, -80], [x + s * 0.6, -40], [x + s, 0]], 8); }
  limb(ctx, [[48, -104], [72, -140], [84, -150]], 20);
  ctx.beginPath(); ctx.ellipse(94, -146, 20, 10, 0.5, 0, Math.PI * 2); ctx.fill();
  limb(ctx, [[74, -160], [70, -174]], 5);
  for (let k = 0; k < 4; k++) limb(ctx, [[52 + k * 6, -118 - k * 8], [42 + k * 6 + Math.sin(t * 3 + k) * 4, -104 - k * 8]], 3);
  limb(ctx, [[-60, -96], [-82, -70 + Math.sin(t * 2) * 5], [-86, -40]], 6);
}

/** A Beijing cart: a hooded cabin with a curtained glass window, one big wheel, a mule in the shafts. */
export function cart(ctx: Ctx, t: number, { moving = false, window: glass = true, fur = false }: { moving?: boolean; window?: boolean; fur?: boolean } = {}) {
  const bob = moving ? Math.abs(Math.sin(t * 7)) * 3 : 0;
  ctx.save(); ctx.translate(-40, 0);
  // Mule in the shafts, to the right.
  ctx.save(); ctx.translate(150, 0); ctx.scale(0.8, 0.8); horse(ctx, t, moving); ctx.restore();
  limb(ctx, [[20, -92 + bob], [150, -80]], 5);
  // The cabin, with its arched hood.
  ctx.save(); ctx.translate(0, bob);
  ctx.beginPath(); ctx.moveTo(-110, -70); ctx.lineTo(-110, -170); ctx.quadraticCurveTo(-40, -210, 30, -170); ctx.lineTo(30, -70); ctx.closePath(); ctx.fill();
  ctx.fillRect(-120, -74, 160, 10);
  if (fur) cutout(ctx, () => { for (let k = 0; k < 9; k++) limb(ctx, [[-104 + k * 15, -76], [-100 + k * 15, -86]], 3); });
  if (glass) {
    cutout(ctx, () => { ctx.fillRect(-72, -156, 64, 44); });
    ctx.fillRect(-42, -156, 4, 44);
  }
  ctx.restore();
  // The wheel, turning.
  ctx.lineWidth = 7; ctx.beginPath(); ctx.arc(-40, -44, 42, 0, Math.PI * 2); ctx.stroke();
  const spin = moving ? t * 3 : 0;
  for (let k = 0; k < 8; k++) { const a = spin + k * Math.PI / 4; limb(ctx, [[-40, -44], [-40 + Math.cos(a) * 40, -44 + Math.sin(a) * 40]], 3); }
  disc(ctx, -40, -44, 8);
  ctx.restore();
}

export type { Point };
