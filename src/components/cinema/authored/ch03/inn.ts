import type * as THREE from 'three';
import type { Kit } from '../../cinemaKit';
import { CAST, face, figure, type Figure, type FigureSpec, type Pose } from '../../stage/figure';
import { lights } from '../../stage/direct';
import { CHUNLAN, DANS, FU_SAN, GUI_FEN, PINCAI, RONGGUAN, XI } from './actors';
import { earring, restaurant } from './places';

/**
 * The restaurant of paragraphs 26 to 37 with both parties seated: Fu the Third's in the left room
 * (Pincai, Fu, Gui, Rongguan) and Xi the Eleventh's in the right (Xi, Chunlan and three dan).
 * `sit(fig, pose)` keeps a diner in his seat facing his table. The rooms open toward +z, so a wide
 * shot sees both at once with the partition between them.
 */
export function inn(kit: Kit, parent: THREE.Object3D) {
  const r = restaurant(kit, parent);
  lights(kit, parent, { key: [2, 6, 8], intensity: 1, fill: 0.45 });
  const place = (spec: FigureSpec, room: number, seat: number) => {
    const [x, z] = r.rooms[room].seats[seat];
    const f = figure(kit, parent, spec, x, z);
    return { f, x, z, cx: r.rooms[room].x };
  };
  const left = { pincai: place(PINCAI, 0, 1), fu: place(FU_SAN, 0, 2), gui: place(GUI_FEN, 0, 3), rong: place(RONGGUAN, 0, 4) };
  earring(kit, left.rong.f);
  const right = { xi: place(XI, 1, 2), chunlan: place(CHUNLAN, 1, 1), a: place(DANS[0], 1, 3), b: place(DANS[1], 1, 4), c: place(DANS[3], 1, 0) };
  const all = { ...left, ...right };
  type Who = keyof typeof all;
  return {
    ...r, left, right, all,
    who: (w: Who): Figure => all[w].f,
    /** Seats a diner facing his table in the given pose. */
    sit(w: Who, pose: Pose) {
      const p = all[w];
      p.f.root.position.set(p.x, 0, p.z);
      face(p.f, p.cx, -0.6);
      p.f.pose({ ...pose, sit: 1 });
    },
    waiter: (x = 0, z = 4) => figure(kit, parent, { ...CAST.servant, robe: 0xd6d0c6 }, x, z),
  };
}
