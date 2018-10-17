let evt = require('./readFile');

let reader = new fileReader.Reader();

reader.readDataFile('file.js', function (responce) {
    console.log(responce)
});