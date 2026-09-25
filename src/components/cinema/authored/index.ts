import type { SceneFactory, Story } from './define';

/**
 * Every authored paragraph cinema, discovered from its folder `chNN/pNN/`. Stories are small and
 * load with the reader; scenes are split into their own chunks and load on demand.
 */
const stories = import.meta.glob<{ default: Story }>('./ch*/p*/story.ts', { eager: true });
const scenes = import.meta.glob<{ default: SceneFactory }>('./ch*/p*/scene.ts');

export type AuthoredCinema = Story & {
  chapter: number;
  /** 1-based, as shown to readers ("Paragraph 2"). */
  paragraph: number;
  loadScene: () => Promise<SceneFactory>;
};

const registry = new Map<string, AuthoredCinema>();
for (const [path, module] of Object.entries(stories)) {
  const match = /\/ch(\d+)\/p(\d+)\/story\.ts$/.exec(path);
  const load = scenes[path.replace(/story\.ts$/, 'scene.ts')];
  if (!match) throw new Error(`Authored cinema folders must be named chNN/pNN: ${path}`);
  if (!load) throw new Error(`Authored cinema ${path} has no scene.ts beside it`);
  const chapter = Number(match[1]), paragraph = Number(match[2]);
  registry.set(`${chapter}:${paragraph}`, { ...module.default, chapter, paragraph, loadScene: () => load().then(scene => scene.default) });
}

/** The authored cinema for a paragraph (1-based), if one has been made. */
export function findAuthoredCinema(chapter: number, paragraph: number) {
  return registry.get(`${chapter}:${paragraph}`);
}

/** All authored cinemas in reading order, e.g. for progress tracking. */
export function listAuthoredCinemas() {
  return [...registry.values()].sort((a, b) => a.chapter - b.chapter || a.paragraph - b.paragraph);
}
