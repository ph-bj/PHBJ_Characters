import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, face, figure, flat, walkAlong } from '../../../stage/figure';
import { floor } from '../../../stage/architecture';
import { gateLane } from '../../../stage/locations';
import { cart } from '../../../stage/vehicles';
import { book, writing } from '../../../stage/props';
import { mist } from '../../../stage/fx';
import { blendEnv, DUSK, lights, move, sets, span } from '../../../stage/direct';
import { BOYS } from '../actors';

/*
 * Chapter 1, paragraph 56. Ziyu's verdict, staged as he sees it: the boy from the cart walks ahead,
 * and the lumpish "Baozhu" from the theatre trots behind holding a parasol over him like the lowest
 * menial, and even so looks unworthy. The cart pulls up at the Mei gate at dusk and Ziyu steps down,
 * still lost in thought, and goes in as the leaves close. Last, the chapter itself: a thread-bound
 * volume on a table closes, and a slip of paper is brushed: to be continued.
 */

export default defineScene({
  seed: 1056,
  build: (kit, story) => {
    const { groups: [path, home, end], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: not even his servant -------------------------------------------------------------
    floor(kit, path, 20, 80, { kind: 'flag', shade: 0xd9d3c9, z: -20 });
    const fog1 = mist(kit, path, { count: 8, w: 30, y: -1, d: 40, z: -24, size: 8, opacity: 0.35 });
    const master = figure(kit, path, BOYS.qinguan, 0, 0);
    const lackey = figure(kit, path, { ...CAST.escort, face: 'coarse', robe: 0x6e675f, jacket: 0x3f3a35, height: 1.5 }, 0.3, 1.2);
    const parasol = kit.group(lackey.hands.r, 0, 0, 0);
    kit.mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.4, 4), flat(0x2f2a26), parasol, 0, 0.5, 0);
    kit.mesh(new THREE.ConeGeometry(0.7, 0.3, 16, 1, true), flat(0x6e675f, { side: THREE.DoubleSide }), parasol, 0, 1.2, 0);
    lights(kit, path, { key: [6, 10, 8], intensity: 1 });

    // --- Shot 2: home again ----------------------------------------------------------------------
    const g = gateLane(kit, home);
    const c = cart(kit, home, { x: -12, z: 3.8, rot: Math.PI / 2, fur: true });
    const zy = figure(kit, home, { ...CAST.ziyu, fur: true }, 0, 3.4);
    lights(kit, home, { key: [-10, 6, 8], intensity: 0.7 });
    const cam2 = move(kit, home, [
      [at(1), [-8, 2, 10], [-4, 1.4, 3.8]],
      [at(1) + 7, [3.4, 1.6, 7], [0, 1.5, 3]],
      [at(2), [1, 2, 6], [0, 1.6, -2]],
    ]);

    // --- Shot 3: to be continued -----------------------------------------------------------------
    floor(kit, end, 10, 10, { kind: 'boards', shade: 0xcfc8bc });
    kit.box(end, flat(0x3f3a35), [0, 0.4, 0], [1.6, 0.8, 1]);
    const volume = book(kit, end, { y: 0.81, w: 0.34, d: 0.46, title: '品花宝鉴' });
    const slip = writing(kit, end, ['且听下回分解'], { size: 0.075, paper: 0xf4f0e8, margin: 0.4 });
    slip.mesh.rotation.x = -Math.PI / 2; slip.mesh.position.set(0.45, 0.805, 0.1);
    const stamp = kit.seal(end, '品花', 0.1);
    stamp.mesh.rotation.x = -Math.PI / 2; stamp.mesh.position.set(0.45, 0.806, 0.42);
    lights(kit, end, { key: [-2, 5, 3], intensity: 0.7 });
    const cam3 = move(kit, end, [
      [at(2), [0.8, 1.6, 1.2], [0.1, 0.8, 0.1]],
      [36, [0.2, 2.2, 0.5], [0.2, 0.8, 0.1]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.02));
        fog1.update(seconds);
        const z = -seconds * 1.1;
        walkAlong(master, seconds, 0, 14, [[0, 0], [0, -15.4]], G.folded(seconds), 4.2);
        lackey.root.position.set(0.35, 0, z + 1.1);
        lackey.root.rotation.y = Math.PI;
        lackey.pose({ ...G.rest(seconds), walk: seconds * 6, bow: 0.25, r: { lift: 1.9, out: 0.1, bend: 0.8 } });
        const a = -0.4 + span(seconds, 0, 14) * 1.2;
        const cp = [Math.sin(a) * 4.2, 1.6, z + Math.cos(a) * 4.2] as [number, number, number];
        kit.camera.position.set(path.position.x + cp[0] * (kit.portrait() ? 1.5 : 1), cp[1], cp[2]);
        kit.camera.lookAt(path.position.x, 1.3, z + 0.4);
      } else if (shot === 1) {
        const t = seconds - at(1);
        kit.setEnv(blendEnv(INK_SKY.paper(0.02), DUSK(0.02), span(t, 0, 14)));
        cam2(seconds);
        c.group.position.x = -12 + span(t, 0, 5) * 10.2;
        c.update(seconds, t < 5);
        zy.root.visible = t > 5.5;
        if (t > 5.5 && t < 8) { face(zy, 0, 0); zy.pose(G.think(t)); }
        walkAlong(zy, t, 8, 12.5, [[0, 3.4], [0, 0.6], [0, -2]], G.behind(t), 4);
        g.gate.open(span(t, 7, 8.5) * (1 - span(t, 12, 13.5)));
      } else {
        kit.setEnv(DUSK(0.03));
        const t = seconds - at(2);
        cam3(seconds);
        volume.open(1 - span(t, 0.5, 2.5));
        slip.set(span(t, 2.5, 6));
        stamp.material.opacity = span(t, 6.2, 6.6);
        stamp.mesh.scale.setScalar(1 + 0.4 * (1 - span(t, 6.2, 6.5)));
      }
    };
  },
});
