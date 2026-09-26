import * as THREE from 'three';
import { appFont } from '../fonts';
import { asWriting, WRITING_FLAT, WRITING_INK, WRITING_RED } from '../cinemaKit';
import { ease, frontCamera, painting, tone, type Beat } from './engine';

/**
 * Words as the picture: lines of brushed characters stamped onto paper one by one, in columns read
 * right to left. Chosen characters come in vermilion (the 花 of a verse game), and a stutter makes
 * characters repeat, each repeat stamped a little smaller and fainter.
 */

export type WordLine = {
  text: string;
  /** Seconds into the shot when this column starts. */
  at: number;
  /** Characters to write in vermilion. */
  red?: string;
  /** Seconds per character (default 0.22). */
  pace?: number;
  /** Smaller type for a speaker's name or a gloss. */
  small?: boolean;
};

export const wordsBeat = (lines: WordLine[], { seal }: { seal?: string } = {}): Beat => ({ kit, set, x, duration }) => {
  kit.mesh(new THREE.PlaneGeometry(80, 45), tone(0xece6da), set, 0, 0, -1);
  kit.mesh(new THREE.PlaneGeometry(13.6, 8), tone(0xcfc8bc), set, 0, 0.1, -0.05);
  kit.mesh(new THREE.PlaneGeometry(13, 7.4), tone(0xf3eee3), set, 0, 0.1, -0.04);
  const longest = Math.max(...lines.map(l => [...l.text].length));
  const size = Math.min(0.62, 5.6 / longest);
  const gap = Math.min(size * 1.6, 11 / Math.max(1, lines.length));
  const stamps: { at: number; mesh: THREE.Mesh; material: THREE.ShaderMaterial; s: number }[] = [];
  lines.forEach((line, col) => {
    const cx = ((lines.length - 1) / 2 - col) * gap;
    const chars = [...line.text];
    const s = line.small ? size * 0.7 : size;
    let prev = '';
    let repeat = 0;
    chars.forEach((c, i) => {
      // A character repeated after a stutter comma shrinks and fades each time.
      if (c === prev) repeat++; else if (c !== '、') repeat = 0;
      if (c !== '、') prev = c;
      const red = line.red?.includes(c);
      const art = painting(kit, set, 256, 256, [s, s], ctx => {
        ctx.fillStyle = red ? WRITING_RED : WRITING_INK; ctx.font = appFont(216, 700); ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(c, 128, 138);
      }, false, true);
      // Drawn over the finished ink picture in flat ink or vermilion: pure fill at any size.
      asWriting(art.mesh, art.material, red ? WRITING_FLAT.red : WRITING_FLAT.ink);
      art.mesh.position.set(cx, 3.1 - s / 2 - i * s * 1.02, 0.02);
      art.material.uniforms.uOpacity.value = Math.max(0.45, 1 - repeat * 0.2);
      stamps.push({ at: line.at + i * (line.pace ?? 0.22), mesh: art.mesh, material: art.material, s: 1 - Math.min(0.3, repeat * 0.1) });
    });
  });
  const stamp = seal ? kit.seal(set, seal, 0.7) : undefined;
  stamp?.mesh.position.set(-5.6, -2.9, 0.03);
  return {
    update: t => {
      frontCamera(kit, x, t, duration, { from: 11, to: 10.2, y: 0.1, drift: 0.3 });
      for (const { at, mesh, material, s } of stamps) {
        const u = ease((t - at) / 0.25);
        material.uniforms.uReveal.value = u;
        mesh.scale.setScalar(s * (1 + 0.35 * (1 - u)));
      }
      if (stamp) { stamp.material.opacity = ease((t - duration + 1.6) / 0.4); }
    },
  };
};
