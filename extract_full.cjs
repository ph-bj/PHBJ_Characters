const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/chapterData.json', 'utf8'));

const getP = (ch, pIdx) => {
    return data.chapters[ch-1].content.split(/\n\n+/)[pIdx-1];
};

console.log("=== Chapter 7 ===");
console.log(getP(7, 11));
console.log(getP(7, 15));

console.log("=== Chapter 11 ===");
console.log(getP(11, 9));

console.log("=== Chapter 20 ===");
console.log(getP(20, 22));

console.log("=== Chapter 35 ===");
console.log(getP(35, 23));
console.log(getP(35, 24));
console.log(getP(35, 25));
console.log(getP(35, 26));

console.log("=== Chapter 57 ===");
console.log(getP(57, 11));
console.log(getP(57, 17));
