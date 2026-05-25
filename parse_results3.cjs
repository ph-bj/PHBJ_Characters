const fs = require('fs');
const content = fs.readFileSync('drinking_game_results.txt', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].startsWith('--- Chapter')) {
    const keywordLine = lines[i+1];
    if (keywordLine.includes('抽签') || keywordLine.includes('划拳') || keywordLine.includes('射覆') || keywordLine.includes('罚杯') || keywordLine.includes('轰饮')) {
        console.log(lines[i]);
        console.log(keywordLine);
        console.log(lines[i+2]);
        console.log();
    }
  }
}
