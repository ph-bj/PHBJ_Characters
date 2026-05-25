const fs = require('fs');
const content = fs.readFileSync('drinking_game_results.txt', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].startsWith('--- Chapter')) {
    const keywordLine = lines[i+1];
    if (keywordLine.includes('酒令') || keywordLine.includes('行令') || keywordLine.includes('令官') || keywordLine.includes('酒面') || keywordLine.includes('酒底') || keywordLine.includes('雅令') || keywordLine.includes('猜枚') || keywordLine.includes('飞花') || keywordLine.includes('传花') || keywordLine.includes('划拳') || keywordLine.includes('射覆')) {
        console.log(lines[i]);
        console.log(keywordLine);
        console.log(lines[i+2]);
        console.log();
    }
  }
}
