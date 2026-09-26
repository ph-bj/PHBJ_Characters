import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { theatre } from '../../../stage/locations';
import { floor, room, wall } from '../../../stage/architecture';
import { candle, mirror, table } from '../../../stage/props';
import { plumTree } from '../../../stage/nature';
import { hold, placard } from '../../../stage/performance';
import { petals, specks } from '../../../stage/fx';
import { blendEnv, DUSK, lights, move, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 16. Seen from the wings, looking out past him at the packed house, Su Huifang
 * plays The Jade Terrace, Autumn at the Tray and The Pavilion Meeting as their placards fall; he
 * sinks in grief, and two legendary beauties rise faintly at his sides. Then backstage by candlelight
 * he lays aside his headdress at the mirror and speaks his resolve, and walks out through the stage
 * door into a courtyard of snow and white plum, to stand there, unbending.
 */

const A = ACTORS.huifang;

export default defineScene({
  seed: 1016,
  build: (kit, story) => {
    const { groups: [house, back], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: his plays, from the wings -------------------------------------------------------
    const t1 = theatre(kit, house);
    const hf = figure(kit, house, A.costume, 0.6, -8.4);
    hf.root.position.y = 1.2;
    hold(kit, hf, 'fan');
    const beauties = [figure(kit, house, CAST.lady, -2.2, -9.4), figure(kit, house, { ...CAST.lady, robe: 0xf0ebe2 }, 2.6, -9.6)];
    beauties.forEach(b => { b.root.position.y = 1.2; b.shadow.visible = false; });
    const boards = ['瑶台', '盘秋', '亭会'].map((p, i) => placard(kit, house, p, { x: -3.2 + i * 0.9, y: 8, z: -5.4 - i * 0.2, size: 0.3 }));
    lights(kit, house, { key: [-3, 10, -2], intensity: 0.9 });
    const cam1 = move(kit, house, [
      [0, [-3.6, 2.6, -10.2], [1, 2.2, -4]],
      [6, [-3.2, 2.5, -8.8], [1.5, 2.1, -2]],
      [11, [1.8, 2.4, -3.8], [0.4, 2.3, -8.6]],
      [16, [0.8, 2.2, -5.6], [0.4, 2.2, -8.8]],
    ]);

    // --- Shot 2: in his own words -----------------------------------------------------------------
    const dressing = kit.group(back, 0, 0, 0);
    room(kit, dressing, { w: 7, d: 6, h: 3, back: 'plain', floorKind: 'boards', wall: 0xb9b2a8 });
    table(kit, dressing, { x: 0, z: -2, w: 1.8, d: 0.6 });
    mirror(kit, dressing, 0, -2.3);
    const flames = [candle(kit, dressing, -0.7, 0.82, -2.05, 1.4), candle(kit, dressing, 0.7, 0.82, -2.05, 1.4)];
    // The stage door, and beyond it a courtyard of snow and white plum.
    const yard = kit.group(back, 0, 0, 10);
    floor(kit, yard, 40, 30, { kind: 'bricks', shade: 0xf0ece4 });
    wall(kit, yard, -12, 8, 12, 8, 2.6);
    for (let k = 0; k < 5; k++) plumTree(kit, yard, -8 + k * 4, 5 + (k % 2), { h: 4, rand, blossoms: 110, red: false });
    const snow = specks(kit, yard, { count: 2000, w: 30, h: 12, d: 24, fall: 0.7, wind: 0.15, size: 0.03, dark: true, y: 6 });
    const whiteFall = petals(kit, yard, { count: 40, w: 14, h: 5, d: 10, red: false, z: 4 });
    const self = figure(kit, back, A.costume, 0, -1.2);
    lights(kit, back, { key: [3, 8, 6], intensity: 0.8 });
    const cam2 = move(kit, back, [
      [at(1), [0.8, 1.6, 0.7], [0, 1.6, -2.3]],
      [at(1) + 5, [1.8, 1.7, 1.8], [0, 1.5, -1.2]],
      [at(1) + 11, [-1.5, 2.0, 7.5], [1.5, 1.4, 11]],
      [36, [-3.5, 2.4, 17.5], [0, 1.8, 12.5]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(blendEnv(INK_SKY.paper(0.02), DUSK(0.02), 0.3));
        cam1(seconds);
        t1.update(seconds);
        boards.forEach((b, i) => { b.position.y = 8 - span(seconds, 0.6 + i * 1.8, 1.4 + i * 1.8) * 3.2; });
        face(hf, 0.6, 4);
        hf.pose(cue(seconds, [[0, t => G.dance(t)], [6, G.weep], [8.5, t => ({ ...G.weep(t), kneel: 0.8 })], [12.5, G.pose]]));
        beauties.forEach((b, i) => { b.fade(0.4 * span(seconds, 11, 12.5) * (1 - span(seconds, 15, 16))); face(b, 0.6, -8.4); b.pose(i ? G.fan(seconds) : G.shy(seconds)); b.root.position.y = 1.2 + Math.sin(seconds + i) * 0.1; });
      } else {
        const t = seconds - at(1);
        const outdoors = span(t, 9, 12);
        kit.setEnv(blendEnv(DUSK(0.04), INK_SKY.paper(0.03), outdoors));
        cam2(seconds);
        flames.forEach(f => f.update(seconds));
        snow.uniforms.uSpeed.value = 1;
        whiteFall.update(seconds);
        if (t < 8) {
          self.root.position.set(0, 0, -1.2); face(self, 0, -2.3);
          self.pose(cue(t, [[0, tt => ({ ...G.rest(tt), l: { lift: 2.4, out: 0.4, bend: 1.4 }, r: { lift: 2.4, out: 0.4, bend: 1.4 }, pitch: 0.1 })], [2.5, G.folded], [4.5, tt => G.speak(tt, 'l')]]));
        } else {
          walkAlong(self, t, 8, 13, [[0, -1.2], [2.2, 1.2], [3.2, 3], [1.5, 7], [0.5, 11.5]], G.folded(t), 5);
          if (t > 13) { face(self, -2, 16); self.pose(cue(t, [[13, G.folded], [15.5, tt => ({ ...G.folded(tt), pitch: -0.3 })]])); }
        }
      }
    };
  },
});
