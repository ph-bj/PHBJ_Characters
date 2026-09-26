import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, face, figure } from '../../../stage/figure';
import { cloudBank, ground, range } from '../../../stage/nature';
import { moon } from '../../../stage/performance';
import { mist } from '../../../stage/fx';
import { aim, lights, move, sets, span } from '../../../stage/direct';
import { sunFeatures, wangStudy } from '../wang';

/*
 * Chapter 2, paragraph 25. Heaven and the abyss: Wang Xun stands on a sunlit crag above the clouds
 * while far below, on the valley floor, the two Sun brothers look up at him, and the camera travels
 * the whole drop between. Then a slow, merciless close-up in the study as Sihui talks: the sunken
 * neck, the puffed cheeks, the fair skin crowded with red pimples, thickest of all on the nose, which
 * glows like a ripe berry.
 */

export default defineScene({
  seed: 2025,
  build: (kit, story) => {
    const { groups: [heights, studySet], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: heaven and the abyss --------------------------------------------------------------
    ground(kit, heights, { w: 400, d: 400, height: 3, flatten: 10, shade: 0x9c958b });
    const crag = kit.group(heights, 0, 0, -6);
    kit.mesh(new THREE.CylinderGeometry(2.2, 4.6, 24, 9), new THREE.MeshLambertMaterial({ color: 0xb9b2a8 }), crag, 0, 12, 0);
    for (let k = 0; k < 8; k++) cloudBank(kit, heights, (k - 4) * 6, 14 + (k % 3), -8 + (k % 2) * 6, { w: 8, puffs: 8, rand, size: 0.9 });
    moon(kit, heights, 12, 34, -60, 5);
    range(kit, heights, { z: -120, span: 400, height: 50, shade: 0xc9c2b7, seed: 225 });
    const wx = figure(kit, crag, CAST.wangxun, 0, 0);
    wx.root.position.y = 24;
    const brothers = [figure(kit, heights, CAST.sihui, -0.5, 6), figure(kit, heights, CAST.siyuan, 0.5, 6.2)];
    sunFeatures(kit, brothers[0], brothers[1]);
    const haze = mist(kit, heights, { count: 10, w: 60, y: 8, d: 30, z: -6, size: 14, opacity: 0.6, drift: 0.6 });
    lights(kit, heights, { key: [8, 40, 10], intensity: 1 });
    const cam1 = move(kit, heights, [[0, [1.8, 25.3, -2.6], [0, 25, -6]], [7, [8, 14, 8], [0, 8, -2]], [14, [2, 1.6, 10], [0, 1.4, 6]]]);

    // --- Shot 2: Sun Sihui --------------------------------------------------------------------------
    const s = wangStudy(kit, studySet);
    const sihui = figure(kit, studySet, CAST.sihui, ...s.seats[0]);
    sunFeatures(kit, sihui, undefined);
    lights(kit, studySet, { key: [-2, 6, 6], intensity: 1 });

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.012));
        cam1(seconds);
        haze.update(seconds);
        face(wx, 4, 10);
        wx.pose(G.fan(seconds));
        brothers.forEach(b => { face(b, 0, -6); b.pose({ ...G.rest(seconds), pitch: -0.5 }); });
      } else {
        kit.setEnv(INK_SKY.paper(0.025));
        const t = seconds - at(1);
        face(sihui, 0, 0);
        sihui.pose({ ...G.speak(t), sit: 1, pitch: 0.1 });
        const [sx, sz] = s.seats[0];
        const dir = new THREE.Vector2(-sx, -sz).normalize();
        const d = 2.4 - span(t, 0, 20) * 1.2;
        aim(kit, studySet, [sx + dir.x * d, 1.28 + Math.sin(t * 0.3) * 0.05, sz + dir.y * d], [sx, 1.24 - span(t, 8, 18) * 0.02, sz], 0.2);
      }
    };
  },
});
