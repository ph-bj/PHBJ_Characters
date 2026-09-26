import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong, type Figure } from '../../../stage/figure';
import { street } from '../../../stage/locations';
import { cart } from '../../../stage/vehicles';
import { aim, lights, move, sets, span } from '../../../stage/direct';
import { FU_SAN, GUI_FEN, PINCAI, RONGGUAN, SI_ER } from '../actors';
import { earring } from '../places';
import { where } from '../../ch02/banquet';

/*
 * Chapter 3, paragraph 25. At the kerb Pincai hands himself up into Rongguan's cart after the boy;
 * Si'er hops onto the shaft and Rongguan's page perches on the tail, while Fu and Gui climb into the
 * other. The carts roll off down the crowded street, the camera tracking alongside past the shop
 * fronts. Then inside the swaying cab, knee to knee: Pincai talking with his hands, Rongguan
 * laughing behind his sleeve, blushing at the praise.
 */

export default defineScene({
  seed: 3025,
  build: (kit, story) => {
    const { groups: [road], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const st = street(kit, road);
    lights(kit, road, { key: [8, 10, 6], intensity: 1 });
    const carts = [0, 1].map(k => cart(kit, road, { x: -1.6 + k * 0.4, z: 6 - k * 5, rot: Math.PI, hood: k ? 0x3f3a35 : 0x6e675f }));
    const [mine, theirs] = carts;
    mine.curtain(0.9);
    const rider = (spec: typeof PINCAI, c: typeof mine, x: number) => { const f = figure(kit, c.seat, spec, x, -0.1); f.root.scale.setScalar(0.8); f.root.position.y = -0.33; f.shadow.visible = false; return f; };
    const pincaiIn = rider(PINCAI, mine, -0.22);
    const rongIn = rider(RONGGUAN, mine, 0.22);
    earring(kit, rongIn);
    const fuIn = rider(FU_SAN, theirs, -0.22);
    const guiIn = rider(GUI_FEN, theirs, 0.22);
    const siEr = figure(kit, mine.group, SI_ER, 0.45, 1.25); siEr.root.position.y = 0.55; siEr.shadow.visible = false;
    const page = figure(kit, mine.group, CAST.page, 0, -1.05); page.root.position.y = 0.55; page.root.rotation.y = Math.PI; page.shadow.visible = false;
    // Out on the kerb before they climb in.
    const walkers: Figure[] = [PINCAI, RONGGUAN, FU_SAN, GUI_FEN].map((s, k) => figure(kit, road, s, -4.6, 5 - k * 0.8));
    const cam1 = move(kit, road, [[0, [-5.8, 1.7, 10], [-2, 1.3, 4]], [at(1), [-6, 2, 4], [-1.8, 1.4, 2]]]);
    const riders = [pincaiIn, rongIn, fuIn, guiIn];

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.02));
      st.update(seconds);
      // Boarding: the walkers reach their cart and vanish inside, the riders appear.
      walkers.forEach((w, k) => {
        const c = k < 2 ? mine : theirs;
        const t0 = 1 + k * 1.2;
        walkAlong(w, seconds, t0, t0 + 2.5, [[-4.6, 5 - k * 0.8], [-2.6, c.group.position.z + 1.6]], G.rest(seconds), 5);
        w.fade(1 - span(seconds, t0 + 2.5, t0 + 3));
        riders[k].fade(span(seconds, t0 + 2.6, t0 + 3));
      });
      siEr.fade(span(seconds, 6, 6.5)); page.fade(span(seconds, 6.4, 6.9));
      // The carts roll off along the street (toward -z).
      const go = Math.max(0, seconds - 9);
      carts.forEach((c, k) => { c.group.position.z = (6 - k * 5) - go * 1.6; c.update(seconds, go > 0); });
      face(siEr, 0, 3); siEr.pose({ ...G.rest(seconds), sit: 1 });
      page.pose({ ...G.rest(seconds), sit: 1 });
      pincaiIn.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 1 })], [at(1), t => ({ ...G.speak(t), sit: 1, yaw: 0.6 })], [at(2) + 4, t => ({ ...G.argue(t), sit: 1, yaw: 0.6 })]]));
      rongIn.pose(cue(seconds, [[0, t => ({ ...G.rest(t), sit: 1 })], [at(1), t => ({ ...G.laugh(t), sit: 1, yaw: -0.5 })], [at(2) + 6, t => ({ ...G.shy(t), sit: 1 })]]));
      rongIn.blush(span(seconds, at(2) + 6, at(2) + 8));
      fuIn.pose({ ...G.laugh(seconds), sit: 1 }); guiIn.pose({ ...G.rest(seconds), sit: 1 });
      if (shot === 0) { cam1(seconds); return; }
      if (shot === 1) {
        const [cx, , cz] = where(mine.cab, road);
        aim(kit, road, [cx - 4.5, 2 + Math.sin(seconds * 0.3) * 0.2, cz - 3], [cx, 1.3, cz - 1.2], 0.3);
        return;
      }
      // Inside the cab, from the front, looking back at the two.
      const [cx, cy, cz] = where(mine.seat, road);
      aim(kit, road, [cx + Math.sin(seconds * 3) * 0.01, cy + 0.72, cz - 0.62], [cx, cy + 0.62, cz], 0);
    };
  },
});
