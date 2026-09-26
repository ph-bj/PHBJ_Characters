import * as THREE from 'three';
import { defineScene } from '../../define';
import { clamp01, ease, glyphPixels, hallGeometry, INK_SKY, INK_TONE, inkRevealMaterial, type V3 } from '../../../cinemaKit';
import { arm, body, drawFigure, FIGURE_H, FIGURE_W, head } from '../../../brush';
import { BLOT_SIZE, DUCKS_SIZE, LOW_KINDS, PANEL_H, PANEL_W, paintBlot, paintDucks, paintFlowerPanel } from './paintings';

/*
 * Chapter 1, paragraph 3, in ink: the ten ranks of leading performers as a flower album, the eight
 * lower kinds as blots on which 情 cannot settle, the two paths, sixty volumes and a title slip,
 * and embroidered mandarin ducks with the golden needle withheld.
 */

// Each shot has its own set, far apart along x; only the current one is shown.
const SET = { album: 0, blots: 300, paths: 600, desk: 900, hoop: 1200 };

// 情 gathers above the blots, presses down, cannot settle, and scatters. Times are absolute seconds.
const refuseVertex = /* glsl */`
  attribute vec3 aStart;
  attribute vec2 aGlyph;
  attribute float aSeed;
  uniform float uTime, uScale, uGather, uPress, uScatter;
  varying float vAlpha;
  void main() {
    float gather = smoothstep(0.0, 1.0, clamp((uTime - uGather - aSeed * 0.8) / 1.5, 0.0, 1.0));
    float press = smoothstep(0.0, 1.0, clamp((uTime - uPress) / 1.0, 0.0, 1.0));
    float scatter = smoothstep(0.0, 1.0, clamp((uTime - uScatter - aSeed * 0.4) / 1.6, 0.0, 1.0));
    // It trembles as it presses against the blots, then is thrown off.
    vec3 glyph = vec3(aGlyph * 6.0, 2.2 - press * 1.9) + vec3(sin(uTime * 23.0 + aSeed * 40.0), cos(uTime * 19.0 + aSeed * 30.0), 0.0) * 0.05 * press * (1.0 - scatter);
    vec3 p = mix(aStart, glyph, gather);
    vec2 away = normalize(aGlyph + (vec2(aSeed, fract(aSeed * 7.3)) - 0.5) * 0.4 + 1e-3);
    p += vec3(away * scatter * 9.0, scatter * 2.5);
    vAlpha = 0.55 * gather * (1.0 - scatter) * (1.0 - scatter);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(48.0, mix(0.55, 0.3, scatter) * uScale / -mv.z);
  }`;
const inkDropFragment = /* glsl */`
  uniform vec3 uInk;
  varying float vAlpha;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(uInk, vAlpha * (1.0 - smoothstep(0.0, 1.0, r)));
  }`;

export default defineScene({
  seed: 1003,
  build: ({ scene, camera, rand, shared, group, mesh, box, canvasTexture, calligraphy, seal, lantern, path, setEnv, portrait }, story) => {
    const tone = (hex: number, extra: THREE.MeshBasicMaterialParameters = {}) => new THREE.MeshBasicMaterial({ color: hex, ...extra });
    const canvas = (width: number, height: number) => { const c = document.createElement('canvas'); c.width = width; c.height = height; return c; };
    const start = (shot: number) => story.shots[shot].start;

    // --- Shot 1: the flower album, unrolled right to left ------------------------------------
    const album = group(scene, SET.album);
    mesh(new THREE.PlaneGeometry(53, 7.6), tone(0xcfc8bc), album, 0, 3.1, -0.03);
    for (const x of [-26.6, 26.6]) mesh(new THREE.CylinderGeometry(0.22, 0.22, 8.2, 16), tone(INK_TONE.dark), album, x, 3.1, 0.05);
    const panels = Array.from({ length: 10 }, (_, rank) => {
      // Painted at twice the panel's size so its writing stays crisp.
      const c = canvas(PANEL_W * 2, PANEL_H * 2), ctx = c.getContext('2d')!;
      ctx.scale(2, 2);
      paintFlowerPanel(ctx, rank);
      const material = inkRevealMaterial(canvasTexture(c, true), undefined, { sharp: true });
      mesh(new THREE.PlaneGeometry(4.96, 6.2), tone(0xf3eee3), album, 22.5 - rank * 5, 3.1, 0);
      mesh(new THREE.PlaneGeometry(5, 6.25), material, album, 22.5 - rank * 5, 3.1, 0.01);
      return material;
    });

    // --- Shot 2: eight blots, and a 情 that will not settle -------------------------------------
    const blots = group(scene, SET.blots);
    const blotMaterials = LOW_KINDS.map((char, k) => {
      const c = canvas(BLOT_SIZE * 2, BLOT_SIZE * 2), ctx = c.getContext('2d')!;
      ctx.scale(2, 2);
      paintBlot(ctx, char, k);
      const material = inkRevealMaterial(canvasTexture(c, true), undefined, { sharp: true });
      mesh(new THREE.PlaneGeometry(3.2, 3.2), material, blots, -6.3 + (k % 4) * 4.2, k < 4 ? 1.9 : -2.3, 0);
      return material;
    });
    const refuseUniforms = { uTime: shared.uTime, uScale: shared.uScale, uGather: { value: 0 }, uPress: { value: 0 }, uScatter: { value: 0 }, uInk: { value: new THREE.Color(INK_TONE.thick) } };
    {
      const sample = glyphPixels('情', rand);
      const count = 2600, geometry = new THREE.BufferGeometry();
      const starts = new Float32Array(count * 3), glyph = new Float32Array(count * 2), seeds = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        starts.set([(rand() - 0.5) * 30, 6 + rand() * 6, rand() * 4], i * 3);
        glyph.set(sample(), i * 2); seeds[i] = rand();
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(starts, 3));
      geometry.setAttribute('aStart', new THREE.BufferAttribute(starts, 3));
      geometry.setAttribute('aGlyph', new THREE.BufferAttribute(glyph, 2));
      geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
      const points = new THREE.Points(geometry, new THREE.ShaderMaterial({ uniforms: refuseUniforms, vertexShader: refuseVertex, fragmentShader: inkDropFragment, transparent: true, depthWrite: false }));
      points.frustumCulled = false; blots.add(points);
    }

    // --- Shot 3: the fork between the straight and the crooked path ---------------------------
    const paths = group(scene, SET.paths);
    mesh(new THREE.PlaneGeometry(300, 300).rotateX(-Math.PI / 2), tone(0xd9d3c9), paths);
    [[-80, INK_TONE.pale, 10], [-55, INK_TONE.mid, 6]].forEach(([z, color, height]) => {
      const shape = new THREE.Shape(); shape.moveTo(-150, -5);
      for (let x = -150; x <= 150; x += 5) shape.lineTo(x, height * (0.6 + 0.4 * Math.sin(x * 0.05 + z) + 0.2 * Math.sin(x * 0.17)));
      shape.lineTo(150, -5);
      mesh(new THREE.ShapeGeometry(shape), tone(color), paths, 0, 0, z);
    });
    /** A flat track of bare paper following the points, narrowing with distance. */
    const ribbon = (points: V3[], width: number) => {
      const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
      const positions: number[] = [], index: number[] = [], n = 120;
      for (let i = 0; i <= n; i++) {
        const u = i / n, p = curve.getPoint(u), t = curve.getTangent(u);
        const side = new THREE.Vector3(-t.z, 0, t.x).normalize().multiplyScalar(width * (1 - 0.45 * u));
        positions.push(p.x + side.x, 0.02, p.z + side.z, p.x - side.x, 0.02, p.z - side.z);
        if (i < n) index.push(i * 2, i * 2 + 1, i * 2 + 2, i * 2 + 1, i * 2 + 3, i * 2 + 2);
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3)); geometry.setIndex(index);
      mesh(geometry, tone(INK_TONE.paper, { side: THREE.DoubleSide }), paths);
      return curve;
    };
    ribbon([[0, 0, 16], [0, 0, 10], [0, 0, 6]], 0.9);
    const straight = ribbon([[0, 0, 6], [1.2, 0, -4], [2.6, 0, -16], [3.8, 0, -28], [4.5, 0, -35]], 0.8);
    const crooked = ribbon([[0, 0, 6], [-3, 0, 1.5], [-1.4, 0, -3.5], [-6, 0, -8], [-3.8, 0, -13], [-9, 0, -17], [-7.5, 0, -22]], 0.7);
    const pavilion = new THREE.Mesh(hallGeometry(INK_TONE.thick, INK_TONE.mid, INK_TONE.pale), new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide }));
    pavilion.position.set(4.6, 0, -39); pavilion.scale.set(9, 8, 6.5); paths.add(pavilion);
    lantern(paths, [4.6, 3.4, -35.3], 2);
    const trunk = new THREE.CylinderGeometry(0.12, 0.2, 1, 6), crown = new THREE.IcosahedronGeometry(1, 0);
    const tree = (x: number, z: number, height: number, color: number) => {
      mesh(trunk, tone(color), paths, x, height / 2, z).scale.y = height;
      for (let k = 0; k < 4; k++) mesh(crown, tone(color), paths, x + (rand() - 0.5) * 1.6, height + rand() * 1.2, z + (rand() - 0.5) * 1.6).scale.set(1.2, 0.8, 1.2);
    };
    // The crooked path vanishes into a dark wood; the straight one is lined with a few pale trees.
    for (let i = 0; i < 44; i++) tree(-12 + rand() * 10, -16 - rand() * 12, 3 + rand() * 2.5, INK_TONE.thick);
    for (const [x, z] of [[4.5, -8], [-0.8, -12], [6.5, -20], [1.6, -26]]) tree(x, z, 2.6, INK_TONE.mid);
    // Two small walkers, one on each path.
    const walkers = [straight, crooked].map(curve => {
      const c = canvas(FIGURE_W, FIGURE_H);
      const texture = canvasTexture(c);
      const figure = mesh(new THREE.PlaneGeometry(0.7, 1.4), new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false }), paths);
      return { curve, c, texture, figure };
    });
    const P = SET.paths;
    const pathsShot = path([
      [start(2), [P, 1.8, 20], [P, 1.2, 0]],
      [start(2) + 3.5, [P + 1, 5, 17], [P, 0.4, -10]],
      [start(3), [P, 10, 17], [P - 1, 0, -15]],
    ]);

    // --- Shot 4: the author's desk and sixty volumes --------------------------------------------
    const desk = group(scene, SET.desk);
    box(desk, tone(INK_TONE.pale), [0, -0.15, 0], [14, 0.3, 8]);
    const cover = tone(INK_TONE.dark), pages = tone(0xece6da);
    const bookFaces = [pages, pages, cover, cover, pages, pages];
    const bookGeometry = new THREE.BoxGeometry(1.9, 0.085, 2.7);
    const stacks: [number, number][] = [[-4.6, -1.2], [-2.3, -1.5], [0, -1.4], [2.3, -1.6]];
    const books = Array.from({ length: 60 }, (_, i) => {
      const [x, z] = stacks[i % 4], level = Math.floor(i / 4);
      const book = new THREE.Mesh(bookGeometry, bookFaces);
      book.position.set(x, 0.0425 + level * 0.088, z); book.rotation.y = (rand() - 0.5) * 0.08; desk.add(book);
      return { book, y: book.position.y };
    });
    // The first volume, face up in front, with its title slip.
    const titleBook = new THREE.Mesh(bookGeometry, bookFaces);
    titleBook.position.set(0.4, 0.0425, 1.9); titleBook.rotation.y = -0.04; desk.add(titleBook);
    mesh(new THREE.PlaneGeometry(0.5, 1.95).rotateX(-Math.PI / 2), tone(0xf2ecdf), desk, -0.12, 0.09, 1.9);
    const title = calligraphy(desk, '品花宝鉴', { size: 0.42 });
    title.mesh.rotation.x = -Math.PI / 2; title.mesh.position.set(-0.12, 0.093, 1.9);
    const subtitle = calligraphy(desk, '怡情佚史', { size: 0.22 });
    subtitle.mesh.rotation.x = -Math.PI / 2; subtitle.mesh.position.set(0.42, 0.09, 1.5);
    box(desk, tone(INK_TONE.thick), [3.7, 0.07, 2.0], [1.0, 0.14, 1.4]);
    const brush = group(desk);
    mesh(new THREE.CylinderGeometry(0.035, 0.03, 1.5, 10), tone(INK_TONE.mid), brush, 0, 0.9, 0);
    mesh(new THREE.ConeGeometry(0.06, 0.2, 10).rotateX(Math.PI), tone(INK_TONE.thick), brush, 0, 0.1, 0);
    const D = SET.desk;
    const deskShot = path([
      [start(3), [D, 7.5, 9.5], [D, 0, -0.5]],
      [start(3) + 3.5, [D + 0.3, 4.5, 6.2], [D + 0.3, 0, 1]],
      [start(4), [D + 0.4, 3.1, 4.5], [D + 0.2, 0, 1.7]],
    ]);

    // --- Shot 5: the embroidery hoop ------------------------------------------------------------
    const hoop = group(scene, SET.hoop);
    const wood = tone(0x6e675f);
    box(hoop, tone(INK_TONE.dark), [0, -2.85, 0], [3.4, 0.25, 1.2]);
    // The stand's legs sit behind the silk so they don't show through the embroidery.
    for (const x of [-1.25, 1.25]) mesh(new THREE.CylinderGeometry(0.07, 0.07, 2.4, 8), wood, hoop, x, -1.7, -0.14);
    for (const z of [0.03, -0.03]) mesh(new THREE.TorusGeometry(2.25, 0.09, 10, 96), wood, hoop, 0, 0.3, z);
    mesh(new THREE.CircleGeometry(2.2, 96), tone(0xf7f3eb), hoop, 0, 0.3, 0);
    const ducksCanvas = canvas(DUCKS_SIZE, DUCKS_SIZE);
    paintDucks(ducksCanvas.getContext('2d')!);
    const embroidery = inkRevealMaterial(canvasTexture(ducksCanvas));
    mesh(new THREE.CircleGeometry(2.2, 96), embroidery, hoop, 0, 0.3, 0.01);
    const needle = group(hoop);
    mesh(new THREE.CylinderGeometry(0.022, 0.006, 0.8, 8).rotateX(Math.PI / 2), tone(INK_TONE.dark), needle, 0, 0, 0.4);
    const threadGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
    const thread = new THREE.Line(threadGeometry, new THREE.LineBasicMaterial({ color: 0xb8321f }));
    hoop.add(thread);
    const stamp = seal(hoop, '品花', 0.55);
    stamp.mesh.position.set(1.35, -1.05, 0.03);
    const stitchAt = (t: number) => new THREE.Vector3(Math.cos(t * 1.7) * 1.1, 0.3 + Math.sin(t * 2.3) * 0.8, 0);

    const sets = [album, blots, paths, desk, hoop];
    const envs = [INK_SKY.paper(0), INK_SKY.paper(0), INK_SKY.paper(0.011), INK_SKY.paper(0.01), INK_SKY.paper(0)];
    return (seconds: number, shot: number) => {
      sets.forEach((set, i) => { set.visible = i === shot; });
      setEnv(envs[shot]);
      const narrow = portrait();
      if (shot === 0) {
        const x = 24 - 48 * ease(seconds / (start(1) - 0.2));
        camera.position.set(x, 3.1, narrow ? 13 : 9.5);
        camera.lookAt(x, 3.1, 0);
        // Each leaf is painted as it comes into view from the left of the frame.
        panels.forEach((material, rank) => { material.uniforms.uReveal.value = ease((22.5 - rank * 5 + 8 - x) / 3.5); });
      } else if (shot === 1) {
        const t = seconds - start(1);
        camera.position.set(SET.blots, 0, (narrow ? 24 : 15.5) - ease(t / 7) * 1.2);
        camera.lookAt(SET.blots, 0, 0);
        blotMaterials.forEach((material, k) => { material.uniforms.uReveal.value = ease((t - 0.3 - k * 0.22) / 0.9); });
        refuseUniforms.uGather.value = start(1) + 1.5;
        refuseUniforms.uPress.value = start(1) + 3.6;
        refuseUniforms.uScatter.value = start(1) + 5;
      } else if (shot === 2) {
        pathsShot(seconds);
        const t = clamp01((seconds - start(2)) / (start(3) - start(2)));
        walkers.forEach((walker, i) => {
          const at = walker.curve.getPointAt(Math.min(0.95, 0.1 + t * 0.7));
          walker.figure.position.set(at.x, 0.7, at.z);
          walker.figure.rotation.y = Math.atan2(camera.position.x - SET.paths - at.x, camera.position.z - at.z);
          drawFigure(walker.c.getContext('2d')!, ctx => {
            const step = Math.sin(seconds * 6 + i);
            body(ctx, step * 6); head(ctx, seconds, i ? 'loose' : 'cap');
            arm(ctx, [[-24, -145], [-30 - step * 6, -110], [-26 - step * 10, -80]]);
            arm(ctx, [[24, -145], [30 + step * 6, -110], [26 + step * 10, -80]]);
          });
          walker.texture.needsUpdate = true;
        });
      } else if (shot === 3) {
        deskShot(seconds);
        books.forEach(({ book, y }, i) => {
          const appear = start(3) + 0.3 + i * 0.055;
          book.visible = seconds >= appear;
          book.position.y = y + (1 - ease((seconds - appear) / 0.18)) * 0.8;
        });
        const written = ease((seconds - start(3) - 3.6) / 1.6);
        title.material.uniforms.uReveal.value = written;
        subtitle.material.uniforms.uReveal.value = ease((seconds - start(3) - 5.1) / 0.8);
        // The brush follows the writing down the slip, then lifts away.
        const lift = ease((seconds - start(3) - 5.2) / 0.6);
        brush.position.set(-0.12 + Math.sin(seconds * 14) * 0.03, 0.1 + lift * 1.5 + (written > 0 ? 0 : 0.8), 1.06 + written * 1.68);
        brush.rotation.z = -0.25;
      } else {
        const t = seconds - start(4);
        camera.position.set(SET.hoop + 0.2 * ease(t / 6), 0.4 - 0.2 * ease(t / 6), (narrow ? 12 : 10) - ease(t / 6) * 2.2);
        camera.lookAt(SET.hoop, 0.05, 0);
        embroidery.uniforms.uReveal.value = ease((t - 0.2) / 3.6);
        // The needle stitches in and out, then is drawn away and hidden: the secret is not passed on.
        const withdraw = ease((t - 3.9) / 0.9);
        const tip = stitchAt(seconds);
        needle.position.set(tip.x, tip.y + withdraw * 3, 0.05 + (0.5 + 0.5 * Math.sin(seconds * 9)) * 0.35 + withdraw * 2);
        needle.rotation.set(-0.35, 0.25, 0);
        needle.visible = withdraw < 0.98;
        const anchor = stitchAt(seconds - 0.4);
        threadGeometry.attributes.position.setXYZ(0, anchor.x, anchor.y, 0.02);
        threadGeometry.attributes.position.setXYZ(1, needle.position.x, needle.position.y, needle.position.z + 0.6);
        threadGeometry.attributes.position.needsUpdate = true;
        thread.visible = needle.visible;
        stamp.material.opacity = ease((t - 4.7) / 0.4);
        stamp.mesh.scale.setScalar(1 + 0.4 * (1 - clamp01((t - 4.7) / 0.35)));
      }
    };
  },
});
