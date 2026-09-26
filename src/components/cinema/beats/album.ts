import * as THREE from 'three';
import type { Hair } from '../brush';
import { dan, scholar, type DanPose, type ScholarGesture } from '../figures';
import { paintFlower, type FlowerName } from '../paint';
import { albumPage, columns, ease, figure, frontCamera, painting, tone, type Beat } from './engine';
import { ANIMATED_MOTIFS, MOTIF_H, MOTIF_W, paintMotif, type Motif } from './motifs';

/**
 * Beats for an album of portraits, as in Nanxiang's 《花选》: an emblem page, a portrait page,
 * the repertoire on stage, a poem scroll, and the readers turning the pages.
 */

/** A performer as the album presents them. */
export type Actor = {
  /** 袁宝珠 */
  name: string;
  /** The four-character emblem of the entry, e.g. 琼楼珠树. */
  emblem: string;
  motif: Motif;
  /** Short facts shown as small columns, e.g. ['年十六', '姑苏人', '联锦部']. */
  facts: string[];
  flower: FlowerName;
  pose: DanPose;
  /** The seal pressed on the page, e.g. the given name. */
  seal: string;
};

/** The emblem painted as a picture, with the emblem, name and facts brushed beside it and sealed. */
export const emblemBeat = (actor: Actor): Beat => ({ kit, set, x, duration }) => {
  albumPage(kit, set);
  const art = painting(kit, set, MOTIF_W, MOTIF_H, [7.4, 5.55], (ctx, t) => paintMotif(ctx, actor.motif, t), ANIMATED_MOTIFS.includes(actor.motif));
  art.mesh.position.set(-1.6, 0.1, 0);
  const emblem = columns(kit, set, [actor.emblem], { size: 0.55, x: 4.8, y: 3.1 });
  const name = columns(kit, set, [actor.name], { size: 0.8, x: 3.75, y: 3.1 });
  const facts = columns(kit, set, actor.facts, { size: 0.32, gap: 0.42, x: 4.5, y: 0.25 });
  const stamp = kit.seal(set, actor.seal, 0.7);
  stamp.mesh.position.set(3.4, -2.7, 0.03);
  return {
    update: t => {
      frontCamera(kit, x, t, duration, { from: 11.2, to: 10.2 });
      art.set(ease((t - 0.2) / 2.2), t);
      emblem.set(ease((t - 1) / 1.6));
      name.set(ease((t - 2) / 1.4));
      facts.set(ease((t - 3) / 1.4));
      stamp.material.opacity = ease((t - 4.3) / 0.4);
      stamp.mesh.scale.setScalar(1 + 0.4 * (1 - ease((t - 4.3) / 0.35)));
    },
  };
};

/** The performer in costume beside a flower, with phrases from the entry brushed in columns. */
export const portraitBeat = (actor: Actor, lines: string[], options: { flower?: FlowerName; pose?: DanPose } = {}): Beat => ({ kit, set, x, duration }) => {
  albumPage(kit, set);
  const flower = painting(kit, set, 512, 640, [3.4, 4.25], ctx => paintFlower(ctx, options.flower ?? actor.flower));
  flower.mesh.position.set(-3.5, -0.4, 0);
  const pose = options.pose ?? actor.pose;
  const person = figure(kit, set, 5.4, (ctx, t) => dan(ctx, t, pose));
  person.mesh.position.set(-0.3, -0.25, 0.01);
  const text = columns(kit, set, lines, { size: 0.5, gap: 0.72, x: 3.9 - (lines.length - 1) * 0.36, y: 3.1 });
  return {
    update: t => {
      frontCamera(kit, x, t, duration, { from: 11, to: 10 });
      flower.set(ease((t - 0.2) / 2), t);
      person.set(ease((t - 0.8) / 1.8), t);
      text.set(ease((t - 1.5) / Math.max(2, duration * 0.6)));
    },
  };
};

/** The performer on stage while hanging placards name the plays, one after another. */
export const repertoireBeat = (actor: Actor, plays: string[], options: { pose?: DanPose } = {}): Beat => ({ kit, set, x, duration }) => {
  kit.mesh(new THREE.PlaneGeometry(16, 9), tone(0xe9e3d7), set, 0, 0, -1.2);
  const backdrop = painting(kit, set, MOTIF_W, MOTIF_H, [9, 6.75], (ctx, t) => paintMotif(ctx, actor.motif, t));
  backdrop.mesh.position.set(0, 0.2, -1.1);
  backdrop.material.uniforms.uOpacity.value = 0.28;
  kit.mesh(new THREE.PlaneGeometry(16, 4).rotateX(-Math.PI / 2), tone(0xd6d0c6), set, 0, -3.1, 0.8);
  const wood = tone(0x3f3a35);
  for (const px of [-5.6, 5.6]) kit.box(set, wood, [px, 0, 0], [0.32, 6.6, 0.3]);
  kit.box(set, wood, [0, 3.35, 0], [12, 0.3, 0.3]);
  const placards = plays.map((play, i) => {
    const hang = kit.group(set, plays.length === 1 ? 3.6 : 4.4 - i * (8.8 / Math.max(1, plays.length - 1)), 0, 0.1);
    const chars = [...play].length, height = chars * 0.44 + 0.5;
    kit.mesh(new THREE.PlaneGeometry(0.72, height + 0.1), tone(0x6e675f), hang, 0, -height / 2, -0.01);
    kit.mesh(new THREE.PlaneGeometry(0.62, height), tone(0xf4efe4), hang, 0, -height / 2, 0);
    const title = kit.calligraphy(hang, play, { size: 0.44 });
    title.mesh.position.set(0, -height / 2, 0.01);
    title.material.uniforms.uReveal.value = 1;
    kit.box(hang, wood, [0, 0.3, 0], [0.02, 0.6, 0.02]);
    return hang;
  });
  const pose = options.pose ?? { ...actor.pose, turn: actor.pose.turn || 0.6 };
  const person = figure(kit, set, 4.6, (ctx, t) => dan(ctx, t, pose));
  person.mesh.position.set(0, -0.8, 0.5);
  return {
    update: t => {
      frontCamera(kit, x, t, duration, { from: 12, to: 10.8, y: 0.2 });
      backdrop.set(1, t);
      person.set(ease((t - 0.2) / 1.4), t);
      placards.forEach((hang, i) => {
        const at = 0.6 + i * (duration * 0.7 / plays.length);
        hang.visible = t >= at;
        hang.position.y = 3.2 + (1 - ease((t - at) / 0.7)) * 3.2;
      });
    },
  };
};

/** A poem brushed onto a hanging scroll, line by line, right to left, then sealed. */
export const poemBeat = (lines: string[], actor?: Actor): Beat => ({ kit, set, x, duration }) => {
  kit.mesh(new THREE.PlaneGeometry(10.4, 7.6), tone(0xcfc8bc), set, 0, 0, -0.03);
  kit.mesh(new THREE.PlaneGeometry(9.8, 6.6), tone(0xf3eee3), set, 0, 0, -0.02);
  for (const y of [3.75, -3.75]) kit.box(set, tone(0x3f3a35), [0, y, 0], [11, 0.26, 0.26]);
  const longest = Math.max(...lines.map(l => [...l].length));
  const size = Math.min(0.62, 5.4 / longest);
  // The verse block is centred on the scroll's paper (beside the portrait when there is one).
  const text = columns(kit, set, lines, { size, gap: size * 1.28, x: actor ? 1.1 : 0, y: longest * size / 2 });
  const portrait = actor ? figure(kit, set, 4.4, (ctx, t) => dan(ctx, t, actor.pose)) : undefined;
  portrait?.mesh.position.set(-3.6, -0.6, 0.01);
  // A faint portrait in pale wash beside the poem.
  if (portrait) portrait.material.uniforms.uOpacity.value = 0.35;
  const stamp = kit.seal(set, actor?.seal ?? '品花', 0.6);
  stamp.mesh.position.set(actor ? -2.1 : -3.4, -2.7, 0.03);
  const writing = Math.max(2, duration - 2);
  return {
    update: t => {
      frontCamera(kit, x, t, duration, { from: 11.4, to: 10.2 });
      portrait?.set(ease(t / 1.5), t);
      text.set(ease((t - 0.4) / writing));
      stamp.material.opacity = ease((t - writing - 0.6) / 0.4);
    },
  };
};

/** Who speaks, from when (seconds into the shot), and how. */
export type ReaderCue = { at: number; who: 0 | 1 | 2; gesture?: ScholarGesture };
const READERS: { hair: Hair; x: number; rest: ScholarGesture }[] = [
  { hair: 'cap', x: -2.5, rest: 'still' }, // 仲清 Zhongqing
  { hair: 'bun', x: 0, rest: 'reading' }, // 子玉 Ziyu, holding the 《花选》
  { hair: 'loose', x: 2.5, rest: 'still' }, // 南湘 Nanxiang
];

/** Zhongqing, Ziyu and Nanxiang at a table in the study, reading the 《花选》 and talking. */
export const readersBeat = (cues: ReaderCue[] = []): Beat => ({ kit, set, x, duration }) => {
  const wall = painting(kit, set, 1024, 576, [16, 9], ctx => {
    ctx.fillStyle = '#ece6da'; ctx.fillRect(0, 0, 1024, 576);
    ctx.strokeStyle = '#3b342e'; ctx.lineWidth = 10; ctx.beginPath(); ctx.arc(250, 220, 120, 0, Math.PI * 2); ctx.stroke();
    ctx.save(); ctx.beginPath(); ctx.arc(250, 220, 115, 0, Math.PI * 2); ctx.clip(); ctx.lineWidth = 4;
    for (let d = -240; d <= 240; d += 34) { ctx.beginPath(); ctx.moveTo(250 + d - 120, 100); ctx.lineTo(250 + d + 120, 340); ctx.stroke(); ctx.beginPath(); ctx.moveTo(250 + d + 120, 100); ctx.lineTo(250 + d - 120, 340); ctx.stroke(); }
    ctx.restore();
    ctx.fillStyle = '#6e655c'; ctx.fillRect(760, 60, 110, 260); ctx.fillStyle = '#f2ecdf'; ctx.fillRect(770, 76, 90, 228);
    ctx.strokeStyle = '#4a433d'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(780, 250); ctx.quadraticCurveTo(810, 170, 830, 210); ctx.quadraticCurveTo(845, 150, 852, 240); ctx.stroke();
  });
  wall.mesh.position.set(0, 0.5, -2);
  wall.set(1, 0);
  const people = READERS.map(reader => {
    const person = figure(kit, set, 4.4, (ctx, t) => {
      const cue = [...cues].reverse().find(c => c.at <= t);
      const speaking = cue?.who === READERS.indexOf(reader);
      scholar(ctx, t, { hair: reader.hair, gesture: speaking ? cue?.gesture ?? 'speaking' : reader.rest, speaking, phase: reader.x });
    });
    person.mesh.position.set(reader.x, 0.1, -0.6);
    return person;
  });
  kit.box(set, tone(0x3f3a35), [0, -1.95, 0], [7.6, 1.5, 1.6]);
  kit.box(set, tone(0x2f2a26), [0, -1.18, 0], [7.9, 0.08, 1.8]);
  kit.box(set, tone(0xece6da), [1.2, -1.1, 0.2], [0.9, 0.06, 0.64]);
  return {
    update: t => {
      frontCamera(kit, x, t, duration, { from: 10.4, to: 9.4, y: 0.3, drift: 0.6 });
      people.forEach(person => person.set(ease(t / 1.2), t));
    },
  };
};
