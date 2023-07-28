const fs = require('node:fs'); // a partir de Node 16, se recomienda poner node:

const stats = fs.statSync('./file.txt');

console.log(stats.isFile(), stats.isDirectory(), stats.size);