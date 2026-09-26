import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, face, figure, tone, walkAlong } from '../../../stage/figure';
import { chamber, courtyard, lanternRow } from '../../../stage/locations';
import { candle, screen } from '../../../stage/props';
import { moon } from '../../../stage/performance';
import { blendEnv, lights, move, sets, span } from '../../../stage/direct';
import { LIANGGONG } from '../actors';

/*
 * Chapter 2, paragraph 34. "That jealous temper is truly rare." What Wang Xun describes, we see: in the
 * Sun house at night the mother-in-law paces with a feather duster, and her husband kneels on the
 * floor with a lit lamp balanced on his head, not daring to let it tip, while her shadow sweeps huge
 * across the painted screen. Then, "let us set that aside": the camera lifts out of the room, rises over
 * the moonlit courtyards, and glides down toward the lanterns of the banquet hall across the way.
 */

export default defineScene({
  seed: 2034,
  build: (kit, story) => {
    const { groups: [room, yard], show } = sets(kit, 2);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: the lamp on his head -----------------------------------------------------------------
    chamber(kit, room);
    screen(kit, room, { x: 0, z: -2.6, panels: 4, w: 0.9, h: 2.4, kind: 'peony' });
    const wife = figure(kit, room, { ...CAST.ladyYan, robe: 0x4a443e, jacket: 0x2f2a26, face: 'coarse', girth: 1.2, height: 1.64 }, -1.4, 0);
    const lg = figure(kit, room, LIANGGONG, 0.6, 0.4);
    const flame = candle(kit, lg.head, 0, 0.12, 0, 1.4);
    // Her feather duster: a cane with a tuft of dark plumes.
    const duster = kit.group(wife.hands.r, 0, -0.02, 0.02);
    duster.rotation.x = 1.2;
    kit.mesh(new THREE.CylinderGeometry(0.008, 0.01, 0.6, 6), tone(0x2f2a26), duster, 0, 0.2, 0);
    kit.mesh(new THREE.ConeGeometry(0.06, 0.3, 8), tone(0x3f3a35), duster, 0, 0.62, 0).rotation.x = Math.PI;
    lights(kit, room, { key: [-4, 4, 5], intensity: 0.55, fill: 0.2 });
    const cam1 = move(kit, room, [[0, [3.4, 1.2, 3.2], [0, 1, 0]], [9, [2, 0.9, 1.8], [0.6, 0.9, 0.4]], [at(1), [-1.6, 1.8, 3.8], [0, 1.2, -1]]]);

    // --- Shot 2: rising over the rooftops to the banquet hall ------------------------------------------
    courtyard(kit, yard);
    const swing = lanternRow(kit, yard, [-5, 3.4, -8.6], [5, 3.4, -8.6], 5);
    moon(kit, yard, -30, 40, -90, 6);
    const guests = [figure(kit, yard, CAST.guest, -0.6, -8), figure(kit, yard, CAST.servant, 0.8, -7.4)];
    lights(kit, yard, { key: [-6, 12, 6], intensity: 0.8, fill: 0.35 });
    const cam2 = move(kit, yard, [[at(1), [9, 1.8, 2], [6, 2.4, -4]], [at(1) + 7, [4, 9, 10], [0, 3, -6]], [36, [0.6, 2.2, -2.6], [0, 1.8, -9]]]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.06));
        cam1(seconds);
        walkAlong(wife, seconds, 0, 18, [[-1.4, 0], [-0.6, -1.2], [1.6, -1], [2, 0.8], [0.4, 1.8], [-1.2, 1.2]], { ...G.fume(seconds), r: { lift: 1.3 + Math.sin(seconds * 3) * 0.3, out: 0.4, bend: 0.3 } }, 4);
        face(lg, -3, 3);
        const wobble = Math.sin(seconds * 2.3) * 0.05;
        lg.pose({ ...G.kneel(seconds), bow: 0, pitch: -0.05 + wobble, roll: wobble * 0.6, l: { lift: 0.5 + wobble, out: 0.5, bend: 0.4 }, r: { lift: 0.5 - wobble, out: 0.5, bend: 0.4 } });
        flame.group.rotation.z = wobble; flame.update(seconds);
        return;
      }
      kit.setEnv(blendEnv(INK_SKY.paper(0.03), INK_SKY.moonlit([0.3, 0.3, -1], 0.03), span(seconds, at(1), at(1) + 5)));
      cam2(seconds);
      swing(seconds);
      const t = seconds - at(1);
      walkAlong(guests[0], t, 6, 16, [[-0.6, -2], [-0.6, -8]], G.folded(t), 4.5);
      walkAlong(guests[1], t, 5.6, 15, [[0.8, -1.4], [0.8, -7.4]], G.hold(t), 4.5);
    };
  },
});
