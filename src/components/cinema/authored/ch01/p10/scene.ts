import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, tone, VERMILION, walkAlong } from '../../../stage/figure';
import { floor, plaque, room, shopRow, DARK } from '../../../stage/architecture';
import { bookshelf, candle, coins, ingots, jar, lamp, table, writing } from '../../../stage/props';
import { ground } from '../../../stage/nature';
import { smoke, specks } from '../../../stage/fx';
import { lanternRow } from '../../../stage/locations';
import { lights, move, sets } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 10: Nanxiang's three kinds of men, each in his own world. A yamen hall seen
 * from the floor: the official enthroned high behind his desk, clerks bowing below, everything
 * towering (dreadful). A cramped garret where a sour pedant paces in circles, hunched and groaning
 * over a phrase, the camera circling with him (laughable). A market lane where a fat dealer weighs
 * silver and haggles, coins spilling, the camera shoved close (detestable).
 */

export default defineScene({
  seed: 1010,
  build: (kit, story) => {
    const { groups: [yamen, garret, market], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: the official ---------------------------------------------------------------------
    room(kit, yamen, { w: 16, d: 14, h: 7, back: 'plain' });
    // A dais with a high desk draped in cloth, a screen of waves and a rising sun behind.
    kit.box(yamen, tone(0x6e675f), [0, 0.4, -4.5], [8, 0.8, 4]);
    table(kit, yamen, { x: 0, z: -4.2, w: 2.6, d: 1.1, h: 1.1 }).position.y = 0.8;
    kit.box(yamen, flat(VERMILION), [0, 1.4, -3.62], [2.6, 0.55, 0.02]);
    kit.box(yamen, tone(DARK), [0, 3.2, -6.4], [6, 4.4, 0.2]);
    kit.mesh(new THREE.CircleGeometry(0.8, 32), flat(VERMILION), yamen, 1.6, 4.2, -6.28);
    for (let k = 0; k < 6; k++) kit.box(yamen, tone(0x8c857c), [0, 1.3 + k * 0.28, -6.28], [5.6, 0.04, 0.02]);
    const board = plaque(kit, yamen, 3.6, 1, 0, 6, -6.8);
    writing(kit, board, ['明', '镜', '高', '悬'], { size: 0.52, gap: 1.12, margin: 0.2, z: 0.07 });
    const official = figure(kit, yamen, CAST.official, 0, -4.8);
    official.root.position.y = 0.8;
    const clerks = [-3.2, -1.8, 1.8, 3.2].map((x, i) => figure(kit, yamen, { ...CAST.servant, cut: 'robe', robe: 0x6e675f }, x, -0.6 - (i % 2) * 0.8));
    const runners = [-5.5, 5.5].map(x => figure(kit, yamen, { ...CAST.escort, headwear: 'official' }, x, 1.8));
    kit.box(yamen, tone(DARK), [-6.2, 1.5, 1.8], [0.08, 3, 0.08]);
    kit.box(yamen, tone(DARK), [6.2, 1.5, 1.8], [0.08, 3, 0.08]);
    lights(kit, yamen, { key: [2, 12, 8], intensity: 0.9, fill: 0.2 });
    const cam1 = move(kit, yamen, [
      [0, [0, 0.35, 7], [0, 2.6, -4]],
      [6, [-2.2, 0.5, 3], [0, 2.8, -4.8]],
      [12, [0.6, 0.9, -1.2], [0, 2.4, -4.8]],
    ]);

    // --- Shot 2: the pedant -------------------------------------------------------------------------
    room(kit, garret, { w: 6, d: 5, h: 2.6, back: 'lattice', floorKind: 'boards' });
    bookshelf(kit, garret, { x: -2.2, z: -2.2, w: 1.4, h: 2.2, rand });
    table(kit, garret, { x: 1.4, z: -1.6, w: 1.1, d: 0.6 });
    const oil = lamp(kit, garret, { x: 1.6, z: -1.7, y: 0.82, h: 0.35, power: 2 });
    for (let k = 0; k < 14; k++) {
      // Crumpled drafts all over the floor.
      const ball = kit.mesh(new THREE.IcosahedronGeometry(0.07, 0), tone(0xf0ebe2), garret, (rand() - 0.5) * 4, 0.06, (rand() - 0.5) * 3);
      ball.rotation.set(rand() * 3, rand() * 3, 0);
    }
    const pedant = figure(kit, garret, CAST.pedant, 0, 0);
    lights(kit, garret, { key: [3, 6, 4], intensity: 0.8 });

    // --- Shot 3: the merchant -----------------------------------------------------------------------
    ground(kit, market, { w: 120, d: 120, height: 0.2, flatten: 30, shade: 0xd6d0c6 });
    floor(kit, market, 8, 60, { kind: 'flag', z: -10, y: 0.01 });
    const row1 = shopRow(kit, market, { x: -5.5, z: -6, count: 6, rand });
    row1.group.rotation.y = Math.PI / 2;
    const row2 = shopRow(kit, market, { x: 5.5, z: -10, count: 6, rand });
    row2.group.rotation.y = -Math.PI / 2;
    const updateLanterns = lanternRow(kit, market, [-3.5, 3.6, 4], [-3.5, 3.6, -20], 7);
    table(kit, market, { x: 0, z: 0, w: 1.6, d: 0.8 });
    ingots(kit, market, 0.3, 0.82, -0.1, 5);
    const steelyard = kit.group(market, -0.4, 1.7, 0.1);
    kit.box(steelyard, tone(DARK), [0, 0, 0], [0.9, 0.02, 0.02]);
    kit.mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.02, 16), tone(0x6e675f), steelyard, -0.35, -0.3, 0);
    kit.mesh(new THREE.SphereGeometry(0.04, 8, 6), tone(DARK), steelyard, 0.3, -0.1, 0);
    const spill = coins(kit, market, Array.from({ length: 24 }, () => [(rand() - 0.5) * 1.3, 0.83, (rand() - 0.5) * 0.6] as [number, number, number]));
    jar(kit, market, 1.6, 0, -0.6, 1.4);
    const dealer = figure(kit, market, CAST.merchant, 0, -1);
    const buyer = figure(kit, market, { ...CAST.servant, face: 'plain' }, 0.4, 1.1);
    const passers = [figure(kit, market, CAST.escort, -2, -8), figure(kit, market, CAST.servant, 2, -14)];
    const flies = specks(kit, market, { count: 60, w: 2, h: 1.4, d: 2, fall: 0, wind: 0.2, swirl: 0.6, size: 0.02, dark: true, y: 1.4 });
    smoke(kit, market, 2.6, 0.9, -1.4, { h: 2, count: 120, size: 0.14 });
    candle(kit, market, -0.7, 0.82, -0.2);
    lights(kit, market, { key: [6, 9, 8], intensity: 1 });
    const cam3 = move(kit, market, [
      [at(2), [2.6, 2.2, 5], [0, 1.4, -0.4]],
      [at(2) + 6, [1.2, 1.6, 2.4], [-0.2, 1.5, -0.6]],
      [36, [1.7, 1.55, 0.9], [-0.1, 1.5, -0.9]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.025));
        cam1(seconds);
        official.pose(cue(seconds, [[0, G.stroke], [5, tt => ({ ...G.point(tt), pitch: 0.2 })], [9, G.folded]]));
        clerks.forEach((c, i) => { face(c, 0, -4.8); c.pose(G.kowtow(seconds + i, 0.8 + (i % 2) * 0.2)); });
        runners.forEach(r => { face(r, 0, 0); r.pose(G.hold(seconds)); });
      } else if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.04));
        const t = seconds - at(1);
        oil.update(seconds);
        // He paces a tight circle, hunched and shrugging, muttering.
        const a = t * 0.9;
        pedant.root.position.set(Math.cos(a) * 1.1, 0, Math.sin(a) * 0.8);
        pedant.root.rotation.y = -a;
        pedant.pose({ bow: 0.35, pitch: 0.3 + Math.sin(t * 5) * 0.08, yaw: Math.sin(t * 3) * 0.4, walk: t * 5, stride: 0.5, l: { lift: 1.0, out: 0.6 + Math.abs(Math.sin(t * 4)) * 0.4, bend: 1.9 }, r: { lift: 0.9 + Math.sin(t * 2) * 0.4, out: 0.2, bend: 1.8 }, mouth: 0.5 + 0.5 * Math.sin(t * 9), lean: Math.sin(t * 4) * 0.12 });
        const ca = a + Math.PI * 0.35;
        const r = kit.portrait() ? 5 : 3.6;
        kit.camera.position.set(garret.position.x + Math.cos(ca) * r, 1.3 + Math.sin(t) * 0.1, Math.sin(ca) * r * 0.7 + 0.6);
        kit.camera.lookAt(garret.position.x + pedant.root.position.x, 1.35, pedant.root.position.z);
      } else {
        kit.setEnv(INK_SKY.paper(0.02));
        const t = seconds - at(2);
        cam3(seconds);
        row1.update(seconds); row2.update(seconds); updateLanterns(seconds);
        face(dealer, 0.4, 1.1); face(buyer, 0, -1);
        dealer.pose(cue(t, [[0, tt => ({ ...G.rest(tt), r: { lift: 1.3, out: 0.3, bend: 0.8 } })], [4, G.argue], [8, tt => ({ ...G.laugh(tt), r: { lift: 1.2, out: 0.4, bend: 1.2 } })]]));
        steelyard.rotation.z = Math.sin(t * 2.2) * 0.12;
        steelyard.visible = t < 4.2;
        buyer.pose(cue(t, [[0, G.fume], [5, G.point], [9, G.argue]]));
        spill.forEach((c, i) => { c.position.y = 0.83 + Math.max(0, Math.sin(t * 3 + i) * 0.04) * (t > 4 ? 1 : 0); });
        passers.forEach((p, i) => walkAlong(p, t, 0, 12, i ? [[2, -14], [2.6, 8]] : [[-2, -8], [-2.4, 10]], G.rest(t), 6));
        flies.uniforms.uSpeed.value = 1;
      }
    };
  },
});
