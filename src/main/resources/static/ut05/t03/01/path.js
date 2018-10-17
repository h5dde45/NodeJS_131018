let path = require("path");
let filename = path.basename(__filename);

console.log("current filename:", filename);
console.log(path.resolve('./test'));
console.log(path.extname(filename));
console.log(__dirname," - ", path.isAbsolute(__dirname));
console.log("t03/01"," - ", path.isAbsolute("t03/01"));

console.log(path.parse(path.join(__dirname, "cache.js")));
console.log(path.sep);