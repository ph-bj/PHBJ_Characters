import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, tone, VERMILION } from '../../../stage/figure';
import { column, floor, room, DARK } from '../../../stage/architecture';
import { bookshelf, chair, table, writing } from '../../../stage/props';
import { lanternRow } from '../../../stage/locations';
import { hold, moon, placard, palaceHall } from '../../../stage/performance';
import { petals } from '../../../stage/fx';
import { blendEnv, DUSK, lights, move, sets, span } from '../../../stage/direct';
import { plumTree } from '../../../stage/nature';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 19: Lu Sulan. Looking straight down on a long table as he writes one great
 * character, then down among the scholar-officials who crowd in to snatch the sheets. On a Tang
 * palace terrace he dances Yang Guifei on a raised round tray before an emperor, the placards of his
 * four scenes hanging from the eaves. Last, in a moonlit court, he holds a white jade tablet while
 * lengths of undyed silk stir on a line behind him.
 */

const A = ACTORS.sulan;

export default defineScene({
  seed: 1019,
  build: (kit, story) => {
    const { groups: [studio, palace, court], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: his calligraphy, treasured like jade ------------------------------------------
    room(kit, studio, { w: 12, d: 9, h: 4, back: 'doors', floorKind: 'boards' });
    bookshelf(kit, studio, { x: -4.6, z: -3.8, w: 2.2, h: 2.6, rand });
    table(kit, studio, { x: 0, z: -0.5, w: 3.2, d: 1.4, h: 0.8 });
    kit.mesh(new THREE.PlaneGeometry(2.4, 1.1).rotateX(-Math.PI / 2), tone(0xf4f0e8), studio, 0, 0.81, -0.5);
    const big = writing(kit, studio, '兰', { size: 0.8, margin: 0.1 });
    big.mesh.rotation.x = -Math.PI / 2; big.mesh.position.set(0, 0.815, -0.5);
    const sheets = Array.from({ length: 5 }, (_, k) => {
      const sh = kit.group(studio, -1.5 + k * 0.7, 0.82, 0.3);
      kit.mesh(new THREE.PlaneGeometry(0.4, 0.55).rotateX(-Math.PI / 2), tone(0xf4f0e8, true), sh);
      const w = writing(kit, sh, ['玉骨', '冰肌'][k % 2], { size: 0.12, margin: 0.1 });
      w.mesh.rotation.x = -Math.PI / 2; w.mesh.position.y = 0.003;
      return sh;
    });
    const sl = figure(kit, studio, A.plain, 0, -1.6);
    hold(kit, sl, 'brush');
    const officials = [-2.4, -1.2, 1.3, 2.5].map((x, i) => figure(kit, studio, { ...CAST.official, beard: i % 2 ? 'goatee' : 'full', robe: [0x3f3a35, 0x5a534c, 0x4a443e, 0x6e675f][i] }, x, 1.4 + (i % 2) * 0.4));
    lights(kit, studio, { key: [4, 9, 6], intensity: 1 });
    const cam1 = move(kit, studio, [
      [0, [0, 5, -0.4], [0, 0.8, -0.5]],
      [5, [0.4, 3.2, 2.2], [0, 0.9, -0.3]],
      [12, [3.2, 1.6, 3.2], [0, 1.2, 0.2]],
    ]);

    // --- Shot 2: another Yang Guifei ---------------------------------------------------------------
    floor(kit, palace, 60, 60, { kind: 'bricks', shade: 0xd6d0c6 });
    palaceHall(kit, palace, 0, -14, 16);
    for (const x of [-8, -4, 4, 8]) column(kit, palace, x, -3, 5, 0.25, VERMILION);
    const tray = kit.group(palace, 0, 0, -4);
    kit.mesh(new THREE.CylinderGeometry(0.4, 0.8, 1.4, 24), tone(DARK), tray, 0, 0.7, 0);
    kit.mesh(new THREE.CylinderGeometry(1.6, 1.4, 0.2, 48), tone(0xb9b2a8), tray, 0, 1.5, 0);
    kit.mesh(new THREE.TorusGeometry(1.6, 0.06, 8, 48).rotateX(Math.PI / 2), tone(0x6e675f), tray, 0, 1.6, 0);
    const guifei = figure(kit, tray, A.costume, 0, 0);
    guifei.root.position.y = 1.6;
    hold(kit, guifei, 'fan');
    chair(kit, palace, { x: 5.5, z: 1, rot: -2.3 });
    const emperor = figure(kit, palace, { ...CAST.deity, headwear: 'crown', robe: 0x6e675f, jacket: 0x3f3a35, beard: 'full', white: false }, 5.5, 1);
    emperor.root.rotation.y = -2.3;
    const boards = ['制谱', '舞盘', '小宴', '絮阁'].map((p, i) => placard(kit, palace, p, { x: -6 + i * 1.2, y: 9, z: -3.1, size: 0.34 }));
    const swayLanterns = lanternRow(kit, palace, [-9, 4.6, -3], [9, 4.6, -3], 7);
    const drift = petals(kit, palace, { count: 90, w: 14, h: 7, d: 10, red: true, z: -4 });
    lights(kit, palace, { key: [-6, 12, 8], intensity: 1 });
    const cam2 = move(kit, palace, [
      [at(1), [0, 1.2, 10], [0, 2.6, -4]],
      [at(1) + 5, [-4.5, 2.4, 3], [0, 2.8, -4]],
      [at(1) + 10, [3.8, 3.8, 0.5], [0, 2.6, -4]],
      [at(2), [6.4, 2.2, 2.6], [0, 2.8, -4]],
    ]);

    // --- Shot 3: white jade, undyed silk ---------------------------------------------------------
    floor(kit, court, 40, 40, { kind: 'bricks', shade: 0xe6e0d6 });
    moon(kit, court, -4, 12, -40, 6);
    for (let k = 0; k < 3; k++) plumTree(kit, court, -6 + k * 6, -8, { h: 4, rand, blossoms: 80, red: false });
    kit.box(court, tone(DARK), [-3, 1.2, -3], [0.08, 2.4, 0.08]);
    kit.box(court, tone(DARK), [3, 1.2, -3], [0.08, 2.4, 0.08]);
    kit.box(court, tone(DARK), [0, 2.35, -3], [6.2, 0.04, 0.04]);
    const silks = Array.from({ length: 5 }, (_, k) => {
      const g = kit.group(court, -2.4 + k * 1.2, 2.33, -3);
      kit.mesh(new THREE.PlaneGeometry(0.8, 1.8, 1, 8).translate(0, -0.9, 0), flat(0xfaf8f2, { side: THREE.DoubleSide }), g);
      return g;
    });
    const pure = figure(kit, court, A.plain, 0, -0.6);
    hold(kit, pure, 'gui');
    lights(kit, court, { key: [-4, 8, -10], intensity: 0.8, fill: 0.5 });
    const cam3 = move(kit, court, [
      [at(2), [2.8, 1.2, 4.2], [0, 1.5, -1]],
      [36, [0.4, 1.55, 2.2], [0, 1.6, -0.6]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.025));
        cam1(seconds);
        big.set(span(seconds, 0.5, 4));
        face(sl, 0, -0.5);
        sl.pose(cue(seconds, [[0, G.write], [5, G.folded], [8, G.laugh]]));
        officials.forEach((o, i) => {
          face(o, 0, -0.5);
          o.pose(cue(seconds, [[0, G.folded], [4.6 + i * 0.3, G.point], [7 + i * 0.2, t => ({ ...G.offer(t), bow: 0.4 })]]));
        });
        sheets.forEach((sh, i) => { const grab = span(seconds, 7 + i * 0.4, 8 + i * 0.4); sh.position.y = 0.82 + grab * 0.6; sh.position.z = 0.3 + grab * 1.1; sh.rotation.x = -grab * 1.2; });
      } else if (shot === 1) {
        kit.setEnv(blendEnv(INK_SKY.moonlit([0.2, 0.3, -1], 0.02), DUSK(0.02), 0.2));
        const t = seconds - at(1);
        cam2(seconds);
        drift.update(seconds); swayLanterns(seconds);
        guifei.root.rotation.y = t * 0.8;
        guifei.pose(G.dance(t, 1));
        emperor.pose({ ...G.stroke(t), sit: 1 });
        boards.forEach((b, i) => { b.position.y = 9 - span(t, 1 + i * 2, 1.8 + i * 2) * 4.4; });
      } else {
        kit.setEnv(INK_SKY.moonlit([-0.1, 0.3, -1], 0.03));
        const t = seconds - at(2);
        cam3(seconds);
        silks.forEach((g, k) => { g.rotation.x = Math.sin(t * 1.3 + k) * 0.18; g.rotation.y = Math.sin(t * 0.7 + k * 2) * 0.1; });
        face(pure, 0, 5);
        pure.pose({ ...G.offer(t), bow: 0.05, pitch: -0.1, r: { lift: 1.25, out: 0.1, bend: 1.1 }, l: { lift: 0.9, out: 0.1, bend: 1.4, twist: -0.4 } });
      }
    };
  },
});
