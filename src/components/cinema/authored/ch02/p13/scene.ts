import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone } from '../../../stage/figure';
import { canal } from '../../../stage/locations';
import { pavilion, room } from '../../../stage/architecture';
import { cloudBank, ground, peony, rock, willow } from '../../../stage/nature';
import { table } from '../../../stage/props';
import { hold, moon } from '../../../stage/performance';
import { mist, petals } from '../../../stage/fx';
import { DUSK, blendEnv, lights, move, sets, span } from '../../../stage/direct';
import { QINGUAN } from '../actors';

/*
 * Chapter 2, paragraph 13: Qinguan. At dusk on the canal he stands alone on the cabin roof of the
 * troupe's boat, far off, and the camera cannot get near: Pincai has no words for him. A painter sits
 * before a blank sheet with the boy posed before him; the brush lifts, hesitates, and never touches
 * the paper. Then the Peony Pavilion: in a garden of peonies, mist gathers over a grave mound and
 * Du Liniang rises from it with Qinguan's face; above, on a cloud, the fairy Du Lanxiang descends.
 */

export default defineScene({
  seed: 2013,
  build: (kit, story) => {
    const { groups: [river, studio, peonyGarden], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: beyond words -----------------------------------------------------------------------
    const c = canal(kit, river);
    const qin = figure(kit, c.troupe.deck, QINGUAN, 0, -0.8);
    qin.root.position.y = 2.1; qin.root.rotation.y = -Math.PI / 2;
    lights(kit, river, { key: [-12, 6, 8], intensity: 0.9 });
    const cam1 = move(kit, river, [[0, [-26, 3, 22], [0, 2.8, 0]], [12, [-16, 2.6, 13], [0, 3, 0]]]);

    // --- Shot 2: no painter could catch him -------------------------------------------------------
    room(kit, studio, { w: 10, d: 8, h: 3.6, back: 'moon', floorKind: 'boards' });
    table(kit, studio, { x: 1.2, z: 0, w: 1.6, d: 0.9 });
    kit.mesh(new THREE.PlaneGeometry(0.9, 1.2).rotateX(-Math.PI / 2), tone(0xf4f0e8), studio, 1.2, 0.83, 0);
    const painter = figure(kit, studio, { ...CAST.elder, headwear: 'scarf' }, 1.2, -0.8);
    const brush = hold(kit, painter, 'brush');
    const sitter = figure(kit, studio, QINGUAN, -1.6, 0.4);
    lights(kit, studio, { key: [-4, 8, 6], intensity: 1 });
    const cam2 = move(kit, studio, [
      [at(1), [3.4, 1.6, 2.6], [0, 1.3, 0]],
      [at(1) + 6, [1.4, 2.1, 0.6], [1.2, 0.8, 0]],
      [at(2), [-0.4, 1.6, 2.2], [-1.6, 1.5, 0.4]],
    ]);

    // --- Shot 3: Du Liniang returned ------------------------------------------------------------
    ground(kit, peonyGarden, { w: 200, d: 200, height: 1, flatten: 10, shade: 0xd9d3c9 });
    const blooms = Array.from({ length: 18 }, (_, k) => { const a = k / 18 * Math.PI * 2, r = 4 + (k % 3); const p = peony(kit, peonyGarden, Math.cos(a) * r, 0.7, Math.sin(a) * r - 1, { s: 2 }); kit.mesh(new THREE.SphereGeometry(0.5, 10, 8), tone(0x4a443e), peonyGarden, Math.cos(a) * r, 0.3, Math.sin(a) * r - 1).scale.y = 0.6; return p; });
    const mound = kit.mesh(new THREE.SphereGeometry(1.4, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), tone(0x8c857c), peonyGarden, 0, 0, -1);
    mound.scale.y = 0.45;
    willow(kit, peonyGarden, -6, -6, { h: 7, rand });
    pavilion(kit, peonyGarden, { x: 7, z: -8, r: 1.8, h: 2.4 });
    rock(kit, peonyGarden, -3.4, -4, { h: 1.8, rand });
    moon(kit, peonyGarden, 4, 12, -50, 5);
    const liniang = figure(kit, peonyGarden, { ...QINGUAN, headwear: 'dan', waterSleeves: true, fur: false, jacket: 0xe6e0d6, cut: 'skirt' }, 0, -1);
    liniang.shadow.visible = false;
    const cloud = cloudBank(kit, peonyGarden, 3, 9, -3, { w: 2.4, puffs: 8, rand, size: 0.35 });
    const lanxiang = figure(kit, cloud, { ...CAST.lady, headwear: 'crown', robe: 0xf4f0e8, jacket: 0xe6e0d6 }, 0, 0);
    lanxiang.root.position.y = 0.4; lanxiang.shadow.visible = false;
    const fog = mist(kit, peonyGarden, { count: 8, w: 8, y: 0.2, d: 6, z: -1, size: 4, opacity: 0.7, drift: 0.2 });
    const fall = petals(kit, peonyGarden, { count: 60, w: 10, h: 6, d: 8, z: -1 });
    lights(kit, peonyGarden, { key: [-6, 10, 6], intensity: 0.9 });
    const cam3 = move(kit, peonyGarden, [
      [at(2), [0, 1, 7], [0, 1, -1]],
      [at(2) + 5, [2.4, 1.8, 4.2], [0, 1.6, -1]],
      [36, [3, 4.4, 5], [1.6, 4.6, -2]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(blendEnv(INK_SKY.paper(0.03), DUSK(0.03), 0.5));
        cam1(seconds);
        c.update(seconds);
        qin.pose({ ...G.folded(seconds), pitch: -0.1 });
      } else if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.03));
        const t = seconds - at(1);
        cam2(seconds);
        face(painter, 1.2, 0); face(sitter, 1.2, 0);
        painter.pose(cue(t, [[0, t2 => ({ ...G.rest(t2), r: { lift: 1.2, out: 0.3, bend: 1.0 }, pitch: -0.2, yaw: -0.8 })], [4, t2 => ({ ...G.write(t2), r: { lift: 1.2 + Math.sin(t2 * 1.4) * 0.1, out: 0.3, bend: 0.9 } })], [9, G.think], [12, t2 => ({ ...G.rest(t2), yaw: -0.9 })]]));
        brush.visible = t < 9;
        sitter.pose({ ...G.folded(t), pitch: -0.1, yaw: 0.3 });
      } else {
        kit.setEnv(INK_SKY.moonlit([0.15, 0.3, -1], 0.03));
        const t = seconds - at(2);
        cam3(seconds);
        fog.update(seconds); fall.update(seconds);
        blooms.forEach((b, i) => b.open(0.5 + 0.5 * span(t, i * 0.1, 2 + i * 0.1)));
        const rise = span(t, 0.5, 4);
        liniang.root.position.y = -1.6 + rise * 2.05;
        liniang.fade(rise);
        face(liniang, 0, 8);
        liniang.pose(cue(t, [[0, G.folded], [4, G.shy], [6, t2 => G.dance(t2, 1)]]));
        cloud.position.y = 11 - span(t, 3, 9) * 6.2;
        lanxiang.pose(G.offer(t));
      }
    };
  },
});
