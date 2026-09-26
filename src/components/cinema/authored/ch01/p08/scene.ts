import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { column, DARK, floor, roof, WOOD } from '../../../stage/architecture';
import { bareTree, ground, plumTree, range, water, willow } from '../../../stage/nature';
import { paintCanvas } from '../../../stage/props';
import { petals, specks } from '../../../stage/fx';
import { horse } from '../../../stage/vehicles';
import { aim, lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 8. Ziyu and Zhongqing walk the long covered gallery beside the lake while
 * ten years pass around them: blossom falls, then snow. Then Nanxiang on an open plain, leaning on
 * his horse, dashes off a scroll that unrolls across the grass for yards, throws back his head and
 * laughs at the sky, and turns to salute the only two he admires, waiting at the plain's edge.
 */

export default defineScene({
  seed: 1008,
  build: (kit, story) => {
    const { groups: [gallery, plain], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: ten years in the long gallery ------------------------------------------------------
    ground(kit, gallery, { w: 200, d: 200, height: 1, flatten: 20, shade: 0xd9d3c9 });
    water(kit, gallery, { w: 120, d: 40, z: -24, y: 0.03 });
    const len = 60;
    floor(kit, gallery, 3, len, { kind: 'boards', shade: 0xcfc8bc, y: 0.3, z: -len / 2 + 10 });
    kit.box(gallery, tone(0x8c857c), [0, 0.15, -len / 2 + 10], [3.2, 0.3, len]);
    for (let k = 0; k < 20; k++) {
      const z = 10 - k * 3;
      for (const x of [-1.4, 1.4]) column(kit, kit.group(gallery, 0, 0.3, 0), x, z, 2.6, 0.08, DARK);
      kit.box(gallery, tone(WOOD), [-1.4, 0.8, z - 1.5], [0.06, 0.06, 3]);
    }
    const eaves = kit.group(gallery, 0, 0, -len / 2 + 10);
    eaves.rotation.y = Math.PI / 2;
    roof(kit, eaves, len + 1, 3.8, { y: 2.9, rise: 0.8 });
    const trees = [willow(kit, gallery, -5, -6, { h: 7, rand }), willow(kit, gallery, 5, -26, { h: 7, rand })];
    plumTree(kit, gallery, 4.2, 2, { h: 4.2, rand, blossoms: 150 });
    bareTree(kit, gallery, -4.5, -18, 7, rand);
    range(kit, gallery, { z: -110, span: 300, height: 26, shade: 0xc9c2b7, seed: 8 });
    const a = figure(kit, gallery, CAST.ziyu, -0.35, 8);
    const b = figure(kit, gallery, CAST.zhongqing, 0.4, 8.3);
    a.root.position.y = b.root.position.y = 0.3;
    const blossom = petals(kit, gallery, { count: 120, w: 16, h: 6, d: 14, z: -2 });
    const snow = specks(kit, gallery, { count: 2400, w: 30, h: 12, d: 40, fall: 0.9, wind: 0.2, size: 0.03, dark: true, y: 5, z: -8 });
    lights(kit, gallery, { key: [8, 10, 6], intensity: 1 });

    // --- Shot 2: ten thousand words on horseback ------------------------------------------------------
    ground(kit, plain, { w: 400, d: 400, height: 2.4, flatten: 20, shade: 0xd6d0c6, seed: 3 });
    range(kit, plain, { z: -150, span: 500, height: 40, shade: 0xb9b2a8, seed: 21 });
    range(kit, plain, { z: -220, span: 600, height: 60, shade: 0xd6d0c6, seed: 22 });
    const steed = horse(kit, plain, { x: 0, z: 0, rot: Math.PI / 2 });
    const poet = figure(kit, plain, CAST.nanxiang, -0.3, 1.0);
    // The scroll unrolls from his hand across the grass: a long strip of paper covered in running script.
    const scrollLength = 18;
    const script = paintCanvas(4096, 256, ctx => {
      ctx.fillStyle = '#f2ede3'; ctx.fillRect(0, 0, 4096, 256);
      ctx.strokeStyle = 'rgba(30,24,20,0.85)'; ctx.lineCap = 'round';
      let s = 7;
      const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
      for (let x = 4070; x > 20; x -= 26) {
        for (let y = 20; y < 236; y += 22) {
          ctx.lineWidth = 2 + r() * 3; ctx.beginPath(); ctx.moveTo(x - r() * 8, y); ctx.bezierCurveTo(x + 8 * r(), y + 6, x - 10 * r(), y + 10, x + 4, y + 16 * r() + 4); ctx.stroke();
        }
      }
    });
    const tex = kit.canvasTexture(script);
    const paper = new THREE.MeshLambertMaterial({ map: tex, side: THREE.DoubleSide });
    const strip = kit.mesh(new THREE.PlaneGeometry(1, 0.55).translate(0.5, 0, 0).rotateX(-Math.PI / 2), paper, plain, 0.3, 0.02, 1.8);
    const roll = kit.mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.58, 10).rotateX(Math.PI / 2), tone(0xe6e0d6), plain, 0.3, 0.06, 1.8);
    const friends = [figure(kit, plain, CAST.ziyu, 22, -6), figure(kit, plain, CAST.zhongqing, 23.2, -5.4)];
    const grass = specks(kit, plain, { count: 900, w: 40, h: 6, d: 30, fall: 0.1, wind: 2.4, size: 0.035, dark: true, y: 2 });
    lights(kit, plain, { key: [10, 14, 8], intensity: 1.1 });
    const cam2 = move(kit, plain, [
      [at(1), [-5, 0.6, 7], [0, 1.3, 1]],
      [at(1) + 6, [2, 2.2, 6], [3, 0.4, 1.8]],
      [at(1) + 12, [10, 3.5, 7.5], [8, 0.2, 1.8]],
      [at(1) + 16, [-2.5, 1.9, 5], [0, 2.2, 0]],
      [36, [-6, 2.4, 3], [20, 1.6, -5]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      kit.setEnv(INK_SKY.paper(shot === 0 ? 0.02 : 0.008));
      if (shot === 0) {
        const t = seconds;
        // A tracking shot that walks beside them down the gallery.
        const z = 8 - span(t, 0, 14) * 36;
        aim(kit, gallery, [3.2 + Math.sin(t * 0.4) * 0.3, 1.9, z + 3.2], [0, 1.5, z - 2]);
        walkAlong(a, t, 0, 14, [[-0.35, 8], [-0.35, -28]], G.speak(t, 'l'), 4.5);
        walkAlong(b, t, 0, 14, [[0.4, 8.3], [0.4, -27.7]], cue(t, [[0, G.behind], [6, G.laugh], [9, G.behind]]), 4.5);
        a.pose({ ...G.speak(t, 'l'), walk: t * 4.5, yaw: 0.4 });
        const spring = 1 - span(t, 5, 8);
        blossom.mesh.visible = spring > 0.05;
        blossom.update(seconds);
        blossom.mesh.position.z = z - 4;
        snow.points.visible = t > 7;
        snow.points.position.z = z - 6;
        trees.forEach(w => w.update(t, 1.5));
      } else {
        const t = seconds - at(1);
        cam2(seconds);
        steed.update(seconds, false);
        const u = span(t, 1, 12);
        strip.scale.x = 0.01 + u * scrollLength;
        roll.position.x = 0.3 + u * scrollLength;
        roll.rotation.z = -u * scrollLength / 0.05;
        tex.repeat.set(Math.max(0.01, u), 1);
        face(poet, 3, 2.5);
        poet.pose(cue(t, [[0, G.write], [12, G.laugh], [15, G.guffaw], [17.5, tt => G.salute(tt, 0.3)]]));
        if (t > 17) face(poet, 22, -6);
        grass.uniforms.uSpeed.value = 1;
        friends.forEach((f, i) => { face(f, 0, 1); f.pose(i ? G.salute(t, 0.2) : G.folded(t)); f.fade(span(t, 15, 17)); });
      }
    };
  },
});
