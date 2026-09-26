import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { courtyard, lanternRow } from '../../../stage/locations';
import { card, cup, dishes } from '../../../stage/props';
import { DUSK, lights, move, sets, span } from '../../../stage/direct';
import { PINCAI, XU_SHUN } from '../actors';
import { accountsRoom, hotpot } from '../places';

/*
 * Chapter 3, paragraph 1. Dusk in the Mei courtyard: Pincai comes in through the flower gate,
 * glances toward the study where supper is long over, and turns to go out again, when a page
 * hurries past with a tray, a hotpot steaming on it, and the steward Xu Shun at his heel. Xu Shun
 * stops and asks after his supper. Inside the accounts room, among ledgers and the abacus, the
 * camera takes in the steward's world, the clock ticking; then the two men stand at the round
 * table, each waving the other to sit first, until Pincai pulls Xu Shun down beside him.
 */

export default defineScene({
  seed: 3001,
  build: (kit, story) => {
    const { groups: [yard, office], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- The courtyard at dusk --------------------------------------------------------------------
    const c = courtyard(kit, yard);
    const swing = lanternRow(kit, yard, [-9, 3, -1], [-9, 3, -5], 3);
    const pincai = figure(kit, yard, PINCAI, 0, 9);
    const page = figure(kit, yard, CAST.page, 8, -2);
    const tray = kit.group(page.hands.r, -0.12, 0.02, 0.15);
    kit.box(tray, tone(0x6e675f), [0, 0, 0], [0.5, 0.03, 0.4]);
    hotpot(kit, tray, 0, 0.02, 0.02, 0.7);
    dishes(kit, tray, 0.02, [[-0.17, -0.1], [0.17, -0.1]], kit.rand);
    const xu = figure(kit, yard, XU_SHUN, 9, -2.4);
    lights(kit, yard, { key: [-8, 6, 6], intensity: 0.8, fill: 0.3 });
    const cam1 = move(kit, yard, [[0, [2.2, 1.5, 4.6], [0, 1.5, 8]], [6, [3, 1.7, 5], [0.5, 1.4, 1]], [at(1), [-2.2, 1.6, 3.6], [1.4, 1.4, -0.4]], [at(2), [-1.6, 1.55, 2.4], [1.2, 1.5, -0.6]]]);

    // --- The accounts room ------------------------------------------------------------------------------
    const room = accountsRoom(kit, office);
    const [tx, tz] = room.table;
    hotpot(kit, office, tx, 0.8, tz);
    dishes(kit, office, 0.8, [[tx - 0.35, tz + 0.1], [tx + 0.35, tz + 0.15]], kit.rand);
    const [sa, sb] = room.seats;
    cup(kit, office, sa[0] + 0.35, 0.8, sa[1] + 0.1); cup(kit, office, sb[0] - 0.35, 0.8, sb[1] + 0.1);
    card(kit, office, '账', { x: -2.6, y: 2.4, z: -3.85, w: 0.5, h: 0.8, red: true });
    const p2 = figure(kit, office, PINCAI, tx, tz + 1.6);
    const x2 = figure(kit, office, XU_SHUN, -2.6, -2.2);
    const cam3 = move(kit, office, [[at(2), [-1.4, 1.5, 0.2], [-2.4, 1.1, -2.9]], [at(2) + 5, [1.8, 1.7, 2.8], [tx, 1, tz]], [36, [tx + 0.2, 1.5, tz + 2.1], [tx, 1.05, tz]]]);

    return (seconds: number, shot: number) => {
      const inside = shot === 2;
      show(inside ? 1 : 0);
      kit.setEnv(inside ? INK_SKY.paper(0.03) : DUSK(0.025));
      if (!inside) {
        cam1(seconds);
        swing(seconds);
        c.flowerGate.open(1);
        // Pincai comes in, looks toward the study, turns to go out again.
        walkAlong(pincai, seconds, 0, 5, [[0, 9], [0.2, 3.5], [0.4, 1.6]], G.rest(seconds), 5);
        if (seconds > 5) {
          face(pincai, seconds < 8 ? -8 : seconds < at(1) ? 6 : xu.root.position.x, seconds < 8 ? -3 : xu.root.position.z);
          pincai.pose(cue(seconds, [[5, G.behind], [8, G.think], [at(1), t => G.salute(t, 0.2)], [at(1) + 3, G.speak]]));
        }
        walkAlong(page, seconds, 6, 12, [[8, -2], [4, 0], [-4, -1], [-8.5, -3]], { ...G.hold(seconds), bow: 0.05 }, 7);
        walkAlong(xu, seconds, 7, 12.2, [[9, -2.4], [3, 0.4], [1.3, 0.6]], G.folded(seconds), 5.5);
        if (seconds > 12.2) {
          face(xu, pincai.root.position.x, pincai.root.position.z);
          xu.pose(cue(seconds, [[12.2, G.speak], [18, t => ({ ...G.point(t, 'l'), yaw: 0.6 })], [20, G.offer]]));
        }
        page.fade(1 - span(seconds, 11, 12));
        return;
      }
      cam3(seconds);
      room.update(seconds);
      const t = seconds - at(2);
      // Xu Shun at his counter; then both at the table, bowing each other into a seat.
      if (t < 5) { face(x2, -2.6, -3.5); x2.pose({ ...G.write(t * 1.4), bow: 0.3 }); face(p2, tx, tz); p2.pose(G.behind(t)); }
      else if (t < 7) walkAlong(x2, t, 5, 7, [[-2.6, -2.2], [sb[0] + 0.1, sb[1] + 0.6], sb], G.folded(t), 5);
      if (t >= 7) {
        face(x2, tx, tz); face(p2, tx, tz);
        x2.root.position.set(sb[0], 0, sb[1]);
        p2.root.position.set(sa[0], 0, sa[1]);
        const seated = t > 9.5;
        x2.pose(seated ? { ...G.laugh(t), sit: 1 } : { ...G.offer(t), bow: 0.35 });
        p2.pose(seated ? { ...G.speak(t), sit: 1 } : cue(t, [[7, t2 => G.salute(t2, 0.3)], [8.2, G.tug]]));
      }
    };
  },
});
