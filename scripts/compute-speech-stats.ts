import { characters } from "../src/data";
import { buildCharacterTokenMap } from "../src/nameChips";
import { paragraphsFromModule } from "../src/chapterTranslations/loadChapterModules";

const SPEAK_VERB_REGEX = /[道说曰问叹啐骂怒喜喊应答叫吟诵讲称劝嚷]/;

async function main() {
  const tokenMap = buildCharacterTokenMap(characters);
  const sortedTokens = tokenMap.map(([t, char]) => ({ token: t, char })).sort((a, b) => b.token.length - a.token.length);

  const speechCounts: Record<string, number> = {};
  const charCounts: Record<string, number> = {};

  // Initialize
  for (const c of characters) {
    speechCounts[c.id] = 0;
    charCounts[c.id] = 0;
  }

  for (let id = 1; id <= 60; id++) {
    const zhMod = await import(`../src/chapterTranslations/chinese/chapterChinese${id}.ts`);
    const paragraphs = paragraphsFromModule(zhMod, id, "chapterChinese");
    const text = paragraphs.join("\n");

    const regex = /「([^「」]+)」/g;
    let match;
    let lastIndex = 0;
    let lastSpeakerId: string | null = null;

    while ((match = regex.exec(text)) !== null) {
      const quote = match[1];
      const pre = text.slice(lastIndex, match.index);
      lastIndex = regex.lastIndex;

      // We require the suffix to have a speak verb to count as dialogue
      const suffix = pre.slice(-60);
      const hasSpeakVerb = SPEAK_VERB_REGEX.test(suffix.slice(-30));
      
      let speakerId: string | null = null;

      // Find matches in suffix
      const matches: { charId: string; token: string; index: number }[] = [];
      for (const { token, char } of sortedTokens) {
        let idx = suffix.indexOf(token);
        while (idx !== -1) {
          const alreadyCovered = matches.some(m => idx >= m.index && idx < m.index + m.token.length);
          if (!alreadyCovered) {
            matches.push({ charId: char.id, token, index: idx });
          }
          idx = suffix.indexOf(token, idx + 1);
        }
      }
      matches.sort((a, b) => a.index - b.index);

      // Filter out matches preceded by preposition or object verb
      const nonListenerMatches = matches.filter(m => {
        const leftText = suffix.slice(Math.max(0, m.index - 10), m.index);
        const prepositionMatch = /[对向同跟与和见把将给陪听遇拉叫跟娶嫁打骂到][^，。：；\n]*$/.test(leftText);
        return !prepositionMatch;
      });

      if (nonListenerMatches.length > 0) {
        const best = nonListenerMatches[nonListenerMatches.length - 1];
        speakerId = best.charId;
        lastSpeakerId = speakerId;
      } else {
        // Inherit if we are sure it's dialogue (has speak verb) or if last speaker exists
        speakerId = lastSpeakerId;
      }

      if (speakerId) {
        speechCounts[speakerId]++;
        // Count only actual Chinese characters in the quote
        const chineseChars = quote.replace(/[^\u4e00-\u9fff]/g, "");
        charCounts[speakerId] += chineseChars.length;
      }
    }
  }

  // Print top 30 speakers by speech count
  const sorted = characters
    .map(c => ({
      id: c.id,
      name: c.name,
      speeches: speechCounts[c.id] || 0,
      chars: charCounts[c.id] || 0,
    }))
    .sort((a, b) => b.speeches - a.speeches);

  console.log("=== Top 30 Speakers ===");
  for (let i = 0; i < 30; i++) {
    const s = sorted[i];
    if (!s) break;
    console.log(`${i+1}. ${s.id}\t${s.name.split(" ")[0]}\tSpeeches: ${s.speeches}\tChars: ${s.chars}`);
  }
}

main().catch(console.error);
