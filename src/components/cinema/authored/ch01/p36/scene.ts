import * as THREE from 'three';
import { defineScene } from '../../define';
import { CAST, G, figure, flat, tone, VERMILION } from '../../../stage/figure';
import { room } from '../../../stage/architecture';
import { lotus, range, reeds, water } from '../../../stage/nature';
import { lamp, table } from '../../../stage/props';
import { inkGather, mist, smoke, specks } from '../../../stage/fx';
import { DUSK, lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 36: Ziyu's doubts made visible. A muddy flood-plain: a lotus pushes up out of
 * the mire and is spattered as it rises, and far out a little raft tips and goes under the current.
 * On a table under a lamp, a thread is drawn from a brocade stocking and will not sew, and a knife of
 * lead bends against a log. Last, in a murky room, a painted actor opens his mouth and the ink that
 * pours out tries to become a word and cannot hold together.
 */

export default defineScene({
  seed: 1036,
  build: (kit, story) => {
    const { groups: [mire, bench, murk], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;
    const rand = kit.rand;

    // --- Shot 1: out of the mud ------------------------------------------------------------------
    water(kit, mire, { w: 300, d: 200, z: -40, shade: 0x9c958b, line: 0x4a443e, scale: 1.2 });
    reeds(kit, mire, -6, -2, { w: 20, d: 6, count: 200, h: 1.2, rand });
    lotus(kit, mire, 3, -3, { count: 16, rand, radius: 4, flowers: 0 });
    const stalk = kit.group(mire, 0, 0, 0);
    kit.mesh(new THREE.CylinderGeometry(0.02, 0.025, 1, 6).translate(0, 0.5, 0), tone(0x3f3a35), stalk);
    const bud = kit.mesh(new THREE.SphereGeometry(0.16, 14, 10), tone(0xf0ebe2), stalk, 0, 1, 0);
    bud.scale.y = 1.5;
    const stains = Array.from({ length: 10 }, () => kit.mesh(new THREE.SphereGeometry(0.03, 6, 5), tone(0x2f2a26), bud, (rand() - 0.5) * 0.3, (rand() - 0.5) * 0.3, 0.15));
    const raft = kit.group(mire, -10, 0, -22);
    kit.box(raft, tone(0x6e675f), [0, 0.05, 0], [1.4, 0.1, 1]);
    const drifter = figure(kit, raft, { ...CAST.youth, robe: 0xd6d0c6 }, 0, 0);
    drifter.root.position.y = 0.1;
    range(kit, mire, { z: -120, span: 400, height: 24, shade: 0x9c958b, seed: 136 });
    const rain = specks(kit, mire, { count: 900, w: 40, h: 10, d: 30, fall: 5, wind: 0.6, swirl: 0, size: 0.02, dark: true, y: 5, z: -10 });
    lights(kit, mire, { key: [4, 8, 6], intensity: 0.7 });
    const cam1 = move(kit, mire, [
      [0, [1.2, 0.5, 3], [0, 0.7, 0]],
      [6, [0.6, 1.6, 2.6], [0, 1.2, 0]],
      [14, [-2, 2.2, 4], [-10, 0.4, -22]],
    ]);

    // --- Shot 2: a thread from a brocade sock, a knife of lead ---------------------------------------
    room(kit, bench, { w: 8, d: 6, h: 3, back: 'plain', floorKind: 'boards', wall: 0xb9b2a8 });
    table(kit, bench, { w: 1.8, d: 0.9 });
    const glow = lamp(kit, bench, { x: -0.7, z: -0.3, y: 0.82, h: 0.3, power: 3 });
    const sock = kit.group(bench, 0.2, 0.84, 0.05);
    kit.mesh(new THREE.CylinderGeometry(0.08, 0.09, 0.4, 14).rotateZ(Math.PI / 2), tone(0x6e675f), sock);
    kit.mesh(new THREE.SphereGeometry(0.09, 12, 10), tone(0x6e675f), sock, 0.24, 0, 0.04);
    for (let k = 0; k < 6; k++) kit.mesh(new THREE.TorusGeometry(0.085, 0.006, 4, 16), flat(VERMILION), sock, -0.15 + k * 0.06, 0, 0).rotation.y = Math.PI / 2;
    const thread = new THREE.CatmullRomCurve3([new THREE.Vector3(-0.1, 0.06, 0), new THREE.Vector3(-0.3, 0.3, 0.1), new THREE.Vector3(-0.5, 0.2, 0.2)]);
    const threadMesh = kit.mesh(new THREE.TubeGeometry(thread, 20, 0.004, 4), flat(VERMILION), sock);
    const needle = kit.mesh(new THREE.CylinderGeometry(0.002, 0.004, 0.12, 4), tone(0x2f2a26), sock, -0.5, 0.2, 0.2);
    needle.rotation.z = 1;
    kit.mesh(new THREE.CylinderGeometry(0.18, 0.2, 0.9, 16).rotateZ(Math.PI / 2), tone(0x6e675f), bench, 1.1, 1.02, -0.2);
    const knife = kit.group(bench, 1.1, 1.6, 0.1);
    const bladeGeo = new THREE.BoxGeometry(0.06, 0.5, 0.01, 1, 12, 1);
    const bladeBase = Float32Array.from(bladeGeo.getAttribute('position').array as Float32Array);
    kit.mesh(bladeGeo, tone(0x9c958b), knife, 0, -0.25, 0);
    kit.box(knife, tone(0x2f2a26), [0, 0.1, 0], [0.04, 0.2, 0.03]);
    lights(kit, bench, { key: [-2, 5, 3], intensity: 0.5, fill: 0.15 });
    const cam2 = move(kit, bench, [
      [at(1), [0.2, 1.3, 0.9], [0.1, 0.95, 0.05]],
      [at(1) + 6, [0.9, 1.3, 1.1], [1.1, 1.1, -0.1]],
      [at(2), [1.6, 1.8, 2], [0.5, 1, 0]],
    ]);

    // --- Shot 3: foul within, speech without order -----------------------------------------------
    room(kit, murk, { w: 7, d: 6, h: 3, back: 'plain', floorKind: 'boards', wall: 0xb9b2a8 });
    smoke(kit, murk, -1.4, 0.2, -1, { h: 3, count: 200, size: 0.4, shade: 0x3f3a35 });
    smoke(kit, murk, 1.6, 0.2, -1.4, { h: 3, count: 200, size: 0.4, shade: 0x3f3a35 });
    const actor = figure(kit, murk, { ...CAST.dan, robe: 0x6e675f, jacket: 0x3f3a35, face: 'plain' }, 0, -0.6);
    const babble = inkGather(kit, murk, '言', { size: 1.2, at: at(2) + 1.5, dur: 2.4, count: 2400, spread: 1.2, scatter: at(2) + 4.6, drop: 0.05 });
    babble.points.position.set(0, 2.4, 0);
    const babble2 = inkGather(kit, murk, '语', { size: 1.2, at: at(2) + 5.4, dur: 2, count: 2000, spread: 1.4, scatter: at(2) + 7.4, drop: 0.05 });
    babble2.points.position.set(0.3, 2.5, 0);
    const fog = mist(kit, murk, { count: 6, w: 10, y: 0.4, d: 4, z: -1.5, size: 4, opacity: 0.3, shade: 0x6e675f });
    lights(kit, murk, { key: [2, 5, 4], intensity: 0.5, fill: 0.1 });
    const cam3 = move(kit, murk, [
      [at(2), [0.6, 1.6, 3.2], [0, 1.9, -0.4]],
      [36, [-0.6, 2, 4.4], [0, 2.1, -0.4]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(DUSK(0.03));
        cam1(seconds);
        rain.uniforms.uSpeed.value = 1;
        stalk.scale.y = 0.2 + span(seconds, 0, 6) * 0.8;
        stains.forEach((s, i) => { s.visible = seconds > 2 + i * 0.35; });
        const sink = span(seconds, 8, 13);
        raft.position.set(-10 + seconds * 0.8, -sink * 1.8, -22);
        raft.rotation.z = sink * 0.9 + Math.sin(seconds * 2) * 0.1;
        drifter.pose(sink > 0 ? G.fume(seconds) : G.rest(seconds));
      } else if (shot === 1) {
        kit.setEnv(DUSK(0.04));
        const t = seconds - at(1);
        cam2(seconds);
        glow.update(seconds);
        threadMesh.scale.setScalar(Math.max(0.01, span(t, 0.5, 2.5)));
        needle.rotation.x = Math.sin(t * 3) * 0.3;
        // The leaden blade folds as it strikes the log.
        const chop = Math.max(0, Math.sin((t - 5) * 2.2)) * (t > 5 ? 1 : 0);
        knife.position.y = 1.6 - chop * 0.35;
        const bend = span(t, 6, 8.5) * 0.25;
        const p = bladeGeo.getAttribute('position');
        for (let i = 0; i < p.count; i++) { const y = bladeBase[i * 3 + 1]; p.setX(i, bladeBase[i * 3] + bend * (y + 0.25) * (y + 0.25) * 3); }
        p.needsUpdate = true;
      } else {
        kit.setEnv(DUSK(0.03));
        cam3(seconds);
        fog.update(seconds);
        actor.pose({ ...G.argue(seconds), mouth: 1 });
      }
    };
  },
});
