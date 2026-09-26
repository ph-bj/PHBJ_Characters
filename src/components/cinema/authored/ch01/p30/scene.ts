import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone } from '../../../stage/figure';
import { crowd } from '../../../stage/architecture';
import { theatre, garden } from '../../../stage/locations';
import { lotus, range, reeds, water, willow } from '../../../stage/nature';
import { stool, writing } from '../../../stage/props';
import { boat } from '../../../stage/vehicles';
import { hold } from '../../../stage/performance';
import { specks } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 30: Wang Guibao, "lotus in the autumn waters". Low over a pond of autumn
 * lotus, leaves browning, a small boat noses through, Guibao leaning out to pluck a seed-head. In a
 * garden a gloomy old scholar sits alone until Guibao rattles his ivory clappers and teases him into
 * laughter. Then the theatre on Feigning Jealousy: people standing several deep, the galleries
 * crammed, and on stage Guibao flouncing away from a lover who pleads.
 */

const A = ACTORS.guibao;

export default defineScene({
  seed: 1030,
  build: (kit, story) => {
    const { groups: [pond, yard, house], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: lotus in the autumn waters ---------------------------------------------------------
    water(kit, pond, { w: 200, d: 120, z: -30, line: 0x9c958b });
    lotus(kit, pond, 0, -4, { count: 60, rand, radius: 12, flowers: 3 });
    reeds(kit, pond, 0, -18, { w: 60, d: 4, count: 220, h: 1.6, rand });
    for (let k = 0; k < 3; k++) willow(kit, pond, -14 + k * 14, -22, { h: 7, rand, strands: 26 });
    range(kit, pond, { z: -110, span: 400, height: 26, shade: 0xc9c2b7, seed: 111 });
    const skiff = boat(kit, pond, { x: 4, z: 2, rot: -Math.PI / 2 + 0.3, len: 4.5, cabin: false });
    const gb = figure(kit, skiff.deck, A.plain, 0, 0.8);
    gb.root.position.y = 0.37;
    const pod = kit.mesh(new THREE.CylinderGeometry(0.09, 0.05, 0.1, 12), tone(0x4a443e), gb.hands.r, 0, -0.1, 0.05);
    const falling = specks(kit, pond, { count: 400, w: 30, h: 8, d: 20, fall: 0.4, wind: 0.6, size: 0.03, dark: true, y: 4 });
    const emblem = writing(kit, pond, ['秋水芙蓉', A.name], { size: 0.6, gap: 1.4, margin: 0.2, x: -5, y: 3.6, z: -8 });
    const facts = writing(kit, pond, ['字蕊香', '年十五岁', '兰保之弟'], { size: 0.3, gap: 1.4, margin: 0.2, x: -7, y: 3.1, z: -8 });
    lights(kit, pond, { key: [-8, 10, 8], intensity: 1 });
    const cam1 = move(kit, pond, [
      [0, [-2, 0.5, 9], [2, 0.8, 0]],
      [10, [1, 1.6, 5.4], [0, 1.8, -4]],
    ]);

    // --- Shot 2: a flower that understands speech -----------------------------------------------
    const g = garden(kit, yard);
    stool(kit, yard, 2, 3);
    const scholar = figure(kit, yard, { ...CAST.pedant, robe: 0x6e675f }, 2, 3);
    const player = figure(kit, yard, A.plain, 0.6, 4.2);
    const clappers = hold(kit, player, 'clappers');
    lights(kit, yard, { key: [6, 10, 8], intensity: 1 });
    const cam2 = move(kit, yard, [
      [at(1), [5, 1.6, 8], [1.4, 1.1, 3.4]],
      [at(1) + 6, [0.2, 1.3, 7], [1.5, 1.2, 3.4]],
      [at(2), [3.4, 1.2, 5.6], [1.4, 1.2, 3.6]],
    ]);

    // --- Shot 3: Feigning Jealousy, the crowd several deep --------------------------------------
    const t3 = theatre(kit, house);
    const standing: [number, number][] = [];
    for (let r = 0; r < 4; r++) for (let k = 0; k < 16; k++) standing.push([-7.5 + k + (rand() - 0.5) * 0.4, -4.4 - r * 0.6 + 8.8 + rand() * 0.2]);
    const throng = crowd(kit, house, standing, rand, { standing: true });
    const jealous = figure(kit, house, A.costume, 0.8, -8);
    jealous.root.position.y = 1.2;
    hold(kit, jealous, 'fan');
    const lover = figure(kit, house, CAST.wangxun, -1.2, -7.8);
    lover.root.position.y = 1.2;
    lights(kit, house, { key: [2, 12, 8], intensity: 0.9 });
    const cam3 = move(kit, house, [
      [at(2), [0, 1.8, 11], [0, 1.6, 4]],
      [at(2) + 6, [0, 4.2, 7], [0, 2.4, -8]],
      [36, [2.4, 2.6, -3.4], [0, 2.3, -8]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam1(seconds);
        skiff.update(seconds);
        skiff.group.position.x = 4 - span(seconds, 0, 10) * 3;
        falling.uniforms.uSpeed.value = 1;
        face(gb, -3, 6);
        gb.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 0.5 })], [2.5, t => ({ ...G.point(t), bow: 0.4, sit: 0.5 })], [5, t => ({ ...G.laugh(t), sit: 0.5, r: { lift: 1.5, out: 0.3, bend: 0.5 } })]]));
        pod.visible = seconds > 4;
        emblem.set(span(seconds, 4, 7)); facts.set(span(seconds, 6.5, 8.5));
      } else if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.02));
        const t = seconds - at(1);
        cam2(seconds);
        g.update(seconds);
        face(scholar, 0.6, 4.2);
        scholar.pose(cue(t, [[0, tt => ({ ...G.weep(tt), sit: 1 })], [5, tt => ({ ...G.rest(tt), sit: 1, pitch: 0.2 })], [8, tt => ({ ...G.laugh(tt), sit: 1 })]]));
        face(player, 2, 3);
        player.pose(cue(t, [[0, tt => ({ ...G.rest(tt), r: { lift: 1.5, out: 0.3, bend: 1 + Math.sin(tt * 10) * 0.3 } })], [4, tt => ({ ...G.dance(tt, 2), flutter: 0 })], [8, G.laugh]]));
        player.root.position.x = 0.6 + Math.sin(t * 1.4) * 0.5 * span(t, 4, 5);
        clappers.rotation.z = Math.sin(t * 12) * 0.2;
      } else {
        kit.setEnv(INK_SKY.paper(0.025));
        const t = seconds - at(2);
        cam3(seconds);
        t3.update(seconds); throng.update(seconds * 1.3);
        jealous.root.rotation.y = Math.PI * 0.2 + span(t, 3, 4) * Math.PI * 0.8 - span(t, 9, 10) * Math.PI;
        jealous.pose(cue(t, [[0, G.pose], [3, G.fume], [5, tt => ({ ...G.behind(tt), roll: 0.2 })], [9, G.shy], [11, G.laugh]]));
        face(lover, jealous.root.position.x, -8);
        lover.pose(cue(t, [[0, G.speak], [5, G.salute], [8, tt => G.bow(tt, 0.7)]]));
      }
    };
  },
});
