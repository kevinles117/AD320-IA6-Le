var fs = require('fs');
var buf = process.argv[2];

fs.readFile(buf, function (err, fileContents) {
  var countNewLines = (fileContents.toString()).split('\n').length - 1;
  console.log(countNewLines);
})
