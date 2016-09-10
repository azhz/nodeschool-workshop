var fs = require('fs');

var fileData = fs.readFileSync(process.argv[2]);
var fileDataAsString = fileData.toString();
console.log(fileDataAsString.split('\n').length - 1);
