import { prefaceTranslations } from '../prefaceTranslation';
import { paragraphsFromModule } from './loadChapterModules';

type ChapterModule = Record<string, string[] | Record<number, string[]>>;

const translationModules = import.meta.glob<ChapterModule>(
  './chapterTranslations*.ts'
);

const translationCache: Record<number, string[]> = {
  0: prefaceTranslations,
};

/** Get English paragraph translations for a specific chapter ID (0 = preface). */
export async function getChapterTranslation(chapterId: number): Promise<string[]> {
  if (translationCache[chapterId]) {
    return translationCache[chapterId];
  }
  if (chapterId === 0) {
    return prefaceTranslations;
  }
  
  const pathKey = Object.keys(translationModules).find(
    (p) => p.endsWith(`/chapterTranslations${chapterId}.ts`) || p.endsWith(`\\chapterTranslations${chapterId}.ts`)
  );
  
  if (!pathKey || !translationModules[pathKey]) {
    return [];
  }
  
  try {
    const mod = await translationModules[pathKey]();
    const paras = paragraphsFromModule(mod, chapterId, 'chapterTranslations');
    translationCache[chapterId] = paras;
    return paras;
  } catch (err) {
    console.error(`Failed to load translation for chapter ${chapterId}:`, err);
    return [];
  }
}

/** Preload all chapter translations (e.g. for full-text search). */
export async function loadAllChapterTranslations(): Promise<Record<number, string[]>> {
  const chapterIds = Array.from({ length: 60 }, (_, i) => i + 1);
  await Promise.all(chapterIds.map((id) => getChapterTranslation(id)));
  return translationCache;
}

/** Synchronous cache accessor (returns cached translation if loaded, else empty array). */
export function getChapterTranslationSync(chapterId: number): string[] {
  return translationCache[chapterId] || [];
}

/** Export live cache proxy for backward compatibility. */
export const chapterTranslationsById: Record<number, string[]> = new Proxy(translationCache, {
  get(target, prop) {
    const id = typeof prop === 'string' ? Number(prop) : Number(prop);
    if (!isNaN(id) && target[id]) {
      return target[id];
    }
    return target[id as keyof typeof target] ?? [];
  }
});

