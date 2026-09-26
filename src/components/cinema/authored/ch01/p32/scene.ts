import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue, face, figure } from '../../../stage/figure';
import { floor, moonGate, pavilion } from '../../../stage/architecture';
import { bamboo, cloudBank, plumTree, rock, water } from '../../../stage/nature';
import { writing } from '../../../stage/props';
import { hold, moon, qilin, terrace } from '../../../stage/performance';
import { mist, petals } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 32: Lin Chunxi, "a jade qilin from the heavens", the youngest. A pale qilin
 * gallops down through banks of cloud with the boy on its back and lands on a marble terrace in the
 * sky, where he slides down, holding his censer, as the emblem is written. Then Suzhou: through a
 * moon gate into a garden of rocks and bamboo, where the fourteen-year-old stands by a plum.
 */

const A = ACTORS.chunxi;

export default defineScene({
  seed: 1032,
  build: (kit, story) => {
    const { groups: [heaven, suzhou], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: the qilin comes down ---------------------------------------------------------------
    const deck = terrace(kit, heaven, { w: 12, d: 9, h: 1 });
    cloudBank(kit, heaven, 0, 0, 0, { w: 40, puffs: 50, rand, size: 1.4 });
    const banks = Array.from({ length: 8 }, (_, k) => cloudBank(kit, heaven, -20 + k * 6, 6 + (k % 3) * 4, -14 - (k % 2) * 8, { w: 8, puffs: 10, rand, size: 0.8 }));
    moon(kit, heaven, 16, 20, -70, 7);
    const beast = qilin(kit, heaven, { s: 1.1 });
    const rider = figure(kit, beast.group, A.costume, 0, 0);
    rider.shadow.visible = false;
    const boy = figure(kit, heaven, A.costume, 1.4, 1);
    boy.root.position.y = deck.top;
    hold(kit, boy, 'censer');
    const emblem = writing(kit, heaven, ['天上玉麟', A.name], { size: 0.6, gap: 1.4, margin: 0.2, x: -3.6, y: deck.top + 3.2, z: -4 });
    const seal = kit.seal(heaven, A.seal, 0.5);
    seal.mesh.position.set(-4, deck.top + 0.6, -3.95);
    const drift = mist(kit, heaven, { count: 12, w: 60, y: -2, d: 40, z: -10, size: 14, opacity: 0.8, drift: 1 });
    lights(kit, heaven, { key: [-6, 16, 10], intensity: 1.1 });
    const cam1 = move(kit, heaven, [
      [0, [-10, 12, 16], [-6, 12, -8]],
      [7, [-4, 6, 12], [0, 3, 0]],
      [13, [4, 2.6, 7], [0.4, 2.2, 0]],
      [20, [-1, 2.8, 6], [-2.4, 3.4, -4]],
    ]);

    // --- Shot 2: fourteen, of Suzhou ---------------------------------------------------------------
    floor(kit, suzhou, 60, 60, { kind: 'flag', shade: 0xd9d3c9 });
    moonGate(kit, suzhou, { z: 4, span: 20, r: 1.4 });
    for (let k = 0; k < 6; k++) rock(kit, suzhou, -7 + k * 2.6 + rand(), -6 - rand() * 3, { h: 1.4 + rand() * 2.4, rand });
    const groves = [bamboo(kit, suzhou, -8, -2, { h: 7, count: 10, rand }), bamboo(kit, suzhou, 8, -4, { h: 7, count: 10, rand })];
    water(kit, suzhou, { w: 10, d: 4, x: 2, z: -3, y: 0.02 });
    pavilion(kit, suzhou, { x: 5, z: -9, r: 1.6, h: 2.4, sides: 6 });
    plumTree(kit, suzhou, -1.6, -1, { h: 3.4, rand, blossoms: 120 });
    const kid = figure(kit, suzhou, A.plain, -0.8, -0.2);
    const fall = petals(kit, suzhou, { count: 60, w: 6, h: 4, d: 5, x: -1, z: -1 });
    const facts = writing(kit, suzhou, ['字小梅', '年十四岁', '姑苏人'], { size: 0.3, gap: 1.4, margin: 0.3, x: 2.4, y: 2.2, z: 3.7, paper: 0xf4f0e8 });
    lights(kit, suzhou, { key: [6, 10, 8], intensity: 1 });
    const cam2 = move(kit, suzhou, [
      [at(1), [0, 1.6, 12], [0, 1.4, 4]],
      [at(1) + 7, [0, 1.5, 3.6], [-0.6, 1.2, -0.4]],
      [36, [1.8, 1.4, 1.8], [-0.8, 1.2, -0.3]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.moonlit([0.25, 0.3, -1], 0.012));
        cam1(seconds);
        drift.update(seconds);
        banks.forEach((b, k) => { b.position.x = -20 + k * 6 + seconds * 0.5; });
        // Down a long arc from the clouds to the terrace.
        const u = span(seconds, 0, 10);
        beast.group.position.set(-16 + u * 15, 14 * (1 - u) * (1 - u) + deck.top, -10 + u * 10);
        beast.group.rotation.y = 0.9 - u * 0.9;
        beast.update(seconds, u < 1);
        rider.root.position.y = 1.55;
        rider.pose({ ...G.hold(seconds), sit: 0.8, flutter: 0.8 });
        const off = seconds > 11;
        rider.root.visible = !off; boy.root.visible = off;
        face(boy, 2, 8);
        boy.pose(cue(seconds, [[11, G.offer], [15, G.folded]]));
        emblem.set(span(seconds, 12, 15.5));
        seal.material.opacity = span(seconds, 16, 16.5);
      } else {
        kit.setEnv(INK_SKY.paper(0.025));
        const t = seconds - at(1);
        cam2(seconds);
        groves.forEach(g => g.update(seconds)); fall.update(seconds);
        face(kid, 0, 4);
        kid.pose(cue(t, [[0, t2 => ({ ...G.rest(t2), r: { lift: 1.6, out: 0.4, bend: 0.3 }, pitch: -0.3, yaw: -0.5 })], [6, G.folded], [9, G.shy]]));
        facts.set(span(t, 1.5, 6));
      }
    };
  },
});
