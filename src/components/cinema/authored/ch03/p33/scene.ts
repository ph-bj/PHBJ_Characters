import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, VERMILION, face, figure, flat, tone, walkAlong } from '../../../stage/figure';
import { cityGate, hall, plaque, platform } from '../../../stage/architecture';
import { ground, range } from '../../../stage/nature';
import { ingots, writing } from '../../../stage/props';
import { cart, horse } from '../../../stage/vehicles';
import { lights, move, sets } from '../../../stage/direct';
import { XI } from '../actors';

/*
 * Chapter 3, paragraph 33. Why the proprietor fawns: the camera goes back a month, to the capital's
 * great gate, where a train of carts heavy with iron-bound silver chests rolls in behind a tall
 * rider in a sea-otter cloak: Xi, heir of a Cantonese fortune. Then the chests are set down in rows
 * before a ministry hall, one lid thrown open on its ingots, and on a cushion at the top of the
 * steps an official's hat with its vermilion button waits to be bought.
 */

export default defineScene({
  seed: 3033,
  build: (kit, story) => {
    const { groups: [gateSet, ministry], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    ground(kit, gateSet, { w: 300, d: 300, height: 1, flatten: 30, shade: 0xd6d0c6 });
    cityGate(kit, gateSet, { z: -20, w: 70, h: 11 });
    range(kit, gateSet, { z: -140, span: 400, height: 30, shade: 0xc9c2b7, seed: 333 });
    const rider = horse(kit, gateSet, { x: 0, z: 10, rot: Math.PI });
    const xi = figure(kit, rider.group, XI, 0, 0); xi.root.position.y = 1.05; xi.shadow.visible = false;
    const chest = (parent: THREE.Object3D, x: number, y: number, z: number) => { const g = kit.group(parent, x, y, z); kit.box(g, tone(0x3f3a35), [0, 0.2, 0], [0.8, 0.4, 0.5]); for (const s of [-1, 1]) kit.box(g, tone(0x1c1816), [s * 0.3, 0.2, 0], [0.05, 0.42, 0.52]); return g; };
    const train = [0, 1, 2, 3].map(k => { const c = cart(kit, gateSet, { x: 0, z: 14 + k * 5, rot: Math.PI, window: false }); for (let j = 0; j < 3; j++) chest(c.cab, 0, 0.05 + j * 0.42, -0.2); return c; });
    const porters = [0, 1, 2, 3].map(k => figure(kit, gateSet, CAST.servant, (k % 2 ? 1.4 : -1.4), 13 + k * 3));
    lights(kit, gateSet, { key: [8, 12, 10], intensity: 1 });
    const cam1 = move(kit, gateSet, [[0, [7, 2.4, 22], [0, 3, -12]], [at(1), [3.4, 2.2, 4], [0, 4, -20]]]);

    ground(kit, ministry, { w: 200, d: 200, height: 0.5, flatten: 30, shade: 0xd9d3c9 });
    hall(kit, ministry, { w: 14, d: 6, h: 4, z: -8 });
    platform(kit, ministry, 8, 3, 0.9, { z: -4 });
    const board = plaque(kit, ministry, 3, 0.9, 0, 5, -4.9);
    writing(kit, board, '吏部', { size: 0.55, margin: 0.1, z: 0.07 });
    const chests = Array.from({ length: 12 }, (_, k) => chest(ministry, (k % 4 - 1.5) * 1.1, 0, 1.5 + Math.floor(k / 4) * 0.8));
    const opened = kit.group(ministry, (0 - 1.5) * 1.1, 0.42, 1.5);
    ingots(kit, opened, 0, 0, 0, 6);
    const hat = kit.group(ministry, 0, 1.1, -3.4);
    kit.box(hat, tone(0x6e675f), [0, 0, 0], [0.5, 0.1, 0.5]);
    kit.mesh(new THREE.ConeGeometry(0.22, 0.14, 20), tone(0x2f2a26), hat, 0, 0.13, 0);
    kit.mesh(new THREE.SphereGeometry(0.045, 10, 8), flat(VERMILION), hat, 0, 0.22, 0);
    const buyer = figure(kit, ministry, XI, 0, 5);
    lights(kit, ministry, { key: [6, 10, 10], intensity: 1 });
    const cam2 = move(kit, ministry, [[at(1), [5, 2, 8], [0, 1, 0]], [at(1) + 9, [1.2, 1.6, -0.6], [0, 1.2, -3.4]], [36, [0.4, 1.4, -1.8], [0, 1.2, -3.4]]]);

    return (seconds: number, shot: number) => {
      show(shot);
      kit.setEnv(INK_SKY.paper(0.02));
      if (shot === 0) {
        cam1(seconds);
        const go = seconds * 1.4;
        rider.group.position.z = 10 - go; rider.update(seconds, true, 1);
        face(xi, 0, -100); xi.root.rotation.y = 0;
        xi.pose({ ...G.behind(seconds), sit: 1, pitch: -0.15 });
        train.forEach((c, k) => { c.group.position.z = 14 + k * 5 - go; c.update(seconds + k, true); });
        porters.forEach((p, k) => { walkAlong(p, seconds, 0, at(1), [[k % 2 ? 1.4 : -1.4, 13 + k * 3], [k % 2 ? 1.4 : -1.4, 13 + k * 3 - at(1) * 1.4]], G.hold(seconds), 5); });
        return;
      }
      cam2(seconds);
      const t = seconds - at(1);
      chests.forEach((c, k) => { c.visible = t > k * 0.25; });
      opened.visible = t > 3;
      walkAlong(buyer, t, 4, 12, [[0, 5], [0, 0.4], [0, -2.4]], G.behind(t), 4);
      if (t > 12) { face(buyer, 0, -3.4); buyer.pose(G.bow(t, 0.3)); }
      hat.rotation.y = t * 0.2;
    };
  },
});
