import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { banquetHall, theatre } from '../../../stage/locations';
import { bareTree, ground, range } from '../../../stage/nature';
import { coins } from '../../../stage/props';
import { hold, qilin } from '../../../stage/performance';
import { mist, specks } from '../../../stage/fx';
import { blendEnv, DUSK, lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 35: Ziyu's case against the actors, as he imagines it. At a banquet a young
 * dan pours for one patron, simpers, and flits to the next (朝秦暮楚). On stage the coins rain down
 * and he stoops for them with a forced smile, kneeling to the richest. Then the two images of his
 * scorn: a donkey plodding out in a qilin's hide (麒麟楦), and, in a bare field in the mist, a great
 * stele with nothing written on it (没字碑), which the camera climbs.
 */

export default defineScene({
  seed: 1035,
  build: (kit, story) => {
    const { groups: [feast, stageSet, field], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: serving with their looks -----------------------------------------------------------
    const hall = banquetHall(kit, feast);
    const patrons = hall.seats.slice(0, 5).map(([x, z, r], i) => { const f = figure(kit, feast, [CAST.official, CAST.merchant, CAST.guest, CAST.official, CAST.merchant][i], x, z); f.root.rotation.y = r; f.pose({ ...G.rest(), sit: 1 }); return f; });
    const flirt = figure(kit, feast, { ...CAST.youth, robe: 0x9c958b, sash: 0xc0321e }, 2.4, 1);
    const ewer = hold(kit, flirt, 'cup');
    lights(kit, feast, { key: [-5, 10, 6], intensity: 1 });
    const cam1 = move(kit, feast, [
      [0, [4.6, 2.2, 4.6], [0, 1.2, 0]],
      [6, [-1, 1.7, 3.6], [0, 1.2, 0]],
      [12, [-4.4, 2.4, 2.6], [-1, 1.2, -1]],
    ]);

    // --- Shot 2: their only love is money -------------------------------------------------------
    const t2 = theatre(kit, stageSet);
    const beggar = figure(kit, stageSet, { ...CAST.dan, robe: 0x8c857c }, 0, -6.6);
    beggar.root.position.y = 1.2;
    const coinFall = Array.from({ length: 30 }, () => ({ x: (rand() - 0.5) * 5, z: -6 + rand() * 1.4, d: rand() * 3 }));
    const coinMeshes = coins(kit, stageSet, coinFall.map(c => [c.x, 1.25, c.z]));
    const richest = figure(kit, stageSet, { ...CAST.merchant, headwear: 'official' }, 1.4, -1.6);
    lights(kit, stageSet, { key: [2, 12, 6], intensity: 0.9 });
    const cam2 = move(kit, stageSet, [
      [at(1), [0, 1.3, 1], [0, 1.8, -6.6]],
      [at(1) + 6, [-3, 2.4, -3], [0, 1.4, -6.2]],
      [at(2), [2.2, 1.9, -3.4], [0, 1.5, -5]],
    ]);

    // --- Shot 3: a qilin's hide on a donkey, a stele with no inscription -----------------------
    ground(kit, field, { w: 300, d: 300, height: 1, flatten: 10, shade: 0xd6d0c6 });
    for (let k = 0; k < 6; k++) bareTree(kit, field, -20 + k * 8, -18 - rand() * 6, 5 + rand() * 2, rand);
    range(kit, field, { z: -100, span: 300, height: 25, shade: 0xc9c2b7, seed: 135 });
    const donkey = qilin(kit, field, { x: -6, z: 2, s: 0.8, shade: 0x9c958b });
    // Long ears poke out of the costume.
    for (const side of [-1, 1]) kit.mesh(new THREE.ConeGeometry(0.06, 0.45, 6), tone(0x6e675f), donkey.head, side * 0.12, 0.2, -0.15).rotation.z = -side * 0.5;
    const stele = kit.group(field, 3, 0, -4);
    const turtle = kit.mesh(new THREE.SphereGeometry(1.4, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), tone(0x6e675f), stele);
    turtle.scale.set(1, 0.6, 1.5);
    kit.mesh(new THREE.SphereGeometry(0.4, 12, 10), tone(0x6e675f), stele, 0, 0.3, 2.1);
    kit.box(stele, tone(0xb9b2a8), [0, 3.6, 0], [2.2, 5.8, 0.6]);
    kit.box(stele, tone(0xe6e0d6), [0, 3.4, 0.31], [1.7, 4.6, 0.02]);
    kit.mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.6, 24, 1, false, 0, Math.PI), tone(0x9c958b), stele, 0, 6.5, 0).rotation.set(Math.PI / 2, 0, Math.PI / 2);
    const fog = mist(kit, field, { count: 10, w: 50, y: -0.5, d: 20, z: -6, size: 10, opacity: 0.6 });
    const crows = specks(kit, field, { count: 18, w: 20, h: 4, d: 10, fall: 0, wind: 0.6, swirl: 1.5, size: 0.12, dark: true, y: 9, z: -6 });
    lights(kit, field, { key: [-8, 10, 8], intensity: 1 });
    const cam3 = move(kit, field, [
      [at(2), [-6, 1.2, 8], [-5, 1.3, 2]],
      [at(2) + 4, [-1, 1.4, 7], [0, 1.6, 0]],
      [at(2) + 8, [4.6, 2.2, 3], [3, 3.2, -4]],
      [36, [3.4, 7, 1.4], [3, 5.2, -4]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.03));
        cam1(seconds);
        hall.update(seconds);
        // From patron to patron round the table, pouring and simpering at each.
        const stops = [0, 1, 2, 3].map(i => { const [x, z] = hall.seats[i]; return [x * 1.45, z * 1.45] as [number, number]; });
        const leg = Math.min(3, Math.floor(seconds / 3));
        const lt = seconds - leg * 3;
        if (lt < 1.2 && leg > 0) walkAlong(flirt, lt, 0, 1.2, [stops[leg - 1], stops[leg]], G.rest(seconds), 7);
        else { const [x, z] = stops[leg]; flirt.root.position.set(x, 0, z); face(flirt, hall.seats[leg][0], hall.seats[leg][1]); flirt.pose(cue(lt, [[0, G.offer], [1.8, t => ({ ...G.shy(t), roll: 0.2 })]])); }
        ewer.visible = true;
        patrons.forEach((p, i) => p.pose(i === leg ? { ...G.laugh(seconds), sit: 1 } : { ...G.toast(seconds + i), sit: 1 }));
      } else if (shot === 1) {
        kit.setEnv(blendEnv(INK_SKY.paper(0.02), DUSK(0.02), 0.3));
        const t = seconds - at(1);
        cam2(seconds);
        t2.update(seconds);
        coinMeshes.forEach((c, i) => { const f = Math.max(0, t - coinFall[i].d); c.position.y = Math.max(1.25, 5 - f * f * 4.9); c.rotation.x = f * 5; });
        face(beggar, beggar.root.position.x, 2);
        beggar.root.position.z = -6.6 + span(t, 7, 9) * 2;
        beggar.pose(cue(t, [[0, G.laugh], [3, t2_ => ({ ...G.offer(t2_), bow: 0.8, kneel: 0.3 })], [7, t2_ => ({ ...G.laugh(t2_), walk: t2_ * 6 })], [9, G.kowtow]]));
        face(richest, 0, -6.6);
        richest.pose(cue(t, [[0, G.stroke], [9, G.laugh]]));
      } else {
        kit.setEnv(INK_SKY.paper(0.03));
        const t = seconds - at(2);
        cam3(seconds);
        fog.update(seconds);
        crows.uniforms.uSpeed.value = 1;
        donkey.update(seconds * 0.6, t < 5);
        donkey.group.position.x = -6 + span(t, 0, 5) * 2.4;
        donkey.group.rotation.y = Math.PI / 2;
      }
    };
  },
});
