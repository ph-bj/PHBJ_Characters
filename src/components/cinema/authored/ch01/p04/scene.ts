import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY, type Env } from '../../../cinemaKit';
import { CAST, G, cue, figure, flat, tone } from '../../../stage/figure';
import { bookshelf, book, censer, hangingScroll, lamp, table, candle, bed, chair, studySet, writing } from '../../../stage/props';
import { floor, plaque, room } from '../../../stage/architecture';
import { bamboo, cloudBank } from '../../../stage/nature';
import { mist, smoke, specks } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 4. A nameless book found at the end of a long aisle of shelves; the Mei
 * ancestral hall, where two ancestors in court robes rise behind stern Shixie, the single heir; Lady
 * Yan's dream, the bedchamber dissolving into cloud as an immortal hands down a jade disc; and Ziyu
 * at seventeen among towers of books, the camera rising with his ambitions to the clouds.
 */

const ENV: Env[] = [
  { ...INK_SKY.paper(0.05) },
  { ...INK_SKY.paper(0.03) },
  INK_SKY.moonlit([0.2, 0.35, -1], 0.03),
  INK_SKY.moonlit([-0.3, 0.5, -1], 0.012),
];

export default defineScene({
  seed: 1004,
  build: (kit, story) => {
    const { groups: [library, ancestral, dream, study], show } = sets(kit, 4);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: the nameless book at the end of the stacks ------------------------------------
    floor(kit, library, 40, 60, { kind: 'boards', shade: 0xcfc8bc });
    for (let k = 0; k < 7; k++) for (const side of [-1, 1]) {
      bookshelf(kit, library, { x: side * 2.4, z: -k * 3.2, w: 2.6, h: 3.2, rot: side * -Math.PI / 2, rand });
      bookshelf(kit, library, { x: side * 5.2, z: -k * 3.2 - 1.6, w: 2.6, h: 3.4, rot: side * -Math.PI / 2, rand });
    }
    table(kit, library, { x: 0, z: -22, w: 1.6, d: 0.9 });
    const nameless = book(kit, library, { x: 0, y: 0.83, z: -22, w: 0.26, d: 0.36, title: '品花宝鉴' });
    const readingLamp = lamp(kit, library, { x: 0.9, z: -22.3, h: 1.4, power: 3 });
    specks(kit, library, { count: 260, w: 6, h: 4, d: 30, fall: 0.05, wind: 0.02, swirl: 0.3, size: 0.006, dark: true, y: 2, z: -12 });
    lights(kit, library, { key: [3, 8, -10], intensity: 0.6, fill: 0.25 });
    const shot1 = move(kit, library, [
      [0, [0, 4.2, 6], [0, 1.6, -20]],
      [3.5, [0, 2.6, -12], [0, 1.0, -22]],
      [6.9, [0.15, 1.75, -21.1], [0, 0.84, -22]],
    ]);

    // --- Shot 2: the ancestral hall; three generations, one heir -------------------------------
    room(kit, ancestral, { w: 14, d: 10, h: 5, back: 'plain', floorKind: 'bricks' });
    table(kit, ancestral, { x: 0, z: -3.6, w: 3.4, d: 0.9, h: 1 });
    censer(kit, ancestral, 0, 1.0, -3.6, 1.3);
    smoke(kit, ancestral, 0, 1.4, -3.6, { h: 2.4, count: 160, size: 0.12 });
    const candles = [-1.2, 1.2].map(x => candle(kit, ancestral, x, 1.0, -3.6, 1.4));
    for (const x of [-4.2, 0, 4.2]) hangingScroll(kit, ancestral, { x, y: 3.1, z: -4.88, w: 1.2, h: 2.6, kind: 'blank' });
    const board = plaque(kit, ancestral, 3.2, 0.9, 0, 4.4, -4.85);
    writing(kit, board, ['世', '德', '堂'], { size: 0.5, gap: 1.1, margin: 0.2, z: 0.07 });
    // Grandfather and father rise as pale presences behind the altar; Shixie stands before it.
    const grandfather = figure(kit, ancestral, { ...CAST.elder, headwear: 'official', robe: 0x6e675f, jacket: 0x3f3a35, height: 1.8 }, -2.6, -2.6);
    const father = figure(kit, ancestral, { ...CAST.shixie, beard: 'full', white: true, height: 1.8 }, 2.6, -2.6);
    const shixie = figure(kit, ancestral, CAST.shixie, 0, -0.8);
    lights(kit, ancestral, { key: [4, 9, 6], intensity: 0.9, fill: 0.3 });
    const shot2 = move(kit, ancestral, [
      [at(1), [-6, 2.2, 3.5], [-2.6, 1.6, -2.6]],
      [at(1) + 3, [-2, 2.0, 3.8], [0, 1.9, -3]],
      [at(1) + 6, [2.6, 1.9, 3.2], [2.6, 1.7, -2.6]],
      [at(2) - 0.1, [0.4, 1.65, 2.2], [0, 1.6, -0.8]],
    ]);

    // --- Shot 3: Lady Yan's dream of jade ------------------------------------------------------
    floor(kit, dream, 30, 30, { kind: 'bricks', shade: 0xcfc8bc });
    bed(kit, dream, { x: 0, z: 0 });
    const lady = figure(kit, dream, CAST.ladyYan);
    // Laid on the bed, head to the left.
    lady.root.position.set(-0.9, 0.8, -0.1); lady.shadow.visible = false; lady.root.rotation.set(-Math.PI / 2, 0, -Math.PI / 2, 'YXZ');
    lady.pose({ ...G.rest(), pitch: 0.2 });
    const clouds = [
      cloudBank(kit, dream, 0, 0.3, -4, { w: 18, puffs: 22, rand, size: 0.7 }),
      cloudBank(kit, dream, -5, 1.2, 1, { w: 6, puffs: 10, rand, size: 0.5 }),
      cloudBank(kit, dream, 6, 1.0, 0, { w: 6, puffs: 10, rand, size: 0.5 }),
      cloudBank(kit, dream, -1.9, 6.8, 1.3, { w: 2.4, puffs: 9, rand, size: 0.32 }),
    ];
    const immortal = figure(kit, clouds[3], CAST.deity, 0, 0.4);
    immortal.root.position.y = 0.5; immortal.shadow.visible = false;
    const jade = kit.group(dream, 0, 0, 0);
    kit.mesh(new THREE.TorusGeometry(0.16, 0.07, 16, 40), flat(0xf4f0e8), jade);
    kit.mesh(new THREE.TorusGeometry(0.235, 0.008, 6, 40), tone(0x6e675f), jade);
    const dreamMist = mist(kit, dream, { count: 10, w: 30, y: 0.3, d: 14, size: 5, opacity: 0.35, drift: 0.4 });
    lights(kit, dream, { key: [-4, 10, 6], intensity: 0.8, fill: 0.3 });
    const dreamCamera = move(kit, dream, [
      [at(2), [1.9, 1.3, 1.5], [0.6, 0.85, -0.1]],
      [at(2) + 3, [3.6, 1.9, 4.6], [0, 2.4, 0.5]],
      [at(2) + 6, [2.9, 2.4, 5.6], [-0.8, 2.2, 1.0]],
      [at(3) - 0.1, [2.6, 2.1, 4.4], [-0.4, 1.6, 0.4]],
    ]);

    // --- Shot 4: the jade-like son among his books ----------------------------------------------
    room(kit, study, { w: 12, d: 9, h: 4.2, back: 'moon', beams: true });
    const grove = [bamboo(kit, study, -4, -8, { h: 8, count: 9, rand }), bamboo(kit, study, 2, -9, { h: 9, count: 8, rand })];
    table(kit, study, { x: 0, z: -1, w: 1.8, d: 0.9 });
    studySet(kit, study, 0.82, { x: 0.3, z: -1.05 });
    chair(kit, study, { x: 0, z: -1.9 });
    const ziyu = figure(kit, study, CAST.ziyu, 0, -1.75);
    const reading = book(kit, ziyu.hands.r, { x: 0.05, y: -0.06, z: 0.02, w: 0.18, d: 0.24 });
    reading.group.rotation.set(0.3, 0, -1.2);
    const mother = figure(kit, study, CAST.ladyYan, -1.6, -0.6);
    mother.root.rotation.y = 0.9;
    // Towers of books, ten thousand volumes, rising round the desk.
    const volumes = new THREE.InstancedMesh(new THREE.BoxGeometry(0.28, 0.035, 0.2), tone(0x8c857c), 900);
    const m = new THREE.Matrix4();
    let n = 0;
    for (const [bx, bz, hh] of [[-3.6, -2.8, 70], [-2.8, -3.4, 55], [3.2, -2.9, 80], [3.9, -2.1, 60], [2.5, -3.6, 45], [-4.2, -1.4, 50], [4.4, -0.9, 40], [-3.3, 0.4, 30]]) {
      for (let k = 0; k < hh && n < 900; k++) { m.makeRotationY((rand() - 0.5) * 0.3).setPosition(bx + (rand() - 0.5) * 0.04, 0.02 + k * 0.036, bz + (rand() - 0.5) * 0.04); volumes.setMatrixAt(n, m); volumes.setColorAt(n, new THREE.Color(rand() < 0.5 ? 0x8c857c : 0x6e675f)); n++; }
    }
    volumes.count = n; study.add(volumes);
    const studyLamp = lamp(kit, study, { x: 1.2, z: -1.4, y: 0.82, h: 0.5, power: 2.4 });
    cloudBank(kit, study, 0, 13, -4, { w: 26, puffs: 22, rand });
    // The moon, left as bare paper inside a ring of wash (烘云托月).
    kit.mesh(new THREE.CircleGeometry(5.5, 48), flat(0xc9c2b7, { fog: false }), study, -5, 26, -40);
    kit.mesh(new THREE.CircleGeometry(3, 48), flat(0xfaf8f2, { fog: false }), study, -5, 26, -39.9);
    cloudBank(kit, study, -8, 16, -12, { w: 20, puffs: 16, rand });
    lights(kit, study, { key: [5, 12, 8], intensity: 0.8 });
    const shot4 = move(kit, study, [
      [at(3), [2.6, 1.5, 1.6], [0, 1.2, -1.6]],
      [at(3) + 4, [-1.2, 1.7, 2.0], [-0.6, 1.3, -1.2]],
      [at(3) + 7.4, [0.2, 3.2, 4.2], [0, 1.2, -1.5]],
      [36, [0, 14.5, 9], [-2, 19, -20]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      kit.setEnv(ENV[shot]);
      if (shot === 0) {
        shot1(seconds);
        nameless.open(span(seconds, 4.8, 6.6));
        readingLamp.update(seconds);
      } else if (shot === 1) {
        shot2(seconds);
        const t = seconds - at(1);
        grandfather.fade(0.15 + 0.35 * span(t, 0.2, 2.2));
        father.fade(0.15 + 0.35 * span(t, 2.6, 4.6));
        grandfather.pose(G.folded(t)); father.pose(G.stroke(t));
        shixie.pose(cue(t, [[0, G.folded], [6, (tt: number) => ({ ...G.folded(tt), pitch: -0.05 })]]));
        candles.forEach(c => c.update(seconds));
      } else if (shot === 2) {
        const t = seconds - at(2);
        const u = span(t, 2.5, 6);
        // The chamber sinks into cloud as the immortal comes down.
        clouds[0].position.y = -2 + u * 2.3;
        clouds[1].position.y = -1 + u * 2.2; clouds[2].position.y = -1 + u * 2;
        clouds[3].position.y = 9 - span(t, 1, 6) * 7.6;
        immortal.pose(cue(t, [[0, G.folded], [4.5, G.offer]]));
        immortal.head.rotation.x = 0.4;
        dreamMist.update(seconds);
        // The jade leaves the immortal's hands and settles into Lady Yan's.
        const drop = span(t, 6, 8.4);
        const hand = new THREE.Vector3(); immortal.hands.r.getWorldPosition(hand); dream.worldToLocal(hand);
        jade.position.lerpVectors(hand, new THREE.Vector3(0.1, 1.05, 0.05), drop);
        jade.rotation.set(Math.PI / 2 * (1 - drop) + t * 0.4, t * 0.6, 0);
        lady.pose({ ...G.rest(), pitch: 0.2, r: { lift: 0.4 + drop * 0.8, out: 0.1, bend: 0.8 } });
        dreamCamera(seconds);
      } else {
        shot4(seconds);
        const t = seconds - at(3);
        ziyu.pose({ ...G.read(t), sit: 1 });
        mother.pose(cue(t, [[0, G.folded], [4, G.speak]]));
        grove.forEach(b => b.update(seconds));
        studyLamp.update(seconds);
      }
    };
  },
});
