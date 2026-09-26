import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone } from '../../../stage/figure';
import { column, DARK, floor, WOOD } from '../../../stage/architecture';
import { study } from '../../../stage/locations';
import { table } from '../../../stage/props';
import { album, hold } from '../../../stage/performance';
import { petals } from '../../../stage/fx';
import { DUSK, lights, move, scroll, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 17: the quatrains for Huifang. In a great hall of red columns he sings, and
 * rings of ink wind round the rafters as the camera climbs to them (绕梁); blossoms tumble from above,
 * the flute players at the side lower their pipes, and a swirl of crimson petals scatters on the
 * wind, while the poem is written down a long scroll hanging from the beams. Then, by lamplight,
 * Ziyu's hand turns the album to the third entry.
 */

const POEM = ['风流林下久传扬', '苏小生来独擅长', '一曲清歌绕梁韵', '天花乱落舞衣香', '箫管当场犹自羞', '暂将仙骨换娇柔', '一团绛雪随风散', '散作千秋儿女愁'];

export default defineScene({
  seed: 1017,
  build: (kit, story) => {
    const { groups: [hallSet, desk], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: the song that winds round the rafters -------------------------------------------
    floor(kit, hallSet, 40, 40, { kind: 'boards', shade: 0xd6d0c6 });
    for (let r = 0; r < 4; r++) for (const x of [-5, 5]) column(kit, hallSet, x, -9 + r * 4, 8, 0.28, 0x6e675f);
    for (let r = 0; r < 4; r++) kit.box(hallSet, tone(WOOD), [0, 8, -9 + r * 4], [11, 0.5, 0.4]);
    for (const x of [-5, 0, 5]) kit.box(hallSet, tone(DARK), [x, 8.5, -3], [0.4, 0.4, 14]);
    // Rings of song: thin ink loops circling the beams, drawn on as the notes rise.
    const rings = Array.from({ length: 5 }, (_, k) => {
      const ring = kit.mesh(new THREE.TorusGeometry(2 + k * 0.7, 0.02, 4, 80, Math.PI * 2), tone(0x3f3a35), hallSet, 0, 6.5 + k * 0.35, -3);
      ring.rotation.x = Math.PI / 2 + Math.sin(k) * 0.2;
      return ring;
    });
    const hf = figure(kit, hallSet, ACTORS.huifang.costume, 0, -2);
    hold(kit, hf, 'fan');
    const pipers = [-3.6, -2.6].map((x, i) => { const f = figure(kit, hallSet, { ...CAST.servant, cut: 'robe', robe: 0x8c857c }, x, -5 + i * 0.8); hold(kit, f, 'flute'); f.pose({ ...G.rest(), sit: 1 }); return f; });
    const verse = scroll(kit, hallSet, POEM, { size: 0.36, x: 3.2, y: 4.6, z: -4 });
    for (const side of [-1, 1]) kit.box(hallSet, tone(DARK), [3.2 + side * verse.width * 0.45, 7.3, -4], [0.012, 1.6, 0.012]);
    const blossom = petals(kit, hallSet, { count: 140, w: 10, h: 8, d: 8, red: true, z: -2, speed: 0.6 });
    const whirl = petals(kit, hallSet, { count: 90, w: 3, h: 3, d: 3, red: true, z: -2, y: 0.5, speed: 1.4, wind: 3 });
    lights(kit, hallSet, { key: [6, 12, 8], intensity: 1 });
    const cam1 = move(kit, hallSet, [
      [0, [0, 1.4, 9], [0, 1.8, -2]],
      [7, [-2, 3.6, 5], [0, 6.6, -3]],
      [13, [0.5, 8.4, 2.5], [0, 7.2, -4]],
      [19, [4, 3, 3.5], [1.6, 3.2, -3]],
      [25, [-1.5, 1.8, 3], [0.2, 1.6, -2]],
      [30, [2.2, 3.4, 5.6], [2.4, 3.8, -4]],
    ]);

    // --- Shot 2: the third entry --------------------------------------------------------------------
    study(kit, desk, { night: true });
    table(kit, desk, { x: 0, z: 0.6, w: 1.2, d: 0.7, h: 0.78 });
    const book = album(kit, desk, { y: 0.79, z: 0.6 });
    const reader = figure(kit, desk, CAST.ziyu, 0.1, -0.1);
    lights(kit, desk, { key: [-3, 6, 4], intensity: 0.5, fill: 0.15 });
    const cam2 = move(kit, desk, [
      [at(1), [0.05, 1.9, 0.9], [0, 0.79, 0.6]],
      [36, [0.9, 1.5, 1.7], [0.1, 1.45, -0.1]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam1(seconds);
        verse.set((seconds - 0.4) / 27.6);
        rings.forEach((r, k) => { r.scale.setScalar(Math.max(0.01, span(seconds, 6 + k * 0.8, 9 + k * 0.8))); r.rotation.z = seconds * (0.2 + k * 0.05); });
        blossom.update(seconds); blossom.mesh.visible = seconds > 10;
        whirl.update(seconds); whirl.mesh.visible = seconds > 21;
        face(hf, 0, 9);
        hf.pose(cue(seconds, [[0, t => ({ ...G.speak(t, 'l'), pitch: -0.2 })], [9, t => G.dance(t)], [17, G.pose], [21, t => G.dance(t, 2)], [26, G.weep]]));
        pipers.forEach((p, i) => { face(p, 0, -2); p.pose(cue(seconds, [[0, t => ({ ...G.drink(t), sit: 1, pitch: 0 })], [16, t => ({ ...G.shy(t), sit: 1, yaw: 0.2 * i })]])); });
      } else {
        kit.setEnv(DUSK(0.03));
        cam2(seconds);
        const t = seconds - at(1);
        book.turn(span(t, 1, 3));
        face(reader, 0, 1);
        reader.pose({ ...G.read(t), r: { lift: 1.0 + span(t, 1, 3) * 0.3, out: 0.1 + span(t, 1, 3) * 0.3, bend: 0.9 } });
      }
    };
  },
});
