import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, face, figure, walkAlong, type Figure } from '../../../stage/figure';
import { aim, move, sets, span } from '../../../stage/direct';
import { DANS, PINCAI } from '../actors';
import { sanle } from '../places';

/*
 * Chapter 3, paragraph 9. The camera rises to the right-hand gallery, where a party of capital
 * officials sits in the boxes, their attendants standing behind. Down at the stage door the
 * dressing-room curtain stirs: half a snow-white face, then another, peep round it and smile up.
 * Then the dan are on the gallery, coming up the stair by threes and fives in their furs, and the
 * camera moves among them as they lean on the officials, sit at their elbows, rest a hand on a
 * shoulder, all laughter. Below, Pincai sits with his teacup halfway to his mouth, lost in it.
 */

export default defineScene({
  seed: 3009,
  build: (kit, story) => {
    const { groups: [hall], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const G2 = 2.7;

    const th = sanle(kit, hall);
    const [tx, tz] = th.table;
    const onGallery = (f: Figure) => { f.root.position.y = G2; return f; };
    const officials = th.boxes.map(([bx, bz], k) => onGallery(figure(kit, hall, [CAST.official, CAST.guest, CAST.wenhui][k], bx + 0.9, bz)));
    const attendants = th.boxes.map(([bx, bz]) => onGallery(figure(kit, hall, CAST.servant, bx + 1.9, bz + 0.3)));
    // The dressing-room curtain at the stage door, and the faces behind it.
    const [dx, dy, dz] = th.door;
    const curtain = kit.mesh(new THREE.PlaneGeometry(1.1, 2.1), new THREE.MeshLambertMaterial({ color: 0xe6e0d6, side: THREE.DoubleSide }), hall, dx, dy + 0.05, dz + 0.9);
    curtain.geometry.translate(0.55, 0, 0);
    curtain.position.x = dx - 0.55;
    const peepers = [0, 1].map(k => { const f = figure(kit, hall, DANS[k], dx + 0.35 + k * 0.25, dz + 0.6); f.root.position.y = 1.2; return f; });
    const dans = Array.from({ length: 6 }, (_, k) => onGallery(figure(kit, hall, DANS[k % 4], 8.2, 5.4)));
    const pincai = figure(kit, hall, PINCAI, tx - 1.05, tz);
    const cam1 = move(kit, hall, [[0, [2, 2.4, 6], [9.6, 3.6, -2]], [at(1) - 1, [5.4, 4, 4.2], [9.8, 3.4, -3]]]);
    const cam2 = move(kit, hall, [[at(1), [-0.4, 2.3, -6.4], [dx, 2.1, dz]], [at(2), [-1.6, 2.1, -8], [dx + 0.2, 2.2, dz + 0.6]]]);
    const cam3 = move(kit, hall, [[at(2), [8.4, 4.4, 8], [9.4, 3.8, -2]], [at(2) + 8, [7.8, 4.3, 2.4], [9.8, 3.7, -3.6]], [at(2) + 12, [-4.6, 1.5, -2.4], [tx - 1, 1.3, tz]]]);

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.02));
      th.update(seconds);
      officials.forEach(o => { face(o, 0, o.root.position.z); o.pose({ ...G.rest(seconds), sit: 1 }); });
      attendants.forEach(a => { face(a, 0, a.root.position.z); a.pose(G.folded(seconds)); });
      face(pincai, 9, -2);
      pincai.pose({ ...G.drink(seconds), sit: 1, pitch: -0.25, r: { lift: 1.1, out: 0.1, twist: 0.4, bend: 1.6 } });
      // Curtain and the half-faces.
      curtain.rotation.y = seconds > at(1) + 1 && seconds < at(2) ? Math.min(1, (seconds - at(1) - 1) * 0.8) * 0.9 : 0;
      peepers.forEach((f, k) => { const t0 = at(1) + 2 + k * 2.5; f.fade(span(seconds, t0, t0 + 0.6) * (seconds < at(2) ? 1 : 0)); face(f, 9, -2); f.root.rotation.y += 0.5; f.pose({ ...G.shy(seconds + k), yaw: 0.5 }); });
      // The dan climb to the gallery and fan out among the boxes.
      dans.forEach((f, k) => {
        const [bx, bz] = th.boxes[k % 3];
        const t0 = at(2) + (k % 3) * 0.8 + Math.floor(k / 3) * 0.4;
        f.fade(span(seconds, t0 - 0.4, t0));
        f.root.visible = seconds > at(2) - 0.5;
        const spot: [number, number] = [bx + (k < 3 ? 0.5 : 1.4), bz + (k < 3 ? 0.7 : -0.6)];
        const moving = walkAlong(f, seconds, t0, t0 + 4, [[8.2, 5.4], [8.3, bz + 2], spot], G.rest(seconds), 5.5);
        if (!moving && seconds > t0 + 4) {
          face(f, bx + 0.9, bz);
          const mode = k % 3;
          f.pose(mode === 0 ? { ...G.laugh(seconds + k), lean: 0.2 } : mode === 1 ? { ...G.shy(seconds + k), bow: 0.2 } : { ...G.speak(seconds + k), l: { lift: 1.2, out: 0.2, bend: 0.3 } });
        }
      });
      if (shot === 0) cam1(seconds);
      else if (shot === 1) cam2(seconds);
      else if (seconds < at(2) + 12) cam3(seconds);
      else aim(kit, hall, [tx - 2.2 + Math.sin(seconds * 0.2) * 0.2, 1.35, tz + 1.4], [tx - 1.05, 1.25, tz], 0.3);
    };
  },
});
