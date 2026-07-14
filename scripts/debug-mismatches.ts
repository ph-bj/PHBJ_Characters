import { paragraphsFromModule } from "../src/chapterTranslations/loadChapterModules";

async function main() {
  for (let id = 1; id <= 60; id++) {
    const zhMod = await import(`../src/chapterTranslations/chinese/chapterChinese${id}.ts`);
    const paragraphs = paragraphsFromModule(zhMod, id, "chapterChinese");
    const text = paragraphs.join("\n");
    
    // Check quote matching by scanning and printing context of unmatched ones
    let state = 0; // 0 = outside, 1 = inside
    let lastOpenIdx = -1;
    
    for (let idx = 0; idx < text.length; idx++) {
      const char = text[idx];
      if (char === '「') {
        if (state === 1) {
          // nested or continuation?
          // let's see if there was a speaker name or newline in between
          const between = text.slice(lastOpenIdx, idx);
          if (between.includes("道") || between.includes("说") || between.includes("问")) {
            // Probably a missing closing quote before this!
            console.log(`Ch ${id} pos ${idx}: Open '「' while already inside quote! Context between: "${between.replace(/\n/g, "\\n").slice(-40)}"`);
          }
        }
        state = 1;
        lastOpenIdx = idx;
      } else if (char === '」') {
        if (state === 0) {
          console.log(`Ch ${id} pos ${idx}: Close '」' while outside quote! Left context: "${text.slice(Math.max(0, idx - 40), idx).replace(/\n/g, "\\n")}"`);
        }
        state = 0;
      }
    }
  }
}

main().catch(console.error);
