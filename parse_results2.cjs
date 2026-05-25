const fs = require('fs');
const content = fs.readFileSync('drinking_game_results.txt', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].startsWith('--- Chapter')) {
    const keywordLine = lines[i+1];
    if (keywordLine.includes('骰子') || keywordLine.includes('藏阄') || keywordLine.includes('抽签') || keywordLine.includes('猜拳') || keywordLine.includes('拇战') || keywordLine.includes('击鼓传花') ) {
        console.log(lines[i]);
        console.log(keywordLine);
        console.log(lines[i+2]);
        console.log();
    }
  }
}
