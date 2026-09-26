import * as THREE from 'three';
import { defineScene, type SceneFactory, type Story } from '../authored/define';
import { INK_SKY, inkRevealMaterial, type Env, type Kit } from '../cinemaKit';
import { drawFigure, FIGURE_ASPECT, FIGURE_H, FIGURE_W, type Ctx } from '../brush';

/**
 * Beats: reusable, data-driven shots. A cinema built from beats lists one beat per shot in its
 * story; each beat builds its own set (far from the others) and animates it from the time since
 * its shot began. Most paragraphs need nothing more than `beatScene(seed, [beat, beat, ...])`.
 */

export type BeatContext = {
  kit: Kit;
  story: Story;
  /** The set this beat builds into; it is shown only during its shot. Its origin is at `x`. */
  set: THREE.Group;
  x: number;
  /** Length of this beat's shot, in seconds. */
  duration: number;
};

export type BeatStage = {
  /** Called every frame of the shot with the seconds since the shot began. */
  update: (t: number) => void;
  /** The sky for this shot; bare paper if omitted. */
  env?: Env;
};

export type Beat = (context: BeatContext) => BeatStage;

/** A cinema whose shots are beats, in story order. */
export function beatScene(seed: number, beats: Beat[]): SceneFactory {
  return defineScene({
    seed,
    build: (kit, story) => {
      if (beats.length !== story.shots.length) throw new Error(`The scene has ${beats.length} beats but the story has ${story.shots.length} shots.`);
      const paper = INK_SKY.paper(0);
      const stages = beats.map((beat, i) => {
        const x = i * 500;
        const set = kit.group(kit.scene, x);
        const shot = story.shots[i];
        return { set, ...beat({ kit, story, set, x, duration: shot.end - shot.start }) };
      });
      return (seconds, shot) => {
        stages.forEach((stage, i) => { stage.set.visible = i === shot; });
        kit.setEnv(stages[shot].env ?? paper);
        stages[shot].update(seconds - story.shots[shot].start);
      };
    },
  });
}

// --- Building blocks shared by beats -----------------------------------------------------------

export const tone = (hex: number, extra: THREE.MeshBasicMaterialParameters = {}) => new THREE.MeshBasicMaterial({ color: hex, ...extra });

export function canvasOf(width: number, height: number) {
  const canvas = document.createElement('canvas'); canvas.width = width; canvas.height = height;
  return canvas;
}

/**
 * A canvas painting on a plane that seeps into the paper. Redraws each frame if `animate`; `sharp`
 * for paintings that carry writing (crisper filtering).
 */
export function painting(kit: Kit, parent: THREE.Object3D, width: number, height: number, size: [number, number], paint: (ctx: Ctx, t: number) => void, animate = false, sharp = false) {
  const canvas = canvasOf(width, height);
  const ctx = canvas.getContext('2d')!;
  paint(ctx, 0);
  const texture = kit.canvasTexture(canvas, sharp);
  // Writing is painted in the app's fonts, fetched by character on first use: paint again once
  // whatever the first paint asked for has loaded (animated paintings repaint every frame anyway).
  if (sharp && !animate && typeof document !== 'undefined' && document.fonts) {
    document.fonts.ready.then(() => { ctx.clearRect(0, 0, width, height); paint(ctx, 0); texture.needsUpdate = true; });
  }
  const material = inkRevealMaterial(texture, undefined, { sharp });
  const mesh = kit.mesh(new THREE.PlaneGeometry(size[0], size[1]), material, parent);
  return {
    mesh, material,
    /** Reveal from 0 to 1, and redraw at time t when animated. */
    set(reveal: number, t: number) {
      material.uniforms.uReveal.value = reveal;
      if (animate && reveal > 0) { ctx.clearRect(0, 0, width, height); paint(ctx, t); texture.needsUpdate = true; }
    },
  };
}

/** A brushed figure (see figures.ts) on a plane, redrawn every frame so it moves. */
export function figure(kit: Kit, parent: THREE.Object3D, height: number, draw: (ctx: Ctx, t: number) => void) {
  return painting(kit, parent, FIGURE_W, FIGURE_H, [height * FIGURE_ASPECT, height], (ctx, t) => drawFigure(ctx, c => draw(c, t)), true);
}

/** Calligraphy in columns read right to left; each column seeps in on its own. */
export function columns(kit: Kit, parent: THREE.Object3D, lines: string[], { size, gap = size * 1.25, x = 0, y = 0 }: { size: number; gap?: number; x?: number; y?: number }) {
  const width = (lines.length - 1) * gap;
  const items = lines.map((line, i) => {
    const { mesh, material } = kit.calligraphy(parent, line, { size });
    // Columns hang from a common top edge.
    mesh.position.set(x + width / 2 - i * gap, y - ([...line].length * size) / 2, 0.02);
    return material;
  });
  return {
    /** Reveal the columns one after another as `progress` goes from 0 to 1. */
    set(progress: number) {
      items.forEach((material, i) => { material.uniforms.uReveal.value = Math.min(1, Math.max(0, progress * items.length - i)); });
    },
  };
}

/** An album leaf: a silk mount with a paper page, facing the camera at the set's origin. */
export function albumPage(kit: Kit, parent: THREE.Object3D, width = 11, height = 7.2) {
  kit.mesh(new THREE.PlaneGeometry(width + 1, height + 0.9), tone(0xcfc8bc), parent, 0, 0, -0.03);
  kit.mesh(new THREE.PlaneGeometry(width, height), tone(0xf3eee3), parent, 0, 0, -0.02);
}

/** Frames the set from the front with a gentle push in; pulls back on narrow screens. */
export function frontCamera(kit: Kit, x: number, t: number, duration: number, { from = 11, to = 10, y = 0, drift = 0.4 }: { from?: number; to?: number; y?: number; drift?: number } = {}) {
  const u = Math.min(1, t / duration), eased = u * u * (3 - 2 * u);
  const z = (from + (to - from) * eased) * (kit.portrait() ? 1.5 : 1);
  kit.camera.position.set(x + drift * (eased - 0.5), y, z);
  kit.camera.lookAt(x, y, 0);
}

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
export const ease = (v: number) => { const x = clamp01(v); return x * x * (3 - 2 * x); };
