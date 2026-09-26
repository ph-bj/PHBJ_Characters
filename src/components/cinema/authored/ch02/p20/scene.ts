import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { formalHall } from '../../../stage/locations';
import { floor } from '../../../stage/architecture';
import { ground, range, willow } from '../../../stage/nature';
import { hold } from '../../../stage/performance';
import { card } from '../../../stage/props';
import { cart } from '../../../stage/vehicles';
import { lights, move, sets } from '../../../stage/direct';
import { OLD_WEI } from '../actors';

/*
 * Chapter 2, paragraph 20, from Wenhui's story. In a prefect's hall the powerful Hou Shiweng arrives
 * and pushes his two relatives forward into the places the prefect had meant for Old Wei; the prefect
 * spreads his hands. Then, making amends, he writes a letter of recommendation and hands it to Old Wei,
 * who bows and sets off down a long road between willows toward some other post.
 */

export default defineScene({
  seed: 2020,
  build: (kit, story) => {
    const { groups: [yamen, road], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: Hou Shiweng's relatives ------------------------------------------------------------
    const hall = formalHall(kit, yamen, { flowers: false, screenKind: 'bamboo' });
    const prefect = figure(kit, yamen, CAST.official, ...hall.seats.hostL);
    const hou = figure(kit, yamen, { ...CAST.elder, headwear: 'official', robe: 0x2f2a26, jacket: 0x1c1816 }, 4, 4);
    const relatives = [figure(kit, yamen, { ...CAST.merchant, headwear: 'cap' }, 4.6, 5), figure(kit, yamen, { ...CAST.pedant }, 3.6, 5.4)];
    const wei = figure(kit, yamen, OLD_WEI, -2.6, 0.6);
    lights(kit, yamen, { key: [-4, 10, 8], intensity: 1 });
    const cam1 = move(kit, yamen, [[0, [4, 1.7, 6.6], [0, 1.3, -1]], [9, [-3.6, 1.6, 3], [0.6, 1.4, -1]], [18, [-2.4, 1.6, 1.4], [1, 1.4, -1.6]]]);

    // --- Shot 2: recommend him elsewhere ----------------------------------------------------------
    ground(kit, road, { w: 400, d: 400, height: 2, flatten: 12, shade: 0xd6d0c6 });
    floor(kit, road, 4, 200, { kind: 'flag', shade: 0xcfc8bc, z: -90, y: 0.02 });
    for (let k = 0; k < 10; k++) for (const side of [-1, 1]) willow(kit, road, side * 4, -k * 10, { h: 6, rand, strands: 20 });
    range(kit, road, { z: -180, span: 500, height: 40, shade: 0xc9c2b7, seed: 220 });
    const traveller = figure(kit, road, OLD_WEI, 0, 2);
    const letter = card(kit, traveller.hands.r, '荐书', { x: 0, y: 0.05, z: 0.1, w: 0.1, h: 0.22, red: false });
    const sender = figure(kit, road, CAST.official, -1.2, 3);
    const hired = cart(kit, road, { x: 0.6, z: -8, rot: Math.PI, hood: 0x6e675f });
    hold(kit, sender, 'brush');
    lights(kit, road, { key: [8, 12, 10], intensity: 1 });
    const cam2 = move(kit, road, [[at(1), [2.4, 1.6, 6], [0, 1.4, 2]], [at(1) + 8, [1.6, 2.4, 8], [0, 1.4, -6]], [36, [0, 8, 16], [0, 0, -40]]]);

    return (seconds: number, shot: number) => {
      show(shot);
      kit.setEnv(INK_SKY.paper(0.02));
      if (shot === 0) {
        cam1(seconds);
        walkAlong(hou, seconds, 0, 4, [[4, 4], [1.6, -1.6]], G.rest(seconds), 4);
        relatives.forEach((r, i) => walkAlong(r, seconds, 0.4, 4.6, [[r.root.position.x, [5, 5.4][i]], [[0.6, 2.2][i], -0.6]], G.folded(seconds), 4));
        if (seconds > 4) { face(hou, -0.95, -3.1); hou.pose(cue(seconds, [[4, G.speak], [6, t => ({ ...G.point(t), yaw: 0.5 })], [10, G.stroke]])); }
        if (seconds > 4.6) relatives.forEach(r => { face(r, -0.95, -3.1); r.pose(G.bow(seconds, 0.5)); });
        prefect.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 1 })], [7, t => ({ ...G.fume(t), sit: 1 })], [12, t => ({ ...G.think(t), sit: 1 })]]));
        face(wei, 0, -1); wei.pose(cue(seconds, [[0, G.folded], [9, t => ({ ...G.rest(t), yaw: 0.6 })]]));
      } else {
        const t = seconds - at(1);
        cam2(seconds);
        hired.update(seconds, false);
        face(sender, 0, 2); face(traveller, -1.2, 3);
        sender.pose(cue(t, [[0, G.offer], [3, G.salute], [6, G.rest]]));
        if (t < 5) traveller.pose(cue(t, [[0, G.offer], [2.4, t2 => G.bow(t2, 0.7)]]));
        else walkAlong(traveller, t, 5, 18, [[0, 2], [0.2, -6], [0.3, -40]], G.behind(t), 4);
        letter.visible = t > 2;
      }
    };
  },
});
