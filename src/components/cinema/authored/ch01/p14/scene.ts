import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone } from '../../../stage/figure';
import { cloudBank, plumTree, water } from '../../../stage/nature';
import { study } from '../../../stage/locations';
import { table, writing } from '../../../stage/props';
import { album, hold, moon, terrace } from '../../../stage/performance';
import { mist, petals } from '../../../stage/fx';
import { lights, move, scroll, sets, span } from '../../../stage/direct';
import { ACTORS } from '../actors';

/*
 * Chapter 1, paragraph 14. Nanxiang's quatrains for Baozhu hang as a scroll from the pearl tree while
 * Baozhu's dancing sleeves drift behind it and each line seeps in. In the study the three friends
 * argue over the open album: Ziyu laughing it off, Zhongqing and Nanxiang insisting. Then the second
 * entry opens onto a marble terrace under a vast moon, where Su Huifang turns with his fan.
 */

const POEM = ['舞袖轻盈弱不胜', '难将水月比清澄', '自从珠字名卿后', '能使珠光百倍增', '瘦沈腰肢绝可怜', '一生爱好自天然', '风流别有消魂处', '始信人间有谪仙'];

export default defineScene({
  seed: 1014,
  build: (kit, story) => {
    const { groups: [poem, room, jasper], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: the poem on a scroll hung from the pearl tree -------------------------------------
    const tree = plumTree(kit, poem, 2.4, -1, { h: 5.5, rand, blossoms: 220, red: false });
    tree.rotation.y = 0.6;
    cloudBank(kit, poem, 0, -0.4, -4, { w: 26, puffs: 28, rand, size: 1 });
    water(kit, poem, { w: 120, d: 80, z: -20, y: -0.6, shade: 0xf0ece4 });
    moon(kit, poem, -14, 12, -50, 5);
    const verse = scroll(kit, poem, POEM, { size: 0.3, x: -0.4, y: 2.3, z: 0.6 });
    for (const side of [-1, 1]) kit.box(poem, tone(0x2f2a26), [-0.4 + side * verse.width * 0.45, 4.7, 0.6], [0.01, 1.4, 0.01]);
    const dancer = figure(kit, poem, ACTORS.baozhu.costume, -3.6, -2.4);
    dancer.shadow.visible = false;
    const flutter = petals(kit, poem, { count: 50, w: 12, h: 6, d: 6, red: false, z: -1 });
    lights(kit, poem, { key: [-5, 10, 8], intensity: 1 });
    const cam1 = move(kit, poem, [
      [0, [-5, 2.6, 8.5], [-1.4, 2.4, 0]],
      [6, [0.8, 2.4, 6.2], [-0.4, 2.3, 0.6]],
      [13, [-0.4, 2.3, 4.8], [-0.4, 2.3, 0.6]],
    ]);

    // --- Shot 2: “I don't believe it” ----------------------------------------------------------------
    const s = study(kit, room);
    table(kit, room, { x: 0, z: 0.4, w: 1.4, d: 0.8, h: 0.78 });
    const book = album(kit, room, { y: 0.79, z: 0.4 });
    const ziyu = figure(kit, room, CAST.ziyu, 0, -0.35);
    const zq = figure(kit, room, CAST.zhongqing, -1.2, 0.9);
    const nx = figure(kit, room, CAST.nanxiang, 1.3, 0.8);
    lights(kit, room, { key: [-4, 9, 7], intensity: 1 });
    const cam2 = move(kit, room, [
      [at(1), [0.3, 1.25, 1.35], [0, 0.85, 0.4]],
      [at(1) + 3, [1.9, 1.7, 2.8], [0, 1.4, 0.2]],
      [at(1) + 6.5, [-1.2, 1.6, 2.6], [0.2, 1.5, 0]],
      [at(1) + 10, [2.6, 1.8, 1.8], [-0.2, 1.4, 0.3]],
      [at(2), [0.1, 1.4, 1.7], [0, 0.8, 0.4]],
    ]);

    // --- Shot 3: a jade moon over the jasper terrace ------------------------------------------------
    const deck = terrace(kit, jasper, { w: 14, d: 10, h: 1.4 });
    moon(kit, jasper, 0, 11, -40, 9);
    cloudBank(kit, jasper, -12, 2, -16, { w: 12, puffs: 12, rand, size: 0.8 });
    cloudBank(kit, jasper, 12, 1, -12, { w: 12, puffs: 12, rand, size: 0.8 });
    const hf = figure(kit, jasper, ACTORS.huifang.costume, 0, -1);
    hf.root.position.y = deck.top;
    hold(kit, hf, 'fan');
    const title = writing(kit, jasper, ['瑶台璧月', ACTORS.huifang.name], { size: 0.5, gap: 1.4, margin: 0.2, x: 4.6, y: deck.top + 2.2, z: -3.2 });
    const age = writing(kit, jasper, ['年十七', '姑苏人'], { size: 0.3, gap: 1.4, margin: 0.2, x: -4.6, y: deck.top + 1.6, z: -3.2 });
    const haze = mist(kit, jasper, { count: 8, w: 40, y: 0.6, d: 16, size: 12, opacity: 0.7 });
    lights(kit, jasper, { key: [0, 10, -12], intensity: 0.8, fill: 0.5 });
    const cam3 = move(kit, jasper, [
      [at(2), [0, 1.2, 14], [0, 3.5, -4]],
      [36, [1.2, 2.6, 5.5], [0, 2.4, -1]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.moonlit([-0.3, 0.25, -1], 0.02));
        cam1(seconds);
        verse.set((seconds - 0.4) / 11.2);
        verse.group.rotation.y = Math.sin(seconds * 0.6) * 0.03;
        dancer.pose(G.dance(seconds));
        dancer.root.position.y = 0.2 + Math.sin(seconds) * 0.2;
        dancer.fade(0.35);
        flutter.update(seconds);
      } else if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.03));
        const t = seconds - at(1);
        cam2(seconds);
        s.update(seconds);
        book.turn(span(t, 0.2, 1.2));
        face(ziyu, 0, 1.2); face(zq, 0, -0.35); face(nx, 0, -0.35);
        ziyu.pose(cue(t, [[0, G.read], [1.6, G.laugh], [3.4, G.speak], [6.2, G.argue], [10, G.rest]]));
        zq.pose(cue(t, [[0, G.folded], [3.4, G.point], [6, G.folded]]));
        nx.pose(cue(t, [[0, G.fan], [6, G.laugh], [10, G.argue]]));
      } else {
        kit.setEnv(INK_SKY.moonlit([0, 0.3, -1], 0.018));
        const t = seconds - at(2);
        cam3(seconds);
        haze.update(seconds);
        hf.root.rotation.y = Math.PI * 1.2 - span(t, 0, 5) * Math.PI * 1.2;
        hf.pose(cue(t, [[0, tt => G.dance(tt, 2)], [5, G.pose]]));
        title.set(span(t, 2, 4.5));
        age.set(span(t, 4, 6));
      }
    };
  },
});
