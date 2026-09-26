import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { chamber } from '../../../stage/locations';
import { vase } from '../../../stage/props';
import { lights, move, sets, span } from '../../../stage/direct';
import { DANS, FU_SAN, GUI_FEN, PINCAI, RONGGUAN } from '../actors';
import { earring } from '../places';
import { pitTable } from '../table';

/*
 * Chapter 3, paragraph 13. "Why so rough?" Rongguan swivels round to face the fat man and drapes a
 * hand on his shoulder; the two dan who were there first hop off the bench and stalk away flicking
 * their sleeves. The fat man scolds, and Rongguan colours. Then his excuse, staged in Fu's inner
 * rooms: Concubine Qing slaps a maid, sweeps a vase to the floor, and goes for Concubine Bai, the
 * two women grappling while Fu the Third flaps between them and a small figure watches from the
 * study door.
 */

export default defineScene({
  seed: 3013,
  build: (kit, story) => {
    const { groups: [hall, home], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;
    const T = pitTable(kit, hall);
    const pincai = figure(kit, hall, PINCAI, 0, 0);
    const fu = figure(kit, hall, FU_SAN, 0, 0);
    const gui = figure(kit, hall, GUI_FEN, 0, 0);
    const dans = [figure(kit, hall, DANS[2], 0, 0), figure(kit, hall, DANS[3], 0, 0)];
    const rong = figure(kit, hall, RONGGUAN, 0, 0);
    earring(kit, rong);
    const cam1 = move(kit, hall, [
      [0, [T.tx - 0.3, 1.4, T.tz - 1.2], [T.tx - 0.3, 1.25, T.tz + 0.75]],
      [at(1), [T.tx + 2.2, 1.6, T.tz - 1.8], [T.tx + 1, 1.1, T.tz + 0.4]],
      [at(2), [T.tx + 0.6, 1.4, T.tz - 1], [T.tx - 0.3, 1.3, T.tz + 0.75]],
      [at(3), [T.tx - 0.1, 1.38, T.tz - 0.6], [T.tx - 0.6, 1.3, T.tz + 0.75]],
    ]);

    // --- Fu's household in uproar ----------------------------------------------------------------------
    chamber(kit, home);
    const qing = figure(kit, home, { ...CAST.ladyYan, robe: 0x4a443e, jacket: 0x2f2a26 }, -1.2, -1);
    const bai = figure(kit, home, { ...CAST.lady, robe: 0xe6e0d6 }, 1.2, -1.2);
    const maid = figure(kit, home, CAST.maid, -2.6, 0.2);
    const master = figure(kit, home, FU_SAN, 0, 0.6);
    const peeper = figure(kit, home, RONGGUAN, 4.2, 1.6);
    const urn = vase(kit, home, -1.8, 0.8, -2.4, { rand: kit.rand });
    kit.box(home, tone(0x5a534c), [-1.8, 0.4, -2.4], [0.6, 0.8, 0.5]);
    const shards = Array.from({ length: 8 }, (_, k) => kit.mesh(new THREE.CircleGeometry(0.06 + (k % 3) * 0.03, 3).rotateX(-Math.PI / 2), tone(0xe6e0d6, true), home, 0, 0.01, 0));
    lights(kit, home, { key: [3, 6, 6], intensity: 0.9 });
    const cam2 = move(kit, home, [[at(3), [3.2, 1.8, 4.6], [0, 1.2, -0.6]], [at(3) + 6, [-1.6, 1.7, 3.6], [0, 1.2, -0.8]], [36, [3.2, 1.6, 2.6], [3.8, 1.3, 1.4]]]);

    return (seconds: number, shot: number) => {
      show(shot === 3 ? 1 : 0);
      kit.setEnv(INK_SKY.paper(shot === 3 ? 0.04 : 0.02));
      if (shot === 3) {
        cam2(seconds);
        const t = seconds - at(3);
        face(maid, -1.2, -1); maid.pose(t > 1 && t < 3 ? { ...G.weep(t), bow: 0.4, lean: -0.2 } : G.weep(t));
        face(qing, t < 3 ? -2.6 : t < 5 ? -1.8 : 1.2, t < 3 ? 0.2 : t < 5 ? -2.4 : -1.2);
        qing.pose(cue(t, [[0, G.fume], [1, tt => ({ ...G.point(tt), r: { lift: 1.5 + Math.sin(tt * 12) * 0.3, out: 0.6, bend: 0.2 } })], [3, tt => ({ ...G.fume(tt), r: { lift: 1, out: 1.2, bend: 0.1 } })], [5, G.tug]]));
        if (t > 5) { qing.root.position.x = -1.2 + span(t, 5, 6) * 1.4; bai.root.position.x = 1.2 - span(t, 5, 6) * 0.2; }
        face(bai, qing.root.position.x, qing.root.position.z);
        bai.pose(t > 5.5 ? G.tug(t + 1) : G.fume(t));
        face(master, 0, -1);
        master.pose(cue(t, [[0, G.argue], [6, tt => ({ ...G.argue(tt), l: { lift: 2.2, out: 0.5, bend: 0.2 }, r: { lift: 2.2, out: 0.5, bend: 0.2 }, lean: Math.sin(tt * 3) * 0.2 })]]));
        face(peeper, 0, -1); peeper.pose({ ...G.shy(t), yaw: 0.3 });
        const fall = span(t, 3.2, 3.7);
        urn.visible = t < 3.7;
        urn.rotation.z = fall * 1.4; urn.position.set(-1.8 + fall * 0.4, 0.8 - fall * 0.8, -2.4 + fall * 0.3);
        shards.forEach((s, k) => { const u = Math.min(1, Math.max(0, t - 3.7) * 3); s.visible = t > 3.7; const a = k * 0.8; s.position.set(-1.4 + Math.cos(a) * u * (0.4 + k * 0.06), 0.01, -2.1 + Math.sin(a) * u * (0.3 + k * 0.05)); });
        return;
      }
      T.th.update(seconds);
      cam1(seconds);
      const [fx, fz] = T.spot('fu');
      T.sit(pincai, 'pincai', G.rest(seconds), [T.tx, T.tz + 0.75]);
      pincai.root.position.z -= 0.45;
      T.sit(fu, 'fu', cue(seconds, [[0, G.rest], [at(2), G.argue], [at(3), G.laugh]]), [T.tx - 0.6, T.tz + 0.75]);
      T.sit(gui, 'gui', G.rest(seconds));
      T.sit(rong, 'rong', cue(seconds, [[0, t => ({ ...G.speak(t), l: { lift: 1.1, out: 0.3, bend: 0.4 } })], [at(2), t => ({ ...G.shy(t), l: { lift: 1.1, out: 0.3, bend: 0.4 } })], [at(3) - 3, t => ({ ...G.argue(t), l: { lift: 1.1, out: 0.3, bend: 0.4 } })]]), [fx, fz]);
      rong.blush(span(seconds, at(2) + 6, at(2) + 8));
      dans.forEach((d, k) => {
        const [sx, sz] = T.spot(k ? 'danB' : 'danA');
        if (seconds < at(1) + 0.5) T.sit(d, k ? 'danB' : 'danA', G.rest(seconds), [T.tx, T.tz]);
        else walkAlong(d, seconds, at(1) + 0.5 + k * 0.4, at(1) + 6, [[sx, sz], [sx + 1.4, sz + 1], [sx + 4, sz + 5]], { ...G.fume(seconds), l: { lift: 0.7 + Math.abs(Math.sin(seconds * 6)) * 0.5, out: 0.8, bend: 0.2 } }, 6);
        d.fade(1 - span(seconds, at(1) + 5, at(1) + 6));
      });
    };
  },
});
