import * as THREE from 'three';
import type { Kit } from '../../cinemaKit';
import { CAST, face, figure, type Figure, type Pose } from '../../stage/figure';
import { banquetHall } from '../../stage/locations';
import { cup } from '../../stage/props';
import { aim, lights } from '../../stage/direct';
import { GUIBAO, LIANGGONG, LU, YANG, ZHOU } from './actors';

/** Who sits where at Wenhui's banquet (paragraphs 35 to 41): banquetHall seat indices. */
const SEATING = { wenhui: 0, lu: 1, yang: 2, zhou: 3, lg: 4, guibao: 5 } as const;
export type Guest = keyof typeof SEATING;

/**
 * Wenhui's banquet in the 燕喜堂: the hall, the round table, and the six diners in their seats, each
 * with a wine cup before him. `seat(name)` gives a diner's chair, `cupAt(name)` the spot of his cup,
 * and `sit(name, pose)` seats him facing the table in the given pose.
 */
export function feast(kit: Kit, parent: THREE.Object3D) {
  const hall = banquetHall(kit, parent);
  const specs: Record<Guest, typeof YANG> = { wenhui: CAST.wenhui, lu: LU, yang: YANG, zhou: ZHOU, lg: LIANGGONG, guibao: GUIBAO.plain };
  const seat = (g: Guest) => hall.seats[SEATING[g]];
  const who = {} as Record<Guest, Figure>;
  const cups = {} as Record<Guest, THREE.Object3D>;
  for (const g of Object.keys(SEATING) as Guest[]) {
    const [x, z] = seat(g);
    who[g] = figure(kit, parent, specs[g], x, z);
    cups[g] = cup(kit, parent, x * 0.62, 0.82, z * 0.62);
  }
  lights(kit, parent, { key: [4, 9, 7], intensity: 0.9 });
  return {
    hall, who, cups, seat,
    all: Object.values(who),
    cupAt: (g: Guest): [number, number] => { const [x, z] = seat(g); return [x * 0.62, z * 0.62]; },
    /**
     * Aims the camera at a diner from inside the ring of chairs (whose high backs would otherwise
     * block the view): from `dist` toward the table's centre and `side` to one side, or, with
     * `over`, from just in front of another diner's head so it frames the edge of the shot.
     */
    shoot(g: Guest, { dist = 1.1, side = 0.3, lift = 0.1, over, look = 0 }: { dist?: number; side?: number; lift?: number; over?: Guest; look?: number } = {}) {
      const [hx, hy, hz] = where(who[g].head, parent);
      if (over) {
        const [ox, oy, oz] = where(who[over].head, parent);
        const r = Math.hypot(ox, oz);
        aim(kit, parent, [ox * (r - 0.55) / r - oz / r * side, oy + lift, oz * (r - 0.55) / r + ox / r * side], [hx, hy + look, hz], 0.3);
        return;
      }
      const r = Math.hypot(hx, hz), ux = -hx / r, uz = -hz / r;
      aim(kit, parent, [hx + ux * dist - uz * side, hy + lift, hz + uz * dist + ux * side], [hx, hy + look, hz], 0.3);
    },
    sit(g: Guest, pose: Pose) {
      const [x, z] = seat(g);
      who[g].root.position.set(x, 0, z);
      face(who[g], 0, 0);
      who[g].pose({ ...pose, sit: 1 });
    },
  };
}

const scratch = new THREE.Vector3();
/** Where an object (a hand, a head) is right now, in the coordinates of its set, for aiming the camera. */
export function where(obj: THREE.Object3D, set: THREE.Object3D): [number, number, number] {
  obj.getWorldPosition(scratch);
  return [scratch.x - set.position.x, scratch.y - set.position.y, scratch.z - set.position.z];
}
