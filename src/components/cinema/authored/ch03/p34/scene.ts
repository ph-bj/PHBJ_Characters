import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { plaque } from '../../../stage/architecture';
import { street } from '../../../stage/locations';
import { writing } from '../../../stage/props';
import { cart } from '../../../stage/vehicles';
import { DUSK, blendEnv, lights, move, sets, span } from '../../../stage/direct';
import { PROPRIETOR, XI } from '../actors';
import { accountsRoom } from '../places';

/*
 * Chapter 3, paragraph 34. Day after day: the restaurant front seen from across the street as the
 * light turns from morning to dusk and back, and each time Xi's cart draws up and Xi strides in
 * under the signboard. Then the counter: the proprietor's fingers flick the abacus, and on the bill
 * the brush writes 五十吊, crosses nothing out, and simply writes 三百吊 beside it, while he grins.
 */

export default defineScene({
  seed: 3034,
  build: (kit, story) => {
    const { groups: [road, counter], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const st = street(kit, road);
    lights(kit, road, { key: [8, 10, 6], intensity: 1 });
    const sign = plaque(kit, road, 0.8, 2.2, -5.6, 3, -6); sign.rotation.y = Math.PI / 2;
    writing(kit, sign, '福兴居', { size: 0.4, margin: 0.1, z: 0.07 });
    const c = cart(kit, road, { x: -2.6, z: 8, rot: Math.PI, hood: 0x2f2a26 });
    const xi = figure(kit, road, XI, -3.4, -5);
    const cam1 = move(kit, road, [[0, [4, 2.2, -2], [-5, 1.8, -6]], [at(1), [3, 2, -4], [-5, 1.8, -6.4]]]);

    const room = accountsRoom(kit, counter);
    const boss = figure(kit, counter, PROPRIETOR, -2.6, -2.2);
    const bill = writing(kit, counter, ['五十吊', '三百吊'], { size: 0.2, paper: 0xf4f0e8, margin: 0.3, x: -2.6, y: 1.9, z: -2.9 });
    const cam2 = move(kit, counter, [[at(1), [-1.6, 1.5, -0.8], [-1.9, 1, -2.9]], [at(1) + 8, [-2.2, 1.6, -1.3], [-2.6, 1.8, -2.9]], [36, [-0.4, 1.8, 1.2], [-2.4, 1.4, -2.6]]]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        // Three days in eighteen seconds: each day the cart arrives and Xi goes in.
        const t = seconds % 6;
        kit.setEnv(blendEnv(INK_SKY.paper(0.02), DUSK(0.03), (Math.sin(seconds * Math.PI / 6 - Math.PI / 2) + 1) / 2));
        cam1(seconds);
        st.update(seconds);
        c.group.position.z = 8 - Math.min(t, 3) * 4;
        c.update(seconds, t < 3);
        xi.root.visible = t > 3;
        walkAlong(xi, t, 3.2, 5.6, [[-3.4, -4], [-5.4, -6]], G.behind(t), 4.5);
        xi.fade(1 - span(t, 5.2, 5.8));
        return;
      }
      kit.setEnv(INK_SKY.paper(0.03));
      cam2(seconds);
      room.update(seconds);
      face(boss, -2.6, -3.5);
      boss.pose(cue(seconds, [[at(1), t => ({ ...G.write(t * 3), bow: 0.3 })], [at(1) + 12, t => ({ ...G.laugh(t), yaw: 0.6 })]]));
      bill.set(span(seconds, at(1) + 3, at(1) + 11));
    };
  },
});
