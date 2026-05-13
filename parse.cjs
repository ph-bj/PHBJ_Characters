const fs = require('fs');
let s = "Hello *World* and *Moon*!";
let parts = s.split(/(\*[^*]+\*)/g);
console.log(parts);
