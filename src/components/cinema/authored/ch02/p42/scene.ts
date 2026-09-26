import * as THREE from 'three';
import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, tone, walkAlong } from '../../../stage/figure';
import { platform } from '../../../stage/architecture';
import { courtyard, lanternRow, study } from '../../../stage/locations';
import { ground } from '../../../stage/nature';
import { ingots, table, writing } from '../../../stage/props';
import { album } from '../../../stage/performance';
import { inkGather, mist, petals } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';
import { GUIBAO, QIGUAN, QINGUAN } from '../actors';
import { feast } from '../banquet';
import { wangStudy } from '../wang';

/*
 * Chapter 2, paragraph 42, the chapter's close. Wenhui has twenty taels of silver brought in on a
 * tray; Guibao bows low and takes them, then slips out along the lantern-lit courtyard at night to
 * find his friends in the study. There, over tea, he lets out his news, and the names 琴 and 琪
 * gather in ink above the table: two new boys in the troupe. For a moment we see them as he sees
 * them, Qinguan and Qiguan side by side on a bare stage in the mist, petals falling. And then the
 * print shop: a block inked and pressed, sheet after sheet lifting from it and stacking up, the Flower
 * Manual (花选) being printed anew, while the camera rises away: to be continued.
 */

export default defineScene({
  seed: 2042,
  build: (kit, story) => {
    const { groups: [hallSet, yard, studySet, vision, press], show } = sets(kit, 5);
    const at = (i: number) => story.shots[i].start;

    // --- Twenty taels ---------------------------------------------------------------------------------
    const f = feast(kit, hallSet);
    const bearer = figure(kit, hallSet, CAST.servant, 2.6, 3);
    const tray = kit.group(bearer.hands.r, 0, -0.03, 0.12);
    kit.box(tray, tone(0x3f3a35), [0, 0, 0], [0.34, 0.02, 0.24]);
    ingots(kit, tray, 0, 0.01, 0, 6);
    const cam1 = move(kit, hallSet, [[0, [0.4, 1.7, 3.8], [-0.5, 1.2, 1.4]], [5, [1.9, 1.8, 4.2], [-0.2, 1.2, 1.9]]]);

    // --- Along the courtyard at night -------------------------------------------------------------------
    courtyard(kit, yard);
    const lamps = lanternRow(kit, yard, [-3.6, 3, -4], [-3.6, 3, 4], 5);
    const walker = figure(kit, yard, GUIBAO.plain, -2.6, -6);
    lights(kit, yard, { key: [-5, 10, 5], intensity: 0.7, fill: 0.3 });
    const cam2 = move(kit, yard, [[5, [1.2, 1.5, -2], [-2.6, 1.3, -4]], [at(1), [0.4, 1.8, 4.2], [-2.6, 1.2, 2]]]);

    // --- The study: the news ------------------------------------------------------------------------------
    const s = wangStudy(kit, studySet);
    const [a, b, c] = s.seats;
    const wx = figure(kit, studySet, CAST.wangxun, ...a);
    const zq = figure(kit, studySet, CAST.zhongqing, ...b);
    const gb = figure(kit, studySet, GUIBAO.plain, ...c);
    [['琴', -0.35], ['琪', 0.35]].forEach(([ch, x], k) => {
      const g = inkGather(kit, studySet, ch as string, { size: 0.5, at: 18.2 + k * 0.8, dur: 2, count: 1400, spread: 0.8, scatter: 4 });
      g.points.position.set(x as number, 1.9, 0);
    });
    const cam3 = move(kit, studySet, [[at(1), [2.4, 1.7, 2.6], [0, 1.2, 0]], [18, [0.3, 1.6, 2.4], [0, 1.6, 0]]]);

    // --- The two new boys, as Guibao sees them --------------------------------------------------------------
    ground(kit, vision, { w: 200, d: 200, height: 0.5, flatten: 20, shade: 0xe6e0d6 });
    platform(kit, vision, 5, 3.4, 0.5, { steps: true });
    const boys = [figure(kit, vision, QINGUAN, -0.5, 0), figure(kit, vision, QIGUAN, 0.5, 0.1)];
    boys.forEach(bb => { bb.root.position.y = 0.5; });
    const fall = petals(kit, vision, { count: 90, w: 6, h: 4, d: 4, y: 0.5, speed: 0.35, wind: 0.2 });
    const haze = mist(kit, vision, { count: 6, w: 40, y: 0.5, d: 10, z: -10, size: 10, opacity: 0.6, drift: 0.3 });
    lights(kit, vision, { key: [2, 8, 6], intensity: 1 });
    const cam4 = move(kit, vision, [[21, [0.3, 1.4, 4.6], [0, 1.5, 0]], [at(2), [0.1, 1.5, 3], [0, 1.45, 0]]]);

    // --- The print shop: the Flower Manual again ------------------------------------------------------------
    study(kit, press);
    table(kit, press, { x: 0, z: 0, w: 1.4, d: 0.8, h: 0.8 });
    const printer = figure(kit, press, { ...CAST.servant, robe: 0x4a443e }, 0, -0.7);
    kit.box(press, tone(0x6e675f), [-0.2, 0.84, 0], [0.4, 0.06, 0.3]);
    const brushPad = kit.box(press, tone(0x2f2a26), [0.2, 0.9, 0], [0.12, 0.06, 0.1]);
    const sheets = Array.from({ length: 14 }, () => kit.mesh(new THREE.PlaneGeometry(0.38, 0.28).rotateX(-Math.PI / 2), tone(0xf4f0e8, true), press));
    const manual = album(kit, press, { x: 0.45, y: 0.8, z: 0.15, w: 0.24, d: 0.32 });
    writing(kit, manual.left, ['花选'], { size: 0.06, margin: 0.02, y: 0.004 }).mesh.rotation.x = -Math.PI / 2;
    lights(kit, press, { key: [3, 6, 5], intensity: 0.9 });
    const cam5 = move(kit, press, [[at(2), [0.6, 1.4, 1.1], [-0.1, 0.85, 0]], [30, [1.2, 1.8, 1.6], [0, 0.9, 0]], [36, [1.3, 3, 3], [0, 0.8, -0.2]]]);

    return (seconds: number, shot: number) => {
      const inYard = shot === 0 && seconds > 5;
      const inVision = shot === 1 && seconds > 21;
      show(shot === 2 ? 4 : inVision ? 3 : shot === 1 ? 2 : inYard ? 1 : 0);
      if (shot === 0 && !inYard) {
        kit.setEnv(INK_SKY.paper(0.025));
        cam1(seconds);
        f.hall.update(seconds);
        f.sit('yang', G.rest(seconds)); f.sit('zhou', G.stroke(seconds)); f.sit('lu', G.rest(seconds)); f.sit('lg', G.drink(seconds));
        const [wxs, wzs] = f.seat('wenhui');
        const host = f.who.wenhui;
        host.root.position.set(wxs, 0, wzs + 0.4); face(host, -0.6, 2); host.pose(cue(seconds, [[0, G.speak], [2.4, G.point]]));
        const guest = f.who.guibao;
        guest.root.position.set(-0.6, 0, 2); face(guest, wxs, wzs + 0.4);
        guest.pose(cue(seconds, [[0, G.rest], [2.6, t => G.bow(t, 0.7)], [4, G.offer]]));
        walkAlong(bearer, seconds, 0, 2.4, [[2.6, 3], [0.2, 2.4]], G.hold(seconds), 5);
        if (seconds > 2.4) { face(bearer, -0.6, 2); bearer.pose({ ...G.offer(seconds), bow: 0.2 }); }
        return;
      }
      if (inYard) {
        kit.setEnv(INK_SKY.moonlit([0.3, 0.3, -1], 0.03));
        cam2(seconds);
        lamps(seconds);
        walkAlong(walker, seconds, 5, at(1), [[-2.6, -6], [-2.5, 0], [-2.6, 5]], { ...G.rest(seconds), l: { lift: 0.7, out: 0.2, bend: 1.4 } }, 6);
        return;
      }
      if (shot === 1 && !inVision) {
        kit.setEnv(INK_SKY.paper(0.03));
        cam3(seconds);
        for (const p of [wx, zq, gb]) face(p, 0, 0);
        gb.pose(cue(seconds, [[at(1), t => ({ ...G.speak(t), sit: 1 })], [18, t => ({ ...G.point(t), sit: 1, pitch: -0.2 })]]));
        wx.pose(cue(seconds, [[at(1), t => ({ ...G.drink(t), sit: 1 })], [16, t => ({ ...G.rest(t), sit: 1, lean: 0.1 })]]));
        zq.pose(cue(seconds, [[at(1), t => ({ ...G.rest(t), sit: 1 })], [16, t => ({ ...G.think(t), sit: 1 })]]));
        return;
      }
      if (inVision) {
        kit.setEnv(INK_SKY.paper(0.02));
        cam4(seconds);
        fall.update(seconds); haze.update(seconds);
        boys[0].root.rotation.y = 0.3; boys[1].root.rotation.y = -0.3;
        boys[0].pose(G.shy(seconds)); boys[1].pose({ ...G.folded(seconds), pitch: 0.2 });
        boys.forEach(bb => bb.fade(span(seconds, 21, 22.2)));
        return;
      }
      // Printing: ink the block, lay a sheet, rub, lift; the stack grows.
      kit.setEnv(INK_SKY.paper(0.03));
      cam5(seconds);
      const t = seconds - at(2);
      const cycle = 0.9, n = Math.floor(t / cycle), ph = (t % cycle) / cycle;
      face(printer, 0, 0);
      printer.pose({ ...G.write(seconds * 3), bow: 0.4, pitch: 0.5 });
      brushPad.position.x = 0.2 - Math.sin(ph * Math.PI) * 0.25;
      sheets.forEach((sh, k) => {
        if (k < n) { sh.position.set(-0.5, 0.83 + 0.004 * k, -0.2); sh.visible = true; }
        else if (k === n) { const lift = Math.max(0, ph - 0.6) / 0.4; sh.position.set(-0.2 - lift * 0.25, 0.88 + Math.sin(lift * Math.PI) * 0.25, -lift * 0.2); sh.visible = true; }
        else sh.visible = false;
      });
      manual.turn(span(seconds, 31, 33));
    };
  },
});
