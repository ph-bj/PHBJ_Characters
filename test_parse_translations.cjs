const fs = require('fs');

const worksData = JSON.parse(fs.readFileSync('src/worksData.json', 'utf8'));

// Example translation where a work is mentioned.
// We want to replace it with <span className="italic">...</span> or something like that, or parse it dynamically.

console.log("Checking App.tsx to see how it renders...");
