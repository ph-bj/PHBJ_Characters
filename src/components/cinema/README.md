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

1. **Write the story.** Read the passage, split it into 2 to 6 shots and fill in the TODOs in
   `story.ts`. `defineStory` refuses gaps, overlaps, empty text, or a last shot that doesn't end at 36s.
   Then retime the **subtitles**: each cue pairs a phrase of the original with its English (from the
   site's translation, condensed to fit), shown over the film in the reader's language while that
   phrase is staged. The generator drafts them from the text; line them up with the shots. Readers can
   hide them with the CC button, and `npm run export-cinema` records them into the video.
2. **Stage the scene.** Replace the placeholder in `scene.ts` with a hand-staged 3D scene built
   from `stage/` (below). `authored/ch01/p01` is the model to match; any of `ch01/p04` onward shows
   the toolkit in use.
3. **Check it.** Run `npx tsc --noEmit` and
   `npx playwright test tests/authoredCinemas.spec.ts --workers=1 --grep "chNN pNN"` with the dev
   server running, and look at the frames from `npm run cinema-contact-sheet -- <chapter> <p> <p>`.
4. **Export a video** if you want one: `npm run export-cinema -- <chapter> <paragraph>` writes
   `~/Documents/PHBJ-chNN-pNN-cinema.mp4` (dev server and ffmpeg required).

## Staging in 3D: the stage toolkit

Every film is hand-staged: its own sets, cast, blocking and camera, built in 3D with lit, shaded
geometry so it reads as a scene with depth rather than flat paintings. `stage/` holds the pieces:

- `stage/figure.ts`: articulated figures. `figure(kit, parent, spec, x, z)` builds a person from a
  `FigureSpec` (height, girth, headwear, robe and jacket greys, beard, face, rouge, water sleeves...)
  and returns a rig whose `pose(p)` sets bow, lean, turn, head yaw/pitch, arms (`lift`, `out`,
  `twist`, `bend`), kneel, sit, walk and mouth. `G` is the gesture library (`G.salute(t)`,
  `G.laugh(t)`, `G.kowtow(t)`...), `cue(t, [[time, pose], ...])` blends from one to the next,
  `walkAlong` walks a figure along a path between two times, and `face` turns it toward a point.
  `CAST` keeps the recurring characters looking the same from film to film; per-chapter extras live
  beside the paragraphs (`authored/ch01/actors.ts`, `authored/ch02/actors.ts`).
- `stage/architecture.ts`: halls with opening doors, rooms, walls, gates, flower gates, moon gates,
  pavilions, bridges, arches, city gates, shop rows, theatre stages, crowds, plaques.
- `stage/nature.ts`: ground, mountain ranges, rippling water, trees (bare, plum, pine, willow,
  bamboo), rocks, lotus, reeds, peonies, cloud banks.
- `stage/props.ts`: writing on paper (`writing`, revealed with `set(u)`), furniture, lamps and
  candles, cups, pots, dishes, books, cards, silver, coins, jars, swords, zithers, screens, scrolls.
- `stage/vehicles.ts`: horses, carts, boats. `stage/fx.ts`: specks of snow or dust, petals, mist,
  smoke, `inkGather` (particles that gather into a character), fireworks, radiance.
- `stage/performance.ts`: stage props in hand (`hold`), placards, the 《花选》 album, towers,
  terraces, the moon, and creatures for the theatre.
- `stage/locations.ts`: whole places built from the above: the study, the gate lane, a capital
  street, the theatre, the banquet hall, a garden, the canal, the courtyard, a lady's chamber, the
  city from above, a formal hall, a boat's cabin.
- `stage/direct.ts`: direction. `sets(kit, n)` builds n sets far apart with a `show(i)` switch;
  `lights` gives a set its own key and fill; `move(kit, set, [[t, pos, look], ...])` and `orbit`
  are camera moves in the set's own coordinates, `aim` a fixed set-up; `span`, `sway`, `blendEnv`.

Chapter helpers show how scenes share a place without sharing a staging: `authored/ch02/banquet.ts`
seats Wenhui's six diners (`feast`) and frames any of them from inside the ring of chairs (`shoot`),
and each of paragraphs 35 to 41 then stages its own moment of the evening.

Review your films at a glance: `npm run cinema-contact-sheet -- 1 13 34` saves a frame from the
middle of every shot plus a grid, `test-results/contact-sheet/sheet.png`. It seeks through the
dev-only `window.__phbjCinema` and `window.__phbjStory` hooks that `ParagraphCinema` sets.

Staging habits that have paid off:

- Keep cameras out of walls, heads and chair backs: for close shots at a table, shoot from inside
  the ring; keep outdoor cameras below a room's ceiling height when a roofed set is in view.
- Mist sprites are large and white; keep them low and away from the camera or they wash out a frame.
- Positions passed to `face`, `move`, `orbit` and `aim` are in the set's (parent's) coordinates.

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

- Bright means bare paper and dark means thick ink. Build sets from greys (`INK_TONE`: `thick`,
  `dark`, `mid`, `pale`, `wash`, `paper`). The stage toolkit shades them with Lambert materials
  (`tone(hex)`) under each set's own white key and fill light, so form reads as graded wash.
- White fog is mist: distant things fade into the paper, which gives the layered depth of ink
  landscapes. Use `INK_SKY.paper(density)` or `INK_SKY.moonlit(moonDirection)`; the latter leaves
  the moon as bare paper inside a wash of cloud (烘云托月).
- **Only saturated red survives**, as vermilion: seals, lanterns, plum blossom, a red peony. Any
  warm tint is read as red too, so keep lights white (`0xfff6ea`) and woods grey. A few red particles
  in a mass of ink will speckle the whole mass red.
- **Fonts are the app's.** Text painted in a film uses the same fonts as the rest of the app (Inter for
  English, Noto Sans SC for Chinese): set `ctx.font = appFont(px, weight)` from `fonts.ts`, never a
  separate film font. The player loads the web font for the film's characters before building it, and
  kit writing repaints itself once any late characters arrive (`writeInAppFont`).
- **Framed writing is centred.** When characters sit in a rectangle (a slip, placard, card, plaque,
  seal, scroll), centre the block in it with even margins, and centre each character on its cell
  with `fillCentered(ctx, text, x, y)` from `fonts.ts` (it measures the font, rather than trusting
  the text baseline).
- **Writing is special.** Characters from `kit.calligraphy` and `kit.glyph` live on
  `WRITING_LAYER`: they skip the ink pass and are drawn over the finished picture in flat ink (or
  vermilion), so they are pure, even fill at any size. Use `asWriting(mesh, material, color)` for any
  other writing mesh built on `inkRevealMaterial`. Characters painted into a canvas (cards, album
  pages) use `WRITING_INK`, pure blue: the ink pass reads its coverage in each pixel and prints it as
  clean, even ink over the background, so it stays sharp at any size and figures can still pass in
  front of it. Never use that blue for anything else. `WRITING_RED` does the same for vermilion.
  Put writing on sharp textures: `kit.calligraphy`, `kit.glyph` (a crisp character to settle over a
  particle-built one), `writing` from `stage/props.ts` or `canvasTexture(canvas, true)`, and give its
  canvas enough pixels for its size on screen (about 300 px per world unit).
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

`authored/ch01/p01/shadowPlay.ts` animates a whole canvas per frame with them, and
`authored/ch01/p03/paintings.ts` paints the embroidery on a lady's silk. For people in a scene, use
the 3D figures of `stage/figure.ts` instead.

## Pitfalls met so far

- `Math.pow` of a tiny negative number is `NaN`, and one NaN pixel spreads through the post-processing
  into a black frame. Clamp before `pow` (see `petalGeometry`).
- A plane flipped with `scale.y = -1` (for reflections) renders fine, but reflections need
  `depthWrite: false` on the water so they show through it.
- Semi-transparent ink over paper reads paler than expected after the ink pass, so give reflections
  and washes more opacity than feels natural (about 0.7).
- Authored scenes are heavy under the software WebGL used by Playwright, so give their tests at
  least 90–120s and run them with `--workers=1`.
