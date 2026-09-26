import type * as THREE from 'three';
import type { Kit } from '../../cinemaKit';
import { face, type Figure, type Pose } from '../../stage/figure';
import { aim } from '../../stage/direct';
import { where } from '../ch02/banquet';
import { sanle } from './places';

/** Where each of the party sits at Pincai's table in the Sanle Garden (paragraphs 11 to 24). */
const SPOTS = {
  pincai: [-1.05, -0.15], rong: [-0.6, 0.75], fu: [0.05, 0.75], gui: [0.65, 0.75], danA: [1.05, -0.3], danB: [1.05, 0.3],
} as const;
export type Spot = keyof typeof SPOTS;

/**
 * The Sanle Garden with Pincai's table as the centre of attention. `spot(name)` is a seat in hall
 * coordinates; `sit(fig, name, pose, look)` seats a figure there facing the stage (or `look`);
 * `close(fig, from)` frames a head from a point offset around the table, low, for close shots.
 */
export function pitTable(kit: Kit, hall: THREE.Object3D) {
  const th = sanle(kit, hall);
  const [tx, tz] = th.table;
  const spot = (s: Spot): [number, number] => [tx + SPOTS[s][0], tz + SPOTS[s][1]];
  return {
    th, tx, tz, spot,
    sit(fig: Figure, s: Spot, pose: Pose, look: [number, number] = [0, -8]) {
      const [x, z] = spot(s);
      fig.root.position.set(x, 0, z);
      face(fig, ...look);
      fig.pose({ ...pose, sit: 1 });
    },
    close(fig: Figure, offset: [number, number, number], lookUp = 0) {
      const [hx, hy, hz] = where(fig.head, hall);
      aim(kit, hall, [hx + offset[0], hy + offset[1], hz + offset[2]], [hx, hy + lookUp, hz], 0.3);
    },
  };
}
