import * as THREE from 'three';
import type { Kit } from '../../cinemaKit';
import { CAST, figure, tone, type Figure } from '../../stage/figure';
import { DARK, floor, lattice, shopRow, WOOD } from '../../stage/architecture';
import { cart } from '../../stage/vehicles';
import { lights } from '../../stage/direct';
import { BOYS } from './actors';

/*
 * The street where Ziyu's cart is wedged in traffic (chapter 1, paragraphs 52–55): shop fronts, carts
 * jammed nose to tail, and, facing Ziyu's cart head-on, the blue-hooded cart with an old man inside
 * and the two boys sitting outside on its shafts. Ziyu's own cart is built open so the camera can sit
 * inside it and look out through the glass pane in the curtain.
 */
export function jam(kit: Kit, parent: THREE.Object3D) {
  const rand = kit.rand;
  const g = kit.group(parent, 0, 0, 0);
  floor(kit, g, 14, 120, { kind: 'flag', shade: 0xcfc8bc, z: -20 });
  const rows = [shopRow(kit, g, { x: -6.5, z: -10, count: 7, rand }), shopRow(kit, g, { x: 6.5, z: -14, count: 7, rand })];
  rows[0].group.rotation.y = Math.PI / 2; rows[1].group.rotation.y = -Math.PI / 2;

  // Ziyu's cart, facing -z, at the origin: a cab with the front open onto a curtain and its window.
  const own = kit.group(g, 0, 0, 0);
  const cab = kit.group(own, 0, 0.9, 0);
  kit.box(cab, tone(WOOD), [0, 0, 0], [1.1, 0.1, 1.7]);
  for (const side of [-1, 1]) kit.box(cab, tone(0x4a4a50), [side * 0.55, 0.55, 0], [0.04, 1.1, 1.7]);
  kit.box(cab, tone(0x4a4a50), [0, 1.1, 0], [1.1, 0.04, 1.7]);
  kit.box(cab, tone(0x4a4a50), [0, 0.55, 0.85], [1.1, 1.1, 0.04]);
  for (const side of [-1, 1]) { const w = lattice(kit, cab, 0.45, 0.35, 'grid', true, side * 0.575, 0.6, 0); w.rotation.y = Math.PI / 2; }
  // The front curtain, hinged at the top, with a square of glass let into it.
  const curtainPivot = kit.group(cab, 0, 1.08, -0.84);
  const shape = new THREE.Shape([new THREE.Vector2(-0.5, -1), new THREE.Vector2(0.5, -1), new THREE.Vector2(0.5, 0), new THREE.Vector2(-0.5, 0)]);
  const pane = new THREE.Path([new THREE.Vector2(-0.2, -0.62), new THREE.Vector2(0.2, -0.62), new THREE.Vector2(0.2, -0.32), new THREE.Vector2(-0.2, -0.32)]);
  shape.holes.push(pane);
  kit.mesh(new THREE.ShapeGeometry(shape), new THREE.MeshLambertMaterial({ color: 0xe6e0d6, side: THREE.DoubleSide }), curtainPivot);
  kit.mesh(new THREE.PlaneGeometry(0.42, 0.32), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.12, side: THREE.DoubleSide }), curtainPivot, 0, -0.47, 0.005);
  for (const side of [-1, 1]) { kit.mesh(new THREE.TorusGeometry(0.8, 0.05, 6, 24), tone(DARK), own, side * 0.7, 0.8, 0.1).rotation.y = Math.PI / 2; }
  const ziyu = figure(kit, cab, { ...CAST.ziyu, fur: true }, 0, 0.3);
  ziyu.root.rotation.y = Math.PI;
  ziyu.root.position.y = 0.05;
  ziyu.shadow.visible = false;

  // The other cart stands broadside across the way, four metres off, its mule to the left.
  const other = cart(kit, g, { x: 0.4, z: -4.6, rot: -Math.PI / 2, hood: 0x3f4f6a, window: true, paleMule: true });
  other.curtain(0.9);
  const master: Figure = figure(kit, other.seat, BOYS.master, 0, -0.2);
  master.root.position.y = 0.05; master.shadow.visible = false;
  // The boys sit outside on the cart's near side, facing Ziyu's window, legs dangling.
  const qin = figure(kit, other.group, BOYS.qinguan, 0.85, 0.35);
  const qi = figure(kit, other.group, BOYS.qiguan, 0.85, -0.4);
  for (const b of [qin, qi]) { b.root.position.y = 0.55; b.root.rotation.y = Math.PI / 2; b.shadow.visible = false; }

  // Jammed carts and mules crowding round.
  const jammed = [[-3.4, -4, 0], [3.2, -1.5, Math.PI], [-3.2, 3.6, Math.PI], [3.4, -9, 0], [-2.8, -13, 0]].map(([x, z, r]) => cart(kit, g, { x, z, rot: r, hood: rand() < 0.5 ? 0x4a4a50 : 0x6e675f }));
  const drivers = jammed.map(c => { const d = figure(kit, c.group, CAST.servant, 0.9, 1.6); d.shadow.visible = false; return d; });
  lights(kit, g, { key: [8, 10, 6], intensity: 1 });
  return {
    group: g, own, cab, curtainPivot, ziyu, other, master, qin, qi, jammed, drivers,
    update: (t: number) => { rows.forEach(r => r.update(t)); other.update(t, false); jammed.forEach((c, i) => c.update(t + i, false)); },
    /** Lifts Ziyu's curtain (0 down, 1 up). */
    lift: (u: number) => { curtainPivot.rotation.x = -u * 1.4; },
  };
}
