import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure } from '../../../stage/figure';
import { formalHall } from '../../../stage/locations';
import { room } from '../../../stage/architecture';
import { card, coins, lamp, table } from '../../../stage/props';
import { hold } from '../../../stage/performance';
import { smoke } from '../../../stage/fx';
import { DUSK, lights, move, sets, span } from '../../../stage/direct';
import { OLD_WEI } from '../actors';

/*
 * Chapter 2, paragraph 2. In the hall Shixie turns the two red cards over in his fingers, puzzled by
 * their odd titles; Wenhui leans across and taps one: the son of Old Wei? Then Wenhui's story of Old
 * Wei, told in a lamplit back room: a man with a first-rate mind, his brush flying, who spent his
 * hidden virtue drafting lawsuits for silver, coins sliding across his table, until the camera
 * leaves him hunched and smoky: a scoundrel of a scholar.
 */

export default defineScene({
  seed: 2002,
  build: (kit, story) => {
    const { groups: [hallSet, den], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: a peculiar title ----------------------------------------------------------------
    const hall = formalHall(kit, hallSet);
    const shixie = figure(kit, hallSet, CAST.shixie, ...hall.seats.hostL);
    const wenhui = figure(kit, hallSet, CAST.wenhui, ...hall.seats.hostR);
    const cards = [card(kit, shixie.hands.r, '世愚侄', { x: 0, y: 0.05, z: 0.1, w: 0.12, h: 0.3 }), card(kit, shixie.hands.l, '门下晚学生', { x: 0, y: 0.05, z: 0.1, w: 0.12, h: 0.42 })];
    lights(kit, hallSet, { key: [-4, 10, 8], intensity: 1 });
    const cam1 = move(kit, hallSet, [
      [0, [-0.4, 1.3, -1.8], [-0.95, 1.1, -3.0]],
      [6, [0.9, 1.5, -1.2], [-0.4, 1.2, -3.1]],
      [12, [2.6, 1.6, -0.4], [0, 1.3, -3.1]],
      [16, [-2.2, 1.6, -0.2], [0.4, 1.4, -3.1]],
    ]);

    // --- Shot 2: a scoundrel of a scholar ----------------------------------------------------------
    room(kit, den, { w: 7, d: 6, h: 3, back: 'lattice', floorKind: 'boards', wall: 0xb9b2a8 });
    table(kit, den, { w: 1.6, d: 0.8 });
    const oil = lamp(kit, den, { x: 0.6, z: -0.2, y: 0.82, h: 0.3, power: 3 });
    const wei = figure(kit, den, OLD_WEI, 0, -0.9);
    hold(kit, wei, 'brush');
    const client = figure(kit, den, { ...CAST.merchant, headwear: 'cap' }, 0.2, 1.2);
    const pile = coins(kit, den, Array.from({ length: 16 }, (_, k) => [0.2 + (k % 4) * 0.06, 0.83 + Math.floor(k / 4) * 0.005, 0.2 + (k % 3) * 0.05] as [number, number, number]));
    const papers = Array.from({ length: 6 }, (_, k) => kit.mesh(new THREE.PlaneGeometry(0.3, 0.4).rotateX(-Math.PI / 2), new THREE.MeshLambertMaterial({ color: 0xf0ebe2 }), den, -0.5 + k * 0.05, 0.83 + k * 0.003, -0.1 + k * 0.02));
    smoke(kit, den, 0.6, 1.1, -0.2, { h: 1.8, count: 120, size: 0.2 });
    lights(kit, den, { key: [1, 5, 3], intensity: 0.5, fill: 0.1 });
    const cam2 = move(kit, den, [
      [at(1), [1.6, 1.3, 1.6], [0, 1.1, -0.4]],
      [at(1) + 8, [-1.6, 1.2, 0.8], [0.2, 1, 0]],
      [36, [0.2, 2.4, 2.6], [0, 1, -0.6]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.025));
        cam1(seconds);
        shixie.pose(cue(seconds, [[0, t => ({ ...G.read(t), sit: 1 })], [10, t => ({ ...G.think(t), sit: 1 })]]));
        cards.forEach(c => { c.visible = seconds < 10; });
        wenhui.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 1 })], [5, t => ({ ...G.point(t, 'l'), sit: 1, bow: 0.2 })], [9, t => ({ ...G.laugh(t), sit: 1 })]]));
      } else {
        kit.setEnv(DUSK(0.04));
        const t = seconds - at(1);
        cam2(seconds);
        oil.update(seconds);
        face(wei, 0, 1); face(client, 0, -0.9);
        wei.pose(cue(t, [[0, G.write], [7, t2 => ({ ...G.laugh(t2), bow: 0.2 })], [11, t2 => ({ ...G.offer(t2), bow: 0.3 })], [15, t2 => ({ ...G.rest(t2), bow: 0.4, pitch: 0.4 })]]));
        client.pose(cue(t, [[0, G.folded], [9, G.offer], [12, G.bow]]));
        pile.forEach((c, k) => { const u = span(t, 9 + k * 0.08, 10 + k * 0.08); c.position.z = 0.2 + (k % 3) * 0.05 - u * 0.5; c.position.x = 0.2 + (k % 4) * 0.06 - u * 0.3; c.visible = t > 9; });
        papers.forEach((p, k) => { p.visible = t > k * 1.1; });
      }
    };
  },
});
