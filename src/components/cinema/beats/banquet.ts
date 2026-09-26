import { DAN_POSES } from '../figures';
import type { Beat } from './engine';
import type { Gesture } from './people';
import { tableauBeat, type CastMember, type Prop, type Tableau } from './tableau';

/**
 * Wang Wenhui's banquet (chapter 2): six at a round table in the reception hall, seated by rank.
 * Give gesture cues per guest, move anyone out of their seat, and set cups or coins on the table.
 */

export type Guest = 'yang' | 'zhou' | 'lu' | 'wenhui' | 'sun' | 'guibao';

const SEATS: Record<Guest, CastMember> = {
  yang: { kind: 'guest', x: -4, z: -0.7 }, // 杨方猷, the seat of honour
  zhou: { kind: 'guest', x: -2.4, z: -0.8 }, // 周锡爵
  lu: { kind: 'guest', x: -0.8, z: -0.85 }, // 陆宗沅
  wenhui: { kind: 'wenhui', x: 0.8, z: -0.85 }, // the host
  sun: { kind: 'lianggong', x: 2.4, z: -0.8 }, // 孙亮功
  guibao: { kind: 'dan', x: 4, z: -0.7, h: 4.1, pose: DAN_POSES[4] }, // 王桂保, pouring and playing
};

export type BanquetSpec = Omit<Tableau, 'place' | 'round' | 'cast'> & {
  cues?: Partial<Record<Guest, [number, Gesture][]>>;
  /** Guests shown elsewhere: `leave` removes them from their seat (e.g. while they walk round). */
  leave?: Guest[];
  /** Replace a seat's member entirely, e.g. Lianggong walking over to toast. */
  move?: Partial<Record<Guest, Partial<CastMember>>>;
  extra?: CastMember[];
  props?: Prop[];
};

export const banquetBeat = (spec: BanquetSpec = {}): Beat => {
  const cast = (Object.keys(SEATS) as Guest[])
    .filter(g => !spec.leave?.includes(g))
    .map(g => ({ ...SEATS[g], cues: spec.cues?.[g], ...spec.move?.[g] }));
  return tableauBeat({
    ...spec,
    place: 'banquet',
    round: { w: 9.6 },
    cast: [...cast, ...(spec.extra ?? [])],
    camera: spec.camera ?? { from: 11.4, to: 10.4, y: 0.4, drift: 0.4 },
  });
};
