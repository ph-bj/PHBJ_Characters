import { CINEMA_DURATION, createCinema, type Cinema, type Kit } from '../cinemaKit';

/**
 * The contract every authored paragraph cinema fills in. A cinema is a folder
 * `authored/chNN/pNN/` (chapter and 1-based paragraph number, zero-padded) holding:
 *
 *   story.ts  `export default defineStory({...})`: title, description and the shot list the
 *             player shows as chapters, quotes and captions. Loaded with the reader.
 *   scene.ts  `export default defineScene({...})`: the Three.js staging. Loaded only when the
 *             paragraph's cinema is opened.
 *
 * Folders are discovered automatically (see ./index.ts); there is nothing to register.
 * `npm run new-cinema -- <chapter> <paragraph>` scaffolds both files from ./_template.
 */

export type Bilingual = { readonly en: string; readonly zh: string };

/** One beat of the cinema. `cut: false` continues the previous shot without the dip to black. */
export type StoryShot = {
  readonly start: number;
  readonly end: number;
  readonly title: Bilingual;
  /** The words of the original this shot stages. */
  readonly quote: string;
  readonly caption: Bilingual;
  readonly cut?: boolean;
};

/**
 * A subtitle: a phrase of the original and its translation, shown over the film while that part of
 * the passage is being staged. Readers see the line in their reading language.
 */
export type SubtitleCue = {
  readonly start: number;
  readonly end: number;
  readonly zh: string;
  readonly en: string;
};

export type Story = {
  readonly title: Bilingual;
  /** Shown under the player: how the passage has been staged, and who the figures are. */
  readonly description: Bilingual;
  readonly shots: readonly StoryShot[];
  /** In order, not overlapping, within the film's 36 seconds. */
  readonly subtitles: readonly SubtitleCue[];
};

/** Builds the cinema for a story; produced by `defineScene`. */
export type SceneFactory = (host: HTMLDivElement, story: Story, onProgress: (seconds: number) => void, onError: () => void) => Cinema;

/** Checks a story's shot list so mistakes surface while authoring rather than as odd playback. */
export function defineStory<const T extends Story>(story: T): T {
  const problems: string[] = [];
  const { shots } = story;
  if (!shots.length) problems.push('it has no shots');
  shots.forEach((shot, i) => {
    const expectedStart = i === 0 ? 0 : shots[i - 1].end;
    if (shot.start !== expectedStart) problems.push(`shot ${i + 1} starts at ${shot.start}s, expected ${expectedStart}s`);
    if (shot.end <= shot.start) problems.push(`shot ${i + 1} ends before it starts`);
    for (const [field, text] of [['title.en', shot.title.en], ['title.zh', shot.title.zh], ['caption.en', shot.caption.en], ['caption.zh', shot.caption.zh], ['quote', shot.quote]] as const) {
      if (!text.trim()) problems.push(`shot ${i + 1} has an empty ${field}`);
    }
  });
  if (shots.length && shots[shots.length - 1].end !== CINEMA_DURATION) problems.push(`the last shot must end at ${CINEMA_DURATION}s`);
  if (shots[0]?.cut === false) problems.push('the first shot cannot continue a previous one');
  story.subtitles.forEach((cue, i) => {
    if (cue.start < 0 || cue.end > CINEMA_DURATION || cue.end <= cue.start) problems.push(`subtitle ${i + 1} must lie between 0 and ${CINEMA_DURATION}s and end after it starts`);
    if (i > 0 && cue.start < story.subtitles[i - 1].end) problems.push(`subtitle ${i + 1} overlaps the one before it`);
    if (!cue.zh.trim() || !cue.en.trim()) problems.push(`subtitle ${i + 1} needs both Chinese and English text`);
  });
  if (problems.length) throw new Error(`Invalid cinema story "${story.title.en}": ${problems.join('; ')}.`);
  return story;
}

export function shotAt(shots: readonly StoryShot[], seconds: number) {
  const index = shots.findIndex(shot => seconds < shot.end);
  return index === -1 ? shots.length - 1 : index;
}

/** The subtitle showing at a moment, if any. */
export function cueAt(cues: readonly SubtitleCue[], seconds: number) {
  return cues.find(cue => seconds >= cue.start && seconds < cue.end);
}

/** Opacity of the dip to black around each cut. */
export function fadeAt(shots: readonly StoryShot[], seconds: number) {
  const cuts = shots.slice(1).filter(shot => shot.cut !== false);
  if (!cuts.length) return 0;
  const distance = Math.min(...cuts.map(shot => Math.abs(seconds - shot.start)));
  return Math.max(0, 1 - distance / 0.5);
}

/**
 * Declares a scene. `build` receives the kit (renderer, sky, helpers; see cinemaKit.ts) and the
 * story, stages every set once, and returns `update(seconds, shot)`, called each frame with the
 * current time and shot index. Derive everything from `seconds` so that seeking and replay are exact.
 * Scenes are painted in ink by default, the house style for authored cinemas.
 */
export function defineScene(options: {
  seed: number;
  style?: 'ink' | 'night';
  build: (kit: Kit, story: Story) => (seconds: number, shot: number) => void;
}): SceneFactory {
  return (host, story, onProgress, onError) => createCinema(host, onProgress, onError, options.seed, kit => {
    const update = options.build(kit, story);
    return seconds => update(seconds, shotAt(story.shots, seconds));
  }, options.style ?? 'ink');
}
