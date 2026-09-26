import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure } from '../../../stage/figure';
import { room } from '../../../stage/architecture';
import { book, coins, lamp, stool, table } from '../../../stage/props';
import { lights, move, sets, span, DUSK } from '../../../stage/direct';
import { parlour } from '../wang';
import { OLD_WEI } from '../actors';

/*
 * Chapter 2, paragraph 21. Pincai has never heard of any recommendation; bewildered, he can only bow
 * his thanks, again and again. Wenhui leans forward on the kang, eyes narrowing: is your father still
 * teaching, or still up to his old tricks? Behind Pincai, as the question hangs, two pictures of his
 * father rise side by side in pale ink: at the head of a schoolroom before rows of little pupils, and
 * hunched over a lamp in the dark, sliding coins into a sleeve.
 */

export default defineScene({
  seed: 2021,
  build: (kit, story) => {
    const { groups: [room1, visions], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    const p = parlour(kit, room1);
    const wenhui = figure(kit, room1, CAST.wenhui, ...p.kangSeat);
    wenhui.root.position.y = 0.07;
    const pincai = figure(kit, room1, CAST.pincai, 0.4, -1.3);
    const cam = move(kit, room1, [
      [0, [-1.6, 1.4, 1.6], [0.4, 1.3, -1.3]],
      [at(1), [2.2, 1.5, 0.2], [0.6, 1.2, -2.8]],
      [at(1) + 6, [1.2, 1.2, -1.8], [0.7, 1.2, -3]],
    ]);

    // The two pictures of Old Wei, side by side.
    room(kit, visions, { w: 12, d: 6, h: 3, back: 'plain', floorKind: 'boards', wall: 0xd6d0c6 });
    const teacher = figure(kit, visions, OLD_WEI, -3, -1.8);
    const pupils = Array.from({ length: 6 }, (_, k) => { stool(kit, visions, -4 + (k % 3) * 1, -0.2 + Math.floor(k / 3) * 1); const f = figure(kit, visions, { ...CAST.page, height: 1.1 }, -4 + (k % 3) * 1, -0.2 + Math.floor(k / 3) * 1); f.root.rotation.y = Math.PI; return f; });
    table(kit, visions, { x: 3, z: -1.2, w: 1.2, d: 0.6 });
    const oil = lamp(kit, visions, { x: 3.4, z: -1.3, y: 0.82, h: 0.3, power: 2 });
    const schemer = figure(kit, visions, OLD_WEI, 3, -2);
    const pile = coins(kit, visions, Array.from({ length: 10 }, (_, k) => [2.8 + (k % 5) * 0.05, 0.83, -1.1 + Math.floor(k / 5) * 0.05] as [number, number, number]));
    book(kit, visions, { x: -3, y: 0.82, z: -1.2 });
    table(kit, visions, { x: -3, z: -1.2, w: 1, d: 0.5 });
    lights(kit, visions, { key: [0, 6, 5], intensity: 0.7 });
    const cam2 = move(kit, visions, [[at(1) + 7, [0, 1.8, 6], [0, 1.2, -1]], [36, [0, 1.6, 4], [0, 1.2, -1.4]]]);

    return (seconds: number, shot: number) => {
      const vision = shot === 1 && seconds > at(1) + 7;
      show(vision ? 1 : 0);
      if (!vision) {
        kit.setEnv(INK_SKY.paper(0.025));
        cam(seconds);
        face(wenhui, 0.4, 0); face(pincai, 0.7, -3.1);
        wenhui.pose(cue(seconds, [[0, t => ({ ...G.speak(t), sit: 1 })], [at(1), t => ({ ...G.point(t), sit: 1, bow: 0.3, pitch: 0.1 })]]));
        pincai.pose(cue(seconds, [[0, t => ({ ...G.think(t), yaw: 0.4 })], [5, t => G.bow(t, 0.7)], [9, t => G.salute(t, 0.4)], [13, t => G.bow(t, 0.7)], [at(1), G.folded]]));
      } else {
        kit.setEnv(DUSK(0.02));
        cam2(seconds);
        oil.update(seconds);
        const t = seconds - at(1) - 7;
        face(teacher, -3, 2); teacher.pose(G.speak(t)); teacher.fade(0.7 * span(t, 0, 1.5));
        pupils.forEach((f, i) => { f.pose({ ...G.read(t + i), sit: 1 }); f.fade(0.7 * span(t, 0, 1.5)); });
        face(schemer, 3, -1.2); schemer.pose({ ...G.rest(t), bow: 0.4, r: { lift: 1.0, out: 0.1 + Math.abs(Math.sin(t * 3)) * 0.3, bend: 0.6 } }); schemer.fade(0.7 * span(t, 2, 3.5));
        pile.forEach((c, k) => { c.visible = t < 4 + k * 0.6; });
      }
    };
  },
});
