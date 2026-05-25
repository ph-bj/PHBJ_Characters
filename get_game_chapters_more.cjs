const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/chapterData.json', 'utf8'));

// Check chapter 7 details
console.log('--- Chapter 7 ---');
const ch7 = data.chapters[6];
ch7.content.split(/\n\n+/).forEach((p, j) => {
    if (p.includes('令') || p.includes('出对')) console.log(`P${j+1}: ${p.substring(0, 300)}`);
});

// Check chapter 11 details
console.log('--- Chapter 11 ---');
const ch11 = data.chapters[10];
ch11.content.split(/\n\n+/).forEach((p, j) => {
    if (p.includes('骰') || p.includes('令')) console.log(`P${j+1}: ${p.substring(0, 300)}`);
});

// Check chapter 20 details
console.log('--- Chapter 20 ---');
const ch20 = data.chapters[19];
ch20.content.split(/\n\n+/).forEach((p, j) => {
    if (p.includes('筹') || p.includes('令')) console.log(`P${j+1}: ${p.substring(0, 300)}`);
});

// Check chapter 35 details
console.log('--- Chapter 35 ---');
const ch35 = data.chapters[34];
ch35.content.split(/\n\n+/).forEach((p, j) => {
    if (p.includes('令') || p.includes('筹')) console.log(`P${j+1}: ${p.substring(0, 300)}`);
});

// Check chapter 57 details
console.log('--- Chapter 57 ---');
const ch57 = data.chapters[56];
ch57.content.split(/\n\n+/).forEach((p, j) => {
    if (p.includes('令') || p.includes('骰')) console.log(`P${j+1}: ${p.substring(0, 300)}`);
});
