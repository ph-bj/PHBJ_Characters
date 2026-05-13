let seg = "Hello *World* and *Moon*!";

const parts = seg.split(/(\*[^*]+\*)/g);
console.log(parts);
