import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone } from '../../../stage/figure';
import { plaque } from '../../../stage/architecture';
import { courtyard, formalHall } from '../../../stage/locations';
import { bamboo } from '../../../stage/nature';
import { candle, censer, writing } from '../../../stage/props';
import { lights, move, orbit, sets } from '../../../stage/direct';
import { FU_SAN, GUI_FEN, PINCAI } from '../actors';
import { pitTable } from '../table';

/*
 * Chapter 3, paragraph 19. At the table Pincai names Jiangning and Lord Mei, and Fu the Third's
 * face lights up. His memories follow as three quick stagings: a stout boy of twelve trotting
 * after his father through the Treasury yamen at Jiangning under its board; the father as Governor
 * of Guangdong, bowing and toasting with Lord Mei the Education Commissioner among bamboo; and a
 * mourning hall in the capital, white hangings, candles and a spirit tablet, the grown son kneeling.
 */

export default defineScene({
  seed: 3019,
  build: (kit, story) => {
    const { groups: [hall, yamen, canton, mourning], show } = sets(kit, 4);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    const T = pitTable(kit, hall);
    const pincai = figure(kit, hall, PINCAI, 0, 0);
    const fu = figure(kit, hall, FU_SAN, 0, 0);
    const gui = figure(kit, hall, GUI_FEN, 0, 0);
    const [px, pz] = T.spot('pincai');
    const cam1 = move(kit, hall, [[0, [T.tx + 1.8, 1.5, T.tz - 1.6], [T.tx - 0.3, 1.2, T.tz + 0.3]], [at(1), [T.tx + 0.8, 1.45, T.tz - 1], [T.tx, 1.3, T.tz + 0.75]]]);

    // --- Jiangning, the Treasury ------------------------------------------------------------------------
    const c = courtyard(kit, yamen);
    const board = plaque(kit, yamen, 3.2, 0.9, 0, 4.3, -8.9);
    writing(kit, board, '江宁藩署', { size: 0.5, margin: 0.1, z: 0.07 });
    const father = figure(kit, yamen, { ...CAST.official, beard: 'long' }, 0, 4);
    const boy = figure(kit, yamen, { ...FU_SAN, height: 1.25, girth: 1.3, fur: false, headwear: 'tufts' }, 0.8, 4.6);
    const clerks = [0, 1, 2, 3].map(k => figure(kit, yamen, CAST.servant, (k % 2 ? 1 : -1) * 2.2, -3 + Math.floor(k / 2) * 2));
    lights(kit, yamen, { key: [6, 10, 8], intensity: 1 });
    const cam2 = move(kit, yamen, [[at(1), [3, 1.3, 8], [0, 1.2, 3]], [at(2), [-2, 2.4, 5], [0, 2, -6]]]);

    // --- Guangdong -----------------------------------------------------------------------------------------
    formalHall(kit, canton);
    for (const x of [-6, 6]) bamboo(kit, canton, x, 2, { h: 5, count: 8, rand });
    const gov = figure(kit, canton, { ...CAST.official, beard: 'long', robe: 0x2f2a26 }, -0.8, 0);
    const mei = figure(kit, canton, CAST.shixie, 0.8, 0);
    const cam3 = orbit(kit, canton, [0, 1.4, 0], { r: 4.6, y: 1.8, a0: -0.5, a1: 0.5, t0: at(2), t1: at(3), lookY: 1.4 });

    // --- The mourning hall ----------------------------------------------------------------------------------
    kit.box(mourning, tone(0xe6e0d6), [0, 2, -3], [9, 4, 0.2]);
    kit.box(mourning, tone(0xcfc8bc), [0, 0, 0], [12, 0.02, 12]);
    for (let k = -3; k <= 3; k++) kit.mesh(new THREE.PlaneGeometry(0.9, 3.2), tone(0xf4f0e8, true), mourning, k * 1.25, 2.2, -2.8);
    kit.box(mourning, tone(0x3f3a35), [0, 0.45, -2.2], [2, 0.9, 0.7]);
    const tablet = kit.group(mourning, 0, 0.9, -2.3);
    kit.box(tablet, tone(0x2f2a26), [0, 0.45, 0], [0.4, 0.9, 0.08]);
    writing(kit, tablet, '富公之位', { size: 0.08, margin: 0.1, y: 0.45, z: 0.045 });
    const lights4 = [-0.6, 0.6].map(x => candle(kit, mourning, x, 0.9, -2.1, 1.4));
    censer(kit, mourning, 0, 0.9, -2);
    const son = figure(kit, mourning, { ...FU_SAN, fur: false, robe: 0xe6e0d6, jacket: 0xcfc8bc }, 0, -0.6);
    lights(kit, mourning, { key: [2, 5, 5], intensity: 0.6, fill: 0.3 });
    const cam4 = move(kit, mourning, [[at(3), [2.4, 1.4, 3], [0, 1, -2.2]], [36, [0.5, 1.2, 1.2], [0, 1.1, -2.3]]]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.02));
        T.th.update(seconds);
        cam1(seconds);
        T.sit(pincai, 'pincai', cue(seconds, [[0, G.speak], [5, G.folded]]), [T.tx, T.tz + 0.75]);
        pincai.root.position.z = pz - 0.45;
        T.sit(fu, 'fu', cue(seconds, [[0, G.rest], [5, G.laugh]]), [px, pz]);
        T.sit(gui, 'gui', G.rest(seconds), [px, pz]);
        return;
      }
      if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam2(seconds);
        c.flowerGate.open(1);
        const t = seconds - at(1);
        father.root.position.z = 4 - t * 0.7; face(father, 0, -9);
        boy.root.position.set(0.8 + Math.sin(t * 2) * 0.1, 0, 4.7 - t * 0.7); face(boy, 0, -9); boy.pose({ ...G.rest(t), walk: t * 9, stride: 1 });
        father.pose({ ...G.behind(t), walk: t * 5, stride: 0.6 });
        clerks.forEach(cl => { face(cl, 0, father.root.position.z); cl.pose(G.bow(t, 0.6)); });
        return;
      }
      if (shot === 2) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam3(seconds);
        const t = seconds - at(2);
        face(gov, 0.8, 0); face(mei, -0.8, 0);
        gov.pose(cue(t, [[0, tt => G.salute(tt, 0.35)], [3, G.toast], [6, G.laugh]]));
        mei.pose(cue(t, [[0, tt => G.salute(tt, 0.35)], [3, G.toast], [6, G.speak]]));
        return;
      }
      kit.setEnv(INK_SKY.paper(0.04));
      cam4(seconds);
      lights4.forEach(l => l.update(seconds));
      face(son, 0, -2.3);
      son.pose(G.kowtow(seconds - at(3), 1));
    };
  },
});
