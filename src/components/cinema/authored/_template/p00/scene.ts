import * as THREE from 'three';
import { defineScene } from '../../define';
import { clamp01, ease, hallGeometry, INK_SKY, INK_TONE, inkRevealMaterial } from '../../../cinemaKit';
import { arm, body, drawFigure, FIGURE_ASPECT, FIGURE_H, FIGURE_W, head } from '../../../brush';

// TEMPLATE-ONLY: scaffolded by `npm run new-cinema -- <chapter> <paragraph>`; lines marked like this one are dropped.
/*
 * Chapter {{CHAPTER}}, paragraph {{PARAGRAPH}}. TODO: one line on how the passage is staged.
 *
 * This starting point already plays in the house ink style: a moonlit landscape with a figure who
 * seeps onto the paper, then the passage's key words brushed as calligraphy and sealed. Replace it
 * with the paragraph's own staging (see cinema/README.md). Conventions:
 *  - Build every set once, far apart along x (SET), and show one per shot.
 *  - Derive everything in update() from `seconds`, so seeking and replay are exact.
 *  - Paint with greys from INK_TONE: bright is bare paper, dark is thick ink, white fog is mist.
 *    Only saturated red survives the ink pass (as vermilion), so keep lights and woods neutral.
 *  - Draw figures on a canvas with brush.ts and show them through inkRevealMaterial.
 *  - Read shot timings from `story.shots` rather than hard-coding them.
 */

const SET = { landscape: 0, words: 400 };
/** The passage's key words, brushed in the last shot. */
const KEY_WORDS = '{{KEY_WORDS}}';

export default defineScene({
  seed: 1000,
  build: ({ scene, camera, group, mesh, canvasTexture, calligraphy, seal, path, setEnv, portrait }, story) => {
    const tone = (hex: number) => new THREE.MeshBasicMaterial({ color: hex });

    // --- Shot 1: a moonlit landscape -----------------------------------------------------------
    const landscape = group(scene, SET.landscape);
    mesh(new THREE.PlaneGeometry(400, 400).rotateX(-Math.PI / 2), tone(INK_TONE.wash), landscape);
    // Two ranges of hills, the farther paler (远山淡).
    [[-60, INK_TONE.pale, 9], [-35, INK_TONE.mid, 5]].forEach(([z, color, height]) => {
      const shape = new THREE.Shape(); shape.moveTo(-150, -5);
      for (let x = -150; x <= 150; x += 5) shape.lineTo(x, height * (0.6 + 0.4 * Math.sin(x * 0.05 + z) + 0.2 * Math.sin(x * 0.17)));
      shape.lineTo(150, -5);
      mesh(new THREE.ShapeGeometry(shape), tone(color), landscape, 0, 0, z);
    });
    // A pavilion in thick ink.
    const pavilion = new THREE.Mesh(hallGeometry(INK_TONE.thick, INK_TONE.mid, INK_TONE.pale), new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide }));
    pavilion.position.set(4, 0, -8); pavilion.scale.set(6, 5, 4.5); landscape.add(pavilion);
    // A scholar, drawn with the brush and revealed as if ink were soaking into the paper.
    const figureCanvas = document.createElement('canvas'); figureCanvas.width = FIGURE_W; figureCanvas.height = FIGURE_H;
    const figureTexture = canvasTexture(figureCanvas);
    const figure = inkRevealMaterial(figureTexture);
    mesh(new THREE.PlaneGeometry(3.2 * FIGURE_ASPECT, 3.2), figure, landscape, -1.5, 1.6, 0);
    const drawScholar = (t: number) => drawFigure(figureCanvas.getContext('2d')!, ctx => {
      body(ctx, Math.sin(t * 1.2) * 3);
      head(ctx, t, 'cap', -0.15);
      arm(ctx, [[-24, -145], [-30, -112], [-6, -102]], 13);
      arm(ctx, [[24, -145], [42, -178], [50, -214]]);
    });
    drawScholar(0);
    const landscapeShot = path([
      [0, [0, 2.4, 12], [0, 2, -10]],
      [story.shots[1].start, [-1, 2, 7], [-1.5, 2, 0]],
    ]);

    // --- Last shot: the key words in calligraphy ------------------------------------------------
    const words = group(scene, SET.words);
    const columns = Math.max(1, Math.ceil([...KEY_WORDS].length / 4));
    const text = calligraphy(words, KEY_WORDS, { size: 2.4, columns });
    const stamp = seal(words, '品花', 1.2);
    stamp.mesh.position.set(columns * 1.2 + 1, -2.4, 0.1);

    const sets = [landscape, words];
    return (seconds: number, shot: number) => {
      const last = shot === story.shots.length - 1;
      for (const set of sets) set.visible = set === (last ? words : landscape);
      setEnv(last ? INK_SKY.paper(0) : INK_SKY.moonlit());
      if (!last) {
        landscapeShot(seconds);
        figure.uniforms.uReveal.value = ease((seconds - 1.5) / 2.5);
        drawScholar(seconds);
        figureTexture.needsUpdate = true;
      } else {
        const start = story.shots[shot].start;
        camera.position.set(SET.words, 0, portrait() ? 20 : 13 - ease((seconds - start) / 12) * 1.5);
        camera.lookAt(SET.words, 0, 0);
        text.material.uniforms.uReveal.value = ease((seconds - start - 0.6) / 4);
        stamp.material.opacity = ease((seconds - start - 5) / 0.5);
        stamp.mesh.scale.setScalar(1 + 0.4 * (1 - clamp01((seconds - start - 5) / 0.35)));
      }
    };
  },
});
