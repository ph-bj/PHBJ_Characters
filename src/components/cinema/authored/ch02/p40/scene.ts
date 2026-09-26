import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { G, cue, face, walkAlong, type Pose } from '../../../stage/figure';
import { hold } from '../../../stage/performance';
import { aim, move, sets, span } from '../../../stage/direct';
import { feast, where } from '../banquet';

/*
 * Chapter 2, paragraph 40. Caught by his own rule, Lianggong rises, a cup in his left hand, his right
 * drawn coyly across his whiskers, and minces round behind the chairs to Yang with a young dan's
 * swaying little steps, the camera trailing him high. He dips a curtsy and coos, his eyes darting
 * about the table like the clown Tan Ba's, and the table roars. With a bigger cup he creeps up on Lu,
 * the censor, bends close with a "skin cup", can't hold his laughter, and sprays the wine across Lu's
 * face in a fine mist. Last, the melon seeds: he scatters a handful on the cloth, and the count runs
 * round the table, seed by seed, a red mark hopping from cup to cup, until it lands on himself.
 */

const COY = (t: number): Pose => ({ turn: 0.2, lean: 0.05, roll: Math.sin(t * 3) * 0.06, pitch: 0.1, yaw: -0.3, r: { lift: 1.4, out: 0.0, twist: 0.6, bend: 1.9 }, l: { lift: 0.9, out: 0.35, bend: 0.7 } });

export default defineScene({
  seed: 2040,
  build: (kit, story) => {
    const { groups: [hallSet], show } = sets(kit, 1);
    const at = (i: number) => story.shots[i].start;

    const f = feast(kit, hallSet);
    const { lg, lu } = f.who;
    const glass = hold(kit, lg, 'cup', 'l');
    const [lgx, lgz] = f.seat('lg');
    const [yx, yz] = f.seat('yang');
    const [ux, uz] = f.seat('lu');
    const toYang: [number, number][] = [[lgx, lgz], [-2.5, -0.9], [-1.4, -2.4], [0.2, -2.5], [yx - 0.1, yz - 0.55]];
    const toLu: [number, number][] = [[yx - 0.1, yz - 0.55], [1.9, -1.9], [2.5, -0.9], [ux + 0.2, uz - 0.55]];

    // The spray: a burst of fine drops from his mouth toward Lu's face.
    const N = 90;
    const drops = new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial({ color: 0x8c857c, size: 0.018 }));
    const pos = new Float32Array(N * 3);
    drops.geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    hallSet.add(drops);
    const jitter = Array.from({ length: N }, () => [kit.rand() - 0.5, kit.rand() - 0.5, kit.rand() - 0.5, 0.6 + kit.rand() * 0.8]);

    // The melon seeds, and the red count-mark that hops from place to place.
    const seeds = new THREE.InstancedMesh(new THREE.SphereGeometry(0.012, 6, 4).scale(1, 0.4, 1.8), new THREE.MeshLambertMaterial({ color: 0x2f2a26 }), 25);
    const m = new THREE.Matrix4();
    for (let k = 0; k < 25; k++) { const a = kit.rand() * 6.28, r = Math.sqrt(kit.rand()) * 0.3; m.makeRotationY(kit.rand() * 6.28).setPosition(-0.3 + Math.cos(a) * r, 0.83, 0.1 + Math.sin(a) * r); seeds.setMatrixAt(k, m); }
    hallSet.add(seeds);
    const mark = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.012, 6, 20).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xc0321e }));
    hallSet.add(mark);
    const ring = ['wenhui', 'lu', 'yang', 'zhou', 'lg', 'guibao'] as const;

    const cam1 = move(kit, hallSet, [[0, [-0.3, 1.5, 0.4], [lgx, 1.3, lgz]], [5, [-0.8, 2.6, 2.2], [lgx, 1.2, lgz]], [at(1), [0.4, 2.6, -0.2], [yx - 0.1, 1.2, yz - 0.5]]]);
    const cam3 = move(kit, hallSet, [[at(2), [0.1, 1.75, -0.8], [ux, 1.35, uz - 0.3]], [at(3), [0.5, 1.6, -0.9], [ux, 1.35, uz - 0.3]]]);
    const cam4 = move(kit, hallSet, [[at(3), [0.4, 2.4, 1.2], [-0.2, 0.83, 0]], [at(3) + 4, [0.3, 2.2, 0.9], [-0.4, 0.83, -0.1]], [36, [-0.2, 1.45, 0.2], [lgx, 1.3, lgz]]]);

    return (seconds: number, shot: number) => {
      show(0);
      kit.setEnv(INK_SKY.paper(0.025));
      f.hall.update(seconds);
      const roar = (t0: number, t1: number) => seconds > t0 && seconds < t1;
      f.sit('wenhui', roar(15, 18) || roar(23, 27) ? G.clap(seconds) : G.rest(seconds));
      f.sit('zhou', roar(15, 18) || roar(23, 27) ? G.guffaw(seconds) : G.stroke(seconds));
      f.sit('guibao', roar(15, 18) || roar(23, 27) || seconds > 32 ? G.laugh(seconds) : G.rest(seconds));
      f.sit('yang', cue(seconds, [[0, G.rest], [10, t => ({ ...G.rest(t), lean: -0.15, yaw: -0.5 })], [14, G.guffaw], [18, G.laugh], [27, G.rest]]));
      f.sit('lu', seconds > 22.6 && seconds < 27 ? { ...G.weep(seconds), lean: -0.2 } : cue(seconds, [[0, G.rest], [15, G.laugh], [18, t => ({ ...G.rest(t), yaw: 0.5 })], [27, G.rest]]));
      glass.visible = seconds > 5 && seconds < 27;

      // Lianggong's performance.
      if (seconds < 5) f.sit('lg', cue(seconds, [[0, G.speak], [3, G.laugh]]));
      else if (seconds < at(2)) {
        if (!walkAlong(lg, seconds, 5, at(1), toYang, COY(seconds), 4) && seconds >= at(1)) {
          face(lg, yx, yz);
          const dart = Math.sin(seconds * 9) * 0.5 * span(seconds, 14, 14.4);
          lg.pose(cue(seconds, [[at(1), t => ({ ...COY(t), kneel: 0.35 * Math.sin(Math.min(1, (t - at(1)) / 1.2) * Math.PI), bow: 0.2 })], [at(1) + 1.4, t => ({ ...COY(t), yaw: -0.3 + dart, mouth: 0.4 + 0.3 * Math.sin(t * 8) })]]));
        }
      } else if (seconds < at(3)) {
        if (!walkAlong(lg, seconds, at(2), 21.5, toLu, { ...COY(seconds), bow: 0.2, lean: 0.1 }, 4.5)) {
          face(lg, ux, uz);
          lg.pose(cue(seconds, [[21.5, t => ({ ...G.offer(t), bow: 0.45 })], [22.6, t => ({ ...G.guffaw(t), bow: 0.25 })]]));
        }
      } else f.sit('lg', cue(seconds, [[at(3), t => ({ ...G.hold(t), bow: 0.3 })], [at(3) + 4.5, t => ({ ...G.rest(t), yaw: -0.4, pitch: -0.1 })], [31.6, t => ({ ...G.speak(t), yaw: 0.5 })], [34, G.laugh]]));

      // The spray.
      const st = seconds - 22.6;
      drops.visible = st > 0 && st < 1.2;
      if (drops.visible) {
        const [mx, my, mz] = where(lg.head, hallSet);
        const [tx, ty, tz] = where(lu.head, hallSet);
        jitter.forEach(([a, b, c, v], i) => {
          const u = Math.min(1, st * 2.4 * v);
          pos[i * 3] = mx + (tx - mx) * u + a * u * 0.4;
          pos[i * 3 + 1] = my - 0.04 + (ty - my) * u + b * u * 0.3 - st * st * 0.6;
          pos[i * 3 + 2] = mz + 0.06 + (tz - mz) * u + c * u * 0.4;
        });
        drops.geometry.attributes.position.needsUpdate = true;
      }

      // The seed count: a mark hopping round the places, one hop per seed, ending on Lianggong.
      seeds.visible = seconds > at(3) + 1;
      const hop = Math.floor(span(seconds, at(3) + 2, at(3) + 4.4) * 24);
      const who = ring[(ring.indexOf('lg') + hop) % 6];
      const [cx, cz] = f.cupAt(who);
      mark.visible = seconds > at(3) + 2;
      mark.position.set(cx, 0.86 + (seconds > at(3) + 4.4 ? 0 : Math.abs(Math.sin(seconds * 32)) * 0.05), cz);

      if (shot === 0) cam1(seconds);
      else if (shot === 1) {
        const [hx, hy, hz] = where(lg.head, hallSet);
        aim(kit, hallSet, [hx * 0.35 + 0.3, hy + 0.05, hz * 0.35 + 0.4], [hx, hy - 0.05, hz], 0.3);
      } else if (shot === 2) cam3(seconds);
      else cam4(seconds);
    };
  },
});
