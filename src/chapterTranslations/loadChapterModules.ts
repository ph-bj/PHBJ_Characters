/** Resolve eager `import.meta.glob` modules into paragraph arrays keyed by chapter id. */

type ChapterModule = Record<string, string[] | Record<number, string[]>>;

export function paragraphsFromModule(
  mod: ChapterModule | undefined,
  chapterId: number,
  exportPrefix: string,
): string[] {
  if (!mod) {
    throw new Error(`Missing chapter module for id ${chapterId}`);
  }
  const exportName = `${exportPrefix}${chapterId}`;
  const value = mod[exportName];
  if (Array.isArray(value)) {
    return value;
  }
  if (value && typeof value === 'object') {
    const keyed = value as Record<number, string[]>;
    if (keyed[chapterId]) {
      return keyed[chapterId];
    }
    const first = Object.values(keyed)[0];
    if (first) {
      return first;
    }
  }
  throw new Error(`No ${exportPrefix} export for chapter ${chapterId}`);
}

export function buildChapterMap(
  modules: Record<string, ChapterModule>,
  exportPrefix: string,
  chapterIds: number[],
): Record<number, string[]> {
  const byId: Record<number, string[]> = {};
  for (const id of chapterIds) {
    const path = Object.keys(modules).find((p) =>
      p.endsWith(`/${exportPrefix}${id}.ts`),
    );
    byId[id] = paragraphsFromModule(modules[path!], id, exportPrefix);
  }
  return byId;
}
