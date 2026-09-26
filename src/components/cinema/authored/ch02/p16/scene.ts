import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure } from '../../../stage/figure';
import { canal, street } from '../../../stage/locations';
import { cityGate, room } from '../../../stage/architecture';
import { lamp, table } from '../../../stage/props';
import { cart } from '../../../stage/vehicles';
import { DUSK, lights, move, sets, span } from '../../../stage/direct';
import { MASTER, QIGUAN, QINGUAN } from '../actors';

/*
 * Chapter 2, paragraph 16. The day of arrival: the troupe's boat ties up under the capital's water
 * gate while Pincai's baggage is carried ashore. Then, as Pincai describes their clothes, the two boys
 * stand turning slowly in the lamplight between the friends: blue crepe fur coats, dark riding
 * jackets. The blue-hooded cart comes down a street drawn by a white mule, the old master inside with
 * Qiguan. And Ziyu claps his hands and laughs, "I have seen them!", and Pincai beams.
 */

export default defineScene({
  seed: 2016,
  build: (kit, story) => {
    const { groups: [dock, night, road], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: the same day -------------------------------------------------------------------
    const c = canal(kit, dock);
    const gateTower = kit.group(dock, 0, 0, -30);
    cityGate(kit, gateTower, { w: 90, h: 11 });
    const arrivals = [figure(kit, c.troupe.deck, QINGUAN, 0.2, 2), figure(kit, c.troupe.deck, CAST.pincai, -0.3, -1)];
    arrivals.forEach(f => { f.root.position.y = 0.37; });
    lights(kit, dock, { key: [-10, 8, 8], intensity: 1 });
    const cam1 = move(kit, dock, [[0, [-16, 5, 16], [0, 4, -20]], [8, [-6, 2.4, 7], [0, 1.4, 0]]]);

    // --- Shots 2 and 4: in the lamplit room ---------------------------------------------------------
    room(kit, night, { w: 8, d: 6, h: 3, back: 'lattice', floorKind: 'boards' });
    table(kit, night, { x: 0, z: -1.6, w: 1.2, d: 0.6, h: 0.76 });
    const glow = lamp(kit, night, { x: 0.4, z: -1.7, y: 0.76, h: 0.35, power: 3 });
    const zy = figure(kit, night, CAST.ziyu, -1.4, -1.2);
    const pc = figure(kit, night, CAST.pincai, 1.4, -1.2);
    const boys = [figure(kit, night, QINGUAN, -0.35, 0.2), figure(kit, night, QIGUAN, 0.4, 0.3)];
    boys.forEach(b => { b.shadow.visible = false; });
    lights(kit, night, { key: [2, 5, 3], intensity: 0.5, fill: 0.15 });
    const cam2 = move(kit, night, [[at(1), [0, 1.5, 2.8], [0, 1.2, 0.2]], [at(2), [0.9, 1.3, 1.6], [0, 1.1, 0.2]]]);
    const cam4 = move(kit, night, [[at(3), [0, 1.6, 2.4], [0, 1.3, -1.2]], [36, [-2.8, 1.5, 0.6], [0.4, 1.4, -1.2]]]);

    // --- Shot 3: a white mule -----------------------------------------------------------------------
    const st = street(kit, road);
    const blue = cart(kit, road, { x: 1.2, z: -40, rot: 0, hood: 0x3f4f6a, paleMule: true });
    blue.curtain(0.9);
    const master = figure(kit, blue.seat, MASTER, -0.2, 0);
    const qi = figure(kit, blue.seat, QIGUAN, 0.25, 0.2);
    for (const f of [master, qi]) f.shadow.visible = false;
    lights(kit, road, { key: [8, 12, 10], intensity: 1 });
    const cam3 = move(kit, road, [[at(2), [-2.4, 1.2, 4], [1.2, 1.4, -20]], [at(3), [-1.8, 1.6, -4], [1.2, 1.4, -2]]]);

    return (seconds: number, shot: number) => {
      show(shot === 0 ? 0 : shot === 2 ? 2 : 1);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam1(seconds);
        c.update(seconds);
        c.troupe.group.position.x = -20 + span(seconds, 0, 8) * 20;
        arrivals.forEach(f => f.pose(G.folded(seconds)));
      } else if (shot === 2) {
        kit.setEnv(INK_SKY.paper(0.02));
        const t = seconds - at(2);
        cam3(seconds);
        st.update(seconds);
        blue.group.position.z = -40 + span(t, 0, 9) * 38;
        blue.update(seconds, true);
        master.pose({ ...G.stroke(t), sit: 1 }); qi.pose({ ...G.folded(t), sit: 1 });
      } else {
        kit.setEnv(DUSK(0.035));
        glow.update(seconds);
        face(zy, 1.4, -1.2); face(pc, -1.4, -1.2);
        if (shot === 1) {
          cam2(seconds);
          const t = seconds - at(1);
          boys.forEach((b, i) => { b.fade(0.7 * span(t, 0, 1.5)); b.root.rotation.y = t * 0.6 + i * Math.PI; b.pose(G.folded(t)); });
          zy.pose({ ...G.think(t), sit: 1 }); pc.pose({ ...G.speak(t), sit: 1 });
        } else {
          cam4(seconds);
          const t = seconds - at(3);
          boys.forEach(b => { b.root.visible = false; });
          zy.pose(cue(t, [[0, tt => ({ ...G.clap(tt), sit: 1 })], [3, tt => ({ ...G.laugh(tt), sit: 1 })], [6, tt => ({ ...G.speak(tt), sit: 1 })]]));
          pc.pose(cue(t, [[0, tt => ({ ...G.rest(tt), sit: 1 })], [3, tt => ({ ...G.laugh(tt), sit: 1 })], [6, tt => ({ ...G.clap(tt), sit: 1 })]]));
        }
      }
    };
  },
});
