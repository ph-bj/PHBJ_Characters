import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, VERMILION, cue, face, figure, flat, tone, walkAlong, type Pose } from '../../../stage/figure';
import { floor, pavilion, platform } from '../../../stage/architecture';
import { bamboo, ground, lotus, peony, pine, plumTree, range, willow } from '../../../stage/nature';
import { book, lamp, roundTable, writing } from '../../../stage/props';
import { inkGather, mist, petals, smoke } from '../../../stage/fx';
import { lights, move, orbit, sets, span } from '../../../stage/direct';
import { study } from '../../../stage/locations';
import { DUCKS_SIZE, LOW_KINDS, RANKS, paintDucks } from './paintings';

/*
 * Chapter 1, paragraph 3. On a garden terrace ten leading performers stand in an arc, each beside a
 * flower of her own in a pot, and as the camera sweeps round them a slip names each kind: 情中至,
 * 情中慧 ... 情中媚. Then a smoky den where eight hunched figures crowd a gaming table; over each
 * hangs a blotted word, and above them all 情 gathers, cannot settle, and scatters. In a misty
 * landscape a young man stands where the road forks: flagstones climb straight to a pavilion with a
 * vermilion lantern, a crooked track winds off into dark pines. At night the author writes on, and
 * volume after volume stacks up on his desk until there are sixty, and the brush writes the title
 * slip. Last, a lady at her frame finishes a pair of embroidered mandarin ducks for all to see, and
 * draws the needle away into her sleeve.
 */

/** Ten flowers, one per kind, in the passage's order. */
const FLOWERS: ('plumRed' | 'plumWhite' | 'lotus' | 'peonyWhite' | 'bamboo' | 'peonyRed' | 'pine')[] = ['plumWhite', 'bamboo', 'lotus', 'plumRed', 'peonyWhite', 'peonyRed', 'pine', 'plumRed', 'peonyRed', 'peonyWhite'];
const DAN_POSE: ((t: number) => Pose)[] = [G.pose, G.shy, t => G.dance(t, 0.5), G.folded, t => ({ ...G.folded(t), bow: 0.15 }), t => ({ ...G.pose(t), turn: -0.3 }), G.rest, t => G.dance(t, 2), G.pose, G.shy];

export default defineScene({
  seed: 1003,
  build: (kit, story) => {
    const { groups: [terrace, den, fork, desk, frame], show } = sets(kit, 5);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: ten flowers ---------------------------------------------------------------------------
    ground(kit, terrace, { w: 220, d: 220, height: 1.2, flatten: 16, shade: 0xdcd6cc });
    platform(kit, terrace, 16, 9, 0.5, { z: -1 });
    floor(kit, terrace, 16, 9, { kind: 'flag', z: -1, y: 0.51 });
    willow(kit, terrace, -11, -6, { h: 7, rand }); willow(kit, terrace, 11, -7, { h: 7, rand });
    range(kit, terrace, { z: -110, span: 400, height: 28, shade: 0xc9c2b7, seed: 103 });
    const fall = petals(kit, terrace, { count: 80, w: 16, h: 5, d: 8, y: 0.5, red: true, speed: 0.25, wind: 0.2 });
    const stations = RANKS.map((rank, k) => {
      const a = (k - 4.5) * 0.28;
      const x = Math.sin(a) * 6, z = -Math.cos(a) * 6 + 3;
      const g = kit.group(terrace, x, 0.5, z);
      g.rotation.y = Math.atan2(-x, 3 - z + 3);
      const potX = 0.55;
      kit.mesh(new THREE.CylinderGeometry(0.28, 0.2, 0.4, 14), tone(0x6e675f), g, potX, 0.2, 0);
      const kind = FLOWERS[k];
      if (kind === 'plumRed' || kind === 'plumWhite') plumTree(kit, g, potX, 0, { h: 1.6, rand, blossoms: 40, red: kind === 'plumRed' }).position.y = 0.35;
      else if (kind === 'lotus') lotus(kit, g, potX, 0, { count: 3, rand, radius: 0.25, flowers: 1 }).position.y = 0.4;
      else if (kind === 'bamboo') bamboo(kit, g, potX, 0, { h: 1.8, count: 3, rand, spread: 0.2 }).group.position.y = 0.35;
      else if (kind === 'pine') pine(kit, g, potX, 0, { h: 1.5, rand }).position.y = 0.35;
      else peony(kit, g, potX, 0.45, 0, { s: 1.4, red: kind === 'peonyRed' });
      const dan = figure(kit, g, { ...CAST.dan, robe: [0xf0ebe2, 0xe6e0d6, 0xd6d0c6][k % 3], jacket: [0xd6d0c6, 0xb9b2a8, 0x9c958b][k % 3], waterSleeves: k % 2 === 0 }, -0.2, 0);
      const slip = writing(kit, g, `情中${rank}`, { size: 0.17, paper: 0xf4f0e8, margin: 0.25, x: potX, y: 2.2, z: 0 });
      return { g, dan, slip, x, z };
    });
    lights(kit, terrace, { key: [6, 10, 12], intensity: 1 });
    const cam1 = orbit(kit, terrace, [0, 1.4, -1.8], { r: 6.5, y: 2, a0: -0.95, a1: 0.95, t0: 0, t1: at(1), lookY: 1.4, rise: 0.8 });

    // --- Shot 2: where feeling will not settle -------------------------------------------------------------
    floor(kit, den, 30, 30, { kind: 'bricks', shade: 0x8c857c });
    kit.box(den, tone(0x4a443e), [0, 2, -4], [14, 4, 0.2]);
    roundTable(kit, den, { r: 0.9 });
    const lurkers = LOW_KINDS.map((ch, k) => {
      const a = k / 8 * Math.PI * 2 + 0.3;
      const x = Math.sin(a) * 1.5, z = Math.cos(a) * 1.5;
      const f = figure(kit, den, { ...[CAST.merchant, CAST.clown, CAST.servant, CAST.guest, CAST.pedant, CAST.escort, CAST.youth, CAST.official][k], robe: 0x3f3a35, jacket: 0x2a2522 }, x, z);
      const blot = inkGather(kit, den, ch, { size: 0.55, at: 10.6 + k * 0.6, dur: 0.8, count: 900, spread: 1, drop: 0.05 });
      blot.points.position.set(x * 1.1, 2.3, z * 1.1);
      return f;
    });
    const qing = inkGather(kit, den, '情', { size: 1.6, at: 13, dur: 2, scatter: 15.4, count: 3000, spread: 3, ink: 0x9c958b });
    qing.points.position.set(0, 3.2, 0);
    smoke(kit, den, 0, 0.9, 0, { h: 2.4, count: 160, size: 0.12 });
    const dice = [0, 1, 2].map(k => kit.box(den, tone(0xf0ebe2), [(k - 1) * 0.12, 0.84, 0.1], [0.06, 0.06, 0.06]));
    lights(kit, den, { key: [0, 4, 3], intensity: 0.55, fill: 0.2 });
    const cam2 = move(kit, den, [[at(1), [3.6, 1.4, 3.8], [0, 1.1, 0]], [at(1) + 3.5, [0.5, 2.4, 4.5], [0, 2, 0]], [at(2), [-2.6, 3.8, 5.2], [0, 2.6, 0]]]);

    // --- Shot 3: two paths ----------------------------------------------------------------------------------
    ground(kit, fork, { w: 300, d: 300, height: 3, flatten: 10, shade: 0xd6d0c6 });
    range(kit, fork, { z: -120, span: 400, height: 34, shade: 0xc9c2b7, seed: 303 });
    // The straight way: flagstones rising in steps to a terrace and pavilion.
    for (let k = 0; k < 14; k++) kit.box(fork, tone(0xe6e0d6), [3 + k * 0.35, 0.05 + k * 0.18, -2 - k * 0.9], [1.2, 0.1 + k * 0.36, 0.8]);
    platform(kit, fork, 6, 5, 2.6, { x: 8.2, z: -16, steps: false });
    const hilltop = kit.group(fork, 8.2, 2.6, -16);
    pavilion(kit, hilltop, { r: 1.6, h: 2.6 });
    kit.mesh(new THREE.SphereGeometry(0.22, 12, 8), flat(VERMILION), hilltop, 0, 2.4, 1.6).scale.y = 1.3;
    // The crooked way: a winding track into dark pines.
    const bends: [number, number][] = [[0, 0], [-1.5, -2], [-0.6, -4], [-3, -6], [-2, -8.5], [-5, -11], [-4.2, -14]];
    bends.slice(1).forEach(([x, z], k) => { const [px, pz] = bends[k]; const seg = kit.box(fork, tone(0xb9b2a8), [(x + px) / 2, 0.03, (z + pz) / 2], [0.9, 0.04, Math.hypot(x - px, z - pz) + 0.4]); seg.rotation.y = Math.atan2(x - px, z - pz); });
    for (let k = 0; k < 14; k++) pine(kit, fork, -4 - rand() * 8, -8 - rand() * 12, { h: 5 + rand() * 3, rand });
    const shade = mist(kit, fork, { count: 6, w: 14, y: 0.5, d: 8, z: -14, size: 8, opacity: 0.5, shade: 0x8c857c });
    const traveller = figure(kit, fork, CAST.youth, 0.6, 2.4);
    lights(kit, fork, { key: [10, 12, 6], intensity: 1 });
    const cam3 = move(kit, fork, [[at(2), [1.2, 1.6, 6.5], [0.6, 1.4, 2]], [at(2) + 3, [0.8, 3, 8], [0.5, 1.6, -4]], [at(3), [1, 9, 13], [1.5, 1, -8]]]);

    // --- Shot 4: sixty volumes --------------------------------------------------------------------------------
    const room = study(kit, desk, { night: true });
    const author = figure(kit, desk, { ...CAST.teacher, beard: 'full' }, ...room.seats.desk);
    const deskLamp = lamp(kit, desk, { x: 0.75, y: 0.82, z: -2.35, h: 0.4, power: 2.4 });
    const stacks = [-0.85, -0.62, -0.39, 0.39, 0.62, 0.85].flatMap(x => Array.from({ length: 10 }, (_, k) => book(kit, desk, { x, y: 0.82 + k * 0.034, z: -2.05, w: 0.18, d: 0.26 }).group));
    const slipGroup = kit.group(desk, 0.85, 0.82 + 10 * 0.034 + 0.002, -2.05);
    kit.box(slipGroup, tone(0xf0ebe2), [0, 0, 0], [0.06, 0.002, 0.2]);
    const titleSlip = writing(kit, slipGroup, '品花宝鉴', { size: 0.04, margin: 0.1, paper: null });
    titleSlip.mesh.rotation.x = -Math.PI / 2; titleSlip.mesh.position.y = 0.002;
    const cam4 = move(kit, desk, [[at(3), [2.4, 1.8, 0.6], [0, 1, -2.2]], [at(3) + 3, [1.6, 1.6, -0.6], [0.2, 1, -2.1]], [at(4), [1.05, 1.35, -1.75], [0.85, 1.1, -2.05]]]);

    // --- Shot 5: the golden needle ----------------------------------------------------------------------------
    floor(kit, frame, 20, 20, { kind: 'boards', shade: 0xcfc8bc });
    kit.box(frame, tone(0xe6e0d6), [0, 2, -2.4], [10, 4, 0.1]);
    const hoop = kit.group(frame, 0, 1.15, 0);
    hoop.rotation.x = -0.5;
    kit.mesh(new THREE.TorusGeometry(0.42, 0.025, 8, 40), tone(0x6e675f), hoop);
    const canvas = document.createElement('canvas'); canvas.width = canvas.height = DUCKS_SIZE;
    paintDucks(canvas.getContext('2d')!);
    const silk = new THREE.MeshLambertMaterial({ color: 0xf4f0e8, side: THREE.DoubleSide });
    kit.mesh(new THREE.CircleGeometry(0.41, 40), silk, hoop, 0, 0, -0.002);
    const stitched = new THREE.MeshBasicMaterial({ map: kit.canvasTexture(canvas, true), transparent: true, opacity: 0, side: THREE.DoubleSide });
    kit.mesh(new THREE.CircleGeometry(0.41, 40), stitched, hoop, 0, 0, 0.001);
    kit.box(frame, tone(0x4a443e), [0, 0.5, 0.2], [0.05, 1, 0.05]);
    const lady = figure(kit, frame, CAST.lady, 0, -0.7);
    const needle = kit.group(lady.hands.r, 0, 0, 0.03);
    kit.mesh(new THREE.CylinderGeometry(0.003, 0.001, 0.09, 5), tone(0x9c958b), needle).rotation.x = Math.PI / 2;
    const thread = kit.mesh(new THREE.CylinderGeometry(0.002, 0.002, 1, 4).translate(0, -0.5, 0), flat(VERMILION), needle);
    lights(kit, frame, { key: [3, 5, 5], intensity: 0.9 });
    const cam5 = move(kit, frame, [[at(4), [0.3, 1.6, 1.1], [0, 1.15, 0]], [at(4) + 3, [0.9, 1.5, 0.9], [0, 1.2, -0.2]], [36, [1.6, 1.8, 2], [0, 1.2, -0.4]]]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam1(seconds);
        fall.update(seconds);
        stations.forEach(({ dan, slip }, k) => {
          const t0 = 0.3 + k * 0.95;
          dan.pose(DAN_POSE[k](seconds + k));
          slip.set(span(seconds, t0, t0 + 1));
        });
        return;
      }
      if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.05));
        cam2(seconds);
        lurkers.forEach((f, k) => {
          face(f, 0, 0);
          f.pose(cue(seconds, [[0, t => ({ ...G.rest(t), bow: 0.4, pitch: 0.3 })], [13 + (k % 3) * 0.2, t => ({ ...G.fume(t), pitch: -0.5, bow: 0.1 })], [15.6, t => ({ ...G.rest(t), bow: 0.45, pitch: 0.35, yaw: Math.sin(t + k) * 0.3 })]]));
        });
        dice.forEach((d, k) => { d.rotation.set(seconds * (3 + k), seconds * (2 + k), 0); d.position.y = 0.84 + Math.abs(Math.sin(seconds * 4 + k)) * 0.1; });
        return;
      }
      if (shot === 2) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam3(seconds);
        shade.update(seconds);
        const t = seconds - at(2);
        walkAlong(traveller, t, 0, 2.2, [[0.6, 2.4], [0.4, 0.6]], G.rest(t), 5);
        if (t > 2.2) {
          const look = Math.sin((t - 2.2) * 1.2);
          traveller.root.rotation.y = Math.PI + look * 0.7;
          traveller.pose({ ...G.think(t), yaw: look * 0.3 });
        }
        return;
      }
      if (shot === 3) {
        kit.setEnv(INK_SKY.paper(0.04));
        cam4(seconds);
        deskLamp.update(seconds);
        face(author, 0, 0);
        author.pose({ ...G.write(seconds), sit: 1 });
        const n = Math.floor(span(seconds, at(3) + 0.3, at(3) + 3.6) * 60);
        stacks.forEach((b, k) => { b.visible = k < n; });
        slipGroup.visible = n >= 60;
        titleSlip.set(span(seconds, at(3) + 3.8, at(3) + 5.6));
        return;
      }
      kit.setEnv(INK_SKY.paper(0.03));
      cam5(seconds);
      const t = seconds - at(4);
      stitched.opacity = span(t, 0, 2.6);
      face(lady, 0, 0.4);
      // Stitching, then the needle is drawn out and tucked into her left sleeve.
      lady.pose(cue(t, [[0, tt => ({ ...G.write(tt * 1.6), bow: 0.3, pitch: 0.45 })], [3, tt => ({ ...G.shy(tt), r: { lift: 1.0, out: -0.1, twist: 0.6, bend: 1.9 }, pitch: 0.2 })], [4.6, tt => ({ ...G.folded(tt), pitch: 0.1, mouth: 0.2 })]]));
      needle.visible = t < 4.4;
      thread.scale.y = 0.3 + Math.max(0, Math.sin(t * 3)) * 0.3;
    };
  },
});
