import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, tone, VERMILION, walkAlong } from '../../../stage/figure';
import { study } from '../../../stage/locations';
import { book, lamp } from '../../../stage/props';
import { bareTree, ground, range, rock } from '../../../stage/nature';
import { mist, specks } from '../../../stage/fx';
import { blendEnv, DUSK, lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 7. In the study Zhongqing waves away a dull text; as Ziyu expounds it, a ring
 * of blossoms opens across the floor around their table, spreading as the meaning unfolds. Then Ziyu
 * alone on a dark, barren plain, searching; Zhongqing arrives with a lantern, says one word, and
 * light floods out over the ground from where they stand.
 */

export default defineScene({
  seed: 1007,
  build: (kit, story) => {
    const { groups: [room, plain], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: endless subtle meaning ------------------------------------------------------------
    const s = study(kit, room);
    const ziyu = figure(kit, room, CAST.ziyu, -0.7, 0.9);
    const zhongqing = figure(kit, room, CAST.zhongqing, 0.9, 1.1);
    const text = book(kit, room, { x: 0.1, y: 0.83, z: -2.05, w: 0.24, d: 0.32 });
    // Blossoms on short stems, in rings that open outward from the book.
    const blooms: { mesh: THREE.Object3D; r: number }[] = [];
    const bloom = new THREE.SphereGeometry(0.07, 8, 6), stem = new THREE.CylinderGeometry(0.006, 0.006, 1, 4);
    for (let ring = 0; ring < 7; ring++) {
      const r = 1.2 + ring * 0.75, n = 10 + ring * 7;
      for (let k = 0; k < n; k++) {
        const a = k / n * Math.PI * 2 + ring * 0.4, h = 0.2 + rand() * 0.5;
        const g = kit.group(room, Math.cos(a) * r, 0, -1 + Math.sin(a) * r * 0.8);
        kit.mesh(stem, tone(0x2f2a26), g, 0, h / 2, 0).scale.y = h;
        kit.mesh(bloom, rand() < 0.75 ? flat(VERMILION) : tone(0xf4f0e8), g, 0, h, 0).scale.set(1 + rand(), 0.7, 1 + rand());
        blooms.push({ mesh: g, r });
      }
    }
    lights(kit, room, { key: [-5, 9, 6], intensity: 0.9 });
    const cam1 = orbitCam();
    function orbitCam() {
      return (seconds: number) => {
        const u = span(seconds, 0, 18), a = -0.9 + u * 1.8, r = (4.6 + u * 2.4) * (kit.portrait() ? 1.5 : 1);
        kit.camera.position.set(room.position.x + Math.sin(a) * r, 1.6 + u * 2.2, -0.4 + Math.cos(a) * r);
        kit.camera.lookAt(room.position.x, 1 - u * 0.2, -0.8);
      };
    }

    // --- Shot 2: light on barren ground ------------------------------------------------------------
    ground(kit, plain, { w: 300, d: 300, height: 1.6, flatten: 14, shade: 0x6e675f });
    for (let k = 0; k < 8; k++) bareTree(kit, plain, (rand() - 0.5) * 60, -10 - rand() * 30, 5 + rand() * 3, rand);
    for (let k = 0; k < 10; k++) rock(kit, plain, (rand() - 0.5) * 40, (rand() - 0.5) * 30 - 5, { h: 0.5 + rand(), rand, shade: 0x4a443e });
    range(kit, plain, { z: -120, span: 300, height: 30, shade: 0x6e675f, seed: 5 });
    // The light: a disc of bare paper spreading over the dark ground from where they stand.
    const light = kit.mesh(new THREE.CircleGeometry(1, 64).rotateX(-Math.PI / 2), flat(0xf4f0e8, { transparent: true, opacity: 0.95, depthWrite: false }), plain, 0, 0.05, 0);
    light.renderOrder = 1;
    const seeker = figure(kit, plain, CAST.ziyu, -0.6, 0);
    const bringer = figure(kit, plain, CAST.zhongqing, 8, 6);
    const hand = lamp(kit, bringer.hands.r, { h: 0.02, power: 2.4, range: 6 });
    hand.group.position.y = -0.35; hand.group.scale.setScalar(0.8);
    const gloom = mist(kit, plain, { count: 12, w: 60, y: 1, d: 40, z: -6, size: 14, opacity: 0.35, shade: 0x8c857c, drift: 0.5 });
    const dust = specks(kit, plain, { count: 800, w: 30, h: 8, d: 24, fall: 0.2, wind: 0.6, size: 0.03, dark: true, y: 4 });
    lights(kit, plain, { key: [4, 10, 8], intensity: 0.6, fill: 0.2 });
    const cam2 = move(kit, plain, [
      [at(1), [-9, 1.4, 9], [-0.6, 1.2, 0]],
      [at(1) + 6, [-3, 1.7, 5], [0, 1.3, 0]],
      [at(1) + 10, [2.2, 1.8, 4.2], [0, 1.4, 0]],
      [36, [0, 11, 16], [0, 0, -6]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.03));
        cam1(seconds);
        s.update(seconds);
        text.open(span(seconds, 1, 2));
        face(ziyu, 0.9, 1.1); face(zhongqing, -0.7, 0.9);
        zhongqing.pose(cue(seconds, [[0, t => ({ ...G.fan(t), yaw: 0.5 })], [2, t => ({ ...G.rest(t), r: { lift: 0.9, out: 0.8 + Math.sin(t * 5) * 0.2, bend: 0.4 }, yaw: 0.4 })], [9, G.think], [13, G.clap]]));
        ziyu.pose(cue(seconds, [[0, G.rest], [3, G.speak], [8, G.argue], [13, t => G.speak(t, 'l')]]));
        blooms.forEach(({ mesh, r }) => { const u = span(seconds, 2.5 + r * 1.3, 3.5 + r * 1.3); mesh.scale.setScalar(Math.max(0.001, u)); });
      } else {
        const t = seconds - at(1);
        const flood = span(t, 9.4, 15);
        kit.setEnv(blendEnv(DUSK(0.03), INK_SKY.paper(0.012), flood));
        cam2(seconds);
        gloom.update(seconds);
        dust.points.visible = flood < 0.9;
        light.scale.setScalar(0.01 + flood * 60);
        face(seeker, Math.sin(t * 0.4) * 3, -5);
        seeker.pose(cue(t, [[0, G.think], [4, tt => ({ ...G.behind(tt), yaw: Math.sin(tt * 0.8) * 0.5 })], [8.6, tt => ({ ...G.rest(tt), yaw: 0.6 })], [10, G.clap]]));
        const walking = walkAlong(bringer, t, 1, 8, [[8, 6], [4, 3.5], [0.8, 0.8]], { ...G.rest(t), r: { lift: 0.6, out: 0.2, bend: 0.4 } }, 6);
        if (!walking && t > 8) { face(bringer, -0.6, 0); bringer.pose(cue(t, [[8, tt => ({ ...G.speak(tt, 'l'), r: { lift: 0.6, out: 0.2, bend: 0.4 } })], [10, tt => ({ ...G.point(tt, 'l'), r: { lift: 0.6, out: 0.2, bend: 0.4 } })]])); }
        hand.update(seconds);
      }
    };
  },
});
