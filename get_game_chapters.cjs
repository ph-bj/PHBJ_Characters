const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/chapterData.json', 'utf8'));

// Search specifically for mentioned chapters in the prompt
const gameChapters = [7, 11, 20, 35, 57]; // Based on previous parsing

for (let ch of gameChapters) {
  const chapter = data.chapters[ch - 1]; // 0-indexed
  console.log(`\n\n=================== CHAPTER ${ch} ===================`);
  const paragraphs = chapter.content.split(/\n\n+/);
  for (let j = 0; j < paragraphs.length; j++) {
    const p = paragraphs[j];
    if (p.includes('令') || p.includes('猜') || p.includes('拳') || p.includes('骰子') || p.includes('传花')) {
        console.log(`Paragraph ${j + 1}: ${p.substring(0, 300)}...`);
    }
  }
}
