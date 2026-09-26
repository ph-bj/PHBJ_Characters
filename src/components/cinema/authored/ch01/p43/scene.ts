import { defineScene } from '../../define';
import { INK_SKY } from '../../../cinemaKit';
import { CAST, G, cue, face, figure, walkAlong } from '../../../stage/figure';
import { chamber, gateLane, street } from '../../../stage/locations';
import { cart, horse } from '../../../stage/vehicles';
import { specks } from '../../../stage/fx';
import { lights, move, sets, span } from '../../../stage/direct';

/*
 * Chapter 1, paragraph 43. In the warm inner room Lady Yan has a maid hold up the grape-patterned
 * lynx coat and settles it on Ziyu's shoulders. Out in a street scoured by the north wind, grit and
 * snow flying sideways, the pages Yun'er and Jun'er ride ahead and the fox-lined cart follows, the
 * camera racing along beside the wheels. At Commissioner Wang's gate the cart draws up and young
 * Wang Xun comes out, bowing, to welcome his cousin in.
 */

export default defineScene({
  seed: 1043,
  build: (kit, story) => {
    const { groups: [home, road, wang], show } = sets(kit, 3);
    const at = (i: number) => story.shots[i].start;

    // --- Shot 1: the lynx fur ----------------------------------------------------------------------
    chamber(kit, home);
    const mother = figure(kit, home, CAST.ladyYan, -0.9, -0.6);
    const maid = figure(kit, home, CAST.maid, 1.4, -1.8);
    const son = figure(kit, home, CAST.ziyu, 0, 0);
    const furred = figure(kit, home, { ...CAST.ziyu, fur: true }, 0, 0);
    lights(kit, home, { key: [-4, 7, 5], intensity: 1 });
    const cam1 = move(kit, home, [
      [0, [2.6, 1.6, 3.2], [0, 1.3, -0.4]],
      [12, [-1.4, 1.6, 2.4], [0, 1.45, 0]],
    ]);

    // --- Shot 2: riding into the north wind ------------------------------------------------------
    const st = street(kit, road);
    const riders = [-0.8, 0.8].map(x => { const h = horse(kit, road, { x, z: -6 }); const p = figure(kit, h.group, CAST.page, 0, 0); p.root.position.y = 1.2; p.shadow.visible = false; return { h, p }; });
    riders.forEach(({ h }) => { h.group.rotation.y = Math.PI; });
    const c = cart(kit, road, { z: 0, rot: Math.PI, fur: true });
    const gale = specks(kit, road, { count: 2600, w: 40, h: 10, d: 60, fall: 0.3, wind: 6, swirl: 0.3, size: 0.03, dark: true, y: 4, z: -20 });
    lights(kit, road, { key: [-10, 10, 6], intensity: 0.9 });

    // --- Shot 3: Wang Xun comes out --------------------------------------------------------------
    const house = gateLane(kit, wang);
    const arrive = cart(kit, wang, { x: -10, z: 3.8, rot: Math.PI / 2, fur: true });
    const wx = figure(kit, wang, CAST.wangxun, 0, -1.5);
    const zy = figure(kit, wang, { ...CAST.ziyu, fur: true }, 1.6, 3.2);
    const gust = specks(kit, wang, { count: 900, w: 30, h: 8, d: 16, fall: 0.3, wind: 4, size: 0.03, dark: true, y: 4 });
    lights(kit, wang, { key: [8, 12, 10], intensity: 1 });
    const cam3 = move(kit, wang, [
      [at(2), [-6, 1.5, 9], [-2, 1.4, 2]],
      [at(2) + 5, [3.6, 1.7, 7.5], [0.6, 1.5, 1]],
      [36, [2.6, 1.7, 5.4], [0.4, 1.6, 0.6]],
    ]);

    return (seconds: number, shot: number) => {
      show(shot);
      if (shot === 0) {
        kit.setEnv(INK_SKY.paper(0.03));
        cam1(seconds);
        const on = span(seconds, 6.5, 8.5);
        son.fade(1 - on); furred.fade(on);
        face(son, -0.9, -0.6); face(furred, -0.9, -0.6);
        son.pose(G.folded(seconds)); furred.pose(cue(seconds, [[6.5, G.folded], [9, t => G.salute(t, 0.3)]]));
        face(mother, 0, 0);
        mother.pose(cue(seconds, [[0, G.speak], [3, G.point], [6.5, t => ({ ...G.offer(t), bow: 0.1 })], [9, G.folded]]));
        walkAlong(maid, seconds, 2.6, 6.2, [[1.4, -1.8], [0.5, -0.6]], G.offer(seconds), 6);
        if (seconds > 6.2) { face(maid, 0, 0); maid.pose(G.offer(seconds)); }
      } else if (shot === 1) {
        kit.setEnv(INK_SKY.paper(0.03));
        const t = seconds - at(1);
        st.update(seconds);
        gale.uniforms.uSpeed.value = 1;
        const z = -t * 2.6;
        riders.forEach(({ h, p }, i) => { h.group.position.z = -6 + z; h.update(seconds + i, true); p.pose({ ...G.hold(t), bow: 0.2, yaw: 0.2 }); });
        c.group.position.z = z;
        c.update(seconds, true);
        const cx = 3.2 + Math.sin(t * 0.4) * 0.4;
        kit.camera.position.set(road.position.x + cx * (kit.portrait() ? 1.6 : 1), 1.1, z + 2.6);
        kit.camera.lookAt(road.position.x, 1.4, z - 4);
      } else {
        kit.setEnv(INK_SKY.paper(0.025));
        const t = seconds - at(2);
        cam3(seconds);
        gust.uniforms.uSpeed.value = 1;
        const pull = span(t, 0, 3);
        arrive.group.position.x = -10 + pull * 7;
        arrive.update(seconds, t < 3);
        house.gate.open(span(t, 1.5, 3));
        walkAlong(wx, t, 2.5, 4.5, [[0, -1.5], [0.4, 1.8]], G.rest(t), 5);
        if (t > 4.5) { face(wx, 1.6, 3.2); wx.pose(cue(t, [[4.5, tt => G.salute(tt, 0.4)], [7, tt => ({ ...G.speak(tt, 'l'), r: { lift: 0.9, out: 0.8, bend: 0.3 } })]])); }
        zy.root.visible = t > 3.4;
        face(zy, 0.4, 1.8);
        zy.pose(G.salute(t, 0.3));
      }
    };
  },
});
