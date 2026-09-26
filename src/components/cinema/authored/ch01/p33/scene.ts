import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY, petalGeometry } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, tone } from '../../../stage/figure';
import { cityGate, DARK, WOOD } from '../../../stage/architecture';
import { ground, range, water } from '../../../stage/nature';
import { theatre } from '../../../stage/locations';
import { hold, placard } from '../../../stage/performance';
import { mist } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 33: Lin Chunxi, "a flower still in its calyx, a pearl just born". A great
 * lotus bud on dark water parts its sepals around a pearl, and the pearl becomes the boy, half in a
 * scholar-role's robe and half in a dan's. On the stage he plays Breaking the Loom before a loom,
 * cutting the cloth as a mother would, while the placards of his four plays drop in. Then the camera
 * soars over city walls toward a disc of white jade hanging in the sky: worth many cities.
 */

const A = ACTORS.chunxi;

export default defineScene({
  seed: 1033,
  build: (kit, story) => {
    const { groups: [bud, house, cities], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: a flower still in its calyx -------------------------------------------------------
    water(kit, bud, { w: 100, d: 100, z: -20, shade: 0x8c857c, line: 0x4a443e });
    const calyx = kit.group(bud, 0, 0.1, 0);
    const sepal = petalGeometry(1.1, 2.4, 0x2f2a26, 0x6e675f);
    const sepals = Array.from({ length: 6 }, (_, k) => { const s = kit.mesh(sepal, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }), calyx); s.rotation.set(0, k / 6 * Math.PI * 2, 0, 'YXZ'); return s; });
    const pearl = kit.mesh(new THREE.SphereGeometry(0.4, 32, 24), flat(0xfbf9f4), bud, 0, 1.1, 0);
    const scholarHalf = figure(kit, bud, { ...CAST.ziyu, height: 1.5 }, -0.2, 0);
    const danHalf = figure(kit, bud, A.costume, 0.2, 0);
    for (const f of [scholarHalf, danHalf]) f.shadow.visible = false;
    const cloud = mist(kit, bud, { count: 8, w: 40, y: -1, d: 20, z: -8, size: 10, opacity: 0.6 });
    lights(kit, bud, { key: [-3, 8, 6], intensity: 1 });
    const cam1 = move(kit, bud, [
      [0, [0, 3.4, 5], [0, 0.8, 0]],
      [6, [1.5, 1.4, 3.6], [0, 1.2, 0]],
      [12, [-2.5, 1.5, 4], [0, 1.2, 0]],
    ]);

    // --- Shot 2: his plays: Breaking the Loom -------------------------------------------------------
    const t2 = theatre(kit, house);
    const loom = kit.group(house, 1.2, 1.2, -8.6);
    loom.rotation.y = -0.4;
    for (const [x, z] of [[-0.5, -0.4], [0.5, -0.4], [-0.5, 0.4], [0.5, 0.4]]) kit.box(loom, tone(WOOD), [x, 0.7, z], [0.06, 1.4, 0.06]);
    kit.box(loom, tone(DARK), [0, 1.4, 0], [1.1, 0.06, 0.9]);
    const cloth = kit.mesh(new THREE.PlaneGeometry(0.8, 1).rotateX(-0.6), tone(0xf0ebe2, true), loom, 0, 0.9, 0);
    const cut = kit.mesh(new THREE.PlaneGeometry(0.8, 0.5), tone(0xf0ebe2, true), loom, 0, 0.5, 0.5);
    const mother = figure(kit, house, { ...A.costume, headwear: 'lady', robe: 0xb9b2a8, jacket: 0x6e675f }, 0.4, -8.2);
    mother.root.position.y = 1.2;
    const son = figure(kit, house, { ...CAST.ziyu, height: 1.35 }, -1, -7.6);
    son.root.position.y = 1.2;
    const blade = hold(kit, mother, 'sword');
    blade.scale.setScalar(0.35);
    const boards = ['寄子', '回猎', '断机', '冥勘'].map((p, i) => placard(kit, house, p, { x: [-3.4, -2.6, 2.6, 3.4][i], y: 9, z: -5.2 + (i % 2) * 0.3, size: 0.3 }));
    lights(kit, house, { key: [2, 12, 6], intensity: 0.9 });
    const cam2 = move(kit, house, [
      [at(1), [0, 2, 9], [0, 2.4, -7]],
      [at(1) + 8, [-3, 2.4, -3.4], [0.4, 2.1, -8.2]],
      [at(2), [2.2, 2.2, -4.2], [-0.4, 2, -8]],
    ]);

    // --- Shot 3: worth many cities -------------------------------------------------------------
    ground(kit, cities, { w: 800, d: 800, height: 4, flatten: 30, shade: 0xd6d0c6, seed: 13 });
    for (let k = 0; k < 5; k++) { const g = kit.group(cities, (k - 2) * 60, 0, -40 - (k % 2) * 40); cityGate(kit, g, { w: 50, h: 8 }); }
    range(kit, cities, { z: -260, span: 900, height: 60, shade: 0xc9c2b7, seed: 131 });
    const bi = kit.group(cities, 0, 30, -60);
    kit.mesh(new THREE.TorusGeometry(6, 3.2, 24, 64), new THREE.MeshLambertMaterial({ color: 0xf4f0e8 }), bi);
    const boyOnWall = figure(kit, cities, A.costume, 0, -36);
    boyOnWall.root.position.y = 8;
    hold(kit, boyOnWall, 'censer');
    lights(kit, cities, { key: [0, 40, 40], intensity: 1 });
    const cam3 = move(kit, cities, [
      [at(2), [0, 9.6, -32], [0, 9.4, -36]],
      [36, [10, 24, 30], [0, 22, -60]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.moonlit([0.3, 0.3, -1], 0.03));
        cam1(seconds);
        cloud.update(seconds);
        const open = span(seconds, 0.8, 4.5);
        sepals.forEach(s => { s.rotation.x = -0.12 - open * 1.1; });
        pearl.scale.setScalar(Math.max(0.01, 1 - span(seconds, 5, 6.5)));
        pearl.position.y = 1.1 + Math.sin(seconds * 2) * 0.05;
        const born = span(seconds, 5.5, 7);
        for (const f of [scholarHalf, danHalf]) { f.root.position.y = 0.2; f.fade(born); f.root.visible = born > 0.01; }
        face(scholarHalf, -2, 4); face(danHalf, 2, 4);
        scholarHalf.pose(cue(seconds, [[5, G.folded], [8, G.salute]]));
        danHalf.pose(cue(seconds, [[5, G.shy], [8, G.pose]]));
      } else if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.025));
        const t = seconds - at(1);
        cam2(seconds);
        t2.update(seconds);
        face(mother, 1.2, -8.6);
        mother.pose(cue(t, [[0, G.weep], [5, t2_ => ({ ...G.point(t2_), bow: 0.3 })], [8, G.fume], [12, G.speak]]));
        blade.visible = t > 4.5 && t < 8;
        cut.visible = t > 7;
        cut.position.y = 0.5 - span(t, 7, 8) * 0.45;
        cloth.visible = true;
        face(son, 0.4, -8.2);
        son.pose(cue(t, [[0, G.folded], [8, tt => G.kneel(tt)], [11, G.kowtow]]));
        boards.forEach((b, i) => { b.position.y = 9 - span(t, 1 + i * 2.8, 1.8 + i * 2.8) * 4.6; });
      } else {
        kit.setEnv(INK_SKY.paper(0.004));
        const t = seconds - at(2);
        cam3(seconds);
        bi.rotation.y = t * 0.3;
        face(boyOnWall, 0, 20);
        boyOnWall.pose(G.offer(t));
      }
    };
  },
});
