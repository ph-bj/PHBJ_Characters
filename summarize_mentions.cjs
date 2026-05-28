const fs = require('fs');
const mentions = JSON.parse(fs.readFileSync('mentions_25.json', 'utf8'));

for (const [ch, lines] of Object.entries(mentions)) {
    console.log(`Chapter ${ch}:`);
    lines.forEach(l => console.log('  ' + l.substring(0, 150).replace(/\n/g, ' ')));
}
