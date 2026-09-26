import * as THREE from 'three';
import type { Kit } from '../cinemaKit';
import { contactShadow, flat, tone, VERMILION } from './figure';
import { DARK, WOOD } from './architecture';
import { lattice } from './architecture';

/*
 * Carts, horses and mules, and boats, built in 3D. Each faces +z (the way it travels) and returns
 * an update(t, moving) that turns wheels, swings legs and rocks hulls.
 */

/** A horse or mule. `pale` for a white mule. */
export function horse(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, rot = 0, pale = false, s = 1 }: { x?: number; z?: number; rot?: number; pale?: boolean; s?: number } = {}) {
  const g = kit.group(parent, x, 0, z); g.rotation.y = rot; g.scale.setScalar(s);
  const coat = tone(pale ? 0xe6e0d6 : 0x3f3a35), dark = tone(0x1c1816);
  contactShadow(kit, g, 1.1, 2.4, 0.6);
  const body = kit.group(g, 0, 1.25, 0);
  kit.mesh(new THREE.SphereGeometry(0.4, 16, 12), coat, body).scale.set(0.85, 0.9, 1.9);
  const neck = kit.group(body, 0, 0.2, 0.6);
  neck.rotation.x = 0.7;
  kit.mesh(new THREE.CylinderGeometry(0.14, 0.22, 0.75, 10), coat, neck, 0, 0.35, 0);
  const head = kit.group(neck, 0, 0.72, 0.05);
  head.rotation.x = 1.4;
  kit.mesh(new THREE.CylinderGeometry(0.09, 0.14, 0.5, 10), coat, head, 0, 0.18, 0);
  for (const side of [-1, 1]) kit.mesh(new THREE.ConeGeometry(0.04, 0.14, 5), coat, head, side * 0.07, -0.08, -0.07).rotation.x = -1.2;
  kit.box(neck, dark, [0, 0.4, -0.12], [0.05, 0.7, 0.08]);
  const tail = kit.group(body, 0, 0.15, -0.72);
  kit.mesh(new THREE.CylinderGeometry(0.05, 0.02, 0.7, 6), dark, tail, 0, -0.35, 0);
  tail.rotation.x = 0.4;
  const legs = [[-0.18, 0.5], [0.18, 0.5], [-0.18, -0.5], [0.18, -0.5]].map(([lx, lz], i) => {
    const hip = kit.group(g, lx, 1.05, lz);
    kit.mesh(new THREE.CylinderGeometry(0.07, 0.05, 0.55, 8), coat, hip, 0, -0.27, 0);
    const knee = kit.group(hip, 0, -0.55, 0);
    kit.mesh(new THREE.CylinderGeometry(0.045, 0.04, 0.45, 8), coat, knee, 0, -0.22, 0);
    kit.mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.06, 8), dark, knee, 0, -0.46, 0);
    return { hip, knee, phase: [0, Math.PI, Math.PI * 0.5, Math.PI * 1.5][i] };
  });
  return {
    group: g, head,
    update: (t: number, moving = false, pace = 6) => {
      legs.forEach(({ hip, knee, phase }) => {
        const a = moving ? Math.sin(t * pace + phase) : 0;
        hip.rotation.x = a * 0.4; knee.rotation.x = moving ? Math.max(0, -Math.cos(t * pace + phase)) * 0.6 : 0;
      });
      body.position.y = 1.25 + (moving ? Math.abs(Math.sin(t * pace)) * 0.03 : 0);
      head.rotation.x = 1.4 + Math.sin(t * (moving ? pace : 0.8)) * (moving ? 0.08 : 0.04);
      tail.rotation.z = Math.sin(t * 1.7) * 0.15;
    },
  };
}

/**
 * A Peking cart (轿车): two big spoked wheels, a box with an arched cloth hood, a front curtain
 * (optionally with a glass window), and shafts for a mule. Returns the cabin for seating a rider and
 * `curtain(u)` to lift it.
 */
export function cart(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, rot = 0, hood = 0x4a4a50, window = true, fur = false, mule = true, paleMule = false }: { x?: number; z?: number; rot?: number; hood?: number; window?: boolean; fur?: boolean; mule?: boolean; paleMule?: boolean } = {}) {
  const g = kit.group(parent, x, 0, z); g.rotation.y = rot;
  contactShadow(kit, g, 2.2, 3.2, 0.6);
  const cab = kit.group(g, 0, 0.9, 0);
  kit.box(cab, tone(WOOD), [0, 0, 0], [1.1, 0.1, 1.7]);
  // The arched hood: a half-cylinder of cloth over the box.
  const hoodMesh = kit.mesh(new THREE.CylinderGeometry(0.62, 0.62, 1.5, 20, 1, true, -Math.PI / 2, Math.PI), tone(hood, true), cab, 0, 0.55, -0.05);
  hoodMesh.rotation.x = Math.PI / 2; hoodMesh.rotation.z = Math.PI / 2;
  for (const side of [-1, 1]) kit.box(cab, tone(hood), [side * 0.55, 0.3, -0.05], [0.04, 0.55, 1.5]);
  kit.box(cab, tone(hood), [0, 0.55, -0.8], [1.1, 1.1, 0.04]);
  // Side windows with lattice.
  for (const side of [-1, 1]) { const w = lattice(kit, cab, 0.45, 0.35, 'grid', true, side * 0.575, 0.6, 0); w.rotation.y = Math.PI / 2; }
  // Front curtain and its window; the curtain lifts.
  const curtainPivot = kit.group(cab, 0, 1.05, 0.72);
  kit.box(curtainPivot, tone(fur ? 0xe6e0d6 : 0x6e675f), [0, -0.5, 0], [1.0, 1.0, 0.03]);
  if (window) kit.mesh(new THREE.PlaneGeometry(0.34, 0.26), flat(0xf4f0e8), curtainPivot, 0, -0.42, 0.02);
  // A rider inside sits on the cab floor: add figures to `seat`.
  const seat = kit.group(cab, 0, 0.05, 0.1);
  // Wheels.
  const wheels = [-1, 1].map(side => {
    const w = kit.group(g, side * 0.7, 0.8, -0.1);
    const rim = kit.mesh(new THREE.TorusGeometry(0.78, 0.05, 6, 28), tone(DARK), w);
    rim.rotation.y = Math.PI / 2;
    const spokes = kit.group(w, 0, 0, 0);
    for (let k = 0; k < 12; k++) { const sp = kit.box(spokes, tone(DARK), [0, 0, 0], [0.03, 1.5, 0.03]); sp.rotation.x = k / 12 * Math.PI; }
    kit.mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.2, 10), tone(DARK), w).rotation.z = Math.PI / 2;
    return spokes;
  });
  for (const side of [-1, 1]) {
    const shaft = kit.box(g, tone(WOOD), [side * 0.45, 0.95, 1.6], [0.06, 0.06, 2.6]);
    shaft.rotation.x = 0.08;
  }
  const beast = mule ? horse(kit, g, { z: 2.4, pale: paleMule, s: 0.9 }) : undefined;
  return {
    group: g, cab, seat,
    curtain: (u: number) => { curtainPivot.rotation.x = -u * 1.5; },
    update: (t: number, moving = false) => {
      wheels.forEach(sp => { sp.rotation.x = moving ? -t * 1.6 : 0; });
      cab.position.y = 0.9 + (moving ? Math.sin(t * 7) * 0.015 : 0);
      cab.rotation.z = moving ? Math.sin(t * 3.1) * 0.015 : 0;
      beast?.update(t, moving, 5);
    },
  };
}

/** A boat with a cabin, along z. update(t) rocks it on the water. */
export function boat(kit: Kit, parent: THREE.Object3D, { x = 0, z = 0, rot = 0, len = 9, cabin = true, mast = false, shade = 0x3f3a35 }: { x?: number; z?: number; rot?: number; len?: number; cabin?: boolean; mast?: boolean; shade?: number } = {}) {
  const g = kit.group(parent, x, 0, z); g.rotation.y = rot;
  const hull = kit.group(g, 0, 0, 0);
  const shape = new THREE.Shape();
  const w = len * 0.13;
  shape.moveTo(0, -len / 2); shape.quadraticCurveTo(w * 1.1, -len * 0.3, w, 0); shape.quadraticCurveTo(w * 1.1, len * 0.3, 0, len / 2 + 0.3);
  shape.quadraticCurveTo(-w * 1.1, len * 0.3, -w, 0); shape.quadraticCurveTo(-w * 1.1, -len * 0.3, 0, -len / 2);
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.7, bevelEnabled: false, curveSegments: 16 });
  geo.rotateX(Math.PI / 2); geo.translate(0, 0.35, 0);
  kit.mesh(geo, tone(shade), hull);
  kit.box(hull, tone(0x8c857c), [0, 0.37, 0], [w * 1.6, 0.04, len * 0.85]);
  if (cabin) {
    kit.box(hull, tone(0xb9b2a8), [0, 0.95, -len * 0.08], [w * 1.5, 1.2, len * 0.38]);
    for (const side of [-1, 1]) { const l = lattice(kit, hull, len * 0.3, 0.6, 'grid', true, side * w * 0.76, 1.0, -len * 0.08); l.rotation.y = Math.PI / 2; }
    const top = kit.mesh(new THREE.CylinderGeometry(w * 0.95, w * 0.95, len * 0.42, 16, 1, true, -Math.PI / 2, Math.PI), tone(0x4a443e, true), hull, 0, 1.5, -len * 0.08);
    top.rotation.x = Math.PI / 2; top.scale.set(1, 1, 0.5); top.rotation.z = Math.PI / 2;
  }
  if (mast) {
    kit.mesh(new THREE.CylinderGeometry(0.06, 0.08, len * 0.8, 6), tone(DARK), hull, 0, len * 0.4, len * 0.12);
    const sail = kit.mesh(new THREE.PlaneGeometry(len * 0.3, len * 0.5), tone(0xc9c2b7, true), hull, 0, len * 0.45, len * 0.12);
    sail.rotation.y = Math.PI / 2;
  }
  // A lantern at the stern, vermilion.
  kit.mesh(new THREE.SphereGeometry(0.14, 10, 8), flat(VERMILION), hull, 0, 1.7, -len * 0.42);
  kit.box(hull, tone(DARK), [0, 1.3, -len * 0.42], [0.03, 0.8, 0.03]);
  return { group: g, deck: hull, update: (t: number, seed = 0) => { hull.rotation.z = Math.sin(t * 0.9 + seed) * 0.025; hull.rotation.x = Math.sin(t * 0.7 + seed * 2) * 0.012; hull.position.y = Math.sin(t * 1.1 + seed) * 0.04; } };
}
