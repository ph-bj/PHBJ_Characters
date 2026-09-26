import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat } from '../../../stage/figure';
import { street } from '../../../stage/locations';
import { cart } from '../../../stage/vehicles';
import { cloudBank, plumTree } from '../../../stage/nature';
import { palaceHall, tower } from '../../../stage/performance';
import { mist, petals } from '../../../stage/fx';
import { aim, lights, move, sets, span } from '../../../stage/direct';
import { BOYS } from '../actors';

/*
 * Chapter 1, paragraph 55. Ziyu rides on in the cart, turning it over: who are they, dressed so
 * plainly? Beside the cart, in his thought, the boy walks in his plain coat while a jadeite tower and
 * a hall of curcuma rise faint behind him, and shrink away as unworthy. Then the camera climbs through
 * cloud to the moon itself, where the Guanghan palace stands under the cassia tree, and the boy is
 * there, at home at last among its halls.
 */

export default defineScene({
  seed: 1055,
  build: (kit, story) => {
    const { groups: [road, lunar], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: plainly dressed ------------------------------------------------------------------
    const st = street(kit, road);
    const own = cart(kit, road, { x: -1.4, z: 0, rot: Math.PI, fur: true });
    own.curtain(0.9);
    const zy = figure(kit, own.seat, { ...CAST.ziyu, fur: true }, 0, 0.1);
    zy.root.rotation.y = Math.PI; zy.shadow.visible = false;
    const vision = figure(kit, road, BOYS.qinguan, 1.2, 0);
    const jade = tower(kit, road, { x: 8, z: -18, levels: 3, w: 5, h: 2.6, shade: 0x9c958b });
    const curcuma = palaceHall(kit, road, -9, -26, 12);
    lights(kit, road, { key: [8, 10, 6], intensity: 1 });

    // --- Shot 2: the Guanghan palace ---------------------------------------------------------------
    // The moon as a great sphere of bare paper, the palace on its face.
    const orb = kit.group(lunar, 0, 0, -30);
    kit.mesh(new THREE.SphereGeometry(20, 64, 48), flat(0xfbf9f4), orb);
    const surface = kit.group(orb, 0, 20, 0);
    palaceHall(kit, surface, 0, -4, 10);
    tower(kit, surface, { x: -8, z: -2, levels: 2, w: 3.6, h: 2.4, shade: 0xb9b2a8 });
    plumTree(kit, surface, 6, 2, { h: 5, rand, blossoms: 160, red: false });
    const lunarBoy = figure(kit, surface, { ...BOYS.qinguan, fur: false, jacket: 0xe6e0d6 }, 1.6, 4);
    const clouds = Array.from({ length: 10 }, (_, k) => cloudBank(kit, lunar, (k - 5) * 8, -10 + k * 3, -6 - (k % 3) * 6, { w: 10, puffs: 10, rand, size: 1, shade: 0xd6d0c6 }));
    const drift = petals(kit, surface, { count: 70, w: 12, h: 5, d: 10, red: false });
    const veil = mist(kit, lunar, { count: 10, w: 80, y: 0, d: 30, z: -10, size: 20, opacity: 0.5, drift: 1.2 });
    lights(kit, lunar, { key: [-10, 30, 20], intensity: 0.9, fill: 0.6 });
    const cam2 = move(kit, lunar, [
      [at(1), [0, -12, 30], [0, 0, -30]],
      [at(1) + 8, [4, 10, 10], [0, 18, -30]],
      [at(1) + 14, [4, 23, -20], [1.6, 21.4, -26]],
      [36, [0.2, 22.4, -23.2], [1.4, 21.6, -26]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.03));
        const z = -seconds * 1.1;
        own.group.position.z = z;
        own.update(seconds, true);
        st.update(seconds);
        zy.pose(cue(seconds, [[0, t => ({ ...G.think(t), sit: 1 })], [8, t => ({ ...G.rest(t), sit: 1, yaw: -0.8 })]]));
        vision.root.position.set(1.2, 0, z - 0.6);
        vision.root.rotation.y = Math.PI;
        vision.pose({ ...G.folded(seconds), walk: seconds * 4.2, stride: 0.6 });
        vision.fade(0.6 * span(seconds, 3, 5));
        const shrink = 1 - span(seconds, 12, 17) * 0.99;
        for (const b of [jade, curcuma.group]) { b.scale.setScalar(shrink); b.visible = shrink > 0.02; }
        aim(kit, road, [4.5, 2.2, z + 4], [-0.2, 1.8, z - 3]);
      } else {
        kit.setEnv(INK_SKY.moonlit([0, 0.4, -1], 0.006));
        cam2(seconds);
        veil.update(seconds); drift.update(seconds);
        clouds.forEach((c, k) => { c.position.x = (k - 5) * 8 + (seconds - at(1)) * 0.6; });
        orb.rotation.y = (seconds - at(1)) * 0.01;
        face(lunarBoy, 4, 12);
        lunarBoy.pose(cue(seconds - at(1), [[0, G.folded], [10, t => ({ ...G.folded(t), pitch: -0.2, yaw: 0.3 })]]));
      }
    };
  },
});
