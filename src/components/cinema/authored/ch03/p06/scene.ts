import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { chamber } from '../../../stage/locations';
import { bed, cup, lamp } from '../../../stage/props';
import { hold } from '../../../stage/performance';
import { orbit, move, sets, span, lights } from '../../../stage/direct';
import { BOYS } from '../../ch01/actors';
import { JIN_ER, PINCAI, XU_SHUN, YE_MAOLIN } from '../actors';
import { accountsRoom, sanle } from '../places';

/*
 * Chapter 3, paragraph 6. In the accounts room Ye Maolin and a pale, fat stranger rise and pump
 * Pincai's hands. Xu Shun comes in from the inner door with the master's terms; Jin the Second
 * spreads his hands, argues, and in the end follows Xu Shun out to try Lord Wang. Ye leans in and
 * talks, and his talk becomes a vision: a playhouse in full cry, sweeping crane over the packed pit
 * to a stage where dan whirl their sleeves. Last, a quiet sickroom at Cao Changqing's: Qinguan
 * propped up in a curtained bed, pale, taking a bowl of medicine, then turning to the window.
 */

export default defineScene({
  seed: 3006,
  build: (kit, story) => {
    const { groups: [office, house, sick], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;

    const room = accountsRoom(kit, office);
    const [sa, sb] = room.seats;
    const ye = figure(kit, office, YE_MAOLIN, ...sa);
    const jin = figure(kit, office, JIN_ER, ...sb);
    const pincai = figure(kit, office, PINCAI, 0.6, 4);
    const xu = figure(kit, office, XU_SHUN, 4.4, -1.4);
    const cam1 = move(kit, office, [
      [0, [2.8, 1.6, 3.6], [0.6, 1.2, 0.4]],
      [at(1), [-1.8, 1.7, 2.8], [1.4, 1.3, -0.4]],
      [at(1) + 6, [3.4, 1.6, 2.4], [0.4, 1.3, -0.3]],
      [at(2), [-1.4, 1.5, 2], [-0.35, 1.3, -0.2]],
    ]);

    // --- Ye's talk: a playhouse in full cry ---------------------------------------------------------
    const th = sanle(kit, house);
    const players = [BOYS.qiguan, { ...CAST.dan, robe: 0xe6e0d6 }, CAST.clown].map((spec, k) => figure(kit, th.stage.deck, spec, (k - 1) * 1.6, 0.4));
    hold(kit, players[2], 'fan');
    const cam2 = orbit(kit, house, [0, 2.4, -6], { r: 12, y: 6, a0: 0.5, a1: -0.4, t0: at(2), t1: at(3), lookY: 2.2, rise: -2.5, zoom: 0.3 });

    // --- The sickroom -----------------------------------------------------------------------------------
    chamber(kit, sick);
    bed(kit, sick, { x: -0.6, z: -2.6 });
    const qin = figure(kit, sick, BOYS.qinguan, -0.3, -2.7);
    qin.root.position.y = 0.26;
    kit.box(sick, tone(0xe6e0d6), [-0.9, 0.82, -2.5], [1.1, 0.16, 0.9]);
    const attendant = figure(kit, sick, CAST.page, 0.9, -1.4);
    const bowl = hold(kit, attendant, 'cup');
    cup(kit, sick, 1.2, 0.8, -2.8); lamp(kit, sick, { x: 1.4, z: -2.9, y: 0.8, h: 0.45, power: 1.6 });
    lights(kit, sick, { key: [-4, 5, 4], intensity: 0.7, fill: 0.3 });
    const cam3 = move(kit, sick, [[at(3), [2.2, 1.5, 1.6], [-0.4, 1, -2.5]], [36, [0.8, 1.3, -0.6], [-0.3, 1.05, -2.6]]]);

    return (seconds: number, shot: number) => {
      show(shot === 2 ? 1 : shot === 3 ? 2 : 0);
      if (shot === 2) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam2(seconds);
        th.update(seconds);
        players.forEach((p, k) => { p.root.rotation.y = (k - 1) * -0.3; p.pose(k === 2 ? G.laugh(seconds) : G.dance(seconds, k * 1.7)); });
        return;
      }
      if (shot === 3) {
        kit.setEnv(INK_SKY.paper(0.05));
        cam3(seconds);
        const t = seconds - at(3);
        face(qin, 2, 0);
        qin.pose(cue(t, [[0, tt => ({ ...G.rest(tt), sit: 1, bow: -0.2, pitch: 0.2 })], [2, tt => ({ ...G.drink(tt), sit: 1 })], [5, tt => ({ ...G.rest(tt), sit: 1, yaw: 0.6, pitch: -0.1 })]]));
        face(attendant, qin.root.position.x, qin.root.position.z);
        attendant.pose(cue(t, [[0, G.offer], [2.4, G.folded]]));
        bowl.visible = t < 2.2;
        return;
      }
      kit.setEnv(INK_SKY.paper(0.03));
      cam1(seconds);
      room.update(seconds);
      // Greetings, the terms, Jin's protest, Jin and Xu Shun leave; Ye talks on.
      walkAlong(pincai, seconds, 0, 2.5, [[0.6, 4], [0.6, 1.4]], G.rest(seconds), 5);
      if (seconds > 2.5) { face(pincai, sa[0], sa[1]); pincai.pose(cue(seconds, [[2.5, t => G.salute(t, 0.3)], [5, G.speak], [at(1), G.folded], [at(2), t => ({ ...G.rest(t), lean: 0.05 })]])); }
      face(ye, pincai.root.position.x, pincai.root.position.z);
      ye.pose(seconds < 5 ? G.salute(seconds, 0.3) : cue(seconds, [[5, t => ({ ...G.speak(t), sit: 1 })], [at(1), t => ({ ...G.rest(t), sit: 1 })], [at(2) - 1, t => ({ ...G.argue(t), sit: 1 })]]));
      if (seconds < at(1) + 7) {
        face(jin, seconds > at(1) ? xu.root.position.x : pincai.root.position.x, seconds > at(1) ? xu.root.position.z : pincai.root.position.z);
        jin.pose(cue(seconds, [[0, t => G.salute(t, 0.3)], [4, t => ({ ...G.rest(t), sit: 1 })], [at(1) + 1, t => ({ ...G.argue(t), sit: 1 })], [at(1) + 4, G.argue]]));
      } else walkAlong(jin, seconds, at(1) + 7, at(2), [[sb[0], sb[1]], [2.8, 1.2], [4.8, 3.6]], G.rest(seconds), 5);
      jin.fade(1 - span(seconds, at(2) - 1, at(2)));
      walkAlong(xu, seconds, at(1) - 0.4, at(1) + 1.4, [[4.4, -1.4], [2.6, -0.6]], G.folded(seconds), 5);
      if (seconds > at(1) + 1.4 && seconds < at(1) + 7) { face(xu, sb[0], sb[1]); xu.pose(cue(seconds, [[at(1) + 1.4, G.speak], [at(1) + 4, t => ({ ...G.rest(t), yaw: Math.sin(t * 3) * 0.3 })], [at(1) + 5.5, t => G.point(t, 'l')]])); }
      if (seconds > at(1) + 7) walkAlong(xu, seconds, at(1) + 7.2, at(2), [[2.6, -0.6], [3.2, 1.4], [5, 3.8]], G.rest(seconds), 5);
      xu.fade(1 - span(seconds, at(2) - 1, at(2)));
    };
  },
});
