const fs = require('fs');

const worksData = JSON.parse(fs.readFileSync('src/worksData.json', 'utf8'));

// If we want to replace *Work Name* with <span className="italic">Work Name</span> inside App.tsx, we can change `renderAnnotated`!

// Wait, the user specifically says: "Use italic font for mentions of cited works in English translations of the book chapters."
