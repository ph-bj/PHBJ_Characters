import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, flat, tone, VERMILION } from '../../../stage/figure';
import { cityGate, pavilion } from '../../../stage/architecture';
import { ground, lotus, range, water, willow } from '../../../stage/nature';
import { horse, boat } from '../../../stage/vehicles';
import { theatre } from '../../../stage/locations';
import { table } from '../../../stage/props';
import { hold, placard } from '../../../stage/performance';
import { mist, specks } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 25: Li Yulin. At sunrise over a lotus pond, a willow in the dawn breeze, he
 * plays the pipa in a waterside pavilion, a Go board beside him. At Yang Pass in the dust, he breaks
 * a willow branch for a traveller who mounts and rides out through the gate, and Yulin is left
 * holding the sprig. On the stage he plays Hiding the Boat and Sending the Fan in a painted skiff, and
 * the placards come down one after another.
 */

const A = ACTORS.yulin;

export default defineScene({
  seed: 1025,
  build: (kit, story) => {
    const { groups: [pond, pass, house], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: a lotus at sunrise ---------------------------------------------------------------
    water(kit, pond, { w: 200, d: 120, z: -30 });
    lotus(kit, pond, -2, -6, { count: 40, rand, radius: 9, flowers: 9 });
    pavilion(kit, pond, { x: 3, z: 1, r: 2, h: 2.6, sides: 4, base: 0.5 });
    table(kit, pond, { x: 3.9, z: 1.2, w: 0.7, d: 0.7, h: 0.7 }).position.y = 0.5;
    kit.box(pond, tone(0xb9b2a8), [3.9, 1.23, 1.2], [0.5, 0.05, 0.5]);
    const sun = kit.mesh(new THREE.CircleGeometry(3.4, 48), flat(VERMILION, { fog: false }), pond, -20, 2, -90);
    const trees = [willow(kit, pond, -6, 2, { h: 7, rand }), willow(kit, pond, 9, -2, { h: 6, rand })];
    range(kit, pond, { z: -110, span: 400, height: 22, shade: 0xc9c2b7, seed: 71 });
    const player = figure(kit, pond, A.plain, 2.9, 1.5);
    player.root.position.y = 0.5;
    const pipa = hold(kit, player, 'pipa');
    pipa.rotation.set(0.3, 0, 0.6);
    const dawn = mist(kit, pond, { count: 12, w: 80, y: -1.5, d: 40, z: -30, size: 12, opacity: 0.8 });
    lights(kit, pond, { key: [-20, 4, -40], intensity: 1, fill: 0.5 });
    const cam1 = move(kit, pond, [
      [0, [-8, 1.2, 10], [-10, 3, -60]],
      [6, [0, 1.6, 7], [2.6, 1.4, 1]],
      [12, [4.5, 1.8, 4], [3, 1.4, 1.2]],
    ]);

    // --- Shot 2: Willow at Yang Pass ---------------------------------------------------------------
    ground(kit, pass, { w: 400, d: 400, height: 3, flatten: 20, shade: 0xd6d0c6, seed: 6 });
    const gateway = kit.group(pass, 0, 0, -22);
    cityGate(kit, gateway, { w: 70, h: 9 });
    range(kit, pass, { z: -120, span: 500, height: 45, shade: 0xb9b2a8, seed: 72 });
    const tree = willow(kit, pass, -3.5, -2, { h: 6, rand });
    const yl = figure(kit, pass, A.costume, -1.2, 0.6);
    const sprig = hold(kit, yl, 'willow');
    const traveller = figure(kit, pass, { ...CAST.wangxun, fur: true }, 1.2, 0.4);
    const steed = horse(kit, pass, { x: 2.8, z: -0.6, rot: Math.PI });
    const rider = figure(kit, steed.group, { ...CAST.wangxun, fur: true }, 0, 0);
    rider.root.position.y = 1.2; rider.shadow.visible = false;
    const dust = specks(kit, pass, { count: 1200, w: 30, h: 6, d: 24, fall: 0.05, wind: 2.2, size: 0.028, dark: true, y: 2 });
    lights(kit, pass, { key: [8, 10, 6], intensity: 1 });
    const cam2 = move(kit, pass, [
      [at(1), [-4, 1.6, 5], [0, 1.4, 0]],
      [at(1) + 6, [1.5, 1.7, 4.2], [-0.8, 1.5, 0.4]],
      [at(2), [-3.4, 1.8, 3.8], [0, 2.2, -14]],
    ]);

    // --- Shot 3: Hiding the Boat, Sending the Fan -------------------------------------------------
    const t3 = theatre(kit, house);
    const prop = boat(kit, house, { x: 0, z: -8, rot: Math.PI / 2, len: 4, cabin: false, shade: 0x6e675f });
    prop.group.position.y = 1.2;
    const ylStage = figure(kit, prop.deck, A.costume, -0.3, 0.8);
    ylStage.root.position.y = 0.37;
    ylStage.root.rotation.y = -Math.PI / 2;
    const fan = hold(kit, ylStage, 'fan');
    const partner = figure(kit, house, CAST.wangxun, 2.2, -8.6);
    partner.root.position.y = 1.2;
    const boards = ['藏舟', '草地', '寄扇'].map((p, i) => placard(kit, house, p, { x: 2.6 + i * 0.8, y: 9, z: -5.2 - (i % 2) * 0.3, size: 0.3 }));
    lights(kit, house, { key: [2, 12, 6], intensity: 0.9 });
    const cam3 = move(kit, house, [
      [at(2), [-2, 3.4, 4], [0, 2, -8]],
      [at(2) + 6, [-3.2, 2.4, -3.8], [0.4, 2.3, -8.4]],
      [36, [1.2, 2.4, -3.6], [1.2, 2.6, -8.2]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.012));
        cam1(seconds);
        dawn.update(seconds);
        trees.forEach(w => w.update(seconds, 1.6));
        sun.position.y = 1 + span(seconds, 0, 12) * 5;
        face(player, 3, 6);
        player.pose({ sit: 1, l: { lift: 1.1, out: 0.2, bend: 1.5 }, r: { lift: 0.8, out: 0.35, bend: 1.2 + Math.sin(seconds * 8) * 0.12 }, pitch: 0.25, yaw: -0.2 });
      } else if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.02));
        const t = seconds - at(1);
        cam2(seconds);
        tree.update(seconds, 2);
        dust.uniforms.uSpeed.value = 1;
        face(yl, 1.2, 0.4);
        yl.pose(cue(t, [[0, tt => ({ ...G.rest(tt), r: { lift: 2.3, out: 0.4, bend: 0.3 } })], [1.6, G.offer], [4.2, G.weep], [7, tt => ({ ...G.point(tt), yaw: -0.2 })]]));
        sprig.visible = t > 1.3 && t < 4.2 || t > 7;
        const mounted = t > 4.4;
        traveller.root.visible = !mounted; rider.root.visible = mounted;
        face(traveller, -1.2, 0.6);
        traveller.pose(cue(t, [[0, G.salute], [2.4, G.offer]]));
        rider.pose({ ...G.hold(t), yaw: 0.4 });
        const ride = span(t, 5, 12);
        steed.group.position.set(2.8 + ride * -2.2, 0, -0.6 - ride * 20);
        steed.update(seconds, t > 5 && t < 12);
      } else {
        kit.setEnv(INK_SKY.paper(0.025));
        const t = seconds - at(2);
        cam3(seconds);
        t3.update(seconds);
        prop.update(seconds * 1.4);
        prop.group.position.x = Math.sin(t * 0.4) * 1.2;
        ylStage.pose(cue(t, [[0, tt => ({ ...G.hold(tt), sit: 0.6 })], [5, G.pose], [8, G.offer]]));
        fan.visible = t > 5;
        face(partner, prop.group.position.x, -8);
        partner.pose(cue(t, [[0, G.speak], [8, G.offer]]));
        boards.forEach((b, i) => { b.position.y = 9 - span(t, 0.8 + i * 2.6, 1.6 + i * 2.6) * 4.6; });
      }
    };
  },
});
