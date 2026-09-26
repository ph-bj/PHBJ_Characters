import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { writing } from '../../../stage/props';
import { move, sets, span } from '../../../stage/direct';
import { FU_SAN, GUI_FEN, OLD_WANG, PINCAI, RONGGUAN, SI_ER } from '../actors';
import { goitre, peddlerTray } from '../places';
import { pitTable } from '../table';

/*
 * Chapter 3, paragraph 18. A fat hand closes on the peddler's arm: Fu the Third, red in the face,
 * wagging a finger at "Old Wang". The old man wilts; Fu's servant counts four hundred cash into his
 * palm while the lean man lectures him and Rongguan wrinkles his nose. Old Wang shuffles off into
 * the crowd with his shards, muttering over his shoulder. Pincai clasps Fu's hand and has Si'er
 * offer two hundred cash with both hands; Fu flips the string back onto the table with a laugh.
 * Over the two gentlemen, their names settle on slips: Gui Fen, seventh rank; Fu Lun of the
 * Ministry of Revenue.
 */

export default defineScene({
  seed: 3018,
  build: (kit, story) => {
    const { groups: [hall], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;
    const T = pitTable(kit, hall);
    const pincai = figure(kit, hall, PINCAI, 0, 0);
    const fu = figure(kit, hall, FU_SAN, 0, 0);
    const gui = figure(kit, hall, GUI_FEN, 0, 0);
    const rong = figure(kit, hall, RONGGUAN, 0, 0);
    const wang = figure(kit, hall, OLD_WANG, 0, 0);
    goitre(kit, wang); peddlerTray(kit, wang);
    const man = figure(kit, hall, { ...CAST.servant, robe: 0x5a534c }, T.tx + 1.4, T.tz + 1.6);
    const boy = figure(kit, hall, SI_ER, T.tx - 1.8, T.tz + 0.9);
    const string = (fig: typeof man) => kit.mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.24, 10).rotateZ(Math.PI / 2), tone(0x4a443e), fig.hands.r, 0, -0.04, 0.02);
    const pay = string(man);
    const gift = string(boy);
    const onTable = kit.mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.24, 10).rotateZ(Math.PI / 2), tone(0x4a443e), hall, T.tx - 0.1, 0.8, T.tz + 0.1);
    const [px, pz] = T.spot('pincai');
    const [fx, fz] = T.spot('fu');
    const [gx, gz] = T.spot('gui');
    const stand: [number, number] = [px - 0.05, pz - 0.95];
    const names = [writing(kit, hall, ['富伦', '户部主事'], { size: 0.15, paper: 0xf4f0e8, margin: 0.25, x: fx, y: 2.2, z: fz }), writing(kit, hall, ['贵芬', '七品京官'], { size: 0.15, paper: 0xf4f0e8, margin: 0.25, x: gx + 0.4, y: 2.2, z: gz })];
    names.forEach(n => { n.mesh.rotation.y = Math.PI; });
    const cam = move(kit, hall, [
      [0, [px + 0.6, 1.5, pz - 1.8], [fx - 0.4, 1.3, fz - 0.8]],
      [at(1), [T.tx + 1.4, 1.5, T.tz - 1.6], [px, 1.2, pz - 0.8]],
      [at(2), [T.tx + 1.8, 2, T.tz - 2.4], [T.tx + 2.6, 1.2, T.tz + 3]],
      [at(3), [T.tx + 0.2, 1.5, T.tz - 1.4], [T.tx - 0.4, 1.2, T.tz + 0.4]],
      [at(3) + 5, [T.tx + 0.3, 1.7, T.tz - 1.9], [T.tx + 0.2, 1.8, T.tz + 0.75]],
    ]);

    return (seconds: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.02));
      T.th.update(seconds);
      cam(seconds);
      pincai.root.position.set(px, 0, pz - 0.45);
      face(pincai, seconds < at(3) ? stand[0] : fx, seconds < at(3) ? stand[1] : fz);
      pincai.pose(cue(seconds, [[0, t => ({ ...G.fume(t), sit: 1 })], [4, t => ({ ...G.rest(t), sit: 1 })], [at(3), t => ({ ...G.salute(t, 0.3), sit: 1 })], [at(3) + 3.5, t => ({ ...G.speak(t), sit: 1 })]]));
      // Fu leans across and seizes the old man; then waves the cash; then tosses Pincai's back.
      fu.root.position.set(fx, 0, fz);
      face(fu, seconds < at(2) ? stand[0] : px, seconds < at(2) ? stand[1] : pz);
      fu.pose(cue(seconds, [[0, t => ({ ...G.point(t), sit: 1, bow: 0.3, r: { lift: 1.2, out: 0.2, bend: 0.1 } })], [4, t => ({ ...G.argue(t), sit: 1 })], [at(1), t => ({ ...G.point(t, 'l'), sit: 1 })], [at(2), t => ({ ...G.laugh(t), sit: 1 })], [at(3) + 2.4, t => ({ ...G.toast(t), sit: 1 })], [at(3) + 3.4, t => ({ ...G.laugh(t), sit: 1 })]]));
      T.sit(gui, 'gui', cue(seconds, [[0, G.rest], [at(1) + 3, t => ({ ...G.speak(t), yaw: -0.5 })], [at(2), G.rest]]));
      T.sit(rong, 'rong', cue(seconds, [[0, G.rest], [at(2), t => ({ ...G.point(t, 'l'), yaw: -0.3, mouth: 0.7 })], [at(2) + 3, G.laugh]]));
      // Old Wang: gripped, paid, gone.
      if (seconds < at(2)) {
        wang.root.position.set(stand[0], 0, stand[1]);
        face(wang, fx, fz);
        wang.pose(cue(seconds, [[0, t => ({ ...G.rest(t), bow: 0.4, lean: 0.15 })], [4, t => ({ ...G.bow(t, 0.5) })], [at(1) + 2, t => ({ ...G.offer(t), bow: 0.4 })]]));
      } else walkAlong(wang, seconds, at(2), at(3), [stand, [T.tx + 1.6, T.tz - 1.6], [T.tx + 4.6, T.tz + 1], [0, 3.6]], { ...G.hold(seconds), bow: 0.35, yaw: Math.sin(seconds * 2) * 0.5, mouth: 0.4 + 0.4 * Math.sin(seconds * 9) }, 3.5);
      wang.fade(1 - span(seconds, at(3) - 1.5, at(3)));
      walkAlong(man, seconds, at(1), at(1) + 2, [[T.tx + 1.4, T.tz + 1.6], [stand[0] + 0.7, stand[1] - 0.2]], G.hold(seconds), 5);
      if (seconds > at(1) + 2) { face(man, ...stand); man.pose(seconds < at(2) ? G.offer(seconds) : G.folded(seconds)); }
      pay.visible = seconds > at(1) && seconds < at(1) + 3.5;
      // Si'er's two hundred cash, offered and tossed back.
      walkAlong(boy, seconds, at(3), at(3) + 1.2, [[T.tx - 1.8, T.tz + 0.9], [fx - 0.6, fz + 0.6]], G.rest(seconds), 6);
      if (seconds > at(3) + 1.2) { face(boy, fx, fz); boy.pose(seconds < at(3) + 2.4 ? { ...G.offer(seconds), bow: 0.4 } : G.folded(seconds)); }
      gift.visible = seconds > at(3) && seconds < at(3) + 2.4;
      onTable.visible = seconds > at(3) + 2.8;
      names.forEach((n, k) => { n.set(span(seconds, at(3) + 4 + k * 1.2, at(3) + 5.5 + k * 1.2)); n.mesh.visible = seconds > at(3) + 3.8; });
    };
  },
});
