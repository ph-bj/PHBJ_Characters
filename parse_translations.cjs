const fs = require('fs');
const glob = require('glob'); // Not available by default, we'll just read dir

const files = fs.readdirSync('src').filter(f => f.startsWith('chapter') && f.endsWith('.ts') && !f.includes('Summaries') && !f.includes('chapters') && f.includes('Translation'));
files.push('prefaceTranslation.ts');

let totalReplaced = 0;

for (const file of files) {
  const filepath = `src/${file}`;
  let content = fs.readFileSync(filepath, 'utf8');

  // Find all instances of *Work Name*
  // But wait, what if it's already rendered dynamically?
  // The user says: "Use italic font for mentions of cited works in English translations of the book chapters."
  // Wait! In React we can use JSX, or we can just replace *Work Name* with <i className="italic">Work Name</i>?
  // No, the english text is just an array of strings in these ts files.
  // We can render them using a React pattern, OR we can dynamically process it in App.tsx!
  // App.tsx uses `renderAnnotated`. We can modify `renderAnnotated` to parse React nodes!

}
