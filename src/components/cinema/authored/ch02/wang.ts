import { SphereGeometry, TorusGeometry, type Object3D } from 'three';
import type { Kit } from '../../cinemaKit';
import { room } from '../../stage/architecture';
import { bookshelf, chair, cup, hangingScroll, kang, pot, roundTable, stool, table, vase, writing, zither } from '../../stage/props';
import { flat, VERMILION, type Figure } from '../../stage/figure';
import { plumTree } from '../../stage/nature';
import { lights } from '../../stage/direct';

/*
 * Wang Wenhui's parlour (chapter 2, paragraphs 18–23): a raised kang with its low table where the
 * Commissioner sits cross-legged, a scroll of calligraphy above it, chairs for callers, a lattice
 * window. The kang is at the back; callers stand or sit in front of it.
 */
export function parlour(kit: Kit, parent: Object3D) {
  const g = kit.group(parent, 0, 0, 0);
  room(kit, g, { w: 12, d: 9, h: 3.8, back: 'lattice', floorKind: 'bricks' });
  kang(kit, g, { z: -3, w: 3, d: 1.6 });
  const scroll = hangingScroll(kit, g, { x: 0, y: 2.6, z: -4.35, w: 0.9, h: 1.6, kind: 'blank' });
  writing(kit, scroll, ['福', '寿'], { size: 0.34, gap: 1.2, margin: 0.2, z: 0.012 });
  cup(kit, g, 0.2, 0.79, -3, 1.3); pot(kit, g, -0.2, 0.79, -3.1);
  for (const side of [-1, 1]) { chair(kit, g, { x: side * 2.6, z: -0.8, rot: -side * Math.PI / 2 }); table(kit, g, { x: side * 2.7, z: 0.1, w: 0.5, d: 0.5, h: 0.72 }); }
  bookshelf(kit, g, { x: -5, z: -3.6, w: 1.6, h: 2.4, rand: kit.rand });
  vase(kit, g, 2.7, 0.72, 0.1, { rand: kit.rand });
  lights(kit, g, { key: [-4, 9, 7], intensity: 1 });
  /** Where Wenhui sits on the kang, and the callers' places. */
  return { group: g, kangSeat: [0.7, -3.1] as [number, number], caller: [0, -0.9] as [number, number], chairs: [[-2.45, -0.8], [2.45, -0.8]] as [number, number][] };
}

/** Wang Xun's study: shelves, a round table with stools, a zither, a moon window onto plum. */
export function wangStudy(kit: Kit, parent: Object3D) {
  const g = kit.group(parent, 0, 0, 0);
  room(kit, g, { w: 11, d: 8, h: 3.6, back: 'moon', floorKind: 'boards' });
  plumTree(kit, g, -2, -6.5, { h: 4, rand: kit.rand, blossoms: 90 });
  bookshelf(kit, g, { x: 3.4, z: -3.6, w: 2.2, h: 2.6, rand: kit.rand });
  roundTable(kit, g, { z: 0, r: 0.8, h: 0.78 });
  cup(kit, g, -0.2, 0.82, 0.1, 1.3); cup(kit, g, 0.25, 0.82, -0.1, 1.3); pot(kit, g, 0, 0.82, 0.25);
  const seats: [number, number][] = [];
  for (let k = 0; k < 4; k++) { const a = k / 4 * Math.PI * 2 + Math.PI / 4; const x = Math.sin(a) * 1.2, z = Math.cos(a) * 1.2; stool(kit, g, x, z); seats.push([x, z]); }
  zither(kit, g, -4, 0.72, 0.4, 0.3);
  table(kit, g, { x: -4, z: 0.4, w: 1.3, d: 0.5, h: 0.72 });
  hangingScroll(kit, g, { x: 1.6, y: 2.3, z: -3.88, w: 0.7, h: 1.6, kind: 'bamboo' });
  lights(kit, g, { key: [-4, 9, 7], intensity: 1 });
  return { group: g, seats };
}

/** The Sun brothers' faces: Sihui's red nose and pimples; Siyuan's buck teeth and hitched-up eye. */
export function sunFeatures(kit: Kit, sihui: Figure | undefined, siyuan: Figure | undefined) {
  if (sihui) {
    kit.mesh(new SphereGeometry(0.022, 10, 8), flat(VERMILION), sihui.head, 0, -0.012, 0.108);
    for (let k = 0; k < 14; k++) { const a = k * 2.3, r = 0.03 + (k % 4) * 0.012; kit.mesh(new SphereGeometry(0.006, 5, 4), flat(VERMILION), sihui.head, Math.cos(a) * r * 1.4, -0.02 + Math.sin(a) * r * 0.8, 0.093); }
  }
  if (siyuan) {
    kit.box(siyuan.head, flat(0xf4f0e8), [0, -0.058, 0.096], [0.026, 0.02, 0.01]);
    const ring = kit.mesh(new TorusGeometry(0.022, 0.004, 4, 16, Math.PI), flat(VERMILION), siyuan.head, 0.034, 0.02, 0.092);
    ring.rotation.z = 0.2;
  }
}
