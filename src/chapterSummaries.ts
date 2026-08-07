const summaryCache: Record<number, { zh: string; en: string }> = {};

export async function getChapterSummary(chapterId: number): Promise<{ zh: string; en: string } | null> {
  if (summaryCache[chapterId]) return summaryCache[chapterId];
  let mod: Record<number, { zh: string; en: string }> | undefined;
  if (chapterId <= 10) {
    mod = (await import('./summaries_0to10')).summaries0to10;
  } else if (chapterId <= 20) {
    mod = (await import('./summaries_11to20')).summaries11to20;
  } else if (chapterId <= 30) {
    mod = (await import('./summaries_21to30')).summaries21to30;
  } else if (chapterId <= 40) {
    mod = (await import('./summaries_31to40')).summaries31to40;
  } else if (chapterId <= 50) {
    mod = (await import('./summaries_41to50')).summaries41to50;
  } else if (chapterId <= 60) {
    mod = (await import('./summaries_51to60')).summaries51to60;
  }
  if (mod) {
    Object.assign(summaryCache, mod);
    return summaryCache[chapterId] || null;
  }
  return null;
}

export async function loadAllChapterSummaries(): Promise<Record<number, { zh: string; en: string }>> {
  const mods = await Promise.all([
    import('./summaries_0to10'),
    import('./summaries_11to20'),
    import('./summaries_21to30'),
    import('./summaries_31to40'),
    import('./summaries_41to50'),
    import('./summaries_51to60'),
  ]);
  mods.forEach((m) => {
    const data = (m as any).summaries0to10 || (m as any).summaries11to20 || (m as any).summaries21to30 || (m as any).summaries31to40 || (m as any).summaries41to50 || (m as any).summaries51to60;
    if (data) Object.assign(summaryCache, data);
  });
  return summaryCache;
}

export function getChapterSummarySync(chapterId: number): { zh: string; en: string } | null {
  return summaryCache[chapterId] || null;
}

export const chapterSummaries: Record<number, { zh: string; en: string }> = new Proxy(summaryCache, {
  get(target, prop) {
    const id = typeof prop === 'string' ? Number(prop) : Number(prop);
    if (!isNaN(id) && target[id]) {
      return target[id];
    }
    return target[id as keyof typeof target];
  }
});

