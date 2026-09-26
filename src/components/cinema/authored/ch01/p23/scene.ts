import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, face, figure } from '../../../stage/figure';
import { cloudBank, ground, pine, range, willow } from '../../../stage/nature';
import { study } from '../../../stage/locations';
import { stool } from '../../../stage/props';
import { album, terrace } from '../../../stage/performance';
import { mist, specks } from '../../../stage/fx';
import { DUSK, lights, move, scroll, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 23: the quatrains for Shufang. On a terrace high in the mountains he dances
 * in a whirl of snow and flying cloud (流雪回风); halfway through, the heavy robe of gold thread
 * thins to a weightless gauze (六铢衣), and at the end his narrow steps slow to stillness. The poem
 * is written down a tall scroll on a stand beside him. Then rain at the moon window: Ziyu, on a stool
 * beside it, turns the album to the fifth entry.
 */

const POEM = ['纤纤一片彩云飞', '流雪回风何处依', '金缕香多舞衣重', '只应常着六铢衣', '芙蓉输面柳输腰', '恰称花梁金步摇', '就使无情更无语', '当场窄步已魂消'];

export default defineScene({
  seed: 1023,
  build: (kit, story) => {
    const { groups: [heights, rain], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: a dance in the flowing snow ------------------------------------------------------
    ground(kit, heights, { w: 400, d: 400, height: 4, flatten: 12, shade: 0xf0ece4, seed: 9 });
    const deck = terrace(kit, heights, { w: 10, d: 8, h: 1 });
    for (let k = 0; k < 5; k++) pine(kit, heights, -9 + k * 4.5, -7 - (k % 2) * 2, { h: 6 + rand() * 2, rand });
    willow(kit, heights, 7, 2, { h: 6, rand });
    range(kit, heights, { z: -100, span: 400, height: 50, shade: 0xd6d0c6, seed: 51 });
    const heavy = figure(kit, heights, ACTORS.shufang.costume, 0, -0.5);
    const light = figure(kit, heights, { ...ACTORS.shufang.costume, robe: 0xfaf8f2, jacket: 0xf4f0e8 }, 0, -0.5);
    for (const f of [heavy, light]) f.root.position.y = deck.top;
    const verse = scroll(kit, heights, POEM, { size: 0.32, x: -3.8, y: deck.top + 2.2, z: 1.8 });
    verse.group.rotation.y = 0.5;
    const drifts = Array.from({ length: 5 }, (_, k) => cloudBank(kit, heights, Math.cos(k) * 6, 3 + k * 0.4, Math.sin(k) * 5, { w: 3, puffs: 6, rand, size: 0.4 }));
    const whirl = specks(kit, heights, { count: 2400, w: 14, h: 8, d: 12, fall: 0.6, wind: 1.6, swirl: 1.4, size: 0.026, dark: true, y: 4 });
    const haze = mist(kit, heights, { count: 10, w: 80, y: -4, d: 30, z: -30, size: 14, opacity: 0.7 });
    lights(kit, heights, { key: [5, 12, 9], intensity: 1 });
    const cam1 = move(kit, heights, [
      [0, [5, 2.2, 9], [0, 2, -0.5]],
      [8, [-4, 3.2, 6], [-1.5, 2.8, 0.5]],
      [15, [0, 5, 7], [0, 1.8, -0.5]],
      [22, [3.5, 1.6, 3.2], [0, 1.9, -0.5]],
      [30, [-5.6, 2.8, 5.5], [-3.6, 3, 1.8]],
    ]);

    // --- Shot 2: rain at the moon window -----------------------------------------------------------
    const s = study(kit, rain, { night: true });
    stool(kit, rain, -2.2, -3.6);
    const reader = figure(kit, rain, CAST.ziyu, -2.2, -3.55);
    const book = album(kit, reader.hands.r, { w: 0.2, d: 0.26 });
    book.group.rotation.set(0.9, 0, -1.3);
    const downpour = specks(kit, rain, { count: 1400, w: 8, h: 8, d: 4, fall: 7, wind: 0, swirl: 0, size: 0.02, dark: true, y: 3, z: -6.6, x: -2 });
    lights(kit, rain, { key: [-3, 6, 4], intensity: 0.5, fill: 0.2 });
    const cam2 = move(kit, rain, [
      [at(1), [-0.4, 1.6, -1.8], [-2.2, 1.2, -3.8]],
      [36, [-1.4, 1.3, -2.4], [-2.2, 1.35, -3.8]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.012));
        cam1(seconds);
        haze.update(seconds);
        whirl.uniforms.uSpeed.value = 1;
        verse.set((seconds - 0.4) / 27.6);
        const thin = span(seconds, 9.5, 12.5);
        heavy.fade(1 - thin); light.fade(thin);
        const slow = 1 - span(seconds, 24, 29) * 0.8;
        for (const f of [heavy, light]) {
          f.root.rotation.y = seconds * 0.9 * slow;
          f.root.position.x = Math.sin(seconds * 0.7) * 1.4 * slow;
          f.pose(seconds < 28 ? G.dance(seconds * (0.6 + 0.4 * slow), 3) : G.pose(seconds));
        }
        drifts.forEach((c, k) => { const a = seconds * 0.4 + k * 1.3; c.position.set(Math.cos(a) * 5.5, 3 + k * 0.4 + Math.sin(a * 2) * 0.4, Math.sin(a) * 4.5); });
      } else {
        kit.setEnv(DUSK(0.04));
        const t = seconds - at(1);
        cam2(seconds);
        s.update(seconds);
        downpour.uniforms.uSpeed.value = 1;
        book.turn(span(t, 1.5, 3.4));
        face(reader, -2.2, 0);
        reader.pose({ ...G.read(t), sit: 1, yaw: -0.3 });
      }
    };
  },
});
