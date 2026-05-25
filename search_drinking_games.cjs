const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/chapterData.json', 'utf8'));

const keywords = ["酒令", "行令", "酒底", "酒面", "拇战", "猜拳", "划拳", "射覆", "击鼓传花", "骰子", "藏阄", "抽签", "令官", "罚杯", "轰饮", "饮酒", "飞花", "击鼓", "传花", "猜枚", "雅令", "俗令"];

for (let i = 0; i < data.chapters.length; i++) {
  const chapter = data.chapters[i];
  const paragraphs = chapter.content.split(/\n\n+/);
  for (let j = 0; j < paragraphs.length; j++) {
    const p = paragraphs[j];
    for (const kw of keywords) {
      if (p.includes(kw)) {
        console.log(`--- Chapter ${i + 1} Paragraph ${j + 1} ---`);
        console.log(`Keyword: ${kw}`);
        console.log(p.substring(0, 150) + "...\n");
        break; // Print paragraph only once
      }
    }
  }
}
