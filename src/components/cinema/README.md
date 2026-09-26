# Paragraph cinemas

Every paragraph in the reader has a cinema button next to its read-aloud button. Paragraphs with an
**authored** cinema play a hand-staged, 36-second Three.js film in the house ink-painting style.
Every other paragraph's button opens a short note saying its film is not available yet
(`ParagraphCinema.tsx`); it becomes a film as soon as that paragraph's folder exists.

## Making a new authored cinema

```bash
npm run new-cinema -- <chapter> <paragraph>     # paragraph is 1-based, as shown in the reader
```

This creates two files, prefilled with the paragraph's Chinese and English text:

| File | What it holds |
| --- | --- |
| `authored/chNN/pNN/story.ts` | Title, description and shot list: the shot buttons, quotes and captions the player shows |
| `authored/chNN/pNN/scene.ts` | The 3D staging. It starts as a working placeholder (a moonlit landscape, then the key words in calligraphy) |

The cinema appears in the reader immediately. Folders are discovered by `authored/index.ts`, so
there is nothing to register, and each scene is split into its own chunk that loads only when that
paragraph's cinema is opened. `tests/authoredCinemas.spec.ts` finds the folder on disk too and tests
it (opens it, visits every shot, checks subtitles and WebGL errors).

Then:

1. **Write the story.** Read the passage, split it into 2 to 6 beats and fill in the TODOs in
   `story.ts`. `defineStory` refuses gaps, overlaps, empty text, or a last shot that doesn't end at 36s.
   Then retime the **subtitles**: each cue pairs a phrase of the original with its English (from the
   site's translation, condensed to fit), shown over the film in the reader's language while that
   phrase is staged. The generator drafts them from the text; line them up with the shots. Readers can
   hide them with the CC button, and `npm run export-cinema` records them into the video.
2. **Stage the scene.** Replace the placeholder in `scene.ts`. `authored/ch01/p01` and `p02` are
   full worked examples.
3. **Check it.** Run `npx tsc --noEmit` and
   `npx playwright test tests/authoredCinemas.spec.ts --workers=1 --grep "chNN pNN"` with the dev
   server running, and look at the frames from `npm run cinema-contact-sheet -- <chapter> <p> <p>`.
4. **Export a video** if you want one: `npm run export-cinema -- <chapter> <paragraph>` writes
   `~/Documents/PHBJ-chNN-pNN-cinema.mp4` (dev server and ffmpeg required).

## Batches: beats and contact sheets

Many paragraphs share a shape (an album entry, a conversation in the study...). For those, don't
stage a scene by hand: compose it from **beats**, reusable one-shot stagings in `beats/`.

```ts
// authored/ch01/p13/scene.ts
export default beatScene(1013, [          // one beat per shot in story.ts, in order
  emblemBeat(A.baozhu),
  portraitBeat(A.baozhu, ['善丹青', '娴吟咏']),
  repertoireBeat(A.baozhu, ['鹊桥', '密誓']),
  poemBeat(['舞袖轻盈弱不胜', /* ... */], A.baozhu),
]);
```

- `beats/engine.ts`: `beatScene`, plus helpers for writing new beats (`painting`, `figure`,
  `columns`, `albumPage`, `frontCamera`). Each beat builds its own set and animates from the time
  since its shot began, so shots can be retimed freely.
- `beats/album.ts`: the 《花选》 album beats: `emblemBeat`, `portraitBeat`, `repertoireBeat`,
  `poemBeat`, and `readersBeat` (Zhongqing, Ziyu and Nanxiang reacting at given moments).
- `beats/motifs.ts` paints the emblems; `figures.ts` has dan performers (`dan`, `DAN_POSES`, props)
  and scholars (`scholar` with gestures); `paint.ts` has brush flowers (`paintFlower`) and strokes.
- `beats/tableau.ts`: `tableauBeat`, the everyday-scene beat. A painted place (`beats/places.ts`:
  study, hall, boudoir, gate, street, theatre, river, arch, moon palace…), a cast who walk, change
  gesture on cue, blush, fade in and out (`beats/people.ts`: scholars, ladies, pages, officials,
  merchants, escorts, clowns, warriors, horses and carts), an optional table, an inscription slip,
  and weather (north wind, drifting petals, a radiance, a cart-window frame). `who.ziyu(x)` etc. are
  shorthands for chapter 1's regulars. `coverBeat` opens a book.
- `beats/banquet.ts`: `banquetBeat`, chapter 2's six guests at a round table, with per-guest cues,
  guests who leave their seat, and props (`cup`, `card`, `gifts`, `coins`, `seeds`, `silver`) — props
  work in any tableau too. `beats/words.ts`: `wordsBeat`, characters stamped onto paper in columns,
  with vermilion characters and shrinking stutter repeats ("哥、哥、哥").
- Per-chapter data lives beside the paragraphs, e.g. `authored/ch01/actors.ts`.

### Specs: most cinemas are generated

Beat-built cinemas are not edited by hand. Each chapter has compact specs in
`scripts/cinema/specs/chNN-*.ts` (titles, shots, subtitles and beats as code strings), and

```bash
npm run build-cinemas -- 2            # regenerate every spec'd paragraph of chapter 2
npm run build-cinemas -- 2 5 6        # or just some
```

writes their `story.ts` and `scene.ts` (adding the imports each scene needs). Hand-staged cinemas
(ch01 p01–p03) have no spec and are never touched. Check a batch with
`npx playwright test tests/authoredCinemas.spec.ts --workers=1 --grep "ch02"`.

Review a batch at a glance: `npm run cinema-contact-sheet -- 1 13 34` saves a frame from the middle of
every shot plus a grid, `test-results/contact-sheet/sheet.png`. It seeks through the dev-only
`window.__phbjCinema` and `window.__phbjStory` hooks that `ParagraphCinema` sets.

## Anatomy of a scene

```ts
export default defineScene({
  seed: 3005,                        // makes procedural sets identical on every replay
  build: (kit, story) => {           // runs once: build every set
    const garden = kit.group(kit.scene, 0);
    const words = kit.group(kit.scene, 400);   // sets sit far apart along x
    return (seconds, shot) => {      // runs every frame
      garden.visible = shot < 2; words.visible = shot >= 2;
      kit.setEnv(INK_SKY.moonlit());
      // move the camera, reveal figures, animate from `seconds`...
    };
  },
});
```

Rules that keep playback correct:

- **Derive everything from `seconds`.** The player seeks, pauses and replays by calling `update`
  with any time, in any order. Keep no state that accumulates from frame to frame.
- **Read timings from `story.shots`** (e.g. `story.shots[2].start`) rather than hard-coding them,
  so the story can be retimed without breaking the scene.
- **One set per shot, shown by visibility.** Build every set up front, far apart along x, and
  toggle `visible`. Cuts between shots dip to black automatically unless a shot says `cut: false`.
- Keep the camera within the frame on narrow screens: `kit.portrait()` is true on tall viewports,
  where scenes usually pull the camera back.

## The ink style

Authored scenes render through an ink pass (`createCinema(..., 'ink')`, the default for
`defineScene`) that turns each frame into ink on paper. It reads **brightness as ink density**:

- Bright means bare paper and dark means thick ink. Build sets from the greys in `INK_TONE`
  (`thick`, `dark`, `mid`, `pale`, `wash`, `paper`), mostly with flat `MeshBasicMaterial`s.
- White fog is mist: distant things fade into the paper, which gives the layered depth of ink
  landscapes. Use `INK_SKY.paper(density)` or `INK_SKY.moonlit(moonDirection)`; the latter leaves
  the moon as bare paper inside a wash of cloud (烘云托月).
- **Only saturated red survives**, as vermilion: seals, lanterns, plum blossom, a red peony. Any
  warm tint is read as red too, so keep lights white (`0xfff6ea`) and woods grey. A few red particles
  in a mass of ink will speckle the whole mass red.
- Additive glows mean nothing on paper. In ink scenes `kit.glows` lays down ink or vermilion dots
  instead; large, soft glow sprites should simply be left out.

## Toolbox

`cinemaKit.ts`, available on `kit` inside `build` or as imports:

| Helper | Use |
| --- | --- |
| `path([[t, pos, lookAt], ...])` | Eased camera move through timed keys |
| `setEnv(env)`, `INK_SKY`, `INK_TONE` | Sky, fog and palette |
| `calligraphy(parent, text, { size, columns })` | Brushed characters in columns, right to left; set `material.uniforms.uReveal` 0→1 |
| `seal(parent, text, size)` | A vermilion seal; fade in with `material.opacity` |
| `inkRevealMaterial(texture)` | Shows a canvas texture seeping into the paper (`uReveal` 0→1, `uOpacity`) |
| `glyphPixels(char, rand)` | Points inside a character, for particles that gather into it |
| `hallGeometry`, `roofGeometry` | Chinese halls and sweeping roofs (instance them for towns) |
| `petalGeometry` | Petals for flowers and falling blossom |
| `lantern`, `glows`, `mesh`, `box`, `group`, `canvasTexture` | Everyday building blocks |

`brush.ts` draws figures and props onto canvases:

| Helper | Use |
| --- | --- |
| `drawFigure(ctx, draw)` | Clears a `FIGURE_W × FIGURE_H` canvas and draws in figure coordinates (feet at the origin, y upward is negative) |
| `body`, `head`, `arm` | A standing robed figure: cap, topknot or loose hair; arms through shoulder, elbow, hand |
| `limb`, `disc`, `robe` | Free-form strokes and shapes |
| `cutout`, `pierce` | Paper-coloured details, or see-through openings on transparent canvases |

`authored/ch01/p02/figures.ts` shows 20 posed figures (gentlemen, and dan performers with water
sleeves) built from these; `authored/ch01/p01/shadowPlay.ts` animates a whole canvas per frame.

## Pitfalls met so far

- `Math.pow` of a tiny negative number is `NaN`, and one NaN pixel spreads through the post-processing
  into a black frame. Clamp before `pow` (see `petalGeometry`).
- A plane flipped with `scale.y = -1` (for reflections) renders fine, but reflections need
  `depthWrite: false` on the water so they show through it.
- Semi-transparent ink over paper reads paler than expected after the ink pass, so give reflections
  and washes more opacity than feels natural (about 0.7).
- Authored scenes are heavy under the software WebGL used by Playwright, so give their tests at
  least 90–120s and run them with `--workers=1`.
