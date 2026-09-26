import { defineScene } from '../../define';
import { CAST, G, cue, face, figure } from '../../../stage/figure';
import { room } from '../../../stage/architecture';
import { street } from '../../../stage/locations';
import { bed, cup, lamp, pot, table } from '../../../stage/props';
import { cart, horse } from '../../../stage/vehicles';
import { hold } from '../../../stage/performance';
import { DUSK, lights, move, sets, span, blendEnv } from '../../../stage/direct';
import { INK_SKY } from '../../../cinemaKit';

/*
 * Chapter 2, paragraph 11. One evening: Yuanmao is asleep on his bed, snoring, and by the lamp Ziyu
 * and Pincai sit talking. Pincai leans in: the capital's theatre is the finest in the land, and its
 * young dan, the xianggong, carry themselves so grandly. The camera follows his words out into the
 * street: a xianggong riding by in a splendid cart with outriders, a fan at his lips, while grown men
 * step aside and bow.
 */

export default defineScene({
  seed: 2011,
  build: (kit, story) => {
    const { groups: [night, road], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: one evening ------------------------------------------------------------------------
    room(kit, night, { w: 8, d: 6, h: 3, back: 'lattice', floorKind: 'boards' });
    bed(kit, night, { x: -2.6, z: -1.6, rot: Math.PI / 2 });
    const sleeper = figure(kit, night, CAST.yuanmao, -2.6, -1.4);
    sleeper.root.position.set(-2.6, 0.8, -0.6); sleeper.root.rotation.set(-Math.PI / 2, 0, 0, 'YXZ'); sleeper.shadow.visible = false;
    table(kit, night, { x: 1, z: -0.6, w: 1, d: 0.6, h: 0.76 });
    cup(kit, night, 0.8, 0.76, -0.6, 1.3); cup(kit, night, 1.2, 0.76, -0.6, 1.3); pot(kit, night, 1, 0.76, -0.8);
    const glow = lamp(kit, night, { x: 1.2, z: -0.8, y: 0.76, h: 0.35, power: 3 });
    const zy = figure(kit, night, CAST.ziyu, 0.2, -0.6);
    const pc = figure(kit, night, CAST.pincai, 1.8, -0.6);
    lights(kit, night, { key: [2, 5, 3], intensity: 0.4, fill: 0.12 });
    const cam1 = move(kit, night, [
      [0, [-3.4, 1.5, 2.4], [-2.4, 1, -1.6]],
      [7, [-0.8, 1.4, 2.6], [1, 1.2, -0.6]],
      [at(1), [2.8, 1.4, 1.6], [0.8, 1.3, -0.6]],
      [at(1) + 5, [0.9, 1.35, 0.8], [1.8, 1.35, -0.6]],
    ]);

    // --- Shot 2 (latter half): a xianggong's grandeur -----------------------------------------------
    const st = street(kit, road);
    const grand = cart(kit, road, { x: 0, z: -30, rot: 0, hood: 0x2f2a26 });
    const star = figure(kit, grand.seat, { ...CAST.youth, robe: 0xf0ebe2, jacket: 0x3f3a35, fur: true }, 0, 0.3);
    star.shadow.visible = false;
    hold(kit, star, 'fan');
    grand.curtain(1);
    const riders = [-1.4, 1.4].map(x => horse(kit, road, { x, z: -26 }));
    const bowers = [figure(kit, road, CAST.merchant, -3, -6), figure(kit, road, CAST.official, 3, -8), figure(kit, road, CAST.pedant, -3.2, -12)];
    lights(kit, road, { key: [8, 12, 10], intensity: 1 });
    const cam2 = move(kit, road, [
      [at(1) + 9, [4.2, 1.8, 4], [0, 1.6, -20]],
      [36, [-4.6, 1.7, -1], [0, 1.8, -8]],
    ]);

    return (seconds: number, shot: number) => {
      const outside = shot === 1 && seconds > at(1) + 9;
      show(outside ? 1 : 0);
      if (!outside) {
        kit.setEnv(DUSK(0.035));
        cam1(Math.min(seconds, at(1) + 9));
        glow.update(seconds);
        sleeper.pose({ ...G.rest(seconds), mouth: 0.5 + 0.5 * Math.sin(seconds * 1.4), roll: 0.2 });
        face(zy, 1.8, -0.6); face(pc, 0.2, -0.6);
        zy.pose(cue(seconds, [[0, t => ({ ...G.speak(t), sit: 1 })], [at(1), t => ({ ...G.rest(t), sit: 1 })]]));
        pc.pose(cue(seconds, [[0, t => ({ ...G.laugh(t), sit: 1 })], [at(1), t => ({ ...G.speak(t), sit: 1, bow: 0.25 })], [at(1) + 5, t => ({ ...G.argue(t), sit: 1 })]]));
      } else {
        kit.setEnv(blendEnv(INK_SKY.paper(0.02), DUSK(0.02), 0.3));
        const t = seconds - at(1) - 9;
        cam2(seconds);
        st.update(seconds);
        const z = -30 + span(t, 0, 12) * 28;
        grand.group.position.z = z; grand.update(seconds, true);
        riders.forEach((h, i) => { h.group.position.z = z + 4; h.update(seconds + i, true); });
        star.pose({ ...G.fan(t), sit: 1, pitch: -0.2 });
        bowers.forEach(b => { face(b, 0, z); b.pose(Math.abs(b.root.position.z - z) < 5 ? G.bow(t, 0.6) : G.rest(t)); });
      }
    };
  },
});
