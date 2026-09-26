import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone } from '../../../stage/figure';
import { room } from '../../../stage/architecture';
import { mirror, table } from '../../../stage/props';
import { lights, move, sets, span } from '../../../stage/direct';
import { CHUNLAN, FU_SAN, GUI_FEN, PINCAI, RONGGUAN, XI } from '../actors';
import { earring } from '../places';
import { pitTable } from '../table';

/*
 * Chapter 3, paragraph 23. Rongguan's gossip, leaning in over the table: a Cantonese, Great Lord
 * Xi. The story of the coat plays out as he tells it: in a furrier's shop, the big man shrugs the
 * black fox-leg coat off his own shoulders onto the counter, the furrier's shears go snipping round
 * the hem, and Chunlan turns before a mirror in the cut-down coat. Back at the table Rongguan puts
 * his lips to Fu's ear; Fu laughs, "free today, are you?", and Rongguan, standing behind him,
 * kneads his shoulders.
 */

export default defineScene({
  seed: 3023,
  build: (kit, story) => {
    const { groups: [hall, shop], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const T = pitTable(kit, hall);
    const pincai = figure(kit, hall, PINCAI, 0, 0);
    const fu = figure(kit, hall, FU_SAN, 0, 0);
    const gui = figure(kit, hall, GUI_FEN, 0, 0);
    const rong = figure(kit, hall, RONGGUAN, 0, 0);
    earring(kit, rong);
    const [rx, rz] = T.spot('rong');
    const [fx, fz] = T.spot('fu');
    const cam1 = move(kit, hall, [[0, [rx + 0.2, 1.4, rz - 1.3], [rx, 1.3, rz]], [at(1), [rx + 0.5, 1.45, rz - 1.4], [rx, 1.3, rz]]]);
    const cam3 = move(kit, hall, [[at(2), [fx + 0.7, 1.35, fz - 0.8], [fx - 0.2, 1.4, fz]], [at(3), [fx + 0.5, 1.3, fz - 0.7], [fx - 0.2, 1.4, fz]], [36, [fx + 1.4, 1.6, fz - 1.5], [fx, 1.45, fz + 0.2]]]);

    // --- The furrier's shop ----------------------------------------------------------------------------
    room(kit, shop, { w: 9, d: 7, h: 3.4, back: 'lattice', floorKind: 'boards' });
    table(kit, shop, { x: 0, z: -1.2, w: 2.2, d: 1, h: 0.85 });
    // The coat: a long dark pelt lying on the counter with pale trim, cut shorter as the shears go.
    const coat = kit.group(shop, 0, 0.9, -1.2);
    const pelt = kit.box(coat, tone(0x1c1816), [0, 0, 0], [1.6, 0.06, 0.8]);
    const trim = kit.box(coat, tone(0xf2eee6), [0.82, 0, 0], [0.06, 0.07, 0.8]);
    const offcut = kit.box(shop, tone(0x1c1816), [0, 0.02, -0.3], [0.5, 0.04, 0.6]);
    for (let k = 0; k < 6; k++) kit.box(shop, tone(0x3f3a35), [-3.8, 0.8 + k * 0.35, -3.2], [0.8, 0.28, 0.4]);
    const xi = figure(kit, shop, XI, -1.6, 0);
    const furrier = figure(kit, shop, { ...CAST.merchant, headwear: 'cap', robe: 0x8c857c }, 0.3, -2.1);
    const shears = kit.group(furrier.hands.r, 0, -0.03, 0.05);
    for (const s of [-1, 1]) kit.mesh(new THREE.BoxGeometry(0.02, 0.005, 0.2), tone(0x9c958b), shears).rotation.y = s * 0.2;
    const chunlan = figure(kit, shop, CHUNLAN, 2.4, 0.2);
    mirror(kit, shop, 3.4, -0.8, -0.9);
    lights(kit, shop, { key: [3, 5, 6], intensity: 0.9 });
    const cam2 = move(kit, shop, [[at(1), [-0.4, 1.9, 2.8], [-0.8, 1.1, -1]], [at(1) + 5, [0.9, 1.6, 0.6], [0.2, 0.95, -1.2]], [at(2), [1, 1.6, 2.6], [2.6, 1.3, -0.2]]]);

    return (seconds: number, shot: number) => {
      show(shot === 1 ? 1 : 0);
      if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.03));
        cam2(seconds);
        const t = seconds - at(1);
        face(xi, 0, -1.2);
        xi.pose(cue(t, [[0, tt => ({ ...G.offer(tt), bow: 0.3 })], [2, G.behind]]));
        coat.visible = t > 1;
        face(furrier, 0, -1.2);
        furrier.pose(t > 2 && t < 7 ? { ...G.write(t * 1.8), bow: 0.4 } : G.rest(t));
        const cut = span(t, 2, 7);
        pelt.scale.x = 1 - cut * 0.35; pelt.position.x = -cut * 0.28; trim.position.x = 0.82 - cut * 0.56;
        offcut.visible = cut > 0.95;
        chunlan.fade(span(t, 7, 8));
        face(chunlan, 3.4, -0.8); chunlan.root.rotation.y += Math.sin(t * 1.5) * 0.4;
        chunlan.pose(G.pose(t));
        return;
      }
      kit.setEnv(INK_SKY.paper(0.02));
      T.th.update(seconds);
      if (shot === 0) cam1(seconds); else cam3(seconds);
      T.sit(pincai, 'pincai', G.rest(seconds), [rx, rz]);
      pincai.root.position.z -= 0.45;
      T.sit(gui, 'gui', G.rest(seconds));
      T.sit(fu, 'fu', cue(seconds, [[0, t => ({ ...G.rest(t), yaw: -0.5 })], [at(2) + 3, G.laugh], [at(3), t => ({ ...G.rest(t), pitch: 0.2, bow: 0.1 })]]), [rx, rz]);
      if (seconds < at(2)) T.sit(rong, 'rong', { ...G.speak(seconds), lean: 0.12 }, [fx, fz]);
      else if (seconds < at(3)) { T.sit(rong, 'rong', { ...G.whisper(seconds), sit: 1 }, [fx, fz]); rong.root.position.x += 0.18; }
      else { rong.root.position.set(fx, 0, fz + 0.55); face(rong, fx, fz - 1); rong.pose({ ...G.laugh(seconds), bow: 0.3, l: { lift: 0.8, out: 0.3, bend: 1 + Math.sin(seconds * 6) * 0.2 }, r: { lift: 0.8, out: 0.3, bend: 1 + Math.sin(seconds * 6 + 1) * 0.2 } }); }
    };
  },
});
