import { Chapter } from './types';
import chapterMeta from './chapterMeta.json';
import { chapterChineseById, prefaceChinese } from './chapterTranslations/chinese';
import { buildCharacterTokenMap } from './nameChips';
import { characters } from './data';

const { chapters: metaChapters } = chapterMeta as {
  chapters: { id: number; title: string }[];
};

function joinParagraphs(paras: string[]): string {
  return paras.join('\n\n');
}

// Precompute speech and character statistics
(() => {
  const tokenMap = buildCharacterTokenMap(characters);
  const sortedTokens = tokenMap
    .map(([t, char]) => ({ token: t, char }))
    .sort((a, b) => b.token.length - a.token.length);

  const speechCounts: Record<string, number> = {};
  const charCounts: Record<string, number> = {};

  for (const c of characters) {
    speechCounts[c.id] = 0;
    charCounts[c.id] = 0;
  }

  for (let id = 1; id <= 60; id++) {
    const paragraphs = chapterChineseById[id];
    if (!paragraphs) continue;
    const text = paragraphs.join('\n');

    const regex = /「([^「」]+)」/g;
    let match;
    let lastIndex = 0;
    let lastSpeakerId: string | null = null;

    while ((match = regex.exec(text)) !== null) {
      const quote = match[1];
      const pre = text.slice(lastIndex, match.index);
      lastIndex = regex.lastIndex;

      const suffix = pre.slice(-60);
      let speakerId: string | null = null;

      const matches: { charId: string; token: string; index: number }[] = [];
      for (const { token, char } of sortedTokens) {
        let idx = suffix.indexOf(token);
        while (idx !== -1) {
          const alreadyCovered = matches.some(
            (m) => idx >= m.index && idx < m.index + m.token.length
          );
          if (!alreadyCovered) {
            matches.push({ charId: char.id, token, index: idx });
          }
          idx = suffix.indexOf(token, idx + 1);
        }
      }
      matches.sort((a, b) => a.index - b.index);

      const nonListenerMatches = matches.filter((m) => {
        const leftText = suffix.slice(Math.max(0, m.index - 10), m.index);
        const prepositionMatch =
          /[对向同跟与和见把将给陪听遇拉叫跟娶嫁打骂到][^，。：；\n]*$/.test(
            leftText
          );
        return !prepositionMatch;
      });

      if (nonListenerMatches.length > 0) {
        const best = nonListenerMatches[nonListenerMatches.length - 1];
        speakerId = best.charId;
        lastSpeakerId = speakerId;
      } else {
        speakerId = lastSpeakerId;
      }

      if (speakerId && speechCounts[speakerId] !== undefined) {
        speechCounts[speakerId]++;
        const chineseChars = quote.replace(/[^\u4e00-\u9fff]/g, '');
        charCounts[speakerId] += chineseChars.length;
      }
    }
  }

  for (const c of characters) {
    c.speechesCount = speechCounts[c.id] || 0;
    c.speechesCharCount = charCounts[c.id] || 0;
  }
})();

export const chapters: Chapter[] = [
  { id: 0, title: '序', content: joinParagraphs(prefaceChinese) },
  ...metaChapters.map((ch) => ({
    id: ch.id,
    title: ch.title,
    content: joinParagraphs(chapterChineseById[ch.id]),
  })),
];
